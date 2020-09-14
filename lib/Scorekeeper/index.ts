import { getStore } from './store'
import { setGameInfo } from './store/gameInfo'
import { subHome, subVisiting, setLineups, LineupState } from './store/lineup'
import { handleGameEvent } from './store/gameplay'
import { calculateStats } from './stats'

import {
  Game,
  LineupEntry,
  InitialGame,
  GameEvent,
  GameEventHandler
} from '../types'

export class Scorekeeper {
  private store: ReturnType<typeof getStore>

  constructor(game: Partial<InitialGame> = {}) {
    const { homeLineup = [], visitingLineup = [], ...gameInfo } = game
    this.store = getStore()
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

  get stats() {
    return calculateStats(this.gameplay, this.lineups)
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

  handleGameEvent({ event, inning, lineupSpot, team }: GameEventHandler) {
    this.store.dispatch(
      handleGameEvent({
        event,
        inning,
        lineupSpot,
        team
      })
    )
  }
}
