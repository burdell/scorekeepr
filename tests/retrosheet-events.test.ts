import { AtBat, GameplayEvent } from 'retrosheet-parse'

import { parseAction as realParseAction } from '../lib/retrosheet'
import { GameEvent } from '../lib/types'
import * as resultGenerators from '../lib/resultGenerators'

function getEventWithDefaults(overrides: Partial<GameEvent> = {}): GameEvent {
  return {
    result: undefined,
    isOut: false,
    pitches: {
      balls: 0,
      pitchCount: 0,
      strikes: 0
    },
    isSacrifice: false,
    bases: [],
    ...overrides
  }
}

function getAtBat(overrides: Partial<AtBat>): AtBat {
  return {
    type: 'at-bat',
    count: '',
    pitchSequence: '',
    result: '',
    playerId: '',
    ...overrides
  }
}

function parseAction(gameplayEvent: GameplayEvent) {
  return requireExistence(realParseAction(gameplayEvent))
}

function getResult(result: string) {
  return parseAction(getAtBat({ result }))
}

function requireExistence<T>(thing: T) {
  if (!thing) throw new Error('The thing does not exist 🧐')

  return thing
}

describe('Retrosheet parsing', () => {
  it('parses strikeouts', () => {
    const action = parseAction(
      getAtBat({ result: 'K', pitchSequence: 'BBFCBFB', count: '32' })
    )

    expect(action).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: {
          pitchCount: 7,
          balls: 3,
          strikes: 2
        },
        result: resultGenerators.pitcherResult('K')
      })
    )
  })

  it('parses flyouts and lineouts', () => {
    // 01,CX,7/F
    const outfieldFlyout = parseAction(
      getAtBat({ result: '7/F', pitchSequence: 'CX', count: '01' })
    )

    expect(outfieldFlyout).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: { pitchCount: 2, balls: 0, strikes: 1 },
        result: resultGenerators.flyOut(7)
      })
    )

    // 12,BSSFX,4/P
    const infieldFlyout = parseAction(
      getAtBat({ result: '4/P', pitchSequence: 'BSSFX', count: '12' })
    )

    expect(infieldFlyout).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: { pitchCount: 5, balls: 1, strikes: 2 },
        result: resultGenerators.flyOut(4)
      })
    )
  })

  it('parses hits', () => {
    const single = parseAction(getAtBat({ result: 'S8/L' }))
    expect(single).toEqual(
      getEventWithDefaults({ result: resultGenerators.hit(1) })
    )

    const double = parseAction(getAtBat({ result: 'D7/L' }))
    expect(double).toEqual(
      getEventWithDefaults({ result: resultGenerators.hit(2) })
    )

    const groundRuleDouble = parseAction(getAtBat({ result: 'DGR/L' }))
    expect(groundRuleDouble).toEqual(
      getEventWithDefaults({ result: resultGenerators.hit(2) })
    )

    const triple = parseAction(getAtBat({ result: 'T9/F' }))
    expect(triple).toEqual(
      getEventWithDefaults({ result: resultGenerators.hit(3) })
    )

    const homerun = parseAction(getAtBat({ result: 'HR/78/F' }))
    expect(homerun).toEqual(
      getEventWithDefaults({ result: resultGenerators.hit(4) })
    )
  })

  it('parses hit batters', () => {
    const hbp = parseAction(getAtBat({ result: 'HP' }))

    expect(hbp).toEqual(
      getEventWithDefaults({ result: resultGenerators.pitcherResult('HBP') })
    )
  })

  it('parses walks', () => {
    expect(parseAction(getAtBat({ result: 'W' }))).toEqual(
      getEventWithDefaults({ result: resultGenerators.pitcherResult('BB') })
    )

    expect(parseAction(getAtBat({ result: 'IW' }))).toEqual(
      getEventWithDefaults({ result: resultGenerators.pitcherResult('IBB') })
    )
  })

  it('parses errors', () => {
    expect(getResult('E6/G6+')).toEqual(
      getEventWithDefaults({ result: resultGenerators.error(6) })
    )

    expect(getResult('CE2/G6+')).toEqual(
      getEventWithDefaults({ result: resultGenerators.error(2) })
    )
  })
})
