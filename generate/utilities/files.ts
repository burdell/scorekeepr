import { writeFileSync, rmdirSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

import {
  outputFolder,
  gameFolder,
  seriesFolder,
  categoriesFolder,
  seriesGroupFolder,
  seriesListsFolder
} from '../outputFolders'

export function writeToFile(data: unknown, dir: string, filename: string) {
  writeFileSync(resolve(dir, `${filename}`), JSON.stringify(data, null, 2))
}

export function regenOutputFolder() {
  if (existsSync(outputFolder)) {
    rmdirSync(outputFolder, { recursive: true })
  }
  mkdirSync(outputFolder)
  mkdirSync(gameFolder)
  mkdirSync(seriesFolder)
  mkdirSync(categoriesFolder)
  mkdirSync(seriesGroupFolder)
  mkdirSync(seriesListsFolder)
}
