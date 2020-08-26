import { Game } from '../../types'
import { createAction, createReducer } from '@reduxjs/toolkit'

function getGame(overrides: Partial<Game> = {}): Game {
  return {
    homeTeam: '',
    visitingTeam: '',
    date: '',
    location: '',
    startTime: '',
    id: '',
    ...overrides
  }
}

type GameState = { currentGame: Game }
const initialState: GameState = { currentGame: getGame() }

export const setGameInfo = createAction<Partial<Game>>('setGameInfo')
export const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(setGameInfo, (state, action) => {
    const gameData = { ...state.currentGame, ...action.payload }
    state.currentGame = getGame(gameData)
    return state
  })
})
