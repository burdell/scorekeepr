export type Action = {
  isOut: boolean
  balls: number
  strikes: number
  pitchCount: number
  isSacrifice: boolean
  results: {
    B: {} | undefined
    '1': {} | undefined
    '2': {} | undefined
    '3': {} | undefined
  }
}

function getEmptyAction(): Action {
  return {
    isOut: false,
    balls: 0,
    strikes: 0,
    pitchCount: 0,
    isSacrifice: false,
    results: {
      B: undefined,
      '1': undefined,
      '2': undefined,
      '3': undefined
    }
  }
}

type Handler = (action: string) => Action

// export function walk(action: string): Action {
//   return {
//     isOut: false,

//   }
// }
