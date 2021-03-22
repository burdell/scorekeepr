import { getStore } from './store'
import { setGameInfo } from './store/gameInfo'
import { subHome, subVisiting, setLineups, LineupState } from './store/lineup'
import { handleGameEvent, setInningLength } from './store/gameplay'
import { calculateStats } from './stats'

import { Game, LineupEntry, InitialGame, GameEventHandler } from '../types'

export class Scorekeeper {
  _store: ReturnType<typeof getStore>

  constructor(game: Partial<InitialGame> = {}) {
    const {
      homeLineup = [],
      visitingLineup = [],
      initialInningCount,
      ...gameInfo
    } = game
    this._store = getStore()
    this.updateGameInfo(gameInfo)
    this.setLineups({
      homePitchers: [],
      visitingPitchers: [],
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

    if (initialInningCount) {
      this._store.dispatch(setInningLength(initialInningCount))
    }
  }

  get gameInfo() {
    return this._store.getState().gameInfo.currentGame
  }

  get lineups() {
    return this._store.getState().lineup
  }

  get gameplay() {
    return this._store.getState().gameplay
  }

  get stats() {
    return calculateStats(this.gameplay, this.lineups)
  }

  setLineups = (lineups: LineupState) => {
    this._store.dispatch(setLineups(lineups))
  }

  substituteHomePlayer = (lineupSpot: number, lineupEntry: LineupEntry) => {
    this._store.dispatch(subHome({ lineupSpot, lineupEntry }))
  }

  substituteVisitingPlayer = (lineupSpot: number, lineupEntry: LineupEntry) => {
    this._store.dispatch(subVisiting({ lineupSpot, lineupEntry }))
  }

  updateGameInfo = (gameInfo: Partial<Game>) => {
    this._store.dispatch(setGameInfo(gameInfo))
  }

  handleGameEvent({ event, inning, lineupSpot, team }: GameEventHandler) {
    this._store.dispatch(
      handleGameEvent({
        event,
        inning,
        lineupSpot,
        team
      })
    )
  }
}
