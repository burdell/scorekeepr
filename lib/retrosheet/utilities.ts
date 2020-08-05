import { GameEvent, Base, BaseResult, BaseResultResult } from '../types'

export function getAction(overrides: Partial<GameEvent> = {}): GameEvent {
  return {
    result: undefined,
    isOut: false,
    pitches: undefined,
    isSacrifice: false,
    bases: {
      B: undefined,
      1: undefined,
      2: undefined,
      3: undefined
    },
    ...overrides
  }
}

export function advanceRunnerHelper({
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
