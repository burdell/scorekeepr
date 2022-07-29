import type { MLBApiContextMetrics, Team, BoxScore } from './types'
import { Scorekeepr } from '../Scorekeepr'
import { getTimeAtVenue } from './getTimeAtVenue'

export function getMLBStatsAPIScorekeeper({
  contextMetrics,
  boxscore
}: {
  contextMetrics: MLBApiContextMetrics
  boxscore: BoxScore
}) {
  const { game } = contextMetrics
  const { teams } = boxscore
  const scorekeeper = new Scorekeepr({
    id: game.gameId,
    date: game.officialDate,
    homeTeam: {
      fullName: teams.home.team.name,
      abbreviation: teams.home.team.abbreviation
    },
    visitingTeam: {
      fullName: teams.away.team.name,
      abbreviation: teams.away.team.abbreviation
    },
    initialInningCount: game.scheduledInnings,
    location: game.venue.name,
    startTime: getTimeAtVenue({
      date: game.gameDate,
      venueId: game.venue.id
    })
  })

  return scorekeeper
}
