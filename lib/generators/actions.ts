import { PitcherResultString, Base, AdvanceableBase } from '../Scorekeepr/types'

export function pitcherResult(result: PitcherResultString) {
  const display = result === 'K-looking' ? 'K' : result
  return {
    type: 'pitcher-result' as const,
    result,
    display
  }
}

export function putout(defensivePlayers: number[]) {
  return {
    type: 'putout' as const,
    result: defensivePlayers,
    display:
      defensivePlayers.length === 1
        ? `${defensivePlayers[0]}u`
        : defensivePlayers.join('-')
  }
}

export function flyOut(defensivePlayer: number) {
  return {
    type: 'flyout' as const,
    result: defensivePlayer,
    display: defensivePlayer < 7 ? `P${defensivePlayer}` : `F${defensivePlayer}`
  }
}

export function lineOut(defensivePlayer: number) {
  return {
    type: 'lineout' as const,
    result: defensivePlayer,
    display: `L${defensivePlayer}`
  }
}

export function hit(base: Base) {
  return {
    type: 'hit' as const,
    result: base,
    display: base === 4 ? 'HR' : `${base}B`
  }
}

export function error(position: number) {
  return {
    type: 'defensive-error' as const,
    result: position,
    display: `E${position}`
  }
}

export function fieldersChoice(baseAdvancedTo: Base) {
  return {
    type: 'fielders-choice' as const,
    result: baseAdvancedTo,
    display: 'FC' as const
  }
}

export function caughtStealing(putoutPositions: number[]) {
  const result = putout(putoutPositions)
  return {
    type: 'caught-stealing' as const,
    result,
    display: `CS ${result.display}`
  }
}

export function pickOff(putoutPositions: number[]) {
  const result = putout(putoutPositions)
  return {
    type: 'pick-off' as const,
    result,
    display: `PO ${result.display}`
  }
}

export function stolenBase(base: AdvanceableBase) {
  return {
    type: 'stolen-base' as const,
    result: base,
    display: 'SB' as const
  }
}

export function defensiveIndifference() {
  return {
    type: 'defensive-indifference' as const,
    display: 'DI' as const,
    result: 'DI' as const
  }
}

export function passedBall() {
  return {
    type: 'passed-ball' as const,
    result: 'PB' as const,
    display: 'PB' as const
  }
}

export function wildPitch() {
  return {
    type: 'wild-pitch' as const,
    result: 'WP' as const,
    display: 'WP' as const
  }
}

export function balk() {
  return {
    type: 'balk' as const,
    result: 'BK' as const,
    display: 'BK' as const
  }
}

export function runnerAdjustment(base: Base) {
  return {
    type: 'runner-adjustment' as const,
    result: base,
    display: ''
  }
}
