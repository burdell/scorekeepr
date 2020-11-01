import { Base, StartableBase, AdvanceableBase } from '../types'
import * as resultGenerators from './generators/result'

export function getHitType(hit: string) {
  if (hit === 'S') return 1
  if (hit === 'D' || hit === 'DGR') return 2
  if (hit === 'T') return 3
  if (hit === 'HR') return 4

  throw new Error('Attempted to record an invalid hit')
}

export function getAllBaserunnerAction(action: string) {
  let resultFn
  if (action === 'PB') resultFn = resultGenerators.passedBall
  else if (action === 'WP') resultFn = resultGenerators.wildPitch
  else if (action === 'BK') resultFn = resultGenerators.balk

  if (resultFn) {
    return resultFn()
  }

  return
}

export function getBaseFromString(matchString: string) {
  const baseMatch = matchString.match(/\d+|H+/)
  if (!baseMatch) {
    throw new Error(`Attempted to parse an invalid base from ${matchString}`)
  }

  const base = getAdvanceableBase(baseMatch[0])

  return base
}

export function getNextBase(base: Base): Base {
  if (base === 1) return 2
  if (base === 2) return 3
  if (base === 3) return 4

  throw new Error(`Attempted to get next base of invalid base ${base}`)
}

export function getPreviousBase(base: Base): StartableBase {
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

export function getAdvanceableBase(rawBase: string | number): AdvanceableBase {
  if (rawBase === 'H') return 4

  const base = Number(rawBase)
  if (base === 2) return 2
  if (base === 3) return 3
  if (base === 4) return 4

  throw new Error('Attempted to use an invalid advanceable base')
}
