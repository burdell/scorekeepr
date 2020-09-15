import { BuildConfig } from './build.types'

export const buildConfig: BuildConfig[] = [
  {
    name: '1995 World Series',
    type: 'category',
    retrosheetFiles: ['1995_WS.txt'],
    urlSlug: '1995-worldseries',
    description: 'All the games of the 1995 World Series.',
    gameDescriptions: {
      ATL199510210: 'World Series Game 1',
      ATL199510220: 'World Series Game 2',
      CLE199510240: 'World Series Game 3',
      CLE199510250: 'World Series Game 4',
      CLE199510260: 'World Series Game 5',
      ATL199510280: 'World Series Game 6 - Braves win!'
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
        retrosheetFiles: ['2019_braves_01.txt', '2019_braves_02.txt'],
        seriesId: (teams, firstGameId) => `${teams}-${firstGameId}`
      },
      {
        retrosheetFiles: ['2019_braves_postseason.txt'],
        seriesId: () => `2019-NLDS-ATL-STL`,
        seriesName: '2019 NLDS'
      }
    ],
    urlSlug: 'braves-2019',
    description: 'All 162 regular season & playoff games.',
    gameDescriptions: {
      ATL201905150: 'Austin Riley hits HR in debut',
      ATL201906140:
        'Brian McCann walks off Phillies after trailing Phillies 7-2 in the 7th',
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
      MIA201905030: 'Kevin Gausman (unsucessfully) throws at Jose Urena'
    }
  },
  {
    name: 'Random Notable Games',
    type: 'category',
    retrosheetFiles: ['random_games.txt'],
    urlSlug: 'randos',
    description: 'Some random (mostly Braves) games',
    gameDescriptions: {
      ATL201005200:
        'Braves enter bottom of the 9th down 9-3 and walk it off with a Brooks Conrad grand slam',
      ATL201209020:
        'Chipper Jones hits a walk-off homerun for his final home run to cap off a 5-run comeback 9th inning',
      ATL201107260:
        '19 inning game vs the Pirates. The infamous LETS GO PIRRAAATTES girl',
      ATL201810070: 'Ronald Acuña Jr. hits a grand slam in the NLDS',
      ATL201606150: 'Freddie Freeman hits for the cycle',
      SFN201010080: "Bobby Cox's last win - an 11-inning game in 2010 NLDS",
      BAL200708221:
        'New American League record for most runs scored by a team with 30 by the Rangers'
    }
  }
]
