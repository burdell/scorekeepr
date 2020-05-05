import { join } from 'path'

import { getRetrosheetScorekeeper } from '../lib'

describe('Retrosheet Parser', () => {
  it('it parses Retrosheet game data', async () => {
    const scorekeeper = await getRetrosheetScorekeeper(
      join(__dirname, './test_game.txt')
    )
    const { gameInfo } = scorekeeper

    expect(gameInfo.homeTeam).toEqual('Chicago Cubs')
    expect(gameInfo.visitingTeam).toEqual('Atlanta Braves')
    expect(gameInfo.date).toEqual('2019/06/25')
    expect(gameInfo.location).toEqual('Wrigley Field')
    expect(gameInfo.startTime).toEqual('7:05PM')
  })

  it('sets the lineups', async () => {
    const scorekeeper = await getRetrosheetScorekeeper(
      join(__dirname, './test_game.txt')
    )
    const { gameInfo, lineups } = scorekeeper

    expect(lineups.home).toEqual([
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Kyle Schwarber' },
          position: 7
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Kris Bryant' },
          position: 9
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Anthony Rizzo' },
          position: 3
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Javier Baez' },
          position: 6
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Willson Contreras' },
          position: 2
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'David Bote' },
          position: 5
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Addison Russell' },
          position: 4
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Adbert Alzolay' },
          position: 1
        },
        {
          inning: 4,
          player: { number: undefined, name: 'Mike Montgomery' },
          position: 1
        },
        {
          inning: 7,
          player: { number: undefined, name: 'Jason Heyward' },
          position: 11
        },
        {
          inning: 7,
          player: { number: undefined, name: 'Brad Brach' },
          position: 1
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Albert Almora' },
          position: 8
        }
      ]
    ])

    expect(lineups.visiting).toEqual([
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Ronald Acuna' },
          position: 8
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Dansby Swanson' },
          position: 6
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Freddie Freeman' },
          position: 3
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Josh Donaldson' },
          position: 5
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Nick Markakis' },
          position: 9
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Austin Riley' },
          position: 7
        },
        {
          inning: 9,
          player: { number: undefined, name: 'Charlie Culberson' },
          position: 7
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Brian McCann' },
          position: 2
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Ozzie Albies' },
          position: 4
        }
      ],
      [
        {
          inning: 1,
          player: { number: undefined, name: 'Max Fried' },
          position: 1
        },
        {
          inning: 7,
          player: { number: undefined, name: 'Johan Camargo' },
          position: 11
        },
        {
          inning: 7,
          player: { number: undefined, name: 'Sean Newcomb' },
          position: 1
        },
        {
          inning: 8,
          player: { number: undefined, name: 'Anthony Swarzak' },
          position: 1
        },
        {
          inning: 9,
          player: { number: undefined, name: 'Luke Jackson' },
          position: 1
        }
      ]
    ])
  })

  it.only('records pitches', async () => {
    const scorekeeper = await getRetrosheetScorekeeper(
      join(__dirname, './test_pitches.txt')
    )
    const { gameplay } = scorekeeper

    console.log(gameplay.visiting)
  })
})
