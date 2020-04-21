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
    expect(getAtBat(0).result!.display).toEqual('BB')

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
    expect(getAtBat(0).result!.display).toEqual('K')
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
})
