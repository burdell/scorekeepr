import { AtBat } from 'retrosheet-parse'

import * as resultGenerators from '../../resultGenerators'

import { RetrosheetEvent, AtBatResult } from '../../types'
import { getAction } from '../utilities'
import { ActionConfig } from '../retrosheet.types'

export function getOutType(
  modifier: string
): 'groundout' | 'lineout' | 'flyout' | 'sacrifice-fly' | undefined {
  if (modifier.match(/\/(B*)G/)) return 'groundout'
  if (modifier.indexOf('/L') >= 0) return 'lineout'
  if (modifier.indexOf('/F') >= 0 || modifier.indexOf('/P') >= 0)
    return 'flyout'
  if (modifier.indexOf('/SF') >= 0) return 'sacrifice-fly'
}

export function isSacrifice(atBatResult: string) {
  return !!atBatResult.match(/\/S(F|H)/)
}

export function getPutoutPositions(putout: string) {
  return putout
    .split('')
    .map(Number)
    .filter((p) => !!p)
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
  handler: () => {
    return getAction({
      isOut: true,
      result: resultGenerators.pitcherResult('K')
    })
  }
}

function getNonGroundout(
  outType: 'flyout' | 'lineout' | 'sacrifice-fly' | undefined,
  defensivePositions: number[]
) {
  let result: AtBatResult | undefined = undefined
  const defensivePosition = defensivePositions.pop()
  if (!defensivePosition || defensivePositions.length > 0)
    throw new Error(
      'Attempted to record an out without a valid defensive player'
    )

  if (outType === 'flyout') {
    result = resultGenerators.flyOut(defensivePosition)
  } else if (outType === 'lineout') {
    result = resultGenerators.lineOut(defensivePosition)
  } else if (outType === 'sacrifice-fly') {
    result = resultGenerators.flyOut(defensivePosition)
  }

  return result
}

function getOut(atBatResult: string) {
  const outType = getOutType(atBatResult)
  const batterAction = getBatterAction(atBatResult)
  const defensivePositions = getPutoutPositions(batterAction)

  const outData: Partial<RetrosheetEvent> = {
    isSacrifice: isSacrifice(atBatResult),
    isOut: true
  }

  let result: AtBatResult | undefined = undefined
  if (outType === 'groundout') {
    result = resultGenerators.putout(defensivePositions)
  } else {
    result = getNonGroundout(outType, defensivePositions)
  }

  outData.result = result
  return outData
}

const simpleOut: ActionConfig = {
  actionType: 'batter',
  regexp: /^\d+\//,
  handler: (gameplayEvent: AtBat, match: RegExpMatchArray) => {
    const out = getOut(gameplayEvent.result)
    return getAction(out)
  }
}

const multiActionOut: ActionConfig = {
  actionType: 'batter',
  regexp: /(\d+)\(([B|1|2|3])\)/g,
  handler: (gameplayEvent, match) => {
    const { result } = gameplayEvent
    const baseActions = result.matchAll(/(\d+)\(([B|1|2|3])\)/g)
    const batterMatch = result.match(/(\d+)(\(B\))?\//)
    const notGroundoutBatterResult = result.match(/.+\/.+(\/.+)/)

    let batterAction = batterMatch ? batterMatch[1] : ''
    let firstBaseResult = ''
    let secondBaseResult = ''
    let thirdBaseResult = ''

    for (const putout of baseActions) {
      const [_, action, base] = putout
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
      if (notGroundoutBatterResult) {
        const [fullMatch, result] = notGroundoutBatterResult
        const outType = getOutType(result)

        if (outType !== 'groundout') {
          const batterOut = getNonGroundout(outType, getPutoutPositions(result))
          return batterOut
        }
      }

      return batterResult
        ? resultGenerators.putout(getPutoutPositions(batterResult))
        : resultGenerators.fieldersChoice(1)
    }

    return getAction({
      result: getAtBatResult(),
      bases: {
        B: undefined,
        1: baseResults[1]
          ? { endBase: 2, result: getPutoutFromString(baseResults[1]) }
          : undefined,
        2: baseResults[2]
          ? { endBase: 3, result: getPutoutFromString(baseResults[2]) }
          : undefined,
        3: baseResults[3]
          ? { endBase: 4, result: getPutoutFromString(baseResults[3]) }
          : undefined
      }
    })
  }
}

export const outConfigs = [strikeout, simpleOut, multiActionOut]
