import type { BoxScore, BoxScorePlayer } from '../types'

export function getPlayers(boxscore: BoxScore) {
  return [
    ...Object.values(boxscore.teams.away.players),
    ...Object.values(boxscore.teams.home.players)
  ]
}

export function getPlayer(playerId: number, players: BoxScorePlayer[]) {
  const player = players.find((player) => player.person.id === playerId)

  if (!player) {
    throw new Error(`Invalid player id: ${playerId}`)
  }

  return player
}

export function getPlayerFromBoxscore(playerId: number, boxscore: BoxScore) {
  const players = getPlayers(boxscore)
  return getPlayer(playerId, players)
}
