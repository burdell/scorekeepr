import { Bases, GameEvent } from '../types'

export function getGameEvent(overrides: Partial<GameEvent> = {}): GameEvent {
  return {
    result: undefined,
    isOut: false,
    pitches: undefined,
    isSacrifice: false,
    bases: getBases(),
    ...overrides
  }
}

export function getBases(overrides: Partial<Bases> = {}) {
  return {
    B: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
    ...overrides
  }
}
