import * as resultGenerators from './result'

import { getAction, getBases } from '../utilities'
import { Base, PitcherResultString } from '../../types'

export function hit(base: Base) {
  return getAction({
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
  return getAction({
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
  return getAction({
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
