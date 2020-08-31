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
  CHN: {
    abbreviation: 'CHN',
    fullName: 'Chicago Cubs'
  },
  CLE: {
    abbreviation: 'CLE',
    fullName: 'Cleveland Indians'
  },
  COL: {
    abbreviation: 'COL',
    fullName: 'Colorado Rockies'
  },
  NYN: {
    abbreviation: 'NYM',
    fullName: 'New York Mets'
  },
  PHI: {
    abbreviation: 'PHI',
    fullName: 'Philadelphia Phillies'
  }
}

export function getTeam(retrosheetKey: string) {
  const team = teams[retrosheetKey]

  return team || { abbreviation: '', fullName: '' }
}
