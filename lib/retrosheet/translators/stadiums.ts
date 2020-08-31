type TeamMap = {
  [retrosheetKey: string]: {
    abbreviation: string
    fullName: string
  }
}

const stadiums: TeamMap = {
  CHI11: {
    abbreviation: 'CHI11',
    fullName: 'Wrigley Field'
  },
  ATL01: {
    abbreviation: 'ATL01',
    fullName: 'Atlanta Fulton County Stadium'
  },
  ATL03: {
    abbreviation: 'ATL03',
    fullName: 'Suntrust Park'
  },
  CLE08: {
    abbreviation: 'CLE08',
    fullName: 'Jacobs Field'
  },
  PHI13: {
    abbreviation: 'PHI13',
    fullName: 'Citizens Bank Park'
  },
  DEN02: {
    abbreviation: 'DEN02',
    fullName: 'Coors Field'
  }
}

export function getStadium(retrosheetKey: string) {
  return stadiums[retrosheetKey] || { abbreviation: '', fullName: '' }
}
