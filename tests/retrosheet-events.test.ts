import { AtBat, GameplayEvent } from 'retrosheet-parse'

import { parseAction as realParseAction } from '../lib/retrosheet'
import { RetrosheetEvent } from '../lib/types'
import * as resultGenerators from '../lib/retrosheet/generators/result'

function getEventWithDefaults(
  overrides: Partial<RetrosheetEvent> = {}
): RetrosheetEvent {
  return {
    result: undefined,
    isOut: false,
    pitches: {
      balls: 0,
      pitchCount: 0,
      strikes: 0
    },
    isSacrifice: false,
    bases: {
      B: undefined,
      1: undefined,
      2: undefined,
      3: undefined
    },
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

  it('parses double/triple plays and fielders choices', () => {
    expect(getResult('64(1)3/GDP')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.putout([6, 4, 3]),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.putout([6, 4])
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('64(1)/G')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true
          },
          1: {
            endBase: 2,
            result: resultGenerators.putout([6, 4])
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('5(2)4(1)3/GDP')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.putout([5, 4, 3]),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.putout([5, 4])
          },
          2: {
            endBase: 3,
            result: resultGenerators.putout([5])
          },
          3: undefined
        }
      })
    )

    expect(getResult('54(1)/FO/G5.3-H;B-1')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true
          },
          1: {
            endBase: 2,
            result: resultGenerators.putout([5, 4])
          },
          2: undefined,
          3: {
            endBase: 4,
            result: undefined
          }
        }
      })
    )

    // TODO: make this work
    expect(getResult('1(B)16(2)63(1)/LTP/L1')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.lineOut(1),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.putout([1, 6, 6, 3])
          },
          2: {
            endBase: 3,
            result: resultGenerators.putout([1, 6])
          },
          3: undefined
        }
      })
    )
  })

  it('parses hits', () => {
    const single = parseAction(getAtBat({ result: 'S8/L' }))
    expect(single).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )

    const double = parseAction(getAtBat({ result: 'D7/L' }))
    expect(double).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(2),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 2,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )

    const groundRuleDouble = parseAction(getAtBat({ result: 'DGR/L' }))
    expect(groundRuleDouble).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(2),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 2,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )

    const triple = parseAction(getAtBat({ result: 'T9/F' }))
    expect(triple).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(3),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 3,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )

    const homerun = parseAction(getAtBat({ result: 'HR/78/F' }))
    expect(homerun).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(4),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 4,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('parses hit batters', () => {
    const hbp = parseAction(getAtBat({ result: 'HP' }))

    expect(hbp).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('HBP'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('parses walks', () => {
    expect(parseAction(getAtBat({ result: 'W' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('BB'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )

    expect(parseAction(getAtBat({ result: 'IW' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('IBB'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
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

  it('parses pickoffs', () => {
    expect(getResult('PO2(E1).2-3')).toEqual(
      getEventWithDefaults({
        isOut: false,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            result: resultGenerators.error(1),
            endBase: 3
          },
          3: undefined
        }
      })
    )

    expect(getResult('PO1(23)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: undefined,
            endBase: 1,
            pickOff: resultGenerators.putout([2, 3])
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('parses caught stealing', () => {
    expect(getResult('CS2(26!)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: resultGenerators.putout([2, 6]),
            endBase: 2
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('CS3(25)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            result: resultGenerators.putout([2, 5]),
            endBase: 3
          },
          3: undefined
        }
      })
    )

    expect(getResult('POCSH(25)/DP.2X3(56)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            result: resultGenerators.putout([5, 6]),
            endBase: 3
          },
          3: {
            result: resultGenerators.putout([2, 5]),
            endBase: 4
          }
        }
      })
    )
  })
})
