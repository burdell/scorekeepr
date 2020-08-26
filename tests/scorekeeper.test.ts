import { Scorekeeper } from '../lib/Scorekeeper'
import { getAction, getBases } from '../lib/retrosheet/utilities'
import * as actionGenerators from '../lib/retrosheet/generators/action'

describe('Scorekeeper tests', () => {
  it('handles retrosheet events', () => {
    const scorekeer = new Scorekeeper()
    const action = actionGenerators.hit(1)

    scorekeer.handleRetrosheetEvent({
      retrosheetEvent: action,
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

    // scorekeer.handleRetrosheetEvent({
    //   retrosheetEvent: {
    //     result: undefined,
    //     bases: getBases({
    //       1: {
    //         endBase: 2,
    //         result: undefined
    //       }
    //     }),
    //     pitches: undefined,
    //     isOut: false
    //   },
    //   inning: 0,
    //   lineupSpot: 0,
    //   team: 'visiting'
    // })

    // expect(scorekeer.gameplay.visiting[0][0]).toEqual({
    //   balls: 0,
    //   bases: [
    //     {
    //       advanced: true,
    //       isAtBatResult: true,
    //       result: undefined
    //     },
    //     {
    //       advanced: true,
    //       isAtBatResult: false,
    //       result: undefined
    //     }
    //   ],
    //   isOut: false,
    //   pitchCount: 0,
    //   result: {
    //     display: '1B',
    //     result: 1,
    //     type: 'hit'
    //   },
    //   strikes: 0
    // })
  })
})
