import { ActionReducerMapBuilder, createAction } from '@reduxjs/toolkit'
import {
  Gameplay,
  Base,
  OutBaseResult,
  AdvanceBaseResult,
  RunnerMovement,
  AtBat
} from '../../types'
import { ensureCurrentAtBat, advanceRunnerHelper } from './utilities'
import * as resultGenerators from '../../resultGenerators'

export const recordBasepathOut = createAction<{
  baseAttempted: Base
  result: OutBaseResult
}>('recordBasepathOut')
export const advanceCurrentRunner = createAction<{
  base: Base
  result: AdvanceBaseResult | undefined
}>('advanceCurrentRunner')
export const advanceRunners = createAction<RunnerMovement[]>('advanceRunners')
export const pickOff = createAction<{ base: Base; putout: number[] }>('pickOff')

export function setupBaserunners(builder: ActionReducerMapBuilder<Gameplay>) {
  builder.addCase(advanceCurrentRunner, (state, action) => {
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

  function getFrameForBaseRunner(
    base: Base,
    currentFrame: number,
    currentInning: AtBat[]
  ) {
    const baseRunnerIndex = currentInning.findIndex(
      (atBat, atBatIndex) =>
        atBat && atBatIndex !== currentFrame && atBat.bases.length === base
    )
    return {
      atBat: currentInning[baseRunnerIndex],
      baseRunnerIndex: baseRunnerIndex
    }
  }

  builder.addCase(advanceRunners, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const advances = action.payload
    const newInning = [...state[team][inning]]
    const currentInning = state[team][inning]

    function getAtBatForAdvance(a: RunnerMovement) {
      if (a.startBase === 'B') {
        return {
          atBat: state[team][inning][lineupSpot],
          baseRunnerIndex: lineupSpot
        }
      }

      return getFrameForBaseRunner(a.startBase, lineupSpot, currentInning)
    }

    advances.forEach((a) => {
      const { atBat, baseRunnerIndex } = getAtBatForAdvance(a)

      if (atBat) {
        newInning[baseRunnerIndex] = {
          ...atBat,
          bases: advanceRunnerHelper({
            baseAdvancedTo: a.endBase,
            existingBases: atBat.bases,
            result: a.result,
            isOut: a.isOut
          })
        }
      }
    })

    state[team][inning] = newInning
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

  builder.addCase(pickOff, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const { base, putout } = action.payload

    const runnerFrame = getFrameForBaseRunner(
      base,
      lineupSpot,
      state[team][inning]
    )
    const runnerBase =
      runnerFrame && runnerFrame.atBat && runnerFrame.atBat.bases[base - 1]
    if (runnerBase) {
      runnerBase.pickOff = resultGenerators.putout(putout)
    }
  })
}
