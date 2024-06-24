import { GameEvent } from '../types'

export function getGameEventWithDefaults(
  overrides: Partial<GameEvent> = {}
): GameEvent {
  return {
    result: undefined,
    isOut: false,
    pitches: {
      balls: 0,
      pitchCount: 0,
      strikes: 0
    },
    isSacrifice: false,
    bases: {
      B: undefined,
      1: undefined,
      2: undefined,
      3: undefined
    },
    ...overrides
  }
}
