# scorekeepr

This is a very new, and very work-in-progress library for general baseball scorekeeping and game data.

## Installation

`npm install scorekeepr`

## API Reference

Check out the API reference [here](https://scorekeepr.tech)

## Setting up a game

The base Scorekeepr class initializes a game that can take a initial game data:

```ts
import { Scorekeepr } from 'scorekeepr'

const scorekeeper = new Scorekeepr({
  homeTeam: { abbreviation: 'HT', fullName: 'The Home Team' },
  visitingTeam: { abbreviation: 'VT', fullName: 'The Visiting Team' },
  date: '2020-10-15',
  startTime: '7:30pm',
  location: 'The Stadium',
  // this is mostly for games from other sources (ie, Retrosheet) that have a unique id
  id: 'TheGameId',
  initialInningCount: 7,
  homeLineup: [
    { player: { name: 'Home Player 1' }, position: 1 },
    { player: { name: 'Home Player 2' }, position: 2 }
  ],
  visitingLineup: [
    { player: { name: 'Visiting Player 1' }, position: 1 },
    { player: { name: 'Visiting Player 2' }, position: 2 }
  ]
})
```

You can also set the game info after intialization:

```ts
import { Scorekeepr } from 'scorekeepr'

const gameInfo = {
  date: '2020-10-15',
  startTime: '7:30pm',
  location: 'The Stadium'
}
const sk = new Scorekeepr(gameInfo)

sk.updateGameInfo({
  homeTeam: { abbreviation: 'HT', fullName: 'The Home Team' }
})
```

If you already have full game data with substitutions and lineup changes, you can add that with the `setPlayers` method:

```ts
import { Scorekeepr } from 'scorekeepr'

const scorekeeper = new Scorekeepr()

sk.setPlayers({
  home: {
    batters: [
      [{ player: { name: 'Home Player 1' }, position: 3, inning: 0 }],
      [{ player: { name: 'Home Player 2' }, position: 3, inning: 1 }]
    ],
    pitchers: [
      {
        player: { name: 'Home Pitcher 1' },
        type: 'starter',
        inning: 0,
        stats: { er: 0 }
      },
      {
        player: { name: 'Home Pitcher 2' },
        type: 'reliever',
        inning: 1,
        stats: { er: 0 }
      }
    ]
  },
  visiting: {
    batters: [
      [
        {
          player: { name: 'Visiting Player 1' },
          position: 3,
          inning: 0
        },
        {
          player: { name: 'Visiting Player 1' },
          position: 3,
          inning: 1
        }
      ]
    ],
    pitchers: [
      {
        player: { name: 'Visiting Pitcher 1' },
        inning: 0,
        type: 'starter',
        stats: { er: 0 }
      }
    ]
  }
})
```

## Recording gameplay

### Lineup substitutions

You can record player substitutions with either `Scorekeepr.subPlayer` or `Scorekeepr.subPitcher`. The difference is that `subPlayer` will add the player to both the batting lineup and pitchers list. `subPitcher` will only add the player to the pitchers list. So if you're using a DH or don't want relief pitchers in the batting lineup, tend towards using `subPitcher`

### Recording game action

All game action currently goes through `Scorekeepr.handleGameEvent`. Currently, this method is a wide-open footgun that will accept really anything you want to do.

#### Generators

- You can pass data directly into `handleGameEvent`, but I would reccomend leaning on the functions exposed through `generators.actions` and `generators.gameEvents`.
- There are also 2 utility functions exposed in `generators.utils` - `getGameEvent` and `getBases` that take an override parameter generate a full game event and base movement that are very helpful
- `gameEvents` are a level up from `actions` - they themselves typically contain an action from `generators.actions` & possibly additional data, and return a full `gameEvent`, which is what `handleGameEvent` accepts
- it's very helpful to look at the tests [here](https://github.com/burdell/scorekeepr/tree/master/tests/Scorekeeper) to see how `handleGameEvent` is used in orchestration with the generators

#### A simple example

This is how you would record a walk and a single that moved the runner to third

```ts
import { Scorekeepr, generators } from 'scorekeepr'
const sk = new Scorekeepr()
const { utils, actions } = generators

sk.handleGameEvent({
  event: utils.getGameEvent({
    pitches: {
      balls: 3,
      strikes: 0,
      pitchCount: 4
    },
    result: actions.pitcherResult('BB'),
    bases: utils.getBases({
      B: {
        endBase: 1,
        isAtBatResult: true
      }
    })
  }),
  inning: 0,
  lineupSpot: 0,
  team: 'visiting'
})

sk.handleGameEvent({
  event: utils.getGameEvent({
    pitches: {
      balls: 0,
      strikes: 0,
      pitchCount: 1
    },
    result: actions.hit(1),
    bases: utils.getBases({
      B: {
        endBase: 1,
        isAtBatResult: true
      },
      1: {
        endBase: 3
      }
    })
  }),
  inning: 0,
  lineupSpot: 1,
  team: 'visiting'
})
```

As you can see, it's pretty hard to use. Up next for this library is to abstract out different game actions so that it's a little easier.

## Integrations

- This library currently is mostly used for parsing Retrosheet data. The tools for that can be importing using `import * as retrosheet from 'scorekeepr/retrosheet'`
