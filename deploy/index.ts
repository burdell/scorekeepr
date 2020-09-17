// import { S3 } from 'aws-sdk'

import * as path from 'path'
import * as util from 'util'
import * as cp from 'child_process'

const exec = util.promisify(cp.exec)

const distDir = path.join(__dirname, '../output')
const command = `aws s3 sync ${distDir} s3://scorekeeper-output`

exec(command)
  .then(() => console.log('Deploy complete'))
  .catch((err) => {
    console.log(err)
  })

function deploy() {}

deploy()
