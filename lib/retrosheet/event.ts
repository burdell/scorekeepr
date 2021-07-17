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
import { getBase } from './guards'
import { runnerAdjustment } from '../generators/gameEvents'

type Logger = {
  log: (message: string) => void
}

export function handleEvent(
  gameplayEvent: GameplayEvent,
  logger: Logger = { log: console.log }
) {
  switch (gameplayEvent.type) {
    case 'comment':
      return
    case 'at-bat':
      if (gameplayEvent.result === 'NP') {
        return
      }

      const action = findAction(gameplayEvent.result)
      if (!action) {
        logger.log(`Unhandled action: ${gameplayEvent.result}`)
      }
      const baserunnerMovements = getBaserunnerMovements(gameplayEvent.result)
      const event = handleAction(gameplayEvent, action, baserunnerMovements)

      const extraEventMatch = gameplayEvent.result.match(/\+(.+)/)
      let extraEvent: GameEvent | undefined = undefined
      if (extraEventMatch) {
        const [fullMatch, eventMatch] = extraEventMatch
        const extraAction = findAction(eventMatch)
        extraEvent = handleAction(
          gameplayEvent,
          extraAction,
          baserunnerMovements
        )
      }

      if (event) {
        handleBaserunnerMovements(baserunnerMovements, event, extraEvent)

        if (event.bases.B && !event.bases.B.isOut) {
          event.isOut = false
        }
      }

      return event
    case 'runner-adjustment':
      return runnerAdjustment(getBase(gameplayEvent.base))
  }
}

function findAction(eventResultString: string): Action | undefined {
  let match: RegExpMatchArray | null = null
  let foundAction: ActionConfig | undefined = undefined
  for (let identifier of actionConfigs) {
    match = eventResultString.match(identifier.regexp)
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
  if (!action) return undefined

  const result = action.handler(
    gameplayEvent,
    action.match,
    baserunnerMovements
  )
  if (result && action.actionType === 'batter') {
    result.pitches = getPitchData(gameplayEvent)
  }

  return result
}
