import { parseGames, GameplayEvent, Game } from 'retrosheet-parse'

import { handleGameplayEvent } from './gameplayEvents'
import { getTeam, getStadium, getBatters } from './translators'
import { Scorekeepr } from '../Scorekeepr'
import { getLineupMap, getLineupSpot, getPitchers } from '../utils/lineup'
import { alertSuccess, alertGameGenerated } from '../utils/alerts'
import { formatStartTime } from '../utils/time'

export * from '../Scorekeepr/types'

export async function getRetrosheetScorekeepers(
  filename: string
): Promise<Scorekeepr[]> {
  const gameList = await parseGames(filename)
  const scorekeepers: Scorekeepr[] = []

  gameList.forEach((game) => {
    const { info, lineup, pitchers } = game

    const scorekeeper = new Scorekeepr({
      date: info.date,
      homeTeam: getTeam(info.hometeam),
      visitingTeam: getTeam(info.visteam),
      location: getStadium(info.site, info.date),
      startTime: formatStartTime(info.starttime),
      id: game.id,
      initialInningCount: game.play.visiting.length
    })

    scorekeeper.setPlayers({
      home: {
        batters: getBatters(lineup.home),
        pitchers: getPitchers(pitchers.home, game.data.er)
      },
      visiting: {
        batters: getBatters(lineup.visiting),
        pitchers: getPitchers(pitchers.visiting, game.data.er)
      }
    })

    try {
      generateGameplay({ game, team: 'home', scorekeeper })
      generateGameplay({ game, team: 'visiting', scorekeeper })
    } catch (thrownError) {
      const error = thrownError as Error
      console.error('Gameplay error: ', scorekeeper.gameInfo.id, error.message)
      return
    }

    alertSuccess(game, scorekeeper)
    scorekeepers.push(scorekeeper)
  })

  alertGameGenerated(scorekeepers, filename)
  return scorekeepers
}

function getGameEventAndLineupSpot(
  gameplayEvent: GameplayEvent,
  lineupMap: ReturnType<typeof getLineupMap>
) {
  const gameEvent = handleGameplayEvent(gameplayEvent)
  if (
    !gameEvent ||
    (gameplayEvent.type !== 'at-bat' &&
      gameplayEvent.type !== 'runner-adjustment')
  ) {
    return null
  }

  const lineupSpot = getLineupSpot(gameplayEvent, lineupMap)
  if (lineupSpot < 0) {
    return null
  }

  return { gameEvent, lineupSpot }
}

function generateGameplay({
  game,
  scorekeeper,
  team
}: {
  game: Game
  scorekeeper: Scorekeepr
  team: 'home' | 'visiting'
}) {
  const gameplayEventsList = game.play[team]
  const lineup = game.lineup[team]
  const lineupMap = getLineupMap(lineup)

  gameplayEventsList.forEach((gameplayEvents, inningNumber) => {
    gameplayEvents.forEach((gameplayEvent) => {
      const gameEventAndLineupSpot = getGameEventAndLineupSpot(
        gameplayEvent,
        lineupMap
      )

      if (!gameEventAndLineupSpot) {
        return
      }

      const { gameEvent, lineupSpot } = gameEventAndLineupSpot

      scorekeeper.handleGameEvent({
        event: gameEvent,
        inning: inningNumber,
        lineupSpot: lineupSpot,
        team
      })
    })
  })
}
