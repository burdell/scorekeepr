// import { GameplayEvent, AtBat, Comment, GameBuilder } from 'retrosheet-parse'

// import { handleGameplay } from '../lib/retrosheet/gameplay'
// import { reset, getAtBat } from '../tests/test-utils'
// import { Scorekeeper } from '../lib'

// function generateAtBat(event: Partial<AtBat>): AtBat {
//   return {
//     count: '',
//     pitchSequence: '',
//     playerId: '',
//     type: 'at-bat',
//     result: '',
//     ...event
//   }
// }

// function getComment(comment: Partial<Comment>): Comment {
//   return {
//     type: 'comment',
//     text: '',
//     ...comment
//   }
// }

// function getScorekeeper() {
//   const scorekeeper = new Scorekeeper()
//   scorekeeper.startGame()
//   return scorekeeper
// }

// function getGameInfo() {
//   return [
//     'id,CHN201906250',
//     'version,2',
//     'info,visteam,ATL',
//     'info,hometeam,CHN',
//     'info,site,CHI11',
//     'info,date,2019/06/25',
//     'info,number,0',
//     'info,starttime,7:05PM',
//     'info,daynight,night',
//     'info,usedh,false',
//     'info,umphome,barkl901',
//     'info,ump1b,barrt901',
//     'info,ump2b,lentn901',
//     'info,ump3b,tumpj901',
//     'info,howscored,park',
//     'info,pitches,pitches',
//     'info,oscorer,roseb701',
//     'info,temp,84',
//     'info,winddir,tocf',
//     'info,windspeed,15',
//     'info,fieldcond,unknown',
//     'info,precip,unknown',
//     'info,sky,cloudy',
//     'info,timeofgame,179',
//     'info,attendance,37333',
//     'info,wp,friem001',
//     'info,lp,montm002',
//     'info,save,jackl001',
//     'start,acunr001,"Ronald Acuna",0,1,8',
//     'start,swand001,"Dansby Swanson",0,2,6',
//     'start,freef001,"Freddie Freeman",0,3,3',
//     'start,donaj001,"Josh Donaldson",0,4,5',
//     'start,markn001,"Nick Markakis",0,5,9',
//     'start,rilea001,"Austin Riley",0,6,7',
//     'start,mccab002,"Brian McCann",0,7,2',
//     'start,albio001,"Ozzie Albies",0,8,4',
//     'start,friem001,"Max Fried",0,9,1',
//     'start,schwk001,"Kyle Schwarber",1,1,7',
//     'start,bryak001,"Kris Bryant",1,2,9',
//     'start,rizza001,"Anthony Rizzo",1,3,3',
//     'start,baezj001,"Javier Baez",1,4,6',
//     'start,contw001,"Willson Contreras",1,5,2',
//     'start,boted002,"David Bote",1,6,5',
//     'start,russa002,"Addison Russell",1,7,4',
//     'start,alzoa001,"Adbert Alzolay",1,8,1',
//     'start,almoa002,"Albert Almora",1,9,8'
//   ]
// }

// function gameEvents(events: string[]) {
//   return [...getGameInfo(), ...events]
// }

// function getGame(events: string[]) {
//   const gamebuilder = new GameBuilder()
//   gamebuilder.receiveGame(gameEvents(events))

//   return gamebuilder
// }

// describe('Retrosheet gameplay', () => {
//   it('moves runners after at bats', () => {
//     const game = getGame(['play,1,0,acunr001,00,X,HR/78/F'])
//     const scorekeeper = new

//     // scorekeeper.

//     // console.log(gamebuilder.getCurrentGame())
//   })
// })
