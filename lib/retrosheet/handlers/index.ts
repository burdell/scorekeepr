import { ActionConfig } from '../retrosheet.types'

import { atBatConfigs } from './atBats'
import { outConfigs } from './outs'
import { baserunnerConfigs } from './baseunners'

export const actionConfigs: ActionConfig[] = [
  ...atBatConfigs,
  ...outConfigs,
  ...baserunnerConfigs
]
