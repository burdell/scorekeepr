import { RunnerAdjustment } from 'retrosheet-parse'
import { Base, EventBaseResult, GameEvent } from '../Scorekeepr/types'
import { getBase, getStartableBase } from './guards'
import * as actions from '../generators/actions'
import { getPutoutPositions } from './outs'

export type BaserunnerMovements = ReturnType<typeof getBaserunnerMovements>

export function getBaserunnerMovements(str: string) {
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

export function handleBaserunnerMovements(
  baserunnerMovements: BaserunnerMovements,
  event: GameEvent,
  extraEvent?: GameEvent
) {
  baserunnerMovements.forEach(
    ({ startBase, endBase, isOut, result, errorPosition }) => {
      const validatedStartBase = getStartableBase(startBase)
      const existingBase = event.bases[validatedStartBase]

      const baseMovement: EventBaseResult = {
        endBase,
        result: undefined,
        ...(existingBase || {})
      }

      if (existingBase && endBase !== existingBase.endBase) {
        baseMovement.additionalBases = [
          {
            base: endBase,
            result: getAdditionalBaseResult(errorPosition, result)
          }
        ]
      } else if (errorPosition) {
        baseMovement.result = actions.error(errorPosition)
      } else if (isOut) {
        baseMovement.isOut = true
        const putOut = actions.putout(getPutoutPositions(result))
        if (validatedStartBase === endBase) {
          baseMovement.onBasePutout = putOut
        } else {
          baseMovement.result = putOut
        }
      }

      event.bases[validatedStartBase] = baseMovement
    }
  )

  if (extraEvent && extraEvent.bases) {
    const batterExtraBases = extraEvent.bases.B
    event.bases = {
      B: batterExtraBases
        ? { ...batterExtraBases, isAtBatResult: true }
        : event.bases.B,
      1: extraEvent.bases[1] || event.bases[1],
      2: extraEvent.bases[2] || event.bases[2],
      3: extraEvent.bases[3] || event.bases[3]
    }
  }
}

function getAdditionalBaseResult(
  errorPosition: number | undefined,
  putoutResult: string
) {
  if (errorPosition) {
    return actions.error(errorPosition)
  }

  if (putoutResult) {
    return actions.putout(getPutoutPositions(putoutResult))
  }

  return undefined
}
