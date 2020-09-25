import { getRetrosheetScorekeepers } from '../../lib/index'
import { sourceFolder } from '../outputFolders'
import { GameOutput } from '../../lib/types'
import { Scorekeeper } from '../../lib/Scorekeeper'
import { ListGame, BuildConfig } from '../build.types'

export function convertToGameOutput(scorekeeper: Scorekeeper): GameOutput {
  return {
    id: scorekeeper.gameInfo.id,
    lineups: {
      home: scorekeeper.lineups.home,
      visiting: scorekeeper.lineups.visiting
    },
    pitchers: {
      home: scorekeeper.lineups.homePitchers,
      visiting: scorekeeper.lineups.visitingPitchers
    },
    gameplay: scorekeeper.gameplay,
    gameInfo: scorekeeper.gameInfo,
    stats: scorekeeper.stats
  }
}

export function convertToListGame(
  { gameInfo, stats }: GameOutput,
  config: BuildConfig
): ListGame {
  return {
    date: gameInfo.date,
    homeTeam: gameInfo.homeTeam.fullName,
    visitingTeam: gameInfo.visitingTeam.fullName,
    id: gameInfo.id,
    gameDescription: config.gameDescriptions[gameInfo.id] || '',
    location: gameInfo.location,
    homeScore: stats.home.runs,
    visitingScore: stats.visiting.runs,
    matchup: `${gameInfo.visitingTeam.abbreviation}-${gameInfo.homeTeam.abbreviation}`
  }
}

export async function generateGames(retrosheetFiles: string[]) {
  const gamePromises = retrosheetFiles.map((file) => {
    try {
      return getRetrosheetScorekeepers(`${sourceFolder}/${file}`)
    } catch (e) {
      console.error(`Unable to generate Scorebook files: ${e.message}`)
      return []
    }
  })

  const fileResults = await Promise.all(gamePromises)
  let games: GameOutput[] = []
  fileResults.forEach((fileResult) => {
    games = games.concat(fileResult.map(convertToGameOutput))
  })
  return games
}
