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
const getMultiOut = (batterAction: string) => {
  const putouts = {
    batter: '',
    '1': '',
    '2': '',
    '3': ''
  }

  const baseActions = batterAction.matchAll(/(\d+)\(([B|1|2|3])\)/g)
  const batterResult = batterAction.match(/(\d+)(\(B\))?$/)

  if (batterResult) {
    putouts.batter = batterResult[1]
  }

  for (const putout of baseActions) {
    const [_, action, base] = putout
    switch (base) {
      case '1': {
        putouts['1'] = action
        break
      }
      case '2': {
        putouts['2'] = action
        break
      }
      case '3': {
        putouts['3'] = action
      }
    }
  }

  return putouts
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

  const { batter } = getMultiOut(batterAction)

  if (batter && isNumber(batter)) {
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
