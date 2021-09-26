import { getStore } from './store'
import { setGameInfo } from './store/gameInfo'
import { subHome, subVisiting, setPlayers, subPitcher } from './store/players'
import { handleGameEvent, setInningLength } from './store/gameplay'
import { calculateStats } from './stats'

import type {
  GameInfo,
  BatterEntry,
  GameEventHandler,
  InitialGame,
  Players,
  InitialPitcherEntry
} from './types'

/**
 * Base class for scoring a game
 */
export class Scorekeepr {
  private _store: ReturnType<typeof getStore>

  /**
   * @param game - the initial data for a game. Everything here is optional and you can add update most of the data passed here through `setLineups` and `updateGameInfo` methods
   */
  constructor(game: Partial<InitialGame> = {}) {
    const {
      homeLineup = { batters: [], pitchers: [] },
      visitingLineup = { batters: [], pitchers: [] },
      initialInningCount,
      ...gameInfo
    } = game
    this._store = getStore()
    this.updateGameInfo(gameInfo)
    this.setPlayers({
      home: {
        pitchers: homeLineup.pitchers.map((l) => ({
          player: l.player,
          inning: 0,
          type: 'starter',
          stats: { er: 0 }
        })),
        batters: homeLineup.batters.map((l) => [
          {
            ...l,
            inning: 0
          }
        ])
      },
      visiting: {
        pitchers: visitingLineup.pitchers.map((l) => ({
          player: l.player,
          inning: 0,
          stats: { er: 0 },
          type: 'starter'
        })),
        batters: visitingLineup.batters.map((l) => [
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

  get batters() {
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

  setPlayers = (lineups: Players) => {
    this._store.dispatch(setPlayers(lineups))
  }

  subPlayer({
    team,
    ...options
  }: {
    lineupSpot: number
    lineupEntry: BatterEntry
    team: 'visiting' | 'home'
  }) {
    if (team === 'home') {
      this._store.dispatch(subHome(options))
    } else if (team === 'visiting') {
      this._store.dispatch(subVisiting(options))
    } else {
      throw new Error('Invalid team')
    }
  }

  subPitcher = (options: {
    pitcher: InitialPitcherEntry
    inning: number
    team: 'home' | 'visiting'
  }) => {
    this._store.dispatch(subPitcher(options))
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
