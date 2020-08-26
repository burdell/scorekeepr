import { createAction, createReducer } from '@reduxjs/toolkit'

import {
  Gameplay,
  AtBat,
  RetrosheetEvent,
  Base,
  BaseResult,
  BaseResultResult
} from '../types'

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

export type HandleRetrosheetEvent = {
  retrosheetEvent: RetrosheetEvent
  inning: number
  lineupSpot: number
  team: 'home' | 'visiting'
}

export const handleRetrosheetEvent = createAction<HandleRetrosheetEvent>(
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

    currentLineupSpot.result = retrosheetEvent.result

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

    currentInning[lineupSpot] = currentLineupSpot
  })
})
