import { Base } from '../types'
import { getBase } from './utilities'
import * as resultGenerators from './generators/result'

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

  function getPassedBallOrWildPitch() {
    if (str.match(/^WP/)) return resultGenerators.wildPitch
    if (str.match(/^PB/)) return resultGenerators.passedBall
    return
  }
  const baseResultFn = getPassedBallOrWildPitch()

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
