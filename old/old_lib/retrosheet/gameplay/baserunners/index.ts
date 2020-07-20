import { Scorekeeper } from '../../'
import { RunnerMovement, Base, AdvanceableBase } from '../../../types'
import * as resultGenerators from '../../../resultGenerators'
import { getBase, getAdvanceableBase } from '../../../utilities'

import { isError } from '../atBats'
import { getPutoutPositions } from '../outs'

import { getBaserunnerAction } from './actions'
import { getBaserunnerMovements, getErrorMovements } from './movements'

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
    const base = getBase(rawBase)
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
    handleBaserunnerMovement(action, game)
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
