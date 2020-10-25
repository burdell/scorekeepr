import * as resultGenerators from './generators/result'

export function getHitType(hit: string) {
  if (hit === 'S') return 1
  if (hit === 'D' || hit === 'DGR') return 2
  if (hit === 'T') return 3
  if (hit === 'HR') return 4

  throw new Error('Attempted to record an invalid hit')
}

export function getAllBaserunnerAction(action: string) {
  let resultFn
  if (action === 'PB') resultFn = resultGenerators.passedBall
  else if (action === 'WP') resultFn = resultGenerators.wildPitch
  else if (action === 'BK') resultFn = resultGenerators.balk

  if (resultFn) {
    return resultFn()
  }

  return
}
