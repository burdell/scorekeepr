import {
  AdvanceBaseResult,
  BaseResultResult,
  OutBaseResult,
  PickOff,
  PutOut
} from './result'

export type Base = 1 | 2 | 3 | 4
export type AdvanceableBase = 2 | 3 | 4
export type StartableBase = 1 | 2 | 3

export type EventBaseResult = {
  endBase: Base
  result?: BaseResultResult
  isOut?: boolean
  isAtBatResult?: boolean
  onBasePutout?: PutOut | PickOff
  additionalBases?: Array<{ base: Base; result?: BaseResultResult }>
}

export type Bases = {
  B: EventBaseResult | undefined
  1: EventBaseResult | undefined
  2: EventBaseResult | undefined
  3: EventBaseResult | undefined
}

export type RunnerMovement = {
  startBase: Base | 'B'
  endBase: Base
  result: AdvanceBaseResult | OutBaseResult | undefined
  isOut?: boolean
}
