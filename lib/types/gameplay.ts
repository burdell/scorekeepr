import { Bases } from './baserunning'
import { AtBatResult, DefensiveError, BaseResult } from './result'
import { PitchData } from './pitching'
import { InitialLineupEntry, Team, Lineup, PitcherEntry } from './gameInfo'

export type GameEvent = {
  pitches: PitchData | undefined
  isOut: boolean
  result: AtBatResult | undefined
  bases: Bases
  isSacrifice?: boolean
  foulTerritoryError?: DefensiveError
}

export type AtBat = {
  balls: number
  strikes: number
  pitchCount: number
  isOut: boolean
  result: AtBatResult | undefined
  bases: BaseResult[]
  isSacrifice?: boolean
}

export type CurrentAtBat = {
  team: 'home' | 'visiting'
  lineupSpot: number
  inning: number
}

export type PitchingStats = {
  er: number
}

export type Stats = {
  scoring: number[]
  runs: number
  hits: number
  errors: number
}

export type InitialGame = Partial<Game> & {
  homeLineup?: InitialLineupEntry[]
  visitingLineup?: InitialLineupEntry[]
}

export type Gameplay = {
  home: AtBat[][]
  visiting: AtBat[][]
}

export type Game = {
  homeTeam: Team
  visitingTeam: Team
  date: string
  location: string
  startTime: string | undefined
  id: string
}

export type GameOutput = {
  id: string
  lineups: { home: Lineup; visiting: Lineup }
  pitchers: { home: PitcherEntry[]; visiting: PitcherEntry[] }
  gameplay: Gameplay
  gameInfo: Game
  stats: {
    home: Stats
    visiting: Stats
  }
}

export type GameEventHandler = {
  event: GameEvent
  inning: number
  lineupSpot: number
  team: 'home' | 'visiting'
}
