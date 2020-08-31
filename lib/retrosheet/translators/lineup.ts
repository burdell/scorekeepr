import { Lineup as RetrosheetLineup, Player } from 'retrosheet-parse'

import { LineupEntry, Lineup } from '../../types'

export function toLineupEntry(player: Player): LineupEntry {
  return {
    inning: player.inningEntered,
    player: {
      name: player.name,
      number: undefined
    },
    position: player.position
  }
}

export function getLineup(lineup: RetrosheetLineup): Lineup {
  return lineup.map((lineupSpot) => lineupSpot.map(toLineupEntry))
}
