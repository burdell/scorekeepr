import { Scorekeepr } from '../../lib/Scorekeepr'
import * as gameEvents from '../../lib/generators/gameEvents'
import * as actions from '../../lib/generators/actions'

const { getGameEvent, getBases } = gameEvents

describe('Scorekeepr tests', () => {
  it('handles gameplay events', () => {
    const sk = new Scorekeepr()
    const action = gameEvents.hit(1)

    sk.handleGameEvent({
      event: action,
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getGameEvent({
        result: actions.pitcherResult('BB'),
        pitches: {
          balls: 4,
          strikes: 2,
          pitchCount: 8
        },
        bases: getBases({
          B: {
            endBase: 1,
            isAtBatResult: true
          },
          1: {
            endBase: 2
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
          2: {
            endBase: 3,
            result: actions.stolenBase(3)
          }
        })
      }),
      inning: 0,
      lineupSpot: 2,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: actions.hit(2),
        bases: getBases({
          B: {
            endBase: 2,
            isAtBatResult: true
          },
          1: {
            endBase: 4
          },
          3: {
            endBase: 4
          }
        })
      }),
      inning: 0,
      lineupSpot: 2,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getGameEvent({
        pitches: {
          balls: 0,
          strikes: 0,
          pitchCount: 1
        },
        result: undefined,
        bases: getBases({
          2: {
            endBase: 3,
            result: actions.putout([1, 5]),
            isOut: true
          }
        })
      }),
      inning: 0,
      lineupSpot: 3,
      team: 'visiting'
    })

    expect(sk.gameplay.visiting[0][0]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: true,
          isAtBatResult: true
        },
        {
          advanced: true
        },
        {
          advanced: true,
          result: actions.stolenBase(3)
        },
        {
          advanced: true
        }
      ],
      isOut: false,
      pitchCount: 0,
      result: {
        display: '1B',
        result: 1,
        type: 'hit'
      },
      strikes: 0
    })

    expect(sk.gameplay.visiting[0][1]).toEqual({
      balls: 4,
      strikes: 2,
      pitchCount: 8,
      bases: [
        {
          advanced: true,
          isAtBatResult: true,
          result: undefined
        },
        {
          advanced: true
        },
        {
          advanced: true
        },
        {
          advanced: true
        }
      ],
      isOut: false,
      result: actions.pitcherResult('BB')
    })

    expect(sk.gameplay.visiting[0][2]).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      bases: [
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
          advanced: false,
          result: actions.putout([1, 5])
        }
      ],
      isOut: true,
      result: actions.hit(2)
    })

    expect(sk.gameplay.visiting[0].length).toEqual(9)
  })

  it('handles batting around in the order', () => {
    const sk = new Scorekeepr()
    Array(9)
      .fill(null)
      .map((_, i) => {
        sk.handleGameEvent({
          event: getGameEvent({ result: actions.pitcherResult('BB') }),
          inning: 0,
          lineupSpot: i,
          team: 'visiting'
        })
      })

    Array(2)
      .fill(null)
      .map((_, i) => {
        sk.handleGameEvent({
          event: getGameEvent({ result: actions.pitcherResult('HB') }),
          inning: 0,
          lineupSpot: i,
          team: 'visiting'
        })
      })

    expect(sk.gameplay.visiting[0].length).toEqual(18)
    expect(sk.gameplay.visiting[0][0].result).toEqual(
      actions.pitcherResult('BB')
    )
    expect(sk.gameplay.visiting[0][9].result).toEqual(
      actions.pitcherResult('HB')
    )
    expect(sk.gameplay.visiting[0][10].result).toEqual(
      actions.pitcherResult('HB')
    )
  })
})
