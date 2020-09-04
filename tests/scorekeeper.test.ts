import { Scorekeeper } from '../lib/Scorekeeper'
import { getAction, getBases } from '../lib/retrosheet/utilities'
import * as actionGenerators from '../lib/retrosheet/generators/action'

describe('Scorekeeper tests', () => {
  it('handles retrosheet events', () => {
    const scorekeer = new Scorekeeper()
    const action = actionGenerators.hit(1)

    scorekeer.handleGameEvent({
      event: action,
      inning: 0,
      lineupSpot: 0,
      team: 'visiting'
    })

    expect(scorekeer.gameplay.visiting[0][0]).toEqual({
      balls: 0,
      bases: [
        {
          advanced: true,
          isAtBatResult: true,
          result: undefined
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
  })
})
