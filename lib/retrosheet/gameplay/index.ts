import { GameplayEvent } from 'retrosheet-parse'

import { Scorekeeper } from '../../Scorekeeper'

import {
  getBaserunnerAction,
  handleBaserunnerAction,
  handleBaserunnerMovement
} from './baserunners'
import { handlePitchSequence } from './pitches'
import { handleAtABat } from './atBats'

export function handleGameplay(
  gameplayEvents: GameplayEvent[],
  game: Scorekeeper
) {
  gameplayEvents.forEach((gameplayEvent) => {
    if (gameplayEvent.type === 'comment' || gameplayEvent.result === 'NP') {
      return
    }

    const baserunnerAction = getBaserunnerAction(gameplayEvent.result)
    if (baserunnerAction) {
      handleBaserunnerAction(baserunnerAction, game)
    } else {
      handleBaserunnerMovement(gameplayEvent.result, game)
      handlePitchSequence(gameplayEvent.pitchSequence, game)
      handleAtABat(gameplayEvent.result, game)
      game.nextLineupSpot()
    }
  })
}
