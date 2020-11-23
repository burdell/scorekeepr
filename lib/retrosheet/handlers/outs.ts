import { AtBat } from 'retrosheet-parse'

import * as resultGenerators from '../../Scorekeeper/generators/result'
import * as actionGenerators from '../../Scorekeeper/generators/action'
import { getGameEvent } from '../../Scorekeeper/generators'

import { GameEvent, AtBatResult } from '../../types'
import { getPutoutPositions } from '../outs'
import { ActionConfig } from '../retrosheet.types'
import { getOutType, getNonGroundout, getMultiAction } from '../guards'

export function isSacrifice(atBatResult: string) {
  return !!atBatResult.match(/\/S(F|H)/)
}

function getPutoutFromString(putout: string) {
  return resultGenerators.putout(getPutoutPositions(putout))
}

function getBatterAction(atBatResult: string) {
  const [batterAction, ...modifiers] = atBatResult.split('/')
  return batterAction
}

const strikeout: ActionConfig = {
  actionType: 'batter',
  regexp: /^K/,
  handler: (gameplayEvent) => {
    const isLooking = gameplayEvent.pitchSequence.endsWith('C')
    const resultType = isLooking ? 'K-looking' : 'K'

    return getGameEvent({
      isOut: true,
      result: resultGenerators.pitcherResult(resultType)
    })
  }
}

function getOut(atBatResult: string) {
  const outType = getOutType(atBatResult)
  const batterAction = getBatterAction(atBatResult)
  const defensivePositions = getPutoutPositions(batterAction)

  const outData: Partial<GameEvent> = {
    isSacrifice: isSacrifice(atBatResult),
    isOut: true
  }

  let result: AtBatResult | undefined = undefined
  if (defensivePositions.length > 1 || outType === 'groundout') {
    result = resultGenerators.putout(defensivePositions)
  } else {
    result = getNonGroundout(outType, defensivePositions)
  }

  outData.result = result
  return outData
}

const simpleOut: ActionConfig = {
  actionType: 'batter',
  regexp: /^\d+!*\d*\//,
  handler: (gameplayEvent: AtBat, match: RegExpMatchArray) => {
    const out = getOut(gameplayEvent.result)
    return getGameEvent(out)
  }
}

// these are usually in older game files.
// just numbers that don't invlude the hit type modifier
const oldSimpleOut: ActionConfig = {
  actionType: 'batter',
  regexp: /^(\d+)(\..+)?#?$/,
  handler: (gameplayEvent: AtBat, match: RegExpMatchArray) => {
    const [fullMatch, positions] = match
    if (positions.length === 1 && Number(positions) > 6) {
      return getGameEvent({
        result: resultGenerators.flyOut(Number(positions)),
        isOut: true
      })
    }

    const putoutPositions = getPutoutPositions(positions)
    return actionGenerators.putout(putoutPositions)
  }
}

const multiActionOut: ActionConfig = {
  actionType: 'batter',
  regexp: /(\d+)\(([B|1|2|3])\)/g,
  handler: (gameplayEvent, match) => {
    const { result } = gameplayEvent
    const { baseActions, batterMatch, batterResultType } = getMultiAction(
      result
    )

    let batterAction = batterMatch ? batterMatch[2] : ''
    let firstBaseResult = ''
    let secondBaseResult = ''
    let thirdBaseResult = ''

    for (const putout of baseActions) {
      const [_, rawAction, base] = putout
      const action = getPutoutPositions(rawAction).join('')
      switch (base) {
        case 'B': {
          batterAction = action
          break
        }
        case '1': {
          firstBaseResult = action
          break
        }
        case '2': {
          secondBaseResult = action
          break
        }
        case '3': {
          thirdBaseResult = action
        }
      }
    }

    const batterResult = batterMatch
      ? `${thirdBaseResult}${secondBaseResult}${firstBaseResult}${batterAction}`
      : batterAction
    const baseResults = {
      '1': firstBaseResult
        ? `${thirdBaseResult}${secondBaseResult}${firstBaseResult}`
        : undefined,
      '2': secondBaseResult
        ? `${thirdBaseResult}${secondBaseResult}`
        : undefined,
      '3': thirdBaseResult ? `${thirdBaseResult}` : undefined
    }

    function getAtBatResult() {
      if (batterResultType) {
        const [fullMatch, result] = batterResultType
        const outType = getOutType(result)
        const positions = getPutoutPositions(result)
        if (outType !== 'groundout' && positions.length) {
          const batterOut = getNonGroundout(outType, positions)
          return batterOut
        }
      }

      return batterResult
        ? resultGenerators.putout(getPutoutPositions(batterResult))
        : resultGenerators.fieldersChoice(1)
    }

    const res = getAtBatResult()
    const isFieldersChoice = !!(res && res.type === 'fielders-choice')
    return getGameEvent({
      isOut: !isFieldersChoice,
      result: res,
      bases: {
        B: isFieldersChoice
          ? {
              endBase: 1,
              isAtBatResult: true,
              result: undefined
            }
          : undefined,
        1: baseResults[1]
          ? {
              endBase: 2,
              result: getPutoutFromString(baseResults[1]),
              isOut: true
            }
          : undefined,
        2: baseResults[2]
          ? {
              endBase: 3,
              result: getPutoutFromString(baseResults[2]),
              isOut: true
            }
          : undefined,
        3: baseResults[3]
          ? {
              endBase: 4,
              result: getPutoutFromString(baseResults[3]),
              isOut: true
            }
          : undefined
      }
    })
  }
}

export const outConfigs = [strikeout, simpleOut, oldSimpleOut, multiActionOut]
