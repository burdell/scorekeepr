import { Scorekeeper } from '../../lib/Scorekeeper'
import { getAction, getBases } from '../../lib/retrosheet/utilities'
import * as resultGenerators from '../../lib/retrosheet/generators/result'

describe('Scorekeeper - outs', () => {
  it('handles sacrifice flys', () => {
    const sk = new Scorekeeper()

    sk.handleGameEvent({
      event: getAction({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: resultGenerators.hit(3),
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
      event: getAction({
        result: resultGenerators.flyOut(7),
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
      result: resultGenerators.flyOut(7),
      strikes: 0,
      isSacrifice: true
    })
  })

  it('handles sacrifice bunts', () => {
    const sk = new Scorekeeper()

    sk.handleGameEvent({
      event: getAction({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: resultGenerators.hit(1),
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
      event: getAction({
        result: resultGenerators.putout([3, 4]),
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
      result: resultGenerators.putout([3, 4]),
      strikes: 0,
      isSacrifice: true
    })
  })
})
