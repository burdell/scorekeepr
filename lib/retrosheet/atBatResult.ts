import { Scorekeeper } from '../Scorekeeper'

export function handleResult(result: string, game: Scorekeeper) {
  const [atBatResult] = result.split('/')

  if (atBatResult === 'HR') {
    game.hit(4)
    return
  }

  const resultNumber = Number(atBatResult)
  if (resultNumber && atBatResult.length === 1) {
    resultNumber < 7 ? game.putout([resultNumber]) : game.flyout(resultNumber)
  }
}
