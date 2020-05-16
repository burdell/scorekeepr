import {
  PitcherResult,
  PutOut,
  FlyOut,
  LineOut,
  PitcherResultString,
  Hit,
  DefensiveError,
  FieldersChoice,
  Base
} from './types'

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

export function hit(base: 1 | 2 | 3 | 4): Hit {
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
