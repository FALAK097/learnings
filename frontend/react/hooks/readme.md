# React Hooks

Custom hooks, each a small, self-contained app.

```bash
cd frontend/react/hooks/<project>
npm install
npm run dev
```

| Project | What it demonstrates |
| --- | --- |
| [use-fetch](./use-fetch/) | Data fetching with `loading` / `error` / `data` state |
| [use-local-storage](./use-local-storage/) | `useState` that transparently persists to `localStorage` (TypeScript) |
| [use-memo-hook](./use-memo-hook/) | `useMemo` to cache an expensive calculation |

The `use-local-storage` project also ships a written-up explanation of the hook's design:
[`docs/notes/use-local-storage.md`](../../../docs/notes/use-local-storage.md).
