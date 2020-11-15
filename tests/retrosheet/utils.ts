import { AtBat, GameplayEvent } from 'retrosheet-parse'

import { parseAction as realParseAction } from '../../lib/retrosheet'
import { GameEvent } from '../../lib/types'

export function getEventWithDefaults(
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

export function getResult(result: string) {
  return parseAction(getAtBat({ result }))
}

export function getAtBat(overrides: Partial<AtBat>): AtBat {
  return {
    type: 'at-bat',
    count: '',
    pitchSequence: '',
    result: '',
    playerId: '',
    ...overrides
  }
}

export function parseAction(gameplayEvent: GameplayEvent) {
  return requireExistence(realParseAction(gameplayEvent, { log: () => null }))
}

function requireExistence<T>(thing: T) {
  if (!thing) throw new Error('The thing does not exist 🧐')

  return thing
}
