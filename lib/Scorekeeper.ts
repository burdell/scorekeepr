import { getStore } from './store'
import { setGameInfo } from './store/gameInfo'
import { subHome, subVisiting, setLineups, LineupState } from './store/lineup'
import {
  ball,
  strike,
  startGame,
  foulTip,
  setCurrentAtBat,
  hit,
  flyOut,
  defensiveError,
  putOut,
  fieldersChoice,
  advanceRunner,
  recordBasepathOut
} from './store/gameplay'
import * as generators from './resultGenerators'

import {
  Game,
  LineupEntry,
  InitialGame,
  CurrentAtBat,
  Base,
  AdvanceBaseResult,
  OutBaseResult
} from './types'

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
          inning: 1
        }
      ]),
      visiting: visitingLineup.map((l) => [
        {
          ...l,
          inning: 1
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

  setLineups(lineups: LineupState) {
    this.store.dispatch(setLineups(lineups))
  }

  substituteHomePlayer(lineupSpot: number, lineupEntry: LineupEntry) {
    this.store.dispatch(subHome({ lineupSpot, lineupEntry }))
  }

  substituteVisitingPlayer(lineupSpot: number, lineupEntry: LineupEntry) {
    this.store.dispatch(subVisiting({ lineupSpot, lineupEntry }))
  }

  updateGameInfo(gameInfo: Partial<Game>) {
    this.store.dispatch(setGameInfo(gameInfo))
  }

  startGame() {
    this.store.dispatch(startGame())
  }

  setCurrentAtBat(options: Partial<CurrentAtBat>) {
    this.store.dispatch(setCurrentAtBat(options))
  }

  strike() {
    this.store.dispatch(strike())
  }

  ball() {
    this.store.dispatch(ball())
  }

  foulTip() {
    this.store.dispatch(foulTip())
  }

  hit(base: Base) {
    this.store.dispatch(hit(base))
  }

  flyout(position: number) {
    this.store.dispatch(flyOut(position))
  }

  putout(positions: number[]) {
    this.store.dispatch(putOut(positions))
  }

  defensiveError(options: { defensivePlayer: number; baseAdvancedTo: Base }) {
    this.store.dispatch(defensiveError(options))
  }

  fieldersChoice(putoutPositions: number[], baseAdvancedTo: Base = 1) {
    this.store.dispatch(fieldersChoice({ putoutPositions, baseAdvancedTo }))
  }

  advanceRunner(base: Base, result?: AdvanceBaseResult) {
    this.store.dispatch(advanceRunner({ base, result }))
  }

  basepathOut(baseAttempted: Base, result: OutBaseResult) {
    this.store.dispatch(recordBasepathOut({ baseAttempted, result }))
  }
}
