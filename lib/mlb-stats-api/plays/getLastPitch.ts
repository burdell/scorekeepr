import { Play } from '../types'
import { getPitchesFromPlay } from './getPitchesFromPlay'

export function getLastPitch(play: Play) {
  const pitches = getPitchesFromPlay(play)
  const lastPitch = pitches[pitches.length - 1]

  return lastPitch
}
