import { parseGames, GameplayEvent, Lineup, Game } from 'retrosheet-parse'

import { parseAction } from './retrosheet'
import { getTeam, getStadium, getLineup } from './retrosheet/translators'
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
    const gameEvent = parseAction(gameplayEvent)
    if (!gameEvent || gameplayEvent.type !== 'at-bat') return null

    const lineupSpot = getLineupSpot(gameplayEvent)
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

function alertSuccess(game: Game, scorekeeper: Scorekeeper) {
  console.log(`⚾  Created ${scorekeeper.gameInfo.id}`)
  if (!scorekeeper.gameInfo.homeTeam) {
    console.warn(`  ⚠️ Home team not translated: ${game.info.hometeam}`)
  }
  if (!scorekeeper.gameInfo.visitingTeam) {
    console.warn(`  ⚠️ Visiting team not translated: ${game.info.visteam}`)
  }
  if (!scorekeeper.gameInfo.location) {
    console.warn(`  ⚠️ Stadium not translated: ${game.info.site}`)
  }
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
      homeTeam: getTeam(info.hometeam),
      visitingTeam: getTeam(info.visteam),
      location: getStadium(info.site).fullName,
      startTime: info.starttime,
      id: game.id
    })

    scorekeeper.setLineups({
      home: getLineup(lineup.home),
      visiting: getLineup(lineup.visiting)
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

  console.log(
    `💃 ${scorekeepers.length} games generated from ${filename
      .split('/')
      .pop()}`
  )
  return scorekeepers
}
