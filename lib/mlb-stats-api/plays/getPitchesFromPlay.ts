import { Play } from '../types'

export function getPitchesFromPlay(play: Play) {
  const { pitchIndex, playEvents } = play

  return pitchIndex.map((index) => playEvents[index])
}
