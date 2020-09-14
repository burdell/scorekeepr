import express from 'express'
import cors from 'cors'
import * as path from 'path'

const app = express()
const port = 4000

app.use(cors())

app.get('/:folder/:itemId', (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      `/output/${req.params.folder}/${req.params.itemId}.json`
    )
  )
})

app.get('/lists', function (req, res) {
  res.sendFile(path.join(__dirname, `/output/lists.json`))
})

app.listen(port, () =>
  console.log(`📒 Scorekeeper app listening on port ${port}!`)
)
