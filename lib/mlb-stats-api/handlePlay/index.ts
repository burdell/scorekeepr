import { GameEventHandler, Scorekeepr } from '../../Scorekeepr'
import { getBases, getGameEvent } from '../../generators/utils'
import { Play, PlayByPlay } from '../types'
import * as gameEventResults from '../../../lib/generators/gameEventResults'

export function handlePlay({ play }: { play: Play }): GameEventHandler {
  const { result, about, count, pitchIndex } = play

  switch (result.eventType) {
    case 'strikeout':
      return {
        event: getGameEvent({
          result: gameEventResults.pitcherResult('K'),
          isOut: true,
          bases: getBases({}),
          pitches: {
            balls: count.balls,
            pitchCount: pitchIndex.length,
            strikes: count.strikes
          }
        }),
        inning: about.inning,
        lineupSpot: about.atBatIndex,
        team: about.isTopInning ? 'visiting' : 'home'
      }

    default:
      throw new Error(`Unhandled play ${result.type}`)
  }
}
