import { parseGames, Game } from 'retrosheet-parse'

import { Scorekeeper } from '../Scorekeeper'
import { getStadium, getTeam, getLineup } from './translator'
import { handleGameplay } from './gameplay'

function getScorebook(game: Game) {
  const { info, lineup, play } = game
  const scorebook = new Scorekeeper({
    date: info.date,
    homeTeam: getTeam(info.hometeam).fullName,
    visitingTeam: getTeam(info.visteam).fullName,
    location: getStadium(info.site).fullName,
    startTime: info.starttime,
    id: game.id
  })

  scorebook.setLineups({
    home: getLineup(lineup.home),
    visiting: getLineup(lineup.visiting)
  })

  scorebook.startGame()

  scorebook.setCurrentAtBat({ team: 'visiting', inning: 0, lineupSpot: 0 })
  play.visiting.map((inning) => {
    handleGameplay(inning, scorebook)
    scorebook.nextInning()
  })

  scorebook.setCurrentAtBat({ team: 'home', inning: 0, lineupSpot: 0 })
  play.home.map((inning) => {
    handleGameplay(inning, scorebook)
    scorebook.nextInning()
  })

  return scorebook
}

export async function getRetrosheetScorekeepers(gamefile: string) {
  const gameList = await parseGames(gamefile)
  return gameList.map(getScorebook)
}

export { Scorekeeper }
