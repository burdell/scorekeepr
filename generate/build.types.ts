import { GameOutput } from '../lib/types'

type BaseBuildConfig = {
  urlSlug: string
  name: string
  description: string
  gameDescriptions: {
    [gameId: string]: string
  }
}

export type CategoryBuildConfig = BaseBuildConfig & {
  type: 'category'
  retrosheetFiles: string[]
}

export type SeriesIdFn = (teamString: string, firstGameId: string) => string
export type SeriesConfig = {
  retrosheetFiles: string[]
  seriesId: SeriesIdFn
  seriesName?: string
}
export type SeriesBuildConfig = BaseBuildConfig & {
  type: 'series'
  series: SeriesConfig[]
  targetTeam?: string
}

export type BuildConfig = CategoryBuildConfig | SeriesBuildConfig

export type GameList = {
  name: string
  listId: string
  description: string
  type: 'season' | 'category'
}
export type ListGame = {
  date: string
  homeTeam: string
  visitingTeam: string
  matchup: string
  id: string
  gameDescription: string
  location: string
  homeScore: number
  visitingScore: number
}

export type Series = {
  startDate: string
  endDate: string
  homeTeam: string
  visitingTeam: string
  targetTeam?: string
  seriesId: string
  homeWins: number
  visitingWins: number
  seriesName: string | undefined
}

export type SeriesGames = {
  seriesInfo: {
    seriesName: string | undefined
    homeTeam: string
    visitingTeam: string
    startDate: string
    endDate: string
  }
  games: ListGame[]
  urlSlug: string
}

export type GeneratedConfig = {
  category: GameList
  categoryGames: ListGame[]
  games: GameOutput[]
}

export type GeneratedSeriesConfig = {
  seriesName: string
  series: Series[]
  seriesGames: SeriesGames[]
  games: GameOutput[]
}
