import { parseGames, GameplayEvent, Game } from 'retrosheet-parse'

import { parseAction } from './retrosheet'
import { getTeam, getStadium, getLineup } from './retrosheet/translators'
import { Scorekeeper } from './Scorekeeper'
import { getLineupMap, getLineupSpot, getPitchers } from './utils/lineup'
import { alertSuccess, alertGameGenerated } from './utils/alerts'
import { formatStartTime } from './utils/time'

function generateGameplay({
  game,
  scorekeeper,
  team
}: {
  game: Game
  scorekeeper: Scorekeeper
  team: 'home' | 'visiting'
}) {
  const gameplayEvents = game.play[team]
  const lineup = game.lineup[team]
  const lineupMap = getLineupMap(lineup)

  function getActionInfo(gameplayEvent: GameplayEvent) {
    const gameEvent = parseAction(gameplayEvent)
    if (!gameEvent || gameplayEvent.type !== 'at-bat') return null

    const lineupSpot = getLineupSpot(gameplayEvent, lineupMap)
    if (lineupSpot < 0) return null

    return { gameEvent, lineupSpot }
  }

  gameplayEvents.forEach((events, inningNumber) => {
    events.forEach((event) => {
      const action = getActionInfo(event)

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

export async function getRetrosheetScorekeepers(
  filename: string
): Promise<Scorekeeper[]> {
  const gameList = await parseGames(filename)
  const scorekeepers: Scorekeeper[] = []

  gameList.forEach((game) => {
    const { info, lineup, play, data } = game

    const scorekeeper = new Scorekeeper({
      date: info.date,
      homeTeam: getTeam(info.hometeam),
      visitingTeam: getTeam(info.visteam),
      location: getStadium(info.site).fullName,
      startTime: formatStartTime(info.starttime),
      id: game.id
    })

    scorekeeper.setLineups({
      home: getLineup(lineup.home),
      visiting: getLineup(lineup.visiting),
      homePitchers: getPitchers(lineup.home, game.data.er),
      visitingPitchers: getPitchers(lineup.visiting, game.data.er)
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
