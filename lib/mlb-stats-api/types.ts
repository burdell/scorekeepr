type InningSide = 'top' | 'bottom'

interface AboutAtBat {
  atBatIndex: number
  halfInning: InningSide
  isTopInning: boolean
  inning: number
  startTime: string
  endTime: string
  isComplete: true
  isScoringPlay: false
  hasReview: false
  hasOut: true
  captivatingIndex: 0
}

export interface MlbStatsApiGame {
  copyright: string
  allPlays: {}
}
