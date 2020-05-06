import { handlePitchSequence } from '../lib/retrosheet/pitches'

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
})
