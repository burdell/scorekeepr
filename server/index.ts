import express from 'express'
import cors from 'cors'

import { readFiles } from './readFolderFiles'

const app = express()
const port = 4000

app.use(cors())

app.get('/games', async (req, res, next) => {
  try {
    const gameFiles = (await readFiles()) as any[]
    const games = gameFiles.map((file) => {
      const id = Number(file.filename.split('.json').shift())
      const gameInfo = JSON.parse(file.contents).gameInfo
      return { id, gameInfo }
    })
    res.json(games)
  } catch (e) {
    next(new Error('ya goofed'))
  }
})

app.get('/games/:id', async (req, res, next) => {
  try {
    const gameFiles = (await readFiles()) as any[]
    const game = gameFiles.find((file) => {
      const id = file.filename.split('.json').shift()
      return req.params.id === id
    })

    if (!game) throw new Error('not found')

    res.json(JSON.parse(game.contents))
  } catch (e) {
    next(e)
  }
})

app.listen(port, () =>
  console.log(`Scorekeeper app listening on port ${port}!`)
)
