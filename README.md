# scorekeeper

- Needs a version of Node greater than `12.10`

## Commands

- `npm run test`: runs jest tests
- `npm run typecheck`: runs TS compiler with `--noEmit`
- `npm run generate`: parses Retrosheet files from `./dev/retrosheet_files` and outputs the result to `./dev/output`
- `npm run server`: runs a server on `localhost:4000` that has 2 routes
  - `/games`: returns available a list with the `gameInfo` and `id` of games from `./dev/output`. The id is the name of the JSON file (minus the .json file ending)
  - `/games/:id`: returns the full game in the corresponding file
- `npm run dev`: runs `generate` and `server` to regenerate all the games and fires up the dev server
