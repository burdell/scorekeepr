import {
  pitcherResult,
  putout,
  flyOut,
  lineOut,
  hit,
  error,
  caughtStealing,
  pickOff,
  stolenBase,
  defensiveIndifference,
  passedBall,
  wildPitch,
  balk,
  runnerAdjustment,
  fieldersChoice
} from './actions'

export type PitcherResult = ReturnType<typeof pitcherResult>
export type PutOut = ReturnType<typeof putout>
export type FlyOut = ReturnType<typeof flyOut>
export type LineOut = ReturnType<typeof lineOut>
export type Hit = ReturnType<typeof hit>
export type DefensiveError = ReturnType<typeof error>
export type FieldersChoice = ReturnType<typeof fieldersChoice>
export type CaughtStealing = ReturnType<typeof caughtStealing>
export type PickOff = ReturnType<typeof pickOff>
export type StolenBase = ReturnType<typeof stolenBase>
export type DefensiveIndifference = ReturnType<typeof defensiveIndifference>
export type PassedBall = ReturnType<typeof passedBall>
export type WildPitch = ReturnType<typeof wildPitch>
export type Balk = ReturnType<typeof balk>
export type RunnerAdjustment = ReturnType<typeof runnerAdjustment>
