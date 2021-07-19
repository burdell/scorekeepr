import { configureStore } from '@reduxjs/toolkit'

import { gameReducer } from './gameInfo'
import { playerReducer } from './players'
import { gameplayReducer } from './gameplay'

export function getStore() {
  const store = configureStore({
    reducer: {
      gameInfo: gameReducer,
      players: playerReducer,
      gameplay: gameplayReducer
    },
    devTools: false
  })

  return store
}
