import { parseAction, getAtBat, getEventWithDefaults, getResult } from './utils'
import * as resultGenerators from '../../lib/retrosheet/generators/result'
import { getBases } from '../../lib/retrosheet/utilities'

describe('Retrosheet - Reached Base At-Bats', () => {
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
})