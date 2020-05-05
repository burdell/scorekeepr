import { Scorekeeper } from '../Scorekeeper'

const strikes = ['C', 'K', 'L', 'O', 'Q', 'S', 'T', 'M']
const balls = ['B', 'I', 'P']
const fouls = ['F', 'R']

export function handlePitch(pitch: string, game: Scorekeeper) {
  if (strikes.includes(pitch)) {
    game.strike()
  } else if (balls.includes(pitch)) {
    game.ball()
  } else if (fouls.includes(pitch)) {
    game.foul()
  }
}
