import { getMLBStatsAPIScorekeeper } from '../../lib/mlb-stats-api'

import { testContextMetrics } from './test-context-metrics'
import { testBoxScore } from './test-boxscore'
import { testPlayByPlay } from './test-playByPlay'

describe('MLB Stats API', () => {
  it('parses game info', () => {
    const result = getMLBStatsAPIScorekeeper({
      contextMetrics: testContextMetrics,
      boxscore: testBoxScore,
      playByPlay: testPlayByPlay
    })

    expect(result.gameInfo).toEqual({
      date: '2022-07-27',
      homeTeam: { abbreviation: 'PHI', fullName: 'Philadelphia Phillies' },
      id: '2022/07/27/atlmlb-phimlb-1',
      location: 'Citizens Bank Park',
      startTime: '12:35pm',
      visitingTeam: { abbreviation: 'ATL', fullName: 'Atlanta Braves' }
    })
  })

  it.only('sets the game lineups', () => {
    const result = getMLBStatsAPIScorekeeper({
      contextMetrics: testContextMetrics,
      boxscore: testBoxScore,
      playByPlay: {}
    })

    expect(result.batters).toEqual({
      home: [
        [
          { inning: 1, player: { name: 'Kyle Schwarber' }, position: 7 },
          { inning: 1, player: { name: 'Rhys Hoskins' }, position: 3 },
          { inning: 1, player: { name: 'J.T. Realmuto' }, position: 2 },
          { inning: 1, player: { name: 'Darick Hall' }, position: 'DH' },
          { inning: 1, player: { name: 'Nick Castellanos' }, position: 9 },
          { inning: 1, player: { name: 'Bryson Stott' }, position: 4 },
          { inning: 1, player: { name: 'Alec Bohm' }, position: 5 },
          { inning: 1, player: { name: 'Didi Gregorius' }, position: 6 },
          { inning: 1, player: { name: 'Odubel Herrera' }, position: 8 }
        ]
      ],
      visiting: [
        [
          { inning: 1, player: { name: 'Michael Harris II' }, position: 8 },
          { inning: 1, player: { name: 'Dansby Swanson' }, position: 6 },
          { inning: 1, player: { name: 'Matt Olson' }, position: 3 },
          { inning: 1, player: { name: 'Austin Riley' }, position: 5 },
          { inning: 1, player: { name: 'Eddie Rosario' }, position: 9 },
          { inning: 1, player: { name: 'William Contreras' }, position: 2 },
          { inning: 1, player: { name: 'Marcell Ozuna' }, position: 7 },
          { inning: 1, player: { name: 'Robinson Cano' }, position: 4 },
          { inning: 1, player: { name: 'Mike Ford' }, position: 'DH' }
        ]
      ]
    })
  })
})
