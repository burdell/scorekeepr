import { Base, AdvanceableBase } from './baserunning'

export type PutOut = { type: 'putout'; result: number[]; display: string }
export type FlyOut = {
  type: 'flyout'
  result: number
  display: string
}
export type LineOut = { type: 'lineout'; result: number; display: string }
export type Hit = { type: 'hit'; result: Base; display: string }
export type PitcherResultString = 'K' | 'K-looking' | 'BB' | 'IBB' | 'HB'
export type PitcherResult = {
  type: 'pitcher-result'
  result: PitcherResultString
  display: string
}
export type DefensiveError = {
  type: 'defensive-error'
  result: number
  display: string
}

export type CaughtStealing = {
  type: 'caught-stealing'
  result: PutOut
  display: string
}

export type StolenBase = {
  type: 'stolen-base'
  result: AdvanceableBase
  display: 'SB'
}

export type DefensiveIndifference = {
  type: 'defensive-indifference'
  result: 'DI'
  display: 'DI'
}

export type FieldersChoice = {
  type: 'fielders-choice'
  result: Base
  display: 'FC'
}

export type PassedBall = {
  type: 'passed-ball'
  result: 'PB'
  display: 'PB'
}

export type WildPitch = {
  type: 'wild-pitch'
  result: 'WP'
  display: 'WP'
}

export type Balk = {
  type: 'balk'
  result: 'BK'
  display: 'BK'
}

export type PickOff = {
  type: 'pick-off'
  result: PutOut
  display: string
}

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
