import { BatterEntry, PitcherEntry, PlayerPosition } from '../../Scorekeepr'
import { getPlayer } from './players'
import type { BoxScorePlayer, PlayByPlay, BoxScore } from '../types'

function getPositionCode(mlbStatsApiCode: string): PlayerPosition {
  if (mlbStatsApiCode === '1') {
    return 1
  }
  if (mlbStatsApiCode === '2') {
    return 2
  }
  if (mlbStatsApiCode === '3') {
    return 3
  }
  if (mlbStatsApiCode === '4') {
    return 4
  }
  if (mlbStatsApiCode === '5') {
    return 5
  }
  if (mlbStatsApiCode === '6') {
    return 6
  }
  if (mlbStatsApiCode === '7') {
    return 7
  }
  if (mlbStatsApiCode === '8') {
    return 8
  }
  if (mlbStatsApiCode === '9') {
    return 9
  }
  if (mlbStatsApiCode === '10') {
    return 'DH'
  }

  throw new Error(`Invalid position: ${mlbStatsApiCode}`)
}

type Players = {
  [playerId: string]: BoxScorePlayer
}

function getStartingBatters(players: Players) {
  const playersList = Object.values(players)

  return playersList
    .filter((player) => player.battingOrder && !player.gameStatus.isSubstitute)
    .sort(
      (player1, player2) =>
        Number(player1.battingOrder) - Number(player2.battingOrder)
    )
    .map((player) => {
      const batter: BatterEntry = {
        inning: 1,
        player: {
          name: player.person.fullName
        },
        position: getPositionCode(player.position.code)
      }
      return batter
    })
}

export function getBatters(players: Players) {
  const starters = getStartingBatters(players)

  return starters.map((starter) => [starter])
}

type Substitution = {
  player: BoxScorePlayer
  inning: number
}

function getSubstitutions({
  playByPlay,
  allPlayers,
  isTopInning
}: {
  playByPlay: PlayByPlay
  allPlayers: BoxScorePlayer[]
  isTopInning: boolean
}) {
  let pitching: Substitution[] = []
  const batting: Substitution[] = []

  playByPlay.allPlays.map(({ playEvents, about }) => {
    const pitchingSubstitutions = playEvents
      .filter((playEvent) => {
        return (
          playEvent.details.eventType === 'pitching_substitution' &&
          about.isTopInning === isTopInning
        )
      })
      .map((substitution) => ({
        inning: about.inning,
        player: getPlayer(substitution.player?.id || -1, allPlayers)
      }))
    pitching = pitching.concat(pitchingSubstitutions)
  })

  return { pitching, batting }
}

export function getLineups({
  teamType,
  playByPlay,
  boxscore
}: {
  teamType: 'home' | 'away'
  playByPlay: PlayByPlay
  boxscore: BoxScore
}) {
  const targetTeamBoxScore =
    teamType === 'away' ? boxscore.teams.away : boxscore.teams.home
  const otherTeamBoxScore =
    teamType === 'away' ? boxscore.teams.home : boxscore.teams.away

  const players = targetTeamBoxScore.players
  const batters = getBatters(players)

  const allPlayers = [
    ...Object.values(boxscore.teams.away.players),
    ...Object.values(boxscore.teams.home.players)
  ]
  const substitutions = getSubstitutions({
    playByPlay,
    allPlayers,
    isTopInning: teamType === 'away'
  })

  const startingPitcher = getPlayer(otherTeamBoxScore.pitchers[0], allPlayers)
  const pitchers: PitcherEntry[] = [
    {
      inning: 1,
      player: {
        name: startingPitcher.person.fullName
      },
      stats: { er: startingPitcher.stats.pitching.earnedRuns || 0 },
      type: 'starter'
    },
    ...substitutions.pitching.map(({ inning, player }) => ({
      inning,
      player: {
        name: player.person.fullName
      },
      stats: { er: player.stats.pitching.earnedRuns || 0 },
      type: 'reliever' as const
    }))
  ]

  return { pitchers, batters }
}
