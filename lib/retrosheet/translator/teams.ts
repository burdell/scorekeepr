type TeamMap = {
  [retrosheetKey: string]: {
    abbreviation: string
    fullName: string
  }
}

const teams: TeamMap = {
  CHN: {
    abbreviation: 'CHN',
    fullName: 'Chicago Cubs'
  },
  ATL: {
    abbreviation: 'ATL',
    fullName: 'Atlanta Braves'
  }
}

export function getTeam(retrosheetKey: string) {
  const team = teams[retrosheetKey]

  return team || { abbreviation: '', fullName: '' }
}
