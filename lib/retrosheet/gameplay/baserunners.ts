import { Scorekeeper } from '../'
import { RunnerAdvancement, Base } from '../../types'

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

export function handleBaserunnerMovement(
  advancesString: string,
  game: Scorekeeper
) {
  const baseRunnerMovementString = advancesString.split('.').pop()
  if (!baseRunnerMovementString) return

  const baseRunnerMovements = baseRunnerMovementString.matchAll(
    /([\d|B])+([-|x])([\d+H])/g
  )
  const baseAdvancements: RunnerAdvancement[] = []
  for (const movement of baseRunnerMovements) {
    const [_, startBase, result, endBase] = movement
    if (isAdvancement(result)) {
      baseAdvancements.push({
        startBase: startBase === 'B' ? startBase : (Number(startBase) as Base),
        endBase: endBase === 'H' ? 4 : (Number(endBase) as Base),
        result: undefined
      })
    }
  }

  game.advanceRunners(baseAdvancements)
}
