import { Scorekeeper } from '../Scorekeeper'
import { main } from '../generate'

const isNumber = (str: string) => !isNaN(Number(str))

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

function handleOut(
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

function handleBatterAction(atBatResult: string, game: Scorekeeper) {
  const [batterAction, ...modifiers] = atBatResult.split('/')

  if (batterAction === 'HR') {
    game.hit(4)
    return
  }

  const isSimpleOut = isNumber(batterAction)
  if (isSimpleOut) {
    handleOut(batterAction, atBatResult, game)
  }

  const multiActionOut = batterAction.match(/(\d+)\(B\)/)
  if (multiActionOut) {
    const [_, batterAction] = multiActionOut

    if (isNumber(batterAction)) {
      handleOut(batterAction, atBatResult, game)
    }
  }
}

export function handleAtABat(result: string, game: Scorekeeper) {
  handleBatterAction(result, game)
}
