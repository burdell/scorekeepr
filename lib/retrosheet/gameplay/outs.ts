import { Scorekeeper } from '../'

function getOutType(
  modifier: string
): 'groundout' | 'lineout' | 'flyout' | 'sacrifice-fly' | undefined {
  if (modifier.match(/\/(B*)G/)) return 'groundout'
  if (modifier.indexOf('/L') >= 0) return 'lineout'
  if (modifier.indexOf('/F') >= 0 || modifier.indexOf('/P') >= 0)
    return 'flyout'
  if (modifier.indexOf('/SF') >= 0) return 'sacrifice-fly'
}

function isSacrifice(atBatResult: string) {
  return !!atBatResult.match(/\/S(F|H)/)
}

export const getMultiActionOut = (batterAction: string) => {
  const baseActions = batterAction.matchAll(/(\d+)\(([B|1|2|3])\)/g)
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

export function handleMultiActionOut() {}

export function handleOut(
  batterAction: string,
  atBatResult: string,
  game: Scorekeeper
) {
  const outType = getOutType(atBatResult)
  const atBatIsSacrifice = isSacrifice(atBatResult)
  const defensivePositions = batterAction.split('').map(Number)
  if (outType === 'groundout') {
    const putoutFn = atBatIsSacrifice ? game.sacrificeBunt : game.putout
    putoutFn(defensivePositions)
  } else {
    const defensivePosition = defensivePositions.pop()
    if (!defensivePosition || defensivePositions.length > 0)
      throw new Error(
        'Attempted to record an out without a valid defensive player'
      )

    if (outType === 'flyout') {
      const flyoutFn = atBatIsSacrifice ? game.sacrificeFly : game.flyout
      flyoutFn(defensivePosition)
    } else if (outType === 'lineout') {
      game.lineout(defensivePosition)
    } else if (outType === 'sacrifice-fly') {
      game.sacrificeFly(defensivePosition)
    }
  }
}
