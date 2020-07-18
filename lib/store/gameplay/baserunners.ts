import { ActionReducerMapBuilder, createAction } from '@reduxjs/toolkit'
import {
  Gameplay,
  Base,
  OutBaseResult,
  AdvanceBaseResult,
  RunnerAdvancement
} from '../../types'
import { ensureCurrentAtBat, advanceRunnerHelper } from './utilities'

export const recordBasepathOut = createAction<{
  baseAttempted: Base
  result: OutBaseResult
}>('recordBasepathOut')
export const advanceCurrentRunner = createAction<{
  base: Base
  result: AdvanceBaseResult | undefined
}>('advanceCurrentRunner')
export const advanceRunners = createAction<RunnerAdvancement[]>(
  'advanceRunners'
)

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

  builder.addCase(advanceRunners, (state, action) => {
    const { team, inning, lineupSpot } = ensureCurrentAtBat(state)
    const advances = action.payload
    const newInning = [...state[team][inning]]
    const currentInning = state[team][inning]

    function getAtBatForAdvance(a: RunnerAdvancement) {
      if (a.startBase === 'B') {
        return {
          atBat: state[team][inning][lineupSpot],
          baseRunnerIndex: lineupSpot
        }
      }

      const baseRunnerIndex = currentInning.findIndex(
        (atBat, atBatIndex) =>
          atBat &&
          atBatIndex !== lineupSpot &&
          atBat.bases.length === a.startBase
      )
      return {
        atBat: currentInning[baseRunnerIndex],
        baseRunnerIndex: baseRunnerIndex
      }
    }

    advances.forEach((a) => {
      const { atBat, baseRunnerIndex } = getAtBatForAdvance(a)

      if (atBat) {
        newInning[baseRunnerIndex] = {
          ...atBat,
          bases: advanceRunnerHelper({
            baseAdvancedTo: a.endBase,
            existingBases: atBat.bases,
            result: a.result
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
}
