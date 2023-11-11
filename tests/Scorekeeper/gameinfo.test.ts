import { formatStartTime } from '../../lib/utils/time'
import { Scorekeepr } from '../../lib/Scorekeepr'
import { InitialGame, InitialLineupEntry } from '../../lib/Scorekeepr/types'

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

  it('updates the game info', () => {
    const gameInfo: InitialGame = {
      date: '2020-10-15',
      startTime: '7:30pm',
      location: 'The Stadium'
    }
    const sk = new Scorekeepr(gameInfo)

    sk.updateGameInfo({
      homeTeam: { abbreviation: 'HT', fullName: 'The Home Team' }
    })

    expect(sk.gameInfo).toMatchObject({
      ...gameInfo,
      homeTeam: { abbreviation: 'HT', fullName: 'The Home Team' }
    })
  })

  it('sets the initial players', () => {
    const homeLineup: InitialLineupEntry = {
      batters: [
        { player: { name: 'Home Player 1' }, position: 1 },
        { player: { name: 'Home Player 2' }, position: 2 }
      ],
      pitchers: [{ player: { name: 'Home Pitcher' } }]
    }
    const visitingLineup: InitialLineupEntry = {
      batters: [
        { player: { name: 'Visiting Player 1' }, position: 1 },
        { player: { name: 'Visiting Player 2' }, position: 2 }
      ],
      pitchers: [{ player: { name: 'Visiting Pitcher' } }]
    }
    const sk = new Scorekeepr({
      homeLineup,
      visitingLineup
    })

    expect(sk.batters.home).toEqual([
      [{ ...homeLineup.batters[0], inning: 0 }],
      [{ ...homeLineup.batters[1], inning: 0 }]
    ])
    expect(sk.batters.visiting).toEqual([
      [{ ...visitingLineup.batters[0], inning: 0 }],
      [{ ...visitingLineup.batters[1], inning: 0 }]
    ])
    expect(sk.pitchers.home).toEqual([
      {
        ...homeLineup.pitchers[0],
        inning: 0,
        type: 'starter',
        stats: { er: 0 }
      }
    ])
    expect(sk.pitchers.visiting).toEqual([
      {
        ...visitingLineup.pitchers[0],
        inning: 0,
        type: 'starter',
        stats: { er: 0 }
      }
    ])
  })

  it('updates info after initialization', () => {
    const sk = new Scorekeepr()

    const homeLineup = {
      batters: [
        [
          { player: { name: 'Home Player 1' }, position: 3 as const, inning: 0 }
        ],
        [{ player: { name: 'Home Player 2' }, position: 3 as const, inning: 1 }]
      ],
      pitchers: [
        {
          player: { name: 'Home Pitcher 1' },
          type: 'starter' as const,
          inning: 0,
          stats: { er: 0 }
        }
      ]
    }
    const visitingLineup = {
      batters: [
        [
          {
            player: { name: 'Visiting Player 1' },
            position: 3 as const,
            inning: 0
          },
          {
            player: { name: 'Visiting Player 1' },
            position: 3 as const,
            inning: 1
          }
        ]
      ],
      pitchers: [
        {
          player: { name: 'Visiting Pitcher 1' },
          inning: 0,
          type: 'starter' as const,
          stats: { er: 0 }
        }
      ]
    }

    sk.setPlayers({
      home: homeLineup,
      visiting: visitingLineup
    })

    expect(sk.batters.home).toEqual(homeLineup.batters)
    expect(sk.batters.visiting).toEqual(visitingLineup.batters)
    expect(sk.pitchers.home).toEqual(homeLineup.pitchers)
    expect(sk.pitchers.visiting).toEqual(visitingLineup.pitchers)
  })

  it('substitutes players', () => {
    const homeLineup: InitialLineupEntry = {
      batters: [
        { player: { name: 'Home Player 1' }, position: 1 },
        { player: { name: 'Home Player 2' }, position: 2 }
      ],
      pitchers: [{ player: { name: 'Home Pitcher' } }]
    }
    const newHomePlayer = { name: 'The Other Home Player' }
    const visitingLineup: InitialLineupEntry = {
      batters: [
        { player: { name: 'Visiting Player 1' }, position: 1 },
        { player: { name: 'Visiting Player 2' }, position: 2 }
      ],
      pitchers: [{ player: { name: 'Visiting Pitcher' } }]
    }
    const newVisitingPlayer = { name: 'The Other Visiting Player' }

    const sk = new Scorekeepr({
      homeLineup,
      visitingLineup
    })

    sk.subPlayer({
      team: 'home',
      lineupSpot: 0,
      lineupEntry: {
        inning: 1,
        player: newHomePlayer,
        position: 1
      }
    })
    sk.subPlayer({
      team: 'visiting',
      lineupSpot: 1,
      lineupEntry: {
        inning: 2,
        player: newVisitingPlayer,
        position: 2
      }
    })
    sk.subPlayer({
      team: 'home',
      lineupSpot: 2,
      lineupEntry: {
        inning: 2,
        player: { name: 'Another Player' },
        position: 3
      }
    })

    expect(sk.batters.home).toEqual([
      [
        { ...homeLineup.batters[0], inning: 0 },
        { player: newHomePlayer, position: 1, inning: 1 }
      ],
      [{ ...homeLineup.batters[1], inning: 0 }],
      [{ inning: 2, player: { name: 'Another Player' }, position: 3 }]
    ])
    expect(sk.batters.visiting).toEqual([
      [{ ...visitingLineup.batters[0], inning: 0 }],
      [
        { ...visitingLineup.batters[1], inning: 0 },
        { player: newVisitingPlayer, position: 2, inning: 2 }
      ]
    ])
    expect(sk.pitchers.home).toEqual([
      {
        ...homeLineup.pitchers[0],
        inning: 0,
        type: 'starter',
        stats: { er: 0 }
      },
      {
        player: newHomePlayer,
        inning: 1,
        type: 'reliever',
        stats: { er: 0 }
      }
    ])
  })

  it('substitutes pitchers', () => {
    const homeLineup: InitialLineupEntry = {
      batters: [
        { player: { name: 'Home Player 1' }, position: 1 },
        { player: { name: 'Home Player 2' }, position: 2 }
      ],
      pitchers: [{ player: { name: 'Home Pitcher' } }]
    }
    const visitingLineup: InitialLineupEntry = {
      batters: [
        { player: { name: 'Visiting Player 1' }, position: 1 },
        { player: { name: 'Visiting Player 2' }, position: 2 }
      ],
      pitchers: [{ player: { name: 'Visiting Pitcher' } }]
    }
    const sk = new Scorekeepr({
      homeLineup,
      visitingLineup
    })

    const newPitcher = { name: 'New Pitcher' }
    sk.subPitcher({
      team: 'home',
      inning: 1,
      pitcher: {
        player: newPitcher
      }
    })

    expect(sk.pitchers.home).toEqual([
      {
        ...homeLineup.pitchers[0],
        inning: 0,
        type: 'starter',
        stats: { er: 0 }
      },
      {
        player: newPitcher,
        inning: 1,
        type: 'reliever',
        stats: { er: 0 }
      }
    ])
  })

  it('sets an initial inning count', () => {
    const sk = new Scorekeepr({
      initialInningCount: 7
    })

    expect(sk.gameplay.home.length).toBe(7)
  })
})
