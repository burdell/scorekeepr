import { Scorekeepr } from '../../lib/Scorekeepr'
import * as actions from '../../lib/generators/actions'
import * as gameEvents from '../../lib/generators/gameEvents'
import { GameStats, GameEvent } from '../../lib/types'

const { getBases } = gameEvents

describe('Scorekeeper - game stats', () => {
  function getStats(overrides: Partial<GameStats>): GameStats {
    return {
      scoring: [0],
      runs: 0,
      hits: 0,
      errors: 0,
      ...overrides
    }
  }

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

  it('calculates game statistics', () => {
    const sk = new Scorekeepr()

    sk.handleGameEvent({
      event: gameEvents.hit(1),
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    expect(sk.stats.visiting).toEqual(
      getStats({
        hits: 1
      })
    )

    sk.handleGameEvent({
      event: getEventWithDefaults({
        result: actions.error(6),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 1
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

    expect(sk.stats.visiting).toEqual(
      getStats({
        hits: 1,
        errors: 1
      })
    )

    sk.handleGameEvent({
      event: getEventWithDefaults({
        result: actions.hit(4),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 4
          },
          1: {
            endBase: 4
          },
          2: {
            endBase: 4
          }
        })
      }),
      inning: 0,
      lineupSpot: 2,
      team: 'visiting'
    })

    expect(sk.stats.visiting).toEqual(
      getStats({
        hits: 2,
        errors: 1,
        runs: 3,
        scoring: [3]
      })
    )

    sk.handleGameEvent({
      event: getEventWithDefaults({
        result: actions.hit(4),
        bases: getBases({
          B: {
            isAtBatResult: true,
            endBase: 4
          }
        })
      }),
      inning: 1,
      lineupSpot: 0,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getEventWithDefaults({
        result: actions.hit(1),
        bases: getBases({
          B: {
            result: actions.error(4),
            endBase: 2
          }
        })
      }),
      inning: 1,
      lineupSpot: 1,
      team: 'visiting'
    })

    sk.handleGameEvent({
      event: getEventWithDefaults({
        bases: getBases({
          B: {
            result: undefined,
            endBase: 2
          }
        })
      }),
      inning: 1,
      lineupSpot: 2,
      team: 'visiting'
    })

    expect(sk.stats.visiting).toEqual(
      getStats({
        hits: 4,
        errors: 2,
        runs: 4,
        scoring: [3, 1]
      })
    )
  })
})
