import {
  RetrosheetEvent,
  Base,
  BaseResult,
  BaseResultResult,
  Bases
} from '../types'

export function getAction(
  overrides: Partial<RetrosheetEvent> = {}
): RetrosheetEvent {
  return {
    result: undefined,
    isOut: false,
    pitches: undefined,
    isSacrifice: false,
    bases: getBases(),
    ...overrides
  }
}

export function getBases(overrides: Partial<Bases> = {}) {
  return {
    B: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
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

export function getNextBase(base: Base): Base {
  if (base === 1) return 2
  if (base === 2) return 3
  if (base === 3) return 4

  throw new Error(`Attempted to get next base of invalid base ${base}`)
}

export function getPreviousBase(base: Base): Base {
  if (base === 2) return 1
  if (base === 3) return 2
  if (base === 4) return 3

  throw new Error(`Attempted to get previous base of invalid base ${base}`)
}

export function getBase(rawBase: string | number): Base {
  if (rawBase === 'H') return 4

  const base = Number(rawBase)
  if (base === 1) return 1
  if (base === 2) return 2
  if (base === 3) return 3
  if (base === 4) return 4

  throw new Error('Attempted to use an invalid base')
}

export function getPutoutPositions(putout: string) {
  return putout
    .split('')
    .map(Number)
    .filter((p) => !!p)
}
