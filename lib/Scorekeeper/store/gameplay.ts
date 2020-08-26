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

function getCurrentBaserunners(inning: AtBat[]) {
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
      if (firstBase) console.warn('Multiple runners found on 1st base')
      firstBase = { lineupSpot, atBat }
    }
    if (basesReached === 2) {
      if (firstBase) console.warn('Multiple runners found on 2nd base')

      secondBase = { lineupSpot, atBat }
    }
    if (basesReached === 3) {
      if (firstBase) console.warn('Multiple runners found on 3rd base')

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
    }

    const pitchInfo = retrosheetEvent.pitches
    if (pitchInfo) {
      currentLineupSpot.strikes = pitchInfo.strikes
      currentLineupSpot.balls = pitchInfo.balls
      currentLineupSpot.pitchCount = pitchInfo.pitchCount
    }

    const batterBase = retrosheetEvent.bases['B']
    if (batterBase) {
      const { endBase, isAtBatResult } = batterBase
      const bases = advanceRunnerHelper({
        baseAdvancedTo: endBase,
        isAtBatResult
      })
      currentLineupSpot.bases = bases
    }

    // const currentBaserunners = getCurrentBaserunners(currentInning)

    // const firstBaseMovement = retrosheetEvent.bases[1]
    // const currentFirstBase = currentBaserunners[1]
    // if (firstBaseMovement && currentFirstBase) {
    //   const bases = advanceRunnerHelper({
    //     baseAdvancedTo: firstBaseMovement.endBase,
    //     result: firstBaseMovement.result
    //   })

    // }

    // const secondBaseMovement = retrosheetEvent.bases[2]
    // const currentSecondBase = currentBaserunners[2]
    // if (secondBaseMovement && currentSecondBase) {
    //   const bases = advanceRunnerHelper({
    //     baseAdvancedTo: secondBaseMovement.endBase,
    //     result: secondBaseMovement.result
    //   })
    // }

    // const thirdBaseMovement = retrosheetEvent.bases[3]
    // const currentThirdBase = currentBaserunners[3]
    // if (thirdBaseMovement && currentThirdBase) {
    //   const bases = advanceRunnerHelper({
    //     baseAdvancedTo: thirdBaseMovement.endBase,
    //     result: thirdBaseMovement.result
    //   })
    // }

    currentInning[lineupSpot] = currentLineupSpot
  })
})
