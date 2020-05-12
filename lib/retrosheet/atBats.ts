import { Scorekeeper } from '../Scorekeeper'

type GameRecorder = {
  hit: (base: number) => void
  putout: (fielders: number[]) => void
  flyout: (fielders: number) => void
}

export function handleAtABat(result: string, game: GameRecorder) {
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
