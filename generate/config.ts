import { BuildConfig } from './build.types'

export const buildConfig: BuildConfig[] = [
  {
    name: '1995 Braves Playoffs',
    targetTeam: 'Atlanta Braves',
    type: 'series-group',
    series: [
      {
        retrosheetFiles: ['braves_1995/1995_NLDS.txt'],
        seriesId: () => '1995_nlds',
        seriesName: 'NLDS'
      },
      {
        retrosheetFiles: ['braves_1995/1995_NLCS.txt'],
        seriesId: () => '1995_nlcs',
        seriesName: 'NLCS'
      },
      {
        retrosheetFiles: ['braves_1995/1995_WS.txt'],
        seriesId: () => '1995_ws',
        seriesName: 'World Series'
      }
    ],
    urlSlug: '1995-playoffs',
    description: 'All 1995 Braves Playoff Games',
    gameDescriptions: {
      ATL199510280: 'Braves win!'
    }
  },
  {
    name: 'Perfect Games',
    type: 'category',
    retrosheetFiles: ['perfect_games.txt'],
    urlSlug: 'perfectgames',
    description: 'All perfect games in MLB since 1922.',
    gameDescriptions: {
      DET19220430: 'Charlie Robertson',
      NYA195610080: 'Don Larsen (World Series)',
      NYN196406211: 'Jim Bunning',
      LAN196509090: 'Sandy Koufax',
      OAK196805080: 'Catfish Hunter',
      CLE198105150: 'Len Barker',
      TEX198409300: 'Mike Witt',
      CIN198809160: 'Tom Browning',
      LAN199107280: 'Dennis Martinez',
      TEX199407280: 'Kenny Rogers',
      NYA199805170: 'David Wells',
      NYA199907180: 'David Cone',
      ATL200405180: 'Randy Johnson',
      CHA200907230: 'Mark Buehrle',
      OAK201005090: 'Dallas Braden',
      FLO201005290: 'Roy Halladay',
      SEA201204210: 'Philip Humber',
      SFN201206130: 'Matt Cain',
      SEA201208150: 'Felix Hernandez'
    }
  },
  {
    name: '2019 Braves Season',
    targetTeam: 'Atlanta Braves',
    type: 'series',
    series: [
      {
        retrosheetFiles: [
          'braves_2019/2019_braves_01.txt',
          'braves_2019/2019_braves_02.txt'
        ],
        seriesId: (teams, firstGameId) => `${teams}-${firstGameId}`
      },
      {
        retrosheetFiles: ['braves_2019/2019_braves_postseason.txt'],
        seriesId: () => `2019-NLDS-ATL-STL`,
        seriesName: 'NLDS vs St. Louis Cardinals'
      }
    ],
    urlSlug: 'braves-2019',
    description: 'All 162 regular season & playoff games.',
    gameDescriptions: {
      ATL201905150: 'Austin Riley hits HR in debut',
      ATL201906140:
        'Brian McCann walks off Phillies after trailing 7-2 in the 7th',
      ATL201908180:
        'Rafael Ortega hits decisive grand slam vs Dodgers for his 2nd career HR',
      ATL201909200: 'Braves clinch division for 2nd straight year',
      ATL201910090: 'Do not speak of this game.',
      ATL201905180: 'Freddie Freeman walk off HR vs Josh Hader',
      ATL201907070:
        'Charlie Culberson records a 7-2 putout in 9th inning to preserve the lead',
      CLE201904202:
        'Braves come back after trailing 7-3 with the bases loaded and two outs in the ninth inning',
      NYN201908230: 'Ronald Acuña Jr. joins the 30-30 club',
      MIA201905030:
        'Kevin Gausman (unsucessfully) throws at Jose Urena in retaliation'
    }
  },
  {
    name: '2020 Braves Season',
    targetTeam: 'Atlanta Braves',
    type: 'series',
    series: [
      {
        retrosheetFiles: ['braves_2020/regular_season.txt'],
        seriesId: (teams, firstGameId) => `${teams}-${firstGameId}`
      },
      {
        retrosheetFiles: ['braves_2020/wildcard.txt'],
        seriesId: () => `2020-WC-ATL-CIN`,
        seriesName: 'Wild Card Series vs Cincinatti Reds'
      },
      {
        retrosheetFiles: ['braves_2020/nlds.txt'],
        seriesId: () => `2020-NLDS-ATL-MIA`,
        seriesName: 'NLDS vs Miami Marlins'
      },
      {
        retrosheetFiles: ['braves_2020/nlcs.txt'],
        seriesId: () => `2020-NLCS-ATL-LAD`,
        seriesName: 'NLCS vs Los Angeles Dodgers'
      }
    ],
    urlSlug: 'braves-2020',
    description: 'All 60 regular season & playoff games.',
    gameDescriptions: {
      ATL202008030: '💔',
      BOS202009020:
        'Marcell Ozuna & Adam Duvall make Braves first team in MLB history with back-to-back three-homer games',
      ATL202009090:
        'Braves score 29 runs against Marlins - second most in MLB since 1900',
      ATL202008261: 'Ian Anderson makes MLB debut',
      ATL202008210: 'Christian Pache makes MLB debut'
    }
  },
  {
    name: 'Random Braves Games',
    type: 'category',
    retrosheetFiles: ['random_games.txt'],
    urlSlug: 'randos',
    description: 'Some notable Braves games',
    gameDescriptions: {
      ATL201005200:
        'Braves enter bottom of the 9th down 9-3 and walk it off with a Brooks Conrad grand slam',
      ATL201209020:
        'Chipper Jones records the final homerun of his career - a walkoff to cap off a 5-run comeback',
      ATL201107260: 'Braves win a 19 inning battle against the Pirates.',
      ATL201810070: 'Ronald Acuña Jr. hits a grand slam in the NLDS',
      ATL201606150: 'Freddie Freeman hits for the cycle',
      SFN201010080:
        "Bobby Cox's records his last win as a manager in an 11-inning game in the 2010 NLDS",
      ATL197308050: 'Phil Niekro throws a no-hitter'
    }
  },
  {
    name: 'Interesting Pitching Games',
    type: 'category',
    urlSlug: 'pitching',
    description: 'Games with fun pitching things',
    retrosheetFiles: ['pitching.txt'],
    gameDescriptions: {
      BOS198604290: 'Roger Clemens records 20 strikeouts for Boston',
      DET199609180: 'Roger Clemens records 20 strikeouts for Boston (again)',
      CHN199805060: 'Kerry Wood records 20 strikeouts for Chicago',
      WAS201605110: 'Max Scherzer records 20 strikeouts for Washington',
      NYN197004220: 'Tom Seaver records 10 strikeouts in a row for the Mets',
      SLN196810020:
        'Bob Gibson records a record 17 strikeouts in a World Series game',
      SDN197006121: 'Dock Ellis throws a no-hitter under the influence of LSD'
    }
  },
  {
    name: 'Interesting Hitting Games',
    type: 'category',
    urlSlug: 'hitting',
    description: 'Games with fun hitting things',
    retrosheetFiles: ['hitting.txt'],
    gameDescriptions: {
      LAN199904230: 'Fernando Tatis hits 2 grand slams in a single inning',
      BAL200708221:
        'Rangers score a new American League record 30 runs against the Orioles',
      CHN193210010:
        'Babe Ruth (supposedly) calls his shot in the 5th inning of the 1932 World Series'
    }
  }
]
