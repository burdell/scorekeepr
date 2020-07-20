import { Scorekeeper } from '../lib'
import { AtBat } from '../lib/types'

export function getAtBat(
  scorekeeper: Scorekeeper,
  lineupSpot: number,
  team: 'visiting' | 'home' = 'visiting',
  inning: number = 0
) {
  return scorekeeper.gameplay[team][inning][lineupSpot]
}

export function atBatWithDefaults(overrides: Partial<AtBat>): AtBat {
  return {
    balls: 0,
    strikes: 0,
    pitchCount: 0,
    isOut: false,
    result: undefined,
    bases: [],
    ...overrides
  }
}

export function reset(mocks: { [m: string]: jest.Mock }) {
  Object.keys(mocks).forEach((mock) => mocks[mock].mockClear())
}
