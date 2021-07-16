import { configureStore } from '@reduxjs/toolkit'

import { gameReducer } from './gameInfo'
import { lineupReducer } from './lineup'
import { gameplayReducer } from './gameplay'

export function getStore() {
  const store = configureStore({
    reducer: {
      gameInfo: gameReducer,
      lineup: lineupReducer,
      gameplay: gameplayReducer
    },
    devTools: false
  })

  return store
}
