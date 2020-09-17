# scorekeeper

- Needs a version of Node greater than `12.10`
- A really great rundown of Retrosheet files is here: https://www.retrosheet.org/eventfile.htm

## Commands

- `npm run test`: runs jest tests
- `npm run typecheck`: runs TS compiler with `--noEmit`
- `npm run generate`: generates Scorekeeper output from the config file define in `generate/config.ts`. Outputs to `/output`
- `npm run server`: runs a small dev server on `localhost:4000` to serve `/output`
- `npm run dev`: runs `generate` and `server` to regenerate all the games and 🔥fires🔥  up the dev server
