import { Scorekeeper } from '../lib'
import { Game, InitialGame } from '../lib/types'

describe('Scorekeeper', () => {
  it('initializes an empty game', () => {
    const scorekeeper = new Scorekeeper()

    const currentGame = scorekeeper.gameInfo
    const { home, visiting } = scorekeeper.lineups
    expect(currentGame.date).toBe('')
    expect(currentGame.homeTeam).toEqual('')
    expect(currentGame.visitingTeam).toEqual('')
    expect(home).toEqual([])
    expect(visiting).toEqual([])
  })

  it('initializes a game with some data', () => {
    const initialGameInfo = {
      date: '2020-08-09',
      homeTeam: 'Atlanta Braves',
      visitingTeam: 'Washington Nationals',
      startTime: '7:00pm',
      location: 'Truist Park',
      id: 'GAMEID'
    }
    const initialLineups = {
      homeLineup: [
        {
          player: { name: 'Freddie Freeman', number: 5 },
          position: 3
        }
      ],
      visitingLineup: [
        {
          player: { name: 'Pete Alonson', number: 20 },
          position: 3
        }
      ]
    }

    const initialGame: InitialGame = { ...initialGameInfo, ...initialLineups }

    const scorekeeper = new Scorekeeper(initialGame)
    const currentGame = scorekeeper.gameInfo
    const currentLineups = scorekeeper.lineups

    expect(currentGame).toEqual(initialGameInfo)
    expect(currentLineups.home).toEqual([
      [{ ...initialLineups.homeLineup[0], inning: 0 }]
    ])
    expect(currentLineups.visiting).toEqual([
      [{ ...initialLineups.visitingLineup[0], inning: 0 }]
    ])
  })

  it('updates game info', () => {
    const initialGame: Partial<Game> = {
      date: '2020-08-09',
      homeTeam: 'Atlanta Braves',
      visitingTeam: 'Washington Nationals',
      startTime: '7:00pm',
      location: 'Truist Park'
    }
    const scorekeeper = new Scorekeeper(initialGame)

    expect(scorekeeper.gameInfo.startTime).toEqual(initialGame.startTime)

    const newStartTime = '10:00pm'
    scorekeeper.updateGameInfo({ startTime: newStartTime })

    expect(scorekeeper.gameInfo.startTime).toEqual(newStartTime)
  })

  it('makes subsitutions in the lineup', () => {
    const scorekeeper = new Scorekeeper()

    const homePlayer = {
      inning: 0,
      position: 3,
      player: { name: 'Freddie Freeman', number: 5 }
    }
    scorekeeper.substituteHomePlayer(0, homePlayer)
    const visitingPlayer = {
      inning: 0,
      position: 3,
      player: { name: 'Pete Alonso', number: 20 }
    }
    scorekeeper.substituteVisitingPlayer(0, visitingPlayer)

    expect(scorekeeper.lineups.home[0][0]).toEqual(homePlayer)
    expect(scorekeeper.lineups.visiting[0][0]).toEqual(visitingPlayer)

    const anotherHomePlayer = {
      inning: 7,
      position: 6,
      player: { name: 'Dansby Swanson', number: 6 }
    }
    scorekeeper.substituteHomePlayer(0, anotherHomePlayer)

    expect(scorekeeper.lineups.home[0][1]).toEqual(anotherHomePlayer)
  })

  it('goes to the next inning', () => {
    const scorekeeper = new Scorekeeper()

    scorekeeper.startGame()
    expect(scorekeeper.gameplay.currentAtBat!.inning).toBe(0)

    scorekeeper.nextInning()

    expect(scorekeeper.gameplay.currentAtBat!.inning).toBe(1)
  })

  it('goes to the next lineup spot', () => {
    const scorekeeper = new Scorekeeper()

    scorekeeper.startGame()
    expect(scorekeeper.gameplay.currentAtBat!.lineupSpot).toBe(0)

    scorekeeper.nextLineupSpot()

    expect(scorekeeper.gameplay.currentAtBat!.lineupSpot).toBe(1)
  })
})
