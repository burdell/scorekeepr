import * as guards from '../../lib/retrosheet/guards'

describe('Type Guard getters tests', () => {
  it('throws an error for invalid hit types', () => {
    try {
      guards.getHitType('8')
      fail()
    } catch (e) {
      expect(e.message).toEqual('Attempted to record an invalid hit')
    }
  })

  it('handles invalid walks, balks, and passed balls', () => {
    const result = guards.getAllBaserunnerAction('LOL')
    expect(result).toEqual(undefined)
  })
})
