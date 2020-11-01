import { Base, StartableBase, AdvanceableBase, AtBatResult } from '../types'
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

export function getStartableBase(base: Base | 'B') {
  if (base === 4) {
    throw new Error(`Attempted to use invalid start base ${base}`)
  }

  return base
}

export function getBase(rawBase: string | number): Base {
  if (rawBase === 'H') return 4

  const base = Number(rawBase)
  if (base === 1) return 1
  if (base === 2) return 2
  if (base === 3) return 3

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

export function getOutType(
  modifier: string
): 'groundout' | 'lineout' | 'flyout' | undefined {
  if (modifier.match(/\/(B*)G/)) return 'groundout'
  if (modifier.indexOf('/L') >= 0) return 'lineout'
  if (modifier.match(/\/.*F.*/) || modifier.match(/\/B?P/)) return 'flyout'
}

export function getNonGroundout(
  outType: 'flyout' | 'lineout' | undefined,
  defensivePositions: number[]
) {
  let result: AtBatResult | undefined = undefined
  const defensivePosition = defensivePositions.pop()
  if (!defensivePosition || defensivePositions.length > 0)
    throw new Error(
      `Attempted to record an out without a valid defensive player: ${defensivePositions}`
    )

  if (outType === 'flyout') {
    result = resultGenerators.flyOut(defensivePosition)
  } else if (outType === 'lineout') {
    result = resultGenerators.lineOut(defensivePosition)
  }

  return result
}

export function getMultiAction(result: string) {
  const baseActions = result.matchAll(/([\d!]+)\(([B|1|2|3])\)/g)
  const batterMatch = result.match(/^([\d!]+\([123]\))*(\d+)(\(B\))?\//)
  const batterResultType = result.match(/(\/\w+)(\.[B123]-[123H]((.+))*)*$/)

  if (!batterResultType) {
    throw new Error(
      `Attemted to record a multi-action out without a valid batter action (${result})`
    )
  }

  return { baseActions, batterMatch, batterResultType }
}
