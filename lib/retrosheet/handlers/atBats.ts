import { ActionConfig } from '../retrosheet.types'
import * as resultGenerators from '../../resultGenerators'

import { getAction } from '../utilities'

function getHitType(hit: string) {
  if (hit === 'S') return 1
  if (hit === 'D' || hit === 'DGR') return 2
  if (hit === 'T') return 3
  if (hit === 'HR') return 4

  throw new Error('Attempted to record an invalid hit')
}

const hitIdentifier: ActionConfig = {
  actionType: 'batter',
  regexp: /^(HR)|([SDT])\d+|(DGR)/,
  handler: (gameplayEvent, match) => {
    const [fullMatch, hrGroup, hitGroup, grdGroup] = match

    return getAction({
      result: resultGenerators.hit(getHitType(hrGroup || hitGroup || grdGroup))
    })
  }
}

export const atBatConfigs = [hitIdentifier]
