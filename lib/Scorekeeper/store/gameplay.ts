import { createAction, createReducer } from '@reduxjs/toolkit'

import {
  Gameplay,
  AtBat,
  Base,
  BaseResult,
  BaseResultResult,
  GameEventHandler,
  StartableBase
} from '../../types'

function getEmptyInning() {
  return Array(9).fill(null)
}

const initialState: Gameplay = {
  home: Array(9).fill(getEmptyInning()),
  visiting: Array(9).fill(getEmptyInning())
}

function advanceRunnerHelper({
  baseAdvancedTo,
  isAtBatResult,
  existingBases = [],
  result = undefined,
  isOut = false
}: {
  baseAdvancedTo: Base
  existingBases?: BaseResult[]
  result?: BaseResultResult
  isOut?: boolean
  isAtBatResult?: boolean
}) {
  return new Array<BaseResult>(baseAdvancedTo)
    .fill({ advanced: true, result: undefined })
    .map((newResult, index) => {
      const existingResult = existingBases[index]
      const isAdvancedToBase = index + 1 === baseAdvancedTo
      if (isAdvancedToBase) {
        newResult.result = result
        newResult.advanced = !isOut
        if (isAtBatResult) {
          newResult.isAtBatResult = isAtBatResult
        }
        return { ...newResult }
      }

      return existingResult || { ...newResult }
    })
}

type BaserunnerFinder = {
  lineupSpot: number
  atBat: AtBat
}

function getCurrentBaserunners(
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

export function getAtBat(overrides: Partial<AtBat> = {}): AtBat {
  return {
    balls: 0,
    strikes: 0,
    pitchCount: 0,
    isOut: false,
    result: undefined,
    bases: [],
    ...overrides
  }
}

export const handleGameEvent = createAction<GameEventHandler>('handleGameEvent')
export const gameplayReducer = createReducer(initialState, (builder) => {
  builder.addCase(handleGameEvent, (state, action) => {
    const { team, inning, lineupSpot, event } = action.payload
    const currentTeam = state[team]

    let currentInning = currentTeam[inning]
    if (!currentInning) {
      currentTeam[inning] = getEmptyInning()
      currentInning = currentTeam[inning]
    }

    let lineupIndex = lineupSpot
    let currentLineupSpot = currentInning[lineupSpot]

    if (!currentLineupSpot) {
      currentLineupSpot = getAtBat()
    } else if (currentLineupSpot.result && event.result) {
      const timesThroughLineup =
        Math.floor(lineupIndex / currentInning.length) + 1
      const expectedNumberOfAtBats = timesThroughLineup * 9

      lineupIndex = lineupIndex + expectedNumberOfAtBats
      currentLineupSpot = getAtBat()
      if (currentInning.length <= expectedNumberOfAtBats) {
        currentInning = currentInning.concat(getEmptyInning())
      }
    }

    if (event.result) {
      currentLineupSpot.result = event.result
      currentLineupSpot.isOut = event.isOut
    }

    if (event.isSacrifice) {
      currentLineupSpot.isSacrifice = event.isSacrifice
    }

    const pitchInfo = event.pitches
    if (pitchInfo) {
      currentLineupSpot.strikes = pitchInfo.strikes
      currentLineupSpot.balls = pitchInfo.balls
      currentLineupSpot.pitchCount = pitchInfo.pitchCount
    }

    const currentBaserunners = getCurrentBaserunners(currentInning)
    const baseMovements = event.bases

    ;([1, 2, 3] as StartableBase[]).forEach((base) => {
      const baseMovement = baseMovements[base]
      const currentBase = currentBaserunners[base]
      if (baseMovement && currentBase) {
        if (baseMovement.endBase === base) {
          currentBase.atBat.bases[base - 1].onBasePutout =
            baseMovement.onBasePutout
        } else {
          const existingBases = currentInning[currentBase.lineupSpot].bases
          let newBases = advanceRunnerHelper({
            baseAdvancedTo: baseMovement.endBase,
            isOut: baseMovement.isOut,
            existingBases,
            result: baseMovement.result
          })

          if (baseMovement.additionalBases) {
            baseMovement.additionalBases.forEach((advancement) => {
              const isOut =
                advancement.result && advancement.result.type === 'putout'
              if (isOut) {
                currentLineupSpot.isOut = true
              }
              newBases = advanceRunnerHelper({
                baseAdvancedTo: advancement.base,
                result: advancement.result,
                existingBases: newBases,
                isOut
              })
            })
          }

          currentInning[currentBase.lineupSpot].bases = newBases
        }

        if (baseMovement.isOut) {
          currentInning[currentBase.lineupSpot].isOut = true
        }
      }
    })

    const batterBase = baseMovements['B']
    if (batterBase) {
      const { endBase, isAtBatResult, result } = batterBase
      let bases = advanceRunnerHelper({
        baseAdvancedTo: endBase,
        isAtBatResult,
        result
      })

      if (batterBase.additionalBases) {
        batterBase.additionalBases.forEach((advancement) => {
          const isOut =
            advancement.result && advancement.result.type === 'putout'
          if (isOut) {
            currentLineupSpot.isOut = true
          }
          bases = advanceRunnerHelper({
            baseAdvancedTo: advancement.base,
            result: advancement.result,
            existingBases: bases,
            isOut
          })
        })
      }

      currentLineupSpot.bases = bases
    }

    currentInning[lineupIndex] = currentLineupSpot
    state[team][inning] = currentInning
  })
})
