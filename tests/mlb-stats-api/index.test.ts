import { getMLBStatsAPIScorekeeper } from '../../lib/mlb-stats-api'

import { testContextMetrics } from './test-context-metrics'
import { testTeam1, testTeam2 } from './test-team'
import { testBoxScore } from './test-boxscore'

describe('MLB Stats API', () => {
  it('parses game info', () => {
    const result = getMLBStatsAPIScorekeeper({
      contextMetrics: testContextMetrics,
      boxscore: testBoxScore
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
})
