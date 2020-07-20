import { Scorekeeper } from '../lib'

describe('Gameplay Setup', () => {
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
})
