import { ActionConfig } from '../retrosheet.types'
import * as resultGenerators from '../../resultGenerators'

import { getAction, getBases } from '../utilities'

function getHitType(hit: string) {
  if (hit === 'S') return 1
  if (hit === 'D' || hit === 'DGR') return 2
  if (hit === 'T') return 3
  if (hit === 'HR') return 4

  throw new Error('Attempted to record an invalid hit')
}

const hit: ActionConfig = {
  actionType: 'batter',
  regexp: /^(HR)|^([SDT])\d+|^(DGR)/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, hrGroup, hitGroup, grdGroup] = match
    const hitType = getHitType(hrGroup || hitGroup || grdGroup)
    return getAction({
      result: resultGenerators.hit(hitType),
      bases: getBases({
        B: {
          isAtBatResult: true,
          endBase: hitType,
          result: undefined
        }
      })
    })
  }
}

const hitBatter: ActionConfig = {
  actionType: 'batter',
  regexp: /^HP/,
  handler: () => {
    return getAction({
      result: resultGenerators.pitcherResult('HBP'),
      bases: getBases({
        B: {
          result: undefined,
          isAtBatResult: true,
          endBase: 1
        }
      })
    })
  }
}

const walk: ActionConfig = {
  actionType: 'batter',
  regexp: /^(I)?W/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, intentionalGroup] = match
    const isIntentional = intentionalGroup === 'I'
    return getAction({
      result: isIntentional
        ? resultGenerators.pitcherResult('IBB')
        : resultGenerators.pitcherResult('BB'),
      bases: getBases({
        B: {
          result: undefined,
          isAtBatResult: true,
          endBase: 1
        }
      })
    })
  }
}

const error: ActionConfig = {
  actionType: 'batter',
  regexp: /^C?\/?E(\d)/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, fielder] = match
    return getAction({
      result: resultGenerators.error(Number(fielder))
    })
  }
}

export const atBatConfigs = [hit, hitBatter, walk, error]
