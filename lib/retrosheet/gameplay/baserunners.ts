import { Scorekeeper } from '../'
import { RunnerMovement, Base } from '../../types'
import * as resultGenerators from '../../resultGenerators'

import { isError } from './atBats'
import { getPutoutPositions } from './outs'

const isBalk = (str: string) => str.match(/^BK/)
const isCaughtStealing = (str: string) => str.match(/^CS/)
const isDefensiveIndifference = (str: string) => str.match(/^DI/)
const isBaseAdvancement = (str: string) => str.match(/^OA/)
const isPassedBall = (str: string) => str.match(/^PB/)
const isWildPitch = (str: string) => str.match(/^WP/)
const isPickOff = (str: string) => str.match(/^PO/)
const isPickOffOffBase = (str: string) => str.match(/^POCS/)
const isStolenBase = (str: string) => str.match(/^SB/)

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

export function getBaserunnerAction(
  action: string
): BaserunnerAction | undefined {
  if (isBalk(action)) return 'balk'
  if (isCaughtStealing(action)) return 'caught-stealing'
  if (isDefensiveIndifference(action)) return 'defensive-indifference'
  if (isBaseAdvancement(action)) return 'base-advancement'
  if (isPassedBall(action)) return 'passed-ball'
  if (isWildPitch(action)) return 'wild-pitch'
  if (isPickOffOffBase(action)) return 'pick-off-off-base'
  if (isPickOff(action)) return 'pick-off'
  if (isStolenBase(action)) return 'stolen-base'

  return
}

export function handleBaserunnerAction(
  baserunnerAction: BaserunnerAction,
  game: Scorekeeper
) {
  if (baserunnerAction === 'balk') game.balk()

  if (baserunnerAction === 'caught-stealing') {
    game.caughtStealing()
  }

  if (baserunnerAction === 'defensive-indifference') {
    game.defensiveIndifference()
  }

  if (baserunnerAction === 'base-advancement') {
    // game.advanceRunners()
  }

  if (baserunnerAction === 'passed-ball') {
    game.passedBall()
  }

  if (baserunnerAction === 'wild-pitch') {
    game.wildPitch()
  }

  if (baserunnerAction === 'pick-off') {
    game.pickOff()
  }

  if (baserunnerAction === 'pick-off-off-base') {
    game.pickOffOffBase()
  }

  if (baserunnerAction === 'stolen-base') {
    game.stolenBase()
  }
}

const isAdvancement = (indicator: string) => indicator === '-'
const isOut = (indicator: string) => indicator === 'X'

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

  const baseRunnerMovements = baseRunnerMovementString.matchAll(
    /([\d|B])+([-X])([\d+H])(\((.+)\))?/g
  )
  const runnerMovements: RunnerMovement[] = []
  for (const movement of baseRunnerMovements) {
    const [
      fullGroup,
      rawStartBase,
      advanceOrOut,
      rawEndBase,
      resultGroup,
      result
    ] = movement

    const movementIsOut = isOut(advanceOrOut)
    const errorOnOut = movementIsOut && result && result.match(/E(\d+)/)

    const startBase =
      rawStartBase === 'B' ? rawStartBase : (Number(rawStartBase) as Base)
    const endBase = rawEndBase === 'H' ? 4 : (Number(rawEndBase) as Base)
    if (errorOnOut) {
      const [errorGroup, errorPosition] = errorOnOut
      runnerMovements.push({
        startBase,
        endBase,
        result: resultGenerators.error(Number(errorPosition))
      })
    } else if (isAdvancement(advanceOrOut)) {
      runnerMovements.push({
        startBase,
        endBase,
        result: getBaseAdvancementResult(result)
      })
    } else if (movementIsOut) {
      runnerMovements.push({
        startBase,
        endBase,
        isOut: true,
        result: resultGenerators.putout(getPutoutPositions(result))
      })
    }
  }

  game.advanceRunners(runnerMovements)
}
