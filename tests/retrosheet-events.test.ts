import { AtBat, GameplayEvent } from 'retrosheet-parse'

import { parseAction as realParseAction } from '../lib/retrosheet'
import { GameEvent } from '../lib/types'
import * as resultGenerators from '../lib/retrosheet/generators/result'
import { getBases } from '../lib/retrosheet/utilities'

// Uhandled/mishandled:
// 6(B)3(1)/LDP (mishandled)

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

  it('handles hits', () => {
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

    expect(parseAction(getAtBat({ result: 'S5' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(parseAction(getAtBat({ result: 'S' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(parseAction(getAtBat({ result: 'S.1-3#' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: undefined
          },
          1: {
            endBase: 3,
            result: undefined
          }
        })
      })
    )

    expect(parseAction(getAtBat({ result: 'D' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(2),
        bases: getBases({
          B: {
            endBase: 2,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(parseAction(getAtBat({ result: 'T' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(3),
        bases: getBases({
          B: {
            endBase: 3,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(parseAction(getAtBat({ result: 'HR' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(4),
        bases: getBases({
          B: {
            endBase: 4,
            isAtBatResult: true,
            result: undefined
          }
        })
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

    const singleWithMultipleAdvancements = getResult('S8/G+.3-H(UR);2-H(UR)')
    expect(singleWithMultipleAdvancements).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true
          },
          1: undefined,
          2: {
            endBase: 4,
            result: undefined
          },
          3: {
            endBase: 4,
            result: undefined
          }
        }
      })
    )

    const singleWithPutout = parseAction(
      getAtBat({ result: 'S8/L.BX2(86/TH)' })
    )
    expect(singleWithPutout).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined,
            additionalBases: [
              { base: 2, result: resultGenerators.putout([8, 6]) }
            ]
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )

    expect(parseAction(getAtBat({ result: 'S7/L.2-H;1-3;B-2(TH)' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true,
            additionalBases: [{ base: 2, result: undefined }]
          },
          1: {
            endBase: 3,
            result: undefined
          },
          2: {
            endBase: 4,
            result: undefined
          }
        })
      })
    )

    const fanInterferenceDouble = parseAction(getAtBat({ result: 'D/L+/FINT' }))
    expect(fanInterferenceDouble).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(2),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 2,
            result: undefined
          }
        })
      })
    )

    const fanInterferenceTriple = parseAction(getAtBat({ result: 'T/L+/FINT' }))
    expect(fanInterferenceTriple).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(3),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 3,
            result: undefined
          }
        })
      })
    )

    expect(getResult('S8!/F89XDW.1-3')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: {
            endBase: 3,
            result: undefined
          }
        })
      })
    )

    expect(getResult('S8/G.3-H(UR);2-H(UR);1-3')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.hit(1),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: {
            endBase: 3,
            result: undefined
          },
          2: {
            endBase: 4,
            result: undefined
          },
          3: {
            endBase: 4,
            result: undefined
          }
        })
      })
    )
  })

  it('handles hit batters', () => {
    const hbp = parseAction(getAtBat({ result: 'HP' }))

    expect(hbp).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('HB'),
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

  it('handles walks', () => {
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

    expect(parseAction(getAtBat({ result: 'W.1-2' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('BB'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: {
            endBase: 2,
            result: undefined
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(parseAction(getAtBat({ result: 'IW.1-2' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('IBB'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: {
            endBase: 2,
            result: undefined
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(parseAction(getAtBat({ result: 'W+WP.2-3' }))).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('BB'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: undefined,
          2: {
            endBase: 3,
            result: resultGenerators.wildPitch()
          },
          3: undefined
        }
      })
    )

    expect(getResult('I')).toEqual(
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

    expect(getResult('I.1-2')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.pitcherResult('IBB'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: {
            endBase: 2,
            result: undefined
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('handles errors', () => {
    expect(getResult('E6/G6+')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.error(6),
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

    expect(getResult('CE2/G6+')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.error(2),
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

    expect(getResult('E7/L7M.2-H(NR)(UR);B-2')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.error(7),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 2,
            result: undefined
          },
          2: {
            endBase: 4,
            result: undefined
          }
        })
      })
    )

    expect(getResult('5E3/G')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.error(3),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          }
        })
      })
    )

    expect(getResult('6E3/G.2-3')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.error(3),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          2: {
            endBase: 3,
            result: undefined
          }
        })
      })
    )
  })

  it('handles pickoffs', () => {
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

    expect(getResult('PO1(E1).1-3')).toEqual(
      getEventWithDefaults({
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: resultGenerators.error(1),
            endBase: 3
          },
          2: undefined,
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
            onBasePutout: resultGenerators.pickOff([2, 3]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    // PO3(E2/TH).3-H(UR);1-2
    expect(getResult('PO3(E2/TH).3-H(UR);1-2')).toEqual(
      getEventWithDefaults({
        isOut: false,
        pitches: undefined,
        bases: getBases({
          1: {
            endBase: 2,
            result: undefined
          },
          3: {
            endBase: 4,
            result: resultGenerators.error(2)
          }
        })
      })
    )
  })

  it('handles caught stealing', () => {
    expect(getResult('CS2(26!)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: resultGenerators.caughtStealing([2, 6]),
            endBase: 2,
            isOut: true
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
            result: resultGenerators.caughtStealing([2, 5]),
            endBase: 3,
            isOut: true
          },
          3: undefined
        }
      })
    )

    expect(getResult('CS2(2!4)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: resultGenerators.caughtStealing([2, 4]),
            endBase: 2,
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('CS2(243)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: resultGenerators.caughtStealing([2, 4, 3]),
            endBase: 2,
            isOut: true
          },
          2: undefined,
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
            endBase: 3,
            isOut: true
          },
          3: {
            result: resultGenerators.caughtStealing([2, 5]),
            endBase: 4,
            isOut: true
          }
        }
      })
    )

    expect(getResult('CSH(2)')).toEqual(
      getEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: getBases({
          3: {
            result: resultGenerators.caughtStealing([2]),
            isOut: true,
            endBase: 4
          }
        })
      })
    )
  })

  it('handles defensive indifference', () => {
    expect(getResult('DI.1-2')).toEqual(
      getEventWithDefaults({
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.defensiveIndifference()
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('handles on-base putouts', () => {
    const lineoutDP = parseAction(getAtBat({ result: '3/L/DP.1X1(3)' }))
    expect(lineoutDP).toEqual(
      getEventWithDefaults({
        isOut: true,
        result: resultGenerators.lineOut(3),
        bases: {
          B: undefined,
          1: {
            isOut: true,
            onBasePutout: resultGenerators.putout([3]),
            endBase: 1,
            result: undefined
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('handles on-base errors', () => {
    expect(getResult('FC6.1X3(6E4);B-2')).toEqual(
      getEventWithDefaults({
        result: resultGenerators.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true,
            additionalBases: [{ base: 2, result: undefined }]
          },
          1: {
            endBase: 3,
            result: resultGenerators.error(4)
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('handles stolen bases', () => {
    expect(getResult('SB2')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
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

    expect(getResult('SB2.1-3(E2/TH)')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.stolenBase(2),
            additionalBases: [{ base: 3, result: resultGenerators.error(2) }]
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('SB3;SB2')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.stolenBase(2)
          },
          2: {
            endBase: 3,
            result: resultGenerators.stolenBase(3)
          },
          3: undefined
        }
      })
    )

    expect(getResult('SB3;SB2;SBH;')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.stolenBase(2)
          },
          2: {
            endBase: 3,
            result: resultGenerators.stolenBase(3)
          },
          3: {
            endBase: 4,
            result: resultGenerators.stolenBase(4)
          }
        }
      })
    )
  })

  it('handles out on advancement (i guess thats what this is', () => {
    expect(getResult('OA.2X3(25)')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            isOut: true,
            endBase: 3,
            result: resultGenerators.putout([2, 5])
          },
          3: undefined
        }
      })
    )
  })

  it('handles passed balls, wild pitches, and balks', () => {
    expect(getResult('WP.2-3;1-2')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.wildPitch()
          },
          2: {
            endBase: 3,
            result: resultGenerators.wildPitch()
          },
          3: undefined
        }
      })
    )

    expect(getResult('PB.2-3;1-2')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.passedBall()
          },
          2: {
            endBase: 3,
            result: resultGenerators.passedBall()
          },
          3: undefined
        }
      })
    )

    expect(getResult('BK.2-3;1-2')).toEqual(
      getEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: resultGenerators.balk()
          },
          2: {
            endBase: 3,
            result: resultGenerators.balk()
          },
          3: undefined
        }
      })
    )
  })

  it('handles foul territory errors', () => {
    expect(getResult('FLE7')).toEqual(
      getEventWithDefaults({
        foulTerritoryError: resultGenerators.error(7)
      })
    )
  })
})
