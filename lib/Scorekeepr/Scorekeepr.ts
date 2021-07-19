import { getStore } from './store'
import { setGameInfo } from './store/gameInfo'
import { subHome, subVisiting, setPlayers } from './store/players'
import { handleGameEvent, setInningLength } from './store/gameplay'
import { calculateStats } from './stats'

import type {
  GameInfo,
  LineupEntry,
  GameEventHandler,
  InitialGame,
  Players
} from './types'

/**
 * Code blocks are great for examples
 *
 * ```typescript
 * // run typedoc --help for a list of supported languages
 * const instance = new MyClass();
 * ```
 */
export class Scorekeepr {
  private _store: ReturnType<typeof getStore>

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
      home: {
        pitchers: [],
        batters: homeLineup.map((l) => [
          {
            ...l,
            inning: 0
          }
        ])
      },
      visiting: {
        pitchers: [],
        batters: visitingLineup.map((l) => [
          {
            ...l,
            inning: 0
          }
        ])
      }
    })

    if (initialInningCount) {
      this._store.dispatch(setInningLength(initialInningCount))
    }
  }

  get gameInfo() {
    return this._store.getState().gameInfo.currentGame
  }

  get lineups() {
    const players = this._store.getState().players
    return {
      home: players.home.batters,
      visiting: players.visiting.batters
    }
  }

  get pitchers() {
    const players = this._store.getState().players
    return {
      home: players.home.pitchers,
      visiting: players.visiting.pitchers
    }
  }

  get gameplay() {
    return this._store.getState().gameplay
  }

  get stats() {
    const players = this._store.getState().players
    return calculateStats(this.gameplay, players)
  }

  setLineups = (lineups: Players) => {
    this._store.dispatch(setPlayers(lineups))
  }

  substituteHomePlayer = (lineupSpot: number, lineupEntry: LineupEntry) => {
    this._store.dispatch(subHome({ lineupSpot, lineupEntry }))
  }

  substituteVisitingPlayer = (lineupSpot: number, lineupEntry: LineupEntry) => {
    this._store.dispatch(subVisiting({ lineupSpot, lineupEntry }))
  }

  updateGameInfo = (gameInfo: Partial<GameInfo>) => {
    this._store.dispatch(setGameInfo({ gameInfo }))
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
