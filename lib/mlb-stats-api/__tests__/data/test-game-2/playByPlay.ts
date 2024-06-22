export const playByPlay = {
  copyright:
    'Copyright 2022 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt',
  allPlays: [
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Ronald Acuna Jr.  grounds out softly, first baseman Rhys Hoskins to pitcher Aaron Nola.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 0,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-26T21:52:09.987Z',
        endTime: '2022-07-26T23:09:34.252Z',
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
          id: 660670,
          fullName: 'Ronald Acuna Jr.',
          link: '/api/v1/people/660670'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
      pitchIndex: [3, 4, 5],
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
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
                id: 656555,
                link: '/api/v1/people/656555'
              },
              position: {
                code: '3',
                name: 'First Base',
                type: 'Infielder',
                abbreviation: '1B'
              },
              credit: 'f_assist'
            },
            {
              player: {
                id: 605400,
                link: '/api/v1/people/605400'
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
          startTime: '2022-07-26T21:52:09.987Z',
          endTime: '2022-07-26T22:43:05.956Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 660670,
            link: '/api/v1/people/660670'
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
          startTime: '2022-07-26T22:43:05.956Z',
          endTime: '2022-07-26T23:05:58.017Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 660670,
            link: '/api/v1/people/660670'
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
          startTime: '2022-07-26T23:05:58.017Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 660670,
            link: '/api/v1/people/660670'
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
            startSpeed: 93.9,
            endSpeed: 85.6,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.47,
            coordinates: {
              aY: 30.46,
              aZ: -13.5,
              pfxX: -10.85,
              pfxZ: 9.96,
              pX: 0.71,
              pZ: 1.39,
              vX0: 9.79,
              vY0: -136.24,
              vZ0: -7.1,
              x: 90.0,
              y: 201.23,
              x0: -1.53,
              y0: 50.01,
              z0: 4.97,
              aX: -20.37
            },
            breaks: {
              breakAngle: 50.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2341,
              spinDirection: 223
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 7.05
          },
          index: 3,
          playId: '93dafb83-5063-4260-83bb-6aaf8e2a3076',
          pitchNumber: 1,
          startTime: '2022-07-26T23:08:36.327Z',
          endTime: '2022-07-26T23:08:40.093Z',
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
            startSpeed: 94.5,
            endSpeed: 86.1,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 30.64,
              aZ: -12.47,
              pfxX: -10.42,
              pfxZ: 10.35,
              pX: 0.51,
              pZ: 1.84,
              vX0: 9.28,
              vY0: -137.17,
              vZ0: -6.28,
              x: 97.66,
              y: 189.04,
              x0: -1.57,
              y0: 50.01,
              z0: 5.01,
              aX: -19.85
            },
            breaks: {
              breakAngle: 51.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2494,
              spinDirection: 229
            },
            zone: 9,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 7.15
          },
          index: 4,
          playId: 'c46981b6-9343-4edb-b609-df29f8304d53',
          pitchNumber: 2,
          startTime: '2022-07-26T23:08:57.392Z',
          endTime: '2022-07-26T23:09:00.775Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.5,
            endSpeed: 73.4,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 25.58,
              aZ: -38.91,
              pfxX: 6.38,
              pfxZ: -4.92,
              pX: 0.83,
              pZ: 1.62,
              vX0: 3.65,
              vY0: -117.17,
              vZ0: 0.01,
              x: 85.25,
              y: 194.91,
              x0: -1.58,
              y0: 50.01,
              z0: 5.31,
              aX: 8.72
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2632,
              spinDirection: 51
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 6.88
          },
          hitData: {
            launchSpeed: 48.5,
            launchAngle: -40.0,
            totalDistance: 5.0,
            trajectory: 'ground_ball',
            hardness: 'soft',
            location: '3',
            coordinates: {
              coordX: 141.82,
              coordY: 176.98
            }
          },
          index: 5,
          playId: '58b3e95a-b82b-4dc4-9d77-d4196283c034',
          pitchNumber: 3,
          startTime: '2022-07-26T23:09:26.815Z',
          endTime: '2022-07-26T23:09:34.252Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:09:34.252Z',
      atBatIndex: 0
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Dansby Swanson singles on a line drive to left fielder Kyle Schwarber.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 1,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-26T23:10:00.579Z',
        endTime: '2022-07-26T23:10:28.483Z',
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
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
                id: 656941,
                link: '/api/v1/people/656941'
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
              code: 'D',
              description: 'In play, no out'
            },
            description: 'In play, no out',
            code: 'D',
            ballColor: 'rgba(26, 86, 190, 1.0)',
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 80.1,
            endSpeed: 73.5,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 23.66,
              aZ: -39.91,
              pfxX: 7.66,
              pfxZ: -5.67,
              pX: 0.14,
              pZ: 2.12,
              vX0: 2.21,
              vY0: -116.64,
              vZ0: 1.38,
              x: 111.73,
              y: 181.52,
              x0: -1.82,
              y0: 50.0,
              z0: 5.31,
              aX: 10.46
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2670,
              spinDirection: 53
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.76
          },
          hitData: {
            launchSpeed: 87.0,
            launchAngle: 23.0,
            totalDistance: 278.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 44.7,
              coordY: 106.85
            }
          },
          index: 0,
          playId: '48f293db-0e45-47f6-afd7-a93402cb53ce',
          pitchNumber: 1,
          startTime: '2022-07-26T23:10:16.928Z',
          endTime: '2022-07-26T23:10:28.483Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:10:28.483Z',
      atBatIndex: 1
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Matt Olson flies out to center fielder Matt Vierling.',
        rbi: 0,
        awayScore: 0,
        homeScore: 0
      },
      about: {
        atBatIndex: 2,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-26T23:10:40.306Z',
        endTime: '2022-07-26T23:11:45.826Z',
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
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
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
                id: 663837,
                link: '/api/v1/people/663837'
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
            description: 'Pickoff Attempt 1B',
            code: '1',
            hasReview: false,
            fromCatcher: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          index: 0,
          playId: '47150fdc-b731-4627-a3e8-2a82ea8ab718',
          startTime: '2022-07-26T23:11:11.503Z',
          endTime: '2022-07-26T23:11:14.951Z',
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
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 84.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 31.32,
              aZ: -14.85,
              pfxX: -7.24,
              pfxZ: 9.46,
              pX: -0.35,
              pZ: 2.38,
              vX0: 6.17,
              vY0: -134.95,
              vZ0: -4.27,
              x: 130.38,
              y: 174.47,
              x0: -1.73,
              y0: 50.0,
              z0: 5.04,
              aX: -13.26
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2261,
              spinDirection: 236
            },
            zone: 4,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.95
          },
          hitData: {
            launchSpeed: 99.9,
            launchAngle: 49.0,
            totalDistance: 305.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 119.39,
              coordY: 79.66
            }
          },
          index: 1,
          playId: '531bdb77-e411-41b9-9320-b50365f8260e',
          pitchNumber: 1,
          startTime: '2022-07-26T23:11:32.965Z',
          endTime: '2022-07-26T23:11:45.826Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:11:45.826Z',
      atBatIndex: 2
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Austin Riley doubles (26) on a line drive to center fielder Matt Vierling.   Dansby Swanson scores.',
        rbi: 1,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 3,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-26T23:12:06.729Z',
        endTime: '2022-07-26T23:13:50.886Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
      },
      count: {
        balls: 0,
        strikes: 1,
        outs: 2
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnSecond: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
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
                id: 663837,
                link: '/api/v1/people/663837'
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
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
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
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            responsiblePitcher: {
              id: 605400,
              link: '/api/v1/people/605400'
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
          playId: '608e40db-99af-49a2-9d1a-de9586457066',
          startTime: '2022-07-26T23:12:23.976Z',
          endTime: '2022-07-26T23:12:27.348Z',
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
          count: {
            balls: 0,
            strikes: 0,
            outs: 2
          },
          index: 1,
          playId: 'b62d815c-24be-4608-ab3a-9acc3dba5cb4',
          startTime: '2022-07-26T23:12:46.374Z',
          endTime: '2022-07-26T23:12:49.839Z',
          isPitch: false,
          type: 'pickoff'
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
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.0,
            endSpeed: 85.1,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 32.81,
              aZ: -15.31,
              pfxX: -7.17,
              pfxZ: 9.03,
              pX: 0.84,
              pZ: 2.11,
              vX0: 9.24,
              vY0: -136.49,
              vZ0: -5.23,
              x: 85.16,
              y: 181.87,
              x0: -1.68,
              y0: 50.0,
              z0: 5.12,
              aX: -13.39
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2438,
              spinDirection: 223
            },
            zone: 14,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.91
          },
          index: 2,
          playId: 'ac44a48f-7883-4e86-9a53-45f8fa083ff4',
          pitchNumber: 1,
          startTime: '2022-07-26T23:13:06.969Z',
          endTime: '2022-07-26T23:13:10.679Z',
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.0,
            endSpeed: 85.3,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 31.94,
              aZ: -15.62,
              pfxX: -8.9,
              pfxZ: 8.82,
              pX: 0.03,
              pZ: 2.72,
              vX0: 7.68,
              vY0: -136.61,
              vZ0: -3.48,
              x: 115.7,
              y: 165.26,
              x0: -1.67,
              y0: 50.0,
              z0: 5.1,
              aX: -16.7
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2327,
              spinDirection: 226
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 6.74
          },
          hitData: {
            launchSpeed: 100.5,
            launchAngle: 26.0,
            totalDistance: 382.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 75.2,
              coordY: 60.82
            }
          },
          index: 3,
          playId: '2b87d969-65a1-406b-9a7a-196c17b650fd',
          pitchNumber: 2,
          startTime: '2022-07-26T23:13:34.275Z',
          endTime: '2022-07-26T23:13:50.886Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:13:50.886Z',
      atBatIndex: 3
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          "Travis d'Arnaud grounds out, third baseman Alec Bohm to first baseman Rhys Hoskins.",
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 4,
        halfInning: 'top',
        isTopInning: true,
        inning: 1,
        startTime: '2022-07-26T23:14:21.592Z',
        endTime: '2022-07-26T23:17:32.676Z',
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
          id: 518595,
          fullName: "Travis d'Arnaud",
          link: '/api/v1/people/518595'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 518595,
              fullName: "Travis d'Arnaud",
              link: '/api/v1/people/518595'
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
            outs: 2
          },
          pitchData: {
            startSpeed: 85.6,
            endSpeed: 78.7,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 24.88,
              aZ: -34.62,
              pfxX: -9.13,
              pfxZ: -1.56,
              pX: -0.13,
              pZ: 1.24,
              vX0: 7.17,
              vY0: -124.47,
              vZ0: -1.98,
              x: 121.93,
              y: 205.29,
              x0: -1.86,
              y0: 50.0,
              z0: 4.91,
              aX: -14.33
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1455,
              spinDirection: 261
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.93
          },
          index: 0,
          playId: '82c18d02-cce6-4263-8329-b0b4a345aac6',
          pitchNumber: 1,
          startTime: '2022-07-26T23:14:35.648Z',
          endTime: '2022-07-26T23:14:40.080Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 93.8,
            endSpeed: 85.7,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 29.8,
              aZ: -15.16,
              pfxX: -8.82,
              pfxZ: 9.04,
              pX: 0.17,
              pZ: 2.17,
              vX0: 8.13,
              vY0: -136.29,
              vZ0: -4.88,
              x: 110.49,
              y: 180.1,
              x0: -1.71,
              y0: 50.0,
              z0: 5.03,
              aX: -16.6
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2228,
              spinDirection: 222
            },
            zone: 5,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.93
          },
          index: 1,
          playId: 'f3a22611-21f7-4bbe-bb4f-390864916661',
          pitchNumber: 2,
          startTime: '2022-07-26T23:14:58.781Z',
          endTime: '2022-07-26T23:15:02.455Z',
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
            startSpeed: 88.5,
            endSpeed: 81.9,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 24.61,
              aZ: -25.09,
              pfxX: -0.75,
              pfxZ: 4.18,
              pX: 1.22,
              pZ: 2.04,
              vX0: 7.55,
              vY0: -128.84,
              vZ0: -2.9,
              x: 70.5,
              y: 183.81,
              x0: -1.64,
              y0: 50.0,
              z0: 5.1,
              aX: -1.27
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2298,
              spinDirection: 201
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.74
          },
          index: 2,
          playId: '3c84619b-87fb-4007-8009-50976f563790',
          pitchNumber: 3,
          startTime: '2022-07-26T23:15:27.602Z',
          endTime: '2022-07-26T23:15:30.951Z',
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
            startSpeed: 92.7,
            endSpeed: 84.0,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 32.34,
              aZ: -14.73,
              pfxX: -8.98,
              pfxZ: 9.58,
              pX: -1.58,
              pZ: 1.99,
              vX0: 3.88,
              vY0: -134.83,
              vZ0: -5.31,
              x: 177.26,
              y: 184.98,
              x0: -1.88,
              y0: 50.01,
              z0: 5.05,
              aX: -16.36
            },
            breaks: {
              breakAngle: 44.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2342,
              spinDirection: 230
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 7.31
          },
          index: 3,
          playId: 'd0c8e194-8a86-418c-902c-b33ebc78fb55',
          pitchNumber: 4,
          startTime: '2022-07-26T23:16:11.556Z',
          endTime: '2022-07-26T23:16:15.583Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 94.7,
            endSpeed: 85.7,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 33.09,
              aZ: -14.22,
              pfxX: -8.42,
              pfxZ: 9.47,
              pX: 0.67,
              pZ: 2.02,
              vX0: 8.84,
              vY0: -137.44,
              vZ0: -5.59,
              x: 91.64,
              y: 184.31,
              x0: -1.51,
              y0: 50.0,
              z0: 5.06,
              aX: -15.97
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2281,
              spinDirection: 229
            },
            zone: 9,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.84
          },
          index: 4,
          playId: '577621c4-293f-40a4-aeaa-4e89e8eeba31',
          pitchNumber: 5,
          startTime: '2022-07-26T23:16:38.666Z',
          endTime: '2022-07-26T23:16:43.415Z',
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
            startSpeed: 93.0,
            endSpeed: 84.0,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 33.07,
              aZ: -16.71,
              pfxX: -9.85,
              pfxZ: 8.5,
              pX: -0.39,
              pZ: 1.68,
              vX0: 7.05,
              vY0: -135.01,
              vZ0: -5.72,
              x: 132.05,
              y: 193.54,
              x0: -1.78,
              y0: 50.01,
              z0: 5.02,
              aX: -17.94
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2404,
              spinDirection: 228
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 7.18
          },
          hitData: {
            launchSpeed: 81.8,
            launchAngle: -55.0,
            totalDistance: 3.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 99.58,
              coordY: 169.75
            }
          },
          index: 5,
          playId: '641f0b1c-24db-48ee-8d2a-96cb7e3bb704',
          pitchNumber: 6,
          startTime: '2022-07-26T23:17:22.388Z',
          endTime: '2022-07-26T23:17:32.676Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:17:32.676Z',
      atBatIndex: 4
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Kyle Schwarber flies out to center fielder Michael Harris II.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 5,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2022-07-26T23:20:02.142Z',
        endTime: '2022-07-26T23:20:44.637Z',
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            playIndex: 0
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
            startSpeed: 96.9,
            endSpeed: 88.4,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 32.63,
              aZ: -10.0,
              pfxX: -3.06,
              pfxZ: 11.05,
              pX: 0.2,
              pZ: 2.99,
              vX0: 6.89,
              vY0: -140.93,
              vZ0: -5.87,
              x: 109.54,
              y: 158.07,
              x0: -1.89,
              y0: 50.0,
              z0: 5.75,
              aX: -6.15
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2338,
              spinDirection: 199
            },
            zone: 2,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.79
          },
          hitData: {
            launchSpeed: 79.2,
            launchAngle: 46.0,
            totalDistance: 249.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 119.55,
              coordY: 100.8
            }
          },
          index: 0,
          playId: '408cb2e3-1beb-4bad-aa73-4bb0dfa18f09',
          pitchNumber: 1,
          startTime: '2022-07-26T23:20:35.753Z',
          endTime: '2022-07-26T23:20:44.637Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:20:44.637Z',
      atBatIndex: 5
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Rhys Hoskins strikes out swinging.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 6,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2022-07-26T23:21:04.145Z',
        endTime: '2022-07-26T23:21:56.151Z',
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
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
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
                id: 518595,
                link: '/api/v1/people/518595'
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
            startSpeed: 96.5,
            endSpeed: 87.7,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 33.07,
              aZ: -9.05,
              pfxX: -3.14,
              pfxZ: 11.69,
              pX: 0.46,
              pZ: 2.34,
              vX0: 7.49,
              vY0: -140.1,
              vZ0: -7.49,
              x: 99.44,
              y: 175.56,
              x0: -1.84,
              y0: 50.01,
              z0: 5.65,
              aX: -6.21
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2370,
              spinDirection: 198
            },
            zone: 6,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 7.02
          },
          index: 0,
          playId: '9db5a137-d549-42ac-b604-587544ee1e9a',
          pitchNumber: 1,
          startTime: '2022-07-26T23:21:16.673Z',
          endTime: '2022-07-26T23:21:20.260Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 97.1,
            endSpeed: 88.2,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 33.98,
              aZ: -8.38,
              pfxX: -3.95,
              pfxZ: 11.86,
              pX: -0.14,
              pZ: 2.74,
              vX0: 6.55,
              vY0: -141.15,
              vZ0: -6.62,
              x: 122.44,
              y: 164.78,
              x0: -1.99,
              y0: 50.0,
              z0: 5.66,
              aX: -7.92
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2393,
              spinDirection: 201
            },
            zone: 5,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.79
          },
          index: 1,
          playId: 'c64b8baa-521e-4810-9e22-740084cfa459',
          pitchNumber: 2,
          startTime: '2022-07-26T23:21:30.363Z',
          endTime: '2022-07-26T23:21:35.055Z',
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
            balls: 0,
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 99.1,
            endSpeed: 90.0,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 35.56,
              aZ: -6.06,
              pfxX: -4.33,
              pfxZ: 12.52,
              pX: -0.78,
              pZ: 2.06,
              vX0: 4.95,
              vY0: -144.01,
              vZ0: -9.13,
              x: 146.58,
              y: 183.04,
              x0: -1.96,
              y0: 50.0,
              z0: 5.66,
              aX: -9.03
            },
            breaks: {
              breakAngle: 43.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2412,
              spinDirection: 198
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.38,
            extension: 6.66
          },
          index: 2,
          playId: '15887703-263a-48c4-acff-3e676ea21ef8',
          pitchNumber: 3,
          startTime: '2022-07-26T23:21:51.066Z',
          endTime: '2022-07-26T23:21:56.151Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:21:56.151Z',
      atBatIndex: 6
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'J.T. Realmuto strikes out swinging.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 7,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 1,
        startTime: '2022-07-26T23:22:25.719Z',
        endTime: '2022-07-26T23:24:31.130Z',
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
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
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
                id: 518595,
                link: '/api/v1/people/518595'
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
            outs: 2
          },
          pitchData: {
            startSpeed: 97.5,
            endSpeed: 88.9,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 32.66,
              aZ: -7.46,
              pfxX: -4.41,
              pfxZ: 12.22,
              pX: 1.53,
              pZ: 2.23,
              vX0: 10.67,
              vY0: -141.4,
              vZ0: -8.31,
              x: 58.56,
              y: 178.65,
              x0: -1.72,
              y0: 50.01,
              z0: 5.69,
              aX: -8.92
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2329,
              spinDirection: 203
            },
            zone: 14,
            typeConfidence: 0.88,
            plateTime: 0.39,
            extension: 6.9
          },
          index: 0,
          playId: 'a84ecee7-7683-46b6-8ae8-87f7b28571e0',
          pitchNumber: 1,
          startTime: '2022-07-26T23:22:34.055Z',
          endTime: '2022-07-26T23:22:37.600Z',
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
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 97.4,
            endSpeed: 88.8,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 33.11,
              aZ: -8.63,
              pfxX: -3.33,
              pfxZ: 11.64,
              pX: 0.27,
              pZ: 2.04,
              vX0: 7.14,
              vY0: -141.51,
              vZ0: -8.33,
              x: 106.56,
              y: 183.73,
              x0: -1.85,
              y0: 50.0,
              z0: 5.58,
              aX: -6.73
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2377,
              spinDirection: 197
            },
            zone: 9,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.94
          },
          index: 1,
          playId: 'ce09149c-6148-4ce7-a6d4-adfe3b4f1fb7',
          pitchNumber: 2,
          startTime: '2022-07-26T23:22:48.840Z',
          endTime: '2022-07-26T23:22:52.323Z',
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 97.6,
            endSpeed: 89.1,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 32.21,
              aZ: -7.29,
              pfxX: -4.48,
              pfxZ: 12.24,
              pX: 0.66,
              pZ: 1.96,
              vX0: 8.45,
              vY0: -141.64,
              vZ0: -8.77,
              x: 91.7,
              y: 185.8,
              x0: -1.77,
              y0: 50.01,
              z0: 5.56,
              aX: -9.11
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2400,
              spinDirection: 201
            },
            zone: 9,
            typeConfidence: 0.88,
            plateTime: 0.39,
            extension: 6.95
          },
          index: 2,
          playId: '26a22525-2533-4c43-9bbf-485dd00fb6b9',
          pitchNumber: 3,
          startTime: '2022-07-26T23:23:05.947Z',
          endTime: '2022-07-26T23:23:09.762Z',
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
            startSpeed: 99.7,
            endSpeed: 90.8,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 34.6,
              aZ: -8.05,
              pfxX: -4.15,
              pfxZ: 11.34,
              pX: -0.24,
              pZ: 3.55,
              vX0: 6.08,
              vY0: -145.08,
              vZ0: -4.86,
              x: 126.12,
              y: 143.04,
              x0: -1.83,
              y0: 50.01,
              z0: 5.74,
              aX: -8.83
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2537,
              spinDirection: 195
            },
            zone: 1,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.83
          },
          index: 3,
          playId: '65763c4e-cee4-40b8-8335-2303bc152f8a',
          pitchNumber: 4,
          startTime: '2022-07-26T23:23:23.189Z',
          endTime: '2022-07-26T23:23:26.876Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 87.6,
            endSpeed: 81.4,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 22.92,
              aZ: -29.26,
              pfxX: 1.91,
              pfxZ: 1.74,
              pX: 0.79,
              pZ: 3.24,
              vX0: 6.23,
              vY0: -127.61,
              vZ0: -0.7,
              x: 87.0,
              y: 151.26,
              x0: -1.92,
              y0: 50.0,
              z0: 5.8,
              aX: 3.2
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2414,
              spinDirection: 119
            },
            zone: 12,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.79
          },
          index: 4,
          playId: '3f456d99-4a3b-4c85-b9cb-a70e95a6606b',
          pitchNumber: 5,
          startTime: '2022-07-26T23:23:43.649Z',
          endTime: '2022-07-26T23:23:47.372Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 80.5,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 24.36,
              aZ: -32.57,
              pfxX: 1.19,
              pfxZ: -0.24,
              pX: 1.59,
              pZ: 1.29,
              vX0: 8.21,
              vY0: -126.21,
              vZ0: -4.29,
              x: 56.54,
              y: 203.86,
              x0: -1.86,
              y0: 50.01,
              z0: 5.62,
              aX: 1.93
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2396,
              spinDirection: 98
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.77
          },
          index: 5,
          playId: 'aef0b831-0b37-4dbb-a6b8-3bc55728230d',
          pitchNumber: 6,
          startTime: '2022-07-26T23:24:06.889Z',
          endTime: '2022-07-26T23:24:11.620Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 99.7,
            endSpeed: 91.0,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 33.86,
              aZ: -8.91,
              pfxX: -3.49,
              pfxZ: 10.94,
              pX: 0.21,
              pZ: 2.81,
              vX0: 7.43,
              vY0: -144.91,
              vZ0: -6.46,
              x: 108.97,
              y: 163.04,
              x0: -1.93,
              y0: 50.0,
              z0: 5.61,
              aX: -7.43
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2452,
              spinDirection: 202
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.97
          },
          index: 6,
          playId: '8585e30e-9e0a-4dae-a943-697c100ace53',
          pitchNumber: 7,
          startTime: '2022-07-26T23:24:27.371Z',
          endTime: '2022-07-26T23:24:31.130Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:24:31.130Z',
      atBatIndex: 7
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Eddie Rosario strikes out swinging.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 8,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2022-07-26T23:27:03.484Z',
        endTime: '2022-07-26T23:29:22.418Z',
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
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
            startSpeed: 94.2,
            endSpeed: 85.6,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 32.15,
              aZ: -17.15,
              pfxX: -9.23,
              pfxZ: 7.95,
              pX: -1.22,
              pZ: 2.56,
              vX0: 4.82,
              vY0: -137.03,
              vZ0: -3.54,
              x: 163.44,
              y: 169.62,
              x0: -1.81,
              y0: 50.0,
              z0: 5.05,
              aX: -17.44
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2279,
              spinDirection: 232
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.79
          },
          index: 0,
          playId: '5c240189-342f-4273-acc6-fc5e3d91e5c9',
          pitchNumber: 1,
          startTime: '2022-07-26T23:27:25.041Z',
          endTime: '2022-07-26T23:27:29.080Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 79.6,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 25.8,
              aZ: -28.39,
              pfxX: -8.57,
              pfxZ: 2.34,
              pX: -1.07,
              pZ: 2.27,
              vX0: 4.8,
              vY0: -126.37,
              vZ0: -0.96,
              x: 157.62,
              y: 177.62,
              x0: -1.88,
              y0: 50.0,
              z0: 4.93,
              aX: -13.86
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1513,
              spinDirection: 258
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.98
          },
          index: 1,
          playId: '946fbc39-65ca-4cd3-867d-8af3658c134b',
          pitchNumber: 2,
          startTime: '2022-07-26T23:27:40.344Z',
          endTime: '2022-07-26T23:27:44.818Z',
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
            startSpeed: 94.6,
            endSpeed: 86.3,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 31.1,
              aZ: -15.32,
              pfxX: -9.42,
              pfxZ: 8.83,
              pX: -0.44,
              pZ: 1.28,
              vX0: 6.79,
              vY0: -137.41,
              vZ0: -7.25,
              x: 133.59,
              y: 204.17,
              x0: -1.72,
              y0: 50.0,
              z0: 5.0,
              aX: -17.98
            },
            breaks: {
              breakAngle: 44.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2324,
              spinDirection: 229
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 7.12
          },
          index: 2,
          playId: 'b0731e92-eedd-4487-ae78-577b9250a5eb',
          pitchNumber: 3,
          startTime: '2022-07-26T23:28:00.521Z',
          endTime: '2022-07-26T23:28:04.748Z',
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
            startSpeed: 90.4,
            endSpeed: 82.4,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 28.72,
              aZ: -16.41,
              pfxX: -8.5,
              pfxZ: 9.04,
              pX: 0.15,
              pZ: 2.01,
              vX0: 7.22,
              vY0: -131.42,
              vZ0: -4.43,
              x: 111.21,
              y: 184.63,
              x0: -1.53,
              y0: 50.0,
              z0: 4.94,
              aX: -14.82
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2221,
              spinDirection: 234
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 7.01
          },
          index: 3,
          playId: 'd7343eef-20f4-48a4-a2ff-90a6b36383e9',
          pitchNumber: 4,
          startTime: '2022-07-26T23:28:20.213Z',
          endTime: '2022-07-26T23:28:24.040Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.4,
            endSpeed: 72.7,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 23.46,
              aZ: -39.33,
              pfxX: 7.77,
              pfxZ: -5.34,
              pX: -0.83,
              pZ: 2.01,
              vX0: -0.22,
              vY0: -115.61,
              vZ0: 1.17,
              x: 148.5,
              y: 184.41,
              x0: -1.74,
              y0: 50.0,
              z0: 5.3,
              aX: 10.42
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2504,
              spinDirection: 51
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.8
          },
          index: 4,
          playId: 'd84f75d3-bdcf-4104-8310-313293a9894a',
          pitchNumber: 5,
          startTime: '2022-07-26T23:28:52.823Z',
          endTime: '2022-07-26T23:28:56.710Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.5,
            endSpeed: 72.7,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 25.12,
              aZ: -40.26,
              pfxX: 7.44,
              pfxZ: -6.06,
              pX: 0.61,
              pZ: 0.92,
              vX0: 3.12,
              vY0: -115.74,
              vZ0: -0.94,
              x: 93.79,
              y: 214.05,
              x0: -1.73,
              y0: 50.0,
              z0: 5.24,
              aX: 9.92
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2656,
              spinDirection: 54
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 7.06
          },
          index: 5,
          playId: 'fd0e71df-9bb1-4983-8622-f4e9748dc81d',
          pitchNumber: 6,
          startTime: '2022-07-26T23:29:16.574Z',
          endTime: '2022-07-26T23:29:22.418Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:29:22.418Z',
      atBatIndex: 8
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Marcell Ozuna strikes out swinging.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 9,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2022-07-26T23:29:39.127Z',
        endTime: '2022-07-26T23:31:10.587Z',
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
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            outNumber: 2
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
            startSpeed: 93.6,
            endSpeed: 85.8,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 28.9,
              aZ: -24.47,
              pfxX: -9.91,
              pfxZ: 4.09,
              pX: -0.34,
              pZ: 3.04,
              vX0: 6.82,
              vY0: -136.15,
              vZ0: -1.27,
              x: 129.84,
              y: 156.83,
              x0: -1.58,
              y0: 50.0,
              z0: 5.2,
              aX: -18.67
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2226,
              spinDirection: 215
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 7.05
          },
          index: 0,
          playId: '5ede1478-62c3-4861-b572-9961e626612d',
          pitchNumber: 1,
          startTime: '2022-07-26T23:30:01.012Z',
          endTime: '2022-07-26T23:30:05.111Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 81.1,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 25.38,
              aZ: -24.98,
              pfxX: -9.28,
              pfxZ: 4.32,
              pX: 0.88,
              pZ: 0.48,
              vX0: 9.62,
              vY0: -127.9,
              vZ0: -6.0,
              x: 83.43,
              y: 225.8,
              x0: -1.72,
              y0: 50.0,
              z0: 4.8,
              aX: -15.44
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1498,
              spinDirection: 252
            },
            zone: 14,
            typeConfidence: 0.87,
            plateTime: 0.43,
            extension: 6.98
          },
          index: 1,
          playId: '032c9d14-62c8-42de-a47b-d286371a06f1',
          pitchNumber: 2,
          startTime: '2022-07-26T23:30:17.215Z',
          endTime: '2022-07-26T23:30:20.235Z',
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
            startSpeed: 88.0,
            endSpeed: 80.8,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 26.32,
              aZ: -29.72,
              pfxX: -9.0,
              pfxZ: 1.47,
              pX: -0.2,
              pZ: 1.06,
              vX0: 6.94,
              vY0: -127.94,
              vZ0: -3.85,
              x: 124.49,
              y: 210.23,
              x0: -1.78,
              y0: 50.0,
              z0: 4.91,
              aX: -14.93
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1527,
              spinDirection: 257
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.76
          },
          index: 2,
          playId: 'abfe9900-ea96-4021-ac4e-827c4f18f4c5',
          pitchNumber: 3,
          startTime: '2022-07-26T23:30:38.714Z',
          endTime: '2022-07-26T23:30:41.951Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.9,
            endSpeed: 73.4,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 24.19,
              aZ: -40.98,
              pfxX: 7.39,
              pfxZ: -6.5,
              pX: 0.24,
              pZ: 0.87,
              vX0: 2.23,
              vY0: -116.28,
              vZ0: -1.1,
              x: 107.93,
              y: 215.39,
              x0: -1.7,
              y0: 50.0,
              z0: 5.27,
              aX: 10.0
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2678,
              spinDirection: 54
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.76
          },
          index: 3,
          playId: '8ef3f6b3-0caa-4984-af45-4718fd22c5ff',
          pitchNumber: 4,
          startTime: '2022-07-26T23:31:04.802Z',
          endTime: '2022-07-26T23:31:10.587Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:31:10.587Z',
      atBatIndex: 9
    },
    {
      result: {
        type: 'atBat',
        event: 'Lineout',
        eventType: 'field_out',
        description:
          'Robinson Cano lines out to right fielder Nick Castellanos.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 10,
        halfInning: 'top',
        isTopInning: true,
        inning: 2,
        startTime: '2022-07-26T23:31:20.293Z',
        endTime: '2022-07-26T23:31:48.365Z',
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
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            outNumber: 3
          },
          details: {
            event: 'Lineout',
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
            startSpeed: 94.2,
            endSpeed: 86.0,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 30.37,
              aZ: -17.4,
              pfxX: -9.79,
              pfxZ: 7.77,
              pX: -0.25,
              pZ: 2.84,
              vX0: 6.92,
              vY0: -137.05,
              vZ0: -2.92,
              x: 126.47,
              y: 162.17,
              x0: -1.54,
              y0: 50.0,
              z0: 5.11,
              aX: -18.61
            },
            breaks: {
              breakAngle: 43.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2324,
              spinDirection: 226
            },
            zone: 4,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 7.15
          },
          hitData: {
            launchSpeed: 93.4,
            launchAngle: 21.0,
            totalDistance: 319.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 179.2,
              coordY: 82.2
            }
          },
          index: 0,
          playId: '026329b6-34a3-41e3-8074-b212ca7105c1',
          pitchNumber: 1,
          startTime: '2022-07-26T23:31:41.501Z',
          endTime: '2022-07-26T23:31:48.365Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:31:48.365Z',
      atBatIndex: 10
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Darick Hall flies out to left fielder Eddie Rosario.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 11,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2022-07-26T23:34:13.049Z',
        endTime: '2022-07-26T23:35:45.425Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            outNumber: 1
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
            playIndex: 4
          },
          credits: [
            {
              player: {
                id: 592696,
                link: '/api/v1/people/592696'
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
            startSpeed: 97.5,
            endSpeed: 88.8,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 33.36,
              aZ: -8.95,
              pfxX: -4.44,
              pfxZ: 11.44,
              pX: -0.39,
              pZ: 2.59,
              vX0: 5.93,
              vY0: -141.77,
              vZ0: -7.17,
              x: 131.69,
              y: 168.93,
              x0: -1.93,
              y0: 50.0,
              z0: 5.72,
              aX: -9.0
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2371,
              spinDirection: 202
            },
            zone: 4,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.66
          },
          index: 0,
          playId: '8cc8a5d1-f97b-4d89-8651-b158b669336e',
          pitchNumber: 1,
          startTime: '2022-07-26T23:34:20.137Z',
          endTime: '2022-07-26T23:34:23.825Z',
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
            startSpeed: 97.6,
            endSpeed: 88.8,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 33.89,
              aZ: -8.36,
              pfxX: -3.62,
              pfxZ: 11.73,
              pX: -0.49,
              pZ: 2.88,
              vX0: 5.2,
              vY0: -141.94,
              vZ0: -6.62,
              x: 135.86,
              y: 160.97,
              x0: -1.88,
              y0: 50.0,
              z0: 5.78,
              aX: -7.35
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2416,
              spinDirection: 203
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.76
          },
          index: 1,
          playId: '937f1398-f468-4002-8bb6-19ac70a8c5a0',
          pitchNumber: 2,
          startTime: '2022-07-26T23:34:33.731Z',
          endTime: '2022-07-26T23:34:37.100Z',
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
            startSpeed: 98.1,
            endSpeed: 88.6,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 36.29,
              aZ: -10.38,
              pfxX: -3.24,
              pfxZ: 10.74,
              pX: 0.7,
              pZ: 2.55,
              vX0: 8.33,
              vY0: -142.4,
              vZ0: -6.78,
              x: 90.33,
              y: 169.83,
              x0: -1.86,
              y0: 50.0,
              z0: 5.64,
              aX: -6.58
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2349,
              spinDirection: 199
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.92
          },
          index: 2,
          playId: 'b9a10e9d-33e9-424e-8d7f-22a08d29241e',
          pitchNumber: 3,
          startTime: '2022-07-26T23:34:51.612Z',
          endTime: '2022-07-26T23:34:54.932Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 98.6,
            endSpeed: 90.1,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 32.93,
              aZ: -8.8,
              pfxX: -3.54,
              pfxZ: 11.21,
              pX: -0.99,
              pZ: 3.0,
              vX0: 4.38,
              vY0: -143.42,
              vZ0: -6.16,
              x: 154.83,
              y: 157.89,
              x0: -2.08,
              y0: 50.01,
              z0: 5.72,
              aX: -7.39
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2356,
              spinDirection: 200
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.77
          },
          index: 3,
          playId: 'bdb825ee-ba95-438e-a534-c8cdc070ed10',
          pitchNumber: 4,
          startTime: '2022-07-26T23:35:18.516Z',
          endTime: '2022-07-26T23:35:22.823Z',
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
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 98.8,
            endSpeed: 90.4,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 32.93,
              aZ: -8.78,
              pfxX: -2.13,
              pfxZ: 11.17,
              pX: -0.23,
              pZ: 2.84,
              vX0: 5.57,
              vY0: -143.73,
              vZ0: -6.54,
              x: 125.75,
              y: 161.97,
              x0: -1.92,
              y0: 50.0,
              z0: 5.69,
              aX: -4.47
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2369,
              spinDirection: 202
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.71
          },
          hitData: {
            launchSpeed: 81.0,
            launchAngle: 45.0,
            totalDistance: 249.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 59.09,
              coordY: 124.79
            }
          },
          index: 4,
          playId: 'eef853f0-6e19-4a69-b0ff-33f2040bcdf1',
          pitchNumber: 5,
          startTime: '2022-07-26T23:35:36.721Z',
          endTime: '2022-07-26T23:35:45.425Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:35:45.425Z',
      atBatIndex: 11
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Nick Castellanos flies out to right fielder Ronald Acuna Jr.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 12,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2022-07-26T23:36:08.417Z',
        endTime: '2022-07-26T23:36:45.245Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 0,
        outs: 2
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
                id: 660670,
                link: '/api/v1/people/660670'
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
            startSpeed: 98.2,
            endSpeed: 88.9,
            strikeZoneTop: 3.59,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 35.42,
              aZ: -8.75,
              pfxX: -4.57,
              pfxZ: 11.49,
              pX: 0.93,
              pZ: 2.58,
              vX0: 8.98,
              vY0: -142.48,
              vZ0: -7.11,
              x: 81.37,
              y: 169.03,
              x0: -1.68,
              y0: 50.0,
              z0: 5.68,
              aX: -9.31
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2448,
              spinDirection: 202
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.82
          },
          index: 0,
          playId: '6c8992fa-082f-4b08-bca3-4f7af05c3188',
          pitchNumber: 1,
          startTime: '2022-07-26T23:36:22.531Z',
          endTime: '2022-07-26T23:36:25.695Z',
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
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 96.8,
            endSpeed: 87.9,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 33.72,
              aZ: -7.9,
              pfxX: -3.67,
              pfxZ: 12.21,
              pX: 0.88,
              pZ: 2.56,
              vX0: 8.63,
              vY0: -140.53,
              vZ0: -7.1,
              x: 83.32,
              y: 169.64,
              x0: -1.76,
              y0: 50.0,
              z0: 5.64,
              aX: -7.29
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2377,
              spinDirection: 200
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.98
          },
          hitData: {
            launchSpeed: 77.4,
            launchAngle: 36.0,
            totalDistance: 261.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 158.71,
              coordY: 100.4
            }
          },
          index: 1,
          playId: 'cc2346bd-71c5-4540-aedf-1501dee91be4',
          pitchNumber: 2,
          startTime: '2022-07-26T23:36:37.256Z',
          endTime: '2022-07-26T23:36:45.245Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:36:45.245Z',
      atBatIndex: 12
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Bryson Stott grounds out, shortstop Dansby Swanson to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 1,
        homeScore: 0
      },
      about: {
        atBatIndex: 13,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 2,
        startTime: '2022-07-26T23:37:13.881Z',
        endTime: '2022-07-26T23:39:31.264Z',
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
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            event: 'Groundout',
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
            playIndex: 6
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
            startSpeed: 97.5,
            endSpeed: 88.5,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 34.57,
              aZ: -11.8,
              pfxX: -2.16,
              pfxZ: 10.11,
              pX: 0.47,
              pZ: 2.31,
              vX0: 7.42,
              vY0: -141.57,
              vZ0: -7.08,
              x: 98.94,
              y: 176.52,
              x0: -1.91,
              y0: 50.0,
              z0: 5.61,
              aX: -4.35
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2232,
              spinDirection: 207
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.77
          },
          index: 0,
          playId: '02184e60-8c95-4598-8893-f75ad6787c1b',
          pitchNumber: 1,
          startTime: '2022-07-26T23:37:22.132Z',
          endTime: '2022-07-26T23:37:26.025Z',
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
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 97.2,
            endSpeed: 88.3,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 34.18,
              aZ: -11.77,
              pfxX: -4.16,
              pfxZ: 10.14,
              pX: -0.74,
              pZ: 2.69,
              vX0: 4.98,
              vY0: -141.4,
              vZ0: -6.25,
              x: 145.1,
              y: 166.09,
              x0: -1.99,
              y0: 50.0,
              z0: 5.7,
              aX: -8.37
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2213,
              spinDirection: 200
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.73
          },
          index: 1,
          playId: 'a3a3eebe-048c-473b-9f48-c830b3443696',
          pitchNumber: 2,
          startTime: '2022-07-26T23:37:37.446Z',
          endTime: '2022-07-26T23:37:41.029Z',
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
            startSpeed: 99.4,
            endSpeed: 90.0,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 36.63,
              aZ: -13.03,
              pfxX: -0.54,
              pfxZ: 9.12,
              pX: -0.4,
              pZ: 4.04,
              vX0: 4.59,
              vY0: -144.64,
              vZ0: -2.64,
              x: 132.38,
              y: 129.7,
              x0: -1.95,
              y0: 50.0,
              z0: 5.77,
              aX: -1.14
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2314,
              spinDirection: 205
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.72
          },
          index: 2,
          playId: '24b4fc56-1ffe-4bbf-869b-b6c33ed5a421',
          pitchNumber: 3,
          startTime: '2022-07-26T23:37:56.922Z',
          endTime: '2022-07-26T23:38:00.833Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 84.1,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 27.78,
              aZ: -22.3,
              pfxX: -7.61,
              pfxZ: 5.54,
              pX: -0.12,
              pZ: 0.09,
              vX0: 7.64,
              vY0: -132.49,
              vZ0: -9.87,
              x: 121.47,
              y: 236.45,
              x0: -2.05,
              y0: 50.0,
              z0: 5.48,
              aX: -13.55
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2097,
              spinDirection: 227
            },
            zone: 13,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 7.0
          },
          index: 3,
          playId: 'aa5716eb-600c-4f16-95f9-04da6e89b92c',
          pitchNumber: 4,
          startTime: '2022-07-26T23:38:14.013Z',
          endTime: '2022-07-26T23:38:17.498Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 98.7,
            endSpeed: 89.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 35.34,
              aZ: -9.56,
              pfxX: -3.0,
              pfxZ: 10.92,
              pX: -0.37,
              pZ: 3.14,
              vX0: 5.6,
              vY0: -143.51,
              vZ0: -5.43,
              x: 131.23,
              y: 154.05,
              x0: -1.97,
              y0: 50.0,
              z0: 5.66,
              aX: -6.21
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2358,
              spinDirection: 202
            },
            zone: 1,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.72
          },
          index: 4,
          playId: 'ecf1bd6e-57cc-4e6f-8c2f-ba9cb0ae681c',
          pitchNumber: 5,
          startTime: '2022-07-26T23:38:36.762Z',
          endTime: '2022-07-26T23:38:40.630Z',
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
            startSpeed: 99.1,
            endSpeed: 89.9,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 35.75,
              aZ: -10.1,
              pfxX: -3.49,
              pfxZ: 10.58,
              pX: -1.03,
              pZ: 2.79,
              vX0: 4.34,
              vY0: -144.07,
              vZ0: -6.28,
              x: 156.19,
              y: 163.35,
              x0: -2.1,
              y0: 50.01,
              z0: 5.64,
              aX: -7.29
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2221,
              spinDirection: 207
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.73
          },
          index: 5,
          playId: '51e33a45-8f37-4937-91a4-bb7f41512680',
          pitchNumber: 6,
          startTime: '2022-07-26T23:39:03.213Z',
          endTime: '2022-07-26T23:39:07.698Z',
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
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 99.0,
            endSpeed: 90.3,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 34.32,
              aZ: -9.08,
              pfxX: -4.3,
              pfxZ: 11.07,
              pX: -0.03,
              pZ: 1.5,
              vX0: 6.6,
              vY0: -143.78,
              vZ0: -9.95,
              x: 118.06,
              y: 198.23,
              x0: -1.8,
              y0: 50.01,
              z0: 5.58,
              aX: -8.98
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2276,
              spinDirection: 203
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.38,
            extension: 6.99
          },
          hitData: {
            launchSpeed: 101.4,
            launchAngle: 4.0,
            totalDistance: 110.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 110.25,
              coordY: 143.28
            }
          },
          index: 6,
          playId: '1f32100e-e38d-4631-8fbe-b2419e68a026',
          pitchNumber: 7,
          startTime: '2022-07-26T23:39:23.675Z',
          endTime: '2022-07-26T23:39:31.264Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:39:31.264Z',
      atBatIndex: 13
    },
    {
      result: {
        type: 'atBat',
        event: 'Home Run',
        eventType: 'home_run',
        description:
          'Michael Harris II homers (9) on a fly ball to right center field.',
        rbi: 1,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 14,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-26T23:42:09.407Z',
        endTime: '2022-07-26T23:43:43.428Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 75
      },
      count: {
        balls: 0,
        strikes: 2,
        outs: 0
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
            },
            responsiblePitcher: {
              id: 605400,
              link: '/api/v1/people/605400'
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
              code: 'C',
              description: 'Called Strike'
            },
            description: 'Called Strike',
            code: 'C',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.0,
            endSpeed: 72.4,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 23.26,
              aZ: -40.78,
              pfxX: 7.77,
              pfxZ: -6.49,
              pX: -0.52,
              pZ: 2.01,
              vX0: 0.53,
              vY0: -115.04,
              vZ0: 1.33,
              x: 137.0,
              y: 184.54,
              x0: -1.77,
              y0: 50.0,
              z0: 5.41,
              aX: 10.31
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2533,
              spinDirection: 56
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.72
          },
          index: 0,
          playId: 'cea5ca6b-5c2f-43a2-a2ef-cd4802a7318e',
          pitchNumber: 1,
          startTime: '2022-07-26T23:42:15.172Z',
          endTime: '2022-07-26T23:42:18.883Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 93.1,
            endSpeed: 85.2,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.83,
              aZ: -13.25,
              pfxX: -8.05,
              pfxZ: 10.17,
              pX: 0.24,
              pZ: 2.45,
              vX0: 7.77,
              vY0: -135.32,
              vZ0: -4.54,
              x: 107.94,
              y: 172.75,
              x0: -1.62,
              y0: 50.0,
              z0: 5.07,
              aX: -14.97
            },
            breaks: {
              breakAngle: 43.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2350,
              spinDirection: 223
            },
            zone: 6,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.85
          },
          index: 1,
          playId: '76345519-23c5-4e1a-9d95-104f3557fffb',
          pitchNumber: 2,
          startTime: '2022-07-26T23:42:31.110Z',
          endTime: '2022-07-26T23:42:34.771Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 81.3,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 26.12,
              aZ: -32.7,
              pfxX: -10.24,
              pfxZ: -0.31,
              pX: -0.42,
              pZ: 1.53,
              vX0: 6.49,
              vY0: -128.52,
              vZ0: -2.23,
              x: 133.18,
              y: 197.45,
              x0: -1.65,
              y0: 50.0,
              z0: 4.95,
              aX: -17.16
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1425,
              spinDirection: 258
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.68
          },
          index: 2,
          playId: '8e800b19-8aca-49dc-9c75-daeffdd3e827',
          pitchNumber: 3,
          startTime: '2022-07-26T23:42:53.035Z',
          endTime: '2022-07-26T23:42:56.485Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 94.2,
            endSpeed: 84.7,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 34.78,
              aZ: -20.21,
              pfxX: -8.55,
              pfxZ: 6.41,
              pX: -0.08,
              pZ: 3.32,
              vX0: 7.05,
              vY0: -136.84,
              vZ0: -1.22,
              x: 119.89,
              y: 149.13,
              x0: -1.6,
              y0: 50.0,
              z0: 5.18,
              aX: -15.95
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2321,
              spinDirection: 225
            },
            zone: 2,
            typeConfidence: 2.0,
            plateTime: 0.4,
            extension: 6.8
          },
          hitData: {
            launchSpeed: 100.7,
            launchAngle: 26.0,
            totalDistance: 374.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '89',
            coordinates: {
              coordX: 190.14,
              coordY: 61.95
            }
          },
          index: 3,
          playId: '8333de49-9631-4660-903a-9661a7960586',
          pitchNumber: 4,
          startTime: '2022-07-26T23:43:18.267Z',
          endTime: '2022-07-26T23:43:43.428Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:43:43.428Z',
      atBatIndex: 14
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Ronald Acuna Jr.  grounds out, shortstop Didi Gregorius to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 15,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-26T23:43:50.152Z',
        endTime: '2022-07-26T23:46:26.934Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
        strikes: 2,
        outs: 1
      },
      matchup: {
        batter: {
          id: 660670,
          fullName: 'Ronald Acuna Jr.',
          link: '/api/v1/people/660670'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
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
            outs: 0
          },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 80.4,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 25.71,
              aZ: -29.53,
              pfxX: -9.16,
              pfxZ: 1.62,
              pX: -0.28,
              pZ: 0.95,
              vX0: 6.7,
              vY0: -127.03,
              vZ0: -4.03,
              x: 127.8,
              y: 213.03,
              x0: -1.76,
              y0: 50.01,
              z0: 4.91,
              aX: -15.0
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1610,
              spinDirection: 261
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 7.22
          },
          index: 0,
          playId: '8208dfa1-5300-4084-afc8-eb4228cc473f',
          pitchNumber: 1,
          startTime: '2022-07-26T23:44:09.744Z',
          endTime: '2022-07-26T23:44:13.904Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 88.2,
            endSpeed: 81.4,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 25.43,
              aZ: -29.89,
              pfxX: -8.94,
              pfxZ: 1.36,
              pX: -0.16,
              pZ: 0.79,
              vX0: 7.14,
              vY0: -128.27,
              vZ0: -4.49,
              x: 123.25,
              y: 217.4,
              x0: -1.82,
              y0: 50.0,
              z0: 4.88,
              aX: -14.97
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1596,
              spinDirection: 256
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 7.22
          },
          index: 1,
          playId: 'a41b7dab-f39e-4051-a1c6-ce2a4a533cf9',
          pitchNumber: 2,
          startTime: '2022-07-26T23:44:26.622Z',
          endTime: '2022-07-26T23:44:30.225Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.8,
            endSpeed: 73.9,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 25.12,
              aZ: -40.98,
              pfxX: 8.0,
              pfxZ: -6.38,
              pX: 0.74,
              pZ: 1.61,
              vX0: 3.25,
              vY0: -117.62,
              vZ0: 0.56,
              x: 88.94,
              y: 195.24,
              x0: -1.71,
              y0: 50.0,
              z0: 5.21,
              aX: 11.06
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2703,
              spinDirection: 54
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.86
          },
          index: 2,
          playId: 'e55b46c7-8d8b-4d7e-9d05-9d30a9dbbf2f',
          pitchNumber: 3,
          startTime: '2022-07-26T23:44:50.242Z',
          endTime: '2022-07-26T23:44:54.177Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 94.9,
            endSpeed: 86.3,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 31.7,
              aZ: -14.7,
              pfxX: -9.36,
              pfxZ: 9.12,
              pX: 0.46,
              pZ: 2.26,
              vX0: 8.79,
              vY0: -137.81,
              vZ0: -4.96,
              x: 99.63,
              y: 177.81,
              x0: -1.57,
              y0: 50.01,
              z0: 5.08,
              aX: -17.94
            },
            breaks: {
              breakAngle: 45.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2386,
              spinDirection: 225
            },
            zone: 6,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.86
          },
          index: 3,
          playId: 'abb62bc6-c867-4280-990c-0ddbd0b5001e',
          pitchNumber: 4,
          startTime: '2022-07-26T23:45:15.123Z',
          endTime: '2022-07-26T23:45:18.639Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.7,
            endSpeed: 73.6,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 25.75,
              aZ: -40.65,
              pfxX: 7.93,
              pfxZ: -6.17,
              pX: 0.23,
              pZ: 1.38,
              vX0: 2.0,
              vY0: -117.47,
              vZ0: -0.13,
              x: 108.19,
              y: 201.54,
              x0: -1.66,
              y0: 50.0,
              z0: 5.27,
              aX: 10.9
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2608,
              spinDirection: 52
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.88
          },
          index: 4,
          playId: '9d49421f-885f-4c28-bb2b-bd161d78e204',
          pitchNumber: 5,
          startTime: '2022-07-26T23:45:46.417Z',
          endTime: '2022-07-26T23:45:50.013Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.3,
            endSpeed: 73.3,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 25.42,
              aZ: -40.35,
              pfxX: 6.03,
              pfxZ: -6.02,
              pX: 1.34,
              pZ: 1.25,
              vX0: 4.86,
              vY0: -116.74,
              vZ0: -0.3,
              x: 65.99,
              y: 205.04,
              x0: -1.57,
              y0: 50.0,
              z0: 5.23,
              aX: 8.18
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2671,
              spinDirection: 42
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 7.05
          },
          hitData: {
            launchSpeed: 78.8,
            launchAngle: -37.0,
            totalDistance: 3.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 109.23,
              coordY: 164.66
            }
          },
          index: 5,
          playId: '205137e3-7af0-45d0-a866-9b849885afe7',
          pitchNumber: 6,
          startTime: '2022-07-26T23:46:18.363Z',
          endTime: '2022-07-26T23:46:26.934Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:46:26.934Z',
      atBatIndex: 15
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Dansby Swanson grounds out, third baseman Alec Bohm to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 16,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-26T23:46:53.187Z',
        endTime: '2022-07-26T23:48:49.625Z',
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
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            playIndex: 4
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.2,
            endSpeed: 84.4,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 31.94,
              aZ: -15.32,
              pfxX: -8.87,
              pfxZ: 9.15,
              pX: -0.3,
              pZ: 3.26,
              vX0: 6.41,
              vY0: -135.49,
              vZ0: -2.07,
              x: 128.58,
              y: 150.74,
              x0: -1.56,
              y0: 50.01,
              z0: 5.12,
              aX: -16.36
            },
            breaks: {
              breakAngle: 43.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2354,
              spinDirection: 229
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.66
          },
          index: 0,
          playId: '26d90f77-1eae-4eec-b56d-f8a352965331',
          pitchNumber: 1,
          startTime: '2022-07-26T23:47:07.494Z',
          endTime: '2022-07-26T23:47:10.725Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 81.2,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 26.16,
              aZ: -27.8,
              pfxX: -10.41,
              pfxZ: 2.62,
              pX: 0.53,
              pZ: 0.78,
              vX0: 8.81,
              vY0: -128.3,
              vZ0: -4.94,
              x: 96.61,
              y: 217.64,
              x0: -1.59,
              y0: 50.0,
              z0: 4.89,
              aX: -17.38
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1543,
              spinDirection: 248
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.98
          },
          index: 1,
          playId: '5ba36049-65dd-4787-b692-07a65c1d31d7',
          pitchNumber: 2,
          startTime: '2022-07-26T23:47:28.304Z',
          endTime: '2022-07-26T23:47:32.371Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 80.9,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 26.87,
              aZ: -29.21,
              pfxX: -9.61,
              pfxZ: 1.77,
              pX: 0.51,
              pZ: 1.27,
              vX0: 8.3,
              vY0: -128.32,
              vZ0: -3.36,
              x: 97.39,
              y: 204.41,
              x0: -1.52,
              y0: 50.0,
              z0: 4.88,
              aX: -16.0
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1559,
              spinDirection: 256
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 7.2
          },
          index: 2,
          playId: '6a8da57b-4987-4b42-b11a-0e3856fb35b8',
          pitchNumber: 3,
          startTime: '2022-07-26T23:47:54.000Z',
          endTime: '2022-07-26T23:47:58.359Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 80.8,
            endSpeed: 73.9,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 24.51,
              aZ: -41.26,
              pfxX: 6.31,
              pfxZ: -6.56,
              pX: 0.49,
              pZ: 1.91,
              vX0: 2.95,
              vY0: -117.53,
              vZ0: 1.07,
              x: 98.49,
              y: 187.23,
              x0: -1.61,
              y0: 50.0,
              z0: 5.31,
              aX: 8.74
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2640,
              spinDirection: 57
            },
            zone: 9,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 6.75
          },
          index: 3,
          playId: '0bc3a620-3429-414d-ab79-136b4836f6ba',
          pitchNumber: 4,
          startTime: '2022-07-26T23:48:16.889Z',
          endTime: '2022-07-26T23:48:20.838Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 93.0,
            endSpeed: 84.7,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 30.92,
              aZ: -16.2,
              pfxX: -9.21,
              pfxZ: 8.65,
              pX: -1.06,
              pZ: 2.3,
              vX0: 4.73,
              vY0: -135.35,
              vZ0: -4.36,
              x: 157.41,
              y: 176.67,
              x0: -1.64,
              y0: 50.01,
              z0: 5.07,
              aX: -17.01
            },
            breaks: {
              breakAngle: 43.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2433,
              spinDirection: 228
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 7.06
          },
          hitData: {
            launchSpeed: 75.2,
            launchAngle: 1.0,
            totalDistance: 41.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 99.58,
              coordY: 163.64
            }
          },
          index: 4,
          playId: 'be5a2042-f720-44ca-a574-32f800bc755a',
          pitchNumber: 5,
          startTime: '2022-07-26T23:48:41.373Z',
          endTime: '2022-07-26T23:48:49.625Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:48:49.625Z',
      atBatIndex: 16
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Matt Olson grounds out, second baseman Bryson Stott to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 17,
        halfInning: 'top',
        isTopInning: true,
        inning: 3,
        startTime: '2022-07-26T23:49:04.856Z',
        endTime: '2022-07-26T23:50:27.192Z',
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
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 30.34,
              aZ: -15.64,
              pfxX: -8.38,
              pfxZ: 8.67,
              pX: -0.59,
              pZ: 2.56,
              vX0: 5.49,
              vY0: -137.23,
              vZ0: -3.88,
              x: 139.57,
              y: 169.57,
              x0: -1.53,
              y0: 50.0,
              z0: 5.06,
              aX: -15.97
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2249,
              spinDirection: 223
            },
            zone: 4,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.77
          },
          index: 0,
          playId: '37621c70-1851-47aa-bf4a-76c774ba92a3',
          pitchNumber: 1,
          startTime: '2022-07-26T23:49:29.501Z',
          endTime: '2022-07-26T23:49:32.860Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.2,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 29.77,
              aZ: -13.89,
              pfxX: -7.64,
              pfxZ: 9.59,
              pX: 0.45,
              pZ: 2.98,
              vX0: 7.99,
              vY0: -137.06,
              vZ0: -3.23,
              x: 99.97,
              y: 158.39,
              x0: -1.51,
              y0: 50.0,
              z0: 5.12,
              aX: -14.55
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2245,
              spinDirection: 221
            },
            zone: 3,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.86
          },
          index: 1,
          playId: '09256de0-004a-489b-99db-b059d1c17f88',
          pitchNumber: 2,
          startTime: '2022-07-26T23:49:54.358Z',
          endTime: '2022-07-26T23:49:58.218Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.4,
            endSpeed: 72.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 23.87,
              aZ: -41.02,
              pfxX: 6.15,
              pfxZ: -6.61,
              pX: -0.6,
              pZ: 1.22,
              vX0: 0.59,
              vY0: -115.57,
              vZ0: -0.28,
              x: 139.76,
              y: 205.8,
              x0: -1.65,
              y0: 50.0,
              z0: 5.32,
              aX: 8.23
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2510,
              spinDirection: 55
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 7.03
          },
          hitData: {
            launchSpeed: 77.5,
            launchAngle: -1.0,
            totalDistance: 29.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 166.63,
              coordY: 143.28
            }
          },
          index: 2,
          playId: '38d8ec47-c983-42db-b8e9-21fa4d16135f',
          pitchNumber: 3,
          startTime: '2022-07-26T23:50:19.410Z',
          endTime: '2022-07-26T23:50:27.192Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:50:27.192Z',
      atBatIndex: 17
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Alec Bohm singles on a sharp line drive to center fielder Michael Harris II.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 18,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2022-07-26T23:52:43.756Z',
        endTime: '2022-07-26T23:54:05.159Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 1,
        strikes: 2,
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 80.4,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 25.01,
              aZ: -28.65,
              pfxX: 1.98,
              pfxZ: 2.17,
              pX: 1.27,
              pZ: 0.6,
              vX0: 7.4,
              vY0: -126.17,
              vZ0: -6.59,
              x: 68.69,
              y: 222.64,
              x0: -1.96,
              y0: 50.0,
              z0: 5.55,
              aX: 3.2
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2486,
              spinDirection: 95
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.84
          },
          index: 0,
          playId: '6714b10a-2c79-4eeb-bcf1-a96dbea95f43',
          pitchNumber: 1,
          startTime: '2022-07-26T23:53:00.292Z',
          endTime: '2022-07-26T23:53:03.780Z',
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 96.8,
            endSpeed: 88.6,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 31.56,
              aZ: -7.8,
              pfxX: -2.77,
              pfxZ: 12.12,
              pX: -0.84,
              pZ: 2.39,
              vX0: 4.19,
              vY0: -140.83,
              vZ0: -7.65,
              x: 149.18,
              y: 174.32,
              x0: -1.99,
              y0: 50.01,
              z0: 5.64,
              aX: -5.58
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2304,
              spinDirection: 201
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.77
          },
          index: 1,
          playId: 'ace43b47-4c12-4a6e-9dc7-b3863601fe5d',
          pitchNumber: 2,
          startTime: '2022-07-26T23:53:16.180Z',
          endTime: '2022-07-26T23:53:20.101Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 97.6,
            endSpeed: 89.3,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 31.54,
              aZ: -8.9,
              pfxX: -4.06,
              pfxZ: 11.38,
              pX: 0.65,
              pZ: 3.4,
              vX0: 8.53,
              vY0: -141.9,
              vZ0: -4.96,
              x: 92.05,
              y: 147.09,
              x0: -1.86,
              y0: 50.0,
              z0: 5.73,
              aX: -8.3
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2289,
              spinDirection: 202
            },
            zone: 3,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.82
          },
          index: 2,
          playId: '39c6309f-683c-4fb6-94b1-7a8a16f4aac7',
          pitchNumber: 3,
          startTime: '2022-07-26T23:53:31.591Z',
          endTime: '2022-07-26T23:53:34.845Z',
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
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 98.9,
            endSpeed: 90.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 34.5,
              aZ: -8.9,
              pfxX: -4.29,
              pfxZ: 11.15,
              pX: -0.12,
              pZ: 3.42,
              vX0: 6.5,
              vY0: -143.86,
              vZ0: -5.13,
              x: 121.72,
              y: 146.32,
              x0: -1.86,
              y0: 50.0,
              z0: 5.79,
              aX: -8.97
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2388,
              spinDirection: 202
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.72
          },
          hitData: {
            launchSpeed: 102.1,
            launchAngle: 9.0,
            totalDistance: 205.0,
            trajectory: 'line_drive',
            hardness: 'hard',
            location: '8',
            coordinates: {
              coordX: 148.17,
              coordY: 82.17
            }
          },
          index: 3,
          playId: 'df9aa339-5a56-4eb6-853f-245354fcc73e',
          pitchNumber: 4,
          startTime: '2022-07-26T23:53:54.466Z',
          endTime: '2022-07-26T23:54:05.159Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:54:05.159Z',
      atBatIndex: 18
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Didi Gregorius strikes out on a foul tip.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 19,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2022-07-26T23:54:18.088Z',
        endTime: '2022-07-26T23:56:52.035Z',
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
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
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
                id: 518595,
                link: '/api/v1/people/518595'
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
            startSpeed: 97.2,
            endSpeed: 88.6,
            strikeZoneTop: 3.28,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 32.81,
              aZ: -12.22,
              pfxX: -3.72,
              pfxZ: 9.9,
              pX: 1.05,
              pZ: 3.34,
              vX0: 9.37,
              vY0: -141.22,
              vZ0: -4.55,
              x: 76.93,
              y: 148.56,
              x0: -1.83,
              y0: 50.0,
              z0: 5.76,
              aX: -7.49
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2284,
              spinDirection: 197
            },
            zone: 12,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.72
          },
          index: 0,
          playId: '2561a4fa-cc65-4f88-8ee7-f4f66a6a6027',
          pitchNumber: 1,
          startTime: '2022-07-26T23:54:40.988Z',
          endTime: '2022-07-26T23:54:45.116Z',
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
            startSpeed: 96.5,
            endSpeed: 88.0,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 32.33,
              aZ: -11.06,
              pfxX: -4.43,
              pfxZ: 10.59,
              pX: -0.69,
              pZ: 2.96,
              vX0: 5.29,
              vY0: -140.41,
              vZ0: -5.56,
              x: 143.34,
              y: 158.96,
              x0: -2.02,
              y0: 50.01,
              z0: 5.68,
              aX: -8.83
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2194,
              spinDirection: 201
            },
            zone: 1,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.78
          },
          index: 1,
          playId: 'd45d1d97-b2b0-49a0-8561-b74bdd3ea74a',
          pitchNumber: 2,
          startTime: '2022-07-26T23:55:03.924Z',
          endTime: '2022-07-26T23:55:07.792Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 97.2,
            endSpeed: 88.8,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 32.11,
              aZ: -8.02,
              pfxX: -2.06,
              pfxZ: 11.95,
              pX: 0.38,
              pZ: 2.37,
              vX0: 6.86,
              vY0: -141.28,
              vZ0: -7.57,
              x: 102.55,
              y: 174.74,
              x0: -1.81,
              y0: 50.0,
              z0: 5.6,
              aX: -4.17
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2371,
              spinDirection: 201
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.9
          },
          index: 2,
          playId: 'a59187f8-e9ae-4fa3-b189-4193139b0488',
          pitchNumber: 3,
          startTime: '2022-07-26T23:55:32.834Z',
          endTime: '2022-07-26T23:55:36.161Z',
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
            outs: 0
          },
          index: 3,
          playId: 'bbded754-dd9b-4629-ad58-2ea4666f8c34',
          startTime: '2022-07-26T23:56:02.335Z',
          endTime: '2022-07-26T23:56:07.630Z',
          isPitch: false,
          type: 'pickoff'
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
            balls: 1,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 96.9,
            endSpeed: 88.3,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 32.51,
              aZ: -11.93,
              pfxX: -4.64,
              pfxZ: 10.08,
              pX: -0.21,
              pZ: 3.49,
              vX0: 6.66,
              vY0: -140.92,
              vZ0: -4.13,
              x: 125.05,
              y: 144.43,
              x0: -2.01,
              y0: 50.01,
              z0: 5.75,
              aX: -9.31
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2346,
              spinDirection: 202
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.68
          },
          index: 4,
          playId: '81c11f1e-ad91-4149-82ca-89eeb3d88047',
          pitchNumber: 4,
          startTime: '2022-07-26T23:56:46.545Z',
          endTime: '2022-07-26T23:56:52.035Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:56:52.035Z',
      atBatIndex: 19
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Matt Vierling called out on strikes.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 20,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2022-07-26T23:57:00.545Z',
        endTime: '2022-07-26T23:58:25.851Z',
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
          id: 663837,
          fullName: 'Matt Vierling',
          link: '/api/v1/people/663837'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 663837,
              fullName: 'Matt Vierling',
              link: '/api/v1/people/663837'
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
                id: 518595,
                link: '/api/v1/people/518595'
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
            startSpeed: 86.2,
            endSpeed: 79.8,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 23.46,
              aZ: -26.58,
              pfxX: 2.34,
              pfxZ: 3.47,
              pX: -0.39,
              pZ: 2.75,
              vX0: 3.49,
              vY0: -125.59,
              vZ0: -2.09,
              x: 131.79,
              y: 164.57,
              x0: -2.1,
              y0: 50.0,
              z0: 5.74,
              aX: 3.77
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2361,
              spinDirection: 159
            },
            zone: 4,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.65
          },
          index: 0,
          playId: '4693f3bd-cc39-450b-a532-5f6ca1c57ff6',
          pitchNumber: 1,
          startTime: '2022-07-26T23:57:25.535Z',
          endTime: '2022-07-26T23:57:29.309Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 96.7,
            endSpeed: 88.1,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 32.72,
              aZ: -10.37,
              pfxX: -3.71,
              pfxZ: 10.95,
              pX: -0.22,
              pZ: 2.13,
              vX0: 5.94,
              vY0: -140.47,
              vZ0: -7.78,
              x: 125.38,
              y: 181.23,
              x0: -1.88,
              y0: 50.0,
              z0: 5.62,
              aX: -7.4
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2295,
              spinDirection: 201
            },
            zone: 8,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.8
          },
          index: 1,
          playId: '88f498c0-9149-49ea-b7bd-8ef87fca5ada',
          pitchNumber: 2,
          startTime: '2022-07-26T23:57:50.645Z',
          endTime: '2022-07-26T23:57:55.363Z',
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
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 97.4,
            endSpeed: 88.7,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 33.48,
              aZ: -12.18,
              pfxX: -5.01,
              pfxZ: 9.91,
              pX: 0.79,
              pZ: 2.21,
              vX0: 9.05,
              vY0: -141.44,
              vZ0: -7.35,
              x: 86.78,
              y: 179.17,
              x0: -1.8,
              y0: 50.0,
              z0: 5.63,
              aX: -10.11
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2264,
              spinDirection: 203
            },
            zone: 14,
            typeConfidence: 0.88,
            plateTime: 0.39,
            extension: 6.88
          },
          index: 2,
          playId: '995bf484-bda0-46cd-963a-1d4f4880e1ee',
          pitchNumber: 3,
          startTime: '2022-07-26T23:58:20.146Z',
          endTime: '2022-07-26T23:58:25.851Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-26T23:58:25.851Z',
      atBatIndex: 20
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Kyle Schwarber strikes out swinging.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 21,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 3,
        startTime: '2022-07-26T23:58:52.915Z',
        endTime: '2022-07-27T00:02:14.088Z',
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
          id: 656941,
          fullName: 'Kyle Schwarber',
          link: '/api/v1/people/656941'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
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
                id: 518595,
                link: '/api/v1/people/518595'
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
            startSpeed: 97.0,
            endSpeed: 88.3,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 33.26,
              aZ: -11.18,
              pfxX: -4.57,
              pfxZ: 10.48,
              pX: 0.34,
              pZ: 2.77,
              vX0: 7.88,
              vY0: -140.94,
              vZ0: -6.21,
              x: 104.0,
              y: 164.0,
              x0: -1.9,
              y0: 50.0,
              z0: 5.73,
              aX: -9.15
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2343,
              spinDirection: 198
            },
            zone: 6,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.84
          },
          index: 0,
          playId: '8819e3d5-3970-4ca6-9aed-676193e98521',
          pitchNumber: 1,
          startTime: '2022-07-26T23:59:06.313Z',
          endTime: '2022-07-26T23:59:09.588Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 97.7,
            endSpeed: 88.9,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 33.61,
              aZ: -10.02,
              pfxX: -2.94,
              pfxZ: 10.86,
              pX: -1.41,
              pZ: 3.83,
              vX0: 2.8,
              vY0: -142.18,
              vZ0: -3.74,
              x: 170.82,
              y: 135.25,
              x0: -2.03,
              y0: 50.0,
              z0: 5.81,
              aX: -6.0
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2345,
              spinDirection: 198
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.65
          },
          index: 1,
          playId: '0c651fb8-3495-4d23-8d55-0f860a106418',
          pitchNumber: 2,
          startTime: '2022-07-26T23:59:31.509Z',
          endTime: '2022-07-26T23:59:35.141Z',
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 97.0,
            endSpeed: 88.1,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 33.82,
              aZ: -8.98,
              pfxX: -2.99,
              pfxZ: 11.58,
              pX: 0.07,
              pZ: 2.98,
              vX0: 6.35,
              vY0: -141.05,
              vZ0: -5.91,
              x: 114.28,
              y: 158.37,
              x0: -1.83,
              y0: 50.0,
              z0: 5.69,
              aX: -5.99
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2293,
              spinDirection: 200
            },
            zone: 2,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.72
          },
          index: 2,
          playId: '0d9fbb45-c520-4f63-96d3-d08bc706a37d',
          pitchNumber: 3,
          startTime: '2022-07-26T23:59:56.146Z',
          endTime: '2022-07-27T00:00:00.130Z',
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
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 82.0,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 26.6,
              aZ: -28.4,
              pfxX: 1.68,
              pfxZ: 2.24,
              pX: 1.11,
              pZ: 0.11,
              vX0: 7.41,
              vY0: -128.87,
              vZ0: -8.06,
              x: 74.86,
              y: 235.84,
              x0: -2.03,
              y0: 50.0,
              z0: 5.47,
              aX: 2.82
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2354,
              spinDirection: 147
            },
            zone: 14,
            typeConfidence: 0.88,
            plateTime: 0.42,
            extension: 6.78
          },
          index: 3,
          playId: '4c102541-d1b9-4436-822f-21160cbeeca3',
          pitchNumber: 4,
          startTime: '2022-07-27T00:00:24.532Z',
          endTime: '2022-07-27T00:00:29.191Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 97.5,
            endSpeed: 88.9,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 32.75,
              aZ: -10.29,
              pfxX: -3.63,
              pfxZ: 10.79,
              pX: 0.93,
              pZ: 2.91,
              vX0: 9.1,
              vY0: -141.63,
              vZ0: -5.87,
              x: 81.43,
              y: 160.1,
              x0: -1.85,
              y0: 50.01,
              z0: 5.67,
              aX: -7.36
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2401,
              spinDirection: 200
            },
            zone: 12,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.7
          },
          index: 4,
          playId: '61cb59fa-a8d2-4371-bdf0-29bff3c2b14c',
          pitchNumber: 5,
          startTime: '2022-07-27T00:01:01.740Z',
          endTime: '2022-07-27T00:01:05.228Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 98.0,
            endSpeed: 89.4,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 33.1,
              aZ: -10.96,
              pfxX: -4.66,
              pfxZ: 10.32,
              pX: -0.79,
              pZ: 3.03,
              vX0: 4.79,
              vY0: -142.55,
              vZ0: -5.68,
              x: 147.09,
              y: 157.07,
              x0: -1.89,
              y0: 50.01,
              z0: 5.74,
              aX: -9.58
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2346,
              spinDirection: 205
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.38,
            extension: 6.94
          },
          index: 5,
          playId: 'b5d6571f-d54e-4143-9be7-ebe1d2121bde',
          pitchNumber: 6,
          startTime: '2022-07-27T00:01:37.152Z',
          endTime: '2022-07-27T00:01:40.431Z',
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
            balls: 2,
            strikes: 3,
            outs: 2
          },
          pitchData: {
            startSpeed: 87.8,
            endSpeed: 81.2,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 24.92,
              aZ: -29.67,
              pfxX: 1.69,
              pfxZ: 1.5,
              pX: -0.34,
              pZ: 1.69,
              vX0: 3.78,
              vY0: -127.86,
              vZ0: -4.08,
              x: 129.88,
              y: 193.03,
              x0: -2.05,
              y0: 50.0,
              z0: 5.62,
              aX: 2.81
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2298,
              spinDirection: 138
            },
            zone: 7,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.77
          },
          index: 6,
          playId: '5ce49889-5f81-4d8f-a0d2-a60044439099',
          pitchNumber: 7,
          startTime: '2022-07-27T00:02:08.987Z',
          endTime: '2022-07-27T00:02:14.088Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:02:14.088Z',
      atBatIndex: 21
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Austin Riley doubles (27) on a sharp line drive to left fielder Kyle Schwarber.',
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 22,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T00:04:18.387Z',
        endTime: '2022-07-27T00:05:29.268Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
      },
      count: {
        balls: 2,
        strikes: 0,
        outs: 0
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnSecond: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
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
                id: 656941,
                link: '/api/v1/people/656941'
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
            outs: 0
          },
          pitchData: {
            startSpeed: 86.7,
            endSpeed: 80.2,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 24.09,
              aZ: -28.25,
              pfxX: -8.74,
              pfxZ: 2.42,
              pX: 0.16,
              pZ: 0.71,
              vX0: 7.17,
              vY0: -126.15,
              vZ0: -4.69,
              x: 110.81,
              y: 219.67,
              x0: -1.57,
              y0: 50.0,
              z0: 4.85,
              aX: -14.18
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1563,
              spinDirection: 259
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.93
          },
          index: 0,
          playId: 'e6b410d3-5d5b-4cfa-8728-bdc54b29453b',
          pitchNumber: 1,
          startTime: '2022-07-27T00:04:37.516Z',
          endTime: '2022-07-27T00:04:41.485Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 78.1,
            endSpeed: 71.4,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 22.26,
              aZ: -39.42,
              pfxX: 9.28,
              pfxZ: -5.59,
              pX: -1.27,
              pZ: 2.9,
              vX0: -1.33,
              vY0: -113.61,
              vZ0: 3.27,
              x: 165.23,
              y: 160.53,
              x0: -1.88,
              y0: 50.0,
              z0: 5.38,
              aX: 12.04
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2553,
              spinDirection: 59
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 6.6
          },
          index: 1,
          playId: 'a0ad21c2-d5ea-4607-b4eb-5e242795af4c',
          pitchNumber: 2,
          startTime: '2022-07-27T00:04:57.508Z',
          endTime: '2022-07-27T00:05:01.479Z',
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
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 87.7,
            endSpeed: 79.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 27.8,
              aZ: -26.04,
              pfxX: -7.87,
              pfxZ: 3.75,
              pX: -0.6,
              pZ: 2.27,
              vX0: 5.55,
              vY0: -127.56,
              vZ0: -1.6,
              x: 139.73,
              y: 177.56,
              x0: -1.78,
              y0: 50.0,
              z0: 4.97,
              aX: -12.89
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1524,
              spinDirection: 256
            },
            zone: 4,
            typeConfidence: 0.85,
            plateTime: 0.43,
            extension: 6.9
          },
          hitData: {
            launchSpeed: 103.6,
            launchAngle: 14.0,
            totalDistance: 232.0,
            trajectory: 'line_drive',
            hardness: 'hard',
            location: '7',
            coordinates: {
              coordX: 43.03,
              coordY: 122.66
            }
          },
          index: 2,
          playId: 'bbda0808-d9a3-448d-84b0-c037870ea305',
          pitchNumber: 3,
          startTime: '2022-07-27T00:05:16.180Z',
          endTime: '2022-07-27T00:05:29.268Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:05:29.268Z',
      atBatIndex: 22
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: "Travis d'Arnaud strikes out swinging.",
        rbi: 0,
        awayScore: 2,
        homeScore: 0
      },
      about: {
        atBatIndex: 23,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T00:05:47.874Z',
        endTime: '2022-07-27T00:07:22.992Z',
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
          id: 518595,
          fullName: "Travis d'Arnaud",
          link: '/api/v1/people/518595'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnSecond: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
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
              id: 518595,
              fullName: "Travis d'Arnaud",
              link: '/api/v1/people/518595'
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
            outs: 0
          },
          pitchData: {
            startSpeed: 86.9,
            endSpeed: 80.2,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 24.15,
              aZ: -24.27,
              pfxX: -0.77,
              pfxZ: 4.84,
              pX: 0.26,
              pZ: 2.17,
              vX0: 5.33,
              vY0: -126.54,
              vZ0: -2.54,
              x: 107.22,
              y: 180.15,
              x0: -1.77,
              y0: 50.0,
              z0: 5.12,
              aX: -1.25
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2251,
              spinDirection: 209
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 7.12
          },
          index: 0,
          playId: '4513ed65-6811-4fa2-a97b-06cb69976d16',
          pitchNumber: 1,
          startTime: '2022-07-27T00:06:18.981Z',
          endTime: '2022-07-27T00:06:22.703Z',
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
            startSpeed: 93.4,
            endSpeed: 85.1,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 30.54,
              aZ: -16.94,
              pfxX: -5.86,
              pfxZ: 8.16,
              pX: -0.63,
              pZ: 3.22,
              vX0: 4.84,
              vY0: -135.93,
              vZ0: -2.14,
              x: 141.04,
              y: 151.79,
              x0: -1.68,
              y0: 50.0,
              z0: 5.2,
              aX: -10.94
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2217,
              spinDirection: 224
            },
            zone: 1,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 6.82
          },
          index: 1,
          playId: '406a884e-16f5-4173-bf56-36df07760bab',
          pitchNumber: 2,
          startTime: '2022-07-27T00:06:41.958Z',
          endTime: '2022-07-27T00:06:45.188Z',
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
            balls: 0,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 86.4,
            endSpeed: 78.7,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 27.6,
              aZ: -33.8,
              pfxX: -9.21,
              pfxZ: -1.03,
              pX: -0.99,
              pZ: 1.76,
              vX0: 5.3,
              vY0: -125.71,
              vZ0: -1.1,
              x: 154.67,
              y: 191.29,
              x0: -1.94,
              y0: 50.0,
              z0: 4.97,
              aX: -14.61
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1560,
              spinDirection: 258
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.83
          },
          index: 2,
          playId: 'd83134f3-0458-4f38-9ca6-e9daa5cb463e',
          pitchNumber: 3,
          startTime: '2022-07-27T00:07:17.013Z',
          endTime: '2022-07-27T00:07:22.992Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:07:22.992Z',
      atBatIndex: 23
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Eddie Rosario singles on a sharp line drive to right fielder Nick Castellanos.   Austin Riley scores.',
        rbi: 1,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 24,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T00:07:43.290Z',
        endTime: '2022-07-27T00:08:32.078Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 70
      },
      count: {
        balls: 0,
        strikes: 1,
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
      pitchIndex: [0, 1],
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
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            responsiblePitcher: {
              id: 605400,
              link: '/api/v1/people/605400'
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 86.6,
            endSpeed: 79.1,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 27.79,
              aZ: -37.27,
              pfxX: -7.55,
              pfxZ: -3.2,
              pX: -0.07,
              pZ: 1.12,
              vX0: 6.77,
              vY0: -125.9,
              vZ0: -1.91,
              x: 119.85,
              y: 208.45,
              x0: -1.83,
              y0: 50.0,
              z0: 4.93,
              aX: -12.01
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1340,
              spinDirection: 262
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.99
          },
          index: 0,
          playId: '9f2f94c1-d3ea-4f43-919a-24f443b9fe92',
          pitchNumber: 1,
          startTime: '2022-07-27T00:07:56.941Z',
          endTime: '2022-07-27T00:08:00.909Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 86.8,
            endSpeed: 79.2,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 27.21,
              aZ: -27.98,
              pfxX: -6.78,
              pfxZ: 2.61,
              pX: -0.46,
              pZ: 1.64,
              vX0: 5.78,
              vY0: -126.31,
              vZ0: -2.57,
              x: 134.47,
              y: 194.48,
              x0: -1.9,
              y0: 50.0,
              z0: 4.93,
              aX: -10.89
            },
            breaks: {
              breakAngle: 19.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1545,
              spinDirection: 254
            },
            zone: 7,
            typeConfidence: 0.8,
            plateTime: 0.43,
            extension: 6.86
          },
          hitData: {
            launchSpeed: 100.3,
            launchAngle: 17.0,
            totalDistance: 298.0,
            trajectory: 'line_drive',
            hardness: 'hard',
            location: '9',
            coordinates: {
              coordX: 158.27,
              coordY: 68.01
            }
          },
          index: 1,
          playId: 'a04a8a90-f4fb-49e5-8800-790f18f1bfac',
          pitchNumber: 2,
          startTime: '2022-07-27T00:08:21.734Z',
          endTime: '2022-07-27T00:08:32.078Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:08:32.078Z',
      atBatIndex: 24
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Marcell Ozuna strikes out swinging.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 25,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T00:09:03.577Z',
        endTime: '2022-07-27T00:11:37.071Z',
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
          id: 542303,
          fullName: 'Marcell Ozuna',
          link: '/api/v1/people/542303'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnThird: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'RISP'
        }
      },
      pitchIndex: [0, 1, 3, 4, 5],
      actionIndex: [2],
      runnerIndex: [0, 1, 2],
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
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
            event: 'Error',
            eventType: 'error',
            movementReason: 'r_adv_play',
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
              credit: 'f_throwing_error'
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
            call: {
              code: 'B',
              description: 'Ball'
            },
            description: 'Ball',
            code: 'B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.1,
            endSpeed: 72.3,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 24.19,
              aZ: -39.92,
              pfxX: 6.7,
              pfxZ: -5.85,
              pX: -0.63,
              pZ: 1.48,
              vX0: 0.78,
              vY0: -115.18,
              vZ0: 0.27,
              x: 140.93,
              y: 198.83,
              x0: -1.84,
              y0: 50.0,
              z0: 5.27,
              aX: 8.87
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2576,
              spinDirection: 54
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.78
          },
          index: 0,
          playId: '557671f7-72a4-4906-b04d-b25bab70a10a',
          pitchNumber: 1,
          startTime: '2022-07-27T00:09:24.629Z',
          endTime: '2022-07-27T00:09:28.784Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 92.8,
            endSpeed: 84.6,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 29.53,
              aZ: -19.11,
              pfxX: -10.27,
              pfxZ: 7.1,
              pX: 0.3,
              pZ: 2.89,
              vX0: 8.37,
              vY0: -134.86,
              vZ0: -2.35,
              x: 105.42,
              y: 160.87,
              x0: -1.51,
              y0: 50.0,
              z0: 5.12,
              aX: -18.9
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2261,
              spinDirection: 226
            },
            zone: 6,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 6.93
          },
          index: 1,
          playId: 'f6b8810f-f4d0-4a57-bd60-38ea6cca7786',
          pitchNumber: 2,
          startTime: '2022-07-27T00:09:48.306Z',
          endTime: '2022-07-27T00:09:59.196Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description:
              'Eddie Rosario steals (2) 2nd base.   Eddie Rosario to 3rd.  Eddie Rosario advances to 3rd, on a throwing error by catcher J.  T. Realmuto.',
            event: 'Stolen Base 2B',
            eventType: 'stolen_base_2b',
            awayScore: 3,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          index: 2,
          actionPlayId: 'f6b8810f-f4d0-4a57-bd60-38ea6cca7786',
          startTime: '2022-07-27T00:10:22.632Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: {
            id: 592696,
            link: '/api/v1/people/592696'
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
            outs: 1
          },
          pitchData: {
            startSpeed: 86.7,
            endSpeed: 79.7,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 25.46,
              aZ: -31.48,
              pfxX: -9.28,
              pfxZ: 0.43,
              pX: -1.64,
              pZ: 1.92,
              vX0: 3.78,
              vY0: -126.19,
              vZ0: -1.3,
              x: 179.42,
              y: 186.87,
              x0: -1.95,
              y0: 50.01,
              z0: 4.98,
              aX: -14.98
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1382,
              spinDirection: 260
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.63
          },
          index: 3,
          playId: 'b05c4630-477c-4284-a92e-49293b5b169e',
          pitchNumber: 3,
          startTime: '2022-07-27T00:10:39.474Z',
          endTime: '2022-07-27T00:10:43.610Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 78.7,
            endSpeed: 72.4,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.9,
              aZ: -39.52,
              pfxX: 7.17,
              pfxZ: -5.58,
              pX: 0.53,
              pZ: 1.01,
              vX0: 3.05,
              vY0: -114.54,
              vZ0: -0.74,
              x: 96.75,
              y: 211.56,
              x0: -1.75,
              y0: 50.0,
              z0: 5.23,
              aX: 9.44
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2492,
              spinDirection: 50
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 7.09
          },
          index: 4,
          playId: 'e28473d8-7d13-4d3a-af97-e6cd098b1bb6',
          pitchNumber: 4,
          startTime: '2022-07-27T00:11:03.555Z',
          endTime: '2022-07-27T00:11:07.439Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 85.1,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 31.08,
              aZ: -13.69,
              pfxX: -7.18,
              pfxZ: 9.9,
              pX: 0.77,
              pZ: 2.57,
              vX0: 8.56,
              vY0: -136.07,
              vZ0: -4.16,
              x: 87.47,
              y: 169.38,
              x0: -1.49,
              y0: 50.0,
              z0: 5.07,
              aX: -13.41
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2151,
              spinDirection: 223
            },
            zone: 14,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 7.0
          },
          index: 5,
          playId: 'fafd3514-a7bc-4238-9c48-df725bebff60',
          pitchNumber: 5,
          startTime: '2022-07-27T00:11:31.263Z',
          endTime: '2022-07-27T00:11:37.071Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:11:37.071Z',
      atBatIndex: 25
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Robinson Cano flies out sharply to right fielder Nick Castellanos.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 26,
        halfInning: 'top',
        isTopInning: true,
        inning: 4,
        startTime: '2022-07-27T00:12:02.323Z',
        endTime: '2022-07-27T00:13:10.748Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
        strikes: 0,
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            event: 'Flyout',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 84.8,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 31.05,
              aZ: -14.03,
              pfxX: -6.67,
              pfxZ: 9.77,
              pX: -1.1,
              pZ: 3.19,
              vX0: 4.07,
              vY0: -135.76,
              vZ0: -2.61,
              x: 158.88,
              y: 152.55,
              x0: -1.76,
              y0: 50.01,
              z0: 5.15,
              aX: -12.39
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2203,
              spinDirection: 223
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.65
          },
          index: 0,
          playId: '36cfbf1f-b4cb-48e9-95c1-447782abcfb6',
          pitchNumber: 1,
          startTime: '2022-07-27T00:12:13.043Z',
          endTime: '2022-07-27T00:12:16.967Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.1,
            endSpeed: 72.6,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 23.27,
              aZ: -40.06,
              pfxX: 8.37,
              pfxZ: -5.93,
              pX: -1.03,
              pZ: 1.52,
              vX0: -0.36,
              vY0: -115.19,
              vZ0: 0.4,
              x: 156.21,
              y: 197.61,
              x0: -1.95,
              y0: 50.0,
              z0: 5.25,
              aX: 11.13
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2595,
              spinDirection: 49
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 7.04
          },
          index: 1,
          playId: 'c7b145b5-590c-48a5-8f42-f5d0ad520c89',
          pitchNumber: 2,
          startTime: '2022-07-27T00:12:34.018Z',
          endTime: '2022-07-27T00:12:38.193Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 93.8,
            endSpeed: 85.1,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 32.11,
              aZ: -13.05,
              pfxX: -6.89,
              pfxZ: 10.23,
              pX: 0.37,
              pZ: 2.42,
              vX0: 7.47,
              vY0: -136.36,
              vZ0: -4.59,
              x: 102.96,
              y: 173.55,
              x0: -1.52,
              y0: 50.0,
              z0: 5.03,
              aX: -12.87
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2161,
              spinDirection: 223
            },
            zone: 6,
            typeConfidence: 0.87,
            plateTime: 0.4,
            extension: 6.93
          },
          hitData: {
            launchSpeed: 102.7,
            launchAngle: 45.0,
            totalDistance: 348.0,
            trajectory: 'fly_ball',
            hardness: 'hard',
            location: '9',
            coordinates: {
              coordX: 182.99,
              coordY: 70.85
            }
          },
          index: 2,
          playId: '218be1a4-76a2-4f7c-ae0c-9af126aea13b',
          pitchNumber: 3,
          startTime: '2022-07-27T00:13:00.468Z',
          endTime: '2022-07-27T00:13:10.748Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:13:10.748Z',
      atBatIndex: 26
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Rhys Hoskins grounds out, third baseman Austin Riley to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 27,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2022-07-27T00:15:27.345Z',
        endTime: '2022-07-27T00:18:14.165Z',
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
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
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
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 85.9,
            endSpeed: 79.3,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 25.04,
              aZ: -32.99,
              pfxX: 3.01,
              pfxZ: -0.51,
              pX: 0.93,
              pZ: 1.56,
              vX0: 6.28,
              vY0: -124.94,
              vZ0: -3.58,
              x: 81.71,
              y: 196.57,
              x0: -2.01,
              y0: 50.0,
              z0: 5.72,
              aX: 4.77
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2421,
              spinDirection: 144
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.8
          },
          index: 0,
          playId: '2ab7c9b7-8ce9-490f-80d5-e607c5f693f9',
          pitchNumber: 1,
          startTime: '2022-07-27T00:15:47.319Z',
          endTime: '2022-07-27T00:15:51.234Z',
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
            startSpeed: 86.1,
            endSpeed: 79.0,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 25.45,
              aZ: -29.5,
              pfxX: -0.04,
              pfxZ: 1.69,
              pX: 1.5,
              pZ: 3.1,
              vX0: 8.31,
              vY0: -125.12,
              vZ0: -0.66,
              x: 59.72,
              y: 155.11,
              x0: -1.86,
              y0: 50.0,
              z0: 5.78,
              aX: -0.06
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2232,
              spinDirection: 136
            },
            zone: 12,
            typeConfidence: 0.89,
            plateTime: 0.44,
            extension: 6.77
          },
          index: 1,
          playId: 'a2660ba7-db8e-470c-a7c7-05ad01302624',
          pitchNumber: 2,
          startTime: '2022-07-27T00:16:00.150Z',
          endTime: '2022-07-27T00:16:03.787Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 96.8,
            endSpeed: 87.8,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 33.91,
              aZ: -8.51,
              pfxX: -3.48,
              pfxZ: 11.91,
              pX: -0.07,
              pZ: 2.46,
              vX0: 6.47,
              vY0: -140.58,
              vZ0: -7.29,
              x: 119.83,
              y: 172.48,
              x0: -1.96,
              y0: 50.01,
              z0: 5.65,
              aX: -6.92
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2389,
              spinDirection: 200
            },
            zone: 5,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.8
          },
          index: 2,
          playId: 'd16e09d0-9502-486b-afbf-9d1b963fbc07',
          pitchNumber: 3,
          startTime: '2022-07-27T00:16:18.698Z',
          endTime: '2022-07-27T00:16:23.176Z',
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
            startSpeed: 98.0,
            endSpeed: 89.0,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 34.55,
              aZ: -10.51,
              pfxX: -2.73,
              pfxZ: 10.6,
              pX: -0.51,
              pZ: 2.77,
              vX0: 4.84,
              vY0: -142.45,
              vZ0: -6.26,
              x: 136.6,
              y: 164.08,
              x0: -1.88,
              y0: 50.0,
              z0: 5.67,
              aX: -5.57
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2233,
              spinDirection: 199
            },
            zone: 4,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 7.03
          },
          index: 3,
          playId: '79a0f292-070e-4c3a-b7ff-985b7ff55707',
          pitchNumber: 4,
          startTime: '2022-07-27T00:16:40.979Z',
          endTime: '2022-07-27T00:16:45.371Z',
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
            startSpeed: 98.9,
            endSpeed: 90.1,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 34.25,
              aZ: -8.95,
              pfxX: -3.43,
              pfxZ: 11.16,
              pX: 1.08,
              pZ: 2.09,
              vX0: 9.15,
              vY0: -143.56,
              vZ0: -8.44,
              x: 75.97,
              y: 182.38,
              x0: -1.71,
              y0: 50.0,
              z0: 5.63,
              aX: -7.14
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2338,
              spinDirection: 197
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.38,
            extension: 7.05
          },
          index: 4,
          playId: '85afa541-4058-4537-91b1-1756ffb3e91d',
          pitchNumber: 5,
          startTime: '2022-07-27T00:17:03.447Z',
          endTime: '2022-07-27T00:17:07.891Z',
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
            startSpeed: 98.6,
            endSpeed: 89.9,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 33.46,
              aZ: -9.48,
              pfxX: -3.58,
              pfxZ: 10.92,
              pX: 0.35,
              pZ: 3.46,
              vX0: 7.74,
              vY0: -143.35,
              vZ0: -4.63,
              x: 103.65,
              y: 145.26,
              x0: -1.92,
              y0: 50.01,
              z0: 5.69,
              aX: -7.44
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2361,
              spinDirection: 201
            },
            zone: 3,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.94
          },
          index: 5,
          playId: '43dc36a9-c963-4e3c-8883-71dcd56d79ea',
          pitchNumber: 6,
          startTime: '2022-07-27T00:17:19.644Z',
          endTime: '2022-07-27T00:17:24.399Z',
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
            startSpeed: 98.9,
            endSpeed: 90.1,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 34.09,
              aZ: -10.35,
              pfxX: -3.85,
              pfxZ: 10.43,
              pX: -0.73,
              pZ: 3.59,
              vX0: 5.06,
              vY0: -143.91,
              vZ0: -4.27,
              x: 144.87,
              y: 141.97,
              x0: -2.01,
              y0: 50.0,
              z0: 5.73,
              aX: -8.07
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2413,
              spinDirection: 197
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.9
          },
          index: 6,
          playId: '2feeb18b-ebd3-4c20-bd72-79a3a06d1a2f',
          pitchNumber: 7,
          startTime: '2022-07-27T00:17:42.202Z',
          endTime: '2022-07-27T00:17:45.781Z',
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
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 98.6,
            endSpeed: 90.4,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 32.02,
              aZ: -10.84,
              pfxX: -4.27,
              pfxZ: 10.21,
              pX: -0.2,
              pZ: 2.68,
              vX0: 6.14,
              vY0: -143.37,
              vZ0: -6.68,
              x: 124.55,
              y: 166.36,
              x0: -1.81,
              y0: 50.01,
              z0: 5.71,
              aX: -8.92
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2361,
              spinDirection: 196
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.38,
            extension: 6.95
          },
          hitData: {
            launchSpeed: 93.1,
            launchAngle: -13.0,
            totalDistance: 13.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 81.83,
              coordY: 150.34
            }
          },
          index: 7,
          playId: 'cecd1d3a-dcae-4f2e-9589-73695d719eb6',
          pitchNumber: 8,
          startTime: '2022-07-27T00:18:06.371Z',
          endTime: '2022-07-27T00:18:14.165Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:18:14.165Z',
      atBatIndex: 27
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'J.T. Realmuto pops out to shortstop Dansby Swanson.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 28,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2022-07-27T00:18:49.387Z',
        endTime: '2022-07-27T00:20:03.645Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 2,
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            playIndex: 4
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
            awayScore: 3,
            homeScore: 0,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          index: 0,
          startTime: '2022-07-27T00:18:49.387Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 592663,
            link: '/api/v1/people/592663'
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
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.6,
            endSpeed: 80.7,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 26.78,
              aZ: -29.6,
              pfxX: 2.32,
              pfxZ: 1.57,
              pX: 0.88,
              pZ: 0.8,
              vX0: 6.43,
              vY0: -127.4,
              vZ0: -5.91,
              x: 83.5,
              y: 217.28,
              x0: -1.98,
              y0: 50.0,
              z0: 5.49,
              aX: 3.81
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2400,
              spinDirection: 127
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 7.06
          },
          index: 1,
          playId: '512381e8-49e8-4629-b770-953c7dcca639',
          pitchNumber: 1,
          startTime: '2022-07-27T00:18:57.355Z',
          endTime: '2022-07-27T00:19:00.667Z',
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
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 98.6,
            endSpeed: 88.6,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 38.07,
              aZ: -9.44,
              pfxX: -6.18,
              pfxZ: 11.14,
              pX: 0.88,
              pZ: 3.0,
              vX0: 9.82,
              vY0: -143.11,
              vZ0: -5.97,
              x: 83.49,
              y: 157.81,
              x0: -1.82,
              y0: 50.0,
              z0: 5.73,
              aX: -12.61
            },
            breaks: {
              breakAngle: 42.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2382,
              spinDirection: 203
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.99
          },
          index: 2,
          playId: '11a9a84d-fd79-447d-beec-412364850f93',
          pitchNumber: 2,
          startTime: '2022-07-27T00:19:12.926Z',
          endTime: '2022-07-27T00:19:16.386Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 97.5,
            endSpeed: 88.3,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 35.36,
              aZ: -8.71,
              pfxX: -4.65,
              pfxZ: 11.69,
              pX: 0.4,
              pZ: 1.47,
              vX0: 7.72,
              vY0: -141.48,
              vZ0: -9.69,
              x: 101.64,
              y: 199.03,
              x0: -1.77,
              y0: 50.0,
              z0: 5.52,
              aX: -9.34
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2357,
              spinDirection: 201
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.96
          },
          index: 3,
          playId: '20611d8d-888b-4a43-9430-6e9385074058',
          pitchNumber: 3,
          startTime: '2022-07-27T00:19:32.184Z',
          endTime: '2022-07-27T00:19:36.299Z',
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
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 98.0,
            endSpeed: 88.4,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 36.55,
              aZ: -7.66,
              pfxX: -2.67,
              pfxZ: 12.07,
              pX: -0.84,
              pZ: 3.18,
              vX0: 3.98,
              vY0: -142.47,
              vZ0: -5.74,
              x: 148.87,
              y: 152.79,
              x0: -1.91,
              y0: 50.0,
              z0: 5.72,
              aX: -5.41
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2400,
              spinDirection: 195
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.87
          },
          hitData: {
            launchSpeed: 87.5,
            launchAngle: 66.0,
            totalDistance: 145.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 105.43,
              coordY: 147.39
            }
          },
          index: 4,
          playId: 'ecc30740-9a18-4c97-b41d-d1c97991ac3d',
          pitchNumber: 4,
          startTime: '2022-07-27T00:19:53.707Z',
          endTime: '2022-07-27T00:20:03.645Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:20:03.645Z',
      atBatIndex: 28
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Darick Hall flies out to center fielder Michael Harris II.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 29,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 4,
        startTime: '2022-07-27T00:20:34.855Z',
        endTime: '2022-07-27T00:22:12.888Z',
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
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
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
            startSpeed: 97.5,
            endSpeed: 89.2,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 32.26,
              aZ: -10.37,
              pfxX: -3.45,
              pfxZ: 10.72,
              pX: 0.18,
              pZ: 2.1,
              vX0: 7.18,
              vY0: -141.72,
              vZ0: -7.82,
              x: 110.25,
              y: 182.2,
              x0: -1.94,
              y0: 50.0,
              z0: 5.55,
              aX: -7.03
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2350,
              spinDirection: 203
            },
            zone: 8,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.99
          },
          index: 0,
          playId: '89592bfa-d948-45f3-a61f-190feeae3973',
          pitchNumber: 1,
          startTime: '2022-07-27T00:20:35.783Z',
          endTime: '2022-07-27T00:20:38.843Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 98.7,
            endSpeed: 89.5,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 35.86,
              aZ: -9.13,
              pfxX: -4.14,
              pfxZ: 11.23,
              pX: 0.86,
              pZ: 0.99,
              vX0: 9.18,
              vY0: -143.04,
              vZ0: -10.96,
              x: 84.12,
              y: 212.18,
              x0: -1.86,
              y0: 50.01,
              z0: 5.46,
              aX: -8.49
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2350,
              spinDirection: 204
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.38,
            extension: 7.06
          },
          index: 1,
          playId: '94efedda-ca39-42c8-b2f1-c2498bd96cf6',
          pitchNumber: 2,
          startTime: '2022-07-27T00:20:55.148Z',
          endTime: '2022-07-27T00:20:58.683Z',
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
            startSpeed: 97.9,
            endSpeed: 88.4,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 36.64,
              aZ: -8.5,
              pfxX: -4.25,
              pfxZ: 11.71,
              pX: -1.16,
              pZ: 2.09,
              vX0: 3.85,
              vY0: -142.25,
              vZ0: -8.14,
              x: 161.29,
              y: 182.31,
              x0: -1.99,
              y0: 50.01,
              z0: 5.55,
              aX: -8.6
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2378,
              spinDirection: 197
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.89
          },
          index: 2,
          playId: 'e8d48b19-66ef-4888-9a03-98247d026466',
          pitchNumber: 3,
          startTime: '2022-07-27T00:21:15.818Z',
          endTime: '2022-07-27T00:21:19.491Z',
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
            startSpeed: 98.8,
            endSpeed: 89.7,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 35.14,
              aZ: -13.75,
              pfxX: -2.46,
              pfxZ: 8.85,
              pX: -0.96,
              pZ: 4.29,
              vX0: 4.28,
              vY0: -143.79,
              vZ0: -1.65,
              x: 153.63,
              y: 122.83,
              x0: -2.15,
              y0: 50.0,
              z0: 5.74,
              aX: -5.13
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2363,
              spinDirection: 199
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.96
          },
          index: 3,
          playId: 'b51fa11d-cbd8-4bdc-96d6-2b90ec6ef89b',
          pitchNumber: 4,
          startTime: '2022-07-27T00:21:45.009Z',
          endTime: '2022-07-27T00:21:48.208Z',
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
            startSpeed: 98.1,
            endSpeed: 89.4,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 33.4,
              aZ: -9.45,
              pfxX: -5.07,
              pfxZ: 11.09,
              pX: 0.39,
              pZ: 1.92,
              vX0: 8.23,
              vY0: -142.42,
              vZ0: -8.53,
              x: 102.11,
              y: 186.94,
              x0: -1.88,
              y0: 50.0,
              z0: 5.56,
              aX: -10.4
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2366,
              spinDirection: 203
            },
            zone: 9,
            typeConfidence: 0.89,
            plateTime: 0.38,
            extension: 6.96
          },
          hitData: {
            launchSpeed: 93.2,
            launchAngle: 30.0,
            totalDistance: 349.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 100.56,
              coordY: 60.86
            }
          },
          index: 4,
          playId: '134cc3da-2bdb-47e5-a08c-b3d497b266fc',
          pitchNumber: 5,
          startTime: '2022-07-27T00:22:04.412Z',
          endTime: '2022-07-27T00:22:12.888Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:22:12.888Z',
      atBatIndex: 29
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Michael Harris II strikes out swinging.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 30,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T00:24:26.035Z',
        endTime: '2022-07-27T00:25:50.688Z',
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 86.1,
            endSpeed: 78.8,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 26.26,
              aZ: -32.74,
              pfxX: -8.43,
              pfxZ: -0.36,
              pX: -1.36,
              pZ: 1.86,
              vX0: 4.0,
              vY0: -125.32,
              vZ0: -1.09,
              x: 168.81,
              y: 188.49,
              x0: -1.89,
              y0: 50.0,
              z0: 4.99,
              aX: -13.35
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 1460,
              spinDirection: 258
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.88
          },
          index: 0,
          playId: '95325840-93c3-4dba-9e99-6647bd7b79b3',
          pitchNumber: 1,
          startTime: '2022-07-27T00:24:44.387Z',
          endTime: '2022-07-27T00:24:48.089Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 78.6,
            endSpeed: 71.9,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 23.5,
              aZ: -41.37,
              pfxX: 7.6,
              pfxZ: -7.01,
              pX: -1.44,
              pZ: 1.68,
              vX0: -1.12,
              vY0: -114.46,
              vZ0: 0.93,
              x: 171.97,
              y: 193.35,
              x0: -1.93,
              y0: 50.0,
              z0: 5.36,
              aX: 9.96
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2545,
              spinDirection: 58
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.82
          },
          index: 1,
          playId: '1caf4383-dff4-47c9-ab26-0231f2dca44a',
          pitchNumber: 2,
          startTime: '2022-07-27T00:25:03.095Z',
          endTime: '2022-07-27T00:25:06.984Z',
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
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 87.9,
            endSpeed: 80.5,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.01,
              aZ: -28.86,
              pfxX: -9.03,
              pfxZ: 2.01,
              pX: 0.1,
              pZ: 1.04,
              vX0: 7.58,
              vY0: -127.75,
              vZ0: -3.92,
              x: 113.23,
              y: 210.69,
              x0: -1.74,
              y0: 50.0,
              z0: 4.87,
              aX: -14.88
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1413,
              spinDirection: 247
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.91
          },
          index: 2,
          playId: '12ee0e86-833a-4b9e-b8c9-3c673cf7fef9',
          pitchNumber: 3,
          startTime: '2022-07-27T00:25:21.039Z',
          endTime: '2022-07-27T00:25:24.570Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 78.7,
            endSpeed: 72.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 23.08,
              aZ: -40.24,
              pfxX: 6.16,
              pfxZ: -6.13,
              pX: -0.84,
              pZ: 2.0,
              vX0: 0.33,
              vY0: -114.54,
              vZ0: 1.46,
              x: 149.0,
              y: 184.79,
              x0: -1.78,
              y0: 50.0,
              z0: 5.32,
              aX: 8.11
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2430,
              spinDirection: 56
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.72
          },
          index: 3,
          playId: 'a3239eca-254c-4aff-8fff-da09915404e8',
          pitchNumber: 4,
          startTime: '2022-07-27T00:25:45.776Z',
          endTime: '2022-07-27T00:25:50.688Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:25:50.688Z',
      atBatIndex: 30
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Ronald Acuna Jr.  strikes out on a foul tip.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 31,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T00:26:06.924Z',
        endTime: '2022-07-27T00:27:33.428Z',
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
          id: 660670,
          fullName: 'Ronald Acuna Jr.',
          link: '/api/v1/people/660670'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            outNumber: 2
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
            movementReason: null,
            runner: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
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
            startSpeed: 92.3,
            endSpeed: 84.1,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 29.41,
              aZ: -15.95,
              pfxX: -5.64,
              pfxZ: 8.89,
              pX: -0.92,
              pZ: 4.17,
              vX0: 4.1,
              vY0: -134.35,
              vZ0: 0.24,
              x: 152.25,
              y: 126.09,
              x0: -1.74,
              y0: 50.0,
              z0: 5.22,
              aX: -10.3
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2210,
              spinDirection: 227
            },
            zone: 11,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 6.81
          },
          index: 0,
          playId: 'a47470a1-edb8-4ed8-b23a-04840ef71e2d',
          pitchNumber: 1,
          startTime: '2022-07-27T00:26:24.693Z',
          endTime: '2022-07-27T00:26:31.159Z',
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
            startSpeed: 86.0,
            endSpeed: 78.9,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 24.87,
              aZ: -30.04,
              pfxX: -8.42,
              pfxZ: 1.35,
              pX: 0.92,
              pZ: 2.01,
              vX0: 8.75,
              vY0: -124.92,
              vZ0: -1.33,
              x: 81.86,
              y: 184.55,
              x0: -1.53,
              y0: 50.0,
              z0: 5.02,
              aX: -13.33
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1496,
              spinDirection: 249
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.44,
            extension: 6.8
          },
          index: 1,
          playId: '7e386292-e151-4434-85bd-53cce80bb8c7',
          pitchNumber: 2,
          startTime: '2022-07-27T00:26:49.735Z',
          endTime: '2022-07-27T00:26:54.133Z',
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
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.0,
            endSpeed: 84.8,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 29.87,
              aZ: -14.96,
              pfxX: -6.96,
              pfxZ: 9.34,
              pX: 1.19,
              pZ: 2.22,
              vX0: 9.43,
              vY0: -135.0,
              vZ0: -4.88,
              x: 71.8,
              y: 178.92,
              x0: -1.45,
              y0: 50.0,
              z0: 5.1,
              aX: -12.83
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2365,
              spinDirection: 225
            },
            zone: 14,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.88
          },
          index: 2,
          playId: 'c9041b3a-469f-4916-8adb-2f0fa077e620',
          pitchNumber: 3,
          startTime: '2022-07-27T00:27:08.470Z',
          endTime: '2022-07-27T00:27:12.524Z',
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
            balls: 1,
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.4,
            endSpeed: 80.0,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 26.64,
              aZ: -30.51,
              pfxX: -7.67,
              pfxZ: 1.02,
              pX: -0.7,
              pZ: 1.92,
              vX0: 5.17,
              vY0: -127.16,
              vZ0: -1.62,
              x: 143.81,
              y: 186.93,
              x0: -1.77,
              y0: 50.0,
              z0: 4.99,
              aX: -12.53
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1412,
              spinDirection: 248
            },
            zone: 7,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.74
          },
          index: 3,
          playId: 'e308e81b-8225-4656-b854-e13dcb866dc1',
          pitchNumber: 4,
          startTime: '2022-07-27T00:27:28.171Z',
          endTime: '2022-07-27T00:27:33.428Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:27:33.428Z',
      atBatIndex: 31
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Dansby Swanson doubles (21) on a sharp line drive to left fielder Kyle Schwarber.',
        rbi: 0,
        awayScore: 3,
        homeScore: 0
      },
      about: {
        atBatIndex: 32,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T00:27:41.350Z',
        endTime: '2022-07-27T00:28:14.540Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnSecond: {
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
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
                id: 656941,
                link: '/api/v1/people/656941'
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
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 85.0,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 29.19,
              aZ: -14.29,
              pfxX: -7.63,
              pfxZ: 9.64,
              pX: -0.25,
              pZ: 2.62,
              vX0: 6.3,
              vY0: -135.23,
              vZ0: -3.78,
              x: 126.64,
              y: 168.07,
              x0: -1.62,
              y0: 50.0,
              z0: 5.04,
              aX: -14.14
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2303,
              spinDirection: 224
            },
            zone: 4,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 7.08
          },
          hitData: {
            launchSpeed: 105.0,
            launchAngle: 20.0,
            totalDistance: 379.0,
            trajectory: 'line_drive',
            hardness: 'hard',
            location: '7',
            coordinates: {
              coordX: 83.53,
              coordY: 66.46
            }
          },
          index: 0,
          playId: '24c427c1-eb1c-4bd9-bf75-cba5174204bb',
          pitchNumber: 1,
          startTime: '2022-07-27T00:28:02.410Z',
          endTime: '2022-07-27T00:28:14.540Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:28:14.540Z',
      atBatIndex: 32
    },
    {
      result: {
        type: 'atBat',
        event: 'Home Run',
        eventType: 'home_run',
        description:
          'Matt Olson homers (19) on a fly ball to center field.   Dansby Swanson scores.',
        rbi: 2,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 33,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T00:28:29.300Z',
        endTime: '2022-07-27T00:30:33.092Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 38
      },
      count: {
        balls: 2,
        strikes: 0,
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
              id: 605400,
              link: '/api/v1/people/605400'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 2
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
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            responsiblePitcher: {
              id: 605400,
              link: '/api/v1/people/605400'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
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
              code: '*B',
              description: 'Ball In Dirt'
            },
            description: 'Ball In Dirt',
            code: '*B',
            ballColor: 'rgba(39, 161, 39, 1.0)',
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 78.7,
            endSpeed: 72.0,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 24.8,
              aZ: -40.17,
              pfxX: 8.2,
              pfxZ: -6.12,
              pX: -0.08,
              pZ: 0.6,
              vX0: 1.47,
              vY0: -114.59,
              vZ0: -1.52,
              x: 120.17,
              y: 222.49,
              x0: -1.8,
              y0: 50.0,
              z0: 5.27,
              aX: 10.71
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2630,
              spinDirection: 49
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 6.63
          },
          index: 0,
          playId: '283ebd30-6c20-4e9f-a40d-44895b5dd399',
          pitchNumber: 1,
          startTime: '2022-07-27T00:29:14.444Z',
          endTime: '2022-07-27T00:29:18.393Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 78.6,
            endSpeed: 71.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 26.31,
              aZ: -40.3,
              pfxX: 8.71,
              pfxZ: -6.31,
              pX: 0.71,
              pZ: 1.21,
              vX0: 2.9,
              vY0: -114.3,
              vZ0: -0.03,
              x: 89.81,
              y: 206.08,
              x0: -1.71,
              y0: 50.0,
              z0: 5.27,
              aX: 11.21
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2624,
              spinDirection: 54
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 6.93
          },
          index: 1,
          playId: '13dd4b0d-e3a8-4d1c-a442-0b18bd544973',
          pitchNumber: 2,
          startTime: '2022-07-27T00:29:37.862Z',
          endTime: '2022-07-27T00:29:41.812Z',
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
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 82.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 31.6,
              aZ: -15.91,
              pfxX: -8.26,
              pfxZ: 9.24,
              pX: 0.01,
              pZ: 2.04,
              vX0: 7.25,
              vY0: -132.61,
              vZ0: -4.52,
              x: 116.44,
              y: 183.77,
              x0: -1.7,
              y0: 50.0,
              z0: 4.94,
              aX: -14.54
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2355,
              spinDirection: 226
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 7.08
          },
          hitData: {
            launchSpeed: 110.1,
            launchAngle: 22.0,
            totalDistance: 416.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 165.37,
              coordY: 35.19
            }
          },
          index: 2,
          playId: '5a80c2fa-692e-4728-b445-ae171c1003b3',
          pitchNumber: 3,
          startTime: '2022-07-27T00:30:06.642Z',
          endTime: '2022-07-27T00:30:33.092Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:30:33.092Z',
      atBatIndex: 33
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Austin Riley walks.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 34,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T00:30:37.008Z',
        endTime: '2022-07-27T00:34:42.107Z',
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
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
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
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 78.7,
            endSpeed: 71.8,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 24.63,
              aZ: -40.88,
              pfxX: 7.2,
              pfxZ: -6.68,
              pX: 0.84,
              pZ: 1.14,
              vX0: 3.19,
              vY0: -114.43,
              vZ0: -0.2,
              x: 84.95,
              y: 207.87,
              x0: -1.52,
              y0: 50.0,
              z0: 5.3,
              aX: 9.38
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2611,
              spinDirection: 48
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 7.15
          },
          index: 0,
          playId: 'e9364668-dce0-4412-ae6f-a51012669423',
          pitchNumber: 1,
          startTime: '2022-07-27T00:31:04.183Z',
          endTime: '2022-07-27T00:31:09.292Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 84.5,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 27.92,
              aZ: -21.2,
              pfxX: -8.94,
              pfxZ: 6.05,
              pX: 1.9,
              pZ: 1.5,
              vX0: 11.97,
              vY0: -133.66,
              vZ0: -5.29,
              x: 44.43,
              y: 198.38,
              x0: -1.46,
              y0: 50.0,
              z0: 5.02,
              aX: -16.22
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2218,
              spinDirection: 222
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 7.13
          },
          index: 1,
          playId: '4e0ccb15-33ef-44e5-842f-4228e2892554',
          pitchNumber: 2,
          startTime: '2022-07-27T00:31:33.619Z',
          endTime: '2022-07-27T00:31:37.544Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.2,
            endSpeed: 72.6,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 24.45,
              aZ: -41.52,
              pfxX: 7.24,
              pfxZ: -7.06,
              pX: 1.45,
              pZ: 0.95,
              vX0: 4.69,
              vY0: -115.22,
              vZ0: -0.56,
              x: 61.73,
              y: 213.04,
              x0: -1.56,
              y0: 50.0,
              z0: 5.26,
              aX: 9.59
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2714,
              spinDirection: 54
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 7.12
          },
          index: 2,
          playId: '6d908685-65e0-4498-8d37-22fe5230a2d3',
          pitchNumber: 3,
          startTime: '2022-07-27T00:31:58.856Z',
          endTime: '2022-07-27T00:32:02.308Z',
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
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.2,
            endSpeed: 84.4,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 28.57,
              aZ: -24.01,
              pfxX: -10.19,
              pfxZ: 4.47,
              pX: 0.07,
              pZ: 2.43,
              vX0: 7.87,
              vY0: -134.09,
              vZ0: -2.57,
              x: 114.41,
              y: 173.09,
              x0: -1.58,
              y0: 50.0,
              z0: 5.11,
              aX: -18.58
            },
            breaks: {
              breakAngle: 34.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2297,
              spinDirection: 221
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 7.14
          },
          index: 3,
          playId: 'bc0b4f1e-8625-4755-9536-1b7fd2ff4483',
          pitchNumber: 4,
          startTime: '2022-07-27T00:32:25.476Z',
          endTime: '2022-07-27T00:32:28.949Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 80.2,
            endSpeed: 73.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 25.12,
              aZ: -40.64,
              pfxX: 7.09,
              pfxZ: -6.24,
              pX: 0.32,
              pZ: 1.4,
              vX0: 2.33,
              vY0: -116.69,
              vZ0: -0.08,
              x: 104.67,
              y: 201.07,
              x0: -1.61,
              y0: 50.0,
              z0: 5.31,
              aX: 9.63
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2701,
              spinDirection: 56
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.93
          },
          index: 4,
          playId: 'bc0e8d2a-bd70-4cb5-bcaa-17adc3011c81',
          pitchNumber: 5,
          startTime: '2022-07-27T00:32:58.483Z',
          endTime: '2022-07-27T00:33:02.015Z',
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
            startSpeed: 91.9,
            endSpeed: 83.9,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 29.31,
              aZ: -16.96,
              pfxX: -7.96,
              pfxZ: 8.41,
              pX: -1.41,
              pZ: 2.8,
              vX0: 3.55,
              vY0: -133.8,
              vZ0: -2.95,
              x: 170.75,
              y: 163.13,
              x0: -1.72,
              y0: 50.0,
              z0: 5.14,
              aX: -14.41
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2313,
              spinDirection: 227
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.96
          },
          index: 5,
          playId: '944ec951-48df-4d36-b5c0-78620acfddc7',
          pitchNumber: 6,
          startTime: '2022-07-27T00:33:27.262Z',
          endTime: '2022-07-27T00:33:31.463Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 79.2,
            endSpeed: 72.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 24.65,
              aZ: -40.51,
              pfxX: 7.79,
              pfxZ: -6.29,
              pX: -0.45,
              pZ: 1.86,
              vX0: 0.47,
              vY0: -115.28,
              vZ0: 0.98,
              x: 134.13,
              y: 188.53,
              x0: -1.67,
              y0: 50.0,
              z0: 5.39,
              aX: 10.31
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2651,
              spinDirection: 55
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.87
          },
          index: 6,
          playId: '9c0221f3-722a-42a5-9858-c0761ef739c9',
          pitchNumber: 7,
          startTime: '2022-07-27T00:33:48.606Z',
          endTime: '2022-07-27T00:33:51.664Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 4,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 80.5,
            endSpeed: 73.7,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.53,
            coordinates: {
              aY: 25.26,
              aZ: -40.82,
              pfxX: 6.41,
              pfxZ: -6.32,
              pX: 1.0,
              pZ: 0.75,
              vX0: 3.99,
              vY0: -117.1,
              vZ0: -1.42,
              x: 78.72,
              y: 218.42,
              x0: -1.56,
              y0: 50.0,
              z0: 5.24,
              aX: 8.76
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 2607,
              spinDirection: 50
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 7.13
          },
          index: 7,
          playId: '0e679468-27f9-40d0-9ad5-22fdb695fa19',
          pitchNumber: 8,
          startTime: '2022-07-27T00:34:35.545Z',
          endTime: '2022-07-27T00:34:42.107Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:34:42.107Z',
      atBatIndex: 34
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          "Travis d'Arnaud flies out to center fielder Matt Vierling.",
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 35,
        halfInning: 'top',
        isTopInning: true,
        inning: 5,
        startTime: '2022-07-27T00:34:51.975Z',
        endTime: '2022-07-27T00:36:56.845Z',
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
          id: 518595,
          fullName: "Travis d'Arnaud",
          link: '/api/v1/people/518595'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 518595,
              fullName: "Travis d'Arnaud",
              link: '/api/v1/people/518595'
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
                id: 663837,
                link: '/api/v1/people/663837'
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 83.0,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 29.86,
              aZ: -15.67,
              pfxX: -5.82,
              pfxZ: 9.28,
              pX: 0.23,
              pZ: 3.15,
              vX0: 6.8,
              vY0: -132.85,
              vZ0: -2.28,
              x: 108.15,
              y: 153.68,
              x0: -1.61,
              y0: 50.0,
              z0: 5.17,
              aX: -10.35
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2223,
              spinDirection: 222
            },
            zone: 2,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.85
          },
          index: 0,
          playId: '40b0f4ca-13c4-4bf4-a1d3-b9b10250fd1d',
          pitchNumber: 1,
          startTime: '2022-07-27T00:35:15.387Z',
          endTime: '2022-07-27T00:35:18.789Z',
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
            startSpeed: 90.3,
            endSpeed: 82.4,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 28.24,
              aZ: -15.93,
              pfxX: -7.18,
              pfxZ: 9.3,
              pX: -1.09,
              pZ: 3.37,
              vX0: 4.21,
              vY0: -131.44,
              vZ0: -1.54,
              x: 158.55,
              y: 147.71,
              x0: -1.78,
              y0: 50.01,
              z0: 5.15,
              aX: -12.54
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2267,
              spinDirection: 224
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 7.09
          },
          index: 1,
          playId: '09dd0af1-e608-45a1-88a6-955a84fdd0da',
          pitchNumber: 2,
          startTime: '2022-07-27T00:35:44.671Z',
          endTime: '2022-07-27T00:35:48.187Z',
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 86.0,
            endSpeed: 78.1,
            strikeZoneTop: 3.3,
            strikeZoneBottom: 1.49,
            coordinates: {
              aY: 28.51,
              aZ: -30.96,
              pfxX: -9.37,
              pfxZ: 0.78,
              pX: -1.82,
              pZ: 1.46,
              vX0: 3.24,
              vY0: -125.17,
              vZ0: -2.3,
              x: 186.22,
              y: 199.45,
              x0: -1.92,
              y0: 50.0,
              z0: 4.96,
              aX: -14.67
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1492,
              spinDirection: 249
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.78
          },
          index: 2,
          playId: 'a29be9fa-cdb1-4e6b-81c5-0a08e3f19550',
          pitchNumber: 3,
          startTime: '2022-07-27T00:36:23.977Z',
          endTime: '2022-07-27T00:36:28.215Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
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
            endSpeed: 71.6,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 24.51,
              aZ: -40.04,
              pfxX: 7.81,
              pfxZ: -6.03,
              pX: -0.07,
              pZ: 2.15,
              vX0: 1.58,
              vY0: -114.47,
              vZ0: 1.61,
              x: 119.76,
              y: 180.74,
              x0: -1.79,
              y0: 50.0,
              z0: 5.41,
              aX: 10.18
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2688,
              spinDirection: 55
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.94
          },
          hitData: {
            launchSpeed: 90.0,
            launchAngle: 33.0,
            totalDistance: 330.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 150.04,
              coordY: 68.59
            }
          },
          index: 3,
          playId: '5aa5624c-44e5-457a-b53c-a9cec3531a73',
          pitchNumber: 4,
          startTime: '2022-07-27T00:36:48.421Z',
          endTime: '2022-07-27T00:36:56.845Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:36:56.845Z',
      atBatIndex: 35
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Nick Castellanos grounds out, third baseman Austin Riley to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 36,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T00:39:31.895Z',
        endTime: '2022-07-27T00:40:47.565Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            outNumber: 1
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
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
            startSpeed: 96.5,
            endSpeed: 88.1,
            strikeZoneTop: 3.82,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 31.71,
              aZ: -10.14,
              pfxX: -5.01,
              pfxZ: 11.03,
              pX: -0.36,
              pZ: 3.61,
              vX0: 6.11,
              vY0: -140.41,
              vZ0: -4.22,
              x: 130.69,
              y: 141.31,
              x0: -1.91,
              y0: 50.01,
              z0: 5.79,
              aX: -10.02
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2410,
              spinDirection: 201
            },
            zone: 1,
            typeConfidence: 0.88,
            plateTime: 0.39,
            extension: 6.75
          },
          index: 0,
          playId: 'a2f3a042-cdd1-4809-be7f-c6aaf81b9041',
          pitchNumber: 1,
          startTime: '2022-07-27T00:39:47.196Z',
          endTime: '2022-07-27T00:39:50.931Z',
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.3,
            endSpeed: 87.4,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 29.86,
              aZ: -10.47,
              pfxX: -1.76,
              pfxZ: 11.14,
              pX: 0.24,
              pZ: 2.0,
              vX0: 6.56,
              vY0: -138.46,
              vZ0: -8.04,
              x: 107.96,
              y: 184.74,
              x0: -1.93,
              y0: 50.0,
              z0: 5.64,
              aX: -3.43
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2349,
              spinDirection: 190
            },
            zone: 9,
            typeConfidence: 0.86,
            plateTime: 0.4,
            extension: 6.86
          },
          index: 1,
          playId: '17997028-968f-4a67-80cd-7935cbc9a2c6',
          pitchNumber: 2,
          startTime: '2022-07-27T00:40:03.116Z',
          endTime: '2022-07-27T00:40:06.939Z',
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
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 85.2,
            endSpeed: 79.1,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 23.32,
              aZ: -29.75,
              pfxX: 3.8,
              pfxZ: 1.54,
              pX: 0.39,
              pZ: 1.31,
              vX0: 4.73,
              vY0: -124.09,
              vZ0: -4.72,
              x: 102.24,
              y: 203.52,
              x0: -2.03,
              y0: 50.0,
              z0: 5.7,
              aX: 5.96
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2366,
              spinDirection: 129
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.44,
            extension: 6.76
          },
          index: 2,
          playId: '2324dc1c-ede0-4981-b973-005a1a09ed1e',
          pitchNumber: 3,
          startTime: '2022-07-27T00:40:20.910Z',
          endTime: '2022-07-27T00:40:24.464Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 85.7,
            endSpeed: 79.5,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 23.23,
              aZ: -29.46,
              pfxX: 2.99,
              pfxZ: 1.7,
              pX: 0.5,
              pZ: 2.04,
              vX0: 5.17,
              vY0: -124.79,
              vZ0: -3.1,
              x: 98.11,
              y: 183.64,
              x0: -1.99,
              y0: 50.0,
              z0: 5.71,
              aX: 4.76
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2397,
              spinDirection: 115
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.44,
            extension: 6.97
          },
          hitData: {
            launchSpeed: 82.5,
            launchAngle: 3.0,
            totalDistance: 62.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 95.51,
              coordY: 167.71
            }
          },
          index: 3,
          playId: 'b21ad7ab-5a0d-45ed-bfa7-6b70c8258682',
          pitchNumber: 4,
          startTime: '2022-07-27T00:40:39.745Z',
          endTime: '2022-07-27T00:40:47.565Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:40:47.565Z',
      atBatIndex: 36
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Bryson Stott flies out to left fielder Eddie Rosario.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 37,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T00:41:10.263Z',
        endTime: '2022-07-27T00:42:35.419Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 3,
        strikes: 1,
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            playIndex: 4
          },
          credits: [
            {
              player: {
                id: 592696,
                link: '/api/v1/people/592696'
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 85.9,
            endSpeed: 79.7,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 23.63,
              aZ: -30.25,
              pfxX: 2.12,
              pfxZ: 1.2,
              pX: 0.46,
              pZ: 1.56,
              vX0: 5.37,
              vY0: -125.05,
              vZ0: -4.05,
              x: 99.4,
              y: 196.7,
              x0: -1.98,
              y0: 50.0,
              z0: 5.66,
              aX: 3.38
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2426,
              spinDirection: 115
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.44,
            extension: 6.92
          },
          index: 0,
          playId: '2511c359-41e9-404c-87fa-44b5f89643ae',
          pitchNumber: 1,
          startTime: '2022-07-27T00:41:20.858Z',
          endTime: '2022-07-27T00:41:24.714Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 89.8,
            endSpeed: 82.4,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 26.96,
              aZ: -19.33,
              pfxX: -9.04,
              pfxZ: 7.46,
              pX: 0.08,
              pZ: 0.83,
              vX0: 8.42,
              vY0: -130.3,
              vZ0: -8.39,
              x: 113.93,
              y: 216.26,
              x0: -2.02,
              y0: 50.0,
              z0: 5.55,
              aX: -15.58
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2076,
              spinDirection: 220
            },
            zone: 14,
            typeConfidence: 0.65,
            plateTime: 0.42,
            extension: 6.96
          },
          index: 1,
          playId: '78c85b55-e0aa-441d-8653-8e80bcdbb323',
          pitchNumber: 2,
          startTime: '2022-07-27T00:41:37.027Z',
          endTime: '2022-07-27T00:41:40.768Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 87.9,
            endSpeed: 80.4,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 26.82,
              aZ: -25.74,
              pfxX: -10.2,
              pfxZ: 3.9,
              pX: -1.35,
              pZ: 2.41,
              vX0: 5.43,
              vY0: -127.84,
              vZ0: -3.04,
              x: 168.48,
              y: 173.73,
              x0: -2.18,
              y0: 50.0,
              z0: 5.64,
              aX: -16.86
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2033,
              spinDirection: 222
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.43,
            extension: 6.74
          },
          index: 2,
          playId: '32b45e79-d5d3-4ff7-8bcd-ebe1865eebe5',
          pitchNumber: 3,
          startTime: '2022-07-27T00:41:51.783Z',
          endTime: '2022-07-27T00:41:56.048Z',
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
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 98.2,
            endSpeed: 89.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 34.7,
              aZ: -8.91,
              pfxX: -2.96,
              pfxZ: 11.34,
              pX: -1.09,
              pZ: 2.48,
              vX0: 3.82,
              vY0: -142.75,
              vZ0: -7.26,
              x: 158.42,
              y: 171.72,
              x0: -2.06,
              y0: 50.0,
              z0: 5.63,
              aX: -6.08
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2332,
              spinDirection: 205
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.38,
            extension: 6.88
          },
          index: 3,
          playId: 'b3207018-165a-4125-b687-da4265245c9f',
          pitchNumber: 4,
          startTime: '2022-07-27T00:42:07.898Z',
          endTime: '2022-07-27T00:42:12.671Z',
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
            balls: 3,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 98.3,
            endSpeed: 89.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 33.93,
              aZ: -7.33,
              pfxX: -3.22,
              pfxZ: 12.08,
              pX: 0.42,
              pZ: 2.21,
              vX0: 7.58,
              vY0: -142.74,
              vZ0: -8.21,
              x: 100.97,
              y: 179.17,
              x0: -1.85,
              y0: 50.0,
              z0: 5.59,
              aX: -6.62
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2403,
              spinDirection: 201
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.38,
            extension: 6.87
          },
          hitData: {
            launchSpeed: 76.3,
            launchAngle: 52.0,
            totalDistance: 212.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 72.02,
              coordY: 134.14
            }
          },
          index: 4,
          playId: 'e97acee0-2e99-40a9-b756-a9ed7a99dc58',
          pitchNumber: 5,
          startTime: '2022-07-27T00:42:27.710Z',
          endTime: '2022-07-27T00:42:35.419Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:42:35.419Z',
      atBatIndex: 37
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Alec Bohm singles on a line drive to right fielder Ronald Acuna Jr.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 38,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T00:42:52.715Z',
        endTime: '2022-07-27T00:43:23.426Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 0,
        strikes: 0,
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
                id: 660670,
                link: '/api/v1/people/660670'
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
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 97.9,
            endSpeed: 89.8,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 31.3,
              aZ: -9.58,
              pfxX: -4.37,
              pfxZ: 10.94,
              pX: -0.33,
              pZ: 3.27,
              vX0: 6.18,
              vY0: -142.46,
              vZ0: -5.08,
              x: 129.49,
              y: 150.6,
              x0: -1.95,
              y0: 50.0,
              z0: 5.67,
              aX: -9.03
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2404,
              spinDirection: 201
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.38,
            extension: 7.11
          },
          hitData: {
            launchSpeed: 75.7,
            launchAngle: 13.0,
            totalDistance: 163.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 191.52,
              coordY: 133.1
            }
          },
          index: 0,
          playId: '3aba8e5a-4b3b-482f-87cf-4b0b90dfb790',
          pitchNumber: 1,
          startTime: '2022-07-27T00:43:10.420Z',
          endTime: '2022-07-27T00:43:23.426Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:43:23.426Z',
      atBatIndex: 38
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Didi Gregorius flies out to left fielder Eddie Rosario.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 39,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 5,
        startTime: '2022-07-27T00:43:53.192Z',
        endTime: '2022-07-27T00:44:07.658Z',
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
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            outNumber: 3
          },
          details: {
            event: 'Flyout',
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
            playIndex: 0
          },
          credits: [
            {
              player: {
                id: 592696,
                link: '/api/v1/people/592696'
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
            outs: 2
          },
          pitchData: {
            startSpeed: 96.5,
            endSpeed: 88.3,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 31.37,
              aZ: -10.81,
              pfxX: -3.86,
              pfxZ: 10.68,
              pX: -0.68,
              pZ: 3.25,
              vX0: 5.34,
              vY0: -140.44,
              vZ0: -4.9,
              x: 142.75,
              y: 150.95,
              x0: -2.1,
              y0: 50.01,
              z0: 5.72,
              aX: -7.72
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2337,
              spinDirection: 201
            },
            zone: 1,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 6.92
          },
          hitData: {
            launchSpeed: 93.2,
            launchAngle: 28.0,
            totalDistance: 353.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 60.81,
              coordY: 72.41
            }
          },
          index: 0,
          playId: '19533aab-5259-4db1-b941-acbd7c60ef43',
          pitchNumber: 1,
          startTime: '2022-07-27T00:43:59.156Z',
          endTime: '2022-07-27T00:44:07.658Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:44:07.658Z',
      atBatIndex: 39
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Eddie Rosario strikes out swinging.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 40,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T00:46:35.836Z',
        endTime: '2022-07-27T00:48:34.290Z',
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
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            outNumber: 1
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
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
            endSpeed: 70.9,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 24.25,
              aZ: -40.07,
              pfxX: 7.32,
              pfxZ: -6.2,
              pX: 0.3,
              pZ: 1.71,
              vX0: 2.41,
              vY0: -113.23,
              vZ0: 1.01,
              x: 105.38,
              y: 192.55,
              x0: -1.73,
              y0: 50.0,
              z0: 5.33,
              aX: 9.33
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2552,
              spinDirection: 50
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.49,
            extension: 6.98
          },
          index: 0,
          playId: 'b4093487-0a26-41fe-a0cf-f014cbed102b',
          pitchNumber: 1,
          startTime: '2022-07-27T00:46:53.653Z',
          endTime: '2022-07-27T00:46:57.561Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 91.7,
            endSpeed: 83.6,
            strikeZoneTop: 3.22,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 29.64,
              aZ: -15.15,
              pfxX: -6.75,
              pfxZ: 9.49,
              pX: -0.94,
              pZ: 1.68,
              vX0: 4.79,
              vY0: -133.37,
              vZ0: -5.73,
              x: 152.96,
              y: 193.37,
              x0: -1.89,
              y0: 50.0,
              z0: 4.96,
              aX: -12.11
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2236,
              spinDirection: 222
            },
            zone: 13,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 7.08
          },
          index: 1,
          playId: '5c93de48-6322-43e6-b93c-376c21cc1ebf',
          pitchNumber: 2,
          startTime: '2022-07-27T00:47:15.150Z',
          endTime: '2022-07-27T00:47:19.125Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 77.1,
            endSpeed: 70.7,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 23.4,
              aZ: -38.54,
              pfxX: 8.24,
              pfxZ: -5.07,
              pX: -0.09,
              pZ: 0.29,
              vX0: 1.63,
              vY0: -112.23,
              vZ0: -2.04,
              x: 120.35,
              y: 230.82,
              x0: -1.9,
              y0: 50.0,
              z0: 5.2,
              aX: 10.34
            },
            breaks: {
              breakAngle: 15.6,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2652,
              spinDirection: 51
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.49,
            extension: 6.77
          },
          index: 2,
          playId: '4fe47291-11a6-44b4-9b63-e980f415a30a',
          pitchNumber: 3,
          startTime: '2022-07-27T00:47:38.147Z',
          endTime: '2022-07-27T00:47:42.595Z',
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
            startSpeed: 91.1,
            endSpeed: 82.6,
            strikeZoneTop: 3.17,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 30.6,
              aZ: -23.58,
              pfxX: -11.78,
              pfxZ: 4.92,
              pX: 1.38,
              pZ: 1.02,
              vX0: 11.47,
              vY0: -131.95,
              vZ0: -5.67,
              x: 64.52,
              y: 211.11,
              x0: -1.52,
              y0: 50.0,
              z0: 4.96,
              aX: -20.56
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2199,
              spinDirection: 230
            },
            zone: 14,
            typeConfidence: 0.86,
            plateTime: 0.42,
            extension: 6.95
          },
          index: 3,
          playId: '6c5744d7-a8dc-4489-88f8-c449c50578e4',
          pitchNumber: 4,
          startTime: '2022-07-27T00:48:06.448Z',
          endTime: '2022-07-27T00:48:10.537Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 2,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 78.3,
            endSpeed: 71.3,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 24.18,
              aZ: -39.84,
              pfxX: 6.89,
              pfxZ: -5.93,
              pX: -0.75,
              pZ: 1.53,
              vX0: 0.47,
              vY0: -113.93,
              vZ0: 0.48,
              x: 145.66,
              y: 197.39,
              x0: -1.86,
              y0: 50.01,
              z0: 5.31,
              aX: 8.91
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2578,
              spinDirection: 52
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.67
          },
          index: 4,
          playId: 'cee557d4-051f-45e6-9688-772f13ecbbfd',
          pitchNumber: 5,
          startTime: '2022-07-27T00:48:29.013Z',
          endTime: '2022-07-27T00:48:34.290Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:48:34.290Z',
      atBatIndex: 40
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Marcell Ozuna flies out to center fielder Matt Vierling.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 41,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T00:48:58.608Z',
        endTime: '2022-07-27T00:49:58.692Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 1,
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
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            event: 'Flyout',
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
            playIndex: 2
          },
          credits: [
            {
              player: {
                id: 663837,
                link: '/api/v1/people/663837'
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.3,
            endSpeed: 79.4,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 28.11,
              aZ: -26.71,
              pfxX: -8.3,
              pfxZ: 3.38,
              pX: -0.06,
              pZ: 1.33,
              vX0: 6.9,
              vY0: -126.85,
              vZ0: -3.69,
              x: 119.12,
              y: 202.99,
              x0: -1.75,
              y0: 50.0,
              z0: 4.95,
              aX: -13.4
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1523,
              spinDirection: 251
            },
            zone: 13,
            typeConfidence: 0.88,
            plateTime: 0.43,
            extension: 6.68
          },
          index: 0,
          playId: '4e1d8243-f229-4250-b761-ff36b2702932',
          pitchNumber: 1,
          startTime: '2022-07-27T00:49:06.463Z',
          endTime: '2022-07-27T00:49:09.947Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 78.8,
            endSpeed: 72.0,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 24.29,
              aZ: -39.5,
              pfxX: 7.34,
              pfxZ: -5.59,
              pX: 0.47,
              pZ: 1.2,
              vX0: 2.82,
              vY0: -114.61,
              vZ0: -0.32,
              x: 98.97,
              y: 206.46,
              x0: -1.73,
              y0: 50.0,
              z0: 5.25,
              aX: 9.61
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2739,
              spinDirection: 47
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.79
          },
          index: 1,
          playId: 'dfbeac5d-e5ba-4827-a099-473ec2176ab6',
          pitchNumber: 2,
          startTime: '2022-07-27T00:49:28.198Z',
          endTime: '2022-07-27T00:49:32.997Z',
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
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.2,
            endSpeed: 79.8,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 26.39,
              aZ: -25.63,
              pfxX: -8.78,
              pfxZ: 4.03,
              pX: -0.1,
              pZ: 1.24,
              vX0: 6.94,
              vY0: -126.73,
              vZ0: -4.1,
              x: 120.93,
              y: 205.29,
              x0: -1.74,
              y0: 50.0,
              z0: 4.93,
              aX: -14.24
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1519,
              spinDirection: 251
            },
            zone: 13,
            typeConfidence: 0.88,
            plateTime: 0.43,
            extension: 7.05
          },
          hitData: {
            launchSpeed: 86.9,
            launchAngle: 31.0,
            totalDistance: 319.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 136.76,
              coordY: 71.72
            }
          },
          index: 2,
          playId: '63e15871-48b2-495c-8955-7dac77ad6176',
          pitchNumber: 3,
          startTime: '2022-07-27T00:49:50.669Z',
          endTime: '2022-07-27T00:49:58.692Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:49:58.692Z',
      atBatIndex: 41
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description: 'Robinson Cano flies out to second baseman Bryson Stott.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 42,
        halfInning: 'top',
        isTopInning: true,
        inning: 6,
        startTime: '2022-07-27T00:50:10.774Z',
        endTime: '2022-07-27T00:51:12.166Z',
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
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 605400,
          fullName: 'Aaron Nola',
          link: '/api/v1/people/605400'
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
            event: 'Flyout',
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
            startSpeed: 86.8,
            endSpeed: 80.0,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 25.23,
              aZ: -28.65,
              pfxX: -9.41,
              pfxZ: 2.18,
              pX: -0.34,
              pZ: 0.67,
              vX0: 6.9,
              vY0: -126.28,
              vZ0: -4.52,
              x: 129.8,
              y: 220.72,
              x0: -1.88,
              y0: 50.0,
              z0: 4.78,
              aX: -15.23
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1594,
              spinDirection: 251
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.77
          },
          index: 0,
          playId: '98a71a55-a163-4368-a634-95c45d4b1381',
          pitchNumber: 1,
          startTime: '2022-07-27T00:50:37.411Z',
          endTime: '2022-07-27T00:50:41.076Z',
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
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.6,
            endSpeed: 83.8,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 31.72,
              aZ: -16.97,
              pfxX: -9.1,
              pfxZ: 8.36,
              pX: 0.47,
              pZ: 3.11,
              vX0: 8.26,
              vY0: -134.57,
              vZ0: -2.25,
              x: 99.24,
              y: 154.83,
              x0: -1.48,
              y0: 50.0,
              z0: 5.17,
              aX: -16.53
            },
            breaks: {
              breakAngle: 39.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2385,
              spinDirection: 221
            },
            zone: 3,
            typeConfidence: 0.86,
            plateTime: 0.41,
            extension: 7.14
          },
          hitData: {
            launchSpeed: 92.6,
            launchAngle: 62.0,
            totalDistance: 188.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 174.25,
              coordY: 137.17
            }
          },
          index: 1,
          playId: '8f36a03f-e370-4c63-ac5a-2010e267257a',
          pitchNumber: 2,
          startTime: '2022-07-27T00:51:02.138Z',
          endTime: '2022-07-27T00:51:12.166Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:51:12.166Z',
      atBatIndex: 42
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Matt Vierling grounds out softly, pitcher Spencer Strider to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 5,
        homeScore: 0
      },
      about: {
        atBatIndex: 43,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T00:53:34.678Z',
        endTime: '2022-07-27T00:54:02.663Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 1,
        outs: 1
      },
      matchup: {
        batter: {
          id: 663837,
          fullName: 'Matt Vierling',
          link: '/api/v1/people/663837'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 663837,
              fullName: 'Matt Vierling',
              link: '/api/v1/people/663837'
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
                id: 675911,
                link: '/api/v1/people/675911'
              },
              position: {
                code: '1',
                name: 'Pitcher',
                type: 'Pitcher',
                abbreviation: 'P'
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
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 85.2,
            endSpeed: 79.0,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 22.96,
              aZ: -28.06,
              pfxX: 1.6,
              pfxZ: 2.62,
              pX: 0.16,
              pZ: 2.17,
              vX0: 4.58,
              vY0: -124.17,
              vZ0: -3.1,
              x: 111.04,
              y: 180.2,
              x0: -1.91,
              y0: 50.0,
              z0: 5.75,
              aX: 2.51
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2330,
              spinDirection: 133
            },
            zone: 8,
            typeConfidence: 0.89,
            plateTime: 0.44,
            extension: 6.77
          },
          index: 0,
          playId: '0d18e0e5-0ab4-4fa4-b744-df427859bdc3',
          pitchNumber: 1,
          startTime: '2022-07-27T00:53:41.007Z',
          endTime: '2022-07-27T00:53:44.685Z',
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 85.7,
            endSpeed: 78.9,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 25.29,
              aZ: -29.77,
              pfxX: 1.0,
              pfxZ: 1.53,
              pX: 1.14,
              pZ: 1.53,
              vX0: 7.06,
              vY0: -124.6,
              vZ0: -4.21,
              x: 73.39,
              y: 197.52,
              x0: -1.86,
              y0: 50.0,
              z0: 5.7,
              aX: 1.57
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2439,
              spinDirection: 124
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.44,
            extension: 6.86
          },
          hitData: {
            launchSpeed: 58.2,
            launchAngle: -74.0,
            totalDistance: 2.0,
            trajectory: 'ground_ball',
            hardness: 'soft',
            location: '1',
            coordinates: {
              coordX: 125.08,
              coordY: 197.69
            }
          },
          index: 1,
          playId: '442246d4-6f1f-409c-8e0d-78bf00027278',
          pitchNumber: 2,
          startTime: '2022-07-27T00:53:54.947Z',
          endTime: '2022-07-27T00:54:02.663Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:54:02.663Z',
      atBatIndex: 43
    },
    {
      result: {
        type: 'atBat',
        event: 'Home Run',
        eventType: 'home_run',
        description:
          'Kyle Schwarber homers (31) on a fly ball to center field.',
        rbi: 1,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 44,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T00:54:36.114Z',
        endTime: '2022-07-27T00:55:23.080Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 38
      },
      count: {
        balls: 1,
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
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
            },
            responsiblePitcher: {
              id: 675911,
              link: '/api/v1/people/675911'
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
            startSpeed: 96.6,
            endSpeed: 88.1,
            strikeZoneTop: 3.42,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 32.5,
              aZ: -10.13,
              pfxX: -3.35,
              pfxZ: 11.11,
              pX: -0.06,
              pZ: 1.24,
              vX0: 6.36,
              vY0: -140.17,
              vZ0: -10.02,
              x: 119.3,
              y: 205.42,
              x0: -1.93,
              y0: 50.01,
              z0: 5.52,
              aX: -6.65
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2363,
              spinDirection: 202
            },
            zone: 13,
            typeConfidence: 0.88,
            plateTime: 0.39,
            extension: 6.86
          },
          index: 0,
          playId: 'a9921780-32fe-4dc4-a4db-00ecc2a4bc11',
          pitchNumber: 1,
          startTime: '2022-07-27T00:54:40.422Z',
          endTime: '2022-07-27T00:54:44.445Z',
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
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 97.9,
            endSpeed: 88.7,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 35.42,
              aZ: -10.17,
              pfxX: -3.22,
              pfxZ: 10.85,
              pX: -0.13,
              pZ: 2.44,
              vX0: 6.6,
              vY0: -142.19,
              vZ0: -6.94,
              x: 122.08,
              y: 172.87,
              x0: -2.08,
              y0: 50.0,
              z0: 5.57,
              aX: -6.54
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2403,
              spinDirection: 207
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.85
          },
          hitData: {
            launchSpeed: 105.9,
            launchAngle: 29.0,
            totalDistance: 416.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 96.44,
              coordY: 33.25
            }
          },
          index: 1,
          playId: 'f5be3adf-0801-458b-bdcd-421ab155f659',
          pitchNumber: 2,
          startTime: '2022-07-27T00:54:56.781Z',
          endTime: '2022-07-27T00:55:23.080Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:55:23.080Z',
      atBatIndex: 44
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Rhys Hoskins called out on strikes.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 45,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T00:55:40.189Z',
        endTime: '2022-07-27T00:56:57.861Z',
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
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            playIndex: 3
          },
          credits: [
            {
              player: {
                id: 518595,
                link: '/api/v1/people/518595'
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
            startSpeed: 97.6,
            endSpeed: 88.6,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 34.35,
              aZ: -9.28,
              pfxX: -3.31,
              pfxZ: 11.28,
              pX: -0.81,
              pZ: 3.75,
              vX0: 4.33,
              vY0: -142.0,
              vZ0: -3.9,
              x: 147.75,
              y: 137.63,
              x0: -1.92,
              y0: 50.0,
              z0: 5.74,
              aX: -6.71
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2333,
              spinDirection: 201
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.78
          },
          index: 0,
          playId: '414aea5f-d6e3-4702-a321-6a8020ed342f',
          pitchNumber: 1,
          startTime: '2022-07-27T00:55:55.632Z',
          endTime: '2022-07-27T00:55:58.852Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 97.0,
            endSpeed: 88.2,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 33.36,
              aZ: -8.29,
              pfxX: -3.01,
              pfxZ: 11.89,
              pX: -0.04,
              pZ: 3.61,
              vX0: 6.61,
              vY0: -141.12,
              vZ0: -4.34,
              x: 118.64,
              y: 141.29,
              x0: -2.03,
              y0: 50.01,
              z0: 5.71,
              aX: -6.04
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2394,
              spinDirection: 200
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.97
          },
          index: 1,
          playId: 'd82c7942-6d1e-497c-aca4-ec57613323b5',
          pitchNumber: 2,
          startTime: '2022-07-27T00:56:11.994Z',
          endTime: '2022-07-27T00:56:15.244Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 86.2,
            endSpeed: 79.5,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 25.92,
              aZ: -28.57,
              pfxX: 0.63,
              pfxZ: 2.29,
              pX: 2.04,
              pZ: -0.27,
              vX0: 9.62,
              vY0: -124.92,
              vZ0: -8.3,
              x: 39.38,
              y: 246.16,
              x0: -1.95,
              y0: 50.0,
              z0: 5.45,
              aX: 0.98
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2201,
              spinDirection: 130
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.44,
            extension: 6.87
          },
          index: 2,
          playId: '4180cde8-66a9-43bc-b113-6c4ed9746762',
          pitchNumber: 3,
          startTime: '2022-07-27T00:56:33.035Z',
          endTime: '2022-07-27T00:56:36.513Z',
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
            balls: 1,
            strikes: 3,
            outs: 1
          },
          pitchData: {
            startSpeed: 84.4,
            endSpeed: 77.9,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 23.66,
              aZ: -32.51,
              pfxX: 2.18,
              pfxZ: -0.22,
              pX: 0.51,
              pZ: 2.53,
              vX0: 5.53,
              vY0: -122.86,
              vZ0: -1.08,
              x: 97.49,
              y: 170.45,
              x0: -2.05,
              y0: 50.01,
              z0: 5.73,
              aX: 3.35
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2333,
              spinDirection: 101
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.45,
            extension: 6.86
          },
          index: 3,
          playId: '96d52311-d6fb-4294-a6af-7ff88b9aad20',
          pitchNumber: 4,
          startTime: '2022-07-27T00:56:52.114Z',
          endTime: '2022-07-27T00:56:57.861Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T00:56:57.861Z',
      atBatIndex: 45
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'J.T. Realmuto walks.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 46,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T00:57:15.969Z',
        endTime: '2022-07-27T01:00:47.237Z',
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
          id: 592663,
          fullName: 'J.T. Realmuto',
          link: '/api/v1/people/592663'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
      pitchIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            responsiblePitcher: null,
            isScoringEvent: false,
            rbi: false,
            earned: false,
            teamUnearned: false,
            playIndex: 8
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
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 85.8,
            endSpeed: 79.6,
            strikeZoneTop: 3.69,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 23.91,
              aZ: -30.06,
              pfxX: 2.95,
              pfxZ: 1.33,
              pX: 1.0,
              pZ: 0.83,
              vX0: 5.94,
              vY0: -124.86,
              vZ0: -5.64,
              x: 78.74,
              y: 216.37,
              x0: -1.78,
              y0: 50.0,
              z0: 5.58,
              aX: 4.68
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2255,
              spinDirection: 138
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.44,
            extension: 6.91
          },
          index: 0,
          playId: '980a1824-c48b-42d8-bb65-ecc7f3bba573',
          pitchNumber: 1,
          startTime: '2022-07-27T00:57:31.898Z',
          endTime: '2022-07-27T00:57:36.348Z',
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
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 97.0,
            endSpeed: 87.8,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 34.97,
              aZ: -8.65,
              pfxX: -3.55,
              pfxZ: 11.81,
              pX: -0.0,
              pZ: 2.66,
              vX0: 6.51,
              vY0: -140.96,
              vZ0: -6.88,
              x: 117.05,
              y: 167.06,
              x0: -1.89,
              y0: 50.0,
              z0: 5.7,
              aX: -7.07
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2385,
              spinDirection: 203
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.79
          },
          index: 1,
          playId: 'c626a286-b8e3-4a62-b12e-0c65f3a1ebe4',
          pitchNumber: 2,
          startTime: '2022-07-27T00:57:51.469Z',
          endTime: '2022-07-27T00:57:54.917Z',
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 97.4,
            endSpeed: 87.9,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 36.46,
              aZ: -9.6,
              pfxX: -3.03,
              pfxZ: 11.29,
              pX: -0.52,
              pZ: 2.0,
              vX0: 5.52,
              vY0: -141.45,
              vZ0: -8.14,
              x: 136.71,
              y: 184.87,
              x0: -2.11,
              y0: 50.0,
              z0: 5.55,
              aX: -6.06
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2479,
              spinDirection: 203
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 7.0
          },
          index: 2,
          playId: 'cb66b9ca-dd05-4cda-ae79-36caec46ebcf',
          pitchNumber: 3,
          startTime: '2022-07-27T00:58:11.548Z',
          endTime: '2022-07-27T00:58:15.349Z',
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
            startSpeed: 98.5,
            endSpeed: 89.1,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 36.15,
              aZ: -9.13,
              pfxX: -3.17,
              pfxZ: 11.28,
              pX: 1.79,
              pZ: 1.89,
              vX0: 11.03,
              vY0: -142.78,
              vZ0: -8.72,
              x: 48.61,
              y: 187.74,
              x0: -1.72,
              y0: 50.01,
              z0: 5.58,
              aX: -6.48
            },
            breaks: {
              breakAngle: 18.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2484,
              spinDirection: 200
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.97
          },
          index: 3,
          playId: '26375c02-2e0c-4229-ba3b-ab794f746616',
          pitchNumber: 4,
          startTime: '2022-07-27T00:58:31.721Z',
          endTime: '2022-07-27T00:58:35.398Z',
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
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 85.6,
            endSpeed: 78.4,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 27.41,
              aZ: -33.49,
              pfxX: 2.42,
              pfxZ: -0.85,
              pX: 1.29,
              pZ: 1.46,
              vX0: 7.11,
              vY0: -124.5,
              vZ0: -3.48,
              x: 67.8,
              y: 199.35,
              x0: -1.93,
              y0: 50.01,
              z0: 5.68,
              aX: 3.76
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2428,
              spinDirection: 116
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.44,
            extension: 6.87
          },
          index: 4,
          playId: 'de14f7bb-f2cb-48ab-998b-195eb0807913',
          pitchNumber: 5,
          startTime: '2022-07-27T00:58:54.637Z',
          endTime: '2022-07-27T00:58:58.244Z',
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
            startSpeed: 97.5,
            endSpeed: 88.6,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 34.57,
              aZ: -12.39,
              pfxX: -3.84,
              pfxZ: 9.76,
              pX: -1.63,
              pZ: 3.32,
              vX0: 2.63,
              vY0: -141.97,
              vZ0: -4.46,
              x: 179.02,
              y: 149.13,
              x0: -2.07,
              y0: 50.0,
              z0: 5.71,
              aX: -7.79
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2353,
              spinDirection: 206
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.99
          },
          index: 5,
          playId: 'f7d90354-8bf3-4850-a271-f87341015c43',
          pitchNumber: 6,
          startTime: '2022-07-27T00:59:32.964Z',
          endTime: '2022-07-27T00:59:36.697Z',
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
            startSpeed: 96.8,
            endSpeed: 87.9,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 33.78,
              aZ: -10.69,
              pfxX: -3.05,
              pfxZ: 10.75,
              pX: -0.49,
              pZ: 3.7,
              vX0: 5.07,
              vY0: -140.89,
              vZ0: -3.87,
              x: 135.6,
              y: 138.75,
              x0: -1.92,
              y0: 50.0,
              z0: 5.8,
              aX: -6.1
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2357,
              spinDirection: 201
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.89
          },
          index: 6,
          playId: '17807fab-03ce-4490-9859-9086c9c3322e',
          pitchNumber: 7,
          startTime: '2022-07-27T00:59:53.167Z',
          endTime: '2022-07-27T00:59:56.973Z',
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
            startSpeed: 97.2,
            endSpeed: 88.3,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 33.81,
              aZ: -7.28,
              pfxX: -4.12,
              pfxZ: 12.4,
              pX: 0.04,
              pZ: 2.2,
              vX0: 6.91,
              vY0: -141.16,
              vZ0: -8.16,
              x: 115.58,
              y: 179.28,
              x0: -1.92,
              y0: 50.01,
              z0: 5.61,
              aX: -8.27
            },
            breaks: {
              breakAngle: 36.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2405,
              spinDirection: 200
            },
            zone: 8,
            typeConfidence: 0.89,
            plateTime: 0.39,
            extension: 7.07
          },
          index: 7,
          playId: '3ed1223e-9470-41bb-bc93-6850d581b3dd',
          pitchNumber: 8,
          startTime: '2022-07-27T01:00:19.067Z',
          endTime: '2022-07-27T01:00:22.101Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 97.2,
            endSpeed: 88.0,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 34.58,
              aZ: -8.27,
              pfxX: -3.4,
              pfxZ: 11.95,
              pX: 1.12,
              pZ: 3.42,
              vX0: 9.57,
              vY0: -141.13,
              vZ0: -4.92,
              x: 74.43,
              y: 146.43,
              x0: -1.89,
              y0: 50.0,
              z0: 5.73,
              aX: -6.8
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2377,
              spinDirection: 200
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 7.01
          },
          index: 8,
          playId: 'dc16a733-8c61-47be-93de-0cf884e103b3',
          pitchNumber: 9,
          startTime: '2022-07-27T01:00:40.861Z',
          endTime: '2022-07-27T01:00:47.237Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:00:47.237Z',
      atBatIndex: 46
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Darick Hall pops out to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 47,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 6,
        startTime: '2022-07-27T01:00:58.715Z',
        endTime: '2022-07-27T01:02:32.699Z',
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
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 675911,
          fullName: 'Spencer Strider',
          link: '/api/v1/people/675911'
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
            event: 'Pop Out',
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
            playIndex: 3
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
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 5,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 2
          },
          index: 0,
          startTime: '2022-07-27T01:00:58.715Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 669742,
            link: '/api/v1/people/669742'
          }
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
            strikes: 0,
            outs: 2
          },
          index: 1,
          playId: '42f31e19-2ee8-4e2f-982d-6cc4237d9bd3',
          startTime: '2022-07-27T01:01:38.730Z',
          endTime: '2022-07-27T01:01:42.067Z',
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
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 95.2,
            endSpeed: 86.7,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.78,
            coordinates: {
              aY: 31.87,
              aZ: -12.75,
              pfxX: -1.71,
              pfxZ: 10.02,
              pX: -0.85,
              pZ: 4.06,
              vX0: 3.75,
              vY0: -138.56,
              vZ0: -2.38,
              x: 149.51,
              y: 129.1,
              x0: -2.0,
              y0: 50.0,
              z0: 5.79,
              aX: -3.31
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2280,
              spinDirection: 198
            },
            zone: 11,
            typeConfidence: 0.88,
            plateTime: 0.4,
            extension: 6.9
          },
          index: 2,
          playId: 'be4d10bb-ace8-4fc2-8719-9034057e2939',
          pitchNumber: 1,
          startTime: '2022-07-27T01:01:58.419Z',
          endTime: '2022-07-27T01:02:01.965Z',
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
            balls: 1,
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 95.2,
            endSpeed: 86.6,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 32.07,
              aZ: -14.06,
              pfxX: -5.22,
              pfxZ: 9.39,
              pX: 0.45,
              pZ: 3.02,
              vX0: 8.26,
              vY0: -138.32,
              vZ0: -4.57,
              x: 100.0,
              y: 157.37,
              x0: -1.91,
              y0: 50.01,
              z0: 5.64,
              aX: -10.07
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2209,
              spinDirection: 204
            },
            zone: 6,
            typeConfidence: 0.85,
            plateTime: 0.4,
            extension: 6.94
          },
          hitData: {
            launchSpeed: 97.7,
            launchAngle: 70.0,
            totalDistance: 118.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '3',
            coordinates: {
              coordX: 152.92,
              coordY: 160.58
            }
          },
          index: 3,
          playId: 'd76a9018-eaa6-42ad-92b8-eb8e16dee935',
          pitchNumber: 2,
          startTime: '2022-07-27T01:02:22.574Z',
          endTime: '2022-07-27T01:02:32.699Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:02:32.699Z',
      atBatIndex: 47
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Michael Harris II strikes out swinging.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 48,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2022-07-27T01:04:42.355Z',
        endTime: '2022-07-27T01:07:56.865Z',
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
          id: 671739,
          fullName: 'Michael Harris II',
          link: '/api/v1/people/671739'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 544727,
          fullName: 'Jeurys Familia',
          link: '/api/v1/people/544727'
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
      pitchIndex: [1, 3, 4, 5, 6, 7],
      actionIndex: [0, 2],
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
            playIndex: 7
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
            description: 'Pitching Change: Jeurys Familia replaces Aaron Nola.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 5,
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
          startTime: '2022-07-27T01:04:42.355Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 544727,
            link: '/api/v1/people/544727'
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
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 89.4,
            endSpeed: 82.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 24.83,
              aZ: -25.98,
              pfxX: -0.91,
              pfxZ: 3.58,
              pX: 0.9,
              pZ: 3.28,
              vX0: 5.97,
              vY0: -130.15,
              vZ0: -2.58,
              x: 82.57,
              y: 150.34,
              x0: -1.29,
              y0: 50.0,
              z0: 6.23,
              aX: -1.58
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2216,
              spinDirection: 234
            },
            zone: 12,
            typeConfidence: 0.88,
            plateTime: 0.42,
            extension: 5.44
          },
          index: 1,
          playId: 'c46df511-c261-4f07-97b8-0f420a8ca2e4',
          pitchNumber: 1,
          startTime: '2022-07-27T01:05:50.807Z',
          endTime: '2022-07-27T01:05:58.957Z',
          isPitch: true,
          type: 'pitch'
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
          count: {
            balls: 1,
            strikes: 0,
            outs: 0
          },
          index: 2,
          startTime: '2022-07-27T01:06:18.618Z',
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
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 96.5,
            endSpeed: 88.0,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 33.06,
              aZ: -22.6,
              pfxX: -8.72,
              pfxZ: 4.85,
              pX: 1.14,
              pZ: 1.56,
              vX0: 8.98,
              vY0: -139.98,
              vZ0: -8.44,
              x: 73.64,
              y: 196.62,
              x0: -0.99,
              y0: 50.0,
              z0: 6.11,
              aX: -17.23
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2342,
              spinDirection: 225
            },
            zone: 14,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 5.9
          },
          index: 3,
          playId: '820a8f34-927f-4844-9dce-4023af330d31',
          pitchNumber: 2,
          startTime: '2022-07-27T01:06:33.396Z',
          endTime: '2022-07-27T01:06:37.697Z',
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
            balls: 3,
            strikes: 0,
            outs: 0
          },
          pitchData: {
            startSpeed: 95.5,
            endSpeed: 87.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 30.22,
              aZ: -22.97,
              pfxX: -7.89,
              pfxZ: 4.71,
              pX: 1.11,
              pZ: 2.67,
              vX0: 8.8,
              vY0: -138.78,
              vZ0: -5.66,
              x: 74.56,
              y: 166.61,
              x0: -1.07,
              y0: 50.01,
              z0: 6.26,
              aX: -15.44
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2381,
              spinDirection: 229
            },
            zone: 12,
            typeConfidence: 2.0,
            plateTime: 0.39,
            extension: 5.72
          },
          index: 4,
          playId: '16bf925d-ebc6-4b11-a38a-4322cfe6dfd8',
          pitchNumber: 3,
          startTime: '2022-07-27T01:06:50.717Z',
          endTime: '2022-07-27T01:06:55.125Z',
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
            startSpeed: 94.8,
            endSpeed: 86.5,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 31.82,
              aZ: -17.97,
              pfxX: -7.52,
              pfxZ: 7.41,
              pX: -0.43,
              pZ: 2.39,
              vX0: 5.42,
              vY0: -137.87,
              vZ0: -6.61,
              x: 133.5,
              y: 174.17,
              x0: -1.45,
              y0: 50.0,
              z0: 6.04,
              aX: -14.42
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2284,
              spinDirection: 230
            },
            zone: 4,
            typeConfidence: 0.87,
            plateTime: 0.4,
            extension: 5.33
          },
          index: 5,
          playId: 'c3ad4702-4125-4188-bdf1-7475b8fbab36',
          pitchNumber: 4,
          startTime: '2022-07-27T01:07:07.826Z',
          endTime: '2022-07-27T01:07:11.708Z',
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
            balls: 3,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 88.4,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.57,
            coordinates: {
              aY: 31.64,
              aZ: -32.88,
              pfxX: -8.86,
              pfxZ: -0.36,
              pX: -0.07,
              pZ: 3.25,
              vX0: 6.59,
              vY0: -140.28,
              vZ0: -2.27,
              x: 119.8,
              y: 151.15,
              x0: -1.3,
              y0: 50.0,
              z0: 6.21,
              aX: -17.67
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2234,
              spinDirection: 230
            },
            zone: 2,
            typeConfidence: 0.94,
            plateTime: 0.39,
            extension: 5.78
          },
          index: 6,
          playId: '28fb37d5-076a-4e5a-870b-dd087ca3c793',
          pitchNumber: 5,
          startTime: '2022-07-27T01:07:26.860Z',
          endTime: '2022-07-27T01:07:30.625Z',
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
            balls: 3,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 97.8,
            endSpeed: 88.9,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 34.58,
              aZ: -15.22,
              pfxX: -6.81,
              pfxZ: 8.34,
              pX: -0.15,
              pZ: 2.71,
              vX0: 5.46,
              vY0: -142.14,
              vZ0: -6.41,
              x: 122.76,
              y: 165.73,
              x0: -1.22,
              y0: 50.01,
              z0: 5.97,
              aX: -13.84
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2425,
              spinDirection: 236
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 5.76
          },
          index: 7,
          playId: 'ace116f2-3466-40c1-80f8-1e2d7f253c95',
          pitchNumber: 6,
          startTime: '2022-07-27T01:07:52.371Z',
          endTime: '2022-07-27T01:07:56.865Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:07:56.865Z',
      atBatIndex: 48
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Ronald Acuna Jr.  flies out to left fielder Kyle Schwarber.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 49,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2022-07-27T01:08:09.338Z',
        endTime: '2022-07-27T01:10:33.166Z',
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
          id: 660670,
          fullName: 'Ronald Acuna Jr.',
          link: '/api/v1/people/660670'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 544727,
          fullName: 'Jeurys Familia',
          link: '/api/v1/people/544727'
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
            outNumber: 2
          },
          details: {
            event: 'Flyout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
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
                id: 656941,
                link: '/api/v1/people/656941'
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
            trailColor: 'rgba(119, 0, 152, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'FS',
              description: 'Splitter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.5,
            endSpeed: 85.8,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 29.98,
              aZ: -22.19,
              pfxX: -9.93,
              pfxZ: 5.37,
              pX: 1.45,
              pZ: 0.49,
              vX0: 9.85,
              vY0: -135.52,
              vZ0: -10.69,
              x: 61.65,
              y: 225.56,
              x0: -0.94,
              y0: 50.0,
              z0: 6.04,
              aX: -18.44
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1799,
              spinDirection: 234
            },
            zone: 14,
            typeConfidence: 0.76,
            plateTime: 0.4,
            extension: 5.98
          },
          index: 0,
          playId: 'b09c854a-6876-443f-a9ec-97b0d939d7ad',
          pitchNumber: 1,
          startTime: '2022-07-27T01:08:31.378Z',
          endTime: '2022-07-27T01:08:34.987Z',
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
            strikes: 0,
            outs: 1
          },
          pitchData: {
            startSpeed: 96.7,
            endSpeed: 89.4,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 28.21,
              aZ: -26.95,
              pfxX: -8.92,
              pfxZ: 2.59,
              pX: 1.97,
              pZ: 2.38,
              vX0: 11.81,
              vY0: -140.32,
              vZ0: -5.47,
              x: 42.04,
              y: 174.47,
              x0: -1.11,
              y0: 50.0,
              z0: 6.08,
              aX: -18.01
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2176,
              spinDirection: 233
            },
            zone: 14,
            typeConfidence: 0.93,
            plateTime: 0.39,
            extension: 5.9
          },
          index: 1,
          playId: 'c8352448-0654-4c65-948e-3bcdfbb65b1d',
          pitchNumber: 2,
          startTime: '2022-07-27T01:08:57.404Z',
          endTime: '2022-07-27T01:09:01.090Z',
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
            startSpeed: 95.7,
            endSpeed: 88.4,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 29.05,
              aZ: -27.04,
              pfxX: -8.51,
              pfxZ: 2.59,
              pX: -0.89,
              pZ: 2.83,
              vX0: 4.39,
              vY0: -139.39,
              vZ0: -4.43,
              x: 150.79,
              y: 162.5,
              x0: -1.37,
              y0: 50.0,
              z0: 6.2,
              aX: -16.88
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2230,
              spinDirection: 229
            },
            zone: 11,
            typeConfidence: 0.95,
            plateTime: 0.39,
            extension: 5.72
          },
          index: 2,
          playId: '7ab5f208-036d-4dfa-b126-24babeb93faa',
          pitchNumber: 3,
          startTime: '2022-07-27T01:09:28.334Z',
          endTime: '2022-07-27T01:09:32.220Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 94.3,
            endSpeed: 86.7,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 29.15,
              aZ: -22.71,
              pfxX: -11.19,
              pfxZ: 4.95,
              pX: -0.17,
              pZ: 2.82,
              vX0: 6.41,
              vY0: -137.17,
              vZ0: -5.21,
              x: 123.48,
              y: 162.77,
              x0: -1.08,
              y0: 50.01,
              z0: 6.28,
              aX: -21.41
            },
            breaks: {
              breakAngle: 40.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 1987,
              spinDirection: 229
            },
            zone: 2,
            typeConfidence: 0.78,
            plateTime: 0.4,
            extension: 5.7
          },
          index: 3,
          playId: 'a59842c4-6bf0-44d7-b4e2-ab01388e8bc3',
          pitchNumber: 4,
          startTime: '2022-07-27T01:09:50.405Z',
          endTime: '2022-07-27T01:09:53.912Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 96.2,
            endSpeed: 87.4,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 33.59,
              aZ: -15.78,
              pfxX: -7.65,
              pfxZ: 8.34,
              pX: 0.51,
              pZ: 2.54,
              vX0: 7.28,
              vY0: -139.79,
              vZ0: -6.55,
              x: 97.52,
              y: 170.31,
              x0: -1.14,
              y0: 50.0,
              z0: 5.96,
              aX: -15.03
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2332,
              spinDirection: 237
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 5.84
          },
          hitData: {
            launchSpeed: 83.0,
            launchAngle: 35.0,
            totalDistance: 307.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 75.96,
              coordY: 86.47
            }
          },
          index: 4,
          playId: '9b65fd94-fb97-4bb4-a5ce-42dd9b0a5109',
          pitchNumber: 5,
          startTime: '2022-07-27T01:10:25.628Z',
          endTime: '2022-07-27T01:10:33.166Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:10:33.166Z',
      atBatIndex: 49
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Dansby Swanson singles on a ground ball to left fielder Kyle Schwarber.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 50,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2022-07-27T01:10:41.906Z',
        endTime: '2022-07-27T01:13:44.032Z',
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
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 544727,
          fullName: 'Jeurys Familia',
          link: '/api/v1/people/544727'
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
            playIndex: 5
          },
          credits: [
            {
              player: {
                id: 656941,
                link: '/api/v1/people/656941'
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
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.7,
            endSpeed: 84.6,
            strikeZoneTop: 3.62,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 27.95,
              aZ: -21.75,
              pfxX: -3.81,
              pfxZ: 5.82,
              pX: 2.21,
              pZ: -0.26,
              vX0: 9.97,
              vY0: -132.83,
              vZ0: -11.86,
              x: 32.93,
              y: 245.84,
              x0: -1.1,
              y0: 50.0,
              z0: 5.84,
              aX: -6.82
            },
            breaks: {
              breakAngle: 12.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2340,
              spinDirection: 236
            },
            zone: 14,
            typeConfidence: 0.82,
            plateTime: 0.41,
            extension: 5.7
          },
          index: 0,
          playId: '70654194-5a3b-4135-b383-66a0bd7e7e63',
          pitchNumber: 1,
          startTime: '2022-07-27T01:11:05.469Z',
          endTime: '2022-07-27T01:11:08.504Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 89.0,
            endSpeed: 82.3,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 25.7,
              aZ: -26.43,
              pfxX: -2.91,
              pfxZ: 3.37,
              pX: 0.78,
              pZ: 0.79,
              vX0: 6.27,
              vY0: -129.36,
              vZ0: -7.88,
              x: 87.43,
              y: 217.38,
              x0: -1.3,
              y0: 50.0,
              z0: 5.89,
              aX: -4.96
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2131,
              spinDirection: 235
            },
            zone: 14,
            typeConfidence: 0.78,
            plateTime: 0.42,
            extension: 5.58
          },
          index: 1,
          playId: '47c78fd1-9309-4317-851a-75b88dec9288',
          pitchNumber: 2,
          startTime: '2022-07-27T01:11:36.646Z',
          endTime: '2022-07-27T01:11:40.210Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 96.3,
            endSpeed: 88.8,
            strikeZoneTop: 3.56,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 29.84,
              aZ: -28.92,
              pfxX: -8.61,
              pfxZ: 1.62,
              pX: 0.72,
              pZ: 2.2,
              vX0: 8.2,
              vY0: -140.08,
              vZ0: -5.31,
              x: 89.57,
              y: 179.38,
              x0: -1.12,
              y0: 50.0,
              z0: 6.0,
              aX: -17.21
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2336,
              spinDirection: 231
            },
            zone: 14,
            typeConfidence: 0.95,
            plateTime: 0.39,
            extension: 5.75
          },
          index: 2,
          playId: 'da165780-6d42-4ac3-ab92-5cc9bd9588aa',
          pitchNumber: 3,
          startTime: '2022-07-27T01:12:00.261Z',
          endTime: '2022-07-27T01:12:04.086Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 96.6,
            endSpeed: 88.9,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 30.17,
              aZ: -20.78,
              pfxX: -6.89,
              pfxZ: 5.64,
              pX: -0.87,
              pZ: 3.37,
              vX0: 3.84,
              vY0: -140.76,
              vZ0: -3.64,
              x: 150.06,
              y: 147.92,
              x0: -1.35,
              y0: 50.0,
              z0: 6.01,
              aX: -13.9
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2308,
              spinDirection: 224
            },
            zone: 11,
            typeConfidence: 0.71,
            plateTime: 0.39,
            extension: 5.91
          },
          index: 3,
          playId: '41b80931-9cc9-44b5-9909-054061bb2055',
          pitchNumber: 4,
          startTime: '2022-07-27T01:12:34.999Z',
          endTime: '2022-07-27T01:12:38.507Z',
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
            startSpeed: 89.9,
            endSpeed: 83.1,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 25.85,
              aZ: -23.38,
              pfxX: -1.83,
              pfxZ: 5.04,
              pX: 1.18,
              pZ: 1.56,
              vX0: 6.82,
              vY0: -130.75,
              vZ0: -6.57,
              x: 71.83,
              y: 196.56,
              x0: -1.21,
              y0: 50.0,
              z0: 5.85,
              aX: -3.19
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2303,
              spinDirection: 246
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.42,
            extension: 5.77
          },
          index: 4,
          playId: 'c1755acd-3425-4e99-9ace-314db12726a5',
          pitchNumber: 5,
          startTime: '2022-07-27T01:13:07.693Z',
          endTime: '2022-07-27T01:13:11.832Z',
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
            balls: 3,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 96.2,
            endSpeed: 88.6,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 30.37,
              aZ: -30.95,
              pfxX: -8.38,
              pfxZ: 0.61,
              pX: -0.29,
              pZ: 2.92,
              vX0: 5.36,
              vY0: -140.12,
              vZ0: -3.28,
              x: 127.87,
              y: 160.01,
              x0: -1.13,
              y0: 50.0,
              z0: 6.12,
              aX: -16.72
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2220,
              spinDirection: 229
            },
            zone: 1,
            typeConfidence: 0.95,
            plateTime: 0.39,
            extension: 5.68
          },
          hitData: {
            launchSpeed: 100.4,
            launchAngle: -1.0,
            totalDistance: 45.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 81.29,
              coordY: 101.03
            }
          },
          index: 5,
          playId: 'a49ae8bc-8957-4fa9-99be-93348fe77023',
          pitchNumber: 6,
          startTime: '2022-07-27T01:13:32.500Z',
          endTime: '2022-07-27T01:13:44.032Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:13:44.032Z',
      atBatIndex: 50
    },
    {
      result: {
        type: 'atBat',
        event: 'Caught Stealing 2B',
        eventType: 'caught_stealing_2b',
        description:
          'Dansby Swanson caught stealing 2nd base, catcher J.  T. Realmuto to shortstop Didi Gregorius.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 51,
        halfInning: 'top',
        isTopInning: true,
        inning: 7,
        startTime: '2022-07-27T01:13:52.805Z',
        endTime: '2022-07-27T01:17:15.854Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 17
      },
      count: {
        balls: 2,
        strikes: 2,
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
          id: 544727,
          fullName: 'Jeurys Familia',
          link: '/api/v1/people/544727'
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
      pitchIndex: [0, 1, 2, 3, 4, 5, 6],
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
            outs: 2
          },
          pitchData: {
            startSpeed: 97.1,
            endSpeed: 89.6,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.77,
            coordinates: {
              aY: 29.42,
              aZ: -29.49,
              pfxX: -7.88,
              pfxZ: 1.32,
              pX: -0.29,
              pZ: 3.91,
              vX0: 5.56,
              vY0: -141.42,
              vZ0: -1.0,
              x: 128.08,
              y: 133.1,
              x0: -1.25,
              y0: 50.01,
              z0: 6.15,
              aX: -16.12
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2315,
              spinDirection: 228
            },
            zone: 11,
            typeConfidence: 0.94,
            plateTime: 0.39,
            extension: 5.76
          },
          index: 0,
          playId: '56530010-1e8e-4bde-8d8b-56fe870ad8ea',
          pitchNumber: 1,
          startTime: '2022-07-27T01:14:19.588Z',
          endTime: '2022-07-27T01:14:23.359Z',
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
            strikes: 0,
            outs: 2
          },
          index: 1,
          playId: '3deb21c4-55ca-4af1-abac-1f5eaccdc5fb',
          startTime: '2022-07-27T01:14:37.993Z',
          endTime: '2022-07-27T01:14:41.485Z',
          isPitch: false,
          type: 'pickoff'
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
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 96.7,
            endSpeed: 88.5,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.79,
            coordinates: {
              aY: 31.94,
              aZ: -18.3,
              pfxX: -8.06,
              pfxZ: 6.92,
              pX: -0.44,
              pZ: 2.73,
              vX0: 5.03,
              vY0: -140.72,
              vZ0: -5.55,
              x: 133.85,
              y: 164.96,
              x0: -1.21,
              y0: 50.0,
              z0: 5.92,
              aX: -16.16
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2371,
              spinDirection: 228
            },
            zone: 4,
            typeConfidence: 0.83,
            plateTime: 0.39,
            extension: 5.76
          },
          index: 2,
          playId: 'beab91a2-b37b-4eaf-884d-b670fb0cb2c4',
          pitchNumber: 2,
          startTime: '2022-07-27T01:15:03.685Z',
          endTime: '2022-07-27T01:15:07.312Z',
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
            trailColor: 'rgba(119, 0, 152, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'FS',
              description: 'Splitter'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.7,
            endSpeed: 85.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 27.8,
              aZ: -25.54,
              pfxX: -10.4,
              pfxZ: 3.58,
              pX: 0.19,
              pZ: 2.23,
              vX0: 6.85,
              vY0: -134.87,
              vZ0: -5.79,
              x: 109.74,
              y: 178.58,
              x0: -1.02,
              y0: 50.0,
              z0: 6.19,
              aX: -19.26
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 1912,
              spinDirection: 235
            },
            zone: 8,
            typeConfidence: 2.0,
            plateTime: 0.41,
            extension: 5.59
          },
          index: 3,
          playId: '2f2a3b69-77bf-4410-95be-dd2af3c69ae0',
          pitchNumber: 3,
          startTime: '2022-07-27T01:15:31.130Z',
          endTime: '2022-07-27T01:15:34.479Z',
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
            outs: 2
          },
          index: 4,
          playId: 'd4cbdd79-4240-4a39-aa7a-5259f70809ac',
          startTime: '2022-07-27T01:16:03.835Z',
          endTime: '2022-07-27T01:16:07.427Z',
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
            startSpeed: 96.9,
            endSpeed: 88.1,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 33.85,
              aZ: -16.19,
              pfxX: -7.28,
              pfxZ: 7.98,
              pX: -0.73,
              pZ: 3.24,
              vX0: 3.92,
              vY0: -141.01,
              vZ0: -4.5,
              x: 145.0,
              y: 151.22,
              x0: -1.2,
              y0: 50.0,
              z0: 5.91,
              aX: -14.58
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2295,
              spinDirection: 240
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 5.8
          },
          index: 5,
          playId: '64515f48-2136-4298-8b4c-8cb0371c4236',
          pitchNumber: 4,
          startTime: '2022-07-27T01:16:27.500Z',
          endTime: '2022-07-27T01:16:30.904Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 2,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.5,
            endSpeed: 84.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 26.5,
              aZ: -24.65,
              pfxX: -1.93,
              pfxZ: 4.17,
              pX: 1.38,
              pZ: 1.21,
              vX0: 7.25,
              vY0: -133.04,
              vZ0: -7.57,
              x: 64.41,
              y: 206.12,
              x0: -1.12,
              y0: 50.0,
              z0: 5.86,
              aX: -3.49
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2281,
              spinDirection: 244
            },
            zone: 14,
            typeConfidence: 0.81,
            plateTime: 0.41,
            extension: 5.73
          },
          index: 6,
          playId: '6a1c880c-5728-48c7-925e-42a879c5d157',
          pitchNumber: 5,
          startTime: '2022-07-27T01:17:09.717Z',
          endTime: '2022-07-27T01:17:15.854Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:17:15.854Z',
      atBatIndex: 51
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Nick Castellanos pops out to third baseman Austin Riley.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 52,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2022-07-27T01:19:17.364Z',
        endTime: '2022-07-27T01:20:38.566Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 1,
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
          id: 543521,
          fullName: 'Collin McHugh',
          link: '/api/v1/people/543521'
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
      pitchIndex: [1, 2],
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
            event: 'Pop Out',
            eventType: 'field_out',
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
            description:
              'Pitching Change: Collin McHugh replaces Spencer Strider.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 5,
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
          startTime: '2022-07-27T01:19:17.364Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 543521,
            link: '/api/v1/people/543521'
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
            startSpeed: 89.8,
            endSpeed: 81.6,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 29.29,
              aZ: -20.76,
              pfxX: -1.82,
              pfxZ: 6.66,
              pX: 0.48,
              pZ: 3.62,
              vX0: 6.57,
              vY0: -130.6,
              vZ0: -1.11,
              x: 98.72,
              y: 141.07,
              x0: -1.84,
              y0: 50.01,
              z0: 5.62,
              aX: -3.13
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2510,
              spinDirection: 206
            },
            zone: 3,
            typeConfidence: 0.73,
            plateTime: 0.42,
            extension: 6.52
          },
          index: 1,
          playId: '37d35b02-45ba-4783-a1bd-7540e1f6e544',
          pitchNumber: 1,
          startTime: '2022-07-27T01:20:05.538Z',
          endTime: '2022-07-27T01:20:09.384Z',
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.5,
            endSpeed: 73.9,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 22.95,
              aZ: -29.17,
              pfxX: 8.7,
              pfxZ: 2.17,
              pX: 0.94,
              pZ: 2.64,
              vX0: 4.29,
              vY0: -117.12,
              vZ0: 0.02,
              x: 81.15,
              y: 167.52,
              x0: -2.05,
              y0: 50.0,
              z0: 5.37,
              aX: 12.04
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2635,
              spinDirection: 52
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 6.53
          },
          hitData: {
            launchSpeed: 69.5,
            launchAngle: 70.0,
            totalDistance: 97.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 113.8,
              coordY: 167.71
            }
          },
          index: 2,
          playId: '7a5d7495-4151-4aa1-b0c7-acdb58b307a4',
          pitchNumber: 2,
          startTime: '2022-07-27T01:20:29.543Z',
          endTime: '2022-07-27T01:20:38.566Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:20:38.566Z',
      atBatIndex: 52
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Bryson Stott grounds out, second baseman Robinson Cano to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 53,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2022-07-27T01:20:59.525Z',
        endTime: '2022-07-27T01:22:25.139Z',
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
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 543521,
          fullName: 'Collin McHugh',
          link: '/api/v1/people/543521'
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.4,
            endSpeed: 73.1,
            strikeZoneTop: 3.36,
            strikeZoneBottom: 1.59,
            coordinates: {
              aY: 21.72,
              aZ: -30.64,
              pfxX: 8.4,
              pfxZ: 1.14,
              pX: 0.32,
              pZ: 2.73,
              vX0: 3.57,
              vY0: -115.63,
              vZ0: 0.87,
              x: 104.64,
              y: 164.96,
              x0: -2.33,
              y0: 50.0,
              z0: 5.29,
              aX: 11.37
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2775,
              spinDirection: 51
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.5
          },
          index: 0,
          playId: 'a7be7e30-0c92-4a8d-b38c-81b3421abf7a',
          pitchNumber: 1,
          startTime: '2022-07-27T01:21:09.767Z',
          endTime: '2022-07-27T01:21:13.385Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 89.3,
            endSpeed: 82.1,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 25.88,
              aZ: -24.22,
              pfxX: -0.69,
              pfxZ: 4.62,
              pX: -0.5,
              pZ: 4.02,
              vX0: 4.25,
              vY0: -130.09,
              vZ0: 0.69,
              x: 136.12,
              y: 130.11,
              x0: -2.06,
              y0: 50.0,
              z0: 5.58,
              aX: -1.19
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2577,
              spinDirection: 204
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.45
          },
          index: 1,
          playId: '3704902f-2fb5-4ca1-8ec6-e993b25bd54c',
          pitchNumber: 2,
          startTime: '2022-07-27T01:21:24.737Z',
          endTime: '2022-07-27T01:21:28.243Z',
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
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.7,
            endSpeed: 82.9,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 24.83,
              aZ: -21.03,
              pfxX: -0.9,
              pfxZ: 6.38,
              pX: -0.36,
              pZ: 2.78,
              vX0: 4.84,
              vY0: -130.65,
              vZ0: -2.45,
              x: 130.67,
              y: 163.64,
              x0: -2.11,
              y0: 50.01,
              z0: 5.3,
              aX: -1.58
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2418,
              spinDirection: 217
            },
            zone: 4,
            typeConfidence: 0.89,
            plateTime: 0.42,
            extension: 6.53
          },
          index: 2,
          playId: 'df641ee0-4379-40ab-9d62-3252731bdc48',
          pitchNumber: 3,
          startTime: '2022-07-27T01:21:39.899Z',
          endTime: '2022-07-27T01:21:43.724Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.2,
            endSpeed: 82.3,
            strikeZoneTop: 3.14,
            strikeZoneBottom: 1.46,
            coordinates: {
              aY: 25.11,
              aZ: -22.35,
              pfxX: -0.18,
              pfxZ: 5.69,
              pX: -1.19,
              pZ: 3.24,
              vX0: 2.29,
              vY0: -130.06,
              vZ0: -1.0,
              x: 162.47,
              y: 151.32,
              x0: -2.06,
              y0: 50.0,
              z0: 5.31,
              aX: -0.3
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2442,
              spinDirection: 214
            },
            zone: 11,
            typeConfidence: 0.92,
            plateTime: 0.42,
            extension: 6.61
          },
          index: 3,
          playId: '5f173659-40ae-4cbe-b73c-29a77f64e4ea',
          pitchNumber: 4,
          startTime: '2022-07-27T01:21:59.961Z',
          endTime: '2022-07-27T01:22:03.717Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.6,
            endSpeed: 73.2,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 22.28,
              aZ: -31.71,
              pfxX: 9.93,
              pfxZ: 0.35,
              pX: 0.24,
              pZ: 2.57,
              vX0: 3.12,
              vY0: -115.94,
              vZ0: 0.99,
              x: 107.89,
              y: 169.45,
              x0: -2.42,
              y0: 50.0,
              z0: 5.17,
              aX: 13.48
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2855,
              spinDirection: 57
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.52
          },
          hitData: {
            launchSpeed: 99.2,
            launchAngle: 1.0,
            totalDistance: 55.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 145.3,
              coordY: 146.84
            }
          },
          index: 4,
          playId: '65425921-9bd3-4290-99e3-b506cc52a475',
          pitchNumber: 5,
          startTime: '2022-07-27T01:22:17.562Z',
          endTime: '2022-07-27T01:22:25.139Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:22:25.139Z',
      atBatIndex: 53
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Alec Bohm pops out to second baseman Robinson Cano.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 54,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 7,
        startTime: '2022-07-27T01:22:46.345Z',
        endTime: '2022-07-27T01:23:09.526Z',
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
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 543521,
          fullName: 'Collin McHugh',
          link: '/api/v1/people/543521'
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
            startSpeed: 89.0,
            endSpeed: 81.1,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 28.73,
              aZ: -24.64,
              pfxX: -0.63,
              pfxZ: 4.46,
              pX: -0.16,
              pZ: 3.29,
              vX0: 4.72,
              vY0: -129.59,
              vZ0: -0.98,
              x: 123.07,
              y: 150.02,
              x0: -1.93,
              y0: 50.01,
              z0: 5.57,
              aX: -1.07
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2496,
              spinDirection: 213
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 6.45
          },
          hitData: {
            launchSpeed: 62.1,
            launchAngle: 52.0,
            totalDistance: 160.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 153.37,
              coordY: 143.69
            }
          },
          index: 0,
          playId: 'f2f9e1c5-d3a5-45ed-b61f-8b4c512639da',
          pitchNumber: 1,
          startTime: '2022-07-27T01:23:01.669Z',
          endTime: '2022-07-27T01:23:09.526Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:23:09.526Z',
      atBatIndex: 54
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Matt Olson strikes out swinging.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 55,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2022-07-27T01:25:09.051Z',
        endTime: '2022-07-27T01:27:09.232Z',
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
          id: 621566,
          fullName: 'Matt Olson',
          link: '/api/v1/people/621566'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 608349,
          fullName: 'Corey Knebel',
          link: '/api/v1/people/608349'
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
            event: 'Strikeout',
            eventType: 'strikeout',
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
            description:
              'Pitching Change: Corey Knebel replaces Jeurys Familia.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 5,
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
          startTime: '2022-07-27T01:25:09.051Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 608349,
            link: '/api/v1/people/608349'
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 79.6,
            endSpeed: 72.4,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 25.72,
              aZ: -45.49,
              pfxX: 5.62,
              pfxZ: -10.02,
              pX: 0.14,
              pZ: 2.05,
              vX0: 1.25,
              vY0: -115.74,
              vZ0: 0.84,
              x: 111.58,
              y: 183.48,
              x0: -1.14,
              y0: 50.0,
              z0: 6.11,
              aX: 7.47
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2974,
              spinDirection: 35
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.48,
            extension: 6.26
          },
          index: 1,
          playId: '917a777e-a2f3-4fcd-8534-d96245760c0d',
          pitchNumber: 1,
          startTime: '2022-07-27T01:26:26.802Z',
          endTime: '2022-07-27T01:26:30.571Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 96.4,
            endSpeed: 87.9,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 32.42,
              aZ: -11.48,
              pfxX: -3.69,
              pfxZ: 10.4,
              pX: -0.4,
              pZ: 3.08,
              vX0: 3.0,
              vY0: -140.31,
              vZ0: -5.85,
              x: 132.27,
              y: 155.52,
              x0: -1.01,
              y0: 50.0,
              z0: 5.95,
              aX: -7.35
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2430,
              spinDirection: 206
            },
            zone: 1,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.29
          },
          index: 2,
          playId: 'dff2c5cb-809a-48ee-95fe-554f9404326c',
          pitchNumber: 2,
          startTime: '2022-07-27T01:26:42.300Z',
          endTime: '2022-07-27T01:26:45.793Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 80.7,
            endSpeed: 73.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 26.5,
              aZ: -46.01,
              pfxX: 5.23,
              pfxZ: -10.12,
              pX: 0.4,
              pZ: 1.97,
              vX0: 1.82,
              vY0: -117.39,
              vZ0: 0.49,
              x: 101.92,
              y: 185.53,
              x0: -1.07,
              y0: 50.0,
              z0: 6.12,
              aX: 7.15
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2972,
              spinDirection: 111
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.39
          },
          index: 3,
          playId: '22d68a9e-7d1f-42a1-b44f-f83792bc72e0',
          pitchNumber: 3,
          startTime: '2022-07-27T01:27:02.975Z',
          endTime: '2022-07-27T01:27:09.232Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:27:09.232Z',
      atBatIndex: 55
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Austin Riley grounds out, second baseman Bryson Stott to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 56,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2022-07-27T01:27:21.569Z',
        endTime: '2022-07-27T01:29:02.685Z',
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
          id: 663586,
          fullName: 'Austin Riley',
          link: '/api/v1/people/663586'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 608349,
          fullName: 'Corey Knebel',
          link: '/api/v1/people/608349'
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
            outNumber: 2
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
              code: 'F',
              description: 'Foul'
            },
            description: 'Foul',
            code: 'F',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 79.2,
            endSpeed: 72.1,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 25.73,
              aZ: -45.32,
              pfxX: 5.7,
              pfxZ: -9.99,
              pX: -0.38,
              pZ: 1.71,
              vX0: -0.6,
              vY0: -115.27,
              vZ0: 0.1,
              x: 131.61,
              y: 192.61,
              x0: -0.85,
              y0: 50.0,
              z0: 6.12,
              aX: 7.5
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2985,
              spinDirection: 347
            },
            zone: 7,
            typeConfidence: 0.91,
            plateTime: 0.48,
            extension: 6.37
          },
          index: 0,
          playId: '3f89c884-b657-47ec-8d23-dddee4a5b91f',
          pitchNumber: 1,
          startTime: '2022-07-27T01:27:32.938Z',
          endTime: '2022-07-27T01:27:36.304Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: false,
            isBall: true,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 81.4,
            endSpeed: 74.7,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 25.95,
              aZ: -43.73,
              pfxX: 7.06,
              pfxZ: -8.27,
              pX: 2.01,
              pZ: 0.95,
              vX0: 4.59,
              vY0: -118.38,
              vZ0: -2.27,
              x: 40.54,
              y: 213.01,
              x0: -0.89,
              y0: 50.01,
              z0: 5.99,
              aX: 9.87
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2974,
              spinDirection: 30
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 6.58
          },
          index: 1,
          playId: '60948bfb-c36a-4a3a-a40d-07efd6450c0d',
          pitchNumber: 2,
          startTime: '2022-07-27T01:27:54.975Z',
          endTime: '2022-07-27T01:27:58.488Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 97.3,
            endSpeed: 88.7,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 33.19,
              aZ: -9.75,
              pfxX: -1.39,
              pfxZ: 11.14,
              pX: 0.01,
              pZ: 1.09,
              vX0: 2.69,
              vY0: -141.21,
              vZ0: -11.48,
              x: 116.65,
              y: 209.25,
              x0: -0.78,
              y0: 50.0,
              z0: 5.85,
              aX: -2.81
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2359,
              spinDirection: 205
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.41
          },
          index: 2,
          playId: 'ef5c6b3a-cc2c-4f38-aa03-4bef5d2f0a11',
          pitchNumber: 3,
          startTime: '2022-07-27T01:28:16.331Z',
          endTime: '2022-07-27T01:28:20.247Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 96.8,
            endSpeed: 87.9,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 34.05,
              aZ: -11.28,
              pfxX: -3.64,
              pfxZ: 10.47,
              pX: 0.42,
              pZ: 3.22,
              vX0: 4.97,
              vY0: -140.85,
              vZ0: -5.43,
              x: 101.1,
              y: 151.77,
              x0: -0.9,
              y0: 50.01,
              z0: 5.92,
              aX: -7.27
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2320,
              spinDirection: 203
            },
            zone: 3,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.48
          },
          index: 3,
          playId: 'cbde77a6-1e7a-449d-8ed1-ed45ae923586',
          pitchNumber: 4,
          startTime: '2022-07-27T01:28:34.815Z',
          endTime: '2022-07-27T01:28:38.695Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 97.4,
            endSpeed: 88.3,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.56,
            coordinates: {
              aY: 35.1,
              aZ: -10.61,
              pfxX: -2.17,
              pfxZ: 10.73,
              pX: 0.99,
              pZ: 2.38,
              vX0: 5.83,
              vY0: -141.54,
              vZ0: -7.77,
              x: 79.43,
              y: 174.58,
              x0: -0.83,
              y0: 50.01,
              z0: 5.86,
              aX: -4.36
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2298,
              spinDirection: 205
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.59
          },
          hitData: {
            launchSpeed: 77.6,
            launchAngle: 9.0,
            totalDistance: 130.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 123.66,
              coordY: 129.65
            }
          },
          index: 4,
          playId: 'b8486318-c853-4afc-8f75-d3b99ab7e5fd',
          pitchNumber: 5,
          startTime: '2022-07-27T01:28:54.795Z',
          endTime: '2022-07-27T01:29:02.685Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:29:02.685Z',
      atBatIndex: 56
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          "Travis d'Arnaud grounds out, third baseman Alec Bohm to first baseman Rhys Hoskins.",
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 57,
        halfInning: 'top',
        isTopInning: true,
        inning: 8,
        startTime: '2022-07-27T01:29:31.081Z',
        endTime: '2022-07-27T01:30:55.063Z',
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
          id: 518595,
          fullName: "Travis d'Arnaud",
          link: '/api/v1/people/518595'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 608349,
          fullName: 'Corey Knebel',
          link: '/api/v1/people/608349'
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
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 518595,
              fullName: "Travis d'Arnaud",
              link: '/api/v1/people/518595'
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
            call: {
              code: 'S',
              description: 'Swinging Strike'
            },
            description: 'Swinging Strike',
            code: 'S',
            ballColor: 'rgba(170, 21, 11, 1.0)',
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: false,
            isStrike: true,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 81.0,
            endSpeed: 74.2,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 25.9,
              aZ: -42.59,
              pfxX: 6.99,
              pfxZ: -7.54,
              pX: 0.75,
              pZ: 0.87,
              vX0: 1.94,
              vY0: -117.83,
              vZ0: -2.48,
              x: 88.34,
              y: 215.2,
              x0: -0.99,
              y0: 50.0,
              z0: 5.94,
              aX: 9.65
            },
            breaks: {
              breakAngle: 13.2,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 2998,
              spinDirection: 33
            },
            zone: 14,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 6.49
          },
          index: 0,
          playId: 'a8028bc3-8b13-426c-a98b-312d5c7b4b35',
          pitchNumber: 1,
          startTime: '2022-07-27T01:29:34.423Z',
          endTime: '2022-07-27T01:29:38.184Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 96.3,
            endSpeed: 87.9,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 31.84,
              aZ: -11.41,
              pfxX: -2.33,
              pfxZ: 10.42,
              pX: 0.34,
              pZ: 4.2,
              vX0: 3.9,
              vY0: -140.26,
              vZ0: -2.98,
              x: 104.07,
              y: 125.49,
              x0: -0.77,
              y0: 50.0,
              z0: 6.02,
              aX: -4.63
            },
            breaks: {
              breakAngle: 16.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2338,
              spinDirection: 202
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.59
          },
          index: 1,
          playId: '8150f65b-9870-4f18-b6b2-0bad464833ab',
          pitchNumber: 2,
          startTime: '2022-07-27T01:30:06.445Z',
          endTime: '2022-07-27T01:30:10.070Z',
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
            startSpeed: 96.3,
            endSpeed: 88.3,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 30.92,
              aZ: -11.71,
              pfxX: -2.59,
              pfxZ: 10.25,
              pX: -0.76,
              pZ: 3.27,
              vX0: 1.36,
              vY0: -140.24,
              vZ0: -5.24,
              x: 146.05,
              y: 150.37,
              x0: -0.92,
              y0: 50.01,
              z0: 5.93,
              aX: -5.18
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2274,
              spinDirection: 204
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.39
          },
          index: 2,
          playId: '606e602e-6774-44fb-b7e5-c24aedd3e789',
          pitchNumber: 3,
          startTime: '2022-07-27T01:30:22.974Z',
          endTime: '2022-07-27T01:30:26.425Z',
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
            trailColor: 'rgba(153, 171, 0, 1.0)',
            isInPlay: true,
            isStrike: false,
            isBall: false,
            type: {
              code: 'KC',
              description: 'Knuckle Curve'
            },
            hasReview: false
          },
          count: {
            balls: 1,
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 80.3,
            endSpeed: 72.9,
            strikeZoneTop: 3.34,
            strikeZoneBottom: 1.52,
            coordinates: {
              aY: 27.53,
              aZ: -46.0,
              pfxX: 5.91,
              pfxZ: -10.27,
              pX: 0.29,
              pZ: 1.52,
              vX0: 0.94,
              vY0: -116.86,
              vZ0: -0.33,
              x: 105.87,
              y: 197.86,
              x0: -0.89,
              y0: 50.0,
              z0: 6.08,
              aX: 7.96
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2839,
              spinDirection: 21
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.62
          },
          hitData: {
            launchSpeed: 98.9,
            launchAngle: -24.0,
            totalDistance: 5.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '5',
            coordinates: {
              coordX: 102.63,
              coordY: 156.0
            }
          },
          index: 3,
          playId: 'a5122154-4276-49f6-b44a-620cdac7e318',
          pitchNumber: 4,
          startTime: '2022-07-27T01:30:46.159Z',
          endTime: '2022-07-27T01:30:55.063Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:30:55.063Z',
      atBatIndex: 57
    },
    {
      result: {
        type: 'atBat',
        event: 'Pop Out',
        eventType: 'field_out',
        description: 'Didi Gregorius pops out to second baseman Robinson Cano.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 58,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T01:33:25.330Z',
        endTime: '2022-07-27T01:34:26.086Z',
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
          id: 544369,
          fullName: 'Didi Gregorius',
          link: '/api/v1/people/544369'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 543521,
          fullName: 'Collin McHugh',
          link: '/api/v1/people/543521'
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
            event: 'Pop Out',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 88.8,
            endSpeed: 81.6,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 25.61,
              aZ: -20.85,
              pfxX: -0.98,
              pfxZ: 6.64,
              pX: -1.14,
              pZ: 3.63,
              vX0: 2.81,
              vY0: -129.38,
              vZ0: -1.01,
              x: 160.61,
              y: 140.67,
              x0: -2.11,
              y0: 50.0,
              z0: 5.62,
              aX: -1.68
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2351,
              spinDirection: 212
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.58
          },
          index: 0,
          playId: 'c8b3815b-616e-433d-b090-c9d3445e9f86',
          pitchNumber: 1,
          startTime: '2022-07-27T01:33:37.971Z',
          endTime: '2022-07-27T01:33:41.305Z',
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
            startSpeed: 88.2,
            endSpeed: 81.3,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 24.77,
              aZ: -22.34,
              pfxX: -1.55,
              pfxZ: 5.86,
              pX: 0.92,
              pZ: 2.83,
              vX0: 7.47,
              vY0: -128.28,
              vZ0: -2.56,
              x: 81.8,
              y: 162.49,
              x0: -1.82,
              y0: 50.0,
              z0: 5.57,
              aX: -2.61
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2386,
              spinDirection: 213
            },
            zone: 12,
            typeConfidence: 0.86,
            plateTime: 0.43,
            extension: 6.68
          },
          index: 1,
          playId: '9eca91b5-8795-4d25-b8ee-59c5cb8fe6f2',
          pitchNumber: 2,
          startTime: '2022-07-27T01:33:51.932Z',
          endTime: '2022-07-27T01:33:55.886Z',
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
            startSpeed: 88.9,
            endSpeed: 81.8,
            strikeZoneTop: 3.32,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 25.82,
              aZ: -22.56,
              pfxX: -0.78,
              pfxZ: 5.64,
              pX: 0.7,
              pZ: 3.14,
              vX0: 6.85,
              vY0: -129.38,
              vZ0: -1.63,
              x: 90.27,
              y: 154.02,
              x0: -1.87,
              y0: 50.0,
              z0: 5.5,
              aX: -1.33
            },
            breaks: {
              breakAngle: 0.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2483,
              spinDirection: 217
            },
            zone: 3,
            typeConfidence: 0.89,
            plateTime: 0.42,
            extension: 6.57
          },
          hitData: {
            launchSpeed: 83.4,
            launchAngle: 60.0,
            totalDistance: 182.0,
            trajectory: 'popup',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 154.44,
              coordY: 131.06
            }
          },
          index: 2,
          playId: 'b37a927b-f664-4fd8-a474-cb217dec904a',
          pitchNumber: 3,
          startTime: '2022-07-27T01:34:16.474Z',
          endTime: '2022-07-27T01:34:26.086Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:34:26.086Z',
      atBatIndex: 58
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Matt Vierling grounds out, second baseman Robinson Cano to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 59,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T01:34:42.553Z',
        endTime: '2022-07-27T01:36:26.003Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 0
      },
      count: {
        balls: 0,
        strikes: 2,
        outs: 2
      },
      matchup: {
        batter: {
          id: 663837,
          fullName: 'Matt Vierling',
          link: '/api/v1/people/663837'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 543521,
          fullName: 'Collin McHugh',
          link: '/api/v1/people/543521'
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
            outNumber: 2
          },
          details: {
            event: 'Groundout',
            eventType: 'field_out',
            movementReason: null,
            runner: {
              id: 663837,
              fullName: 'Matt Vierling',
              link: '/api/v1/people/663837'
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
            balls: 0,
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 80.2,
            endSpeed: 73.7,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.77,
              aZ: -31.86,
              pfxX: 10.24,
              pfxZ: 0.23,
              pX: -0.32,
              pZ: 1.98,
              vX0: 1.38,
              vY0: -116.81,
              vZ0: -0.48,
              x: 129.09,
              y: 185.33,
              x0: -2.25,
              y0: 50.0,
              z0: 5.19,
              aX: 14.1
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2762,
              spinDirection: 58
            },
            zone: 7,
            typeConfidence: 0.91,
            plateTime: 0.47,
            extension: 6.25
          },
          index: 0,
          playId: 'c425475f-049c-418a-b67b-dc57c332c062',
          pitchNumber: 1,
          startTime: '2022-07-27T01:34:53.552Z',
          endTime: '2022-07-27T01:34:57.260Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 80.1,
            endSpeed: 73.8,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 22.28,
              aZ: -31.09,
              pfxX: 9.74,
              pfxZ: 0.79,
              pX: -0.06,
              pZ: 2.01,
              vX0: 2.26,
              vY0: -116.7,
              vZ0: -0.78,
              x: 119.37,
              y: 184.52,
              x0: -2.31,
              y0: 50.01,
              z0: 5.28,
              aX: 13.41
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2771,
              spinDirection: 56
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.47,
            extension: 6.69
          },
          index: 1,
          playId: 'f84add18-929e-4cc7-aed2-b8215619b8fb',
          pitchNumber: 2,
          startTime: '2022-07-27T01:35:06.796Z',
          endTime: '2022-07-27T01:35:10.169Z',
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
            startSpeed: 87.4,
            endSpeed: 80.4,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 25.12,
              aZ: -23.33,
              pfxX: 0.51,
              pfxZ: 5.37,
              pX: 0.69,
              pZ: 3.29,
              vX0: 6.05,
              vY0: -127.29,
              vZ0: -1.13,
              x: 90.56,
              y: 150.04,
              x0: -1.78,
              y0: 50.0,
              z0: 5.58,
              aX: 0.84
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2492,
              spinDirection: 201
            },
            zone: 3,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.68
          },
          index: 2,
          playId: 'e0c96115-13d0-456c-b7c7-27edadf37593',
          pitchNumber: 3,
          startTime: '2022-07-27T01:35:27.008Z',
          endTime: '2022-07-27T01:35:30.625Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 80.3,
            endSpeed: 73.3,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 24.61,
              aZ: -30.6,
              pfxX: 8.55,
              pfxZ: 1.15,
              pX: 0.46,
              pZ: 1.69,
              vX0: 3.56,
              vY0: -116.81,
              vZ0: -1.46,
              x: 99.46,
              y: 193.22,
              x0: -2.2,
              y0: 50.0,
              z0: 5.23,
              aX: 11.67
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2762,
              spinDirection: 50
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.79
          },
          index: 3,
          playId: 'c588dea1-39e5-4358-9740-496f2dc19bc3',
          pitchNumber: 4,
          startTime: '2022-07-27T01:35:52.248Z',
          endTime: '2022-07-27T01:35:56.164Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 79.7,
            endSpeed: 73.2,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.72,
            coordinates: {
              aY: 23.84,
              aZ: -32.29,
              pfxX: 9.47,
              pfxZ: -0.09,
              pX: 0.9,
              pZ: 0.99,
              vX0: 4.09,
              vY0: -116.02,
              vZ0: -2.56,
              x: 82.85,
              y: 212.09,
              x0: -2.12,
              y0: 50.0,
              z0: 5.21,
              aX: 12.77
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2715,
              spinDirection: 51
            },
            zone: 14,
            typeConfidence: 0.91,
            plateTime: 0.47,
            extension: 6.79
          },
          hitData: {
            launchSpeed: 61.2,
            launchAngle: 16.0,
            totalDistance: 134.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 134.16,
              coordY: 136.14
            }
          },
          index: 4,
          playId: '21b27496-072c-496e-b4f1-b2d0e929ac40',
          pitchNumber: 5,
          startTime: '2022-07-27T01:36:17.767Z',
          endTime: '2022-07-27T01:36:26.003Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:36:26.003Z',
      atBatIndex: 59
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Kyle Schwarber strikes out swinging.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 60,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 8,
        startTime: '2022-07-27T01:36:42.489Z',
        endTime: '2022-07-27T01:38:59.107Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: true,
        captivatingIndex: 14
      },
      count: {
        balls: 3,
        strikes: 3,
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
          id: 543521,
          fullName: 'Collin McHugh',
          link: '/api/v1/people/543521'
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
                id: 518595,
                link: '/api/v1/people/518595'
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
            startSpeed: 79.6,
            endSpeed: 72.9,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 23.2,
              aZ: -28.91,
              pfxX: 7.84,
              pfxZ: 2.42,
              pX: -0.56,
              pZ: 1.76,
              vX0: 1.82,
              vY0: -115.91,
              vZ0: -1.46,
              x: 138.53,
              y: 191.32,
              x0: -2.38,
              y0: 50.0,
              z0: 5.18,
              aX: 10.59
            },
            breaks: {
              breakAngle: 20.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2753,
              spinDirection: 61
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.47,
            extension: 6.45
          },
          index: 0,
          playId: '77d81968-0caf-493e-a455-387b8a7282b0',
          pitchNumber: 1,
          startTime: '2022-07-27T01:37:05.049Z',
          endTime: '2022-07-27T01:37:08.787Z',
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
            startSpeed: 79.6,
            endSpeed: 73.1,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 23.25,
              aZ: -29.69,
              pfxX: 8.99,
              pfxZ: 1.84,
              pX: -0.19,
              pZ: 0.87,
              vX0: 2.24,
              vY0: -115.94,
              vZ0: -3.16,
              x: 124.32,
              y: 215.39,
              x0: -2.34,
              y0: 50.0,
              z0: 5.1,
              aX: 12.14
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2749,
              spinDirection: 54
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.47,
            extension: 6.49
          },
          index: 1,
          playId: '2ef540fc-3187-4b4e-8fff-7deebcd57da9',
          pitchNumber: 2,
          startTime: '2022-07-27T01:37:22.513Z',
          endTime: '2022-07-27T01:37:27.577Z',
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
            balls: 2,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 86.5,
            endSpeed: 79.3,
            strikeZoneTop: 3.33,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 24.94,
              aZ: -23.25,
              pfxX: 1.49,
              pfxZ: 5.54,
              pX: -1.46,
              pZ: 4.12,
              vX0: 1.54,
              vY0: -126.0,
              vZ0: 1.07,
              x: 172.75,
              y: 127.57,
              x0: -2.28,
              y0: 50.0,
              z0: 5.56,
              aX: 2.41
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2437,
              spinDirection: 207
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.54
          },
          index: 2,
          playId: '6afaced6-45ab-4969-ab99-ff3749638063',
          pitchNumber: 3,
          startTime: '2022-07-27T01:37:45.939Z',
          endTime: '2022-07-27T01:37:49.448Z',
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
            strikes: 2,
            outs: 2
          },
          pitchData: {
            startSpeed: 88.1,
            endSpeed: 81.1,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 25.42,
              aZ: -24.65,
              pfxX: 0.07,
              pfxZ: 4.49,
              pX: -0.13,
              pZ: 3.14,
              vX0: 4.92,
              vY0: -128.34,
              vZ0: -1.01,
              x: 122.06,
              y: 154.02,
              x0: -2.08,
              y0: 50.0,
              z0: 5.45,
              aX: 0.11
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2501,
              spinDirection: 207
            },
            zone: 2,
            typeConfidence: 0.91,
            plateTime: 0.43,
            extension: 6.59
          },
          index: 3,
          playId: '89ef1db5-cf24-436f-9411-d50867a28d6d',
          pitchNumber: 4,
          startTime: '2022-07-27T01:38:07.501Z',
          endTime: '2022-07-27T01:38:11.113Z',
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
            startSpeed: 80.8,
            endSpeed: 74.1,
            strikeZoneTop: 3.31,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 24.05,
              aZ: -32.76,
              pfxX: 5.95,
              pfxZ: -0.42,
              pX: -1.0,
              pZ: 0.9,
              vX0: 1.36,
              vY0: -117.65,
              vZ0: -2.82,
              x: 154.93,
              y: 214.51,
              x0: -2.35,
              y0: 50.0,
              z0: 5.17,
              aX: 8.27
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2764,
              spinDirection: 64
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.47,
            extension: 6.67
          },
          index: 4,
          playId: 'fc2aa8b6-3e7f-41e7-8743-730b6194409d',
          pitchNumber: 5,
          startTime: '2022-07-27T01:38:30.773Z',
          endTime: '2022-07-27T01:38:35.492Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 75.4,
            endSpeed: 68.9,
            strikeZoneTop: 3.46,
            strikeZoneBottom: 1.66,
            coordinates: {
              aY: 22.32,
              aZ: -43.65,
              pfxX: 4.98,
              pfxZ: -9.59,
              pX: -0.49,
              pZ: 2.24,
              vX0: 1.29,
              vY0: -109.63,
              vZ0: 1.83,
              x: 135.85,
              y: 178.26,
              x0: -1.74,
              y0: 50.0,
              z0: 6.11,
              aX: 5.97
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 14.4,
              breakY: 24.0,
              spinRate: 2870,
              spinDirection: 44
            },
            zone: 7,
            typeConfidence: 0.92,
            plateTime: 0.5,
            extension: 6.54
          },
          index: 5,
          playId: '345fb7e5-0721-4c1e-9ca1-e428da625c05',
          pitchNumber: 6,
          startTime: '2022-07-27T01:38:53.687Z',
          endTime: '2022-07-27T01:38:59.107Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:38:59.107Z',
      atBatIndex: 60
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Eddie Rosario singles on a line drive to center fielder Matt Vierling.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 61,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T01:40:21.445Z',
        endTime: '2022-07-27T01:42:53.825Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 0,
        strikes: 1,
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
          id: 656793,
          fullName: 'Nick Nelson',
          link: '/api/v1/people/656793'
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
      pitchIndex: [1, 2],
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
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
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
                id: 663837,
                link: '/api/v1/people/663837'
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
            description: 'Pitching Change: Nick Nelson replaces Corey Knebel.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 5,
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
          startTime: '2022-07-27T01:40:21.445Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 656793,
            link: '/api/v1/people/656793'
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
            outs: 0
          },
          pitchData: {
            startSpeed: 90.8,
            endSpeed: 83.7,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 26.5,
              aZ: -23.71,
              pfxX: 0.67,
              pfxZ: 4.76,
              pX: 0.43,
              pZ: 3.44,
              vX0: 6.72,
              vY0: -132.13,
              vZ0: -1.99,
              x: 100.7,
              y: 145.99,
              x0: -2.23,
              y0: 50.01,
              z0: 5.93,
              aX: 1.2
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2139,
              spinDirection: 191
            },
            zone: 12,
            typeConfidence: 0.88,
            plateTime: 0.41,
            extension: 6.2
          },
          index: 1,
          playId: '627e436e-c820-4eb1-8a37-3e167b3e2207',
          pitchNumber: 1,
          startTime: '2022-07-27T01:42:14.622Z',
          endTime: '2022-07-27T01:42:17.824Z',
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
            startSpeed: 96.4,
            endSpeed: 87.1,
            strikeZoneTop: 3.21,
            strikeZoneBottom: 1.58,
            coordinates: {
              aY: 35.23,
              aZ: -12.58,
              pfxX: -6.74,
              pfxZ: 10.01,
              pX: -0.49,
              pZ: 1.97,
              vX0: 7.01,
              vY0: -139.93,
              vZ0: -8.0,
              x: 135.82,
              y: 185.57,
              x0: -2.17,
              y0: 50.0,
              z0: 5.72,
              aX: -13.21
            },
            breaks: {
              breakAngle: 38.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2003,
              spinDirection: 213
            },
            zone: 7,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.11
          },
          hitData: {
            launchSpeed: 80.7,
            launchAngle: 16.0,
            totalDistance: 212.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 119.18,
              coordY: 89.63
            }
          },
          index: 2,
          playId: 'bb67c069-77fb-4760-9989-d3ba3b13dad5',
          pitchNumber: 2,
          startTime: '2022-07-27T01:42:43.014Z',
          endTime: '2022-07-27T01:42:53.825Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:42:53.825Z',
      atBatIndex: 61
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Marcell Ozuna called out on strikes.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 62,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T01:43:12.762Z',
        endTime: '2022-07-27T01:45:48.515Z',
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
          id: 656793,
          fullName: 'Nick Nelson',
          link: '/api/v1/people/656793'
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
            outs: 0
          },
          pitchData: {
            startSpeed: 90.7,
            endSpeed: 83.2,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 28.97,
              aZ: -27.15,
              pfxX: 0.73,
              pfxZ: 2.86,
              pX: 0.24,
              pZ: 1.59,
              vX0: 6.36,
              vY0: -131.88,
              vZ0: -5.52,
              x: 107.8,
              y: 195.83,
              x0: -2.3,
              y0: 50.0,
              z0: 5.72,
              aX: 1.28
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2240,
              spinDirection: 201
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.02
          },
          index: 0,
          playId: 'f3158951-1229-4797-b9d9-e0c459bd2c11',
          pitchNumber: 1,
          startTime: '2022-07-27T01:43:30.859Z',
          endTime: '2022-07-27T01:43:34.327Z',
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
            balls: 0,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 88.3,
            endSpeed: 80.0,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 29.64,
              aZ: -25.53,
              pfxX: -12.26,
              pfxZ: 4.05,
              pX: 0.09,
              pZ: 1.9,
              vX0: 9.67,
              vY0: -128.13,
              vZ0: -4.77,
              x: 113.67,
              y: 187.38,
              x0: -2.17,
              y0: 50.0,
              z0: 5.82,
              aX: -20.11
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1960,
              spinDirection: 249
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.15
          },
          index: 1,
          playId: 'cd9e9222-a7ea-4579-8dcd-f2d31ecb9250',
          pitchNumber: 2,
          startTime: '2022-07-27T01:43:57.842Z',
          endTime: '2022-07-27T01:44:01.372Z',
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
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 87.6,
            endSpeed: 79.8,
            strikeZoneTop: 3.27,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 27.92,
              aZ: -21.67,
              pfxX: -10.61,
              pfxZ: 6.5,
              pX: 0.79,
              pZ: 0.46,
              vX0: 10.51,
              vY0: -126.83,
              vZ0: -8.68,
              x: 87.0,
              y: 226.39,
              x0: -2.05,
              y0: 50.0,
              z0: 5.68,
              aX: -17.15
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2050,
              spinDirection: 252
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.23
          },
          index: 2,
          playId: '30ef463f-e408-476b-83e3-c44f76aa2c4d',
          pitchNumber: 3,
          startTime: '2022-07-27T01:44:24.901Z',
          endTime: '2022-07-27T01:44:28.922Z',
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
            outs: 0
          },
          index: 3,
          playId: '2c3a32ca-c99f-48eb-a858-12ed3d7cc627',
          startTime: '2022-07-27T01:44:50.822Z',
          endTime: '2022-07-27T01:44:54.921Z',
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
            startSpeed: 89.6,
            endSpeed: 82.4,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.77,
            coordinates: {
              aY: 26.01,
              aZ: -28.33,
              pfxX: 0.59,
              pfxZ: 2.22,
              pX: -0.08,
              pZ: 4.22,
              vX0: 5.32,
              vY0: -130.44,
              vZ0: 0.97,
              x: 119.97,
              y: 124.76,
              x0: -2.22,
              y0: 50.0,
              z0: 5.97,
              aX: 1.03
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2249,
              spinDirection: 223
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.03
          },
          index: 4,
          playId: 'a8745ac2-74e9-467e-bce6-8b116088151b',
          pitchNumber: 4,
          startTime: '2022-07-27T01:45:14.168Z',
          endTime: '2022-07-27T01:45:18.209Z',
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
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 91.3,
            endSpeed: 84.1,
            strikeZoneTop: 3.39,
            strikeZoneBottom: 1.65,
            coordinates: {
              aY: 27.22,
              aZ: -25.87,
              pfxX: 0.7,
              pfxZ: 3.51,
              pX: 0.61,
              pZ: 3.07,
              vX0: 7.01,
              vY0: -132.87,
              vZ0: -2.38,
              x: 93.74,
              y: 155.81,
              x0: -2.15,
              y0: 50.0,
              z0: 5.85,
              aX: 1.25
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2261,
              spinDirection: 200
            },
            zone: 3,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 6.18
          },
          index: 5,
          playId: 'cb6a5e07-11f5-4055-a14b-52c4460c7722',
          pitchNumber: 5,
          startTime: '2022-07-27T01:45:41.815Z',
          endTime: '2022-07-27T01:45:48.515Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:45:48.515Z',
      atBatIndex: 62
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Robinson Cano walks.   Eddie Rosario to 2nd.',
        rbi: 0,
        awayScore: 5,
        homeScore: 1
      },
      about: {
        atBatIndex: 63,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T01:45:58.782Z',
        endTime: '2022-07-27T01:50:17.074Z',
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
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 656793,
          fullName: 'Nick Nelson',
          link: '/api/v1/people/656793'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnFirst: {
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
        },
        postOnSecond: {
          id: 592696,
          fullName: 'Eddie Rosario',
          link: '/api/v1/people/592696'
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
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
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
            startSpeed: 96.0,
            endSpeed: 87.8,
            strikeZoneTop: 3.62,
            strikeZoneBottom: 1.77,
            coordinates: {
              aY: 31.28,
              aZ: -15.01,
              pfxX: -4.63,
              pfxZ: 8.68,
              pX: -1.32,
              pZ: 3.19,
              vX0: 4.15,
              vY0: -139.71,
              vZ0: -4.62,
              x: 167.46,
              y: 152.52,
              x0: -2.23,
              y0: 50.01,
              z0: 5.86,
              aX: -9.17
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2050,
              spinDirection: 207
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.15
          },
          index: 0,
          playId: '6fd3487c-c0cc-4fc9-aa0a-e09ef512f8d1',
          pitchNumber: 1,
          startTime: '2022-07-27T01:46:26.530Z',
          endTime: '2022-07-27T01:46:30.410Z',
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
            startSpeed: 91.0,
            endSpeed: 84.2,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 26.58,
              aZ: -25.67,
              pfxX: 0.79,
              pfxZ: 3.65,
              pX: 1.41,
              pZ: 0.98,
              vX0: 9.01,
              vY0: -132.16,
              vZ0: -7.26,
              x: 63.35,
              y: 212.32,
              x0: -2.14,
              y0: 50.0,
              z0: 5.63,
              aX: 1.4
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2308,
              spinDirection: 208
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.36
          },
          index: 1,
          playId: 'e768ecd0-e5ac-435e-97aa-edfb9446841a',
          pitchNumber: 2,
          startTime: '2022-07-27T01:46:49.867Z',
          endTime: '2022-07-27T01:46:53.558Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 92.9,
            endSpeed: 85.6,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.75,
            coordinates: {
              aY: 28.66,
              aZ: -23.13,
              pfxX: -0.02,
              pfxZ: 4.88,
              pX: 0.39,
              pZ: 1.43,
              vX0: 7.15,
              vY0: -135.08,
              vZ0: -6.91,
              x: 102.29,
              y: 200.3,
              x0: -2.29,
              y0: 50.0,
              z0: 5.64,
              aX: -0.03
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2226,
              spinDirection: 205
            },
            zone: 14,
            typeConfidence: 0.85,
            plateTime: 0.41,
            extension: 6.26
          },
          index: 2,
          playId: 'f6fe27d7-b6ea-4e2a-bd0d-8db79f53bcfa',
          pitchNumber: 3,
          startTime: '2022-07-27T01:47:55.262Z',
          endTime: '2022-07-27T01:47:59.417Z',
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
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 88.5,
            endSpeed: 81.0,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.79,
            coordinates: {
              aY: 27.41,
              aZ: -22.26,
              pfxX: -9.42,
              pfxZ: 5.96,
              pX: -0.07,
              pZ: 0.49,
              vX0: 8.42,
              vY0: -128.37,
              vZ0: -8.5,
              x: 119.68,
              y: 225.48,
              x0: -2.17,
              y0: 50.01,
              z0: 5.59,
              aX: -15.68
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2017,
              spinDirection: 253
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.17
          },
          index: 3,
          playId: '905bfaea-dd42-4f29-b53c-47edc1c4f5bc',
          pitchNumber: 4,
          startTime: '2022-07-27T01:48:22.189Z',
          endTime: '2022-07-27T01:48:26.490Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.7,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 28.98,
              aZ: -23.71,
              pfxX: -1.43,
              pfxZ: 4.64,
              pX: 0.88,
              pZ: 2.37,
              vX0: 8.41,
              vY0: -134.21,
              vZ0: -4.49,
              x: 83.57,
              y: 174.83,
              x0: -2.11,
              y0: 50.01,
              z0: 5.75,
              aX: -2.6
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2233,
              spinDirection: 206
            },
            zone: 14,
            typeConfidence: 0.75,
            plateTime: 0.41,
            extension: 6.26
          },
          index: 4,
          playId: '1c606249-af3e-4ca2-a0eb-eae462c22105',
          pitchNumber: 5,
          startTime: '2022-07-27T01:48:52.681Z',
          endTime: '2022-07-27T01:48:55.876Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 3,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 89.9,
            endSpeed: 82.4,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 27.76,
              aZ: -27.58,
              pfxX: 0.7,
              pfxZ: 2.65,
              pX: -0.21,
              pZ: 3.17,
              vX0: 5.31,
              vY0: -130.85,
              vZ0: -1.45,
              x: 125.16,
              y: 153.11,
              x0: -2.36,
              y0: 50.0,
              z0: 5.8,
              aX: 1.21
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2197,
              spinDirection: 211
            },
            zone: 2,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.09
          },
          index: 5,
          playId: '5d688f2d-97fa-4c41-ae63-2736bc4ba5f2',
          pitchNumber: 6,
          startTime: '2022-07-27T01:49:30.977Z',
          endTime: '2022-07-27T01:49:37.437Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 4,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.5,
            endSpeed: 80.0,
            strikeZoneTop: 3.6,
            strikeZoneBottom: 1.7,
            coordinates: {
              aY: 27.06,
              aZ: -27.77,
              pfxX: -9.5,
              pfxZ: 2.69,
              pX: -1.6,
              pZ: 2.67,
              vX0: 5.19,
              vY0: -127.35,
              vZ0: -2.47,
              x: 177.89,
              y: 166.56,
              x0: -2.43,
              y0: 50.0,
              z0: 5.86,
              aX: -15.55
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 1920,
              spinDirection: 253
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.05
          },
          index: 6,
          playId: '1d139011-b197-4c1e-b04d-e8f82f5a93a6',
          pitchNumber: 7,
          startTime: '2022-07-27T01:50:13.506Z',
          endTime: '2022-07-27T01:50:17.074Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:50:17.074Z',
      atBatIndex: 63
    },
    {
      result: {
        type: 'atBat',
        event: 'Double',
        eventType: 'double',
        description:
          'Michael Harris II doubles (10) on a sharp line drive to right fielder Nick Castellanos.   Eddie Rosario scores.    Robinson Cano to 3rd.',
        rbi: 1,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 64,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T01:50:28.792Z',
        endTime: '2022-07-27T01:52:02.757Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 34
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
          id: 656793,
          fullName: 'Nick Nelson',
          link: '/api/v1/people/656793'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnSecond: {
          id: 671739,
          fullName: 'Michael Harris II',
          link: '/api/v1/people/671739'
        },
        postOnThird: {
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
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
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
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
            event: 'Double',
            eventType: 'double',
            movementReason: 'r_adv_force',
            runner: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
            },
            responsiblePitcher: {
              id: 656793,
              link: '/api/v1/people/656793'
            },
            isScoringEvent: true,
            rbi: true,
            earned: true,
            teamUnearned: false,
            playIndex: 2
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
            startSpeed: 90.3,
            endSpeed: 83.0,
            strikeZoneTop: 3.35,
            strikeZoneBottom: 1.46,
            coordinates: {
              aY: 27.97,
              aZ: -27.12,
              pfxX: 0.02,
              pfxZ: 2.9,
              pX: 0.6,
              pZ: 1.76,
              vX0: 7.27,
              vY0: -131.36,
              vZ0: -4.88,
              x: 94.15,
              y: 191.32,
              x0: -2.21,
              y0: 50.0,
              z0: 5.66,
              aX: 0.03
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2281,
              spinDirection: 197
            },
            zone: 9,
            typeConfidence: 0.9,
            plateTime: 0.42,
            extension: 6.23
          },
          index: 0,
          playId: '9b681d98-3195-4b4a-805d-800ecf8e427b',
          pitchNumber: 1,
          startTime: '2022-07-27T01:50:57.645Z',
          endTime: '2022-07-27T01:51:01.422Z',
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
            balls: 0,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 87.9,
            endSpeed: 80.3,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 27.21,
              aZ: -25.11,
              pfxX: -10.99,
              pfxZ: 4.3,
              pX: -0.16,
              pZ: 1.45,
              vX0: 8.78,
              vY0: -127.57,
              vZ0: -5.72,
              x: 122.99,
              y: 199.71,
              x0: -2.22,
              y0: 50.01,
              z0: 5.71,
              aX: -18.05
            },
            breaks: {
              breakAngle: 31.2,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2034,
              spinDirection: 247
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.04
          },
          index: 1,
          playId: 'e8d7d562-12e1-433c-afcd-2560539fb4fe',
          pitchNumber: 2,
          startTime: '2022-07-27T01:51:24.933Z',
          endTime: '2022-07-27T01:51:28.456Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 88.7,
            endSpeed: 80.7,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.54,
              aZ: -26.19,
              pfxX: -11.25,
              pfxZ: 3.59,
              pX: 0.02,
              pZ: 2.61,
              vX0: 9.12,
              vY0: -128.8,
              vZ0: -3.16,
              x: 116.23,
              y: 168.33,
              x0: -2.12,
              y0: 50.0,
              z0: 5.89,
              aX: -18.77
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2056,
              spinDirection: 249
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 5.99
          },
          hitData: {
            launchSpeed: 101.7,
            launchAngle: 19.0,
            totalDistance: 330.0,
            trajectory: 'line_drive',
            hardness: 'hard',
            location: '9',
            coordinates: {
              coordX: 214.28,
              coordY: 98.51
            }
          },
          index: 2,
          playId: 'db383bd7-b98d-4876-bb5a-5307aacfda54',
          pitchNumber: 3,
          startTime: '2022-07-27T01:51:50.675Z',
          endTime: '2022-07-27T01:52:02.757Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:52:02.757Z',
      atBatIndex: 64
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Ronald Acuna Jr.  grounds out, shortstop Didi Gregorius to first baseman Rhys Hoskins.',
        rbi: 0,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 65,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T01:52:21.524Z',
        endTime: '2022-07-27T01:52:56.147Z',
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
          id: 660670,
          fullName: 'Ronald Acuna Jr.',
          link: '/api/v1/people/660670'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 656793,
          fullName: 'Nick Nelson',
          link: '/api/v1/people/656793'
        },
        pitchHand: {
          code: 'R',
          description: 'Right'
        },
        postOnSecond: {
          id: 671739,
          fullName: 'Michael Harris II',
          link: '/api/v1/people/671739'
        },
        postOnThird: {
          id: 429664,
          fullName: 'Robinson Cano',
          link: '/api/v1/people/429664'
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
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
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
            startSpeed: 88.2,
            endSpeed: 80.1,
            strikeZoneTop: 3.45,
            strikeZoneBottom: 1.55,
            coordinates: {
              aY: 28.89,
              aZ: -26.68,
              pfxX: -12.27,
              pfxZ: 3.34,
              pX: -0.15,
              pZ: 2.28,
              vX0: 9.07,
              vY0: -128.09,
              vZ0: -3.62,
              x: 122.63,
              y: 177.32,
              x0: -2.16,
              y0: 50.0,
              z0: 5.82,
              aX: -20.19
            },
            breaks: {
              breakAngle: 33.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2052,
              spinDirection: 247
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.43,
            extension: 6.39
          },
          hitData: {
            launchSpeed: 69.1,
            launchAngle: -23.0,
            totalDistance: 7.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '6',
            coordinates: {
              coordX: 101.83,
              coordY: 160.06
            }
          },
          index: 0,
          playId: 'ee97c3f7-c4c5-4513-aefd-45a599e8e2ff',
          pitchNumber: 1,
          startTime: '2022-07-27T01:52:48.730Z',
          endTime: '2022-07-27T01:52:56.147Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:52:56.147Z',
      atBatIndex: 65
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Dansby Swanson strikes out swinging.',
        rbi: 0,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 66,
        halfInning: 'top',
        isTopInning: true,
        inning: 9,
        startTime: '2022-07-27T01:53:14.289Z',
        endTime: '2022-07-27T01:55:30.719Z',
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
          id: 621020,
          fullName: 'Dansby Swanson',
          link: '/api/v1/people/621020'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 656793,
          fullName: 'Nick Nelson',
          link: '/api/v1/people/656793'
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
            outNumber: 3
          },
          details: {
            event: 'Strikeout',
            eventType: 'strikeout',
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
            strikes: 0,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.4,
            endSpeed: 85.1,
            strikeZoneTop: 3.52,
            strikeZoneBottom: 1.64,
            coordinates: {
              aY: 27.71,
              aZ: -19.82,
              pfxX: -0.96,
              pfxZ: 6.76,
              pX: 1.88,
              pZ: 1.5,
              vX0: 10.79,
              vY0: -134.0,
              vZ0: -7.32,
              x: 45.39,
              y: 198.36,
              x0: -2.07,
              y0: 50.0,
              z0: 5.67,
              aX: -1.76
            },
            breaks: {
              breakAngle: 1.2,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2271,
              spinDirection: 209
            },
            zone: 14,
            typeConfidence: 0.73,
            plateTime: 0.41,
            extension: 6.24
          },
          index: 0,
          playId: 'b85ff0db-013b-44b0-926c-907df531e251',
          pitchNumber: 1,
          startTime: '2022-07-27T01:53:34.025Z',
          endTime: '2022-07-27T01:53:37.502Z',
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
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 89.3,
            endSpeed: 81.4,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 28.21,
              aZ: -26.15,
              pfxX: -11.25,
              pfxZ: 3.55,
              pX: -0.09,
              pZ: 2.69,
              vX0: 9.1,
              vY0: -129.7,
              vZ0: -3.07,
              x: 120.57,
              y: 166.27,
              x0: -2.19,
              y0: 50.0,
              z0: 5.89,
              aX: -19.08
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 7.2,
              breakY: 24.0,
              spinRate: 2035,
              spinDirection: 250
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.42,
            extension: 5.95
          },
          index: 1,
          playId: 'a2538341-cbcb-4805-948c-0eff6f3e0a0f',
          pitchNumber: 2,
          startTime: '2022-07-27T01:53:56.777Z',
          endTime: '2022-07-27T01:54:02.689Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 96.5,
            endSpeed: 87.3,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 34.39,
              aZ: -15.03,
              pfxX: -4.62,
              pfxZ: 8.69,
              pX: 0.36,
              pZ: 3.68,
              vX0: 8.13,
              vY0: -140.18,
              vZ0: -3.39,
              x: 103.2,
              y: 139.49,
              x0: -1.99,
              y0: 50.0,
              z0: 5.9,
              aX: -9.1
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 1983,
              spinDirection: 210
            },
            zone: 12,
            typeConfidence: 0.9,
            plateTime: 0.39,
            extension: 6.26
          },
          index: 2,
          playId: 'd62fb01e-fe97-42f7-83d7-30ef7f035daf',
          pitchNumber: 3,
          startTime: '2022-07-27T01:54:30.175Z',
          endTime: '2022-07-27T01:54:33.733Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 91.2,
            endSpeed: 83.8,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.75,
            coordinates: {
              aY: 28.59,
              aZ: -25.43,
              pfxX: 0.66,
              pfxZ: 3.81,
              pX: 1.63,
              pZ: 1.02,
              vX0: 9.26,
              vY0: -132.34,
              vZ0: -7.23,
              x: 54.91,
              y: 211.2,
              x0: -2.0,
              y0: 50.0,
              z0: 5.65,
              aX: 1.17
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 6.0,
              breakY: 24.0,
              spinRate: 2243,
              spinDirection: 226
            },
            zone: 14,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.17
          },
          index: 3,
          playId: '34c5fb23-dbdb-47b5-b43b-58fa28d7320c',
          pitchNumber: 4,
          startTime: '2022-07-27T01:55:01.521Z',
          endTime: '2022-07-27T01:55:05.347Z',
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
            outs: 2
          },
          pitchData: {
            startSpeed: 97.0,
            endSpeed: 88.2,
            strikeZoneTop: 3.49,
            strikeZoneBottom: 1.61,
            coordinates: {
              aY: 33.57,
              aZ: -11.18,
              pfxX: -3.78,
              pfxZ: 10.49,
              pX: 0.28,
              pZ: 2.9,
              vX0: 8.05,
              vY0: -140.97,
              vZ0: -5.89,
              x: 106.3,
              y: 160.53,
              x0: -2.13,
              y0: 50.0,
              z0: 5.74,
              aX: -7.58
            },
            breaks: {
              breakAngle: 24.0,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2083,
              spinDirection: 209
            },
            zone: 3,
            typeConfidence: 0.91,
            plateTime: 0.39,
            extension: 6.26
          },
          index: 4,
          playId: 'eea1a6c8-685b-4335-8928-3a747caa22e8',
          pitchNumber: 5,
          startTime: '2022-07-27T01:55:26.489Z',
          endTime: '2022-07-27T01:55:30.719Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T01:55:30.719Z',
      atBatIndex: 66
    },
    {
      result: {
        type: 'atBat',
        event: 'Single',
        eventType: 'single',
        description:
          'Rhys Hoskins singles on a line drive to right fielder Ronald Acuna Jr.',
        rbi: 0,
        awayScore: 6,
        homeScore: 1
      },
      about: {
        atBatIndex: 67,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2022-07-27T01:57:26.525Z',
        endTime: '2022-07-27T02:00:42.546Z',
        isComplete: true,
        isScoringPlay: false,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 33
      },
      count: {
        balls: 3,
        strikes: 2,
        outs: 0
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
          id: 519293,
          fullName: 'Will Smith',
          link: '/api/v1/people/519293'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        postOnFirst: {
          id: 656555,
          fullName: 'Rhys Hoskins',
          link: '/api/v1/people/656555'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
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
            playIndex: 7
          },
          credits: [
            {
              player: {
                id: 660670,
                link: '/api/v1/people/660670'
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
            description: 'Pitching Change: Will Smith replaces Collin McHugh.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 6,
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
          startTime: '2022-07-27T01:57:26.525Z',
          endTime: '2022-07-27T01:57:56.597Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 519293,
            link: '/api/v1/people/519293'
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
            description:
              'Defensive Substitution: Orlando Arcia replaces second baseman Robinson Cano, batting 8th, playing second base.',
            event: 'Defensive Sub',
            eventType: 'defensive_substitution',
            awayScore: 6,
            homeScore: 1,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 0
          },
          index: 1,
          startTime: '2022-07-27T01:57:56.597Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 606115,
            link: '/api/v1/people/606115'
          },
          position: {
            code: '4',
            name: 'Second Base',
            type: 'Infielder',
            abbreviation: '2B'
          },
          battingOrder: '801',
          replacedPlayer: {
            id: 429664,
            link: '/api/v1/people/429664'
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
            startSpeed: 90.3,
            endSpeed: 82.0,
            strikeZoneTop: 3.65,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 30.12,
              aZ: -15.8,
              pfxX: 4.59,
              pfxZ: 9.46,
              pX: 0.94,
              pZ: 2.71,
              vX0: -2.83,
              vY0: -131.29,
              vZ0: -6.67,
              x: 81.22,
              y: 165.74,
              x0: 1.44,
              y0: 50.0,
              z0: 6.47,
              aX: 7.95
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2101,
              spinDirection: 140
            },
            zone: 12,
            typeConfidence: 0.88,
            plateTime: 0.42,
            extension: 6.32
          },
          index: 2,
          playId: 'ec51fda4-3ade-46c4-92e5-11a4922e7395',
          pitchNumber: 1,
          startTime: '2022-07-27T01:58:51.614Z',
          endTime: '2022-07-27T01:58:55.152Z',
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
            balls: 1,
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 76.6,
            endSpeed: 70.7,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.11,
              aZ: -35.79,
              pfxX: -5.34,
              pfxZ: -2.91,
              pX: -1.69,
              pZ: 0.77,
              vX0: -4.96,
              vY0: -111.39,
              vZ0: -4.54,
              x: 181.52,
              y: 217.92,
              x0: 1.27,
              y0: 50.0,
              z0: 6.58,
              aX: -6.63
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 1903,
              spinDirection: 331
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.49,
            extension: 6.0
          },
          index: 3,
          playId: '9d1da2d7-20f1-41bb-ac2b-c16f02eaac2b',
          pitchNumber: 2,
          startTime: '2022-07-27T01:59:10.259Z',
          endTime: '2022-07-27T01:59:13.279Z',
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
            balls: 1,
            strikes: 2,
            outs: 0
          },
          pitchData: {
            startSpeed: 81.7,
            endSpeed: 75.3,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 22.75,
              aZ: -27.7,
              pfxX: -0.76,
              pfxZ: 3.12,
              pX: -0.51,
              pZ: 2.34,
              vX0: -4.77,
              vY0: -118.98,
              vZ0: -3.63,
              x: 136.42,
              y: 175.64,
              x0: 1.62,
              y0: 50.0,
              z0: 6.39,
              aX: -1.09
            },
            breaks: {
              breakAngle: 3.6,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2285,
              spinDirection: 303
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.11
          },
          index: 4,
          playId: 'fd98f9e8-8b18-4ae0-8bb4-0ebc70f21fd2',
          pitchNumber: 3,
          startTime: '2022-07-27T01:59:32.787Z',
          endTime: '2022-07-27T01:59:36.649Z',
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
            startSpeed: 81.4,
            endSpeed: 76.4,
            strikeZoneTop: 3.53,
            strikeZoneBottom: 1.69,
            coordinates: {
              aY: 19.57,
              aZ: -29.78,
              pfxX: -2.47,
              pfxZ: 1.66,
              pX: -1.36,
              pZ: 0.81,
              vX0: -5.59,
              vY0: -118.52,
              vZ0: -6.6,
              x: 168.72,
              y: 216.78,
              x0: 1.34,
              y0: 50.0,
              z0: 6.3,
              aX: -3.57
            },
            breaks: {
              breakAngle: 8.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2193,
              spinDirection: 315
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.46,
            extension: 6.21
          },
          index: 5,
          playId: '79d4bb42-906d-4e43-bea7-0d5614f2becc',
          pitchNumber: 4,
          startTime: '2022-07-27T01:59:52.447Z',
          endTime: '2022-07-27T01:59:56.226Z',
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
            startSpeed: 92.6,
            endSpeed: 83.6,
            strikeZoneTop: 3.62,
            strikeZoneBottom: 1.73,
            coordinates: {
              aY: 33.08,
              aZ: -14.7,
              pfxX: 6.28,
              pfxZ: 9.71,
              pX: -0.31,
              pZ: 1.7,
              vX0: -6.1,
              vY0: -134.31,
              vZ0: -9.31,
              x: 128.98,
              y: 192.79,
              x0: 1.19,
              y0: 50.0,
              z0: 6.3,
              aX: 11.31
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2175,
              spinDirection: 142
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.34
          },
          index: 6,
          playId: 'b7e8ec2a-f030-436a-8912-1556cca686b5',
          pitchNumber: 5,
          startTime: '2022-07-27T02:00:13.328Z',
          endTime: '2022-07-27T02:00:17.638Z',
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
            outs: 0
          },
          pitchData: {
            startSpeed: 92.0,
            endSpeed: 82.9,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 33.16,
              aZ: -12.91,
              pfxX: 6.45,
              pfxZ: 10.8,
              pX: 1.28,
              pZ: 3.3,
              vX0: -2.13,
              vY0: -133.8,
              vZ0: -5.88,
              x: 68.05,
              y: 149.7,
              x0: 1.26,
              y0: 50.0,
              z0: 6.48,
              aX: 11.52
            },
            breaks: {
              breakAngle: 37.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2228,
              spinDirection: 143
            },
            zone: 12,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.14
          },
          hitData: {
            launchSpeed: 94.0,
            launchAngle: 9.0,
            totalDistance: 154.0,
            trajectory: 'line_drive',
            hardness: 'medium',
            location: '9',
            coordinates: {
              coordX: 169.51,
              coordY: 112.02
            }
          },
          index: 7,
          playId: 'e6dd56c2-1151-4882-b8fb-188cad31bfc2',
          pitchNumber: 6,
          startTime: '2022-07-27T02:00:31.550Z',
          endTime: '2022-07-27T02:00:42.546Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T02:00:42.546Z',
      atBatIndex: 67
    },
    {
      result: {
        type: 'atBat',
        event: 'Home Run',
        eventType: 'home_run',
        description:
          'J.T. Realmuto homers (9) on a fly ball to left field.   Rhys Hoskins scores.',
        rbi: 2,
        awayScore: 6,
        homeScore: 3
      },
      about: {
        atBatIndex: 68,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2022-07-27T02:00:58.553Z',
        endTime: '2022-07-27T02:02:52.574Z',
        isComplete: true,
        isScoringPlay: true,
        hasReview: false,
        hasOut: false,
        captivatingIndex: 38
      },
      count: {
        balls: 2,
        strikes: 1,
        outs: 0
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
          id: 519293,
          fullName: 'Will Smith',
          link: '/api/v1/people/519293'
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
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            responsiblePitcher: {
              id: 519293,
              link: '/api/v1/people/519293'
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
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
            },
            responsiblePitcher: {
              id: 519293,
              link: '/api/v1/people/519293'
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
            startSpeed: 76.8,
            endSpeed: 70.3,
            strikeZoneTop: 3.69,
            strikeZoneBottom: 1.71,
            coordinates: {
              aY: 22.41,
              aZ: -35.62,
              pfxX: -4.59,
              pfxZ: -2.75,
              pX: -1.13,
              pZ: 2.78,
              vX0: -4.04,
              vY0: -111.76,
              vZ0: -0.54,
              x: 160.23,
              y: 163.83,
              x0: 1.3,
              y0: 50.01,
              z0: 6.72,
              aX: -5.74
            },
            breaks: {
              breakAngle: 9.6,
              breakLength: 12.0,
              breakY: 24.0,
              spinRate: 1729,
              spinDirection: 329
            },
            zone: 11,
            typeConfidence: 0.91,
            plateTime: 0.49,
            extension: 5.91
          },
          index: 0,
          playId: 'b60889b7-faca-4012-844d-fc312e3df8cb',
          pitchNumber: 1,
          startTime: '2022-07-27T02:01:19.739Z',
          endTime: '2022-07-27T02:01:24.185Z',
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
            startSpeed: 91.9,
            endSpeed: 83.9,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 29.77,
              aZ: -15.24,
              pfxX: 6.2,
              pfxZ: 9.41,
              pX: -0.04,
              pZ: 1.87,
              vX0: -5.34,
              vY0: -133.55,
              vZ0: -8.9,
              x: 118.61,
              y: 188.28,
              x0: 1.18,
              y0: 50.01,
              z0: 6.35,
              aX: 11.15
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2084,
              spinDirection: 136
            },
            zone: 8,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.28
          },
          index: 1,
          playId: '7a5ab51c-cdb5-419f-ad1b-b0a0824c51af',
          pitchNumber: 2,
          startTime: '2022-07-27T02:01:39.606Z',
          endTime: '2022-07-27T02:01:43.167Z',
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
            startSpeed: 91.8,
            endSpeed: 83.6,
            strikeZoneTop: 3.75,
            strikeZoneBottom: 1.79,
            coordinates: {
              aY: 29.75,
              aZ: -14.31,
              pfxX: 5.5,
              pfxZ: 9.97,
              pX: -1.37,
              pZ: 3.06,
              vX0: -8.06,
              vY0: -133.32,
              vZ0: -6.47,
              x: 169.28,
              y: 156.26,
              x0: 0.98,
              y0: 50.01,
              z0: 6.56,
              aX: 9.86
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2190,
              spinDirection: 144
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.38
          },
          index: 2,
          playId: '72abcbfa-9493-45bd-9d14-ea007ad2f842',
          pitchNumber: 3,
          startTime: '2022-07-27T02:02:04.035Z',
          endTime: '2022-07-27T02:02:08.840Z',
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
            strikes: 1,
            outs: 0
          },
          pitchData: {
            startSpeed: 90.9,
            endSpeed: 83.2,
            strikeZoneTop: 3.58,
            strikeZoneBottom: 1.68,
            coordinates: {
              aY: 28.24,
              aZ: -13.6,
              pfxX: 6.32,
              pfxZ: 10.54,
              pX: -0.74,
              pZ: 1.69,
              vX0: -6.85,
              vY0: -131.98,
              vZ0: -9.45,
              x: 145.26,
              y: 193.03,
              x0: 1.07,
              y0: 50.0,
              z0: 6.33,
              aX: 11.14
            },
            breaks: {
              breakAngle: 32.4,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2059,
              spinDirection: 138
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.42,
            extension: 6.45
          },
          hitData: {
            launchSpeed: 105.8,
            launchAngle: 42.0,
            totalDistance: 383.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '7',
            coordinates: {
              coordX: 44.1,
              coordY: 67.18
            }
          },
          index: 3,
          playId: 'f5cc9313-4fc1-4229-a9c7-a6eb246725c8',
          pitchNumber: 4,
          startTime: '2022-07-27T02:02:26.382Z',
          endTime: '2022-07-27T02:02:52.574Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T02:02:52.574Z',
      atBatIndex: 68
    },
    {
      result: {
        type: 'atBat',
        event: 'Strikeout',
        eventType: 'strikeout',
        description: 'Darick Hall called out on strikes.',
        rbi: 0,
        awayScore: 6,
        homeScore: 3
      },
      about: {
        atBatIndex: 69,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2022-07-27T02:03:04.633Z',
        endTime: '2022-07-27T02:04:02.427Z',
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
          id: 669742,
          fullName: 'Darick Hall',
          link: '/api/v1/people/669742'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 519293,
          fullName: 'Will Smith',
          link: '/api/v1/people/519293'
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
                id: 518595,
                link: '/api/v1/people/518595'
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
            outs: 0
          },
          pitchData: {
            startSpeed: 81.8,
            endSpeed: 74.2,
            strikeZoneTop: 3.5,
            strikeZoneBottom: 1.67,
            coordinates: {
              aY: 26.69,
              aZ: -29.89,
              pfxX: -2.15,
              pfxZ: 1.62,
              pX: -0.21,
              pZ: 2.29,
              vX0: -3.47,
              vY0: -119.03,
              vZ0: -3.08,
              x: 124.91,
              y: 176.82,
              x0: 1.56,
              y0: 50.01,
              z0: 6.37,
              aX: -3.03
            },
            breaks: {
              breakAngle: 7.2,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2047,
              spinDirection: 258
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.48
          },
          index: 0,
          playId: '80a7a26e-d757-4460-ba30-8fc7688fea00',
          pitchNumber: 1,
          startTime: '2022-07-27T02:03:19.292Z',
          endTime: '2022-07-27T02:03:23.200Z',
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
            startSpeed: 82.9,
            endSpeed: 76.2,
            strikeZoneTop: 3.63,
            strikeZoneBottom: 1.81,
            coordinates: {
              aY: 24.3,
              aZ: -27.52,
              pfxX: 1.43,
              pfxZ: 3.17,
              pX: -0.58,
              pZ: 1.6,
              vX0: -5.43,
              vY0: -120.6,
              vZ0: -5.41,
              x: 139.23,
              y: 195.65,
              x0: 1.52,
              y0: 50.0,
              z0: 6.31,
              aX: 2.11
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2092,
              spinDirection: 212
            },
            zone: 13,
            typeConfidence: 0.88,
            plateTime: 0.45,
            extension: 6.15
          },
          index: 1,
          playId: '9e462cd6-8154-48bf-ae15-63160c226676',
          pitchNumber: 2,
          startTime: '2022-07-27T02:03:34.838Z',
          endTime: '2022-07-27T02:03:38.412Z',
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
            balls: 0,
            strikes: 3,
            outs: 0
          },
          pitchData: {
            startSpeed: 81.8,
            endSpeed: 74.3,
            strikeZoneTop: 3.54,
            strikeZoneBottom: 1.77,
            coordinates: {
              aY: 26.39,
              aZ: -31.24,
              pfxX: -0.71,
              pfxZ: 0.66,
              pX: 0.22,
              pZ: 2.38,
              vX0: -3.12,
              vY0: -119.06,
              vZ0: -2.65,
              x: 108.44,
              y: 174.48,
              x0: 1.65,
              y0: 50.0,
              z0: 6.38,
              aX: -1.01
            },
            breaks: {
              breakAngle: 2.4,
              breakLength: 9.6,
              breakY: 24.0,
              spinRate: 2219,
              spinDirection: 305
            },
            zone: 5,
            typeConfidence: 0.91,
            plateTime: 0.46,
            extension: 6.08
          },
          index: 2,
          playId: '5f003b68-122b-426a-94d7-1bfc7d11b260',
          pitchNumber: 3,
          startTime: '2022-07-27T02:03:56.012Z',
          endTime: '2022-07-27T02:04:02.427Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T02:04:02.427Z',
      atBatIndex: 69
    },
    {
      result: {
        type: 'atBat',
        event: 'Walk',
        eventType: 'walk',
        description: 'Nick Castellanos walks.',
        rbi: 0,
        awayScore: 6,
        homeScore: 3
      },
      about: {
        atBatIndex: 70,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2022-07-27T02:04:09.061Z',
        endTime: '2022-07-27T02:07:48.204Z',
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
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 519293,
          fullName: 'Will Smith',
          link: '/api/v1/people/519293'
        },
        pitchHand: {
          code: 'L',
          description: 'Left'
        },
        postOnFirst: {
          id: 592206,
          fullName: 'Nick Castellanos',
          link: '/api/v1/people/592206'
        },
        batterHotColdZones: [],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_LHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Men_On'
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
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
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
            strikes: 1,
            outs: 1
          },
          pitchData: {
            startSpeed: 77.2,
            endSpeed: 70.8,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 23.16,
              aZ: -38.8,
              pfxX: -5.42,
              pfxZ: -5.26,
              pX: -0.96,
              pZ: 1.93,
              vX0: -3.48,
              vY0: -112.35,
              vZ0: -1.63,
              x: 153.44,
              y: 186.69,
              x0: 1.33,
              y0: 50.0,
              z0: 6.66,
              aX: -6.83
            },
            breaks: {
              breakAngle: 10.8,
              breakLength: 13.2,
              breakY: 24.0,
              spinRate: 1893,
              spinDirection: 332
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.49,
            extension: 6.09
          },
          index: 0,
          playId: '0f242faa-1c43-4f4a-bd50-f315a9cf8258',
          pitchNumber: 1,
          startTime: '2022-07-27T02:04:31.827Z',
          endTime: '2022-07-27T02:04:35.908Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 91.9,
            endSpeed: 84.4,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 27.64,
              aZ: -12.51,
              pfxX: 5.22,
              pfxZ: 10.87,
              pX: -1.32,
              pZ: 1.99,
              vX0: -8.06,
              vY0: -133.38,
              vZ0: -9.17,
              x: 167.23,
              y: 184.98,
              x0: 1.06,
              y0: 50.01,
              z0: 6.37,
              aX: 9.44
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2123,
              spinDirection: 143
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.16
          },
          index: 1,
          playId: 'aa60e704-e9df-4dc4-bd44-cd8baf8de4b6',
          pitchNumber: 2,
          startTime: '2022-07-27T02:04:57.728Z',
          endTime: '2022-07-27T02:05:00.875Z',
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
            startSpeed: 90.9,
            endSpeed: 83.5,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 27.36,
              aZ: -12.24,
              pfxX: 4.64,
              pfxZ: 11.26,
              pX: -0.14,
              pZ: 1.48,
              vX0: -4.71,
              vY0: -132.03,
              vZ0: -10.7,
              x: 122.31,
              y: 198.88,
              x0: 1.06,
              y0: 50.0,
              z0: 6.48,
              aX: 8.21
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2106,
              spinDirection: 149
            },
            zone: 13,
            typeConfidence: 0.89,
            plateTime: 0.41,
            extension: 6.13
          },
          index: 2,
          playId: '78bd3d80-4d96-4637-b20f-3eb003ddc350',
          pitchNumber: 3,
          startTime: '2022-07-27T02:05:16.680Z',
          endTime: '2022-07-27T02:05:20.232Z',
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
            startSpeed: 92.4,
            endSpeed: 83.7,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 31.79,
              aZ: -12.78,
              pfxX: 4.97,
              pfxZ: 10.74,
              pX: -0.31,
              pZ: 2.86,
              vX0: -5.18,
              vY0: -134.22,
              vZ0: -7.11,
              x: 128.75,
              y: 161.58,
              x0: 1.01,
              y0: 50.0,
              z0: 6.47,
              aX: 8.99
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2161,
              spinDirection: 144
            },
            zone: 4,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.29
          },
          index: 3,
          playId: 'd6f30e4d-d7ab-4ee2-b47b-d04d55762781',
          pitchNumber: 4,
          startTime: '2022-07-27T02:05:46.281Z',
          endTime: '2022-07-27T02:05:50.389Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 81.6,
            endSpeed: 76.6,
            strikeZoneTop: 3.69,
            strikeZoneBottom: 1.83,
            coordinates: {
              aY: 19.43,
              aZ: -29.92,
              pfxX: -1.56,
              pfxZ: 1.55,
              pX: -1.25,
              pZ: 0.86,
              vX0: -5.9,
              vY0: -118.75,
              vZ0: -6.25,
              x: 164.58,
              y: 215.5,
              x0: 1.46,
              y0: 50.0,
              z0: 6.2,
              aX: -2.26
            },
            breaks: {
              breakAngle: 6.0,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2235,
              spinDirection: 209
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.46,
            extension: 6.13
          },
          index: 4,
          playId: 'c7b5ebe0-d12f-4966-90df-dfd656324d05',
          pitchNumber: 5,
          startTime: '2022-07-27T02:06:16.559Z',
          endTime: '2022-07-27T02:06:20.285Z',
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
            startSpeed: 82.7,
            endSpeed: 77.9,
            strikeZoneTop: 3.71,
            strikeZoneBottom: 1.85,
            coordinates: {
              aY: 18.92,
              aZ: -28.53,
              pfxX: -1.3,
              pfxZ: 2.43,
              pX: -0.84,
              pZ: 1.27,
              vX0: -4.98,
              vY0: -120.48,
              vZ0: -6.21,
              x: 149.13,
              y: 204.46,
              x0: 1.4,
              y0: 50.0,
              z0: 6.34,
              aX: -1.95
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 8.4,
              breakY: 24.0,
              spinRate: 2219,
              spinDirection: 323
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.45,
            extension: 6.19
          },
          index: 5,
          playId: '8bba77e5-d4e7-4f34-930c-a1beae1378b2',
          pitchNumber: 6,
          startTime: '2022-07-27T02:06:43.199Z',
          endTime: '2022-07-27T02:06:47.778Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 92.0,
            endSpeed: 84.4,
            strikeZoneTop: 3.64,
            strikeZoneBottom: 1.74,
            coordinates: {
              aY: 28.21,
              aZ: -14.01,
              pfxX: 4.9,
              pfxZ: 10.0,
              pX: 0.0,
              pZ: 2.52,
              vX0: -4.56,
              vY0: -133.76,
              vZ0: -7.81,
              x: 116.95,
              y: 170.82,
              x0: 1.09,
              y0: 50.0,
              z0: 6.47,
              aX: 8.9
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2158,
              spinDirection: 143
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.24
          },
          index: 6,
          playId: '29cab940-327d-40a1-87f2-961d80a175c1',
          pitchNumber: 7,
          startTime: '2022-07-27T02:07:08.201Z',
          endTime: '2022-07-27T02:07:11.853Z',
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
            startSpeed: 92.0,
            endSpeed: 84.3,
            strikeZoneTop: 3.69,
            strikeZoneBottom: 1.83,
            coordinates: {
              aY: 28.38,
              aZ: -14.52,
              pfxX: 5.99,
              pfxZ: 9.75,
              pX: -1.5,
              pZ: 2.38,
              vX0: -8.72,
              vY0: -133.59,
              vZ0: -7.9,
              x: 174.14,
              y: 174.4,
              x0: 1.03,
              y0: 50.01,
              z0: 6.42,
              aX: 10.84
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2131,
              spinDirection: 141
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.47
          },
          index: 7,
          playId: 'b4ebc1e0-f199-4dbb-9db3-722007137a8a',
          pitchNumber: 8,
          startTime: '2022-07-27T02:07:41.679Z',
          endTime: '2022-07-27T02:07:48.204Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T02:07:48.204Z',
      atBatIndex: 70
    },
    {
      result: {
        type: 'atBat',
        event: 'Flyout',
        eventType: 'field_out',
        description:
          'Bryson Stott flies out to center fielder Michael Harris II.',
        rbi: 0,
        awayScore: 6,
        homeScore: 3
      },
      about: {
        atBatIndex: 71,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2022-07-27T02:07:59.441Z',
        endTime: '2022-07-27T02:16:51.119Z',
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
          id: 681082,
          fullName: 'Bryson Stott',
          link: '/api/v1/people/681082'
        },
        batSide: {
          code: 'L',
          description: 'Left'
        },
        pitcher: {
          id: 445276,
          fullName: 'Kenley Jansen',
          link: '/api/v1/people/445276'
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
          pitcher: 'vs_LHB',
          menOnBase: 'Men_On'
        }
      },
      pitchIndex: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
            playIndex: 11
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
        }
      ],
      playEvents: [
        {
          details: {
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 6,
            homeScore: 3,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          index: 0,
          startTime: '2022-07-27T02:07:59.441Z',
          endTime: '2022-07-27T02:08:28.966Z',
          isPitch: false,
          type: 'action',
          player: {
            id: 681082,
            link: '/api/v1/people/681082'
          }
        },
        {
          details: {
            description: 'Pitching Change: Kenley Jansen replaces Will Smith.',
            event: 'Pitching Substitution',
            eventType: 'pitching_substitution',
            awayScore: 6,
            homeScore: 3,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 1
          },
          index: 1,
          startTime: '2022-07-27T02:08:28.966Z',
          isPitch: false,
          isSubstitution: true,
          type: 'action',
          player: {
            id: 445276,
            link: '/api/v1/people/445276'
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
            startSpeed: 92.5,
            endSpeed: 84.1,
            strikeZoneTop: 3.41,
            strikeZoneBottom: 1.5,
            coordinates: {
              aY: 31.37,
              aZ: -12.62,
              pfxX: 3.69,
              pfxZ: 10.74,
              pX: -0.36,
              pZ: 3.74,
              vX0: 1.18,
              vY0: -134.65,
              vZ0: -5.55,
              x: 130.79,
              y: 137.7,
              x0: -1.29,
              y0: 50.01,
              z0: 6.74,
              aX: 6.73
            },
            breaks: {
              breakAngle: 26.4,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2456,
              spinDirection: 171
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.72
          },
          index: 2,
          playId: '948559a6-dbf9-48b4-b8fd-b387f02aed14',
          pitchNumber: 1,
          startTime: '2022-07-27T02:11:31.751Z',
          endTime: '2022-07-27T02:11:36.211Z',
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
            startSpeed: 90.8,
            endSpeed: 83.3,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.32,
              aZ: -14.9,
              pfxX: 4.31,
              pfxZ: 9.77,
              pX: -0.22,
              pZ: 2.61,
              vX0: 1.4,
              vY0: -132.17,
              vZ0: -7.47,
              x: 125.55,
              y: 168.43,
              x0: -1.32,
              y0: 50.0,
              z0: 6.56,
              aX: 7.62
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2472,
              spinDirection: 161
            },
            zone: 5,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.9
          },
          index: 3,
          playId: 'a4ec4d77-daeb-4ff6-9a63-6615e8ad4003',
          pitchNumber: 2,
          startTime: '2022-07-27T02:12:00.288Z',
          endTime: '2022-07-27T02:12:04.033Z',
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
            startSpeed: 91.7,
            endSpeed: 84.0,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 28.59,
              aZ: -10.84,
              pfxX: -1.67,
              pfxZ: 11.84,
              pX: -1.64,
              pZ: 2.3,
              vX0: -0.69,
              vY0: -133.38,
              vZ0: -8.99,
              x: 179.62,
              y: 176.75,
              x0: -1.16,
              y0: 50.0,
              z0: 6.49,
              aX: -3.01
            },
            breaks: {
              breakAngle: 14.4,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2219,
              spinDirection: 175
            },
            zone: 13,
            typeConfidence: 0.86,
            plateTime: 0.41,
            extension: 7.0
          },
          index: 4,
          playId: '8b74b49a-295e-478f-b26f-c7e300cb902d',
          pitchNumber: 3,
          startTime: '2022-07-27T02:12:25.720Z',
          endTime: '2022-07-27T02:12:29.848Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 89.5,
            endSpeed: 81.9,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 27.52,
              aZ: -15.58,
              pfxX: 4.95,
              pfxZ: 9.66,
              pX: -0.1,
              pZ: 3.4,
              vX0: 1.44,
              vY0: -130.25,
              vZ0: -5.3,
              x: 120.8,
              y: 147.05,
              x0: -1.3,
              y0: 50.0,
              z0: 6.64,
              aX: 8.5
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2504,
              spinDirection: 161
            },
            zone: 2,
            typeConfidence: 0.89,
            plateTime: 0.42,
            extension: 6.82
          },
          index: 5,
          playId: '5e50ef74-9b50-49c1-8a25-4b10f58fbc7e',
          pitchNumber: 4,
          startTime: '2022-07-27T02:12:57.477Z',
          endTime: '2022-07-27T02:13:00.780Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.3,
            endSpeed: 84.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 31.67,
              aZ: -9.0,
              pfxX: -3.01,
              pfxZ: 12.57,
              pX: -0.15,
              pZ: 1.57,
              vX0: 3.34,
              vY0: -135.42,
              vZ0: -11.08,
              x: 122.79,
              y: 196.27,
              x0: -1.01,
              y0: 50.0,
              z0: 6.37,
              aX: -5.54
            },
            breaks: {
              breakAngle: 22.8,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2253,
              spinDirection: 181
            },
            zone: 13,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 7.06
          },
          index: 6,
          playId: '0f58ec01-d7ff-4d90-a0d7-ac7d617d1965',
          pitchNumber: 5,
          startTime: '2022-07-27T02:13:33.315Z',
          endTime: '2022-07-27T02:13:39.269Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 85.4,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 30.64,
              aZ: -7.97,
              pfxX: -2.51,
              pfxZ: 12.93,
              pX: 0.23,
              pZ: 2.57,
              vX0: 3.83,
              vY0: -136.13,
              vZ0: -9.02,
              x: 108.32,
              y: 169.44,
              x0: -0.87,
              y0: 50.0,
              z0: 6.48,
              aX: -4.69
            },
            breaks: {
              breakAngle: 21.6,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2164,
              spinDirection: 178
            },
            zone: 5,
            typeConfidence: 0.89,
            plateTime: 0.4,
            extension: 7.08
          },
          index: 7,
          playId: '25df7b3d-1b1b-4706-b49f-177c60211bf9',
          pitchNumber: 6,
          startTime: '2022-07-27T02:14:08.948Z',
          endTime: '2022-07-27T02:14:14.479Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.6,
            endSpeed: 85.5,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 30.74,
              aZ: -9.96,
              pfxX: -3.81,
              pfxZ: 11.89,
              pX: -1.02,
              pZ: 1.92,
              vX0: 1.32,
              vY0: -136.02,
              vZ0: -10.3,
              x: 155.9,
              y: 187.02,
              x0: -1.02,
              y0: 50.01,
              z0: 6.45,
              aX: -7.11
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2138,
              spinDirection: 184
            },
            zone: 13,
            typeConfidence: 0.91,
            plateTime: 0.4,
            extension: 6.79
          },
          index: 8,
          playId: '41518f2b-23c3-4773-a4b3-c98dd6509212',
          pitchNumber: 7,
          startTime: '2022-07-27T02:14:47.647Z',
          endTime: '2022-07-27T02:14:51.191Z',
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
            outs: 1
          },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.6,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 29.4,
              aZ: -14.23,
              pfxX: 5.18,
              pfxZ: 9.85,
              pX: -0.21,
              pZ: 1.79,
              vX0: 0.49,
              vY0: -134.16,
              vZ0: -10.0,
              x: 124.91,
              y: 190.57,
              x0: -1.06,
              y0: 50.0,
              z0: 6.58,
              aX: 9.42
            },
            breaks: {
              breakAngle: 30.0,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2531,
              spinDirection: 162
            },
            zone: 8,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.81
          },
          index: 9,
          playId: '3c84f57c-9c99-4465-9d83-c1b246f75804',
          pitchNumber: 8,
          startTime: '2022-07-27T02:15:21.911Z',
          endTime: '2022-07-27T02:15:26.110Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 93.7,
            endSpeed: 85.8,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 29.65,
              aZ: -9.39,
              pfxX: -2.99,
              pfxZ: 12.11,
              pX: -0.89,
              pZ: 2.53,
              vX0: 1.0,
              vY0: -136.26,
              vZ0: -8.8,
              x: 150.77,
              y: 170.56,
              x0: -0.87,
              y0: 50.01,
              z0: 6.45,
              aX: -5.62
            },
            breaks: {
              breakAngle: 25.2,
              breakLength: 2.4,
              breakY: 24.0,
              spinRate: 2157,
              spinDirection: 179
            },
            zone: 11,
            typeConfidence: 0.9,
            plateTime: 0.4,
            extension: 7.01
          },
          index: 10,
          playId: '425fc2f6-4ae2-4b85-8da9-ac937a6971d1',
          pitchNumber: 9,
          startTime: '2022-07-27T02:15:58.588Z',
          endTime: '2022-07-27T02:16:02.219Z',
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
            balls: 2,
            strikes: 2,
            outs: 1
          },
          pitchData: {
            startSpeed: 81.7,
            endSpeed: 75.3,
            strikeZoneTop: 3.4,
            strikeZoneBottom: 1.62,
            coordinates: {
              aY: 23.53,
              aZ: -36.02,
              pfxX: 1.83,
              pfxZ: -2.69,
              pX: 0.32,
              pZ: 2.29,
              vX0: 2.65,
              vY0: -118.98,
              vZ0: -2.73,
              x: 104.71,
              y: 176.84,
              x0: -1.04,
              y0: 50.0,
              z0: 6.73,
              aX: 2.61
            },
            breaks: {
              breakAngle: 4.8,
              breakLength: 10.8,
              breakY: 24.0,
              spinRate: 2503,
              spinDirection: 33
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.46,
            extension: 6.87
          },
          hitData: {
            launchSpeed: 90.8,
            launchAngle: 47.0,
            totalDistance: 275.0,
            trajectory: 'fly_ball',
            hardness: 'medium',
            location: '8',
            coordinates: {
              coordX: 119.63,
              coordY: 89.81
            }
          },
          index: 11,
          playId: 'da99985b-d16a-48a7-8670-570cb32cee68',
          pitchNumber: 10,
          startTime: '2022-07-27T02:16:38.072Z',
          endTime: '2022-07-27T02:16:51.119Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T02:16:51.119Z',
      atBatIndex: 71
    },
    {
      result: {
        type: 'atBat',
        event: 'Groundout',
        eventType: 'field_out',
        description:
          'Alec Bohm grounds out, second baseman Orlando Arcia to first baseman Matt Olson.',
        rbi: 0,
        awayScore: 6,
        homeScore: 3
      },
      about: {
        atBatIndex: 72,
        halfInning: 'bottom',
        isTopInning: false,
        inning: 9,
        startTime: '2022-07-27T02:17:08.260Z',
        endTime: '2022-07-27T02:18:26.446Z',
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
          id: 664761,
          fullName: 'Alec Bohm',
          link: '/api/v1/people/664761'
        },
        batSide: {
          code: 'R',
          description: 'Right'
        },
        pitcher: {
          id: 445276,
          fullName: 'Kenley Jansen',
          link: '/api/v1/people/445276'
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
                    name: 'exitVelocity',
                    zones: [
                      {
                        zone: '01',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '81.86'
                      },
                      {
                        zone: '02',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '93.13'
                      },
                      {
                        zone: '03',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '97.77'
                      },
                      {
                        zone: '04',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '90.83'
                      },
                      {
                        zone: '05',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '95.75'
                      },
                      {
                        zone: '06',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '95.97'
                      },
                      {
                        zone: '07',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '93.28'
                      },
                      {
                        zone: '08',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '97.67'
                      },
                      {
                        zone: '09',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '90.15'
                      },
                      {
                        zone: '11',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '75.65'
                      },
                      {
                        zone: '12',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '90.93'
                      },
                      {
                        zone: '13',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '92.23'
                      },
                      {
                        zone: '14',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '84.24'
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
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '.478'
                      },
                      {
                        zone: '02',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.261'
                      },
                      {
                        zone: '03',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '.455'
                      },
                      {
                        zone: '04',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.286'
                      },
                      {
                        zone: '05',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.258'
                      },
                      {
                        zone: '06',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '.400'
                      },
                      {
                        zone: '07',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '.320'
                      },
                      {
                        zone: '08',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '.333'
                      },
                      {
                        zone: '09',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '.429'
                      },
                      {
                        zone: '11',
                        color: 'rgba(214, 41, 52, .55)',
                        temp: 'hot',
                        value: '.353'
                      },
                      {
                        zone: '12',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.143'
                      },
                      {
                        zone: '13',
                        color: 'rgba(150, 188, 255, .55)',
                        temp: 'cool',
                        value: '.238'
                      },
                      {
                        zone: '14',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.154'
                      }
                    ]
                  }
                },
                {
                  stat: {
                    name: 'onBasePlusSlugging',
                    zones: [
                      {
                        zone: '01',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '1.000'
                      },
                      {
                        zone: '02',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.522'
                      },
                      {
                        zone: '03',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '1.091'
                      },
                      {
                        zone: '04',
                        color: 'rgba(150, 188, 255, .55)',
                        temp: 'cool',
                        value: '.586'
                      },
                      {
                        zone: '05',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.806'
                      },
                      {
                        zone: '06',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '1.000'
                      },
                      {
                        zone: '07',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.654'
                      },
                      {
                        zone: '08',
                        color: 'rgba(150, 188, 255, .55)',
                        temp: 'cool',
                        value: '.583'
                      },
                      {
                        zone: '09',
                        color: 'rgba(234, 147, 153, .55)',
                        temp: 'warm',
                        value: '1.000'
                      },
                      {
                        zone: '11',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.811'
                      },
                      {
                        zone: '12',
                        color: 'rgba(255, 255, 255, 0.55)',
                        temp: 'lukewarm',
                        value: '.667'
                      },
                      {
                        zone: '13',
                        color: 'rgba(150, 188, 255, .55)',
                        temp: 'cool',
                        value: '.630'
                      },
                      {
                        zone: '14',
                        color: 'rgba(6, 90, 238, .55)',
                        temp: 'cold',
                        value: '.459'
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
            color: 'rgba(234, 147, 153, .55)',
            temp: 'warm',
            value: '1.000'
          },
          {
            zone: '02',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.522'
          },
          {
            zone: '03',
            color: 'rgba(234, 147, 153, .55)',
            temp: 'warm',
            value: '1.091'
          },
          {
            zone: '04',
            color: 'rgba(150, 188, 255, .55)',
            temp: 'cool',
            value: '.586'
          },
          {
            zone: '05',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.806'
          },
          {
            zone: '06',
            color: 'rgba(234, 147, 153, .55)',
            temp: 'warm',
            value: '1.000'
          },
          {
            zone: '07',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.654'
          },
          {
            zone: '08',
            color: 'rgba(150, 188, 255, .55)',
            temp: 'cool',
            value: '.583'
          },
          {
            zone: '09',
            color: 'rgba(234, 147, 153, .55)',
            temp: 'warm',
            value: '1.000'
          },
          {
            zone: '11',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.811'
          },
          {
            zone: '12',
            color: 'rgba(255, 255, 255, 0.55)',
            temp: 'lukewarm',
            value: '.667'
          },
          {
            zone: '13',
            color: 'rgba(150, 188, 255, .55)',
            temp: 'cool',
            value: '.630'
          },
          {
            zone: '14',
            color: 'rgba(6, 90, 238, .55)',
            temp: 'cold',
            value: '.459'
          }
        ],
        pitcherHotColdZones: [],
        splits: {
          batter: 'vs_RHP',
          pitcher: 'vs_RHB',
          menOnBase: 'Empty'
        }
      },
      pitchIndex: [1, 3],
      actionIndex: [0, 2],
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
            event: 'Defensive Indiff',
            eventType: 'defensive_indiff',
            movementReason: 'r_defensive_indiff',
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
            event: 'Groundout',
            eventType: 'field_out',
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
                id: 606115,
                link: '/api/v1/people/606115'
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
            description: 'Mound Visit.',
            event: 'Game Advisory',
            eventType: 'game_advisory',
            awayScore: 6,
            homeScore: 3,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 0,
            outs: 2
          },
          index: 0,
          startTime: '2022-07-27T02:17:08.260Z',
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
            hasReview: false,
            runnerGoing: true
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 92.3,
            endSpeed: 84.9,
            strikeZoneTop: 3.44,
            strikeZoneBottom: 1.6,
            coordinates: {
              aY: 28.3,
              aZ: -14.72,
              pfxX: 4.75,
              pfxZ: 9.53,
              pX: -0.41,
              pZ: 2.05,
              vX0: 0.07,
              vY0: -134.3,
              vZ0: -9.09,
              x: 132.57,
              y: 183.33,
              x0: -1.05,
              y0: 50.0,
              z0: 6.52,
              aX: 8.71
            },
            breaks: {
              breakAngle: 27.6,
              breakLength: 3.6,
              breakY: 24.0,
              spinRate: 2374,
              spinDirection: 167
            },
            zone: 7,
            typeConfidence: 0.91,
            plateTime: 0.41,
            extension: 6.9
          },
          index: 1,
          playId: '7e2eb53d-8def-4a3b-b761-c7566ff5343a',
          pitchNumber: 1,
          startTime: '2022-07-27T02:17:52.023Z',
          endTime: '2022-07-27T02:17:56.030Z',
          isPitch: true,
          type: 'pitch'
        },
        {
          details: {
            description:
              'Nick Castellanos advances to 2nd on defensive indifference.',
            event: 'Defensive Indiff',
            eventType: 'defensive_indiff',
            awayScore: 6,
            homeScore: 3,
            isScoringPlay: false,
            hasReview: false
          },
          count: {
            balls: 0,
            strikes: 1,
            outs: 2
          },
          index: 2,
          actionPlayId: '7e2eb53d-8def-4a3b-b761-c7566ff5343a',
          startTime: '2022-07-27T02:18:00.974Z',
          isPitch: false,
          isBaseRunningPlay: true,
          type: 'action',
          player: {
            id: 592206,
            link: '/api/v1/people/592206'
          }
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
            balls: 0,
            strikes: 1,
            outs: 2
          },
          pitchData: {
            startSpeed: 91.7,
            endSpeed: 84.3,
            strikeZoneTop: 3.48,
            strikeZoneBottom: 1.63,
            coordinates: {
              aY: 28.11,
              aZ: -15.35,
              pfxX: 4.99,
              pfxZ: 9.31,
              pX: 0.24,
              pZ: 2.48,
              vX0: 1.05,
              vY0: -133.42,
              vZ0: -8.06,
              x: 107.69,
              y: 171.76,
              x0: -0.8,
              y0: 50.01,
              z0: 6.64,
              aX: 9.02
            },
            breaks: {
              breakAngle: 28.8,
              breakLength: 4.8,
              breakY: 24.0,
              spinRate: 2527,
              spinDirection: 159
            },
            zone: 6,
            typeConfidence: 0.9,
            plateTime: 0.41,
            extension: 6.82
          },
          hitData: {
            launchSpeed: 102.6,
            launchAngle: -0.0,
            totalDistance: 45.0,
            trajectory: 'ground_ball',
            hardness: 'medium',
            location: '4',
            coordinates: {
              coordX: 140.72,
              coordY: 147.86
            }
          },
          index: 3,
          playId: 'a67e64ed-f07d-4a09-b79b-aa734d58ce78',
          pitchNumber: 2,
          startTime: '2022-07-27T02:18:18.694Z',
          endTime: '2022-07-27T02:18:26.446Z',
          isPitch: true,
          type: 'pitch'
        }
      ],
      playEndTime: '2022-07-27T02:18:26.446Z',
      atBatIndex: 72
    }
  ],
  currentPlay: {
    result: {
      type: 'atBat',
      event: 'Groundout',
      eventType: 'field_out',
      description:
        'Alec Bohm grounds out, second baseman Orlando Arcia to first baseman Matt Olson.',
      rbi: 0,
      awayScore: 6,
      homeScore: 3
    },
    about: {
      atBatIndex: 72,
      halfInning: 'bottom',
      isTopInning: false,
      inning: 9,
      startTime: '2022-07-27T02:17:08.260Z',
      endTime: '2022-07-27T02:18:26.446Z',
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
        id: 664761,
        fullName: 'Alec Bohm',
        link: '/api/v1/people/664761'
      },
      batSide: {
        code: 'R',
        description: 'Right'
      },
      pitcher: {
        id: 445276,
        fullName: 'Kenley Jansen',
        link: '/api/v1/people/445276'
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
                  name: 'exitVelocity',
                  zones: [
                    {
                      zone: '01',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '81.86'
                    },
                    {
                      zone: '02',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '93.13'
                    },
                    {
                      zone: '03',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '97.77'
                    },
                    {
                      zone: '04',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '90.83'
                    },
                    {
                      zone: '05',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '95.75'
                    },
                    {
                      zone: '06',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '95.97'
                    },
                    {
                      zone: '07',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '93.28'
                    },
                    {
                      zone: '08',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '97.67'
                    },
                    {
                      zone: '09',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '90.15'
                    },
                    {
                      zone: '11',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '75.65'
                    },
                    {
                      zone: '12',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '90.93'
                    },
                    {
                      zone: '13',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '92.23'
                    },
                    {
                      zone: '14',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '84.24'
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
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '.478'
                    },
                    {
                      zone: '02',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.261'
                    },
                    {
                      zone: '03',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '.455'
                    },
                    {
                      zone: '04',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.286'
                    },
                    {
                      zone: '05',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.258'
                    },
                    {
                      zone: '06',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '.400'
                    },
                    {
                      zone: '07',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '.320'
                    },
                    {
                      zone: '08',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '.333'
                    },
                    {
                      zone: '09',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '.429'
                    },
                    {
                      zone: '11',
                      color: 'rgba(214, 41, 52, .55)',
                      temp: 'hot',
                      value: '.353'
                    },
                    {
                      zone: '12',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.143'
                    },
                    {
                      zone: '13',
                      color: 'rgba(150, 188, 255, .55)',
                      temp: 'cool',
                      value: '.238'
                    },
                    {
                      zone: '14',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.154'
                    }
                  ]
                }
              },
              {
                stat: {
                  name: 'onBasePlusSlugging',
                  zones: [
                    {
                      zone: '01',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '1.000'
                    },
                    {
                      zone: '02',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.522'
                    },
                    {
                      zone: '03',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '1.091'
                    },
                    {
                      zone: '04',
                      color: 'rgba(150, 188, 255, .55)',
                      temp: 'cool',
                      value: '.586'
                    },
                    {
                      zone: '05',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.806'
                    },
                    {
                      zone: '06',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '1.000'
                    },
                    {
                      zone: '07',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.654'
                    },
                    {
                      zone: '08',
                      color: 'rgba(150, 188, 255, .55)',
                      temp: 'cool',
                      value: '.583'
                    },
                    {
                      zone: '09',
                      color: 'rgba(234, 147, 153, .55)',
                      temp: 'warm',
                      value: '1.000'
                    },
                    {
                      zone: '11',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.811'
                    },
                    {
                      zone: '12',
                      color: 'rgba(255, 255, 255, 0.55)',
                      temp: 'lukewarm',
                      value: '.667'
                    },
                    {
                      zone: '13',
                      color: 'rgba(150, 188, 255, .55)',
                      temp: 'cool',
                      value: '.630'
                    },
                    {
                      zone: '14',
                      color: 'rgba(6, 90, 238, .55)',
                      temp: 'cold',
                      value: '.459'
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
          color: 'rgba(234, 147, 153, .55)',
          temp: 'warm',
          value: '1.000'
        },
        {
          zone: '02',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.522'
        },
        {
          zone: '03',
          color: 'rgba(234, 147, 153, .55)',
          temp: 'warm',
          value: '1.091'
        },
        {
          zone: '04',
          color: 'rgba(150, 188, 255, .55)',
          temp: 'cool',
          value: '.586'
        },
        {
          zone: '05',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.806'
        },
        {
          zone: '06',
          color: 'rgba(234, 147, 153, .55)',
          temp: 'warm',
          value: '1.000'
        },
        {
          zone: '07',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.654'
        },
        {
          zone: '08',
          color: 'rgba(150, 188, 255, .55)',
          temp: 'cool',
          value: '.583'
        },
        {
          zone: '09',
          color: 'rgba(234, 147, 153, .55)',
          temp: 'warm',
          value: '1.000'
        },
        {
          zone: '11',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.811'
        },
        {
          zone: '12',
          color: 'rgba(255, 255, 255, 0.55)',
          temp: 'lukewarm',
          value: '.667'
        },
        {
          zone: '13',
          color: 'rgba(150, 188, 255, .55)',
          temp: 'cool',
          value: '.630'
        },
        {
          zone: '14',
          color: 'rgba(6, 90, 238, .55)',
          temp: 'cold',
          value: '.459'
        }
      ],
      pitcherHotColdZones: [],
      splits: {
        batter: 'vs_RHP',
        pitcher: 'vs_RHB',
        menOnBase: 'Empty'
      }
    },
    pitchIndex: [1, 3],
    actionIndex: [0, 2],
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
          event: 'Defensive Indiff',
          eventType: 'defensive_indiff',
          movementReason: 'r_defensive_indiff',
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
          event: 'Groundout',
          eventType: 'field_out',
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
              id: 606115,
              link: '/api/v1/people/606115'
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
          description: 'Mound Visit.',
          event: 'Game Advisory',
          eventType: 'game_advisory',
          awayScore: 6,
          homeScore: 3,
          isScoringPlay: false,
          hasReview: false
        },
        count: {
          balls: 0,
          strikes: 0,
          outs: 2
        },
        index: 0,
        startTime: '2022-07-27T02:17:08.260Z',
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
          hasReview: false,
          runnerGoing: true
        },
        count: {
          balls: 0,
          strikes: 1,
          outs: 2
        },
        pitchData: {
          startSpeed: 92.3,
          endSpeed: 84.9,
          strikeZoneTop: 3.44,
          strikeZoneBottom: 1.6,
          coordinates: {
            aY: 28.3,
            aZ: -14.72,
            pfxX: 4.75,
            pfxZ: 9.53,
            pX: -0.41,
            pZ: 2.05,
            vX0: 0.07,
            vY0: -134.3,
            vZ0: -9.09,
            x: 132.57,
            y: 183.33,
            x0: -1.05,
            y0: 50.0,
            z0: 6.52,
            aX: 8.71
          },
          breaks: {
            breakAngle: 27.6,
            breakLength: 3.6,
            breakY: 24.0,
            spinRate: 2374,
            spinDirection: 167
          },
          zone: 7,
          typeConfidence: 0.91,
          plateTime: 0.41,
          extension: 6.9
        },
        index: 1,
        playId: '7e2eb53d-8def-4a3b-b761-c7566ff5343a',
        pitchNumber: 1,
        startTime: '2022-07-27T02:17:52.023Z',
        endTime: '2022-07-27T02:17:56.030Z',
        isPitch: true,
        type: 'pitch'
      },
      {
        details: {
          description:
            'Nick Castellanos advances to 2nd on defensive indifference.',
          event: 'Defensive Indiff',
          eventType: 'defensive_indiff',
          awayScore: 6,
          homeScore: 3,
          isScoringPlay: false,
          hasReview: false
        },
        count: {
          balls: 0,
          strikes: 1,
          outs: 2
        },
        index: 2,
        actionPlayId: '7e2eb53d-8def-4a3b-b761-c7566ff5343a',
        startTime: '2022-07-27T02:18:00.974Z',
        isPitch: false,
        isBaseRunningPlay: true,
        type: 'action',
        player: {
          id: 592206,
          link: '/api/v1/people/592206'
        }
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
          balls: 0,
          strikes: 1,
          outs: 2
        },
        pitchData: {
          startSpeed: 91.7,
          endSpeed: 84.3,
          strikeZoneTop: 3.48,
          strikeZoneBottom: 1.63,
          coordinates: {
            aY: 28.11,
            aZ: -15.35,
            pfxX: 4.99,
            pfxZ: 9.31,
            pX: 0.24,
            pZ: 2.48,
            vX0: 1.05,
            vY0: -133.42,
            vZ0: -8.06,
            x: 107.69,
            y: 171.76,
            x0: -0.8,
            y0: 50.01,
            z0: 6.64,
            aX: 9.02
          },
          breaks: {
            breakAngle: 28.8,
            breakLength: 4.8,
            breakY: 24.0,
            spinRate: 2527,
            spinDirection: 159
          },
          zone: 6,
          typeConfidence: 0.9,
          plateTime: 0.41,
          extension: 6.82
        },
        hitData: {
          launchSpeed: 102.6,
          launchAngle: -0.0,
          totalDistance: 45.0,
          trajectory: 'ground_ball',
          hardness: 'medium',
          location: '4',
          coordinates: {
            coordX: 140.72,
            coordY: 147.86
          }
        },
        index: 3,
        playId: 'a67e64ed-f07d-4a09-b79b-aa734d58ce78',
        pitchNumber: 2,
        startTime: '2022-07-27T02:18:18.694Z',
        endTime: '2022-07-27T02:18:26.446Z',
        isPitch: true,
        type: 'pitch'
      }
    ],
    playEndTime: '2022-07-27T02:18:26.446Z',
    atBatIndex: 72
  },
  scoringPlays: [3, 14, 24, 33, 44, 64, 68],
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
            },
            coordinates: {
              x: 141.82,
              y: 176.98
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
            inning: 1,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            coordinates: {
              x: 44.7,
              y: 106.85
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
            inning: 1,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            coordinates: {
              x: 119.39,
              y: 79.66
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            coordinates: {
              x: 75.2,
              y: 60.82
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
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 1,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 518595,
              fullName: "Travis d'Arnaud",
              link: '/api/v1/people/518595'
            },
            coordinates: {
              x: 99.58,
              y: 169.75
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
            inning: 1,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
            },
            coordinates: {
              x: 119.55,
              y: 100.8
            },
            type: 'O',
            description: 'Flyout'
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
            },
            coordinates: {
              x: 179.2,
              y: 82.2
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
            inning: 2,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
            },
            coordinates: {
              x: 59.09,
              y: 124.79
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
            inning: 2,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
            },
            coordinates: {
              x: 158.71,
              y: 100.4
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
            inning: 2,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            coordinates: {
              x: 110.25,
              y: 143.28
            },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 14,
      endIndex: 21,
      top: [14, 15, 16, 17],
      bottom: [18, 19, 20, 21],
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
            },
            coordinates: {
              x: 190.14,
              y: 61.95
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
            inning: 3,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
            },
            coordinates: {
              x: 109.23,
              y: 164.66
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            coordinates: {
              x: 99.58,
              y: 163.64
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            coordinates: {
              x: 166.63,
              y: 143.28
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
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            coordinates: {
              x: 148.17,
              y: 82.17
            },
            type: 'H',
            description: 'Single'
          }
        ]
      }
    },
    {
      startIndex: 22,
      endIndex: 29,
      top: [22, 23, 24, 25, 26],
      bottom: [27, 28, 29],
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            coordinates: {
              x: 43.03,
              y: 122.66
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
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 4,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
            },
            coordinates: {
              x: 158.27,
              y: 68.01
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
            },
            coordinates: {
              x: 182.99,
              y: 70.85
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
            inning: 4,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
            },
            coordinates: {
              x: 81.83,
              y: 150.34
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
            inning: 4,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            coordinates: {
              x: 105.43,
              y: 147.39
            },
            type: 'O',
            description: 'Pop Out'
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
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
            },
            coordinates: {
              x: 100.56,
              y: 60.86
            },
            type: 'O',
            description: 'Flyout'
          }
        ]
      }
    },
    {
      startIndex: 30,
      endIndex: 39,
      top: [30, 31, 32, 33, 34, 35],
      bottom: [36, 37, 38, 39],
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            coordinates: {
              x: 83.53,
              y: 66.46
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
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 5,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 621566,
              fullName: 'Matt Olson',
              link: '/api/v1/people/621566'
            },
            coordinates: {
              x: 165.37,
              y: 35.19
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
            inning: 5,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 518595,
              fullName: "Travis d'Arnaud",
              link: '/api/v1/people/518595'
            },
            coordinates: {
              x: 150.04,
              y: 68.59
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
            inning: 5,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
            },
            coordinates: {
              x: 95.51,
              y: 167.71
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
            inning: 5,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            coordinates: {
              x: 72.02,
              y: 134.14
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
            inning: 5,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            coordinates: {
              x: 191.52,
              y: 133.1
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
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
            },
            coordinates: {
              x: 60.81,
              y: 72.41
            },
            type: 'O',
            description: 'Flyout'
          }
        ]
      }
    },
    {
      startIndex: 40,
      endIndex: 47,
      top: [40, 41, 42],
      bottom: [43, 44, 45, 46, 47],
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
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 542303,
              fullName: 'Marcell Ozuna',
              link: '/api/v1/people/542303'
            },
            coordinates: {
              x: 136.76,
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
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 6,
            pitcher: {
              id: 605400,
              fullName: 'Aaron Nola',
              link: '/api/v1/people/605400'
            },
            batter: {
              id: 429664,
              fullName: 'Robinson Cano',
              link: '/api/v1/people/429664'
            },
            coordinates: {
              x: 174.25,
              y: 137.17
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
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 663837,
              fullName: 'Matt Vierling',
              link: '/api/v1/people/663837'
            },
            coordinates: {
              x: 125.08,
              y: 197.69
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
            inning: 6,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 656941,
              fullName: 'Kyle Schwarber',
              link: '/api/v1/people/656941'
            },
            coordinates: {
              x: 96.44,
              y: 33.25
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
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 6,
            pitcher: {
              id: 675911,
              fullName: 'Spencer Strider',
              link: '/api/v1/people/675911'
            },
            batter: {
              id: 669742,
              fullName: 'Darick Hall',
              link: '/api/v1/people/669742'
            },
            coordinates: {
              x: 152.92,
              y: 160.58
            },
            type: 'O',
            description: 'Pop Out'
          }
        ]
      }
    },
    {
      startIndex: 48,
      endIndex: 54,
      top: [48, 49, 50, 51],
      bottom: [52, 53, 54],
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
              id: 544727,
              fullName: 'Jeurys Familia',
              link: '/api/v1/people/544727'
            },
            batter: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
            },
            coordinates: {
              x: 75.96,
              y: 86.47
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
            inning: 7,
            pitcher: {
              id: 544727,
              fullName: 'Jeurys Familia',
              link: '/api/v1/people/544727'
            },
            batter: {
              id: 621020,
              fullName: 'Dansby Swanson',
              link: '/api/v1/people/621020'
            },
            coordinates: {
              x: 81.29,
              y: 101.03
            },
            type: 'H',
            description: 'Single'
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
              id: 543521,
              fullName: 'Collin McHugh',
              link: '/api/v1/people/543521'
            },
            batter: {
              id: 592206,
              fullName: 'Nick Castellanos',
              link: '/api/v1/people/592206'
            },
            coordinates: {
              x: 113.8,
              y: 167.71
            },
            type: 'O',
            description: 'Pop Out'
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
              id: 543521,
              fullName: 'Collin McHugh',
              link: '/api/v1/people/543521'
            },
            batter: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            coordinates: {
              x: 145.3,
              y: 146.84
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
              id: 543521,
              fullName: 'Collin McHugh',
              link: '/api/v1/people/543521'
            },
            batter: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            coordinates: {
              x: 153.37,
              y: 143.69
            },
            type: 'O',
            description: 'Pop Out'
          }
        ]
      }
    },
    {
      startIndex: 55,
      endIndex: 60,
      top: [55, 56, 57],
      bottom: [58, 59, 60],
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
              id: 608349,
              fullName: 'Corey Knebel',
              link: '/api/v1/people/608349'
            },
            batter: {
              id: 663586,
              fullName: 'Austin Riley',
              link: '/api/v1/people/663586'
            },
            coordinates: {
              x: 123.66,
              y: 129.65
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
              id: 608349,
              fullName: 'Corey Knebel',
              link: '/api/v1/people/608349'
            },
            batter: {
              id: 518595,
              fullName: "Travis d'Arnaud",
              link: '/api/v1/people/518595'
            },
            coordinates: {
              x: 102.63,
              y: 156.0
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
            inning: 8,
            pitcher: {
              id: 543521,
              fullName: 'Collin McHugh',
              link: '/api/v1/people/543521'
            },
            batter: {
              id: 544369,
              fullName: 'Didi Gregorius',
              link: '/api/v1/people/544369'
            },
            coordinates: {
              x: 154.44,
              y: 131.06
            },
            type: 'O',
            description: 'Pop Out'
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
              id: 543521,
              fullName: 'Collin McHugh',
              link: '/api/v1/people/543521'
            },
            batter: {
              id: 663837,
              fullName: 'Matt Vierling',
              link: '/api/v1/people/663837'
            },
            coordinates: {
              x: 134.16,
              y: 136.14
            },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    },
    {
      startIndex: 61,
      endIndex: 72,
      top: [61, 62, 63, 64, 65, 66],
      bottom: [67, 68, 69, 70, 71, 72],
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
              id: 656793,
              fullName: 'Nick Nelson',
              link: '/api/v1/people/656793'
            },
            batter: {
              id: 592696,
              fullName: 'Eddie Rosario',
              link: '/api/v1/people/592696'
            },
            coordinates: {
              x: 119.18,
              y: 89.63
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
              id: 656793,
              fullName: 'Nick Nelson',
              link: '/api/v1/people/656793'
            },
            batter: {
              id: 671739,
              fullName: 'Michael Harris II',
              link: '/api/v1/people/671739'
            },
            coordinates: {
              x: 214.28,
              y: 98.51
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
              id: 144,
              name: 'Atlanta Braves',
              link: '/api/v1/teams/144'
            },
            inning: 9,
            pitcher: {
              id: 656793,
              fullName: 'Nick Nelson',
              link: '/api/v1/people/656793'
            },
            batter: {
              id: 660670,
              fullName: 'Ronald Acuna Jr.',
              link: '/api/v1/people/660670'
            },
            coordinates: {
              x: 101.83,
              y: 160.06
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
            inning: 9,
            pitcher: {
              id: 519293,
              fullName: 'Will Smith',
              link: '/api/v1/people/519293'
            },
            batter: {
              id: 656555,
              fullName: 'Rhys Hoskins',
              link: '/api/v1/people/656555'
            },
            coordinates: {
              x: 169.51,
              y: 112.02
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
            inning: 9,
            pitcher: {
              id: 519293,
              fullName: 'Will Smith',
              link: '/api/v1/people/519293'
            },
            batter: {
              id: 592663,
              fullName: 'J.T. Realmuto',
              link: '/api/v1/people/592663'
            },
            coordinates: {
              x: 44.1,
              y: 67.18
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
              id: 143,
              name: 'Philadelphia Phillies',
              link: '/api/v1/teams/143'
            },
            inning: 9,
            pitcher: {
              id: 445276,
              fullName: 'Kenley Jansen',
              link: '/api/v1/people/445276'
            },
            batter: {
              id: 681082,
              fullName: 'Bryson Stott',
              link: '/api/v1/people/681082'
            },
            coordinates: {
              x: 119.63,
              y: 89.81
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
            inning: 9,
            pitcher: {
              id: 445276,
              fullName: 'Kenley Jansen',
              link: '/api/v1/people/445276'
            },
            batter: {
              id: 664761,
              fullName: 'Alec Bohm',
              link: '/api/v1/people/664761'
            },
            coordinates: {
              x: 140.72,
              y: 147.86
            },
            type: 'O',
            description: 'Groundout'
          }
        ]
      }
    }
  ]
}
