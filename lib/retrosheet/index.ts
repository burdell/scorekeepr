import { parseGames, GameplayEvent, Game } from 'retrosheet-parse'

import { handleEvent } from './event'
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
    } catch (e) {
      console.error('Gameplay error: ', scorekeeper.gameInfo.id, e.message)
      return
    }

    alertSuccess(game, scorekeeper)
    scorekeepers.push(scorekeeper)
  })

  alertGameGenerated(scorekeepers, filename)
  return scorekeepers
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
  const gameplayEvents = game.play[team]
  const lineup = game.lineup[team]
  const lineupMap = getLineupMap(lineup)

  gameplayEvents.forEach((events, inningNumber) => {
    events.forEach((event) => {
      const action = getActionInfo(event, lineupMap)

      if (!action) {
        return
      }

      scorekeeper.handleGameEvent({
        event: action.gameEvent,
        inning: inningNumber,
        lineupSpot: action.lineupSpot,
        team
      })
    })
  })
}

function getActionInfo(
  gameplayEvent: GameplayEvent,
  lineupMap: ReturnType<typeof getLineupMap>
) {
  const gameEvent = handleEvent(gameplayEvent)
  if (
    !gameEvent ||
    (gameplayEvent.type !== 'at-bat' &&
      gameplayEvent.type !== 'runner-adjustment')
  )
    return null

  const lineupSpot = getLineupSpot(gameplayEvent, lineupMap)
  if (lineupSpot < 0) return null

  return { gameEvent, lineupSpot }
}
