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
  }
}

export function getStadium(retrosheetKey: string) {
  return stadiums[retrosheetKey] || { abbreviation: '', fullName: '' }
}
