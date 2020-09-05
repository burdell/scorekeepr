import { writeFileSync, mkdirSync, rmdirSync, existsSync } from 'fs'
import { resolve } from 'path'

import { getRetrosheetScorekeepers } from '../lib/index'
import { getFilenames, sourceFolder, outputFolder } from './readFolderFiles'
import { GameOutput } from '../lib/types'

function regenOutputFolder() {
  if (existsSync(outputFolder)) {
    rmdirSync(outputFolder, { recursive: true })
  }
  mkdirSync(outputFolder)
}

function writeToFile(data: unknown, dir: string, filename: string) {
  writeFileSync(resolve(dir, `${filename}`), JSON.stringify(data, null, 2))
}
async function generateGame(filePath: string) {
  const scorekeepers = await getRetrosheetScorekeepers(filePath)
  scorekeepers.forEach((scorekeeper) => {
    const game: GameOutput = {
      id: scorekeeper.gameInfo.id,
      lineups: scorekeeper.lineups,
      gameplay: scorekeeper.gameplay,
      gameInfo: scorekeeper.gameInfo,
      stats: scorekeeper.stats
    }
    writeToFile(game, outputFolder, `${game.gameInfo.id}.json`)
  })
}

async function generateGames(retrosheetFiles: string[]) {
  try {
    await Promise.all(
      retrosheetFiles.map((filename) => {
        try {
          return generateGame(`${sourceFolder}/${filename}`)
        } catch (e) {
          console.error(`Error with ${filename}`)
        }
      })
    )
  } catch (e) {
    console.error(`Unable to generate Scorebook files: ${e.message}`)
  }
}

export async function generateScorebooks() {
  try {
    regenOutputFolder()

    const retrosheetFiles = await getFilenames(sourceFolder)
    await generateGames(retrosheetFiles)
  } catch (e) {
    console.error(`Unable to generate game files: ${e.message}`)
  }
}

generateScorebooks()
