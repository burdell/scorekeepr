import { createAction, createReducer } from '@reduxjs/toolkit'

import { Gameplay, GameEventHandler, StartableBase } from '../../../types'

import { getCurrentData } from './current'
import {
  getEmptyInning,
  advanceRunnerHelper,
  handleAdditionalBases
} from './utils'

const initialState: Gameplay = {
  home: Array(9).fill(getEmptyInning()),
  visiting: Array(9).fill(getEmptyInning())
}

export const handleGameEvent = createAction<GameEventHandler>('handleGameEvent')
export const gameplayReducer = createReducer(initialState, (builder) => {
  builder.addCase(handleGameEvent, (state, action) => {
    const { team, inning, lineupSpot, event } = action.payload

    const {
      currentInning,
      currentLineupSpot,
      lineupSpotIndex,
      currentBaserunners
    } = getCurrentData(action.payload, state)

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
            newBases = handleAdditionalBases(
              baseMovement.additionalBases,
              currentLineupSpot,
              newBases
            )
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
        bases = handleAdditionalBases(
          batterBase.additionalBases,
          currentLineupSpot,
          bases
        )
      }

      currentLineupSpot.bases = bases
    }

    currentInning[lineupSpotIndex] = currentLineupSpot
    state[team][inning] = currentInning
  })
})
