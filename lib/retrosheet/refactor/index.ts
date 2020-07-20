import { GameplayEvent, parseGames } from 'retrosheet-parse'

import { getAction } from './getAction'

type RetroSheetAtBat = {
  isOut: boolean
  balls: number
  strikes: number
  pitchCount: number
  isSacrifice: boolean
  results: {
    B: {}
    '1': {}
    '2': {}
    '3': {}
  }
}

export function parseAction(gameplayEvent: GameplayEvent) {
  if (gameplayEvent.type === 'comment' || gameplayEvent.result === 'NP') {
    return
  }

  return getAction(gameplayEvent.result)
}

export async function handler(filename: string) {
  console.log(filename)
  const gameList = await parseGames(filename)
  const game = gameList[0]

  if (!game) return {}

  game.play.visiting.forEach((inning) => {
    inning.forEach(parseAction)
  })

  return {}
}
