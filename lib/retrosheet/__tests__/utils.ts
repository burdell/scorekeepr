import { AtBat, GameplayEvent } from 'retrosheet-parse'

import { handleGameplayEvent as realHandleEvent } from '../gameplayEvents'

export function getResult(result: string) {
  return handleEvent(getAtBat({ result }))
}

export function getAtBat(overrides: Partial<AtBat>): AtBat {
  return {
    type: 'at-bat',
    count: '',
    pitchSequence: '',
    result: '',
    playerId: '',
    ...overrides
  }
}

export function handleEvent(gameplayEvent: GameplayEvent) {
  return requireExistence(realHandleEvent(gameplayEvent, { log: () => null }))
}

function requireExistence<T>(thing: T) {
  if (!thing) throw new Error('The thing does not exist 🧐')

  return thing
}
