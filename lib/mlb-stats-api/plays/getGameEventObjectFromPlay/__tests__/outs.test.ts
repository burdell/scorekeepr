import { getGameEventWithDefaults } from '../../../../Scorekeepr/__tests__/utils'
import { getGameEventObjectFromPlay } from '..'
import { swingingStrikeout, lookingStrikeout, flyOut } from './data/plays/outs'
import * as gameEventResults from '../../../../generators/gameEventResults'

describe('MLB Stats API - handle outs', () => {
  it('handles a swinging strikeout', () => {
    expect(getGameEventObjectFromPlay({ play: swingingStrikeout })).toEqual(
      expect.objectContaining({
        event: getGameEventWithDefaults({
          isOut: true,
          pitches: {
            balls: swingingStrikeout.count.balls,
            pitchCount: swingingStrikeout.pitchIndex.length,
            strikes: swingingStrikeout.count.strikes
          },
          result: gameEventResults.pitcherResult('K')
        })
      })
    )
  })

  it('handles a looking strikeout', () => {
    expect(getGameEventObjectFromPlay({ play: lookingStrikeout })).toEqual(
      expect.objectContaining({
        event: getGameEventWithDefaults({
          isOut: true,
          pitches: {
            balls: lookingStrikeout.count.balls,
            pitchCount: lookingStrikeout.pitchIndex.length,
            strikes: lookingStrikeout.count.strikes
          },
          result: gameEventResults.pitcherResult('K-looking')
        })
      })
    )
  })

  it('handles a fly-out', () => {
    const play = flyOut
    expect(getGameEventObjectFromPlay({ play })).toEqual(
      expect.objectContaining({
        event: getGameEventWithDefaults({
          isOut: true,
          pitches: {
            balls: play.count.balls,
            pitchCount: play.pitchIndex.length,
            strikes: play.count.strikes
          },
          result: gameEventResults.flyOut(8)
        })
      })
    )
  })
})
