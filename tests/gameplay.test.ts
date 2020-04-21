import { Scorekeeper } from '../lib'
import { Game, InitialGame } from '../lib/types'

describe('Scorekeeper', () => {
  it('initializes gameplay', () => {
    const scorekeeper = new Scorekeeper()

    expect(scorekeeper.gameplay.currentAtBat).toBe(undefined)

    scorekeeper.startGame()

    const { currentAtBat, visiting, home } = scorekeeper.gameplay
    expect(currentAtBat).toEqual({
      team: 'visiting',
      lineupSpot: 0,
      inning: 0
    })
    expect(visiting.length).toBe(9)
    expect(home.length).toBe(9)
  })

  it('sets the current at bat', () => {
    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()
    scorekeeper.setCurrentAtBat({ team: 'home' })

    expect(scorekeeper.gameplay.currentAtBat).toEqual({
      team: 'home',
      lineupSpot: 0,
      inning: 0
    })

    scorekeeper.setCurrentAtBat({ lineupSpot: 3, inning: 4 })

    expect(scorekeeper.gameplay.currentAtBat).toEqual({
      team: 'home',
      lineupSpot: 3,
      inning: 4
    })

    scorekeeper.setCurrentAtBat({ team: 'visiting', lineupSpot: 1, inning: 6 })

    expect(scorekeeper.gameplay.currentAtBat).toEqual({
      team: 'visiting',
      lineupSpot: 1,
      inning: 6
    })
  })

  it('throws an error if theres not current gameplay', () => {
    const scorekeeper = new Scorekeeper()

    try {
      scorekeeper.ball()
    } catch (e) {
      expect(e.message).toEqual(
        'Attempted to record gameply without current at bat'
      )
    }
  })

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

    expect(getAtBat(0).balls).toEqual(expectedBalls)
    expect(getAtBat(0).strikes).toEqual(expectedStrikes)
    expect(getAtBat(0).pitchCount).toEqual(expectedPitches)
    expect(getAtBat(0).result).toEqual({
      type: 'pitcher-result',
      result: 'BB',
      display: 'BB'
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

    expect(getAtBat(0).balls).toEqual(expectedBalls)
    expect(getAtBat(0).strikes).toEqual(expectedStrikes)
    expect(getAtBat(0).pitchCount).toEqual(expectedPitches)
    expect(getAtBat(0).result).toEqual({
      type: 'pitcher-result',
      result: 'K',
      display: 'K'
    })
    expect(getAtBat(0).isOut).toEqual(true)

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

    expect(getAtBat(0).result).toEqual({
      type: 'hit',
      result: 1,
      display: '1B'
    })
    expect(getAtBat(0).pitchCount).toEqual(1)

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.hit(4)

    expect(getAtBat(1).result).toEqual({
      type: 'hit',
      result: 4,
      display: 'HR'
    })
    expect(getAtBat(1).pitchCount).toEqual(1)
  })

  it('records a fly out', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.flyout(3)

    expect(getAtBat(0).result).toEqual({
      type: 'flyout',
      result: 3,
      display: 'P3'
    })
    expect(getAtBat(0).pitchCount).toEqual(1)

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.flyout(8)

    expect(getAtBat(1).result).toEqual({
      type: 'flyout',
      result: 8,
      display: 'F8'
    })
    expect(getAtBat(1).pitchCount).toEqual(1)
  })

  it('records a put out', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.putout([3])

    expect(getAtBat(0).result).toEqual({
      type: 'putout',
      result: [3],
      display: '3u'
    })
    expect(getAtBat(0).pitchCount).toEqual(1)

    scorekeeper.setCurrentAtBat({ lineupSpot: 1 })
    scorekeeper.putout([6, 4, 3])

    expect(getAtBat(1).result).toEqual({
      type: 'putout',
      result: [6, 4, 3],
      display: '6-4-3'
    })
    expect(getAtBat(1).pitchCount).toEqual(1)
  })

  it('records an error', () => {
    function getAtBat(lineupSpot: number) {
      return scorekeeper.gameplay.visiting[0][lineupSpot]
    }

    const scorekeeper = new Scorekeeper()
    scorekeeper.startGame()

    scorekeeper.defensiveError(3)

    expect(getAtBat(0).result).toEqual({
      type: 'defensive-error',
      result: 3,
      display: 'E3'
    })
    expect(getAtBat(0).pitchCount).toEqual(1)
  })
})
