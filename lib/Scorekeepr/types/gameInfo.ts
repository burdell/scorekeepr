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

export interface BatterEntry {
  player: LineupPlayer
  position: PlayerPosition
  inning: number
}

export interface PitcherEntry {
  player: LineupPlayer
  inning: number
  type: 'starter' | 'reliever'
  stats: {
    er: number
  }
}

export interface Players {
  home: {
    batters: BatterEntry[][]
    pitchers: PitcherEntry[]
  }
  visiting: {
    batters: BatterEntry[][]
    pitchers: PitcherEntry[]
  }
}
export interface LineupSubstition {
  lineupSpot: number
  lineupEntry: BatterEntry
}
export type Lineup = BatterEntry[][]
export type InitialBatterEntry = Pick<BatterEntry, 'player' | 'position'>
export type InitialPitcherEntry = Pick<PitcherEntry, 'player'>
export interface InitialLineupEntry {
  batters: InitialBatterEntry[]
  pitchers: InitialPitcherEntry[]
}
