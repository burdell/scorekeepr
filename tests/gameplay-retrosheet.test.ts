import { GameplayEvent, AtBat, Comment } from 'retrosheet-parse'

import { handleGameplay } from '../lib/retrosheet/gameplay'
import { reset, getAtBat } from '../tests/test-utils'
import { Scorekeeper } from '../lib'

function generateAtBat(event: Partial<AtBat>): AtBat {
  return {
    count: '',
    pitchSequence: '',
    playerId: '',
    type: 'at-bat',
    result: '',
    ...event
  }
}

function getComment(comment: Partial<Comment>): Comment {
  return {
    type: 'comment',
    text: '',
    ...comment
  }
}

function getScorekeeper() {
  const scorekeeper = new Scorekeeper()
  scorekeeper.startGame()
  return scorekeeper
}

xdescribe('Retrosheet gameplay', () => {
  it('moves runners after at bats', () => {
    const game = getScorekeeper()

    // albio001,32,BSFBBFB,W
    handleGameplay(
      [
        generateAtBat({
          playerId: 'albio001',
          count: '32',
          pitchSequence: 'BSFBBFB',
          result: 'W'
        }),
        generateAtBat({
          playerId: 'friem001',
          count: '01',
          pitchSequence: 'LX',
          result: '16(1)/FO/G-'
        })
      ],
      game
    )
    expect((getAtBat(game, 0) as any)[1]).toEqual({
      advanced: false,
      result: {
        type: 'putout',
        result: [1, 6],
        display: '1-6'
      }
    })
  })
})
