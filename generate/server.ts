import express from 'express'
import cors from 'cors'

import { outputFolder } from './outputFolders'

const app = express()
const port = 4000

app.use(cors())

app.get('/:folder/:itemFile', (req, res) => {
  res.sendFile(`${outputFolder}/${req.params.folder}/${req.params.itemFile}`)
})

app.get('/:file', function (req, res) {
  res.sendFile(`${outputFolder}/${req.params.file}`)
})

app.listen(port, () =>
  console.log(`📒 Scorekeeper app listening on port ${port}!`)
)
