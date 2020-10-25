import { ActionConfig, Action } from '../retrosheet.types'
import * as actionGenerators from '../generators/action'
import * as resultGenerators from '../generators/result'
import * as guards from '../guards'

import { getAction, getBases } from '../utilities'

const hit: ActionConfig = {
  actionType: 'batter',
  regexp: /^(HR)|^([SDT])\d*!?\/|^(DGR)|^([SDT])\d$/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, hrGroup, hitGroup, grdGroup, yetAnotherHitGroup] = match
    const hitType = guards.getHitType(
      hrGroup || hitGroup || grdGroup || yetAnotherHitGroup
    )
    return actionGenerators.hit(hitType)
  }
}

// some old retrosheet files have # at the end of lines. idk why
// they also often times don't specify where the hit was
// the regex above is getting nasty, so just splitting this into another one since this one is fairly simple
const oldHits: ActionConfig = {
  actionType: 'batter',
  regexp: /^([SDT])\d*(\..+)?#*$/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, hitGroup] = match
    const hitType = guards.getHitType(hitGroup)
    return actionGenerators.hit(hitType)
  }
}

const hitBatter: ActionConfig = {
  actionType: 'batter',
  regexp: /^HP/,
  handler: () => {
    return actionGenerators.pitcherResult('HB')
  }
}

const walk: ActionConfig = {
  actionType: 'batter',
  regexp: /^(I)?W[^P]|^(I)?W$|^(I)/,
  handler: (gameplayEvent, match) => {
    // WHY ARE THERE SO MANY WAYS TO RECORD A WALK
    const [
      fullMatch,
      firstIntentional,
      secondIntentional,
      thirdIntentional
    ] = match
    const isIntentional =
      firstIntentional === 'I' ||
      secondIntentional === 'I' ||
      thirdIntentional === 'I'
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

// you see this in very old games
const unknown: ActionConfig = {
  actionType: 'batter',
  regexp: /^99/,
  handler: () => {
    return getAction()
  }
}

export const atBatConfigs = [
  hit,
  oldHits,
  hitBatter,
  walk,
  error,
  fieldersChoice,
  foulTerritoryError,
  unknown
]
