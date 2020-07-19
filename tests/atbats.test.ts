import { Scorekeeper } from '../lib'

import { getAtBat, atBatWithDefaults } from './test-utils'

describe('At Bat Events', () => {
  it('records a walk', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.ball()
    scorekeeper.strike()
    scorekeeper.ball()
    scorekeeper.strike()
    scorekeeper.ball()
    scorekeeper.ball()

    const expectedBalls = 4
    const expectedStrikes = 2
    const expectedPitches = expectedBalls + expectedStrikes

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        balls: expectedBalls,
        strikes: expectedStrikes,
        pitchCount: expectedPitches,
        result: {
          type: 'pitcher-result',
          result: 'BB',
          display: 'BB'
        },
        bases: [{ advanced: true, result: undefined, isAtBatResult: true }]
      })
    )

    scorekeeper.ball()

    expect(getAtBat(scorekeeper, 0).balls).toEqual(expectedBalls)
    expect(getAtBat(scorekeeper, 0).pitchCount).toEqual(expectedPitches)
  })

  it('records a strikeout', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.strike()
    scorekeeper.ball()
    scorekeeper.ball()
    scorekeeper.strike()
    scorekeeper.strike()

    const expectedBalls = 2
    const expectedStrikes = 3
    const expectedPitches = expectedBalls + expectedStrikes

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        balls: expectedBalls,
        strikes: expectedStrikes,
        pitchCount: expectedPitches,
        isOut: true,
        result: {
          type: 'pitcher-result',
          result: 'K',
          display: 'K'
        }
      })
    )

    scorekeeper.strike()

    expect(getAtBat(scorekeeper, 0).strikes).toEqual(expectedStrikes)
    expect(getAtBat(scorekeeper, 0).pitchCount).toEqual(expectedPitches)
  })

  it('handles foul tips', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.strike()
    scorekeeper.foul()

    expect(getAtBat(scorekeeper, 0).strikes).toEqual(2)
    expect(getAtBat(scorekeeper, 0).pitchCount).toEqual(2)

    scorekeeper.foul()

    expect(getAtBat(scorekeeper, 0).strikes).toEqual(2)
    expect(getAtBat(scorekeeper, 0).pitchCount).toEqual(3)

    scorekeeper.foul()

    expect(getAtBat(scorekeeper, 0).strikes).toEqual(2)
    expect(getAtBat(scorekeeper, 0).pitchCount).toEqual(4)
  })

  it('records a hit', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hit(1)

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        result: {
          type: 'hit',
          result: 1,
          display: '1B'
        },
        bases: [{ advanced: true, result: undefined, isAtBatResult: true }]
      })
    )

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.hit(4)

    expect(getAtBat(scorekeeper, 1)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        result: {
          type: 'hit',
          result: 4,
          display: 'HR'
        },
        bases: [
          { advanced: true, result: undefined },
          { advanced: true, result: undefined },
          { advanced: true, result: undefined },
          { advanced: true, result: undefined, isAtBatResult: true }
        ]
      })
    )
  })

  it('records a fly out', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.flyout(3)

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: true,
        result: {
          type: 'flyout',
          result: 3,
          display: 'P3'
        }
      })
    )

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.flyout(8)

    expect(getAtBat(scorekeeper, 1)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: true,
        result: {
          type: 'flyout',
          result: 8,
          display: 'F8'
        }
      })
    )

    scorekeeper.setCurrentAtBat({ lineupSpot: 2 })
    scorekeeper.sacrificeFly(9)

    expect(getAtBat(scorekeeper, 2)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: true,
        result: {
          type: 'flyout',
          result: 9,
          display: 'F9'
        },
        isSacrifice: true
      })
    )
  })

  it('records a put out', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.putout([3])

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: true,
        result: {
          type: 'putout',
          result: [3],
          display: '3u'
        }
      })
    )

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.putout([6, 4, 3])

    expect(getAtBat(scorekeeper, 1)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: true,
        result: {
          type: 'putout',
          result: [6, 4, 3],
          display: '6-4-3'
        }
      })
    )

    scorekeeper.setCurrentAtBat({ lineupSpot: 2 })
    scorekeeper.sacrificeBunt([1, 3])

    expect(getAtBat(scorekeeper, 2)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: true,
        result: {
          type: 'putout',
          result: [1, 3],
          display: '1-3'
        },
        isSacrifice: true
      })
    )
  })

  it('records an error', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.defensiveError({ defensivePlayer: 3, baseAdvancedTo: 1 })

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        result: {
          type: 'defensive-error',
          result: 3,
          display: 'E3'
        },
        bases: [{ advanced: true, result: undefined, isAtBatResult: true }]
      })
    )
  })

  it('records a fielders choice', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.fieldersChoice()

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        result: {
          type: 'fielders-choice',
          result: 1,
          display: 'FC'
        },
        bases: [{ advanced: true, result: undefined, isAtBatResult: true }]
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

  it('records a lineout', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.lineout(6)

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: true,
        result: {
          type: 'lineout',
          result: 6,
          display: 'L6'
        }
      })
    )
  })

  it('records an intentional walk', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.intentionalWalk()

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 0,
        isOut: false,
        result: {
          type: 'pitcher-result',
          result: 'IBB',
          display: 'IBB'
        },
        bases: [{ advanced: true, isAtBatResult: true, result: undefined }]
      })
    )
  })

  it('records a hit batter', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hitBatter()

    expect(getAtBat(scorekeeper, 0)).toEqual(
      atBatWithDefaults({
        pitchCount: 1,
        isOut: false,
        result: {
          type: 'pitcher-result',
          result: 'HBP',
          display: 'HBP'
        },
        bases: [{ advanced: true, isAtBatResult: true, result: undefined }]
      })
    )
  })
})
