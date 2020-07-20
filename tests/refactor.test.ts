import { parseAction } from '../lib/retrosheet/refactor'

// play,1,0,acunr001,32,BBFCBFB,W
// play,1,0,swand001,00,C,SB2.1-3(E2/TH)
// play,1,0,swand001,22,C.S*B*BX,6/P-
// play,1,0,freef001,00,B,WP.3-H(NR)
// play,1,0,freef001,21,B.CBX,S4/G
// play,1,0,donaj001,02,SFS,K
// play,1,0,markn001,00,X,43/G

describe('Retrosheet refactor', () => {
  it('parses a retrosheet inning', () => {
    const action = parseAction({
      type: 'at-bat',
      count: '32',
      pitchSequence: 'BBFCBFB',
      result: 'W',
      playerId: 'acunr001'
    })

    expect(action!.type === 'walk')
  })
})
