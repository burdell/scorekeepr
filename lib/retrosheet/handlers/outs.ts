import { AtBat } from 'retrosheet-parse'

import * as resultGenerators from '../../resultGenerators'

import { GameEvent, AtBatResult } from '../../types'
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

export const getMultiActionOut = (batterAction: string) => {
  const baseActions = (batterAction as any).matchAll(/(\d+)\(([B|1|2|3])\)/g)
  const batterMatch = batterAction.match(/(\d+)(\(B\))?$/)

  let batterResult = batterMatch ? batterMatch[1] : ''
  let firstBaseResult = ''
  let secondBaseResult = ''
  let thirdBaseResult = ''

  for (const putout of baseActions) {
    const [_, action, base] = putout
    switch (base) {
      case 'B': {
        batterResult = action
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

  return {
    batter: batterMatch
      ? `${thirdBaseResult}${secondBaseResult}${firstBaseResult}${batterResult}`
      : batterResult,
    '1': firstBaseResult
      ? `${thirdBaseResult}${secondBaseResult}${firstBaseResult}`
      : '',
    '2': secondBaseResult ? `${thirdBaseResult}${secondBaseResult}` : '',
    '3': thirdBaseResult ? `${thirdBaseResult}` : ''
  }
}

export function getPutoutPositions(putout: string) {
  return putout.split('').map(Number)
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

const simpleOut: ActionConfig = {
  actionType: 'batter',
  regexp: /^\d+\//,
  handler: (gameplayEvent: AtBat, match: RegExpMatchArray) => {
    const atBatResult = gameplayEvent.result
    const batterAction = getBatterAction(atBatResult)

    const outType = getOutType(atBatResult)
    const atBatIsSacrifice = isSacrifice(atBatResult)
    const defensivePositions = getPutoutPositions(batterAction)

    const outData: Partial<GameEvent> = {
      isSacrifice: atBatIsSacrifice,
      isOut: true
    }

    let result: AtBatResult | undefined = undefined
    if (outType === 'groundout') {
      result = resultGenerators.putout(defensivePositions)
    } else {
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
    }

    outData.result = result
    return getAction(outData)
  }
}

export const outConfigs = [strikeout, simpleOut]
