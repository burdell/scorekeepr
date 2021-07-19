import { Base } from './baserunning'
import type {
  PitcherResult,
  DefensiveError,
  CaughtStealing,
  StolenBase,
  DefensiveIndifference,
  FieldersChoice,
  PassedBall,
  WildPitch,
  Balk,
  PickOff,
  PutOut
} from './actions'

export interface FlyOut {
  type: 'flyout'
  result: number
  display: string
}
export interface LineOut {
  type: 'lineout'
  result: number
  display: string
}
export interface Hit {
  type: 'hit'
  result: Base
  display: string
}
export type PitcherResultString = 'K' | 'K-looking' | 'BB' | 'IBB' | 'HB'

export type AtBatResult =
  | PutOut
  | FlyOut
  | LineOut
  | Hit
  | PitcherResult
  | DefensiveError
  | FieldersChoice

export type AdvanceBaseResult =
  | DefensiveError
  | FieldersChoice
  | Balk
  | StolenBase
  | DefensiveIndifference
  | PassedBall
  | WildPitch

export type OutBaseResult = PutOut | CaughtStealing
export type BaseResultResult = AdvanceBaseResult | OutBaseResult | undefined

export interface BaseResult {
  advanced: boolean
  result: BaseResultResult
  isAtBatResult?: boolean
  onBasePutout?: PutOut | PickOff
}
