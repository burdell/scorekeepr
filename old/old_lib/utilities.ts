import { Base, AdvanceableBase } from './types'

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
