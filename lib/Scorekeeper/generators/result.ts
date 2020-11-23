import { PitcherResultString, Base, AdvanceableBase } from '../../types'

export function pitcherResult(result: PitcherResultString) {
  const display = result === 'K-looking' ? 'K' : result
  return {
    type: 'pitcher-result',
    result,
    display
  }
}
export type PitcherResult = ReturnType<typeof pitcherResult>

export function putout(defensivePlayers: number[]) {
  return {
    type: 'putout',
    result: defensivePlayers,
    display:
      defensivePlayers.length === 1
        ? `${defensivePlayers[0]}u`
        : defensivePlayers.join('-')
  }
}
export type PutOut = ReturnType<typeof putout>

export function flyOut(defensivePlayer: number) {
  return {
    type: 'flyout',
    result: defensivePlayer,
    display: defensivePlayer < 7 ? `P${defensivePlayer}` : `F${defensivePlayer}`
  }
}
export type FlyOut = ReturnType<typeof flyOut>

export function lineOut(defensivePlayer: number) {
  return {
    type: 'lineout',
    result: defensivePlayer,
    display: `L${defensivePlayer}`
  }
}
export type LineOut = ReturnType<typeof lineOut>

export function hit(base: Base) {
  return {
    type: 'hit',
    result: base,
    display: base === 4 ? 'HR' : `${base}B`
  }
}
export type Hit = ReturnType<typeof hit>

export function error(position: number) {
  return {
    type: 'defensive-error',
    result: position,
    display: `E${position}`
  }
}
export type DefensiveError = ReturnType<typeof error>

export function fieldersChoice(baseAdvancedTo: Base) {
  return {
    type: 'fielders-choice',
    result: baseAdvancedTo,
    display: 'FC'
  }
}
export type FieldersChoice = ReturnType<typeof error>

export function caughtStealing(putoutPositions: number[]) {
  const result = putout(putoutPositions)
  return {
    type: 'caught-stealing',
    result,
    display: `CS ${result.display}`
  }
}
export type CaughtStealing = ReturnType<typeof caughtStealing>

export function pickOff(putoutPositions: number[]) {
  const result = putout(putoutPositions)
  return {
    type: 'pick-off',
    result,
    display: `PO ${result.display}`
  }
}
export type PickOff = ReturnType<typeof pickOff>

export function stolenBase(base: AdvanceableBase) {
  return {
    type: 'stolen-base',
    result: base,
    display: 'SB'
  }
}
export type StolenBase = ReturnType<typeof stolenBase>

export function defensiveIndifference() {
  return {
    type: 'defensive-indifference',
    display: 'DI',
    result: 'DI'
  }
}
export type DefensiveIndifference = ReturnType<typeof defensiveIndifference>

export function passedBall() {
  return {
    type: 'passed-ball',
    result: 'PB',
    display: 'PB'
  }
}
export type PassedBall = ReturnType<typeof passedBall>

export function wildPitch() {
  return {
    type: 'wild-pitch',
    result: 'WP',
    display: 'WP'
  }
}
export type WildPitch = ReturnType<typeof wildPitch>

export function balk() {
  return {
    type: 'balk',
    result: 'BK',
    display: 'BK'
  }
}
export type Balk = ReturnType<typeof balk>
