type PitchRecorder = {
  strike(): void
  ball(): void
  foul(): void
}

const strikes = ['C', 'K', 'L', 'O', 'Q', 'S', 'T', 'M']
const balls = ['B', 'I', 'V']
const fouls = ['F', 'R']

export function handlePitch(pitch: string, game: PitchRecorder) {
  if (strikes.includes(pitch)) {
    game.strike()
  } else if (balls.includes(pitch)) {
    game.ball()
  } else if (fouls.includes(pitch)) {
    game.foul()
  }
}

export function handlePitchSequence(pitch: string, game: PitchRecorder) {
  pitch.split('').forEach((pitch) => handlePitch(pitch, game))
}
