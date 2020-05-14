import { parseGames, GameplayEvent } from 'retrosheet-parse'

import { Scorekeeper } from '../Scorekeeper'
import { getStadium, getTeam, getLineup } from './translator'
import { handlePitchSequence } from './pitches'
import { handleAtABat } from './atBats'

function handleGameplay(gameplayEvents: GameplayEvent[], game: Scorekeeper) {
  gameplayEvents.forEach((gameplayEvent) => {
    if (gameplayEvent.type === 'comment') return

    handlePitchSequence(gameplayEvent.pitchSequence, game)
    handleAtABat(gameplayEvent.result, game)

    game.nextLineupSpot()
  })
}

export async function getRetrosheetScorekeeper(
  gamefile: string,
  gameIndex = 0
) {
  const gameList = await parseGames(gamefile)
  const game = gameList[gameIndex]

  if (!game) throw new Error('I could not find the game in the file!')

  const { info, lineup, play } = game
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

export { Scorekeeper }
