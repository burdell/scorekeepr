import { PitcherResultString, Base, AdvanceableBase } from '../types'

export function pitcherResult(result: PitcherResultString) {
  const display = result === 'K-looking' ? 'K' : result
  return {
    type: 'pitcher-result',
    result,
    display
  }
}

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

export function flyOut(defensivePlayer: number) {
  return {
    type: 'flyout',
    result: defensivePlayer,
    display: defensivePlayer < 7 ? `P${defensivePlayer}` : `F${defensivePlayer}`
  }
}

export function lineOut(defensivePlayer: number) {
  return {
    type: 'lineout',
    result: defensivePlayer,
    display: `L${defensivePlayer}`
  }
}

export function hit(base: Base) {
  return {
    type: 'hit',
    result: base,
    display: base === 4 ? 'HR' : `${base}B`
  }
}

export function error(position: number) {
  return {
    type: 'defensive-error',
    result: position,
    display: `E${position}`
  }
}

export function fieldersChoice(baseAdvancedTo: Base) {
  return {
    type: 'fielders-choice',
    result: baseAdvancedTo,
    display: 'FC'
  }
}

export function caughtStealing(putoutPositions: number[]) {
  const result = putout(putoutPositions)
  return {
    type: 'caught-stealing',
    result,
    display: `CS ${result.display}`
  }
}

export function pickOff(putoutPositions: number[]) {
  const result = putout(putoutPositions)
  return {
    type: 'pick-off',
    result,
    display: `PO ${result.display}`
  }
}

export function stolenBase(base: AdvanceableBase) {
  return {
    type: 'stolen-base',
    result: base,
    display: 'SB'
  }
}

export function defensiveIndifference() {
  return {
    type: 'defensive-indifference',
    display: 'DI',
    result: 'DI'
  }
}

export function passedBall() {
  return {
    type: 'passed-ball',
    result: 'PB',
    display: 'PB'
  }
}

export function wildPitch() {
  return {
    type: 'wild-pitch',
    result: 'WP',
    display: 'WP'
  }
}

export function balk() {
  return {
    type: 'balk',
    result: 'BK',
    display: 'BK'
  }
}

export function runnerAdjustment(base: Base) {
  return {
    type: 'runner-adjustment',
    result: base,
    display: ''
  }
}
