# Contributing

This is a personal learning repo — the goal is to keep it browsable and runnable, so a few
conventions keep it tidy.

## Naming

- **All folders and files are lowercase.**
- **Multi-word names are kebab-case**: `todo-list`, `use-local-storage`, `pagination-rc`.
  No `snake_case`, no `camelCase`, no spaces in folder names.
- The folder name is the project's name — keep `package.json`'s `name` field in sync with it.

## Adding a project

1. Pick the right section:
   - `javascript/<topic>/` — plain JS, no framework
   - `frontend/react/components/<project>/` — a single UI feature
   - `frontend/react/forms/<project>/` — form handling
   - `frontend/react/hooks/<project>/` — a custom hook
   - `frontend/react/state/<project>/` — state management
   - `backend/<stack>/<project>/` — server-side
2. Add a `readme.md` with: what it demonstrates, the key concepts, and how to run it.
3. React and backend projects need their own `package.json` — projects are standalone, not
   part of a workspace.
4. Link the new project from the section's `readme.md` table.
5. If it teaches a concept worth writing down, add a note in `docs/notes/` and link it from
   both the note index and the project.

## Notes

- Keep notes in plain Markdown under `docs/notes/`.
- Prefer showing *why* over *what* — the code already shows what.

## Commit messages

Short and imperative: `add react hook-form project`, `fix pagination page count`.

## Before you push

```bash
cd <the project you changed>
npm install
npm run dev      # make sure it still runs
```
