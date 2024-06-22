import { getMLBStatsAPIScorekeeper } from '..'
import { Scorekeepr } from '../../Scorekeepr'

import * as testGame1 from './data/test-game-1'
import * as testGame2 from './data/test-game-2'

describe('MLB Stats API - Game info', () => {
  let scorekeeper: Scorekeepr

  beforeEach(() => {
    scorekeeper = getMLBStatsAPIScorekeeper({
      contextMetrics: testGame1.contextMetrics,
      boxscore: testGame1.boxscore,
      playByPlay: testGame1.playByPlay
    })
  })

  it('parses game info', () => {
    expect(scorekeeper.gameInfo).toEqual({
      date: '2022-07-27',
      homeTeam: { abbreviation: 'PHI', fullName: 'Philadelphia Phillies' },
      id: '2022/07/27/atlmlb-phimlb-1',
      location: 'Citizens Bank Park',
      startTime: '12:35pm',
      visitingTeam: { abbreviation: 'ATL', fullName: 'Atlanta Braves' }
    })
  })

  it('sets the batting order', () => {
    expect(scorekeeper.batters).toEqual({
      home: [
        [{ inning: 1, player: { name: 'Kyle Schwarber' }, position: 7 }],
        [{ inning: 1, player: { name: 'Rhys Hoskins' }, position: 3 }],
        [{ inning: 1, player: { name: 'J.T. Realmuto' }, position: 2 }],
        [{ inning: 1, player: { name: 'Darick Hall' }, position: 'DH' }],
        [{ inning: 1, player: { name: 'Nick Castellanos' }, position: 9 }],
        [{ inning: 1, player: { name: 'Bryson Stott' }, position: 4 }],
        [{ inning: 1, player: { name: 'Alec Bohm' }, position: 5 }],
        [{ inning: 1, player: { name: 'Didi Gregorius' }, position: 6 }],
        [{ inning: 1, player: { name: 'Odubel Herrera' }, position: 8 }]
      ],
      visiting: [
        [{ inning: 1, player: { name: 'Michael Harris II' }, position: 8 }],
        [{ inning: 1, player: { name: 'Dansby Swanson' }, position: 6 }],
        [{ inning: 1, player: { name: 'Matt Olson' }, position: 3 }],
        [{ inning: 1, player: { name: 'Austin Riley' }, position: 5 }],
        [{ inning: 1, player: { name: 'Eddie Rosario' }, position: 9 }],
        [{ inning: 1, player: { name: 'William Contreras' }, position: 2 }],
        [{ inning: 1, player: { name: 'Marcell Ozuna' }, position: 7 }],
        [{ inning: 1, player: { name: 'Robinson Cano' }, position: 4 }],
        [{ inning: 1, player: { name: 'Mike Ford' }, position: 'DH' }]
      ]
    })
  })

  it('sets the pitchers', () => {
    expect(scorekeeper.pitchers).toEqual({
      home: [
        {
          inning: 1,
          player: { name: 'Charlie Morton' },
          stats: { er: 4 },
          type: 'starter'
        },
        {
          inning: 6,
          player: { name: 'Tyler Matzek' },
          stats: { er: 2 },
          type: 'reliever'
        },
        {
          inning: 7,
          player: { name: 'Jesse Chavez' },
          stats: { er: 0 },
          type: 'reliever'
        }
      ],
      visiting: [
        {
          inning: 1,
          player: { name: 'Kyle Gibson' },
          stats: { er: 2 },
          type: 'starter'
        },
        {
          inning: 7,
          player: { name: 'Connor Brogdon' },
          stats: { er: 0 },
          type: 'reliever'
        },
        {
          inning: 8,
          player: { name: 'Brad Hand' },
          stats: { er: 0 },
          type: 'reliever'
        },
        {
          inning: 9,
          player: { name: 'Andrew Bellatti' },
          stats: { er: 0 },
          type: 'reliever'
        }
      ]
    })
  })

  it('handles fielding substitutions', () => {
    const result = getMLBStatsAPIScorekeeper({
      contextMetrics: testGame2.contextMetrics,
      boxscore: testGame2.boxscore,
      playByPlay: testGame2.playByPlay
    })

    expect(result.batters).toEqual({
      home: [
        [{ inning: 1, player: { name: 'Kyle Schwarber' }, position: 7 }],
        [{ inning: 1, player: { name: 'Rhys Hoskins' }, position: 3 }],
        [{ inning: 1, player: { name: 'J.T. Realmuto' }, position: 2 }],
        [{ inning: 1, player: { name: 'Darick Hall' }, position: 'DH' }],
        [{ inning: 1, player: { name: 'Nick Castellanos' }, position: 9 }],
        [{ inning: 1, player: { name: 'Bryson Stott' }, position: 4 }],
        [{ inning: 1, player: { name: 'Alec Bohm' }, position: 5 }],
        [{ inning: 1, player: { name: 'Didi Gregorius' }, position: 6 }],
        [{ inning: 1, player: { name: 'Matt Vierling' }, position: 8 }]
      ],
      visiting: [
        [{ inning: 1, player: { name: 'Ronald Acuna Jr.' }, position: 9 }],
        [{ inning: 1, player: { name: 'Dansby Swanson' }, position: 6 }],
        [{ inning: 1, player: { name: 'Matt Olson' }, position: 3 }],
        [{ inning: 1, player: { name: 'Austin Riley' }, position: 5 }],
        [{ inning: 1, player: { name: "Travis d'Arnaud" }, position: 2 }],
        [{ inning: 1, player: { name: 'Eddie Rosario' }, position: 7 }],
        [{ inning: 1, player: { name: 'Marcell Ozuna' }, position: 'DH' }],
        [{ inning: 1, player: { name: 'Robinson Cano' }, position: 4 }],
        [{ inning: 1, player: { name: 'Michael Harris II' }, position: 8 }]
      ]
    })
  })
})
