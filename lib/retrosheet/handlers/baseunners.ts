import { ActionConfig } from '../retrosheet.types'

import {
  getAction,
  getBase,
  getBases,
  getNextBase,
  getPreviousBase,
  getAdvanceableBase
} from '../utilities'
import * as resultGenerators from '../generators/result'
import { getBaserunnerMovements } from '../baseMovements'
import { Bases } from '../../types'
import { getPutoutPositions } from '../utilities'

const caughtStealing: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^(PO)?CS([23H])\((\dE?!?\d*)!?\)/,
  handler: (atBat, match) => {
    const [fullMatch, isPickoff, baseString, putout] = match
    const base = getBase(baseString)
    return getAction({
      isOut: true,
      bases: getBases({
        [getPreviousBase(base)]: {
          endBase: base,
          result: resultGenerators.caughtStealing(getPutoutPositions(putout)),
          isOut: true
        }
      })
    })
  }
}

const stolenBase: ActionConfig = {
  actionType: 'baserunner',
  regexp: /SB([23H])/,
  handler: (atBat, match) => {
    const [fullMatch, baseStolen] = match
    const base = getAdvanceableBase(baseStolen)
    return getAction({
      bases: getBases({
        [getPreviousBase(base)]: {
          endBase: base,
          result: resultGenerators.stolenBase(base)
        }
      })
    })
  }
}

const defensiveIndifference: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^DI/,
  handler: (atBat) => {
    const bases = getBaserunnerMovements(atBat.result).reduce<Bases>(
      (acc, movement) => {
        if (movement.startBase === 4) return acc

        acc[movement.startBase] = {
          endBase: movement.endBase,
          result: resultGenerators.defensiveIndifference()
        }
        return acc
      },
      getBases()
    )
    return getAction({
      bases
    })
  }
}

const pickOff: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^PO([123])\((E?\d+)(\/TH)?\)/,
  handler: (atBat, match, baserunnerMovements) => {
    const [_, rawBase, putoutString] = match
    const base = getBase(rawBase)

    if (putoutString.indexOf('E') >= 0) {
      const movement = baserunnerMovements.find((m) => m.startBase === base)

      return getAction({
        isOut: false,
        bases: getBases({
          [base]: {
            endBase: movement ? movement.endBase : getNextBase(base),
            result: resultGenerators.error(
              Number(putoutString.split('E').pop())
            )
          }
        })
      })
    } else {
      const pickOff = getPutoutPositions(putoutString)
      return getAction({
        isOut: true,
        bases: getBases({
          [base]: {
            endBase: base,
            onBasePutout: resultGenerators.pickOff(pickOff),
            isOut: true
          }
        })
      })
    }
  }
}

const allBaseMovement: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^(WP|PB|BK)/,
  handler: (atBat, match, baseMovements) => {
    const [_, action] = match

    function getResultFn() {
      if (action === 'PB') return resultGenerators.passedBall
      else if (action === 'WP') return resultGenerators.wildPitch
      else if (action === 'BK') return resultGenerators.balk

      return () => undefined
    }
    const resultFn = getResultFn()

    const bases = baseMovements.reduce<Partial<Bases>>((acc, movement) => {
      if (movement.startBase === 4) return acc

      acc[movement.startBase] = {
        endBase: movement.endBase,
        result: resultFn()
      }
      return acc
    }, {})

    return getAction({
      bases: getBases(bases)
    })
  }
}

const advancementOut: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^OA/,
  handler: () => {
    // this is handled entirely through base movements, so just return an empty action here
    return getAction()
  }
}

export const baserunnerConfigs = [
  caughtStealing,
  pickOff,
  stolenBase,
  allBaseMovement,
  defensiveIndifference,
  advancementOut
]
