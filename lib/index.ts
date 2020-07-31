import { parseGames, GameplayEvent } from 'retrosheet-parse'

import { parseAction } from './retrosheet'
import { GameEvent } from './types'

type InningList = GameEvent[][]

function getInnings(gameplayEvents: GameplayEvent[][]) {
  const inningList: InningList = []

  gameplayEvents.forEach((events) => {
    const inning: GameEvent[] = []
    events.forEach((event) => {
      const gameplayEvent = parseAction(event)
      if (gameplayEvent) inning.push(gameplayEvent)
    })
    inningList.push(inning)
  })

  return inningList
}

export async function handler(filename: string) {
  const gameList = await parseGames(filename)
  const game = gameList[0]

  if (!game) {
    throw Error('NO GAME')
  }

  const parsedGame = {
    home: getInnings(game.play.home),
    visiting: getInnings(game.play.visiting)
  }

  return parsedGame
}
