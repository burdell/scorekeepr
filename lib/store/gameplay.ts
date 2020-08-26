import { createAction, createReducer, Dispatch } from '@reduxjs/toolkit'

import { Gameplay, CurrentAtBat, AtBat, RetrosheetEvent } from '../types'
import { getEmptyGame } from 'retrosheet-parse/dist/GameBuilder'

const initialState: Gameplay = {
  home: Array(9).fill(Array(9).fill(null)),
  visiting: Array(9).fill(Array(9).fill(null))
}

function getDefaultAtBat(): CurrentAtBat {
  return {
    inning: 0,
    lineupSpot: 0,
    team: 'visiting'
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

    currentInning[lineupSpot] = currentLineupSpot
  })
})
