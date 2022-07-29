export const testPlayByPlay = {
  copyright:
    'Copyright 2022 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt',
  allPlays: [
    {
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
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Dansby Swanson walks.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 1,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-27T16:39:04.870Z',
        endTime: '2022-07-27T16:42:16.416Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: {
        balls: 4,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
        postOnFirst: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
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
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.0,
            endSpeed: 83.6,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 23.53,
              aZ: -17.84,
              pfxX: -0.36,
              pfxZ: 8.1,
              pX: -0.44,
              pZ: 3.83,
              vX0: 4.51,
              vY0: -131.16,
              vZ0: -2.99,
              x: 133.82,
              y: 135.37,
              x0: -2.13,
              y0: 50.0,
              z0: 6.29,
              aX: -0.63
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2227,
              spinDirection: 187
            },
            zone: 11,
            typeConfidence: 0.66,
            plateTime: 0.42,
            extension: 6.32
          },
          index: 0,
          playId: '6c72644a-20a5-4f1b-b528-cabf582d9ab0',
          pitchNumber: 1,
          startTime: '2022-07-27T16:39:26.538Z',
          endTime: '2022-07-27T16:39:31.071Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 83.3,
            endSpeed: 77.6,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 20.69,
              aZ: -29.74,
              pfxX: 0.57,
              pfxZ: 1.61,
              pX: -0.0,
              pZ: 2.73,
              vX0: 5.02,
              vY0: -121.36,
              vZ0: -2.45,
              x: 117.06,
              y: 165.07,
              x0: -2.16,
              y0: 50.0,
              z0: 6.31,
              aX: 0.86
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2471,
              spinDirection: 90
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.45,
            extension: 6.64
          },
          index: 1,
          playId: 'b24ee765-6cb4-4e62-920e-14eaedb26a57',
          pitchNumber: 2,
          startTime: '2022-07-27T16:39:46.553Z',
          endTime: '2022-07-27T16:39:49.765Z',
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 91.8,
            endSpeed: 85.2,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 25.39,
              aZ: -22.53,
              pfxX: -6.66,
              pfxZ: 5.26,
              pX: -0.57,
              pZ: 2.51,
              vX0: 5.63,
              vY0: -133.66,
              vZ0: -6.0,
              x: 138.56,
              y: 171.1,
              x0: -1.82,
              y0: 50.0,
              z0: 6.37,
              aX: -12.2
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2014,
              spinDirection: 214
            },
            zone: 4,
            typeConfidence: 0.83,
            plateTime: 0.41,
            extension: 6.52
          },
          index: 2,
          playId: '1a1a3494-0f61-40c6-9c9b-88e9ebe09a5e',
          pitchNumber: 3,
          startTime: '2022-07-27T16:40:18.652Z',
          endTime: '2022-07-27T16:40:21.652Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 83.0,
            endSpeed: 77.5,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 20.7,
              aZ: -32.11,
              pfxX: 1.68,
              pfxZ: 0.04,
              pX: 0.38,
              pZ: 1.89,
              vX0: 5.36,
              vY0: -120.86,
              vZ0: -3.74,
              x: 102.62,
              y: 187.88,
              x0: -2.08,
              y0: 50.0,
              z0: 6.23,
              aX: 2.52
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2533,
              spinDirection: 64
            },
            zone: 9,
            typeConfidence: 0.91,
            plateTime: 0.45,
            extension: 6.46
          },
          index: 3,
          playId: 'd6ebcafb-ac53-461b-92d0-b073546ac899',
          pitchNumber: 4,
          startTime: '2022-07-27T16:40:47.624Z',
          endTime: '2022-07-27T16:40:54.298Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.1,
            endSpeed: 81.1,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 19.38,
              aZ: -26.43,
              pfxX: -7.47,
              pfxZ: 3.54,
              pX: 1.2,
              pZ: 0.61,
              vX0: 10.11,
              vY0: -125.02,
              vZ0: -8.61,
              x: 71.34,
              y: 222.22,
              x0: -1.88,
              y0: 50.0,
              z0: 6.19,
              aX: -12.12
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1576,
              spinDirection: 235
            },
            zone: 14,
            typeConfidence: 0.78,
            plateTime: 0.43,
            extension: 6.73
          },
          index: 4,
          playId: 'd1b329e2-1b05-4715-88cb-d74970502e2a',
          pitchNumber: 5,
          startTime: '2022-07-27T16:41:14.673Z',
          endTime: '2022-07-27T16:41:18.368Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 83.8,
            endSpeed: 78.3,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 21.98,
              aZ: -33.68,
              pfxX: 1.3,
              pfxZ: -1.0,
              pX: 1.65,
              pZ: 0.55,
              vX0: 8.48,
              vY0: -121.71,
              vZ0: -6.39,
              x: 54.03,
              y: 223.98,
              x0: -2.03,
              y0: 50.0,
              z0: 6.1,
              aX: 1.97
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2594,
              spinDirection: 75
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.45,
            extension: 6.47
          },
          index: 5,
          playId: '17681287-f916-4224-a399-3d59e91edf49',
          pitchNumber: 6,
          startTime: '2022-07-27T16:41:43.166Z',
          endTime: '2022-07-27T16:41:48.696Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 4,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 84.5,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 25.81,
              aZ: -21.56,
              pfxX: 0.24,
              pfxZ: 5.91,
              pX: 1.16,
              pZ: 2.13,
              vX0: 8.31,
              vY0: -132.6,
              vZ0: -6.49,
              x: 72.75,
              y: 181.23,
              x0: -2.03,
              y0: 50.0,
              z0: 6.16,
              aX: 0.43
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2457,
              spinDirection: 207
            },
            zone: 14,
            typeConfidence: 0.87,
            plateTime: 0.41,
            extension: 6.42
          },
          index: 6,
          playId: 'e4df52b2-87e1-4da4-b53b-c0934e9d645c',
          pitchNumber: 7,
          startTime: '2022-07-27T16:42:07.387Z',
          endTime: '2022-07-27T16:42:16.416Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T16:42:16.416Z',
      atBatIndex: 1
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Matt Olson flies out to right fielder Nick Castellanos.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 2,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-27T16:42:39.562Z',
        endTime: '2022-07-27T16:46:55.158Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 3,
        strikes: 2,
        outs: 2
      },
      matchup: {
        batter: {
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
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
        postOnFirst: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 9
          },
          credits: [
            {
              player: {
                id: 592206,
                link: '/api/v1/people/592206'
              },
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 85.4,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.79,
            coordinates: {
              aY: 28.64,
              aZ: -22.38,
              pfxX: -8.37,
              pfxZ: 5.31,
              pX: 0.38,
              pZ: 1.62,
              vX0: 9.04,
              vY0: -134.82,
              vZ0: -8.26,
              x: 102.46,
              y: 194.99,
              x0: -1.92,
              y0: 50.0,
              z0: 6.3,
              aX: -15.45
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2149,
              spinDirection: 215
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.67
          },
          index: 0,
          playId: '9a677cb8-02e7-4be9-b8ce-a64dce36a667',
          pitchNumber: 1,
          startTime: '2022-07-27T16:42:51.004Z',
          endTime: '2022-07-27T16:42:58.266Z',
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.1,
            endSpeed: 84.7,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 27.16,
              aZ: -18.24,
              pfxX: -7.57,
              pfxZ: 7.63,
              pX: 0.2,
              pZ: 2.87,
              vX0: 8.33,
              vY0: -133.82,
              vZ0: -5.89,
              x: 109.55,
              y: 161.24,
              x0: -1.97,
              y0: 50.0,
              z0: 6.4,
              aX: -13.81
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2004,
              spinDirection: 227
            },
            zone: 2,
            typeConfidence: 0.83,
            plateTime: 0.41,
            extension: 6.69
          },
          index: 1,
          playId: '8c24621b-4bef-4b44-bc56-f123b3b02197',
          pitchNumber: 2,
          startTime: '2022-07-27T16:43:13.402Z',
          endTime: '2022-07-27T16:43:16.651Z',
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
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          index: 2,
          playId: '3cb8d34f-45e5-4bca-ad15-ef108ab9cd6f',
          startTime: '2022-07-27T16:43:41.958Z',
          endTime: '2022-07-27T16:43:46.474Z',
          isPitch: false,
          type: 'pickoff'
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
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.7,
            endSpeed: 73.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.27,
              aZ: -39.89,
              pfxX: 2.78,
              pfxZ: -5.68,
              pX: -0.07,
              pZ: 1.23,
              vX0: 3.78,
              vY0: -115.96,
              vZ0: -2.95,
              x: 119.78,
              y: 205.5,
              x0: -2.09,
              y0: 50.0,
              z0: 6.34,
              aX: 3.78
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2432,
              spinDirection: 43
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.42
          },
          index: 3,
          playId: 'bef280a8-daee-475f-972e-5d734b3af7cc',
          pitchNumber: 3,
          startTime: '2022-07-27T16:44:03.464Z',
          endTime: '2022-07-27T16:44:07.747Z',
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
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          index: 4,
          playId: 'cd360259-d4ea-4b90-a663-6a7bf7567a09',
          startTime: '2022-07-27T16:44:31.833Z',
          endTime: '2022-07-27T16:44:35.919Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: {
              code: '*B',
              description: 'Ball In Dirt'
            },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.6,
            endSpeed: 73.9,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.19,
              aZ: -39.65,
              pfxX: 2.9,
              pfxZ: -5.52,
              pX: 0.61,
              pZ: 0.94,
              vX0: 5.15,
              vY0: -115.83,
              vZ0: -3.99,
              x: 93.73,
              y: 213.33,
              x0: -2.02,
              y0: 50.0,
              z0: 6.49,
              aX: 3.92
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2497,
              spinDirection: 41
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.47,
            extension: 6.4
          },
          index: 5,
          playId: 'bddc78e4-26c4-4f43-842e-95ae6c34d0d5',
          pitchNumber: 4,
          startTime: '2022-07-27T16:44:57.014Z',
          endTime: '2022-07-27T16:45:00.857Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.0,
            endSpeed: 86.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 25.63,
              aZ: -13.43,
              pfxX: -4.83,
              pfxZ: 9.98,
              pX: -0.34,
              pZ: 2.23,
              vX0: 6.13,
              vY0: -135.23,
              vZ0: -8.48,
              x: 129.92,
              y: 178.46,
              x0: -1.99,
              y0: 50.0,
              z0: 6.32,
              aX: -9.07
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2228,
              spinDirection: 210
            },
            zone: 7,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.52
          },
          index: 6,
          playId: '64102e85-1215-43e0-aa84-b31ef5ab2eda',
          pitchNumber: 5,
          startTime: '2022-07-27T16:45:25.430Z',
          endTime: '2022-07-27T16:45:31.254Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.1,
            endSpeed: 83.5,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 24.4,
              aZ: -21.73,
              pfxX: -1.86,
              pfxZ: 5.94,
              pX: 1.78,
              pZ: 3.35,
              vX0: 10.47,
              vY0: -130.94,
              vZ0: -3.47,
              x: 49.25,
              y: 148.41,
              x0: -2.01,
              y0: 50.0,
              z0: 6.29,
              aX: -3.27
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2414,
              spinDirection: 216
            },
            zone: 12,
            typeConfidence: 0.5,
            plateTime: 0.42,
            extension: 6.48
          },
          index: 7,
          playId: '27542043-4b62-4424-98c9-c3028ea01d04',
          pitchNumber: 6,
          startTime: '2022-07-27T16:45:54.139Z',
          endTime: '2022-07-27T16:46:01.366Z',
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
          count: {
            balls: 3,
            strikes: 2,
            outs: 1
          },
          index: 8,
          playId: 'c094e336-c3c8-4d10-99e2-faaebaabca37',
          startTime: '2022-07-27T16:46:21.002Z',
          endTime: '2022-07-27T16:46:25.609Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.5,
            endSpeed: 73.9,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 21.39,
              aZ: -40.33,
              pfxX: 2.55,
              pfxZ: -6.0,
              pX: 0.02,
              pZ: 1.37,
              vX0: 4.32,
              vY0: -115.76,
              vZ0: -2.45,
              x: 116.1,
              y: 201.91,
              x0: -2.2,
              y0: 50.01,
              z0: 6.3,
              aX: 3.46
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2450,
              spinDirection: 48
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.47
          },
          hitData: {
            launchSpeed: 84.3,
            launchAngle: 44.0,
            totalDistance: 286.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 203.38,
              coordY: 116.3
            }
          },
          index: 9,
          playId: '5be364d3-5d12-490f-aa55-2e98361c7997',
          pitchNumber: 7,
          startTime: '2022-07-27T16:46:44.607Z',
          endTime: '2022-07-27T16:46:55.158Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T16:46:55.158Z',
      atBatIndex: 2
    },
    {
      result: {
        type: 'atBat',
        event: 'Forceout',
        eventType: 'force_out',
        description:
          'Austin Riley grounds into a force out, fielded by second baseman Bryson Stott.   Dansby Swanson out at 2nd.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 3,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-27T16:47:18.312Z',
        endTime: '2022-07-27T16:49:22.481Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 3
      },
      matchup: {
        batter: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
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
            outNumber: 3
          },
          details: {
            event: 'Forceout',
            eventType: 'force_out',
            movementReason: 'r_force_out',
            runner: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
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
              player: {
                id: 681082,
                link: '/api/v1/people/681082'
              },
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
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 90.7,
            endSpeed: 84.6,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 23.69,
              aZ: -20.78,
              pfxX: -0.62,
              pfxZ: 6.38,
              pX: 2.14,
              pZ: 1.77,
              vX0: 10.88,
              vY0: -131.73,
              vZ0: -7.49,
              x: 35.41,
              y: 190.99,
              x0: -1.93,
              y0: 50.01,
              z0: 6.14,
              aX: -1.11
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2362,
              spinDirection: 216
            },
            zone: 14,
            typeConfidence: 0.81,
            plateTime: 0.41,
            extension: 6.52
          },
          index: 0,
          playId: '16f650fd-1731-441a-9751-37adb7118eca',
          pitchNumber: 1,
          startTime: '2022-07-27T16:47:32.412Z',
          endTime: '2022-07-27T16:47:38.134Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 86.3,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 25.38,
              aZ: -20.59,
              pfxX: -7.69,
              pfxZ: 6.19,
              pX: -0.07,
              pZ: 1.96,
              vX0: 7.32,
              vY0: -135.04,
              vZ0: -7.89,
              x: 119.68,
              y: 185.98,
              x0: -1.8,
              y0: 50.0,
              z0: 6.33,
              aX: -14.42
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 209
            },
            zone: 8,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.62
          },
          index: 1,
          playId: '5a2d16da-c2ea-40fd-9897-b11f48d58fd8',
          pitchNumber: 2,
          startTime: '2022-07-27T16:47:58.807Z',
          endTime: '2022-07-27T16:48:02.215Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 84.3,
            endSpeed: 78.5,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 22.51,
              aZ: -34.79,
              pfxX: 1.85,
              pfxZ: -1.7,
              pX: 1.51,
              pZ: 1.55,
              vX0: 7.84,
              vY0: -122.52,
              vZ0: -4.5,
              x: 59.37,
              y: 197.03,
              x0: -1.96,
              y0: 50.01,
              z0: 6.36,
              aX: 2.84
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2641,
              spinDirection: 69
            },
            zone: 14,
            typeConfidence: 0.92,
            plateTime: 0.45,
            extension: 6.58
          },
          index: 2,
          playId: '3401c4f1-56bf-437d-9319-ba975b00c2a8',
          pitchNumber: 3,
          startTime: '2022-07-27T16:48:23.407Z',
          endTime: '2022-07-27T16:48:27.957Z',
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
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 90.1,
            endSpeed: 83.0,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 26.56,
              aZ: -23.51,
              pfxX: -0.47,
              pfxZ: 4.95,
              pX: 0.25,
              pZ: 3.31,
              vX0: 6.0,
              vY0: -131.14,
              vZ0: -3.35,
              x: 107.61,
              y: 149.54,
              x0: -2.01,
              y0: 50.0,
              z0: 6.34,
              aX: -0.82
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2428,
              spinDirection: 187
            },
            zone: 3,
            typeConfidence: 0.88,
            plateTime: 0.42,
            extension: 6.62
          },
          index: 3,
          playId: '6d5d71fa-f378-4a9e-b79e-c5315b23d365',
          pitchNumber: 4,
          startTime: '2022-07-27T16:48:46.134Z',
          endTime: '2022-07-27T16:48:49.134Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 86.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 24.93,
              aZ: -21.19,
              pfxX: -9.12,
              pfxZ: 5.87,
              pX: 0.71,
              pZ: 2.33,
              vX0: 9.74,
              vY0: -134.81,
              vZ0: -6.92,
              x: 90.13,
              y: 175.82,
              x0: -1.74,
              y0: 50.0,
              z0: 6.39,
              aX: -17.07
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2209,
              spinDirection: 211
            },
            zone: 14,
            typeConfidence: 0.92,
            plateTime: 0.4,
            extension: 6.63
          },
          hitData: {
            launchSpeed: 109.6,
            launchAngle: -23.0,
            totalDistance: 6.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 140.04,
              coordY: 148.37
            }
          },
          index: 4,
          playId: 'dcf19267-7b67-4419-9c9d-f46d1da5dcc3',
          pitchNumber: 5,
          startTime: '2022-07-27T16:49:16.637Z',
          endTime: '2022-07-27T16:49:22.481Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T16:49:22.481Z',
      atBatIndex: 3
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Kyle Schwarber strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 4,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2022-07-27T16:51:45.843Z',
        endTime: '2022-07-27T16:53:32.517Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 3,
        strikes: 3,
        outs: 1
      },
      matchup: {
        batter: {
          id: 656941,
          fullName: 'Kyle Schwarber',
          link: '/api/v1/people/656941'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
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
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
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
              player: {
                id: 661388,
                link: '/api/v1/people/661388'
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
            startSpeed: 93.2,
            endSpeed: 85.7,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.85,
              aZ: -19.71,
              pfxX: -6.11,
              pfxZ: 6.65,
              pX: -0.84,
              pZ: 3.3,
              vX0: 6.48,
              vY0: -135.63,
              vZ0: -2.31,
              x: 149.11,
              y: 149.61,
              x0: -2.46,
              y0: 50.01,
              z0: 5.53,
              aX: -11.45
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2341,
              spinDirection: 228
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.14
          },
          index: 0,
          playId: 'f9ddbe91-7d6d-4f79-88cc-6770c06a1fbd',
          pitchNumber: 1,
          startTime: '2022-07-27T16:51:55.486Z',
          endTime: '2022-07-27T16:52:00.629Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.8,
            endSpeed: 86.4,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 31.39,
              aZ: -18.35,
              pfxX: -7.57,
              pfxZ: 7.19,
              pX: -1.19,
              pZ: 3.56,
              vX0: 5.7,
              vY0: -137.91,
              vZ0: -2.05,
              x: 162.47,
              y: 142.62,
              x0: -2.31,
              y0: 50.0,
              z0: 5.56,
              aX: -14.54
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2356,
              spinDirection: 227
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.21
          },
          index: 1,
          playId: '25ad5ade-155c-4ee4-be47-98c3ccddf930',
          pitchNumber: 2,
          startTime: '2022-07-27T16:52:22.308Z',
          endTime: '2022-07-27T16:52:28.218Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 2,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.2,
            endSpeed: 87.8,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.25,
              aZ: -18.57,
              pfxX: -8.55,
              pfxZ: 6.95,
              pX: -0.1,
              pZ: 2.08,
              vX0: 9.28,
              vY0: -138.4,
              vZ0: -5.93,
              x: 120.89,
              y: 182.53,
              x0: -2.37,
              y0: 50.01,
              z0: 5.48,
              aX: -16.74
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2465,
              spinDirection: 234
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.34
          },
          index: 2,
          playId: '75ab65b8-eca4-438f-b3c5-a340262e2bd7',
          pitchNumber: 3,
          startTime: '2022-07-27T16:52:38.307Z',
          endTime: '2022-07-27T16:52:41.448Z',
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
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 87.6,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 29.89,
              aZ: -16.78,
              pfxX: -7.15,
              pfxZ: 7.83,
              pX: -0.74,
              pZ: 3.43,
              vX0: 7.3,
              vY0: -139.02,
              vZ0: -2.78,
              x: 145.36,
              y: 146.21,
              x0: -2.47,
              y0: 50.01,
              z0: 5.55,
              aX: -14.07
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2447,
              spinDirection: 225
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.11
          },
          index: 3,
          playId: 'b7591647-b15e-47ae-8455-e7d4258c7f9a',
          pitchNumber: 4,
          startTime: '2022-07-27T16:52:54.410Z',
          endTime: '2022-07-27T16:52:57.958Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 87.6,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 30.11,
              aZ: -18.27,
              pfxX: -6.48,
              pfxZ: 7.07,
              pX: -1.55,
              pZ: 3.99,
              vX0: 4.87,
              vY0: -139.12,
              vZ0: -1.16,
              x: 176.01,
              y: 131.05,
              x0: -2.48,
              y0: 50.0,
              z0: 5.62,
              aX: -12.75
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2391,
              spinDirection: 227
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.11
          },
          index: 4,
          playId: '004c8f7e-8b89-48c1-a074-7a92ecd204d7',
          pitchNumber: 5,
          startTime: '2022-07-27T16:53:13.557Z',
          endTime: '2022-07-27T16:53:16.612Z',
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
            balls: 3,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 81.7,
            endSpeed: 75.2,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 24.67,
              aZ: -40.17,
              pfxX: 7.59,
              pfxZ: -5.63,
              pX: 0.45,
              pZ: 1.33,
              vX0: 4.8,
              vY0: -118.86,
              vZ0: -1.37,
              x: 99.84,
              y: 202.83,
              x0: -2.59,
              y0: 50.01,
              z0: 5.59,
              aX: 10.76
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3087,
              spinDirection: 59
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.18
          },
          index: 5,
          playId: 'd4118f9d-5e11-4724-807d-654bb956288b',
          pitchNumber: 6,
          startTime: '2022-07-27T16:53:28.583Z',
          endTime: '2022-07-27T16:53:32.517Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T16:53:32.517Z',
      atBatIndex: 4
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Rhys Hoskins singles on a line drive to left fielder Marcell Ozuna.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 5,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2022-07-27T16:53:56.708Z',
        endTime: '2022-07-27T16:55:19.710Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
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
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
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
              player: {
                id: 542303,
                link: '/api/v1/people/542303'
              },
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
            outs: 1
          },
          pitchData: {
            startSpeed: 94.5,
            endSpeed: 86.7,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.75,
            coordinates: {
              aY: 29.15,
              aZ: -14.55,
              pfxX: -8.03,
              pfxZ: 9.2,
              pX: 0.16,
              pZ: 1.83,
              vX0: 9.32,
              vY0: -137.22,
              vZ0: -7.11,
              x: 110.8,
              y: 189.3,
              x0: -2.23,
              y0: 50.0,
              z0: 5.44,
              aX: -15.39
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2373,
              spinDirection: 232
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.19
          },
          index: 0,
          playId: '80ca067d-3811-4a14-b877-5a7eb659d9fd',
          pitchNumber: 1,
          startTime: '2022-07-27T16:54:05.052Z',
          endTime: '2022-07-27T16:54:10.876Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.8,
            endSpeed: 86.4,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 31.27,
              aZ: -19.29,
              pfxX: -8.73,
              pfxZ: 6.74,
              pX: 0.82,
              pZ: 2.14,
              vX0: 11.42,
              vY0: -137.53,
              vZ0: -5.45,
              x: 85.62,
              y: 180.95,
              x0: -2.25,
              y0: 50.0,
              z0: 5.46,
              aX: -16.68
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2418,
              spinDirection: 230
            },
            zone: 14,
            typeConfidence: 0.63,
            plateTime: 0.4,
            extension: 6.35
          },
          index: 1,
          playId: '1dcc3b24-9916-4c81-86c1-c47858b326ab',
          pitchNumber: 2,
          startTime: '2022-07-27T16:54:18.199Z',
          endTime: '2022-07-27T16:54:24.138Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.5,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 29.7,
              aZ: -22.61,
              pfxX: -10.76,
              pfxZ: 5.02,
              pX: 0.03,
              pZ: 1.87,
              vX0: 9.87,
              vY0: -136.99,
              vZ0: -5.64,
              x: 115.85,
              y: 188.3,
              x0: -2.22,
              y0: 50.0,
              z0: 5.5,
              aX: -20.49
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2022,
              spinDirection: 234
            },
            zone: 8,
            typeConfidence: 0.92,
            plateTime: 0.4,
            extension: 6.15
          },
          index: 2,
          playId: '5276d7b4-8d99-42dd-8018-d7da458134f1',
          pitchNumber: 3,
          startTime: '2022-07-27T16:54:33.971Z',
          endTime: '2022-07-27T16:54:37.348Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 88.2,
            endSpeed: 80.6,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 26.51,
              aZ: -29.0,
              pfxX: -11.52,
              pfxZ: 1.91,
              pX: -0.48,
              pZ: 3.29,
              vX0: 8.52,
              vY0: -128.17,
              vZ0: -0.06,
              x: 135.25,
              y: 149.89,
              x0: -2.35,
              y0: 50.0,
              z0: 5.58,
              aX: -19.17
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2091,
              spinDirection: 257
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.19
          },
          index: 3,
          playId: '777d0203-a7be-4cf3-a590-fe45ac521d7f',
          pitchNumber: 4,
          startTime: '2022-07-27T16:54:51.500Z',
          endTime: '2022-07-27T16:54:54.717Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 95.4,
            endSpeed: 87.0,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 31.43,
              aZ: -17.39,
              pfxX: -9.15,
              pfxZ: 7.6,
              pX: -0.53,
              pZ: 3.22,
              vX0: 7.98,
              vY0: -138.73,
              vZ0: -3.21,
              x: 137.36,
              y: 151.77,
              x0: -2.26,
              y0: 50.01,
              z0: 5.55,
              aX: -17.83
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2351,
              spinDirection: 225
            },
            zone: 1,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.11
          },
          hitData: {
            launchSpeed: 79.8,
            launchAngle: 25.0,
            totalDistance: 261.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 70.13,
              coordY: 98.38
            }
          },
          index: 4,
          playId: '2a5b6697-d8b6-412e-aae2-a917e3afce96',
          pitchNumber: 5,
          startTime: '2022-07-27T16:55:08.605Z',
          endTime: '2022-07-27T16:55:19.710Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T16:55:19.710Z',
      atBatIndex: 5
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description: 'J.T. Realmuto lines out to right fielder Eddie Rosario.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 6,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2022-07-27T16:55:57.965Z',
        endTime: '2022-07-27T16:56:57.975Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 1,
        outs: 2
      },
      matchup: {
        batter: {
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
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
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
              player: {
                id: 592696,
                link: '/api/v1/people/592696'
              },
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 81.3,
            endSpeed: 75.0,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 22.65,
              aZ: -38.0,
              pfxX: 5.76,
              pfxZ: -4.11,
              pX: 0.47,
              pZ: 2.28,
              vX0: 5.06,
              vY0: -118.27,
              vZ0: 0.71,
              x: 99.07,
              y: 177.31,
              x0: -2.45,
              y0: 50.0,
              z0: 5.46,
              aX: 8.16
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 3009,
              spinDirection: 343
            },
            zone: 6,
            typeConfidence: 0.89,
            plateTime: 0.46,
            extension: 6.22
          },
          index: 0,
          playId: 'e02fbb55-dd0f-40b5-b79e-0c0a3c07004f',
          pitchNumber: 1,
          startTime: '2022-07-27T16:56:08.092Z',
          endTime: '2022-07-27T16:56:11.394Z',
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
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          index: 1,
          playId: '1638fd38-5f76-4f20-bba9-e08bb7ec5a69',
          startTime: '2022-07-27T16:56:27.331Z',
          endTime: '2022-07-27T16:56:31.849Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.6,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.71,
              aZ: -17.39,
              pfxX: -5.2,
              pfxZ: 7.72,
              pX: 0.47,
              pZ: 3.23,
              vX0: 9.12,
              vY0: -137.14,
              vZ0: -2.94,
              x: 98.99,
              y: 151.52,
              x0: -2.21,
              y0: 50.0,
              z0: 5.5,
              aX: -9.95
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2324,
              spinDirection: 229
            },
            zone: 3,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.13
          },
          hitData: {
            launchSpeed: 92.3,
            launchAngle: 31.0,
            totalDistance: 338.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 197.87,
              coordY: 88.31
            }
          },
          index: 2,
          playId: '4fbfd7a7-439a-476d-aaaf-b52e5ad5217e',
          pitchNumber: 2,
          startTime: '2022-07-27T16:56:46.378Z',
          endTime: '2022-07-27T16:56:57.975Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T16:56:57.975Z',
      atBatIndex: 6
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Darick Hall flies out to left fielder Marcell Ozuna.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 7,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2022-07-27T16:57:27.317Z',
        endTime: '2022-07-27T16:59:41.254Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 2,
        outs: 3
      },
      matchup: {
        batter: {
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
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
            outNumber: 3
          },
          details: {
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
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
              player: {
                id: 542303,
                link: '/api/v1/people/542303'
              },
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 73.5,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 22.6,
              aZ: -39.75,
              pfxX: 8.7,
              pfxZ: -5.57,
              pX: -1.17,
              pZ: 1.92,
              vX0: 0.76,
              vY0: -116.16,
              vZ0: 0.46,
              x: 161.68,
              y: 186.99,
              x0: -2.63,
              y0: 50.0,
              z0: 5.51,
              aX: 11.84
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3080,
              spinDirection: 61
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.06
          },
          index: 0,
          playId: '1c2f0190-6ef5-4a00-b5d1-3650e5527b8f',
          pitchNumber: 1,
          startTime: '2022-07-27T16:57:36.337Z',
          endTime: '2022-07-27T16:57:41.993Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 73.6,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 22.99,
              aZ: -39.8,
              pfxX: 8.75,
              pfxZ: -5.6,
              pX: -0.18,
              pZ: 1.92,
              vX0: 2.94,
              vY0: -116.26,
              vZ0: 0.27,
              x: 123.87,
              y: 186.93,
              x0: -2.6,
              y0: 50.0,
              z0: 5.6,
              aX: 11.91
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3028,
              spinDirection: 52
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.2
          },
          index: 1,
          playId: 'cefb457c-1091-4174-aa2c-61be658738b8',
          pitchNumber: 2,
          startTime: '2022-07-27T16:57:53.507Z',
          endTime: '2022-07-27T16:57:59.057Z',
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
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          index: 2,
          playId: 'b6fb6eb1-85b3-4fde-b35b-4b9fb1caf96a',
          startTime: '2022-07-27T16:58:12.550Z',
          endTime: '2022-07-27T16:58:17.215Z',
          isPitch: false,
          type: 'pickoff'
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 87.0,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 25.11,
              aZ: -17.86,
              pfxX: -7.99,
              pfxZ: 7.46,
              pX: -0.45,
              pZ: 3.36,
              vX0: 8.29,
              vY0: -136.44,
              vZ0: -2.84,
              x: 134.04,
              y: 147.98,
              x0: -2.46,
              y0: 50.0,
              z0: 5.62,
              aX: -15.33
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2350,
              spinDirection: 228
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.25
          },
          index: 3,
          playId: '3fbde8c5-51e6-4d8c-841e-202a16c30a8f',
          pitchNumber: 3,
          startTime: '2022-07-27T16:58:29.095Z',
          endTime: '2022-07-27T16:58:35.179Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.8,
            endSpeed: 87.8,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 26.56,
              aZ: -16.68,
              pfxX: -6.0,
              pfxZ: 7.91,
              pX: -0.39,
              pZ: 3.25,
              vX0: 7.71,
              vY0: -138.04,
              vZ0: -3.5,
              x: 131.7,
              y: 150.9,
              x0: -2.42,
              y0: 50.0,
              z0: 5.64,
              aX: -11.74
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2426,
              spinDirection: 228
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.13
          },
          index: 4,
          playId: '23584782-236b-4a74-bc8a-1ce6097329f4',
          pitchNumber: 4,
          startTime: '2022-07-27T16:58:53.053Z',
          endTime: '2022-07-27T16:58:58.824Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 81.3,
            endSpeed: 74.6,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 24.09,
              aZ: -40.06,
              pfxX: 8.57,
              pfxZ: -5.61,
              pX: -0.2,
              pZ: 2.67,
              vX0: 2.99,
              vY0: -118.27,
              vZ0: 1.64,
              x: 124.78,
              y: 166.63,
              x0: -2.6,
              y0: 50.0,
              z0: 5.66,
              aX: 12.05
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3109,
              spinDirection: 53
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.12
          },
          hitData: {
            launchSpeed: 86.6,
            launchAngle: 52.0,
            totalDistance: 234.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 66.24,
              coordY: 119.36
            }
          },
          index: 5,
          playId: '47264dd5-df28-49e9-86ad-4164bc8164ee',
          pitchNumber: 5,
          startTime: '2022-07-27T16:59:30.907Z',
          endTime: '2022-07-27T16:59:41.254Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T16:59:41.254Z',
      atBatIndex: 7
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Eddie Rosario singles on a line drive to right fielder Nick Castellanos.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 8,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2022-07-27T17:01:42.569Z',
        endTime: '2022-07-27T17:03:40.843Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 0
      },
      matchup: {
        batter: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
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
        postOnFirst: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
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
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
              player: {
                id: 592206,
                link: '/api/v1/people/592206'
              },
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
            startSpeed: 90.9,
            endSpeed: 83.7,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 26.56,
              aZ: -17.16,
              pfxX: -5.41,
              pfxZ: 8.42,
              pX: -1.52,
              pZ: 2.76,
              vX0: 3.31,
              vY0: -132.27,
              vZ0: -5.89,
              x: 175.07,
              y: 164.15,
              x0: -2.08,
              y0: 50.0,
              z0: 6.27,
              aX: -9.65
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2216,
              spinDirection: 218
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.48
          },
          index: 0,
          playId: '0b38e083-ba20-4de9-af31-1775d71c4d5d',
          pitchNumber: 1,
          startTime: '2022-07-27T17:02:11.437Z',
          endTime: '2022-07-27T17:02:16.858Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 77.9,
            endSpeed: 72.6,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 18.93,
              aZ: -35.04,
              pfxX: 3.97,
              pfxZ: -2.17,
              pX: -0.37,
              pZ: 2.55,
              vX0: 2.94,
              vY0: -113.56,
              vZ0: -0.83,
              x: 131.27,
              y: 169.9,
              x0: -2.2,
              y0: 50.0,
              z0: 6.38,
              aX: 5.23
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2474,
              spinDirection: 46
            },
            zone: 4,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 6.39
          },
          index: 1,
          playId: '335c1c79-30d6-43c5-b600-2a713f1932f0',
          pitchNumber: 2,
          startTime: '2022-07-27T17:02:29.072Z',
          endTime: '2022-07-27T17:02:32.129Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.4,
            endSpeed: 84.8,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 24.36,
              aZ: -11.93,
              pfxX: -3.69,
              pfxZ: 11.14,
              pX: -1.19,
              pZ: 1.95,
              vX0: 3.55,
              vY0: -132.9,
              vZ0: -9.09,
              x: 162.3,
              y: 186.15,
              x0: -2.05,
              y0: 50.0,
              z0: 6.25,
              aX: -6.71
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2289,
              spinDirection: 210
            },
            zone: 13,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 6.51
          },
          index: 2,
          playId: 'ddce5c52-58b1-4eb2-9e7c-fed714cf3bd7',
          pitchNumber: 3,
          startTime: '2022-07-27T17:02:46.505Z',
          endTime: '2022-07-27T17:02:53.902Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 86.3,
            endSpeed: 80.0,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 23.03,
              aZ: -27.77,
              pfxX: -9.41,
              pfxZ: 2.73,
              pX: -0.36,
              pZ: 2.77,
              vX0: 7.23,
              vY0: -125.63,
              vZ0: -3.38,
              x: 130.79,
              y: 164.1,
              x0: -2.04,
              y0: 50.0,
              z0: 6.36,
              aX: -15.19
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1727,
              spinDirection: 232
            },
            zone: 1,
            typeConfidence: 0.73,
            plateTime: 0.43,
            extension: 6.43
          },
          index: 3,
          playId: '4fa615c5-ea3f-41c2-9c51-37a70867ece1',
          pitchNumber: 4,
          startTime: '2022-07-27T17:03:06.600Z',
          endTime: '2022-07-27T17:03:09.600Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.5,
            endSpeed: 75.2,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 20.61,
              aZ: -35.42,
              pfxX: 3.61,
              pfxZ: -2.31,
              pX: 0.14,
              pZ: 1.22,
              vX0: 3.77,
              vY0: -117.31,
              vZ0: -4.12,
              x: 111.58,
              y: 205.81,
              x0: -1.95,
              y0: 50.0,
              z0: 6.28,
              aX: 5.07
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2556,
              spinDirection: 40
            },
            zone: 14,
            typeConfidence: 0.85,
            plateTime: 0.47,
            extension: 6.52
          },
          hitData: {
            launchSpeed: 83.5,
            launchAngle: 24.0,
            totalDistance: 285.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 198.17,
              coordY: 97.13
            }
          },
          index: 4,
          playId: '0a30289b-6821-409d-a24e-eb5048ea69f8',
          pitchNumber: 5,
          startTime: '2022-07-27T17:03:30.043Z',
          endTime: '2022-07-27T17:03:40.843Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:03:40.843Z',
      atBatIndex: 8
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'William Contreras called out on strikes.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 9,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2022-07-27T17:04:06.207Z',
        endTime: '2022-07-27T17:05:33.870Z',
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
          id: 661388,
          fullName: 'William Contreras',
          link: '/api/v1/people/661388'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
        postOnFirst: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 661388,
              fullName: 'William Contreras',
              link: '/api/v1/people/661388'
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.4,
            endSpeed: 83.5,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 28.81,
              aZ: -11.2,
              pfxX: -4.0,
              pfxZ: 11.77,
              pX: 0.69,
              pZ: 2.45,
              vX0: 8.08,
              vY0: -132.76,
              vZ0: -7.8,
              x: 90.74,
              y: 172.59,
              x0: -1.88,
              y0: 50.0,
              z0: 6.25,
              aX: -7.12
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2309,
              spinDirection: 206
            },
            zone: 6,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 6.64
          },
          index: 0,
          playId: '5b65c27b-4481-4998-9b27-cedc436c57ca',
          pitchNumber: 1,
          startTime: '2022-07-27T17:04:21.078Z',
          endTime: '2022-07-27T17:04:24.366Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 88.5,
            endSpeed: 82.5,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 22.58,
              aZ: -21.27,
              pfxX: 0.6,
              pfxZ: 6.38,
              pX: 0.09,
              pZ: 2.54,
              vX0: 5.72,
              vY0: -128.87,
              vZ0: -5.11,
              x: 113.6,
              y: 170.21,
              x0: -2.22,
              y0: 50.0,
              z0: 6.15,
              aX: 1.03
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2250,
              spinDirection: 203
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.61
          },
          index: 1,
          playId: 'c6a1e344-38e1-40ed-a1e3-685f6545d4cf',
          pitchNumber: 2,
          startTime: '2022-07-27T17:04:39.661Z',
          endTime: '2022-07-27T17:04:46.112Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 81.2,
            endSpeed: 75.8,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 21.04,
              aZ: -33.83,
              pfxX: 1.99,
              pfxZ: -1.16,
              pX: 0.62,
              pZ: 1.17,
              vX0: 6.0,
              vY0: -118.23,
              vZ0: -4.46,
              x: 93.42,
              y: 207.32,
              x0: -2.2,
              y0: 50.0,
              z0: 6.16,
              aX: 2.84
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2440,
              spinDirection: 71
            },
            zone: 14,
            typeConfidence: 0.61,
            plateTime: 0.46,
            extension: 6.52
          },
          index: 2,
          playId: '756b7faa-9046-4ae7-a5fa-e17469c9cccd',
          pitchNumber: 3,
          startTime: '2022-07-27T17:05:02.844Z',
          endTime: '2022-07-27T17:05:08.063Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 84.9,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 23.72,
              aZ: -21.05,
              pfxX: -7.45,
              pfxZ: 6.12,
              pX: 0.44,
              pZ: 3.58,
              vX0: 8.54,
              vY0: -132.83,
              vZ0: -3.83,
              x: 100.13,
              y: 142.19,
              x0: -1.82,
              y0: 50.0,
              z0: 6.53,
              aX: -13.56
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1987,
              spinDirection: 207
            },
            zone: 3,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.54
          },
          index: 3,
          playId: '10144d47-262f-4734-bd81-42d5ecf66fc5',
          pitchNumber: 4,
          startTime: '2022-07-27T17:05:26.861Z',
          endTime: '2022-07-27T17:05:33.870Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:05:33.870Z',
      atBatIndex: 9
    },
    {
      result: {
        type: 'atBat',
        event: 'Forceout',
        eventType: 'force_out',
        description:
          'Marcell Ozuna grounds into a force out, third baseman Alec Bohm to second baseman Bryson Stott.   Eddie Rosario out at 2nd.    Marcell Ozuna to 1st.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 10,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2022-07-27T17:05:56.749Z',
        endTime: '2022-07-27T17:06:40.977Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 1,
        outs: 2
      },
      matchup: {
        batter: {
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
        postOnFirst: {
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
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
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
              player: {
                id: 664761,
                link: '/api/v1/people/664761'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 681082,
                link: '/api/v1/people/681082'
              },
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
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 1
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 85.4,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 21.94,
              aZ: -28.02,
              pfxX: -7.67,
              pfxZ: 2.28,
              pX: -0.38,
              pZ: 2.93,
              vX0: 7.35,
              vY0: -132.76,
              vZ0: -3.41,
              x: 131.3,
              y: 159.59,
              x0: -2.15,
              y0: 50.01,
              z0: 6.22,
              aX: -14.04
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2039,
              spinDirection: 218
            },
            zone: 4,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 6.7
          },
          index: 0,
          playId: '40c460e4-5480-4fe1-b08e-b10802cf9108',
          pitchNumber: 1,
          startTime: '2022-07-27T17:06:10.004Z',
          endTime: '2022-07-27T17:06:13.164Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 91.8,
            endSpeed: 85.7,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 23.25,
              aZ: -19.19,
              pfxX: -7.36,
              pfxZ: 7.03,
              pX: -0.83,
              pZ: 2.65,
              vX0: 5.21,
              vY0: -133.73,
              vZ0: -6.57,
              x: 148.65,
              y: 167.31,
              x0: -1.83,
              y0: 50.0,
              z0: 6.47,
              aX: -13.61
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2085,
              spinDirection: 211
            },
            zone: 11,
            typeConfidence: 0.84,
            plateTime: 0.41,
            extension: 6.52
          },
          hitData: {
            launchSpeed: 83.1,
            launchAngle: -19.0,
            totalDistance: 8.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 94.33,
              coordY: 166.69
            }
          },
          index: 1,
          playId: 'ead44a5f-0228-4300-9186-c5d0a9301949',
          pitchNumber: 2,
          startTime: '2022-07-27T17:06:32.472Z',
          endTime: '2022-07-27T17:06:40.977Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:06:40.977Z',
      atBatIndex: 10
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Robinson Cano called out on strikes.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 11,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2022-07-27T17:07:10.748Z',
        endTime: '2022-07-27T17:09:02.285Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 1,
        strikes: 3,
        outs: 3
      },
      matchup: {
        batter: {
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
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
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.7,
            endSpeed: 84.3,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 31.51,
              aZ: -17.88,
              pfxX: -1.78,
              pfxZ: 7.84,
              pX: -0.08,
              pZ: 2.75,
              vX0: 5.51,
              vY0: -134.74,
              vZ0: -6.07,
              x: 120.09,
              y: 164.4,
              x0: -1.93,
              y0: 50.0,
              z0: 6.32,
              aX: -3.26
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2351,
              spinDirection: 208
            },
            zone: 5,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 6.64
          },
          index: 0,
          playId: '693bdd4f-5f6b-4c50-b3b4-7e95378be099',
          pitchNumber: 1,
          startTime: '2022-07-27T17:07:25.807Z',
          endTime: '2022-07-27T17:07:29.323Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'T',
              description: 'Foul Tip'
            },
            description: 'Foul Tip',
            code: 'T',
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
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 73.7,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 23.01,
              aZ: -39.34,
              pfxX: 1.88,
              pfxZ: -5.28,
              pX: 0.13,
              pZ: 1.21,
              vX0: 4.57,
              vY0: -116.12,
              vZ0: -3.03,
              x: 112.03,
              y: 205.98,
              x0: -2.11,
              y0: 50.0,
              z0: 6.3,
              aX: 2.56
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2459,
              spinDirection: 46
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.61
          },
          index: 1,
          playId: '6943401a-04de-4a3d-bafe-8738e78a90d8',
          pitchNumber: 2,
          startTime: '2022-07-27T17:07:51.478Z',
          endTime: '2022-07-27T17:07:58.631Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: '*B',
              description: 'Ball In Dirt'
            },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 80.9,
            endSpeed: 75.5,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 22.28,
              aZ: -38.34,
              pfxX: 2.72,
              pfxZ: -4.4,
              pX: 1.49,
              pZ: -0.13,
              vX0: 7.04,
              vY0: -117.62,
              vZ0: -6.51,
              x: 60.35,
              y: 242.22,
              x0: -1.9,
              y0: 50.0,
              z0: 6.23,
              aX: 3.81
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2596,
              spinDirection: 36
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 6.67
          },
          index: 2,
          playId: '4ad2b82b-f547-464d-acb0-f17124ebbed8',
          pitchNumber: 3,
          startTime: '2022-07-27T17:08:24.981Z',
          endTime: '2022-07-27T17:08:30.924Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            strikes: 3,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.1,
            endSpeed: 85.0,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 26.73,
              aZ: -13.9,
              pfxX: -3.03,
              pfxZ: 9.98,
              pX: 0.02,
              pZ: 2.12,
              vX0: 6.21,
              vY0: -133.92,
              vZ0: -8.35,
              x: 116.1,
              y: 181.47,
              x0: -1.93,
              y0: 50.0,
              z0: 6.26,
              aX: -5.54
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2454,
              spinDirection: 210
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.68
          },
          index: 3,
          playId: '34d66ecf-1e82-43fc-bdf7-e31f750e82d1',
          pitchNumber: 4,
          startTime: '2022-07-27T17:08:57.529Z',
          endTime: '2022-07-27T17:09:02.285Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:09:02.285Z',
      atBatIndex: 11
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Nick Castellanos strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 12,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2022-07-27T17:11:13.454Z',
        endTime: '2022-07-27T17:12:06.898Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 0,
        strikes: 3,
        outs: 1
      },
      matchup: {
        batter: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
              player: {
                id: 661388,
                link: '/api/v1/people/661388'
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
            call: {
              code: 'S',
              description: 'Swinging Strike'
            },
            description: 'Swinging Strike',
            code: 'S',
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.9,
            endSpeed: 73.3,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 24.52,
              aZ: -44.88,
              pfxX: 6.32,
              pfxZ: -9.41,
              pX: 0.34,
              pZ: 1.73,
              vX0: 4.46,
              vY0: -116.24,
              vZ0: 0.92,
              x: 104.13,
              y: 191.94,
              x0: -2.44,
              y0: 50.0,
              z0: 5.64,
              aX: 8.53
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3010,
              spinDirection: 49
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.04
          },
          index: 0,
          playId: '2e399f4e-44b9-4a52-a59b-a2007ffc4f98',
          pitchNumber: 1,
          startTime: '2022-07-27T17:11:23.825Z',
          endTime: '2022-07-27T17:11:27.538Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.2,
            endSpeed: 86.9,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 27.12,
              aZ: -17.24,
              pfxX: -6.33,
              pfxZ: 7.78,
              pX: 0.72,
              pZ: 3.17,
              vX0: 10.44,
              vY0: -136.89,
              vZ0: -3.21,
              x: 89.43,
              y: 153.1,
              x0: -2.3,
              y0: 50.0,
              z0: 5.53,
              aX: -12.15
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2261,
              spinDirection: 230
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.19
          },
          index: 1,
          playId: 'e382ad5c-b07b-4dfa-8a6f-8a13e0abbf57',
          pitchNumber: 2,
          startTime: '2022-07-27T17:11:40.508Z',
          endTime: '2022-07-27T17:11:44.785Z',
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
            balls: 0,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.6,
            endSpeed: 73.3,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 26.63,
              aZ: -40.97,
              pfxX: 9.36,
              pfxZ: -6.46,
              pX: 0.87,
              pZ: 1.86,
              vX0: 5.13,
              vY0: -117.2,
              vZ0: 0.6,
              x: 83.86,
              y: 188.57,
              x0: -2.58,
              y0: 50.0,
              z0: 5.49,
              aX: 12.74
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3235,
              spinDirection: 56
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.18
          },
          index: 2,
          playId: 'abae0e8b-8200-45a4-8412-af7afcd968ba',
          pitchNumber: 3,
          startTime: '2022-07-27T17:12:01.849Z',
          endTime: '2022-07-27T17:12:06.898Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:12:06.898Z',
      atBatIndex: 12
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description:
          'Bryson Stott pops out to third baseman Austin Riley in foul territory.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 13,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2022-07-27T17:12:29.339Z',
        endTime: '2022-07-27T17:13:16.141Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 0,
        outs: 2
      },
      matchup: {
        batter: {
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
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
            event: 'Pop Out',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
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
              player: {
                id: 663586,
                link: '/api/v1/people/663586'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.0,
            endSpeed: 79.2,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 24.35,
              aZ: -28.98,
              pfxX: -10.78,
              pfxZ: 2.01,
              pX: -1.21,
              pZ: 1.75,
              vX0: 6.96,
              vY0: -125.13,
              vZ0: -2.99,
              x: 163.23,
              y: 191.52,
              x0: -2.62,
              y0: 50.0,
              z0: 5.33,
              aX: -17.17
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2179,
              spinDirection: 268
            },
            zone: 13,
            typeConfidence: 0.92,
            plateTime: 0.44,
            extension: 6.41
          },
          index: 0,
          playId: '9ca66d26-c5b8-43af-8e81-7c29c7daa652',
          pitchNumber: 1,
          startTime: '2022-07-27T17:12:36.551Z',
          endTime: '2022-07-27T17:12:42.282Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.9,
            endSpeed: 80.3,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 24.12,
              aZ: -33.29,
              pfxX: -11.25,
              pfxZ: -0.69,
              pX: 1.33,
              pZ: 0.89,
              vX0: 12.9,
              vY0: -125.95,
              vZ0: -4.31,
              x: 66.13,
              y: 214.8,
              x0: -2.38,
              y0: 50.0,
              z0: 5.3,
              aX: -18.19
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2103,
              spinDirection: 261
            },
            zone: 14,
            typeConfidence: 0.93,
            plateTime: 0.43,
            extension: 6.38
          },
          index: 1,
          playId: '8ca3c701-b6ee-47e7-8067-85a0ae9ac5f7',
          pitchNumber: 2,
          startTime: '2022-07-27T17:12:48.415Z',
          endTime: '2022-07-27T17:12:51.948Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.6,
            endSpeed: 87.3,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 27.38,
              aZ: -16.84,
              pfxX: -7.57,
              pfxZ: 7.93,
              pX: 0.48,
              pZ: 2.4,
              vX0: 10.49,
              vY0: -137.47,
              vZ0: -5.08,
              x: 98.59,
              y: 174.1,
              x0: -2.38,
              y0: 50.0,
              z0: 5.39,
              aX: -14.65
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2286,
              spinDirection: 239
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.22
          },
          hitData: {
            launchSpeed: 79.0,
            launchAngle: 76.0,
            totalDistance: 107.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 82.91,
              coordY: 192.76
            }
          },
          index: 2,
          playId: 'e3fb52ce-707f-4023-80cf-a8ba6f06017f',
          pitchNumber: 3,
          startTime: '2022-07-27T17:13:06.316Z',
          endTime: '2022-07-27T17:13:16.141Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:13:16.141Z',
      atBatIndex: 13
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Alec Bohm strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 14,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2022-07-27T17:13:42.430Z',
        endTime: '2022-07-27T17:16:07.990Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 2,
        strikes: 3,
        outs: 3
      },
      matchup: {
        batter: {
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
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
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
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
                id: 661388,
                link: '/api/v1/people/661388'
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
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 87.4,
            endSpeed: 81.2,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 22.92,
              aZ: -30.13,
              pfxX: -11.2,
              pfxZ: 1.24,
              pX: -0.26,
              pZ: 1.56,
              vX0: 8.98,
              vY0: -127.05,
              vZ0: -4.0,
              x: 126.82,
              y: 196.57,
              x0: -2.36,
              y0: 50.01,
              z0: 5.52,
              aX: -18.54
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2091,
              spinDirection: 264
            },
            zone: 13,
            typeConfidence: 0.92,
            plateTime: 0.43,
            extension: 6.24
          },
          index: 0,
          playId: '0cb6f78d-4c48-42a4-b097-18091946ab94',
          pitchNumber: 1,
          startTime: '2022-07-27T17:13:56.550Z',
          endTime: '2022-07-27T17:14:00.045Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 87.5,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 29.1,
              aZ: -28.14,
              pfxX: -11.29,
              pfxZ: 2.06,
              pX: 0.08,
              pZ: 4.17,
              vX0: 10.43,
              vY0: -138.68,
              vZ0: 1.54,
              x: 114.13,
              y: 126.1,
              x0: -2.26,
              y0: 50.0,
              z0: 5.48,
              aX: -22.13
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1984,
              spinDirection: 239
            },
            zone: 12,
            typeConfidence: 0.93,
            plateTime: 0.39,
            extension: 6.14
          },
          index: 1,
          playId: '1f1aaeb1-25e0-4713-92e3-2de5b19ffa2a',
          pitchNumber: 2,
          startTime: '2022-07-27T17:14:23.086Z',
          endTime: '2022-07-27T17:14:26.720Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 79.8,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 24.68,
              aZ: -30.35,
              pfxX: -11.03,
              pfxZ: 1.13,
              pX: 0.39,
              pZ: 1.62,
              vX0: 10.28,
              vY0: -125.96,
              vZ0: -3.15,
              x: 102.1,
              y: 194.97,
              x0: -2.3,
              y0: 50.0,
              z0: 5.33,
              aX: -17.79
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1961,
              spinDirection: 259
            },
            zone: 9,
            typeConfidence: 0.93,
            plateTime: 0.43,
            extension: 6.32
          },
          index: 2,
          playId: '7f4bcb9b-d1fc-484d-9f54-834647841e37',
          pitchNumber: 3,
          startTime: '2022-07-27T17:14:39.571Z',
          endTime: '2022-07-27T17:14:42.899Z',
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 88.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 28.24,
              aZ: -17.65,
              pfxX: -7.5,
              pfxZ: 7.35,
              pX: -0.83,
              pZ: 3.22,
              vX0: 7.47,
              vY0: -138.94,
              vZ0: -2.97,
              x: 148.57,
              y: 151.96,
              x0: -2.56,
              y0: 50.0,
              z0: 5.46,
              aX: -14.81
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2341,
              spinDirection: 231
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.11
          },
          index: 3,
          playId: 'aaa58445-1b0d-4ef6-b686-14bfb51be2af',
          pitchNumber: 4,
          startTime: '2022-07-27T17:14:57.540Z',
          endTime: '2022-07-27T17:15:00.540Z',
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.9,
            endSpeed: 87.1,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 28.92,
              aZ: -14.83,
              pfxX: -7.04,
              pfxZ: 8.95,
              pX: 0.26,
              pZ: 2.9,
              vX0: 9.35,
              vY0: -137.87,
              vZ0: -4.47,
              x: 107.16,
              y: 160.51,
              x0: -2.25,
              y0: 50.01,
              z0: 5.53,
              aX: -13.63
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2324,
              spinDirection: 232
            },
            zone: 3,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.2
          },
          index: 4,
          playId: '183336c8-5935-4930-8776-d58442966513',
          pitchNumber: 5,
          startTime: '2022-07-27T17:15:23.574Z',
          endTime: '2022-07-27T17:15:26.574Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 74.1,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.09,
              aZ: -42.39,
              pfxX: 8.24,
              pfxZ: -7.37,
              pX: 1.72,
              pZ: 1.49,
              vX0: 7.07,
              vY0: -118.24,
              vZ0: 0.07,
              x: 51.36,
              y: 198.49,
              x0: -2.4,
              y0: 50.0,
              z0: 5.42,
              aX: 11.41
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3261,
              spinDirection: 52
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.23
          },
          index: 5,
          playId: '55bc6813-bd9c-4c52-a911-43f466762f80',
          pitchNumber: 6,
          startTime: '2022-07-27T17:15:46.802Z',
          endTime: '2022-07-27T17:15:50.868Z',
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
            balls: 2,
            strikes: 3,
            outs: 2
          },
          pitchData: {
            startSpeed: 81.2,
            endSpeed: 74.2,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 26.33,
              aZ: -42.82,
              pfxX: 8.07,
              pfxZ: -7.69,
              pX: 0.97,
              pZ: 1.17,
              vX0: 5.82,
              vY0: -118.03,
              vZ0: -0.5,
              x: 79.9,
              y: 207.31,
              x0: -2.59,
              y0: 50.0,
              z0: 5.39,
              aX: 11.18
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3182,
              spinDirection: 53
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.17
          },
          index: 6,
          playId: '64da15b2-c92e-4c9b-a288-af957db83638',
          pitchNumber: 7,
          startTime: '2022-07-27T17:16:03.633Z',
          endTime: '2022-07-27T17:16:07.990Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:16:07.990Z',
      atBatIndex: 14
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Mike Ford grounds out, shortstop Didi Gregorius to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 15,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-27T17:18:13.932Z',
        endTime: '2022-07-27T17:19:07.205Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 1,
        outs: 1
      },
      matchup: {
        batter: {
          id: 645801,
          fullName: 'Mike Ford',
          link: '/api/v1/people/645801'
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
              id: 645801,
              fullName: 'Mike Ford',
              link: '/api/v1/people/645801'
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
              player: {
                id: 544369,
                link: '/api/v1/people/544369'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 77.8,
            endSpeed: 72.0,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 21.25,
              aZ: -42.1,
              pfxX: 3.9,
              pfxZ: -7.66,
              pX: 0.35,
              pZ: 2.36,
              vX0: 4.48,
              vY0: -113.23,
              vZ0: 0.46,
              x: 103.7,
              y: 175.06,
              x0: -2.16,
              y0: 50.0,
              z0: 6.38,
              aX: 5.05
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2468,
              spinDirection: 47
            },
            zone: 6,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 6.37
          },
          index: 0,
          playId: 'abdd303a-3e5a-46a2-bf0d-7f271933abf5',
          pitchNumber: 1,
          startTime: '2022-07-27T17:18:28.613Z',
          endTime: '2022-07-27T17:18:31.625Z',
          isPitch: true,
          type: 'pitch'
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.6,
            endSpeed: 84.3,
            strikeZoneTop: 3.08,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 27.33,
              aZ: -15.85,
              pfxX: -3.42,
              pfxZ: 9.03,
              pX: -0.94,
              pZ: 2.58,
              vX0: 4.3,
              vY0: -133.3,
              vZ0: -6.53,
              x: 152.67,
              y: 168.99,
              x0: -2.12,
              y0: 50.0,
              z0: 6.2,
              aX: -6.18
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2274,
              spinDirection: 210
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.76
          },
          index: 1,
          playId: '1138d347-ba41-4047-97bd-1c80fe0b48d8',
          pitchNumber: 2,
          startTime: '2022-07-27T17:18:42.976Z',
          endTime: '2022-07-27T17:18:47.472Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 81.7,
            strikeZoneTop: 3.18,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 23.76,
              aZ: -22.67,
              pfxX: 1.75,
              pfxZ: 5.64,
              pX: -0.63,
              pZ: 2.12,
              vX0: 3.41,
              vY0: -128.26,
              vZ0: -5.72,
              x: 141.19,
              y: 181.42,
              x0: -2.2,
              y0: 50.0,
              z0: 6.12,
              aX: 2.96
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2409,
              spinDirection: 189
            },
            zone: 4,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.29
          },
          hitData: {
            launchSpeed: 84.5,
            launchAngle: -2.0,
            totalDistance: 31.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 146.65,
              coordY: 149.9
            }
          },
          index: 2,
          playId: '6fb022e4-95f8-4095-bed5-e1c61ae38c3b',
          pitchNumber: 3,
          startTime: '2022-07-27T17:18:59.844Z',
          endTime: '2022-07-27T17:19:07.205Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:19:07.205Z',
      atBatIndex: 15
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Michael Harris II grounds out to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 16,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-27T17:19:33.048Z',
        endTime: '2022-07-27T17:21:04.864Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 2
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
            outNumber: 2
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
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
            playIndex: 4
          },
          credits: [
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.3,
            endSpeed: 83.5,
            strikeZoneTop: 3.47,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 25.36,
              aZ: -23.9,
              pfxX: -1.16,
              pfxZ: 4.69,
              pX: 0.27,
              pZ: 3.18,
              vX0: 6.8,
              vY0: -131.43,
              vZ0: -3.3,
              x: 106.67,
              y: 152.8,
              x0: -2.19,
              y0: 50.0,
              z0: 6.21,
              aX: -2.05
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2381,
              spinDirection: 199
            },
            zone: 3,
            typeConfidence: 0.8,
            plateTime: 0.42,
            extension: 6.47
          },
          index: 0,
          playId: '7c41ddcc-9585-48db-8a52-ada8b79918a6',
          pitchNumber: 1,
          startTime: '2022-07-27T17:19:42.517Z',
          endTime: '2022-07-27T17:19:45.914Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'T',
              description: 'Foul Tip'
            },
            description: 'Foul Tip',
            code: 'T',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.4,
            endSpeed: 80.8,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 20.98,
              aZ: -26.27,
              pfxX: -7.75,
              pfxZ: 3.62,
              pX: -0.29,
              pZ: 1.86,
              vX0: 7.01,
              vY0: -125.77,
              vZ0: -5.67,
              x: 128.05,
              y: 188.59,
              x0: -2.08,
              y0: 50.0,
              z0: 6.22,
              aX: -12.66
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1718,
              spinDirection: 230
            },
            zone: 7,
            typeConfidence: 0.62,
            plateTime: 0.43,
            extension: 6.35
          },
          index: 1,
          playId: 'a4af432d-526a-4b95-8096-9eb8d885508b',
          pitchNumber: 2,
          startTime: '2022-07-27T17:19:58.079Z',
          endTime: '2022-07-27T17:20:02.592Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 83.0,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 25.19,
              aZ: -21.07,
              pfxX: 0.12,
              pfxZ: 6.41,
              pX: 1.86,
              pZ: 2.17,
              vX0: 10.12,
              vY0: -130.19,
              vZ0: -6.2,
              x: 46.19,
              y: 180.29,
              x0: -2.08,
              y0: 50.0,
              z0: 6.15,
              aX: 0.2
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2364,
              spinDirection: 211
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.58
          },
          index: 2,
          playId: 'f8b52109-8819-4c40-896f-3b43884495f1',
          pitchNumber: 3,
          startTime: '2022-07-27T17:20:17.469Z',
          endTime: '2022-07-27T17:20:22.681Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 85.5,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 26.31,
              aZ: -15.41,
              pfxX: -4.6,
              pfxZ: 9.06,
              pX: -1.68,
              pZ: 2.03,
              vX0: 2.8,
              vY0: -134.49,
              vZ0: -8.04,
              x: 181.14,
              y: 183.95,
              x0: -2.13,
              y0: 50.01,
              z0: 6.13,
              aX: -8.51
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2249,
              spinDirection: 213
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.63
          },
          index: 3,
          playId: '45bc892e-3b32-43a3-9a9f-d3cc2f1d7417',
          pitchNumber: 4,
          startTime: '2022-07-27T17:20:36.497Z',
          endTime: '2022-07-27T17:20:41.825Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.7,
            endSpeed: 80.6,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 22.46,
              aZ: -23.73,
              pfxX: -7.89,
              pfxZ: 5.17,
              pX: -0.53,
              pZ: 2.12,
              vX0: 6.5,
              vY0: -126.16,
              vZ0: -5.38,
              x: 137.27,
              y: 181.41,
              x0: -2.1,
              y0: 50.0,
              z0: 6.16,
              aX: -12.89
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1611,
              spinDirection: 229
            },
            zone: 7,
            typeConfidence: 0.42,
            plateTime: 0.43,
            extension: 6.46
          },
          hitData: {
            launchSpeed: 72.9,
            launchAngle: -42.0,
            totalDistance: 4.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '3',
            coordinates: {
              coordX: 158.91,
              coordY: 171.88
            }
          },
          index: 4,
          playId: '3fad5d7b-3890-4f64-8b03-354f851eaf5a',
          pitchNumber: 5,
          startTime: '2022-07-27T17:20:56.815Z',
          endTime: '2022-07-27T17:21:04.864Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:21:04.864Z',
      atBatIndex: 16
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Dansby Swanson walks.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 17,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-27T17:21:24.788Z',
        endTime: '2022-07-27T17:24:06.675Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: {
        balls: 4,
        strikes: 2,
        outs: 2
      },
      matchup: {
        batter: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
        postOnFirst: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
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
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.5,
            endSpeed: 85.8,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 25.8,
              aZ: -22.65,
              pfxX: -8.23,
              pfxZ: 5.14,
              pX: -0.18,
              pZ: 1.51,
              vX0: 7.34,
              vY0: -134.39,
              vZ0: -8.1,
              x: 123.78,
              y: 197.95,
              x0: -1.86,
              y0: 50.0,
              z0: 6.14,
              aX: -15.25
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2263,
              spinDirection: 211
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.65
          },
          index: 0,
          playId: '13ecd6d2-96ca-497e-9bd7-8565d47d1d29',
          pitchNumber: 1,
          startTime: '2022-07-27T17:21:35.736Z',
          endTime: '2022-07-27T17:21:38.955Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 86.6,
            endSpeed: 80.5,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 22.4,
              aZ: -23.67,
              pfxX: -8.04,
              pfxZ: 5.22,
              pX: -0.81,
              pZ: 2.21,
              vX0: 5.9,
              vY0: -126.08,
              vZ0: -5.37,
              x: 147.91,
              y: 179.02,
              x0: -2.12,
              y0: 50.01,
              z0: 6.25,
              aX: -13.12
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1650,
              spinDirection: 221
            },
            zone: 13,
            typeConfidence: 0.44,
            plateTime: 0.43,
            extension: 6.44
          },
          index: 1,
          playId: '820733cd-8bdd-451a-bed4-96db72d4cd5f',
          pitchNumber: 2,
          startTime: '2022-07-27T17:21:53.824Z',
          endTime: '2022-07-27T17:21:57.119Z',
          isPitch: true,
          type: 'pitch'
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 86.2,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 26.12,
              aZ: -14.9,
              pfxX: -5.1,
              pfxZ: 9.13,
              pX: -0.25,
              pZ: 3.95,
              vX0: 6.23,
              vY0: -135.81,
              vZ0: -3.76,
              x: 126.7,
              y: 132.2,
              x0: -1.9,
              y0: 50.0,
              z0: 6.37,
              aX: -9.66
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2277,
              spinDirection: 203
            },
            zone: 11,
            typeConfidence: 0.8,
            plateTime: 0.4,
            extension: 6.54
          },
          index: 2,
          playId: '768e0164-4f3c-4e39-8b34-86dc3e90c5ff',
          pitchNumber: 3,
          startTime: '2022-07-27T17:22:18.683Z',
          endTime: '2022-07-27T17:22:22.701Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 86.2,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 24.98,
              aZ: -28.15,
              pfxX: -7.81,
              pfxZ: 2.17,
              pX: -1.23,
              pZ: 1.36,
              vX0: 4.71,
              vY0: -134.46,
              vZ0: -7.63,
              x: 164.02,
              y: 201.98,
              x0: -1.98,
              y0: 50.01,
              z0: 6.19,
              aX: -14.53
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2102,
              spinDirection: 213
            },
            zone: 13,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 6.61
          },
          index: 3,
          playId: 'aee6e0d9-6984-4368-963b-e25260beb483',
          pitchNumber: 4,
          startTime: '2022-07-27T17:22:37.934Z',
          endTime: '2022-07-27T17:22:42.614Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 84.3,
            endSpeed: 78.8,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 21.95,
              aZ: -34.38,
              pfxX: 1.96,
              pfxZ: -1.44,
              pX: 1.78,
              pZ: 1.07,
              vX0: 8.86,
              vY0: -122.52,
              vZ0: -5.17,
              x: 49.14,
              y: 209.94,
              x0: -2.12,
              y0: 50.01,
              z0: 6.11,
              aX: 3.0
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2505,
              spinDirection: 69
            },
            zone: 14,
            typeConfidence: 0.92,
            plateTime: 0.45,
            extension: 6.61
          },
          index: 4,
          playId: '9271977e-86ed-4c82-8ced-c649e7277e26',
          pitchNumber: 5,
          startTime: '2022-07-27T17:22:59.094Z',
          endTime: '2022-07-27T17:23:02.565Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 84.4,
            endSpeed: 78.6,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 21.68,
              aZ: -33.01,
              pfxX: 1.55,
              pfxZ: -0.54,
              pX: -0.24,
              pZ: 2.18,
              vX0: 4.49,
              vY0: -122.94,
              vZ0: -2.82,
              x: 126.03,
              y: 179.98,
              x0: -2.28,
              y0: 50.0,
              z0: 6.11,
              aX: 2.4
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2531,
              spinDirection: 74
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.44,
            extension: 6.44
          },
          index: 5,
          playId: 'd2826091-da2e-4efc-b263-a3205a055496',
          pitchNumber: 6,
          startTime: '2022-07-27T17:23:28.635Z',
          endTime: '2022-07-27T17:23:31.635Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 4,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 74.9,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 18.15,
              aZ: -37.85,
              pfxX: 4.49,
              pfxZ: -4.07,
              pX: -1.01,
              pZ: 3.13,
              vX0: 1.35,
              vY0: -116.4,
              vZ0: 0.43,
              x: 155.38,
              y: 154.21,
              x0: -2.18,
              y0: 50.0,
              z0: 6.48,
              aX: 6.27
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2549,
              spinDirection: 51
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.47,
            extension: 6.41
          },
          index: 6,
          playId: '089f11b6-f284-44fd-8d3e-232d6cbf3fed',
          pitchNumber: 7,
          startTime: '2022-07-27T17:23:55.849Z',
          endTime: '2022-07-27T17:24:06.675Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:24:06.675Z',
      atBatIndex: 17
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Matt Olson grounds out, shortstop Didi Gregorius to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 18,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-27T17:24:28.076Z',
        endTime: '2022-07-27T17:25:30.089Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 0,
        outs: 3
      },
      matchup: {
        batter: {
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
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
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
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
              player: {
                id: 544369,
                link: '/api/v1/people/544369'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
          count: {
            balls: 0,
            strikes: 0,
            outs: 2
          },
          index: 0,
          playId: '2a644272-5f4b-42f5-a255-eff9e338c0df',
          startTime: '2022-07-27T17:24:38.382Z',
          endTime: '2022-07-27T17:24:41.932Z',
          isPitch: false,
          type: 'pickoff'
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
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 89.0,
            endSpeed: 83.5,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 20.89,
              aZ: -22.12,
              pfxX: -0.1,
              pfxZ: 5.75,
              pX: -1.04,
              pZ: 2.82,
              vX0: 3.63,
              vY0: -129.77,
              vZ0: -4.51,
              x: 156.46,
              y: 162.52,
              x0: -2.43,
              y0: 50.0,
              z0: 6.22,
              aX: -0.18
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2378,
              spinDirection: 197
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.46
          },
          index: 1,
          playId: '02c1c300-89f1-4c10-a261-320520eb84a5',
          pitchNumber: 1,
          startTime: '2022-07-27T17:24:57.149Z',
          endTime: '2022-07-27T17:25:03.011Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.0,
            endSpeed: 85.1,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.7,
              aZ: -27.1,
              pfxX: -7.54,
              pfxZ: 2.79,
              pX: -0.77,
              pZ: 2.36,
              vX0: 6.6,
              vY0: -132.54,
              vZ0: -4.61,
              x: 146.45,
              y: 175.12,
              x0: -2.29,
              y0: 50.0,
              z0: 6.05,
              aX: -13.7
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2060,
              spinDirection: 225
            },
            zone: 13,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 6.71
          },
          hitData: {
            launchSpeed: 63.5,
            launchAngle: -50.0,
            totalDistance: 3.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 140.59,
              coordY: 157.02
            }
          },
          index: 2,
          playId: '72de487c-d3dc-4d45-9e7d-851a0c2b79f4',
          pitchNumber: 2,
          startTime: '2022-07-27T17:25:22.386Z',
          endTime: '2022-07-27T17:25:30.089Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:25:30.089Z',
      atBatIndex: 18
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Didi Gregorius grounds out, shortstop Dansby Swanson to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 19,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2022-07-27T17:27:32.298Z',
        endTime: '2022-07-27T17:28:19.775Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
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
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
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
              player: {
                id: 621020,
                link: '/api/v1/people/621020'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 621566,
                link: '/api/v1/people/621566'
              },
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
            call: {
              code: 'S',
              description: 'Swinging Strike'
            },
            description: 'Swinging Strike',
            code: 'S',
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 78.5,
            endSpeed: 71.9,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 23.26,
              aZ: -39.12,
              pfxX: 9.28,
              pfxZ: -5.31,
              pX: 0.22,
              pZ: 2.71,
              vX0: 3.71,
              vY0: -114.24,
              vZ0: 2.12,
              x: 108.61,
              y: 165.69,
              x0: -2.63,
              y0: 50.01,
              z0: 5.64,
              aX: 12.13
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3056,
              spinDirection: 52
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.01
          },
          index: 0,
          playId: '565c9c00-6f96-4006-af7c-f9febb31e3c9',
          pitchNumber: 1,
          startTime: '2022-07-27T17:27:38.944Z',
          endTime: '2022-07-27T17:27:42.497Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.4,
            endSpeed: 73.5,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 24.9,
              aZ: -39.37,
              pfxX: 9.2,
              pfxZ: -5.27,
              pX: 0.91,
              pZ: 2.54,
              vX0: 5.06,
              vY0: -116.92,
              vZ0: 1.4,
              x: 82.37,
              y: 170.33,
              x0: -2.49,
              y0: 50.0,
              z0: 5.66,
              aX: 12.56
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3165,
              spinDirection: 58
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.2
          },
          index: 1,
          playId: 'a1658b49-31d9-406e-a677-f7726245bc83',
          pitchNumber: 2,
          startTime: '2022-07-27T17:27:53.439Z',
          endTime: '2022-07-27T17:27:56.439Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.7,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 27.37,
              aZ: -13.42,
              pfxX: -6.16,
              pfxZ: 9.78,
              pX: -1.18,
              pZ: 2.97,
              vX0: 5.75,
              vY0: -136.94,
              vZ0: -4.31,
              x: 161.98,
              y: 158.52,
              x0: -2.49,
              y0: 50.0,
              z0: 5.47,
              aX: -11.83
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2447,
              spinDirection: 229
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.14
          },
          hitData: {
            launchSpeed: 87.3,
            launchAngle: 1.0,
            totalDistance: 66.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 109.2,
              coordY: 144.81
            }
          },
          index: 2,
          playId: '53a975f8-a731-491a-a5dd-10ee18f1f810',
          pitchNumber: 3,
          startTime: '2022-07-27T17:28:12.256Z',
          endTime: '2022-07-27T17:28:19.775Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:28:19.775Z',
      atBatIndex: 19
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Odubel Herrera strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 20,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2022-07-27T17:28:47.120Z',
        endTime: '2022-07-27T17:30:04.010Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 1,
        strikes: 3,
        outs: 2
      },
      matchup: {
        batter: {
          id: 546318,
          fullName: 'Odubel Herrera',
          link: '/api/v1/people/546318'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
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
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
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
              player: {
                id: 661388,
                link: '/api/v1/people/661388'
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
            outs: 1
          },
          pitchData: {
            startSpeed: 94.5,
            endSpeed: 85.0,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 34.81,
              aZ: -21.62,
              pfxX: -7.73,
              pfxZ: 5.61,
              pX: -1.53,
              pZ: 4.08,
              vX0: 5.38,
              vY0: -137.37,
              vZ0: 0.15,
              x: 175.48,
              y: 128.75,
              x0: -2.53,
              y0: 50.01,
              z0: 5.51,
              aX: -14.54
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2426,
              spinDirection: 232
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.21
          },
          index: 0,
          playId: '18d23086-ef7f-4a5f-a683-0243a198b7f4',
          pitchNumber: 1,
          startTime: '2022-07-27T17:28:57.230Z',
          endTime: '2022-07-27T17:29:01.518Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 78.7,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 28.52,
              aZ: -30.41,
              pfxX: -10.74,
              pfxZ: 1.11,
              pX: -0.42,
              pZ: 2.14,
              vX0: 8.12,
              vY0: -126.03,
              vZ0: -2.09,
              x: 133.12,
              y: 180.91,
              x0: -2.31,
              y0: 50.0,
              z0: 5.47,
              aX: -17.07
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2144,
              spinDirection: 263
            },
            zone: 7,
            typeConfidence: 0.92,
            plateTime: 0.44,
            extension: 6.23
          },
          index: 1,
          playId: '3af82d88-4615-4bc6-bc9d-ceca595b38ef',
          pitchNumber: 2,
          startTime: '2022-07-27T17:29:16.053Z',
          endTime: '2022-07-27T17:29:20.069Z',
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
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.8,
            endSpeed: 86.5,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 30.64,
              aZ: -16.07,
              pfxX: -9.61,
              pfxZ: 8.39,
              pX: -0.44,
              pZ: 2.29,
              vX0: 8.47,
              vY0: -137.69,
              vZ0: -5.37,
              x: 133.79,
              y: 176.89,
              x0: -2.31,
              y0: 50.0,
              z0: 5.36,
              aX: -18.44
            },
            breaks: {
              breakAngle: 44.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2365,
              spinDirection: 232
            },
            zone: 4,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.35
          },
          index: 2,
          playId: 'f392be07-ea25-404a-9e6f-318dea365aae',
          pitchNumber: 3,
          startTime: '2022-07-27T17:29:39.264Z',
          endTime: '2022-07-27T17:29:42.264Z',
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
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 95.7,
            endSpeed: 87.4,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 31.09,
              aZ: -17.21,
              pfxX: -8.15,
              pfxZ: 7.64,
              pX: 0.02,
              pZ: 3.01,
              vX0: 9.58,
              vY0: -139.03,
              vZ0: -3.47,
              x: 116.11,
              y: 157.42,
              x0: -2.41,
              y0: 50.01,
              z0: 5.42,
              aX: -15.96
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2516,
              spinDirection: 228
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.15
          },
          index: 3,
          playId: '4789d1c6-e258-46b2-a6b8-e19e43d61c76',
          pitchNumber: 4,
          startTime: '2022-07-27T17:29:59.410Z',
          endTime: '2022-07-27T17:30:04.010Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:30:04.010Z',
      atBatIndex: 20
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Kyle Schwarber flies out to left fielder Marcell Ozuna.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 21,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2022-07-27T17:30:27.403Z',
        endTime: '2022-07-27T17:32:00.794Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 3
      },
      matchup: {
        batter: {
          id: 656941,
          fullName: 'Kyle Schwarber',
          link: '/api/v1/people/656941'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
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
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
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
              player: {
                id: 542303,
                link: '/api/v1/people/542303'
              },
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 80.4,
            endSpeed: 73.4,
            strikeZoneTop: 3.2,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 26.15,
              aZ: -38.99,
              pfxX: 9.96,
              pfxZ: -5.03,
              pX: 1.76,
              pZ: 1.25,
              vX0: 7.07,
              vY0: -116.84,
              vZ0: -0.97,
              x: 49.84,
              y: 204.96,
              x0: -2.62,
              y0: 50.0,
              z0: 5.4,
              aX: 13.49
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3223,
              spinDirection: 62
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.37
          },
          index: 0,
          playId: '7514d125-e7ff-4e46-bf8c-9dd9035f7ff3',
          pitchNumber: 1,
          startTime: '2022-07-27T17:30:32.891Z',
          endTime: '2022-07-27T17:30:36.049Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 81.3,
            endSpeed: 74.5,
            strikeZoneTop: 3.24,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 25.56,
              aZ: -40.76,
              pfxX: 8.67,
              pfxZ: -6.14,
              pX: 0.01,
              pZ: 1.27,
              vX0: 3.53,
              vY0: -118.37,
              vZ0: -0.85,
              x: 116.73,
              y: 204.62,
              x0: -2.64,
              y0: 50.0,
              z0: 5.41,
              aX: 12.12
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3210,
              spinDirection: 57
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.1
          },
          index: 1,
          playId: 'fb50ce00-ae10-488b-9c55-a13af8c176d5',
          pitchNumber: 2,
          startTime: '2022-07-27T17:30:55.118Z',
          endTime: '2022-07-27T17:31:00.044Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.9,
            endSpeed: 87.5,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 28.17,
              aZ: -20.8,
              pfxX: -8.2,
              pfxZ: 5.84,
              pX: -0.64,
              pZ: 1.96,
              vX0: 7.92,
              vY0: -138.01,
              vZ0: -5.32,
              x: 141.39,
              y: 185.95,
              x0: -2.47,
              y0: 50.0,
              z0: 5.29,
              aX: -15.95
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2517,
              spinDirection: 231
            },
            zone: 7,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.2
          },
          index: 2,
          playId: '9c77c45f-1199-4f1e-a26a-6b2593f0bb46',
          pitchNumber: 3,
          startTime: '2022-07-27T17:31:08.868Z',
          endTime: '2022-07-27T17:31:11.868Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 80.8,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 23.63,
              aZ: -30.21,
              pfxX: -10.16,
              pfxZ: 1.19,
              pX: -0.26,
              pZ: 1.9,
              vX0: 8.5,
              vY0: -127.01,
              vZ0: -2.81,
              x: 127.09,
              y: 187.42,
              x0: -2.32,
              y0: 50.01,
              z0: 5.4,
              aX: -16.77
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2190,
              spinDirection: 267
            },
            zone: 7,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.3
          },
          index: 3,
          playId: '067e9889-48d8-44b4-b44b-640716205eac',
          pitchNumber: 4,
          startTime: '2022-07-27T17:31:29.231Z',
          endTime: '2022-07-27T17:31:33.417Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.9,
            endSpeed: 88.2,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 25.67,
              aZ: -16.23,
              pfxX: -8.37,
              pfxZ: 8.11,
              pX: -1.08,
              pZ: 2.46,
              vX0: 7.08,
              vY0: -138.17,
              vZ0: -5.08,
              x: 158.22,
              y: 172.28,
              x0: -2.57,
              y0: 50.01,
              z0: 5.39,
              aX: -16.46
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2339,
              spinDirection: 238
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.1
          },
          hitData: {
            launchSpeed: 90.8,
            launchAngle: 48.0,
            totalDistance: 287.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 44.92,
              coordY: 115.97
            }
          },
          index: 4,
          playId: '6d266b32-27ab-42ea-bcfc-20150de61d35',
          pitchNumber: 5,
          startTime: '2022-07-27T17:31:50.986Z',
          endTime: '2022-07-27T17:32:00.794Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:32:00.794Z',
      atBatIndex: 21
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Austin Riley grounds out, shortstop Didi Gregorius to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 22,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T17:34:10.119Z',
        endTime: '2022-07-27T17:35:54.537Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
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
              player: {
                id: 544369,
                link: '/api/v1/people/544369'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.6,
            endSpeed: 84.3,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 26.81,
              aZ: -15.52,
              pfxX: -3.18,
              pfxZ: 9.2,
              pX: 0.49,
              pZ: 3.46,
              vX0: 7.21,
              vY0: -133.28,
              vZ0: -4.67,
              x: 98.34,
              y: 145.35,
              x0: -1.83,
              y0: 50.0,
              z0: 6.34,
              aX: -5.76
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2345,
              spinDirection: 207
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.54
          },
          index: 0,
          playId: '8663d11b-ef6b-4187-a651-66165f53a392',
          pitchNumber: 1,
          startTime: '2022-07-27T17:34:26.732Z',
          endTime: '2022-07-27T17:34:29.853Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 83.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 23.59,
              aZ: -21.79,
              pfxX: -0.03,
              pfxZ: 5.93,
              pX: 0.65,
              pZ: 2.06,
              vX0: 6.92,
              vY0: -130.53,
              vZ0: -6.44,
              x: 92.34,
              y: 183.25,
              x0: -2.02,
              y0: 50.0,
              z0: 6.16,
              aX: -0.05
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2373,
              spinDirection: 192
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.64
          },
          index: 1,
          playId: '105e9796-a826-4f03-b3ba-ee016d012337',
          pitchNumber: 2,
          startTime: '2022-07-27T17:34:41.816Z',
          endTime: '2022-07-27T17:34:45.062Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 84.9,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 24.37,
              aZ: -25.15,
              pfxX: -8.58,
              pfxZ: 3.88,
              pX: -0.4,
              pZ: 1.59,
              vX0: 6.96,
              vY0: -132.68,
              vZ0: -7.34,
              x: 132.16,
              y: 195.95,
              x0: -1.92,
              y0: 50.0,
              z0: 6.18,
              aX: -15.53
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2207,
              spinDirection: 210
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.68
          },
          index: 2,
          playId: '984da8f1-c363-4b22-9f02-6af77eb23e55',
          pitchNumber: 3,
          startTime: '2022-07-27T17:35:02.741Z',
          endTime: '2022-07-27T17:35:08.401Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 82.5,
            endSpeed: 77.0,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 21.36,
              aZ: -34.59,
              pfxX: 2.0,
              pfxZ: -1.65,
              pX: 0.69,
              pZ: 0.71,
              vX0: 6.18,
              vY0: -119.97,
              vZ0: -5.4,
              x: 90.55,
              y: 219.72,
              x0: -2.16,
              y0: 50.0,
              z0: 6.04,
              aX: 2.94
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2632,
              spinDirection: 70
            },
            zone: 14,
            typeConfidence: 0.87,
            plateTime: 0.46,
            extension: 6.44
          },
          index: 3,
          playId: 'e34520df-af84-4e4b-9eee-f3acb011f1de',
          pitchNumber: 4,
          startTime: '2022-07-27T17:35:27.333Z',
          endTime: '2022-07-27T17:35:31.858Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 82.9,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 25.57,
              aZ: -23.37,
              pfxX: -0.85,
              pfxZ: 5.06,
              pX: 0.63,
              pZ: 2.53,
              vX0: 6.98,
              vY0: -130.53,
              vZ0: -4.97,
              x: 92.94,
              y: 170.48,
              x0: -1.96,
              y0: 50.0,
              z0: 6.2,
              aX: -1.48
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2319,
              spinDirection: 190
            },
            zone: 6,
            typeConfidence: 0.88,
            plateTime: 0.42,
            extension: 6.67
          },
          hitData: {
            launchSpeed: 100.5,
            launchAngle: -14.0,
            totalDistance: 11.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 102.59,
              coordY: 150.91
            }
          },
          index: 4,
          playId: '6bfa5045-78d6-4750-83a9-00aaf4451f5b',
          pitchNumber: 5,
          startTime: '2022-07-27T17:35:47.598Z',
          endTime: '2022-07-27T17:35:54.537Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:35:54.537Z',
      atBatIndex: 22
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Eddie Rosario singles on a line drive to center fielder Odubel Herrera.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 23,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T17:36:18.439Z',
        endTime: '2022-07-27T17:37:45.505Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 1,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
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
        postOnFirst: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
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
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
              player: {
                id: 546318,
                link: '/api/v1/people/546318'
              },
              position: {
                code: '8',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'CF'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.4,
            endSpeed: 84.3,
            strikeZoneTop: 3.22,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 23.6,
              aZ: -23.13,
              pfxX: -0.85,
              pfxZ: 5.06,
              pX: -0.99,
              pZ: 2.34,
              vX0: 3.65,
              vY0: -131.73,
              vZ0: -5.48,
              x: 154.56,
              y: 175.66,
              x0: -2.27,
              y0: 50.01,
              z0: 6.12,
              aX: -1.52
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2356,
              spinDirection: 201
            },
            zone: 13,
            typeConfidence: 0.85,
            plateTime: 0.41,
            extension: 6.54
          },
          index: 0,
          playId: '3a95dbcc-fd09-4142-9828-69faf8c84d38',
          pitchNumber: 1,
          startTime: '2022-07-27T17:36:27.894Z',
          endTime: '2022-07-27T17:36:31.285Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 85.9,
            endSpeed: 80.5,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 20.22,
              aZ: -26.22,
              pfxX: -7.16,
              pfxZ: 3.68,
              pX: -0.44,
              pZ: 1.97,
              vX0: 6.41,
              vY0: -125.1,
              vZ0: -5.31,
              x: 133.73,
              y: 185.52,
              x0: -2.08,
              y0: 50.0,
              z0: 6.21,
              aX: -11.59
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1630,
              spinDirection: 224
            },
            zone: 7,
            typeConfidence: 0.74,
            plateTime: 0.43,
            extension: 6.44
          },
          index: 1,
          playId: '3c8af6e0-1633-414c-b215-1286fc01018e',
          pitchNumber: 2,
          startTime: '2022-07-27T17:36:46.794Z',
          endTime: '2022-07-27T17:36:49.794Z',
          isPitch: true,
          type: 'pitch'
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
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 86.3,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 25.51,
              aZ: -18.82,
              pfxX: -2.52,
              pfxZ: 7.09,
              pX: -1.72,
              pZ: 2.94,
              vX0: 1.8,
              vY0: -135.39,
              vZ0: -5.46,
              x: 182.72,
              y: 159.41,
              x0: -2.07,
              y0: 50.01,
              z0: 6.27,
              aX: -4.75
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2236,
              spinDirection: 209
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.63
          },
          index: 2,
          playId: '5e412d0c-2a22-473a-9e76-67adb8296003',
          pitchNumber: 3,
          startTime: '2022-07-27T17:37:14.453Z',
          endTime: '2022-07-27T17:37:18.283Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 83.3,
            endSpeed: 77.9,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 20.79,
              aZ: -35.47,
              pfxX: 1.46,
              pfxZ: -2.17,
              pX: -0.99,
              pZ: 2.03,
              vX0: 2.53,
              vY0: -121.5,
              vZ0: -2.8,
              x: 154.61,
              y: 184.07,
              x0: -2.23,
              y0: 50.0,
              z0: 6.23,
              aX: 2.22
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2540,
              spinDirection: 73
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.45,
            extension: 6.38
          },
          hitData: {
            launchSpeed: 87.4,
            launchAngle: 17.0,
            totalDistance: 274.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 114.42,
              coordY: 77.72
            }
          },
          index: 3,
          playId: '230d27eb-1b34-4e50-a0b0-070383a4f212',
          pitchNumber: 4,
          startTime: '2022-07-27T17:37:34.151Z',
          endTime: '2022-07-27T17:37:45.505Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:37:45.505Z',
      atBatIndex: 23
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'William Contreras flies out to center fielder Odubel Herrera.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 24,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T17:38:00.355Z',
        endTime: '2022-07-27T17:38:25.406Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 2
      },
      matchup: {
        batter: {
          id: 661388,
          fullName: 'William Contreras',
          link: '/api/v1/people/661388'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
        postOnFirst: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
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
              id: 661388,
              fullName: 'William Contreras',
              link: '/api/v1/people/661388'
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
              player: {
                id: 546318,
                link: '/api/v1/people/546318'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 82.2,
            endSpeed: 76.9,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 19.77,
              aZ: -35.06,
              pfxX: 1.57,
              pfxZ: -1.96,
              pX: -0.65,
              pZ: 2.69,
              vX0: 3.24,
              vY0: -119.87,
              vZ0: -1.06,
              x: 141.63,
              y: 166.04,
              x0: -2.21,
              y0: 50.0,
              z0: 6.23,
              aX: 2.33
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2465,
              spinDirection: 78
            },
            zone: 4,
            typeConfidence: 0.88,
            plateTime: 0.45,
            extension: 6.67
          },
          hitData: {
            launchSpeed: 94.8,
            launchAngle: 27.0,
            totalDistance: 371.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 111.6,
              coordY: 50.05
            }
          },
          index: 0,
          playId: '24463f62-8851-4140-ac9b-8e656a32a510',
          pitchNumber: 1,
          startTime: '2022-07-27T17:38:15.251Z',
          endTime: '2022-07-27T17:38:25.406Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:38:25.406Z',
      atBatIndex: 24
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Marcell Ozuna pops out to shortstop Didi Gregorius.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 25,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T17:38:48.162Z',
        endTime: '2022-07-27T17:40:42.036Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 2,
        outs: 3
      },
      matchup: {
        batter: {
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
            outNumber: 3
          },
          details: {
            event: 'Pop Out',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
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
              player: {
                id: 544369,
                link: '/api/v1/people/544369'
              },
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 89.8,
            endSpeed: 84.1,
            strikeZoneTop: 3.47,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 21.93,
              aZ: -25.01,
              pfxX: 0.14,
              pfxZ: 4.05,
              pX: 0.44,
              pZ: 2.83,
              vX0: 6.53,
              vY0: -130.78,
              vZ0: -3.88,
              x: 100.2,
              y: 162.48,
              x0: -2.08,
              y0: 50.0,
              z0: 6.16,
              aX: 0.25
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2166,
              spinDirection: 191
            },
            zone: 6,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.61
          },
          index: 0,
          playId: '4c44e2a2-4d6e-4575-b21a-869028bb4761',
          pitchNumber: 1,
          startTime: '2022-07-27T17:39:00.790Z',
          endTime: '2022-07-27T17:39:06.502Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 83.4,
            endSpeed: 78.1,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 20.9,
              aZ: -32.06,
              pfxX: 1.15,
              pfxZ: 0.07,
              pX: 1.11,
              pZ: 1.02,
              vX0: 7.38,
              vY0: -121.34,
              vZ0: -5.47,
              x: 74.72,
              y: 211.17,
              x0: -2.11,
              y0: 50.0,
              z0: 6.06,
              aX: 1.73
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2546,
              spinDirection: 70
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.45,
            extension: 6.78
          },
          index: 1,
          playId: '18a858bf-de57-40cb-aa1a-d83a69013b6b',
          pitchNumber: 2,
          startTime: '2022-07-27T17:39:39.913Z',
          endTime: '2022-07-27T17:39:43.801Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'T',
              description: 'Foul Tip'
            },
            description: 'Foul Tip',
            code: 'T',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 88.4,
            endSpeed: 82.4,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.26,
              aZ: -24.07,
              pfxX: 0.44,
              pfxZ: 4.73,
              pX: -0.07,
              pZ: 3.55,
              vX0: 5.12,
              vY0: -128.87,
              vZ0: -2.34,
              x: 119.5,
              y: 143.04,
              x0: -2.12,
              y0: 50.0,
              z0: 6.29,
              aX: 0.75
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2173,
              spinDirection: 183
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.48
          },
          index: 2,
          playId: '8154a901-5e59-44e2-8246-3ca676bfe18a',
          pitchNumber: 3,
          startTime: '2022-07-27T17:40:05.756Z',
          endTime: '2022-07-27T17:40:08.756Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.3,
            endSpeed: 74.1,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 19.67,
              aZ: -35.56,
              pfxX: 2.21,
              pfxZ: -2.49,
              pX: 0.29,
              pZ: 1.52,
              vX0: 4.81,
              vY0: -115.46,
              vZ0: -2.94,
              x: 106.09,
              y: 197.65,
              x0: -2.1,
              y0: 50.0,
              z0: 6.21,
              aX: 3.01
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2428,
              spinDirection: 56
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.57
          },
          hitData: {
            launchSpeed: 77.8,
            launchAngle: 57.0,
            totalDistance: 194.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 91.15,
              coordY: 131.27
            }
          },
          index: 3,
          playId: 'dd19c943-4a17-414e-9210-e04ae30ed99e',
          pitchNumber: 4,
          startTime: '2022-07-27T17:40:32.551Z',
          endTime: '2022-07-27T17:40:42.036Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:40:42.036Z',
      atBatIndex: 25
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Rhys Hoskins strikes out swinging.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 26,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2022-07-27T17:42:31.346Z',
        endTime: '2022-07-27T17:44:08.436Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 2,
        strikes: 3,
        outs: 1
      },
      matchup: {
        batter: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
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
            outNumber: 1
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
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
              player: {
                id: 661388,
                link: '/api/v1/people/661388'
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
            startSpeed: 93.7,
            endSpeed: 86.3,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 27.57,
              aZ: -16.81,
              pfxX: -7.27,
              pfxZ: 8.09,
              pX: -1.05,
              pZ: 3.21,
              vX0: 6.14,
              vY0: -136.37,
              vZ0: -3.06,
              x: 157.1,
              y: 152.08,
              x0: -2.38,
              y0: 50.0,
              z0: 5.5,
              aX: -13.81
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2436,
              spinDirection: 228
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.1
          },
          index: 0,
          playId: 'b1adae41-8d4c-4f00-9045-9a84e9d607c4',
          pitchNumber: 1,
          startTime: '2022-07-27T17:42:54.214Z',
          endTime: '2022-07-27T17:42:58.382Z',
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
            startSpeed: 93.7,
            endSpeed: 85.8,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 29.01,
              aZ: -17.96,
              pfxX: -9.26,
              pfxZ: 7.53,
              pX: -0.77,
              pZ: 3.55,
              vX0: 7.53,
              vY0: -136.27,
              vZ0: -2.1,
              x: 146.36,
              y: 142.98,
              x0: -2.36,
              y0: 50.01,
              z0: 5.57,
              aX: -17.47
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2344,
              spinDirection: 229
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.13
          },
          index: 1,
          playId: 'aa6a8a4f-f767-48fb-8c4e-51e5d5038575',
          pitchNumber: 2,
          startTime: '2022-07-27T17:43:08.932Z',
          endTime: '2022-07-27T17:43:12.567Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 85.9,
            endSpeed: 78.8,
            strikeZoneTop: 3.51,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 24.71,
              aZ: -31.43,
              pfxX: -11.4,
              pfxZ: 0.47,
              pX: -1.35,
              pZ: 3.06,
              vX0: 6.32,
              vY0: -124.97,
              vZ0: 0.42,
              x: 168.28,
              y: 156.2,
              x0: -2.42,
              y0: 50.0,
              z0: 5.47,
              aX: -18.06
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2202,
              spinDirection: 264
            },
            zone: 11,
            typeConfidence: 0.93,
            plateTime: 0.44,
            extension: 6.23
          },
          index: 2,
          playId: '92f8e1aa-87a7-4db3-a47e-431d42595f7b',
          pitchNumber: 3,
          startTime: '2022-07-27T17:43:32.653Z',
          endTime: '2022-07-27T17:43:38.932Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.3,
            endSpeed: 73.2,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 24.55,
              aZ: -39.66,
              pfxX: 8.79,
              pfxZ: -5.49,
              pX: -0.27,
              pZ: 3.08,
              vX0: 2.92,
              vY0: -116.79,
              vZ0: 2.89,
              x: 127.45,
              y: 155.51,
              x0: -2.69,
              y0: 50.0,
              z0: 5.59,
              aX: 11.99
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3076,
              spinDirection: 62
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.18
          },
          index: 3,
          playId: '3a4c59d8-c810-4bef-8c63-3f4e36054f4b',
          pitchNumber: 4,
          startTime: '2022-07-27T17:43:51.072Z',
          endTime: '2022-07-27T17:43:54.206Z',
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
            balls: 2,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.5,
            endSpeed: 86.3,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 30.33,
              aZ: -16.39,
              pfxX: -8.69,
              pfxZ: 8.29,
              pX: 0.34,
              pZ: 2.26,
              vX0: 9.91,
              vY0: -137.17,
              vZ0: -5.65,
              x: 104.0,
              y: 177.73,
              x0: -2.19,
              y0: 50.01,
              z0: 5.46,
              aX: -16.56
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2437,
              spinDirection: 229
            },
            zone: 9,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.14
          },
          index: 4,
          playId: '56fb9705-9c7b-4bb8-ad29-eea5f5f64602',
          pitchNumber: 5,
          startTime: '2022-07-27T17:44:04.683Z',
          endTime: '2022-07-27T17:44:08.436Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:44:08.436Z',
      atBatIndex: 26
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'J.T. Realmuto singles on a ground ball to pitcher Charlie Morton.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 27,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2022-07-27T17:44:38.587Z',
        endTime: '2022-07-27T17:44:53.925Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 1
      },
      matchup: {
        batter: {
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
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
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
              player: {
                id: 450203,
                link: '/api/v1/people/450203'
              },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 88.9,
            endSpeed: 81.8,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 26.29,
              aZ: -28.26,
              pfxX: -0.15,
              pfxZ: 2.31,
              pX: 0.25,
              pZ: 2.25,
              vX0: 6.97,
              vY0: -129.31,
              vZ0: -2.33,
              x: 107.41,
              y: 177.94,
              x0: -2.46,
              y0: 50.0,
              z0: 5.33,
              aX: -0.25
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2549,
              spinDirection: 202
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.23
          },
          hitData: {
            launchSpeed: 68.2,
            launchAngle: -80.0,
            totalDistance: 1.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '1',
            coordinates: {
              coordX: 115.25,
              coordY: 183.49
            }
          },
          index: 0,
          playId: '2ac27225-b3c6-4fdd-87b0-60fafc526635',
          pitchNumber: 1,
          startTime: '2022-07-27T17:44:46.462Z',
          endTime: '2022-07-27T17:44:53.925Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:44:53.925Z',
      atBatIndex: 27
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Darick Hall singles on a ground ball to center fielder Michael Harris II.   J.T. Realmuto to 3rd.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 28,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2022-07-27T17:45:23.823Z',
        endTime: '2022-07-27T17:46:47.553Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 0,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        postOnThird: {
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
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
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
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
              player: {
                id: 671739,
                link: '/api/v1/people/671739'
              },
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
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 80.5,
            endSpeed: 73.4,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 25.16,
              aZ: -40.25,
              pfxX: 9.24,
              pfxZ: -5.9,
              pX: -0.52,
              pZ: 2.37,
              vX0: 2.21,
              vY0: -117.14,
              vZ0: 1.63,
              x: 136.73,
              y: 174.9,
              x0: -2.68,
              y0: 50.0,
              z0: 5.47,
              aX: 12.64
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3164,
              spinDirection: 65
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.05
          },
          index: 0,
          playId: '1da47e2f-c19a-4fd7-a0d9-da9db0705234',
          pitchNumber: 1,
          startTime: '2022-07-27T17:45:35.415Z',
          endTime: '2022-07-27T17:45:38.664Z',
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
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          index: 1,
          playId: 'd3ac8dd8-d55b-4e27-9054-1cebf39809c3',
          startTime: '2022-07-27T17:45:52.855Z',
          endTime: '2022-07-27T17:45:57.890Z',
          isPitch: false,
          type: 'pickoff'
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 80.7,
            endSpeed: 73.2,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 26.9,
              aZ: -40.15,
              pfxX: 9.37,
              pfxZ: -5.84,
              pX: 0.74,
              pZ: 2.29,
              vX0: 4.8,
              vY0: -117.36,
              vZ0: 1.28,
              x: 110.57,
              y: 155.97,
              x0: -2.57,
              y0: 50.0,
              z0: 5.55,
              aX: 12.77
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3252,
              spinDirection: 49
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.1
          },
          index: 2,
          playId: '5ad5134b-b449-4957-a488-65a057b2ba26',
          pitchNumber: 2,
          startTime: '2022-07-27T17:46:09.444Z',
          endTime: '2022-07-27T17:46:12.627Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 95.3,
            endSpeed: 87.6,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 29.23,
              aZ: -15.57,
              pfxX: -6.85,
              pfxZ: 8.46,
              pX: -0.87,
              pZ: 3.04,
              vX0: 6.73,
              vY0: -138.75,
              vZ0: -3.78,
              x: 150.2,
              y: 156.68,
              x0: -2.43,
              y0: 50.0,
              z0: 5.45,
              aX: -13.45
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2464,
              spinDirection: 230
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.03
          },
          hitData: {
            launchSpeed: 103.9,
            launchAngle: 1.0,
            totalDistance: 64.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 128.47,
              coordY: 82.2
            }
          },
          index: 3,
          playId: 'c7b52e4e-acda-4822-9db5-34f78346a7fb',
          pitchNumber: 3,
          startTime: '2022-07-27T17:46:37.039Z',
          endTime: '2022-07-27T17:46:47.553Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:46:47.553Z',
      atBatIndex: 28
    },
    {
      result: {
        type: 'atBat',
        event: 'Grounded Into DP',
        eventType: 'grounded_into_double_play',
        description:
          'Nick Castellanos grounds into a double play, shortstop Dansby Swanson to second baseman Robinson Cano to first baseman Matt Olson.   Darick Hall out at 2nd.    Nick Castellanos out at 1st.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 29,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2022-07-27T17:47:23.077Z',
        endTime: '2022-07-27T17:47:40.607Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 24
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 3
      },
      matchup: {
        batter: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
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
            event: 'Grounded Into DP',
            eventType: 'grounded_into_double_play',
            movementReason: 'r_force_out',
            runner: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
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
              player: {
                id: 621020,
                link: '/api/v1/people/621020'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 429664,
                link: '/api/v1/people/429664'
              },
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
            outNumber: 3
          },
          details: {
            event: 'Grounded Into DP',
            eventType: 'grounded_into_double_play',
            movementReason: null,
            runner: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
              player: {
                id: 429664,
                link: '/api/v1/people/429664'
              },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 621566,
                link: '/api/v1/people/621566'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.0,
            endSpeed: 80.6,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 22.77,
              aZ: -35.08,
              pfxX: -8.76,
              pfxZ: -1.77,
              pX: -0.29,
              pZ: 2.82,
              vX0: 8.07,
              vY0: -126.52,
              vZ0: 0.54,
              x: 127.87,
              y: 162.63,
              x0: -2.36,
              y0: 50.0,
              z0: 5.39,
              aX: -14.39
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1894,
              spinDirection: 268
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.15
          },
          hitData: {
            launchSpeed: 86.5,
            launchAngle: -12.0,
            totalDistance: 14.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 114.15,
              coordY: 148.37
            }
          },
          index: 0,
          playId: '4e758d8f-e4d6-4aa0-8437-e30d9e2c7385',
          pitchNumber: 1,
          startTime: '2022-07-27T17:47:32.257Z',
          endTime: '2022-07-27T17:47:40.607Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:47:40.607Z',
      atBatIndex: 29
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description: 'Robinson Cano grounds out to pitcher Kyle Gibson.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 30,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T17:50:26.358Z',
        endTime: '2022-07-27T17:50:49.691Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 1
      },
      matchup: {
        batter: {
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
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
              player: {
                id: 502043,
                link: '/api/v1/people/502043'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.0,
            endSpeed: 82.3,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 24.84,
              aZ: -22.35,
              pfxX: -0.37,
              pfxZ: 5.74,
              pX: -0.18,
              pZ: 2.35,
              vX0: 5.4,
              vY0: -129.49,
              vZ0: -5.21,
              x: 123.72,
              y: 175.29,
              x0: -2.23,
              y0: 50.0,
              z0: 6.08,
              aX: -0.63
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2389,
              spinDirection: 195
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.57
          },
          hitData: {
            launchSpeed: 63.5,
            launchAngle: -48.0,
            totalDistance: 3.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '1',
            coordinates: {
              coordX: 141.84,
              coordY: 184.18
            }
          },
          index: 0,
          playId: '2a1199a5-7c9f-4fad-b821-63a3cf29c559',
          pitchNumber: 1,
          startTime: '2022-07-27T17:50:41.678Z',
          endTime: '2022-07-27T17:50:49.691Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:50:49.691Z',
      atBatIndex: 30
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Mike Ford grounds out, second baseman Bryson Stott to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 31,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T17:51:14.966Z',
        endTime: '2022-07-27T17:51:32.379Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 2
      },
      matchup: {
        batter: {
          id: 645801,
          fullName: 'Mike Ford',
          link: '/api/v1/people/645801'
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
            outNumber: 2
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 645801,
              fullName: 'Mike Ford',
              link: '/api/v1/people/645801'
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
              player: {
                id: 681082,
                link: '/api/v1/people/681082'
              },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.7,
            endSpeed: 84.2,
            strikeZoneTop: 3.18,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 23.87,
              aZ: -14.2,
              pfxX: -5.85,
              pfxZ: 10.04,
              pX: -0.37,
              pZ: 2.27,
              vX0: 6.48,
              vY0: -131.95,
              vZ0: -7.34,
              x: 130.98,
              y: 177.46,
              x0: -2.08,
              y0: 50.0,
              z0: 6.1,
              aX: -10.48
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2414,
              spinDirection: 217
            },
            zone: 4,
            typeConfidence: 0.84,
            plateTime: 0.41,
            extension: 6.62
          },
          hitData: {
            launchSpeed: 91.4,
            launchAngle: 9.0,
            totalDistance: 139.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 172.68,
              coordY: 136.26
            }
          },
          index: 0,
          playId: 'f91ec042-f670-4e9d-9f75-fece454c1da5',
          pitchNumber: 1,
          startTime: '2022-07-27T17:51:25.032Z',
          endTime: '2022-07-27T17:51:32.379Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:51:32.379Z',
      atBatIndex: 31
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Michael Harris II grounds out, second baseman Bryson Stott to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 32,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T17:51:59.962Z',
        endTime: '2022-07-27T17:52:30.224Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 1,
        outs: 3
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
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
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
              player: {
                id: 681082,
                link: '/api/v1/people/681082'
              },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.1,
            endSpeed: 83.3,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 28.49,
              aZ: -16.65,
              pfxX: -2.76,
              pfxZ: 8.74,
              pX: -0.23,
              pZ: 3.16,
              vX0: 5.71,
              vY0: -132.48,
              vZ0: -4.53,
              x: 125.61,
              y: 153.37,
              x0: -2.05,
              y0: 50.0,
              z0: 6.11,
              aX: -4.9
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2271,
              spinDirection: 216
            },
            zone: 2,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.47
          },
          index: 0,
          playId: 'cefe0028-8db0-4ce0-828e-8175045fcb90',
          pitchNumber: 1,
          startTime: '2022-07-27T17:52:08.223Z',
          endTime: '2022-07-27T17:52:11.374Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.6,
            endSpeed: 73.7,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 21.57,
              aZ: -39.04,
              pfxX: 4.3,
              pfxZ: -5.05,
              pX: -0.27,
              pZ: 2.07,
              vX0: 3.11,
              vY0: -115.89,
              vZ0: -1.0,
              x: 127.14,
              y: 182.96,
              x0: -2.18,
              y0: 50.0,
              z0: 6.23,
              aX: 5.85
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2449,
              spinDirection: 57
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.72
          },
          hitData: {
            launchSpeed: 103.4,
            launchAngle: -6.0,
            totalDistance: 18.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 143.34,
              coordY: 146.33
            }
          },
          index: 1,
          playId: 'ffb042a6-25a2-4199-8b70-be3d73d316bb',
          pitchNumber: 2,
          startTime: '2022-07-27T17:52:23.526Z',
          endTime: '2022-07-27T17:52:30.224Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:52:30.224Z',
      atBatIndex: 32
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Bryson Stott walks.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 33,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T17:54:48.125Z',
        endTime: '2022-07-27T17:56:18.104Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: {
        balls: 4,
        strikes: 1,
        outs: 0
      },
      matchup: {
        batter: {
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
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
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.9,
            endSpeed: 72.8,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 26.34,
              aZ: -41.61,
              pfxX: 9.25,
              pfxZ: -7.05,
              pX: 0.36,
              pZ: 1.05,
              vX0: 3.95,
              vY0: -116.27,
              vZ0: -0.63,
              x: 103.31,
              y: 210.54,
              x0: -2.57,
              y0: 50.0,
              z0: 5.35,
              aX: 12.38
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3027,
              spinDirection: 52
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.38
          },
          index: 0,
          playId: 'b44609ee-e4aa-410e-a0c3-16a44d9e7e7b',
          pitchNumber: 1,
          startTime: '2022-07-27T17:54:57.885Z',
          endTime: '2022-07-27T17:55:03.337Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.3,
            endSpeed: 72.2,
            strikeZoneTop: 3.26,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 23.64,
              aZ: -40.11,
              pfxX: 10.3,
              pfxZ: -5.95,
              pX: -1.87,
              pZ: 3.55,
              vX0: -0.95,
              vY0: -115.35,
              vZ0: 4.24,
              x: 188.31,
              y: 143.06,
              x0: -2.79,
              y0: 50.0,
              z0: 5.58,
              aX: 13.73
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 3093,
              spinDirection: 70
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.1
          },
          index: 1,
          playId: '62338152-2ae5-4fdd-a17a-540b4483e303',
          pitchNumber: 2,
          startTime: '2022-07-27T17:55:18.942Z',
          endTime: '2022-07-27T17:55:22.704Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 3,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.2,
            endSpeed: 87.1,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 30.41,
              aZ: -19.27,
              pfxX: -6.42,
              pfxZ: 6.62,
              pX: -0.8,
              pZ: 3.53,
              vX0: 6.57,
              vY0: -138.59,
              vZ0: -1.78,
              x: 147.62,
              y: 143.42,
              x0: -2.37,
              y0: 50.01,
              z0: 5.47,
              aX: -12.52
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2392,
              spinDirection: 233
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.16
          },
          index: 2,
          playId: '40914abf-586b-44f2-9cde-83c7a0726920',
          pitchNumber: 3,
          startTime: '2022-07-27T17:55:37.554Z',
          endTime: '2022-07-27T17:55:42.156Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 3,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 93.9,
            endSpeed: 86.6,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 27.11,
              aZ: -18.03,
              pfxX: -7.31,
              pfxZ: 7.42,
              pX: 0.67,
              pZ: 2.6,
              vX0: 10.57,
              vY0: -136.45,
              vZ0: -4.26,
              x: 91.29,
              y: 168.5,
              x0: -2.28,
              y0: 50.0,
              z0: 5.41,
              aX: -13.93
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2213,
              spinDirection: 234
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.27
          },
          index: 3,
          playId: '4db6f706-90b8-424f-9303-3fd0ce115070',
          pitchNumber: 4,
          startTime: '2022-07-27T17:55:52.380Z',
          endTime: '2022-07-27T17:55:55.400Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 4,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.6,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 28.16,
              aZ: -17.25,
              pfxX: -6.58,
              pfxZ: 7.8,
              pX: -0.86,
              pZ: 2.61,
              vX0: 6.62,
              vY0: -136.96,
              vZ0: -4.28,
              x: 149.96,
              y: 168.35,
              x0: -2.45,
              y0: 50.01,
              z0: 5.36,
              aX: -12.59
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2307,
              spinDirection: 233
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.21
          },
          index: 4,
          playId: 'a47179bd-9377-4bbf-a63c-03705b6eeb8b',
          pitchNumber: 5,
          startTime: '2022-07-27T17:56:09.255Z',
          endTime: '2022-07-27T17:56:18.104Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:56:18.104Z',
      atBatIndex: 33
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Alec Bohm singles on a ground ball to left fielder Marcell Ozuna.   Bryson Stott scores.',
        rbi: 1,
        awayScore: 0,
        homeScore: 1
      },
      about: {
        atBatIndex: 34,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T17:56:41.949Z',
        endTime: '2022-07-27T17:58:20.742Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 60
      },
      count: {
        balls: 0,
        strikes: 1,
        outs: 0
      },
      matchup: {
        batter: {
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 3],
      actionIndex: [2],
      runnerIndex: [0, 1, 2],
      runners: [
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
            event: 'Pickoff Error 1B',
            eventType: 'pickoff_error_1b',
            movementReason: 'r_pickoff_error_1b',
            runner: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
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
              player: {
                id: 450203,
                link: '/api/v1/people/450203'
              },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
              },
              credit: 'f_throwing_error'
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
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
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
              player: {
                id: 542303,
                link: '/api/v1/people/542303'
              },
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
            originBase: '3B',
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
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            responsiblePitcher: {
              id: 450203,
              link: '/api/v1/people/450203'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 3
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 82.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 23.02,
              aZ: -29.96,
              pfxX: 0.6,
              pfxZ: 1.31,
              pX: 0.04,
              pZ: 1.97,
              vX0: 6.17,
              vY0: -128.31,
              vZ0: -2.7,
              x: 115.58,
              y: 185.54,
              x0: -2.46,
              y0: 50.0,
              z0: 5.34,
              aX: 1.02
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2589,
              spinDirection: 181
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.29
          },
          index: 0,
          playId: '648b7e14-9c0f-4e27-bcad-f43059190bcd',
          pitchNumber: 1,
          startTime: '2022-07-27T17:56:55.961Z',
          endTime: '2022-07-27T17:56:59.226Z',
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
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          index: 1,
          playId: '16a30b55-460d-4ca7-ab03-e8dcb840ac0b',
          startTime: '2022-07-27T17:57:19.422Z',
          endTime: '2022-07-27T17:57:31.072Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            description:
              'Throwing error by pitcher Charlie Morton on the pickoff attempt.',
            event: 'Pickoff Error 1B',
            eventType: 'pickoff_error_1b',
            awayScore: 0,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          index: 2,
          actionPlayId: '16a30b55-460d-4ca7-ab03-e8dcb840ac0b',
          startTime: '2022-07-27T17:57:47.978Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: {
            id: 681082,
            link: '/api/v1/people/681082'
          }
        },
        {
          details: {
            call: {
              code: 'E',
              description: 'In play, run(s)'
            },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 80.7,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 23.35,
              aZ: -32.08,
              pfxX: -9.63,
              pfxZ: 0.06,
              pX: -0.6,
              pZ: 3.03,
              vX0: 7.85,
              vY0: -127.01,
              vZ0: 0.52,
              x: 139.77,
              y: 156.84,
              x0: -2.46,
              y0: 50.01,
              z0: 5.36,
              aX: -15.9
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1975,
              spinDirection: 268
            },
            zone: 1,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.29
          },
          hitData: {
            launchSpeed: 102.1,
            launchAngle: 7.0,
            totalDistance: 132.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 75.6,
              coordY: 105.1
            }
          },
          index: 3,
          playId: '162e97e8-9a0c-4acf-bbe3-c95506a2e714',
          pitchNumber: 2,
          startTime: '2022-07-27T17:58:09.887Z',
          endTime: '2022-07-27T17:58:20.742Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:58:20.742Z',
      atBatIndex: 34
    },
    {
      result: {
        type: 'atBat',
        event: 'Fielders Choice',
        eventType: 'fielders_choice',
        description:
          "Didi Gregorius reaches on a fielder's choice, fielded by second baseman Robinson Cano.   Alec Bohm to 2nd.  Alec Bohm advances to 2nd, on a fielding error by second baseman Robinson Cano.",
        rbi: 0,
        awayScore: 0,
        homeScore: 1
      },
      about: {
        atBatIndex: 35,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T17:58:53.175Z',
        endTime: '2022-07-27T17:59:07.437Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 9
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 0
      },
      matchup: {
        batter: {
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        postOnSecond: {
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
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
            event: 'Error',
            eventType: 'error',
            movementReason: 'r_adv_play',
            runner: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
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
              player: {
                id: 429664,
                link: '/api/v1/people/429664'
              },
              position: {
                code: '4',
                name: 'Second Base',
                type: 'Infielder',
                abbreviation: '2B'
              },
              credit: 'f_fielding_error'
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
            event: 'Fielders Choice',
            eventType: 'fielders_choice',
            movementReason: null,
            runner: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
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
              player: {
                id: 429664,
                link: '/api/v1/people/429664'
              },
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
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 81.1,
            endSpeed: 74.8,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 22.99,
              aZ: -40.0,
              pfxX: 9.01,
              pfxZ: -5.55,
              pX: -0.72,
              pZ: 2.31,
              vX0: 1.8,
              vY0: -118.14,
              vZ0: 1.37,
              x: 144.44,
              y: 176.38,
              x0: -2.66,
              y0: 50.0,
              z0: 5.41,
              aX: 12.71
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3066,
              spinDirection: 62
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.14
          },
          hitData: {
            launchSpeed: 88.1,
            launchAngle: -2.0,
            totalDistance: 28.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 149.95,
              coordY: 149.39
            }
          },
          index: 0,
          playId: '8204bd60-53be-46f1-aaf9-8a0cf386518f',
          pitchNumber: 1,
          startTime: '2022-07-27T17:58:58.802Z',
          endTime: '2022-07-27T17:59:07.437Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T17:59:07.437Z',
      atBatIndex: 35
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Odubel Herrera singles on a line drive to left fielder Marcell Ozuna.   Alec Bohm scores.    Didi Gregorius to 3rd.',
        rbi: 1,
        awayScore: 0,
        homeScore: 2
      },
      about: {
        atBatIndex: 36,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T17:59:46.632Z',
        endTime: '2022-07-27T18:01:00.694Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 70
      },
      count: {
        balls: 1,
        strikes: 0,
        outs: 0
      },
      matchup: {
        batter: {
          id: 546318,
          fullName: 'Odubel Herrera',
          link: '/api/v1/people/546318'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 546318,
          fullName: 'Odubel Herrera',
          link: '/api/v1/people/546318'
        },
        postOnThird: {
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [1, 2],
      actionIndex: [0],
      runnerIndex: [0, 1, 2, 3, 4],
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
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
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
              player: {
                id: 542303,
                link: '/api/v1/people/542303'
              },
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
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
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
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            responsiblePitcher: {
              id: 450203,
              link: '/api/v1/people/450203'
            },
            isScoringEvent: true,
            rbi: true,
            earned: false,
            teamUnearned: true,
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
            event: 'Single',
            eventType: 'single',
            movementReason: 'r_adv_force',
            runner: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
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
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
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
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 0,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          index: 0,
          startTime: '2022-07-27T17:59:46.632Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 546318,
            link: '/api/v1/people/546318'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.9,
            endSpeed: 73.1,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 23.68,
              aZ: -39.6,
              pfxX: 9.86,
              pfxZ: -5.48,
              pX: -1.23,
              pZ: 2.86,
              vX0: 0.36,
              vY0: -116.33,
              vZ0: 2.55,
              x: 163.99,
              y: 161.66,
              x0: -2.67,
              y0: 50.0,
              z0: 5.53,
              aX: 13.39
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3086,
              spinDirection: 57
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.2
          },
          index: 1,
          playId: '43b83973-037a-4a6a-8298-8777cbbebdb7',
          pitchNumber: 1,
          startTime: '2022-07-27T18:00:25.053Z',
          endTime: '2022-07-27T18:00:31.207Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'E',
              description: 'In play, run(s)'
            },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 81.8,
            endSpeed: 74.3,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 26.83,
              aZ: -41.06,
              pfxX: 8.89,
              pfxZ: -6.31,
              pX: -0.88,
              pZ: 2.23,
              vX0: 1.32,
              vY0: -119.0,
              vZ0: 1.28,
              x: 150.58,
              y: 178.56,
              x0: -2.6,
              y0: 50.01,
              z0: 5.46,
              aX: 12.51
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3151,
              spinDirection: 60
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.02
          },
          hitData: {
            launchSpeed: 97.7,
            launchAngle: 8.0,
            totalDistance: 197.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 43.03,
              coordY: 115.56
            }
          },
          index: 2,
          playId: '37a06f9c-c540-409f-8211-7288a025612c',
          pitchNumber: 2,
          startTime: '2022-07-27T18:00:48.927Z',
          endTime: '2022-07-27T18:01:00.694Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:01:00.694Z',
      atBatIndex: 36
    },
    {
      result: {
        type: 'atBat',
        event: 'Sac Fly',
        eventType: 'sac_fly',
        description:
          'Kyle Schwarber out on a sacrifice fly to center fielder Michael Harris II.   Didi Gregorius scores.',
        rbi: 1,
        awayScore: 0,
        homeScore: 3
      },
      about: {
        atBatIndex: 37,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T18:01:36.371Z',
        endTime: '2022-07-27T18:05:43.109Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 3,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 656941,
          fullName: 'Kyle Schwarber',
          link: '/api/v1/people/656941'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 546318,
          fullName: 'Odubel Herrera',
          link: '/api/v1/people/546318'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
            outNumber: 1
          },
          details: {
            event: 'Sac Fly',
            eventType: 'sac_fly',
            movementReason: null,
            runner: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 9
          },
          credits: [
            {
              player: {
                id: 671739,
                link: '/api/v1/people/671739'
              },
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
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
            },
            responsiblePitcher: {
              id: 450203,
              link: '/api/v1/people/450203'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 9
          },
          credits: []
        }
      ],
      playEvents: [
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.0,
            endSpeed: 87.1,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 29.73,
              aZ: -16.81,
              pfxX: -7.01,
              pfxZ: 7.92,
              pX: -0.03,
              pZ: 2.67,
              vX0: 8.71,
              vY0: -138.17,
              vZ0: -4.11,
              x: 118.04,
              y: 166.7,
              x0: -2.31,
              y0: 50.0,
              z0: 5.3,
              aX: -13.61
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2369,
              spinDirection: 236
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.12
          },
          index: 0,
          playId: 'a98df75f-7ce0-46d5-aa4d-0ce52646fcd7',
          pitchNumber: 1,
          startTime: '2022-07-27T18:01:42.766Z',
          endTime: '2022-07-27T18:01:45.766Z',
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
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          index: 1,
          playId: '24de5392-b6bf-4952-bb61-acbb3eefb2dc',
          startTime: '2022-07-27T18:02:02.707Z',
          endTime: '2022-07-27T18:02:09.295Z',
          isPitch: false,
          type: 'pickoff'
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 96.3,
            endSpeed: 87.9,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 32.0,
              aZ: -20.96,
              pfxX: -7.44,
              pfxZ: 5.64,
              pX: -2.11,
              pZ: 4.78,
              vX0: 4.0,
              vY0: -140.26,
              vZ0: 1.49,
              x: 197.61,
              y: 109.64,
              x0: -2.59,
              y0: 50.0,
              z0: 5.61,
              aX: -14.82
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2347,
              spinDirection: 234
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.0
          },
          index: 2,
          playId: 'f7502ee4-d687-4f91-9df4-8a0d07193eb4',
          pitchNumber: 2,
          startTime: '2022-07-27T18:02:21.214Z',
          endTime: '2022-07-27T18:02:24.924Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.3,
            endSpeed: 87.6,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 29.34,
              aZ: -17.39,
              pfxX: -6.77,
              pfxZ: 7.58,
              pX: 0.38,
              pZ: 1.6,
              vX0: 9.84,
              vY0: -138.4,
              vZ0: -6.92,
              x: 102.34,
              y: 195.67,
              x0: -2.33,
              y0: 50.0,
              z0: 5.28,
              aX: -13.19
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2422,
              spinDirection: 229
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.31
          },
          index: 3,
          playId: 'f2c3bad6-78ab-4e8d-914d-2f011aaa267e',
          pitchNumber: 3,
          startTime: '2022-07-27T18:02:44.507Z',
          endTime: '2022-07-27T18:02:52.088Z',
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
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 81.8,
            endSpeed: 75.6,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 22.83,
              aZ: -40.43,
              pfxX: 7.63,
              pfxZ: -5.74,
              pX: -0.4,
              pZ: 2.27,
              vX0: 2.96,
              vY0: -119.16,
              vZ0: 1.17,
              x: 132.11,
              y: 177.45,
              x0: -2.64,
              y0: 50.0,
              z0: 5.43,
              aX: 10.97
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3029,
              spinDirection: 62
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.19
          },
          index: 4,
          playId: '8b7437db-63d0-42f9-aeb9-690dc6fbc4c8',
          pitchNumber: 4,
          startTime: '2022-07-27T18:03:04.628Z',
          endTime: '2022-07-27T18:03:09.559Z',
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
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.9,
            endSpeed: 88.7,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 27.7,
              aZ: -18.08,
              pfxX: -4.6,
              pfxZ: 7.04,
              pX: -0.63,
              pZ: 2.92,
              vX0: 6.62,
              vY0: -139.65,
              vZ0: -3.69,
              x: 140.91,
              y: 159.84,
              x0: -2.42,
              y0: 50.0,
              z0: 5.43,
              aX: -9.2
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2420,
              spinDirection: 228
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.13
          },
          index: 5,
          playId: '4dbfcb1d-dff6-45ce-bee1-a591882bec89',
          pitchNumber: 5,
          startTime: '2022-07-27T18:03:34.034Z',
          endTime: '2022-07-27T18:03:37.157Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 82.0,
            endSpeed: 75.7,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 23.55,
              aZ: -39.56,
              pfxX: 8.98,
              pfxZ: -5.12,
              pX: -0.62,
              pZ: 1.31,
              vX0: 1.97,
              vY0: -119.43,
              vZ0: -0.76,
              x: 140.64,
              y: 203.4,
              x0: -2.62,
              y0: 50.01,
              z0: 5.2,
              aX: 12.94
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3152,
              spinDirection: 60
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.14
          },
          index: 6,
          playId: '4cc58ca7-ac2f-4932-a31b-07cc416eeda3',
          pitchNumber: 6,
          startTime: '2022-07-27T18:04:01.180Z',
          endTime: '2022-07-27T18:04:05.767Z',
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
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 96.5,
            endSpeed: 88.6,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 30.1,
              aZ: -20.87,
              pfxX: -6.49,
              pfxZ: 5.64,
              pX: 0.54,
              pZ: 3.34,
              vX0: 10.25,
              vY0: -140.25,
              vZ0: -2.12,
              x: 96.49,
              y: 148.49,
              x0: -2.31,
              y0: 50.01,
              z0: 5.46,
              aX: -13.01
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2368,
              spinDirection: 230
            },
            zone: 3,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.09
          },
          index: 7,
          playId: '476700e4-059d-4788-9047-569e673dfb09',
          pitchNumber: 7,
          startTime: '2022-07-27T18:04:37.382Z',
          endTime: '2022-07-27T18:04:44.876Z',
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
          count: {
            balls: 3,
            strikes: 2,
            outs: 0
          },
          index: 8,
          playId: '4f1af1f0-9c74-480b-8530-13d6dcd7bae3',
          startTime: '2022-07-27T18:05:13.039Z',
          endTime: '2022-07-27T18:05:16.953Z',
          isPitch: false,
          type: 'pickoff'
        },
        {
          details: {
            call: {
              code: 'E',
              description: 'In play, run(s)'
            },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 81.8,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 24.71,
              aZ: -32.17,
              pfxX: -11.05,
              pfxZ: -0.0,
              pX: -0.76,
              pZ: 2.87,
              vX0: 7.97,
              vY0: -129.01,
              vZ0: -0.07,
              x: 145.83,
              y: 161.26,
              x0: -2.44,
              y0: 50.0,
              z0: 5.36,
              aX: -18.78
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2193,
              spinDirection: 265
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.42,
            extension: 6.13
          },
          hitData: {
            launchSpeed: 108.1,
            launchAngle: 18.0,
            totalDistance: 385.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 119.11,
              coordY: 48.61
            }
          },
          index: 9,
          playId: '8e424093-a1de-487c-9f83-dc0c53b2c484',
          pitchNumber: 8,
          startTime: '2022-07-27T18:05:30.914Z',
          endTime: '2022-07-27T18:05:43.109Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:05:43.109Z',
      atBatIndex: 37
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Rhys Hoskins walks.',
        rbi: 0,
        awayScore: 0,
        homeScore: 3
      },
      about: {
        atBatIndex: 38,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T18:06:09.504Z',
        endTime: '2022-07-27T18:09:26.450Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: {
        balls: 4,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        postOnSecond: {
          id: 546318,
          fullName: 'Odubel Herrera',
          link: '/api/v1/people/546318'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 2, 4, 5, 6, 7],
      actionIndex: [1, 3],
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
            event: 'Stolen Base 2B',
            eventType: 'stolen_base_2b',
            movementReason: 'r_stolen_base_2b',
            runner: {
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
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
            event: 'Walk',
            eventType: 'walk',
            movementReason: null,
            runner: {
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 81.9,
            strikeZoneTop: 3.51,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 24.11,
              aZ: -29.13,
              pfxX: 0.91,
              pfxZ: 1.81,
              pX: 1.99,
              pZ: 1.99,
              vX0: 10.43,
              vY0: -128.32,
              vZ0: -2.74,
              x: 41.12,
              y: 185.12,
              x0: -2.23,
              y0: 50.0,
              z0: 5.32,
              aX: 1.54
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2625,
              spinDirection: 157
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.46
          },
          index: 0,
          playId: 'd03c7112-6e55-4948-bae9-0a98121480d2',
          pitchNumber: 1,
          startTime: '2022-07-27T18:06:22.166Z',
          endTime: '2022-07-27T18:06:28.805Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Odubel Herrera steals (5) 2nd base.',
            event: 'Stolen Base 2B',
            eventType: 'stolen_base_2b',
            awayScore: 0,
            homeScore: 3,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          index: 1,
          actionPlayId: 'd03c7112-6e55-4948-bae9-0a98121480d2',
          startTime: '2022-07-27T18:06:42.787Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: {
            id: 546318,
            link: '/api/v1/people/546318'
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
            balls: 2,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 95.6,
            endSpeed: 87.6,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 30.09,
              aZ: -14.92,
              pfxX: -6.86,
              pfxZ: 8.84,
              pX: 1.88,
              pZ: 1.82,
              vX0: 13.3,
              vY0: -138.58,
              vZ0: -6.63,
              x: 45.53,
              y: 189.68,
              x0: -2.09,
              y0: 50.01,
              z0: 5.23,
              aX: -13.38
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2405,
              spinDirection: 231
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.24
          },
          index: 2,
          playId: 'b72d7736-de61-4c82-b60b-2817bf8693ea',
          pitchNumber: 2,
          startTime: '2022-07-27T18:06:52.306Z',
          endTime: '2022-07-27T18:06:56.258Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 0,
            homeScore: 3,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 1
          },
          index: 3,
          startTime: '2022-07-27T18:07:07.569Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 656555,
            link: '/api/v1/people/656555'
          }
        },
        {
          details: {
            call: {
              code: 'T',
              description: 'Foul Tip'
            },
            description: 'Foul Tip',
            code: 'T',
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
            balls: 2,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 96.1,
            endSpeed: 88.5,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.84,
              aZ: -17.47,
              pfxX: -8.54,
              pfxZ: 7.37,
              pX: 0.03,
              pZ: 2.79,
              vX0: 9.27,
              vY0: -139.77,
              vZ0: -3.98,
              x: 115.92,
              y: 163.48,
              x0: -2.21,
              y0: 50.0,
              z0: 5.37,
              aX: -17.05
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2446,
              spinDirection: 232
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.25
          },
          index: 4,
          playId: '00a73318-b78c-4bb0-98b5-e3287a893192',
          pitchNumber: 3,
          startTime: '2022-07-27T18:08:04.439Z',
          endTime: '2022-07-27T18:08:08.078Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 83.0,
            endSpeed: 76.8,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 23.45,
              aZ: -38.68,
              pfxX: 5.57,
              pfxZ: -4.39,
              pX: 0.33,
              pZ: 1.8,
              vX0: 5.07,
              vY0: -120.85,
              vZ0: -0.39,
              x: 104.47,
              y: 190.21,
              x0: -2.52,
              y0: 50.01,
              z0: 5.36,
              aX: 8.23
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 3046,
              spinDirection: 62
            },
            zone: 9,
            typeConfidence: 0.89,
            plateTime: 0.45,
            extension: 6.28
          },
          index: 5,
          playId: 'afe539d9-7bc1-49e3-a506-7519fedb2175',
          pitchNumber: 4,
          startTime: '2022-07-27T18:08:30.045Z',
          endTime: '2022-07-27T18:08:34.815Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 96.7,
            endSpeed: 88.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 30.08,
              aZ: -17.66,
              pfxX: -5.99,
              pfxZ: 7.23,
              pX: 1.39,
              pZ: 3.27,
              vX0: 12.08,
              vY0: -140.36,
              vZ0: -3.05,
              x: 64.08,
              y: 150.51,
              x0: -2.18,
              y0: 50.0,
              z0: 5.51,
              aX: -12.02
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2582,
              spinDirection: 230
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.13
          },
          index: 6,
          playId: '99708023-e330-4732-86cb-2cce004ce9c2',
          pitchNumber: 5,
          startTime: '2022-07-27T18:08:54.586Z',
          endTime: '2022-07-27T18:08:58.800Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 4,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 96.6,
            endSpeed: 88.7,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 30.15,
              aZ: -16.68,
              pfxX: -7.18,
              pfxZ: 7.74,
              pX: 0.82,
              pZ: 1.54,
              vX0: 10.77,
              vY0: -140.2,
              vZ0: -7.44,
              x: 85.66,
              y: 197.16,
              x0: -2.13,
              y0: 50.01,
              z0: 5.31,
              aX: -14.37
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2537,
              spinDirection: 228
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.3
          },
          index: 7,
          playId: 'a9d403bc-7d48-4a2e-99fa-caa85a3da7c3',
          pitchNumber: 6,
          startTime: '2022-07-27T18:09:16.387Z',
          endTime: '2022-07-27T18:09:26.450Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:09:26.450Z',
      atBatIndex: 38
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'J.T. Realmuto singles on a line drive to center fielder Michael Harris II.   Odubel Herrera scores.    Rhys Hoskins scores.',
        rbi: 2,
        awayScore: 0,
        homeScore: 5
      },
      about: {
        atBatIndex: 39,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T18:09:55.677Z',
        endTime: '2022-07-27T18:11:56.782Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 2,
        strikes: 1,
        outs: 1
      },
      matchup: {
        batter: {
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [0, 1, 2, 4],
      actionIndex: [3],
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
            event: 'Stolen Base 3B',
            eventType: 'stolen_base_3b',
            movementReason: 'r_stolen_base_3b',
            runner: {
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
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
            originBase: '1B',
            start: '1B',
            end: '2B',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Stolen Base 2B',
            eventType: 'stolen_base_2b',
            movementReason: 'r_stolen_base_2b',
            runner: {
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
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
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
              player: {
                id: 671739,
                link: '/api/v1/people/671739'
              },
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
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
            },
            responsiblePitcher: {
              id: 450203,
              link: '/api/v1/people/450203'
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
            originBase: '3B',
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
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
            },
            responsiblePitcher: {
              id: 450203,
              link: '/api/v1/people/450203'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 4
          },
          credits: []
        }
      ],
      playEvents: [
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
            outs: 1
          },
          pitchData: {
            startSpeed: 96.3,
            endSpeed: 89.1,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 27.47,
              aZ: -15.78,
              pfxX: -7.45,
              pfxZ: 8.18,
              pX: 1.11,
              pZ: 1.12,
              vX0: 11.58,
              vY0: -139.69,
              vZ0: -8.56,
              x: 74.76,
              y: 208.43,
              x0: -2.1,
              y0: 50.0,
              z0: 5.23,
              aX: -14.92
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2559,
              spinDirection: 235
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.23
          },
          index: 0,
          playId: 'db83c971-1709-4f66-90bb-b8cdf6dfef0a',
          pitchNumber: 1,
          startTime: '2022-07-27T18:10:09.635Z',
          endTime: '2022-07-27T18:10:14.728Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 87.9,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 28.52,
              aZ: -19.75,
              pfxX: -11.73,
              pfxZ: 6.33,
              pX: 0.45,
              pZ: 2.11,
              vX0: 11.66,
              vY0: -138.62,
              vZ0: -5.12,
              x: 99.82,
              y: 181.85,
              x0: -2.27,
              y0: 50.01,
              z0: 5.28,
              aX: -23.02
            },
            breaks: {
              breakAngle: 44.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2407,
              spinDirection: 241
            },
            zone: 9,
            typeConfidence: 0.93,
            plateTime: 0.39,
            extension: 6.31
          },
          index: 1,
          playId: '47ca38f7-5e7b-4513-9e0a-4f50a713d34e',
          pitchNumber: 2,
          startTime: '2022-07-27T18:10:34.990Z',
          endTime: '2022-07-27T18:10:41.951Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 96.1,
            endSpeed: 87.6,
            strikeZoneTop: 3.62,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 31.48,
              aZ: -25.55,
              pfxX: -12.26,
              pfxZ: 3.36,
              pX: 0.05,
              pZ: 3.45,
              vX0: 10.66,
              vY0: -139.53,
              vZ0: -0.64,
              x: 115.18,
              y: 145.62,
              x0: -2.23,
              y0: 50.0,
              z0: 5.37,
              aX: -24.16
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2365,
              spinDirection: 234
            },
            zone: 2,
            typeConfidence: 0.93,
            plateTime: 0.39,
            extension: 6.1
          },
          index: 2,
          playId: '1fd61d7f-05bb-48e9-91ed-578ad2dea8f1',
          pitchNumber: 3,
          startTime: '2022-07-27T18:10:57.355Z',
          endTime: '2022-07-27T18:11:04.592Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description:
              'Odubel Herrera steals (6) 3rd base.  Rhys Hoskins steals (1) 2nd base.',
            event: 'Stolen Base 3B',
            eventType: 'stolen_base_3b',
            awayScore: 0,
            homeScore: 3,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 1
          },
          index: 3,
          actionPlayId: '1fd61d7f-05bb-48e9-91ed-578ad2dea8f1',
          startTime: '2022-07-27T18:11:22.084Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: {
            id: 546318,
            link: '/api/v1/people/546318'
          }
        },
        {
          details: {
            call: {
              code: 'E',
              description: 'In play, run(s)'
            },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 95.6,
            endSpeed: 88.0,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.64,
              aZ: -28.32,
              pfxX: -11.12,
              pfxZ: 1.95,
              pX: -0.57,
              pZ: 2.94,
              vX0: 8.65,
              vY0: -139.0,
              vZ0: -1.45,
              x: 138.83,
              y: 159.53,
              x0: -2.27,
              y0: 50.0,
              z0: 5.33,
              aX: -21.95
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2205,
              spinDirection: 234
            },
            zone: 4,
            typeConfidence: 0.93,
            plateTime: 0.39,
            extension: 6.13
          },
          hitData: {
            launchSpeed: 84.4,
            launchAngle: 13.0,
            totalDistance: 169.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 115.04,
              coordY: 87.91
            }
          },
          index: 4,
          playId: '937707e2-2d3c-4a95-b29c-209e8381183e',
          pitchNumber: 4,
          startTime: '2022-07-27T18:11:44.833Z',
          endTime: '2022-07-27T18:11:56.782Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:11:56.782Z',
      atBatIndex: 39
    },
    {
      result: {
        type: 'atBat',
        event: 'Grounded Into DP',
        eventType: 'grounded_into_double_play',
        description:
          'Darick Hall grounds into a double play, third baseman Austin Riley to shortstop Dansby Swanson to first baseman Matt Olson.   J.T. Realmuto out at 2nd.    Darick Hall out at 1st.',
        rbi: 0,
        awayScore: 0,
        homeScore: 5
      },
      about: {
        atBatIndex: 40,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T18:12:23.571Z',
        endTime: '2022-07-27T18:13:57.918Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 24
      },
      count: {
        balls: 1,
        strikes: 1,
        outs: 3
      },
      matchup: {
        batter: {
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 450203,
          fullName: 'Charlie Morton',
          link: '/api/v1/people/450203'
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
      pitchIndex: [0, 1, 2, 3],
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
            event: 'Grounded Into DP',
            eventType: 'grounded_into_double_play',
            movementReason: 'r_force_out',
            runner: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
              player: {
                id: 663586,
                link: '/api/v1/people/663586'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 621020,
                link: '/api/v1/people/621020'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
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
            outNumber: 3
          },
          details: {
            event: 'Grounded Into DP',
            eventType: 'grounded_into_double_play',
            movementReason: null,
            runner: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
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
              player: {
                id: 621020,
                link: '/api/v1/people/621020'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 621566,
                link: '/api/v1/people/621566'
              },
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
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 82.9,
            endSpeed: 76.1,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 25.67,
              aZ: -41.15,
              pfxX: 6.83,
              pfxZ: -6.17,
              pX: 0.96,
              pZ: 1.38,
              vX0: 5.9,
              vY0: -120.52,
              vZ0: -0.62,
              x: 80.6,
              y: 201.64,
              x0: -2.42,
              y0: 50.0,
              z0: 5.3,
              aX: 9.94
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3028,
              spinDirection: 54
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.1
          },
          index: 0,
          playId: '39cb0a24-72dd-4606-bd03-cdf97ff40d39',
          pitchNumber: 1,
          startTime: '2022-07-27T18:12:31.817Z',
          endTime: '2022-07-27T18:12:38.838Z',
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
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          index: 1,
          playId: '14ba78c8-9584-4641-b29e-4841712bfa5e',
          startTime: '2022-07-27T18:12:57.403Z',
          endTime: '2022-07-27T18:13:00.817Z',
          isPitch: false,
          type: 'pickoff'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 81.1,
            endSpeed: 74.9,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.76,
            coordinates: {
              aY: 21.02,
              aZ: -37.2,
              pfxX: 8.74,
              pfxZ: -3.53,
              pX: -2.38,
              pZ: 3.77,
              vX0: -1.9,
              vY0: -118.12,
              vZ0: 3.54,
              x: 207.85,
              y: 136.91,
              x0: -2.71,
              y0: 50.01,
              z0: 5.66,
              aX: 12.43
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2988,
              spinDirection: 49
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 5.99
          },
          index: 2,
          playId: 'a8dc5b96-851c-47c9-86f7-25d34220d7c9',
          pitchNumber: 2,
          startTime: '2022-07-27T18:13:24.699Z',
          endTime: '2022-07-27T18:13:28.206Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 81.1,
            endSpeed: 75.1,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 21.28,
              aZ: -39.72,
              pfxX: 7.72,
              pfxZ: -5.32,
              pX: -0.52,
              pZ: 2.83,
              vX0: 2.61,
              vY0: -118.05,
              vZ0: 2.37,
              x: 136.79,
              y: 162.48,
              x0: -2.64,
              y0: 50.0,
              z0: 5.45,
              aX: 10.96
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 3004,
              spinDirection: 72
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.06
          },
          hitData: {
            launchSpeed: 89.7,
            launchAngle: -18.0,
            totalDistance: 9.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 116.91,
              coordY: 146.84
            }
          },
          index: 3,
          playId: 'b06d2938-daf4-49f5-b719-069143bcbfc8',
          pitchNumber: 3,
          startTime: '2022-07-27T18:13:49.349Z',
          endTime: '2022-07-27T18:13:57.918Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:13:57.918Z',
      atBatIndex: 40
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Dansby Swanson singles on a ground ball to third baseman Alec Bohm.',
        rbi: 0,
        awayScore: 0,
        homeScore: 5
      },
      about: {
        atBatIndex: 41,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T18:16:47.662Z',
        endTime: '2022-07-27T18:17:55.362Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 1,
        strikes: 1,
        outs: 0
      },
      matchup: {
        batter: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
        postOnFirst: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
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
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
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
              player: {
                id: 664761,
                link: '/api/v1/people/664761'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 84.2,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 26.0,
              aZ: -16.58,
              pfxX: -6.04,
              pfxZ: 8.65,
              pX: -0.47,
              pZ: 3.0,
              vX0: 6.13,
              vY0: -132.8,
              vZ0: -5.16,
              x: 134.94,
              y: 157.7,
              x0: -2.01,
              y0: 50.0,
              z0: 6.16,
              aX: -10.89
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2248,
              spinDirection: 216
            },
            zone: 1,
            typeConfidence: 0.75,
            plateTime: 0.41,
            extension: 6.65
          },
          index: 0,
          playId: '79fe147f-2c35-49c4-8cb0-efb6ad2b315e',
          pitchNumber: 1,
          startTime: '2022-07-27T18:17:07.301Z',
          endTime: '2022-07-27T18:17:10.494Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 83.6,
            endSpeed: 77.2,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 23.83,
              aZ: -33.34,
              pfxX: 4.33,
              pfxZ: -0.78,
              pX: 1.29,
              pZ: 1.94,
              vX0: 6.74,
              vY0: -121.56,
              vZ0: -2.89,
              x: 67.83,
              y: 186.34,
              x0: -2.08,
              y0: 50.0,
              z0: 6.04,
              aX: 6.47
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2507,
              spinDirection: 94
            },
            zone: 14,
            typeConfidence: 0.92,
            plateTime: 0.45,
            extension: 6.62
          },
          index: 1,
          playId: '1499d7f6-8fe8-48d9-a1d5-becef9ee5793',
          pitchNumber: 2,
          startTime: '2022-07-27T18:17:27.037Z',
          endTime: '2022-07-27T18:17:32.146Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.1,
            endSpeed: 82.1,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 26.11,
              aZ: -22.75,
              pfxX: -1.13,
              pfxZ: 5.51,
              pX: -0.72,
              pZ: 2.61,
              vX0: 4.19,
              vY0: -129.72,
              vZ0: -4.67,
              x: 144.45,
              y: 168.44,
              x0: -2.21,
              y0: 50.0,
              z0: 6.16,
              aX: -1.93
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2327,
              spinDirection: 190
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.42,
            extension: 6.43
          },
          hitData: {
            launchSpeed: 98.7,
            launchAngle: 5.0,
            totalDistance: 97.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 97.63,
              coordY: 159.06
            }
          },
          index: 2,
          playId: '608ec408-4bf9-45e3-bfd4-0b2633d7da77',
          pitchNumber: 3,
          startTime: '2022-07-27T18:17:46.329Z',
          endTime: '2022-07-27T18:17:55.362Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:17:55.362Z',
      atBatIndex: 41
    },
    {
      result: {
        type: 'atBat',
        event: 'Home Run',
        eventType: 'home_run',
        description:
          'Matt Olson homers (20) on a fly ball to center field.   Dansby Swanson scores.',
        rbi: 2,
        awayScore: 2,
        homeScore: 5
      },
      about: {
        atBatIndex: 42,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T18:18:24.136Z',
        endTime: '2022-07-27T18:21:06.731Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 38
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 0
      },
      matchup: {
        batter: {
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
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
      pitchIndex: [0, 1, 2, 3, 4, 5],
      actionIndex: [],
      runnerIndex: [0, 1],
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
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            responsiblePitcher: {
              id: 502043,
              link: '/api/v1/people/502043'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 5
          },
          credits: []
        },
        {
          movement: {
            originBase: '1B',
            start: '1B',
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
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            responsiblePitcher: {
              id: 502043,
              link: '/api/v1/people/502043'
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 84.6,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.76,
            coordinates: {
              aY: 28.38,
              aZ: -27.26,
              pfxX: -9.8,
              pfxZ: 2.69,
              pX: -1.19,
              pZ: 4.08,
              vX0: 5.98,
              vY0: -134.2,
              vZ0: -0.99,
              x: 162.43,
              y: 128.59,
              x0: -2.17,
              y0: 50.01,
              z0: 6.39,
              aX: -17.93
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2303,
              spinDirection: 216
            },
            zone: 11,
            typeConfidence: 0.93,
            plateTime: 0.41,
            extension: 6.79
          },
          index: 0,
          playId: 'a9c8a2d5-c351-4024-a6ee-9a0d553738d7',
          pitchNumber: 1,
          startTime: '2022-07-27T18:18:33.689Z',
          endTime: '2022-07-27T18:18:36.766Z',
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 82.4,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 26.33,
              aZ: -20.49,
              pfxX: -2.14,
              pfxZ: 6.76,
              pX: 0.57,
              pZ: 3.23,
              vX0: 7.82,
              vY0: -130.4,
              vZ0: -3.54,
              x: 95.41,
              y: 151.66,
              x0: -2.19,
              y0: 50.01,
              z0: 6.14,
              aX: -3.7
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2314,
              spinDirection: 205
            },
            zone: 3,
            typeConfidence: 2.0,
            plateTime: 0.42,
            extension: 6.52
          },
          index: 1,
          playId: 'c292c5f0-9d12-4ed5-9916-a96c1241dcb2',
          pitchNumber: 2,
          startTime: '2022-07-27T18:18:51.841Z',
          endTime: '2022-07-27T18:18:54.841Z',
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
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.3,
            endSpeed: 72.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.6,
              aZ: -37.61,
              pfxX: 2.73,
              pfxZ: -4.06,
              pX: -0.55,
              pZ: 2.81,
              vX0: 3.04,
              vY0: -115.41,
              vZ0: 0.26,
              x: 137.9,
              y: 162.93,
              x0: -2.24,
              y0: 50.0,
              z0: 6.34,
              aX: 3.66
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2456,
              spinDirection: 46
            },
            zone: 4,
            typeConfidence: 0.88,
            plateTime: 0.48,
            extension: 6.45
          },
          index: 2,
          playId: 'dd0f0653-f86b-4f76-96bc-2a3925cd0a5c',
          pitchNumber: 3,
          startTime: '2022-07-27T18:19:17.372Z',
          endTime: '2022-07-27T18:19:21.484Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 83.6,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 26.91,
              aZ: -28.58,
              pfxX: -8.63,
              pfxZ: 2.01,
              pX: 0.64,
              pZ: 4.49,
              vX0: 10.04,
              vY0: -132.44,
              vZ0: 0.86,
              x: 92.72,
              y: 117.6,
              x0: -2.07,
              y0: 50.0,
              z0: 6.24,
              aX: -15.42
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2152,
              spinDirection: 216
            },
            zone: 12,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 6.68
          },
          index: 3,
          playId: 'acfbe49f-a0d8-40d1-9ede-6458697a14cb',
          pitchNumber: 4,
          startTime: '2022-07-27T18:19:49.169Z',
          endTime: '2022-07-27T18:19:53.277Z',
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
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 88.0,
            endSpeed: 81.1,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 24.79,
              aZ: -24.39,
              pfxX: -0.07,
              pfxZ: 4.65,
              pX: -0.26,
              pZ: 3.89,
              vX0: 5.42,
              vY0: -128.14,
              vZ0: -0.99,
              x: 126.87,
              y: 133.81,
              x0: -2.39,
              y0: 50.0,
              z0: 6.17,
              aX: -0.12
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2313,
              spinDirection: 199
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.51
          },
          index: 4,
          playId: '439ebc36-d88c-4f5d-be8b-ae0bc85e2b15',
          pitchNumber: 5,
          startTime: '2022-07-27T18:20:13.063Z',
          endTime: '2022-07-27T18:20:16.063Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'E',
              description: 'In play, run(s)'
            },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 78.5,
            endSpeed: 72.6,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 21.05,
              aZ: -37.75,
              pfxX: 2.32,
              pfxZ: -4.22,
              pX: -0.45,
              pZ: 2.34,
              vX0: 3.19,
              vY0: -114.29,
              vZ0: -0.55,
              x: 134.28,
              y: 175.51,
              x0: -2.17,
              y0: 50.0,
              z0: 6.29,
              aX: 3.07
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2467,
              spinDirection: 43
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.59
          },
          hitData: {
            launchSpeed: 107.0,
            launchAngle: 28.0,
            totalDistance: 438.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 135.39,
              coordY: 21.97
            }
          },
          index: 5,
          playId: '4d706349-64d4-471c-846d-8ff54023af09',
          pitchNumber: 6,
          startTime: '2022-07-27T18:20:39.535Z',
          endTime: '2022-07-27T18:21:06.731Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:21:06.731Z',
      atBatIndex: 42
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description: 'Austin Riley lines out to third baseman Alec Bohm.',
        rbi: 0,
        awayScore: 2,
        homeScore: 5
      },
      about: {
        atBatIndex: 43,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T18:21:22.392Z',
        endTime: '2022-07-27T18:22:24.636Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 1,
        outs: 1
      },
      matchup: {
        batter: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
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
              player: {
                id: 664761,
                link: '/api/v1/people/664761'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 93.5,
            endSpeed: 86.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 26.4,
              aZ: -22.19,
              pfxX: -7.58,
              pfxZ: 5.26,
              pX: -0.22,
              pZ: 3.28,
              vX0: 7.07,
              vY0: -136.03,
              vZ0: -3.99,
              x: 125.4,
              y: 150.15,
              x0: -1.85,
              y0: 50.0,
              z0: 6.28,
              aX: -14.39
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2186,
              spinDirection: 213
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.51
          },
          index: 0,
          playId: '61a51acb-eb3a-4d64-a7b4-b4fcbafa9f36',
          pitchNumber: 1,
          startTime: '2022-07-27T18:21:34.494Z',
          endTime: '2022-07-27T18:21:37.494Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 86.0,
            endSpeed: 80.7,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 20.2,
              aZ: -22.39,
              pfxX: -9.13,
              pfxZ: 6.12,
              pX: 1.67,
              pZ: -0.83,
              vX0: 11.82,
              vY0: -124.39,
              vZ0: -12.16,
              x: 53.27,
              y: 261.19,
              x0: -1.91,
              y0: 50.01,
              z0: 5.91,
              aX: -14.6
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1651,
              spinDirection: 228
            },
            zone: 14,
            typeConfidence: 0.83,
            plateTime: 0.44,
            extension: 6.57
          },
          index: 1,
          playId: '90f405fe-fbd0-40e8-b248-67ddfa1a5aa8',
          pitchNumber: 2,
          startTime: '2022-07-27T18:21:53.983Z',
          endTime: '2022-07-27T18:21:57.062Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 85.6,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 26.38,
              aZ: -25.76,
              pfxX: -7.27,
              pfxZ: 3.46,
              pX: -0.65,
              pZ: 2.54,
              vX0: 5.88,
              vY0: -134.55,
              vZ0: -4.82,
              x: 141.97,
              y: 170.17,
              x0: -1.91,
              y0: 50.0,
              z0: 6.16,
              aX: -13.46
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2241,
              spinDirection: 214
            },
            zone: 4,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.61
          },
          hitData: {
            launchSpeed: 80.0,
            launchAngle: 14.0,
            totalDistance: 159.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 82.7,
              coordY: 153.96
            }
          },
          index: 2,
          playId: 'b23ca500-3dde-4689-b905-5f43f8284f29',
          pitchNumber: 3,
          startTime: '2022-07-27T18:22:18.346Z',
          endTime: '2022-07-27T18:22:24.636Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:22:24.636Z',
      atBatIndex: 43
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description:
          'Eddie Rosario strikes out swinging, catcher J.  T. Realmuto to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 2,
        homeScore: 5
      },
      about: {
        atBatIndex: 44,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T18:22:52.387Z',
        endTime: '2022-07-27T18:24:52.087Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 1,
        strikes: 3,
        outs: 2
      },
      matchup: {
        batter: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
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
            outNumber: 2
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            outs: 1
          },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 86.4,
            strikeZoneTop: 3.22,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 27.84,
              aZ: -14.43,
              pfxX: -4.38,
              pfxZ: 9.43,
              pX: 0.73,
              pZ: 0.88,
              vX0: 8.67,
              vY0: -135.86,
              vZ0: -11.1,
              x: 89.03,
              y: 214.96,
              x0: -1.92,
              y0: 50.0,
              z0: 6.01,
              aX: -8.25
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2416,
              spinDirection: 212
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.65
          },
          index: 0,
          playId: '06eb56a3-c065-4f52-9e04-7e4687e19be6',
          pitchNumber: 1,
          startTime: '2022-07-27T18:23:03.455Z',
          endTime: '2022-07-27T18:23:08.882Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 85.6,
            endSpeed: 79.1,
            strikeZoneTop: 3.24,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 23.48,
              aZ: -28.01,
              pfxX: -8.0,
              pfxZ: 2.64,
              pX: -0.69,
              pZ: 2.17,
              vX0: 6.18,
              vY0: -124.53,
              vZ0: -4.02,
              x: 143.3,
              y: 180.32,
              x0: -2.16,
              y0: 50.0,
              z0: 6.1,
              aX: -12.65
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1631,
              spinDirection: 231
            },
            zone: 4,
            typeConfidence: 0.83,
            plateTime: 0.44,
            extension: 6.58
          },
          index: 1,
          playId: '5b28a291-48be-46aa-9929-51ba07d453e9',
          pitchNumber: 2,
          startTime: '2022-07-27T18:23:27.904Z',
          endTime: '2022-07-27T18:23:31.613Z',
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 91.4,
            endSpeed: 85.0,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 24.64,
              aZ: -28.67,
              pfxX: -7.66,
              pfxZ: 1.93,
              pX: -1.0,
              pZ: 2.15,
              vX0: 5.87,
              vY0: -133.08,
              vZ0: -4.74,
              x: 155.14,
              y: 180.75,
              x0: -2.22,
              y0: 50.0,
              z0: 5.99,
              aX: -13.95
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2123,
              spinDirection: 218
            },
            zone: 13,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 6.44
          },
          index: 2,
          playId: '867d2b6c-d879-4b42-a98b-2433ecfbd2b1',
          pitchNumber: 3,
          startTime: '2022-07-27T18:23:47.114Z',
          endTime: '2022-07-27T18:23:50.114Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 85.4,
            endSpeed: 79.6,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 21.6,
              aZ: -28.96,
              pfxX: -7.3,
              pfxZ: 2.02,
              pX: -0.86,
              pZ: 2.15,
              vX0: 5.81,
              vY0: -124.41,
              vZ0: -3.87,
              x: 149.79,
              y: 180.79,
              x0: -2.26,
              y0: 50.0,
              z0: 6.09,
              aX: -11.61
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1559,
              spinDirection: 229
            },
            zone: 13,
            typeConfidence: 0.85,
            plateTime: 0.44,
            extension: 6.52
          },
          index: 3,
          playId: '6adf8a85-dfca-499a-b967-a5b5b5bf2e80',
          pitchNumber: 4,
          startTime: '2022-07-27T18:24:14.381Z',
          endTime: '2022-07-27T18:24:18.348Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 79.7,
            endSpeed: 75.0,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 19.19,
              aZ: -36.36,
              pfxX: 3.68,
              pfxZ: -3.03,
              pX: -0.17,
              pZ: -0.01,
              vX0: 3.46,
              vY0: -116.06,
              vZ0: -6.06,
              x: 123.63,
              y: 239.17,
              x0: -2.15,
              y0: 50.0,
              z0: 6.05,
              aX: 5.08
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2562,
              spinDirection: 51
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.47,
            extension: 6.73
          },
          index: 4,
          playId: '6de8c55b-64b8-440f-80c7-779eceeec7f7',
          pitchNumber: 5,
          startTime: '2022-07-27T18:24:43.755Z',
          endTime: '2022-07-27T18:24:52.087Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:24:52.087Z',
      atBatIndex: 44
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'William Contreras flies out to right fielder Nick Castellanos.',
        rbi: 0,
        awayScore: 2,
        homeScore: 5
      },
      about: {
        atBatIndex: 45,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T18:25:13.663Z',
        endTime: '2022-07-27T18:28:20.720Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 3,
        strikes: 2,
        outs: 3
      },
      matchup: {
        batter: {
          id: 661388,
          fullName: 'William Contreras',
          link: '/api/v1/people/661388'
        },
        batSide: {
          code: 'R',
          description: 'Right'
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
            outNumber: 3
          },
          details: {
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 661388,
              fullName: 'William Contreras',
              link: '/api/v1/people/661388'
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
              player: {
                id: 592206,
                link: '/api/v1/people/592206'
              },
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
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.1,
            endSpeed: 84.2,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 26.35,
              aZ: -19.72,
              pfxX: 0.23,
              pfxZ: 6.96,
              pX: 0.58,
              pZ: 1.71,
              vX0: 6.9,
              vY0: -132.4,
              vZ0: -7.39,
              x: 95.0,
              y: 192.58,
              x0: -2.09,
              y0: 50.0,
              z0: 5.96,
              aX: 0.41
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2531,
              spinDirection: 202
            },
            zone: 9,
            typeConfidence: 0.85,
            plateTime: 0.41,
            extension: 6.83
          },
          index: 0,
          playId: 'e4744a6b-5feb-45b6-af04-14b96b58e538',
          pitchNumber: 1,
          startTime: '2022-07-27T18:25:24.246Z',
          endTime: '2022-07-27T18:25:27.373Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.8,
            endSpeed: 85.6,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 24.18,
              aZ: -25.49,
              pfxX: -6.66,
              pfxZ: 3.62,
              pX: -1.42,
              pZ: 2.76,
              vX0: 3.53,
              vY0: -133.76,
              vZ0: -4.6,
              x: 171.19,
              y: 164.31,
              x0: -1.88,
              y0: 50.0,
              z0: 6.29,
              aX: -12.28
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2168,
              spinDirection: 211
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.66
          },
          index: 1,
          playId: 'bb89b7f7-e636-44ec-9633-e81230335a64',
          pitchNumber: 2,
          startTime: '2022-07-27T18:26:13.887Z',
          endTime: '2022-07-27T18:26:19.887Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 84.8,
            endSpeed: 78.7,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 23.97,
              aZ: -34.81,
              pfxX: 0.64,
              pfxZ: -1.71,
              pX: 1.2,
              pZ: 0.8,
              vX0: 7.6,
              vY0: -123.28,
              vZ0: -5.54,
              x: 71.22,
              y: 217.14,
              x0: -2.0,
              y0: 50.0,
              z0: 6.01,
              aX: 0.99
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2582,
              spinDirection: 68
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.65
          },
          index: 2,
          playId: '44910fe3-c67f-4e43-b805-331217bd80f4',
          pitchNumber: 3,
          startTime: '2022-07-27T18:26:33.680Z',
          endTime: '2022-07-27T18:26:38.148Z',
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
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 85.5,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 26.68,
              aZ: -15.37,
              pfxX: -3.51,
              pfxZ: 9.05,
              pX: 0.08,
              pZ: 2.66,
              vX0: 6.46,
              vY0: -134.77,
              vZ0: -6.32,
              x: 113.98,
              y: 167.07,
              x0: -1.88,
              y0: 50.01,
              z0: 6.1,
              aX: -6.53
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2353,
              spinDirection: 208
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.81
          },
          index: 3,
          playId: 'c4b4fec1-563f-49e8-a0bb-b83aae932ecc',
          pitchNumber: 4,
          startTime: '2022-07-27T18:26:56.590Z',
          endTime: '2022-07-27T18:27:04.004Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 80.0,
            endSpeed: 74.6,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 21.45,
              aZ: -37.32,
              pfxX: 3.67,
              pfxZ: -3.75,
              pX: 0.91,
              pZ: 0.53,
              vX0: 5.47,
              vY0: -116.37,
              vZ0: -4.76,
              x: 82.45,
              y: 224.51,
              x0: -1.95,
              y0: 50.0,
              z0: 6.13,
              aX: 5.04
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2472,
              spinDirection: 48
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.72
          },
          index: 4,
          playId: '0b45e2a8-02ad-4bff-aa63-8210943f7ddb',
          pitchNumber: 5,
          startTime: '2022-07-27T18:27:46.574Z',
          endTime: '2022-07-27T18:27:50.889Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 89.4,
            endSpeed: 83.4,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 22.78,
              aZ: -23.3,
              pfxX: 1.59,
              pfxZ: 5.08,
              pX: 0.13,
              pZ: 2.46,
              vX0: 5.59,
              vY0: -130.17,
              vZ0: -4.64,
              x: 111.93,
              y: 172.39,
              x0: -2.23,
              y0: 50.0,
              z0: 5.99,
              aX: 2.78
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2378,
              spinDirection: 186
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.57
          },
          hitData: {
            launchSpeed: 89.8,
            launchAngle: 40.0,
            totalDistance: 300.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 213.39,
              coordY: 114.59
            }
          },
          index: 5,
          playId: 'f93ab816-2fc5-4936-a596-a49b98ea54f0',
          pitchNumber: 6,
          startTime: '2022-07-27T18:28:10.044Z',
          endTime: '2022-07-27T18:28:20.720Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:28:20.720Z',
      atBatIndex: 45
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Nick Castellanos doubles (21) on a fly ball to center fielder Michael Harris II.',
        rbi: 0,
        awayScore: 2,
        homeScore: 5
      },
      about: {
        atBatIndex: 46,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T18:29:40.467Z',
        endTime: '2022-07-27T18:31:56.576Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
      },
      count: {
        balls: 0,
        strikes: 1,
        outs: 0
      },
      matchup: {
        batter: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 554431,
          fullName: 'Tyler Matzek',
          link: '/api/v1/people/554431'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        postOnSecond: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [1, 2],
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
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
              player: {
                id: 671739,
                link: '/api/v1/people/671739'
              },
              position: {
                code: '8',
                name: 'Outfielder',
                type: 'Outfielder',
                abbreviation: 'CF'
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
              'Pitching Change: Tyler Matzek replaces Charlie Morton.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 2,
            homeScore: 5,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          index: 0,
          startTime: '2022-07-27T18:29:41.467Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 554431,
            link: '/api/v1/people/554431'
          },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.8,
            endSpeed: 87.9,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 26.37,
              aZ: -15.64,
              pfxX: 1.97,
              pfxZ: 8.43,
              pX: -0.03,
              pZ: 3.85,
              vX0: -5.14,
              vY0: -138.08,
              vZ0: -3.81,
              x: 118.15,
              y: 134.73,
              x0: 1.59,
              y0: 50.0,
              z0: 6.28,
              aX: 3.87
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2355,
              spinDirection: 161
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.22
          },
          index: 1,
          playId: 'd20fa8b9-d080-41f3-93fd-461dc386d1c9',
          pitchNumber: 1,
          startTime: '2022-07-27T18:31:19.559Z',
          endTime: '2022-07-27T18:31:22.832Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 87.3,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 22.92,
              aZ: -15.28,
              pfxX: 0.03,
              pfxZ: 8.81,
              pX: -0.71,
              pZ: 3.46,
              vX0: -5.72,
              vY0: -135.96,
              vZ0: -4.82,
              x: 144.23,
              y: 145.34,
              x0: 1.39,
              y0: 50.0,
              z0: 6.28,
              aX: 0.05
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2382,
              spinDirection: 164
            },
            zone: 11,
            typeConfidence: 0.87,
            plateTime: 0.4,
            extension: 6.22
          },
          hitData: {
            launchSpeed: 82.1,
            launchAngle: 54.0,
            totalDistance: 215.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 151.64,
              coordY: 118.48
            }
          },
          index: 2,
          playId: '8afc167d-d345-495f-91fd-25bbcdfa58f7',
          pitchNumber: 2,
          startTime: '2022-07-27T18:31:42.841Z',
          endTime: '2022-07-27T18:31:56.576Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:31:56.576Z',
      atBatIndex: 46
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Bryson Stott flies out to left fielder Marcell Ozuna.',
        rbi: 0,
        awayScore: 2,
        homeScore: 5
      },
      about: {
        atBatIndex: 47,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T18:32:24.069Z',
        endTime: '2022-07-27T18:32:48.199Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 1
      },
      matchup: {
        batter: {
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 554431,
          fullName: 'Tyler Matzek',
          link: '/api/v1/people/554431'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        postOnSecond: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'RISP'
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
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
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
              player: {
                id: 542303,
                link: '/api/v1/people/542303'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 88.1,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 23.92,
              aZ: -13.64,
              pfxX: 1.62,
              pfxZ: 9.5,
              pX: -0.25,
              pZ: 2.86,
              vX0: -5.47,
              vY0: -137.28,
              vZ0: -6.88,
              x: 126.68,
              y: 161.44,
              x0: 1.53,
              y0: 50.0,
              z0: 6.29,
              aX: 3.16
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2408,
              spinDirection: 162
            },
            zone: 1,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.34
          },
          hitData: {
            launchSpeed: 93.8,
            launchAngle: 29.0,
            totalDistance: 344.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 71.18,
              coordY: 71.72
            }
          },
          index: 0,
          playId: '3b65fbe7-1f26-42b1-a78e-e03d658197c6',
          pitchNumber: 1,
          startTime: '2022-07-27T18:32:37.158Z',
          endTime: '2022-07-27T18:32:48.199Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:32:48.199Z',
      atBatIndex: 47
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Alec Bohm doubles (15) on a line drive to right fielder Eddie Rosario.   Nick Castellanos scores.',
        rbi: 1,
        awayScore: 2,
        homeScore: 6
      },
      about: {
        atBatIndex: 48,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T18:33:15.341Z',
        endTime: '2022-07-27T18:36:45.566Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
      },
      count: {
        balls: 3,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 554431,
          fullName: 'Tyler Matzek',
          link: '/api/v1/people/554431'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        postOnSecond: {
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 2, 3, 4, 5, 6],
      actionIndex: [],
      runnerIndex: [0, 1, 2],
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
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
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
                id: 592696,
                link: '/api/v1/people/592696'
              },
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
            event: 'Double',
            eventType: 'double',
            movementReason: 'r_adv_force',
            runner: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
            originBase: '2B',
            start: '3B',
            end: 'score',
            outBase: null,
            isOut: false,
            outNumber: null
          },
          details: {
            event: 'Double',
            eventType: 'double',
            movementReason: 'r_adv_play',
            runner: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
            },
            responsiblePitcher: {
              id: 554431,
              link: '/api/v1/people/554431'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 6
          },
          credits: []
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.9,
            endSpeed: 73.7,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 21.88,
              aZ: -41.47,
              pfxX: -5.66,
              pfxZ: -6.78,
              pX: 0.66,
              pZ: 3.62,
              vX0: -0.78,
              vY0: -116.39,
              vZ0: 2.59,
              x: 91.88,
              y: 141.09,
              x0: 1.73,
              y0: 50.0,
              z0: 6.42,
              aX: -7.76
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2775,
              spinDirection: 321
            },
            zone: 12,
            typeConfidence: 0.95,
            plateTime: 0.47,
            extension: 6.36
          },
          index: 0,
          playId: '0465d299-ddb4-4951-b2d9-fbcf3a467241',
          pitchNumber: 1,
          startTime: '2022-07-27T18:33:29.043Z',
          endTime: '2022-07-27T18:33:33.491Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.4,
            endSpeed: 86.8,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.49,
              aZ: -15.1,
              pfxX: 0.52,
              pfxZ: 8.86,
              pX: 0.31,
              pZ: 4.08,
              vX0: -3.75,
              vY0: -137.48,
              vZ0: -3.13,
              x: 105.06,
              y: 128.55,
              x0: 1.62,
              y0: 50.0,
              z0: 6.25,
              aX: 0.99
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2335,
              spinDirection: 157
            },
            zone: 12,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.1
          },
          index: 1,
          playId: '8471d6d0-4079-42be-80c1-e990982887f2',
          pitchNumber: 2,
          startTime: '2022-07-27T18:33:50.654Z',
          endTime: '2022-07-27T18:33:54.395Z',
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
            balls: 2,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.9,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 27.3,
              aZ: -15.15,
              pfxX: -0.28,
              pfxZ: 8.87,
              pX: -0.11,
              pZ: 3.3,
              vX0: -4.26,
              vY0: -136.98,
              vZ0: -5.07,
              x: 121.27,
              y: 149.56,
              x0: 1.49,
              y0: 50.01,
              z0: 6.2,
              aX: -0.53
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2280,
              spinDirection: 160
            },
            zone: 2,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.18
          },
          index: 2,
          playId: 'cc3d898d-7b2e-45aa-bfe3-f51f05793575',
          pitchNumber: 3,
          startTime: '2022-07-27T18:34:15.654Z',
          endTime: '2022-07-27T18:34:18.654Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.0,
            endSpeed: 86.2,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 29.17,
              aZ: -14.62,
              pfxX: 2.97,
              pfxZ: 9.23,
              pX: -0.09,
              pZ: 3.73,
              vX0: -5.37,
              vY0: -136.8,
              vZ0: -4.15,
              x: 120.58,
              y: 138.13,
              x0: 1.51,
              y0: 50.0,
              z0: 6.26,
              aX: 5.64
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2469,
              spinDirection: 157
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.24
          },
          index: 3,
          playId: 'a70dc2e2-c53f-4d11-909e-8e0ec3f3f771',
          pitchNumber: 4,
          startTime: '2022-07-27T18:34:46.890Z',
          endTime: '2022-07-27T18:34:51.953Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: '*B',
              description: 'Ball In Dirt'
            },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 75.8,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 22.61,
              aZ: -40.02,
              pfxX: -6.01,
              pfxZ: -5.52,
              pX: -0.4,
              pZ: 0.64,
              vX0: -2.88,
              vY0: -118.49,
              vZ0: -4.37,
              x: 132.34,
              y: 221.62,
              x0: 1.61,
              y0: 50.0,
              z0: 6.16,
              aX: -8.55
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2769,
              spinDirection: 327
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.42
          },
          index: 4,
          playId: '147d4322-f2aa-41d2-929e-b890244bcf3c',
          pitchNumber: 5,
          startTime: '2022-07-27T18:35:20.491Z',
          endTime: '2022-07-27T18:35:26.535Z',
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
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 80.8,
            endSpeed: 75.2,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 21.42,
              aZ: -41.76,
              pfxX: -3.54,
              pfxZ: -6.79,
              pX: 0.08,
              pZ: 1.7,
              vX0: -2.46,
              vY0: -117.73,
              vZ0: -1.55,
              x: 114.09,
              y: 192.86,
              x0: 1.59,
              y0: 50.01,
              z0: 6.22,
              aX: -5.0
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2848,
              spinDirection: 321
            },
            zone: 8,
            typeConfidence: 0.61,
            plateTime: 0.46,
            extension: 6.42
          },
          index: 5,
          playId: 'cb46dbb2-b359-435e-88df-7fb7f210d86d',
          pitchNumber: 6,
          startTime: '2022-07-27T18:35:55.069Z',
          endTime: '2022-07-27T18:35:58.069Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'E',
              description: 'In play, run(s)'
            },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 95.2,
            endSpeed: 87.7,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 28.34,
              aZ: -13.74,
              pfxX: 1.45,
              pfxZ: 9.39,
              pX: 0.86,
              pZ: 3.46,
              vX0: -2.41,
              vY0: -138.62,
              vZ0: -4.94,
              x: 84.25,
              y: 145.29,
              x0: 1.55,
              y0: 50.01,
              z0: 6.17,
              aX: 2.85
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2477,
              spinDirection: 157
            },
            zone: 12,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.23
          },
          hitData: {
            launchSpeed: 95.4,
            launchAngle: 17.0,
            totalDistance: 263.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 219.45,
              coordY: 117.1
            }
          },
          index: 6,
          playId: 'd145ce7a-773b-4c8f-b967-79bfdde67cea',
          pitchNumber: 7,
          startTime: '2022-07-27T18:36:30.107Z',
          endTime: '2022-07-27T18:36:45.566Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:36:45.566Z',
      atBatIndex: 48
    },
    {
      result: {
        type: 'atBat',
        event: 'Sac Fly',
        eventType: 'sac_fly',
        description:
          'Didi Gregorius out on a sacrifice fly to center fielder Michael Harris II.   Alec Bohm scores.',
        rbi: 1,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 49,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T18:37:14.187Z',
        endTime: '2022-07-27T18:39:41.598Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 2,
        outs: 2
      },
      matchup: {
        batter: {
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 554431,
          fullName: 'Tyler Matzek',
          link: '/api/v1/people/554431'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [0, 1, 3, 4, 5],
      actionIndex: [2],
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
            event: 'Wild Pitch',
            eventType: 'wild_pitch',
            movementReason: 'r_adv_play',
            runner: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
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
            outNumber: 2
          },
          details: {
            event: 'Sac Fly',
            eventType: 'sac_fly',
            movementReason: null,
            runner: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
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
              player: {
                id: 671739,
                link: '/api/v1/people/671739'
              },
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
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            responsiblePitcher: {
              id: 554431,
              link: '/api/v1/people/554431'
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
            outs: 1
          },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 84.7,
            strikeZoneTop: 3.18,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.35,
              aZ: -17.43,
              pfxX: 1.24,
              pfxZ: 8.02,
              pX: -0.43,
              pZ: 4.37,
              vX0: -5.55,
              vY0: -134.51,
              vZ0: -2.08,
              x: 133.34,
              y: 120.8,
              x0: 1.5,
              y0: 50.0,
              z0: 6.38,
              aX: 2.29
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2450,
              spinDirection: 163
            },
            zone: 11,
            typeConfidence: 0.86,
            plateTime: 0.41,
            extension: 6.19
          },
          index: 0,
          playId: '5ded2a9d-f671-42c9-8fb8-ba234d8b69f2',
          pitchNumber: 1,
          startTime: '2022-07-27T18:37:27.347Z',
          endTime: '2022-07-27T18:37:31.947Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 34, 255, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CU',
              description: 'Curveball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 77.7,
            endSpeed: 71.1,
            strikeZoneTop: 3.12,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 21.54,
              aZ: -41.95,
              pfxX: -6.23,
              pfxZ: -7.6,
              pX: 2.5,
              pZ: 4.4,
              vX0: 3.02,
              vY0: -112.95,
              vZ0: 4.65,
              x: 21.88,
              y: 120.11,
              x0: 1.94,
              y0: 50.0,
              z0: 6.54,
              aX: -8.01
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2640,
              spinDirection: 323
            },
            zone: 12,
            typeConfidence: 0.97,
            plateTime: 0.49,
            extension: 6.16
          },
          index: 1,
          playId: '54ab2787-7827-446a-8aed-e03a2be772c9',
          pitchNumber: 2,
          startTime: '2022-07-27T18:37:49.777Z',
          endTime: '2022-07-27T18:37:56.635Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description:
              'Wild pitch by pitcher Tyler Matzek.   Alec Bohm to 3rd.',
            event: 'Wild Pitch',
            eventType: 'wild_pitch',
            awayScore: 2,
            homeScore: 6,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 1
          },
          index: 2,
          actionPlayId: '54ab2787-7827-446a-8aed-e03a2be772c9',
          startTime: '2022-07-27T18:38:00.775Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: {
            id: 664761,
            link: '/api/v1/people/664761'
          }
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
            balls: 2,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.1,
            endSpeed: 86.3,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 29.37,
              aZ: -12.18,
              pfxX: 3.8,
              pfxZ: 10.48,
              pX: 0.22,
              pZ: 3.86,
              vX0: -4.67,
              vY0: -137.05,
              vZ0: -4.21,
              x: 108.61,
              y: 134.47,
              x0: 1.45,
              y0: 50.0,
              z0: 6.25,
              aX: 7.25
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2484,
              spinDirection: 156
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.34
          },
          index: 3,
          playId: '02dc6263-1d7d-4f4d-8dd2-6b0cf39d9bf5',
          pitchNumber: 3,
          startTime: '2022-07-27T18:38:32.360Z',
          endTime: '2022-07-27T18:38:35.479Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.8,
            endSpeed: 86.1,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 28.73,
              aZ: -11.7,
              pfxX: 4.27,
              pfxZ: 10.78,
              pX: 0.02,
              pZ: 4.07,
              vX0: -5.28,
              vY0: -136.63,
              vZ0: -3.8,
              x: 116.31,
              y: 128.76,
              x0: 1.41,
              y0: 50.0,
              z0: 6.28,
              aX: 8.12
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2505,
              spinDirection: 155
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.17
          },
          index: 4,
          playId: 'c867e7c2-c037-4d41-b52d-7dcb4cbec239',
          pitchNumber: 4,
          startTime: '2022-07-27T18:38:56.426Z',
          endTime: '2022-07-27T18:38:59.426Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'E',
              description: 'In play, run(s)'
            },
            description: 'In play, run(s)',
            code: 'E',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 85.9,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 27.53,
              aZ: -11.92,
              pfxX: 2.47,
              pfxZ: 10.76,
              pX: -0.86,
              pZ: 3.55,
              vX0: -6.57,
              vY0: -135.81,
              vZ0: -4.95,
              x: 149.82,
              y: 142.94,
              x0: 1.26,
              y0: 50.01,
              z0: 6.21,
              aX: 4.65
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2324,
              spinDirection: 160
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.21
          },
          hitData: {
            launchSpeed: 92.1,
            launchAngle: 26.0,
            totalDistance: 352.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 120.43,
              coordY: 57.51
            }
          },
          index: 5,
          playId: 'a4b6799c-846b-43a5-ab79-d4ced043ceb6',
          pitchNumber: 5,
          startTime: '2022-07-27T18:39:28.850Z',
          endTime: '2022-07-27T18:39:41.598Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:39:41.598Z',
      atBatIndex: 49
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Odubel Herrera pops out to third baseman Austin Riley.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 50,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T18:40:11.462Z',
        endTime: '2022-07-27T18:40:32.439Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 3
      },
      matchup: {
        batter: {
          id: 546318,
          fullName: 'Odubel Herrera',
          link: '/api/v1/people/546318'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 554431,
          fullName: 'Tyler Matzek',
          link: '/api/v1/people/554431'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
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
            event: 'Pop Out',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
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
              player: {
                id: 663586,
                link: '/api/v1/people/663586'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.5,
            endSpeed: 86.3,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 31.09,
              aZ: -9.84,
              pfxX: 2.46,
              pfxZ: 11.73,
              pX: -0.03,
              pZ: 1.72,
              vX0: -5.21,
              vY0: -137.28,
              vZ0: -9.93,
              x: 118.14,
              y: 192.22,
              x0: 1.57,
              y0: 50.0,
              z0: 6.06,
              aX: 4.68
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2453,
              spinDirection: 158
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.26
          },
          hitData: {
            launchSpeed: 66.6,
            launchAngle: 70.0,
            totalDistance: 96.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 98.73,
              coordY: 163.64
            }
          },
          index: 0,
          playId: '8b4d79b0-f11a-4a5f-932f-ddb40c7b04a1',
          pitchNumber: 1,
          startTime: '2022-07-27T18:40:22.975Z',
          endTime: '2022-07-27T18:40:32.439Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:40:32.439Z',
      atBatIndex: 50
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Marcell Ozuna strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 51,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2022-07-27T18:41:42.386Z',
        endTime: '2022-07-27T18:45:11.552Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 2,
        strikes: 3,
        outs: 1
      },
      matchup: {
        batter: {
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 641401,
          fullName: 'Connor Brogdon',
          link: '/api/v1/people/641401'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
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
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
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
            description:
              'Pitching Change: Connor Brogdon replaces Kyle Gibson.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 2,
            homeScore: 7,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          index: 0,
          startTime: '2022-07-27T18:41:42.386Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 641401,
            link: '/api/v1/people/641401'
          },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 83.2,
            endSpeed: 76.8,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 21.93,
              aZ: -26.37,
              pfxX: -10.15,
              pfxZ: 3.88,
              pX: -0.56,
              pZ: 2.41,
              vX0: 7.79,
              vY0: -120.98,
              vZ0: -2.55,
              x: 138.37,
              y: 173.66,
              x0: -2.49,
              y0: 50.0,
              z0: 5.77,
              aX: -15.16
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1934,
              spinDirection: 251
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.45,
            extension: 6.93
          },
          index: 1,
          playId: 'bdbc0745-52e4-4a01-bc3f-1ec5a70dcafe',
          pitchNumber: 1,
          startTime: '2022-07-27T18:43:34.528Z',
          endTime: '2022-07-27T18:43:37.973Z',
          isPitch: true,
          type: 'pitch'
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.9,
            endSpeed: 86.9,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 29.38,
              aZ: -15.94,
              pfxX: -7.79,
              pfxZ: 8.39,
              pX: 0.73,
              pZ: 3.96,
              vX0: 10.78,
              vY0: -137.9,
              vZ0: -2.24,
              x: 89.02,
              y: 131.95,
              x0: -2.21,
              y0: 50.0,
              z0: 5.85,
              aX: -15.06
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2262,
              spinDirection: 218
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.9
          },
          index: 2,
          playId: '7281f35f-6957-423c-a8e1-b538717d5f18',
          pitchNumber: 2,
          startTime: '2022-07-27T18:43:55.484Z',
          endTime: '2022-07-27T18:43:59.507Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.4,
            endSpeed: 87.5,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 29.41,
              aZ: -14.39,
              pfxX: -6.5,
              pfxZ: 9.07,
              pX: -0.3,
              pZ: 4.26,
              vX0: 8.07,
              vY0: -138.79,
              vZ0: -1.73,
              x: 128.36,
              y: 123.86,
              x0: -2.39,
              y0: 50.01,
              z0: 5.84,
              aX: -12.76
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2403,
              spinDirection: 213
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.96
          },
          index: 3,
          playId: 'b80ce847-f076-4a7d-8250-53b49532fda2',
          pitchNumber: 3,
          startTime: '2022-07-27T18:44:17.611Z',
          endTime: '2022-07-27T18:44:21.669Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.9,
            endSpeed: 87.1,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.9,
              aZ: -12.26,
              pfxX: -7.19,
              pfxZ: 10.31,
              pX: 0.79,
              pZ: 2.34,
              vX0: 10.58,
              vY0: -137.7,
              vZ0: -6.85,
              x: 86.78,
              y: 175.68,
              x0: -2.15,
              y0: 50.0,
              z0: 5.68,
              aX: -13.9
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2314,
              spinDirection: 215
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 7.02
          },
          index: 4,
          playId: '07043f9d-dfbd-4e14-928a-002d81a8ee64',
          pitchNumber: 4,
          startTime: '2022-07-27T18:44:42.108Z',
          endTime: '2022-07-27T18:44:45.181Z',
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
            balls: 2,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 87.7,
            endSpeed: 81.1,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 23.91,
              aZ: -23.73,
              pfxX: 0.5,
              pfxZ: 5.07,
              pX: 0.77,
              pZ: 3.14,
              vX0: 7.84,
              vY0: -127.65,
              vZ0: -1.49,
              x: 87.75,
              y: 154.03,
              x0: -2.4,
              y0: 50.0,
              z0: 5.58,
              aX: 0.83
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2356,
              spinDirection: 181
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.92
          },
          index: 5,
          playId: '365a256b-df30-48f4-954f-958fb6b71c2a',
          pitchNumber: 5,
          startTime: '2022-07-27T18:45:08.552Z',
          endTime: '2022-07-27T18:45:11.552Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:45:11.552Z',
      atBatIndex: 51
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Robinson Cano strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 52,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2022-07-27T18:45:33.531Z',
        endTime: '2022-07-27T18:47:50.639Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 1,
        strikes: 3,
        outs: 2
      },
      matchup: {
        batter: {
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 641401,
          fullName: 'Connor Brogdon',
          link: '/api/v1/people/641401'
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
            outNumber: 2
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.8,
            endSpeed: 86.7,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 30.14,
              aZ: -14.04,
              pfxX: -8.5,
              pfxZ: 9.42,
              pX: -0.71,
              pZ: 2.66,
              vX0: 8.15,
              vY0: -137.8,
              vZ0: -5.43,
              x: 143.91,
              y: 166.94,
              x0: -2.59,
              y0: 50.01,
              z0: 5.6,
              aX: -16.37
            },
            breaks: {
              breakAngle: 44.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2317,
              spinDirection: 223
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.95
          },
          index: 0,
          playId: '066a39f6-b890-42d1-81a2-77331ac7b558',
          pitchNumber: 1,
          startTime: '2022-07-27T18:45:45.167Z',
          endTime: '2022-07-27T18:45:48.359Z',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.1,
            endSpeed: 80.0,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 25.58,
              aZ: -25.69,
              pfxX: 0.22,
              pfxZ: 3.98,
              pX: 0.6,
              pZ: 2.9,
              vX0: 7.84,
              vY0: -126.71,
              vZ0: -1.68,
              x: 94.22,
              y: 160.58,
              x0: -2.56,
              y0: 50.0,
              z0: 5.62,
              aX: 0.36
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2346,
              spinDirection: 193
            },
            zone: 6,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.95
          },
          index: 1,
          playId: '2ce98813-ad50-475d-ab04-189412c63784',
          pitchNumber: 2,
          startTime: '2022-07-27T18:46:03.832Z',
          endTime: '2022-07-27T18:46:08.227Z',
          isPitch: true,
          type: 'pitch'
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
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.5,
            endSpeed: 85.6,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 32.92,
              aZ: -16.23,
              pfxX: -6.32,
              pfxZ: 8.41,
              pX: -1.15,
              pZ: 3.48,
              vX0: 5.91,
              vY0: -137.42,
              vZ0: -2.79,
              x: 160.85,
              y: 144.9,
              x0: -2.52,
              y0: 50.0,
              z0: 5.62,
              aX: -11.98
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2211,
              spinDirection: 223
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.88
          },
          index: 2,
          playId: 'a900be00-455d-4c2d-ab9b-ab6854648d9b',
          pitchNumber: 3,
          startTime: '2022-07-27T18:46:48.552Z',
          endTime: '2022-07-27T18:46:52.704Z',
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
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.6,
            endSpeed: 86.5,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 30.01,
              aZ: -13.55,
              pfxX: -5.59,
              pfxZ: 9.75,
              pX: 0.89,
              pZ: 2.71,
              vX0: 10.67,
              vY0: -137.26,
              vZ0: -5.39,
              x: 82.91,
              y: 165.51,
              x0: -2.31,
              y0: 50.0,
              z0: 5.62,
              aX: -10.67
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2271,
              spinDirection: 219
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 7.12
          },
          index: 3,
          playId: 'e5ed1791-3626-4885-b82a-c28988104a14',
          pitchNumber: 4,
          startTime: '2022-07-27T18:47:10.413Z',
          endTime: '2022-07-27T18:47:13.413Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 84.1,
            endSpeed: 77.6,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 23.21,
              aZ: -27.07,
              pfxX: -11.08,
              pfxZ: 3.36,
              pX: -0.85,
              pZ: 0.78,
              vX0: 7.37,
              vY0: -122.16,
              vZ0: -5.88,
              x: 149.44,
              y: 217.59,
              x0: -2.46,
              y0: 50.0,
              z0: 5.54,
              aX: -16.81
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1748,
              spinDirection: 249
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.45,
            extension: 7.11
          },
          index: 4,
          playId: '55cffdfb-a332-42ff-8e45-3a54d6c19331',
          pitchNumber: 5,
          startTime: '2022-07-27T18:47:44.218Z',
          endTime: '2022-07-27T18:47:50.639Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:47:50.639Z',
      atBatIndex: 52
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description: 'Mike Ford grounds out to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 53,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2022-07-27T18:48:07.979Z',
        endTime: '2022-07-27T18:49:37.031Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 1,
        outs: 3
      },
      matchup: {
        batter: {
          id: 645801,
          fullName: 'Mike Ford',
          link: '/api/v1/people/645801'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 641401,
          fullName: 'Connor Brogdon',
          link: '/api/v1/people/641401'
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
              id: 645801,
              fullName: 'Mike Ford',
              link: '/api/v1/people/645801'
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
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.5,
            endSpeed: 85.8,
            strikeZoneTop: 3.1,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 31.92,
              aZ: -13.35,
              pfxX: -7.84,
              pfxZ: 9.97,
              pX: 0.39,
              pZ: 1.72,
              vX0: 10.52,
              vY0: -136.94,
              vZ0: -7.93,
              x: 101.95,
              y: 192.27,
              x0: -2.49,
              y0: 50.01,
              z0: 5.58,
              aX: -14.81
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2318,
              spinDirection: 223
            },
            zone: 9,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 7.04
          },
          index: 0,
          playId: '3d393a72-feb7-49e7-8b79-eedd78485dee',
          pitchNumber: 1,
          startTime: '2022-07-27T18:48:23.200Z',
          endTime: '2022-07-27T18:48:26.396Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 83.6,
            endSpeed: 76.7,
            strikeZoneTop: 3.0,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 24.3,
              aZ: -26.3,
              pfxX: -12.15,
              pfxZ: 3.95,
              pX: -0.44,
              pZ: 0.74,
              vX0: 8.65,
              vY0: -121.34,
              vZ0: -5.88,
              x: 133.77,
              y: 218.85,
              x0: -2.48,
              y0: 50.01,
              z0: 5.49,
              aX: -18.07
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1996,
              spinDirection: 258
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.45,
            extension: 7.06
          },
          index: 1,
          playId: 'f7e5f292-390d-4584-96c6-f8bca75f90e4',
          pitchNumber: 2,
          startTime: '2022-07-27T18:48:41.898Z',
          endTime: '2022-07-27T18:48:47.207Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 84.1,
            endSpeed: 77.1,
            strikeZoneTop: 3.0,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 24.65,
              aZ: -23.93,
              pfxX: -12.04,
              pfxZ: 5.48,
              pX: -0.91,
              pZ: 1.05,
              vX0: 7.57,
              vY0: -122.11,
              vZ0: -6.09,
              x: 151.79,
              y: 210.51,
              x0: -2.49,
              y0: 50.0,
              z0: 5.64,
              aX: -18.13
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1988,
              spinDirection: 252
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.45,
            extension: 6.98
          },
          index: 2,
          playId: '7877ab58-89bf-4085-bb52-ab5025bdb2fa',
          pitchNumber: 3,
          startTime: '2022-07-27T18:49:06.221Z',
          endTime: '2022-07-27T18:49:11.350Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 90.2,
            endSpeed: 82.1,
            strikeZoneTop: 3.18,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 29.24,
              aZ: -18.87,
              pfxX: -2.54,
              pfxZ: 7.7,
              pX: 0.83,
              pZ: 2.56,
              vX0: 9.62,
              vY0: -131.0,
              vZ0: -4.11,
              x: 85.2,
              y: 169.58,
              x0: -2.57,
              y0: 50.01,
              z0: 5.57,
              aX: -4.39
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2291,
              spinDirection: 209
            },
            zone: 12,
            typeConfidence: 0.86,
            plateTime: 0.42,
            extension: 6.97
          },
          hitData: {
            launchSpeed: 82.5,
            launchAngle: -1.0,
            totalDistance: 46.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '3',
            coordinates: {
              coordX: 157.11,
              coordY: 164.66
            }
          },
          index: 3,
          playId: 'e52de0d3-6cfd-4c7f-9d2f-aa11f038ed58',
          pitchNumber: 4,
          startTime: '2022-07-27T18:49:31.015Z',
          endTime: '2022-07-27T18:49:37.031Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:49:37.031Z',
      atBatIndex: 53
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Kyle Schwarber grounds out, third baseman Austin Riley to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 54,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2022-07-27T18:52:00.124Z',
        endTime: '2022-07-27T18:52:20.614Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 1
      },
      matchup: {
        batter: {
          id: 656941,
          fullName: 'Kyle Schwarber',
          link: '/api/v1/people/656941'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 554431,
          fullName: 'Tyler Matzek',
          link: '/api/v1/people/554431'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
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
              player: {
                id: 663586,
                link: '/api/v1/people/663586'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 621566,
                link: '/api/v1/people/621566'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.7,
            endSpeed: 84.4,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 27.01,
              aZ: -10.9,
              pfxX: 1.95,
              pfxZ: 11.73,
              pX: -0.45,
              pZ: 2.8,
              vX0: -5.21,
              vY0: -133.42,
              vZ0: -7.01,
              x: 134.06,
              y: 163.22,
              x0: 1.27,
              y0: 50.0,
              z0: 6.23,
              aX: 3.53
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2441,
              spinDirection: 161
            },
            zone: 4,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 6.23
          },
          hitData: {
            launchSpeed: 72.8,
            launchAngle: -12.0,
            totalDistance: 13.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 156.85,
              coordY: 141.64
            }
          },
          index: 0,
          playId: '57b1adb4-1a4a-449b-8355-bc7a9fc5fe17',
          pitchNumber: 1,
          startTime: '2022-07-27T18:52:12.981Z',
          endTime: '2022-07-27T18:52:20.614Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:52:20.614Z',
      atBatIndex: 54
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Rhys Hoskins strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 55,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2022-07-27T18:52:33.040Z',
        endTime: '2022-07-27T18:56:21.817Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 2,
        strikes: 3,
        outs: 2
      },
      matchup: {
        batter: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 445926,
          fullName: 'Jesse Chavez',
          link: '/api/v1/people/445926'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
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
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
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
                id: 661388,
                link: '/api/v1/people/661388'
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
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 2,
            homeScore: 7,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          index: 0,
          startTime: '2022-07-27T18:52:33.040Z',
          endTime: '2022-07-27T18:53:11.747Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 656555,
            link: '/api/v1/people/656555'
          }
        },
        {
          details: {
            description: 'Pitching Change: Jesse Chavez replaces Tyler Matzek.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 2,
            homeScore: 7,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          index: 1,
          startTime: '2022-07-27T18:53:11.747Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 445926,
            link: '/api/v1/people/445926'
          },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
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
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.1,
            endSpeed: 82.6,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 23.3,
              aZ: -21.59,
              pfxX: -0.85,
              pfxZ: 6.12,
              pX: 1.04,
              pZ: 3.31,
              vX0: 7.0,
              vY0: -129.68,
              vZ0: -0.12,
              x: 77.39,
              y: 149.32,
              x0: -1.57,
              y0: 50.0,
              z0: 4.98,
              aX: -1.46
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2246,
              spinDirection: 208
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.07
          },
          index: 2,
          playId: 'b83aee79-f119-4413-8938-af11654520e7',
          pitchNumber: 1,
          startTime: '2022-07-27T18:55:12.822Z',
          endTime: '2022-07-27T18:55:17.419Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.1,
            endSpeed: 82.7,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 27.13,
              aZ: -20.86,
              pfxX: -0.77,
              pfxZ: 6.47,
              pX: 0.57,
              pZ: 2.2,
              vX0: 5.69,
              vY0: -131.21,
              vZ0: -3.02,
              x: 95.12,
              y: 179.31,
              x0: -1.52,
              y0: 50.0,
              z0: 4.92,
              aX: -1.35
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2209,
              spinDirection: 211
            },
            zone: 9,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.21
          },
          index: 3,
          playId: '04da55a0-c612-4dc9-b35b-54585c9433e6',
          pitchNumber: 2,
          startTime: '2022-07-27T18:55:23.245Z',
          endTime: '2022-07-27T18:55:26.287Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 84.0,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 25.95,
              aZ: -24.37,
              pfxX: -10.33,
              pfxZ: 4.34,
              pX: 1.03,
              pZ: 2.78,
              vX0: 9.85,
              vY0: -132.6,
              vZ0: -1.4,
              x: 77.82,
              y: 163.79,
              x0: -1.38,
              y0: 50.0,
              z0: 5.08,
              aX: -18.57
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1888,
              spinDirection: 235
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.19
          },
          index: 4,
          playId: '4b880ca8-14f4-4b05-b3a0-df60386a7b43',
          pitchNumber: 3,
          startTime: '2022-07-27T18:55:35.540Z',
          endTime: '2022-07-27T18:55:39.605Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 85.8,
            endSpeed: 78.7,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 25.1,
              aZ: -30.75,
              pfxX: -11.38,
              pfxZ: 0.9,
              pX: 0.29,
              pZ: 1.51,
              vX0: 7.71,
              vY0: -124.67,
              vZ0: -2.48,
              x: 106.02,
              y: 198.08,
              x0: -1.36,
              y0: 50.0,
              z0: 5.05,
              aX: -17.91
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1817,
              spinDirection: 255
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.31
          },
          index: 5,
          playId: 'd08f4672-1a53-4c12-9a89-a245759132c0',
          pitchNumber: 4,
          startTime: '2022-07-27T18:55:51.665Z',
          endTime: '2022-07-27T18:55:54.665Z',
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
            balls: 2,
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 88.6,
            endSpeed: 81.6,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 25.08,
              aZ: -21.7,
              pfxX: 0.25,
              pfxZ: 6.18,
              pX: 1.43,
              pZ: 3.14,
              vX0: 7.55,
              vY0: -128.92,
              vZ0: -0.52,
              x: 62.54,
              y: 154.09,
              x0: -1.56,
              y0: 50.0,
              z0: 5.0,
              aX: 0.43
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2173,
              spinDirection: 199
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.38
          },
          index: 6,
          playId: '12f5e3ce-3ec1-44d3-8786-28653df7d509',
          pitchNumber: 5,
          startTime: '2022-07-27T18:56:17.906Z',
          endTime: '2022-07-27T18:56:21.817Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:56:21.817Z',
      atBatIndex: 55
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description:
          'J.T. Realmuto pops out to first baseman Matt Olson in foul territory.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 56,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2022-07-27T18:56:47.540Z',
        endTime: '2022-07-27T18:57:16.527Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 3
      },
      matchup: {
        batter: {
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 445926,
          fullName: 'Jesse Chavez',
          link: '/api/v1/people/445926'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
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
            event: 'Pop Out',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
              player: {
                id: 621566,
                link: '/api/v1/people/621566'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 90.3,
            endSpeed: 83.1,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 25.97,
              aZ: -20.3,
              pfxX: -1.1,
              pfxZ: 6.73,
              pX: -0.11,
              pZ: 3.07,
              vX0: 4.47,
              vY0: -131.52,
              vZ0: -1.07,
              x: 121.35,
              y: 156.0,
              x0: -1.69,
              y0: 50.01,
              z0: 4.97,
              aX: -1.94
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2150,
              spinDirection: 220
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.12
          },
          hitData: {
            launchSpeed: 90.3,
            launchAngle: 74.0,
            totalDistance: 112.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '3',
            coordinates: {
              coordX: 169.78,
              coordY: 169.75
            }
          },
          index: 0,
          playId: '422316d9-574e-4ced-b6a0-8936ad885339',
          pitchNumber: 1,
          startTime: '2022-07-27T18:57:06.676Z',
          endTime: '2022-07-27T18:57:16.527Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T18:57:16.527Z',
      atBatIndex: 56
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Michael Harris II grounds out, third baseman Alec Bohm to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 57,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2022-07-27T18:58:31.731Z',
        endTime: '2022-07-27T19:01:58.870Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 2,
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
          id: 543272,
          fullName: 'Brad Hand',
          link: '/api/v1/people/543272'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_LHB',
          menOnBase: 'Empty'
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
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
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
              player: {
                id: 664761,
                link: '/api/v1/people/664761'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            description: 'Pitching Change: Brad Hand replaces Connor Brogdon.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 2,
            homeScore: 7,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          index: 0,
          startTime: '2022-07-27T18:58:31.731Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 543272,
            link: '/api/v1/people/543272'
          },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
          }
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 83.9,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 30.64,
              aZ: -20.06,
              pfxX: 11.04,
              pfxZ: 6.73,
              pX: -0.07,
              pZ: 2.01,
              vX0: -8.91,
              vY0: -133.8,
              vZ0: -7.48,
              x: 119.65,
              y: 184.54,
              x0: 1.88,
              y0: 50.01,
              z0: 6.29,
              aX: 19.89
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2341,
              spinDirection: 138
            },
            zone: 8,
            typeConfidence: 0.92,
            plateTime: 0.41,
            extension: 5.68
          },
          index: 1,
          playId: '3787de17-3612-40b6-8de1-3b1a2fd857c5',
          pitchNumber: 1,
          startTime: '2022-07-27T19:00:16.539Z',
          endTime: '2022-07-27T19:00:19.539Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 78.9,
            endSpeed: 73.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 21.64,
              aZ: -31.68,
              pfxX: -7.01,
              pfxZ: 0.38,
              pX: -1.4,
              pZ: 1.57,
              vX0: -5.79,
              vY0: -114.76,
              vZ0: -3.6,
              x: 170.36,
              y: 196.26,
              x0: 2.07,
              y0: 50.01,
              z0: 6.25,
              aX: -9.33
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2269,
              spinDirection: 316
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 5.58
          },
          index: 2,
          playId: 'ca0db4e4-0725-4808-9646-61d237471ec5',
          pitchNumber: 2,
          startTime: '2022-07-27T19:00:34.018Z',
          endTime: '2022-07-27T19:00:37.287Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.6,
            endSpeed: 73.4,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 23.19,
              aZ: -34.95,
              pfxX: -10.14,
              pfxZ: -2.05,
              pX: 0.04,
              pZ: 1.16,
              vX0: -1.89,
              vY0: -115.88,
              vZ0: -3.85,
              x: 115.47,
              y: 207.47,
              x0: 2.18,
              y0: 50.01,
              z0: 6.21,
              aX: -13.69
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2333,
              spinDirection: 314
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 5.47
          },
          index: 3,
          playId: 'da87b4a0-f64a-4e57-9948-9fc25bdb13c6',
          pitchNumber: 3,
          startTime: '2022-07-27T19:00:57.071Z',
          endTime: '2022-07-27T19:01:06.086Z',
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 84.2,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 31.0,
              aZ: -19.89,
              pfxX: 10.38,
              pfxZ: 6.76,
              pX: 0.41,
              pZ: 2.57,
              vX0: -7.62,
              vY0: -134.44,
              vZ0: -6.29,
              x: 101.29,
              y: 169.45,
              x0: 1.95,
              y0: 50.01,
              z0: 6.37,
              aX: 18.88
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2300,
              spinDirection: 139
            },
            zone: 6,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 5.71
          },
          index: 4,
          playId: '800f2ba3-3d22-480b-a073-3fc18dadd516',
          pitchNumber: 4,
          startTime: '2022-07-27T19:01:28.564Z',
          endTime: '2022-07-27T19:01:32.284Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.7,
            endSpeed: 73.4,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 23.99,
              aZ: -33.28,
              pfxX: -9.65,
              pfxZ: -0.83,
              pX: -1.01,
              pZ: 0.8,
              vX0: -4.13,
              vY0: -115.99,
              vZ0: -4.98,
              x: 155.61,
              y: 217.29,
              x0: 2.05,
              y0: 50.0,
              z0: 6.19,
              aX: -12.99
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2403,
              spinDirection: 315
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 5.6
          },
          hitData: {
            launchSpeed: 52.0,
            launchAngle: 4.0,
            totalDistance: 73.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 111.93,
              coordY: 160.73
            }
          },
          index: 5,
          playId: '355adf8e-dbb5-4e9a-8e2c-18f4ff92e4f8',
          pitchNumber: 5,
          startTime: '2022-07-27T19:01:51.422Z',
          endTime: '2022-07-27T19:01:58.870Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:01:58.870Z',
      atBatIndex: 57
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Dansby Swanson grounds out, shortstop Didi Gregorius to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 58,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2022-07-27T19:02:27.290Z',
        endTime: '2022-07-27T19:02:48.167Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 2
      },
      matchup: {
        batter: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 543272,
          fullName: 'Brad Hand',
          link: '/api/v1/people/543272'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
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
            outNumber: 2
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
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
              player: {
                id: 544369,
                link: '/api/v1/people/544369'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 656555,
                link: '/api/v1/people/656555'
              },
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
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.3,
            endSpeed: 73.9,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 20.14,
              aZ: -34.07,
              pfxX: -9.64,
              pfxZ: -1.39,
              pX: -0.01,
              pZ: 2.17,
              vX0: -2.26,
              vY0: -115.5,
              vZ0: -2.07,
              x: 117.55,
              y: 180.18,
              x0: 2.23,
              y0: 50.0,
              z0: 6.33,
              aX: -13.11
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2290,
              spinDirection: 314
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 5.48
          },
          hitData: {
            launchSpeed: 92.7,
            launchAngle: -7.0,
            totalDistance: 16.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 106.99,
              coordY: 147.86
            }
          },
          index: 0,
          playId: '5dba5056-1b96-44b9-bc53-a8f2bc409353',
          pitchNumber: 1,
          startTime: '2022-07-27T19:02:39.999Z',
          endTime: '2022-07-27T19:02:48.167Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:02:48.167Z',
      atBatIndex: 58
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Matt Olson walks.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 59,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2022-07-27T19:03:16.092Z',
        endTime: '2022-07-27T19:05:23.455Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 0
      },
      count: {
        balls: 4,
        strikes: 2,
        outs: 2
      },
      matchup: {
        batter: {
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 543272,
          fullName: 'Brad Hand',
          link: '/api/v1/people/543272'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        postOnFirst: {
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
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
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
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
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.7,
            endSpeed: 85.8,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 26.15,
              aZ: -18.31,
              pfxX: 5.42,
              pfxZ: 7.45,
              pX: 0.26,
              pZ: 2.15,
              vX0: -7.02,
              vY0: -134.77,
              vZ0: -7.03,
              x: 107.02,
              y: 180.76,
              x0: 2.18,
              y0: 50.0,
              z0: 6.06,
              aX: 10.08
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2403,
              spinDirection: 127
            },
            zone: 9,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 5.59
          },
          index: 0,
          playId: '39ed87e1-fdef-4b91-81dc-01d1a7f5325b',
          pitchNumber: 1,
          startTime: '2022-07-27T19:03:26.214Z',
          endTime: '2022-07-27T19:03:29.214Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 74.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 21.94,
              aZ: -35.48,
              pfxX: -9.48,
              pfxZ: -2.42,
              pX: -0.3,
              pZ: 1.11,
              vX0: -2.74,
              vY0: -116.26,
              vZ0: -4.02,
              x: 128.38,
              y: 208.86,
              x0: 2.13,
              y0: 50.0,
              z0: 6.23,
              aX: -12.97
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2395,
              spinDirection: 310
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 5.57
          },
          index: 1,
          playId: 'a97233b1-dd52-40dc-ab82-b351868f2a31',
          pitchNumber: 2,
          startTime: '2022-07-27T19:03:46.077Z',
          endTime: '2022-07-27T19:03:51.276Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.9,
            endSpeed: 73.2,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 24.92,
              aZ: -34.51,
              pfxX: -10.15,
              pfxZ: -1.74,
              pX: -1.44,
              pZ: 1.44,
              vX0: -4.67,
              vY0: -116.18,
              vZ0: -3.43,
              x: 171.86,
              y: 199.85,
              x0: 1.93,
              y0: 50.0,
              z0: 6.27,
              aX: -13.66
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2357,
              spinDirection: 308
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 5.55
          },
          index: 2,
          playId: '05681d2f-356e-4b91-92a3-f8b30709a3a1',
          pitchNumber: 3,
          startTime: '2022-07-27T19:04:10.040Z',
          endTime: '2022-07-27T19:04:14.404Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 93.8,
            endSpeed: 85.8,
            strikeZoneTop: 3.43,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 29.57,
              aZ: -15.47,
              pfxX: 7.26,
              pfxZ: 8.91,
              pX: -1.59,
              pZ: 2.0,
              vX0: -11.55,
              vY0: -135.99,
              vZ0: -8.09,
              x: 177.79,
              y: 184.66,
              x0: 1.76,
              y0: 50.0,
              z0: 6.09,
              aX: 13.61
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2452,
              spinDirection: 130
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 5.69
          },
          index: 3,
          playId: '3948af0f-b06c-40a6-acdd-9ebce462d6b7',
          pitchNumber: 4,
          startTime: '2022-07-27T19:04:30.541Z',
          endTime: '2022-07-27T19:04:35.248Z',
          isPitch: true,
          type: 'pitch'
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
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 86.1,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.48,
              aZ: -14.17,
              pfxX: 6.79,
              pfxZ: 9.63,
              pX: -2.2,
              pZ: 0.94,
              vX0: -12.98,
              vY0: -135.57,
              vZ0: -10.8,
              x: 200.67,
              y: 213.49,
              x0: 1.76,
              y0: 50.01,
              z0: 5.95,
              aX: 12.69
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2522,
              spinDirection: 129
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 5.72
          },
          index: 4,
          playId: '7996ae02-cd36-4951-bd97-dbe23f7173a6',
          pitchNumber: 5,
          startTime: '2022-07-27T19:04:53.009Z',
          endTime: '2022-07-27T19:04:56.399Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: '*B',
              description: 'Ball In Dirt'
            },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 4,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.7,
            endSpeed: 74.1,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 22.01,
              aZ: -36.07,
              pfxX: -8.52,
              pfxZ: -2.87,
              pX: -0.35,
              pZ: 0.59,
              vX0: -3.08,
              vY0: -116.02,
              vZ0: -4.92,
              x: 130.29,
              y: 222.77,
              x0: 2.1,
              y0: 50.0,
              z0: 6.18,
              aX: -11.59
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2368,
              spinDirection: 315
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 5.69
          },
          index: 5,
          playId: '9ee4f399-3d35-4f7a-8d7d-286dfa4704ea',
          pitchNumber: 6,
          startTime: '2022-07-27T19:05:17.340Z',
          endTime: '2022-07-27T19:05:23.455Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:05:23.455Z',
      atBatIndex: 59
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description: 'Austin Riley lines out to center fielder Odubel Herrera.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 60,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2022-07-27T19:05:46.800Z',
        endTime: '2022-07-27T19:07:48.876Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 2,
        outs: 3
      },
      matchup: {
        batter: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 543272,
          fullName: 'Brad Hand',
          link: '/api/v1/people/543272'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
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
            outNumber: 3
          },
          details: {
            event: 'Lineout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
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
              player: {
                id: 546318,
                link: '/api/v1/people/546318'
              },
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 93.6,
            endSpeed: 85.6,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 29.85,
              aZ: -17.17,
              pfxX: 7.1,
              pfxZ: 8.02,
              pX: -0.17,
              pZ: 2.22,
              vX0: -8.25,
              vY0: -135.92,
              vZ0: -7.22,
              x: 123.34,
              y: 178.82,
              x0: 1.99,
              y0: 50.0,
              z0: 6.1,
              aX: 13.29
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2327,
              spinDirection: 131
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 5.63
          },
          index: 0,
          playId: '00540718-45f2-4c24-99ea-62eeaab2b557',
          pitchNumber: 1,
          startTime: '2022-07-27T19:05:58.631Z',
          endTime: '2022-07-27T19:06:02.401Z',
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
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 84.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 29.66,
              aZ: -15.15,
              pfxX: 5.92,
              pfxZ: 9.25,
              pX: -0.72,
              pZ: 2.69,
              vX0: -8.87,
              vY0: -134.89,
              vZ0: -6.45,
              x: 144.46,
              y: 166.16,
              x0: 1.84,
              y0: 50.01,
              z0: 6.18,
              aX: 10.9
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2300,
              spinDirection: 136
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 5.65
          },
          index: 1,
          playId: '923b3bcf-864e-4860-9b46-b873197b668e',
          pitchNumber: 2,
          startTime: '2022-07-27T19:06:28.168Z',
          endTime: '2022-07-27T19:06:33.015Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 78.7,
            endSpeed: 72.7,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 20.42,
              aZ: -35.96,
              pfxX: -8.16,
              pfxZ: -2.83,
              pX: 2.17,
              pZ: 3.52,
              vX0: 1.95,
              vY0: -114.6,
              vZ0: 1.2,
              x: 34.47,
              y: 143.83,
              x0: 2.37,
              y0: 50.01,
              z0: 6.49,
              aX: -10.9
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2221,
              spinDirection: 312
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 5.46
          },
          index: 2,
          playId: 'd41af766-eb26-4b5f-babd-eede522b5d96',
          pitchNumber: 3,
          startTime: '2022-07-27T19:07:14.787Z',
          endTime: '2022-07-27T19:07:18.624Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.8,
            endSpeed: 73.6,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 22.82,
              aZ: -34.21,
              pfxX: -10.0,
              pfxZ: -1.5,
              pX: -0.19,
              pZ: 1.78,
              vX0: -2.35,
              vY0: -116.14,
              vZ0: -2.65,
              x: 124.36,
              y: 190.69,
              x0: 2.13,
              y0: 50.0,
              z0: 6.21,
              aX: -13.59
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2351,
              spinDirection: 310
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 5.64
          },
          hitData: {
            launchSpeed: 84.9,
            launchAngle: 26.0,
            totalDistance: 312.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 129.71,
              coordY: 74.1
            }
          },
          index: 3,
          playId: 'ef65bd65-2b2c-4791-9b67-ce69ab715336',
          pitchNumber: 4,
          startTime: '2022-07-27T19:07:40.966Z',
          endTime: '2022-07-27T19:07:48.876Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:07:48.876Z',
      atBatIndex: 60
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Darick Hall singles on a soft ground ball to third baseman Austin Riley.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 61,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T19:09:48.920Z',
        endTime: '2022-07-27T19:10:05.322Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 0,
        strikes: 0,
        outs: 0
      },
      matchup: {
        batter: {
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 445926,
          fullName: 'Jesse Chavez',
          link: '/api/v1/people/445926'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
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
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
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
              player: {
                id: 663586,
                link: '/api/v1/people/663586'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_fielded_ball'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.9,
            endSpeed: 82.1,
            strikeZoneTop: 3.66,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 27.71,
              aZ: -19.58,
              pfxX: -1.78,
              pfxZ: 7.27,
              pX: 0.43,
              pZ: 3.85,
              vX0: 5.58,
              vY0: -130.81,
              vZ0: 0.48,
              x: 100.61,
              y: 134.87,
              x0: -1.5,
              y0: 50.01,
              z0: 5.13,
              aX: -3.09
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2231,
              spinDirection: 214
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.21
          },
          hitData: {
            launchSpeed: 49.8,
            launchAngle: 29.0,
            totalDistance: 128.0,
            trajectory: 'ground_ball',
            hardness: 'soft',
            location: '5',
            coordinates: {
              coordX: 92.33,
              coordY: 153.75
            }
          },
          index: 0,
          playId: '2616d96a-77f7-4d22-a104-22ed4dd2219e',
          pitchNumber: 1,
          startTime: '2022-07-27T19:09:56.817Z',
          endTime: '2022-07-27T19:10:05.322Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:10:05.322Z',
      atBatIndex: 61
    },
    {
      result: {
        type: 'atBat',
        event: 'Forceout',
        eventType: 'force_out',
        description:
          'Nick Castellanos grounds into a force out, shortstop Dansby Swanson to second baseman Robinson Cano.   Darick Hall out at 2nd.    Nick Castellanos to 1st.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 62,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T19:10:30.342Z',
        endTime: '2022-07-27T19:11:19.776Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 445926,
          fullName: 'Jesse Chavez',
          link: '/api/v1/people/445926'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
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
            event: 'Forceout',
            eventType: 'force_out',
            movementReason: 'r_force_out',
            runner: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
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
              player: {
                id: 621020,
                link: '/api/v1/people/621020'
              },
              position: {
                code: '6',
                name: 'Shortstop',
                type: 'Infielder',
                abbreviation: 'SS'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 429664,
                link: '/api/v1/people/429664'
              },
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
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.2,
            endSpeed: 81.6,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 26.95,
              aZ: -17.97,
              pfxX: -2.48,
              pfxZ: 8.31,
              pX: 0.23,
              pZ: 2.8,
              vX0: 5.69,
              vY0: -129.83,
              vZ0: -2.01,
              x: 108.35,
              y: 163.21,
              x0: -1.67,
              y0: 50.01,
              z0: 4.95,
              aX: -4.24
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2312,
              spinDirection: 212
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.21
          },
          index: 0,
          playId: '7708911d-70f5-4794-96f7-7c807ebc309b',
          pitchNumber: 1,
          startTime: '2022-07-27T19:10:35.102Z',
          endTime: '2022-07-27T19:10:38.102Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 81.6,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 23.34,
              aZ: -19.53,
              pfxX: -1.04,
              pfxZ: 7.49,
              pX: 0.98,
              pZ: 2.42,
              vX0: 6.52,
              vY0: -128.28,
              vZ0: -2.47,
              x: 79.55,
              y: 173.49,
              x0: -1.45,
              y0: 50.0,
              z0: 4.89,
              aX: -1.75
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2192,
              spinDirection: 201
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.06
          },
          index: 1,
          playId: '8ed375c0-2e3f-4ed8-a6d1-4c41a9028fba',
          pitchNumber: 2,
          startTime: '2022-07-27T19:10:52.485Z',
          endTime: '2022-07-27T19:10:55.485Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 85.6,
            endSpeed: 79.3,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 22.78,
              aZ: -30.6,
              pfxX: -8.76,
              pfxZ: 0.99,
              pX: -1.13,
              pZ: 2.15,
              vX0: 3.66,
              vY0: -124.65,
              vZ0: -1.24,
              x: 160.0,
              y: 180.86,
              x0: -1.47,
              y0: 50.0,
              z0: 5.15,
              aX: -13.92
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1776,
              spinDirection: 254
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.17
          },
          hitData: {
            launchSpeed: 88.3,
            launchAngle: -6.0,
            totalDistance: 21.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 105.89,
              coordY: 146.33
            }
          },
          index: 2,
          playId: '82dd54ab-3f4f-447a-94be-adc04e3f6e4e',
          pitchNumber: 3,
          startTime: '2022-07-27T19:11:12.153Z',
          endTime: '2022-07-27T19:11:19.776Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:11:19.776Z',
      atBatIndex: 62
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Bryson Stott singles on a ground ball to first baseman Matt Olson, deflected by pitcher Jesse Chavez.   Nick Castellanos to 2nd.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 63,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T19:11:45.014Z',
        endTime: '2022-07-27T19:14:13.424Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 0,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 445926,
          fullName: 'Jesse Chavez',
          link: '/api/v1/people/445926'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        postOnSecond: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
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
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
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
                id: 445926,
                link: '/api/v1/people/445926'
              },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
              },
              credit: 'f_deflection'
            },
            {
              player: {
                id: 621566,
                link: '/api/v1/people/621566'
              },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
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
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 85.7,
            endSpeed: 79.0,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 23.93,
              aZ: -33.6,
              pfxX: -8.39,
              pfxZ: -0.9,
              pX: -0.39,
              pZ: 2.42,
              vX0: 5.28,
              vY0: -124.76,
              vZ0: 0.22,
              x: 131.86,
              y: 173.38,
              x0: -1.44,
              y0: 50.0,
              z0: 5.09,
              aX: -13.3
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1566,
              spinDirection: 255
            },
            zone: 4,
            typeConfidence: 0.92,
            plateTime: 0.44,
            extension: 6.45
          },
          index: 0,
          playId: '01449f32-efc1-4fe7-97d7-6065c8b4613d',
          pitchNumber: 1,
          startTime: '2022-07-27T19:11:52.016Z',
          endTime: '2022-07-27T19:11:55.025Z',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.3,
            endSpeed: 83.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 25.71,
              aZ: -17.68,
              pfxX: -3.5,
              pfxZ: 8.21,
              pX: 0.41,
              pZ: 3.16,
              vX0: 5.66,
              vY0: -131.49,
              vZ0: -1.69,
              x: 101.23,
              y: 153.38,
              x0: -1.31,
              y0: 50.0,
              z0: 5.12,
              aX: -6.17
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2164,
              spinDirection: 214
            },
            zone: 3,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.12
          },
          index: 1,
          playId: 'f07102e4-fb65-49f7-a112-3680eba9a6c2',
          pitchNumber: 2,
          startTime: '2022-07-27T19:12:12.581Z',
          endTime: '2022-07-27T19:12:16.887Z',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.8,
            endSpeed: 82.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 26.36,
              aZ: -20.73,
              pfxX: -0.7,
              pfxZ: 6.57,
              pX: -0.1,
              pZ: 3.4,
              vX0: 4.32,
              vY0: -130.81,
              vZ0: -0.19,
              x: 120.75,
              y: 147.11,
              x0: -1.67,
              y0: 50.0,
              z0: 5.01,
              aX: -1.23
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2227,
              spinDirection: 213
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.24
          },
          index: 2,
          playId: '12dd16d8-5f53-4a04-b589-0912f00f04aa',
          pitchNumber: 3,
          startTime: '2022-07-27T19:12:34.159Z',
          endTime: '2022-07-27T19:12:37.159Z',
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 85.5,
            endSpeed: 77.9,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 26.94,
              aZ: -33.49,
              pfxX: -9.71,
              pfxZ: -0.84,
              pX: -1.21,
              pZ: 2.48,
              vX0: 3.8,
              vY0: -124.43,
              vZ0: 0.34,
              x: 163.29,
              y: 171.74,
              x0: -1.51,
              y0: 50.0,
              z0: 5.14,
              aX: -15.1
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1737,
              spinDirection: 257
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.28
          },
          index: 3,
          playId: '3710fe71-9b9a-457d-aa09-502b01d1dc45',
          pitchNumber: 4,
          startTime: '2022-07-27T19:12:58.109Z',
          endTime: '2022-07-27T19:13:01.109Z',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 82.6,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 25.45,
              aZ: -20.03,
              pfxX: -1.02,
              pfxZ: 6.97,
              pX: 0.58,
              pZ: 3.66,
              vX0: 5.4,
              vY0: -130.61,
              vZ0: 0.26,
              x: 94.88,
              y: 140.05,
              x0: -1.38,
              y0: 50.0,
              z0: 5.05,
              aX: -1.78
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2228,
              spinDirection: 208
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.18
          },
          index: 4,
          playId: '36ab0e56-693b-409d-821a-3d58b9209025',
          pitchNumber: 5,
          startTime: '2022-07-27T19:13:21.865Z',
          endTime: '2022-07-27T19:13:24.865Z',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 76.6,
            endSpeed: 70.3,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 21.65,
              aZ: -38.07,
              pfxX: 10.19,
              pfxZ: -4.72,
              pX: -0.16,
              pZ: 1.58,
              vX0: 0.35,
              vY0: -111.48,
              vZ0: 0.75,
              x: 123.18,
              y: 196.24,
              x0: -1.64,
              y0: 50.01,
              z0: 5.19,
              aX: 12.71
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2521,
              spinDirection: 61
            },
            zone: 13,
            typeConfidence: 0.74,
            plateTime: 0.49,
            extension: 6.35
          },
          index: 5,
          playId: 'aa9a3a00-b62a-4295-885a-f118dee8c2be',
          pitchNumber: 6,
          startTime: '2022-07-27T19:13:42.943Z',
          endTime: '2022-07-27T19:13:46.912Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.0,
            endSpeed: 84.9,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 26.64,
              aZ: -25.02,
              pfxX: -10.13,
              pfxZ: 3.9,
              pX: -0.27,
              pZ: 2.4,
              vX0: 6.21,
              vY0: -133.96,
              vZ0: -2.14,
              x: 127.39,
              y: 173.96,
              x0: -1.29,
              y0: 50.0,
              z0: 4.98,
              aX: -18.56
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2005,
              spinDirection: 231
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.13
          },
          hitData: {
            launchSpeed: 93.3,
            launchAngle: 1.0,
            totalDistance: 53.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '1',
            coordinates: {
              coordX: 141.69,
              coordY: 175.34
            }
          },
          index: 6,
          playId: '0112cfb9-126a-4563-b2cc-f3834b214842',
          pitchNumber: 7,
          startTime: '2022-07-27T19:14:04.767Z',
          endTime: '2022-07-27T19:14:13.424Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:14:13.424Z',
      atBatIndex: 63
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Alec Bohm strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 64,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T19:14:39.842Z',
        endTime: '2022-07-27T19:16:25.303Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 1,
        strikes: 3,
        outs: 2
      },
      matchup: {
        batter: {
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 445926,
          fullName: 'Jesse Chavez',
          link: '/api/v1/people/445926'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        postOnSecond: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
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
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
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
              player: {
                id: 661388,
                link: '/api/v1/people/661388'
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
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 2,
            homeScore: 7,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          index: 0,
          startTime: '2022-07-27T19:14:39.842Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 664761,
            link: '/api/v1/people/664761'
          }
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
            trailColor: 'rgba(50, 0, 221, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SI',
              description: 'Sinker'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 83.9,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 30.65,
              aZ: -26.3,
              pfxX: -11.23,
              pfxZ: 3.24,
              pX: 0.12,
              pZ: 3.04,
              vX0: 8.08,
              vY0: -134.2,
              vZ0: -0.24,
              x: 112.3,
              y: 156.79,
              x0: -1.48,
              y0: 50.01,
              z0: 5.01,
              aX: -20.36
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2038,
              spinDirection: 234
            },
            zone: 2,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.31
          },
          index: 1,
          playId: '9a33bb95-a667-405b-9ab1-1c23aeea6be9',
          pitchNumber: 1,
          startTime: '2022-07-27T19:15:08.214Z',
          endTime: '2022-07-27T19:15:11.214Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 90.1,
            endSpeed: 82.9,
            strikeZoneTop: 3.38,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 26.07,
              aZ: -18.39,
              pfxX: -0.94,
              pfxZ: 7.86,
              pX: 0.63,
              pZ: 2.4,
              vX0: 5.87,
              vY0: -131.13,
              vZ0: -3.04,
              x: 92.83,
              y: 174.05,
              x0: -1.51,
              y0: 50.0,
              z0: 4.93,
              aX: -1.66
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2248,
              spinDirection: 212
            },
            zone: 6,
            typeConfidence: 0.92,
            plateTime: 0.42,
            extension: 6.35
          },
          index: 2,
          playId: '7e5e6c5d-0b2b-4164-bdbc-39666c3cba8a',
          pitchNumber: 2,
          startTime: '2022-07-27T19:15:34.729Z',
          endTime: '2022-07-27T19:15:38.100Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.4,
            endSpeed: 82.4,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 25.26,
              aZ: -21.83,
              pfxX: -1.69,
              pfxZ: 5.96,
              pX: -1.91,
              pZ: 3.79,
              vX0: 0.21,
              vY0: -130.38,
              vZ0: 0.83,
              x: 189.64,
              y: 136.45,
              x0: -1.77,
              y0: 50.0,
              z0: 5.1,
              aX: -2.93
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2154,
              spinDirection: 205
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.03
          },
          index: 3,
          playId: 'fec2be3b-33cb-4c95-9239-ac8fae98f548',
          pitchNumber: 3,
          startTime: '2022-07-27T19:15:55.986Z',
          endTime: '2022-07-27T19:16:02.723Z',
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
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.3,
            endSpeed: 82.8,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 23.72,
              aZ: -20.93,
              pfxX: 0.86,
              pfxZ: 6.47,
              pX: 0.89,
              pZ: 3.25,
              vX0: 5.69,
              vY0: -130.12,
              vZ0: -0.32,
              x: 83.15,
              y: 150.95,
              x0: -1.43,
              y0: 50.0,
              z0: 4.95,
              aX: 1.49
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2187,
              spinDirection: 199
            },
            zone: 12,
            typeConfidence: 0.92,
            plateTime: 0.42,
            extension: 6.21
          },
          index: 4,
          playId: '68b971ac-c8fa-42ef-97ed-84de1520b883',
          pitchNumber: 4,
          startTime: '2022-07-27T19:16:19.945Z',
          endTime: '2022-07-27T19:16:25.303Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:16:25.303Z',
      atBatIndex: 64
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Didi Gregorius strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 65,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T19:16:46.985Z',
        endTime: '2022-07-27T19:18:22.126Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 1,
        strikes: 3,
        outs: 3
      },
      matchup: {
        batter: {
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 445926,
          fullName: 'Jesse Chavez',
          link: '/api/v1/people/445926'
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
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
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
              player: {
                id: 661388,
                link: '/api/v1/people/661388'
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
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 85.8,
            endSpeed: 79.1,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 24.2,
              aZ: -35.45,
              pfxX: -9.21,
              pfxZ: -2.07,
              pX: 0.31,
              pZ: 1.7,
              vX0: 6.9,
              vY0: -124.79,
              vZ0: -1.18,
              x: 105.19,
              y: 192.98,
              x0: -1.29,
              y0: 50.0,
              z0: 5.09,
              aX: -14.57
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1765,
              spinDirection: 253
            },
            zone: 9,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.23
          },
          index: 0,
          playId: 'd9e68bfe-4c32-4afd-9d6b-c77ece4320c0',
          pitchNumber: 1,
          startTime: '2022-07-27T19:16:56.418Z',
          endTime: '2022-07-27T19:17:01.739Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(152, 0, 101, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FC',
              description: 'Cutter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 83.6,
            strikeZoneTop: 3.29,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.88,
              aZ: -22.16,
              pfxX: -3.43,
              pfxZ: 5.58,
              pX: -0.4,
              pZ: 4.24,
              vX0: 4.19,
              vY0: -132.99,
              vZ0: 1.83,
              x: 132.16,
              y: 124.31,
              x0: -1.55,
              y0: 50.01,
              z0: 5.15,
              aX: -6.16
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2225,
              spinDirection: 220
            },
            zone: 11,
            typeConfidence: 0.61,
            plateTime: 0.41,
            extension: 6.12
          },
          index: 1,
          playId: '257bba76-a725-4d11-9463-e2a046880933',
          pitchNumber: 2,
          startTime: '2022-07-27T19:17:28.311Z',
          endTime: '2022-07-27T19:17:33.543Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 91.0,
            endSpeed: 84.2,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 25.41,
              aZ: -23.34,
              pfxX: -1.78,
              pfxZ: 4.91,
              pX: -0.22,
              pZ: 2.44,
              vX0: 4.26,
              vY0: -132.56,
              vZ0: -2.09,
              x: 125.33,
              y: 172.95,
              x0: -1.61,
              y0: 50.01,
              z0: 4.92,
              aX: -3.21
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2049,
              spinDirection: 216
            },
            zone: 5,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.17
          },
          index: 2,
          playId: 'daf836d6-b02a-4d54-84a6-3cc03f9ffcc1',
          pitchNumber: 3,
          startTime: '2022-07-27T19:17:50.313Z',
          endTime: '2022-07-27T19:17:53.313Z',
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
            strikes: 3,
            outs: 2
          },
          pitchData: {
            startSpeed: 90.6,
            endSpeed: 83.0,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 27.34,
              aZ: -23.17,
              pfxX: -3.28,
              pfxZ: 5.09,
              pX: -0.88,
              pZ: 3.79,
              vX0: 2.8,
              vY0: -132.0,
              vZ0: 0.94,
              x: 150.43,
              y: 136.51,
              x0: -1.53,
              y0: 50.0,
              z0: 5.13,
              aX: -5.8
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2276,
              spinDirection: 213
            },
            zone: 11,
            typeConfidence: 0.64,
            plateTime: 0.41,
            extension: 6.12
          },
          index: 3,
          playId: '9d254d30-4862-487a-ac55-7bca62570568',
          pitchNumber: 4,
          startTime: '2022-07-27T19:18:16.206Z',
          endTime: '2022-07-27T19:18:22.126Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:18:22.126Z',
      atBatIndex: 65
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Eddie Rosario flies out to center fielder Odubel Herrera.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 66,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T19:19:37.747Z',
        endTime: '2022-07-27T19:23:48.227Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 3,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 571479,
          fullName: 'Andrew Bellatti',
          link: '/api/v1/people/571479'
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
            outNumber: 1
          },
          details: {
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
                id: 546318,
                link: '/api/v1/people/546318'
              },
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
            description: 'Pitching Change: Andrew Bellatti replaces Brad Hand.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 2,
            homeScore: 7,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          index: 0,
          startTime: '2022-07-27T19:19:37.747Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 571479,
            link: '/api/v1/people/571479'
          },
          position: {
            code: '1',
            name: 'Pitcher',
            type: 'Pitcher',
            abbreviation: 'P'
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
            startSpeed: 93.7,
            endSpeed: 86.1,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 28.97,
              aZ: -17.34,
              pfxX: -6.75,
              pfxZ: 7.83,
              pX: -2.23,
              pZ: 3.08,
              vX0: 1.23,
              vY0: -136.54,
              vZ0: -3.05,
              x: 202.18,
              y: 155.64,
              x0: -1.81,
              y0: 50.01,
              z0: 5.4,
              aX: -12.79
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2385,
              spinDirection: 226
            },
            zone: 11,
            typeConfidence: 0.86,
            plateTime: 0.4,
            extension: 5.76
          },
          index: 1,
          playId: '4c868ff1-d98b-493f-9fd3-0be316d1f026',
          pitchNumber: 1,
          startTime: '2022-07-27T19:21:37.106Z',
          endTime: '2022-07-27T19:21:40.106Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 86.2,
            endSpeed: 79.8,
            strikeZoneTop: 3.24,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 23.35,
              aZ: -29.69,
              pfxX: 1.11,
              pfxZ: 1.54,
              pX: -1.52,
              pZ: 2.71,
              vX0: 0.08,
              vY0: -125.64,
              vZ0: -0.94,
              x: 175.0,
              y: 165.63,
              x0: -1.7,
              y0: 50.01,
              z0: 5.48,
              aX: 1.8
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2441,
              spinDirection: 151
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 5.77
          },
          index: 2,
          playId: 'a2a0c1b1-3e82-4a4b-9cc7-8e7d991ee040',
          pitchNumber: 2,
          startTime: '2022-07-27T19:21:58.807Z',
          endTime: '2022-07-27T19:22:02.740Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 87.1,
            endSpeed: 80.4,
            strikeZoneTop: 3.15,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 24.51,
              aZ: -27.14,
              pfxX: -1.62,
              pfxZ: 3.07,
              pX: -0.42,
              pZ: 2.08,
              vX0: 3.51,
              vY0: -126.9,
              vZ0: -2.84,
              x: 133.0,
              y: 182.55,
              x0: -1.61,
              y0: 50.0,
              z0: 5.37,
              aX: -2.66
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2463,
              spinDirection: 174
            },
            zone: 7,
            typeConfidence: 0.88,
            plateTime: 0.43,
            extension: 6.09
          },
          index: 3,
          playId: '62fad7a7-d9cc-4fee-b388-effcf74cdea5',
          pitchNumber: 3,
          startTime: '2022-07-27T19:22:21.095Z',
          endTime: '2022-07-27T19:22:24.176Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 2,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.5,
            endSpeed: 86.0,
            strikeZoneTop: 3.2,
            strikeZoneBottom: 1.54,
            coordinates: {
              aY: 31.69,
              aZ: -15.81,
              pfxX: -5.77,
              pfxZ: 8.58,
              pX: -0.71,
              pZ: 3.36,
              vX0: 4.55,
              vY0: -137.54,
              vZ0: -2.62,
              x: 144.01,
              y: 148.02,
              x0: -1.64,
              y0: 50.0,
              z0: 5.4,
              aX: -11.0
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2410,
              spinDirection: 221
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 5.81
          },
          index: 4,
          playId: '9c3b68be-5ae8-4113-a928-03da084b6662',
          pitchNumber: 4,
          startTime: '2022-07-27T19:22:43.563Z',
          endTime: '2022-07-27T19:22:47.285Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 90.2,
            endSpeed: 83.5,
            strikeZoneTop: 3.13,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 24.8,
              aZ: -27.75,
              pfxX: -8.78,
              pfxZ: 2.51,
              pX: 1.1,
              pZ: 2.04,
              vX0: 9.16,
              vY0: -131.19,
              vZ0: -3.38,
              x: 75.18,
              y: 183.72,
              x0: -1.28,
              y0: 50.0,
              z0: 5.39,
              aX: -15.48
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1596,
              spinDirection: 238
            },
            zone: 14,
            typeConfidence: 0.8,
            plateTime: 0.42,
            extension: 6.04
          },
          index: 5,
          playId: '60bf1f05-e384-49c1-a665-399f917e0896',
          pitchNumber: 5,
          startTime: '2022-07-27T19:23:13.783Z',
          endTime: '2022-07-27T19:23:18.007Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 86.2,
            endSpeed: 80.0,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 23.36,
              aZ: -27.16,
              pfxX: 1.43,
              pfxZ: 3.11,
              pX: -0.56,
              pZ: 1.5,
              vX0: 2.14,
              vY0: -125.66,
              vZ0: -4.11,
              x: 138.16,
              y: 198.22,
              x0: -1.6,
              y0: 50.01,
              z0: 5.34,
              aX: 2.31
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2505,
              spinDirection: 171
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 5.89
          },
          hitData: {
            launchSpeed: 85.2,
            launchAngle: 34.0,
            totalDistance: 310.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 137.75,
              coordY: 75.51
            }
          },
          index: 6,
          playId: '98349f43-2a04-4816-8d94-3a2a3856ca68',
          pitchNumber: 6,
          startTime: '2022-07-27T19:23:40.030Z',
          endTime: '2022-07-27T19:23:48.227Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:23:48.227Z',
      atBatIndex: 66
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'William Contreras strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 67,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T19:24:10.101Z',
        endTime: '2022-07-27T19:25:44.986Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 0,
        strikes: 3,
        outs: 2
      },
      matchup: {
        batter: {
          id: 661388,
          fullName: 'William Contreras',
          link: '/api/v1/people/661388'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 571479,
          fullName: 'Andrew Bellatti',
          link: '/api/v1/people/571479'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
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
              id: 661388,
              fullName: 'William Contreras',
              link: '/api/v1/people/661388'
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
            call: {
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 80.6,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 22.92,
              aZ: -25.52,
              pfxX: 0.98,
              pfxZ: 4.06,
              pX: 0.22,
              pZ: 1.97,
              vX0: 3.98,
              vY0: -126.47,
              vZ0: -3.54,
              x: 108.42,
              y: 185.52,
              x0: -1.49,
              y0: 50.0,
              z0: 5.41,
              aX: 1.6
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2489,
              spinDirection: 185
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 5.73
          },
          index: 0,
          playId: 'd2b4a8ff-3b14-46b8-a68d-629aaac0d4f6',
          pitchNumber: 1,
          startTime: '2022-07-27T19:24:27.005Z',
          endTime: '2022-07-27T19:24:34.580Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.2,
            endSpeed: 86.2,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 29.71,
              aZ: -15.76,
              pfxX: -8.15,
              pfxZ: 8.62,
              pX: 0.11,
              pZ: 2.6,
              vX0: 7.09,
              vY0: -137.01,
              vZ0: -4.53,
              x: 112.8,
              y: 168.55,
              x0: -1.45,
              y0: 50.0,
              z0: 5.35,
              aX: -15.52
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2500,
              spinDirection: 222
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 5.82
          },
          index: 1,
          playId: 'f816eb2f-6106-4457-aded-fafb2e5eda3f',
          pitchNumber: 2,
          startTime: '2022-07-27T19:25:01.082Z',
          endTime: '2022-07-27T19:25:04.187Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.2,
            endSpeed: 80.9,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 24.01,
              aZ: -26.87,
              pfxX: 1.76,
              pfxZ: 3.23,
              pX: 1.21,
              pZ: 0.91,
              vX0: 5.71,
              vY0: -126.83,
              vZ0: -5.73,
              x: 70.95,
              y: 214.1,
              x0: -1.29,
              y0: 50.01,
              z0: 5.32,
              aX: 2.89
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2487,
              spinDirection: 157
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 5.9
          },
          index: 2,
          playId: '9e6958d9-4149-41ee-ac49-eaf437cdfd0c',
          pitchNumber: 3,
          startTime: '2022-07-27T19:25:39.746Z',
          endTime: '2022-07-27T19:25:44.986Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:25:44.986Z',
      atBatIndex: 67
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Marcell Ozuna singles on a line drive to right fielder Nick Castellanos.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 68,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T19:26:06.063Z',
        endTime: '2022-07-27T19:29:27.925Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 3,
        strikes: 2,
        outs: 2
      },
      matchup: {
        batter: {
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 571479,
          fullName: 'Andrew Bellatti',
          link: '/api/v1/people/571479'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
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
            event: 'Single',
            eventType: 'single',
            movementReason: null,
            runner: {
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
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
                id: 592206,
                link: '/api/v1/people/592206'
              },
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
            call: {
              code: 'S',
              description: 'Swinging Strike'
            },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 87.8,
            endSpeed: 81.6,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 23.11,
              aZ: -25.67,
              pfxX: -0.03,
              pfxZ: 3.88,
              pX: 0.37,
              pZ: 2.15,
              vX0: 4.75,
              vY0: -127.87,
              vZ0: -3.28,
              x: 103.04,
              y: 180.77,
              x0: -1.5,
              y0: 50.0,
              z0: 5.43,
              aX: -0.05
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2479,
              spinDirection: 181
            },
            zone: 9,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 5.82
          },
          index: 0,
          playId: '562a89dd-ac24-4e09-ba3c-9e741fae0d0d',
          pitchNumber: 1,
          startTime: '2022-07-27T19:26:21.176Z',
          endTime: '2022-07-27T19:26:26.119Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 90.9,
            endSpeed: 83.6,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 27.39,
              aZ: -24.19,
              pfxX: -9.99,
              pfxZ: 4.5,
              pX: 0.33,
              pZ: 1.16,
              vX0: 7.43,
              vY0: -132.15,
              vZ0: -6.12,
              x: 104.51,
              y: 207.34,
              x0: -1.22,
              y0: 50.0,
              z0: 5.28,
              aX: -17.72
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1609,
              spinDirection: 241
            },
            zone: 14,
            typeConfidence: 0.77,
            plateTime: 0.41,
            extension: 6.21
          },
          index: 1,
          playId: '60cd01fc-6bdc-472a-bd64-4bab1ca6f471',
          pitchNumber: 2,
          startTime: '2022-07-27T19:26:43.606Z',
          endTime: '2022-07-27T19:26:47.410Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 90.5,
            endSpeed: 83.8,
            strikeZoneTop: 3.37,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 24.86,
              aZ: -22.16,
              pfxX: -9.92,
              pfxZ: 5.68,
              pX: 2.02,
              pZ: 0.46,
              vX0: 11.32,
              vY0: -131.2,
              vZ0: -8.35,
              x: 39.84,
              y: 226.39,
              x0: -1.04,
              y0: 50.0,
              z0: 5.31,
              aX: -17.48
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1580,
              spinDirection: 236
            },
            zone: 14,
            typeConfidence: 0.82,
            plateTime: 0.42,
            extension: 6.05
          },
          index: 2,
          playId: 'cc47ceb3-6e85-4f1e-a747-4ce1fc2fca31',
          pitchNumber: 3,
          startTime: '2022-07-27T19:27:07.406Z',
          endTime: '2022-07-27T19:27:10.406Z',
          isPitch: true,
          type: 'pitch'
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 86.3,
            endSpeed: 79.9,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 23.34,
              aZ: -27.78,
              pfxX: 1.73,
              pfxZ: 2.72,
              pX: -1.39,
              pZ: 2.63,
              vX0: 0.22,
              vY0: -125.87,
              vZ0: -1.51,
              x: 170.17,
              y: 167.76,
              x0: -1.71,
              y0: 50.01,
              z0: 5.47,
              aX: 2.81
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2431,
              spinDirection: 164
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 5.85
          },
          index: 3,
          playId: 'fccb98e7-592b-45dc-b2b8-a94f76ee13ae',
          pitchNumber: 4,
          startTime: '2022-07-27T19:27:37.590Z',
          endTime: '2022-07-27T19:27:41.870Z',
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
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 85.2,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 29.02,
              aZ: -13.94,
              pfxX: -6.78,
              pfxZ: 9.77,
              pX: -0.69,
              pZ: 3.36,
              vX0: 4.55,
              vY0: -135.61,
              vZ0: -2.71,
              x: 143.16,
              y: 148.06,
              x0: -1.5,
              y0: 50.0,
              z0: 5.34,
              aX: -12.66
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2350,
              spinDirection: 221
            },
            zone: 1,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 5.83
          },
          index: 4,
          playId: 'b471ec17-2249-4296-9938-5ecebb05764d',
          pitchNumber: 5,
          startTime: '2022-07-27T19:28:03.784Z',
          endTime: '2022-07-27T19:28:06.784Z',
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
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 87.2,
            endSpeed: 81.2,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.79,
              aZ: -27.15,
              pfxX: 2.43,
              pfxZ: 3.03,
              pX: 0.21,
              pZ: 2.02,
              vX0: 3.66,
              vY0: -127.12,
              vZ0: -3.18,
              x: 108.82,
              y: 184.28,
              x0: -1.55,
              y0: 50.0,
              z0: 5.41,
              aX: 4.03
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2436,
              spinDirection: 159
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.0
          },
          index: 5,
          playId: 'ddf70e70-d3cf-458d-b035-7c566c371673',
          pitchNumber: 6,
          startTime: '2022-07-27T19:28:37.802Z',
          endTime: '2022-07-27T19:28:40.802Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(188, 0, 33, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'FF',
              description: 'Four-Seam Fastball'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 96.1,
            endSpeed: 87.5,
            strikeZoneTop: 3.55,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 32.83,
              aZ: -13.79,
              pfxX: -7.28,
              pfxZ: 9.34,
              pX: -0.15,
              pZ: 2.05,
              vX0: 6.32,
              vY0: -139.72,
              vZ0: -6.38,
              x: 122.6,
              y: 183.55,
              x0: -1.5,
              y0: 50.0,
              z0: 5.27,
              aX: -14.33
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2617,
              spinDirection: 218
            },
            zone: 8,
            typeConfidence: 0.92,
            plateTime: 0.39,
            extension: 5.93
          },
          hitData: {
            launchSpeed: 85.2,
            launchAngle: 13.0,
            totalDistance: 189.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 156.22,
              coordY: 98.82
            }
          },
          index: 6,
          playId: '6906f265-8672-41c4-8457-34c78e6dd7f4',
          pitchNumber: 7,
          startTime: '2022-07-27T19:29:15.288Z',
          endTime: '2022-07-27T19:29:27.925Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:29:27.925Z',
      atBatIndex: 68
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Robinson Cano pops out to third baseman Alec Bohm.',
        rbi: 0,
        awayScore: 2,
        homeScore: 7
      },
      about: {
        atBatIndex: 69,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T19:29:51.021Z',
        endTime: '2022-07-27T19:31:20.181Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 2,
        outs: 3
      },
      matchup: {
        batter: {
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 571479,
          fullName: 'Andrew Bellatti',
          link: '/api/v1/people/571479'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        batterHotColdZoneStats: {
          stats: [
            {
              type: {
                displayName: 'hotColdZones'
              },
              group: {
                displayName: 'hitting'
              },
              exemptions: [],
              splits: [
                {
                  stat: {
                    name: 'onBasePlusSlugging',
                    zones: [
                      {
                        zone: '01',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.667'
                      },
                      {
                        zone: '02',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.667'
                      },
                      {
                        zone: '03',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.444'
                      },
                      {
                        zone: '04',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.000'
                      },
                      {
                        zone: '05',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.833'
                      },
                      {
                        zone: '06',
                        color: 'rgba(150, 188, 255, .55)',
                        temp: 'cool',
                        value: '.571'
                      },
                      {
                        zone: '07',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.700'
                      },
                      {
                        zone: '08',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.286'
                      },
                      {
                        zone: '09',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.000'
                      },
                      {
                        zone: '11',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.667'
                      },
                      {
                        zone: '12',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.222'
                      },
                      {
                        zone: '13',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.222'
                      },
                      {
                        zone: '14',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.000'
                      }
                    ]
                  }
                },
                {
                  stat: {
                    name: 'battingAverage',
                    zones: [
                      {
                        zone: '01',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '.333'
                      },
                      {
                        zone: '02',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '.333'
                      },
                      {
                        zone: '03',
                        color: 'rgba(150, 188, 255, .55)',
                        temp: 'cool',
                        value: '.222'
                      },
                      {
                        zone: '04',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.000'
                      },
                      {
                        zone: '05',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '.333'
                      },
                      {
                        zone: '06',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.286'
                      },
                      {
                        zone: '07',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.200'
                      },
                      {
                        zone: '08',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.143'
                      },
                      {
                        zone: '09',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.000'
                      },
                      {
                        zone: '11',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '.333'
                      },
                      {
                        zone: '12',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.111'
                      },
                      {
                        zone: '13',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.000'
                      },
                      {
                        zone: '14',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.000'
                      }
                    ]
                  }
                },
                {
                  stat: {
                    name: 'exitVelocity',
                    zones: [
                      {
                        zone: '01',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '101.95'
                      },
                      {
                        zone: '02',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '71.48'
                      },
                      {
                        zone: '03',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '90.18'
                      },
                      {
                        zone: '04',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '91.23'
                      },
                      {
                        zone: '05',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '94.77'
                      },
                      {
                        zone: '06',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '86.77'
                      },
                      {
                        zone: '07',
                        color: 'rgba(150, 188, 255, .55)',
                        temp: 'cool',
                        value: '88.37'
                      },
                      {
                        zone: '08',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '92.29'
                      },
                      {
                        zone: '09',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '84.96'
                      },
                      {
                        zone: '11',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '90.23'
                      },
                      {
                        zone: '12',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '83.46'
                      },
                      {
                        zone: '13',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '82.84'
                      },
                      {
                        zone: '14',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '83.98'
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        batterHotColdZones: [
          {
            zone: '01',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.667'
          },
          {
            zone: '02',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.667'
          },
          {
            zone: '03',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.444'
          },
          {
            zone: '04',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.000'
          },
          {
            zone: '05',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.833'
          },
          {
            zone: '06',
            color: 'rgba(150, 188, 255, .55)',
            temp: 'cool',
            value: '.571'
          },
          {
            zone: '07',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.700'
          },
          {
            zone: '08',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.286'
          },
          {
            zone: '09',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.000'
          },
          {
            zone: '11',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.667'
          },
          {
            zone: '12',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.222'
          },
          {
            zone: '13',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.222'
          },
          {
            zone: '14',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.000'
          }
        ],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
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
            event: 'Pop Out',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
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
              player: {
                id: 664761,
                link: '/api/v1/people/664761'
              },
              position: {
                code: '5',
                name: 'Third Base',
                type: 'Infielder',
                abbreviation: '3B'
              },
              credit: 'f_putout'
            }
          ]
        }
      ],
      playEvents: [
        {
          details: {
            call: {
              code: 'T',
              description: 'Foul Tip'
            },
            description: 'Foul Tip',
            code: 'T',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(0, 85, 254, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'CH',
              description: 'Changeup'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 82.9,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 25.83,
              aZ: -28.77,
              pfxX: -9.03,
              pfxZ: 1.96,
              pX: -0.25,
              pZ: 1.67,
              vX0: 5.98,
              vY0: -130.59,
              vZ0: -3.88,
              x: 126.58,
              y: 193.66,
              x0: -1.39,
              y0: 50.0,
              z0: 5.33,
              aX: -15.69
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1590,
              spinDirection: 241
            },
            zone: 13,
            typeConfidence: 0.79,
            plateTime: 0.42,
            extension: 5.85
          },
          index: 0,
          playId: '4ff247ed-c051-4c53-a5f3-e69505498e2f',
          pitchNumber: 1,
          startTime: '2022-07-27T19:30:06.961Z',
          endTime: '2022-07-27T19:30:11.043Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 95.3,
            endSpeed: 87.3,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 29.98,
              aZ: -12.0,
              pfxX: -5.7,
              pfxZ: 10.32,
              pX: -0.19,
              pZ: 3.23,
              vX0: 5.6,
              vY0: -138.71,
              vZ0: -3.73,
              x: 124.31,
              y: 151.57,
              x0: -1.49,
              y0: 50.01,
              z0: 5.39,
              aX: -11.15
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2512,
              spinDirection: 222
            },
            zone: 2,
            typeConfidence: 0.92,
            plateTime: 0.39,
            extension: 5.86
          },
          index: 1,
          playId: '4159e517-38a4-4355-9925-23412e92fae9',
          pitchNumber: 2,
          startTime: '2022-07-27T19:30:32.969Z',
          endTime: '2022-07-27T19:30:37.105Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            call: {
              code: 'X',
              description: 'In play, out(s)'
            },
            description: 'In play, out(s)',
            code: 'X',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(0, 0, 254, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'SL',
              description: 'Slider'
            },
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 86.3,
            endSpeed: 80.0,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 23.19,
              aZ: -27.57,
              pfxX: 0.67,
              pfxZ: 2.85,
              pX: -0.86,
              pZ: 2.09,
              vX0: 1.81,
              vY0: -125.74,
              vZ0: -2.83,
              x: 149.8,
              y: 182.28,
              x0: -1.68,
              y0: 50.0,
              z0: 5.45,
              aX: 1.08
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2461,
              spinDirection: 151
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 5.8
          },
          hitData: {
            launchSpeed: 64.2,
            launchAngle: 54.0,
            totalDistance: 170.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 90.79,
              coordY: 143.01
            }
          },
          index: 2,
          playId: '0d6c2342-9d86-455d-887d-806d82800945',
          pitchNumber: 3,
          startTime: '2022-07-27T19:31:11.320Z',
          endTime: '2022-07-27T19:31:20.181Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T19:31:20.181Z',
      atBatIndex: 69
    }
  ],
  currentPlay: {
    result: {
      type: 'atBat',
      event: 'Pop Out',
      eventType: 'field_out',
      description: 'Robinson Cano pops out to third baseman Alec Bohm.',
      rbi: 0,
      awayScore: 2,
      homeScore: 7
    },
    about: {
      atBatIndex: 69,
      halfInning: 'top',
      isTopInning: true,
      inning: 9,
      startTime: '2022-07-27T19:29:51.021Z',
      endTime: '2022-07-27T19:31:20.181Z',
      isComplete: true,
      isScoringPlay: false,
      hasReview: false,
      hasOut: true,
      captivatingIndex: 0
    },
    count: {
      balls: 0,
      strikes: 2,
      outs: 3
    },
    matchup: {
      batter: {
        id: 429664,
        fullName: 'Robinson Cano',
        link: '/api/v1/people/429664'
      },
      batSide: {
        code: 'L',
        description: 'Left'
      },
      pitcher: {
        id: 571479,
        fullName: 'Andrew Bellatti',
        link: '/api/v1/people/571479'
      },
      pitchHand: {
        code: 'R',
        description: 'Right'
      },
      batterHotColdZoneStats: {
        stats: [
          {
            type: {
              displayName: 'hotColdZones'
            },
            group: {
              displayName: 'hitting'
            },
            exemptions: [],
            splits: [
              {
                stat: {
                  name: 'onBasePlusSlugging',
                  zones: [
                    {
                      zone: '01',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.667'
                    },
                    {
                      zone: '02',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.667'
                    },
                    {
                      zone: '03',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.444'
                    },
                    {
                      zone: '04',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.000'
                    },
                    {
                      zone: '05',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.833'
                    },
                    {
                      zone: '06',
                      color: 'rgba(150, 188, 255, .55)',
                      temp: 'cool',
                      value: '.571'
                    },
                    {
                      zone: '07',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.700'
                    },
                    {
                      zone: '08',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.286'
                    },
                    {
                      zone: '09',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.000'
                    },
                    {
                      zone: '11',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.667'
                    },
                    {
                      zone: '12',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.222'
                    },
                    {
                      zone: '13',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.222'
                    },
                    {
                      zone: '14',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.000'
                    }
                  ]
                }
              },
              {
                stat: {
                  name: 'battingAverage',
                  zones: [
                    {
                      zone: '01',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '.333'
                    },
                    {
                      zone: '02',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '.333'
                    },
                    {
                      zone: '03',
                      color: 'rgba(150, 188, 255, .55)',
                      temp: 'cool',
                      value: '.222'
                    },
                    {
                      zone: '04',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.000'
                    },
                    {
                      zone: '05',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '.333'
                    },
                    {
                      zone: '06',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.286'
                    },
                    {
                      zone: '07',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.200'
                    },
                    {
                      zone: '08',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.143'
                    },
                    {
                      zone: '09',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.000'
                    },
                    {
                      zone: '11',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '.333'
                    },
                    {
                      zone: '12',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.111'
                    },
                    {
                      zone: '13',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.000'
                    },
                    {
                      zone: '14',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.000'
                    }
                  ]
                }
              },
              {
                stat: {
                  name: 'exitVelocity',
                  zones: [
                    {
                      zone: '01',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '101.95'
                    },
                    {
                      zone: '02',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '71.48'
                    },
                    {
                      zone: '03',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '90.18'
                    },
                    {
                      zone: '04',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '91.23'
                    },
                    {
                      zone: '05',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '94.77'
                    },
                    {
                      zone: '06',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '86.77'
                    },
                    {
                      zone: '07',
                      color: 'rgba(150, 188, 255, .55)',
                      temp: 'cool',
                      value: '88.37'
                    },
                    {
                      zone: '08',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '92.29'
                    },
                    {
                      zone: '09',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '84.96'
                    },
                    {
                      zone: '11',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '90.23'
                    },
                    {
                      zone: '12',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '83.46'
                    },
                    {
                      zone: '13',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '82.84'
                    },
                    {
                      zone: '14',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '83.98'
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      batterHotColdZones: [
        {
          zone: '01',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.667'
        },
        {
          zone: '02',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.667'
        },
        {
          zone: '03',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.444'
        },
        {
          zone: '04',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.000'
        },
        {
          zone: '05',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.833'
        },
        {
          zone: '06',
          color: 'rgba(150, 188, 255, .55)',
          temp: 'cool',
          value: '.571'
        },
        {
          zone: '07',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.700'
        },
        {
          zone: '08',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.286'
        },
        {
          zone: '09',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.000'
        },
        {
          zone: '11',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.667'
        },
        {
          zone: '12',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.222'
        },
        {
          zone: '13',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.222'
        },
        {
          zone: '14',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.000'
        }
      ],
      pitcherHotColdZones: [],
      splits: {
        batter: 'vs_RHP',
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
          event: 'Pop Out',
          eventType: 'field_out',
          movementReason: null,
          runner: {
            id: 429664,
            fullName: 'Robinson Cano',
            link: '/api/v1/people/429664'
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
            player: {
              id: 664761,
              link: '/api/v1/people/664761'
            },
            position: {
              code: '5',
              name: 'Third Base',
              type: 'Infielder',
              abbreviation: '3B'
            },
            credit: 'f_putout'
          }
        ]
      }
    ],
    playEvents: [
      {
        details: {
          call: {
            code: 'T',
            description: 'Foul Tip'
          },
          description: 'Foul Tip',
          code: 'T',
          ballColor: 'rgba(170, 21, 11, 1.0)',
          trailColor: 'rgba(0, 85, 254, 1.0)',
          isInPlay: false,
          isStrike: true,
          isBall: false,
          type: {
            code: 'CH',
            description: 'Changeup'
          },
          hasReview: false
        },
        count: {
          balls: 0,
          strikes: 1,
          outs: 2
        },
        pitchData: {
          startSpeed: 89.7,
          endSpeed: 82.9,
          strikeZoneTop: 3.65,
          strikeZoneBottom: 1.73,
          coordinates: {
            aY: 25.83,
            aZ: -28.77,
            pfxX: -9.03,
            pfxZ: 1.96,
            pX: -0.25,
            pZ: 1.67,
            vX0: 5.98,
            vY0: -130.59,
            vZ0: -3.88,
            x: 126.58,
            y: 193.66,
            x0: -1.39,
            y0: 50.0,
            z0: 5.33,
            aX: -15.69
          },
          breaks: {
            breakAngle: 26.4,
            breakLength: 7.2,
            breakY: 24.0,
            spinRate: 1590,
            spinDirection: 241
          },
          zone: 13,
          typeConfidence: 0.79,
          plateTime: 0.42,
          extension: 5.85
        },
        index: 0,
        playId: '4ff247ed-c051-4c53-a5f3-e69505498e2f',
        pitchNumber: 1,
        startTime: '2022-07-27T19:30:06.961Z',
        endTime: '2022-07-27T19:30:11.043Z',
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
          hasReview: false,
          runnerGoing: true
        },
        count: {
          balls: 0,
          strikes: 2,
          outs: 2
        },
        pitchData: {
          startSpeed: 95.3,
          endSpeed: 87.3,
          strikeZoneTop: 3.65,
          strikeZoneBottom: 1.73,
          coordinates: {
            aY: 29.98,
            aZ: -12.0,
            pfxX: -5.7,
            pfxZ: 10.32,
            pX: -0.19,
            pZ: 3.23,
            vX0: 5.6,
            vY0: -138.71,
            vZ0: -3.73,
            x: 124.31,
            y: 151.57,
            x0: -1.49,
            y0: 50.01,
            z0: 5.39,
            aX: -11.15
          },
          breaks: {
            breakAngle: 38.4,
            breakLength: 3.6,
            breakY: 24.0,
            spinRate: 2512,
            spinDirection: 222
          },
          zone: 2,
          typeConfidence: 0.92,
          plateTime: 0.39,
          extension: 5.86
        },
        index: 1,
        playId: '4159e517-38a4-4355-9925-23412e92fae9',
        pitchNumber: 2,
        startTime: '2022-07-27T19:30:32.969Z',
        endTime: '2022-07-27T19:30:37.105Z',
        isPitch: true,
        type: 'pitch'
      },
      {
        details: {
          call: {
            code: 'X',
            description: 'In play, out(s)'
          },
          description: 'In play, out(s)',
          code: 'X',
          ballColor: 'rgba(26, 86, 190, 1.0)',
          trailColor: 'rgba(0, 0, 254, 1.0)',
          isInPlay: true,
          isStrike: false,
          isBall: false,
          type: {
            code: 'SL',
            description: 'Slider'
          },
          hasReview: false,
          runnerGoing: true
        },
        count: {
          balls: 0,
          strikes: 2,
          outs: 2
        },
        pitchData: {
          startSpeed: 86.3,
          endSpeed: 80.0,
          strikeZoneTop: 3.65,
          strikeZoneBottom: 1.73,
          coordinates: {
            aY: 23.19,
            aZ: -27.57,
            pfxX: 0.67,
            pfxZ: 2.85,
            pX: -0.86,
            pZ: 2.09,
            vX0: 1.81,
            vY0: -125.74,
            vZ0: -2.83,
            x: 149.8,
            y: 182.28,
            x0: -1.68,
            y0: 50.0,
            z0: 5.45,
            aX: 1.08
          },
          breaks: {
            breakAngle: 2.4,
            breakLength: 7.2,
            breakY: 24.0,
            spinRate: 2461,
            spinDirection: 151
          },
          zone: 13,
          typeConfidence: 0.9,
          plateTime: 0.43,
          extension: 5.8
        },
        hitData: {
          launchSpeed: 64.2,
          launchAngle: 54.0,
          totalDistance: 170.0,
          trajectory: 'popup',
          hardness: 'medium',
          location: '5',
          coordinates: {
            coordX: 90.79,
            coordY: 143.01
          }
        },
        index: 2,
        playId: '0d6c2342-9d86-455d-887d-806d82800945',
        pitchNumber: 3,
        startTime: '2022-07-27T19:31:11.320Z',
        endTime: '2022-07-27T19:31:20.181Z',
        isPitch: true,
        type: 'pitch'
      }
    ],
    playEndTime: '2022-07-27T19:31:20.181Z',
    atBatIndex: 69
  },
  scoringPlays: [34, 36, 37, 39, 42, 48, 49],
  playsByInning: [
    {
      startIndex: 0,
      endIndex: 7,
      top: [0, 1, 2, 3],
      bottom: [4, 5, 6, 7],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 1,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            coordinates: {
              x: 203.38,
              y: 116.3
            },
            type: 'O',
            description: 'Flyout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 1,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            coordinates: {
              x: 140.04,
              y: 148.37
            },
            type: 'O',
            description: 'Forceout'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 1,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
            },
            coordinates: {
              x: 70.13,
              y: 98.38
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 1,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            coordinates: {
              x: 197.87,
              y: 88.31
            },
            type: 'O',
            description: 'Lineout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 1,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
            },
            coordinates: {
              x: 66.24,
              y: 119.36
            },
            type: 'O',
            description: 'Flyout'
          }
        ]
      }
    },
    {
      startIndex: 8,
      endIndex: 14,
      top: [8, 9, 10, 11],
      bottom: [12, 13, 14],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 2,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
            },
            coordinates: {
              x: 198.17,
              y: 97.13
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 2,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
            },
            coordinates: {
              x: 94.33,
              y: 166.69
            },
            type: 'O',
            description: 'Forceout'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 2,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            coordinates: {
              x: 82.91,
              y: 192.76
            },
            type: 'O',
            description: 'Pop Out'
          }
        ]
      }
    },
    {
      startIndex: 15,
      endIndex: 21,
      top: [15, 16, 17, 18],
      bottom: [19, 20, 21],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 3,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 645801,
              fullName: 'Mike Ford',
              link: '/api/v1/people/645801'
            },
            coordinates: {
              x: 146.65,
              y: 149.9
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 3,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
            },
            coordinates: {
              x: 158.91,
              y: 171.88
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 3,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            coordinates: {
              x: 140.59,
              y: 157.02
            },
            type: 'O',
            description: 'Groundout'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 3,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
            },
            coordinates: {
              x: 109.2,
              y: 144.81
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 3,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
            },
            coordinates: {
              x: 44.92,
              y: 115.97
            },
            type: 'O',
            description: 'Flyout'
          }
        ]
      }
    },
    {
      startIndex: 22,
      endIndex: 29,
      top: [22, 23, 24, 25],
      bottom: [26, 27, 28, 29],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 4,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            coordinates: {
              x: 102.59,
              y: 150.91
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 4,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
            },
            coordinates: {
              x: 114.42,
              y: 77.72
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 4,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 661388,
              fullName: 'William Contreras',
              link: '/api/v1/people/661388'
            },
            coordinates: {
              x: 111.6,
              y: 50.05
            },
            type: 'O',
            description: 'Flyout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 4,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
            },
            coordinates: {
              x: 91.15,
              y: 131.27
            },
            type: 'O',
            description: 'Pop Out'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 4,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            coordinates: {
              x: 115.25,
              y: 183.49
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 4,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
            },
            coordinates: {
              x: 128.47,
              y: 82.2
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 4,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
            },
            coordinates: {
              x: 114.15,
              y: 148.37
            },
            type: 'O',
            description: 'Grounded Into DP'
          }
        ]
      }
    },
    {
      startIndex: 30,
      endIndex: 40,
      top: [30, 31, 32],
      bottom: [33, 34, 35, 36, 37, 38, 39, 40],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 5,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
            },
            coordinates: {
              x: 141.84,
              y: 184.18
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 5,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 645801,
              fullName: 'Mike Ford',
              link: '/api/v1/people/645801'
            },
            coordinates: {
              x: 172.68,
              y: 136.26
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 5,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
            },
            coordinates: {
              x: 143.34,
              y: 146.33
            },
            type: 'O',
            description: 'Groundout'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 5,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            coordinates: {
              x: 75.6,
              y: 105.1
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 5,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
            },
            coordinates: {
              x: 149.95,
              y: 149.39
            },
            type: 'O',
            description: 'Fielders Choice'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 5,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
            },
            coordinates: {
              x: 43.03,
              y: 115.56
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 5,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
            },
            coordinates: {
              x: 119.11,
              y: 48.61
            },
            type: 'O',
            description: 'Sac Fly'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 5,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            coordinates: {
              x: 115.04,
              y: 87.91
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 5,
            pitcher: {
              id: 450203,
              fullName: 'Charlie Morton',
              link: '/api/v1/people/450203'
            },
            batter: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
            },
            coordinates: {
              x: 116.91,
              y: 146.84
            },
            type: 'O',
            description: 'Grounded Into DP'
          }
        ]
      }
    },
    {
      startIndex: 41,
      endIndex: 50,
      top: [41, 42, 43, 44, 45],
      bottom: [46, 47, 48, 49, 50],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 6,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            coordinates: {
              x: 97.63,
              y: 159.06
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 6,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            coordinates: {
              x: 135.39,
              y: 21.97
            },
            type: 'H',
            description: 'Home Run'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 6,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            coordinates: {
              x: 82.7,
              y: 153.96
            },
            type: 'O',
            description: 'Lineout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 6,
            pitcher: {
              id: 502043,
              fullName: 'Kyle Gibson',
              link: '/api/v1/people/502043'
            },
            batter: {
              id: 661388,
              fullName: 'William Contreras',
              link: '/api/v1/people/661388'
            },
            coordinates: {
              x: 213.39,
              y: 114.59
            },
            type: 'O',
            description: 'Flyout'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 6,
            pitcher: {
              id: 554431,
              fullName: 'Tyler Matzek',
              link: '/api/v1/people/554431'
            },
            batter: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
            },
            coordinates: {
              x: 151.64,
              y: 118.48
            },
            type: 'H',
            description: 'Double'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 6,
            pitcher: {
              id: 554431,
              fullName: 'Tyler Matzek',
              link: '/api/v1/people/554431'
            },
            batter: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            coordinates: {
              x: 71.18,
              y: 71.72
            },
            type: 'O',
            description: 'Flyout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 6,
            pitcher: {
              id: 554431,
              fullName: 'Tyler Matzek',
              link: '/api/v1/people/554431'
            },
            batter: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            coordinates: {
              x: 219.45,
              y: 117.1
            },
            type: 'H',
            description: 'Double'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 6,
            pitcher: {
              id: 554431,
              fullName: 'Tyler Matzek',
              link: '/api/v1/people/554431'
            },
            batter: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
            },
            coordinates: {
              x: 120.43,
              y: 57.51
            },
            type: 'O',
            description: 'Sac Fly'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 6,
            pitcher: {
              id: 554431,
              fullName: 'Tyler Matzek',
              link: '/api/v1/people/554431'
            },
            batter: {
              id: 546318,
              fullName: 'Odubel Herrera',
              link: '/api/v1/people/546318'
            },
            coordinates: {
              x: 98.73,
              y: 163.64
            },
            type: 'O',
            description: 'Pop Out'
          }
        ]
      }
    },
    {
      startIndex: 51,
      endIndex: 56,
      top: [51, 52, 53],
      bottom: [54, 55, 56],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 7,
            pitcher: {
              id: 641401,
              fullName: 'Connor Brogdon',
              link: '/api/v1/people/641401'
            },
            batter: {
              id: 645801,
              fullName: 'Mike Ford',
              link: '/api/v1/people/645801'
            },
            coordinates: {
              x: 157.11,
              y: 164.66
            },
            type: 'O',
            description: 'Groundout'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 7,
            pitcher: {
              id: 554431,
              fullName: 'Tyler Matzek',
              link: '/api/v1/people/554431'
            },
            batter: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
            },
            coordinates: {
              x: 156.85,
              y: 141.64
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 7,
            pitcher: {
              id: 445926,
              fullName: 'Jesse Chavez',
              link: '/api/v1/people/445926'
            },
            batter: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            coordinates: {
              x: 169.78,
              y: 169.75
            },
            type: 'O',
            description: 'Pop Out'
          }
        ]
      }
    },
    {
      startIndex: 57,
      endIndex: 65,
      top: [57, 58, 59, 60],
      bottom: [61, 62, 63, 64, 65],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 8,
            pitcher: {
              id: 543272,
              fullName: 'Brad Hand',
              link: '/api/v1/people/543272'
            },
            batter: {
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
            },
            coordinates: {
              x: 111.93,
              y: 160.73
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 8,
            pitcher: {
              id: 543272,
              fullName: 'Brad Hand',
              link: '/api/v1/people/543272'
            },
            batter: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            coordinates: {
              x: 106.99,
              y: 147.86
            },
            type: 'O',
            description: 'Groundout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 8,
            pitcher: {
              id: 543272,
              fullName: 'Brad Hand',
              link: '/api/v1/people/543272'
            },
            batter: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            coordinates: {
              x: 129.71,
              y: 74.1
            },
            type: 'O',
            description: 'Lineout'
          }
        ],
        home: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 8,
            pitcher: {
              id: 445926,
              fullName: 'Jesse Chavez',
              link: '/api/v1/people/445926'
            },
            batter: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
            },
            coordinates: {
              x: 92.33,
              y: 153.75
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 8,
            pitcher: {
              id: 445926,
              fullName: 'Jesse Chavez',
              link: '/api/v1/people/445926'
            },
            batter: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
            },
            coordinates: {
              x: 105.89,
              y: 146.33
            },
            type: 'O',
            description: 'Forceout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 8,
            pitcher: {
              id: 445926,
              fullName: 'Jesse Chavez',
              link: '/api/v1/people/445926'
            },
            batter: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            coordinates: {
              x: 141.69,
              y: 175.34
            },
            type: 'H',
            description: 'Single'
          }
        ]
      }
    },
    {
      startIndex: 66,
      endIndex: 69,
      top: [66, 67, 68, 69],
      bottom: [],
      hits: {
        away: [
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 9,
            pitcher: {
              id: 571479,
              fullName: 'Andrew Bellatti',
              link: '/api/v1/people/571479'
            },
            batter: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
            },
            coordinates: {
              x: 137.75,
              y: 75.51
            },
            type: 'O',
            description: 'Flyout'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 9,
            pitcher: {
              id: 571479,
              fullName: 'Andrew Bellatti',
              link: '/api/v1/people/571479'
            },
            batter: {
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
            },
            coordinates: {
              x: 156.22,
              y: 98.82
            },
            type: 'H',
            description: 'Single'
          },
          {
            team: {
              springLeague: {
                id: 115,
                name: 'Grapefruit League',
                link: '/api/v1/league/115',
                abbreviation: 'GL'
              },
              allStarStatus: 'N',
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 9,
            pitcher: {
              id: 571479,
              fullName: 'Andrew Bellatti',
              link: '/api/v1/people/571479'
            },
            batter: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
            },
            coordinates: {
              x: 90.79,
              y: 143.01
            },
            type: 'O',
            description: 'Pop Out'
          }
        ],
        home: []
      }
    }
  ]
}
