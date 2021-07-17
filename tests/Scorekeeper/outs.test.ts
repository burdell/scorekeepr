import { Scorekeepr } from '../../lib/Scorekeepr'
import { getGameEvent, getBases } from '../../lib/generators/utils'
import * as actions from '../../lib/generators/actions'

describe('Scorekeepr - outs', () => {
  it('handles strikeouts with a catcher putout', () => {
    const sk = new Scorekeepr()

    sk.handleGameEvent({
      event: getGameEvent({
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
      }),
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    expect(sk.gameplay.visiting[0][0]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: false,
          isAtBatResult: true,
          result: actions.putout([2, 3])
        }
      ],
      isOut: true,
      pitchCount: 0,
      result: actions.pitcherResult('K'),
      strikes: 0
    })
  })

  it('handles sacrifice flys', () => {
    const sk = new Scorekeepr()

    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: actions.hit(3),
        bases: getBases({
          B: {
            endBase: 3,
            isAtBatResult: true
          }
        })
      }),
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getGameEvent({
        result: actions.flyOut(7),
        isSacrifice: true,
        isOut: true,
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        bases: getBases({
          3: {
            endBase: 4
          }
        })
      }),
      inning: 0,
      lineupSpot: 1,
      team: 'visiting'
    })

    expect(sk.gameplay.visiting[0][0]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: true,
          result: undefined
        },
        {
          advanced: true,
          result: undefined
        },
        {
          advanced: true,
          isAtBatResult: true,
          result: undefined
        },
        {
          advanced: true,
          result: undefined
        }
      ],
      isOut: false,
      pitchCount: 1,
      result: {
        display: '3B',
        result: 3,
        type: 'hit'
      },
      strikes: 0
    })

    expect(sk.gameplay.visiting[0][1]).toEqual({
      balls: 0,
      bases: [],
      isOut: true,
      pitchCount: 1,
      result: actions.flyOut(7),
      strikes: 0,
      isSacrifice: true
    })
  })

  it('handles sacrifice bunts', () => {
    const sk = new Scorekeepr()

    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: actions.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true
          }
        })
      }),
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getGameEvent({
        result: actions.putout([3, 4]),
        isSacrifice: true,
        isOut: true,
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        bases: getBases({
          1: {
            endBase: 2
          }
        })
      }),
      inning: 0,
      lineupSpot: 1,
      team: 'visiting'
    })

    expect(sk.gameplay.visiting[0][0]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: true,
          result: undefined,
          isAtBatResult: true
        },
        {
          advanced: true,
          result: undefined
        }
      ],
      isOut: false,
      pitchCount: 1,
      result: {
        display: '1B',
        result: 1,
        type: 'hit'
      },
      strikes: 0
    })

    expect(sk.gameplay.visiting[0][1]).toEqual({
      balls: 0,
      bases: [],
      isOut: true,
      pitchCount: 1,
      result: actions.putout([3, 4]),
      strikes: 0,
      isSacrifice: true
    })
  })

  it('handles on-base putouts', () => {
    const sk = new Scorekeepr()

    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: actions.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true
          }
        })
      }),
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getGameEvent({
        result: undefined,
        bases: getBases({
          1: {
            endBase: 1,
            onBasePutout: actions.putout([1, 3]),
            isOut: true
          }
        })
      }),
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    expect(sk.gameplay.visiting[0][0]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: true,
          isAtBatResult: true,
          onBasePutout: actions.putout([1, 3]),
          result: undefined
        }
      ],
      isOut: true,
      pitchCount: 1,
      result: actions.hit(1),
      strikes: 0
    })
  })
})
