import {
  PitcherResult,
  PutOut,
  FlyOut,
  PitcherResultString,
  Hit,
  DefensiveError,
  FieldersChoice
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

export function fieldersChoice(putout: PutOut): FieldersChoice {
  return {
    type: 'fielders-choice',
    result: putout,
    display: 'FC'
  }
}
