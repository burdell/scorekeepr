import { createAction, createReducer, Dispatch } from '@reduxjs/toolkit'

import {
  Gameplay,
  CurrentAtBat,
  AtBat,
  Base,
  BaseResult,
  BaseResultResult,
  AdvanceBaseResult,
  OutBaseResult
} from '../types'

import * as resultGenerators from '../resultGenerators'

const initialState: Gameplay = {
  home: Array(9).fill(Array(9).fill(null)),
  visiting: Array(9).fill(Array(9).fill(null)),
  currentAtBat: undefined
}

function getDefaultAtBat(): CurrentAtBat {
  return {
    inning: 0,
    lineupSpot: 0,
    team: 'visiting'
  }
}

export function getEmptyAtBat(): AtBat {
  return {
    balls: 0,
    strikes: 0,
    pitchCount: 0,
    isOut: false,
    result: undefined,
    bases: []
  }
}

function ensureCurrentAtBat(gameplay: Gameplay) {
  if (!gameplay.currentAtBat)
    throw new Error('Attempted to record gameply without current at bat')

  const { currentAtBat } = gameplay
  const { team, inning, lineupSpot } = currentAtBat

  if (!gameplay[team][inning]) {
    gameplay[team][inning] = []
  }

  const currentInning = gameplay[team][inning]

  if (!currentInning[lineupSpot]) {
    currentInning[lineupSpot] = getEmptyAtBat()
  }

  return gameplay.currentAtBat
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

export const setCurrentAtBat = createAction<Partial<CurrentAtBat>>(
  'setcurrentAtBat'
)
export const ball = createAction('ball')
export const strike = createAction('strike')
export const foul = createAction('foul')
export const hit = createAction<Base>('hit')
export const flyOut = createAction<number>('flyOut')
export const lineout = createAction<number>('lineOut')
export const putOut = createAction<number[]>('putOut')
export const fieldersChoice = createAction<{
  baseAdvancedTo: Base
}>('fieldersChoice')
export const defensiveError = createAction<{
  defensivePlayer: number
  baseAdvancedTo: Base
}>('defensiveError')
export const advanceRunner = createAction<{
  base: Base
  result: AdvanceBaseResult | undefined
}>('advanceRunner')
export const recordBasepathOut = createAction<{
  baseAttempted: Base
  result: OutBaseResult
}>('recordBasepathOut')

const setAsSacrifice = createAction<boolean>('setAsSacrifice')

export function startGame() {
  return (dispatch: Dispatch) => {
    dispatch(setCurrentAtBat(getDefaultAtBat()))
  }
}

export function sacrificeBunt(defensivePositions: number[]) {
  return (dispatch: Dispatch) => {
    dispatch(putOut(defensivePositions))
    dispatch(setAsSacrifice(true))
  }
}

export function sacrificeFly(defensivePositions: number) {
  return (dispatch: Dispatch) => {
    dispatch(flyOut(defensivePositions))
    dispatch(setAsSacrifice(true))
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
      newFrame.result = resultGenerators.pitcherResult('BB')
      newFrame.bases = advanceRunnerHelper({
        baseAdvancedTo: 1,
        isAtBatResult: true
      })
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
      newFrame.result = resultGenerators.pitcherResult('K')
      newFrame.isOut = true
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(foul, (state) => {
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
      result: resultGenerators.hit(action.payload),
      bases: advanceRunnerHelper({
        baseAdvancedTo: action.payload,
        isAtBatResult: true
      })
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
      result: resultGenerators.flyOut(action.payload),
      isOut: true
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(lineout, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: resultGenerators.lineOut(action.payload),
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
      result: resultGenerators.putout(action.payload),
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
      result: resultGenerators.error(action.payload.defensivePlayer),
      bases: advanceRunnerHelper({
        baseAdvancedTo: action.payload.baseAdvancedTo,
        isAtBatResult: true
      })
    }

    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(fieldersChoice, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: resultGenerators.fieldersChoice(action.payload.baseAdvancedTo),
      bases: advanceRunnerHelper({
        baseAdvancedTo: action.payload.baseAdvancedTo,
        isAtBatResult: true
      })
    }

    state[team][inning][lineupSpot] = newFrame
  })

  builder.addCase(advanceRunner, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      bases: advanceRunnerHelper({
        baseAdvancedTo: action.payload.base,
        existingBases: currentFrame.bases,
        result: action.payload.result
      })
    }

    state[team][inning][lineupSpot] = newFrame
  })

  builder.addCase(recordBasepathOut, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      isOut: true,
      bases: advanceRunnerHelper({
        baseAdvancedTo: action.payload.baseAttempted,
        existingBases: currentFrame.bases,
        result: action.payload.result,
        isOut: true
      })
    }

    state[team][inning][lineupSpot] = newFrame
  })

  builder.addCase(setAsSacrifice, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const resultType = currentFrame.result && currentFrame.result.type
    if (resultType !== 'flyout' && resultType !== 'putout') {
      throw new Error(
        'Attempted to set an result as a sacrifice that cannot be a sacrifice'
      )
    }

    state[team][inning][lineupSpot] = {
      ...currentFrame,
      isSacrifice: action.payload
    }
  })
})
