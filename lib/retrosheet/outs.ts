import { Scorekeeper } from '../Scorekeeper'

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
