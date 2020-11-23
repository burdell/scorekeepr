import * as resultGenerators from './result'

import { getGameEvent, getBases } from './'
import { Base, PitcherResultString } from '../../types'

export function hit(base: Base) {
  return getGameEvent({
    result: resultGenerators.hit(base),
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
    result: resultGenerators.pitcherResult(pitcherResultString),
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
    result: resultGenerators.fieldersChoice(base),
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
    result: resultGenerators.putout(putoutPositions),
    isOut: true
  })
}

export function error(fielder: number, endBase: Base) {
  return getGameEvent({
    result: resultGenerators.error(fielder),
    bases: getBases({
      B: {
        result: undefined,
        isAtBatResult: true,
        endBase
      }
    })
  })
}
