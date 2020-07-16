import { writeFileSync } from 'fs'
import { resolve, join } from 'path'

import { readFiles } from '../server/readFolderFiles'

import { getRetrosheetScorekeepers } from './index'

async function processRetrosheetFile(pathToFile: string) {
  const scorekeepers = await getRetrosheetScorekeepers(
    join(__dirname, pathToFile)
  )
  return scorekeepers
}

export async function main() {
  const scorekeepers = await processRetrosheetFile('../games/CHI_ATL.txt')
  const currentGames = (await readFiles()) as any

  scorekeepers.forEach((scorekeeper, index) => {
    writeToFile(
      {
        lineups: scorekeeper.lineups,
        gameInfo: scorekeeper.gameInfo,
        gameplay: scorekeeper.gameplay
      },
      './server/games',
      `${currentGames.length + (index + 1)}.json`
    )
  })
}

export function writeToFile(
  data: unknown,
  dir: string,
  filename = 'output.json'
) {
  writeFileSync(resolve(dir, `${filename}`), JSON.stringify(data, null, 2))
}

main()
