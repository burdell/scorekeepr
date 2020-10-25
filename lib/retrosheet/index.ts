import { GameplayEvent, AtBat } from 'retrosheet-parse'

import { GameEvent, EventBaseResult } from '../types'

import { getAction, Action } from './getAction'
import { getPitchData } from './pitches'
import { getBaserunnerMovements, BaserunnerMovements } from './baseMovements'
import { getPutoutPositions } from './utilities'
import * as resultGenerators from './generators/result'

function handleAction(
  gameplayEvent: AtBat,
  action: Action | undefined,
  baserunnerMovements: BaserunnerMovements
) {
  let event: GameEvent | undefined = undefined

  if (!action) return event

  switch (action.actionType) {
    case 'batter':
      event = handleBatterAction(action, gameplayEvent, baserunnerMovements)
      break
    case 'baserunner':
      event = handleRunnerAction(action, gameplayEvent, baserunnerMovements)
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
  const baserunnerMovements = getBaserunnerMovements(gameplayEvent.result)
  const event = handleAction(gameplayEvent, action, baserunnerMovements)
  if (!event) {
    return
  }

  baserunnerMovements.forEach(
    ({ startBase, endBase, isOut, result, errorPosition }) => {
      if (startBase === 4 || !event) return
      const existingBase = event.bases[startBase]

      const baseMovement: EventBaseResult = {
        endBase,
        result: undefined,
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
    const extraEvent = handleAction(
      gameplayEvent,
      extraAction,
      baserunnerMovements
    )

    if (extraEvent && extraEvent.bases) {
      const batterExtraBases = extraEvent.bases.B
      event.bases = {
        B: batterExtraBases
          ? { ...batterExtraBases, isAtBatResult: true }
          : event.bases.B,
        1: extraEvent.bases[1] || event.bases[1],
        2: extraEvent.bases[2] || event.bases[2],
        3: extraEvent.bases[3] || event.bases[3]
      }
    }
  }

  if (event.bases.B && !event.bases.B.isOut) {
    event.isOut = false
  }

  return event
}

function handleBatterAction(
  action: Action,
  gameplayEvent: AtBat,
  baserunnerMovements: BaserunnerMovements
) {
  const parsedEvent = action.handler(
    gameplayEvent,
    action.match,
    baserunnerMovements
  )
  if (parsedEvent) {
    parsedEvent.pitches = getPitchData(gameplayEvent)
  }

  return parsedEvent
}

function handleRunnerAction(
  action: Action,
  gameplayEvent: AtBat,
  baserunnerMovements: BaserunnerMovements
) {
  const parsedEvent = action.handler(
    gameplayEvent,
    action.match,
    baserunnerMovements
  )

  return parsedEvent
}
