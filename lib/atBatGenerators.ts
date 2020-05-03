import {
  PitcherResult,
  PutOut,
  FlyOut,
  PitcherResultString,
  Hit,
  DefensiveError,
  FieldersChoice
} from './types'

export function generatePitcherResult(
  result: PitcherResultString
): PitcherResult {
  return {
    type: 'pitcher-result',
    result,
    display: result
  }
}

export function generatePutout(defensivePlayers: number[]): PutOut {
  return {
    type: 'putout',
    result: defensivePlayers,
    display:
      defensivePlayers.length === 1
        ? `${defensivePlayers[0]}u`
        : defensivePlayers.join('-')
  }
}

export function generateFlyOut(defensivePlayer: number): FlyOut {
  return {
    type: 'flyout',
    result: defensivePlayer,
    display: defensivePlayer < 7 ? `P${defensivePlayer}` : `F${defensivePlayer}`
  }
}

export function generateHit(base: 1 | 2 | 3 | 4): Hit {
  return {
    type: 'hit',
    result: base,
    display: base === 4 ? 'HR' : `${base}B`
  }
}

export function generateDefensiveError(position: number): DefensiveError {
  return {
    type: 'defensive-error',
    result: position,
    display: `E${position}`
  }
}

export function generateFieldersChoice(putout: PutOut): FieldersChoice {
  return {
    type: 'fielders-choice',
    result: putout,
    display: 'FC'
  }
}
