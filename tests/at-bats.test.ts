import { Scorekeeper } from '../lib'
import { Game, InitialGame } from '../lib/types'

describe('At Bat Events', () => {
  it('records a walk', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

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

    expect(getAtBat(0)).toEqual({
      balls: expectedBalls,
      strikes: expectedStrikes,
      pitchCount: expectedPitches,
      isOut: false,
      result: {
        type: 'pitcher-result',
        result: 'BB',
        display: 'BB'
      }
    })

    scorekeeper.ball()

    expect(getAtBat(0).balls).toEqual(expectedBalls)
    expect(getAtBat(0).pitchCount).toEqual(expectedPitches)
  })

  it('records a strikeout', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

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

    expect(getAtBat(0)).toEqual({
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

    scorekeeper.strike()

    expect(getAtBat(0).strikes).toEqual(expectedStrikes)
    expect(getAtBat(0).pitchCount).toEqual(expectedPitches)
  })

  it('handles foul tips', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.strike()
    scorekeeper.foulTip()

    expect(getAtBat(0).strikes).toEqual(2)
    expect(getAtBat(0).pitchCount).toEqual(2)

    scorekeeper.foulTip()

    expect(getAtBat(0).strikes).toEqual(2)
    expect(getAtBat(0).pitchCount).toEqual(3)

    scorekeeper.foulTip()

    expect(getAtBat(0).strikes).toEqual(2)
    expect(getAtBat(0).pitchCount).toEqual(4)
  })

  it('records a hit', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.hit(1)

    expect(getAtBat(0)).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      isOut: false,
      result: {
        type: 'hit',
        result: 1,
        display: '1B'
      }
    })

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.hit(4)

    expect(getAtBat(1)).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      isOut: false,
      result: {
        type: 'hit',
        result: 4,
        display: 'HR'
      }
    })
  })

  it('records a fly out', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.flyout(3)

    expect(getAtBat(0)).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      isOut: true,
      result: {
        type: 'flyout',
        result: 3,
        display: 'P3'
      }
    })

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.flyout(8)

    expect(getAtBat(1)).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      isOut: true,
      result: {
        type: 'flyout',
        result: 8,
        display: 'F8'
      }
    })
  })

  it('records a put out', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.putout([3])

    expect(getAtBat(0)).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      isOut: true,
      result: {
        type: 'putout',
        result: [3],
        display: '3u'
      }
    })

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.putout([6, 4, 3])

    expect(getAtBat(1)).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      isOut: true,
      result: {
        type: 'putout',
        result: [6, 4, 3],
        display: '6-4-3'
      }
    })
  })

  it('records an error', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.defensiveError(3)

    expect(getAtBat(0)).toEqual({
      balls: 0,
      strikes: 0,
      pitchCount: 1,
      isOut: false,
      result: {
        type: 'defensive-error',
        result: 3,
        display: 'E3'
      }
    })
  })
})