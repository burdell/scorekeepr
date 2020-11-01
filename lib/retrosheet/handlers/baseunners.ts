import { ActionConfig } from '../retrosheet.types'

import { getAction, getBases } from '../utilities'
import {
  getBase,
  getNextBase,
  getPreviousBase,
  getAdvanceableBase,
  getBaseFromString
} from '../guards'
import * as resultGenerators from '../generators/result'
import { Bases } from '../../types'
import { getPutoutPositions } from '../utilities'
import { getAllBaserunnerAction } from '../guards'

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
  regexp: /SB([23H])/g,
  handler: (atBat, matches) => {
    const bases = getBases()
    matches.forEach((matchString) => {
      const base = getBaseFromString(matchString)
      const previousBase = getPreviousBase(base)

      bases[previousBase] = {
        endBase: base,
        result: resultGenerators.stolenBase(base)
      }
    })

    return getAction({
      bases
    })
  }
}

const defensiveIndifference: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^DI/,
  handler: (atBat, match, baserunnerMovements) => {
    const bases = getBases()
    baserunnerMovements.forEach(({ startBase, endBase }) => {
      if (startBase === 4) return

      bases[startBase] = {
        endBase: endBase,
        result: resultGenerators.defensiveIndifference()
      }
    })

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
    const result = getAllBaserunnerAction(action)

    const bases = baseMovements.reduce<Partial<Bases>>((acc, movement) => {
      if (movement.startBase === 4) return acc

      acc[movement.startBase] = {
        endBase: movement.endBase,
        result
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
