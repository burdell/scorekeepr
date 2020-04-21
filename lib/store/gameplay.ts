import { createAction, createReducer, Dispatch } from '@reduxjs/toolkit'

import { Gameplay, CurrentAtBat, AtBat, Base } from '../types'
import {
  generatePitcherResult,
  generateFlyOut,
  generateHit,
  generatePutout,
  generateDefensiveError
} from '../atBatGenerators'

const initialState: Gameplay = {
  home: Array(9).fill([]),
  visiting: Array(9).fill([]),
  currentAtBat: undefined
}

function getDefaultAtBat(): CurrentAtBat {
  return {
    inning: 0,
    lineupSpot: 0,
    team: 'visiting'
  }
}

function getEmptyAtBat(): AtBat {
  return {
    balls: 0,
    strikes: 0,
    pitchCount: 0,
    isOut: false,
    result: undefined
  }
}

function ensureCurrentAtBat(gameplay: Gameplay) {
  if (!gameplay.currentAtBat)
    throw new Error('Attempted to record gameply without current at bat')

  const { currentAtBat } = gameplay
  const { team, inning, lineupSpot } = currentAtBat

  const currentInning = gameplay[team][inning]
  if (!currentInning[lineupSpot]) {
    currentInning[lineupSpot] = getEmptyAtBat()
  }

  return gameplay.currentAtBat
}

export const setCurrentAtBat = createAction<Partial<CurrentAtBat>>(
  'setcurrentAtBat'
)
export const ball = createAction('ball')
export const strike = createAction('strike')
export const foulTip = createAction('foulTip')
export const hit = createAction<Base>('hit')
export const flyOut = createAction<number>('flyOut')
export const putOut = createAction<number[]>('putOut')
export const defensiveError = createAction<number>('defensiveError')

export function startGame() {
  return (dispatch: Dispatch) => {
    dispatch(setCurrentAtBat(getDefaultAtBat()))
  }
}

export const gameplayReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCurrentAtBat, (state, action) => {
    state.currentAtBat = {
      ...(state.currentAtBat || getDefaultAtBat()),
      ...action.payload
    }
  })

  builder.addCase(ball, (state) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    if (currentFrame.balls === 4) {
      return state
    }

    const newFrame = {
      ...currentFrame,
      balls: currentFrame.balls + 1,
      pitchCount: currentFrame.pitchCount + 1
    }

    if (newFrame.balls === 4) {
      newFrame.result = generatePitcherResult('BB')
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(strike, (state) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    if (currentFrame.strikes === 3) {
      return state
    }

    const newFrame = {
      ...currentFrame,
      strikes: currentFrame.strikes + 1,
      pitchCount: currentFrame.pitchCount + 1
    }

    if (newFrame.strikes === 3) {
      newFrame.result = generatePitcherResult('K')
      newFrame.isOut = true
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(foulTip, (state) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1
    }

    if (newFrame.strikes < 2) {
      newFrame.strikes = currentFrame.strikes + 1
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(hit, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: generateHit(action.payload)
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(flyOut, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: generateFlyOut(action.payload),
      isOut: true
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(putOut, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: generatePutout(action.payload),
      isOut: true
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(defensiveError, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: generateDefensiveError(action.payload)
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })
})
