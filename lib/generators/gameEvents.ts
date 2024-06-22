import * as gameActions from './gameEventResults'

import { Base, PitcherResultString } from '../Scorekeepr/types'
import { getGameEvent, getBases } from './utils'

export function hit(base: Base) {
  return getGameEvent({
    result: gameActions.hit(base),
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
    result: gameActions.pitcherResult(pitcherResultString),
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
    result: gameActions.fieldersChoice(base),
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
    result: gameActions.putout(putoutPositions),
    isOut: true
  })
}

export function error(fielder: number, endBase: Base) {
  return getGameEvent({
    result: gameActions.error(fielder),
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
    result: gameActions.runnerAdjustment(base),
    bases: getBases({ B: { endBase: base, isAtBatResult: true } })
  })
}
