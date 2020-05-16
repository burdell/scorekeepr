import { handlePitchSequence } from '../lib/retrosheet/pitches'
import { handleAtABat } from '../lib/retrosheet/atBats'

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

  it('records put outs correctly', () => {
    const putout = jest.fn()
    const sacrificeBunt = jest.fn()

    const game = { putout, sacrificeBunt } as any

    reset(game)
    handleAtABat('13/G-', game)

    expect(putout).toHaveBeenCalledWith([1, 3])

    reset(game)
    handleAtABat('63/G6M', game)

    expect(putout).toHaveBeenCalledWith([6, 3])

    reset(game)
    handleAtABat('143/G1', game)

    expect(putout).toHaveBeenCalledWith([1, 4, 3])

    reset(game)
    handleAtABat('54(B)/BG25/SH.1-2', game)

    expect(sacrificeBunt).toHaveBeenCalledWith([5, 4])
  })

  it('records flyouts and lineouts correclty', () => {
    const flyout = jest.fn()
    const lineout = jest.fn()
    const sacrificeFly = jest.fn()

    const game = { flyout, lineout, sacrificeFly } as any

    reset(game)
    handleAtABat('7/F', game)

    expect(flyout).toHaveBeenCalledWith(7)

    reset(game)
    handleAtABat('4/P', game)

    expect(flyout).toHaveBeenCalledWith(4)

    reset(game)
    handleAtABat('5/L', game)

    expect(lineout).toHaveBeenCalledWith(5)

    reset(game)
    handleAtABat('9/SF.3-H', game)

    expect(sacrificeFly).toHaveBeenCalledWith(9)
  })

  it('records hits correctly', () => {
    const hit = jest.fn()

    const game = { hit } as any

    handleAtABat('HR/78/F', game)

    expect(hit).toHaveBeenCalledWith(4)
  })
})
