import { Base } from '../types'
import { getBase } from './utilities'

export const getBaserunnerMovements = (str: string) => {
  // const baseRunnerMovements = str.matchAll(
  //   /(([123B])([-X])([123H])(\((.+)\))?)+;/g
  // )
  const baseRunnerMovements = str.matchAll(
    /([123B])([-X])([123H])(\((\w+)\))?;?/g
  )

  const runnerMovements: Array<{
    startBase: Base | 'B'
    endBase: Base
    isOut: boolean
    errorPosition: number | undefined
    result: string
  }> = []

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
