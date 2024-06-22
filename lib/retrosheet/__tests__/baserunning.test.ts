import {
  handleEvent,
  getAtBat,
  getGameEventWithDefaults,
  getResult
} from './utils'
import * as gameEventResults from '../../generators/gameEventResults'
import { getBases } from '../../generators/utils'

describe('Retrosheet - Baserunning', () => {
  it('handles runner adjustments (2020 extra inning rules)', () => {
    const result = handleEvent({
      type: 'runner-adjustment',
      playerId: 'acunr001',
      base: 2
    })

    expect(result).toEqual(
      getGameEventWithDefaults({
        isOut: false,
        pitches: undefined,
        result: gameEventResults.runnerAdjustment(2),
        bases: {
          B: {
            endBase: 2,
            isAtBatResult: true
          },
          1: undefined,
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('handles pickoffs', () => {
    expect(getResult('PO2(E1).2-3')).toEqual(
      getGameEventWithDefaults({
        isOut: false,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            result: gameEventResults.error(1),
            endBase: 3
          },
          3: undefined
        }
      })
    )

    expect(getResult('PO1(E1).1-3')).toEqual(
      getGameEventWithDefaults({
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: gameEventResults.error(1),
            endBase: 3
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('PO1(23)')).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: undefined,
            endBase: 1,
            onBasePutout: gameEventResults.pickOff([2, 3]),
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    // PO3(E2/TH).3-H(UR);1-2
    expect(getResult('PO3(E2/TH).3-H(UR);1-2')).toEqual(
      getGameEventWithDefaults({
        isOut: false,
        pitches: undefined,
        bases: getBases({
          1: {
            endBase: 2,
            result: undefined
          },
          3: {
            endBase: 4,
            result: gameEventResults.error(2)
          }
        })
      })
    )

    // errors with no explicit base movements
    // i dont think this would ever be in a retrosheet file, but it does account for this
    expect(getResult('PO1(E2/TH)')).toEqual(
      getGameEventWithDefaults({
        isOut: false,
        pitches: undefined,
        bases: getBases({
          1: {
            endBase: 2,
            result: gameEventResults.error(2)
          }
        })
      })
    )
    expect(getResult('PO2(E2/TH)')).toEqual(
      getGameEventWithDefaults({
        isOut: false,
        pitches: undefined,
        bases: getBases({
          2: {
            endBase: 3,
            result: gameEventResults.error(2)
          }
        })
      })
    )
    expect(getResult('PO3(E2/TH)')).toEqual(
      getGameEventWithDefaults({
        isOut: false,
        pitches: undefined,
        bases: getBases({
          3: {
            endBase: 4,
            result: gameEventResults.error(2)
          }
        })
      })
    )
  })

  it('handles caught stealing', () => {
    expect(getResult('CS2(26!)')).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: gameEventResults.caughtStealing([2, 6]),
            endBase: 2,
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('CS3(25)')).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            result: gameEventResults.caughtStealing([2, 5]),
            endBase: 3,
            isOut: true
          },
          3: undefined
        }
      })
    )

    expect(getResult('CS2(2!4)')).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: gameEventResults.caughtStealing([2, 4]),
            endBase: 2,
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('CS2(243)')).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            result: gameEventResults.caughtStealing([2, 4, 3]),
            endBase: 2,
            isOut: true
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('POCSH(25)/DP.2X3(56)')).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            result: gameEventResults.putout([5, 6]),
            endBase: 3,
            isOut: true
          },
          3: {
            result: gameEventResults.caughtStealing([2, 5]),
            endBase: 4,
            isOut: true
          }
        }
      })
    )

    expect(getResult('CSH(2)')).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        pitches: undefined,
        bases: getBases({
          3: {
            result: gameEventResults.caughtStealing([2]),
            isOut: true,
            endBase: 4
          }
        })
      })
    )
  })

  it('handles defensive indifference', () => {
    expect(getResult('DI.1-2')).toEqual(
      getGameEventWithDefaults({
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.defensiveIndifference()
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('handles on-base putouts', () => {
    const lineoutDP = handleEvent(getAtBat({ result: '3/L/DP.1X1(3)' }))
    expect(lineoutDP).toEqual(
      getGameEventWithDefaults({
        isOut: true,
        result: gameEventResults.lineOut(3),
        bases: {
          B: undefined,
          1: {
            isOut: true,
            onBasePutout: gameEventResults.putout([3]),
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
      getGameEventWithDefaults({
        result: gameEventResults.fieldersChoice(1),
        bases: {
          B: {
            endBase: 1,
            result: undefined,
            isAtBatResult: true,
            additionalBases: [{ base: 2, result: undefined }]
          },
          1: {
            endBase: 3,
            result: gameEventResults.error(4)
          },
          2: undefined,
          3: undefined
        }
      })
    )
  })

  it('handles stolen bases', () => {
    expect(getResult('SB2')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.stolenBase(2)
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('SB2.1-3(E2/TH)')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.stolenBase(2),
            additionalBases: [{ base: 3, result: gameEventResults.error(2) }]
          },
          2: undefined,
          3: undefined
        }
      })
    )

    expect(getResult('SB3;SB2')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.stolenBase(2)
          },
          2: {
            endBase: 3,
            result: gameEventResults.stolenBase(3)
          },
          3: undefined
        }
      })
    )

    expect(getResult('SB3;SB2;SBH;')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.stolenBase(2)
          },
          2: {
            endBase: 3,
            result: gameEventResults.stolenBase(3)
          },
          3: {
            endBase: 4,
            result: gameEventResults.stolenBase(4)
          }
        }
      })
    )
  })

  it('handles out on advancement (i guess thats what this is', () => {
    expect(getResult('OA.2X3(25)')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: undefined,
          2: {
            isOut: true,
            endBase: 3,
            result: gameEventResults.putout([2, 5])
          },
          3: undefined
        }
      })
    )
  })

  it('handles passed balls, wild pitches, and balks', () => {
    expect(getResult('WP.2-3;1-2')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.wildPitch()
          },
          2: {
            endBase: 3,
            result: gameEventResults.wildPitch()
          },
          3: undefined
        }
      })
    )

    expect(getResult('PB.2-3;1-2')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.passedBall()
          },
          2: {
            endBase: 3,
            result: gameEventResults.passedBall()
          },
          3: undefined
        }
      })
    )

    expect(getResult('BK.2-3;1-2')).toEqual(
      getGameEventWithDefaults({
        result: undefined,
        pitches: undefined,
        bases: {
          B: undefined,
          1: {
            endBase: 2,
            result: gameEventResults.balk()
          },
          2: {
            endBase: 3,
            result: gameEventResults.balk()
          },
          3: undefined
        }
      })
    )
  })

  it('handles foul territory errors', () => {
    expect(getResult('FLE7')).toEqual(
      getGameEventWithDefaults({
        foulTerritoryError: gameEventResults.error(7)
      })
    )
  })
})
