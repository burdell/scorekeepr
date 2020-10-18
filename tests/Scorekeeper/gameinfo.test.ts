import { formatStartTime } from '../../lib/utils/time'
import { Scorekeeper } from '../../lib/Scorekeeper'
import { Game } from '../../lib/types'

describe('Scorekeeper - Game Info', () => {
  it('correctly formats start time', () => {
    const correctlyFormatted = '7:45PM'
    expect(formatStartTime(correctlyFormatted)).toEqual(correctlyFormatted)

    const noPm = '6:21'
    expect(formatStartTime(noPm)).toEqual('6:21PM')

    const invalidTime1 = '0:00'
    expect(formatStartTime(invalidTime1)).toEqual(undefined)

    const invalidTime2 = '0:00PM'
    expect(formatStartTime(invalidTime2)).toEqual(undefined)
  })

  describe('it sets the game info', () => {
    const gameInfo: Game = {
      homeTeam: { abbreviation: 'HT', fullName: 'The Home Team' },
      visitingTeam: { abbreviation: 'VT', fullName: 'The Visiting Team' },
      date: '2020-10-15',
      startTime: '7:30pm',
      location: 'The Stadium',
      id: 'TheGameId'
    }
    const sk = new Scorekeeper(gameInfo)

    expect(sk.gameInfo).toEqual(gameInfo)
  })

  describe('it sets the lineups', () => {
    const homeLineup = [
      { player: { name: 'Home Player 1' }, position: 1 },
      { player: { name: 'Home Player 2' }, position: 2 }
    ]
    const visitingLineup = [
      { player: { name: 'Visiting Player 1' }, position: 1 },
      { player: { name: 'Visiting Player 2' }, position: 2 }
    ]
    const sk = new Scorekeeper({
      homeLineup,
      visitingLineup
    })

    expect(sk.lineups.home).toEqual([
      [{ ...homeLineup[0], inning: 0 }],
      [{ ...homeLineup[1], inning: 0 }]
    ])
    expect(sk.lineups.visiting).toEqual([
      [{ ...visitingLineup[0], inning: 0 }],
      [{ ...visitingLineup[1], inning: 0 }]
    ])
  })

  it('substitutes players', () => {
    const homeLineup = [
      { player: { name: 'Home Player 1' }, position: 1 },
      { player: { name: 'Home Player 2' }, position: 2 }
    ]
    const newHomePlayer = { name: 'The Other Home Player' }
    const visitingLineup = [
      { player: { name: 'Visiting Player 1' }, position: 1 },
      { player: { name: 'Visiting Player 2' }, position: 2 }
    ]
    const newVisitingPlayer = { name: 'The Other Visiting Player' }

    const sk = new Scorekeeper({
      homeLineup,
      visitingLineup
    })
    sk.substituteHomePlayer(0, {
      inning: 1,
      player: newHomePlayer,
      position: 1
    })
    sk.substituteVisitingPlayer(1, {
      inning: 2,
      player: newVisitingPlayer,
      position: 2
    })
    sk.substituteHomePlayer(2, {
      inning: 2,
      player: { name: 'Another Player' },
      position: 3
    })

    expect(sk.lineups.home).toEqual([
      [
        { ...homeLineup[0], inning: 0 },
        { player: newHomePlayer, position: 1, inning: 1 }
      ],
      [{ ...homeLineup[1], inning: 0 }],
      [{ inning: 2, player: { name: 'Another Player' }, position: 3 }]
    ])
    expect(sk.lineups.visiting).toEqual([
      [{ ...visitingLineup[0], inning: 0 }],
      [
        { ...visitingLineup[1], inning: 0 },
        { player: newVisitingPlayer, position: 2, inning: 2 }
      ]
    ])
  })
})
