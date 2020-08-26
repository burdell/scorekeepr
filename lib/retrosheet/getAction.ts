import { actionConfigs } from './handlers'

import { Handler, ActionConfig } from './retrosheet.types'

type ActionType = 'baserunner' | 'batter'

export type Action = {
  actionType: ActionType
  match: RegExpMatchArray
  handler: Handler
}

export function getAction(action: string): Action | undefined {
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
