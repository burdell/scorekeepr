import assert from 'node:assert'

import { AtBatResult, GameEvent, GameEventObject } from '../../../Scorekeepr'
import { getBases, getGameEvent } from '../../../generators/utils'
import { Play } from '../../types'
import * as gameEventResults from '../../../generators/gameEventResults'
import { getLastPitch } from '../getLastPitch'
import { addPlayDataToGameEventObject } from './addPlayDataToGameEventObject'

export function getGameEventObjectFromPlay({
  play
}: {
  play: Play
}): GameEventObject | null {
  const { result, about, count, pitchIndex } = play
  const lastPitch = getLastPitch(play)

  switch (result.eventType) {
    case 'strikeout':
      const isCalledStrikeout = lastPitch.details.code === 'C'

      return addPlayDataToGameEventObject({
        gameEvent: {
          result: gameEventResults.pitcherResult(
            isCalledStrikeout ? 'K-looking' : 'K'
          ),
          isOut: true,
          bases: getBases({})
        },
        play
      })

    case 'field_out':
      const hitData = lastPitch.hitData
      assert(hitData, 'Expected hit data for field_out')

      let atBatResult: AtBatResult | undefined
      switch (hitData.trajectory) {
        case 'fly_ball':
          atBatResult = gameEventResults.flyOut(Number(hitData.location))
          break

        default:
          break
      }

      if (!result) {
        console.error(
          `Unaable to determing field out result: ${JSON.stringify(hitData)}`
        )

        return null
      }

      return addPlayDataToGameEventObject({
        gameEvent: {
          result: atBatResult,
          isOut: true,
          bases: getBases({})
        },
        play
      })

    default:
      console.error(`Unhandled at-bat ${result.type}`)
      return null
  }
}
