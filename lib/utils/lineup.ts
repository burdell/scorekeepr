import { Lineup, GameplayEvent, Player } from 'retrosheet-parse'
import { PitcherEntry } from '../Scorekeepr/types'

export function getLineupMap(lineup: Lineup) {
  return lineup.reduce<{ [player: string]: number }>(
    (acc, lineupSpot, index) => {
      lineupSpot.forEach((player) => {
        if (!acc[player.name]) acc[player.id] = index
      })
      return acc
    },
    {}
  )
}

export function getLineupSpot(
  event: { playerId: string },
  lineupMap: ReturnType<typeof getLineupMap>
) {
  const lineupSpot = lineupMap[event.playerId]
  return lineupSpot >= 0 ? lineupSpot : -1
}

export function getPitchers(
  pitcherList: Player[],
  pitchingStats: { [playerId: string]: number }
): PitcherEntry[] {
  let pitchers: { [playerId: string]: PitcherEntry } = {}

  pitcherList.forEach((p) => {
    if (pitchers[p.id]) return
    pitchers[p.id] = {
      player: p,
      inning: p.inningEntered,
      type: p.type === 'start' ? 'starter' : 'reliever',
      stats: { er: pitchingStats[p.id] || 0 }
    }
  })

  return Object.values(pitchers).sort((p1, p2) => {
    if (p1.type === 'starter') return -1

    return p1.inning - p2.inning
  })
}
