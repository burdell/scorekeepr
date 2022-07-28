
export const testGame = {
  copyright:
    'Copyright 2021 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt',
  allPlays: [
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description: 'Denard Span lines out to center fielder Adam Engel.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 0,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2018-04-10T18:09:02.384Z',
        endTime: '2018-04-10T18:10:40.697Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [3, 4],
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
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 641553, link: '/api/v1/people/641553' },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T18:09:03.384Z',
          endTime: '2018-04-10T18:09:04.384Z',
          isPitch: false,
          type: 'action',
          player: { id: 452655, link: '/api/v1/people/452655' }
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
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 1,
          startTime: '2018-04-10T18:09:04.384Z',
          endTime: '2018-04-10T18:09:05.384Z',
          isPitch: false,
          type: 'action',
          player: { id: 452655, link: '/api/v1/people/452655' }
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
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 2,
          startTime: '2018-04-10T18:09:05.384Z',
          isPitch: false,
          type: 'action',
          player: { id: 452655, link: '/api/v1/people/452655' }
        },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 91.9,
            endSpeed: 83.7,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 29.65,
              aZ: -14.35,
              pfxX: -4.83,
              pfxZ: 9.88,
              pX: -0.68,
              pZ: 3.23,
              vX0: 5.19,
              vY0: -133.66,
              vZ0: -3.78,
              x: 142.95,
              y: 151.5,
              x0: -2.02,
              y0: 50.0,
              z0: 5.7,
              aX: -8.71
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2288,
              spinDirection: 203
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.81
          },
          index: 3,
          playId: 'df72e111-d7d9-440d-893b-457b43687f71',
          pitchNumber: 1,
          startTime: '2018-04-10T18:10:15.772Z',
          endTime: '2018-04-10T18:10:20.043Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 84.4,
            strikeZoneTop: 3.1,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 29.46,
              aZ: -14.42,
              pfxX: -5.09,
              pfxZ: 9.73,
              pX: -0.07,
              pZ: 2.39,
              vX0: 6.5,
              vY0: -134.33,
              vZ0: -5.89,
              x: 119.68,
              y: 174.17,
              x0: -1.86,
              y0: 50.0,
              z0: 5.64,
              aX: -9.29
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2316,
              spinDirection: 205
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.91
          },
          hitData: {
            launchSpeed: 95.4,
            launchAngle: 20.0,
            totalDistance: 337.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 126.54, coordY: 57.14 }
          },
          index: 4,
          playId: '39618351-2e1d-4285-971a-8e5f868b0950',
          pitchNumber: 2,
          startTime: '2018-04-10T18:10:33.089Z',
          endTime: '2018-04-10T18:10:40.697Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:10:40.697Z',
      atBatIndex: 0
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Joey Wendle walks.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 1,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2018-04-10T18:10:56.843Z',
        endTime: '2018-04-10T18:12:18.428Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
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
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 85.0,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 28.09,
              aZ: -12.95,
              pfxX: -5.57,
              pfxZ: 10.46,
              pX: -0.18,
              pZ: 1.42,
              vX0: 6.52,
              vY0: -134.47,
              vZ0: -8.59,
              x: 123.75,
              y: 200.47,
              x0: -1.91,
              y0: 50.0,
              z0: 5.56,
              aX: -10.23
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2277,
              spinDirection: 206
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.99
          },
          index: 0,
          playId: 'b911e259-de8c-4cb4-8bf9-56f5c59e06cb',
          pitchNumber: 1,
          startTime: '2018-04-10T18:11:09.826Z',
          endTime: '2018-04-10T18:11:14.464Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 93.5,
            endSpeed: 85.2,
            strikeZoneTop: 3.14,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 30.49,
              aZ: -14.49,
              pfxX: -5.55,
              pfxZ: 9.49,
              pX: -1.13,
              pZ: 2.35,
              vX0: 4.06,
              vY0: -135.82,
              vZ0: -6.0,
              x: 160.08,
              y: 175.29,
              x0: -1.92,
              y0: 50.0,
              z0: 5.6,
              aX: -10.34
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2443,
              spinDirection: 209
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.58
          },
          index: 1,
          playId: '774acafb-30d9-4b6e-ae0d-bd6771cbca03',
          pitchNumber: 2,
          startTime: '2018-04-10T18:11:26.843Z',
          endTime: '2018-04-10T18:11:31.314Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 79.7,
            endSpeed: 74.1,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 20.71,
              aZ: -38.21,
              pfxX: 5.21,
              pfxZ: -4.41,
              pX: -0.19,
              pZ: 1.5,
              vX0: 2.49,
              vY0: -116.01,
              vZ0: -1.53,
              x: 124.33,
              y: 198.35,
              x0: -1.95,
              y0: 50.0,
              z0: 5.79,
              aX: 7.14
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2490,
              spinDirection: 51
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.35
          },
          index: 2,
          playId: 'e5fcd7fd-d660-425b-8c79-d505ad430f67',
          pitchNumber: 3,
          startTime: '2018-04-10T18:11:46.529Z',
          endTime: '2018-04-10T18:11:51.468Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 92.7,
            endSpeed: 84.7,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 29.16,
              aZ: -12.57,
              pfxX: -6.26,
              pfxZ: 10.71,
              pX: 0.3,
              pZ: 1.21,
              vX0: 7.86,
              vY0: -134.44,
              vZ0: -8.96,
              x: 105.4,
              y: 205.97,
              x0: -1.84,
              y0: 50.0,
              z0: 5.48,
              aX: -11.46
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2295,
              spinDirection: 208
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.9
          },
          index: 3,
          playId: '1450fb18-20cf-41ed-8a01-7b8b9e0e686b',
          pitchNumber: 4,
          startTime: '2018-04-10T18:12:13.423Z',
          endTime: '2018-04-10T18:12:18.428Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:12:18.428Z',
      atBatIndex: 1
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Carlos Gomez flies out sharply to center fielder Adam Engel.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 2,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2018-04-10T18:12:44.830Z',
        endTime: '2018-04-10T18:14:15.879Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 1, outs: 2 },
      matchup: {
        batter: {
          id: 460576,
          fullName: 'Carlos Gomez',
          link: '/api/v1/people/460576'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2],
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
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 641553, link: '/api/v1/people/641553' },
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
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 84.0,
            strikeZoneTop: 3.61,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 30.07,
              aZ: -13.46,
              pfxX: -6.99,
              pfxZ: 10.35,
              pX: -0.58,
              pZ: 1.4,
              vX0: 5.73,
              vY0: -133.9,
              vZ0: -8.3,
              x: 139.29,
              y: 201.07,
              x0: -1.85,
              y0: 50.0,
              z0: 5.51,
              aX: -12.63
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2349,
              spinDirection: 213
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.14
          },
          index: 0,
          playId: 'd22614ba-c582-4506-9f4d-8fd4fe55ef4c',
          pitchNumber: 1,
          startTime: '2018-04-10T18:13:00.003Z',
          endTime: '2018-04-10T18:13:04.307Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 81.5,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 24.25,
              aZ: -19.36,
              pfxX: 0.43,
              pfxZ: 7.64,
              pX: 0.29,
              pZ: 1.73,
              vX0: 5.24,
              vY0: -128.15,
              vZ0: -6.16,
              x: 105.92,
              y: 191.97,
              x0: -1.83,
              y0: 50.0,
              z0: 5.65,
              aX: 0.72
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2446,
              spinDirection: 171
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.85
          },
          index: 1,
          playId: 'da18dffa-60ea-4fe8-adf3-95fb318ba353',
          pitchNumber: 2,
          startTime: '2018-04-10T18:13:24.294Z',
          endTime: '2018-04-10T18:13:32.001Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 86.1,
            endSpeed: 79.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 23.23,
              aZ: -26.17,
              pfxX: 3.45,
              pfxZ: 3.74,
              pX: 0.06,
              pZ: 2.4,
              vX0: 3.68,
              vY0: -125.28,
              vZ0: -2.96,
              x: 114.79,
              y: 173.99,
              x0: -1.87,
              y0: 50.0,
              z0: 5.71,
              aX: 5.53
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2508,
              spinDirection: 132
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.78
          },
          hitData: {
            launchSpeed: 104.7,
            launchAngle: 31.0,
            totalDistance: 401.0,
            trajectory: 'fly_ball',
            hardness: 'hard',
            location: '8',
            coordinates: { coordX: 121.01, coordY: 29.38 }
          },
          index: 2,
          playId: '5c027cbc-ee68-4448-a13d-9eef780ab423',
          pitchNumber: 3,
          startTime: '2018-04-10T18:14:00.163Z',
          endTime: '2018-04-10T18:14:15.879Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:14:15.879Z',
      atBatIndex: 2
    },
    {
      result: {
        type: 'atBat',
        event: 'Hit By Pitch',
        eventType: 'hit_by_pitch',
        description: 'C.J. Cron hit by pitch.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 3,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2018-04-10T18:14:35.522Z',
        endTime: '2018-04-10T18:15:38.394Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 11
      },
      count: { balls: 1, strikes: 0, outs: 2 },
      matchup: {
        batter: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        postOnSecond: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 2],
      actionIndex: [1],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Balk',
            eventType: 'balk',
            movementReason: 'r_adv_play',
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Hit By Pitch',
            eventType: 'hit_by_pitch',
            movementReason: null,
            runner: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: { code: 'N', hasReview: false },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T18:15:02.427Z',
          endTime: '2018-04-10T18:15:02.438Z',
          isPitch: false,
          type: 'no_pitch'
        },
        {
          details: {
            description:
              'With C.  J. Cron batting, Joey Wendle advances to 2nd on a balk.',
            event: 'Balk',
            eventType: 'balk',
            awayScore: 0,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 1,
          startTime: '2018-04-10T18:15:02.438Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: { id: 608334, link: '/api/v1/people/608334' }
        },
        {
          details: {
            call: { code: 'H', description: 'Hit By Pitch' },
            description: 'Hit By Pitch',
            code: 'H',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 84.1,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 30.65,
              aZ: -14.42,
              pfxX: -3.97,
              pfxZ: 9.72,
              pX: -1.79,
              pZ: 3.91,
              vX0: 2.23,
              vY0: -134.63,
              vZ0: -2.32,
              x: 185.15,
              y: 133.18,
              x0: -2.11,
              y0: 50.0,
              z0: 5.81,
              aX: -7.25
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2388,
              spinDirection: 201
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.79
          },
          index: 2,
          playId: '0f1e4c91-a067-432d-9aa5-3c651d675af5',
          pitchNumber: 1,
          startTime: '2018-04-10T18:15:33.256Z',
          endTime: '2018-04-10T18:15:38.394Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:15:38.394Z',
      atBatIndex: 3
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Matt Duffy flies out to center fielder Adam Engel.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 4,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2018-04-10T18:16:04.909Z',
        endTime: '2018-04-10T18:17:16.959Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 1, outs: 3 },
      matchup: {
        batter: {
          id: 622110,
          fullName: 'Matt Duffy',
          link: '/api/v1/people/622110'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [0, 1, 2],
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
            outNumber: 3
          },
          details: {
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 641553, link: '/api/v1/people/641553' },
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
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 87.8,
            endSpeed: 81.3,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 24.05,
              aZ: -23.11,
              pfxX: 3.05,
              pfxZ: 5.43,
              pX: -0.5,
              pZ: 1.95,
              vX0: 3.04,
              vY0: -127.8,
              vZ0: -4.55,
              x: 136.02,
              y: 186.28,
              x0: -2.1,
              y0: 50.0,
              z0: 5.54,
              aX: 5.08
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2339,
              spinDirection: 146
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.68
          },
          index: 0,
          playId: '86a2842f-a020-4bcb-9a7b-7db6320bd9f8',
          pitchNumber: 1,
          startTime: '2018-04-10T18:16:20.703Z',
          endTime: '2018-04-10T18:16:24.974Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 88.8,
            endSpeed: 82.0,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 25.49,
              aZ: -23.54,
              pfxX: 1.22,
              pfxZ: 5.09,
              pX: -0.29,
              pZ: 1.17,
              vX0: 3.88,
              vY0: -129.08,
              vZ0: -6.53,
              x: 128.3,
              y: 207.0,
              x0: -1.97,
              y0: 50.0,
              z0: 5.53,
              aX: 2.07
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2446,
              spinDirection: 159
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.69
          },
          index: 1,
          playId: 'aa7d69a9-e79c-4eb2-b59f-0a07a40e729c',
          pitchNumber: 2,
          startTime: '2018-04-10T18:16:42.625Z',
          endTime: '2018-04-10T18:16:46.896Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.0,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 30.02,
              aZ: -12.07,
              pfxX: -3.29,
              pfxZ: 11.07,
              pX: -0.65,
              pZ: 2.84,
              vX0: 4.44,
              vY0: -134.19,
              vZ0: -5.28,
              x: 141.81,
              y: 162.06,
              x0: -1.9,
              y0: 50.0,
              z0: 5.7,
              aX: -5.97
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2361,
              spinDirection: 194
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.68
          },
          hitData: {
            launchSpeed: 99.7,
            launchAngle: 32.0,
            totalDistance: 373.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 113.5, coordY: 41.79 }
          },
          index: 2,
          playId: 'bed4a313-b6bf-4c4e-ac00-f7dd35c0637f',
          pitchNumber: 3,
          startTime: '2018-04-10T18:17:07.917Z',
          endTime: '2018-04-10T18:17:16.959Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:17:16.959Z',
      atBatIndex: 4
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Yoan Moncada strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 5,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2018-04-10T18:19:32.099Z',
        endTime: '2018-04-10T18:21:16.065Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 3, strikes: 3, outs: 1 },
      matchup: {
        batter: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 96.2,
            endSpeed: 88.5,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 30.04,
              aZ: -9.52,
              pfxX: 4.32,
              pfxZ: 11.4,
              pX: 0.84,
              pZ: 1.4,
              vX0: -3.75,
              vY0: -139.74,
              vZ0: -12.3,
              x: 85.09,
              y: 201.01,
              x0: 1.63,
              y0: 50.0,
              z0: 6.47,
              aX: 8.59
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2422,
              spinDirection: 158
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.76
          },
          index: 0,
          playId: '84eae3c3-8254-4433-9a4d-ce75e1d78d7d',
          pitchNumber: 1,
          startTime: '2018-04-10T18:19:43.105Z',
          endTime: '2018-04-10T18:19:47.310Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 95.9,
            endSpeed: 87.6,
            strikeZoneTop: 3.19,
            strikeZoneBottom: 1.43,
            coordinates: {
              aY: 31.71,
              aZ: -8.61,
              pfxX: 2.88,
              pfxZ: 11.95,
              pX: 0.76,
              pZ: 3.42,
              vX0: -3.61,
              vY0: -139.61,
              vZ0: -7.19,
              x: 87.85,
              y: 146.48,
              x0: 1.7,
              y0: 50.0,
              z0: 6.59,
              aX: 5.68
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2347,
              spinDirection: 167
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.64
          },
          index: 1,
          playId: '7ee07afe-1192-41ca-93e8-11c1ebc6ee03',
          pitchNumber: 2,
          startTime: '2018-04-10T18:20:00.122Z',
          endTime: '2018-04-10T18:20:05.928Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 96.1,
            endSpeed: 87.9,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 31.1,
              aZ: -7.0,
              pfxX: 4.02,
              pfxZ: 12.79,
              pX: -0.3,
              pZ: 1.9,
              vX0: -6.99,
              vY0: -139.35,
              vZ0: -11.34,
              x: 128.35,
              y: 187.48,
              x0: 1.72,
              y0: 50.0,
              z0: 6.48,
              aX: 7.91
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2408,
              spinDirection: 164
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.45
          },
          index: 2,
          playId: '2203649f-2b79-4b98-b077-61cfb6e8be1c',
          pitchNumber: 3,
          startTime: '2018-04-10T18:20:15.371Z',
          endTime: '2018-04-10T18:20:19.208Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 88.4,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 30.93,
              aZ: -8.75,
              pfxX: 3.59,
              pfxZ: 11.77,
              pX: 0.61,
              pZ: 1.84,
              vX0: -4.26,
              vY0: -140.01,
              vZ0: -11.17,
              x: 93.84,
              y: 189.04,
              x0: 1.68,
              y0: 50.0,
              z0: 6.45,
              aX: 7.15
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2308,
              spinDirection: 163
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.47
          },
          index: 3,
          playId: '3ad83c18-01df-4b16-86a5-036503bbe798',
          pitchNumber: 4,
          startTime: '2018-04-10T18:20:30.887Z',
          endTime: '2018-04-10T18:20:35.791Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 88.6,
            endSpeed: 82.5,
            strikeZoneTop: 3.61,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 25.23,
              aZ: -28.47,
              pfxX: -2.6,
              pfxZ: 2.2,
              pX: -1.41,
              pZ: 0.08,
              vX0: -6.49,
              vY0: -128.68,
              vZ0: -10.61,
              x: 170.9,
              y: 236.55,
              x0: 1.47,
              y0: 50.0,
              z0: 6.44,
              aX: -4.39
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2476,
              spinDirection: 251
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 6.48
          },
          index: 4,
          playId: '142ed1df-81d1-4b99-b185-2ec3e49a40b7',
          pitchNumber: 5,
          startTime: '2018-04-10T18:20:51.107Z',
          endTime: '2018-04-10T18:20:58.180Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 3, outs: 0 },
          pitchData: {
            startSpeed: 96.2,
            endSpeed: 88.5,
            strikeZoneTop: 2.51,
            strikeZoneBottom: -0.97,
            coordinates: {
              aY: 29.86,
              aZ: -8.22,
              pfxX: 3.13,
              pfxZ: 11.99,
              pX: 0.14,
              pZ: 2.76,
              vX0: -5.03,
              vY0: -140.03,
              vZ0: -8.84,
              x: 111.59,
              y: 164.16,
              x0: 1.55,
              y0: 50.0,
              z0: 6.49,
              aX: 6.24
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2304,
              spinDirection: 166
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.88
          },
          index: 5,
          playId: 'fd7c7c8b-62a1-492c-9ffd-5a4ef366b540',
          pitchNumber: 6,
          startTime: '2018-04-10T18:21:11.193Z',
          endTime: '2018-04-10T18:21:16.065Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:21:16.065Z',
      atBatIndex: 5
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Avisail Garcia strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 6,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2018-04-10T18:21:38.119Z',
        endTime: '2018-04-10T18:24:00.830Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 3, strikes: 3, outs: 2 },
      matchup: {
        batter: {
          id: 541645,
          fullName: 'Avisail Garcia',
          link: '/api/v1/people/541645'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5, 6],
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
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
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
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 88.6,
            strikeZoneTop: 3.61,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 29.99,
              aZ: -7.65,
              pfxX: 2.07,
              pfxZ: 12.28,
              pX: 0.26,
              pZ: 2.08,
              vX0: -4.19,
              vY0: -140.05,
              vZ0: -10.9,
              x: 107.08,
              y: 182.75,
              x0: 1.5,
              y0: 50.0,
              z0: 6.5,
              aX: 4.13
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2342,
              spinDirection: 171
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.74
          },
          index: 0,
          playId: 'c70e6a4d-92fa-4b06-9f2a-feec9c466202',
          pitchNumber: 1,
          startTime: '2018-04-10T18:21:49.832Z',
          endTime: '2018-04-10T18:21:53.736Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 74.7,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 24.93,
              aZ: -39.85,
              pfxX: -2.45,
              pfxZ: -5.48,
              pX: -1.0,
              pZ: 1.81,
              vX0: -4.83,
              vY0: -118.25,
              vZ0: -2.89,
              x: 155.01,
              y: 189.87,
              x0: 1.4,
              y0: 50.0,
              z0: 6.75,
              aX: -3.42
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2532,
              spinDirection: 330
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.9
          },
          index: 1,
          playId: '78489fec-80bb-4d6a-8ca7-d82796069a4c',
          pitchNumber: 2,
          startTime: '2018-04-10T18:22:04.413Z',
          endTime: '2018-04-10T18:22:10.152Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 87.6,
            endSpeed: 80.9,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 27.39,
              aZ: -29.78,
              pfxX: -4.61,
              pfxZ: 1.48,
              pX: -1.52,
              pZ: -0.34,
              vX0: -5.74,
              vY0: -127.04,
              vZ0: -10.93,
              x: 172.88,
              y: 246.36,
              x0: 1.37,
              y0: 50.0,
              z0: 6.41,
              aX: -7.49
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2496,
              spinDirection: 267
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.19
          },
          index: 2,
          playId: '0a181f14-93c2-4a6a-b40e-adb06dbccd1c',
          pitchNumber: 3,
          startTime: '2018-04-10T18:22:26.102Z',
          endTime: '2018-04-10T18:22:31.841Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 81.6,
            strikeZoneTop: 3.61,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 26.05,
              aZ: -30.69,
              pfxX: -1.78,
              pfxZ: 0.9,
              pX: -1.23,
              pZ: 0.85,
              vX0: -5.98,
              vY0: -127.98,
              vZ0: -8.27,
              x: 163.7,
              y: 215.75,
              x0: 1.37,
              y0: 50.0,
              z0: 6.53,
              aX: -2.96
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2467,
              spinDirection: 269
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.33
          },
          index: 3,
          playId: 'dd468bf0-9ddd-423d-ac73-7524e76e05f3',
          pitchNumber: 4,
          startTime: '2018-04-10T18:22:52.928Z',
          endTime: '2018-04-10T18:22:56.732Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 87.9,
            strikeZoneTop: 3.61,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 32.34,
              aZ: -12.11,
              pfxX: 3.78,
              pfxZ: 10.06,
              pX: 0.37,
              pZ: 5.34,
              vX0: -4.37,
              vY0: -140.46,
              vZ0: -1.85,
              x: 102.92,
              y: 94.65,
              x0: 1.46,
              y0: 50.0,
              z0: 6.79,
              aX: 7.55
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2319,
              spinDirection: 161
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.71
          },
          index: 4,
          playId: 'ff7fdab7-8494-456e-97f9-fa182cfdcdde',
          pitchNumber: 5,
          startTime: '2018-04-10T18:23:10.479Z',
          endTime: '2018-04-10T18:23:15.351Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 88.2,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 31.78,
              aZ: -8.44,
              pfxX: 2.27,
              pfxZ: 11.93,
              pX: 0.21,
              pZ: 2.51,
              vX0: -4.24,
              vY0: -140.2,
              vZ0: -9.62,
              x: 109.13,
              y: 171.13,
              x0: 1.44,
              y0: 50.0,
              z0: 6.53,
              aX: 4.52
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2286,
              spinDirection: 170
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.59
          },
          index: 5,
          playId: '320adb58-d934-441f-aa49-723cab4640ea',
          pitchNumber: 6,
          startTime: '2018-04-10T18:23:32.401Z',
          endTime: '2018-04-10T18:23:38.007Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 3, outs: 1 },
          pitchData: {
            startSpeed: 96.9,
            endSpeed: 89.6,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 28.63,
              aZ: -9.82,
              pfxX: 3.09,
              pfxZ: 10.96,
              pX: -0.29,
              pZ: 3.6,
              vX0: -5.57,
              vY0: -141.13,
              vZ0: -6.69,
              x: 127.98,
              y: 141.48,
              x0: 1.3,
              y0: 50.0,
              z0: 6.62,
              aX: 6.3
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2375,
              spinDirection: 166
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.38,
            extension: 6.87
          },
          index: 6,
          playId: 'e98ef8a6-4eba-40d5-96df-5f8840f672ce',
          pitchNumber: 7,
          startTime: '2018-04-10T18:23:56.258Z',
          endTime: '2018-04-10T18:24:00.830Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:24:00.830Z',
      atBatIndex: 6
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Jose Abreu grounds out, first baseman C.  J. Cron to pitcher Blake Snell.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 7,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2018-04-10T18:24:23.485Z',
        endTime: '2018-04-10T18:25:07.096Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 2, outs: 3 },
      matchup: {
        batter: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
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
            outNumber: 3
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 605483, link: '/api/v1/people/605483' },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 96.1,
            endSpeed: 89.1,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 27.3,
              aZ: -11.67,
              pfxX: 4.31,
              pfxZ: 10.21,
              pX: 0.49,
              pZ: 2.4,
              vX0: -4.59,
              vY0: -139.82,
              vZ0: -9.31,
              x: 98.49,
              y: 174.11,
              x0: 1.58,
              y0: 50.0,
              z0: 6.5,
              aX: 8.66
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2339,
              spinDirection: 157
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.55
          },
          index: 0,
          playId: 'd4b4a0fa-51fc-4101-a986-8f55118e38ed',
          pitchNumber: 1,
          startTime: '2018-04-10T18:24:28.791Z',
          endTime: '2018-04-10T18:24:34.130Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 79.6,
            endSpeed: 73.9,
            strikeZoneTop: 3.57,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 21.59,
              aZ: -40.25,
              pfxX: -3.95,
              pfxZ: -5.92,
              pX: -0.27,
              pZ: 2.6,
              vX0: -2.61,
              vY0: -116.07,
              vZ0: -1.09,
              x: 127.34,
              y: 168.82,
              x0: 1.38,
              y0: 50.0,
              z0: 6.91,
              aX: -5.39
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2517,
              spinDirection: 323
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.46,
            extension: 7.16
          },
          index: 1,
          playId: '4c735c6a-1aea-4d0a-957d-b64c5a0baf99',
          pitchNumber: 2,
          startTime: '2018-04-10T18:24:42.238Z',
          endTime: '2018-04-10T18:24:45.508Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 88.8,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 29.59,
              aZ: -13.5,
              pfxX: 3.98,
              pfxZ: 9.28,
              pX: 0.89,
              pZ: 3.85,
              vX0: -3.13,
              vY0: -140.46,
              vZ0: -5.35,
              x: 83.1,
              y: 134.95,
              x0: 1.5,
              y0: 50.0,
              z0: 6.64,
              aX: 8.01
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2362,
              spinDirection: 157
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.88
          },
          hitData: {
            launchSpeed: 102.1,
            launchAngle: -21.0,
            totalDistance: 11.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '3',
            coordinates: { coordX: 151.29, coordY: 159.18 }
          },
          index: 2,
          playId: '128e3734-bad1-4f32-b273-9fd7c6ea5a68',
          pitchNumber: 3,
          startTime: '2018-04-10T18:24:58.053Z',
          endTime: '2018-04-10T18:25:07.096Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:25:07.096Z',
      atBatIndex: 7
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description: 'Mallex Smith grounds out to first baseman Jose Abreu.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 8,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2018-04-10T18:27:10.937Z',
        endTime: '2018-04-10T18:27:47.690Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [0, 1],
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: [
            {
              player: { id: 547989, link: '/api/v1/people/547989' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 83.9,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 30.15,
              aZ: -15.72,
              pfxX: -4.38,
              pfxZ: 9.07,
              pX: -1.86,
              pZ: 3.2,
              vX0: 2.19,
              vY0: -134.13,
              vZ0: -3.51,
              x: 187.98,
              y: 152.34,
              x0: -2.12,
              y0: 50.0,
              z0: 5.66,
              aX: -7.95
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2331,
              spinDirection: 205
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.86
          },
          index: 0,
          playId: 'b220fe5d-58fc-4458-96dc-eab4afb2ed9a',
          pitchNumber: 1,
          startTime: '2018-04-10T18:27:18.727Z',
          endTime: '2018-04-10T18:27:23.165Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.0,
            endSpeed: 84.2,
            strikeZoneTop: 3.16,
            strikeZoneBottom: 1.32,
            coordinates: {
              aY: 28.57,
              aZ: -13.99,
              pfxX: -6.41,
              pfxZ: 10.05,
              pX: 0.14,
              pZ: 1.35,
              vX0: 6.73,
              vY0: -133.58,
              vZ0: -8.34,
              x: 111.48,
              y: 202.31,
              x0: -1.57,
              y0: 50.0,
              z0: 5.52,
              aX: -11.6
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2297,
              spinDirection: 211
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.81
          },
          hitData: {
            launchSpeed: 67.6,
            launchAngle: -14.0,
            totalDistance: 8.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '3',
            coordinates: { coordX: 147.65, coordY: 166.45 }
          },
          index: 1,
          playId: 'a35005e5-caa2-4f6d-bece-b11a74643d9a',
          pitchNumber: 2,
          startTime: '2018-04-10T18:27:38.914Z',
          endTime: '2018-04-10T18:27:47.690Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:27:47.690Z',
      atBatIndex: 8
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Wilson Ramos called out on strikes.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 9,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2018-04-10T18:28:04.606Z',
        endTime: '2018-04-10T18:29:13.575Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 0, strikes: 3, outs: 2 },
      matchup: {
        batter: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [0, 1, 2],
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
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 456078, link: '/api/v1/people/456078' },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 85.3,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 29.0,
              aZ: -15.44,
              pfxX: -4.41,
              pfxZ: 8.99,
              pX: -0.49,
              pZ: 2.69,
              vX0: 5.16,
              vY0: -135.44,
              vZ0: -5.07,
              x: 135.84,
              y: 166.2,
              x0: -1.85,
              y0: 50.0,
              z0: 5.66,
              aX: -8.2
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2267,
              spinDirection: 204
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.92
          },
          index: 0,
          playId: '8aeb90ba-b4d0-45c9-9b7c-1a7d95abcf34',
          pitchNumber: 1,
          startTime: '2018-04-10T18:28:26.362Z',
          endTime: '2018-04-10T18:28:30.899Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 93.8,
            endSpeed: 85.6,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.34,
            coordinates: {
              aY: 30.28,
              aZ: -13.66,
              pfxX: -5.74,
              pfxZ: 9.89,
              pX: 0.54,
              pZ: 1.78,
              vX0: 7.85,
              vY0: -136.09,
              vZ0: -7.4,
              x: 96.37,
              y: 190.76,
              x0: -1.64,
              y0: 50.0,
              z0: 5.48,
              aX: -10.75
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2310,
              spinDirection: 207
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.83
          },
          index: 1,
          playId: '81c2af4a-ef53-4424-bdc3-7a8ab364d17d',
          pitchNumber: 2,
          startTime: '2018-04-10T18:28:46.615Z',
          endTime: '2018-04-10T18:28:54.289Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 3, outs: 1 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 85.0,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 30.88,
              aZ: -16.2,
              pfxX: -3.96,
              pfxZ: 8.62,
              pX: -1.04,
              pZ: 1.97,
              vX0: 3.37,
              vY0: -135.59,
              vZ0: -6.85,
              x: 156.67,
              y: 185.45,
              x0: -1.79,
              y0: 50.0,
              z0: 5.67,
              aX: -7.34
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2336,
              spinDirection: 204
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.67
          },
          index: 2,
          playId: '9c740b39-5f1d-46f1-a15c-c3fc5f628903',
          pitchNumber: 3,
          startTime: '2018-04-10T18:29:08.404Z',
          endTime: '2018-04-10T18:29:13.575Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:29:13.575Z',
      atBatIndex: 9
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Adeiny Hechavarria grounds out, second baseman Yoan Moncada to first baseman Jose Abreu.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 10,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2018-04-10T18:29:34.052Z',
        endTime: '2018-04-10T18:29:51.647Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 0, outs: 3 },
      matchup: {
        batter: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [0],
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
            outNumber: 3
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: [
            {
              player: { id: 660162, link: '/api/v1/people/660162' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 547989, link: '/api/v1/people/547989' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 84.2,
            strikeZoneTop: 3.1,
            strikeZoneBottom: 1.25,
            coordinates: {
              aY: 29.69,
              aZ: -15.12,
              pfxX: -4.53,
              pfxZ: 9.42,
              pX: -0.07,
              pZ: 1.43,
              vX0: 6.02,
              vY0: -133.92,
              vZ0: -7.71,
              x: 119.48,
              y: 200.27,
              x0: -1.76,
              y0: 50.0,
              z0: 5.43,
              aX: -8.2
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2180,
              spinDirection: 203
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.88
          },
          hitData: {
            launchSpeed: 102.6,
            launchAngle: -7.0,
            totalDistance: 12.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 155.53, coordY: 148.28 }
          },
          index: 0,
          playId: '5b5d69f6-0961-4f25-8106-3cadc1d253bf',
          pitchNumber: 1,
          startTime: '2018-04-10T18:29:44.006Z',
          endTime: '2018-04-10T18:29:51.647Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:29:51.647Z',
      atBatIndex: 10
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Matt Davidson grounds out softly, third baseman Matt Duffy to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 11,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2018-04-10T18:32:02.411Z',
        endTime: '2018-04-10T18:33:48.550Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 3, strikes: 2, outs: 1 },
      matchup: {
        batter: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 571602,
              fullName: 'Matt Davidson',
              link: '/api/v1/people/571602'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 622110, link: '/api/v1/people/622110' },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 95.9,
            endSpeed: 88.4,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 29.06,
              aZ: -10.47,
              pfxX: 2.66,
              pfxZ: 10.94,
              pX: 0.64,
              pZ: 2.0,
              vX0: -3.54,
              vY0: -139.44,
              vZ0: -10.48,
              x: 92.49,
              y: 184.71,
              x0: 1.58,
              y0: 50.0,
              z0: 6.48,
              aX: 5.28
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2381,
              spinDirection: 167
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.51
          },
          index: 0,
          playId: '4a9427c0-536e-4028-a5d4-ad9d663e8441',
          pitchNumber: 1,
          startTime: '2018-04-10T18:32:14.957Z',
          endTime: '2018-04-10T18:32:19.228Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 87.5,
            endSpeed: 81.0,
            strikeZoneTop: 3.47,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 24.31,
              aZ: -18.28,
              pfxX: 7.58,
              pfxZ: 8.42,
              pX: 1.54,
              pZ: 1.03,
              vX0: -3.64,
              vY0: -127.23,
              vZ0: -9.63,
              x: 58.41,
              y: 211.1,
              x0: 2.0,
              y0: 50.0,
              z0: 6.29,
              aX: 12.52
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1816,
              spinDirection: 136
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.82
          },
          index: 1,
          playId: '780edfc6-99d4-47f8-a1c2-8810b138e707',
          pitchNumber: 2,
          startTime: '2018-04-10T18:32:30.205Z',
          endTime: '2018-04-10T18:32:34.209Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 95.3,
            endSpeed: 87.8,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 29.14,
              aZ: -11.88,
              pfxX: 2.9,
              pfxZ: 10.35,
              pX: 1.28,
              pZ: 2.54,
              vX0: -2.19,
              vY0: -138.67,
              vZ0: -8.92,
              x: 68.08,
              y: 170.18,
              x0: 1.7,
              y0: 50.0,
              z0: 6.58,
              aX: 5.68
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2278,
              spinDirection: 164
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.63
          },
          index: 2,
          playId: '71fec5f2-70b1-49a4-854a-62be7033a986',
          pitchNumber: 3,
          startTime: '2018-04-10T18:32:45.887Z',
          endTime: '2018-04-10T18:32:49.291Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 79.3,
            endSpeed: 73.4,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 22.57,
              aZ: -42.81,
              pfxX: -0.88,
              pfxZ: -7.93,
              pX: 0.16,
              pZ: 1.73,
              vX0: -2.44,
              vY0: -115.45,
              vZ0: -2.08,
              x: 110.87,
              y: 192.04,
              x0: 1.35,
              y0: 50.0,
              z0: 6.78,
              aX: -1.18
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2509,
              spinDirection: 351
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 6.24
          },
          index: 3,
          playId: '190c141e-0974-43ba-bdc4-5bd338d15937',
          pitchNumber: 4,
          startTime: '2018-04-10T18:33:01.603Z',
          endTime: '2018-04-10T18:33:06.341Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 96.2,
            endSpeed: 87.2,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.46,
            coordinates: {
              aY: 34.29,
              aZ: -10.54,
              pfxX: 2.21,
              pfxZ: 10.98,
              pX: 0.97,
              pZ: 4.95,
              vX0: -2.25,
              vY0: -140.08,
              vZ0: -3.0,
              x: 79.93,
              y: 105.12,
              x0: 1.5,
              y0: 50.0,
              z0: 6.73,
              aX: 4.35
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2324,
              spinDirection: 169
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.59
          },
          index: 4,
          playId: 'c377be88-4bbf-45b6-b33f-5caab2a096b9',
          pitchNumber: 5,
          startTime: '2018-04-10T18:33:20.522Z',
          endTime: '2018-04-10T18:33:24.159Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 88.0,
            endSpeed: 81.4,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 25.82,
              aZ: -31.28,
              pfxX: -1.41,
              pfxZ: 0.54,
              pX: -0.12,
              pZ: 1.89,
              vX0: -3.58,
              vY0: -128.17,
              vZ0: -5.76,
              x: 121.41,
              y: 187.83,
              x0: 1.48,
              y0: 50.0,
              z0: 6.6,
              aX: -2.35
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2392,
              spinDirection: 270
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.37
          },
          hitData: {
            trajectory: 'ground_ball',
            hardness: 'soft',
            location: '5',
            coordinates: { coordX: 113.74, coordY: 180.98 }
          },
          index: 5,
          playId: 'd8d376f9-a938-49b3-b5d5-b54a3795c342',
          pitchNumber: 6,
          startTime: '2018-04-10T18:33:39.808Z',
          endTime: '2018-04-10T18:33:48.550Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:33:48.550Z',
      atBatIndex: 11
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Welington Castillo flies out to center fielder Carlos Gomez.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 12,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2018-04-10T18:34:19.646Z',
        endTime: '2018-04-10T18:34:48.710Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 0, outs: 2 },
      matchup: {
        batter: {
          id: 456078,
          fullName: 'Welington Castillo',
          link: '/api/v1/people/456078'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1],
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
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 456078,
              fullName: 'Welington Castillo',
              link: '/api/v1/people/456078'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: [
            {
              player: { id: 460576, link: '/api/v1/people/460576' },
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
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 88.0,
            strikeZoneTop: 3.47,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 32.54,
              aZ: -8.56,
              pfxX: 1.84,
              pfxZ: 11.88,
              pX: 1.51,
              pZ: 3.05,
              vX0: -1.25,
              vY0: -140.28,
              vZ0: -8.11,
              x: 59.61,
              y: 156.56,
              x0: 1.72,
              y0: 50.0,
              z0: 6.54,
              aX: 3.66
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2425,
              spinDirection: 171
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.94
          },
          index: 0,
          playId: '61fab99d-cf0a-483c-a62f-5b6c5ed75d21',
          pitchNumber: 1,
          startTime: '2018-04-10T18:34:25.153Z',
          endTime: '2018-04-10T18:34:29.057Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 88.2,
            endSpeed: 81.1,
            strikeZoneTop: 2.11,
            strikeZoneBottom: -1.13,
            coordinates: {
              aY: 25.9,
              aZ: -16.77,
              pfxX: 7.21,
              pfxZ: 9.22,
              pX: 0.72,
              pZ: 2.33,
              vX0: -5.04,
              vY0: -128.31,
              vZ0: -7.1,
              x: 89.49,
              y: 175.92,
              x0: 1.77,
              y0: 50.0,
              z0: 6.43,
              aX: 12.06
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 1812,
              spinDirection: 142
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 6.59
          },
          hitData: {
            launchSpeed: 89.6,
            launchAngle: 49.0,
            totalDistance: 262.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 165.55, coordY: 97.16 }
          },
          index: 1,
          playId: '417d90b5-cf92-489a-8e41-6e16265edd45',
          pitchNumber: 2,
          startTime: '2018-04-10T18:34:39.201Z',
          endTime: '2018-04-10T18:34:48.710Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:34:48.710Z',
      atBatIndex: 12
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Nicky Delmonico strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 13,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2018-04-10T18:35:12.648Z',
        endTime: '2018-04-10T18:36:39.588Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 2, strikes: 3, outs: 3 },
      matchup: {
        batter: {
          id: 547170,
          fullName: 'Nicky Delmonico',
          link: '/api/v1/people/547170'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
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
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 547170,
              fullName: 'Nicky Delmonico',
              link: '/api/v1/people/547170'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 96.6,
            endSpeed: 88.5,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 31.14,
              aZ: -9.08,
              pfxX: 3.13,
              pfxZ: 11.5,
              pX: -0.07,
              pZ: 3.39,
              vX0: -5.47,
              vY0: -140.62,
              vZ0: -7.0,
              x: 119.63,
              y: 147.22,
              x0: 1.49,
              y0: 50.0,
              z0: 6.5,
              aX: 6.28
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2331,
              spinDirection: 166
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.91
          },
          index: 0,
          playId: 'aaf7b180-e122-4e85-8a2b-6b2c3fb683cc',
          pitchNumber: 1,
          startTime: '2018-04-10T18:35:17.472Z',
          endTime: '2018-04-10T18:35:21.410Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 96.0,
            endSpeed: 87.9,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 31.1,
              aZ: -11.66,
              pfxX: 3.62,
              pfxZ: 10.35,
              pX: 0.78,
              pZ: 3.53,
              vX0: -3.15,
              vY0: -139.78,
              vZ0: -6.42,
              x: 87.39,
              y: 143.56,
              x0: 1.45,
              y0: 50.0,
              z0: 6.62,
              aX: 7.17
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2346,
              spinDirection: 161
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.99
          },
          index: 1,
          playId: '462d9fa5-6783-4bf5-acfd-26c058f25c72',
          pitchNumber: 2,
          startTime: '2018-04-10T18:35:35.490Z',
          endTime: '2018-04-10T18:35:39.394Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 82.3,
            strikeZoneTop: 3.62,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 25.44,
              aZ: -27.92,
              pfxX: -1.84,
              pfxZ: 2.51,
              pX: -0.97,
              pZ: 1.12,
              vX0: -5.57,
              vY0: -128.93,
              vZ0: -8.25,
              x: 153.94,
              y: 208.6,
              x0: 1.45,
              y0: 50.0,
              z0: 6.5,
              aX: -3.12
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2425,
              spinDirection: 236
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 6.58
          },
          index: 2,
          playId: '30fa9b58-f187-40d8-a206-9679fa45849f',
          pitchNumber: 3,
          startTime: '2018-04-10T18:35:57.579Z',
          endTime: '2018-04-10T18:36:01.683Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 81.5,
            strikeZoneTop: 3.57,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 23.91,
              aZ: -30.47,
              pfxX: -1.62,
              pfxZ: 1.03,
              pX: -0.89,
              pZ: 0.33,
              vX0: -5.59,
              vY0: -126.89,
              vZ0: -9.33,
              x: 150.95,
              y: 229.89,
              x0: 1.54,
              y0: 50.0,
              z0: 6.45,
              aX: -2.67
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2333,
              spinDirection: 267
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.36
          },
          index: 3,
          playId: 'c3a3d60a-cf4c-4a0e-b0d5-ebff95fa2c37',
          pitchNumber: 4,
          startTime: '2018-04-10T18:36:14.496Z',
          endTime: '2018-04-10T18:36:21.937Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 3, outs: 2 },
          pitchData: {
            startSpeed: 95.6,
            endSpeed: 87.8,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 30.15,
              aZ: -13.16,
              pfxX: 1.21,
              pfxZ: 9.64,
              pX: 0.41,
              pZ: 3.66,
              vX0: -3.3,
              vY0: -139.33,
              vZ0: -5.78,
              x: 101.38,
              y: 140.06,
              x0: 1.45,
              y0: 50.0,
              z0: 6.62,
              aX: 2.39
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2265,
              spinDirection: 174
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.79
          },
          index: 4,
          playId: '2626eae5-62c6-4808-b458-6e924b65b1d6',
          pitchNumber: 5,
          startTime: '2018-04-10T18:36:35.617Z',
          endTime: '2018-04-10T18:36:39.588Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:36:39.588Z',
      atBatIndex: 13
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Daniel Robertson walks.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 14,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2018-04-10T18:38:44.256Z',
        endTime: '2018-04-10T18:40:51.206Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 0 },
      matchup: {
        batter: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 91.8,
            endSpeed: 83.8,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 29.94,
              aZ: -15.72,
              pfxX: -4.38,
              pfxZ: 9.18,
              pX: 0.72,
              pZ: 1.17,
              vX0: 7.42,
              vY0: -133.34,
              vZ0: -8.47,
              x: 89.38,
              y: 207.19,
              x0: -1.53,
              y0: 50.0,
              z0: 5.53,
              aX: -7.85
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2435,
              spinDirection: 202
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.41
          },
          index: 0,
          playId: 'cd1b161c-3c45-4ea0-a88c-dd64e37f2c1b',
          pitchNumber: 1,
          startTime: '2018-04-10T18:38:58.960Z',
          endTime: '2018-04-10T18:39:02.964Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 91.5,
            endSpeed: 82.8,
            strikeZoneTop: 3.25,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 32.23,
              aZ: -16.29,
              pfxX: -4.37,
              pfxZ: 9.04,
              pX: 0.67,
              pZ: 0.74,
              vX0: 7.48,
              vY0: -132.71,
              vZ0: -9.25,
              x: 91.44,
              y: 218.9,
              x0: -1.64,
              y0: 50.0,
              z0: 5.49,
              aX: -7.68
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2387,
              spinDirection: 202
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.37
          },
          index: 1,
          playId: '9270ef1b-470f-4ba5-95a9-da0a23cb45ba',
          pitchNumber: 2,
          startTime: '2018-04-10T18:39:16.311Z',
          endTime: '2018-04-10T18:39:21.649Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 91.7,
            endSpeed: 83.0,
            strikeZoneTop: 3.22,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 32.18,
              aZ: -15.45,
              pfxX: -4.83,
              pfxZ: 9.42,
              pX: -0.3,
              pZ: 1.7,
              vX0: 5.62,
              vY0: -133.31,
              vZ0: -7.03,
              x: 128.35,
              y: 192.87,
              x0: -1.82,
              y0: 50.0,
              z0: 5.51,
              aX: -8.59
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2356,
              spinDirection: 205
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.62
          },
          index: 2,
          playId: 'eb3bed50-144e-4365-87c7-2d6cac0997f7',
          pitchNumber: 3,
          startTime: '2018-04-10T18:39:40.735Z',
          endTime: '2018-04-10T18:39:45.673Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 82.8,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 34.54,
              aZ: -9.81,
              pfxX: -3.34,
              pfxZ: 12.54,
              pX: 0.15,
              pZ: 2.04,
              vX0: 5.75,
              vY0: -134.07,
              vZ0: -7.32,
              x: 111.42,
              y: 183.58,
              x0: -1.61,
              y0: 50.0,
              z0: 5.55,
              aX: -5.96
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2345,
              spinDirection: 192
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.71
          },
          index: 3,
          playId: '040af7f2-6085-462c-a970-9067eda35c35',
          pitchNumber: 4,
          startTime: '2018-04-10T18:39:59.921Z',
          endTime: '2018-04-10T18:40:05.960Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 83.3,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 33.05,
              aZ: -10.5,
              pfxX: -4.62,
              pfxZ: 12.1,
              pX: 0.56,
              pZ: 1.39,
              vX0: 7.2,
              vY0: -134.02,
              vZ0: -8.8,
              x: 95.8,
              y: 201.31,
              x0: -1.58,
              y0: 50.0,
              z0: 5.5,
              aX: -8.28
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2372,
              spinDirection: 198
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.63
          },
          index: 4,
          playId: 'e68f8938-09c0-4d3c-bf4c-b66177c50057',
          pitchNumber: 5,
          startTime: '2018-04-10T18:40:22.677Z',
          endTime: '2018-04-10T18:40:29.084Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 84.3,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 33.03,
              aZ: -11.5,
              pfxX: -5.51,
              pfxZ: 11.31,
              pX: -0.18,
              pZ: 1.03,
              vX0: 6.0,
              vY0: -135.23,
              vZ0: -9.56,
              x: 123.99,
              y: 210.99,
              x0: -1.73,
              y0: 50.0,
              z0: 5.45,
              aX: -10.07
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2487,
              spinDirection: 204
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.72
          },
          index: 5,
          playId: 'cde0a64b-4a71-4c8f-894f-7344c2a1c1dd',
          pitchNumber: 6,
          startTime: '2018-04-10T18:40:47.869Z',
          endTime: '2018-04-10T18:40:51.206Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:40:51.206Z',
      atBatIndex: 14
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Denard Span walks.   Daniel Robertson to 2nd.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 15,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2018-04-10T18:41:19.728Z',
        endTime: '2018-04-10T18:46:03.818Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 0 },
      matchup: {
        batter: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        postOnSecond: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      actionIndex: [0],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: 'r_adv_force',
            runner: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 9
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 9
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 0,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T18:41:50.709Z',
          isPitch: false,
          type: 'action',
          player: { id: 452655, link: '/api/v1/people/452655' }
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.1,
            endSpeed: 84.2,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 29.6,
              aZ: -16.25,
              pfxX: -7.09,
              pfxZ: 8.81,
              pX: 0.06,
              pZ: 1.04,
              vX0: 6.69,
              vY0: -133.77,
              vZ0: -8.57,
              x: 114.81,
              y: 210.76,
              x0: -1.56,
              y0: 50.0,
              z0: 5.45,
              aX: -12.81
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2368,
              spinDirection: 218
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.74
          },
          index: 1,
          playId: '50cb3c0b-9eea-41ac-8b8c-0051ab91b325',
          pitchNumber: 1,
          startTime: '2018-04-10T18:41:30.078Z',
          endTime: '2018-04-10T18:41:35.183Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.2,
            endSpeed: 85.1,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 29.94,
              aZ: -13.79,
              pfxX: -6.2,
              pfxZ: 9.93,
              pX: 0.27,
              pZ: 1.89,
              vX0: 7.44,
              vY0: -135.32,
              vZ0: -7.2,
              x: 106.58,
              y: 187.68,
              x0: -1.71,
              y0: 50.0,
              z0: 5.56,
              aX: -11.49
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2451,
              spinDirection: 209
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.87
          },
          index: 2,
          playId: '16b639ca-bb0d-44c6-bc0f-908451ec43d6',
          pitchNumber: 2,
          startTime: '2018-04-10T18:42:12.487Z',
          endTime: '2018-04-10T18:42:17.992Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 86.6,
            endSpeed: 79.3,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 25.87,
              aZ: -23.91,
              pfxX: -8.7,
              pfxZ: 5.19,
              pX: 0.53,
              pZ: 0.75,
              vX0: 8.54,
              vY0: -125.56,
              vZ0: -6.92,
              x: 96.66,
              y: 218.53,
              x0: -1.78,
              y0: 50.0,
              z0: 5.49,
              aX: -13.85
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1637,
              spinDirection: 239
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.85
          },
          index: 3,
          playId: 'cc5d5b10-b0e1-49ba-a935-2afcb059a3ab',
          pitchNumber: 3,
          startTime: '2018-04-10T18:42:40.648Z',
          endTime: '2018-04-10T18:42:47.388Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.7,
            endSpeed: 85.2,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.56,
              aZ: -13.75,
              pfxX: -5.54,
              pfxZ: 9.93,
              pX: -0.06,
              pZ: 3.51,
              vX0: 6.28,
              vY0: -134.94,
              vZ0: -3.28,
              x: 119.28,
              y: 144.16,
              x0: -1.69,
              y0: 50.0,
              z0: 5.7,
              aX: -10.27
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2293,
              spinDirection: 206
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.12
          },
          index: 4,
          playId: '5ce11043-a1f3-4eeb-9fe5-e3ba7a3b0622',
          pitchNumber: 4,
          startTime: '2018-04-10T18:43:17.385Z',
          endTime: '2018-04-10T18:43:23.091Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          index: 5,
          playId: 'b530599d-b928-4be7-9bd5-4272a587cdba',
          startTime: '2018-04-10T18:43:41.743Z',
          endTime: '2018-04-10T18:43:49.951Z',
          isPitch: false,
          type: 'pickoff'
        },
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 84.6,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.97,
              aZ: -12.38,
              pfxX: -4.62,
              pfxZ: 10.8,
              pX: -0.8,
              pZ: 2.56,
              vX0: 4.36,
              vY0: -134.48,
              vZ0: -5.71,
              x: 147.38,
              y: 169.7,
              x0: -1.84,
              y0: 50.0,
              z0: 5.58,
              aX: -8.47
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2327,
              spinDirection: 201
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.08
          },
          index: 6,
          playId: 'fc75c4c3-f967-4525-8c19-ec82e1f931d3',
          pitchNumber: 5,
          startTime: '2018-04-10T18:44:10.171Z',
          endTime: '2018-04-10T18:44:15.243Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          index: 7,
          playId: '6defb70a-bfae-495a-bc6b-bfee99a003a9',
          startTime: '2018-04-10T18:44:35.029Z',
          endTime: '2018-04-10T18:44:47.775Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          index: 8,
          playId: '595954ee-a7cd-4c78-90fa-dc71653c9660',
          startTime: '2018-04-10T18:45:31.406Z',
          endTime: '2018-04-10T18:45:36.324Z',
          isPitch: false,
          type: 'pickoff'
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
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 4, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 85.9,
            strikeZoneTop: 3.31,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 26.76,
              aZ: -13.14,
              pfxX: -6.0,
              pfxZ: 10.17,
              pX: -0.9,
              pZ: 1.38,
              vX0: 4.16,
              vY0: -135.27,
              vZ0: -8.85,
              x: 151.33,
              y: 201.39,
              x0: -1.67,
              y0: 50.0,
              z0: 5.6,
              aX: -11.22
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2261,
              spinDirection: 210
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.88
          },
          index: 9,
          playId: '1c9b138b-20da-421c-995e-7e0da286248c',
          pitchNumber: 6,
          startTime: '2018-04-10T18:45:58.713Z',
          endTime: '2018-04-10T18:46:03.818Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:46:03.818Z',
      atBatIndex: 15
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Joey Wendle singles on a line drive to left fielder Nicky Delmonico.   Daniel Robertson scores.    Denard Span scores.    Joey Wendle to 2nd.  Fielding error by left fielder Nicky Delmonico.',
        rbi: 1,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 16,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2018-04-10T18:46:40.460Z',
        endTime: '2018-04-10T18:49:04.498Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 70
      },
      count: { balls: 3, strikes: 1, outs: 0 },
      matchup: {
        batter: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnSecond: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
      actionIndex: [],
      runnerIndex: [0, 1, 2, 3, 4, 5],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 547170, link: '/api/v1/people/547170' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        },
        {
          movement: {
            originBase: null,
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_play',
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '2B',
            start: '3B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_play',
            runner: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            responsiblePitcher: {
              id: 608334,
              link: '/api/v1/people/608334'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '2B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Error',
            eventType: 'error',
            movementReason: 'r_adv_play',
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: {
              id: 608334,
              link: '/api/v1/people/608334'
            },
            isScoringEvent: true,
            rbi: false,
            earned: false,
            teamUnearned: true,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 547170, link: '/api/v1/people/547170' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_fielding_error'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 86.1,
            endSpeed: 79.6,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 23.76,
              aZ: -27.55,
              pfxX: -10.04,
              pfxZ: 2.91,
              pX: 0.31,
              pZ: 0.42,
              vX0: 8.7,
              vY0: -124.92,
              vZ0: -6.73,
              x: 105.31,
              y: 227.42,
              x0: -1.91,
              y0: 50.0,
              z0: 5.4,
              aX: -15.96
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1477,
              spinDirection: 255
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.76
          },
          index: 0,
          playId: '4ae8e37d-9260-4fc8-8dc4-71b821afa288',
          pitchNumber: 1,
          startTime: '2018-04-10T18:46:50.331Z',
          endTime: '2018-04-10T18:46:56.704Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.4,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 29.19,
              aZ: -13.77,
              pfxX: -4.33,
              pfxZ: 10.08,
              pX: -1.26,
              pZ: 2.56,
              vX0: 3.5,
              vY0: -134.3,
              vZ0: -5.09,
              x: 164.86,
              y: 169.68,
              x0: -2.01,
              y0: 50.0,
              z0: 5.46,
              aX: -7.9
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2207,
              spinDirection: 202
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.21
          },
          index: 1,
          playId: 'f99dafc5-c94e-4abe-ae0c-fc563c1d1d15',
          pitchNumber: 2,
          startTime: '2018-04-10T18:47:20.962Z',
          endTime: '2018-04-10T18:47:25.833Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 84.6,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 29.46,
              aZ: -13.7,
              pfxX: -3.72,
              pfxZ: 10.03,
              pX: -0.79,
              pZ: 3.53,
              vX0: 4.87,
              vY0: -134.9,
              vZ0: -3.11,
              x: 147.2,
              y: 143.62,
              x0: -2.14,
              y0: 50.0,
              z0: 5.66,
              aX: -6.86
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2357,
              spinDirection: 197
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.84
          },
          index: 2,
          playId: 'c8acb0bf-ff43-4d18-903a-b9843d5a736f',
          pitchNumber: 3,
          startTime: '2018-04-10T18:47:50.091Z',
          endTime: '2018-04-10T18:47:54.395Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.4,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 28.99,
              aZ: -16.2,
              pfxX: -5.05,
              pfxZ: 8.77,
              pX: -0.05,
              pZ: 2.08,
              vX0: 6.55,
              vY0: -134.16,
              vZ0: -6.06,
              x: 118.77,
              y: 182.59,
              x0: -1.86,
              y0: 50.0,
              z0: 5.52,
              aX: -9.21
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2281,
              spinDirection: 207
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.05
          },
          index: 3,
          playId: '1000e2f6-85a0-4ec1-828c-cd08a7d0833d',
          pitchNumber: 4,
          startTime: '2018-04-10T18:48:20.421Z',
          endTime: '2018-04-10T18:48:25.660Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.8,
            endSpeed: 86.1,
            strikeZoneTop: 1.8,
            strikeZoneBottom: -1.04,
            coordinates: {
              aY: 29.08,
              aZ: -16.0,
              pfxX: -4.99,
              pfxZ: 8.58,
              pX: -0.09,
              pZ: 1.36,
              vX0: 6.7,
              vY0: -136.24,
              vZ0: -8.13,
              x: 120.33,
              y: 202.04,
              x0: -1.93,
              y0: 50.0,
              z0: 5.48,
              aX: -9.41
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2360,
              spinDirection: 208
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.04
          },
          hitData: {
            launchSpeed: 101.1,
            launchAngle: 6.0,
            totalDistance: 176.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: { coordX: 94.96, coordY: 111.33 }
          },
          index: 4,
          playId: 'c321331c-2de9-43d8-9303-4ab6ab378d8c',
          pitchNumber: 5,
          startTime: '2018-04-10T18:48:48.015Z',
          endTime: '2018-04-10T18:49:04.498Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:49:04.498Z',
      atBatIndex: 16
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Carlos Gomez strikes out on a foul tip.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 17,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2018-04-10T18:49:47.873Z',
        endTime: '2018-04-10T18:52:20.795Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 1, strikes: 3, outs: 1 },
      matchup: {
        batter: {
          id: 460576,
          fullName: 'Carlos Gomez',
          link: '/api/v1/people/460576'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnSecond: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 456078, link: '/api/v1/people/456078' },
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
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 84.5,
            endSpeed: 78.0,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 23.02,
              aZ: -26.02,
              pfxX: -8.85,
              pfxZ: 4.0,
              pX: -0.85,
              pZ: 1.47,
              vX0: 5.04,
              vY0: -122.87,
              vZ0: -4.74,
              x: 149.2,
              y: 199.19,
              x0: -1.77,
              y0: 50.0,
              z0: 5.62,
              aX: -13.61
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1334,
              spinDirection: 246
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.76
          },
          index: 0,
          playId: '3058572b-fd9f-4367-93a7-b17fd7fe37f1',
          pitchNumber: 1,
          startTime: '2018-04-10T18:49:52.747Z',
          endTime: '2018-04-10T18:49:57.485Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 85.1,
            endSpeed: 78.9,
            strikeZoneTop: 2.4,
            strikeZoneBottom: -0.9,
            coordinates: {
              aY: 22.91,
              aZ: -28.87,
              pfxX: -9.01,
              pfxZ: 2.12,
              pX: -0.39,
              pZ: 0.38,
              vX0: 6.12,
              vY0: -123.57,
              vZ0: -6.47,
              x: 131.73,
              y: 228.61,
              x0: -1.71,
              y0: 50.0,
              z0: 5.43,
              aX: -14.04
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1404,
              spinDirection: 259
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.72
          },
          index: 1,
          playId: '767a0e5e-0131-4d01-af97-45ae20405d4a',
          pitchNumber: 2,
          startTime: '2018-04-10T18:50:23.210Z',
          endTime: '2018-04-10T18:50:30.651Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 84.3,
            endSpeed: 77.2,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 24.98,
              aZ: -26.95,
              pfxX: -10.01,
              pfxZ: 3.45,
              pX: -0.72,
              pZ: 1.56,
              vX0: 5.73,
              vY0: -122.57,
              vZ0: -4.02,
              x: 144.38,
              y: 196.7,
              x0: -1.79,
              y0: 50.0,
              z0: 5.53,
              aX: -15.17
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1462,
              spinDirection: 251
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 6.0
          },
          index: 2,
          playId: 'd815e835-4cc1-4fdc-ad9a-bc2d9a572276',
          pitchNumber: 3,
          startTime: '2018-04-10T18:51:12.259Z',
          endTime: '2018-04-10T18:51:17.965Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 83.3,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 28.45,
              aZ: -14.01,
              pfxX: -5.45,
              pfxZ: 10.18,
              pX: -1.0,
              pZ: 3.87,
              vX0: 3.65,
              vY0: -132.73,
              vZ0: -2.52,
              x: 155.22,
              y: 134.3,
              x0: -1.69,
              y0: 50.0,
              z0: 5.85,
              aX: -9.72
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2263,
              spinDirection: 206
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.1
          },
          index: 3,
          playId: '9c112aaa-9668-440c-ae7d-59c4da3e1f68',
          pitchNumber: 4,
          startTime: '2018-04-10T18:51:46.827Z',
          endTime: '2018-04-10T18:51:52.233Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'T', description: 'Foul Tip' },
            description: 'Foul Tip',
            code: 'T',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 3, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 84.3,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.47,
            coordinates: {
              aY: 29.76,
              aZ: -14.5,
              pfxX: -3.88,
              pfxZ: 9.66,
              pX: -0.51,
              pZ: 3.76,
              vX0: 4.72,
              vY0: -134.57,
              vZ0: -2.47,
              x: 136.54,
              y: 137.5,
              x0: -1.79,
              y0: 50.0,
              z0: 5.72,
              aX: -7.1
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2394,
              spinDirection: 199
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.77
          },
          index: 4,
          playId: '6097a0e9-79c0-4a53-bcac-02c36023c8f3',
          pitchNumber: 5,
          startTime: '2018-04-10T18:52:14.488Z',
          endTime: '2018-04-10T18:52:20.795Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:52:20.795Z',
      atBatIndex: 17
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'C.J. Cron grounds out, third baseman Tyler Saladino to first baseman Jose Abreu.   Joey Wendle to 3rd.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 18,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2018-04-10T18:52:46.198Z',
        endTime: '2018-04-10T18:54:00.127Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnThird: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2],
      actionIndex: [],
      runnerIndex: [0, 1],
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 573135, link: '/api/v1/people/573135' },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 547989, link: '/api/v1/people/547989' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: 'r_adv_play',
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 89.5,
            endSpeed: 82.8,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 24.79,
              aZ: -23.8,
              pfxX: -0.16,
              pfxZ: 4.83,
              pX: 0.32,
              pZ: 1.99,
              vX0: 5.92,
              vY0: -130.19,
              vZ0: -4.6,
              x: 104.68,
              y: 185.13,
              x0: -1.95,
              y0: 50.0,
              z0: 5.56,
              aX: -0.28
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2522,
              spinDirection: 173
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.91
          },
          index: 0,
          playId: 'ab3a3cc7-3ad4-4d99-8b75-c1207f9d7490',
          pitchNumber: 1,
          startTime: '2018-04-10T18:52:55.930Z',
          endTime: '2018-04-10T18:53:00.267Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 87.6,
            endSpeed: 81.0,
            strikeZoneTop: 2.29,
            strikeZoneBottom: -0.99,
            coordinates: {
              aY: 24.55,
              aZ: -25.34,
              pfxX: 2.12,
              pfxZ: 4.13,
              pX: 1.5,
              pZ: 1.78,
              vX0: 7.53,
              vY0: -127.35,
              vZ0: -4.4,
              x: 59.84,
              y: 190.81,
              x0: -1.76,
              y0: 50.0,
              z0: 5.52,
              aX: 3.5
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2548,
              spinDirection: 141
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.71
          },
          index: 1,
          playId: '887e787d-fa9d-4415-939e-0a9229fa2013',
          pitchNumber: 2,
          startTime: '2018-04-10T18:53:22.957Z',
          endTime: '2018-04-10T18:53:27.628Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 87.2,
            endSpeed: 80.7,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 23.9,
              aZ: -24.75,
              pfxX: 2.65,
              pfxZ: 4.52,
              pX: -0.14,
              pZ: 2.12,
              vX0: 3.71,
              vY0: -126.89,
              vZ0: -3.82,
              x: 122.43,
              y: 181.53,
              x0: -1.96,
              y0: 50.0,
              z0: 5.6,
              aX: 4.36
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2397,
              spinDirection: 144
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.63
          },
          hitData: {
            launchSpeed: 108.4,
            launchAngle: 2.0,
            totalDistance: 73.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: { coordX: 103.44, coordY: 161.6 }
          },
          index: 2,
          playId: 'b99e743d-756b-46d2-9a1f-f276480584a5',
          pitchNumber: 3,
          startTime: '2018-04-10T18:53:51.986Z',
          endTime: '2018-04-10T18:54:00.127Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:54:00.127Z',
      atBatIndex: 18
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Matt Duffy grounds out, third baseman Tyler Saladino to first baseman Jose Abreu.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 19,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2018-04-10T18:54:30.299Z',
        endTime: '2018-04-10T18:55:17.738Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 1, outs: 3 },
      matchup: {
        batter: {
          id: 622110,
          fullName: 'Matt Duffy',
          link: '/api/v1/people/622110'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [0, 1],
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
            outNumber: 3
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: [
            {
              player: { id: 573135, link: '/api/v1/people/573135' },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 547989, link: '/api/v1/people/547989' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 88.6,
            endSpeed: 82.1,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 24.06,
              aZ: -23.35,
              pfxX: 1.31,
              pfxZ: 5.18,
              pX: 0.53,
              pZ: 2.06,
              vX0: 5.43,
              vY0: -128.93,
              vZ0: -4.43,
              x: 96.92,
              y: 183.05,
              x0: -1.76,
              y0: 50.0,
              z0: 5.58,
              aX: 2.23
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2521,
              spinDirection: 158
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.86
          },
          index: 0,
          playId: '295684c5-9d76-46c0-906b-76dbffa4746e',
          pitchNumber: 1,
          startTime: '2018-04-10T18:54:37.164Z',
          endTime: '2018-04-10T18:54:43.604Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 79.8,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 25.36,
              aZ: -28.82,
              pfxX: 1.15,
              pfxZ: 2.07,
              pX: -0.09,
              pZ: 1.81,
              vX0: 3.79,
              vY0: -126.2,
              vZ0: -3.5,
              x: 120.41,
              y: 189.94,
              x0: -1.76,
              y0: 50.0,
              z0: 5.53,
              aX: 1.86
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2422,
              spinDirection: 138
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.68
          },
          hitData: {
            launchSpeed: 64.5,
            launchAngle: -19.0,
            totalDistance: 8.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: { coordX: 125.14, coordY: 202.21 }
          },
          index: 1,
          playId: 'cb33a1d9-a4b4-4519-890b-dc3b9a606120',
          pitchNumber: 2,
          startTime: '2018-04-10T18:55:09.730Z',
          endTime: '2018-04-10T18:55:17.738Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:55:17.738Z',
      atBatIndex: 19
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Tim Anderson strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 20,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2018-04-10T18:57:27.547Z',
        endTime: '2018-04-10T18:58:25.692Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 0, strikes: 3, outs: 1 },
      matchup: {
        batter: {
          id: 641313,
          fullName: 'Tim Anderson',
          link: '/api/v1/people/641313'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 78.0,
            endSpeed: 72.1,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.47,
            coordinates: {
              aY: 21.74,
              aZ: -38.31,
              pfxX: -2.02,
              pfxZ: -4.72,
              pX: -0.16,
              pZ: 1.8,
              vX0: -3.34,
              vY0: -113.53,
              vZ0: -2.75,
              x: 123.29,
              y: 190.08,
              x0: 1.59,
              y0: 50.0,
              z0: 6.86,
              aX: -2.63
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2392,
              spinDirection: 332
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.49,
            extension: 5.99
          },
          index: 0,
          playId: '078adb93-b459-4f4e-b03d-45c2f56aeea3',
          pitchNumber: 1,
          startTime: '2018-04-10T18:57:48.889Z',
          endTime: '2018-04-10T18:57:52.392Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.5,
            strikeZoneTop: 1.53,
            strikeZoneBottom: -1.35,
            coordinates: {
              aY: 30.14,
              aZ: -15.36,
              pfxX: 3.49,
              pfxZ: 8.8,
              pX: 1.17,
              pZ: 2.93,
              vX0: -2.27,
              vY0: -137.28,
              vZ0: -7.34,
              x: 72.48,
              y: 159.72,
              x0: 1.55,
              y0: 50.0,
              z0: 6.68,
              aX: 6.67
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2235,
              spinDirection: 158
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.5
          },
          index: 1,
          playId: '58b74139-ad2f-4f7f-8444-b09d39424a67',
          pitchNumber: 2,
          startTime: '2018-04-10T18:58:02.903Z',
          endTime: '2018-04-10T18:58:06.740Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'W', description: 'Swinging Strike (Blocked)' },
            description: 'Swinging Strike (Blocked)',
            code: 'W',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 0, strikes: 3, outs: 0 },
          pitchData: {
            startSpeed: 85.6,
            endSpeed: 79.2,
            strikeZoneTop: 2.96,
            strikeZoneBottom: 1.2,
            coordinates: {
              aY: 25.09,
              aZ: -29.98,
              pfxX: -1.52,
              pfxZ: 1.4,
              pX: -0.75,
              pZ: 0.55,
              vX0: -4.95,
              vY0: -124.3,
              vZ0: -8.52,
              x: 145.46,
              y: 224.01,
              x0: 1.47,
              y0: 50.0,
              z0: 6.51,
              aX: -2.38
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2312,
              spinDirection: 258
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.25
          },
          index: 2,
          playId: '14581892-066a-4466-a260-920e42ccb141',
          pitchNumber: 3,
          startTime: '2018-04-10T18:58:20.420Z',
          endTime: '2018-04-10T18:58:25.692Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:58:25.692Z',
      atBatIndex: 20
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Tyler Saladino grounds out, second baseman Joey Wendle to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 21,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2018-04-10T18:58:50.819Z',
        endTime: '2018-04-10T18:59:34.261Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 1, outs: 2 },
      matchup: {
        batter: {
          id: 573135,
          fullName: 'Tyler Saladino',
          link: '/api/v1/people/573135'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 94.6,
            endSpeed: 86.9,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 29.17,
              aZ: -10.85,
              pfxX: 3.88,
              pfxZ: 11.08,
              pX: 0.41,
              pZ: 2.56,
              vX0: -4.25,
              vY0: -137.56,
              vZ0: -9.1,
              x: 101.37,
              y: 169.69,
              x0: 1.47,
              y0: 50.0,
              z0: 6.64,
              aX: 7.47
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2248,
              spinDirection: 161
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.57
          },
          index: 0,
          playId: '0277e42a-1b3d-407e-8139-ed6414f2dd01',
          pitchNumber: 1,
          startTime: '2018-04-10T18:58:55.455Z',
          endTime: '2018-04-10T18:58:59.359Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 80.8,
            endSpeed: 74.6,
            strikeZoneTop: 3.04,
            strikeZoneBottom: 1.28,
            coordinates: {
              aY: 23.76,
              aZ: -40.24,
              pfxX: -3.54,
              pfxZ: -5.81,
              pX: -0.11,
              pZ: 1.46,
              vX0: -2.33,
              vY0: -117.51,
              vZ0: -3.71,
              x: 121.04,
              y: 199.27,
              x0: 1.36,
              y0: 50.0,
              z0: 6.83,
              aX: -4.91
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2498,
              spinDirection: 327
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 6.0
          },
          index: 1,
          playId: '3b665a12-f7bb-4b59-8432-8b535e9c2ac5',
          pitchNumber: 2,
          startTime: '2018-04-10T18:59:11.338Z',
          endTime: '2018-04-10T18:59:15.309Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 95.0,
            endSpeed: 86.9,
            strikeZoneTop: 3.07,
            strikeZoneBottom: 1.21,
            coordinates: {
              aY: 31.15,
              aZ: -11.82,
              pfxX: 1.77,
              pfxZ: 10.51,
              pX: -0.11,
              pZ: 3.3,
              vX0: -4.71,
              vY0: -138.35,
              vZ0: -6.9,
              x: 121.35,
              y: 149.59,
              x0: 1.38,
              y0: 50.0,
              z0: 6.62,
              aX: 3.43
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2288,
              spinDirection: 172
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.95
          },
          hitData: {
            launchSpeed: 92.4,
            launchAngle: 6.0,
            totalDistance: 130.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 144.62, coordY: 150.7 }
          },
          index: 2,
          playId: '952e6f71-72fc-488c-a2d1-1f4f0fc0456b',
          pitchNumber: 3,
          startTime: '2018-04-10T18:59:26.019Z',
          endTime: '2018-04-10T18:59:34.261Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T18:59:34.261Z',
      atBatIndex: 21
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Adam Engel walks.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 22,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2018-04-10T18:59:59.364Z',
        endTime: '2018-04-10T19:01:58.739Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 641553,
          fullName: 'Adam Engel',
          link: '/api/v1/people/641553'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 641553,
          fullName: 'Adam Engel',
          link: '/api/v1/people/641553'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 95.8,
            endSpeed: 87.8,
            strikeZoneTop: 3.61,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 30.82,
              aZ: -9.62,
              pfxX: 4.06,
              pfxZ: 11.44,
              pX: 0.94,
              pZ: 3.28,
              vX0: -2.88,
              vY0: -139.42,
              vZ0: -7.57,
              x: 81.34,
              y: 150.12,
              x0: 1.45,
              y0: 50.0,
              z0: 6.67,
              aX: 8.01
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2346,
              spinDirection: 160
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.62
          },
          index: 0,
          playId: '24414757-445b-4824-8164-adc7984e6b2f',
          pitchNumber: 1,
          startTime: '2018-04-10T19:00:06.460Z',
          endTime: '2018-04-10T19:00:11.331Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 95.3,
            endSpeed: 87.3,
            strikeZoneTop: 3.57,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 30.45,
              aZ: -11.49,
              pfxX: 1.35,
              pfxZ: 10.59,
              pX: 0.15,
              pZ: 4.06,
              vX0: -4.16,
              vY0: -138.74,
              vZ0: -5.14,
              x: 111.09,
              y: 129.34,
              x0: 1.5,
              y0: 50.0,
              z0: 6.7,
              aX: 2.63
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2345,
              spinDirection: 175
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.7
          },
          index: 1,
          playId: 'c40a14fc-21a5-4674-8671-42f666f79c88',
          pitchNumber: 2,
          startTime: '2018-04-10T19:00:24.444Z',
          endTime: '2018-04-10T19:00:27.948Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 87.6,
            strikeZoneTop: 3.67,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 30.35,
              aZ: -7.53,
              pfxX: 2.66,
              pfxZ: 12.59,
              pX: -0.36,
              pZ: 2.27,
              vX0: -5.95,
              vY0: -138.84,
              vZ0: -10.17,
              x: 130.72,
              y: 177.55,
              x0: 1.46,
              y0: 50.0,
              z0: 6.47,
              aX: 5.2
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2394,
              spinDirection: 170
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.78
          },
          index: 2,
          playId: '53a3635c-53e1-4867-91f2-4cec922093d1',
          pitchNumber: 3,
          startTime: '2018-04-10T19:00:45.766Z',
          endTime: '2018-04-10T19:00:50.037Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 88.4,
            endSpeed: 81.3,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 26.41,
              aZ: -16.6,
              pfxX: 9.99,
              pfxZ: 9.33,
              pX: 1.15,
              pZ: 0.56,
              vX0: -5.01,
              vY0: -128.32,
              vZ0: -11.16,
              x: 73.0,
              y: 223.66,
              x0: 1.83,
              y0: 50.0,
              z0: 6.26,
              aX: 16.67
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1875,
              spinDirection: 130
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 6.63
          },
          index: 3,
          playId: '4c8eaf05-9a50-482b-85a1-bbf7d2630f43',
          pitchNumber: 4,
          startTime: '2018-04-10T19:01:06.787Z',
          endTime: '2018-04-10T19:01:21.435Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 95.1,
            endSpeed: 86.5,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 32.62,
              aZ: -11.32,
              pfxX: 3.68,
              pfxZ: 10.82,
              pX: 0.59,
              pZ: 3.49,
              vX0: -3.99,
              vY0: -138.39,
              vZ0: -6.44,
              x: 94.51,
              y: 144.58,
              x0: 1.58,
              y0: 50.0,
              z0: 6.61,
              aX: 7.09
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2283,
              spinDirection: 162
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.77
          },
          index: 4,
          playId: 'd2f93033-b8ef-4fdf-81d5-bc9379bb217c',
          pitchNumber: 5,
          startTime: '2018-04-10T19:01:30.177Z',
          endTime: '2018-04-10T19:01:35.215Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 95.8,
            endSpeed: 87.3,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 32.8,
              aZ: -11.29,
              pfxX: 2.06,
              pfxZ: 10.65,
              pX: 0.61,
              pZ: 3.6,
              vX0: -3.35,
              vY0: -139.5,
              vZ0: -6.17,
              x: 93.63,
              y: 141.66,
              x0: 1.57,
              y0: 50.0,
              z0: 6.59,
              aX: 4.04
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2314,
              spinDirection: 170
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.77
          },
          index: 5,
          playId: 'e1f247bc-c22b-4617-ac57-17d35be44c6c',
          pitchNumber: 6,
          startTime: '2018-04-10T19:01:53.734Z',
          endTime: '2018-04-10T19:01:58.739Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:01:58.739Z',
      atBatIndex: 22
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Yoan Moncada strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 23,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2018-04-10T19:02:19.835Z',
        endTime: '2018-04-10T19:05:03.190Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 3, strikes: 3, outs: 3 },
      matchup: {
        batter: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 3, 4, 5, 6],
      actionIndex: [2],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Wild Pitch',
            eventType: 'wild_pitch',
            movementReason: 'r_adv_play',
            runner: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: null,
            outBase: '1B',
            isOut: true,
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
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
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 94.7,
            endSpeed: 86.0,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 32.32,
              aZ: -8.43,
              pfxX: 3.62,
              pfxZ: 12.45,
              pX: 1.05,
              pZ: 3.31,
              vX0: -3.03,
              vY0: -137.67,
              vZ0: -7.36,
              x: 77.14,
              y: 149.52,
              x0: 1.69,
              y0: 50.0,
              z0: 6.6,
              aX: 6.9
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2298,
              spinDirection: 164
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.43
          },
          index: 0,
          playId: 'a621a72f-e659-467c-adda-f86224061d5a',
          pitchNumber: 1,
          startTime: '2018-04-10T19:02:30.003Z',
          endTime: '2018-04-10T19:02:33.673Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 79.3,
            endSpeed: 72.8,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 24.65,
              aZ: -38.99,
              pfxX: -2.37,
              pfxZ: -5.16,
              pX: -0.86,
              pZ: 0.65,
              vX0: -4.62,
              vY0: -115.19,
              vZ0: -5.06,
              x: 149.78,
              y: 221.22,
              x0: 1.49,
              y0: 50.0,
              z0: 6.71,
              aX: -3.14
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2386,
              spinDirection: 331
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 6.05
          },
          index: 1,
          playId: 'e8cce0d6-9ddc-40a7-8b45-757409a6158e',
          pitchNumber: 2,
          startTime: '2018-04-10T19:02:52.726Z',
          endTime: '2018-04-10T19:03:09.109Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description:
              'Wild pitch by pitcher Blake Snell.   Adam Engel to 2nd.',
            event: 'Wild Pitch',
            eventType: 'wild_pitch',
            awayScore: 2,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 2 },
          index: 2,
          actionPlayId: 'e8cce0d6-9ddc-40a7-8b45-757409a6158e',
          startTime: '2018-04-10T19:03:12.005Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: { id: 641553, link: '/api/v1/people/641553' }
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
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 94.6,
            endSpeed: 86.8,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 29.72,
              aZ: -14.76,
              pfxX: 2.5,
              pfxZ: 9.01,
              pX: 1.55,
              pZ: 4.31,
              vX0: -1.2,
              vY0: -137.94,
              vZ0: -3.57,
              x: 58.06,
              y: 122.4,
              x0: 1.66,
              y0: 50.0,
              z0: 6.61,
              aX: 4.84
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2218,
              spinDirection: 164
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.82
          },
          index: 3,
          playId: '4fc757b8-4c08-4b22-95ca-77fefcfe2fb9',
          pitchNumber: 3,
          startTime: '2018-04-10T19:03:39.372Z',
          endTime: '2018-04-10T19:03:44.611Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 86.2,
            strikeZoneTop: 3.23,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 28.72,
              aZ: -14.36,
              pfxX: 2.98,
              pfxZ: 9.4,
              pX: 1.1,
              pZ: 2.91,
              vX0: -2.43,
              vY0: -136.44,
              vZ0: -7.36,
              x: 74.99,
              y: 160.42,
              x0: 1.61,
              y0: 50.0,
              z0: 6.62,
              aX: 5.64
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 162
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.88
          },
          index: 4,
          playId: '5f4070fa-0e83-4bdd-9d7d-c36c34e43b97',
          pitchNumber: 4,
          startTime: '2018-04-10T19:04:01.127Z',
          endTime: '2018-04-10T19:04:05.232Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 95.3,
            endSpeed: 87.5,
            strikeZoneTop: 2.47,
            strikeZoneBottom: -1.01,
            coordinates: {
              aY: 30.03,
              aZ: -13.51,
              pfxX: 1.79,
              pfxZ: 9.55,
              pX: -0.12,
              pZ: 2.82,
              vX0: -4.79,
              vY0: -138.65,
              vZ0: -7.63,
              x: 121.74,
              y: 162.58,
              x0: 1.39,
              y0: 50.0,
              z0: 6.51,
              aX: 3.49
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2221,
              spinDirection: 171
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.83
          },
          index: 5,
          playId: '5f151568-81b3-41ef-a3fc-56bc8065a109',
          pitchNumber: 5,
          startTime: '2018-04-10T19:04:26.553Z',
          endTime: '2018-04-10T19:04:31.057Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 3, strikes: 3, outs: 2 },
          pitchData: {
            startSpeed: 86.5,
            endSpeed: 79.7,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 26.33,
              aZ: -31.93,
              pfxX: -1.63,
              pfxZ: 0.15,
              pX: -0.53,
              pZ: 1.95,
              vX0: -4.36,
              vY0: -125.92,
              vZ0: -5.11,
              x: 137.03,
              y: 186.07,
              x0: 1.44,
              y0: 50.0,
              z0: 6.6,
              aX: -2.61
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2249,
              spinDirection: 279
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.36
          },
          index: 6,
          playId: '7d682de0-81c7-4255-a017-5b128c3aec42',
          pitchNumber: 6,
          startTime: '2018-04-10T19:04:59.052Z',
          endTime: '2018-04-10T19:05:03.190Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:05:03.190Z',
      atBatIndex: 23
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Mallex Smith singles on a line drive to left fielder Nicky Delmonico.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 24,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2018-04-10T19:07:17.437Z',
        endTime: '2018-04-10T19:07:38.344Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 0, outs: 0 },
      matchup: {
        batter: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: [
            {
              player: { id: 547170, link: '/api/v1/people/547170' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 91.9,
            endSpeed: 83.4,
            strikeZoneTop: 3.16,
            strikeZoneBottom: 1.32,
            coordinates: {
              aY: 30.65,
              aZ: -13.24,
              pfxX: -6.3,
              pfxZ: 10.6,
              pX: 0.34,
              pZ: 1.62,
              vX0: 7.6,
              vY0: -133.31,
              vZ0: -7.62,
              x: 104.13,
              y: 195.17,
              x0: -1.74,
              y0: 50.0,
              z0: 5.48,
              aX: -11.26
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2369,
              spinDirection: 208
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.12
          },
          hitData: {
            launchSpeed: 96.6,
            launchAngle: 9.0,
            totalDistance: 205.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: { coordX: 103.84, coordY: 118.13 }
          },
          index: 0,
          playId: '5f5c5f9a-5250-4793-8b27-73d3e6e38a2b',
          pitchNumber: 1,
          startTime: '2018-04-10T19:07:27.500Z',
          endTime: '2018-04-10T19:07:38.344Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:07:38.344Z',
      atBatIndex: 24
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Wilson Ramos walks.   Mallex Smith to 2nd.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 25,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2018-04-10T19:08:08.010Z',
        endTime: '2018-04-10T19:11:19.365Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 1, outs: 0 },
      matchup: {
        batter: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        postOnSecond: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5, 6],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: 'r_adv_force',
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 6
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 6
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          playId: '99bb6977-2137-4d76-9745-2e486768e52c',
          startTime: '2018-04-10T19:08:20.712Z',
          endTime: '2018-04-10T19:08:25.859Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 81.6,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 24.69,
              aZ: -20.74,
              pfxX: -1.46,
              pfxZ: 6.83,
              pX: 1.09,
              pZ: 0.6,
              vX0: 7.32,
              vY0: -128.15,
              vZ0: -8.17,
              x: 75.43,
              y: 222.5,
              x0: -1.6,
              y0: 50.0,
              z0: 5.43,
              aX: -2.44
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2380,
              spinDirection: 185
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.87
          },
          index: 1,
          playId: '05a28789-44a7-4a1e-8c52-f88f5d32cdb6',
          pitchNumber: 1,
          startTime: '2018-04-10T19:08:45.178Z',
          endTime: '2018-04-10T19:08:52.619Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 86.0,
            endSpeed: 79.7,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 22.98,
              aZ: -22.97,
              pfxX: 0.8,
              pfxZ: 5.77,
              pX: 0.93,
              pZ: 1.34,
              vX0: 5.68,
              vY0: -124.98,
              vZ0: -6.05,
              x: 81.56,
              y: 202.7,
              x0: -1.47,
              y0: 50.0,
              z0: 5.65,
              aX: 1.28
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2361,
              spinDirection: 164
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.8
          },
          index: 2,
          playId: 'ccb3e658-4e97-407e-9ea8-da7fad014d88',
          pitchNumber: 2,
          startTime: '2018-04-10T19:09:16.743Z',
          endTime: '2018-04-10T19:09:20.713Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 84.0,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 26.97,
              aZ: -15.36,
              pfxX: -6.04,
              pfxZ: 9.4,
              pX: 0.43,
              pZ: 0.97,
              vX0: 7.42,
              vY0: -132.56,
              vZ0: -8.77,
              x: 100.68,
              y: 212.59,
              x0: -1.62,
              y0: 50.0,
              z0: 5.43,
              aX: -10.8
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2228,
              spinDirection: 211
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.13
          },
          index: 3,
          playId: 'ed799bec-391e-47df-8aa0-4a07a86c3887',
          pitchNumber: 3,
          startTime: '2018-04-10T19:09:43.403Z',
          endTime: '2018-04-10T19:09:48.741Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 83.6,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 28.09,
              aZ: -13.87,
              pfxX: -5.03,
              pfxZ: 10.26,
              pX: -0.04,
              pZ: 1.93,
              vX0: 6.47,
              vY0: -132.66,
              vZ0: -6.85,
              x: 118.6,
              y: 186.71,
              x0: -1.86,
              y0: 50.0,
              z0: 5.55,
              aX: -8.98
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2245,
              spinDirection: 203
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 6.05
          },
          index: 4,
          playId: '2bccc068-dbe7-447a-8ae7-18349a538010',
          pitchNumber: 4,
          startTime: '2018-04-10T19:10:13.333Z',
          endTime: '2018-04-10T19:10:18.438Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          index: 5,
          playId: '5dfab8ad-dd7c-4968-b070-2e099f57f6d8',
          startTime: '2018-04-10T19:10:42.227Z',
          endTime: '2018-04-10T19:10:47.767Z',
          isPitch: false,
          type: 'pickoff'
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
            hasReview: false
          },
          count: { balls: 4, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 84.6,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 29.33,
              aZ: -14.04,
              pfxX: -5.73,
              pfxZ: 9.92,
              pX: -0.49,
              pZ: 1.28,
              vX0: 5.14,
              vY0: -134.4,
              vZ0: -8.53,
              x: 135.84,
              y: 204.02,
              x0: -1.69,
              y0: 50.0,
              z0: 5.5,
              aX: -10.47
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2359,
              spinDirection: 209
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.07
          },
          index: 6,
          playId: 'a34d1813-7e5d-4873-9718-1315b20c2540',
          pitchNumber: 5,
          startTime: '2018-04-10T19:11:14.160Z',
          endTime: '2018-04-10T19:11:19.365Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:11:19.365Z',
      atBatIndex: 25
    },
    {
      result: {
        type: 'atBat',
        event: 'Sac Fly',
        eventType: 'sac_fly',
        description:
          'Adeiny Hechavarria out on a sacrifice fly to center fielder Adam Engel.   Mallex Smith scores.    Wilson Ramos to 3rd.',
        rbi: 1,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 26,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2018-04-10T19:12:20.487Z',
        endTime: '2018-04-10T19:13:38.371Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnThird: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [1, 3],
      actionIndex: [0, 2],
      runnerIndex: [0, 1, 2, 3, 4],
      runners: [
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Wild Pitch',
            eventType: 'wild_pitch',
            movementReason: 'r_adv_play',
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Wild Pitch',
            eventType: 'wild_pitch',
            movementReason: 'r_adv_play',
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: []
        },
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
            event: 'Sac Fly',
            eventType: 'sac_fly',
            movementReason: null,
            runner: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
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
              player: { id: 641553, link: '/api/v1/people/641553' },
              position: {
                code: '8',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'CF'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '3B',
            start: '3B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Sac Fly',
            eventType: 'sac_fly',
            movementReason: 'r_adv_play',
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: {
              id: 608334,
              link: '/api/v1/people/608334'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Sac Fly',
            eventType: 'sac_fly',
            movementReason: 'r_adv_play',
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 2,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T19:12:21.487Z',
          isPitch: false,
          type: 'action',
          player: { id: 588751, link: '/api/v1/people/588751' }
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 84.3,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 32.14,
              aZ: -12.81,
              pfxX: -5.96,
              pfxZ: 10.54,
              pX: -1.89,
              pZ: 3.4,
              vX0: 2.23,
              vY0: -135.35,
              vZ0: -3.92,
              x: 189.18,
              y: 146.87,
              x0: -1.96,
              y0: 50.0,
              z0: 5.78,
              aX: -10.94
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2385,
              spinDirection: 209
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.87
          },
          index: 1,
          playId: '0b9fb0ca-127d-4627-a426-84185a48a4a7',
          pitchNumber: 1,
          startTime: '2018-04-10T19:12:38.011Z',
          endTime: '2018-04-10T19:12:46.586Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description:
              'Wild pitch by pitcher Carson Fulmer.   Mallex Smith to 3rd.    Wilson Ramos to 2nd.',
            event: 'Wild Pitch',
            eventType: 'wild_pitch',
            awayScore: 2,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          index: 2,
          actionPlayId: '0b9fb0ca-127d-4627-a426-84185a48a4a7',
          startTime: '2018-04-10T19:13:02.134Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: { id: 605480, link: '/api/v1/people/605480' }
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 88.0,
            endSpeed: 81.1,
            strikeZoneTop: 1.84,
            strikeZoneBottom: -1.21,
            coordinates: {
              aY: 24.48,
              aZ: -19.31,
              pfxX: -0.42,
              pfxZ: 7.69,
              pX: -0.6,
              pZ: 2.62,
              vX0: 3.57,
              vY0: -128.05,
              vZ0: -3.8,
              x: 139.92,
              y: 168.3,
              x0: -1.96,
              y0: 50.0,
              z0: 5.62,
              aX: -0.71
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2351,
              spinDirection: 180
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.78
          },
          hitData: {
            launchSpeed: 93.5,
            launchAngle: 37.0,
            totalDistance: 337.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 157.34, coordY: 93.77 }
          },
          index: 3,
          playId: '5a1e69a2-4a6e-41a4-b05b-a4d0b03c5eea',
          pitchNumber: 2,
          startTime: '2018-04-10T19:13:24.991Z',
          endTime: '2018-04-10T19:13:38.371Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:13:38.371Z',
      atBatIndex: 26
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Daniel Robertson called out on strikes.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 27,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2018-04-10T19:14:06.938Z',
        endTime: '2018-04-10T19:15:53.573Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 1, strikes: 3, outs: 2 },
      matchup: {
        batter: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnThird: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
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
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
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
              player: { id: 456078, link: '/api/v1/people/456078' },
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
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 84.2,
            strikeZoneTop: 2.55,
            strikeZoneBottom: -1.11,
            coordinates: {
              aY: 30.42,
              aZ: -11.16,
              pfxX: -4.18,
              pfxZ: 11.56,
              pX: 0.55,
              pZ: 2.14,
              vX0: 7.77,
              vY0: -134.34,
              vZ0: -6.94,
              x: 96.0,
              y: 180.85,
              x0: -1.84,
              y0: 50.0,
              z0: 5.56,
              aX: -7.6
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2371,
              spinDirection: 196
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.97
          },
          index: 0,
          playId: 'b350f9ae-e035-4537-989a-2058844466c6',
          pitchNumber: 1,
          startTime: '2018-04-10T19:14:21.214Z',
          endTime: '2018-04-10T19:14:26.419Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 86.5,
            endSpeed: 80.6,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 21.82,
              aZ: -25.87,
              pfxX: 1.36,
              pfxZ: 3.86,
              pX: 0.74,
              pZ: 2.17,
              vX0: 5.66,
              vY0: -125.93,
              vZ0: -3.47,
              x: 88.84,
              y: 180.26,
              x0: -1.7,
              y0: 50.0,
              z0: 5.62,
              aX: 2.21
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2405,
              spinDirection: 151
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.92
          },
          index: 1,
          playId: 'a8d91e6a-86f0-4991-84fc-78a0a1b35b2a',
          pitchNumber: 2,
          startTime: '2018-04-10T19:14:49.342Z',
          endTime: '2018-04-10T19:14:54.447Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 87.7,
            endSpeed: 80.9,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 24.9,
              aZ: -25.85,
              pfxX: 0.41,
              pfxZ: 3.83,
              pX: 1.16,
              pZ: 2.11,
              vX0: 6.84,
              vY0: -127.42,
              vZ0: -4.01,
              x: 72.66,
              y: 181.87,
              x0: -1.6,
              y0: 50.0,
              z0: 5.73,
              aX: 0.68
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2512,
              spinDirection: 160
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.73
          },
          index: 2,
          playId: 'fec4fdfd-9c29-4177-94ae-1ba525ac0496',
          pitchNumber: 3,
          startTime: '2018-04-10T19:15:17.136Z',
          endTime: '2018-04-10T19:15:22.775Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 1, strikes: 3, outs: 1 },
          pitchData: {
            startSpeed: 92.1,
            endSpeed: 84.0,
            strikeZoneTop: 3.51,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 29.61,
              aZ: -14.63,
              pfxX: -5.1,
              pfxZ: 9.72,
              pX: -0.91,
              pZ: 1.44,
              vX0: 4.09,
              vY0: -133.74,
              vZ0: -8.06,
              x: 151.78,
              y: 199.7,
              x0: -1.8,
              y0: 50.0,
              z0: 5.55,
              aX: -9.21
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2374,
              spinDirection: 207
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.8
          },
          index: 3,
          playId: '63277297-ed14-4d89-acdf-6e2b9183d421',
          pitchNumber: 4,
          startTime: '2018-04-10T19:15:47.333Z',
          endTime: '2018-04-10T19:15:53.573Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:15:53.573Z',
      atBatIndex: 27
    },
    {
      result: {
        type: 'atBat',
        event: 'Hit By Pitch',
        eventType: 'hit_by_pitch',
        description: 'Denard Span hit by pitch.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 28,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2018-04-10T19:16:21.377Z',
        endTime: '2018-04-10T19:17:36.842Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 11
      },
      count: { balls: 1, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        postOnThird: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Hit By Pitch',
            eventType: 'hit_by_pitch',
            movementReason: null,
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 80.3,
            endSpeed: 74.8,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 20.05,
              aZ: -36.05,
              pfxX: 4.85,
              pfxZ: -2.77,
              pX: 0.36,
              pZ: 1.86,
              vX0: 3.52,
              vY0: -116.96,
              vZ0: -0.97,
              x: 103.21,
              y: 188.59,
              x0: -1.79,
              y0: 50.0,
              z0: 5.63,
              aX: 6.78
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2537,
              spinDirection: 62
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.67
          },
          index: 0,
          playId: '7e387536-4bd0-4580-a575-16f6b28d2d72',
          pitchNumber: 1,
          startTime: '2018-04-10T19:16:28.574Z',
          endTime: '2018-04-10T19:16:34.614Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 82.6,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 20.97,
              aZ: -24.04,
              pfxX: 0.59,
              pfxZ: 4.78,
              pX: 1.03,
              pZ: 1.77,
              vX0: 7.04,
              vY0: -128.24,
              vZ0: -4.86,
              x: 77.64,
              y: 190.96,
              x0: -1.8,
              y0: 50.0,
              z0: 5.51,
              aX: 1.01
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2428,
              spinDirection: 164
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.61
          },
          index: 1,
          playId: 'bc77242c-99f7-4666-9d20-c58fe0186f50',
          pitchNumber: 2,
          startTime: '2018-04-10T19:16:59.605Z',
          endTime: '2018-04-10T19:17:04.210Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'H', description: 'Hit By Pitch' },
            description: 'Hit By Pitch',
            code: 'H',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 81.4,
            strikeZoneTop: 3.11,
            strikeZoneBottom: 1.43,
            coordinates: {
              aY: 22.14,
              aZ: -24.68,
              pfxX: 0.32,
              pfxZ: 4.54,
              pX: 2.13,
              pZ: 0.81,
              vX0: 9.26,
              vY0: -126.7,
              vZ0: -6.86,
              x: 35.83,
              y: 216.84,
              x0: -1.59,
              y0: 50.0,
              z0: 5.49,
              aX: 0.53
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2439,
              spinDirection: 161
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.75
          },
          index: 2,
          playId: '3bc7ab57-6118-4327-bacc-7d94bb58a419',
          pitchNumber: 3,
          startTime: '2018-04-10T19:17:32.238Z',
          endTime: '2018-04-10T19:17:36.842Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:17:36.842Z',
      atBatIndex: 28
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Joey Wendle walks.   Denard Span to 2nd.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 29,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2018-04-10T19:18:15.066Z',
        endTime: '2018-04-10T19:20:00.286Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 0, outs: 2 },
      matchup: {
        batter: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        postOnSecond: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        postOnThird: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Loaded'
        }
      },
      pitchIndex: [0, 1, 2, 3],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: 'r_adv_force',
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 88.0,
            endSpeed: 82.1,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 22.63,
              aZ: -27.37,
              pfxX: 3.18,
              pfxZ: 2.85,
              pX: 1.27,
              pZ: 1.79,
              vX0: 6.73,
              vY0: -128.03,
              vZ0: -4.2,
              x: 68.64,
              y: 190.32,
              x0: -1.79,
              y0: 50.0,
              z0: 5.56,
              aX: 5.37
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2464,
              spinDirection: 123
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.77
          },
          index: 0,
          playId: '2e27d5f6-23a3-47f1-98bb-f59044716785',
          pitchNumber: 1,
          startTime: '2018-04-10T19:18:25.858Z',
          endTime: '2018-04-10T19:18:30.596Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 84.7,
            endSpeed: 77.9,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 24.35,
              aZ: -26.0,
              pfxX: -8.35,
              pfxZ: 4.03,
              pX: -0.08,
              pZ: 0.43,
              vX0: 7.03,
              vY0: -123.01,
              vZ0: -6.53,
              x: 119.88,
              y: 227.05,
              x0: -1.89,
              y0: 50.0,
              z0: 5.33,
              aX: -12.8
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1390,
              spinDirection: 245
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.93
          },
          index: 1,
          playId: 'd7332f75-54b1-442f-8d2b-d3feaa5fd84a',
          pitchNumber: 2,
          startTime: '2018-04-10T19:18:49.148Z',
          endTime: '2018-04-10T19:18:55.688Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 89.8,
            endSpeed: 83.1,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 25.3,
              aZ: -24.1,
              pfxX: 0.31,
              pfxZ: 4.64,
              pX: 1.31,
              pZ: 1.43,
              vX0: 7.89,
              vY0: -130.49,
              vZ0: -5.9,
              x: 67.05,
              y: 200.14,
              x0: -1.78,
              y0: 50.0,
              z0: 5.52,
              aX: 0.53
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2456,
              spinDirection: 163
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.97
          },
          index: 2,
          playId: 'f1e46b08-38a6-4357-b4be-1e1ac2c56f26',
          pitchNumber: 3,
          startTime: '2018-04-10T19:19:23.249Z',
          endTime: '2018-04-10T19:19:26.919Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 4, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 88.2,
            endSpeed: 82.0,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 23.71,
              aZ: -26.42,
              pfxX: 1.71,
              pfxZ: 3.4,
              pX: 0.23,
              pZ: 1.53,
              vX0: 4.75,
              vY0: -128.43,
              vZ0: -4.97,
              x: 108.34,
              y: 197.42,
              x0: -1.86,
              y0: 50.0,
              z0: 5.52,
              aX: 2.89
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2397,
              spinDirection: 143
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.81
          },
          index: 3,
          playId: 'f0143356-6a08-4a7c-9fdb-9b411b04e62b',
          pitchNumber: 4,
          startTime: '2018-04-10T19:19:54.580Z',
          endTime: '2018-04-10T19:20:00.286Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:20:00.286Z',
      atBatIndex: 29
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Carlos Gomez strikes out swinging.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 30,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2018-04-10T19:20:31.210Z',
        endTime: '2018-04-10T19:25:26.979Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 3, strikes: 3, outs: 3 },
      matchup: {
        batter: {
          id: 460576,
          fullName: 'Carlos Gomez',
          link: '/api/v1/people/460576'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [0, 1, 2, 3, 4, 5, 6, 7],
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
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 7
          },
          credits: [
            {
              player: { id: 456078, link: '/api/v1/people/456078' },
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
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 86.3,
            endSpeed: 80.0,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 22.87,
              aZ: -25.49,
              pfxX: -9.15,
              pfxZ: 4.17,
              pX: 0.52,
              pZ: 0.09,
              vX0: 8.59,
              vY0: -125.14,
              vZ0: -8.17,
              x: 97.08,
              y: 236.29,
              x0: -1.75,
              y0: 50.0,
              z0: 5.46,
              aX: -14.65
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1483,
              spinDirection: 247
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.77
          },
          index: 0,
          playId: '22ac21d1-b1c3-47c6-9851-1ae04542575a',
          pitchNumber: 1,
          startTime: '2018-04-10T19:20:50.803Z',
          endTime: '2018-04-10T19:20:58.577Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 89.1,
            endSpeed: 82.8,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 23.89,
              aZ: -23.84,
              pfxX: 0.95,
              pfxZ: 4.84,
              pX: 1.38,
              pZ: 1.64,
              vX0: 7.71,
              vY0: -129.61,
              vZ0: -5.41,
              x: 64.34,
              y: 194.46,
              x0: -1.74,
              y0: 50.0,
              z0: 5.54,
              aX: 1.63
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2349,
              spinDirection: 158
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.96
          },
          index: 1,
          playId: 'c45dee71-52b2-4690-aaa7-aefe390d66f6',
          pitchNumber: 2,
          startTime: '2018-04-10T19:21:30.476Z',
          endTime: '2018-04-10T19:21:35.915Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 88.4,
            endSpeed: 81.9,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 24.8,
              aZ: -24.46,
              pfxX: 1.71,
              pfxZ: 4.57,
              pX: 0.57,
              pZ: 1.02,
              vX0: 5.46,
              vY0: -128.59,
              vZ0: -6.48,
              x: 95.17,
              y: 211.36,
              x0: -1.79,
              y0: 50.0,
              z0: 5.45,
              aX: 2.89
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2395,
              spinDirection: 149
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.8
          },
          index: 2,
          playId: 'c284935c-4224-4f41-9a48-d330c4644c18',
          pitchNumber: 3,
          startTime: '2018-04-10T19:22:03.976Z',
          endTime: '2018-04-10T19:22:09.481Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 85.9,
            strikeZoneTop: 2.4,
            strikeZoneBottom: -0.9,
            coordinates: {
              aY: 27.72,
              aZ: -14.32,
              pfxX: -4.19,
              pfxZ: 9.51,
              pX: -0.61,
              pZ: 2.34,
              vX0: 4.82,
              vY0: -135.73,
              vZ0: -6.14,
              x: 140.06,
              y: 175.61,
              x0: -1.85,
              y0: 50.0,
              z0: 5.62,
              aX: -7.88
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2411,
              spinDirection: 202
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.25
          },
          index: 3,
          playId: 'e17ba6a0-7c6a-4104-8b5b-c5497658cc6f',
          pitchNumber: 4,
          startTime: '2018-04-10T19:22:36.041Z',
          endTime: '2018-04-10T19:22:41.614Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 85.4,
            endSpeed: 78.9,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 23.27,
              aZ: -27.5,
              pfxX: -8.16,
              pfxZ: 2.97,
              pX: -1.03,
              pZ: 2.01,
              vX0: 4.58,
              vY0: -124.26,
              vZ0: -3.13,
              x: 156.32,
              y: 184.45,
              x0: -1.83,
              y0: 50.0,
              z0: 5.56,
              aX: -12.84
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1349,
              spinDirection: 250
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.71
          },
          index: 4,
          playId: '5ff3f462-cbca-4331-b7c0-2d0faecd75c7',
          pitchNumber: 5,
          startTime: '2018-04-10T19:23:16.281Z',
          endTime: '2018-04-10T19:23:24.089Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.8,
            endSpeed: 80.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 26.05,
              aZ: -25.53,
              pfxX: 2.74,
              pfxZ: 4.03,
              pX: 1.5,
              pZ: 2.3,
              vX0: 7.18,
              vY0: -127.59,
              vZ0: -2.95,
              x: 59.85,
              y: 176.68,
              x0: -1.7,
              y0: 50.0,
              z0: 5.48,
              aX: 4.51
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2489,
              spinDirection: 136
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.74
          },
          index: 5,
          playId: 'd2752613-96a8-431c-979e-54637582fa44',
          pitchNumber: 6,
          startTime: '2018-04-10T19:24:02.728Z',
          endTime: '2018-04-10T19:24:09.568Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.1,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 29.4,
              aZ: -14.41,
              pfxX: -3.24,
              pfxZ: 9.73,
              pX: -1.37,
              pZ: 4.52,
              vX0: 2.54,
              vY0: -134.35,
              vZ0: -0.67,
              x: 169.1,
              y: 116.72,
              x0: -1.9,
              y0: 50.0,
              z0: 5.8,
              aX: -5.91
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2442,
              spinDirection: 196
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.06
          },
          index: 6,
          playId: '69e96b4d-e144-4eb9-896b-823d161c9189',
          pitchNumber: 7,
          startTime: '2018-04-10T19:24:44.069Z',
          endTime: '2018-04-10T19:24:49.007Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 3, strikes: 3, outs: 2 },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 84.4,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 29.35,
              aZ: -12.5,
              pfxX: -4.8,
              pfxZ: 10.78,
              pX: 0.21,
              pZ: 2.35,
              vX0: 6.56,
              vY0: -134.33,
              vZ0: -6.06,
              x: 108.93,
              y: 175.22,
              x0: -1.64,
              y0: 50.0,
              z0: 5.53,
              aX: -8.76
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2419,
              spinDirection: 201
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.07
          },
          index: 7,
          playId: '646cf297-4dcc-4511-bdbf-92bd7da50c84',
          pitchNumber: 8,
          startTime: '2018-04-10T19:25:22.040Z',
          endTime: '2018-04-10T19:25:26.979Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:25:26.979Z',
      atBatIndex: 30
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Avisail Garcia grounds out, shortstop Adeiny Hechavarria to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 31,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2018-04-10T19:27:52.086Z',
        endTime: '2018-04-10T19:28:23.188Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 541645,
          fullName: 'Avisail Garcia',
          link: '/api/v1/people/541645'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1],
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: [
            {
              player: { id: 588751, link: '/api/v1/people/588751' },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 78.1,
            endSpeed: 72.2,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 22.12,
              aZ: -41.9,
              pfxX: -1.31,
              pfxZ: -7.49,
              pX: 0.21,
              pZ: 1.74,
              vX0: -2.67,
              vY0: -113.59,
              vZ0: -2.12,
              x: 108.94,
              y: 191.77,
              x0: 1.57,
              y0: 50.0,
              z0: 6.88,
              aX: -1.7
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2518,
              spinDirection: 347
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.49,
            extension: 5.93
          },
          index: 0,
          playId: '574fcd75-7e89-46ff-8700-d336a1d196db',
          pitchNumber: 1,
          startTime: '2018-04-10T19:28:00.799Z',
          endTime: '2018-04-10T19:28:04.603Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.5,
            endSpeed: 85.8,
            strikeZoneTop: 2.38,
            strikeZoneBottom: -0.73,
            coordinates: {
              aY: 29.01,
              aZ: -14.53,
              pfxX: 2.96,
              pfxZ: 9.38,
              pX: -0.05,
              pZ: 3.6,
              vX0: -4.97,
              vY0: -136.12,
              vZ0: -5.64,
              x: 119.04,
              y: 141.69,
              x0: 1.41,
              y0: 50.0,
              z0: 6.69,
              aX: 5.57
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2279,
              spinDirection: 164
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.65
          },
          hitData: {
            launchSpeed: 93.6,
            launchAngle: -17.0,
            totalDistance: 13.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: { coordX: 109.5, coordY: 145.85 }
          },
          index: 1,
          playId: 'ba5dce91-1b67-40d9-aa0b-5ac169628f94',
          pitchNumber: 2,
          startTime: '2018-04-10T19:28:14.780Z',
          endTime: '2018-04-10T19:28:23.188Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:28:23.188Z',
      atBatIndex: 31
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Jose Abreu strikes out swinging.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 32,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2018-04-10T19:28:44.572Z',
        endTime: '2018-04-10T19:30:40.258Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 3, strikes: 3, outs: 2 },
      matchup: {
        batter: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
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
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 85.5,
            strikeZoneTop: 3.56,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 32.1,
              aZ: -10.06,
              pfxX: 2.45,
              pfxZ: 11.76,
              pX: 0.74,
              pZ: 2.81,
              vX0: -3.17,
              vY0: -136.78,
              vZ0: -8.29,
              x: 88.66,
              y: 162.98,
              x0: 1.6,
              y0: 50.0,
              z0: 6.58,
              aX: 4.6
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2337,
              spinDirection: 169
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.55
          },
          index: 0,
          playId: 'e1b15850-880a-4a05-876c-5e33ba2e732a',
          pitchNumber: 1,
          startTime: '2018-04-10T19:28:53.986Z',
          endTime: '2018-04-10T19:28:58.924Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.0,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 31.07,
              aZ: -17.71,
              pfxX: 4.31,
              pfxZ: 7.64,
              pX: -0.19,
              pZ: 3.05,
              vX0: -5.77,
              vY0: -136.92,
              vZ0: -6.35,
              x: 123.89,
              y: 155.89,
              x0: 1.39,
              y0: 50.0,
              z0: 6.62,
              aX: 8.15
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2236,
              spinDirection: 152
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.86
          },
          index: 1,
          playId: 'f33598f4-a988-44f0-9961-1712072efc2f',
          pitchNumber: 2,
          startTime: '2018-04-10T19:29:08.433Z',
          endTime: '2018-04-10T19:29:14.006Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 78.5,
            endSpeed: 72.6,
            strikeZoneTop: 3.71,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 22.47,
              aZ: -38.89,
              pfxX: -3.5,
              pfxZ: -5.14,
              pX: -1.13,
              pZ: 0.95,
              vX0: -4.68,
              vY0: -114.0,
              vZ0: -4.23,
              x: 159.98,
              y: 212.85,
              x0: 1.41,
              y0: 50.0,
              z0: 6.7,
              aX: -4.57
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2442,
              spinDirection: 322
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.49,
            extension: 5.55
          },
          index: 2,
          playId: 'b0b351ed-a542-4aeb-835b-d1ec41ff88b7',
          pitchNumber: 3,
          startTime: '2018-04-10T19:29:29.955Z',
          endTime: '2018-04-10T19:29:35.627Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 93.9,
            endSpeed: 86.1,
            strikeZoneTop: 3.56,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 29.43,
              aZ: -15.01,
              pfxX: 1.49,
              pfxZ: 9.01,
              pX: 0.66,
              pZ: 5.06,
              vX0: -2.92,
              vY0: -136.94,
              vZ0: -1.71,
              x: 91.69,
              y: 102.07,
              x0: 1.55,
              y0: 50.0,
              z0: 6.72,
              aX: 2.84
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2213,
              spinDirection: 172
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.94
          },
          index: 3,
          playId: '6ab6d121-6589-4051-a9e9-27c59d58016a',
          pitchNumber: 4,
          startTime: '2018-04-10T19:29:50.142Z',
          endTime: '2018-04-10T19:29:54.346Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 94.0,
            endSpeed: 85.8,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 31.19,
              aZ: -12.01,
              pfxX: 1.31,
              pfxZ: 10.65,
              pX: 1.65,
              pZ: 3.97,
              vX0: -0.18,
              vY0: -136.96,
              vZ0: -5.09,
              x: 54.01,
              y: 131.62,
              x0: 1.55,
              y0: 50.0,
              z0: 6.68,
              aX: 2.48
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2277,
              spinDirection: 172
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.55
          },
          index: 4,
          playId: 'dbbe94b3-4ad1-4697-b784-3199c4e47c25',
          pitchNumber: 5,
          startTime: '2018-04-10T19:30:11.663Z',
          endTime: '2018-04-10T19:30:15.233Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'W', description: 'Swinging Strike (Blocked)' },
            description: 'Swinging Strike (Blocked)',
            code: 'W',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 3, strikes: 3, outs: 1 },
          pitchData: {
            startSpeed: 86.1,
            endSpeed: 80.1,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 23.89,
              aZ: -31.92,
              pfxX: -1.7,
              pfxZ: 0.16,
              pX: -0.45,
              pZ: 0.77,
              vX0: -4.22,
              vY0: -125.19,
              vZ0: -7.77,
              x: 134.26,
              y: 218.13,
              x0: 1.47,
              y0: 50.0,
              z0: 6.5,
              aX: -2.72
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinDirection: 285
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.29
          },
          index: 5,
          playId: 'de9d87a7-aaca-4087-b68b-95226901baee',
          pitchNumber: 6,
          startTime: '2018-04-10T19:30:35.921Z',
          endTime: '2018-04-10T19:30:40.258Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:30:40.258Z',
      atBatIndex: 32
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Matt Davidson walks.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 33,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2018-04-10T19:31:05.581Z',
        endTime: '2018-04-10T19:33:01.366Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 571602,
              fullName: 'Matt Davidson',
              link: '/api/v1/people/571602'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 87.9,
            endSpeed: 81.9,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 22.26,
              aZ: -19.14,
              pfxX: 7.97,
              pfxZ: 7.74,
              pX: 0.48,
              pZ: 1.84,
              vX0: -5.75,
              vY0: -127.91,
              vZ0: -7.77,
              x: 98.64,
              y: 189.13,
              x0: 1.7,
              y0: 50.0,
              z0: 6.38,
              aX: 13.43
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1864,
              spinDirection: 133
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.4
          },
          index: 0,
          playId: 'ca08cbce-a61b-4ab2-a660-02919429ff1d',
          pitchNumber: 1,
          startTime: '2018-04-10T19:31:10.422Z',
          endTime: '2018-04-10T19:31:15.060Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 87.4,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 26.77,
              aZ: -16.47,
              pfxX: 0.63,
              pfxZ: 8.09,
              pX: 0.81,
              pZ: 4.05,
              vX0: -2.15,
              vY0: -137.57,
              vZ0: -4.16,
              x: 86.17,
              y: 129.35,
              x0: 1.51,
              y0: 50.0,
              z0: 6.68,
              aX: 1.22
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2282,
              spinDirection: 176
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.85
          },
          index: 1,
          playId: '0eabadb7-44a3-4efd-be5a-c6df4a001131',
          pitchNumber: 2,
          startTime: '2018-04-10T19:31:31.042Z',
          endTime: '2018-04-10T19:31:35.747Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 86.3,
            endSpeed: 80.9,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 21.84,
              aZ: -30.86,
              pfxX: -1.94,
              pfxZ: 0.81,
              pX: -0.27,
              pZ: 0.78,
              vX0: -3.52,
              vY0: -125.55,
              vZ0: -8.14,
              x: 127.24,
              y: 217.68,
              x0: 1.4,
              y0: 50.0,
              z0: 6.53,
              aX: -3.14
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2266,
              spinDirection: 268
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.25
          },
          index: 2,
          playId: '454542c5-cba5-4429-a508-40e2c2191aa2',
          pitchNumber: 3,
          startTime: '2018-04-10T19:31:48.326Z',
          endTime: '2018-04-10T19:31:55.033Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 88.1,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 28.73,
              aZ: -14.22,
              pfxX: 3.33,
              pfxZ: 9.06,
              pX: 1.62,
              pZ: 4.15,
              vX0: -1.21,
              vY0: -139.27,
              vZ0: -4.42,
              x: 55.26,
              y: 126.7,
              x0: 1.62,
              y0: 50.0,
              z0: 6.69,
              aX: 6.6
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2246,
              spinDirection: 159
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.6
          },
          index: 3,
          playId: 'e750d39f-3c38-4835-b9a5-f5431a828f37',
          pitchNumber: 4,
          startTime: '2018-04-10T19:32:13.585Z',
          endTime: '2018-04-10T19:32:17.722Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 85.9,
            endSpeed: 80.6,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 21.61,
              aZ: -31.8,
              pfxX: -1.47,
              pfxZ: 0.23,
              pX: -0.37,
              pZ: 0.64,
              vX0: -4.03,
              vY0: -124.99,
              vZ0: -8.13,
              x: 131.08,
              y: 221.54,
              x0: 1.44,
              y0: 50.0,
              z0: 6.5,
              aX: -2.37
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2405,
              spinDirection: 284
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.33
          },
          index: 4,
          playId: 'a85a75c2-0afe-47d1-b840-ce73feb1e00c',
          pitchNumber: 5,
          startTime: '2018-04-10T19:32:34.472Z',
          endTime: '2018-04-10T19:32:41.613Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.1,
            endSpeed: 80.8,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.43,
            coordinates: {
              aY: 23.3,
              aZ: -18.18,
              pfxX: 7.73,
              pfxZ: 8.5,
              pX: 1.58,
              pZ: 2.11,
              vX0: -2.98,
              vY0: -126.82,
              vZ0: -7.21,
              x: 56.82,
              y: 181.9,
              x0: 1.76,
              y0: 50.0,
              z0: 6.41,
              aX: 12.73
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1847,
              spinDirection: 136
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.66
          },
          index: 5,
          playId: 'd3abd972-fd34-4e22-936e-dcf1df83b7c6',
          pitchNumber: 6,
          startTime: '2018-04-10T19:32:57.128Z',
          endTime: '2018-04-10T19:33:01.366Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:33:01.366Z',
      atBatIndex: 33
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Welington Castillo grounds out softly, pitcher Blake Snell to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 34,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2018-04-10T19:33:23.936Z',
        endTime: '2018-04-10T19:37:09.280Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 3, strikes: 2, outs: 3 },
      matchup: {
        batter: {
          id: 456078,
          fullName: 'Welington Castillo',
          link: '/api/v1/people/456078'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [1, 2, 3, 4, 5, 6],
      actionIndex: [0],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: null,
            outBase: '1B',
            isOut: true,
            outNumber: 3
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 456078,
              fullName: 'Welington Castillo',
              link: '/api/v1/people/456078'
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
              player: { id: 605483, link: '/api/v1/people/605483' },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Injury Delay.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 3,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T19:34:57.959Z',
          isPitch: false,
          type: 'action',
          player: { id: 456078, link: '/api/v1/people/456078' }
        },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 95.0,
            endSpeed: 87.8,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.48,
            coordinates: {
              aY: 27.71,
              aZ: -15.4,
              pfxX: 1.32,
              pfxZ: 8.56,
              pX: -0.01,
              pZ: 3.37,
              vX0: -4.93,
              vY0: -138.33,
              vZ0: -5.78,
              x: 117.46,
              y: 147.83,
              x0: 1.61,
              y0: 50.0,
              z0: 6.5,
              aX: 2.59
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2168,
              spinDirection: 174
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.7
          },
          index: 1,
          playId: '9dc76bb0-1581-45de-9114-5ca18c39d79f',
          pitchNumber: 1,
          startTime: '2018-04-10T19:33:38.570Z',
          endTime: '2018-04-10T19:33:42.140Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'W', description: 'Swinging Strike (Blocked)' },
            description: 'Swinging Strike (Blocked)',
            code: 'W',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 79.3,
            endSpeed: 73.7,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.32,
            coordinates: {
              aY: 22.22,
              aZ: -41.29,
              pfxX: -3.7,
              pfxZ: -6.78,
              pX: -0.36,
              pZ: 0.64,
              vX0: -3.18,
              vY0: -115.39,
              vZ0: -4.56,
              x: 130.79,
              y: 221.44,
              x0: 1.51,
              y0: 50.0,
              z0: 6.64,
              aX: -4.96
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2397,
              spinDirection: 330
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 6.4
          },
          index: 2,
          playId: '94b91cc0-e005-4351-a5da-69dbeaa598ce',
          pitchNumber: 2,
          startTime: '2018-04-10T19:33:58.890Z',
          endTime: '2018-04-10T19:34:04.529Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 82.0,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 27.42,
              aZ: -26.74,
              pfxX: -2.8,
              pfxZ: 3.24,
              pX: -0.16,
              pZ: -0.74,
              vX0: -3.24,
              vY0: -128.75,
              vZ0: -12.31,
              x: 123.05,
              y: 258.83,
              x0: 1.48,
              y0: 50.0,
              z0: 6.18,
              aX: -4.68
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2458,
              spinDirection: 240
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.45
          },
          index: 3,
          playId: 'e23baad9-5616-4ba4-b513-c4275807afb9',
          pitchNumber: 3,
          startTime: '2018-04-10T19:34:34.759Z',
          endTime: '2018-04-10T19:34:42.300Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 85.3,
            endSpeed: 78.9,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.48,
            coordinates: {
              aY: 25.0,
              aZ: -33.03,
              pfxX: -2.01,
              pfxZ: -0.55,
              pX: -0.79,
              pZ: 1.16,
              vX0: -5.37,
              vY0: -124.04,
              vZ0: -6.28,
              x: 147.04,
              y: 207.51,
              x0: 1.67,
              y0: 50.0,
              z0: 6.48,
              aX: -3.13
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2382,
              spinDirection: 294
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.4
          },
          index: 4,
          playId: '96dcb5d5-230f-4f93-87f2-d6daa3b61907',
          pitchNumber: 4,
          startTime: '2018-04-10T19:36:02.714Z',
          endTime: '2018-04-10T19:36:07.085Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 94.4,
            endSpeed: 86.6,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 29.57,
              aZ: -15.11,
              pfxX: 2.43,
              pfxZ: 8.88,
              pX: 0.61,
              pZ: 3.89,
              vX0: -3.57,
              vY0: -137.52,
              vZ0: -4.48,
              x: 93.61,
              y: 133.63,
              x0: 1.61,
              y0: 50.0,
              z0: 6.57,
              aX: 4.67
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2304,
              spinDirection: 166
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.36
          },
          index: 5,
          playId: 'c4b90461-033d-42f0-b735-368a00341bdc',
          pitchNumber: 5,
          startTime: '2018-04-10T19:36:29.040Z',
          endTime: '2018-04-10T19:36:32.243Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 94.7,
            endSpeed: 86.9,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.32,
            coordinates: {
              aY: 30.11,
              aZ: -15.82,
              pfxX: 3.82,
              pfxZ: 8.5,
              pX: -0.23,
              pZ: 2.46,
              vX0: -6.3,
              vY0: -137.68,
              vZ0: -7.94,
              x: 125.63,
              y: 172.46,
              x0: 1.59,
              y0: 50.0,
              z0: 6.45,
              aX: 7.34
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2328,
              spinDirection: 158
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.83
          },
          hitData: {
            trajectory: 'ground_ball',
            hardness: 'soft',
            location: '1',
            coordinates: { coordX: 121.0, coordY: 190.07 }
          },
          index: 6,
          playId: '4e445a04-5cac-4065-bfb6-9e758afac054',
          pitchNumber: 6,
          startTime: '2018-04-10T19:36:58.603Z',
          endTime: '2018-04-10T19:37:09.280Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:37:09.280Z',
      atBatIndex: 34
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description: 'C.J. Cron lines out to left fielder Nicky Delmonico.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 35,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2018-04-10T19:39:43.717Z',
        endTime: '2018-04-10T19:40:03.354Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
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
      pitchIndex: [0],
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
            outNumber: 1
          },
          details: {
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: [
            {
              player: { id: 547170, link: '/api/v1/people/547170' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 85.8,
            endSpeed: 79.6,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 22.39,
              aZ: -26.04,
              pfxX: 3.16,
              pfxZ: 3.84,
              pX: 0.57,
              pZ: 2.52,
              vX0: 4.66,
              vY0: -124.9,
              vZ0: -2.53,
              x: 95.13,
              y: 170.68,
              x0: -1.72,
              y0: 50.0,
              z0: 5.66,
              aX: 5.05
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2442,
              spinDirection: 135
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.8
          },
          hitData: {
            launchSpeed: 79.2,
            launchAngle: 27.0,
            totalDistance: 283.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: { coordX: 75.99, coordY: 91.17 }
          },
          index: 0,
          playId: '1844a6e4-17b5-42ef-a860-856fcd176fa6',
          pitchNumber: 1,
          startTime: '2018-04-10T19:39:55.380Z',
          endTime: '2018-04-10T19:40:03.354Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:40:03.354Z',
      atBatIndex: 35
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Matt Duffy singles on a line drive to right fielder Avisail Garcia.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 36,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2018-04-10T19:40:32.718Z',
        endTime: '2018-04-10T19:41:14.125Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 622110,
          fullName: 'Matt Duffy',
          link: '/api/v1/people/622110'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 622110,
          fullName: 'Matt Duffy',
          link: '/api/v1/people/622110'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: [
            {
              player: { id: 541645, link: '/api/v1/people/541645' },
              position: {
                code: '9',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'RF'
              },
              credit: 'f_fielded_ball'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 83.2,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 29.28,
              aZ: -13.45,
              pfxX: -6.34,
              pfxZ: 10.56,
              pX: -0.79,
              pZ: 1.94,
              vX0: 4.46,
              vY0: -132.58,
              vZ0: -6.88,
              x: 147.04,
              y: 186.43,
              x0: -1.67,
              y0: 50.0,
              z0: 5.56,
              aX: -11.24
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2372,
              spinDirection: 210
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.92
          },
          index: 0,
          playId: '9be08121-4a88-4fb5-a100-745f8e3c5fb7',
          pitchNumber: 1,
          startTime: '2018-04-10T19:40:40.124Z',
          endTime: '2018-04-10T19:40:44.562Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 80.6,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 24.53,
              aZ: -24.2,
              pfxX: 1.4,
              pfxZ: 4.85,
              pX: 0.25,
              pZ: 1.9,
              vX0: 4.46,
              vY0: -127.04,
              vZ0: -4.55,
              x: 107.68,
              y: 187.51,
              x0: -1.71,
              y0: 50.0,
              z0: 5.62,
              aX: 2.31
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2398,
              spinDirection: 156
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.73
          },
          hitData: {
            launchSpeed: 96.0,
            launchAngle: 13.0,
            totalDistance: 235.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: { coordX: 173.48, coordY: 113.25 }
          },
          index: 1,
          playId: 'a7657412-d4a2-4b10-978e-ddabb9dd4732',
          pitchNumber: 2,
          startTime: '2018-04-10T19:41:00.778Z',
          endTime: '2018-04-10T19:41:14.125Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:41:14.125Z',
      atBatIndex: 36
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description:
          'Mallex Smith lines out, pitcher Carson Fulmer to first baseman Jose Abreu.   Matt Duffy to 2nd.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 37,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2018-04-10T19:41:35.246Z',
        endTime: '2018-04-10T19:44:19.844Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnSecond: {
          id: 622110,
          fullName: 'Matt Duffy',
          link: '/api/v1/people/622110'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0, 1],
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
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 608334, link: '/api/v1/people/608334' },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 547989, link: '/api/v1/people/547989' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: 'r_adv_play',
            runner: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 84.9,
            endSpeed: 77.7,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.48,
            coordinates: {
              aY: 24.9,
              aZ: -20.69,
              pfxX: -8.04,
              pfxZ: 7.45,
              pX: -0.84,
              pZ: 2.06,
              vX0: 5.02,
              vY0: -123.44,
              vZ0: -4.18,
              x: 149.03,
              y: 183.13,
              x0: -1.86,
              y0: 50.0,
              z0: 5.52,
              aX: -12.38
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1637,
              spinDirection: 226
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.79
          },
          index: 0,
          playId: 'fad1bc23-7e01-414c-b6aa-81bc190267b9',
          pitchNumber: 1,
          startTime: '2018-04-10T19:41:43.988Z',
          endTime: '2018-04-10T19:41:49.093Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 75.5,
            strikeZoneTop: 3.2,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 22.95,
              aZ: -38.76,
              pfxX: 1.92,
              pfxZ: -4.65,
              pX: 0.41,
              pZ: 0.23,
              vX0: 4.48,
              vY0: -118.37,
              vZ0: -4.26,
              x: 101.23,
              y: 232.48,
              x0: -1.75,
              y0: 50.0,
              z0: 5.61,
              aX: 2.72
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2614,
              spinDirection: 26
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.74
          },
          index: 1,
          playId: 'fd3f6c1c-d96e-4969-a325-23369cf17496',
          pitchNumber: 2,
          startTime: '2018-04-10T19:42:08.346Z',
          endTime: '2018-04-10T19:42:14.252Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 85.2,
            endSpeed: 78.3,
            strikeZoneTop: 1.92,
            strikeZoneBottom: -1.1,
            coordinates: {
              aY: 24.55,
              aZ: -27.4,
              pfxX: -6.97,
              pfxZ: 3.07,
              pX: -0.94,
              pZ: 1.5,
              vX0: 4.33,
              vY0: -123.87,
              vZ0: -4.49,
              x: 152.9,
              y: 198.19,
              x0: -1.81,
              y0: 50.0,
              z0: 5.63,
              aX: -10.84
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1506,
              spinDirection: 247
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.71
          },
          index: 2,
          playId: 'f9db4cea-d85e-4f6c-b6bc-3bb6dea52e1c',
          pitchNumber: 3,
          startTime: '2018-04-10T19:42:42.213Z',
          endTime: '2018-04-10T19:42:46.417Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          index: 3,
          playId: '47037705-5a4d-4ac2-a6c3-f3849419dea0',
          startTime: '2018-04-10T19:43:10.442Z',
          endTime: '2018-04-10T19:43:15.613Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          index: 4,
          playId: 'dd124892-bac0-4c45-acc1-87004c3b84c7',
          startTime: '2018-04-10T19:43:35.566Z',
          endTime: '2018-04-10T19:43:44.075Z',
          isPitch: false,
          type: 'pickoff'
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
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 91.5,
            endSpeed: 83.2,
            strikeZoneTop: 3.16,
            strikeZoneBottom: 1.32,
            coordinates: {
              aY: 29.82,
              aZ: -15.86,
              pfxX: -5.63,
              pfxZ: 9.16,
              pX: 0.05,
              pZ: 2.96,
              vX0: 6.83,
              vY0: -132.97,
              vZ0: -3.97,
              x: 114.97,
              y: 158.9,
              x0: -1.82,
              y0: 50.0,
              z0: 5.63,
              aX: -10.02
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2353,
              spinDirection: 208
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.84
          },
          hitData: {
            launchSpeed: 96.4,
            launchAngle: 2.0,
            totalDistance: 80.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '1',
            coordinates: { coordX: 130.69, coordY: 184.62 }
          },
          index: 5,
          playId: '32fbaf41-8d60-4553-b68f-888fd4d05a6c',
          pitchNumber: 4,
          startTime: '2018-04-10T19:44:11.736Z',
          endTime: '2018-04-10T19:44:19.844Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:44:19.844Z',
      atBatIndex: 37
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Wilson Ramos singles on a line drive to right fielder Avisail Garcia.   Matt Duffy scores.',
        rbi: 1,
        awayScore: 4,
        homeScore: 0
      },
      about: {
        atBatIndex: 38,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2018-04-10T19:46:05.313Z',
        endTime: '2018-04-10T19:46:32.410Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 0, outs: 2 },
      matchup: {
        batter: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [1],
      actionIndex: [0],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: [
            {
              player: { id: 541645, link: '/api/v1/people/541645' },
              position: {
                code: '9',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'RF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_play',
            runner: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            responsiblePitcher: {
              id: 608334,
              link: '/api/v1/people/608334'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 1
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Injury Delay.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 3,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T19:46:06.313Z',
          isPitch: false,
          type: 'action',
          player: { id: 467092, link: '/api/v1/people/467092' }
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 88.4,
            endSpeed: 81.5,
            strikeZoneTop: 2.14,
            strikeZoneBottom: -1.08,
            coordinates: {
              aY: 25.68,
              aZ: -20.14,
              pfxX: 1.87,
              pfxZ: 7.16,
              pX: 0.0,
              pZ: 1.11,
              vX0: 4.43,
              vY0: -128.57,
              vZ0: -7.13,
              x: 116.92,
              y: 208.76,
              x0: -1.98,
              y0: 50.0,
              z0: 5.47,
              aX: 3.14
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2497,
              spinDirection: 159
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.12
          },
          hitData: {
            launchSpeed: 87.9,
            launchAngle: 19.0,
            totalDistance: 271.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: { coordX: 159.51, coordY: 91.04 }
          },
          index: 1,
          playId: 'f4067fda-b227-427f-9943-88db65b5d0bc',
          pitchNumber: 1,
          startTime: '2018-04-10T19:46:21.332Z',
          endTime: '2018-04-10T19:46:32.410Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:46:32.410Z',
      atBatIndex: 38
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Adeiny Hechavarria walks.   Wilson Ramos to 2nd.',
        rbi: 0,
        awayScore: 4,
        homeScore: 0
      },
      about: {
        atBatIndex: 39,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2018-04-10T19:47:00.211Z',
        endTime: '2018-04-10T19:49:38.929Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        postOnSecond: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: 'r_adv_force',
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 90.8,
            endSpeed: 82.3,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.46,
            coordinates: {
              aY: 30.02,
              aZ: -12.43,
              pfxX: -6.15,
              pfxZ: 11.36,
              pX: 0.64,
              pZ: 1.27,
              vX0: 8.02,
              vY0: -131.54,
              vZ0: -8.58,
              x: 92.76,
              y: 204.58,
              x0: -1.66,
              y0: 50.0,
              z0: 5.51,
              aX: -10.69
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2238,
              spinDirection: 206
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.56
          },
          index: 0,
          playId: '6b1023a0-4539-4e3d-a301-53e171920cb0',
          pitchNumber: 1,
          startTime: '2018-04-10T19:47:10.181Z',
          endTime: '2018-04-10T19:47:13.851Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 88.8,
            endSpeed: 82.1,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.46,
            coordinates: {
              aY: 25.4,
              aZ: -22.34,
              pfxX: 0.5,
              pfxZ: 5.81,
              pX: 1.74,
              pZ: 0.82,
              vX0: 8.77,
              vY0: -128.95,
              vZ0: -7.55,
              x: 50.72,
              y: 216.71,
              x0: -1.76,
              y0: 50.0,
              z0: 5.49,
              aX: 0.84
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2534,
              spinDirection: 163
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.95
          },
          index: 1,
          playId: '70d7c340-5bd6-41ce-b3bb-6aa456a35a9b',
          pitchNumber: 2,
          startTime: '2018-04-10T19:47:30.935Z',
          endTime: '2018-04-10T19:47:36.006Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 84.6,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 30.15,
              aZ: -11.76,
              pfxX: -4.45,
              pfxZ: 11.08,
              pX: -1.15,
              pZ: 2.88,
              vX0: 3.55,
              vY0: -135.08,
              vZ0: -4.96,
              x: 160.73,
              y: 160.93,
              x0: -1.9,
              y0: 50.0,
              z0: 5.57,
              aX: -8.2
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2403,
              spinDirection: 200
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.14
          },
          index: 2,
          playId: '1d763a80-c3c4-46ef-a46f-4442602e09d4',
          pitchNumber: 3,
          startTime: '2018-04-10T19:47:59.930Z',
          endTime: '2018-04-10T19:48:04.802Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 91.4,
            endSpeed: 83.4,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.46,
            coordinates: {
              aY: 28.86,
              aZ: -14.04,
              pfxX: -4.73,
              pfxZ: 10.19,
              pX: 0.27,
              pZ: 1.94,
              vX0: 6.93,
              vY0: -132.68,
              vZ0: -6.69,
              x: 106.56,
              y: 186.45,
              x0: -1.76,
              y0: 50.0,
              z0: 5.52,
              aX: -8.41
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2288,
              spinDirection: 202
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.8
          },
          index: 3,
          playId: 'a95a04b2-6c20-4a48-936a-359cd75e9f3c',
          pitchNumber: 4,
          startTime: '2018-04-10T19:48:25.990Z',
          endTime: '2018-04-10T19:48:30.394Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 84.9,
            strikeZoneTop: 3.13,
            strikeZoneBottom: 1.28,
            coordinates: {
              aY: 29.2,
              aZ: -13.11,
              pfxX: -4.3,
              pfxZ: 10.33,
              pX: -0.19,
              pZ: 2.22,
              vX0: 5.97,
              vY0: -134.95,
              vZ0: -6.27,
              x: 124.41,
              y: 178.79,
              x0: -1.88,
              y0: 50.0,
              z0: 5.5,
              aX: -7.94
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2375,
              spinDirection: 200
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.84
          },
          index: 4,
          playId: 'f29d9e8f-ed65-4985-9942-663ac6e77881',
          pitchNumber: 5,
          startTime: '2018-04-10T19:48:50.247Z',
          endTime: '2018-04-10T19:48:58.489Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 4, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 91.6,
            endSpeed: 83.4,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.44,
            coordinates: {
              aY: 29.91,
              aZ: -14.19,
              pfxX: -2.81,
              pfxZ: 10.04,
              pX: -2.23,
              pZ: 3.39,
              vX0: 0.48,
              vY0: -133.36,
              vZ0: -3.37,
              x: 201.93,
              y: 147.14,
              x0: -2.05,
              y0: 50.0,
              z0: 5.7,
              aX: -5.04
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2326,
              spinDirection: 195
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.15
          },
          index: 5,
          playId: 'd365f732-1416-48fa-8ade-49463f4c45d9',
          pitchNumber: 6,
          startTime: '2018-04-10T19:49:33.257Z',
          endTime: '2018-04-10T19:49:38.929Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:49:38.929Z',
      atBatIndex: 39
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Daniel Robertson singles on a soft ground ball to third baseman Tyler Saladino.   Wilson Ramos to 3rd.    Adeiny Hechavarria to 2nd.',
        rbi: 0,
        awayScore: 4,
        homeScore: 0
      },
      about: {
        atBatIndex: 40,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2018-04-10T19:50:30.351Z',
        endTime: '2018-04-10T19:52:48.852Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 2, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 608334,
          fullName: 'Carson Fulmer',
          link: '/api/v1/people/608334'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        postOnSecond: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        postOnThird: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Loaded'
        }
      },
      pitchIndex: [1, 2, 3, 4, 5],
      actionIndex: [0],
      runnerIndex: [0, 1, 2],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 573135, link: '/api/v1/people/573135' },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_fielded_ball'
            }
          ]
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 4,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T19:50:31.351Z',
          isPitch: false,
          type: 'action',
          player: { id: 621002, link: '/api/v1/people/621002' }
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 86.3,
            endSpeed: 79.8,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.47,
            coordinates: {
              aY: 23.86,
              aZ: -23.13,
              pfxX: 0.94,
              pfxZ: 5.63,
              pX: 0.12,
              pZ: 1.55,
              vX0: 4.39,
              vY0: -125.57,
              vZ0: -5.13,
              x: 112.55,
              y: 196.81,
              x0: -1.77,
              y0: 50.0,
              z0: 5.49,
              aX: 1.52
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2373,
              spinDirection: 164
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.02
          },
          index: 1,
          playId: '4ad81d97-3af7-44bf-9563-d8f69c6e5ae4',
          pitchNumber: 1,
          startTime: '2018-04-10T19:50:39.256Z',
          endTime: '2018-04-10T19:50:43.694Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 83.9,
            endSpeed: 76.3,
            strikeZoneTop: 3.25,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 26.88,
              aZ: -28.17,
              pfxX: -10.21,
              pfxZ: 2.7,
              pX: -0.82,
              pZ: 0.8,
              vX0: 5.69,
              vY0: -121.81,
              vZ0: -5.21,
              x: 148.39,
              y: 217.05,
              x0: -1.88,
              y0: 50.0,
              z0: 5.44,
              aX: -15.14
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1522,
              spinDirection: 257
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.46,
            extension: 5.64
          },
          index: 2,
          playId: '6194a995-a41d-49c1-bb6b-94df09c05852',
          pitchNumber: 2,
          startTime: '2018-04-10T19:51:02.112Z',
          endTime: '2018-04-10T19:51:06.450Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 91.6,
            endSpeed: 83.6,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 29.03,
              aZ: -15.67,
              pfxX: -4.34,
              pfxZ: 9.17,
              pX: -1.36,
              pZ: 3.55,
              vX0: 2.81,
              vY0: -133.39,
              vZ0: -2.77,
              x: 168.78,
              y: 143.15,
              x0: -1.86,
              y0: 50.0,
              z0: 5.73,
              aX: -7.81
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2332,
              spinDirection: 204
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.26
          },
          index: 3,
          playId: '6cff3018-ed5a-4d64-90fc-bdb97f540abe',
          pitchNumber: 3,
          startTime: '2018-04-10T19:51:34.411Z',
          endTime: '2018-04-10T19:51:40.050Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.1,
            endSpeed: 80.2,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 25.13,
              aZ: -26.82,
              pfxX: 1.44,
              pfxZ: 3.28,
              pX: -0.22,
              pZ: 2.56,
              vX0: 3.66,
              vY0: -126.8,
              vZ0: -2.16,
              x: 125.45,
              y: 169.78,
              x0: -1.87,
              y0: 50.0,
              z0: 5.55,
              aX: 2.35
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2430,
              spinDirection: 149
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.74
          },
          index: 4,
          playId: '0c38a45c-271c-4953-86f0-6a08ab8eba30',
          pitchNumber: 4,
          startTime: '2018-04-10T19:52:07.578Z',
          endTime: '2018-04-10T19:52:11.915Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 88.4,
            endSpeed: 81.6,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.33,
            coordinates: {
              aY: 25.12,
              aZ: -23.97,
              pfxX: 2.05,
              pfxZ: 4.87,
              pX: 0.25,
              pZ: 1.66,
              vX0: 4.27,
              vY0: -128.58,
              vZ0: -5.06,
              x: 107.62,
              y: 194.06,
              x0: -1.7,
              y0: 50.0,
              z0: 5.49,
              aX: 3.45
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2436,
              spinDirection: 150
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.02
          },
          hitData: {
            trajectory: 'ground_ball',
            hardness: 'soft',
            location: '5',
            coordinates: { coordX: 117.37, coordY: 190.07 }
          },
          index: 5,
          playId: '98fc86ab-b8a8-4af5-85ad-523d72162424',
          pitchNumber: 5,
          startTime: '2018-04-10T19:52:40.310Z',
          endTime: '2018-04-10T19:52:48.852Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:52:48.852Z',
      atBatIndex: 40
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Denard Span strikes out swinging.',
        rbi: 0,
        awayScore: 4,
        homeScore: 0
      },
      about: {
        atBatIndex: 41,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2018-04-10T19:55:04.334Z',
        endTime: '2018-04-10T19:58:34.831Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 2, strikes: 3, outs: 3 },
      matchup: {
        batter: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [2, 3, 4, 5, 6, 7],
      actionIndex: [0, 1],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: null,
            outBase: '1B',
            isOut: true,
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 7
          },
          credits: [
            {
              player: { id: 456078, link: '/api/v1/people/456078' },
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
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 4,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T19:55:05.334Z',
          endTime: '2018-04-10T19:55:06.334Z',
          isPitch: false,
          type: 'action',
          player: { id: 452655, link: '/api/v1/people/452655' }
        },
        {
          details: {
            description:
              'Pitching Change: Hector Santiago replaces Carson Fulmer.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 4,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 1,
          startTime: '2018-04-10T19:55:06.334Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 502327, link: '/api/v1/people/502327' },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 89.1,
            endSpeed: 81.1,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.82,
              aZ: -17.19,
              pfxX: 9.43,
              pfxZ: 8.86,
              pX: 1.45,
              pZ: 3.7,
              vX0: -4.63,
              vY0: -129.48,
              vZ0: -1.93,
              x: 61.7,
              y: 138.84,
              x0: 2.04,
              y0: 50.0,
              z0: 5.78,
              aX: 15.96
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2247,
              spinDirection: 134
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.52
          },
          index: 2,
          playId: 'beefea85-2aff-4375-8792-aa53065b89b6',
          pitchNumber: 1,
          startTime: '2018-04-10T19:55:22.739Z',
          endTime: '2018-04-10T19:55:27.511Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 89.0,
            endSpeed: 81.2,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 27.3,
              aZ: -17.22,
              pfxX: 9.52,
              pfxZ: 8.85,
              pX: 0.86,
              pZ: 2.98,
              vX0: -5.61,
              vY0: -129.28,
              vZ0: -3.6,
              x: 84.36,
              y: 158.17,
              x0: 1.82,
              y0: 50.0,
              z0: 5.72,
              aX: 16.09
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2241,
              spinDirection: 134
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.45
          },
          index: 3,
          playId: 'a22b1397-60a7-4e50-bed3-2c5a890325df',
          pitchNumber: 2,
          startTime: '2018-04-10T19:55:55.872Z',
          endTime: '2018-04-10T19:56:00.077Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 81.7,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 28.18,
              aZ: -18.61,
              pfxX: 9.73,
              pfxZ: 7.93,
              pX: 0.15,
              pZ: 2.57,
              vX0: -7.43,
              vY0: -130.21,
              vZ0: -4.3,
              x: 111.45,
              y: 169.29,
              x0: 1.78,
              y0: 50.0,
              z0: 5.66,
              aX: 16.66
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2262,
              spinDirection: 130
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.69
          },
          index: 4,
          playId: 'f3c5529e-bc4e-4121-a3e0-f348cb97302f',
          pitchNumber: 3,
          startTime: '2018-04-10T19:56:26.069Z',
          endTime: '2018-04-10T19:56:32.142Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 73.2,
            endSpeed: 67.5,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 19.12,
              aZ: -36.12,
              pfxX: -3.84,
              pfxZ: -3.47,
              pX: -0.86,
              pZ: 1.68,
              vX0: -5.06,
              vY0: -106.25,
              vZ0: -0.42,
              x: 149.75,
              y: 193.34,
              x0: 2.06,
              y0: 50.0,
              z0: 6.01,
              aX: -4.36
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2016,
              spinDirection: 305
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.53,
            extension: 5.25
          },
          index: 5,
          playId: '82708d28-ed0d-4307-9fa1-7f4cf4686896',
          pitchNumber: 4,
          startTime: '2018-04-10T19:57:00.203Z',
          endTime: '2018-04-10T19:57:04.908Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 83.6,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 27.18,
              aZ: -17.14,
              pfxX: 9.32,
              pfxZ: 8.44,
              pX: -0.57,
              pZ: 2.66,
              vX0: -8.83,
              vY0: -132.4,
              vZ0: -4.6,
              x: 138.74,
              y: 166.84,
              x0: 1.59,
              y0: 50.0,
              z0: 5.67,
              aX: 16.61
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2166,
              spinDirection: 134
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.64
          },
          index: 6,
          playId: '08727299-329d-4e91-81c6-a2d8fedb750e',
          pitchNumber: 5,
          startTime: '2018-04-10T19:57:45.015Z',
          endTime: '2018-04-10T19:57:51.922Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 3, outs: 2 },
          pitchData: {
            startSpeed: 90.4,
            endSpeed: 82.9,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 26.43,
              aZ: -14.48,
              pfxX: 9.08,
              pfxZ: 10.05,
              pX: 0.34,
              pZ: 3.94,
              vX0: -6.4,
              vY0: -131.5,
              vZ0: -2.25,
              x: 103.96,
              y: 132.41,
              x0: 1.62,
              y0: 50.0,
              z0: 5.87,
              aX: 15.99
            },
            breaks: {
              breakAngle: 44.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2210,
              spinDirection: 139
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.77
          },
          index: 7,
          playId: '1253c0a7-6ead-49fa-8c42-c4952c4ecd6f',
          pitchNumber: 6,
          startTime: '2018-04-10T19:58:30.060Z',
          endTime: '2018-04-10T19:58:34.831Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T19:58:34.831Z',
      atBatIndex: 41
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Nicky Delmonico walks.',
        rbi: 0,
        awayScore: 4,
        homeScore: 0
      },
      about: {
        atBatIndex: 42,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2018-04-10T20:01:04.587Z',
        endTime: '2018-04-10T20:02:36.406Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 0 },
      matchup: {
        batter: {
          id: 547170,
          fullName: 'Nicky Delmonico',
          link: '/api/v1/people/547170'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 547170,
          fullName: 'Nicky Delmonico',
          link: '/api/v1/people/547170'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 547170,
              fullName: 'Nicky Delmonico',
              link: '/api/v1/people/547170'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 76.8,
            endSpeed: 70.8,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 22.61,
              aZ: -41.91,
              pfxX: -3.36,
              pfxZ: -7.8,
              pX: -0.37,
              pZ: 1.53,
              vX0: -3.04,
              vY0: -111.78,
              vZ0: -2.12,
              x: 131.11,
              y: 197.34,
              x0: 1.45,
              y0: 50.0,
              z0: 6.85,
              aX: -4.2
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2397,
              spinDirection: 334
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.49,
            extension: 6.29
          },
          index: 0,
          playId: '23204ec4-3fea-431e-a7c0-ea87100d9a88',
          pitchNumber: 1,
          startTime: '2018-04-10T20:01:08.251Z',
          endTime: '2018-04-10T20:01:12.689Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 85.1,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.75,
              aZ: -13.05,
              pfxX: 2.72,
              pfxZ: 10.38,
              pX: -0.99,
              pZ: 2.29,
              vX0: -7.68,
              vY0: -134.78,
              vZ0: -8.64,
              x: 154.81,
              y: 176.82,
              x0: 1.54,
              y0: 50.0,
              z0: 6.46,
              aX: 5.0
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2275,
              spinDirection: 169
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.66
          },
          index: 1,
          playId: '18ffc9b2-b72e-40b8-9c34-71ba00337051',
          pitchNumber: 2,
          startTime: '2018-04-10T20:01:22.132Z',
          endTime: '2018-04-10T20:01:25.835Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 84.6,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 29.1,
              aZ: -11.37,
              pfxX: 3.46,
              pfxZ: 11.38,
              pX: -0.66,
              pZ: 2.58,
              vX0: -6.75,
              vY0: -134.38,
              vZ0: -8.42,
              x: 142.33,
              y: 169.14,
              x0: 1.43,
              y0: 50.0,
              z0: 6.56,
              aX: 6.32
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2212,
              spinDirection: 165
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.79
          },
          index: 2,
          playId: 'ff3b648f-4447-40e1-8919-37878e2eb8a6',
          pitchNumber: 3,
          startTime: '2018-04-10T20:01:38.381Z',
          endTime: '2018-04-10T20:01:42.953Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.0,
            endSpeed: 84.9,
            strikeZoneTop: 3.57,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 29.87,
              aZ: -12.22,
              pfxX: 3.51,
              pfxZ: 10.78,
              pX: -0.08,
              pZ: 3.7,
              vX0: -5.55,
              vY0: -135.3,
              vZ0: -5.66,
              x: 120.19,
              y: 138.93,
              x0: 1.54,
              y0: 50.0,
              z0: 6.67,
              aX: 6.49
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2248,
              spinDirection: 164
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.7
          },
          index: 3,
          playId: 'd5b94225-35e8-42e8-b5b7-0f5976ae6d77',
          pitchNumber: 4,
          startTime: '2018-04-10T20:01:52.929Z',
          endTime: '2018-04-10T20:01:56.967Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 85.0,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 28.48,
              aZ: -15.3,
              pfxX: 3.57,
              pfxZ: 9.18,
              pX: 0.07,
              pZ: 2.5,
              vX0: -5.02,
              vY0: -134.56,
              vZ0: -7.95,
              x: 114.39,
              y: 171.31,
              x0: 1.49,
              y0: 50.0,
              z0: 6.57,
              aX: 6.57
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2207,
              spinDirection: 160
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.64
          },
          index: 4,
          playId: '621e84d4-2478-479e-ac08-330e406ba891',
          pitchNumber: 5,
          startTime: '2018-04-10T20:02:09.546Z',
          endTime: '2018-04-10T20:02:15.585Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 85.3,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 27.82,
              aZ: -13.83,
              pfxX: 5.41,
              pfxZ: 9.88,
              pX: -0.46,
              pZ: 3.79,
              vX0: -7.1,
              vY0: -135.01,
              vZ0: -4.85,
              x: 134.59,
              y: 136.54,
              x0: 1.49,
              y0: 50.0,
              z0: 6.57,
              aX: 10.05
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2224,
              spinDirection: 153
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.38
          },
          index: 5,
          playId: 'ed66bacd-54a1-4638-81f8-ee698a7e2961',
          pitchNumber: 6,
          startTime: '2018-04-10T20:02:32.602Z',
          endTime: '2018-04-10T20:02:36.406Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:02:36.406Z',
      atBatIndex: 42
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Tim Anderson strikes out swinging.',
        rbi: 0,
        awayScore: 4,
        homeScore: 0
      },
      about: {
        atBatIndex: 43,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2018-04-10T20:03:08.741Z',
        endTime: '2018-04-10T20:04:15.905Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 0, strikes: 3, outs: 1 },
      matchup: {
        batter: {
          id: 641313,
          fullName: 'Tim Anderson',
          link: '/api/v1/people/641313'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 547170,
          fullName: 'Nicky Delmonico',
          link: '/api/v1/people/547170'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2],
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.6,
            endSpeed: 85.5,
            strikeZoneTop: 3.23,
            strikeZoneBottom: 1.43,
            coordinates: {
              aY: 30.54,
              aZ: -13.51,
              pfxX: 1.62,
              pfxZ: 9.95,
              pX: 0.89,
              pZ: 3.4,
              vX0: -2.78,
              vY0: -136.24,
              vZ0: -6.14,
              x: 83.17,
              y: 147.06,
              x0: 1.71,
              y0: 50.0,
              z0: 6.62,
              aX: 3.04
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2173,
              spinDirection: 172
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.48
          },
          index: 0,
          playId: 'a0556121-b160-458f-8ea8-4f9a7ffbaf49',
          pitchNumber: 1,
          startTime: '2018-04-10T20:03:14.177Z',
          endTime: '2018-04-10T20:03:17.447Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 79.4,
            endSpeed: 73.2,
            strikeZoneTop: 2.91,
            strikeZoneBottom: 1.15,
            coordinates: {
              aY: 23.24,
              aZ: -43.67,
              pfxX: -1.33,
              pfxZ: -8.59,
              pX: -0.1,
              pZ: 1.89,
              vX0: -3.43,
              vY0: -115.47,
              vZ0: -1.5,
              x: 120.84,
              y: 187.71,
              x0: 1.58,
              y0: 50.0,
              z0: 6.79,
              aX: -1.78
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2512,
              spinDirection: 347
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.99
          },
          index: 1,
          playId: '4821606f-2b27-4ce9-8220-aa3a91c78b5d',
          pitchNumber: 2,
          startTime: '2018-04-10T20:03:38.668Z',
          endTime: '2018-04-10T20:03:44.074Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 3, outs: 0 },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 86.0,
            strikeZoneTop: 2.96,
            strikeZoneBottom: 1.2,
            coordinates: {
              aY: 29.43,
              aZ: -15.21,
              pfxX: 2.12,
              pfxZ: 8.99,
              pX: 0.66,
              pZ: 2.99,
              vX0: -3.26,
              vY0: -136.36,
              vZ0: -6.86,
              x: 92.0,
              y: 158.07,
              x0: 1.59,
              y0: 50.0,
              z0: 6.58,
              aX: 4.0
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2238,
              spinDirection: 168
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.72
          },
          index: 2,
          playId: '264a4d4d-ad32-46a6-9f0e-524cb21af6a1',
          pitchNumber: 3,
          startTime: '2018-04-10T20:04:09.833Z',
          endTime: '2018-04-10T20:04:15.905Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:04:15.905Z',
      atBatIndex: 43
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Tyler Saladino hits a ground-rule double (1) on a fly ball to left-center field.   Nicky Delmonico to 3rd.',
        rbi: 0,
        awayScore: 4,
        homeScore: 0
      },
      about: {
        atBatIndex: 44,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2018-04-10T20:04:41.299Z',
        endTime: '2018-04-10T20:06:38.248Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
      },
      count: { balls: 3, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 573135,
          fullName: 'Tyler Saladino',
          link: '/api/v1/people/573135'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnSecond: {
          id: 573135,
          fullName: 'Tyler Saladino',
          link: '/api/v1/people/573135'
        },
        postOnThird: {
          id: 547170,
          fullName: 'Nicky Delmonico',
          link: '/api/v1/people/547170'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Double',
            eventType: 'double',
            movementReason: null,
            runner: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Double',
            eventType: 'double',
            movementReason: 'r_adv_force',
            runner: {
              id: 547170,
              fullName: 'Nicky Delmonico',
              link: '/api/v1/people/547170'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.2,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 29.93,
              aZ: -12.65,
              pfxX: 3.55,
              pfxZ: 10.31,
              pX: 0.3,
              pZ: 1.98,
              vX0: -4.62,
              vY0: -136.73,
              vZ0: -9.69,
              x: 105.56,
              y: 185.21,
              x0: 1.55,
              y0: 50.0,
              z0: 6.44,
              aX: 6.73
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2237,
              spinDirection: 162
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.69
          },
          index: 0,
          playId: '96acbad0-ff77-4b96-8c75-c48bb0cebffa',
          pitchNumber: 1,
          startTime: '2018-04-10T20:04:47.203Z',
          endTime: '2018-04-10T20:04:50.540Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 85.1,
            endSpeed: 78.4,
            strikeZoneTop: 3.07,
            strikeZoneBottom: 1.29,
            coordinates: {
              aY: 25.26,
              aZ: -31.94,
              pfxX: -2.01,
              pfxZ: 0.15,
              pX: 0.7,
              pZ: 2.12,
              vX0: -1.82,
              vY0: -123.96,
              vZ0: -4.51,
              x: 90.46,
              y: 181.49,
              x0: 1.7,
              y0: 50.0,
              z0: 6.64,
              aX: -3.12
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2296,
              spinDirection: 277
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.46
          },
          index: 1,
          playId: 'f43715d6-776e-4168-9799-b26079e1d8aa',
          pitchNumber: 2,
          startTime: '2018-04-10T20:05:11.694Z',
          endTime: '2018-04-10T20:05:15.198Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 93.5,
            endSpeed: 85.5,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.36,
            coordinates: {
              aY: 30.59,
              aZ: -12.81,
              pfxX: 2.15,
              pfxZ: 10.37,
              pX: 1.12,
              pZ: 2.02,
              vX0: -2.03,
              vY0: -135.96,
              vZ0: -9.53,
              x: 74.15,
              y: 184.33,
              x0: 1.6,
              y0: 50.0,
              z0: 6.46,
              aX: 4.01
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2228,
              spinDirection: 168
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.8
          },
          index: 2,
          playId: '24ee0a0c-ed42-4e25-bc67-98cf94a32d28',
          pitchNumber: 3,
          startTime: '2018-04-10T20:05:37.253Z',
          endTime: '2018-04-10T20:05:40.323Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 87.6,
            endSpeed: 80.4,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 26.12,
              aZ: -16.43,
              pfxX: 9.35,
              pfxZ: 9.6,
              pX: 0.88,
              pZ: 1.49,
              vX0: -5.38,
              vY0: -127.29,
              vZ0: -8.82,
              x: 83.39,
              y: 198.51,
              x0: 1.81,
              y0: 50.0,
              z0: 6.3,
              aX: 15.35
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1817,
              spinDirection: 134
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.7
          },
          index: 3,
          playId: '09381ab5-ed68-475d-be39-65c324c05d8f',
          pitchNumber: 4,
          startTime: '2018-04-10T20:06:01.211Z',
          endTime: '2018-04-10T20:06:05.048Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 93.5,
            endSpeed: 86.2,
            strikeZoneTop: 3.1,
            strikeZoneBottom: 1.24,
            coordinates: {
              aY: 27.95,
              aZ: -14.74,
              pfxX: 1.99,
              pfxZ: 9.25,
              pX: -0.39,
              pZ: 2.44,
              vX0: -6.01,
              vY0: -136.01,
              vZ0: -8.01,
              x: 131.76,
              y: 172.81,
              x0: 1.59,
              y0: 50.0,
              z0: 6.44,
              aX: 3.76
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2234,
              spinDirection: 171
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.65
          },
          hitData: {
            launchSpeed: 98.1,
            launchAngle: 24.0,
            totalDistance: 378.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            coordinates: { coordX: 97.24, coordY: 41.81 }
          },
          index: 4,
          playId: '005088d1-3c40-4142-91c3-92b2483dcdcd',
          pitchNumber: 5,
          startTime: '2018-04-10T20:06:27.570Z',
          endTime: '2018-04-10T20:06:38.248Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:06:38.248Z',
      atBatIndex: 44
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Adam Engel grounds out, second baseman Joey Wendle to first baseman C.  J. Cron.   Nicky Delmonico scores.    Tyler Saladino to 3rd.',
        rbi: 1,
        awayScore: 4,
        homeScore: 1
      },
      about: {
        atBatIndex: 45,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2018-04-10T20:07:11.519Z',
        endTime: '2018-04-10T20:09:55.311Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 641553,
          fullName: 'Adam Engel',
          link: '/api/v1/people/641553'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnThird: {
          id: 573135,
          fullName: 'Tyler Saladino',
          link: '/api/v1/people/573135'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [1, 2, 3, 4],
      actionIndex: [0],
      runnerIndex: [0, 1, 2],
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '3B',
            start: '3B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: 'r_adv_play',
            runner: {
              id: 547170,
              fullName: 'Nicky Delmonico',
              link: '/api/v1/people/547170'
            },
            responsiblePitcher: {
              id: 605483,
              link: '/api/v1/people/605483'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: 'r_adv_play',
            runner: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 4,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 0,
          startTime: '2018-04-10T20:07:25.986Z',
          isPitch: false,
          type: 'action',
          player: { id: 641553, link: '/api/v1/people/641553' }
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 77.4,
            endSpeed: 72.0,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 20.09,
              aZ: -40.5,
              pfxX: -2.16,
              pfxZ: -6.46,
              pX: 0.34,
              pZ: 1.97,
              vX0: -2.15,
              vY0: -112.74,
              vZ0: -1.65,
              x: 103.96,
              y: 185.68,
              x0: 1.59,
              y0: 50.0,
              z0: 6.79,
              aX: -2.79
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2366,
              spinDirection: 339
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.49,
            extension: 5.92
          },
          index: 1,
          playId: 'f4bbfe40-82c8-4285-aebb-2a5093d98a3a',
          pitchNumber: 1,
          startTime: '2018-04-10T20:08:20.650Z',
          endTime: '2018-04-10T20:08:24.721Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 30.49,
              aZ: -13.4,
              pfxX: 3.82,
              pfxZ: 9.88,
              pX: -0.15,
              pZ: 3.76,
              vX0: -5.76,
              vY0: -137.02,
              vZ0: -5.18,
              x: 122.7,
              y: 137.15,
              x0: 1.48,
              y0: 50.0,
              z0: 6.6,
              aX: 7.26
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2281,
              spinDirection: 161
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 7.16
          },
          index: 2,
          playId: '5d437833-5d4f-4a75-ad4e-821c9a80a932',
          pitchNumber: 2,
          startTime: '2018-04-10T20:08:44.807Z',
          endTime: '2018-04-10T20:08:48.344Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 86.0,
            endSpeed: 80.1,
            strikeZoneTop: 3.67,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 23.45,
              aZ: -28.09,
              pfxX: -2.14,
              pfxZ: 2.56,
              pX: -0.6,
              pZ: 1.09,
              vX0: -4.77,
              vY0: -125.2,
              vZ0: -7.69,
              x: 139.93,
              y: 209.23,
              x0: 1.6,
              y0: 50.0,
              z0: 6.48,
              aX: -3.43
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2277,
              spinDirection: 236
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.57
          },
          index: 3,
          playId: '339ad65d-9d7b-4555-8190-32496493218e',
          pitchNumber: 3,
          startTime: '2018-04-10T20:09:12.935Z',
          endTime: '2018-04-10T20:09:18.875Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 80.2,
            endSpeed: 74.3,
            strikeZoneTop: 3.67,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 22.18,
              aZ: -41.1,
              pfxX: -2.99,
              pfxZ: -6.47,
              pX: 0.9,
              pZ: 2.0,
              vX0: -0.4,
              vY0: -116.75,
              vZ0: -2.1,
              x: 82.83,
              y: 184.87,
              x0: 1.46,
              y0: 50.0,
              z0: 6.78,
              aX: -4.12
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2488,
              spinDirection: 335
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 6.0
          },
          hitData: {
            launchSpeed: 91.3,
            launchAngle: -2.0,
            totalDistance: 29.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 154.32, coordY: 156.15 }
          },
          index: 4,
          playId: '38131dc5-b8f4-48f5-ad52-94b7685c5bec',
          pitchNumber: 4,
          startTime: '2018-04-10T20:09:46.969Z',
          endTime: '2018-04-10T20:09:55.311Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:09:55.311Z',
      atBatIndex: 45
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Yoan Moncada strikes out swinging.',
        rbi: 0,
        awayScore: 4,
        homeScore: 1
      },
      about: {
        atBatIndex: 46,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2018-04-10T20:10:26.408Z',
        endTime: '2018-04-10T20:11:46.656Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 2, strikes: 3, outs: 3 },
      matchup: {
        batter: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
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
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 87.5,
            endSpeed: 81.8,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 21.36,
              aZ: -19.18,
              pfxX: 6.93,
              pfxZ: 7.75,
              pX: 0.56,
              pZ: 2.18,
              vX0: -5.5,
              vY0: -127.48,
              vZ0: -6.87,
              x: 95.74,
              y: 180.05,
              x0: 1.82,
              y0: 50.0,
              z0: 6.37,
              aX: 11.62
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1772,
              spinDirection: 138
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 6.71
          },
          index: 0,
          playId: 'd3da0bf7-ecc9-44a8-8447-6e1db82733bb',
          pitchNumber: 1,
          startTime: '2018-04-10T20:10:26.976Z',
          endTime: '2018-04-10T20:10:31.214Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 93.6,
            endSpeed: 86.6,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 26.48,
              aZ: -20.13,
              pfxX: 4.9,
              pfxZ: 6.3,
              pX: 1.25,
              pZ: 5.09,
              vX0: -2.63,
              vY0: -136.55,
              vZ0: -0.72,
              x: 69.36,
              y: 101.33,
              x0: 1.58,
              y0: 50.0,
              z0: 6.73,
              aX: 9.38
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2202,
              spinDirection: 143
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.53
          },
          index: 1,
          playId: '04a4d745-5944-4530-b1e4-acb557b60f3d',
          pitchNumber: 2,
          startTime: '2018-04-10T20:10:38.688Z',
          endTime: '2018-04-10T20:10:43.826Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 79.4,
            endSpeed: 72.8,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 24.64,
              aZ: -39.65,
              pfxX: -3.57,
              pfxZ: -5.62,
              pX: -0.13,
              pZ: 1.62,
              vX0: -2.48,
              vY0: -115.53,
              vZ0: -2.84,
              x: 122.13,
              y: 194.97,
              x0: 1.42,
              y0: 50.0,
              z0: 6.74,
              aX: -4.75
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2408,
              spinDirection: 325
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 6.15
          },
          index: 2,
          playId: '961e3bb7-7822-4a5c-be71-135e83287e5f',
          pitchNumber: 3,
          startTime: '2018-04-10T20:10:59.208Z',
          endTime: '2018-04-10T20:11:03.412Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 81.0,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 25.29,
              aZ: -28.22,
              pfxX: -1.84,
              pfxZ: 2.42,
              pX: -0.56,
              pZ: 0.49,
              vX0: -4.33,
              vY0: -126.91,
              vZ0: -9.4,
              x: 138.44,
              y: 225.65,
              x0: 1.4,
              y0: 50.0,
              z0: 6.48,
              aX: -3.0
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2229,
              spinDirection: 239
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.35
          },
          index: 3,
          playId: '0b312368-66a6-4429-ad20-c69547175c1d',
          pitchNumber: 4,
          startTime: '2018-04-10T20:11:17.860Z',
          endTime: '2018-04-10T20:11:25.034Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 3, outs: 2 },
          pitchData: {
            startSpeed: 80.8,
            endSpeed: 74.8,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 23.4,
              aZ: -42.64,
              pfxX: -1.41,
              pfxZ: -7.54,
              pX: -0.44,
              pZ: 0.96,
              vX0: -3.62,
              vY0: -117.45,
              vZ0: -4.1,
              x: 133.92,
              y: 212.98,
              x0: 1.31,
              y0: 50.0,
              z0: 6.71,
              aX: -1.96
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2413,
              spinDirection: 346
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.42
          },
          index: 4,
          playId: '2f6c7c71-4d23-4a8d-9dd7-835859e27004',
          pitchNumber: 5,
          startTime: '2018-04-10T20:11:40.349Z',
          endTime: '2018-04-10T20:11:46.656Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:11:46.656Z',
      atBatIndex: 46
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Joey Wendle called out on strikes.',
        rbi: 0,
        awayScore: 4,
        homeScore: 1
      },
      about: {
        atBatIndex: 47,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2018-04-10T20:13:56.933Z',
        endTime: '2018-04-10T20:15:37.686Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 2, strikes: 3, outs: 1 },
      matchup: {
        batter: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 456078, link: '/api/v1/people/456078' },
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
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 71.3,
            endSpeed: 66.0,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 17.83,
              aZ: -35.08,
              pfxX: -3.67,
              pfxZ: -2.7,
              pX: -2.33,
              pZ: 1.03,
              vX0: -8.13,
              vY0: -103.26,
              vZ0: -1.25,
              x: 205.71,
              y: 210.91,
              x0: 2.14,
              y0: 50.0,
              z0: 5.88,
              aX: -3.95
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2052,
              spinDirection: 297
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.55,
            extension: 4.6
          },
          index: 0,
          playId: '865047b8-dc51-40c7-8aca-70bf34bd4563',
          pitchNumber: 1,
          startTime: '2018-04-10T20:14:09.665Z',
          endTime: '2018-04-10T20:14:18.207Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 81.0,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 26.5,
              aZ: -16.22,
              pfxX: 8.89,
              pfxZ: 9.5,
              pX: -0.23,
              pZ: 2.66,
              vX0: -8.24,
              vY0: -128.69,
              vZ0: -4.59,
              x: 125.76,
              y: 166.9,
              x0: 1.86,
              y0: 50.0,
              z0: 5.72,
              aX: 14.92
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2098,
              spinDirection: 139
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.53
          },
          index: 1,
          playId: '3f83c150-c65d-4ba6-83f3-da73550bc686',
          pitchNumber: 2,
          startTime: '2018-04-10T20:14:28.384Z',
          endTime: '2018-04-10T20:14:31.821Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 89.2,
            endSpeed: 81.2,
            strikeZoneTop: 3.11,
            strikeZoneBottom: 1.37,
            coordinates: {
              aY: 27.73,
              aZ: -16.3,
              pfxX: 8.67,
              pfxZ: 9.39,
              pX: -0.16,
              pZ: 2.7,
              vX0: -7.83,
              vY0: -129.38,
              vZ0: -4.54,
              x: 122.93,
              y: 165.79,
              x0: 1.79,
              y0: 50.0,
              z0: 5.73,
              aX: 14.65
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2036,
              spinDirection: 139
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.51
          },
          index: 2,
          playId: 'f1b736dc-6082-47f6-9905-41a795f8e35a',
          pitchNumber: 3,
          startTime: '2018-04-10T20:14:50.573Z',
          endTime: '2018-04-10T20:14:56.312Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 83.4,
            endSpeed: 76.8,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 23.34,
              aZ: -26.08,
              pfxX: -0.74,
              pfxZ: 4.12,
              pX: -1.41,
              pZ: 1.19,
              vX0: -8.53,
              vY0: -120.86,
              vZ0: -5.09,
              x: 170.77,
              y: 206.54,
              x0: 2.26,
              y0: 50.0,
              z0: 5.61,
              aX: -1.1
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2160,
              spinDirection: 206
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.46,
            extension: 5.11
          },
          index: 3,
          playId: 'a43f8bef-cf16-4b84-b86f-cab6951d8a49',
          pitchNumber: 4,
          startTime: '2018-04-10T20:15:14.396Z',
          endTime: '2018-04-10T20:15:18.868Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 2, strikes: 3, outs: 0 },
          pitchData: {
            startSpeed: 90.9,
            endSpeed: 82.5,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 29.36,
              aZ: -14.11,
              pfxX: 8.83,
              pfxZ: 10.32,
              pX: -0.69,
              pZ: 3.16,
              vX0: -8.66,
              vY0: -131.84,
              vZ0: -4.02,
              x: 143.21,
              y: 153.59,
              x0: 1.5,
              y0: 50.0,
              z0: 5.75,
              aX: 15.46
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2212,
              spinDirection: 142
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.47
          },
          index: 4,
          playId: 'faf2cb91-ca64-40ac-aa9c-2bee7acfb1be',
          pitchNumber: 5,
          startTime: '2018-04-10T20:15:31.781Z',
          endTime: '2018-04-10T20:15:37.686Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:15:37.686Z',
      atBatIndex: 47
    },
    {
      result: {
        type: 'atBat',
        event: 'Home Run',
        eventType: 'home_run',
        description: 'Carlos Gomez homers (2) on a fly ball to center field.',
        rbi: 1,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 48,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2018-04-10T20:15:59.643Z',
        endTime: '2018-04-10T20:16:42.451Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 38
      },
      count: { balls: 1, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 460576,
          fullName: 'Carlos Gomez',
          link: '/api/v1/people/460576'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Home Run',
            eventType: 'home_run',
            movementReason: null,
            runner: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            responsiblePitcher: {
              id: 502327,
              link: '/api/v1/people/502327'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 1
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 83.3,
            endSpeed: 76.1,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 23.58,
              aZ: -18.97,
              pfxX: 9.91,
              pfxZ: 8.99,
              pX: -1.4,
              pZ: 1.33,
              vX0: -10.82,
              vY0: -120.5,
              vZ0: -6.26,
              x: 170.56,
              y: 202.52,
              x0: 1.86,
              y0: 50.0,
              z0: 5.64,
              aX: 14.56
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2011,
              spinDirection: 134
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.46,
            extension: 5.58
          },
          index: 0,
          playId: '45fbf490-0303-4849-860d-3858032c505d',
          pitchNumber: 1,
          startTime: '2018-04-10T20:16:04.547Z',
          endTime: '2018-04-10T20:16:08.951Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 90.6,
            endSpeed: 83.4,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 25.66,
              aZ: -17.39,
              pfxX: 8.22,
              pfxZ: 8.35,
              pX: 0.35,
              pZ: 2.29,
              vX0: -6.8,
              vY0: -131.62,
              vZ0: -5.47,
              x: 103.56,
              y: 176.87,
              x0: 1.89,
              y0: 50.0,
              z0: 5.67,
              aX: 14.55
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2091,
              spinDirection: 136
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.76
          },
          hitData: {
            launchSpeed: 109.1,
            launchAngle: 20.0,
            totalDistance: 424.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 88.3, coordY: 22.79 }
          },
          index: 1,
          playId: '0ecf3e40-920b-476e-a8d3-e046cb631a7e',
          pitchNumber: 2,
          startTime: '2018-04-10T20:16:18.828Z',
          endTime: '2018-04-10T20:16:42.451Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:16:42.451Z',
      atBatIndex: 48
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'C.J. Cron singles on a ground ball to right fielder Avisail Garcia.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 49,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2018-04-10T20:17:01.571Z',
        endTime: '2018-04-10T20:17:18.454Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: [
            {
              player: { id: 541645, link: '/api/v1/people/541645' },
              position: {
                code: '9',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'RF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 89.8,
            endSpeed: 82.2,
            strikeZoneTop: 2.32,
            strikeZoneBottom: -0.95,
            coordinates: {
              aY: 26.93,
              aZ: -15.18,
              pfxX: 7.81,
              pfxZ: 9.83,
              pX: 1.11,
              pZ: 2.55,
              vX0: -5.35,
              vY0: -130.48,
              vZ0: -5.17,
              x: 74.75,
              y: 170.04,
              x0: 2.17,
              y0: 50.0,
              z0: 5.69,
              aX: 13.49
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2204,
              spinDirection: 142
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.54
          },
          hitData: {
            launchSpeed: 96.4,
            launchAngle: -8.0,
            totalDistance: 17.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '9',
            coordinates: { coordX: 177.94, coordY: 114.36 }
          },
          index: 0,
          playId: '254b5deb-619c-4152-b7a3-074a7dd1c4da',
          pitchNumber: 1,
          startTime: '2018-04-10T20:17:04.640Z',
          endTime: '2018-04-10T20:17:18.454Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:17:18.454Z',
      atBatIndex: 49
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Matt Duffy flies out to center fielder Adam Engel.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 50,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2018-04-10T20:17:41.054Z',
        endTime: '2018-04-10T20:19:07.096Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 2, strikes: 1, outs: 2 },
      matchup: {
        batter: {
          id: 622110,
          fullName: 'Matt Duffy',
          link: '/api/v1/people/622110'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
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
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
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
              player: { id: 641553, link: '/api/v1/people/641553' },
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
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 88.5,
            endSpeed: 80.2,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 28.51,
              aZ: -13.96,
              pfxX: 8.66,
              pfxZ: 11.02,
              pX: -1.06,
              pZ: 2.29,
              vX0: -9.48,
              vY0: -128.28,
              vZ0: -6.14,
              x: 157.52,
              y: 177.07,
              x0: 1.57,
              y0: 50.0,
              z0: 5.81,
              aX: 14.32
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2104,
              spinDirection: 144
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.71
          },
          index: 0,
          playId: '818d12ff-a899-4d72-96e8-e790bb377f84',
          pitchNumber: 1,
          startTime: '2018-04-10T20:17:46.015Z',
          endTime: '2018-04-10T20:17:50.085Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 74.8,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 22.69,
              aZ: -25.65,
              pfxX: -2.97,
              pfxZ: 4.61,
              pX: -1.16,
              pZ: 1.99,
              vX0: -6.23,
              vY0: -118.23,
              vZ0: -3.48,
              x: 161.37,
              y: 185.0,
              x0: 1.89,
              y0: 50.0,
              z0: 5.84,
              aX: -4.2
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2112,
              spinDirection: 221
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.37
          },
          index: 1,
          playId: 'beadcc09-806a-47cb-ba3f-bff28f2a78bf',
          pitchNumber: 2,
          startTime: '2018-04-10T20:18:08.504Z',
          endTime: '2018-04-10T20:18:13.075Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 88.8,
            endSpeed: 81.1,
            strikeZoneTop: 3.47,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 26.56,
              aZ: -14.95,
              pfxX: 7.99,
              pfxZ: 10.2,
              pX: 0.9,
              pZ: 3.33,
              vX0: -5.09,
              vY0: -129.06,
              vZ0: -3.42,
              x: 82.65,
              y: 148.92,
              x0: 1.86,
              y0: 50.0,
              z0: 5.82,
              aX: 13.5
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2170,
              spinDirection: 143
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.63
          },
          index: 2,
          playId: 'ecee0e77-9413-43a5-b8b4-107cf8b233cb',
          pitchNumber: 3,
          startTime: '2018-04-10T20:18:31.126Z',
          endTime: '2018-04-10T20:18:35.831Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 80.9,
            endSpeed: 73.9,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 22.82,
              aZ: -19.8,
              pfxX: 7.99,
              pfxZ: 8.87,
              pX: -0.07,
              pZ: 2.37,
              vX0: -6.56,
              vY0: -117.52,
              vZ0: -3.46,
              x: 119.53,
              y: 174.77,
              x0: 1.73,
              y0: 50.0,
              z0: 5.7,
              aX: 11.14
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1826,
              spinDirection: 140
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.6
          },
          hitData: {
            launchSpeed: 99.2,
            launchAngle: 35.0,
            totalDistance: 352.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 124.83, coordY: 50.47 }
          },
          index: 3,
          playId: '051cd869-b04b-4fc7-8152-2db0e63cb136',
          pitchNumber: 4,
          startTime: '2018-04-10T20:18:53.916Z',
          endTime: '2018-04-10T20:19:07.096Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:19:07.096Z',
      atBatIndex: 50
    },
    {
      result: {
        type: 'atBat',
        event: 'Caught Stealing 2B',
        eventType: 'caught_stealing_2b',
        description:
          'C.J. Cron caught stealing 2nd base, catcher Welington Castillo to shortstop Tim Anderson.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 51,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2018-04-10T20:19:36.734Z',
        endTime: '2018-04-10T20:20:33.048Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 17
      },
      count: { balls: 2, strikes: 1, outs: 3 },
      matchup: {
        batter: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: null,
            outBase: '2B',
            isOut: true,
            outNumber: 3
          },
          details: {
            event: 'Caught Stealing 2B',
            eventType: 'caught_stealing_2b',
            movementReason: 'r_caught_stealing_2b',
            runner: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 456078, link: '/api/v1/people/456078' },
              position: {
                code: '2',
                name: 'Catcher',
                type: 'Catcher',
                abbreviation: 'C'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 641313, link: '/api/v1/people/641313' },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 70.5,
            endSpeed: 64.7,
            strikeZoneTop: 3.14,
            strikeZoneBottom: 1.33,
            coordinates: {
              aY: 16.94,
              aZ: -31.8,
              pfxX: -5.84,
              pfxZ: 0.35,
              pX: 0.81,
              pZ: 3.83,
              vX0: -1.28,
              vY0: -102.34,
              vZ0: 3.16,
              x: 86.26,
              y: 135.48,
              x0: 2.2,
              y0: 50.0,
              z0: 6.16,
              aX: -6.19
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 1906,
              spinDirection: 259
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.55,
            extension: 4.85
          },
          index: 0,
          playId: '490d8f58-66a3-4bbc-9939-38fcf9f0026e',
          pitchNumber: 1,
          startTime: '2018-04-10T20:19:40.729Z',
          endTime: '2018-04-10T20:19:44.500Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 74.8,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 22.66,
              aZ: -26.61,
              pfxX: -1.43,
              pfxZ: 3.93,
              pX: -0.52,
              pZ: 1.61,
              vX0: -5.69,
              vY0: -118.24,
              vZ0: -3.62,
              x: 136.89,
              y: 195.1,
              x0: 2.1,
              y0: 50.0,
              z0: 5.61,
              aX: -2.02
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1919,
              spinDirection: 211
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.3
          },
          index: 1,
          playId: '0505eafa-9586-4201-b9c0-700c486c6161',
          pitchNumber: 2,
          startTime: '2018-04-10T20:20:04.253Z',
          endTime: '2018-04-10T20:20:09.191Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 80.1,
            endSpeed: 73.7,
            strikeZoneTop: 3.16,
            strikeZoneBottom: 1.37,
            coordinates: {
              aY: 22.01,
              aZ: -29.07,
              pfxX: -2.67,
              pfxZ: 2.26,
              pX: 0.68,
              pZ: 2.3,
              vX0: -3.13,
              vY0: -116.55,
              vZ0: -1.53,
              x: 91.15,
              y: 176.74,
              x0: 2.38,
              y0: 50.0,
              z0: 5.71,
              aX: -3.67
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1963,
              spinDirection: 234
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.53
          },
          index: 2,
          playId: 'cfe64b20-ae9a-4d6e-801b-494a82f0788b',
          pitchNumber: 3,
          startTime: '2018-04-10T20:20:26.341Z',
          endTime: '2018-04-10T20:20:33.048Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:20:33.048Z',
      atBatIndex: 51
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Avisail Garcia grounds out, third baseman Matt Duffy to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 52,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2018-04-10T20:23:05.336Z',
        endTime: '2018-04-10T20:24:06.728Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 2, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 541645,
          fullName: 'Avisail Garcia',
          link: '/api/v1/people/541645'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 622110, link: '/api/v1/people/622110' },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 93.2,
            endSpeed: 85.8,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.33,
              aZ: -14.52,
              pfxX: 4.27,
              pfxZ: 9.41,
              pX: 1.8,
              pZ: 2.71,
              vX0: -1.41,
              vY0: -135.76,
              vZ0: -7.48,
              x: 48.56,
              y: 165.72,
              x0: 1.77,
              y0: 50.0,
              z0: 6.5,
              aX: 8.01
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2264,
              spinDirection: 154
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.62
          },
          index: 0,
          playId: 'c20da74d-10cf-4532-b9a4-27e2ecd48675',
          pitchNumber: 1,
          startTime: '2018-04-10T20:23:10.138Z',
          endTime: '2018-04-10T20:23:14.243Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 85.5,
            endSpeed: 78.3,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 25.62,
              aZ: -14.96,
              pfxX: 11.99,
              pfxZ: 11.13,
              pX: 0.26,
              pZ: -0.15,
              vX0: -7.22,
              vY0: -123.83,
              vZ0: -12.29,
              x: 109.09,
              y: 242.61,
              x0: 1.66,
              y0: 50.0,
              z0: 6.14,
              aX: 18.55
            },
            breaks: {
              breakAngle: 44.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1732,
              spinDirection: 131
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.65
          },
          index: 1,
          playId: '4ca3a0fd-1616-4ea9-ac83-72cd32f39d3a',
          pitchNumber: 2,
          startTime: '2018-04-10T20:23:23.552Z',
          endTime: '2018-04-10T20:23:29.291Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 86.7,
            endSpeed: 79.2,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 26.31,
              aZ: -15.72,
              pfxX: 7.86,
              pfxZ: 10.26,
              pX: 0.18,
              pZ: 2.29,
              vX0: -6.44,
              vY0: -126.04,
              vZ0: -6.88,
              x: 110.04,
              y: 177.08,
              x0: 1.75,
              y0: 50.0,
              z0: 6.33,
              aX: 12.6
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 1867,
              spinDirection: 143
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.88
          },
          hitData: {
            launchSpeed: 88.5,
            launchAngle: 2.0,
            totalDistance: 57.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: { coordX: 97.38, coordY: 169.47 }
          },
          index: 2,
          playId: 'f5b154a6-cadd-4cb9-a60e-bd40dbd850b5',
          pitchNumber: 3,
          startTime: '2018-04-10T20:23:58.320Z',
          endTime: '2018-04-10T20:24:06.728Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:24:06.728Z',
      atBatIndex: 52
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description:
          'Jose Abreu strikes out swinging, catcher Wilson Ramos to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 53,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2018-04-10T20:24:35.083Z',
        endTime: '2018-04-10T20:25:59.341Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 0, strikes: 3, outs: 2 },
      matchup: {
        batter: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
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
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
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
              player: { id: 467092, link: '/api/v1/people/467092' },
              position: {
                code: '2',
                name: 'Catcher',
                type: 'Catcher',
                abbreviation: 'C'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 86.1,
            endSpeed: 79.3,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 24.2,
              aZ: -18.16,
              pfxX: 9.13,
              pfxZ: 8.78,
              pX: 0.03,
              pZ: 2.37,
              vX0: -7.33,
              vY0: -125.23,
              vZ0: -6.34,
              x: 115.86,
              y: 174.88,
              x0: 1.8,
              y0: 50.0,
              z0: 6.41,
              aX: 14.57
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1802,
              spinDirection: 134
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.86
          },
          index: 0,
          playId: '22291a68-3f4e-4bce-8e94-473a5baf7737',
          pitchNumber: 1,
          startTime: '2018-04-10T20:24:40.362Z',
          endTime: '2018-04-10T20:24:46.101Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 85.5,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.9,
              aZ: -12.65,
              pfxX: 3.37,
              pfxZ: 10.49,
              pX: 0.53,
              pZ: 2.95,
              vX0: -4.13,
              vY0: -135.19,
              vZ0: -7.12,
              x: 96.7,
              y: 159.16,
              x0: 1.64,
              y0: 50.0,
              z0: 6.5,
              aX: 6.27
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2297,
              spinDirection: 163
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.99
          },
          index: 1,
          playId: '16e7bc9a-c4f2-4ca5-85ad-b7c62a2d7ab9',
          pitchNumber: 2,
          startTime: '2018-04-10T20:25:02.417Z',
          endTime: '2018-04-10T20:25:05.754Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 85.6,
            strikeZoneTop: 2.32,
            strikeZoneBottom: -0.95,
            coordinates: {
              aY: 32.25,
              aZ: -10.86,
              pfxX: 5.05,
              pfxZ: 11.32,
              pX: 1.55,
              pZ: 2.68,
              vX0: -2.32,
              vY0: -136.88,
              vZ0: -8.15,
              x: 57.74,
              y: 166.36,
              x0: 1.76,
              y0: 50.0,
              z0: 6.45,
              aX: 9.52
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2337,
              spinDirection: 155
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.8
          },
          index: 2,
          playId: '8078aebb-4252-4e26-bfbe-a10cf951288d',
          pitchNumber: 3,
          startTime: '2018-04-10T20:25:24.740Z',
          endTime: '2018-04-10T20:25:29.745Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'W', description: 'Swinging Strike (Blocked)' },
            description: 'Swinging Strike (Blocked)',
            code: 'W',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 3, outs: 1 },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 74.5,
            strikeZoneTop: 2.32,
            strikeZoneBottom: -0.95,
            coordinates: {
              aY: 27.62,
              aZ: -38.36,
              pfxX: -4.53,
              pfxZ: -4.48,
              pX: -0.52,
              pZ: -0.61,
              vX0: -2.94,
              vY0: -118.21,
              vZ0: -8.09,
              x: 136.72,
              y: 255.22,
              x0: 1.34,
              y0: 50.0,
              z0: 6.48,
              aX: -6.26
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2572,
              spinDirection: 318
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 6.18
          },
          index: 3,
          playId: '22507a82-fa1e-4884-b742-fe4ce6551fce',
          pitchNumber: 4,
          startTime: '2018-04-10T20:25:51.066Z',
          endTime: '2018-04-10T20:25:59.341Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:25:59.341Z',
      atBatIndex: 53
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Matt Davidson walks.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 54,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2018-04-10T20:26:26.238Z',
        endTime: '2018-04-10T20:27:44.679Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 1, outs: 2 },
      matchup: {
        batter: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 571602,
              fullName: 'Matt Davidson',
              link: '/api/v1/people/571602'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 85.9,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 27.54,
              aZ: -12.08,
              pfxX: 2.68,
              pfxZ: 10.67,
              pX: 0.96,
              pZ: 3.45,
              vX0: -2.68,
              vY0: -135.83,
              vZ0: -6.06,
              x: 80.42,
              y: 145.51,
              x0: 1.61,
              y0: 50.0,
              z0: 6.54,
              aX: 5.05
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2284,
              spinDirection: 166
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.56
          },
          index: 0,
          playId: '431e594c-9c60-45fc-b2fa-ed154ec2d3e0',
          pitchNumber: 1,
          startTime: '2018-04-10T20:26:32.707Z',
          endTime: '2018-04-10T20:26:36.344Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 85.4,
            endSpeed: 78.8,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 23.66,
              aZ: -19.74,
              pfxX: 9.31,
              pfxZ: 7.91,
              pX: 0.5,
              pZ: 2.14,
              vX0: -6.08,
              vY0: -124.27,
              vZ0: -6.5,
              x: 98.08,
              y: 181.06,
              x0: 1.76,
              y0: 50.0,
              z0: 6.41,
              aX: 14.64
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1701,
              spinDirection: 130
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.56
          },
          index: 1,
          playId: '7342547e-f87a-4c30-95fc-8961b30b7053',
          pitchNumber: 2,
          startTime: '2018-04-10T20:26:46.955Z',
          endTime: '2018-04-10T20:26:50.659Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 85.1,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 27.32,
              aZ: -13.27,
              pfxX: 3.84,
              pfxZ: 10.27,
              pX: 1.28,
              pZ: 2.43,
              vX0: -2.51,
              vY0: -134.37,
              vZ0: -8.33,
              x: 68.28,
              y: 173.25,
              x0: 1.72,
              y0: 50.0,
              z0: 6.5,
              aX: 7.06
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2170,
              spinDirection: 159
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.85
          },
          index: 2,
          playId: '4b3cc642-6e83-48fb-8b22-952cd82efc72',
          pitchNumber: 3,
          startTime: '2018-04-10T20:27:03.138Z',
          endTime: '2018-04-10T20:27:07.943Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 84.6,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 32.23,
              aZ: -10.71,
              pfxX: 3.06,
              pfxZ: 11.62,
              pX: 1.44,
              pZ: 3.21,
              vX0: -1.72,
              vY0: -135.69,
              vZ0: -6.91,
              x: 62.27,
              y: 152.16,
              x0: 1.69,
              y0: 50.0,
              z0: 6.55,
              aX: 5.65
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 165
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.52
          },
          index: 3,
          playId: 'f73e094b-fe16-4f0a-9205-2c56a1c530fc',
          pitchNumber: 4,
          startTime: '2018-04-10T20:27:20.021Z',
          endTime: '2018-04-10T20:27:23.859Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 83.8,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 32.28,
              aZ: -9.72,
              pfxX: 4.18,
              pfxZ: 12.35,
              pX: 1.08,
              pZ: 3.87,
              vX0: -2.74,
              vY0: -134.75,
              vZ0: -5.21,
              x: 75.92,
              y: 134.28,
              x0: 1.57,
              y0: 50.0,
              z0: 6.53,
              aX: 7.61
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2256,
              spinDirection: 162
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.93
          },
          index: 4,
          playId: 'cfe9ac8b-50fd-4d2f-97da-aace8f40dc9c',
          pitchNumber: 5,
          startTime: '2018-04-10T20:27:40.942Z',
          endTime: '2018-04-10T20:27:44.679Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:27:44.679Z',
      atBatIndex: 54
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Omar Narvaez walks.   Matt Davidson to 2nd.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 55,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2018-04-10T20:29:07.498Z',
        endTime: '2018-04-10T20:31:22.197Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 553882,
          fullName: 'Omar Narvaez',
          link: '/api/v1/people/553882'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 553882,
          fullName: 'Omar Narvaez',
          link: '/api/v1/people/553882'
        },
        postOnSecond: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [2, 3, 4, 5, 6, 7],
      actionIndex: [0, 1],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: 'r_adv_force',
            runner: {
              id: 571602,
              fullName: 'Matt Davidson',
              link: '/api/v1/people/571602'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 7
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 553882,
              fullName: 'Omar Narvaez',
              link: '/api/v1/people/553882'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 7
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description:
              'Offensive Substitution: Pinch-hitter Omar Narvaez replaces Welington Castillo.',
            event: 'Offensive Substitution',
            eventType: 'offensive_substitution',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T20:29:08.498Z',
          endTime: '2018-04-10T20:29:09.498Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 553882, link: '/api/v1/people/553882' },
          position: {
            code: '11',
            name: 'Pinch Hitter',
            type: 'Hitter',
            abbreviation: 'PH'
          },
          battingOrder: '501',
          replacedPlayer: { id: 456078, link: '/api/v1/people/456078' }
        },
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 1,
          startTime: '2018-04-10T20:29:09.498Z',
          isPitch: false,
          type: 'action',
          player: { id: 553882, link: '/api/v1/people/553882' }
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 93.5,
            endSpeed: 84.9,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 31.52,
              aZ: -12.42,
              pfxX: 4.5,
              pfxZ: 10.63,
              pX: -0.62,
              pZ: 3.9,
              vX0: -7.45,
              vY0: -135.89,
              vZ0: -4.74,
              x: 140.71,
              y: 133.55,
              x0: 1.58,
              y0: 50.0,
              z0: 6.53,
              aX: 8.37
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2241,
              spinDirection: 160
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.61
          },
          index: 2,
          playId: '49158c26-0fe0-44d9-ab92-40f74fc61b7d',
          pitchNumber: 1,
          startTime: '2018-04-10T20:29:12.267Z',
          endTime: '2018-04-10T20:29:15.904Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.1,
            endSpeed: 84.4,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 28.75,
              aZ: -13.98,
              pfxX: 3.41,
              pfxZ: 10.01,
              pX: -0.6,
              pZ: 3.08,
              vX0: -7.11,
              vY0: -133.96,
              vZ0: -6.4,
              x: 140.04,
              y: 155.6,
              x0: 1.64,
              y0: 50.0,
              z0: 6.5,
              aX: 6.2
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2213,
              spinDirection: 164
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.62
          },
          index: 3,
          playId: 'ebdb4536-8b9f-4935-8148-880ac2af6a3b',
          pitchNumber: 2,
          startTime: '2018-04-10T20:29:31.820Z',
          endTime: '2018-04-10T20:29:35.457Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 73.7,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 23.77,
              aZ: -41.24,
              pfxX: -3.06,
              pfxZ: -6.72,
              pX: -1.0,
              pZ: 0.76,
              vX0: -4.41,
              vY0: -116.01,
              vZ0: -4.37,
              x: 155.07,
              y: 218.3,
              x0: 1.33,
              y0: 50.0,
              z0: 6.64,
              aX: -4.13
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2595,
              spinDirection: 332
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 6.33
          },
          index: 4,
          playId: '73835084-e201-43ed-9680-a5e25db076e1',
          pitchNumber: 3,
          startTime: '2018-04-10T20:29:52.707Z',
          endTime: '2018-04-10T20:30:01.149Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 85.2,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.31,
            coordinates: {
              aY: 29.59,
              aZ: -15.6,
              pfxX: 2.59,
              pfxZ: 8.92,
              pX: -0.59,
              pZ: 3.07,
              vX0: -6.45,
              vY0: -135.43,
              vZ0: -6.18,
              x: 139.4,
              y: 155.97,
              x0: 1.49,
              y0: 50.0,
              z0: 6.47,
              aX: 4.8
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2231,
              spinDirection: 167
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.69
          },
          index: 5,
          playId: 'f3b3c807-e56f-41e1-a6d9-06e6179b6a96',
          pitchNumber: 4,
          startTime: '2018-04-10T20:30:19.567Z',
          endTime: '2018-04-10T20:30:25.006Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 93.2,
            endSpeed: 85.0,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 30.49,
              aZ: -14.95,
              pfxX: 1.87,
              pfxZ: 9.26,
              pX: 0.4,
              pZ: 4.95,
              vX0: -3.78,
              vY0: -135.77,
              vZ0: -1.85,
              x: 101.82,
              y: 105.19,
              x0: 1.57,
              y0: 50.0,
              z0: 6.68,
              aX: 3.48
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2223,
              spinDirection: 171
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.95
          },
          index: 6,
          playId: 'c1832ca4-79c0-42c6-ace7-5bb9d0b4a0fd',
          pitchNumber: 5,
          startTime: '2018-04-10T20:30:50.532Z',
          endTime: '2018-04-10T20:30:54.135Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 4, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 91.7,
            endSpeed: 84.3,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 27.49,
              aZ: -17.85,
              pfxX: 3.44,
              pfxZ: 7.89,
              pX: 0.53,
              pZ: 3.62,
              vX0: -4.06,
              vY0: -133.57,
              vZ0: -4.26,
              x: 96.62,
              y: 140.93,
              x0: 1.63,
              y0: 50.0,
              z0: 6.51,
              aX: 6.24
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2190,
              spinDirection: 158
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.66
          },
          index: 7,
          playId: '5183e83f-96d8-4478-a0ca-ecb5b74c44a8',
          pitchNumber: 6,
          startTime: '2018-04-10T20:31:18.626Z',
          endTime: '2018-04-10T20:31:22.197Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:31:22.197Z',
      atBatIndex: 55
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Nicky Delmonico strikes out on a foul tip.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 56,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2018-04-10T20:31:53.158Z',
        endTime: '2018-04-10T20:34:13.201Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 2, strikes: 3, outs: 3 },
      matchup: {
        batter: {
          id: 547170,
          fullName: 'Nicky Delmonico',
          link: '/api/v1/people/547170'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 605483,
          fullName: 'Blake Snell',
          link: '/api/v1/people/605483'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [1, 2, 3, 4, 5, 6],
      actionIndex: [0],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: null,
            outBase: '1B',
            isOut: true,
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 547170,
              fullName: 'Nicky Delmonico',
              link: '/api/v1/people/547170'
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
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            description:
              'Rays catcher Welington Castillo left the game due to an injured knee.',
            event: 'Injury',
            eventType: 'injury',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T20:31:54.158Z',
          isPitch: false,
          type: 'action',
          player: { id: 456078, link: '/api/v1/people/456078' },
          injuryType: 'knee'
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 92.7,
            endSpeed: 84.7,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 29.68,
              aZ: -13.68,
              pfxX: 2.92,
              pfxZ: 10.05,
              pX: -0.5,
              pZ: 3.78,
              vX0: -6.11,
              vY0: -134.93,
              vZ0: -4.96,
              x: 136.06,
              y: 136.72,
              x0: 1.42,
              y0: 50.0,
              z0: 6.61,
              aX: 5.37
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2119,
              spinDirection: 167
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.72
          },
          index: 1,
          playId: '0b8c9958-7d8c-4158-adee-3dbfd2ef0f9a',
          pitchNumber: 1,
          startTime: '2018-04-10T20:31:57.065Z',
          endTime: '2018-04-10T20:32:01.102Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 85.2,
            strikeZoneTop: 3.67,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 27.14,
              aZ: -17.64,
              pfxX: 2.81,
              pfxZ: 7.87,
              pX: -0.85,
              pZ: 3.57,
              vX0: -7.16,
              vY0: -134.53,
              vZ0: -4.4,
              x: 149.27,
              y: 142.46,
              x0: 1.48,
              y0: 50.0,
              z0: 6.46,
              aX: 5.19
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2167,
              spinDirection: 164
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.75
          },
          index: 2,
          playId: '098b1a2c-234f-40d8-9916-24356b13f427',
          pitchNumber: 2,
          startTime: '2018-04-10T20:32:21.990Z',
          endTime: '2018-04-10T20:32:26.494Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.4,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 29.11,
              aZ: -13.65,
              pfxX: 2.2,
              pfxZ: 10.15,
              pX: -0.68,
              pZ: 3.68,
              vX0: -6.72,
              vY0: -134.24,
              vZ0: -4.94,
              x: 143.03,
              y: 139.33,
              x0: 1.57,
              y0: 50.0,
              z0: 6.52,
              aX: 4.01
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2111,
              spinDirection: 171
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.66
          },
          index: 3,
          playId: '50129c43-05c1-467d-bbfc-cad9078e7c2a',
          pitchNumber: 3,
          startTime: '2018-04-10T20:32:44.212Z',
          endTime: '2018-04-10T20:32:47.982Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 93.9,
            endSpeed: 86.9,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 26.99,
              aZ: -12.95,
              pfxX: 2.47,
              pfxZ: 10.07,
              pX: -0.02,
              pZ: 2.19,
              vX0: -5.15,
              vY0: -136.56,
              vZ0: -8.92,
              x: 117.69,
              y: 179.58,
              x0: 1.56,
              y0: 50.0,
              z0: 6.37,
              aX: 4.72
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2148,
              spinDirection: 168
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.66
          },
          index: 4,
          playId: '660bfe11-aa10-41cf-aba3-92ad98364382',
          pitchNumber: 4,
          startTime: '2018-04-10T20:33:06.968Z',
          endTime: '2018-04-10T20:33:12.974Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 79.2,
            endSpeed: 73.1,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 21.99,
              aZ: -41.86,
              pfxX: -1.26,
              pfxZ: -7.22,
              pX: 0.8,
              pZ: 2.6,
              vX0: -1.19,
              vY0: -115.24,
              vZ0: -0.31,
              x: 86.37,
              y: 168.52,
              x0: 1.49,
              y0: 50.0,
              z0: 6.79,
              aX: -1.69
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2422,
              spinDirection: 348
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.99
          },
          index: 5,
          playId: '37b001af-99bb-4783-a603-0587725f4018',
          pitchNumber: 5,
          startTime: '2018-04-10T20:33:36.197Z',
          endTime: '2018-04-10T20:33:39.868Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'T', description: 'Foul Tip' },
            description: 'Foul Tip',
            code: 'T',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 3, outs: 2 },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 84.9,
            strikeZoneTop: 2.9,
            strikeZoneBottom: -0.92,
            coordinates: {
              aY: 28.64,
              aZ: -14.84,
              pfxX: 1.21,
              pfxZ: 9.41,
              pX: -0.64,
              pZ: 3.53,
              vX0: -6.03,
              vY0: -134.75,
              vZ0: -5.21,
              x: 141.28,
              y: 143.57,
              x0: 1.47,
              y0: 50.0,
              z0: 6.53,
              aX: 2.24
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2231,
              spinDirection: 176
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.53
          },
          index: 6,
          playId: '8366f131-8013-437a-88ae-2ea9542aa7b0',
          pitchNumber: 6,
          startTime: '2018-04-10T20:34:08.529Z',
          endTime: '2018-04-10T20:34:13.201Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:34:13.201Z',
      atBatIndex: 56
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Mallex Smith singles on a ground ball to second baseman Yoan Moncada.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 57,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2018-04-10T20:36:26.992Z',
        endTime: '2018-04-10T20:37:34.902Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 1, strikes: 2, outs: 0 },
      matchup: {
        batter: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [1, 2, 3, 4],
      actionIndex: [0],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 660162, link: '/api/v1/people/660162' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Omar Narvaez remains in the game as the catcher.',
            event: 'Defensive Switch',
            eventType: 'defensive_switch',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T20:36:27.992Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 553882, link: '/api/v1/people/553882' },
          position: {
            code: '2',
            name: 'Catcher',
            type: 'Catcher',
            abbreviation: 'C'
          },
          battingOrder: '501',
          replacedPlayer: { id: 456078, link: '/api/v1/people/456078' }
        },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 86.7,
            endSpeed: 79.0,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 25.82,
              aZ: -13.77,
              pfxX: 6.21,
              pfxZ: 11.5,
              pX: -1.02,
              pZ: 2.84,
              vX0: -9.75,
              vY0: -125.79,
              vZ0: -4.19,
              x: 156.05,
              y: 162.2,
              x0: 2.1,
              y0: 50.0,
              z0: 5.64,
              aX: 9.93
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2030,
              spinDirection: 155
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.87
          },
          index: 1,
          playId: '379acf17-be55-48d7-9362-ed568be00fe5',
          pitchNumber: 1,
          startTime: '2018-04-10T20:36:34.876Z',
          endTime: '2018-04-10T20:36:39.814Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 88.8,
            endSpeed: 80.4,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.44,
            coordinates: {
              aY: 28.87,
              aZ: -12.75,
              pfxX: 5.47,
              pfxZ: 11.64,
              pX: -0.47,
              pZ: 3.54,
              vX0: -7.75,
              vY0: -128.89,
              vZ0: -3.09,
              x: 134.9,
              y: 143.24,
              x0: 1.88,
              y0: 50.0,
              z0: 5.75,
              aX: 9.13
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2050,
              spinDirection: 158
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.88
          },
          index: 2,
          playId: '8837f6cc-2ec2-46fc-a87c-0da95fc801a1',
          pitchNumber: 2,
          startTime: '2018-04-10T20:36:51.125Z',
          endTime: '2018-04-10T20:36:55.663Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 88.2,
            endSpeed: 80.6,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 26.42,
              aZ: -13.79,
              pfxX: 7.44,
              pfxZ: 11.07,
              pX: -0.22,
              pZ: 2.24,
              vX0: -8.68,
              vY0: -128.05,
              vZ0: -5.47,
              x: 125.51,
              y: 178.28,
              x0: 2.24,
              y0: 50.0,
              z0: 5.48,
              aX: 12.36
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2028,
              spinDirection: 148
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.06
          },
          index: 3,
          playId: 'e591de62-ed32-4028-9c13-b115a10ea14c',
          pitchNumber: 3,
          startTime: '2018-04-10T20:37:05.506Z',
          endTime: '2018-04-10T20:37:10.144Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 89.6,
            endSpeed: 82.0,
            strikeZoneTop: 1.92,
            strikeZoneBottom: -1.1,
            coordinates: {
              aY: 26.81,
              aZ: -14.46,
              pfxX: 6.38,
              pfxZ: 10.31,
              pX: -0.56,
              pZ: 2.59,
              vX0: -8.67,
              vY0: -130.15,
              vZ0: -4.71,
              x: 138.36,
              y: 168.98,
              x0: 1.98,
              y0: 50.0,
              z0: 5.51,
              aX: 10.97
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2047,
              spinDirection: 151
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.98
          },
          hitData: {
            launchSpeed: 81.2,
            launchAngle: -32.0,
            totalDistance: 6.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 142.81, coordY: 156.76 }
          },
          index: 4,
          playId: '562c4a6e-0e1e-4e8c-8522-2b6e3167e719',
          pitchNumber: 4,
          startTime: '2018-04-10T20:37:25.660Z',
          endTime: '2018-04-10T20:37:34.902Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:37:34.902Z',
      atBatIndex: 57
    },
    {
      result: {
        type: 'atBat',
        event: 'Grounded Into DP',
        eventType: 'grounded_into_double_play',
        description:
          'Wilson Ramos grounds into a double play, second baseman Yoan Moncada to first baseman Jose Abreu.   Mallex Smith out at 2nd.    Wilson Ramos out at 1st.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 58,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2018-04-10T20:38:11.891Z',
        endTime: '2018-04-10T20:39:05.159Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 24
      },
      count: { balls: 1, strikes: 0, outs: 2 },
      matchup: {
        batter: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: null,
            outBase: '2B',
            isOut: true,
            outNumber: 1
          },
          details: {
            event: 'Grounded Into DP',
            eventType: 'grounded_into_double_play',
            movementReason: 'r_force_out',
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 660162, link: '/api/v1/people/660162' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_putout'
            }
          ]
        },
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
            event: 'Grounded Into DP',
            eventType: 'grounded_into_double_play',
            movementReason: null,
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 660162, link: '/api/v1/people/660162' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 547989, link: '/api/v1/people/547989' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          playId: '5a0391f0-b5a6-4100-9183-f643c6988979',
          startTime: '2018-04-10T20:38:15.711Z',
          endTime: '2018-04-10T20:38:21.048Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 79.4,
            endSpeed: 72.7,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 21.44,
              aZ: -24.4,
              pfxX: 10.49,
              pfxZ: 5.77,
              pX: 1.45,
              pZ: 3.29,
              vX0: -4.06,
              vY0: -115.42,
              vZ0: -0.39,
              x: 61.55,
              y: 149.9,
              x0: 1.87,
              y0: 50.0,
              z0: 5.81,
              aX: 14.15
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1750,
              spinDirection: 120
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.29
          },
          index: 1,
          playId: 'c2f7eaf6-5af9-4abd-89f2-aeeb32dbbc52',
          pitchNumber: 1,
          startTime: '2018-04-10T20:38:34.095Z',
          endTime: '2018-04-10T20:38:38.499Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 81.3,
            endSpeed: 75.0,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 20.89,
              aZ: -23.69,
              pfxX: 9.82,
              pfxZ: 5.95,
              pX: 1.06,
              pZ: 2.8,
              vX0: -4.99,
              vY0: -118.23,
              vZ0: -1.98,
              x: 76.66,
              y: 163.11,
              x0: 1.91,
              y0: 50.0,
              z0: 5.81,
              aX: 14.01
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1829,
              spinDirection: 122
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.26
          },
          hitData: {
            launchSpeed: 90.4,
            launchAngle: 0.0,
            totalDistance: 42.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 139.78, coordY: 151.91 }
          },
          index: 2,
          playId: '4e916340-b4f3-4f69-831d-ec1c4ca67fbc',
          pitchNumber: 2,
          startTime: '2018-04-10T20:38:56.317Z',
          endTime: '2018-04-10T20:39:05.159Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:39:05.159Z',
      atBatIndex: 58
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Adeiny Hechavarria flies out to right fielder Avisail Garcia.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 59,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2018-04-10T20:39:30.045Z',
        endTime: '2018-04-10T20:40:14.595Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 1, outs: 3 },
      matchup: {
        batter: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
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
            outNumber: 3
          },
          details: {
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 541645, link: '/api/v1/people/541645' },
              position: {
                code: '9',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'RF'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 89.9,
            endSpeed: 82.1,
            strikeZoneTop: 3.13,
            strikeZoneBottom: 1.28,
            coordinates: {
              aY: 27.25,
              aZ: -14.99,
              pfxX: 8.04,
              pfxZ: 9.94,
              pX: -0.35,
              pZ: 3.35,
              vX0: -8.21,
              vY0: -130.59,
              vZ0: -3.37,
              x: 130.16,
              y: 148.27,
              x0: 1.79,
              y0: 50.0,
              z0: 5.79,
              aX: 13.9
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2060,
              spinDirection: 143
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.79
          },
          index: 0,
          playId: '4a42f77e-0e90-4ac3-8821-f705843db6d6',
          pitchNumber: 1,
          startTime: '2018-04-10T20:39:32.286Z',
          endTime: '2018-04-10T20:39:37.191Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 90.3,
            endSpeed: 83.0,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 25.45,
              aZ: -15.03,
              pfxX: 8.08,
              pfxZ: 9.77,
              pX: -0.5,
              pZ: 3.58,
              vX0: -8.71,
              vY0: -131.12,
              vZ0: -2.9,
              x: 136.03,
              y: 142.08,
              x0: 1.8,
              y0: 50.0,
              z0: 5.81,
              aX: 14.19
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2239,
              spinDirection: 143
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.67
          },
          index: 1,
          playId: 'cf16b1d8-7d12-4b8e-8965-00d03f741b39',
          pitchNumber: 2,
          startTime: '2018-04-10T20:39:49.170Z',
          endTime: '2018-04-10T20:39:55.543Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 90.2,
            endSpeed: 82.7,
            strikeZoneTop: 1.87,
            strikeZoneBottom: -1.17,
            coordinates: {
              aY: 26.49,
              aZ: -15.06,
              pfxX: 7.96,
              pfxZ: 9.81,
              pX: -0.69,
              pZ: 2.47,
              vX0: -8.88,
              vY0: -130.95,
              vZ0: -5.38,
              x: 143.24,
              y: 172.22,
              x0: 1.7,
              y0: 50.0,
              z0: 5.66,
              aX: 13.89
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2106,
              spinDirection: 143
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.61
          },
          hitData: {
            launchSpeed: 84.0,
            launchAngle: 50.0,
            totalDistance: 237.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '9',
            coordinates: { coordX: 171.99, coordY: 111.75 }
          },
          index: 2,
          playId: '247534dd-fd96-4558-a8d4-2091591fecfe',
          pitchNumber: 3,
          startTime: '2018-04-10T20:40:05.019Z',
          endTime: '2018-04-10T20:40:14.595Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:40:14.595Z',
      atBatIndex: 59
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Tim Anderson grounds out, second baseman Joey Wendle to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 60,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2018-04-10T20:42:32.676Z',
        endTime: '2018-04-10T20:43:17.945Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 641313,
          fullName: 'Tim Anderson',
          link: '/api/v1/people/641313'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 552640,
          fullName: 'Andrew Kittredge',
          link: '/api/v1/people/552640'
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
      pitchIndex: [1, 2, 3],
      actionIndex: [0],
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
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
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description:
              'Pitching Change: Andrew Kittredge replaces Blake Snell.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T20:42:33.676Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 552640, link: '/api/v1/people/552640' },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 83.8,
            endSpeed: 77.1,
            strikeZoneTop: 3.14,
            strikeZoneBottom: 1.37,
            coordinates: {
              aY: 24.11,
              aZ: -34.65,
              pfxX: 2.31,
              pfxZ: -1.65,
              pX: 0.84,
              pZ: 2.53,
              vX0: 5.99,
              vY0: -121.85,
              vZ0: -1.02,
              x: 84.88,
              y: 170.39,
              x0: -1.95,
              y0: 50.0,
              z0: 5.95,
              aX: 3.47
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2565,
              spinDirection: 62
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.86
          },
          index: 1,
          playId: '4cec22bf-ca2c-4fa6-97ee-ef414e0c936f',
          pitchNumber: 1,
          startTime: '2018-04-10T20:42:37.905Z',
          endTime: '2018-04-10T20:42:43.844Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 84.5,
            endSpeed: 77.7,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.44,
            coordinates: {
              aY: 25.7,
              aZ: -34.99,
              pfxX: 2.17,
              pfxZ: -1.86,
              pX: 1.47,
              pZ: 1.3,
              vX0: 7.27,
              vY0: -122.77,
              vZ0: -3.66,
              x: 60.87,
              y: 203.71,
              x0: -1.82,
              y0: 50.0,
              z0: 5.81,
              aX: 3.3
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2581,
              spinDirection: 55
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.85
          },
          index: 2,
          playId: '8fefd653-3404-4690-8ed5-70e1b4faa5c4',
          pitchNumber: 2,
          startTime: '2018-04-10T20:42:53.921Z',
          endTime: '2018-04-10T20:42:58.125Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 85.4,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.2,
            coordinates: {
              aY: 31.1,
              aZ: -15.9,
              pfxX: -3.79,
              pfxZ: 8.68,
              pX: 0.2,
              pZ: 3.33,
              vX0: 6.22,
              vY0: -136.35,
              vZ0: -4.13,
              x: 109.51,
              y: 148.8,
              x0: -1.63,
              y0: 50.0,
              z0: 5.97,
              aX: -7.11
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 200
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.7
          },
          hitData: {
            launchSpeed: 95.0,
            launchAngle: -6.0,
            totalDistance: 33.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 136.75, coordY: 147.67 }
          },
          index: 3,
          playId: 'b56345dc-95de-45dc-8a1c-ecd54386eb0c',
          pitchNumber: 3,
          startTime: '2018-04-10T20:43:09.737Z',
          endTime: '2018-04-10T20:43:17.945Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:43:17.945Z',
      atBatIndex: 60
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Tyler Saladino singles on a line drive to left fielder Denard Span.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 61,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2018-04-10T20:43:43.769Z',
        endTime: '2018-04-10T20:44:29.383Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 2, outs: 1 },
      matchup: {
        batter: {
          id: 573135,
          fullName: 'Tyler Saladino',
          link: '/api/v1/people/573135'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 552640,
          fullName: 'Andrew Kittredge',
          link: '/api/v1/people/552640'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 573135,
          fullName: 'Tyler Saladino',
          link: '/api/v1/people/573135'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 452655, link: '/api/v1/people/452655' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_fielded_ball'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 84.7,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 30.36,
              aZ: -15.95,
              pfxX: -2.55,
              pfxZ: 8.8,
              pX: 0.61,
              pZ: 3.19,
              vX0: 6.61,
              vY0: -135.15,
              vZ0: -4.38,
              x: 93.58,
              y: 152.74,
              x0: -1.53,
              y0: 50.0,
              z0: 5.95,
              aX: -4.7
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2132,
              spinDirection: 191
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.74
          },
          index: 0,
          playId: 'b198e813-7a47-4960-bc50-3d9da314ef8c',
          pitchNumber: 1,
          startTime: '2018-04-10T20:43:46.373Z',
          endTime: '2018-04-10T20:43:50.644Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 84.4,
            endSpeed: 77.3,
            strikeZoneTop: 3.2,
            strikeZoneBottom: 1.36,
            coordinates: {
              aY: 24.88,
              aZ: -33.67,
              pfxX: 3.73,
              pfxZ: -0.98,
              pX: 0.17,
              pZ: 3.47,
              vX0: 3.85,
              vY0: -122.79,
              vZ0: 0.88,
              x: 110.53,
              y: 145.23,
              x0: -1.91,
              y0: 50.0,
              z0: 5.98,
              aX: 5.69
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2571,
              spinDirection: 80
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.84
          },
          index: 1,
          playId: 'b306e4e0-f324-42c8-a4d8-347396c565a1',
          pitchNumber: 2,
          startTime: '2018-04-10T20:43:59.386Z',
          endTime: '2018-04-10T20:44:02.990Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 84.1,
            endSpeed: 77.8,
            strikeZoneTop: 2.95,
            strikeZoneBottom: 1.26,
            coordinates: {
              aY: 23.16,
              aZ: -34.56,
              pfxX: 3.6,
              pfxZ: -1.57,
              pX: 0.48,
              pZ: 1.91,
              vX0: 4.91,
              vY0: -122.28,
              vZ0: -2.05,
              x: 99.11,
              y: 186.44,
              x0: -2.01,
              y0: 50.0,
              z0: 5.72,
              aX: 5.47
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2638,
              spinDirection: 68
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.66
          },
          hitData: {
            launchSpeed: 77.1,
            launchAngle: 20.0,
            totalDistance: 239.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: { coordX: 90.3, coordY: 106.49 }
          },
          index: 2,
          playId: '39d63f0d-c5b0-4534-89bf-498d21eabef7',
          pitchNumber: 3,
          startTime: '2018-04-10T20:44:16.637Z',
          endTime: '2018-04-10T20:44:29.383Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:44:29.383Z',
      atBatIndex: 61
    },
    {
      result: {
        type: 'atBat',
        event: 'Forceout',
        eventType: 'force_out',
        description:
          'Adam Engel grounds into a force out, fielded by second baseman Joey Wendle.   Tyler Saladino out at 2nd.    Adam Engel to 1st.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 62,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2018-04-10T20:44:50.997Z',
        endTime: '2018-04-10T20:46:49.056Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 2, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 641553,
          fullName: 'Adam Engel',
          link: '/api/v1/people/641553'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 552640,
          fullName: 'Andrew Kittredge',
          link: '/api/v1/people/552640'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 641553,
          fullName: 'Adam Engel',
          link: '/api/v1/people/641553'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: null,
            outBase: '2B',
            isOut: true,
            outNumber: 2
          },
          details: {
            event: 'Forceout',
            eventType: 'force_out',
            movementReason: 'r_force_out',
            runner: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Forceout',
            eventType: 'force_out',
            movementReason: null,
            runner: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 84.1,
            endSpeed: 77.6,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 23.15,
              aZ: -38.13,
              pfxX: 5.18,
              pfxZ: -3.91,
              pX: 0.96,
              pZ: 3.76,
              vX0: 5.34,
              vY0: -122.28,
              vZ0: 2.58,
              x: 80.36,
              y: 137.35,
              x0: -1.92,
              y0: 50.0,
              z0: 5.95,
              aX: 7.87
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2614,
              spinDirection: 59
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.93
          },
          index: 0,
          playId: '8f65453e-d1af-41dd-8ac3-7d61322b4f5c',
          pitchNumber: 1,
          startTime: '2018-04-10T20:44:58.245Z',
          endTime: '2018-04-10T20:45:01.415Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 94.0,
            endSpeed: 85.5,
            strikeZoneTop: 3.61,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 31.69,
              aZ: -12.81,
              pfxX: -3.13,
              pfxZ: 10.28,
              pX: -0.6,
              pZ: 3.39,
              vX0: 4.39,
              vY0: -136.75,
              vZ0: -4.29,
              x: 139.86,
              y: 147.27,
              x0: -1.82,
              y0: 50.0,
              z0: 5.86,
              aX: -5.9
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2194,
              spinDirection: 194
            },
            zone: 1,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.34
          },
          index: 1,
          playId: '125b81b1-9f47-496b-beac-31662f74f9df',
          pitchNumber: 2,
          startTime: '2018-04-10T20:45:19.833Z',
          endTime: '2018-04-10T20:45:24.038Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 85.1,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 30.66,
              aZ: -13.01,
              pfxX: -2.32,
              pfxZ: 10.29,
              pX: -1.04,
              pZ: 3.2,
              vX0: 2.45,
              vY0: -135.83,
              vZ0: -4.69,
              x: 156.77,
              y: 152.29,
              x0: -1.66,
              y0: 50.0,
              z0: 5.86,
              aX: -4.31
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2137,
              spinDirection: 191
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.3
          },
          index: 2,
          playId: '98a85bab-b726-437f-8e8a-64419e16578b',
          pitchNumber: 3,
          startTime: '2018-04-10T20:45:43.057Z',
          endTime: '2018-04-10T20:45:46.827Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 84.6,
            endSpeed: 78.6,
            strikeZoneTop: 3.67,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 22.68,
              aZ: -34.26,
              pfxX: 2.45,
              pfxZ: -1.35,
              pX: 0.37,
              pZ: 1.62,
              vX0: 5.07,
              vY0: -123.13,
              vZ0: -3.02,
              x: 102.86,
              y: 194.98,
              x0: -2.03,
              y0: 50.0,
              z0: 5.74,
              aX: 3.79
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2498,
              spinDirection: 63
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 6.05
          },
          index: 3,
          playId: '8f2772c9-5a12-417d-93da-084d74b96d6a',
          pitchNumber: 4,
          startTime: '2018-04-10T20:46:09.350Z',
          endTime: '2018-04-10T20:46:14.622Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 94.7,
            endSpeed: 87.4,
            strikeZoneTop: 3.67,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 28.01,
              aZ: -13.98,
              pfxX: -4.61,
              pfxZ: 9.38,
              pX: -0.24,
              pZ: 1.97,
              vX0: 5.26,
              vY0: -137.77,
              vZ0: -7.86,
              x: 126.24,
              y: 185.55,
              x0: -1.57,
              y0: 50.0,
              z0: 5.79,
              aX: -8.94
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2239,
              spinDirection: 205
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 6.74
          },
          hitData: {
            launchSpeed: 86.0,
            launchAngle: 8.0,
            totalDistance: 137.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 131.13, coordY: 145.17 }
          },
          index: 4,
          playId: '54183f20-a331-48ca-93a1-df1346e7978f',
          pitchNumber: 5,
          startTime: '2018-04-10T20:46:39.413Z',
          endTime: '2018-04-10T20:46:49.056Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:46:49.056Z',
      atBatIndex: 62
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Yoan Moncada singles on a ground ball to right fielder Mallex Smith, deflected by second baseman Joey Wendle.   Adam Engel to 3rd.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 63,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2018-04-10T20:47:14.465Z',
        endTime: '2018-04-10T20:47:34.868Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 0, outs: 2 },
      matchup: {
        batter: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 552640,
          fullName: 'Andrew Kittredge',
          link: '/api/v1/people/552640'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        postOnThird: {
          id: 641553,
          fullName: 'Adam Engel',
          link: '/api/v1/people/641553'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0],
      actionIndex: [],
      runnerIndex: [0, 1, 2],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: [
            {
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_deflection'
            },
            {
              player: { id: 605480, link: '/api/v1/people/605480' },
              position: {
                code: '9',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'RF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_play',
            runner: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 84.2,
            endSpeed: 77.7,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 23.92,
              aZ: -33.53,
              pfxX: 5.47,
              pfxZ: -0.89,
              pX: 0.03,
              pZ: 2.2,
              vX0: 3.34,
              vY0: -122.52,
              vZ0: -1.58,
              x: 115.97,
              y: 179.34,
              x0: -2.06,
              y0: 50.0,
              z0: 5.72,
              aX: 8.32
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2817,
              spinDirection: 81
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.91
          },
          hitData: {
            launchSpeed: 105.6,
            launchAngle: -5.0,
            totalDistance: 25.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 176.12, coordY: 123.44 }
          },
          index: 0,
          playId: '43d8b8bc-e45a-4c85-bdcd-b57d71f72b04',
          pitchNumber: 1,
          startTime: '2018-04-10T20:47:22.222Z',
          endTime: '2018-04-10T20:47:34.868Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:47:34.868Z',
      atBatIndex: 63
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description: 'Avisail Garcia lines out to left fielder Denard Span.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 64,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2018-04-10T20:48:09.750Z',
        endTime: '2018-04-10T20:48:21.915Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 0, outs: 3 },
      matchup: {
        batter: {
          id: 541645,
          fullName: 'Avisail Garcia',
          link: '/api/v1/people/541645'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 552640,
          fullName: 'Andrew Kittredge',
          link: '/api/v1/people/552640'
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
      pitchIndex: [0],
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
            outNumber: 3
          },
          details: {
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: [
            {
              player: { id: 452655, link: '/api/v1/people/452655' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 85.2,
            endSpeed: 78.8,
            strikeZoneTop: 2.41,
            strikeZoneBottom: -0.7,
            coordinates: {
              aY: 23.84,
              aZ: -29.89,
              pfxX: 3.59,
              pfxZ: 1.46,
              pX: 0.53,
              pZ: 1.55,
              vX0: 4.75,
              vY0: -124.0,
              vZ0: -4.07,
              x: 96.85,
              y: 196.96,
              x0: -1.87,
              y0: 50.0,
              z0: 5.69,
              aX: 5.61
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinDirection: 105
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 6.06
          },
          hitData: {
            launchSpeed: 76.3,
            launchAngle: 26.0,
            totalDistance: 270.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: { coordX: 78.77, coordY: 96.42 }
          },
          index: 0,
          playId: 'ceee56d1-c40f-4402-9a54-1961dd47cbe0',
          pitchNumber: 1,
          startTime: '2018-04-10T20:48:14.208Z',
          endTime: '2018-04-10T20:48:21.915Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:48:21.915Z',
      atBatIndex: 64
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Daniel Robertson pops out to first baseman Jose Abreu.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 65,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2018-04-10T20:50:38.514Z',
        endTime: '2018-04-10T20:51:35.642Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 2, outs: 1 },
      matchup: {
        batter: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
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
            outNumber: 1
          },
          details: {
            event: 'Pop Out',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 547989, link: '/api/v1/people/547989' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 73.0,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 21.37,
              aZ: -21.48,
              pfxX: 9.83,
              pfxZ: 7.86,
              pX: -0.0,
              pZ: 3.07,
              vX0: -7.63,
              vY0: -115.84,
              vZ0: -1.5,
              x: 117.15,
              y: 155.86,
              x0: 2.05,
              y0: 50.0,
              z0: 5.78,
              aX: 13.37
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1772,
              spinDirection: 131
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.62
          },
          index: 0,
          playId: '7071bda1-0ce6-49af-a6fc-78f9d4fab5ad',
          pitchNumber: 1,
          startTime: '2018-04-10T20:50:40.988Z',
          endTime: '2018-04-10T20:50:45.225Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 80.7,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 27.63,
              aZ: -14.11,
              pfxX: 7.09,
              pfxZ: 10.79,
              pX: 0.47,
              pZ: 2.63,
              vX0: -6.24,
              vY0: -128.82,
              vZ0: -4.88,
              x: 99.03,
              y: 167.74,
              x0: 2.01,
              y0: 50.0,
              z0: 5.65,
              aX: 11.87
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2093,
              spinDirection: 148
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.59
          },
          index: 1,
          playId: '2a54189f-d09f-4e7c-96c3-dd7067e39eaf',
          pitchNumber: 2,
          startTime: '2018-04-10T20:50:51.665Z',
          endTime: '2018-04-10T20:51:03.877Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 89.5,
            endSpeed: 81.9,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.33,
            coordinates: {
              aY: 26.38,
              aZ: -15.78,
              pfxX: 7.94,
              pfxZ: 9.55,
              pX: -0.22,
              pZ: 3.37,
              vX0: -8.32,
              vY0: -129.96,
              vZ0: -3.06,
              x: 125.24,
              y: 147.78,
              x0: 1.99,
              y0: 50.0,
              z0: 5.76,
              aX: 13.62
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2130,
              spinDirection: 143
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.53
          },
          hitData: {
            launchSpeed: 81.8,
            launchAngle: 66.0,
            totalDistance: 134.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '3',
            coordinates: { coordX: 152.5, coordY: 160.39 }
          },
          index: 2,
          playId: 'feda1e29-9d08-487f-ae4d-d6bfe0cd39a2',
          pitchNumber: 3,
          startTime: '2018-04-10T20:51:25.499Z',
          endTime: '2018-04-10T20:51:35.642Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:51:35.642Z',
      atBatIndex: 65
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Denard Span walks.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 66,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2018-04-10T20:51:56.590Z',
        endTime: '2018-04-10T20:53:01.461Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
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
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 74.7,
            endSpeed: 69.3,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 18.94,
              aZ: -36.07,
              pfxX: -0.68,
              pfxZ: -3.27,
              pX: -0.56,
              pZ: 0.41,
              vX0: -5.94,
              vY0: -108.37,
              vZ0: -2.95,
              x: 138.16,
              y: 227.72,
              x0: 2.31,
              y0: 50.0,
              z0: 5.73,
              aX: -0.8
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2199,
              spinDirection: 335
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.52,
            extension: 5.01
          },
          index: 0,
          playId: '390002dd-3456-4f1d-a0c8-0f2bb94cfdc9',
          pitchNumber: 1,
          startTime: '2018-04-10T20:52:02.669Z',
          endTime: '2018-04-10T20:52:06.440Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 90.3,
            endSpeed: 82.2,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 27.86,
              aZ: -13.68,
              pfxX: 8.18,
              pfxZ: 10.63,
              pX: 0.18,
              pZ: 4.21,
              vX0: -7.36,
              vY0: -131.09,
              vZ0: -1.39,
              x: 110.09,
              y: 125.04,
              x0: 1.96,
              y0: 50.0,
              z0: 5.77,
              aX: 14.23
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2218,
              spinDirection: 145
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.47
          },
          index: 1,
          playId: '9d29d1b6-f645-4470-b7ad-d955be1f33bc',
          pitchNumber: 2,
          startTime: '2018-04-10T20:52:27.894Z',
          endTime: '2018-04-10T20:52:31.965Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 90.1,
            endSpeed: 81.9,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 28.63,
              aZ: -13.41,
              pfxX: 8.22,
              pfxZ: 10.86,
              pX: 0.55,
              pZ: 3.52,
              vX0: -6.75,
              vY0: -130.9,
              vZ0: -3.02,
              x: 95.99,
              y: 143.81,
              x0: 2.1,
              y0: 50.0,
              z0: 5.7,
              aX: 14.21
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2179,
              spinDirection: 145
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.53
          },
          index: 2,
          playId: '85df9c5a-e747-417b-9525-a2c994b251b7',
          pitchNumber: 3,
          startTime: '2018-04-10T20:52:42.609Z',
          endTime: '2018-04-10T20:52:47.214Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 89.4,
            endSpeed: 80.5,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 29.83,
              aZ: -12.93,
              pfxX: 8.24,
              pfxZ: 11.48,
              pX: -1.18,
              pZ: 3.12,
              vX0: -10.43,
              vY0: -129.42,
              vZ0: -3.92,
              x: 161.95,
              y: 154.63,
              x0: 1.85,
              y0: 50.0,
              z0: 5.66,
              aX: 13.82
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2172,
              spinDirection: 148
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.5
          },
          index: 3,
          playId: 'b01a5934-2c78-40ef-8d07-86ca5eab5842',
          pitchNumber: 4,
          startTime: '2018-04-10T20:52:57.457Z',
          endTime: '2018-04-10T20:53:01.461Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:53:01.461Z',
      atBatIndex: 66
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Joey Wendle walks.   Denard Span to 2nd.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 67,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2018-04-10T20:53:26.934Z',
        endTime: '2018-04-10T20:55:56.703Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 502327,
          fullName: 'Hector Santiago',
          link: '/api/v1/people/502327'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        postOnSecond: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5, 6],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: 'r_adv_force',
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 6
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 6
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 80.1,
            strikeZoneTop: 3.23,
            strikeZoneBottom: 1.43,
            coordinates: {
              aY: 28.65,
              aZ: -17.81,
              pfxX: 9.63,
              pfxZ: 8.68,
              pX: 0.83,
              pZ: 3.16,
              vX0: -5.6,
              vY0: -128.33,
              vZ0: -3.14,
              x: 85.39,
              y: 153.42,
              x0: 1.8,
              y0: 50.0,
              z0: 5.8,
              aX: 15.93
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2079,
              spinDirection: 133
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.66
          },
          index: 0,
          playId: '6c789ba3-2450-418e-9493-1aa1e7c14f11',
          pitchNumber: 1,
          startTime: '2018-04-10T20:53:33.093Z',
          endTime: '2018-04-10T20:53:39.166Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 80.0,
            endSpeed: 73.0,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.44,
            coordinates: {
              aY: 21.89,
              aZ: -20.18,
              pfxX: 8.84,
              pfxZ: 8.79,
              pX: -0.85,
              pZ: 3.25,
              vX0: -8.01,
              vY0: -116.12,
              vZ0: -1.53,
              x: 149.27,
              y: 150.92,
              x0: 1.5,
              y0: 50.0,
              z0: 5.84,
              aX: 12.06
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1743,
              spinDirection: 138
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 5.54
          },
          index: 1,
          playId: '402bfc5b-9df3-4ab1-bb43-4af1914b416f',
          pitchNumber: 2,
          startTime: '2018-04-10T20:54:01.955Z',
          endTime: '2018-04-10T20:54:07.494Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 2, strikes: 0, outs: 1 },
          index: 2,
          playId: '26ad4528-c940-4c72-8862-a6b9f47900a9',
          startTime: '2018-04-10T20:54:21.341Z',
          endTime: '2018-04-10T20:54:29.649Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 2, strikes: 0, outs: 1 },
          index: 3,
          playId: '2f779e6a-347d-4cbe-ae97-f4c1bb88aa61',
          startTime: '2018-04-10T20:54:38.725Z',
          endTime: '2018-04-10T20:54:46.399Z',
          isPitch: false,
          type: 'pickoff'
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
            hasReview: false
          },
          count: { balls: 3, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 88.4,
            endSpeed: 80.1,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 28.28,
              aZ: -16.12,
              pfxX: 7.3,
              pfxZ: 9.68,
              pX: 0.17,
              pZ: 3.84,
              vX0: -6.42,
              vY0: -128.43,
              vZ0: -1.56,
              x: 110.69,
              y: 135.09,
              x0: 1.76,
              y0: 50.0,
              z0: 5.72,
              aX: 12.1
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2029,
              spinDirection: 146
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.66
          },
          index: 4,
          playId: '8b1932d0-96c1-479c-9afa-5e3b019602e8',
          pitchNumber: 3,
          startTime: '2018-04-10T20:55:02.682Z',
          endTime: '2018-04-10T20:55:07.787Z',
          isPitch: true,
          type: 'pitch'
        },
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 89.1,
            endSpeed: 80.8,
            strikeZoneTop: 3.16,
            strikeZoneBottom: 1.44,
            coordinates: {
              aY: 28.86,
              aZ: -14.15,
              pfxX: 7.41,
              pfxZ: 10.71,
              pX: 0.1,
              pZ: 2.35,
              vX0: -6.77,
              vY0: -129.39,
              vZ0: -5.35,
              x: 113.32,
              y: 175.29,
              x0: 1.8,
              y0: 50.0,
              z0: 5.54,
              aX: 12.46
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2097,
              spinDirection: 147
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.66
          },
          index: 5,
          playId: '09a250b3-c8f7-4b94-91a0-f1ca458e5e9c',
          pitchNumber: 4,
          startTime: '2018-04-10T20:55:31.077Z',
          endTime: '2018-04-10T20:55:34.981Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 80.9,
            strikeZoneTop: 3.19,
            strikeZoneBottom: 1.38,
            coordinates: {
              aY: 27.23,
              aZ: -14.18,
              pfxX: 7.59,
              pfxZ: 10.76,
              pX: -0.01,
              pZ: 1.63,
              vX0: -6.8,
              vY0: -128.66,
              vZ0: -6.8,
              x: 117.46,
              y: 194.82,
              x0: 1.68,
              y0: 50.0,
              z0: 5.41,
              aX: 12.69
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2055,
              spinDirection: 146
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.57
          },
          index: 6,
          playId: 'c7c2a1b9-dd9b-48fe-82ec-88aaaf5c7700',
          pitchNumber: 5,
          startTime: '2018-04-10T20:55:51.031Z',
          endTime: '2018-04-10T20:55:56.703Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T20:55:56.703Z',
      atBatIndex: 67
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Carlos Gomez singles on a line drive to right fielder Avisail Garcia.   Denard Span to 3rd.    Joey Wendle to 2nd.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 68,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2018-04-10T20:58:48.506Z',
        endTime: '2018-04-10T21:00:15.295Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 460576,
          fullName: 'Carlos Gomez',
          link: '/api/v1/people/460576'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 500872,
          fullName: 'Gregory Infante',
          link: '/api/v1/people/500872'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 460576,
          fullName: 'Carlos Gomez',
          link: '/api/v1/people/460576'
        },
        postOnSecond: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        postOnThird: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Loaded'
        }
      },
      pitchIndex: [2, 3, 4],
      actionIndex: [0, 1],
      runnerIndex: [0, 1, 2],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 541645, link: '/api/v1/people/541645' },
              position: {
                code: '9',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'RF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 0,
          startTime: '2018-04-10T20:58:49.506Z',
          endTime: '2018-04-10T20:58:50.506Z',
          isPitch: false,
          type: 'action',
          player: { id: 460576, link: '/api/v1/people/460576' }
        },
        {
          details: {
            description:
              'Pitching Change: Gregory Infante replaces Hector Santiago.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 1,
          startTime: '2018-04-10T20:58:50.506Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 500872, link: '/api/v1/people/500872' },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 78.1,
            endSpeed: 72.0,
            strikeZoneTop: 2.32,
            strikeZoneBottom: -0.97,
            coordinates: {
              aY: 22.35,
              aZ: -41.07,
              pfxX: 7.8,
              pfxZ: -6.86,
              pX: -0.18,
              pZ: 1.39,
              vX0: -0.05,
              vY0: -113.62,
              vZ0: -1.18,
              x: 123.83,
              y: 201.33,
              x0: -1.17,
              y0: 50.0,
              z0: 6.02,
              aX: 10.12
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2771,
              spinDirection: 48
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.49,
            extension: 5.6
          },
          index: 2,
          playId: '3b9992eb-fc8d-4c27-bb59-32561134768a',
          pitchNumber: 1,
          startTime: '2018-04-10T20:59:02.122Z',
          endTime: '2018-04-10T20:59:06.059Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Pickoff Attempt 2B',
            code: '2',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          index: 3,
          playId: '543e4de7-db48-47a7-89c2-b00d9807742a',
          startTime: '2018-04-10T20:59:29.983Z',
          endTime: '2018-04-10T20:59:39.159Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 83.3,
            endSpeed: 77.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 21.19,
              aZ: -36.04,
              pfxX: 5.19,
              pfxZ: -2.56,
              pX: -0.26,
              pZ: 1.92,
              vX0: 0.62,
              vY0: -121.36,
              vZ0: -2.12,
              x: 126.97,
              y: 187.09,
              x0: -1.2,
              y0: 50.0,
              z0: 5.91,
              aX: 7.82
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2549,
              spinDirection: 63
            },
            zone: 7,
            typeConfidence: 0.91,
            plateTime: 0.46,
            extension: 5.67
          },
          hitData: {
            launchSpeed: 79.9,
            launchAngle: 18.0,
            totalDistance: 229.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: { coordX: 167.03, coordY: 121.02 }
          },
          index: 4,
          playId: '5c62134d-1fae-4dbf-9b8e-3ce4bfdc0ee6',
          pitchNumber: 2,
          startTime: '2018-04-10T21:00:04.784Z',
          endTime: '2018-04-10T21:00:15.295Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:00:15.295Z',
      atBatIndex: 68
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'C.J. Cron strikes out swinging.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 69,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2018-04-10T21:00:49.880Z',
        endTime: '2018-04-10T21:01:52.492Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 0, strikes: 3, outs: 2 },
      matchup: {
        batter: {
          id: 543068,
          fullName: 'C.J. Cron',
          link: '/api/v1/people/543068'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 500872,
          fullName: 'Gregory Infante',
          link: '/api/v1/people/500872'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 460576,
          fullName: 'Carlos Gomez',
          link: '/api/v1/people/460576'
        },
        postOnSecond: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        postOnThird: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Loaded'
        }
      },
      pitchIndex: [0, 1, 2],
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
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 553882, link: '/api/v1/people/553882' },
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
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 94.0,
            endSpeed: 87.1,
            strikeZoneTop: 2.32,
            strikeZoneBottom: -0.95,
            coordinates: {
              aY: 26.4,
              aZ: -12.74,
              pfxX: -2.51,
              pfxZ: 10.1,
              pX: 0.42,
              pZ: 2.63,
              vX0: 3.66,
              vY0: -136.9,
              vZ0: -6.55,
              x: 101.02,
              y: 167.87,
              x0: -0.6,
              y0: 50.0,
              z0: 5.9,
              aX: -4.83
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2103,
              spinDirection: 192
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.14
          },
          index: 0,
          playId: '89ddadb1-6b36-4e6d-b1aa-eae8f9335e97',
          pitchNumber: 1,
          startTime: '2018-04-10T21:00:50.930Z',
          endTime: '2018-04-10T21:00:53.933Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 85.5,
            strikeZoneTop: 2.32,
            strikeZoneBottom: -0.95,
            coordinates: {
              aY: 26.69,
              aZ: -12.11,
              pfxX: -3.2,
              pfxZ: 10.83,
              pX: 0.55,
              pZ: 1.53,
              vX0: 4.49,
              vY0: -134.65,
              vZ0: -8.84,
              x: 95.95,
              y: 197.54,
              x0: -0.71,
              y0: 50.0,
              z0: 5.69,
              aX: -5.93
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2038,
              spinDirection: 195
            },
            zone: 3,
            typeConfidence: 0.87,
            plateTime: 0.41,
            extension: 6.12
          },
          index: 1,
          playId: '8aaef392-f307-4914-9b4f-14beb5d4087c',
          pitchNumber: 2,
          startTime: '2018-04-10T21:01:21.594Z',
          endTime: '2018-04-10T21:01:25.932Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 3, outs: 1 },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.4,
            strikeZoneTop: 2.32,
            strikeZoneBottom: -0.95,
            coordinates: {
              aY: 29.21,
              aZ: -12.56,
              pfxX: -2.76,
              pfxZ: 10.24,
              pX: -0.18,
              pZ: 3.55,
              vX0: 2.37,
              vY0: -137.22,
              vZ0: -4.1,
              x: 123.81,
              y: 142.94,
              x0: -0.69,
              y0: 50.0,
              z0: 5.91,
              aX: -5.29
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2128,
              spinDirection: 194
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.05
          },
          index: 2,
          playId: 'dc68426b-1964-4dcc-8a2c-299346a307cd',
          pitchNumber: 3,
          startTime: '2018-04-10T21:01:48.021Z',
          endTime: '2018-04-10T21:01:52.492Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:01:52.492Z',
      atBatIndex: 69
    },
    {
      result: {
        type: 'atBat',
        event: 'Forceout',
        eventType: 'force_out',
        description:
          'Matt Duffy grounds into a force out, fielded by third baseman Tyler Saladino.   Joey Wendle out at 3rd.    Carlos Gomez to 2nd.    Matt Duffy to 1st.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 70,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2018-04-10T21:02:16.760Z',
        endTime: '2018-04-10T21:03:51.611Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 2, strikes: 1, outs: 3 },
      matchup: {
        batter: {
          id: 622110,
          fullName: 'Matt Duffy',
          link: '/api/v1/people/622110'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 500872,
          fullName: 'Gregory Infante',
          link: '/api/v1/people/500872'
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
      pitchIndex: [0, 1, 2, 3],
      actionIndex: [],
      runnerIndex: [0, 1, 2],
      runners: [
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: null,
            outBase: '3B',
            isOut: true,
            outNumber: 3
          },
          details: {
            event: 'Forceout',
            eventType: 'force_out',
            movementReason: 'r_force_out',
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
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
              player: { id: 573135, link: '/api/v1/people/573135' },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Forceout',
            eventType: 'force_out',
            movementReason: 'r_adv_play',
            runner: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Forceout',
            eventType: 'force_out',
            movementReason: null,
            runner: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 91.7,
            endSpeed: 84.9,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 25.94,
              aZ: -12.63,
              pfxX: -2.85,
              pfxZ: 10.76,
              pX: 0.31,
              pZ: 0.71,
              vX0: 3.75,
              vY0: -133.29,
              vZ0: -10.65,
              x: 105.32,
              y: 219.53,
              x0: -0.74,
              y0: 50.0,
              z0: 5.65,
              aX: -5.18
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2064,
              spinDirection: 194
            },
            zone: 14,
            typeConfidence: 0.84,
            plateTime: 0.41,
            extension: 6.26
          },
          index: 0,
          playId: 'b4e4b811-91a8-4435-ad09-5bcbfd214b98',
          pitchNumber: 1,
          startTime: '2018-04-10T21:02:20.453Z',
          endTime: '2018-04-10T21:02:26.859Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 91.8,
            endSpeed: 84.8,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 26.38,
              aZ: -12.57,
              pfxX: -3.34,
              pfxZ: 10.78,
              pX: 0.11,
              pZ: 0.7,
              vX0: 3.51,
              vY0: -133.41,
              vZ0: -10.66,
              x: 112.82,
              y: 219.78,
              x0: -0.79,
              y0: 50.0,
              z0: 5.63,
              aX: -6.07
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2005,
              spinDirection: 196
            },
            zone: 14,
            typeConfidence: 0.85,
            plateTime: 0.41,
            extension: 6.26
          },
          index: 1,
          playId: 'cabdfb27-9052-47ba-abc2-b684ce077e7c',
          pitchNumber: 2,
          startTime: '2018-04-10T21:02:44.644Z',
          endTime: '2018-04-10T21:02:50.683Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 94.2,
            endSpeed: 85.8,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 30.95,
              aZ: -8.91,
              pfxX: -2.46,
              pfxZ: 12.27,
              pX: -0.22,
              pZ: 3.0,
              vX0: 2.66,
              vY0: -136.98,
              vZ0: -5.97,
              x: 125.57,
              y: 157.85,
              x0: -0.89,
              y0: 50.0,
              z0: 5.82,
              aX: -4.65
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 190
            },
            zone: 2,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.08
          },
          index: 2,
          playId: 'd89b9552-3890-4eb6-9527-6d549d45e8c7',
          pitchNumber: 3,
          startTime: '2018-04-10T21:03:16.175Z',
          endTime: '2018-04-10T21:03:23.082Z',
          isPitch: true,
          type: 'pitch'
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
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 90.8,
            endSpeed: 82.7,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 29.38,
              aZ: -13.54,
              pfxX: -2.37,
              pfxZ: 10.61,
              pX: 0.52,
              pZ: 2.48,
              vX0: 4.27,
              vY0: -132.02,
              vZ0: -5.8,
              x: 97.03,
              y: 171.87,
              x0: -0.81,
              y0: 50.0,
              z0: 5.71,
              aX: -4.15
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 1976,
              spinDirection: 190
            },
            zone: 6,
            typeConfidence: 0.79,
            plateTime: 0.42,
            extension: 6.32
          },
          hitData: {
            launchSpeed: 61.5,
            launchAngle: -35.0,
            totalDistance: 4.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: { coordX: 125.68, coordY: 203.43 }
          },
          index: 3,
          playId: '2a160003-47a5-4b9c-b0f4-cf62d0632f8a',
          pitchNumber: 4,
          startTime: '2018-04-10T21:03:43.970Z',
          endTime: '2018-04-10T21:03:51.611Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:03:51.611Z',
      atBatIndex: 70
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Jose Abreu doubles (2) on a line drive to left fielder Denard Span.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 71,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2018-04-10T21:06:09.943Z',
        endTime: '2018-04-10T21:07:10.076Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
      },
      count: { balls: 1, strikes: 1, outs: 0 },
      matchup: {
        batter: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 542882,
          fullName: 'Matt Andriese',
          link: '/api/v1/people/542882'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnSecond: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [1, 2, 3],
      actionIndex: [0],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Double',
            eventType: 'double',
            movementReason: null,
            runner: {
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
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
              player: { id: 452655, link: '/api/v1/people/452655' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description:
              'Pitching Change: Matt Andriese replaces Andrew Kittredge.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T21:06:10.943Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 542882, link: '/api/v1/people/542882' },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 91.4,
            endSpeed: 83.0,
            strikeZoneTop: 3.56,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 29.64,
              aZ: -12.75,
              pfxX: -5.57,
              pfxZ: 10.95,
              pX: 0.94,
              pZ: 2.8,
              vX0: 9.3,
              vY0: -132.65,
              vZ0: -4.35,
              x: 81.07,
              y: 163.15,
              x0: -1.89,
              y0: 50.0,
              z0: 5.4,
              aX: -9.88
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2365,
              spinDirection: 202
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.79
          },
          index: 1,
          playId: 'c22e79f5-0d4a-4512-9764-8693c3d54cdc',
          pitchNumber: 1,
          startTime: '2018-04-10T21:06:19.458Z',
          endTime: '2018-04-10T21:06:23.095Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 87.1,
            endSpeed: 80.6,
            strikeZoneTop: 3.57,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 23.93,
              aZ: -26.2,
              pfxX: 0.03,
              pfxZ: 3.67,
              pX: 2.14,
              pZ: 1.33,
              vX0: 9.82,
              vY0: -126.38,
              vZ0: -4.86,
              x: 35.53,
              y: 202.83,
              x0: -1.79,
              y0: 50.0,
              z0: 5.36,
              aX: 0.04
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2419,
              spinDirection: 160
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.58
          },
          index: 2,
          playId: '4a3d9770-46ec-4a56-80c0-445270b7404f',
          pitchNumber: 2,
          startTime: '2018-04-10T21:06:35.441Z',
          endTime: '2018-04-10T21:06:39.245Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 83.8,
            endSpeed: 77.3,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 23.03,
              aZ: -35.05,
              pfxX: -0.88,
              pfxZ: -1.91,
              pX: -0.14,
              pZ: 1.86,
              vX0: 5.34,
              vY0: -121.72,
              vZ0: -1.39,
              x: 122.51,
              y: 188.49,
              x0: -2.25,
              y0: 50.0,
              z0: 5.47,
              aX: -1.33
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2297,
              spinDirection: 353
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.46,
            extension: 5.22
          },
          hitData: {
            launchSpeed: 103.4,
            launchAngle: 10.0,
            totalDistance: 208.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: { coordX: 44.69, coordY: 98.61 }
          },
          index: 3,
          playId: '8e971103-4709-4885-8db9-628dc208ec77',
          pitchNumber: 3,
          startTime: '2018-04-10T21:06:55.061Z',
          endTime: '2018-04-10T21:07:10.076Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:07:10.076Z',
      atBatIndex: 71
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Matt Davidson strikes out swinging.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 72,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2018-04-10T21:07:43.908Z',
        endTime: '2018-04-10T21:10:26.539Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 3, strikes: 3, outs: 1 },
      matchup: {
        batter: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 542882,
          fullName: 'Matt Andriese',
          link: '/api/v1/people/542882'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnSecond: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 571602,
              fullName: 'Matt Davidson',
              link: '/api/v1/people/571602'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 467092, link: '/api/v1/people/467092' },
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
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.3,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 28.65,
              aZ: -15.14,
              pfxX: -6.43,
              pfxZ: 9.33,
              pX: -0.35,
              pZ: 3.52,
              vX0: 6.28,
              vY0: -134.19,
              vZ0: -2.61,
              x: 130.25,
              y: 143.68,
              x0: -1.88,
              y0: 50.0,
              z0: 5.59,
              aX: -11.74
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2451,
              spinDirection: 211
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.84
          },
          index: 0,
          playId: '45997522-f26c-4568-9fdd-1d2aa10b275f',
          pitchNumber: 1,
          startTime: '2018-04-10T21:07:51.284Z',
          endTime: '2018-04-10T21:07:55.454Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 85.3,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 28.85,
              aZ: -15.7,
              pfxX: -6.18,
              pfxZ: 8.81,
              pX: 0.12,
              pZ: 3.85,
              vX0: 7.0,
              vY0: -135.64,
              vZ0: -1.78,
              x: 112.3,
              y: 134.86,
              x0: -1.68,
              y0: 50.0,
              z0: 5.61,
              aX: -11.55
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2412,
              spinDirection: 211
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.81
          },
          index: 1,
          playId: '9547b51f-2078-43cc-ac9b-be3531efc1e3',
          pitchNumber: 2,
          startTime: '2018-04-10T21:08:14.640Z',
          endTime: '2018-04-10T21:08:19.445Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 85.9,
            endSpeed: 79.3,
            strikeZoneTop: 3.47,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 24.39,
              aZ: -30.01,
              pfxX: -2.47,
              pfxZ: 1.37,
              pX: 0.43,
              pZ: 0.45,
              vX0: 6.81,
              vY0: -124.61,
              vZ0: -5.93,
              x: 100.52,
              y: 226.75,
              x0: -2.01,
              y0: 50.0,
              z0: 5.33,
              aX: -3.89
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2267,
              spinDirection: 243
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.45,
            extension: 5.23
          },
          index: 2,
          playId: '0aa0d3b4-c93b-4938-8087-efcfb1558352',
          pitchNumber: 3,
          startTime: '2018-04-10T21:08:40.733Z',
          endTime: '2018-04-10T21:08:46.539Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 85.3,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 30.71,
              aZ: -13.29,
              pfxX: -4.56,
              pfxZ: 10.09,
              pX: 0.67,
              pZ: 3.19,
              vX0: 7.93,
              vY0: -136.14,
              vZ0: -3.72,
              x: 91.63,
              y: 152.66,
              x0: -1.7,
              y0: 50.0,
              z0: 5.5,
              aX: -8.53
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2460,
              spinDirection: 200
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.01
          },
          index: 3,
          playId: 'be12cbfc-8fb0-4715-93a9-f00ac9b2b8cb',
          pitchNumber: 4,
          startTime: '2018-04-10T21:09:16.002Z',
          endTime: '2018-04-10T21:09:19.772Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 94.0,
            endSpeed: 86.1,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 29.06,
              aZ: -12.04,
              pfxX: -3.5,
              pfxZ: 10.65,
              pX: 0.86,
              pZ: 2.07,
              vX0: 8.31,
              vY0: -136.41,
              vZ0: -6.66,
              x: 84.35,
              y: 182.82,
              x0: -1.77,
              y0: 50.0,
              z0: 5.37,
              aX: -6.62
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2465,
              spinDirection: 194
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.79
          },
          index: 4,
          playId: 'e4fb3795-4184-44fc-89f5-b514d31ecad6',
          pitchNumber: 5,
          startTime: '2018-04-10T21:09:47.099Z',
          endTime: '2018-04-10T21:09:51.637Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 3, outs: 0 },
          pitchData: {
            startSpeed: 93.9,
            endSpeed: 85.7,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 30.13,
              aZ: -13.71,
              pfxX: -3.63,
              pfxZ: 9.79,
              pX: 0.14,
              pZ: 3.61,
              vX0: 6.32,
              vY0: -136.52,
              vZ0: -2.65,
              x: 111.81,
              y: 141.35,
              x0: -1.74,
              y0: 50.0,
              z0: 5.54,
              aX: -6.86
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2325,
              spinDirection: 196
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 5.87
          },
          index: 5,
          playId: '35c048c8-dfed-42fa-bbd5-37caa1ef6eff',
          pitchNumber: 6,
          startTime: '2018-04-10T21:10:20.933Z',
          endTime: '2018-04-10T21:10:26.539Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:10:26.539Z',
      atBatIndex: 72
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Omar Narvaez grounds out, second baseman Joey Wendle to first baseman C.  J. Cron.   Jose Abreu to 3rd.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 73,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2018-04-10T21:10:54.066Z',
        endTime: '2018-04-10T21:12:08.941Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 1, outs: 2 },
      matchup: {
        batter: {
          id: 553882,
          fullName: 'Omar Narvaez',
          link: '/api/v1/people/553882'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 542882,
          fullName: 'Matt Andriese',
          link: '/api/v1/people/542882'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnThird: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2],
      actionIndex: [],
      runnerIndex: [0, 1],
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 553882,
              fullName: 'Omar Narvaez',
              link: '/api/v1/people/553882'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: 'r_adv_play',
            runner: {
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 84.6,
            strikeZoneTop: 1.94,
            strikeZoneBottom: -1.12,
            coordinates: {
              aY: 31.69,
              aZ: -13.16,
              pfxX: -4.38,
              pfxZ: 10.29,
              pX: -0.43,
              pZ: 2.83,
              vX0: 5.39,
              vY0: -135.59,
              vZ0: -4.48,
              x: 133.32,
              y: 162.24,
              x0: -1.88,
              y0: 50.0,
              z0: 5.44,
              aX: -8.08
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2437,
              spinDirection: 200
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.8
          },
          index: 0,
          playId: '25f265a3-8469-407e-83b3-8a61eace08dc',
          pitchNumber: 1,
          startTime: '2018-04-10T21:11:00.773Z',
          endTime: '2018-04-10T21:11:06.946Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 87.6,
            endSpeed: 81.6,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 22.38,
              aZ: -22.65,
              pfxX: -3.39,
              pfxZ: 5.73,
              pX: -0.36,
              pZ: 0.06,
              vX0: 5.35,
              vY0: -127.15,
              vZ0: -8.52,
              x: 130.89,
              y: 237.21,
              x0: -2.04,
              y0: 50.0,
              z0: 5.21,
              aX: -5.63
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2204,
              spinDirection: 209
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.18
          },
          index: 1,
          playId: 'f06e08ec-dd8b-4361-aeea-f545fcf1b918',
          pitchNumber: 2,
          startTime: '2018-04-10T21:11:29.101Z',
          endTime: '2018-04-10T21:11:32.404Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 81.0,
            endSpeed: 74.3,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.31,
            coordinates: {
              aY: 23.91,
              aZ: -42.32,
              pfxX: 4.83,
              pfxZ: -7.31,
              pX: -0.2,
              pZ: 1.62,
              vX0: 2.7,
              vY0: -117.55,
              vZ0: -0.29,
              x: 124.55,
              y: 194.95,
              x0: -1.99,
              y0: 50.0,
              z0: 5.7,
              aX: 6.71
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2494,
              spinDirection: 36
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.48,
            extension: 4.82
          },
          hitData: {
            launchSpeed: 102.2,
            launchAngle: 6.0,
            totalDistance: 107.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 157.34, coordY: 155.54 }
          },
          index: 2,
          playId: 'be6886d9-75da-402b-aa03-663ab24a12af',
          pitchNumber: 3,
          startTime: '2018-04-10T21:12:00.766Z',
          endTime: '2018-04-10T21:12:08.941Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:12:08.941Z',
      atBatIndex: 73
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Nicky Delmonico grounds out, second baseman Joey Wendle to first baseman C.  J. Cron.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 74,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2018-04-10T21:12:34.836Z',
        endTime: '2018-04-10T21:14:12.264Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 2, outs: 3 },
      matchup: {
        batter: {
          id: 547170,
          fullName: 'Nicky Delmonico',
          link: '/api/v1/people/547170'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 542882,
          fullName: 'Matt Andriese',
          link: '/api/v1/people/542882'
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
            outNumber: 3
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 547170,
              fullName: 'Nicky Delmonico',
              link: '/api/v1/people/547170'
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
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 83.8,
            strikeZoneTop: 3.57,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 31.33,
              aZ: -13.74,
              pfxX: -4.43,
              pfxZ: 10.15,
              pX: -1.53,
              pZ: 3.36,
              vX0: 2.9,
              vY0: -134.49,
              vZ0: -3.04,
              x: 175.3,
              y: 148.14,
              x0: -2.05,
              y0: 50.0,
              z0: 5.49,
              aX: -8.04
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2455,
              spinDirection: 202
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.78
          },
          index: 0,
          playId: '047c7e62-3a21-4f77-b01e-439baf6fb237',
          pitchNumber: 1,
          startTime: '2018-04-10T21:12:43.042Z',
          endTime: '2018-04-10T21:12:47.913Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 93.2,
            endSpeed: 83.9,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 33.4,
              aZ: -14.21,
              pfxX: -5.64,
              pfxZ: 9.83,
              pX: -0.99,
              pZ: 2.95,
              vX0: 4.51,
              vY0: -135.3,
              vZ0: -3.78,
              x: 154.61,
              y: 159.23,
              x0: -1.95,
              y0: 50.0,
              z0: 5.38,
              aX: -10.31
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2432,
              spinDirection: 207
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.63
          },
          index: 1,
          playId: '6a90fce7-8622-438e-aba0-025dc02024e7',
          pitchNumber: 2,
          startTime: '2018-04-10T21:13:03.696Z',
          endTime: '2018-04-10T21:13:09.735Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 93.0,
            endSpeed: 84.5,
            strikeZoneTop: 2.9,
            strikeZoneBottom: -0.92,
            coordinates: {
              aY: 30.77,
              aZ: -11.59,
              pfxX: -3.68,
              pfxZ: 11.22,
              pX: 0.39,
              pZ: 2.44,
              vX0: 6.87,
              vY0: -134.96,
              vZ0: -5.64,
              x: 102.25,
              y: 173.01,
              x0: -1.72,
              y0: 50.0,
              z0: 5.38,
              aX: -6.75
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2397,
              spinDirection: 194
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.69
          },
          index: 2,
          playId: 'b61bb613-2bb4-4f72-b4b6-94d151bb7bd5',
          pitchNumber: 3,
          startTime: '2018-04-10T21:13:33.325Z',
          endTime: '2018-04-10T21:13:40.165Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 80.1,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 24.39,
              aZ: -32.63,
              pfxX: -2.17,
              pfxZ: -0.28,
              pX: -1.06,
              pZ: 1.96,
              vX0: 3.53,
              vY0: -126.22,
              vZ0: -2.03,
              x: 157.23,
              y: 185.88,
              x0: -2.19,
              y0: 50.0,
              z0: 5.39,
              aX: -3.52
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2336,
              spinDirection: 281
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.28
          },
          hitData: {
            launchSpeed: 69.1,
            launchAngle: -29.0,
            totalDistance: 5.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 151.29, coordY: 162.21 }
          },
          index: 3,
          playId: '2d484294-4bda-4e55-bd71-9cc6bf829be5',
          pitchNumber: 4,
          startTime: '2018-04-10T21:14:03.922Z',
          endTime: '2018-04-10T21:14:12.264Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:14:12.264Z',
      atBatIndex: 74
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Mallex Smith walks.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 75,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2018-04-10T21:16:26.023Z',
        endTime: '2018-04-10T21:18:43.268Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 0 },
      matchup: {
        batter: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 500872,
          fullName: 'Gregory Infante',
          link: '/api/v1/people/500872'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 605480,
          fullName: 'Mallex Smith',
          link: '/api/v1/people/605480'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 93.2,
            endSpeed: 85.1,
            strikeZoneTop: 3.16,
            strikeZoneBottom: 1.32,
            coordinates: {
              aY: 30.29,
              aZ: -13.24,
              pfxX: -3.32,
              pfxZ: 10.22,
              pX: 0.39,
              pZ: 1.82,
              vX0: 4.64,
              vY0: -135.44,
              vZ0: -8.09,
              x: 102.32,
              y: 189.76,
              x0: -0.92,
              y0: 50.0,
              z0: 5.77,
              aX: -6.15
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2118,
              spinDirection: 196
            },
            zone: 9,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 5.98
          },
          index: 0,
          playId: '757cfcf7-79a4-40cf-ad47-87c96b6ab0dd',
          pitchNumber: 1,
          startTime: '2018-04-10T21:16:32.037Z',
          endTime: '2018-04-10T21:16:39.445Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 84.5,
            endSpeed: 77.9,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 24.75,
              aZ: -33.69,
              pfxX: 4.28,
              pfxZ: -0.99,
              pX: -0.12,
              pZ: 1.21,
              vX0: 0.82,
              vY0: -122.96,
              vZ0: -4.47,
              x: 121.58,
              y: 206.2,
              x0: -1.01,
              y0: 50.0,
              z0: 5.91,
              aX: 6.55
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2616,
              spinDirection: 72
            },
            zone: 13,
            typeConfidence: 0.93,
            plateTime: 0.45,
            extension: 5.55
          },
          index: 1,
          playId: 'faea2f08-9fe8-4065-84e2-2da0c89c2eef',
          pitchNumber: 2,
          startTime: '2018-04-10T21:16:57.896Z',
          endTime: '2018-04-10T21:17:01.567Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 92.7,
            endSpeed: 84.8,
            strikeZoneTop: 3.16,
            strikeZoneBottom: 1.32,
            coordinates: {
              aY: 29.32,
              aZ: -12.79,
              pfxX: -5.06,
              pfxZ: 10.54,
              pX: -0.49,
              pZ: 2.08,
              vX0: 2.49,
              vY0: -134.77,
              vZ0: -7.38,
              x: 135.75,
              y: 182.7,
              x0: -0.77,
              y0: 50.0,
              z0: 5.75,
              aX: -9.3
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2073,
              spinDirection: 205
            },
            zone: 4,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.1
          },
          index: 2,
          playId: '7be4826e-1754-40f9-b7a6-6cb76738c63c',
          pitchNumber: 3,
          startTime: '2018-04-10T21:17:15.080Z',
          endTime: '2018-04-10T21:17:21.620Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CH', description: 'Changeup' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 86.9,
            endSpeed: 81.4,
            strikeZoneTop: 3.19,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 21.76,
              aZ: -27.74,
              pfxX: -4.41,
              pfxZ: 2.69,
              pX: -1.13,
              pZ: 0.5,
              vX0: 0.75,
              vY0: -126.55,
              vZ0: -7.75,
              x: 160.24,
              y: 225.3,
              x0: -0.86,
              y0: 50.0,
              z0: 5.77,
              aX: -7.26
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1601,
              spinDirection: 245
            },
            zone: 13,
            typeConfidence: 0.41,
            plateTime: 0.43,
            extension: 6.21
          },
          index: 3,
          playId: '42bd1610-7ec1-43bd-8519-a08b3d5a1148',
          pitchNumber: 4,
          startTime: '2018-04-10T21:17:47.746Z',
          endTime: '2018-04-10T21:17:53.385Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 93.0,
            endSpeed: 84.9,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 30.24,
              aZ: -14.66,
              pfxX: -4.74,
              pfxZ: 9.47,
              pX: -1.16,
              pZ: 2.48,
              vX0: 0.46,
              vY0: -135.33,
              vZ0: -6.14,
              x: 161.34,
              y: 171.69,
              x0: -0.72,
              y0: 50.0,
              z0: 5.82,
              aX: -8.77
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 1994,
              spinDirection: 207
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 6.38
          },
          index: 4,
          playId: '8735a0c8-4bef-40f2-868d-4bc76b400657',
          pitchNumber: 5,
          startTime: '2018-04-10T21:18:14.773Z',
          endTime: '2018-04-10T21:18:19.578Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 85.3,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 30.09,
              aZ: -13.04,
              pfxX: -3.96,
              pfxZ: 10.26,
              pX: -1.42,
              pZ: 2.21,
              vX0: -0.25,
              vY0: -135.76,
              vZ0: -7.09,
              x: 171.2,
              y: 179.27,
              x0: -0.82,
              y0: 50.0,
              z0: 5.76,
              aX: -7.38
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2011,
              spinDirection: 202
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.35
          },
          index: 5,
          playId: 'df9e5fee-bad5-44ec-aa52-01457c2732d5',
          pitchNumber: 6,
          startTime: '2018-04-10T21:18:40.098Z',
          endTime: '2018-04-10T21:18:43.268Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:18:43.268Z',
      atBatIndex: 75
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Wilson Ramos walks.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 76,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2018-04-10T21:19:15.862Z',
        endTime: '2018-04-10T21:22:19.017Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 1 },
      matchup: {
        batter: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 500872,
          fullName: 'Gregory Infante',
          link: '/api/v1/people/500872'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 6, 7],
      actionIndex: [5],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: null,
            outBase: '2B',
            isOut: true,
            outNumber: 1
          },
          details: {
            event: 'Caught Stealing 2B',
            eventType: 'caught_stealing_2b',
            movementReason: 'r_caught_stealing_2b',
            runner: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 553882, link: '/api/v1/people/553882' },
              position: {
                code: '2',
                name: 'Catcher',
                type: 'Catcher',
                abbreviation: 'C'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 660162, link: '/api/v1/people/660162' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 7
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.4,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 29.14,
              aZ: -15.18,
              pfxX: -2.04,
              pfxZ: 9.28,
              pX: -1.33,
              pZ: 3.66,
              vX0: -0.77,
              vY0: -134.45,
              vZ0: -3.41,
              x: 167.53,
              y: 140.05,
              x0: -0.77,
              y0: 50.0,
              z0: 6.02,
              aX: -3.74
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2071,
              spinDirection: 193
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.48
          },
          index: 0,
          playId: '3ba6589e-8946-4432-9447-f85fe194d324',
          pitchNumber: 1,
          startTime: '2018-04-10T21:19:24.142Z',
          endTime: '2018-04-10T21:19:27.546Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 84.6,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 29.98,
              aZ: -12.64,
              pfxX: -2.57,
              pfxZ: 10.69,
              pX: -0.69,
              pZ: 0.9,
              vX0: 0.98,
              vY0: -134.5,
              vZ0: -10.34,
              x: 143.12,
              y: 214.45,
              x0: -0.72,
              y0: 50.0,
              z0: 5.7,
              aX: -4.7
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2051,
              spinDirection: 194
            },
            zone: 13,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.49
          },
          index: 1,
          playId: 'da910d2c-d080-4a52-b50d-9a2cafd2229e',
          pitchNumber: 2,
          startTime: '2018-04-10T21:19:52.304Z',
          endTime: '2018-04-10T21:19:56.708Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          index: 2,
          playId: 'ab30c97b-d0c7-4162-b5ac-6f8bc3dd8cbb',
          startTime: '2018-04-10T21:20:10.768Z',
          endTime: '2018-04-10T21:20:16.428Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 84.5,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.33,
            coordinates: {
              aY: 29.52,
              aZ: -13.5,
              pfxX: -4.49,
              pfxZ: 10.24,
              pX: -0.51,
              pZ: 1.43,
              vX0: 2.77,
              vY0: -134.3,
              vZ0: -8.63,
              x: 136.46,
              y: 200.25,
              x0: -0.97,
              y0: 50.0,
              z0: 5.65,
              aX: -8.18
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2055,
              spinDirection: 203
            },
            zone: 7,
            typeConfidence: 0.87,
            plateTime: 0.41,
            extension: 6.51
          },
          index: 3,
          playId: '6ff07900-4aa7-409a-8c01-3b206a7f3afe',
          pitchNumber: 3,
          startTime: '2018-04-10T21:20:29.441Z',
          endTime: '2018-04-10T21:20:34.713Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 3, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 84.3,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 30.21,
              aZ: -13.48,
              pfxX: -3.51,
              pfxZ: 10.24,
              pX: -1.32,
              pZ: 3.05,
              vX0: -0.17,
              vY0: -134.56,
              vZ0: -4.86,
              x: 167.31,
              y: 156.31,
              x0: -0.8,
              y0: 50.0,
              z0: 5.84,
              aX: -6.41
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 199
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.15
          },
          index: 4,
          playId: 'a047752f-3f36-4518-b658-acfd83029293',
          pitchNumber: 4,
          startTime: '2018-04-10T21:21:02.441Z',
          endTime: '2018-04-10T21:21:12.017Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description:
              'Mallex Smith caught stealing 2nd base, catcher Omar Narvaez to second baseman Yoan Moncada.',
            event: 'Caught Stealing 2B',
            eventType: 'caught_stealing_2b',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 1 },
          index: 5,
          actionPlayId: 'a047752f-3f36-4518-b658-acfd83029293',
          startTime: '2018-04-10T21:21:29.310Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: { id: 605480, link: '/api/v1/people/605480' }
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 92.1,
            endSpeed: 84.2,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.33,
            coordinates: {
              aY: 29.36,
              aZ: -12.31,
              pfxX: -4.44,
              pfxZ: 10.97,
              pX: 0.03,
              pZ: 1.33,
              vX0: 3.52,
              vY0: -133.84,
              vZ0: -9.18,
              x: 115.76,
              y: 202.85,
              x0: -0.72,
              y0: 50.0,
              z0: 5.69,
              aX: -8.04
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2148,
              spinDirection: 201
            },
            zone: 8,
            typeConfidence: 0.86,
            plateTime: 0.41,
            extension: 6.36
          },
          index: 6,
          playId: '20da021a-b346-49ad-91f3-fbfdabcf9d4f',
          pitchNumber: 5,
          startTime: '2018-04-10T21:21:45.350Z',
          endTime: '2018-04-10T21:21:51.656Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 93.8,
            endSpeed: 86.3,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 28.35,
              aZ: -11.25,
              pfxX: -4.4,
              pfxZ: 11.08,
              pX: 0.54,
              pZ: 0.69,
              vX0: 4.29,
              vY0: -136.19,
              vZ0: -11.15,
              x: 96.49,
              y: 220.26,
              x0: -0.48,
              y0: 50.0,
              z0: 5.6,
              aX: -8.3
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2162,
              spinDirection: 201
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.37
          },
          index: 7,
          playId: 'a70c91c4-eeb4-4709-a68d-b1f3e5fecea2',
          pitchNumber: 6,
          startTime: '2018-04-10T21:22:14.880Z',
          endTime: '2018-04-10T21:22:19.017Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:22:19.017Z',
      atBatIndex: 76
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Adeiny Hechavarria singles on a line drive to left fielder Nicky Delmonico.   Wilson Ramos to 2nd.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 77,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2018-04-10T21:22:53.338Z',
        endTime: '2018-04-10T21:23:09.668Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 0, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 500872,
          fullName: 'Gregory Infante',
          link: '/api/v1/people/500872'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        postOnSecond: {
          id: 467092,
          fullName: 'Wilson Ramos',
          link: '/api/v1/people/467092'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: [
            {
              player: { id: 547170, link: '/api/v1/people/547170' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 0
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 90.7,
            endSpeed: 83.6,
            strikeZoneTop: 3.13,
            strikeZoneBottom: 1.28,
            coordinates: {
              aY: 26.18,
              aZ: -13.79,
              pfxX: -4.26,
              pfxZ: 10.36,
              pX: 0.35,
              pZ: 1.47,
              vX0: 4.22,
              vY0: -131.89,
              vZ0: -8.47,
              x: 103.52,
              y: 199.1,
              x0: -0.71,
              y0: 50.0,
              z0: 5.72,
              aX: -7.56
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2076,
              spinDirection: 201
            },
            zone: 9,
            typeConfidence: 0.8,
            plateTime: 0.42,
            extension: 6.16
          },
          hitData: {
            launchSpeed: 76.6,
            launchAngle: 14.0,
            totalDistance: 198.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: { coordX: 105.88, coordY: 120.11 }
          },
          index: 0,
          playId: 'fa4ade90-4053-4aa9-ae40-16d68f8f6483',
          pitchNumber: 1,
          startTime: '2018-04-10T21:22:56.688Z',
          endTime: '2018-04-10T21:23:09.668Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:23:09.668Z',
      atBatIndex: 77
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Daniel Robertson singles on a line drive to center fielder Adam Engel.   Wilson Ramos scores.    Adeiny Hechavarria to 2nd.',
        rbi: 1,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 78,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2018-04-10T21:23:42.370Z',
        endTime: '2018-04-10T21:25:54.899Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: { balls: 3, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 500872,
          fullName: 'Gregory Infante',
          link: '/api/v1/people/500872'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        postOnSecond: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4],
      actionIndex: [],
      runnerIndex: [0, 1, 2, 3],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 641553, link: '/api/v1/people/641553' },
              position: {
                code: '8',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'CF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '2B',
            start: '3B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_play',
            runner: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            responsiblePitcher: {
              id: 500872,
              link: '/api/v1/people/500872'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 81.5,
            endSpeed: 75.4,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.45,
            coordinates: {
              aY: 23.47,
              aZ: -41.43,
              pfxX: 7.73,
              pfxZ: -6.53,
              pX: 1.74,
              pZ: 1.39,
              vX0: 3.84,
              vY0: -118.52,
              vZ0: -1.82,
              x: 50.49,
              y: 201.28,
              x0: -0.9,
              y0: 50.0,
              z0: 5.96,
              aX: 10.95
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2771,
              spinDirection: 51
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.47,
            extension: 5.34
          },
          index: 0,
          playId: 'f5a9dfcd-389e-4641-afe3-6b22c3d7fad7',
          pitchNumber: 1,
          startTime: '2018-04-10T21:23:48.373Z',
          endTime: '2018-04-10T21:23:52.944Z',
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
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.3,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 29.8,
              aZ: -11.08,
              pfxX: -3.51,
              pfxZ: 11.1,
              pX: 1.85,
              pZ: 2.04,
              vX0: 7.51,
              vY0: -136.89,
              vZ0: -7.93,
              x: 46.58,
              y: 183.83,
              x0: -0.47,
              y0: 50.0,
              z0: 5.72,
              aX: -6.68
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2204,
              spinDirection: 194
            },
            zone: 14,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.22
          },
          index: 1,
          playId: '5bd3ba37-19ef-4aca-be1e-ed2a16fb9480',
          pitchNumber: 2,
          startTime: '2018-04-10T21:24:08.660Z',
          endTime: '2018-04-10T21:24:15.166Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 85.5,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.33,
            coordinates: {
              aY: 27.58,
              aZ: -12.46,
              pfxX: -5.14,
              pfxZ: 10.57,
              pX: -0.25,
              pZ: 2.45,
              vX0: 3.02,
              vY0: -135.26,
              vZ0: -6.58,
              x: 126.65,
              y: 172.65,
              x0: -0.71,
              y0: 50.0,
              z0: 5.77,
              aX: -9.59
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2179,
              spinDirection: 205
            },
            zone: 4,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 6.18
          },
          index: 2,
          playId: '2402fa40-f03b-48d0-a552-3c80f2d44a25',
          pitchNumber: 3,
          startTime: '2018-04-10T21:24:34.085Z',
          endTime: '2018-04-10T21:24:42.827Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 86.0,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 26.63,
              aZ: -13.23,
              pfxX: -4.03,
              pfxZ: 10.09,
              pX: 1.18,
              pZ: 2.08,
              vX0: 6.04,
              vY0: -135.45,
              vZ0: -7.17,
              x: 72.14,
              y: 182.57,
              x0: -0.55,
              y0: 50.0,
              z0: 5.67,
              aX: -7.56
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 199
            },
            zone: 14,
            typeConfidence: 0.87,
            plateTime: 0.4,
            extension: 6.46
          },
          index: 3,
          playId: '68c4d679-b062-4b5b-ac59-9a2500b60215',
          pitchNumber: 4,
          startTime: '2018-04-10T21:25:20.498Z',
          endTime: '2018-04-10T21:25:25.403Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 91.6,
            endSpeed: 83.9,
            strikeZoneTop: 2.59,
            strikeZoneBottom: -1.08,
            coordinates: {
              aY: 28.69,
              aZ: -12.13,
              pfxX: -3.29,
              pfxZ: 11.16,
              pX: 0.86,
              pZ: 1.59,
              vX0: 4.84,
              vY0: -133.21,
              vZ0: -8.5,
              x: 84.25,
              y: 195.82,
              x0: -0.55,
              y0: 50.0,
              z0: 5.7,
              aX: -5.91
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2081,
              spinDirection: 194
            },
            zone: 12,
            typeConfidence: 0.84,
            plateTime: 0.41,
            extension: 6.46
          },
          hitData: {
            launchSpeed: 83.7,
            launchAngle: 15.0,
            totalDistance: 227.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 148.08, coordY: 107.85 }
          },
          index: 4,
          playId: 'c238327c-baca-408b-816c-1041a995b408',
          pitchNumber: 5,
          startTime: '2018-04-10T21:25:43.788Z',
          endTime: '2018-04-10T21:25:54.899Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:25:54.899Z',
      atBatIndex: 78
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Denard Span strikes out swinging.',
        rbi: 0,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 79,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2018-04-10T21:28:25.913Z',
        endTime: '2018-04-10T21:30:15.460Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 2, strikes: 3, outs: 2 },
      matchup: {
        batter: {
          id: 452655,
          fullName: 'Denard Span',
          link: '/api/v1/people/452655'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 607481,
          fullName: 'Aaron Bummer',
          link: '/api/v1/people/607481'
        },
        pitchHand: { code: 'L', description: 'Left' },
        postOnFirst: {
          id: 621002,
          fullName: 'Daniel Robertson',
          link: '/api/v1/people/621002'
        },
        postOnSecond: {
          id: 588751,
          fullName: 'Adeiny Hechavarria',
          link: '/api/v1/people/588751'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [2, 3, 4, 5, 6],
      actionIndex: [0, 1],
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
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
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
              player: { id: 553882, link: '/api/v1/people/553882' },
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
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 6,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 0,
          startTime: '2018-04-10T21:28:26.913Z',
          endTime: '2018-04-10T21:28:27.913Z',
          isPitch: false,
          type: 'action',
          player: { id: 452655, link: '/api/v1/people/452655' }
        },
        {
          details: {
            description:
              'Pitching Change: Aaron Bummer replaces Gregory Infante.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 6,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 1,
          startTime: '2018-04-10T21:28:27.913Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 607481, link: '/api/v1/people/607481' },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 85.1,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 28.64,
              aZ: -25.46,
              pfxX: 10.5,
              pfxZ: 3.67,
              pX: 1.03,
              pZ: 0.93,
              vX0: -7.68,
              vY0: -134.23,
              vZ0: -8.43,
              x: 77.59,
              y: 213.79,
              x0: 2.57,
              y0: 50.0,
              z0: 5.92,
              aX: 19.19
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1918,
              spinDirection: 106
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.99
          },
          index: 2,
          playId: 'd631d63d-4390-4d9f-b122-f529525b7a46',
          pitchNumber: 1,
          startTime: '2018-04-10T21:28:34.592Z',
          endTime: '2018-04-10T21:28:39.797Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 80.6,
            endSpeed: 74.9,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 20.84,
              aZ: -35.38,
              pfxX: -1.07,
              pfxZ: -2.29,
              pX: -1.08,
              pZ: 2.12,
              vX0: -7.38,
              vY0: -117.15,
              vZ0: -1.79,
              x: 158.05,
              y: 181.66,
              x0: 2.24,
              y0: 50.0,
              z0: 6.18,
              aX: -1.49
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 1956,
              spinDirection: 319
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.46
          },
          index: 3,
          playId: 'd6d44191-d8c4-4ab7-baca-81228789ce2d',
          pitchNumber: 2,
          startTime: '2018-04-10T21:28:54.045Z',
          endTime: '2018-04-10T21:28:58.149Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SL', description: 'Slider' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 81.0,
            endSpeed: 75.4,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 20.88,
              aZ: -35.25,
              pfxX: -3.42,
              pfxZ: -2.18,
              pX: -1.19,
              pZ: 1.32,
              vX0: -6.84,
              vY0: -117.6,
              vZ0: -3.41,
              x: 162.49,
              y: 203.09,
              x0: 2.19,
              y0: 50.0,
              z0: 6.04,
              aX: -4.82
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2073,
              spinDirection: 299
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.47,
            extension: 5.21
          },
          index: 4,
          playId: 'ec99ad97-aed5-4c9a-b730-0f6ff799636a',
          pitchNumber: 3,
          startTime: '2018-04-10T21:29:16.434Z',
          endTime: '2018-04-10T21:29:19.871Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 83.5,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 32.11,
              aZ: -26.78,
              pfxX: 12.5,
              pfxZ: 3.02,
              pX: 0.43,
              pZ: 1.79,
              vX0: -9.7,
              vY0: -133.67,
              vZ0: -5.63,
              x: 100.51,
              y: 190.41,
              x0: 2.51,
              y0: 50.0,
              z0: 5.88,
              aX: 22.35
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1969,
              spinDirection: 102
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.97
          },
          index: 5,
          playId: 'a389a51b-6599-4bc9-8a87-d4c039616a24',
          pitchNumber: 4,
          startTime: '2018-04-10T21:29:37.689Z',
          endTime: '2018-04-10T21:29:45.296Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 2, strikes: 3, outs: 1 },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 83.9,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 31.16,
              aZ: -30.43,
              pfxX: 12.24,
              pfxZ: 0.97,
              pX: 0.43,
              pZ: 2.18,
              vX0: -9.07,
              vY0: -133.83,
              vZ0: -4.15,
              x: 100.5,
              y: 179.99,
              x0: 2.29,
              y0: 50.0,
              z0: 5.95,
              aX: 22.01
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1941,
              spinDirection: 93
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.83
          },
          index: 6,
          playId: 'c8ce6f61-0473-4a50-8cec-88743376acec',
          pitchNumber: 5,
          startTime: '2018-04-10T21:30:04.449Z',
          endTime: '2018-04-10T21:30:15.460Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:30:15.460Z',
      atBatIndex: 79
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Joey Wendle strikes out swinging.',
        rbi: 0,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 80,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2018-04-10T21:30:40.180Z',
        endTime: '2018-04-10T21:31:18.856Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: { balls: 0, strikes: 3, outs: 3 },
      matchup: {
        batter: {
          id: 621563,
          fullName: 'Joey Wendle',
          link: '/api/v1/people/621563'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 607481,
          fullName: 'Aaron Bummer',
          link: '/api/v1/people/607481'
        },
        pitchHand: { code: 'L', description: 'Left' },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 2],
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
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 2
          },
          credits: [
            {
              player: { id: 553882, link: '/api/v1/people/553882' },
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
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 84.9,
            strikeZoneTop: 3.11,
            strikeZoneBottom: 1.37,
            coordinates: {
              aY: 29.82,
              aZ: -29.46,
              pfxX: 10.93,
              pfxZ: 1.48,
              pX: 0.64,
              pZ: 2.12,
              vX0: -8.53,
              vY0: -134.69,
              vZ0: -4.54,
              x: 92.63,
              y: 181.5,
              x0: 2.43,
              y0: 50.0,
              z0: 5.92,
              aX: 20.04
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1989,
              spinDirection: 96
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.61
          },
          index: 0,
          playId: '511c267c-7824-46ad-9300-d587f3daa01b',
          pitchNumber: 1,
          startTime: '2018-04-10T21:30:33.077Z',
          endTime: '2018-04-10T21:30:41.219Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 85.9,
            strikeZoneTop: 3.11,
            strikeZoneBottom: 1.37,
            coordinates: {
              aY: 27.77,
              aZ: -29.78,
              pfxX: 10.44,
              pfxZ: 1.28,
              pX: 1.38,
              pZ: 2.21,
              vX0: -6.5,
              vY0: -135.31,
              vZ0: -4.71,
              x: 64.28,
              y: 179.07,
              x0: 2.45,
              y0: 50.0,
              z0: 6.05,
              aX: 19.49
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2026,
              spinDirection: 95
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.84
          },
          index: 1,
          playId: 'd50c7730-181c-4f3d-9494-61d4ad718716',
          pitchNumber: 2,
          startTime: '2018-04-10T21:30:51.829Z',
          endTime: '2018-04-10T21:30:56.301Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 0, strikes: 3, outs: 2 },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 84.9,
            strikeZoneTop: 3.11,
            strikeZoneBottom: 1.37,
            coordinates: {
              aY: 29.27,
              aZ: -24.15,
              pfxX: 10.24,
              pfxZ: 4.38,
              pX: 1.98,
              pZ: 2.0,
              vX0: -4.48,
              vY0: -134.57,
              vZ0: -6.07,
              x: 41.56,
              y: 184.87,
              x0: 2.33,
              y0: 50.0,
              z0: 5.99,
              aX: 18.78
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1964,
              spinDirection: 111
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.84
          },
          index: 2,
          playId: '9a771cc0-405d-465f-a03b-64e7974d8db8',
          pitchNumber: 3,
          startTime: '2018-04-10T21:31:14.852Z',
          endTime: '2018-04-10T21:31:18.856Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:31:18.856Z',
      atBatIndex: 80
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Tim Anderson doubles (1) on a ground ball to left fielder Denard Span, deflected by third baseman Matt Duffy.',
        rbi: 0,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 81,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:33:52.869Z',
        endTime: '2018-04-10T21:35:26.237Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
      },
      count: { balls: 2, strikes: 2, outs: 0 },
      matchup: {
        batter: {
          id: 641313,
          fullName: 'Tim Anderson',
          link: '/api/v1/people/641313'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 543901,
          fullName: 'Ryan Weber',
          link: '/api/v1/people/543901'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnSecond: {
          id: 641313,
          fullName: 'Tim Anderson',
          link: '/api/v1/people/641313'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [1, 2, 3, 4, 5],
      actionIndex: [0],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Double',
            eventType: 'double',
            movementReason: null,
            runner: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 622110, link: '/api/v1/people/622110' },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_deflection'
            },
            {
              player: { id: 452655, link: '/api/v1/people/452655' },
              position: {
                code: '7',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'LF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Pitching Change: Ryan Weber replaces Matt Andriese.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 6,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T21:33:53.869Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 543901, link: '/api/v1/people/543901' },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 88.6,
            endSpeed: 80.0,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.39,
            coordinates: {
              aY: 30.06,
              aZ: -29.62,
              pfxX: -12.55,
              pfxZ: 1.55,
              pX: 0.04,
              pZ: 2.41,
              vX0: 8.1,
              vY0: -128.49,
              vZ0: -1.15,
              x: 115.46,
              y: 173.78,
              x0: -1.54,
              y0: 50.0,
              z0: 5.19,
              aX: -20.69
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1888,
              spinDirection: 262
            },
            zone: 5,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.56
          },
          index: 1,
          playId: 'd5cd07f4-3c68-46f4-b69a-13c187adcdbd',
          pitchNumber: 1,
          startTime: '2018-04-10T21:33:55.379Z',
          endTime: '2018-04-10T21:33:59.484Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 76.0,
            endSpeed: 69.2,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.39,
            coordinates: {
              aY: 23.28,
              aZ: -37.6,
              pfxX: 9.17,
              pfxZ: -4.48,
              pX: 1.29,
              pZ: 1.17,
              vX0: 3.59,
              vY0: -110.43,
              vZ0: -0.06,
              x: 67.83,
              y: 207.32,
              x0: -1.56,
              y0: 50.0,
              z0: 5.22,
              aX: 11.1
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2192,
              spinDirection: 66
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.51,
            extension: 5.51
          },
          index: 2,
          playId: 'd0fd07c2-a83e-4f1e-9c5a-0373d2b73604',
          pitchNumber: 2,
          startTime: '2018-04-10T21:34:09.026Z',
          endTime: '2018-04-10T21:34:12.463Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 75.0,
            endSpeed: 67.8,
            strikeZoneTop: 2.96,
            strikeZoneBottom: 1.2,
            coordinates: {
              aY: 23.46,
              aZ: -42.14,
              pfxX: 10.39,
              pfxZ: -8.54,
              pX: 0.28,
              pZ: 2.21,
              vX0: 1.47,
              vY0: -108.73,
              vZ0: 3.01,
              x: 106.27,
              y: 179.46,
              x0: -1.76,
              y0: 50.0,
              z0: 5.46,
              aX: 12.13
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 15.6,
              breakY: 24.0,
              spinRate: 2370,
              spinDirection: 54
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.52,
            extension: 4.99
          },
          index: 3,
          playId: '734b6992-68af-4092-b067-ec7972ba2989',
          pitchNumber: 3,
          startTime: '2018-04-10T21:34:23.140Z',
          endTime: '2018-04-10T21:34:28.112Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 77.7,
            endSpeed: 71.2,
            strikeZoneTop: 3.24,
            strikeZoneBottom: 1.38,
            coordinates: {
              aY: 23.65,
              aZ: -40.74,
              pfxX: 9.7,
              pfxZ: -6.76,
              pX: 2.52,
              pZ: 0.63,
              vX0: 5.64,
              vY0: -112.74,
              vZ0: -0.88,
              x: 20.8,
              y: 221.81,
              x0: -1.28,
              y0: 50.0,
              z0: 5.19,
              aX: 12.28
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2675,
              spinDirection: 58
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.5,
            extension: 5.18
          },
          index: 4,
          playId: 'bb801c85-842e-4b7c-9c1c-65c363312d31',
          pitchNumber: 4,
          startTime: '2018-04-10T21:34:46.497Z',
          endTime: '2018-04-10T21:34:52.436Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 2, strikes: 2, outs: 0 },
          pitchData: {
            startSpeed: 88.9,
            endSpeed: 81.7,
            strikeZoneTop: 2.96,
            strikeZoneBottom: 1.2,
            coordinates: {
              aY: 26.27,
              aZ: -31.86,
              pfxX: -10.75,
              pfxZ: 0.19,
              pX: -0.05,
              pZ: 1.61,
              vX0: 7.27,
              vY0: -129.13,
              vZ0: -2.58,
              x: 119.0,
              y: 195.29,
              x0: -1.5,
              y0: 50.0,
              z0: 5.07,
              aX: -18.19
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1970,
              spinDirection: 269
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.44
          },
          hitData: {
            launchSpeed: 80.5,
            launchAngle: -31.0,
            totalDistance: 5.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: { coordX: 67.7, coordY: 139.19 }
          },
          index: 5,
          playId: '69cca94e-f4ff-4a16-981a-0e932be35af9',
          pitchNumber: 5,
          startTime: '2018-04-10T21:35:08.920Z',
          endTime: '2018-04-10T21:35:26.237Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:35:26.237Z',
      atBatIndex: 81
    },
    {
      result: {
        type: 'atBat',
        event: 'Sac Fly',
        eventType: 'sac_fly',
        description:
          'Yolmer Sanchez out on a sacrifice fly to center fielder Carlos Gomez.   Tim Anderson scores.',
        rbi: 1,
        awayScore: 6,
        homeScore: 2
      },
      about: {
        atBatIndex: 82,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:36:22.069Z',
        endTime: '2018-04-10T21:38:07.798Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 2, strikes: 1, outs: 1 },
      matchup: {
        batter: {
          id: 570560,
          fullName: 'Yolmer Sanchez',
          link: '/api/v1/people/570560'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 543901,
          fullName: 'Ryan Weber',
          link: '/api/v1/people/543901'
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
      pitchIndex: [1, 2, 4, 5],
      actionIndex: [0, 3],
      runnerIndex: [0, 1, 2],
      runners: [
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Stolen Base 3B',
            eventType: 'stolen_base_3b',
            movementReason: 'r_stolen_base_3b',
            runner: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        },
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
            event: 'Sac Fly',
            eventType: 'sac_fly',
            movementReason: null,
            runner: {
              id: 570560,
              fullName: 'Yolmer Sanchez',
              link: '/api/v1/people/570560'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: [
            {
              player: { id: 460576, link: '/api/v1/people/460576' },
              position: {
                code: '8',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'CF'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '3B',
            start: '3B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Sac Fly',
            eventType: 'sac_fly',
            movementReason: 'r_adv_play',
            runner: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
            },
            responsiblePitcher: {
              id: 543901,
              link: '/api/v1/people/543901'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description:
              'Offensive Substitution: Pinch-hitter Yolmer Sanchez replaces Tyler Saladino.',
            event: 'Offensive Substitution',
            eventType: 'offensive_substitution',
            awayScore: 6,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 0 },
          index: 0,
          startTime: '2018-04-10T21:36:23.069Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 570560, link: '/api/v1/people/570560' },
          position: {
            code: '11',
            name: 'Pinch Hitter',
            type: 'Hitter',
            abbreviation: 'PH'
          },
          battingOrder: '801',
          replacedPlayer: { id: 573135, link: '/api/v1/people/573135' }
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 73.4,
            endSpeed: 66.9,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 20.37,
              aZ: -41.05,
              pfxX: 9.43,
              pfxZ: -7.83,
              pX: -1.64,
              pZ: 2.63,
              vX0: -1.69,
              vY0: -106.42,
              vZ0: 3.67,
              x: 179.42,
              y: 167.84,
              x0: -2.05,
              y0: 50.0,
              z0: 5.57,
              aX: 10.68
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2046,
              spinDirection: 52
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.53,
            extension: 4.8
          },
          index: 1,
          playId: '846d71b5-8014-4cb4-b59f-067127c57215',
          pitchNumber: 1,
          startTime: '2018-04-10T21:36:16.287Z',
          endTime: '2018-04-10T21:36:20.858Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false,
            runnerGoing: true
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          pitchData: {
            startSpeed: 89.5,
            endSpeed: 81.8,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 27.5,
              aZ: -33.02,
              pfxX: -11.14,
              pfxZ: -0.5,
              pX: -1.5,
              pZ: 2.94,
              vX0: 4.48,
              vY0: -130.09,
              vZ0: 0.6,
              x: 174.04,
              y: 159.34,
              x0: -1.79,
              y0: 50.0,
              z0: 5.21,
              aX: -19.08
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1885,
              spinDirection: 271
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.39
          },
          index: 2,
          playId: '7c190dca-9113-449c-b2c4-c51897d34775',
          pitchNumber: 2,
          startTime: '2018-04-10T21:36:51.555Z',
          endTime: '2018-04-10T21:36:58.729Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Tim Anderson steals (6) 3rd base.',
            event: 'Stolen Base 3B',
            eventType: 'stolen_base_3b',
            awayScore: 6,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 2, strikes: 0, outs: 0 },
          index: 3,
          actionPlayId: '7c190dca-9113-449c-b2c4-c51897d34775',
          startTime: '2018-04-10T21:37:14.130Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: { id: 641313, link: '/api/v1/people/641313' }
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 89.4,
            endSpeed: 82.1,
            strikeZoneTop: 3.1,
            strikeZoneBottom: 1.35,
            coordinates: {
              aY: 26.15,
              aZ: -30.56,
              pfxX: -11.2,
              pfxZ: 0.94,
              pX: -0.87,
              pZ: 2.51,
              vX0: 6.17,
              vY0: -129.92,
              vZ0: -0.83,
              x: 149.99,
              y: 170.99,
              x0: -1.81,
              y0: 50.0,
              z0: 5.15,
              aX: -19.22
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1861,
              spinDirection: 264
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.39
          },
          index: 4,
          playId: '4e626c3a-e1cc-4bbb-8fd1-3a9b1c274f3c',
          pitchNumber: 3,
          startTime: '2018-04-10T21:37:34.965Z',
          endTime: '2018-04-10T21:37:40.871Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 0 },
          pitchData: {
            startSpeed: 76.3,
            endSpeed: 70.1,
            strikeZoneTop: 3.1,
            strikeZoneBottom: 1.35,
            coordinates: {
              aY: 20.32,
              aZ: -41.12,
              pfxX: 9.46,
              pfxZ: -7.23,
              pX: -0.91,
              pZ: 2.51,
              vX0: -0.31,
              vY0: -110.74,
              vZ0: 3.07,
              x: 151.7,
              y: 171.05,
              x0: -2.0,
              y0: 50.0,
              z0: 5.42,
              aX: 11.71
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2165,
              spinDirection: 55
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.51,
            extension: 4.91
          },
          hitData: {
            launchSpeed: 88.3,
            launchAngle: 37.0,
            totalDistance: 303.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 115.55, coordY: 88.92 }
          },
          index: 5,
          playId: '192bcf4e-d1ae-4dfa-aafc-73c5c951d5b6',
          pitchNumber: 4,
          startTime: '2018-04-10T21:37:54.485Z',
          endTime: '2018-04-10T21:38:07.798Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:38:07.798Z',
      atBatIndex: 82
    },
    {
      result: {
        type: 'atBat',
        event: 'Field Error',
        eventType: 'field_error',
        description:
          'Leury Garcia reaches on a fielding error by second baseman Joey Wendle.',
        rbi: 0,
        awayScore: 6,
        homeScore: 2
      },
      about: {
        atBatIndex: 83,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:38:50.000Z',
        endTime: '2018-04-10T21:38:52.576Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 0, outs: 1 },
      matchup: {
        batter: {
          id: 544725,
          fullName: 'Leury Garcia',
          link: '/api/v1/people/544725'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 543901,
          fullName: 'Ryan Weber',
          link: '/api/v1/people/543901'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 544725,
          fullName: 'Leury Garcia',
          link: '/api/v1/people/544725'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [1],
      actionIndex: [0],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Field Error',
            eventType: 'field_error',
            movementReason: null,
            runner: {
              id: 544725,
              fullName: 'Leury Garcia',
              link: '/api/v1/people/544725'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: [
            {
              player: { id: 621563, link: '/api/v1/people/621563' },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_fielding_error'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description:
              'Offensive Substitution: Pinch-hitter Leury Garcia replaces Adam Engel.',
            event: 'Offensive Substitution',
            eventType: 'offensive_substitution',
            awayScore: 6,
            homeScore: 2,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 0,
          startTime: '2018-04-10T21:38:51.000Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 544725, link: '/api/v1/people/544725' },
          position: {
            code: '11',
            name: 'Pinch Hitter',
            type: 'Hitter',
            abbreviation: 'PH'
          },
          battingOrder: '901',
          replacedPlayer: { id: 641553, link: '/api/v1/people/641553' }
        },
        {
          details: {
            call: { code: 'D', description: 'In play, no out' },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          pitchData: {
            startSpeed: 89.0,
            endSpeed: 81.4,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.33,
            coordinates: {
              aY: 27.24,
              aZ: -29.44,
              pfxX: -11.66,
              pfxZ: 1.62,
              pX: -0.54,
              pZ: 1.6,
              vX0: 6.61,
              vY0: -129.16,
              vZ0: -3.09,
              x: 137.68,
              y: 195.67,
              x0: -1.62,
              y0: 50.0,
              z0: 5.07,
              aX: -19.67
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1959,
              spinDirection: 262
            },
            zone: 7,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.15
          },
          hitData: {
            launchSpeed: 83.0,
            launchAngle: -5.0,
            totalDistance: 17.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: { coordX: 142.2, coordY: 151.91 }
          },
          index: 1,
          playId: '1e05b378-5092-4bb1-9088-34d7ba775738',
          pitchNumber: 1,
          startTime: '2018-04-10T21:38:44.135Z',
          endTime: '2018-04-10T21:38:52.576Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:38:52.576Z',
      atBatIndex: 83
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Yoan Moncada walks.   Leury Garcia to 2nd.',
        rbi: 0,
        awayScore: 6,
        homeScore: 2
      },
      about: {
        atBatIndex: 84,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:39:31.615Z',
        endTime: '2018-04-10T21:41:14.852Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 1 },
      matchup: {
        batter: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 543901,
          fullName: 'Ryan Weber',
          link: '/api/v1/people/543901'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        postOnSecond: {
          id: 544725,
          fullName: 'Leury Garcia',
          link: '/api/v1/people/544725'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0, 1],
      runners: [
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: 'r_adv_force',
            runner: {
              id: 544725,
              fullName: 'Leury Garcia',
              link: '/api/v1/people/544725'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        },
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'C', description: 'Called Strike' },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 89.9,
            endSpeed: 82.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 27.72,
              aZ: -29.73,
              pfxX: -10.82,
              pfxZ: 1.42,
              pX: -0.44,
              pZ: 2.68,
              vX0: 7.12,
              vY0: -130.45,
              vZ0: -0.45,
              x: 133.84,
              y: 166.5,
              x0: -1.8,
              y0: 50.0,
              z0: 5.09,
              aX: -18.62
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1864,
              spinDirection: 261
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.26
          },
          index: 0,
          playId: 'a503a2f8-fbbb-46a6-aaf7-f351fbaa445b',
          pitchNumber: 1,
          startTime: '2018-04-10T21:39:26.076Z',
          endTime: '2018-04-10T21:39:29.680Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 89.8,
            endSpeed: 82.2,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 27.39,
              aZ: -27.07,
              pfxX: -11.07,
              pfxZ: 2.96,
              pX: -1.74,
              pZ: 2.14,
              vX0: 4.45,
              vY0: -130.48,
              vZ0: -2.25,
              x: 183.39,
              y: 181.06,
              x0: -2.03,
              y0: 50.0,
              z0: 5.05,
              aX: -19.09
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1851,
              spinDirection: 254
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.25
          },
          index: 1,
          playId: 'bdd1c28b-ac59-4ddf-a043-7b90920da1f4',
          pitchNumber: 2,
          startTime: '2018-04-10T21:39:43.994Z',
          endTime: '2018-04-10T21:39:46.991Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'CU', description: 'Curveball' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 77.1,
            endSpeed: 69.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 22.69,
              aZ: -38.75,
              pfxX: 10.26,
              pfxZ: -5.28,
              pX: -1.25,
              pZ: 3.55,
              vX0: -1.09,
              vY0: -111.74,
              vZ0: 4.71,
              x: 164.83,
              y: 142.94,
              x0: -2.09,
              y0: 50.0,
              z0: 5.43,
              aX: 12.8
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2154,
              spinDirection: 67
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.5,
            extension: 5.06
          },
          index: 2,
          playId: 'ef869445-cd68-4db6-8e96-8d223457ad00',
          pitchNumber: 3,
          startTime: '2018-04-10T21:40:04.815Z',
          endTime: '2018-04-10T21:40:08.586Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 88.8,
            endSpeed: 80.8,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 28.94,
              aZ: -30.3,
              pfxX: -11.71,
              pfxZ: 1.12,
              pX: -1.69,
              pZ: 2.01,
              vX0: 4.47,
              vY0: -129.06,
              vZ0: -1.85,
              x: 181.59,
              y: 184.5,
              x0: -1.93,
              y0: 50.0,
              z0: 5.09,
              aX: -19.59
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1951,
              spinDirection: 264
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.49
          },
          index: 3,
          playId: '4e9fabc4-ae15-46d1-b6f6-9124540b4f61',
          pitchNumber: 4,
          startTime: '2018-04-10T21:40:22.700Z',
          endTime: '2018-04-10T21:40:27.571Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 89.8,
            endSpeed: 81.7,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 28.4,
              aZ: -29.18,
              pfxX: -12.23,
              pfxZ: 1.75,
              pX: -0.31,
              pZ: 2.26,
              vX0: 7.75,
              vY0: -130.26,
              vZ0: -1.53,
              x: 128.99,
              y: 177.66,
              x0: -1.75,
              y0: 50.0,
              z0: 5.07,
              aX: -20.93
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1842,
              spinDirection: 261
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.33
          },
          index: 4,
          playId: 'fc7a2b61-929b-42dc-ba6a-2df877cc3a53',
          pitchNumber: 5,
          startTime: '2018-04-10T21:40:42.620Z',
          endTime: '2018-04-10T21:40:50.527Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'SI', description: 'Sinker' },
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 90.3,
            endSpeed: 82.5,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 28.14,
              aZ: -33.3,
              pfxX: -10.84,
              pfxZ: -0.64,
              pX: -1.55,
              pZ: 2.79,
              vX0: 4.71,
              vY0: -131.14,
              vZ0: 0.32,
              x: 176.11,
              y: 163.47,
              x0: -1.96,
              y0: 50.0,
              z0: 5.15,
              aX: -18.85
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1970,
              spinDirection: 272
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.27
          },
          index: 5,
          playId: '8f3d16b9-1531-40fe-91ec-e13e76786825',
          pitchNumber: 6,
          startTime: '2018-04-10T21:41:09.346Z',
          endTime: '2018-04-10T21:41:14.852Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:41:14.852Z',
      atBatIndex: 84
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Avisail Garcia grounds out softly, pitcher Alex Colome to first baseman C.  J. Cron.   Leury Garcia to 3rd.    Yoan Moncada to 2nd.',
        rbi: 0,
        awayScore: 6,
        homeScore: 2
      },
      about: {
        atBatIndex: 85,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:44:20.360Z',
        endTime: '2018-04-10T21:46:00.504Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 0, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 541645,
          fullName: 'Avisail Garcia',
          link: '/api/v1/people/541645'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 517008,
          fullName: 'Alex Colome',
          link: '/api/v1/people/517008'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnSecond: {
          id: 660162,
          fullName: 'Yoan Moncada',
          link: '/api/v1/people/660162'
        },
        postOnThird: {
          id: 544725,
          fullName: 'Leury Garcia',
          link: '/api/v1/people/544725'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [2, 3, 4],
      actionIndex: [0, 1],
      runnerIndex: [0, 1, 2],
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: [
            {
              player: { id: 517008, link: '/api/v1/people/517008' },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
              },
              credit: 'f_assist'
            },
            {
              player: { id: 543068, link: '/api/v1/people/543068' },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_putout'
            }
          ]
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: '3B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: 'r_adv_force',
            runner: {
              id: 544725,
              fullName: 'Leury Garcia',
              link: '/api/v1/people/544725'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: 'r_adv_force',
            runner: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 6,
            homeScore: 2,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 0,
          startTime: '2018-04-10T21:44:21.360Z',
          endTime: '2018-04-10T21:44:22.360Z',
          isPitch: false,
          type: 'action',
          player: { id: 541645, link: '/api/v1/people/541645' }
        },
        {
          details: {
            description: 'Pitching Change: Alex Colome replaces Ryan Weber.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 6,
            homeScore: 2,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 1 },
          index: 1,
          startTime: '2018-04-10T21:44:22.360Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: { id: 517008, link: '/api/v1/people/517008' },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
        {
          details: {
            call: { code: 'W', description: 'Swinging Strike (Blocked)' },
            description: 'Swinging Strike (Blocked)',
            code: 'W',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 1 },
          pitchData: {
            startSpeed: 88.2,
            endSpeed: 81.3,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 26.43,
              aZ: -25.35,
              pfxX: 3.62,
              pfxZ: 4.11,
              pX: 1.46,
              pZ: 0.95,
              vX0: 5.43,
              vY0: -128.04,
              vZ0: -8.04,
              x: 61.44,
              y: 213.19,
              x0: -1.16,
              y0: 50.0,
              z0: 6.11,
              aX: 6.02
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2128,
              spinDirection: 127
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.62
          },
          index: 2,
          playId: '4a78ffdd-1ced-4534-923b-d7a024226d9c',
          pitchNumber: 1,
          startTime: '2018-04-10T21:44:38.088Z',
          endTime: '2018-04-10T21:44:44.328Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 89.0,
            endSpeed: 81.7,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 27.55,
              aZ: -24.23,
              pfxX: 0.38,
              pfxZ: 4.7,
              pX: 0.74,
              pZ: 1.6,
              vX0: 5.15,
              vY0: -129.32,
              vZ0: -6.87,
              x: 88.97,
              y: 195.47,
              x0: -1.33,
              y0: 50.0,
              z0: 6.16,
              aX: 0.64
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2217,
              spinDirection: 165
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.61
          },
          index: 3,
          playId: '8488f5f9-7e68-4074-8236-50353570a482',
          pitchNumber: 2,
          startTime: '2018-04-10T21:45:13.290Z',
          endTime: '2018-04-10T21:45:19.029Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 2, outs: 1 },
          pitchData: {
            startSpeed: 88.9,
            endSpeed: 81.7,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 27.29,
              aZ: -24.49,
              pfxX: 1.23,
              pfxZ: 4.56,
              pX: 0.21,
              pZ: 0.89,
              vX0: 3.42,
              vY0: -129.13,
              vZ0: -8.17,
              x: 109.05,
              y: 214.77,
              x0: -1.29,
              y0: 50.0,
              z0: 5.98,
              aX: 2.07
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2162,
              spinDirection: 155
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.69
          },
          hitData: {
            trajectory: 'ground_ball',
            hardness: 'soft',
            location: '1',
            coordinates: { coordX: 125.85, coordY: 192.49 }
          },
          index: 4,
          playId: '8c06488b-e86a-4bb6-9185-2d19d87e0563',
          pitchNumber: 3,
          startTime: '2018-04-10T21:45:52.229Z',
          endTime: '2018-04-10T21:46:00.504Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:46:00.504Z',
      atBatIndex: 85
    },
    {
      result: {
        type: 'atBat',
        event: 'Home Run',
        eventType: 'home_run',
        description:
          'Jose Abreu homers (3) on a fly ball to center field.   Leury Garcia scores.    Yoan Moncada scores.',
        rbi: 3,
        awayScore: 6,
        homeScore: 5
      },
      about: {
        atBatIndex: 86,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:46:42.966Z',
        endTime: '2018-04-10T21:48:49.005Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 95
      },
      count: { balls: 1, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 547989,
          fullName: 'Jose Abreu',
          link: '/api/v1/people/547989'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 517008,
          fullName: 'Alex Colome',
          link: '/api/v1/people/517008'
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
      pitchIndex: [0, 1, 2, 3],
      actionIndex: [],
      runnerIndex: [0, 1, 2],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Home Run',
            eventType: 'home_run',
            movementReason: null,
            runner: {
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
            },
            responsiblePitcher: {
              id: 517008,
              link: '/api/v1/people/517008'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: true,
            playIndex: 3
          },
          credits: []
        },
        {
          movement: {
            originBase: '3B',
            start: '3B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Home Run',
            eventType: 'home_run',
            movementReason: 'r_adv_force',
            runner: {
              id: 544725,
              fullName: 'Leury Garcia',
              link: '/api/v1/people/544725'
            },
            responsiblePitcher: {
              id: 543901,
              link: '/api/v1/people/543901'
            },
            isScoringEvent: true,
            rbi: true,
            earned: false,
            teamUnearned: true,
            playIndex: 3
          },
          credits: []
        },
        {
          movement: {
            originBase: '2B',
            start: '2B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Home Run',
            eventType: 'home_run',
            movementReason: 'r_adv_force',
            runner: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
            },
            responsiblePitcher: {
              id: 543901,
              link: '/api/v1/people/543901'
            },
            isScoringEvent: true,
            rbi: true,
            earned: false,
            teamUnearned: true,
            playIndex: 3
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 85.7,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 27.17,
              aZ: -16.3,
              pfxX: -2.55,
              pfxZ: 8.57,
              pX: 1.3,
              pZ: 0.89,
              vX0: 7.48,
              vY0: -134.7,
              vZ0: -10.39,
              x: 67.6,
              y: 214.74,
              x0: -1.18,
              y0: 50.0,
              z0: 5.93,
              aX: -4.72
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2054,
              spinDirection: 192
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.99
          },
          index: 0,
          playId: '2393ff7f-3019-4561-b585-61b69e1678f6',
          pitchNumber: 1,
          startTime: '2018-04-10T21:46:38.675Z',
          endTime: '2018-04-10T21:46:42.980Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: '*B', description: 'Ball In Dirt' },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 89.1,
            endSpeed: 82.5,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 25.88,
              aZ: -24.99,
              pfxX: 1.13,
              pfxZ: 4.22,
              pX: 0.44,
              pZ: 0.14,
              vX0: 4.0,
              vY0: -129.36,
              vZ0: -10.1,
              x: 100.16,
              y: 234.98,
              x0: -1.27,
              y0: 50.0,
              z0: 6.0,
              aX: 1.92
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2177,
              spinDirection: 153
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 6.06
          },
          index: 1,
          playId: '7899cfae-a101-469e-8c34-50d4d5b3afe8',
          pitchNumber: 2,
          startTime: '2018-04-10T21:47:07.604Z',
          endTime: '2018-04-10T21:47:14.378Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.4,
            endSpeed: 80.2,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 26.66,
              aZ: -28.14,
              pfxX: 4.06,
              pfxZ: 2.48,
              pX: 0.61,
              pZ: 2.18,
              vX0: 3.41,
              vY0: -127.1,
              vZ0: -4.46,
              x: 93.81,
              y: 180.04,
              x0: -1.28,
              y0: 50.0,
              z0: 6.19,
              aX: 6.63
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2059,
              spinDirection: 114
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.79
          },
          index: 2,
          playId: 'bdc3a687-78f5-4cf7-b6a5-a5c15ea2b8ae',
          pitchNumber: 3,
          startTime: '2018-04-10T21:47:43.807Z',
          endTime: '2018-04-10T21:47:47.678Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'E', description: 'In play, run(s)' },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 87.8,
            endSpeed: 81.7,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 23.69,
              aZ: -28.08,
              pfxX: 3.21,
              pfxZ: 2.45,
              pX: 0.27,
              pZ: 1.33,
              vX0: 2.53,
              vY0: -127.77,
              vZ0: -6.5,
              x: 106.71,
              y: 202.89,
              x0: -1.15,
              y0: 50.0,
              z0: 6.08,
              aX: 5.37
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1948,
              spinDirection: 118
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.63
          },
          hitData: {
            launchSpeed: 108.0,
            launchAngle: 27.0,
            totalDistance: 408.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: { coordX: 115.37, coordY: 26.54 }
          },
          index: 3,
          playId: 'cb29af43-2c5d-43e3-af93-60005eb486d4',
          pitchNumber: 4,
          startTime: '2018-04-10T21:48:22.579Z',
          endTime: '2018-04-10T21:48:49.005Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:48:49.005Z',
      atBatIndex: 86
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Matt Davidson walks.',
        rbi: 0,
        awayScore: 6,
        homeScore: 5
      },
      about: {
        atBatIndex: 87,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:49:24.820Z',
        endTime: '2018-04-10T21:52:07.003Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: { balls: 4, strikes: 2, outs: 2 },
      matchup: {
        batter: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batSide: { code: 'R', description: 'Right' },
        pitcher: {
          id: 517008,
          fullName: 'Alex Colome',
          link: '/api/v1/people/517008'
        },
        pitchHand: { code: 'R', description: 'Right' },
        postOnFirst: {
          id: 571602,
          fullName: 'Matt Davidson',
          link: '/api/v1/people/571602'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5, 6],
      actionIndex: [],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: '1B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 571602,
              fullName: 'Matt Davidson',
              link: '/api/v1/people/571602'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 6
          },
          credits: []
        }
      ],
      playEvents: [
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
            hasReview: false
          },
          count: { balls: 1, strikes: 0, outs: 2 },
          pitchData: {
            startSpeed: 94.4,
            endSpeed: 87.0,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.41,
            coordinates: {
              aY: 28.07,
              aZ: -13.42,
              pfxX: -0.3,
              pfxZ: 9.78,
              pX: 1.24,
              pZ: 1.71,
              vX0: 5.84,
              vY0: -137.1,
              vZ0: -9.24,
              x: 69.63,
              y: 192.57,
              x0: -0.87,
              y0: 50.0,
              z0: 6.03,
              aX: -0.58
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2128,
              spinDirection: 177
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.07
          },
          index: 0,
          playId: 'bc07efca-ba49-49fd-b543-82e0b43d7d42',
          pitchNumber: 1,
          startTime: '2018-04-10T21:49:29.146Z',
          endTime: '2018-04-10T21:49:32.783Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 80.3,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.78,
              aZ: -24.6,
              pfxX: 0.58,
              pfxZ: 4.58,
              pX: 0.42,
              pZ: 3.03,
              vX0: 3.87,
              vY0: -128.35,
              vZ0: -3.09,
              x: 101.05,
              y: 157.1,
              x0: -1.19,
              y0: 50.0,
              z0: 6.19,
              aX: 0.95
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2124,
              spinDirection: 165
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.61
          },
          index: 1,
          playId: '078783f2-c53e-48dd-8a4a-6fba74e6deb2',
          pitchNumber: 2,
          startTime: '2018-04-10T21:49:48.565Z',
          endTime: '2018-04-10T21:49:52.269Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'B', description: 'Ball' },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 2, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 90.1,
            endSpeed: 83.3,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 26.44,
              aZ: -24.18,
              pfxX: 2.83,
              pfxZ: 4.59,
              pX: 1.21,
              pZ: 1.03,
              vX0: 5.3,
              vY0: -130.93,
              vZ0: -8.22,
              x: 70.78,
              y: 210.95,
              x0: -1.2,
              y0: 50.0,
              z0: 6.01,
              aX: 4.93
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2158,
              spinDirection: 137
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 5.71
          },
          index: 2,
          playId: 'c5fcbbf7-6c70-4da1-99bb-18bf63cba4c5',
          pitchNumber: 3,
          startTime: '2018-04-10T21:50:12.589Z',
          endTime: '2018-04-10T21:50:16.560Z',
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
            hasReview: false
          },
          count: { balls: 3, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 94.4,
            endSpeed: 86.3,
            strikeZoneTop: 3.51,
            strikeZoneBottom: 1.43,
            coordinates: {
              aY: 30.89,
              aZ: -12.0,
              pfxX: -0.9,
              pfxZ: 10.67,
              pX: 1.28,
              pZ: 0.75,
              vX0: 6.33,
              vY0: -136.8,
              vZ0: -11.84,
              x: 68.39,
              y: 218.53,
              x0: -0.96,
              y0: 50.0,
              z0: 5.96,
              aX: -1.7
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2240,
              spinDirection: 180
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.2
          },
          index: 3,
          playId: 'eab02f15-ae01-409b-a031-79ff2d52053f',
          pitchNumber: 4,
          startTime: '2018-04-10T21:50:35.879Z',
          endTime: '2018-04-10T21:50:41.051Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'S', description: 'Swinging Strike' },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FF', description: 'Four-Seam Fastball' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.0,
            strikeZoneTop: 3.7,
            strikeZoneBottom: 1.42,
            coordinates: {
              aY: 30.64,
              aZ: -13.04,
              pfxX: -1.63,
              pfxZ: 10.1,
              pX: 0.4,
              pZ: 2.78,
              vX0: 4.38,
              vY0: -136.89,
              vZ0: -6.57,
              x: 101.78,
              y: 163.63,
              x0: -1.01,
              y0: 50.0,
              z0: 6.1,
              aX: -3.09
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2112,
              spinDirection: 186
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.2
          },
          index: 4,
          playId: '37bf1011-dda0-484b-a149-18d55a6e868f',
          pitchNumber: 5,
          startTime: '2018-04-10T21:51:02.539Z',
          endTime: '2018-04-10T21:51:07.043Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'F', description: 'Foul' },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 3, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 88.0,
            endSpeed: 80.7,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.32,
              aZ: -27.19,
              pfxX: 3.51,
              pfxZ: 3.02,
              pX: 0.3,
              pZ: 1.83,
              vX0: 2.4,
              vY0: -127.98,
              vZ0: -5.51,
              x: 105.75,
              y: 189.35,
              x0: -1.11,
              y0: 50.0,
              z0: 6.15,
              aX: 5.8
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2292,
              spinDirection: 122
            },
            zone: 9,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.61
          },
          index: 5,
          playId: 'e28ee8e9-0c3b-4e91-a567-77388f91adc5',
          pitchNumber: 6,
          startTime: '2018-04-10T21:51:29.833Z',
          endTime: '2018-04-10T21:51:33.436Z',
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
            hasReview: false
          },
          count: { balls: 4, strikes: 2, outs: 2 },
          pitchData: {
            startSpeed: 93.9,
            endSpeed: 85.5,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.4,
            coordinates: {
              aY: 31.94,
              aZ: -11.33,
              pfxX: -3.37,
              pfxZ: 11.15,
              pX: -0.26,
              pZ: 1.2,
              vX0: 2.91,
              vY0: -136.37,
              vZ0: -10.79,
              x: 127.03,
              y: 206.31,
              x0: -0.91,
              y0: 50.0,
              z0: 6.01,
              aX: -6.31
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2129,
              spinDirection: 196
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.68
          },
          index: 6,
          playId: 'f12e61ab-9205-4a04-ada1-39ae3db1122e',
          pitchNumber: 7,
          startTime: '2018-04-10T21:52:03.833Z',
          endTime: '2018-04-10T21:52:07.003Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:52:07.003Z',
      atBatIndex: 87
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description:
          'Omar Narvaez lines out sharply to right fielder Mallex Smith.',
        rbi: 0,
        awayScore: 6,
        homeScore: 5
      },
      about: {
        atBatIndex: 88,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2018-04-10T21:53:04.732Z',
        endTime: '2018-04-10T21:54:33.249Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: { balls: 1, strikes: 1, outs: 3 },
      matchup: {
        batter: {
          id: 553882,
          fullName: 'Omar Narvaez',
          link: '/api/v1/people/553882'
        },
        batSide: { code: 'L', description: 'Left' },
        pitcher: {
          id: 517008,
          fullName: 'Alex Colome',
          link: '/api/v1/people/517008'
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
      pitchIndex: [1, 2, 3],
      actionIndex: [0],
      runnerIndex: [0],
      runners: [
        {
          movement: {
            originBase: null,
            start: null,
            end: null,
            outBase: '1B',
            isOut: true,
            outNumber: 3
          },
          details: {
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 553882,
              fullName: 'Omar Narvaez',
              link: '/api/v1/people/553882'
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
              player: { id: 605480, link: '/api/v1/people/605480' },
              position: {
                code: '9',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'RF'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 6,
            homeScore: 5,
            isScoringPlay: false,
            hasReview: false
          },
          count: { balls: 0, strikes: 0, outs: 2 },
          index: 0,
          startTime: '2018-04-10T21:53:05.732Z',
          isPitch: false,
          type: 'action',
          player: { id: 553882, link: '/api/v1/people/553882' }
        },
        {
          details: {
            call: { code: 'W', description: 'Swinging Strike (Blocked)' },
            description: 'Swinging Strike (Blocked)',
            code: 'W',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 0, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 88.8,
            endSpeed: 82.3,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.51,
            coordinates: {
              aY: 25.38,
              aZ: -26.52,
              pfxX: 4.47,
              pfxZ: 3.34,
              pX: 0.05,
              pZ: 0.71,
              vX0: 1.63,
              vY0: -129.03,
              vZ0: -8.49,
              x: 114.95,
              y: 219.56,
              x0: -1.17,
              y0: 50.0,
              z0: 6.07,
              aX: 7.57
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2242,
              spinDirection: 118
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.43,
            extension: 5.81
          },
          index: 1,
          playId: '81044b1b-02ad-4eb1-a8d8-eb15b6da16fb',
          pitchNumber: 1,
          startTime: '2018-04-10T21:53:25.448Z',
          endTime: '2018-04-10T21:53:32.589Z',
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
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 84.6,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 30.44,
              aZ: -14.99,
              pfxX: -1.11,
              pfxZ: 9.33,
              pX: -1.4,
              pZ: 3.31,
              vX0: -0.25,
              vY0: -135.11,
              vZ0: -5.07,
              x: 170.25,
              y: 149.32,
              x0: -1.16,
              y0: 50.0,
              z0: 6.27,
              aX: -2.05
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2158,
              spinDirection: 187
            },
            zone: 11,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.27
          },
          index: 2,
          playId: 'a4714d9a-d387-4b60-8647-96560561ab69',
          pitchNumber: 2,
          startTime: '2018-04-10T21:53:59.683Z',
          endTime: '2018-04-10T21:54:03.086Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: { code: 'X', description: 'In play, out(s)' },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: { code: 'FC', description: 'Cutter' },
            hasReview: false
          },
          count: { balls: 1, strikes: 1, outs: 2 },
          pitchData: {
            startSpeed: 85.4,
            endSpeed: 79.3,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.31,
            coordinates: {
              aY: 22.69,
              aZ: -28.68,
              pfxX: 3.02,
              pfxZ: 2.21,
              pX: -0.5,
              pZ: 2.15,
              vX0: 0.54,
              vY0: -124.37,
              vZ0: -4.2,
              x: 136.68,
              y: 180.56,
              x0: -1.11,
              y0: 50.0,
              z0: 6.21,
              aX: 4.78
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2225,
              spinDirection: 121
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.44,
            extension: 5.6
          },
          hitData: {
            launchSpeed: 100.8,
            launchAngle: 18.0,
            totalDistance: 287.0,
            trajectory: 'line_drive',
            hardness: 'hard',
            location: '9',
            coordinates: { coordX: 173.47, coordY: 88.49 }
          },
          index: 3,
          playId: '6d95baec-4712-44d3-8084-7bf7a9e52660',
          pitchNumber: 3,
          startTime: '2018-04-10T21:54:25.208Z',
          endTime: '2018-04-10T21:54:33.249Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2018-04-10T21:54:33.249Z',
      atBatIndex: 88
    }
  ],
  currentPlay: {
    result: {
      type: 'atBat',
      event: 'Lineout',
      eventType: 'field_out',
      description:
        'Omar Narvaez lines out sharply to right fielder Mallex Smith.',
      rbi: 0,
      awayScore: 6,
      homeScore: 5
    },
    about: {
      atBatIndex: 88,
      halfInning: 'bottom',
      isTopInning: false,
      inning: 9,
      startTime: '2018-04-10T21:53:04.732Z',
      endTime: '2018-04-10T21:54:33.249Z',
      isComplete: true,
      isScoringPlay: false,
      hasReview: false,
      hasOut: true,
      captivatingIndex: 0
    },
    count: { balls: 1, strikes: 1, outs: 3 },
    matchup: {
      batter: {
        id: 553882,
        fullName: 'Omar Narvaez',
        link: '/api/v1/people/553882'
      },
      batSide: { code: 'L', description: 'Left' },
      pitcher: {
        id: 517008,
        fullName: 'Alex Colome',
        link: '/api/v1/people/517008'
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
    pitchIndex: [1, 2, 3],
    actionIndex: [0],
    runnerIndex: [0],
    runners: [
      {
        movement: {
          originBase: null,
          start: null,
          end: null,
          outBase: '1B',
          isOut: true,
          outNumber: 3
        },
        details: {
          event: 'Lineout',
          eventType: 'field_out',
          movementReason: null,
          runner: {
            id: 553882,
            fullName: 'Omar Narvaez',
            link: '/api/v1/people/553882'
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
            player: { id: 605480, link: '/api/v1/people/605480' },
            position: {
              code: '9',
              name: 'Outfielder',
              type: 'Outfielder',
              abbreviation: 'RF'
            },
            credit: 'f_putout'
          }
        ]
      }
    ],
    playEvents: [
      {
        details: {
          description: 'Mound Visit.',
          event: 'Game Advisory',
          eventType: 'game_advisory',
          awayScore: 6,
          homeScore: 5,
          isScoringPlay: false,
          hasReview: false
        },
        count: { balls: 0, strikes: 0, outs: 2 },
        index: 0,
        startTime: '2018-04-10T21:53:05.732Z',
        isPitch: false,
        type: 'action',
        player: { id: 553882, link: '/api/v1/people/553882' }
      },
      {
        details: {
          call: { code: 'W', description: 'Swinging Strike (Blocked)' },
          description: 'Swinging Strike (Blocked)',
          code: 'W',
          ballColor: 'rgba(170, 21, 11, 1.0)',
          trailColor: 'rgba(152, 0, 101, 1.0)',
          isInPlay: false,
          isStrike: true,
          isBall: false,
          type: { code: 'FC', description: 'Cutter' },
          hasReview: false
        },
        count: { balls: 0, strikes: 1, outs: 2 },
        pitchData: {
          startSpeed: 88.8,
          endSpeed: 82.3,
          strikeZoneTop: 3.32,
          strikeZoneBottom: 1.51,
          coordinates: {
            aY: 25.38,
            aZ: -26.52,
            pfxX: 4.47,
            pfxZ: 3.34,
            pX: 0.05,
            pZ: 0.71,
            vX0: 1.63,
            vY0: -129.03,
            vZ0: -8.49,
            x: 114.95,
            y: 219.56,
            x0: -1.17,
            y0: 50.0,
            z0: 6.07,
            aX: 7.57
          },
          breaks: {
            breakAngle: 15.6,
            breakLength: 7.2,
            breakY: 24.0,
            spinRate: 2242,
            spinDirection: 118
          },
          zone: 14,
          typeConfidence: 2.0,
          plateTime: 0.43,
          extension: 5.81
        },
        index: 1,
        playId: '81044b1b-02ad-4eb1-a8d8-eb15b6da16fb',
        pitchNumber: 1,
        startTime: '2018-04-10T21:53:25.448Z',
        endTime: '2018-04-10T21:53:32.589Z',
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
          hasReview: false
        },
        count: { balls: 1, strikes: 1, outs: 2 },
        pitchData: {
          startSpeed: 92.8,
          endSpeed: 84.6,
          strikeZoneTop: 3.41,
          strikeZoneBottom: 1.58,
          coordinates: {
            aY: 30.44,
            aZ: -14.99,
            pfxX: -1.11,
            pfxZ: 9.33,
            pX: -1.4,
            pZ: 3.31,
            vX0: -0.25,
            vY0: -135.11,
            vZ0: -5.07,
            x: 170.25,
            y: 149.32,
            x0: -1.16,
            y0: 50.0,
            z0: 6.27,
            aX: -2.05
          },
          breaks: {
            breakAngle: 7.2,
            breakLength: 3.6,
            breakY: 24.0,
            spinRate: 2158,
            spinDirection: 187
          },
          zone: 11,
          typeConfidence: 2.0,
          plateTime: 0.41,
          extension: 6.27
        },
        index: 2,
        playId: 'a4714d9a-d387-4b60-8647-96560561ab69',
        pitchNumber: 2,
        startTime: '2018-04-10T21:53:59.683Z',
        endTime: '2018-04-10T21:54:03.086Z',
        isPitch: true,
        type: 'pitch'
      },
      {
        details: {
          call: { code: 'X', description: 'In play, out(s)' },
          description: 'In play, out(s)',
          code: 'X',
          ballColor: 'rgba(26, 86, 190, 1.0)',
          trailColor: 'rgba(152, 0, 101, 1.0)',
          isInPlay: true,
          isStrike: false,
          isBall: false,
          type: { code: 'FC', description: 'Cutter' },
          hasReview: false
        },
        count: { balls: 1, strikes: 1, outs: 2 },
        pitchData: {
          startSpeed: 85.4,
          endSpeed: 79.3,
          strikeZoneTop: 3.17,
          strikeZoneBottom: 1.31,
          coordinates: {
            aY: 22.69,
            aZ: -28.68,
            pfxX: 3.02,
            pfxZ: 2.21,
            pX: -0.5,
            pZ: 2.15,
            vX0: 0.54,
            vY0: -124.37,
            vZ0: -4.2,
            x: 136.68,
            y: 180.56,
            x0: -1.11,
            y0: 50.0,
            z0: 6.21,
            aX: 4.78
          },
          breaks: {
            breakAngle: 9.6,
            breakLength: 7.2,
            breakY: 24.0,
            spinRate: 2225,
            spinDirection: 121
          },
          zone: 4,
          typeConfidence: 2.0,
          plateTime: 0.44,
          extension: 5.6
        },
        hitData: {
          launchSpeed: 100.8,
          launchAngle: 18.0,
          totalDistance: 287.0,
          trajectory: 'line_drive',
          hardness: 'hard',
          location: '9',
          coordinates: { coordX: 173.47, coordY: 88.49 }
        },
        index: 3,
        playId: '6d95baec-4712-44d3-8084-7bf7a9e52660',
        pitchNumber: 3,
        startTime: '2018-04-10T21:54:25.208Z',
        endTime: '2018-04-10T21:54:33.249Z',
        isPitch: true,
        type: 'pitch'
      }
    ],
    playEndTime: '2018-04-10T21:54:33.249Z',
    atBatIndex: 88
  },
  scoringPlays: [16, 26, 38, 45, 48, 78, 82, 86],
  playsByInning: [
    {
      startIndex: 0,
      endIndex: 7,
      top: [0, 1, 2, 3, 4],
      bottom: [5, 6, 7],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 1,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 452655,
              fullName: 'Denard Span',
              link: '/api/v1/people/452655'
            },
            coordinates: { x: 126.54, y: 57.14 },
            type: 'O',
            description: 'Lineout'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 1,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            coordinates: { x: 121.01, y: 29.38 },
            type: 'O',
            description: 'Flyout'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 1,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            coordinates: { x: 113.5, y: 41.79 },
            type: 'O',
            description: 'Flyout'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 1,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
            },
            coordinates: { x: 151.29, y: 159.18 },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 8,
      endIndex: 13,
      top: [8, 9, 10],
      bottom: [11, 12, 13],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 2,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            coordinates: { x: 147.65, y: 166.45 },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 2,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            coordinates: { x: 155.53, y: 148.28 },
            type: 'O',
            description: 'Groundout'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 2,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 571602,
              fullName: 'Matt Davidson',
              link: '/api/v1/people/571602'
            },
            coordinates: { x: 113.74, y: 180.98 },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 2,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 456078,
              fullName: 'Welington Castillo',
              link: '/api/v1/people/456078'
            },
            coordinates: { x: 165.55, y: 97.16 },
            type: 'O',
            description: 'Flyout'
          }
        ]
      }
    },
    {
      startIndex: 14,
      endIndex: 23,
      top: [14, 15, 16, 17, 18, 19],
      bottom: [20, 21, 22, 23],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 3,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 621563,
              fullName: 'Joey Wendle',
              link: '/api/v1/people/621563'
            },
            coordinates: { x: 94.96, y: 111.33 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 3,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            coordinates: { x: 103.44, y: 161.6 },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 3,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            coordinates: { x: 125.14, y: 202.21 },
            type: 'O',
            description: 'Groundout'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 3,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            coordinates: { x: 144.62, y: 150.7 },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 24,
      endIndex: 34,
      top: [24, 25, 26, 27, 28, 29, 30],
      bottom: [31, 32, 33, 34],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 4,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            coordinates: { x: 103.84, y: 118.13 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 4,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            coordinates: { x: 157.34, y: 93.77 },
            type: 'O',
            description: 'Sac Fly'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 4,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            coordinates: { x: 109.5, y: 145.85 },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 4,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 456078,
              fullName: 'Welington Castillo',
              link: '/api/v1/people/456078'
            },
            coordinates: { x: 121.0, y: 190.07 },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 35,
      endIndex: 46,
      top: [35, 36, 37, 38, 39, 40, 41],
      bottom: [42, 43, 44, 45, 46],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 5,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            coordinates: { x: 75.99, y: 91.17 },
            type: 'O',
            description: 'Lineout'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 5,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            coordinates: { x: 173.48, y: 113.25 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 5,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            coordinates: { x: 130.69, y: 184.62 },
            type: 'O',
            description: 'Lineout'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 5,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            coordinates: { x: 159.51, y: 91.04 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 5,
            pitcher: {
              id: 608334,
              fullName: 'Carson Fulmer',
              link: '/api/v1/people/608334'
            },
            batter: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            coordinates: { x: 117.37, y: 190.07 },
            type: 'H',
            description: 'Single'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 5,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            coordinates: { x: 97.24, y: 41.81 },
            type: 'H',
            description: 'Double'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 5,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            coordinates: { x: 154.32, y: 156.15 },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 47,
      endIndex: 56,
      top: [47, 48, 49, 50, 51],
      bottom: [52, 53, 54, 55, 56],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 6,
            pitcher: {
              id: 502327,
              fullName: 'Hector Santiago',
              link: '/api/v1/people/502327'
            },
            batter: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            coordinates: { x: 88.3, y: 22.79 },
            type: 'H',
            description: 'Home Run'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 6,
            pitcher: {
              id: 502327,
              fullName: 'Hector Santiago',
              link: '/api/v1/people/502327'
            },
            batter: {
              id: 543068,
              fullName: 'C.J. Cron',
              link: '/api/v1/people/543068'
            },
            coordinates: { x: 177.94, y: 114.36 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 6,
            pitcher: {
              id: 502327,
              fullName: 'Hector Santiago',
              link: '/api/v1/people/502327'
            },
            batter: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            coordinates: { x: 124.83, y: 50.47 },
            type: 'O',
            description: 'Flyout'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 6,
            pitcher: {
              id: 605483,
              fullName: 'Blake Snell',
              link: '/api/v1/people/605483'
            },
            batter: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            coordinates: { x: 97.38, y: 169.47 },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 57,
      endIndex: 64,
      top: [57, 58, 59],
      bottom: [60, 61, 62, 63, 64],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 502327,
              fullName: 'Hector Santiago',
              link: '/api/v1/people/502327'
            },
            batter: {
              id: 605480,
              fullName: 'Mallex Smith',
              link: '/api/v1/people/605480'
            },
            coordinates: { x: 142.81, y: 156.76 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 502327,
              fullName: 'Hector Santiago',
              link: '/api/v1/people/502327'
            },
            batter: {
              id: 467092,
              fullName: 'Wilson Ramos',
              link: '/api/v1/people/467092'
            },
            coordinates: { x: 139.78, y: 151.91 },
            type: 'O',
            description: 'Grounded Into DP'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 502327,
              fullName: 'Hector Santiago',
              link: '/api/v1/people/502327'
            },
            batter: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            coordinates: { x: 171.99, y: 111.75 },
            type: 'O',
            description: 'Flyout'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 552640,
              fullName: 'Andrew Kittredge',
              link: '/api/v1/people/552640'
            },
            batter: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
            },
            coordinates: { x: 136.75, y: 147.67 },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 552640,
              fullName: 'Andrew Kittredge',
              link: '/api/v1/people/552640'
            },
            batter: {
              id: 573135,
              fullName: 'Tyler Saladino',
              link: '/api/v1/people/573135'
            },
            coordinates: { x: 90.3, y: 106.49 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 552640,
              fullName: 'Andrew Kittredge',
              link: '/api/v1/people/552640'
            },
            batter: {
              id: 641553,
              fullName: 'Adam Engel',
              link: '/api/v1/people/641553'
            },
            coordinates: { x: 131.13, y: 145.17 },
            type: 'O',
            description: 'Forceout'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 552640,
              fullName: 'Andrew Kittredge',
              link: '/api/v1/people/552640'
            },
            batter: {
              id: 660162,
              fullName: 'Yoan Moncada',
              link: '/api/v1/people/660162'
            },
            coordinates: { x: 176.12, y: 123.44 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 7,
            pitcher: {
              id: 552640,
              fullName: 'Andrew Kittredge',
              link: '/api/v1/people/552640'
            },
            batter: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            coordinates: { x: 78.77, y: 96.42 },
            type: 'O',
            description: 'Lineout'
          }
        ]
      }
    },
    {
      startIndex: 65,
      endIndex: 74,
      top: [65, 66, 67, 68, 69, 70],
      bottom: [71, 72, 73, 74],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 8,
            pitcher: {
              id: 502327,
              fullName: 'Hector Santiago',
              link: '/api/v1/people/502327'
            },
            batter: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            coordinates: { x: 152.5, y: 160.39 },
            type: 'O',
            description: 'Pop Out'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 8,
            pitcher: {
              id: 500872,
              fullName: 'Gregory Infante',
              link: '/api/v1/people/500872'
            },
            batter: {
              id: 460576,
              fullName: 'Carlos Gomez',
              link: '/api/v1/people/460576'
            },
            coordinates: { x: 167.03, y: 121.02 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 8,
            pitcher: {
              id: 500872,
              fullName: 'Gregory Infante',
              link: '/api/v1/people/500872'
            },
            batter: {
              id: 622110,
              fullName: 'Matt Duffy',
              link: '/api/v1/people/622110'
            },
            coordinates: { x: 125.68, y: 203.43 },
            type: 'O',
            description: 'Forceout'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 8,
            pitcher: {
              id: 542882,
              fullName: 'Matt Andriese',
              link: '/api/v1/people/542882'
            },
            batter: {
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
            },
            coordinates: { x: 44.69, y: 98.61 },
            type: 'H',
            description: 'Double'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 8,
            pitcher: {
              id: 542882,
              fullName: 'Matt Andriese',
              link: '/api/v1/people/542882'
            },
            batter: {
              id: 553882,
              fullName: 'Omar Narvaez',
              link: '/api/v1/people/553882'
            },
            coordinates: { x: 157.34, y: 155.54 },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 8,
            pitcher: {
              id: 542882,
              fullName: 'Matt Andriese',
              link: '/api/v1/people/542882'
            },
            batter: {
              id: 547170,
              fullName: 'Nicky Delmonico',
              link: '/api/v1/people/547170'
            },
            coordinates: { x: 151.29, y: 162.21 },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 75,
      endIndex: 88,
      top: [75, 76, 77, 78, 79, 80],
      bottom: [81, 82, 83, 84, 85, 86, 87, 88],
      hits: {
        away: [
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 500872,
              fullName: 'Gregory Infante',
              link: '/api/v1/people/500872'
            },
            batter: {
              id: 588751,
              fullName: 'Adeiny Hechavarria',
              link: '/api/v1/people/588751'
            },
            coordinates: { x: 105.88, y: 120.11 },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              id: 139,
              name: 'Tampa Bay Rays',
              link: '/api/v1/teams/139',
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 500872,
              fullName: 'Gregory Infante',
              link: '/api/v1/people/500872'
            },
            batter: {
              id: 621002,
              fullName: 'Daniel Robertson',
              link: '/api/v1/people/621002'
            },
            coordinates: { x: 148.08, y: 107.85 },
            type: 'H',
            description: 'Single'
          }
        ],
        home: [
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 543901,
              fullName: 'Ryan Weber',
              link: '/api/v1/people/543901'
            },
            batter: {
              id: 641313,
              fullName: 'Tim Anderson',
              link: '/api/v1/people/641313'
            },
            coordinates: { x: 67.7, y: 139.19 },
            type: 'H',
            description: 'Double'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 543901,
              fullName: 'Ryan Weber',
              link: '/api/v1/people/543901'
            },
            batter: {
              id: 570560,
              fullName: 'Yolmer Sanchez',
              link: '/api/v1/people/570560'
            },
            coordinates: { x: 115.55, y: 88.92 },
            type: 'O',
            description: 'Sac Fly'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 543901,
              fullName: 'Ryan Weber',
              link: '/api/v1/people/543901'
            },
            batter: {
              id: 544725,
              fullName: 'Leury Garcia',
              link: '/api/v1/people/544725'
            },
            coordinates: { x: 142.2, y: 151.91 },
            type: 'E',
            description: 'Field Error'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 517008,
              fullName: 'Alex Colome',
              link: '/api/v1/people/517008'
            },
            batter: {
              id: 541645,
              fullName: 'Avisail Garcia',
              link: '/api/v1/people/541645'
            },
            coordinates: { x: 125.85, y: 192.49 },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 517008,
              fullName: 'Alex Colome',
              link: '/api/v1/people/517008'
            },
            batter: {
              id: 547989,
              fullName: 'Jose Abreu',
              link: '/api/v1/people/547989'
            },
            coordinates: { x: 115.37, y: 26.54 },
            type: 'H',
            description: 'Home Run'
          },
          {
            team: {
              id: 145,
              name: 'Chicago White Sox',
              link: '/api/v1/teams/145',
              springLeague: {
                id: 114,
                name: 'Cactus League',
                link: '/api/v1/league/114',
                abbreviation: 'CL'
              },
              allStarStatus: 'N'
            },
            inning: 9,
            pitcher: {
              id: 517008,
              fullName: 'Alex Colome',
              link: '/api/v1/people/517008'
            },
            batter: {
              id: 553882,
              fullName: 'Omar Narvaez',
              link: '/api/v1/people/553882'
            },
            coordinates: { x: 173.47, y: 88.49 },
            type: 'O',
            description: 'Lineout'
          }
        ]
      }
    }
  ]
}
