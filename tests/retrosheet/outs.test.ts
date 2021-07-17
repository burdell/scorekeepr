import { handleEvent, getAtBat, getEventWithDefaults, getResult } from './utils'
import * as actions from '../../lib/generators/actions'
import { getBases } from '../../lib/generators/gameEvents'

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
    const strikeout = handleEvent(
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
        result: actions.pitcherResult('K')
      })
    )

    const lookingStrikeout = handleEvent(
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
        result: actions.pitcherResult('K-looking')
      })
    )

    const lookingStrikeout2 = handleEvent(
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
        result: actions.pitcherResult('K-looking')
      })
    )

    const strikeoutWithStolenBase = handleEvent(getAtBat({ result: 'K+SB2' }))
    expect(strikeoutWithStolenBase).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.pitcherResult('K'),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: actions.stolenBase(2)
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('K+WP.3-H(TUR)(NR);B-1')).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('K'),
        isOut: false,
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: actions.wildPitch()
          },
          3: {
            endBase: 4,
            result: actions.wildPitch()
          }
        })
      })
    )

    expect(getResult('K.1-2;B-1(E2/TH)')).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('K'),
        isOut: false,
        bases: getBases({
          B: {
            endBase: 1,
            result: actions.error(2)
          },
          1: {
            endBase: 2,
            result: undefined
          }
        })
      })
    )

    expect(getResult('K.BX1(23)')).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('K'),
        isOut: true,
        bases: getBases({
          B: {
            isOut: true,
            endBase: 1,
            result: actions.putout([2, 3]),
            isAtBatResult: true
          }
        })
      })
    )
  })

  it('handles flyouts and lineouts', () => {
    const outfieldFlyout = handleEvent(
      getAtBat({ result: '7/F', pitchSequence: 'CX', count: '01' })
    )

    expect(outfieldFlyout).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: { pitchCount: 2, balls: 0, strikes: 1 },
        result: actions.flyOut(7)
      })
    )

    // 12,BSSFX,4/P
    const infieldFlyout = handleEvent(
      getAtBat({ result: '4/P', pitchSequence: 'BSSFX', count: '12' })
    )

    expect(infieldFlyout).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: { pitchCount: 5, balls: 1, strikes: 2 },
        result: actions.flyOut(4)
      })
    )

    expect(handleEvent(getAtBat({ result: '3/BP23F' }))).toEqual(
      getEventWithDefaults({
        result: actions.flyOut(3),
        isOut: true
      })
    )

    expect(getResult('9.1-2')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.flyOut(9),
        bases: getBases({ 1: { endBase: 2, result: undefined } })
      })
    )

    expect(getResult('8!/F')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.flyOut(8)
      })
    )

    expect(getResult('8/F.2-3')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.flyOut(8),
        bases: getBases({ 2: { endBase: 3, result: undefined } })
      })
    )

    expect(getResult('5/BP-')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.flyOut(5)
      })
    )

    expect(getResult('5/L')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.lineOut(5)
      })
    )
  })

  it('records sacrifice flys', () => {
    expect(getResult('7/F/SF.3-H')).toEqual(
      getEventWithDefaults({
        isOut: true,
        isSacrifice: true,
        result: actions.flyOut(7),
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
        result: actions.putout([3, 4]),
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
        result: actions.putout([9, 3])
      })
    )

    expect(getResult('53')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.putout([5, 3])
      })
    )

    expect(getResult('5')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.putout([5])
      })
    )

    expect(getResult('13#')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.putout([1, 3])
      })
    )

    expect(getResult('5!3/G+')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.putout([5, 3])
      })
    )

    expect(getResult('85(2)/FO/F.1-2')).toEqual(
      getEventWithDefaults({
        isOut: false,
        result: actions.fieldersChoice(1),
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
            result: actions.putout([8, 5])
          }
        })
      })
    )

    expect(getResult('53.2-3;1-2')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.putout([5, 3]),
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
        result: actions.putout([6, 4, 3]),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: actions.putout([6, 4]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('64(1)/G')).toEqual(
      getEventWithDefaults({
        result: actions.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true
          },
          1: {
            endBase: 2,
            result: actions.putout([6, 4]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('2(3)/FO/G-.2-3;1-2')).toEqual(
      getEventWithDefaults({
        result: actions.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true
          },
          1: {
            endBase: 2,
            result: undefined
          },
          2: {
            endBase: 3,
            result: undefined
          },
          3: {
            endBase: 4,
            result: actions.putout([2]),
            isOut: true
          }
        }
      })
    )

    expect(getResult('5(2)4(1)3/GDP')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.putout([5, 4, 3]),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: actions.putout([5, 4]),
            isOut: true
          },
          2: {
            endBase: 3,
            result: actions.putout([5]),
            isOut: true
          },
          3: undefined
        }
      })
    )

    expect(getResult('54(1)/FO/G5.3-H;B-1')).toEqual(
      getEventWithDefaults({
        result: actions.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true
          },
          1: {
            endBase: 2,
            result: actions.putout([5, 4]),
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
        result: actions.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true
          },
          1: {
            endBase: 2,
            result: actions.putout([6, 4]),
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
        result: actions.lineOut(1),
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            // TODO: fix this
            result: actions.putout([1, 6, 6, 3]),
            isOut: true
          },
          2: {
            endBase: 3,
            result: actions.putout([1, 6]),
            isOut: true
          },
          3: undefined
        }
      })
    )

    expect(getResult('1(B)15(3)/LDP/L1')).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: actions.lineOut(1),
        bases: {
          B: undefined,
          1: undefined,
          2: undefined,
          3: {
            endBase: 4,
            result: actions.putout([1, 5]),
            isOut: true
          }
        }
      })
    )

    expect(getResult('36(1)/FO/G.2-H(E6/TH)(UR)(NR)')).toEqual(
      getEventWithDefaults({
        result: actions.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: undefined
          },
          1: {
            endBase: 2,
            result: actions.putout([3, 6]),
            isOut: true
          },
          2: {
            endBase: 4,
            result: actions.error(6)
          },
          3: undefined
        }
      })
    )

    expect(getResult('16!4(1)3/GDP/G6M')).toEqual(
      getEventWithDefaults({
        result: actions.putout([1, 6, 4, 3]),
        isOut: true,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: actions.putout([1, 6, 4]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })
})
