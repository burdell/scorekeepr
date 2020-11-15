import { AtBat } from 'retrosheet-parse'

import { GameEvent } from '../types'
import { BaserunnerMovements } from './baserunners'

type ActionType = 'baserunner' | 'batter'

export type Handler = (
  gameplayEvent: AtBat,
  match: RegExpMatchArray,
  baseAdvancements: BaserunnerMovements
) => GameEvent | undefined

export type Action = {
  actionType: ActionType
  match: RegExpMatchArray
  handler: Handler
}

export type ActionConfig = {
  regexp: RegExp
  actionType: ActionType
  handler: Handler
}
