import { Scorekeeper } from './Scorekeeper'

import { parseGames } from 'retrosheet-parse'

import { getStadium, getTeam, getLineup } from './translator'

export async function getRetrosheetScorekeeper(
  gamefile: string,
  gameIndex = 0
) {
  const gameList = await parseGames(gamefile)
  const game = gameList[gameIndex]

  if (!game) throw new Error('I could not find the game in the file!')

  const { info, lineup } = game
  const scorebook = new Scorekeeper({
    date: info.date,
    homeTeam: getTeam(info.hometeam).fullName,
    visitingTeam: getTeam(info.visteam).fullName,
    location: getStadium(info.site).fullName,
    startTime: info.starttime
  })

  scorebook.setLineups({
    home: getLineup(lineup.home),
    visiting: getLineup(lineup.visiting)
  })

  return scorebook
}

export { Scorekeeper }
