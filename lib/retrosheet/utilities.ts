import {
  GameEvent,
  Base,
  BaseResult,
  BaseResultResult,
  Bases,
  AdvanceableBase,
  StartableBase
} from '../types'

export function getAction(overrides: Partial<GameEvent> = {}): GameEvent {
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

export function getPutoutPositions(putout: string) {
  return putout
    .split('')
    .map(Number)
    .filter((p) => !!p)
}
