import { handlePitchSequence } from '../lib/retrosheet/pitches'
import { handleAtABat } from '../lib/retrosheet/atBats'
import { Scorekeeper } from '../lib/Scorekeeper'

function reset(mocks: { [m: string]: jest.Mock }) {
  Object.keys(mocks).forEach((mock) => mocks[mock].mockClear())
}

describe('Retrosheet gameplay', () => {
  it('records pitches correctly', async () => {
    const strike = jest.fn()
    const ball = jest.fn()
    const foul = jest.fn()

    const game = { strike, ball, foul }

    handlePitchSequence('CKLOQSTMBIVFRX', game)

    expect(strike).toHaveBeenCalledTimes(8)
    expect(ball).toHaveBeenCalledTimes(3)
    expect(foul).toHaveBeenCalledTimes(2)

    reset(game)
    handlePitchSequence('M+3', game)

    expect(strike).toHaveBeenCalledTimes(1)
    expect(ball).toHaveBeenCalledTimes(0)
    expect(foul).toHaveBeenCalledTimes(0)

    reset(game)
    handlePitchSequence('.B*B*BCFX', game)

    expect(strike).toHaveBeenCalledTimes(1)
    expect(ball).toHaveBeenCalledTimes(3)
    expect(foul).toHaveBeenCalledTimes(1)

    reset(game)
    handlePitchSequence('', game)

    expect(strike).toHaveBeenCalledTimes(0)
    expect(ball).toHaveBeenCalledTimes(0)
    expect(foul).toHaveBeenCalledTimes(0)
  })

  it('records at bat events correctly', () => {
    const hit = jest.fn()
    const putout = jest.fn()
    const flyout = jest.fn()
    const lineout = jest.fn()

    const game = { hit, putout, flyout, lineout } as any

    handleAtABat('HR/78/F', game)

    expect(hit).toHaveBeenCalledWith(4)

    reset(game)
    handleAtABat('7/F', game)

    expect(flyout).toHaveBeenCalledWith(7)

    reset(game)
    handleAtABat('4/P', game)

    expect(flyout).toHaveBeenCalledWith(4)

    reset(game)
    handleAtABat('13/G-', game)

    expect(putout).toHaveBeenCalledWith([1, 3])

    reset(game)
    handleAtABat('5/L', game)

    expect(lineout).toHaveBeenCalledWith(5)
  })
})
