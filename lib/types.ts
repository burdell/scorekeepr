type IdEntity = {
  id?: string
  name?: string
}

type Team = string
export type Player = {
  name: string
  number: number
}

// type FieldPosition = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'DH'
type FieldPosition = number | 'DH'

export type LineupEntry = {
  player: Player
  position: FieldPosition
  inning: number
}

export type Lineup = LineupEntry[][]

export type Game = {
  homeTeam: Team
  visitingTeam: Team
  date: string
  location: string
  startTime: string
}
