import { Base, BaseResult, BaseAction, AtBat } from '../../types'
import { AdditionalBases } from '../../types/baserunning'

export function getEmptyInning() {
  return Array(9).fill(null)
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

export function advanceRunnerHelper({
  baseAdvancedTo,
  isAtBatResult,
  existingBases = [],
  result = undefined,
  isOut = false
}: {
  baseAdvancedTo: Base
  existingBases?: BaseResult[]
  result?: BaseAction
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

export function handleAdditionalBases(
  additionalBases: AdditionalBases,
  currentLineupSpot: { isOut: boolean },
  existingBases: BaseResult[]
) {
  let bases = existingBases
  additionalBases.forEach((advancement) => {
    const isOut = advancement.result && advancement.result.type === 'putout'
    if (isOut) {
      currentLineupSpot.isOut = true
    }
    bases = advanceRunnerHelper({
      baseAdvancedTo: advancement.base,
      result: advancement.result,
      existingBases,
      isOut
    })
  })

  return bases
}
