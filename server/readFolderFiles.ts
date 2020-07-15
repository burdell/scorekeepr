// @ts-nocheck

import fs from 'fs'
import path from 'path'

/**
 * Promise all
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 */
function promiseAllP(items, block) {
  var promises = []
  items.forEach(function (item, index) {
    promises.push(
      (function (item, i) {
        return new Promise(function (resolve, reject) {
          return block.apply(this, [item, index, resolve, reject])
        })
      })(item, index)
    )
  })
  return Promise.all(promises)
} //promiseAll

/**
 * read files
 * @param dirname string
 * @return Promise
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 * @see http://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
 */
export function readFiles() {
  const dirname = path.join(__dirname, 'games')
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function (err, filenames) {
      if (err) return reject(err)
      promiseAllP(filenames, (filename, index, resolve, reject) => {
        fs.readFile(path.resolve(dirname, filename), 'utf-8', function (
          err,
          content
        ) {
          if (err) return reject(err)
          return resolve({ filename: filename, contents: content })
        })
      })
        .then((results) => {
          return resolve(results)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  })
}
