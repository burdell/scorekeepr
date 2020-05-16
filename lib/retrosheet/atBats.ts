import { Scorekeeper } from '../Scorekeeper'
import { handleOut } from './outs'

type MultiActionAtBat = {
  B: string
  '1': string
  '2': string
  '3': string
}

const isNumber = (str: string) => !isNaN(Number(str))
const getFieldersChoice = (batterAction: string) =>
  batterAction.match(/(\d+)\(\d\)/)
const getMultiOut = (batterAction: string): MultiActionAtBat | undefined => {
  const matches = batterAction.matchAll(/(\d+)\(B|1|2|3\)/)

  console.log(matches)
  return {
    B: '',
    '1': '',
    '2': '',
    '3': ''
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
    return
  }

  const multiActionOut = batterAction.match(/(\d+)\(B\)/)
  if (multiActionOut) {
    const [_, batterAction] = multiActionOut

    if (isNumber(batterAction)) {
      handleOut(batterAction, atBatResult, game)
      return
    }
  }

  const fieldersChoice = getFieldersChoice(batterAction)
  if (fieldersChoice) {
    game.fieldersChoice()
  }
}

export function handleAtABat(result: string, game: Scorekeeper) {
  handleBatterAction(result, game)
}
