import { GameplayEvent, AtBat } from 'retrosheet-parse'

import { RetrosheetEvent, RetrosheetBaseResult, Bases } from '../types'

import { getAction, Action } from './getAction'
import { getPitchData } from './pitches'
import { getBaserunnerMovements } from './baseMovements'
import { getPutoutPositions } from './utilities'
import * as resultGenerators from './generators/result'

function handleAction(gameplayEvent: AtBat, action: Action | undefined) {
  let event: RetrosheetEvent | undefined = undefined

  if (!action) return event

  switch (action.actionType) {
    case 'batter':
      event = handleBatterAction(action, gameplayEvent)
      break
    case 'baserunner':
      event = handleRunnerAction(action, gameplayEvent)
      break
  }

  return event
}

function getAdditionalBaseResult(
  errorPosition: number | undefined,
  putoutResult: string
) {
  if (errorPosition) {
    return resultGenerators.error(errorPosition)
  }

  if (putoutResult) {
    return resultGenerators.putout(getPutoutPositions(putoutResult))
  }

  return undefined
}

export function parseAction(gameplayEvent: GameplayEvent) {
  if (gameplayEvent.type === 'comment' || gameplayEvent.result === 'NP') {
    return
  }
  const action = getAction(gameplayEvent.result)

  if (!action) {
    console.log(`Unhandled action: ${gameplayEvent.result}`)
    return
  }

  const event = handleAction(gameplayEvent, action)
  if (!event) {
    console.log(`Unhandled event: `, gameplayEvent.result)
    return
  }

  getBaserunnerMovements(gameplayEvent.result).forEach(
    ({ startBase, endBase, isOut, result, errorPosition }) => {
      if (startBase === 4 || !event) return

      const existingBase = event.bases[startBase]

      const baseMovement: RetrosheetBaseResult = {
        endBase,
        result: event.allBasesAdvanceResult || undefined,
        ...(existingBase || {})
      }

      if (existingBase && endBase !== existingBase.endBase) {
        baseMovement.additionalBases = [
          {
            base: endBase,
            result: getAdditionalBaseResult(errorPosition, result)
          }
        ]
      } else if (errorPosition) {
        baseMovement.result = resultGenerators.error(errorPosition)
      } else if (isOut) {
        baseMovement.isOut = true
        const putOut = resultGenerators.putout(getPutoutPositions(result))
        if (startBase === endBase) {
          baseMovement.onBasePutout = putOut
        } else {
          baseMovement.result = putOut
        }
      }

      event.bases[startBase] = baseMovement
    }
  )

  const extraEvents = gameplayEvent.result.match(/\+(.+)/)
  if (extraEvents) {
    const [fullMatch, eventMatch] = extraEvents
    const extraAction = getAction(eventMatch)
    const extraEvent = handleAction(gameplayEvent, extraAction)

    if (extraEvent && extraEvent.bases) {
      event.bases = {
        B: extraEvent.bases.B || event.bases.B,
        1: extraEvent.bases[1] || event.bases[1],
        2: extraEvent.bases[2] || event.bases[3],
        3: extraEvent.bases[3] || event.bases[3]
      }
    }
  }

  delete event.allBasesAdvanceResult
  return event
}

function handleBatterAction(action: Action, gameplayEvent: AtBat) {
  const parsedEvent = action.handler(gameplayEvent, action.match)
  if (parsedEvent) {
    parsedEvent.pitches = getPitchData(gameplayEvent)
  }

  return parsedEvent
}

function handleRunnerAction(action: Action, gameplayEvent: AtBat) {
  const parsedEvent = action.handler(gameplayEvent, action.match)

  return parsedEvent
}
