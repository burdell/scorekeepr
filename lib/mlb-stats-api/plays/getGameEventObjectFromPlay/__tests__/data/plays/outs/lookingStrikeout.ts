export const lookingStrikeout = {
  result: {
    type: 'atBat',
    event: 'Strikeout',
    eventType: 'strikeout',
    description: 'Max Fried called out on strikes.',
    rbi: 0,
    awayScore: 0,
    homeScore: 1,
    isOut: true
  },
  about: {
    atBatIndex: 0,
    halfInning: 'top',
    isTopInning: true,
    inning: 0,
    startTime: '2021-04-01T19:47:47.142Z',
    endTime: '2021-04-01T19:48:48.983Z',
    isComplete: true,
    isScoringPlay: false,
    hasReview: false,
    hasOut: true,
    captivatingIndex: 14
  },
  count: { balls: 1, strikes: 3, outs: 2 },
  matchup: {
    batter: {
      id: 608331,
      fullName: 'Max Fried',
      link: '/api/v1/people/608331'
    },
    batSide: { code: 'L', description: 'Left' },
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
      pitcher: 'vs_LHB',
      menOnBase: 'Empty'
    }
  },
  pitchIndex: [0, 1, 2, 3],
  actionIndex: [],
  runnerIndex: [0],
  runners: [
    {
      movement: {
        originBase: null,
        start: null,
        end: null,
        outBase: '1B',
        isOut: true,
        outNumber: 2
      },
      details: {
        event: 'Strikeout',
        eventType: 'strikeout',
        movementReason: null,
        runner: {
          id: 608331,
          fullName: 'Max Fried',
          link: '/api/v1/people/608331'
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
          player: { id: 592663, link: '/api/v1/people/592663' },
          position: {
            code: '2',
            name: 'Catcher',
            type: 'Catcher',
            abbreviation: 'C'
          },
          credit: 'f_putout'
        }
      ]
    }
  ],
  playEvents: [
    {
      details: {
        call: { code: 'C', description: 'Called Strike' },
        description: 'Called Strike',
        code: 'C',
        ballColor: 'rgba(170, 21, 11, 1.0)',
        trailColor: 'rgba(188, 0, 33, 1.0)',
        isInPlay: false,
        isStrike: true,
        isBall: false,
        type: { code: 'FF', description: 'Four-Seam Fastball' },
        isOut: false,
        hasReview: false
      },
      count: { balls: 0, strikes: 1, outs: 1 },
      pitchData: {
        startSpeed: 91.5,
        endSpeed: 83.4,
        strikeZoneTop: 3.30754807714631,
        strikeZoneBottom: 1.51317526559447,
        coordinates: {
          aY: 29.187735277664157,
          aZ: -16.346438411062525,
          pfxX: -9.605265308224945,
          pfxZ: 8.86814848127927,
          pX: -0.057175257173770436,
          pZ: 2.1623049706187807,
          vX0: 8.102314282119506,
          vY0: -132.94278560634785,
          vZ0: -4.382013227041431,
          x: 119.18,
          y: 180.4,
          x0: -1.9002732902360593,
          y0: 50.00627806475517,
          z0: 5.022917135790745,
          aX: -17.15224318816404
        },
        breaks: {
          breakAngle: 42.0,
          breakLength: 4.8,
          breakY: 24.0,
          breakVertical: -17.6,
          breakVerticalInduced: 15.2,
          breakHorizontal: 15.6,
          spinRate: 2007,
          spinDirection: 232
        },
        zone: 5,
        typeConfidence: 2.0,
        plateTime: 0.4124141993268844,
        extension: 6.850161690356118
      },
      index: 0,
      playId: 'dfccaab7-dec5-407c-9b26-091d475b7304',
      pitchNumber: 1,
      startTime: '2021-04-01T19:47:48.264Z',
      endTime: '2021-04-01T19:47:52.326Z',
      isPitch: true,
      type: 'pitch'
    },
    {
      details: {
        call: { code: 'C', description: 'Called Strike' },
        description: 'Called Strike',
        code: 'C',
        ballColor: 'rgba(170, 21, 11, 1.0)',
        trailColor: 'rgba(153, 171, 0, 1.0)',
        isInPlay: false,
        isStrike: true,
        isBall: false,
        type: { code: 'KC', description: 'Knuckle Curve' },
        isOut: false,
        hasReview: false
      },
      count: { balls: 0, strikes: 2, outs: 1 },
      pitchData: {
        startSpeed: 77.5,
        endSpeed: 71.3,
        strikeZoneTop: 3.40247838828965,
        strikeZoneBottom: 1.60892251559592,
        coordinates: {
          aY: 21.42423494358932,
          aZ: -39.14792396120338,
          pfxX: 4.4537193134117,
          pfxZ: -5.439174308569287,
          pX: 0.20150405512098232,
          pZ: 2.0283819194360677,
          vX0: 3.2609302474842394,
          vY0: -112.79715790431595,
          vZ0: 1.5027507129636295,
          x: 109.32,
          y: 184.01,
          x0: -1.8439301182847192,
          y0: 50.00304076536318,
          z0: 5.315103872810534,
          aX: 5.710525686056792
        },
        breaks: {
          breakAngle: 9.6,
          breakLength: 12.0,
          breakY: 24.0,
          breakVertical: -54.8,
          breakVerticalInduced: -9.1,
          breakHorizontal: -8.9,
          spinRate: 2343,
          spinDirection: 54
        },
        zone: 8,
        typeConfidence: 2.0,
        plateTime: 0.4864818385956591,
        extension: 6.867882993191881
      },
      index: 1,
      playId: '081f37a1-d5ec-4329-b9dd-0b7013e66297',
      pitchNumber: 2,
      startTime: '2021-04-01T19:48:05.041Z',
      endTime: '2021-04-01T19:48:09.178Z',
      isPitch: true,
      type: 'pitch'
    },
    {
      details: {
        call: { code: 'B', description: 'Ball' },
        description: 'Ball',
        code: 'B',
        ballColor: 'rgba(39, 161, 39, 1.0)',
        trailColor: 'rgba(188, 0, 33, 1.0)',
        isInPlay: false,
        isStrike: false,
        isBall: true,
        type: { code: 'FF', description: 'Four-Seam Fastball' },
        isOut: false,
        hasReview: false
      },
      count: { balls: 1, strikes: 2, outs: 1 },
      pitchData: {
        startSpeed: 91.7,
        endSpeed: 83.2,
        strikeZoneTop: 3.32025317364651,
        strikeZoneBottom: 1.52586319573351,
        coordinates: {
          aY: 30.46463129080205,
          aZ: -16.900610126873204,
          pfxX: -9.976702608912005,
          pfxZ: 8.52842333827881,
          pX: -1.0053222610936572,
          pZ: 4.198272781677391,
          vX0: 5.583091417245822,
          vY0: -133.42424358559046,
          vZ0: 0.4749021335596276,
          x: 155.32,
          y: 125.43,
          x0: -1.835966883343582,
          y0: 50.004152178973584,
          z0: 5.2420459719548695,
          aX: -17.87095234416497
        },
        breaks: {
          breakAngle: 44.4,
          breakLength: 4.8,
          breakY: 24.0,
          breakVertical: -16.9,
          breakVerticalInduced: 15.7,
          breakHorizontal: 16.8,
          spinRate: 2165,
          spinDirection: 226
        },
        zone: 11,
        typeConfidence: 2.0,
        plateTime: 0.41155753629803193,
        extension: 6.998793663167173
      },
      index: 2,
      playId: '9187fcf9-ad02-4b20-bc4d-cdeec88b2746',
      pitchNumber: 3,
      startTime: '2021-04-01T19:48:24.297Z',
      endTime: '2021-04-01T19:48:28.464Z',
      isPitch: true,
      type: 'pitch'
    },
    {
      details: {
        call: { code: 'C', description: 'Called Strike' },
        description: 'Called Strike',
        code: 'C',
        ballColor: 'rgba(170, 21, 11, 1.0)',
        trailColor: 'rgba(153, 171, 0, 1.0)',
        isInPlay: false,
        isStrike: true,
        isBall: false,
        type: { code: 'KC', description: 'Knuckle Curve' },
        isOut: true,
        hasReview: false
      },
      count: { balls: 1, strikes: 3, outs: 1 },
      pitchData: {
        startSpeed: 76.8,
        endSpeed: 70.0,
        strikeZoneTop: 3.41273703871342,
        strikeZoneBottom: 1.56803209511515,
        coordinates: {
          aY: 23.196541127144982,
          aZ: -39.80031826550626,
          pfxX: 5.957009434826773,
          pfxZ: -6.133278813647442,
          pX: -0.31908314199829496,
          pZ: 2.0161923770184216,
          vX0: 1.8705527310719106,
          vY0: -111.75801336911152,
          vZ0: 1.7296853813103996,
          x: 129.16,
          y: 184.34,
          x0: -1.9443498373664365,
          y0: 50.00043012405442,
          z0: 5.370889634753808,
          aX: 7.41127268307126
        },
        breaks: {
          breakAngle: 10.8,
          breakLength: 13.2,
          breakY: 24.0,
          breakVertical: -57.1,
          breakVerticalInduced: -10.2,
          breakHorizontal: -11.3,
          spinRate: 2484,
          spinDirection: 53
        },
        zone: 7,
        typeConfidence: 2.0,
        plateTime: 0.49318752659012777,
        extension: 6.941816813919253
      },
      index: 3,
      playId: '13cc7253-0a87-4595-9149-4acbd0127860',
      pitchNumber: 4,
      startTime: '2021-04-01T19:48:42.842Z',
      endTime: '2021-04-01T19:48:48.983Z',
      isPitch: true,
      type: 'pitch'
    }
  ],
  playEndTime: '2021-04-01T19:48:48.983Z',
  atBatIndex: 17
}
