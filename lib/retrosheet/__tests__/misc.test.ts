import { getGameEventWithDefaults } from '../../Scorekeepr/__tests__/utils'
import { handleGameplayEvent } from '../gameplayEvents'

describe('Retrosheet - miscellaneous things', () => {
  it('handles comments', () => {
    const result = handleGameplayEvent({
      type: 'comment',
      text: 'What a cool comment about this game'
    })

    expect(result).toEqual(undefined)
  })

  it('handles non-plays', () => {
    const result = handleGameplayEvent({
      type: 'at-bat',
      result: 'NP',
      pitchSequence: '',
      playerId: 'acun11',
      count: ''
    })

    expect(result).toEqual(undefined)
  })

  it('handles unknown actions', () => {
    const result = handleGameplayEvent(
      {
        type: 'at-bat',
        result: 'this is definitely not something that would happen',
        pitchSequence: '',
        playerId: 'acun11',
        count: ''
      },
      { log: () => null }
    )

    expect(result).toEqual(undefined)
  })

  it('handles unknown plays', () => {
    const result = handleGameplayEvent({
      type: 'at-bat',
      result: '99',
      pitchSequence: '',
      playerId: 'acun11',
      count: ''
    })

    expect(result).toEqual(getGameEventWithDefaults({}))
  })
})
