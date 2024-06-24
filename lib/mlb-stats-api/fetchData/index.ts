import https from 'node:https'
import fs from 'node:fs'

function fetchAndWriteToFile(apiUrl: string, filePath: string) {
  https
    .get(apiUrl, (response) => {
      let data = ''

      // A chunk of data has been received.
      response.on('data', (chunk: string) => {
        data += chunk
      })

      // The whole response has been received.
      response.on('end', () => {
        // Write the data to a file
        fs.writeFile(filePath, data, 'utf8', (err) => {
          if (err) {
            console.error('Error writing to file', err)
          } else {
            console.log('File has been saved.')
          }
        })
      })
    })
    .on('error', (err) => {
      console.error('Error fetching data from API', err)
    })
}

// Usage example
// const apiUrl = 'https://api.example.com/data'
// const filePath = './output.json'

// fetchAndWriteToFile(apiUrl, filePath)

export function fetchSeasonGames(year: number) {
  const apiUrl = `https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=${year}-04-01&endDate=${year}-12-31&team_id=144`
  const filePath = './season-games.json'

  fetchAndWriteToFile(apiUrl, filePath)
}

// 634622
export function fetchGame(gameId: string) {
  const apiUrl = `https://statsapi.mlb.com/api/v1/game/${gameId}/playByPlay`
  const filePath = `./game-${gameId}.json`

  fetchAndWriteToFile(apiUrl, filePath)
}

// fetchSeasonGames(2021)
fetchGame('634622')
