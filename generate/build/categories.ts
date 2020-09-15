import { GameOutput } from '../../lib/types'
import {
  ListGame,
  GeneratedConfig,
  GameList,
  CategoryBuildConfig
} from '../build.types'
import { generateGames, convertToListGame } from '.'

async function generateConfig(
  config: CategoryBuildConfig
): Promise<GeneratedConfig> {
  const generatedGames = await generateGames(config.retrosheetFiles)

  return {
    category: {
      name: config.name,
      description: config.description,
      listId: config.urlSlug,
      type: 'category'
    },
    categoryGames: generatedGames.map((game) =>
      convertToListGame(game, config)
    ),
    games: generatedGames
  }
}

export async function buildGameList(configList: CategoryBuildConfig[]) {
  const configs = await Promise.all(configList.map(generateConfig))

  const categories: GameList[] = []
  const categoryGames: {
    categoryName: string
    categoryUrl: string
    games: ListGame[]
  }[] = []
  let fullGames: GameOutput[] = []

  configs.forEach((config) => {
    fullGames = fullGames.concat(config.games)
    categories.push(config.category)
    categoryGames.push({
      categoryUrl: config.category.listId,
      categoryName: config.category.name,
      games: config.categoryGames
    })
  })

  return { categories, fullGames, categoryGames }
}
