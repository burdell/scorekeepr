import { formatStartTime } from '../../lib/utils/time'
import { Scorekeepr } from '../../lib/Scorekeepr'
import { InitialGame, InitialLineupEntry } from '../../lib/types'

describe('Scorekeepr - Game Info', () => {
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

  it('sets the game info', () => {
    const gameInfo: InitialGame = {
      homeTeam: { abbreviation: 'HT', fullName: 'The Home Team' },
      visitingTeam: { abbreviation: 'VT', fullName: 'The Visiting Team' },
      date: '2020-10-15',
      startTime: '7:30pm',
      location: 'The Stadium',
      id: 'TheGameId'
    }
    const sk = new Scorekeepr(gameInfo)

    expect(sk.gameInfo).toEqual(gameInfo)
  })

  it('sets the lineups', () => {
    const homeLineup: InitialLineupEntry[] = [
      { player: { name: 'Home Player 1' }, position: 1 },
      { player: { name: 'Home Player 2' }, position: 2 }
    ]
    const visitingLineup: InitialLineupEntry[] = [
      { player: { name: 'Visiting Player 1' }, position: 1 },
      { player: { name: 'Visiting Player 2' }, position: 2 }
    ]
    const sk = new Scorekeepr({
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
    const homeLineup: InitialLineupEntry[] = [
      { player: { name: 'Home Player 1' }, position: 1 },
      { player: { name: 'Home Player 2' }, position: 2 }
    ]
    const newHomePlayer = { name: 'The Other Home Player' }
    const visitingLineup: InitialLineupEntry[] = [
      { player: { name: 'Visiting Player 1' }, position: 1 },
      { player: { name: 'Visiting Player 2' }, position: 2 }
    ]
    const newVisitingPlayer = { name: 'The Other Visiting Player' }

    const sk = new Scorekeepr({
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

  it('sets an initial inning count', () => {
    const sk = new Scorekeepr({
      initialInningCount: 7
    })

    expect(sk.gameplay.home.length).toBe(7)
  })
})
