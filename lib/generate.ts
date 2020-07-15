import { writeFileSync } from 'fs'
import { resolve, join } from 'path'

import { readFiles } from '../server/readFolderFiles'

import { getRetrosheetScorekeeper } from './index'

export async function main() {
  const scorekeeper = await getRetrosheetScorekeeper(
    join(__dirname, '../games/WS_6.txt')
  )
  const currentGames = (await readFiles()) as any

  writeToFile(
    {
      lineups: scorekeeper.lineups,
      gameInfo: scorekeeper.gameInfo,
      gameplay: scorekeeper.gameplay
    },
    './server/games',
    `${currentGames.length + 1}.json`
  )
}

export function writeToFile(
  data: unknown,
  dir: string,
  filename = 'output.json'
) {
  writeFileSync(resolve(dir, `${filename}`), JSON.stringify(data, null, 2))
}

main()
