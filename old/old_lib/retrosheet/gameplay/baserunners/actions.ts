export type BaserunnerAction =
  | 'balk'
  | 'caught-stealing'
  | 'defensive-indifference'
  | 'base-advancement'
  | 'passed-ball'
  | 'wild-pitch'
  | 'pick-off'
  | 'pick-off-caught-stealing'
  | 'stolen-base'

export function getBaserunnerAction(action: string) {
  const balkRegexp = action.match(/^BK/)
  if (balkRegexp) return { type: 'balk', match: balkRegexp, action }

  const isCaughtStealingRegexp = action.match(/^CS([23H])\((\dE?\d)\)/)
  if (isCaughtStealingRegexp)
    return {
      type: 'caught-stealing',
      match: isCaughtStealingRegexp,
      action
    }

  const isDefensiveIndifferenceRegexp = action.match(/^DI.\d-(\d)/)
  if (isDefensiveIndifferenceRegexp)
    return {
      type: 'defensive-indifference',
      match: isDefensiveIndifferenceRegexp,
      action
    }

  const isBaseAdvancementRegexp = action.match(/^OA/)
  if (isBaseAdvancementRegexp)
    return { type: 'base-advancement', match: isBaseAdvancementRegexp, action }

  const pbOrWpRegexp = action.match(/^(WP|PB)/)
  if (pbOrWpRegexp) return { type: 'pb-or-wp', match: pbOrWpRegexp, action }

  const pickOffCaughtStealing = action.match(/^POCS([23H])\((\d+)\)/)
  if (pickOffCaughtStealing)
    return {
      type: 'pick-off-caught-stealing',
      match: pickOffCaughtStealing,
      action
    }

  const isPickOffRegexp = action.match(/^PO([123])\((E?\d+)\)/)
  if (isPickOffRegexp)
    return { type: 'pick-off', match: isPickOffRegexp, action }

  const isStolenBaseRegexp = action.match(/^SB([23H])/)
  if (isStolenBaseRegexp)
    return { type: 'stolen-base', match: isStolenBaseRegexp, action }

  return
}
