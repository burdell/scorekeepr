import { createAction, createReducer } from '@reduxjs/toolkit'

import {
  Gameplay,
  AtBat,
  Base,
  BaseResult,
  BaseResultResult,
  RetrosheetEventHandler
} from '../../types'

const initialState: Gameplay = {
  home: Array(9).fill(Array(9).fill(null)),
  visiting: Array(9).fill(Array(9).fill(null))
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

export const handleRetrosheetEvent = createAction<RetrosheetEventHandler>(
  'handleRetrosheetEvent'
)
export const gameplayReducer = createReducer(initialState, (builder) => {
  builder.addCase(handleRetrosheetEvent, (state, action) => {
    const { team, inning, lineupSpot, retrosheetEvent } = action.payload
    const currentTeam = state[team]
    const currentInning = currentTeam[inning]
    let currentLineupSpot = currentInning[lineupSpot]

    if (!currentLineupSpot) {
      currentLineupSpot = getAtBat()
    }

    if (retrosheetEvent.result) {
      currentLineupSpot.result = retrosheetEvent.result
      currentLineupSpot.isOut = retrosheetEvent.isOut
    }

    const pitchInfo = retrosheetEvent.pitches
    if (pitchInfo) {
      currentLineupSpot.strikes = pitchInfo.strikes
      currentLineupSpot.balls = pitchInfo.balls
      currentLineupSpot.pitchCount = pitchInfo.pitchCount
    }

    const currentBaserunners = getCurrentBaserunners(currentInning)
    const baseMovements = retrosheetEvent.bases

    ;([1, 2, 3] as Base[]).forEach((base) => {
      if (base === 4) return

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
      const { endBase, isAtBatResult } = batterBase
      let bases = advanceRunnerHelper({
        baseAdvancedTo: endBase,
        isAtBatResult
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

    currentInning[lineupSpot] = currentLineupSpot
  })
})
