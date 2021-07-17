import { ActionConfig } from '../retrosheet.types'

import { getGameEvent, getBases } from '../../generators/gameEvents'
import {
  getBase,
  getNextBase,
  getPreviousBase,
  getAdvanceableBase,
  getBaseFromString,
  getStartableBase
} from '../guards'
import * as actions from '../../generators/actions'
import { Bases } from '../../types'
import { getPutoutPositions } from '../outs'
import { getAllBaserunnerAction } from '../guards'
import { start } from 'repl'

const caughtStealing: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^(PO)?CS([234H])\((\dE?!?\d*)!?\)/,
  handler: (atBat, match) => {
    const [fullMatch, isPickoff, baseString, putout] = match
    const base = getBase(baseString)
    return getGameEvent({
      isOut: true,
      bases: getBases({
        [getPreviousBase(base)]: {
          endBase: base,
          result: actions.caughtStealing(getPutoutPositions(putout)),
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
        result: actions.stolenBase(base)
      }
    })

    return getGameEvent({
      bases
    })
  }
}

const defensiveIndifference: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^DI/,
  handler: (atBat, match, baserunnerMovements) => {
    const bases = getBases()
    baserunnerMovements.forEach(({ startBase: rawStartBase, endBase }) => {
      const startBase = getStartableBase(rawStartBase)

      bases[startBase] = {
        endBase: endBase,
        result: actions.defensiveIndifference()
      }
    })

    return getGameEvent({
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

      return getGameEvent({
        isOut: false,
        bases: getBases({
          [base]: {
            endBase: movement ? movement.endBase : getNextBase(base),
            result: actions.error(Number(putoutString.split('E').pop()))
          }
        })
      })
    } else {
      const pickOff = getPutoutPositions(putoutString)
      return getGameEvent({
        isOut: true,
        bases: getBases({
          [base]: {
            endBase: base,
            onBasePutout: actions.pickOff(pickOff),
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
      const startBase = getStartableBase(movement.startBase)

      acc[startBase] = {
        endBase: movement.endBase,
        result
      }
      return acc
    }, {})

    return getGameEvent({
      bases: getBases(bases)
    })
  }
}

const advancementOut: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^OA/,
  handler: () => {
    // this is handled entirely through base movements, so just return an empty action here
    return getGameEvent()
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
