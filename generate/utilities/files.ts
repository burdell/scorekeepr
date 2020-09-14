import { writeFileSync, rmdirSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

import {
  outputFolder,
  gameFolder,
  seasonFolder,
  listFolder
} from './readFolderFiles'

export function writeToFile(data: unknown, dir: string, filename: string) {
  writeFileSync(resolve(dir, `${filename}`), JSON.stringify(data, null, 2))
}

export function regenOutputFolder() {
  if (existsSync(outputFolder)) {
    rmdirSync(outputFolder, { recursive: true })
  }
  mkdirSync(outputFolder)
  mkdirSync(gameFolder)
  mkdirSync(seasonFolder)
  mkdirSync(listFolder)
}
