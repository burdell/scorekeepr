import { Base } from '../types'
import { getBase } from './utilities'

export type BaserunnerMovements = ReturnType<typeof getBaserunnerMovements>

export const getBaserunnerMovements = (str: string) => {
  const baseRunnerMovements = str.matchAll(
    /([123B])([-X])([123H])(\(([\w\/]+)\))?;?/g
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
      resultString
    ] = movement

    const result = resultString === 'TH' ? '' : resultString
    const isOut = advanceOrOut === 'X'
    const errorOnOut = result ? result.match(/E(\d+)/) : null
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
