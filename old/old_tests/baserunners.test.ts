import { Scorekeeper } from '../lib'

import * as resultGenerators from '../lib/resultGenerators'
import { getAtBat, atBatWithDefaults } from './test-utils'

describe('Baserunner Events', () => {
  it('advances the current runner', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.advanceCurrentRunner(1)

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        bases: [{ advanced: true, result: undefined }]
      })
    )

    scorekeeper.advanceCurrentRunner(2)

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        bases: [
          { advanced: true, result: undefined },
          { advanced: true, result: undefined }
        ]
      })
    )

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })

    scorekeeper.hit(1)
    scorekeeper.advanceCurrentRunner(2, scorekeeper.resultGenerators.error(6))

    expect(getAtBat(scorekeeper, 1)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        result: {
          type: 'hit',
          result: 1,
          display: '1B'
        },
        bases: [
          { advanced: true, result: undefined, isAtBatResult: true },
          {
            advanced: true,
            result: {
              type: 'defensive-error',
              result: 6,
              display: 'E6'
            }
          }
        ]
      })
    )
  })

  it('advances runners', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hit(1)
    scorekeeper.advanceCurrentAtBat(3, resultGenerators.error(5))

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        result: resultGenerators.hit(1),
        pitchCount: 1,
        bases: [
          { advanced: true, isAtBatResult: true, result: undefined },
          { advanced: true, result: undefined },
          { advanced: true, result: resultGenerators.error(5) }
        ]
      })
    )

    scorekeeper.nextLineupSpot()
    scorekeeper.intentionalWalk()
    scorekeeper.nextLineupSpot()
    scorekeeper.hit(2)
    scorekeeper.advanceRunners([
      { startBase: 3, endBase: 4, result: undefined },
      { startBase: 1, endBase: 3, result: undefined }
    ])

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        result: resultGenerators.hit(1),
        pitchCount: 1,
        bases: [
          { advanced: true, isAtBatResult: true, result: undefined },
          { advanced: true, result: undefined },
          { advanced: true, result: resultGenerators.error(5) },
          { advanced: true, result: undefined }
        ]
      })
    )

    expect(getAtBat(scorekeeper, 1)).toEqual(
      atBatWithDefaults({
        result: resultGenerators.pitcherResult('IBB'),
        bases: [
          { advanced: true, isAtBatResult: true, result: undefined },
          { advanced: true, result: undefined },
          { advanced: true, result: undefined }
        ]
      })
    )
  })

  it('records an out on the basepaths', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hit(1)
    scorekeeper.currentFrameBasepathOut(
      2,
      scorekeeper.resultGenerators.putout([4, 6])
    )

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        result: {
          type: 'hit',
          result: 1,
          display: '1B'
        },
        isOut: true,
        bases: [
          { advanced: true, result: undefined, isAtBatResult: true },
          {
            advanced: false,
            result: {
              type: 'putout',
              result: [4, 6],
              display: '4-6'
            }
          }
        ]
      })
    )
  })

  it('records a balk', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()
    scorekeeper.balk()

    const atBat = getAtBat(scorekeeper, 0)
    expect(atBat.bases[1]).toEqual({
      advanced: true,
      result: {
        display: 'BK',
        result: 'BK',
        type: 'balk'
      }
    })
  })

  it('records a stolen base', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()

    scorekeeper.stolenBase([2])

    expect(getAtBat(scorekeeper, 0).bases[1]).toEqual({
      advanced: true,
      result: { display: 'SB', result: 2, type: 'stolen-base' }
    })

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()

    scorekeeper.stolenBase([3, 2])

    expect(getAtBat(scorekeeper, 0).bases[2]).toEqual({
      advanced: true,
      result: { display: 'SB', result: 3, type: 'stolen-base' }
    })
    expect(getAtBat(scorekeeper, 1).bases[1]).toEqual({
      advanced: true,
      result: { display: 'SB', result: 2, type: 'stolen-base' }
    })
  })

  it('records defensive indifference', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()

    scorekeeper.defensiveIndifference(2)

    expect(getAtBat(scorekeeper, 0).bases[1]).toEqual({
      advanced: true,
      result: { display: 'DI', result: 2, type: 'defensive-indifference' }
    })
  })

  it('records passed balls', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()

    scorekeeper.passedBall([2])

    expect(getAtBat(scorekeeper, 0).bases[1]).toEqual({
      advanced: true,
      result: { display: 'PB', result: 2, type: 'passed-ball' }
    })

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()
    scorekeeper.passedBall([3, 2])

    expect(getAtBat(scorekeeper, 0).bases[2]).toEqual({
      advanced: true,
      result: { display: 'PB', result: 3, type: 'passed-ball' }
    })
    expect(getAtBat(scorekeeper, 1).bases[1]).toEqual({
      advanced: true,
      result: { display: 'PB', result: 2, type: 'passed-ball' }
    })
  })

  it('records wild pitches', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()

    scorekeeper.wildPitch([2])

    expect(getAtBat(scorekeeper, 0).bases[1]).toEqual({
      advanced: true,
      result: { display: 'WP', result: 2, type: 'wild-pitch' }
    })

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()
    scorekeeper.wildPitch([3, 2])

    expect(getAtBat(scorekeeper, 0).bases[2]).toEqual({
      advanced: true,
      result: { display: 'WP', result: 3, type: 'wild-pitch' }
    })
    expect(getAtBat(scorekeeper, 1).bases[1]).toEqual({
      advanced: true,
      result: { display: 'WP', result: 2, type: 'wild-pitch' }
    })
  })

  it('records a pickoff', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hitBatter()
    scorekeeper.nextLineupSpot()

    scorekeeper.pickOff(1, [1, 3])

    expect(getAtBat(scorekeeper, 0).bases[0].pickOff).toEqual({
      display: '1-3',
      result: [1, 3],
      type: 'putout'
    })
  })
})
