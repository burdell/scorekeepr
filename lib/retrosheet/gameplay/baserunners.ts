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

export type BaserunnerAction =
  | 'balk'
  | 'caught-stealing'
  | 'defensive-indifference'
  | 'base-advancement'
  | 'passed-ball'
  | 'wild-pitch'
  | 'pick-off'
  | 'pick-off-caught-stealing'
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

  const isDefensiveIndifferenceRegexp = action.match(/^DI.\d-(\d)/)
  if (isDefensiveIndifferenceRegexp)
    return {
      type: 'defensive-indifference',
      match: isDefensiveIndifferenceRegexp,
      action
    }

  const isBaseAdvancementRegexp = action.match(/^OA/)
  if (isBaseAdvancementRegexp)
    return { type: 'base-advancement', match: isBaseAdvancementRegexp, action }

  const pbOrWpRegexp = action.match(/^(WP|PB)/)
  if (pbOrWpRegexp) return { type: 'pb-or-wp', match: pbOrWpRegexp, action }

  const pickOffCaughtStealing = action.match(/^POCS([23H])\((\d+)\)/)
  if (pickOffCaughtStealing)
    return {
      type: 'pick-off-caught-stealing',
      match: pickOffCaughtStealing,
      action
    }

  const isPickOffRegexp = action.match(/^PO([123])\((E?\d+)\)/)
  if (isPickOffRegexp)
    return { type: 'pick-off', match: isPickOffRegexp, action }

  const isStolenBaseRegexp = action.match(/^SB([23H])/)
  if (isStolenBaseRegexp)
    return { type: 'stolen-base', match: isStolenBaseRegexp, action }

  return
}

function getBase(rawBase: string | number): Base {
  if (rawBase === 'H') return 4
  if (rawBase === 'B') return 1

  const base = Number(rawBase)
  if (base === 1) return 1
  if (base === 2) return 2
  if (base === 3) return 3
  if (base === 4) return 4

  throw new Error('Attempted to use an invalid base')
}

function getAdvanceableBase(rawBase: string | number): AdvanceableBase {
  if (rawBase === 'H') return 4

  const base = Number(rawBase)
  if (base === 2) return 2
  if (base === 3) return 3
  if (base === 4) return 4

  throw new Error('Attempted to use an invalid advanceable base')
}

function getErrorMovements(base: Base, action: string, putoutString: string) {
  return getBaserunnerMovements(action).map((movement) => {
    if (movement.endBase !== base + 1) return movement
    return {
      ...movement,
      errorPosition: Number(putoutString.split('E').pop())
    }
  })
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
    const base = getBase(rawBase)
    if (putoutString.indexOf('E') >= 0) {
      const allRunnerMovements = getErrorMovements(base, action, putoutString)
      moveRunners(allRunnerMovements, game)
    } else {
      game.caughtStealing(
        getAdvanceableBase(base),
        putoutString.split('').map(Number)
      )
    }
  }

  if (type === 'defensive-indifference') {
    game.defensiveIndifference(getAdvanceableBase(match[1]))
  }

  if (type === 'base-advancement') {
    handleBaserunnerMovement(action, game)
  }

  if (type === 'pb-or-wp') {
    const movements = getBaserunnerMovements(action)
    const movedBases = movements.map((m) => m.endBase)
    const resultFn = match[0] === 'PB' ? game.passedBall : game.wildPitch
    resultFn(movedBases)
  }

  if (type === 'pick-off') {
    const [_, rawBase, putoutString] = match
    const base = Number(rawBase) as Base
    if (putoutString.indexOf('E') >= 0) {
      const allRunnerMovements = getErrorMovements(base, action, putoutString)
      moveRunners(allRunnerMovements, game)
    } else {
      game.pickOff(base, putoutString.split('').map(Number))
    }
  }

  if (type === 'pick-off-caught-stealing') {
    const [fullMatch, attemptedBase, putoutString] = match
    game.caughtStealing(
      getAdvanceableBase(attemptedBase),
      putoutString.split('').map(Number)
    )
  }

  if (type === 'stolen-base') {
    const allBases = action.matchAll(/(SB([23H]))+/g)
    const baseList: AdvanceableBase[] = Array.from(
      allBases
    ).map(([fullGroup, repeatGroup, attemptedBase]) =>
      getAdvanceableBase(attemptedBase)
    )
    game.stolenBase(baseList)
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
