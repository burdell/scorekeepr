type TeamMap = {
  [retrosheetKey: string]: {
    abbreviation: string
    fullName: string
  }
}

const teams: TeamMap = {
  ALS: {
    abbreviation: 'AL',
    fullName: 'American League'
  },
  ATL: {
    abbreviation: 'ATL',
    fullName: 'Atlanta Braves'
  },
  ARI: {
    abbreviation: 'ARI',
    fullName: 'Arizona Diamondbacks'
  },
  BAL: {
    abbreviation: 'BAL',
    fullName: 'Baltimore Orioles'
  },
  BOS: {
    abbreviation: 'BOS',
    fullName: 'Boston Red Sox'
  },
  BRO: {
    abbreviation: 'BRO',
    fullName: 'Brooklyn Dodgers'
  },
  CAL: {
    abbreviation: 'CAL',
    fullName: 'California Angels'
  },
  CHA: {
    abbreviation: 'CHW',
    fullName: 'Chicago White Sox'
  },
  CHN: {
    abbreviation: 'CHC',
    fullName: 'Chicago Cubs'
  },
  CIN: {
    abbreviation: 'CIN',
    fullName: 'Cincinatti Reds'
  },
  CLE: {
    abbreviation: 'CLE',
    fullName: 'Cleveland Indians'
  },
  COL: {
    abbreviation: 'COL',
    fullName: 'Colorado Rockies'
  },
  DET: {
    abbreviation: 'DET',
    fullName: 'Detroit Tigers'
  },
  FLO: {
    abbreviation: 'FL',
    fullName: 'Florida Marlins'
  },
  HOU: {
    abbreviation: 'HOU',
    fullName: 'Houston Astros'
  },
  KCA: {
    abbreviation: 'KC',
    fullName: 'Kansas City Royals'
  },
  LAN: {
    abbreviation: 'LAD',
    fullName: 'Los Angeles Dodgers'
  },
  NLS: {
    abbreviation: 'NL',
    fullName: 'National League'
  },
  NYN: {
    abbreviation: 'NYM',
    fullName: 'New York Mets'
  },
  MIA: {
    abbreviation: 'MIA',
    fullName: 'Miami Marlins'
  },
  MIL: {
    abbreviation: 'MIL',
    fullName: 'Milwaukee Brewers'
  },
  MIN: {
    abbreviation: 'MIN',
    fullName: 'Minnesota Twins'
  },
  MON: {
    abbreviation: 'MON',
    fullName: 'Montreal Expos'
  },
  NYA: {
    abbreviation: 'NYY',
    fullName: 'New York Yankees'
  },
  OAK: {
    abbreviation: 'OAK',
    fullName: 'Oakland Athletics'
  },
  PHI: {
    abbreviation: 'PHI',
    fullName: 'Philadelphia Phillies'
  },
  PIT: {
    abbreviation: 'PIT',
    fullName: 'Pittsburgh Pirates'
  },
  SLN: {
    abbreviation: 'STL',
    fullName: 'St. Louis Cardinals'
  },
  SEA: {
    abbreviation: 'SEA',
    fullName: 'Seattle Mariners'
  },
  SDN: {
    abbreviation: 'SD',
    fullName: 'San Diego Padres'
  },
  SFN: {
    abbreviation: 'SF',
    fullName: 'San Francisco Giants'
  },
  TBA: {
    abbreviation: 'TB',
    fullName: 'Tampa Bay Rays'
  },
  TEX: {
    abbreviation: 'TEX',
    fullName: 'Texas Rangers'
  },
  TOR: {
    abbreviation: 'TOR',
    fullName: 'Toronto Blue Jays'
  },
  WAS: {
    abbreviation: 'WAS',
    fullName: 'Washington Nationals'
  }
}

export function getTeam(retrosheetKey: string) {
  const team = teams[retrosheetKey]

  return team || { abbreviation: '', fullName: '' }
}
