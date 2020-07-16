import { writeFileSync } from 'fs'
import { resolve, join } from 'path'

import { getRetrosheetScorekeepers } from './index'

async function processRetrosheetFile(pathToFile: string) {
  const scorekeepers = await getRetrosheetScorekeepers(
    join(__dirname, pathToFile)
  )
  return scorekeepers
}

export async function main() {
  const scorekeepers = await processRetrosheetFile('../games/1995_WS.txt')
  scorekeepers.forEach((scorekeeper, index) => {
    const game = scorekeeper.getOutput()
    writeToFile(game, './server/games', `${game.gameInfo.id}.json`)
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
