import { AtBat } from 'retrosheet-parse'

import { RetrosheetEvent } from '../types'

type ActionType = 'baserunner' | 'batter'

export type Handler = (
  gameplayEvent: AtBat,
  match: RegExpMatchArray
) => RetrosheetEvent | undefined

export type Action = {
  actionType: ActionType
  match: RegExpMatchArray
  handler?: Handler
}

export type ActionConfig = {
  regexp: RegExp
  actionType: ActionType
  handler: Handler
}
