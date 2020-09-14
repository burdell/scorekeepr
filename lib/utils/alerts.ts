import { Game } from 'retrosheet-parse'
import { Scorekeeper } from '../Scorekeeper'

export function alertSuccess(game: Game, scorekeeper: Scorekeeper) {
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

export function alertGameGenerated(scorekeepers: unknown[], filename: string) {
  console.log(
    `💃 ${scorekeepers.length} games generated from ${filename
      .split('/')
      .pop()}`
  )
}
