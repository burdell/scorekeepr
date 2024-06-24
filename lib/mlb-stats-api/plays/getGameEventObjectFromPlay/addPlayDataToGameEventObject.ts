import { GameEvent, GameEventObject } from '../../../Scorekeepr'
import { getGameEvent } from '../../../generators/utils'
import { Play } from '../../types'

function addPitchDataToGameEvent(
  gameEvent: Partial<GameEvent>,
  { count, pitchIndex }: Play
) {
  return getGameEvent({
    ...gameEvent,
    pitches: {
      balls: count.balls,
      pitchCount: pitchIndex.length,
      strikes: count.strikes
    }
  })
}

export function addPlayDataToGameEventObject({
  gameEvent,
  play
}: {
  gameEvent: Partial<GameEvent>
  play: Play
}): GameEventObject {
  const { about } = play
  return {
    event: addPitchDataToGameEvent(gameEvent, play),
    inning: about.inning - 1,
    lineupSpot: about.atBatIndex,
    team: about.isTopInning ? 'visiting' : 'home'
  }
}
