import { Scorekeeper } from '../'
import { RunnerMovement, Base, AdvanceableBase } from '../../types'
import * as resultGenerators from '../../resultGenerators'

import { isError } from './atBats'
import { getPutoutPositions } from './outs'

const getBaserunnerMovements = (str: string) => {
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
      rawStartBase === 'B' ? rawStartBase : (Number(rawStartBase) as Base)
    const endBase = rawEndBase === 'H' ? 4 : (Number(rawEndBase) as Base)
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

export type BaserunnerAction =
  | 'balk'
  | 'caught-stealing'
  | 'defensive-indifference'
  | 'base-advancement'
  | 'passed-ball'
  | 'wild-pitch'
  | 'pick-off'
  | 'pick-off-off-base'
  | 'stolen-base'

export function getBaserunnerAction(action: string) {
  const balkRegexp = action.match(/^BK/)
  if (balkRegexp) return { type: 'balk', match: balkRegexp, action }

  const isCaughtStealingRegexp = action.match(/^CS([23H])\((\dE?\d)\)/)
  if (isCaughtStealingRegexp)
    return {
      type: 'caught-stealing',
      match: isCaughtStealingRegexp,
      action
    }

  const isDefensiveIndifferenceRegexp = action.match(/^DI/)
  if (isDefensiveIndifferenceRegexp)
    return {
      type: 'defensive-indifference',
      match: isDefensiveIndifferenceRegexp,
      action
    }

  const isBaseAdvancementRegexp = action.match(/^OA/)
  if (isBaseAdvancementRegexp)
    return { type: 'base-advancement', match: isBaseAdvancementRegexp, action }

  const isPassedBallRegexp = action.match(/^PB/)
  if (isPassedBallRegexp)
    return { type: 'passed-ball', match: isPassedBallRegexp, action }

  const isWildPitchRegexp = action.match(/^WP/)
  if (isWildPitchRegexp)
    return { type: 'wild-pitch', match: isWildPitchRegexp, action }

  const isPickOffOffBaseRegexp = action.match(/^POCS/)
  if (isPickOffOffBaseRegexp)
    return { type: 'pick-off-off-base', match: isPickOffOffBaseRegexp, action }

  const isPickOffRegexp = action.match(/^PO/)
  if (isPickOffRegexp)
    return { type: 'pick-off', match: isPickOffRegexp, action }

  const isStolenBaseRegexp = action.match(/^SB/)
  if (isStolenBaseRegexp)
    return { type: 'stolen-base', match: isStolenBaseRegexp, action }

  return
}

function getAdvanceableBase(rawBase: string): AdvanceableBase {
  if (rawBase === 'H') return 4
  const base = Number(rawBase)
  if (base === 2) return 2
  if (base === 3) return 3

  throw new Error('Attempted to advance to an invalid base')
}

export function handleBaserunnerAction(
  baserunnerAction: ReturnType<typeof getBaserunnerAction>,
  game: Scorekeeper
) {
  if (!baserunnerAction) return
  const { type, match, action } = baserunnerAction
  if (type === 'balk') game.balk()

  if (type === 'caught-stealing' && match) {
    const [fullResult, rawBase, putoutString] = match
    const base = getAdvanceableBase(rawBase)
    if (putoutString.indexOf('E') >= 0) {
      const allRunnerMovements = getBaserunnerMovements(action).map(
        (movement) => {
          if (movement.endBase !== base + 1) return movement
          return {
            ...movement,
            errorPosition: Number(putoutString.split('E').pop())
          }
        }
      )
      moveRunners(allRunnerMovements, game)
    } else {
      game.caughtStealing(base, putoutString.split('').map(Number))
    }
  }

  if (type === 'defensive-indifference') {
    game.defensiveIndifference()
  }

  if (type === 'base-advancement') {
    // game.advanceRunners()
  }

  if (type === 'passed-ball') {
    game.passedBall()
  }

  if (type === 'wild-pitch') {
    game.wildPitch()
  }

  if (type === 'pick-off') {
    game.pickOff()
  }

  if (type === 'pick-off-off-base') {
    game.pickOffOffBase()
  }

  if (type === 'stolen-base') {
    // game.stolenBase()
  }
}

function getBaseAdvancementResult(result: string | undefined) {
  if (!result) return

  const errorMatch = isError(result)
  if (errorMatch) {
    const [_, defensivePosition] = errorMatch
    return resultGenerators.error(Number(defensivePosition))
  }
}

export function handleBaserunnerMovement(
  advancesString: string,
  game: Scorekeeper
) {
  const baseRunnerMovementString = advancesString.split('.').pop()
  if (!baseRunnerMovementString) return

  moveRunners(getBaserunnerMovements(baseRunnerMovementString), game)
}

function moveRunners(
  movements: ReturnType<typeof getBaserunnerMovements>,
  game: Scorekeeper
) {
  const runnerMovements: RunnerMovement[] = []
  movements.forEach(
    ({ errorPosition, startBase, endBase, isAdvancement, result, isOut }) => {
      if (errorPosition) {
        runnerMovements.push({
          startBase,
          endBase,
          result: resultGenerators.error(errorPosition)
        })
      } else if (isAdvancement) {
        runnerMovements.push({
          startBase,
          endBase,
          result: getBaseAdvancementResult(result)
        })
      } else if (isOut) {
        runnerMovements.push({
          startBase,
          endBase,
          isOut: true,
          result: resultGenerators.putout(getPutoutPositions(result))
        })
      }
    }
  )

  game.advanceRunners(runnerMovements)
}
