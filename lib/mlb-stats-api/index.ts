import type { MLBApiContextMetrics, PlayByPlay, BoxScore } from './types'
import { Scorekeepr } from '../Scorekeepr'
import { getTimeAtVenue } from './getTimeAtVenue'
import { getBatters, getPitchers } from './lineups'

export function getMLBStatsAPIScorekeeper({
  contextMetrics,
  boxscore,
  playByPlay
}: {
  contextMetrics: MLBApiContextMetrics
  boxscore: BoxScore
  playByPlay: PlayByPlay
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

  const homePlayers = boxscore.teams.home.players
  const awayPlayers = boxscore.teams.away.players
  const pitchers = getPitchers(awayPlayers)
  scorekeeper.setPlayers({
    home: { batters: getBatters(homePlayers), pitchers: [] },
    visiting: { batters: getBatters(awayPlayers), pitchers: [] }
  })

  return scorekeeper
}
