import { Bases } from './baserunning'
import { AtBatResult, BaseResult } from './result'
import type { DefensiveError, RunnerAdjustment } from '../../generators/types'
import { PitchData } from './pitching'
import { InitialLineupEntry, Team, Lineup, PitcherEntry } from './gameInfo'

export interface GameEvent {
  pitches: PitchData | undefined
  isOut: boolean
  result: AtBatResult | RunnerAdjustment | undefined
  bases: Bases
  isSacrifice?: boolean
  foulTerritoryError?: DefensiveError
}

export interface AtBat {
  balls: number
  strikes: number
  pitchCount: number
  isOut: boolean
  result: AtBatResult | undefined
  bases: BaseResult[]
  isSacrifice?: boolean
}

export interface CurrentAtBat {
  team: 'home' | 'visiting'
  lineupSpot: number
  inning: number
}

export interface PitchingStats {
  er: number
}

export interface GameStats {
  scoring: number[]
  runs: number
  hits: number
  errors: number
}

export interface Gameplay {
  home: AtBat[][]
  visiting: AtBat[][]
}

export interface GameInfo {
  homeTeam: Team
  visitingTeam: Team
  date: string
  location: string
  startTime: string | undefined
  id: string
}

export interface InitialGame {
  homeTeam?: Team
  visitingTeam?: Team
  date?: string
  location?: string
  startTime?: string | undefined
  id?: string
  homeLineup?: InitialLineupEntry[]
  visitingLineup?: InitialLineupEntry[]
  initialInningCount?: number
}

export interface GameOutput {
  id: string
  lineups: { home: Lineup; visiting: Lineup }
  pitchers: { home: PitcherEntry[]; visiting: PitcherEntry[] }
  gameplay: Gameplay
  gameInfo: GameInfo
  stats: {
    home: GameStats
    visiting: GameStats
  }
}

export interface GameEventHandler {
  event: GameEvent
  inning: number
  lineupSpot: number
  team: 'home' | 'visiting'
}
