# Learnings

A personal learning repository — every vanilla-JavaScript experiment, React exercise and
backend project, collected into one place and organised so it is easy to browse, run and
extend.

This repo was formed by consolidating three earlier repositories (`FullStack_JS_Learning`,
`backendLearning`, `frontendLearning`). **Nothing was dropped**: duplicate copies were
collapsed into a single canonical version, and every variant that existed only in one of
the three repos was preserved (see [Duplicates & variants](#duplicates--variants)).

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
- **Alternates live in `variants/`** — alternate implementations of the same idea, kept
  rather than deleted.

---

## Duplicates & variants

The three source repos overlapped heavily — the "fullstack" repo was largely a union of the
other two. Duplicates were collapsed onto a single canonical copy, choosing the version that
was the most complete.

Five files existed **only** in the `FullStack_JS_Learning` repo and had no counterpart
elsewhere. Rather than drop them, they were kept as `variants/` inside the matching project:

| Variant | Original file | Why it differs |
| --- | --- | --- |
| `frontend/react/components/pagination/variants/beer-punkapi.jsx` | `src/Beer.jsx` | Uses the PunkAPI brewery API and renders an image |
| `frontend/react/components/pagination/variants/pagination-with-react-import.jsx` | `src/components/Pagination.jsx` | Same logic, with an explicit `import React` |
| `frontend/react/components/pagination-rc/variants/app-pre-math-ceil-fix.jsx` | `src/App.jsx` | The version *before* `Math.ceil` was applied to the total page count |
| `frontend/react/components/todo-list/variants/app-plain-css.jsx` | `src/App.jsx` | The earlier version, styled entirely through CSS classes |
| `frontend/react/components/todo-list/variants/index.css` | `src/index.css` | The fuller stylesheet, including the `ul` / `li` / `.completed` rules |

Four JavaScript topics existed in two versions — the `FullStack_JS_Learning` copy was a
strict subset of the `frontendLearning` copy, so the more complete version was kept:

- `javascript/basics`
- `javascript/array-manipulation`
- `javascript/memoization`
- `javascript/promises`

---

## History

The commit history of all three original repositories is preserved in this repo, so
`git log --follow <file>` still traces a file back to the commit that first introduced it.

---

## License

[MIT](./license)
