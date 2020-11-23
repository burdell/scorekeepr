import { Scorekeeper } from '../../lib/Scorekeeper'
import { getBases } from '../../lib/Scorekeeper/generators/'
import * as actionGenerators from '../../lib/Scorekeeper/generators/action'
import * as resultGenerators from '../../lib/Scorekeeper/generators/result'
import { Stats, GameEvent } from '../../lib/types'

describe('Scorekeeper - game stats', () => {
  function getStats(overrides: Partial<Stats>): Stats {
    return {
      scoring: [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    const sk = new Scorekeeper()

    sk.handleGameEvent({
      event: actionGenerators.hit(1),
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
        result: resultGenerators.error(6),
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
        result: resultGenerators.hit(4),
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
        scoring: [3, 0, 0, 0, 0, 0, 0, 0, 0]
      })
    )

    sk.handleGameEvent({
      event: getEventWithDefaults({
        result: resultGenerators.hit(4),
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
        result: resultGenerators.hit(1),
        bases: getBases({
          B: {
            result: resultGenerators.error(4),
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
        scoring: [3, 1, 0, 0, 0, 0, 0, 0, 0]
      })
    )
  })
})
