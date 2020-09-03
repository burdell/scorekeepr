type TeamMap = {
  [retrosheetKey: string]: {
    abbreviation: string
    fullName: string
  }
}

const teams: TeamMap = {
  ATL: {
    abbreviation: 'ATL',
    fullName: 'Atlanta Braves'
  },
  ARI: {
    abbreviation: 'ARI',
    fullName: 'Arizona Diamondbacks'
  },
  BOS: {
    abbreviation: 'BOS',
    fullName: 'Boston Red Sox'
  },
  CHA: {
    abbreviation: 'CHA',
    fullName: 'Chicago White Sox'
  },
  CHN: {
    abbreviation: 'CHN',
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
  KCA: {
    abbreviation: 'KC',
    fullName: 'Kansas City Royals'
  },
  LAN: {
    abbreviation: 'LAD',
    fullName: 'Los Angeles Dodgers'
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
