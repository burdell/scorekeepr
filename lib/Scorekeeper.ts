import { getStore } from './store'
import { setGameInfo } from './store/gameInfo'
import { subHome, subVisiting, setLineups, LineupState } from './store/lineup'
import { startGame, setCurrentAtBat } from './store/gameplay'
import * as generators from './resultGenerators'
import { ball, strike, foul } from './store/gameplay/pitches'
import {
  hit,
  flyOut,
  defensiveError,
  putOut,
  fieldersChoice,
  lineout,
  sacrificeBunt,
  sacrificeFly,
  intentionalWalk,
  hitBatter
} from './store/gameplay/at-bats'
import {
  advanceCurrentRunner,
  recordBasepathOut,
  advanceRunners,
  pickOff
} from './store/gameplay/baserunners'

import {
  Game,
  LineupEntry,
  InitialGame,
  CurrentAtBat,
  Base,
  AdvanceBaseResult,
  OutBaseResult,
  GameOutput,
  RunnerMovement,
  AdvanceableBase
} from './types'
import * as resultGenerators from './resultGenerators'

export class Scorekeeper {
  private store: ReturnType<typeof getStore>

  constructor(game: Partial<InitialGame> = {}) {
    const { homeLineup = [], visitingLineup = [], ...gameInfo } = game
    this.store = getStore()
    this.updateGameInfo(gameInfo)
    this.setLineups({
      home: homeLineup.map((l) => [
        {
          ...l,
          inning: 0
        }
      ]),
      visiting: visitingLineup.map((l) => [
        {
          ...l,
          inning: 0
        }
      ])
    })
  }

  get gameInfo() {
    return this.store.getState().gameInfo.currentGame
  }

  get lineups() {
    return this.store.getState().lineup
  }

  get gameplay() {
    return this.store.getState().gameplay
  }

  get resultGenerators() {
    return generators
  }

  setLineups = (lineups: LineupState) => {
    this.store.dispatch(setLineups(lineups))
  }

  substituteHomePlayer = (lineupSpot: number, lineupEntry: LineupEntry) => {
    this.store.dispatch(subHome({ lineupSpot, lineupEntry }))
  }

  substituteVisitingPlayer = (lineupSpot: number, lineupEntry: LineupEntry) => {
    this.store.dispatch(subVisiting({ lineupSpot, lineupEntry }))
  }

  updateGameInfo = (gameInfo: Partial<Game>) => {
    this.store.dispatch(setGameInfo(gameInfo))
  }

  startGame = () => {
    this.store.dispatch(startGame())
  }

  setCurrentAtBat = (options: Partial<CurrentAtBat>) => {
    this.store.dispatch(setCurrentAtBat(options))
  }

  nextInning = () => {
    const { gameplay } = this.store.getState()
    const currentAtBat = gameplay.currentAtBat
    this.setCurrentAtBat({ inning: currentAtBat ? currentAtBat.inning + 1 : 0 })
  }

  nextLineupSpot = () => {
    const { gameplay } = this.store.getState()
    const currentAtBat = gameplay.currentAtBat
    const nextLineupSpot = currentAtBat ? (currentAtBat.lineupSpot + 1) % 9 : 0

    this.setCurrentAtBat({ lineupSpot: nextLineupSpot })
  }

  strike = () => {
    this.store.dispatch(strike())
  }

  ball = () => {
    this.store.dispatch(ball())
  }

  foul = () => {
    this.store.dispatch(foul())
  }

  hit = (base: Base, baseAdvancedTo?: Base) => {
    this.store.dispatch(hit({ base, baseAdvancedTo }))
  }

  hitBatter = () => {
    this.store.dispatch(hitBatter())
  }

  intentionalWalk = () => {
    this.store.dispatch(intentionalWalk())
  }

  flyout = (position: number) => {
    this.store.dispatch(flyOut(position))
  }

  sacrificeFly = (position: number) => {
    this.store.dispatch(sacrificeFly(position))
  }

  sacrificeBunt = (defensivePositions: number[]) => {
    this.store.dispatch(sacrificeBunt(defensivePositions))
  }

  putout = (positions: number[]) => {
    this.store.dispatch(putOut(positions))
  }

  lineout = (position: number) => {
    this.store.dispatch(lineout(position))
  }

  defensiveError = (options: {
    defensivePlayer: number
    baseAdvancedTo: Base
  }) => {
    this.store.dispatch(defensiveError(options))
  }

  fieldersChoice = (baseAdvancedTo: Base = 1) => {
    this.store.dispatch(fieldersChoice({ baseAdvancedTo }))
  }

  advanceCurrentRunner = (base: Base, result?: AdvanceBaseResult) => {
    this.store.dispatch(advanceCurrentRunner({ base, result }))
  }

  currentFrameBasepathOut = (baseAttempted: Base, result: OutBaseResult) => {
    this.store.dispatch(recordBasepathOut({ baseAttempted, result }))
  }

  advanceRunners = (runnerAdvancements: RunnerMovement[]) => {
    this.store.dispatch(advanceRunners(runnerAdvancements))
  }

  advanceCurrentAtBat = (endBase: Base, result?: AdvanceBaseResult) => {
    this.advanceRunners([{ startBase: 'B', endBase, result }])
  }

  balk = () => {
    this.advanceRunners([
      { startBase: 1, endBase: 2, result: this.resultGenerators.balk() },
      { startBase: 2, endBase: 3, result: this.resultGenerators.balk() },
      { startBase: 3, endBase: 4, result: this.resultGenerators.balk() }
    ])
  }

  caughtStealing = (attemptedBase: AdvanceableBase, putOut: number[]) => {
    const startBase = attemptedBase - 1
    this.advanceRunners([
      {
        startBase: startBase as Base,
        endBase: attemptedBase,
        isOut: true,
        result: resultGenerators.caughtStealing(putOut)
      }
    ])
  }

  stolenBase = (attemptedBases: AdvanceableBase[]) => {
    this.advanceRunners(
      attemptedBases.map((attemptedBase) => ({
        startBase: (attemptedBase - 1) as Base,
        endBase: attemptedBase,
        result: resultGenerators.stolenBase(attemptedBase)
      }))
    )
  }

  defensiveIndifference = (base: AdvanceableBase) => {
    this.advanceRunners([
      {
        startBase: (base - 1) as Base,
        endBase: base,
        result: resultGenerators.defensiveIndifference(base)
      }
    ])
  }

  passedBall = (attemptedBases: Base[]) => {
    this.advanceRunners(
      attemptedBases.map((attemptedBase) => ({
        startBase: (attemptedBase - 1) as Base,
        endBase: attemptedBase,
        result: resultGenerators.passedBall(attemptedBase)
      }))
    )
  }

  wildPitch = (attemptedBases: Base[]) => {
    this.advanceRunners(
      attemptedBases.map((attemptedBase) => ({
        startBase: (attemptedBase - 1) as Base,
        endBase: attemptedBase,
        result: resultGenerators.wildPitch(attemptedBase)
      }))
    )
  }

  pickOff = (base: Base, putout: number[]) => {
    this.store.dispatch(pickOff({ base, putout }))
  }

  getOutput = (): GameOutput => {
    return {
      id: this.gameInfo.id,
      lineups: this.lineups,
      gameInfo: this.gameInfo,
      gameplay: this.gameplay
    }
  }
}
