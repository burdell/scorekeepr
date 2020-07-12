import { Scorekeeper } from '../Scorekeeper'
import { handleOut, getMultiActionOut } from './outs'

const isNumber = (str: string) => !isNaN(Number(str))
const getFieldersChoice = (batterAction: string) =>
  batterAction.match(/(\d+)\(\d\)/)

function handleBatterAction(atBatResult: string, game: Scorekeeper) {
  const [batterAction, ...modifiers] = atBatResult.split('/')

  if (batterAction === 'HR') {
    game.hit(4)
    return
  }

  const isSimpleOut = isNumber(batterAction)
  if (isSimpleOut) {
    handleOut(batterAction, atBatResult, game)
    return
  }

  const { batter } = getMultiActionOut(batterAction)
  if (batter) {
    handleOut(batter, atBatResult, game)
    return
  }

  const fieldersChoice = getFieldersChoice(batterAction)
  if (fieldersChoice) {
    game.fieldersChoice()
  }
}

export function handleAtABat(result: string, game: Scorekeeper) {
  handleBatterAction(result, game)
}
