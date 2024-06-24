import type { MLBApiContextMetrics, PlayByPlay, BoxScore } from './types'
import { Scorekeepr } from '../Scorekeepr'
import { getTimeAtVenue } from './getTimeAtVenue'
import { getLineups } from './lineups'
import { getGameEventObjectFromPlay } from './plays/getGameEventObjectFromPlay'

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

  const homeLineup = getLineups({
    playByPlay,
    boxscore,
    teamType: 'home'
  })

  const awayLineup = getLineups({
    playByPlay,
    boxscore,
    teamType: 'away'
  })

  scorekeeper.setPlayers({
    home: { batters: homeLineup.batters, pitchers: homeLineup.pitchers },
    visiting: { batters: awayLineup.batters, pitchers: awayLineup.pitchers }
  })

  // playByPlay.allPlays.forEach((play) => {
  //   const gameEventObject = getGameEventObjectFromPlay({ play })
  //   if (gameEventObject) {
  //     scorekeeper.handleGameEvent(gameEventObject)
  //   }
  // })

  return scorekeeper
}
