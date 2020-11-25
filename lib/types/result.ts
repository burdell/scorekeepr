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
} from '../Scorekeeper/generators/result'

export type FlyOut = {
  type: 'flyout'
  result: number
  display: string
}
export type LineOut = { type: 'lineout'; result: number; display: string }
export type Hit = { type: 'hit'; result: Base; display: string }
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

export type BaseResult = {
  advanced: boolean
  result: BaseResultResult
  isAtBatResult?: boolean
  onBasePutout?: PutOut | PickOff
}
