import { BatterEntry, PlayerPosition } from '../Scorekeepr'
import { BoxScorePlayer } from './types'

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

  return [starters]
}

export function getPitchers(players: Players) {
  const playersList = Object.values(players)

  const pitchers = playersList.filter(
    (player) => player.position.code === '1' && !player.gameStatus.isOnBench
  )

  console.log('=== pitchers', pitchers)
}
