import { regenOutputFolder, writeToFile } from './utilities/files'
import {
  gameFolder,
  outputFolder,
  seriesFolder,
  categoriesFolder,
  seriesListsFolder,
  seriesGroupFolder
} from './outputFolders'
import { buildConfig } from './config'
import { buildGameList } from './build/categories'
import { buildSeriesList } from './build/series'
import { GameList, CategoryBuildConfig, SeriesBuildConfig } from './build.types'
import { GameOutput } from '../lib/types'

async function buildOutput() {
  regenOutputFolder()

  let gameLists: GameList[] = []
  let fullGames: GameOutput[] = []
  const gameListConfigs: CategoryBuildConfig[] = []
  const seriesConfigs: SeriesBuildConfig[] = []
  const seriesGroupConfig: SeriesBuildConfig[] = []

  buildConfig.forEach((config) => {
    if (config.type === 'category') gameListConfigs.push(config)
    if (config.type === 'series') seriesConfigs.push(config)
    if (config.type === 'series-group') seriesGroupConfig.push(config)
  })

  if (gameListConfigs.length) {
    const categoryLists = await buildGameList(gameListConfigs)
    gameLists = gameLists.concat(categoryLists.categories)
    fullGames = fullGames.concat(categoryLists.fullGames)

    categoryLists.categoryGames.forEach((categoryGameList) => {
      writeToFile(
        {
          categoryName: categoryGameList.categoryName,
          games: categoryGameList.games
        },
        categoriesFolder,
        `${categoryGameList.categoryUrl}.json`
      )
    })
  }

  if (seriesConfigs.length) {
    const series = await buildSeriesList(seriesConfigs)
    gameLists = gameLists.concat(series.seasonGameLists)
    fullGames = fullGames.concat(series.fullGames)

    series.series.forEach((s) => {
      writeToFile(s, seriesListsFolder, `${s.urlSlug}.json`)
    })
    series.seriesGames.forEach(({ games, seriesInfo, urlSlug }) => {
      writeToFile({ games, seriesInfo }, seriesFolder, `${urlSlug}.json`)
    })
  }

  if (seriesGroupConfig.length) {
    const series = await buildSeriesList(seriesGroupConfig)
    gameLists = gameLists.concat(series.seasonGameLists)
    fullGames = fullGames.concat(series.fullGames)

    series.series.forEach((seriesGroup) => {
      const seriesWithGames = seriesGroup.series.map((theSeries) => {
        return {
          seriesInfo: {
            seriesName: theSeries.seriesName,
            homeTeam: theSeries.homeTeam,
            visitingTeam: theSeries.visitingTeam,
            startDate: theSeries.startDate,
            endDate: theSeries.endDate
          },
          games: series.seriesGames
            .filter((g) => g.seriesInfo.seriesName === theSeries.seriesName)
            .map((g) => g.games)
            .pop()
        }
      })
      writeToFile(
        seriesWithGames,
        seriesGroupFolder,
        `${seriesGroup.urlSlug}.json`
      )
    })
  }

  writeToFile(gameLists, outputFolder, 'lists.json')
  fullGames.forEach((g) => writeToFile(g, gameFolder, `${g.id}.json`))
}

buildOutput()
