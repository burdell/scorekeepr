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

// const actions: ActionIdentifier[] = [
//   { actionType: 'baserunner', type: 'balk', regexp: /^BK/ },
//   {
//     actionType: 'baserunner',
//     type: 'caught-stealing',
//     regexp: /^CS([23H])\((\dE?\d)\)/
//   },
//   {
//     actionType: 'baserunner',
//     type: 'defensive-indifference',
//     regexp: /^DI.\d-(\d)/
//   },
//   { actionType: 'baserunner', type: 'base-advancement', regexp: /^OA/ },
//   { actionType: 'baserunner', type: 'pb-or-wp', regexp: /^(WP|PB)/ },
//   {
//     actionType: 'baserunner',
//     type: 'pick-off',
//     regexp: /^PO([123])\((E?\d+)\)/
//   },
//   {
//     actionType: 'baserunner',
//     type: 'pick-off-caught-stealing',
//     regexp: /^POCS([23H])\((\d+)\)/
//   },
//   { actionType: 'baserunner', type: 'stolen-base', regexp: /^SB([23H])/ },
//   {
//     actionType: 'batter',
//     type: 'hit',
//     regexp: /^([S|D(GR)?|T])\d+/,
//     handler: handlers.hit
//   },
//   { actionType: 'batter', type: 'home-run', regexp: /^HR/ },
//   { actionType: 'batter', type: 'walk', regexp: /^W/ },
//   {
//     actionType: 'batter',
//     type: 'strikeout',
//     regexp: /^K/,
//     handler: handlers.strikeout
//   },
//   { actionType: 'batter', type: 'hit-by-pitch', regexp: /^HB/ },
//   { actionType: 'batter', type: 'intentional-walk', regexp: /^IW?/ },
//   { actionType: 'batter', type: 'fielders-choice', regexp: /^FC\d+/ },
//   {
//     actionType: 'batter',
//     type: 'simple-out',
//     regexp: /^\d+/,
//     handler: handlers.simpleOut
//   },
//   { actionType: 'batter', type: 'error', regexp: /^C?\/?E(\d)/ }
// ]
