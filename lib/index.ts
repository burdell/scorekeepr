import { parseGames } from 'retrosheet-parse'

import { parseAction } from './retrosheet'

export async function handler(filename: string) {
  const gameList = await parseGames(filename)
  const game = gameList[0]

  if (!game) return {}

  game.play.visiting.forEach((inning) => {
    inning.forEach(parseAction)
  })

  return {}
}
