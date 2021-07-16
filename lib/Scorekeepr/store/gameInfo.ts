import { GameInfo } from '../../types'
import { createAction, createReducer } from '@reduxjs/toolkit'

function getGame(overrides: Partial<GameInfo> = {}): GameInfo {
  return {
    homeTeam: {
      fullName: '',
      abbreviation: ''
    },
    visitingTeam: {
      fullName: '',
      abbreviation: ''
    },
    date: '',
    location: '',
    startTime: '',
    id: '',
    ...overrides
  }
}

type GameState = { currentGame: GameInfo }
const initialState: GameState = { currentGame: getGame() }

export const setGameInfo = createAction<{ gameInfo: Partial<GameInfo> }>(
  'setGameInfo'
)
export const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(setGameInfo, (state, action) => {
    const gameData = { ...state.currentGame, ...action.payload.gameInfo }
    state.currentGame = getGame(gameData)
    return state
  })
})
