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
  CLE08: {
    abbreviation: 'CLE08',
    fullName: 'Jacobs Field'
  }
}

export function getStadium(retrosheetKey: string) {
  return stadiums[retrosheetKey] || { abbreviation: '', fullName: '' }
}
