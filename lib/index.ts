import { parseGames, GameplayEvent, Lineup, Game } from 'retrosheet-parse'

import { parseAction } from './retrosheet'
import { getTeam, getStadium, getLineup } from './retrosheet/translator'
import { RetrosheetEvent } from './types'
import { Scorekeeper } from './Scorekeeper'

function generateGameplay({
  game,
  scorekeeper,
  team
}: {
  game: Game
  scorekeeper: Scorekeeper
  team: 'home' | 'visiting'
}) {
  const lineup = game.lineup[team]
  const gameplayEvents = game.play[team]

  const lineupMap = lineup.reduce<{ [player: string]: number }>(
    (acc, lineupSpot, index) => {
      lineupSpot.forEach((player) => {
        if (!acc[player.name]) acc[player.id] = index
      })
      return acc
    },
    {}
  )

  function getLineupSpot(event: GameplayEvent) {
    if (event.type !== 'at-bat') return -1

    const lineupSpot = lineupMap[event.playerId]
    return lineupSpot >= 0 ? lineupSpot : -1
  }

  function getActionInfo(gameplayEvent: GameplayEvent) {
    const retrosheetEvent = parseAction(gameplayEvent)
    if (!retrosheetEvent) return null

    if (gameplayEvent.type !== 'at-bat') return null

    const lineupSpot = getLineupSpot(gameplayEvent)
    if (lineupSpot < 0) return null

    return { retrosheetEvent, lineupSpot }
  }

  gameplayEvents.forEach((events, inningNumber) => {
    events.forEach((event) => {
      const action = getActionInfo(event)

      if (!action) {
        return
      }

      scorekeeper.handleRetrosheetEvent({
        retrosheetEvent: action.retrosheetEvent,
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
    const { info, lineup, play } = game
    const scorekeeper = new Scorekeeper({
      date: info.date,
      homeTeam: getTeam(info.hometeam).fullName,
      visitingTeam: getTeam(info.visteam).fullName,
      location: getStadium(info.site).fullName,
      startTime: info.starttime,
      id: game.id
    })

    scorekeeper.setLineups({
      home: getLineup(lineup.home),
      visiting: getLineup(lineup.visiting)
    })

    generateGameplay({ game, team: 'home', scorekeeper })
    generateGameplay({ game, team: 'visiting', scorekeeper })

    scorekeepers.push(scorekeeper)
  })

  return scorekeepers
}
