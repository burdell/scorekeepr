export const swingingStrikeout = {
  result: {
    type: 'atBat',
    event: 'Strikeout',
    eventType: 'strikeout',
    description: 'Michael Harris II strikes out swinging.',
    rbi: 0,
    awayScore: 0,
    homeScore: 0
  },
  about: {
    atBatIndex: 0,
    halfInning: 'top',
    isTopInning: true,
    inning: 1,
    startTime: '2022-07-27T15:09:51.778Z',
    endTime: '2022-07-27T16:38:49.381Z',
    isComplete: true,
    isScoringPlay: false,
    hasReview: false,
    hasOut: true,
    captivatingIndex: 14
  },
  count: {
    balls: 1,
    strikes: 3,
    outs: 1
  },
  matchup: {
    batter: {
      id: 671739,
      fullName: 'Michael Harris II',
      link: '/api/v1/people/671739'
    },
    batSide: {
      code: 'L',
      description: 'Left'
    },
    pitcher: {
      id: 502043,
      fullName: 'Kyle Gibson',
      link: '/api/v1/people/502043'
    },
    pitchHand: {
      code: 'R',
      description: 'Right'
    },
    batterHotColdZones: [],
    pitcherHotColdZones: [],
    splits: {
      batter: 'vs_RHP',
      pitcher: 'vs_LHB',
      menOnBase: 'Empty'
    }
  },
  pitchIndex: [3, 4, 5, 6],
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
        event: 'Strikeout',
        eventType: 'strikeout',
        movementReason: null,
        runner: {
          id: 671739,
          fullName: 'Michael Harris II',
          link: '/api/v1/people/671739'
        },
        responsiblePitcher: null,
        isScoringEvent: false,
        rbi: false,
        earned: false,
        teamUnearned: false,
        playIndex: 6
      },
      credits: [
        {
          player: {
            id: 592663,
            link: '/api/v1/people/592663'
          },
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
        description: 'Status Change - Pre-Game',
        event: 'Game Advisory',
        eventType: 'game_advisory',
        awayScore: 0,
        homeScore: 0,
        isScoringPlay: false,
        hasReview: false
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 0
      },
      index: 0,
      startTime: '2022-07-27T15:09:51.778Z',
      endTime: '2022-07-27T16:12:39.434Z',
      isPitch: false,
      type: 'action',
      player: {
        id: 671739,
        link: '/api/v1/people/671739'
      }
    },
    {
      details: {
        description: 'Status Change - Warmup',
        event: 'Game Advisory',
        eventType: 'game_advisory',
        awayScore: 0,
        homeScore: 0,
        isScoringPlay: false,
        hasReview: false
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 0
      },
      index: 1,
      startTime: '2022-07-27T16:12:39.434Z',
      endTime: '2022-07-27T16:37:02.108Z',
      isPitch: false,
      type: 'action',
      player: {
        id: 671739,
        link: '/api/v1/people/671739'
      }
    },
    {
      details: {
        description: 'Status Change - In Progress',
        event: 'Game Advisory',
        eventType: 'game_advisory',
        awayScore: 0,
        homeScore: 0,
        isScoringPlay: false,
        hasReview: false
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 0
      },
      index: 2,
      startTime: '2022-07-27T16:37:02.108Z',
      isPitch: false,
      type: 'action',
      player: {
        id: 671739,
        link: '/api/v1/people/671739'
      }
    },
    {
      details: {
        call: {
          code: 'B',
          description: 'Ball'
        },
        description: 'Ball',
        code: 'B',
        ballColor: 'rgba(39, 161, 39, 1.0)',
        trailColor: 'rgba(188, 0, 33, 1.0)',
        isInPlay: false,
        isStrike: false,
        isBall: true,
        type: {
          code: 'FF',
          description: 'Four-Seam Fastball'
        },
        hasReview: false
      },
      count: {
        balls: 1,
        strikes: 0,
        outs: 0
      },
      pitchData: {
        startSpeed: 91.1,
        endSpeed: 84.3,
        strikeZoneTop: 3.43,
        strikeZoneBottom: 1.57,
        coordinates: {
          aY: 25.44,
          aZ: -13.22,
          pfxX: -3.25,
          pfxZ: 10.65,
          pX: 0.98,
          pZ: 0.11,
          vX0: 8.64,
          vY0: -131.89,
          vZ0: -13.12,
          x: 79.48,
          y: 235.87,
          x0: -1.9,
          y0: 50.0,
          z0: 6.09,
          aX: -5.78
        },
        breaks: {
          breakAngle: 15.6,
          breakLength: 3.6,
          breakY: 24.0,
          spinRate: 2201,
          spinDirection: 216
        },
        zone: 14,
        typeConfidence: 0.91,
        plateTime: 0.41,
        extension: 6.78
      },
      index: 3,
      playId: '82af7be0-9368-4b30-9174-a280547b10d0',
      pitchNumber: 1,
      startTime: '2022-07-27T16:37:32.322Z',
      endTime: '2022-07-27T16:37:36.443Z',
      isPitch: true,
      type: 'pitch'
    },
    {
      details: {
        call: {
          code: 'F',
          description: 'Foul'
        },
        description: 'Foul',
        code: 'F',
        ballColor: 'rgba(170, 21, 11, 1.0)',
        trailColor: 'rgba(188, 0, 33, 1.0)',
        isInPlay: false,
        isStrike: true,
        isBall: false,
        type: {
          code: 'FF',
          description: 'Four-Seam Fastball'
        },
        hasReview: false
      },
      count: {
        balls: 1,
        strikes: 1,
        outs: 0
      },
      pitchData: {
        startSpeed: 91.8,
        endSpeed: 84.4,
        strikeZoneTop: 3.48,
        strikeZoneBottom: 1.6,
        coordinates: {
          aY: 27.69,
          aZ: -12.27,
          pfxX: -5.62,
          pfxZ: 11.01,
          pX: -0.89,
          pZ: 1.6,
          vX0: 4.85,
          vY0: -133.37,
          vZ0: -9.83,
          x: 150.86,
          y: 195.69,
          x0: -2.0,
          y0: 50.01,
          z0: 6.2,
          aX: -10.16
        },
        breaks: {
          breakAngle: 32.4,
          breakLength: 3.6,
          breakY: 24.0,
          spinRate: 2294,
          spinDirection: 209
        },
        zone: 13,
        typeConfidence: 0.91,
        plateTime: 0.41,
        extension: 6.55
      },
      index: 4,
      playId: '8b46ebff-ed7c-4ccf-94da-5a3b7d33085c',
      pitchNumber: 2,
      startTime: '2022-07-27T16:37:55.606Z',
      endTime: '2022-07-27T16:38:03.524Z',
      isPitch: true,
      type: 'pitch'
    },
    {
      details: {
        call: {
          code: 'S',
          description: 'Swinging Strike'
        },
        description: 'Swinging Strike',
        code: 'S',
        ballColor: 'rgba(170, 21, 11, 1.0)',
        trailColor: 'rgba(152, 0, 101, 1.0)',
        isInPlay: false,
        isStrike: true,
        isBall: false,
        type: {
          code: 'FC',
          description: 'Cutter'
        },
        hasReview: false
      },
      count: {
        balls: 1,
        strikes: 2,
        outs: 0
      },
      pitchData: {
        startSpeed: 90.4,
        endSpeed: 84.4,
        strikeZoneTop: 3.48,
        strikeZoneBottom: 1.6,
        coordinates: {
          aY: 23.32,
          aZ: -23.06,
          pfxX: -1.64,
          pfxZ: 5.12,
          pX: 0.97,
          pZ: 1.66,
          vX0: 8.36,
          vY0: -131.4,
          vZ0: -7.56,
          x: 80.13,
          y: 194.09,
          x0: -2.02,
          y0: 50.0,
          z0: 6.24,
          aX: -2.92
        },
        breaks: {
          breakAngle: 3.6,
          breakLength: 6.0,
          breakY: 24.0,
          spinRate: 2334,
          spinDirection: 206
        },
        zone: 14,
        typeConfidence: 0.79,
        plateTime: 0.41,
        extension: 6.69
      },
      index: 5,
      playId: 'f9be147b-18ac-4f69-a62f-dda449bc14ff',
      pitchNumber: 3,
      startTime: '2022-07-27T16:38:23.072Z',
      endTime: '2022-07-27T16:38:26.072Z',
      isPitch: true,
      type: 'pitch'
    },
    {
      details: {
        call: {
          code: 'W',
          description: 'Swinging Strike (Blocked)'
        },
        description: 'Swinging Strike (Blocked)',
        code: 'W',
        ballColor: 'rgba(170, 21, 11, 1.0)',
        trailColor: 'rgba(0, 34, 255, 1.0)',
        isInPlay: false,
        isStrike: true,
        isBall: false,
        type: {
          code: 'CU',
          description: 'Curveball'
        },
        hasReview: false
      },
      count: {
        balls: 1,
        strikes: 3,
        outs: 0
      },
      pitchData: {
        startSpeed: 79.6,
        endSpeed: 74.3,
        strikeZoneTop: 3.48,
        strikeZoneBottom: 1.6,
        coordinates: {
          aY: 21.44,
          aZ: -38.68,
          pfxX: 1.66,
          pfxZ: -4.78,
          pX: 0.73,
          pZ: 0.08,
          vX0: 5.41,
          vY0: -115.81,
          vZ0: -5.79,
          x: 89.02,
          y: 236.5,
          x0: -1.85,
          y0: 50.0,
          z0: 6.31,
          aX: 2.25
        },
        breaks: {
          breakAngle: 4.8,
          breakLength: 12.0,
          breakY: 24.0,
          spinRate: 2484,
          spinDirection: 45
        },
        zone: 14,
        typeConfidence: 0.91,
        plateTime: 0.47,
        extension: 6.52
      },
      index: 6,
      playId: '3c1da6c5-66fc-412d-a8ba-4ca211f3354e',
      pitchNumber: 4,
      startTime: '2022-07-27T16:38:45.139Z',
      endTime: '2022-07-27T16:38:49.381Z',
      isPitch: true,
      type: 'pitch'
    }
  ],
  playEndTime: '2022-07-27T16:38:49.381Z',
  atBatIndex: 0
}
