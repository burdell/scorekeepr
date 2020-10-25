import { parseAction, getAtBat, getEventWithDefaults, getResult } from './utils'
import * as resultGenerators from '../../lib/retrosheet/generators/result'
import { getBases } from '../../lib/retrosheet/utilities'

describe('Retrosheet - Outs', () => {
  it('handles invalid players in outs', () => {
    try {
      getResult('0/F')
      fail('Did not correctly fail with invalid players in flyout')
    } catch (e) {
      expect(e.message).toEqual(
        `Attempted to record an out without a valid defensive player: `
      )
    }
  })

  it('handles strikeouts', () => {
    const strikeout = parseAction(
      getAtBat({ result: 'K', pitchSequence: 'BBFCBFB', count: '32' })
    )

    expect(strikeout).toEqual(
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

    const lookingStrikeout = parseAction(
      getAtBat({ result: 'K', pitchSequence: 'CBFBC', count: '22' })
    )
    expect(lookingStrikeout).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: {
          pitchCount: 5,
          balls: 2,
          strikes: 2
        },
        result: resultGenerators.pitcherResult('K-looking')
      })
    )

    const lookingStrikeout2 = parseAction(
      getAtBat({ result: 'K', pitchSequence: 'B*BBCCC', count: '32' })
    )
    expect(lookingStrikeout2).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: {
          pitchCount: 6,
          balls: 3,
          strikes: 2
        },
        result: resultGenerators.pitcherResult('K-looking')
      })
    )

    const strikeoutWithStolenBase = parseAction(getAtBat({ result: 'K+SB2' }))
    expect(strikeoutWithStolenBase).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.pitcherResult('K'),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.stolenBase(2)
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('K+WP.3-H(TUR)(NR);B-1')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('K'),
        isOut: false,
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: resultGenerators.wildPitch()
          },
          3: {
            endBase: 4,
            result: resultGenerators.wildPitch()
          }
        })
      })
    )

    expect(getResult('K.1-2;B-1(E2/TH)')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('K'),
        isOut: false,
        bases: getBases({
          B: {
            endBase: 1,
            result: resultGenerators.error(2)
          },
          1: {
            endBase: 2,
            result: undefined
          }
        })
      })
    )
  })

  it('handles flyouts and lineouts', () => {
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

    expect(parseAction(getAtBat({ result: '3/BP23F' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.flyOut(3),
        isOut: true
      })
    )

    expect(getResult('9.1-2')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.flyOut(9),
        bases: getBases({ 1: { endBase: 2, result: undefined } })
      })
    )

    expect(getResult('8!/F')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.flyOut(8)
      })
    )

    expect(getResult('8/F.2-3')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.flyOut(8),
        bases: getBases({ 2: { endBase: 3, result: undefined } })
      })
    )

    expect(getResult('5/BP-')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.flyOut(5)
      })
    )
  })

  it('records sacrifice flys', () => {
    expect(getResult('7/F/SF.3-H')).toEqual(
      getEventWithDefaults({
        isOut: true,
        isSacrifice: true,
        result: resultGenerators.flyOut(7),
        bases: getBases({
          3: {
            result: undefined,
            endBase: 4
          }
        })
      })
    )
  })

  it('records sacrifice bunts', () => {
    expect(getResult('34/BG/SH.1-2')).toEqual(
      getEventWithDefaults({
        isOut: true,
        isSacrifice: true,
        result: resultGenerators.putout([3, 4]),
        bases: getBases({
          1: {
            result: undefined,
            endBase: 2
          }
        })
      })
    )
  })

  it('handles putouts', () => {
    expect(getResult('93/L')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([9, 3])
      })
    )

    expect(getResult('53')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([5, 3])
      })
    )

    expect(getResult('5')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([5])
      })
    )

    expect(getResult('13#')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([1, 3])
      })
    )

    expect(getResult('5!3/G+')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([5, 3])
      })
    )

    expect(getResult('85(2)/FO/F.1-2')).toEqual(
      getEventWithDefaults({
        isOut: false,
        result: resultGenerators.fieldersChoice(1),
        bases: getBases({
          B: {
            isAtBatResult: true,
            result: undefined,
            endBase: 1
          },
          1: {
            endBase: 2,
            result: undefined
          },
          2: {
            endBase: 3,
            isOut: true,
            result: resultGenerators.putout([8, 5])
          }
        })
      })
    )

    expect(getResult('53.2-3;1-2')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([5, 3]),
        bases: getBases({
          2: {
            endBase: 3,
            result: undefined
          },
          1: {
            endBase: 2,
            result: undefined
          }
        })
      })
    )
  })

  it('handles double/triple plays and fielders choices', () => {
    expect(getResult('64(1)3/GDP')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([6, 4, 3]),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.putout([6, 4]),
            isOut: true
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
            result: resultGenerators.putout([6, 4]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('5(2)4(1)3/GDP')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.putout([5, 4, 3]),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.putout([5, 4]),
            isOut: true
          },
          2: {
            endBase: 3,
            result: resultGenerators.putout([5]),
            isOut: true
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
            result: resultGenerators.putout([5, 4]),
            isOut: true
          },
          2: undefined,
          3: {
            endBase: 4,
            result: undefined
          }
        }
      })
    )

    expect(getResult('FC6.1X2(64)')).toEqual(
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
            result: resultGenerators.putout([6, 4]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('1(B)16(2)63(1)/LTP/L1')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.lineOut(1),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            // TODO: fix this
            result: resultGenerators.putout([1, 6, 6, 3]),
            isOut: true
          },
          2: {
            endBase: 3,
            result: resultGenerators.putout([1, 6]),
            isOut: true
          },
          3: undefined
        }
      })
    )

    expect(getResult('1(B)15(3)/LDP/L1')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.lineOut(1),
        bases: {
          B: undefined,
          1: undefined,
          2: undefined,
          3: {
            endBase: 4,
            result: resultGenerators.putout([1, 5]),
            isOut: true
          }
        }
      })
    )

    expect(getResult('36(1)/FO/G.2-H(E6/TH)(UR)(NR)')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: undefined
          },
          1: {
            endBase: 2,
            result: resultGenerators.putout([3, 6]),
            isOut: true
          },
          2: {
            endBase: 4,
            result: resultGenerators.error(6)
          },
          3: undefined
        }
      })
    )

    expect(getResult('16!4(1)3/GDP/G6M')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.putout([1, 6, 4, 3]),
        isOut: true,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.putout([1, 6, 4]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })
})
