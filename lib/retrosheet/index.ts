import { GameplayEvent, AtBat } from 'retrosheet-parse'

import { GameEvent } from '../types'
import { actionConfigs } from './handlers'
import { getPitchData } from './pitches'
import {
  getBaserunnerMovements,
  BaserunnerMovements,
  handleBaserunnerMovements
} from './baserunners'
import { ActionConfig, Action } from './retrosheet.types'

type Logger = {
  log: (message: string) => void
}

export function parseAction(
  gameplayEvent: GameplayEvent,
  logger: Logger = { log: console.log }
) {
  if (gameplayEvent.type === 'comment' || gameplayEvent.result === 'NP') {
    return
  }

  const action = getAction(gameplayEvent.result)
  if (!action) {
    logger.log(`Unhandled action: ${gameplayEvent.result}`)
  }
  const baserunnerMovements = getBaserunnerMovements(gameplayEvent.result)
  const event = handleAction(gameplayEvent, action, baserunnerMovements)

  const extraEventMatch = gameplayEvent.result.match(/\+(.+)/)
  let extraEvent: GameEvent | undefined = undefined
  if (extraEventMatch) {
    const [fullMatch, eventMatch] = extraEventMatch
    const extraAction = getAction(eventMatch)
    extraEvent = handleAction(gameplayEvent, extraAction, baserunnerMovements)
  }

  if (event) {
    handleBaserunnerMovements(baserunnerMovements, event, extraEvent)

    if (event.bases.B && !event.bases.B.isOut) {
      event.isOut = false
    }
  }

  return event
}

function getAction(action: string): Action | undefined {
  let match: RegExpMatchArray | null = null
  let foundAction: ActionConfig | undefined = undefined
  for (let identifier of actionConfigs) {
    match = action.match(identifier.regexp)
    if (match) {
      foundAction = identifier
      break
    }
  }

  if (!foundAction || !match) return

  return {
    actionType: foundAction.actionType,
    handler: foundAction.handler,
    match
  }
}

function handleAction(
  gameplayEvent: AtBat,
  action: Action | undefined,
  baserunnerMovements: BaserunnerMovements
) {
  let event: GameEvent | undefined = undefined

  if (!action) return event

  const parsedEvent = action.handler(
    gameplayEvent,
    action.match,
    baserunnerMovements
  )
  if (parsedEvent && action.actionType === 'batter') {
    parsedEvent.pitches = getPitchData(gameplayEvent)
  }

  return parsedEvent
}
