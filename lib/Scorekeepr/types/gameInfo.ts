import { Player } from 'retrosheet-parse'

export interface Team {
  fullName: string
  abbreviation: string
}
export interface LineupPlayer {
  name: string
  number?: number | undefined
}

export type PlayerPosition =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 'DH'
  | 'PH'
  | 'PR'

export interface LineupEntry {
  player: LineupPlayer
  position: PlayerPosition
  inning: number
}

export interface PitcherEntry {
  player: Player
  stats: {
    er: number
  }
}

export interface Players {
  home: {
    batters: LineupEntry[][]
    pitchers: PitcherEntry[]
  }
  visiting: {
    batters: LineupEntry[][]
    pitchers: PitcherEntry[]
  }
}
export interface LineupSubstition {
  lineupSpot: number
  lineupEntry: LineupEntry
}
export type Lineup = LineupEntry[][]
export type InitialLineupEntry = Pick<LineupEntry, 'player' | 'position'>
