# scorekeepr

This is a very new, and very work-in-progress library for general baseball scorekeeping and game data.

## Installation

`npm install scorekeepr`

## Usage

Check out the API reference [here](https://scorekeepr.tech)

The base Scorekeepr class initializes a game that can take a initial game data:

```ts
import { Scorekeepr } from 'scorekeepr'

const scorekeeper = new Scorekeepr({
  homeTeam: { abbreviation: 'HT', fullName: 'The Home Team' },
  visitingTeam: { abbreviation: 'VT', fullName: 'The Visiting Team' },
  date: '2020-10-15',
  startTime: '7:30pm',
  location: 'The Stadium',
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

All the initial fields are optional. You can set the lineups and game info after intialization:

```ts
import { Scorekeepr } from 'scorekeepr'

const scorekeeper = new Scorekeepr()
```
