import { Base } from '../types'
import { getBase } from './utilities'

export const getBaserunnerMovements = (str: string) => {
  const baseRunnerMovements = str.matchAll(
    /([\d|B])+([-X])([\d+H])(\((.+)\))?/g
  )

  const runnerMovements: {
    startBase: Base | 'B'
    endBase: Base
    isOut: boolean
    errorPosition: number | undefined
    isAdvancement: boolean
    result: string
  }[] = []
  for (const movement of baseRunnerMovements) {
    const [
      fullGroup,
      rawStartBase,
      advanceOrOut,
      rawEndBase,
      resultGroup,
      result
    ] = movement

    const isOut = advanceOrOut === 'X'
    const errorOnOut = isOut && result ? result.match(/E(\d+)/) : null
    const errorPosition = errorOnOut ? Number(errorOnOut[1]) : undefined

    const startBase =
      rawStartBase === 'B' ? rawStartBase : getBase(rawStartBase)
    const endBase = getBase(rawEndBase)
    runnerMovements.push({
      startBase,
      endBase,
      isOut,
      errorPosition,
      isAdvancement: advanceOrOut === '-',
      result
    })
  }
  return runnerMovements
}

export function getErrorMovements(
  base: Base,
  action: string,
  putoutString: string
) {
  return getBaserunnerMovements(action).map((movement) => {
    if (movement.endBase !== base + 1) return movement
    return {
      ...movement,
      errorPosition: Number(putoutString.split('E').pop())
    }
  })
}
