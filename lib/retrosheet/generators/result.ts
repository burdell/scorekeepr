import {
  PitcherResult,
  PutOut,
  FlyOut,
  LineOut,
  PitcherResultString,
  Hit,
  DefensiveError,
  FieldersChoice,
  Base,
  Balk,
  CaughtStealing,
  StolenBase,
  AdvanceableBase,
  AdvanceBaseResult,
  DefensiveIndifference,
  PassedBall,
  WildPitch
} from '../../types'

export function pitcherResult(result: PitcherResultString): PitcherResult {
  return {
    type: 'pitcher-result',
    result,
    display: result
  }
}

export function putout(defensivePlayers: number[]): PutOut {
  return {
    type: 'putout',
    result: defensivePlayers,
    display:
      defensivePlayers.length === 1
        ? `${defensivePlayers[0]}u`
        : defensivePlayers.join('-')
  }
}

export function flyOut(defensivePlayer: number): FlyOut {
  return {
    type: 'flyout',
    result: defensivePlayer,
    display: defensivePlayer < 7 ? `P${defensivePlayer}` : `F${defensivePlayer}`
  }
}

export function lineOut(defensivePlayer: number): LineOut {
  return {
    type: 'lineout',
    result: defensivePlayer,
    display: `L${defensivePlayer}`
  }
}

export function hit(base: Base): Hit {
  return {
    type: 'hit',
    result: base,
    display: base === 4 ? 'HR' : `${base}B`
  }
}

export function error(position: number): DefensiveError {
  return {
    type: 'defensive-error',
    result: position,
    display: `E${position}`
  }
}

export function fieldersChoice(baseAdvancedTo: Base): FieldersChoice {
  return {
    type: 'fielders-choice',
    result: baseAdvancedTo,
    display: 'FC'
  }
}

export function caughtStealing(putoutPositions: number[]): CaughtStealing {
  const result = putout(putoutPositions)
  return {
    type: 'caught-stealing',
    result,
    display: `CS ${result.display}`
  }
}

export function stolenBase(base: AdvanceableBase): StolenBase {
  return {
    type: 'stolen-base',
    result: base,
    display: 'SB'
  }
}

export function defensiveIndifference(): DefensiveIndifference {
  return {
    type: 'defensive-indifference',
    display: 'DI',
    result: 'DI'
  }
}

export function passedBall(): PassedBall {
  return {
    type: 'passed-ball',
    result: 'PB',
    display: 'PB'
  }
}

export function wildPitch(): WildPitch {
  return {
    type: 'wild-pitch',
    result: 'WP',
    display: 'WP'
  }
}

export function balk(): Balk {
  return {
    type: 'balk',
    result: 'BK',
    display: 'BK'
  }
}
