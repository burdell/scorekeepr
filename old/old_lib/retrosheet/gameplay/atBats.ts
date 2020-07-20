import { Scorekeeper } from '../'
import { handleOut, getMultiActionOut } from './outs'
import { getBase } from '../../utilities'
import * as resultGenerators from '../../resultGenerators'
import { RunnerMovement } from '../../types'

const isNumber = (str: string) => !isNaN(Number(str))
const getFieldersChoice = (batterAction: string) => {
  return batterAction.match(/^FC\d+/)
}
export const isError = (atBatResult: string) => atBatResult.match(/^C?\/?E(\d)/)
const isHomerun = (atBatResult: string) => atBatResult.match(/^HR?\d?/)
const isHitBatter = (atBatResult: string) => atBatResult.match(/^HP/)
const isIntentionalWalk = (atBatResult: string) => atBatResult.match(/^IW?/)
const isHit = (atBatResult: string) => {
  if (atBatResult.match(/^DGR/)) return 2

  const hitMatch = atBatResult.match(/^([S|D|T])\d+/)

  if (hitMatch) {
    const [_, hitType] = hitMatch
    if (hitType === 'S') return 1
    if (hitType === 'D') return 2
    if (hitType === 'T') return 3
  }
}

function handleBatterAction(atBatResult: string, game: Scorekeeper) {
  const errorMatch = isError(atBatResult)
  if (errorMatch) {
    const [_, defensivePosition] = errorMatch
    game.defensiveError({
      defensivePlayer: Number(defensivePosition),
      baseAdvancedTo: 1
    })

    return
  }

  const [batterAction, ...modifiers] = atBatResult.split('/')

  const hit = isHit(batterAction)
  if (hit) {
    game.hit(hit)
    return
  }

  if (isHitBatter(batterAction)) {
    game.hitBatter()
    return
  }

  if (isIntentionalWalk(batterAction)) {
    game.intentionalWalk()
    return
  }

  if (isHomerun(batterAction)) {
    game.hit(4)
    return
  }

  const isSimpleOut = isNumber(batterAction)
  if (isSimpleOut) {
    handleOut(batterAction, atBatResult, game)
    return
  }

  const fieldersChoice = getFieldersChoice(batterAction)
  if (fieldersChoice) {
    game.fieldersChoice()
    return
  }

  const { batter, ...bases } = getMultiActionOut(batterAction)
  if (batter) {
    handleOut(batter, atBatResult, game)
    return
  } else if (bases['1'] || bases['2'] || bases['3']) {
    game.fieldersChoice()
  }

  const baseResults: RunnerMovement[] = []
  Object.values(bases).forEach((result: string, index) => {
    if (!result) return

    baseResults.push({
      startBase: getBase(index + 1),
      endBase: getBase(index + 2),
      result: resultGenerators.putout(result.split('').map(Number)),
      isOut: true
    })
  })
  if (baseResults.length) {
    game.advanceRunners(baseResults)
  }

  return 'no-batter-action'
}

export function handleAtABat(result: string, game: Scorekeeper): boolean {
  const noBatterAction = handleBatterAction(result, game)
  return noBatterAction ? false : true
}
