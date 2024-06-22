import { Scorekeepr } from '..'
import { getGameEvent, getBases } from '../../generators/utils'
import * as gameEventResults from '../../generators/gameEventResults'

describe('Scorekeepr - baserunning', () => {
  it('records unsuccessful attempts to gain additional bases', () => {
    const sk = new Scorekeepr()

    // ** BATTER ATTEMPT **
    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: gameEventResults.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            additionalBases: [
              { base: 2, result: gameEventResults.putout([8, 4]) }
            ]
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
          result: undefined
        },
        {
          advanced: false,
          result: gameEventResults.putout([8, 4])
        }
      ],
      isOut: true,
      pitchCount: 1,
      result: gameEventResults.hit(1),
      strikes: 0
    })

    // ** RUNNER ATTEMPT **
    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: gameEventResults.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true
          }
        })
      }),
      inning: 0,
      lineupSpot: 1,
      team: 'visiting'
    })
    sk.handleGameEvent({
      event: getGameEvent({
        isOut: true,
        bases: getBases({
          1: {
            endBase: 2,
            result: gameEventResults.error(3),
            additionalBases: [
              { base: 3, result: gameEventResults.putout([3, 5]) }
            ]
          }
        })
      }),
      inning: 0,
      lineupSpot: 2,
      team: 'visiting'
    })

    expect(sk.gameplay.visiting[0][1]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: true,
          isAtBatResult: true,
          result: undefined
        },
        {
          advanced: true,
          result: gameEventResults.error(3)
        },
        {
          advanced: false,
          result: gameEventResults.putout([3, 5])
        }
      ],
      isOut: false,
      pitchCount: 1,
      result: gameEventResults.hit(1),
      strikes: 0
    })
  })

  it('records successful attempts to gain additional bases', () => {
    const sk = new Scorekeepr()

    // ** BATTER ATTEMPT **
    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: gameEventResults.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true,
            additionalBases: [{ base: 2 }]
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
          result: undefined
        },
        {
          advanced: true,
          result: undefined
        }
      ],
      isOut: false,
      pitchCount: 1,
      result: gameEventResults.hit(1),
      strikes: 0
    })

    // ** RUNNER ATTEMPT **
    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: gameEventResults.hit(1),
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true
          }
        })
      }),
      inning: 0,
      lineupSpot: 1,
      team: 'visiting'
    })
    sk.handleGameEvent({
      event: getGameEvent({
        bases: getBases({
          1: {
            endBase: 2,
            result: gameEventResults.error(3),
            additionalBases: [{ base: 3 }]
          }
        })
      }),
      inning: 0,
      lineupSpot: 2,
      team: 'visiting'
    })

    expect(sk.gameplay.visiting[0][1]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: true,
          isAtBatResult: true,
          result: undefined
        },
        {
          advanced: true,
          result: gameEventResults.error(3)
        },
        {
          advanced: true
        }
      ],
      isOut: false,
      pitchCount: 1,
      result: gameEventResults.hit(1),
      strikes: 0
    })
  })
})
