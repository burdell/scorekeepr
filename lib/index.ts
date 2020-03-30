import { getStore } from './store'
import { setGameInfo } from './store/game'
import { subHome, subVisiting } from './store/lineup'

import { Game, LineupEntry } from './types'

export class Scorekeeper {
  private store: ReturnType<typeof getStore>

  constructor(game: Partial<Game> = {}) {
    this.store = getStore()
    this.updateGameInfo(game)
  }

  getCurrentGameInfo() {
    return this.store.getState().game.currentGame
  }

  getCurrentLineups() {
    return this.store.getState().lineup
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
}
