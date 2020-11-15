import * as guards from '../../lib/retrosheet/guards'

describe('Type Guard getters tests', () => {
  it('getHitType - throws an error for invalid hit types', () => {
    try {
      guards.getHitType('8')
      fail()
    } catch (e) {
      expect(e.message).toEqual('Attempted to record an invalid hit')
    }
  })

  it('getAllBaserunnerAction - handles invalid walks, balks, and passed balls', () => {
    const result = guards.getAllBaserunnerAction('LOL')
    expect(result).toEqual(undefined)
  })

  it('getBaseFromString - handles invalid base strings', () => {
    try {
      guards.getBaseFromString('NOTABASE')
      fail('Failed to throw for an invalid base')
    } catch (e) {
      expect(e.message).toEqual(
        'Attempted to parse an invalid base from NOTABASE'
      )
    }
  })

  it('getNextBase - prevents getting an invalid next base', () => {
    try {
      guards.getNextBase(4)
      fail('Failed to throw for an invalid base')
    } catch (e) {
      expect(e.message).toEqual('Attempted to get next base of invalid base 4')
    }
  })

  it('getPreviousBase - prevents getting an invalid previous base', () => {
    try {
      guards.getPreviousBase(1)
      fail('Failed to throw for an invalid base')
    } catch (e) {
      expect(e.message).toEqual(
        'Attempted to get previous base of invalid base 1'
      )
    }
  })

  it('getBase - prevents using an invalid base', () => {
    try {
      guards.getBase('NOTABASE')
      fail('Failed to throw for an invalid base')
    } catch (e) {
      expect(e.message).toEqual('Attempted to use an invalid base')
    }
  })

  it('getAdvanceableBase - prevents using an invalid advanceable base', () => {
    expect(guards.getAdvanceableBase(4)).toEqual(4)

    try {
      guards.getAdvanceableBase(1)
      fail('Failed to throw for an invalid base')
    } catch (e) {
      expect(e.message).toEqual('Attempted to use an invalid advanceable base')
    }
  })

  it('getStartableBase - prevents using an invalid start base', () => {
    try {
      guards.getStartableBase(4)
      fail('Failed to throw for an invalid base')
    } catch (e) {
      expect(e.message).toEqual('Attempted to use invalid start base 4')
    }
  })

  it('getOutType - it handles invalid out strings', () => {
    expect(guards.getOutType('not an out')).toBe(undefined)
  })

  it('getNonGroundout - handles invalid non-groundouts', () => {
    const result = guards.getNonGroundout(undefined, [6])
    expect(result).toEqual(undefined)
  })
})
