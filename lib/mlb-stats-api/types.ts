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

interface ContextMetricsTeam {
  leagueRecord: {
    wins: number
    losses: number
    pct: string
  }
  score: number
  team: {
    id: number
    name: string
    link: string
  }
  isWinner: boolean
  probablePitcher: {
    id: number
    fullName: string
    link: string
  }
  splitSquad: boolean
  seriesNumber: number
}

export interface MLBApiContextMetrics {
  game: {
    gamePk: number
    link: string
    gameType: string
    season: string
    gameDate: string
    officialDate: string
    status: {
      abstractGameState: string
      codedGameState: string
      detailedState: string
      statusCode: string
      startTimeTBD: boolean
      abstractGameCode: string
    }
    teams: {
      away: ContextMetricsTeam
      home: ContextMetricsTeam
    }
    venue: {
      id: number
      name: string
      link: string
    }
    content: {
      link: string
    }
    isTie: boolean
    gameNumber: number
    publicFacing: boolean
    doubleHeader: string
    gamedayType: string
    tiebreaker: string
    calendarEventID: string
    seasonDisplay: string
    dayNight: string
    scheduledInnings: number
    reverseHomeAwayStatus: boolean
    inningBreakLength: number
    gamesInSeries: number
    seriesGameNumber: number
    seriesDescription: string
    recordSource: string
    ifNecessary: string
    ifNecessaryDescription: string
    gameId: string
  }
  leftFieldSacFlyProbability: {}
  centerFieldSacFlyProbability: {}
  rightFieldSacFlyProbability: {}
  awayWinProbability: number
  homeWinProbability: number
}

export interface MlbStatsApiGame {
  copyright: string
  allPlays: {}
}

export interface Team {
  springLeague: {
    id: number
    name: string
    link: string
    abbreviation: string
  }
  allStarStatus: string
  id: number
  name: string
  link: string
  season: number
  venue: {
    id: number
    name: string
    link: string
  }
  springVenue: {
    id: number
    link: string
  }
  teamCode: string
  fileCode: string
  abbreviation: string
  teamName: string
  locationName: string
  firstYearOfPlay: string
  league: {
    id: number
    name: string
    link: string
  }
  division: {
    id: number
    name: string
    link: string
  }
  sport: {
    id: number
    link: string
    name: string
  }
  shortName: string
  franchiseName: string
  clubName: string
  active: boolean
}

interface BoxScorePlayer {
  person: {
    id: number
    fullName: string
    link: string
  }
  jerseyNumber: string
  position: {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  status: {
    code: string
    description: string
  }
  parentTeamId: 144
  battingOrder: string
  stats: {
    batting: {
      gamesPlayed: number
      flyOuts: number
      groundOuts: number
      runs: number
      doubles: number
      triples: number
      homeRuns: number
      strikeOuts: number
      baseOnBalls: number
      intentionalWalks: number
      hits: number
      hitByPitch: number
      atBats: number
      caughtStealing: number
      stolenBases: number
      stolenBasePercentage: string
      groundIntoDoublePlay: number
      groundIntoTriplePlay: number
      plateAppearances: number
      totalBases: number
      rbi: number
      leftOnBase: number
      sacBunts: number
      sacFlies: number
      catchersInterference: number
      pickoffs: number
      atBatsPerHomeRun: string
    }
    pitching: {}
    fielding: {
      gamesStarted: number
      caughtStealing: number
      stolenBases: number
      stolenBasePercentage: string
      assists: number
      putOuts: number
      errors: number
      chances: number
      fielding: string
      passedBall: number
      pickoffs: number
    }
  }
  seasonStats: {
    batting: {
      gamesPlayed: number
      flyOuts: number
      groundOuts: number
      runs: number
      doubles: number
      triples: number
      homeRuns: number
      strikeOuts: number
      baseOnBalls: number
      intentionalWalks: number
      hits: number
      hitByPitch: number
      avg: string
      atBats: number
      obp: string
      slg: string
      ops: string
      caughtStealing: number
      stolenBases: number
      stolenBasePercentage: string
      groundIntoDoublePlay: number
      groundIntoTriplePlay: number
      plateAppearances: number
      totalBases: number
      rbi: number
      leftOnBase: number
      sacBunts: number
      sacFlies: number
      babip: string
      catchersInterference: number
      pickoffs: number
      atBatsPerHomeRun: string
    }
    pitching: {
      gamesPlayed: number
      gamesStarted: number
      groundOuts: number
      airOuts: number
      runs: number
      doubles: number
      triples: number
      homeRuns: number
      strikeOuts: number
      baseOnBalls: number
      intentionalWalks: number
      hits: number
      hitByPitch: number
      atBats: number
      obp: string
      caughtStealing: number
      stolenBases: number
      stolenBasePercentage: string
      numberOfPitches: number
      era: string
      inningsPitched: string
      wins: number
      losses: number
      saves: number
      saveOpportunities: number
      holds: number
      blownSaves: number
      earnedRuns: number
      whip: string
      battersFaced: number
      outs: number
      gamesPitched: number
      completeGames: number
      shutouts: number
      balls: number
      strikes: number
      strikePercentage: string
      hitBatsmen: number
      balks: number
      wildPitches: number
      pickoffs: number
      groundOutsToAirouts: string
      rbi: number
      winPercentage: string
      pitchesPerInning: string
      gamesFinished: number
      strikeoutWalkRatio: string
      strikeoutsPer9Inn: string
      walksPer9Inn: string
      hitsPer9Inn: string
      runsScoredPer9: string
      homeRunsPer9: string
      inheritedRunners: number
      inheritedRunnersScored: number
      catchersInterference: number
      sacBunts: number
      sacFlies: number
      passedBall: number
    }
    fielding: {
      gamesStarted: number
      caughtStealing: number
      stolenBases: number
      stolenBasePercentage: string
      assists: number
      putOuts: number
      errors: number
      chances: number
      fielding: string
      passedBall: number
      pickoffs: number
    }
  }
  gameStatus: {
    isCurrentBatter: boolean
    isCurrentPitcher: boolean
    isOnBench: boolean
    isSubstitute: boolean
  }
  allPositions: Array<{
    code: string
    name: string
    type: string
    abbreviation: string
  }>
}

interface TeamBoxScore {
  team: Team
  batting: {
    flyOuts: number
    groundOuts: number
    runs: number
    doubles: number
    triples: number
    homeRuns: number
    strikeOuts: number
    baseOnBalls: number
    intentionalWalks: number
    hits: number
    hitByPitch: number
    avg: string
    atBats: number
    obp: string
    slg: string
    ops: string
    caughtStealing: number
    stolenBases: number
    stolenBasePercentage: string
    groundIntoDoublePlay: number
    groundIntoTriplePlay: number
    plateAppearances: number
    totalBases: number
    rbi: number
    leftOnBase: number
    sacBunts: number
    sacFlies: number
    catchersInterference: number
    pickoffs: number
    atBatsPerHomeRun: string
  }
  pitching: {
    groundOuts: number
    airOuts: number
    runs: number
    doubles: number
    triples: number
    homeRuns: number
    strikeOuts: number
    baseOnBalls: number
    intentionalWalks: number
    hits: number
    hitByPitch: number
    atBats: number
    obp: string
    caughtStealing: number
    stolenBases: number
    stolenBasePercentage: string
    numberOfPitches: number
    era: string
    inningsPitched: string
    saveOpportunities: number
    earnedRuns: number
    whip: string
    battersFaced: number
    outs: number
    completeGames: number
    shutouts: number
    pitchesThrown: number
    balls: number
    strikes: number
    strikePercentage: string
    hitBatsmen: number
    balks: number
    wildPitches: number
    pickoffs: number
    groundOutsToAirouts: string
    rbi: number
    pitchesPerInning: string
    runsScoredPer9: string
    homeRunsPer9: string
    inheritedRunners: number
    inheritedRunnersScored: number
    catchersInterference: number
    sacBunts: number
    sacFlies: number
    passedBall: number
  }
  fielding: {
    caughtStealing: number
    stolenBases: number
    stolenBasePercentage: string
    assists: number
    putOuts: number
    errors: number
    chances: number
    passedBall: number
    pickoffs: number
  }
  players: { [playerId: string]: BoxScorePlayer }
}

export interface BoxScore {
  teams: {
    away: TeamBoxScore
    home: TeamBoxScore
  }
}
