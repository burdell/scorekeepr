import { Lineup, Players, LineupSubstition } from '../../types'
import { createAction, createReducer } from '@reduxjs/toolkit'

function sub(lineup: Lineup, sub: LineupSubstition) {
  if (!lineup[sub.lineupSpot]) {
    lineup[sub.lineupSpot] = []
  }

  lineup[sub.lineupSpot].push(sub.lineupEntry)
}

export const setLineups = createAction<Players>('setLineup')
export const subHome = createAction<LineupSubstition>('subHome')
export const subVisiting = createAction<LineupSubstition>('subVisiting')

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
export const lineupReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLineups, (state, action) => {
    state.home.batters = action.payload.home.batters
    state.visiting.batters = action.payload.visiting.batters

    state.home.pitchers = action.payload.home.pitchers
    state.visiting.pitchers = action.payload.visiting.pitchers
  })
  builder.addCase(subHome, (state, action) => {
    sub(state.home.batters, action.payload)
    return state
  })
  builder.addCase(subVisiting, (state, action) => {
    sub(state.visiting.batters, action.payload)
    return state
  })
})
