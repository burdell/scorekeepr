import { Scorekeeper } from '../Scorekeeper'

import { parseGames, GameplayEvent } from 'retrosheet-parse'

import { getStadium, getTeam, getLineup } from './translator'

const strikes = ['C', 'K', 'L', 'O', 'Q', 'S', 'T', 'M']
const balls = ['B', 'I', 'P']
const fouls = ['F', 'R']
function handlePitch(pitch: string, game: Scorekeeper) {
  if (strikes.includes(pitch)) {
    game.strike()
  } else if (balls.includes(pitch)) {
    game.ball()
  } else if (fouls.includes(pitch)) {
    game.foul()
  }
}

function handleResult(result: string, game: Scorekeeper) {
  return
}

function handleGameplay(gameplayEvents: GameplayEvent[], game: Scorekeeper) {
  gameplayEvents.forEach((gameplayEvent) => {
    if (gameplayEvent.type === 'comment') return

    gameplayEvent.pitchSequence
      .split('')
      .forEach((pitch) => handlePitch(pitch, game))

    if (game) handleResult(gameplayEvent.result, game)

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

  play.visiting.map((inning) => {
    handleGameplay(inning, scorebook)
    scorebook.nextInning()
  })
  scorebook.setCurrentAtBat({ team: 'home' })
  play.home.map((gameplay) => handleGameplay(gameplay, scorebook))

  return scorebook
}

export { Scorekeeper }
