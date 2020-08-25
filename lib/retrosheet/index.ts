import { GameplayEvent, AtBat } from 'retrosheet-parse'

import { RetrosheetEvent } from '../types'

import { getAction, Action } from './getAction'
import { getPitchData } from './pitches'
import { getBaserunnerMovements } from './baseMovements'
import { getPutoutPositions } from './utilities'
import * as resultGenerators from '../resultGenerators'

export function parseAction(gameplayEvent: GameplayEvent) {
  if (gameplayEvent.type === 'comment' || gameplayEvent.result === 'NP') {
    return
  }
  const action = getAction(gameplayEvent.result)

  if (!action) {
    console.log(`Unhandled actiont: ${gameplayEvent.result}`)
    return
  }

  let event: RetrosheetEvent | undefined = undefined
  switch (action.actionType) {
    case 'batter':
      event = handleBatterAction(action, gameplayEvent)
      break
    case 'baserunner':
      event = handleRunnerAction(action, gameplayEvent)
      break
  }

  if (!event) {
    console.log(`Unhandled event: `, gameplayEvent.result)
    return
  }

  getBaserunnerMovements(gameplayEvent.result).forEach(
    ({ startBase, endBase, isOut, isAdvancement, result }) => {
      if (startBase === 4 || !event) return

      const base = event.bases[startBase]
      if (base) return

      event.bases[startBase] = {
        endBase,
        result: isOut
          ? resultGenerators.putout(getPutoutPositions(result))
          : undefined
      }
    }
  )

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
