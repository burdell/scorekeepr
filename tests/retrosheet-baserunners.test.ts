import {
  handleBaserunnerMovement,
  getBaserunnerAction,
  BaserunnerAction,
  handleBaserunnerAction
} from '../lib/retrosheet/gameplay/baserunners'
import * as resultGenerators from '../lib/resultGenerators'

function reset(mocks: { [m: string]: jest.Mock }) {
  Object.keys(mocks).forEach((mock) => mocks[mock].mockClear())
}

describe('Retrosheet bsaerunners', () => {
  it('records balks', () => {
    const balk = jest.fn()
    const game = { balk } as any

    const action = getBaserunnerAction('BK.3-H;1-2') as BaserunnerAction
    handleBaserunnerAction(action, game)

    expect(balk).toHaveBeenCalled()
  })

  it('records runners caught stealing', () => {
    const caughtStealing = jest.fn()
    const game = { caughtStealing } as any

    handleBaserunnerAction(
      getBaserunnerAction('CSH(12)') as BaserunnerAction,
      game
    )

    expect(caughtStealing).toHaveBeenCalled()

    reset(game)
    handleBaserunnerAction(
      getBaserunnerAction('CS2(24).2-3') as BaserunnerAction,
      game
    )

    expect(caughtStealing).toHaveBeenCalled()

    reset(game)
    handleBaserunnerAction(
      getBaserunnerAction('CS2(2E4).1-3') as BaserunnerAction,
      game
    )

    expect(caughtStealing).toHaveBeenCalled()
  })

  it('records defensive indifference', () => {
    const defensiveIndifference = jest.fn()
    const game = { defensiveIndifference } as any

    handleBaserunnerAction(
      getBaserunnerAction('DI.1-2') as BaserunnerAction,
      game
    )

    expect(defensiveIndifference).toHaveBeenCalled()
  })

  it('records passed balls & wild pitches', () => {
    const wildPitch = jest.fn()
    const passedBall = jest.fn()
    const game = { wildPitch, passedBall } as any

    handleBaserunnerAction(
      getBaserunnerAction('WP.2-3;1-2') as BaserunnerAction,
      game
    )

    expect(wildPitch).toHaveBeenCalled()

    reset(game)
    handleBaserunnerAction(
      getBaserunnerAction('PB.2-3') as BaserunnerAction,
      game
    )

    expect(passedBall).toHaveBeenCalled()
  })

  it('records pickoffs', () => {
    const pickOff = jest.fn()
    const game = { pickOff } as any

    handleBaserunnerAction(
      getBaserunnerAction('PO2(14)') as BaserunnerAction,
      game
    )

    expect(pickOff).toHaveBeenCalled()

    reset(game)
    handleBaserunnerAction(
      getBaserunnerAction('PO1(E3).1-2') as BaserunnerAction,
      game
    )

    expect(pickOff).toHaveBeenCalled()
  })

  it('records pick offs off base', () => {
    const pickOffOffBase = jest.fn()
    const game = { pickOffOffBase } as any

    handleBaserunnerAction(
      getBaserunnerAction('POCS2(1361)') as BaserunnerAction,
      game
    )

    expect(pickOffOffBase).toHaveBeenCalled()
  })

  it('records stolen bases', () => {
    const stolenBase = jest.fn()
    const game = { stolenBase } as any

    handleBaserunnerAction(getBaserunnerAction('SB2') as BaserunnerAction, game)

    expect(stolenBase).toHaveBeenCalled()

    reset(game)
    handleBaserunnerAction(
      getBaserunnerAction('SB3;SB2') as BaserunnerAction,
      game
    )

    expect(stolenBase).toHaveBeenCalled()

    reset(game)
    handleBaserunnerAction(
      getBaserunnerAction('SBH;SB2') as BaserunnerAction,
      game
    )

    expect(stolenBase).toHaveBeenCalled()
  })

  it('records runner advancement', async () => {
    const advanceRunners = jest.fn()

    const game = { advanceRunners } as any

    handleBaserunnerMovement('W.2-3;1-2', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      { startBase: 2, endBase: 3, result: undefined },
      { startBase: 1, endBase: 2, result: undefined }
    ])

    reset(game)
    handleBaserunnerMovement('S7/F7S.2-H;B-2', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      { startBase: 2, endBase: 4, result: undefined },
      { startBase: 'B', endBase: 2, result: undefined }
    ])

    reset(game)
    handleBaserunnerMovement('E6/G6.3-H(RBI);2-3;B-1', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      { startBase: 3, endBase: 4, result: undefined },
      { startBase: 2, endBase: 3, result: undefined },
      { startBase: 'B', endBase: 1, result: undefined }
    ])

    reset(game)
    handleBaserunnerMovement('S5/G5.1-3(E5/TH)', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      { startBase: 1, endBase: 3, result: resultGenerators.error(5) }
    ])

    reset(game)
    handleBaserunnerMovement('W+PB.3-H(NR);1-3', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      { startBase: 3, endBase: 4, result: undefined },
      { startBase: 1, endBase: 3, result: undefined }
    ])
  })

  it('records runner outs', () => {
    const advanceRunners = jest.fn()

    const game = { advanceRunners } as any

    handleBaserunnerMovement('K/DP.1X2(26)', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      {
        startBase: 1,
        endBase: 2,
        result: resultGenerators.putout([2, 6]),
        isOut: true
      }
    ])

    reset(game)
    handleBaserunnerMovement('9/F9LS/FDP.3XH(92)', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      {
        startBase: 3,
        endBase: 4,
        result: resultGenerators.putout([9, 2]),
        isOut: true
      }
    ])

    reset(game)
    handleBaserunnerMovement('S8/L78.BX2(8434)', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      {
        startBase: 'B',
        endBase: 2,
        result: resultGenerators.putout([8, 4, 3, 4]),
        isOut: true
      }
    ])

    reset(game)
    handleBaserunnerMovement('S7/L7LD.3-H;2-H;BX2(7E4)', game)

    expect(advanceRunners).toHaveBeenCalledWith([
      {
        startBase: 3,
        endBase: 4,
        result: undefined
      },
      {
        startBase: 2,
        endBase: 4,
        result: undefined
      },
      {
        startBase: 'B',
        endBase: 2,
        result: resultGenerators.error(4)
      }
    ])
  })
})
