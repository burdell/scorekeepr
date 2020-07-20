import { ActionConfig } from '../retrosheet.types'

import { getAction } from '../utilities'

const caughtStealing: ActionConfig = {
  actionType: 'baserunner',
  regexp: /^CS([23H])\((\dE?\d)\)/,
  handler: () => {
    return getAction({
      isOut: true
    })
  }
}

export const baserunnerConfigs = [caughtStealing]
