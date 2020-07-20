import { GameplayEvent, AtBat } from 'retrosheet-parse'

import { getAction, Action } from './getAction'
import { getPitchData } from './pitches'
import { GameEvent } from '../types'

export function parseAction(gameplayEvent: GameplayEvent) {
  if (gameplayEvent.type === 'comment' || gameplayEvent.result === 'NP') {
    return
  }

  const action = getAction(gameplayEvent.result)

  if (!action) {
    console.log(`Unhandled event: ${gameplayEvent.result}`)
    return
  }

  let event: GameEvent | undefined = undefined
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

function handleBatterAction(action: Action, gameplayEvent: AtBat) {
  const parsedEvent = action.handler(gameplayEvent, action.match)
  if (parsedEvent) {
    parsedEvent.pitches = getPitchData(gameplayEvent)
  }

  return parsedEvent
}

function handleRunnerAction(
  action: Action,
  gameplayEvent: GameplayEvent
): undefined {
  return undefined
}
