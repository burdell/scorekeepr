import { parseAction } from '../../lib/retrosheet'
import { getEventWithDefaults } from './utils'

describe('Retrosheet - miscellaneous things', () => {
  it('handles comments', () => {
    const result = parseAction({
      type: 'comment',
      text: 'What a cool comment about this game'
    })

    expect(result).toEqual(undefined)
  })

  it('handles non-plays', () => {
    const result = parseAction({
      type: 'at-bat',
      result: 'NP',
      pitchSequence: '',
      playerId: 'acun11',
      count: ''
    })

    expect(result).toEqual(undefined)
  })

  it('handles unknown actions', () => {
    const result = parseAction({
      type: 'at-bat',
      result: 'this is definitely not something that would happen',
      pitchSequence: '',
      playerId: 'acun11',
      count: ''
    })

    expect(result).toEqual(undefined)
  })

  it('handles unknown plays', () => {
    const result = parseAction({
      type: 'at-bat',
      result: '99',
      pitchSequence: '',
      playerId: 'acun11',
      count: ''
    })

    expect(result).toEqual(getEventWithDefaults({}))
  })
})
