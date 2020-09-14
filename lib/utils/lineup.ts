import { Lineup, GameplayEvent } from 'retrosheet-parse'
import { PitcherEntry } from '../types'

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
  event: GameplayEvent,
  lineupMap: ReturnType<typeof getLineupMap>
) {
  if (event.type !== 'at-bat') return -1

  const lineupSpot = lineupMap[event.playerId]
  return lineupSpot >= 0 ? lineupSpot : -1
}

export function getPitchers(
  lineup: Lineup,
  pitchingStats: { [playerId: string]: number }
): PitcherEntry[] {
  let pitchers: { [playerId: string]: PitcherEntry } = {}

  const nonBattingPitchers = lineup[-1] || []
  nonBattingPitchers.forEach((p) => {
    if (pitchers[p.id]) return
    pitchers[p.id] = { player: p, stats: { er: pitchingStats[p.id] || 0 } }
  })

  lineup.forEach((lineupSpot) => {
    lineupSpot
      .filter((p) => p.position === 1)
      .forEach((p) => {
        if (pitchers[p.id]) return
        pitchers[p.id] = { player: p, stats: { er: pitchingStats[p.id] || 0 } }
      })
  })

  return Object.values(pitchers).sort((p1, p2) => {
    if (p1.player.type === 'start') return -1

    return p1.player.inningEntered - p2.player.inningEntered
  })
}
