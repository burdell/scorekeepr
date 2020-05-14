import { Scorekeeper } from '../Scorekeeper'

const isNumber = (str: number) => !isNaN(str)

function getOutType(
  modifier: string
): 'groundout' | 'lineout' | 'flyout' | undefined {
  if (modifier.indexOf('/G') >= 0) return 'groundout'
  if (modifier.indexOf('/L') >= 0) return 'lineout'
  if (modifier.indexOf('/F') >= 0 || modifier.indexOf('/P') >= 0)
    return 'flyout'
}

function handleBatterAction(atBatResult: string, game: Scorekeeper) {
  const [batterAction, ...modifiers] = atBatResult.split('/')

  if (batterAction === 'HR') {
    game.hit(4)
    return
  }

  const resultNumber = Number(batterAction)
  if (isNumber(resultNumber)) {
    const outType = getOutType(atBatResult)
    if (outType === 'groundout') {
      game.putout(batterAction.split('').map(Number))
    } else if (outType === 'flyout') {
      game.flyout(resultNumber)
    } else if (outType === 'lineout') {
      game.lineout(resultNumber)
    }
  }
}

export function handleAtABat(result: string, game: Scorekeeper) {
  handleBatterAction(result, game)
}
