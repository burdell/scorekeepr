import { writeFileSync, rmdirSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'
import jsonminify from 'jsonminify'

import {
  outputFolder,
  gameFolder,
  seriesFolder,
  categoriesFolder,
  seriesGroupFolder,
  seriesListsFolder
} from '../outputFolders'

export function writeToFile(data: unknown, dir: string, filename: string) {
  const minified = jsonminify(JSON.stringify(data))
  writeFileSync(resolve(dir, `${filename}`), minified)
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
