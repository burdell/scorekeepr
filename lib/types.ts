import { Player } from 'retrosheet-parse'

export type PitchData = {
  balls: number
  strikes: number
  pitchCount: number
}

export type EventBaseResult = {
  endBase: Base
  result?: BaseResultResult
  isOut?: boolean
  isAtBatResult?: boolean
  onBasePutout?: PutOut | PickOff
  additionalBases?: Array<{ base: Base; result?: BaseResultResult }>
}

export type Bases = {
  B: EventBaseResult | undefined
  1: EventBaseResult | undefined
  2: EventBaseResult | undefined
  3: EventBaseResult | undefined
}

export type GameEvent = {
  pitches: PitchData | undefined
  isOut: boolean
  result: AtBatResult | undefined
  bases: Bases
  isSacrifice?: boolean
  foulTerritoryError?: DefensiveError
}

type Team = {
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

export type Base = 1 | 2 | 3 | 4
export type AdvanceableBase = 2 | 3 | 4
export type PutOut = { type: 'putout'; result: number[]; display: string }
export type FlyOut = {
  type: 'flyout'
  result: number
  display: string
}
export type LineOut = { type: 'lineout'; result: number; display: string }
export type Hit = { type: 'hit'; result: Base; display: string }
export type PitcherResultString = 'K' | 'K-looking' | 'BB' | 'IBB' | 'HBP'
export type PitcherResult = {
  type: 'pitcher-result'
  result: PitcherResultString
  display: string
}
export type DefensiveError = {
  type: 'defensive-error'
  result: number
  display: string
}

export type CaughtStealing = {
  type: 'caught-stealing'
  result: PutOut
  display: string
}

export type StolenBase = {
  type: 'stolen-base'
  result: AdvanceableBase
  display: 'SB'
}

export type DefensiveIndifference = {
  type: 'defensive-indifference'
  result: 'DI'
  display: 'DI'
}

export type FieldersChoice = {
  type: 'fielders-choice'
  result: Base
  display: 'FC'
}

export type PassedBall = {
  type: 'passed-ball'
  result: 'PB'
  display: 'PB'
}

export type WildPitch = {
  type: 'wild-pitch'
  result: 'WP'
  display: 'WP'
}

export type Balk = {
  type: 'balk'
  result: 'BK'
  display: 'BK'
}

export type PickOff = {
  type: 'pick-off'
  result: PutOut
  display: string
}

export type AtBatResult =
  | PutOut
  | FlyOut
  | LineOut
  | Hit
  | PitcherResult
  | DefensiveError
  | FieldersChoice

export type AdvanceBaseResult =
  | DefensiveError
  | FieldersChoice
  | Balk
  | StolenBase
  | DefensiveIndifference
  | PassedBall
  | WildPitch

export type OutBaseResult = PutOut | CaughtStealing
export type BaseResultResult = AdvanceBaseResult | OutBaseResult | undefined

export type BaseResult = {
  advanced: boolean
  result: BaseResultResult
  isAtBatResult?: boolean
  onBasePutout?: PutOut | PickOff
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
  startTime: string
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

export type RunnerMovement = {
  startBase: Base | 'B'
  endBase: Base
  result: AdvanceBaseResult | OutBaseResult | undefined
  isOut?: boolean
}

export type GameEventHandler = {
  event: GameEvent
  inning: number
  lineupSpot: number
  team: 'home' | 'visiting'
}
