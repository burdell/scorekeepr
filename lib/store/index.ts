import { configureStore } from '@reduxjs/toolkit'

import { gameReducer } from './game'
import { lineupReducer } from './lineup'

export function getStore() {
  const store = configureStore({
    reducer: {
      game: gameReducer,
      lineup: lineupReducer
    },
    devTools: false
  })

  return store
}
