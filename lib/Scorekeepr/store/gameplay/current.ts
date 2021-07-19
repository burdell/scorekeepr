import { Gameplay, AtBat, GameEventHandler, GameEvent } from '../../types'

import { getEmptyInning, getAtBat } from './utils'

type BaserunnerFinder = {
  lineupSpot: number
  atBat: AtBat
}

export function getCurrentData(
  { inning, team, lineupSpot, event }: GameEventHandler,
  gameplay: Gameplay
) {
  let currentInning = getCurrentInning(inning, team, gameplay)

  const {
    currentLineupSpot,
    battedAroundInning,
    lineupSpotIndex
  } = getCurrentLineupSpot(lineupSpot, currentInning, event)
  if (battedAroundInning) {
    currentInning = battedAroundInning
  }
  const currentBaserunners = getBaserunners(currentInning)

  return {
    currentInning,
    currentLineupSpot,
    lineupSpotIndex,
    currentBaserunners
  }
}

function getBaserunners(
  inning: AtBat[]
): {
  1: BaserunnerFinder | undefined
  2: BaserunnerFinder | undefined
  3: BaserunnerFinder | undefined
} {
  let firstBase: BaserunnerFinder | undefined = undefined
  let secondBase: BaserunnerFinder | undefined = undefined
  let thirdbase: BaserunnerFinder | undefined = undefined

  inning.forEach((atBat, lineupSpot) => {
    if (!atBat) return

    const basesReached = atBat.bases.length
    if (atBat.isOut || basesReached === 0 || basesReached === 4) {
      return
    }

    if (basesReached === 1) {
      firstBase = { lineupSpot, atBat }
    }
    if (basesReached === 2) {
      secondBase = { lineupSpot, atBat }
    }
    if (basesReached === 3) {
      thirdbase = { lineupSpot, atBat }
    }
  })

  return {
    1: firstBase,
    2: secondBase,
    3: thirdbase
  }
}

function getCurrentInning(
  inning: number,
  team: 'home' | 'visiting',
  gameplay: Gameplay
) {
  const currentTeam = gameplay[team]

  let currentInning = currentTeam[inning]
  if (!currentInning) {
    currentTeam[inning] = getEmptyInning()
    currentInning = currentTeam[inning]
  }

  return currentInning
}

function getCurrentLineupSpot(
  lineupSpotIndex: number,
  currentInning: AtBat[],
  event: GameEvent
) {
  let currentLineupSpot = currentInning[lineupSpotIndex]
  let battedAroundInning: AtBat[] | undefined = undefined

  if (!currentLineupSpot) {
    currentLineupSpot = getAtBat()
  } else if (currentLineupSpot.result && event.result) {
    const timesThroughLineup =
      Math.floor(lineupSpotIndex / currentInning.length) + 1
    const expectedNumberOfAtBats = timesThroughLineup * 9

    lineupSpotIndex = lineupSpotIndex + expectedNumberOfAtBats
    currentLineupSpot = getAtBat()

    if (currentInning.length <= expectedNumberOfAtBats) {
      battedAroundInning = currentInning.concat(getEmptyInning())
    }
  }

  return {
    currentLineupSpot,
    lineupSpotIndex,
    battedAroundInning
  }
}
