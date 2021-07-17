import * as gameEvents from './actions'

import { Base, PitcherResultString, GameEvent, Bases } from '../types'
import { getGameEvent, getBases } from './utils'

export function hit(base: Base) {
  return getGameEvent({
    result: gameEvents.hit(base),
    bases: getBases({
      B: {
        result: undefined,
        isAtBatResult: true,
        endBase: base
      }
    })
  })
}

export function pitcherResult(pitcherResultString: PitcherResultString) {
  return getGameEvent({
    result: gameEvents.pitcherResult(pitcherResultString),
    bases: getBases({
      B: {
        result: undefined,
        isAtBatResult: true,
        endBase: 1
      }
    })
  })
}

export function fieldersChoice(base: Base = 1) {
  return getGameEvent({
    result: gameEvents.fieldersChoice(base),
    bases: getBases({
      B: {
        result: undefined,
        isAtBatResult: true,
        endBase: 1
      }
    })
  })
}

export function putout(putoutPositions: number[]) {
  return getGameEvent({
    result: gameEvents.putout(putoutPositions),
    isOut: true
  })
}

export function error(fielder: number, endBase: Base) {
  return getGameEvent({
    result: gameEvents.error(fielder),
    bases: getBases({
      B: {
        result: undefined,
        isAtBatResult: true,
        endBase
      }
    })
  })
}

export function runnerAdjustment(base: Base) {
  return getGameEvent({
    result: gameEvents.runnerAdjustment(base),
    bases: getBases({ B: { endBase: base, isAtBatResult: true } })
  })
}
