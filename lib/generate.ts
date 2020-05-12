import { writeFileSync } from 'fs'
import { resolve, join } from 'path'

import { getRetrosheetScorekeeper } from './index'

export async function main() {
  const scorekeeper = await getRetrosheetScorekeeper(
    join(__dirname, '../tests/test_game.txt')
  )

  writeToFile(
    {
      lineups: scorekeeper.lineups,
      gameInfo: scorekeeper.gameInfo,
      gameplay: scorekeeper.gameplay
    },
    './'
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
