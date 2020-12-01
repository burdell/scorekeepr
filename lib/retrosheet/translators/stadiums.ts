type TeamMap = {
  [retrosheetKey: string]: {
    abbreviation: string
    fullName?: string
    fullNameFn?: (year: Number) => string
  }
}

function getGameYear(gameDate: string) {
  return new Date(gameDate).getFullYear()
}

const stadiums: TeamMap = {
  DET04: {
    abbreviation: 'DET04',
    fullNameFn: (year) => {
      if (year < 1938) return 'Navin Field'
      if (year >= 1938 && year < 1961) return 'Briggs Stadium'
      if (year >= 1961) return 'Tiger Stadium'

      return ''
    }
  },
  ATL01: {
    abbreviation: 'ATL01',
    fullName: 'Atlanta Fulton County Stadium'
  },
  ATL02: {
    abbreviation: 'ATL02',
    fullName: 'Turner Field'
  },
  ATL03: {
    abbreviation: 'ATL03',
    fullNameFn: (year) => {
      if (year < 2020) return 'SunTrust Park'
      return 'Truist Park'
    }
  },
  ARL01: {
    abbreviation: 'ARL01',
    fullName: 'Arlington Stadium'
  },
  ARL02: {
    abbreviation: 'ARL02',
    fullName: 'The Ballpark in Arlington'
  },
  ARL03: {
    abbreviation: 'ARL03',
    fullName: 'Globe Life Field'
  },
  BAL12: {
    abbreviation: 'BAL12',
    fullName: 'Oriole Park at Camden Yards'
  },
  BOS07: {
    abbreviation: 'BOS07',
    fullName: 'Fenway Park'
  },
  CHI11: {
    abbreviation: 'CHI11',
    fullName: 'Wrigley Field'
  },
  CHI12: {
    abbreviation: 'CHI12',
    fullName: 'U.S. Cellular Field'
  },
  CIN08: {
    abbreviation: 'CIN08',
    fullName: 'Riverfront Stadium'
  },
  CIN09: {
    abbreviation: 'CIN09',
    fullName: 'Great American Ballpark'
  },
  CLE07: {
    abbreviation: 'CLE07',
    fullName: 'Cleveland Stadium'
  },
  CLE08: {
    abbreviation: 'CLE08',
    fullNameFn: (year) => {
      if (year < 2008) return 'Jacobs Field'
      return 'Progressive Field'
    }
  },
  DEN02: {
    abbreviation: 'DEN02',
    fullName: 'Coors Field'
  },
  DET05: {
    abbreviation: 'DET05',
    fullName: 'Comerica Park'
  },
  HOU03: {
    abbreviation: 'HOU03',
    fullName: 'Minute Maid Park'
  },
  KAN06: {
    abbreviation: 'KAN06',
    fullName: 'Kauffman Stadium'
  },
  LOS03: {
    abbreviation: 'LOS03',
    fullName: 'Dodger Stadium'
  },
  MIA01: {
    abbreviation: 'MIA01',
    fullName: 'Sun Life Stadium'
  },
  MIA02: {
    abbreviation: 'MIA02',
    fullName: 'Marlins Park'
  },
  MIL06: {
    abbreviation: 'MIL06',
    fullName: 'Miller Park'
  },
  MIN04: {
    abbreviation: 'MIN04',
    fullName: 'Target Field'
  },
  NYC16: {
    abbreviation: 'NY16',
    fullName: 'Yankee Stadium'
  },
  NYC17: {
    abbreviation: 'NYC17',
    fullName: 'Shea Stadium'
  },
  NYC20: {
    abbreviation: 'NYC20',
    fullName: 'Citi Field'
  },
  NYC21: {
    abbreviation: 'NYC21',
    fullName: 'Yankee Stadium'
  },
  OAK01: {
    abbreviation: 'OAK01',
    fullName: 'Oakland–Alameda County Coliseum'
  },
  PHI13: {
    abbreviation: 'PHI13',
    fullName: 'Citizens Bank Park'
  },
  PIT08: {
    abbreviation: 'PIT08',
    fullName: 'PNC Park'
  },
  PHO01: {
    abbreviation: 'PHO01',
    fullName: 'Chase Field'
  },
  SAN01: {
    abbreviation: 'SAN01',
    fullName: 'San Diego Stadium'
  },
  SAN02: {
    abbreviation: 'SAN02',
    fullName: 'Petco Park'
  },
  SEA03: {
    abbreviation: 'SEA03',
    fullName: 'Safeco Field'
  },
  SFO03: {
    abbreviation: 'SFO03',
    fullNameFn: (year) => {
      if (year < 2004) return 'Pacific Bell Park'
      if (year >= 2004 && year < 2006) return 'SBC Park'
      if (year >= 2006 && year < 2019) return 'AT&T Park'
      if (year >= 2019) return 'Oracle Park'

      return ''
    }
  },
  STL09: {
    abbreviation: 'STL09',
    fullName: 'Busch Stadium'
  },
  STL10: {
    abbreviation: 'STL10',
    fullName: 'Busch Stadium'
  },
  STP01: {
    abbreviation: 'STP01',
    fullName: 'Tropicana Field'
  },
  TOR02: {
    abbreviation: 'TOR02',
    fullName: 'Rogers Center'
  },
  WAS11: {
    abbreviation: 'WAS11',
    fullName: 'Nationals Park'
  }
}

export function getStadium(retrosheetKey: string, gameDate: string) {
  const foundStadium = stadiums[retrosheetKey]

  if (!foundStadium) return ''

  if (foundStadium.fullName) {
    return foundStadium.fullName
  }
  if (!foundStadium.fullNameFn) return ''

  const gameYear = getGameYear(gameDate)
  return foundStadium.fullNameFn(gameYear)
}
