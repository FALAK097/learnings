# Backend

Server-side code: Node.js core, Express, MongoDB and GraphQL.

| Project | Stack | What it demonstrates |
| --- | --- | --- |
| [node/nodejs-tutorial](./node/nodejs-tutorial/) | Node core | The `fs` module, streams, and a bare `http` server |
| [express/node-express-api](./express/node-express-api/) | Express | REST CRUD over a JSON file, with validation |
| [mongodb/api-mongodb](./mongodb/api-mongodb/) | Express + TypeScript + Mongoose | Auth, sessions, role guards, middleware |
| [graphql/graphql-server](./graphql/graphql-server/) | Apollo GraphQL | Schema, resolvers and a fake database |

## Running them

Each project is standalone:

```bash
cd backend/express/node-express-api     # or any other project
npm install
npm start
```

### Environment variables

`backend/mongodb/api-mongodb` reads its configuration from a `.env` file (not committed):

```env
MONGO_URL=<your mongodb connection string>
SECRET=<a random string used to sign session tokens>
```

Copy it next to `package.json` before running that project. The other projects need no
environment configuration.

### Notes

- `api-mongodb` uses `dotenv` with the path `./src/.env` — run it from the project root.
- `node-express-api` stores its data in `user.json` next to the code; it is rewritten on
  every mutation.
