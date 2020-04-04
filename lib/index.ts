import { getStore } from './store'
import { setGameInfo } from './store/game'
import { subHome, subVisiting, setLineups } from './store/lineup'

import { Game, LineupEntry, InitialGame } from './types'

export class Scorekeeper {
  private store: ReturnType<typeof getStore>

  constructor(game: Partial<InitialGame> = {}) {
    const { homeLineup = [], visitingLineup = [], ...gameInfo } = game
    this.store = getStore()
    this.updateGameInfo(gameInfo)
    this.store.dispatch(
      setLineups({
        home: homeLineup.map(l => [
          {
            ...l,
            inning: 1
          }
        ]),
        visiting: visitingLineup.map(l => [
          {
            ...l,
            inning: 1
          }
        ])
      })
    )
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
