export const flyOut = {
  result: {
    type: 'atBat',
    event: 'Flyout',
    eventType: 'field_out',
    description: 'Ronald Acuna flies out to center fielder Adam Haseley.',
    rbi: 0,
    awayScore: 0,
    homeScore: 0,
    isOut: true
  },
  about: {
    atBatIndex: 0,
    halfInning: 'top',
    isTopInning: true,
    inning: 1,
    startTime: '2021-04-01T19:08:58.251Z',
    endTime: '2021-04-01T19:09:09.552Z',
    isComplete: true,
    isScoringPlay: false,
    hasReview: false,
    hasOut: true,
    captivatingIndex: 0
  },
  count: { balls: 0, strikes: 0, outs: 1 },
  matchup: {
    batter: {
      id: 660670,
      fullName: 'Ronald Acuña Jr.',
      link: '/api/v1/people/660670'
    },
    batSide: { code: 'R', description: 'Right' },
    pitcher: {
      id: 605400,
      fullName: 'Aaron Nola',
      link: '/api/v1/people/605400'
    },
    pitchHand: { code: 'R', description: 'Right' },
    batterHotColdZones: [],
    pitcherHotColdZones: [],
    splits: {
      batter: 'vs_RHP',
      pitcher: 'vs_RHB',
      menOnBase: 'Empty'
    }
  },
  pitchIndex: [3],
  actionIndex: [0, 1, 2],
  runnerIndex: [0],
  runners: [
    {
      movement: {
        originBase: null,
        start: null,
        end: null,
        outBase: '1B',
        isOut: true,
        outNumber: 1
      },
      details: {
        event: 'Flyout',
        eventType: 'field_out',
        movementReason: null,
        runner: {
          id: 660670,
          fullName: 'Ronald Acuña Jr.',
          link: '/api/v1/people/660670'
        },
        responsiblePitcher: null,
        isScoringEvent: false,
        rbi: false,
        earned: false,
        teamUnearned: false,
        playIndex: 3
      },
      credits: [
        {
          player: { id: 656514, link: '/api/v1/people/656514' },
          position: {
            code: '8',
            name: 'Outfielder',
            type: 'Outfielder',
            abbreviation: 'CF'
          },
          credit: 'f_putout'
        }
      ]
    }
  ],
  playEvents: [
    {
      details: {
        description: 'Status Change - Pre-Game',
        event: 'Game Advisory',
        eventType: 'game_advisory',
        awayScore: 0,
        homeScore: 0,
        isScoringPlay: false,
        isOut: false,
        hasReview: false
      },
      count: { balls: 0, strikes: 0, outs: 0 },
      index: 0,
      startTime: '2021-04-01T18:10:31.788Z',
      endTime: '2021-04-01T18:47:21.424Z',
      isPitch: false,
      type: 'action',
      player: { id: 660670, link: '/api/v1/people/660670' }
    },
    {
      details: {
        description: 'Status Change - Warmup',
        event: 'Game Advisory',
        eventType: 'game_advisory',
        awayScore: 0,
        homeScore: 0,
        isScoringPlay: false,
        isOut: false,
        hasReview: false
      },
      count: { balls: 0, strikes: 0, outs: 0 },
      index: 1,
      startTime: '2021-04-01T18:47:21.424Z',
      endTime: '2021-04-01T19:08:37.557Z',
      isPitch: false,
      type: 'action',
      player: { id: 660670, link: '/api/v1/people/660670' }
    },
    {
      details: {
        description: 'Status Change - In Progress',
        event: 'Game Advisory',
        eventType: 'game_advisory',
        awayScore: 0,
        homeScore: 0,
        isScoringPlay: false,
        isOut: false,
        hasReview: false
      },
      count: { balls: 0, strikes: 0, outs: 0 },
      index: 2,
      startTime: '2021-04-01T19:08:37.557Z',
      endTime: '2021-04-01T19:08:59.251Z',
      isPitch: false,
      type: 'action',
      player: { id: 660670, link: '/api/v1/people/660670' }
    },
    {
      details: {
        call: { code: 'X', description: 'In play, out(s)' },
        description: 'In play, out(s)',
        code: 'X',
        ballColor: 'rgba(26, 86, 190, 1.0)',
        trailColor: 'rgba(188, 0, 33, 1.0)',
        isInPlay: true,
        isStrike: false,
        isBall: false,
        type: { code: 'FF', description: 'Four-Seam Fastball' },
        isOut: true,
        hasReview: false
      },
      count: { balls: 0, strikes: 0, outs: 0 },
      pitchData: {
        startSpeed: 91.4,
        endSpeed: 83.9,
        strikeZoneTop: 3.36999999999458,
        strikeZoneBottom: 1.52999999999471,
        coordinates: {
          aY: 27.249469572285495,
          aZ: -18.011512485101452,
          pfxX: -9.157988288528857,
          pfxZ: 7.873704319001039,
          pX: -0.14521218018588,
          pZ: 2.6619617112736185,
          vX0: 7.5663940598757735,
          vY0: -132.97149876776933,
          vZ0: -3.008241300176252,
          x: 106.79,
          y: 152.29,
          x0: -1.83114368217537,
          y0: 50.004935147710526,
          z0: 5.1073718403393995,
          aX: -16.479342527567876
        },
        breaks: {
          breakAngle: 38.4,
          breakLength: 4.8,
          breakY: 24.0,
          breakVertical: -18.8,
          breakVerticalInduced: 13.8,
          breakHorizontal: 15.0,
          spinRate: 1988,
          spinDirection: 231
        },
        zone: 5,
        typeConfidence: 2.0,
        plateTime: 0.4111632418436426,
        extension: 6.889587088263689
      },
      hitData: {
        launchSpeed: 101.6,
        launchAngle: 41.0,
        totalDistance: 310.0,
        trajectory: 'fly_ball',
        hardness: 'medium',
        location: '8',
        coordinates: { coordX: 104.11, coordY: 73.77 }
      },
      index: 3,
      playId: '1a1d7f69-3f28-4c38-ba56-522042a8c496',
      pitchNumber: 1,
      startTime: '2021-04-01T19:08:59.251Z',
      endTime: '2021-04-01T19:09:09.552Z',
      isPitch: true,
      type: 'pitch'
    }
  ],
  playEndTime: '2021-04-01T19:09:09.552Z',
  atBatIndex: 0
}
