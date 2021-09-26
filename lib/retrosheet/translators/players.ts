import { Lineup as RetrosheetLineup, Player } from 'retrosheet-parse'

import { BatterEntry, Lineup } from '../../Scorekeepr/types'
import { getPosition } from '../guards'

export function toBatterEntry(player: Player): BatterEntry {
  return {
    inning: player.inningEntered,
    player: {
      name: player.name,
      number: undefined
    },
    position: getPosition(player.position)
  }
}

export function getBatters(lineup: RetrosheetLineup): Lineup {
  return lineup.map((lineupSpot) => lineupSpot.map(toBatterEntry))
}
