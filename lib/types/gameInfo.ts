import { Player } from 'retrosheet-parse'

export type Team = {
  fullName: string
  abbreviation: string
}
export type LineupPlayer = {
  name: string
  number?: number | undefined
}

type FieldPosition = number | 'DH'

export type LineupEntry = {
  player: LineupPlayer
  position: FieldPosition
  inning: number
}

export type PitcherEntry = {
  player: Player
  stats: {
    er: number
  }
}

export type Lineup = LineupEntry[][]

export type InitialLineupEntry = Pick<LineupEntry, 'player' | 'position'>
