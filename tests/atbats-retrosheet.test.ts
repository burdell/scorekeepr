import { handlePitchSequence } from '../lib/retrosheet/gameplay/pitches'
import { handleAtABat } from '../lib/retrosheet/gameplay/atBats'

function reset(mocks: { [m: string]: jest.Mock }) {
  Object.keys(mocks).forEach((mock) => mocks[mock].mockClear())
}

describe('Retrosheet at-bats', () => {
  it('records pitches', async () => {
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

  it('records putouts', () => {
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

    reset(game)
    handleAtABat('64(1)3/GDP/G6', game)

    expect(putout).toHaveBeenCalledWith([6, 4, 3])

    reset(game)
    handleAtABat('4(1)3/G4/GDP', game)

    expect(putout).toHaveBeenCalledWith([4, 3])
  })

  it('records flyouts and lineouts', () => {
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

    reset(game)
    handleAtABat('8(B)84(2)/LDP/L8', game)

    expect(lineout).toHaveBeenCalledWith(8)

    reset(game)
    handleAtABat('3(B)3(1)/LDP', game)

    expect(lineout).toHaveBeenCalledWith(3)

    reset(game)
    handleAtABat('1(B)16(2)63(1)/LTP/L1', game)

    expect(lineout).toHaveBeenCalledWith(1)
  })

  it('records hits / fielders choices', () => {
    const hit = jest.fn()
    const fieldersChoice = jest.fn()

    const game = { hit, fieldersChoice } as any

    handleAtABat('HR/78/F', game)

    expect(hit).toHaveBeenCalledWith(4)

    reset(game)
    handleAtABat('H/L7D', game)

    expect(hit).toHaveBeenCalledWith(4)

    reset(game)
    handleAtABat('HR9/F9LS.3-H;1-H', game)

    expect(hit).toHaveBeenCalledWith(4)

    reset(game)
    handleAtABat('54(1)/FO/G5.3-H;B-1', game)

    expect(fieldersChoice).toHaveBeenCalled()

    reset(game)
    handleAtABat('FC5/G5.3XH(52)', game)

    expect(fieldersChoice).toHaveBeenCalled()

    reset(game)
    handleAtABat('S7', game)

    expect(hit).toHaveBeenCalledWith(1)

    reset(game)
    handleAtABat('D7/G5.3-H;2-H;1-H', game)

    expect(hit).toHaveBeenCalledWith(2)

    reset(game)
    handleAtABat('T9/F9LD.2-H', game)

    expect(hit).toHaveBeenCalledWith(3)

    reset(game)
    handleAtABat('DGR/L9LS.2-H', game)

    expect(hit).toHaveBeenCalledWith(2)
  })

  it('records errors', () => {
    const defensiveError = jest.fn()

    const game = { defensiveError } as any

    handleAtABat('C/E2.1-2', game)

    expect(defensiveError).toHaveBeenCalledWith({
      defensivePlayer: 2,
      baseAdvancedTo: 1
    })

    reset(game)
    handleAtABat('C/E1.1-2', game)

    expect(defensiveError).toHaveBeenCalledWith({
      defensivePlayer: 1,
      baseAdvancedTo: 1
    })

    reset(game)
    handleAtABat('E3.1-2;B-1', game)

    expect(defensiveError).toHaveBeenCalledWith({
      defensivePlayer: 3,
      baseAdvancedTo: 1
    })

    reset(game)
    handleAtABat('E1/TH/BG15.1-3', game)

    expect(defensiveError).toHaveBeenCalledWith({
      defensivePlayer: 1,
      baseAdvancedTo: 1
    })

    reset(game)
    handleAtABat('PO1(E1).1-2', game)

    expect(defensiveError).not.toHaveBeenCalled()
  })

  it('records other random things', () => {
    const hitBatter = jest.fn()
    const intentionalWalk = jest.fn()
    const game = { hitBatter, intentionalWalk } as any

    handleAtABat('HP.1-2', game)

    expect(hitBatter).toHaveBeenCalled()

    reset(game)
    handleAtABat('IW', game)

    expect(intentionalWalk).toHaveBeenCalled()
  })
})
