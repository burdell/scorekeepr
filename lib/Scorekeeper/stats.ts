import { Stats, AtBat, Gameplay } from '../types'

function calculateInningStats(atBats: AtBat[]) {
  const stats = {
    runs: 0,
    hits: 0,
    errors: 0,
    lob: 0
  }

  atBats.forEach((atBat) => {
    if (!atBat) return

    if (atBat.result) {
      const { type: resultType } = atBat.result
      if (resultType === 'hit') {
        stats.hits += 1
      }
      if (resultType === 'defensive-error') {
        stats.errors += 1
      }
    }

    atBat.bases.map((base) => {
      if (base.result && base.result.type === 'defensive-error') {
        stats.errors += 1
      }
    })

    if (atBat.bases.length === 4 && !atBat.isOut) {
      stats.runs += 1
    }
    if (atBat.bases.length > 0 && atBat.isOut === false) {
      stats.lob += 1
    }
  })

  return stats
}

function calculateTeamStats(atBats: AtBat[][]): Stats {
  const inningStats = atBats.map(calculateInningStats)

  const scoring: number[] = []
  let runs = 0
  let hits = 0
  let errors = 0

  inningStats.forEach((inning) => {
    scoring.push(inning.runs)

    runs += inning.runs
    hits += inning.hits
    errors += inning.errors
  })

  return { scoring, runs, hits, errors }
}

export function calculateStats(gameplay: Gameplay) {
  return {
    home: calculateTeamStats(gameplay.home),
    visiting: calculateTeamStats(gameplay.visiting)
  }
}
