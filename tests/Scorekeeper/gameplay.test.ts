import { Scorekeeper } from '../../lib/Scorekeeper'
import { getGameEvent } from '../../lib/Scorekeeper/generators/'
import * as resultGenerators from '../../lib/Scorekeeper/generators/result'

describe('Scorekeeper - Gameplay', () => {
  it('handles events for innings that arent yet there', () => {
    const sk = new Scorekeeper()
    const result = resultGenerators.lineOut(7)
    sk.handleGameEvent({
      event: getGameEvent({
        result,
        isOut: true,
        pitches: {
          pitchCount: 1,
          strikes: 0,
          balls: 0
        }
      }),
      inning: 10,
      lineupSpot: 0,
      team: 'visiting'
    })
    expect(sk.gameplay.visiting[10][0]).toEqual({
      balls: 0,
      bases: [],
      isOut: true,
      pitchCount: 1,
      result,
      strikes: 0
    })
  })
})
