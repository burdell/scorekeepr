import { writeFileSync, mkdirSync, rmdirSync, existsSync } from 'fs'
import { resolve, join } from 'path'

import { handler } from '../refactor'
import { getFilenames, sourceFolder, outputFolder } from './readFolderFiles'

function writeToFile(data: unknown, dir: string, filename: string) {
  writeFileSync(resolve(dir, `${filename}`), JSON.stringify(data, null, 2))
}

async function generateGames(retrosheetFiles: string[]) {
  try {
    await Promise.all(
      retrosheetFiles.map(async (filename) => {
        const output = await handler(join(__dirname, `./refactor/${filename}`))
      })
    )
  } catch (e) {
    console.error(`Unable to generate Scorebook files: ${e.message}`)
  }
}

export async function generateScorebooks() {
  try {
    const retrosheetFiles = await getFilenames(join(__dirname, './refactor'))
    await generateGames(retrosheetFiles)
  } catch (e) {
    console.error(`Unable to generate game files: ${e.message}`)
  }
}

generateScorebooks()
