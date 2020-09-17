import { regenOutputFolder, writeToFile } from './utilities/files'
import {
  gameFolder,
  outputFolder,
  seasonFolder,
  listFolder
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

  buildConfig.forEach((config) => {
    if (config.type === 'category') gameListConfigs.push(config)
    if (config.type === 'series') seriesConfigs.push(config)
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
        listFolder,
        `${categoryGameList.categoryUrl}.json`
      )
    })
  }

  if (seriesConfigs.length) {
    const series = await buildSeriesList(seriesConfigs)
    gameLists = gameLists.concat(series.seasonGameLists)
    fullGames = fullGames.concat(series.fullGames)

    series.series.forEach((s) => {
      writeToFile(s, listFolder, `${s.urlSlug}.json`)
    })
    series.seriesGames.forEach((sg) => {
      writeToFile(sg.games, seasonFolder, `${sg.urlSlug}.json`)
    })
  }

  writeToFile(gameLists, outputFolder, 'lists.json')
  fullGames.forEach((g) => writeToFile(g, gameFolder, `${g.id}.json`))
}

buildOutput()
