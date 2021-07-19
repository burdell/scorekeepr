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
  PutOut,
  FlyOut,
  LineOut,
  Hit
} from '../../generators/types'

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
export type BaseAction = AdvanceBaseResult | OutBaseResult | undefined

export interface BaseResult {
  advanced: boolean
  result: BaseAction
  isAtBatResult?: boolean
  onBasePutout?: PutOut | PickOff
}
