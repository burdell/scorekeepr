import { handleEvent, getAtBat, getEventWithDefaults, getResult } from './utils'
import * as actions from '../../lib/generators/actions'
import { getBases } from '../../lib/generators/utils'

describe('Retrosheet - Reached Base At-Bats', () => {
  it('handles hits', () => {
    const single = handleEvent(getAtBat({ result: 'S8/L' }))
    expect(single).toEqual(
      getEventWithDefaults({
        result: actions.hit(1),
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

    expect(handleEvent(getAtBat({ result: 'S5' }))).toEqual(
      getEventWithDefaults({
        result: actions.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(handleEvent(getAtBat({ result: 'S' }))).toEqual(
      getEventWithDefaults({
        result: actions.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(handleEvent(getAtBat({ result: 'S.1-3#' }))).toEqual(
      getEventWithDefaults({
        result: actions.hit(1),
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

    expect(handleEvent(getAtBat({ result: 'D' }))).toEqual(
      getEventWithDefaults({
        result: actions.hit(2),
        bases: getBases({
          B: {
            endBase: 2,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(handleEvent(getAtBat({ result: 'T' }))).toEqual(
      getEventWithDefaults({
        result: actions.hit(3),
        bases: getBases({
          B: {
            endBase: 3,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    expect(handleEvent(getAtBat({ result: 'HR' }))).toEqual(
      getEventWithDefaults({
        result: actions.hit(4),
        bases: getBases({
          B: {
            endBase: 4,
            isAtBatResult: true,
            result: undefined
          }
        })
      })
    )

    const double = handleEvent(getAtBat({ result: 'D7/L' }))
    expect(double).toEqual(
      getEventWithDefaults({
        result: actions.hit(2),
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

    const groundRuleDouble = handleEvent(getAtBat({ result: 'DGR/L' }))
    expect(groundRuleDouble).toEqual(
      getEventWithDefaults({
        result: actions.hit(2),
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

    const triple = handleEvent(getAtBat({ result: 'T9/F' }))
    expect(triple).toEqual(
      getEventWithDefaults({
        result: actions.hit(3),
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

    const homerun = handleEvent(getAtBat({ result: 'HR/78/F' }))
    expect(homerun).toEqual(
      getEventWithDefaults({
        result: actions.hit(4),
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
        result: actions.hit(1),
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

    const singleWithPutout = handleEvent(
      getAtBat({ result: 'S8/L.BX2(86/TH)' })
    )
    expect(singleWithPutout).toEqual(
      getEventWithDefaults({
        result: actions.hit(1),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined,
            additionalBases: [{ base: 2, result: actions.putout([8, 6]) }]
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )

    expect(handleEvent(getAtBat({ result: 'S7/L.2-H;1-3;B-2(TH)' }))).toEqual(
      getEventWithDefaults({
        result: actions.hit(1),
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

    const fanInterferenceDouble = handleEvent(getAtBat({ result: 'D/L+/FINT' }))
    expect(fanInterferenceDouble).toEqual(
      getEventWithDefaults({
        result: actions.hit(2),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 2,
            result: undefined
          }
        })
      })
    )

    const fanInterferenceTriple = handleEvent(getAtBat({ result: 'T/L+/FINT' }))
    expect(fanInterferenceTriple).toEqual(
      getEventWithDefaults({
        result: actions.hit(3),
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
        result: actions.hit(1),
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
        result: actions.hit(1),
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
    const hbp = handleEvent(getAtBat({ result: 'HP' }))

    expect(hbp).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('HB'),
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
    expect(handleEvent(getAtBat({ result: 'W' }))).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('BB'),
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

    expect(handleEvent(getAtBat({ result: 'IW' }))).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('IBB'),
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

    expect(handleEvent(getAtBat({ result: 'W.1-2' }))).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('BB'),
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

    expect(handleEvent(getAtBat({ result: 'IW.1-2' }))).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('IBB'),
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

    expect(handleEvent(getAtBat({ result: 'W+WP.2-3' }))).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('BB'),
        bases: {
          B: {
            isAtBatResult: true,
            endBase: 1,
            result: undefined
          },
          1: undefined,
          2: {
            endBase: 3,
            result: actions.wildPitch()
          },
          3: undefined
        }
      })
    )

    expect(getResult('I')).toEqual(
      getEventWithDefaults({
        result: actions.pitcherResult('IBB'),
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
        result: actions.pitcherResult('IBB'),
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
        result: actions.error(6),
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
        result: actions.error(2),
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
        result: actions.error(7),
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
        result: actions.error(3),
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
        result: actions.error(3),
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
