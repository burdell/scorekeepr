type ActionType = 'baserunner' | 'batter'

type Action = {
  type: string
  match: RegExpMatchArray
  action: string
}

type ActionIdentifier = {
  type: string
  regexp: RegExp
  actionType: ActionType
}

const actions: ActionIdentifier[] = [
  { actionType: 'baserunner', type: 'balk', regexp: /^BK/ },
  {
    actionType: 'baserunner',
    type: 'caught-stealing',
    regexp: /^CS([23H])\((\dE?\d)\)/
  },
  {
    actionType: 'baserunner',
    type: 'defensive-indifference',
    regexp: /^DI.\d-(\d)/
  },
  { actionType: 'baserunner', type: 'base-advancement', regexp: /^OA/ },
  { actionType: 'baserunner', type: 'pb-or-wp', regexp: /^(WP|PB)/ },
  {
    actionType: 'baserunner',
    type: 'pick-off',
    regexp: /^PO([123])\((E?\d+)\)/
  },
  {
    actionType: 'baserunner',
    type: 'pick-off-caught-stealing',
    regexp: /^POCS([23H])\((\d+)\)/
  },
  { actionType: 'baserunner', type: 'stolen-base', regexp: /^SB([23H])/ },
  { actionType: 'batter', type: 'hit', regexp: /^([S|D(GR)?|T])\d+/ },
  { actionType: 'batter', type: 'home-run', regexp: /^HR/ },
  { actionType: 'batter', type: 'walk', regexp: /^W/ },
  { actionType: 'batter', type: 'strikeout', regexp: /^K/ },
  { actionType: 'batter', type: 'hit-by-pitch', regexp: /^HB/ },
  { actionType: 'batter', type: 'intentional-walk', regexp: /^IW?/ },
  { actionType: 'batter', type: 'fielders-choice', regexp: /^FC\d+/ },
  { actionType: 'batter', type: 'simple-out', regexp: /^\d+/ },
  { actionType: 'batter', type: 'error', regexp: /^C?\/?E(\d)/ }
]

export function getAction(action: string): Action | undefined {
  let match: RegExpMatchArray | null = null
  let i = 0
  while (!match && i < actions.length) {
    match = action.match(actions[i].regexp)
    i += 1
  }

  if (!match) {
    console.log(action)
    return
  }

  return {
    type: actions[i].type,
    match,
    action
  }
}
