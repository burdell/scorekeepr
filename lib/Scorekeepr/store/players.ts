import {
  Lineup,
  Players,
  LineupSubstition,
  PitcherEntry,
  BatterEntry,
  InitialPitcherEntry
} from '../types'
import { createAction, createReducer } from '@reduxjs/toolkit'

function sub(
  players: {
    batters: BatterEntry[][]
    pitchers: PitcherEntry[]
  },
  sub: LineupSubstition
) {
  const lineup = players.batters
  if (!lineup[sub.lineupSpot]) {
    lineup[sub.lineupSpot] = []
  }
  lineup[sub.lineupSpot].push(sub.lineupEntry)

  const isPitcher = sub.lineupEntry.position === 1
  if (isPitcher) {
    players.pitchers.push({
      player: sub.lineupEntry.player,
      stats: { er: 0 },
      type: 'reliever',
      inning: sub.lineupEntry.inning
    })
  }
}

export const setPlayers = createAction<Players>('setPlayers')
export const subHome = createAction<LineupSubstition>('subHome')
export const subVisiting = createAction<LineupSubstition>('subVisiting')

export const subPitcher = createAction<{
  pitcher: InitialPitcherEntry
  inning: number
  team: 'home' | 'visiting'
}>('subPitcher')
const initialState: Players = {
  home: {
    batters: [],
    pitchers: []
  },
  visiting: {
    batters: [],
    pitchers: []
  }
}
export const playerReducer = createReducer(initialState, (builder) => {
  builder.addCase(setPlayers, (state, action) => {
    if (action.payload)
      if (action.payload.home) state.home.batters = action.payload.home.batters
    state.visiting.batters = action.payload.visiting.batters

    state.home.pitchers = action.payload.home.pitchers
    state.visiting.pitchers = action.payload.visiting.pitchers
  })
  builder.addCase(subHome, (state, action) => {
    sub(state.home, action.payload)
    return state
  })
  builder.addCase(subVisiting, (state, action) => {
    sub(state.visiting, action.payload)
    return state
  })
  builder.addCase(subPitcher, (state, action) => {
    const pitchers =
      action.payload.team === 'home'
        ? state.home.pitchers
        : state.visiting.pitchers
    pitchers.push({
      ...action.payload.pitcher,
      inning: action.payload.inning,
      stats: { er: 0 },
      type: 'reliever'
    })
  })
})
