import { ActionConfig } from '../retrosheet.types'
import * as actionGenerators from '../generators/action'
import * as resultGenerators from '../generators/result'

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
  regexp: /^(HR)|^([SDT])\d*\/|^(DGR)/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, hrGroup, hitGroup, grdGroup] = match
    const hitType = getHitType(hrGroup || hitGroup || grdGroup)
    return actionGenerators.hit(hitType)
  }
}

const hitBatter: ActionConfig = {
  actionType: 'batter',
  regexp: /^HP/,
  handler: () => {
    return actionGenerators.pitcherResult('HBP')
  }
}

const walk: ActionConfig = {
  actionType: 'batter',
  regexp: /^(I)?W[^P]|^(I)?W$/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, firstIntentional, secondIntentional] = match
    const isIntentional = firstIntentional === 'I' || secondIntentional === 'I'
    return actionGenerators.pitcherResult(isIntentional ? 'IBB' : 'BB')
  }
}

const error: ActionConfig = {
  actionType: 'batter',
  regexp: /^\d?C?\/?E(\d)/,
  handler: (gameplayEvent, match, baserunnerMovements) => {
    const [fullMatch, fielder] = match
    const batterMovement = baserunnerMovements.find(
      (m) => m.startBase === 'B'
    ) || { endBase: 1 }
    return actionGenerators.error(Number(fielder), batterMovement.endBase)
  }
}

const fieldersChoice: ActionConfig = {
  actionType: 'batter',
  regexp: /^FC/,
  handler: () => {
    return actionGenerators.fieldersChoice()
  }
}

const foulTerritoryError: ActionConfig = {
  actionType: 'batter',
  regexp: /^FLE(\d)/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, position] = match
    return getAction({
      foulTerritoryError: resultGenerators.error(Number(position))
    })
  }
}

export const atBatConfigs = [
  hit,
  hitBatter,
  walk,
  error,
  fieldersChoice,
  foulTerritoryError
]
