import {
  createAction,
  ActionReducerMapBuilder,
  Dispatch
} from '@reduxjs/toolkit'

import { Base, Gameplay } from '../../types'
import { ensureCurrentAtBat, advanceRunnerHelper } from './utilities'
import * as resultGenerators from '../../resultGenerators'

export const hit = createAction<{ base: Base; baseAdvancedTo?: Base }>('hit')
export const flyOut = createAction<number>('flyOut')
export const lineout = createAction<number>('lineOut')
export const putOut = createAction<number[]>('putOut')
export const intentionalWalk = createAction('intentionalWalk')
export const hitBatter = createAction('hitBatter')
export const fieldersChoice = createAction<{
  baseAdvancedTo: Base
}>('fieldersChoice')
export const defensiveError = createAction<{
  defensivePlayer: number
  baseAdvancedTo: Base
}>('defensiveError')
const setAsSacrifice = createAction<boolean>('setAsSacrifice')

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

export function setupAtBats(builder: ActionReducerMapBuilder<Gameplay>) {
  builder.addCase(hit, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const payload = action.payload

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: resultGenerators.hit(payload.base),
      bases: advanceRunnerHelper({
        baseAdvancedTo: payload.baseAdvancedTo || payload.base,
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

  builder.addCase(intentionalWalk, (state) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      result: resultGenerators.pitcherResult('IBB'),
      bases: advanceRunnerHelper({
        baseAdvancedTo: 1,
        isAtBatResult: true
      })
    }
    state[team][inning][lineupSpot] = newFrame

    return state
  })

  builder.addCase(hitBatter, (state) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const currentFrame = state[team][inning][lineupSpot]

    const newFrame = {
      ...currentFrame,
      pitchCount: currentFrame.pitchCount + 1,
      result: resultGenerators.pitcherResult('HBP'),
      bases: advanceRunnerHelper({
        baseAdvancedTo: 1,
        isAtBatResult: true
      })
    }
    state[team][inning][lineupSpot] = newFrame

    return state
  })
}
