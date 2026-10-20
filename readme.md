# Learnings

A personal learning repository — every vanilla-JavaScript experiment, React exercise and
backend project, collected into one place and organised so it is easy to browse, run and
extend.

This repo was formed by consolidating three earlier repositories (`FullStack_JS_Learning`,
`backendLearning`, `frontendLearning`). Duplicate copies were collapsed into a single
canonical version, choosing the copy that was the most complete.

---

## Layout

```
learnings/
├── javascript/       plain JS topics — closures, promises, debouncing, polyfills…
├── frontend/react/   React — components, forms, hooks, state management
├── backend/          Node, Express, MongoDB, GraphQL
└── docs/notes/       written explanations of the trickier concepts
```

| Section | Projects | Readme |
| --- | --- | --- |
| JavaScript | 11 | [javascript/readme.md](./javascript/readme.md) |
| React components | 19 | [frontend/react/components/readme.md](./frontend/react/components/readme.md) |
| React forms | 3 | [frontend/react/forms/readme.md](./frontend/react/forms/readme.md) |
| React hooks | 3 | [frontend/react/hooks/readme.md](./frontend/react/hooks/readme.md) |
| React state | 3 | [frontend/react/state/readme.md](./frontend/react/state/readme.md) |
| Backend | 4 | [backend/readme.md](./backend/readme.md) |
| Notes | 4 | [docs/notes/readme.md](./docs/notes/readme.md) |

**43 projects in total.**

---

## Quick start

Every project is standalone — there is no root install and no workspace tooling.
Navigate into a project and run it:

```bash
cd frontend/react/components/todo-list
npm install
npm run dev
```

Plain-JavaScript topics need no install at all:

```bash
node javascript/basics/index.js
```

The backend projects use `npm start`; see [backend/readme.md](./backend/readme.md) for the
one project that needs a `.env` file.

---

## Conventions

- **Everything is lowercase.** Multi-word names are **kebab-case**: `todo-list`,
  `use-local-storage`, `pagination-rc`.
- **One project per folder**, each with its own `package.json`, `readme.md` and (for React
  apps) a Vite config.
- **`readme.md`** — every project explains what it demonstrates, the concepts involved and
  how to run it.
- **Notes are centralised** in [`docs/notes/`](./docs/notes/), linked from the project they
  belong to.
- **One canonical version per project** — where the source repos overlapped, the most
  complete copy was kept.

---

## History

The commit history of all three original repositories is preserved in this repo, so
`git log --follow <file>` still traces a file back to the commit that first introduced it.

---

## License

[MIT](./license)
