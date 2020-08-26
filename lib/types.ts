export type PitchData = {
  balls: number
  strikes: number
  pitchCount: number
}

export type RetrosheetBaseResult = {
  endBase: Base
  result: BaseResultResult
  isAtBatResult?: boolean
  pickOff?: PutOut
}

export type Bases = {
  B: RetrosheetBaseResult | undefined
  1: RetrosheetBaseResult | undefined
  2: RetrosheetBaseResult | undefined
  3: RetrosheetBaseResult | undefined
}

export type RetrosheetEvent = {
  pitches: PitchData | undefined
  isOut: boolean
  result: AtBatResult | undefined
  bases: Bases
  isSacrifice?: boolean
}

type Team = string
export type Player = {
  name: string
  number: number | undefined
}

type FieldPosition = number | 'DH'

export type LineupEntry = {
  player: Player
  position: FieldPosition
  inning: number
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

export type Balk = {
  type: 'balk'
  result: 'BK'
  display: 'BK'
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
  result: AdvanceableBase
  display: 'DI'
}

export type FieldersChoice = {
  type: 'fielders-choice'
  result: Base
  display: 'FC'
}

export type PassedBall = {
  type: 'passed-ball'
  result: Base
  display: 'PB'
}

export type WildPitch = {
  type: 'wild-pitch'
  result: Base
  display: 'WP'
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
  pickOff?: PutOut
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

export type Gameplay = {
  home: AtBat[][]
  visiting: AtBat[][]
}

export type InitialGame = Partial<Game> & {
  homeLineup?: InitialLineupEntry[]
  visitingLineup?: InitialLineupEntry[]
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
  gameplay: Gameplay
  gameInfo: Game
}

export type RunnerMovement = {
  startBase: Base | 'B'
  endBase: Base
  result: AdvanceBaseResult | OutBaseResult | undefined
  isOut?: boolean
}
