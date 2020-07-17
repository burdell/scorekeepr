import { writeFileSync, mkdirSync, rmdirSync, existsSync } from 'fs'
import { resolve } from 'path'

import { getRetrosheetScorekeepers } from '../lib/index'
import { getFilenames, sourceFolder, outputFolder } from './readFolderFiles'

async function processRetrosheetFile(pathToFile: string) {
  const scorekeepers = await getRetrosheetScorekeepers(pathToFile)
  return scorekeepers
}

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
  const scorekeepers = await processRetrosheetFile(filePath)
  scorekeepers.forEach((scorekeeper) => {
    const game = scorekeeper.getOutput()
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
    console.log('💃 Games generated')
  } catch (e) {
    console.error(`Unable to generate game files: ${e.message}`)
  }
}

generateScorebooks()