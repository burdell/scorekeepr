type TeamMap = {
  [retrosheetKey: string]: {
    abbreviation: string
    fullName: string
  }
}

const stadiums: TeamMap = {
  DET04: {
    abbreviation: 'DET04',
    fullName: 'Navin Field'
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
    fullName: 'Suntrust Park'
  },
  ARL01: {
    abbreviation: 'ARL01',
    fullName: 'Arlington Stadium'
  },
  ARL02: {
    abbreviation: 'ARL02',
    fullName: 'The Ballpark in Arlington'
  },
  BAL12: {
    abbreviation: 'BAL12',
    fullName: 'Oriole Park at Camden Yards'
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
    fullName: 'Jacobs Field'
  },
  DEN02: {
    abbreviation: 'DEN02',
    fullName: 'Coors Field'
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
    fullName: 'AT&T Park'
  },
  STL10: {
    abbreviation: 'STL10',
    fullName: 'Busch Stadium'
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

export function getStadium(retrosheetKey: string) {
  return stadiums[retrosheetKey] || { abbreviation: '', fullName: '' }
}
