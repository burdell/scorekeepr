import { PitchData } from '../Scorekeepr/types'

const strikes = ['C', 'K', 'L', 'O', 'Q', 'S', 'T', 'M']
const balls = ['B', 'I', 'V', 'P']
const fouls = ['F', 'R']
const ballInPlay = ['X', 'Y']

export function countPitches(pitch: string) {
  let pitchCount = 0
  pitch.split('').forEach((pitch) => {
    if (
      strikes.includes(pitch) ||
      balls.includes(pitch) ||
      fouls.includes(pitch) ||
      ballInPlay.includes(pitch)
    ) {
      pitchCount += 1
    }
  })

  return pitchCount
}

export function getPitchData({
  count,
  pitchSequence
}: {
  count: string
  pitchSequence: string
}): PitchData {
  const match = count.match(/(\d)(\d)/)

  let balls = match ? Number(match[1]) : 0
  const strikes = match ? Number(match[2]) : 0

  return {
    balls,
    strikes,
    pitchCount: countPitches(pitchSequence)
  }
}
