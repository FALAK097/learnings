# React State Management

Three ways to share state in React, smallest to largest.

```bash
cd frontend/react/state/<project>
npm install
npm run dev
```

| Project | What it demonstrates |
| --- | --- |
| [context-api](./context-api/) | The Context API — sharing theme state without prop drilling |
| [redux-toolkit](./redux-toolkit/) | Redux Toolkit — slices, reducers, actions and the store |
| [rtk-blog](./rtk-blog/) | A bigger RTK app: separate `posts` / `users` slices, cross-slice selectors, async data |

### When to use which

- **Local state** — `useState` inside a component. Always start here.
- **Context API** — a handful of values shared across a subtree (theme, current user, locale).
  It is *not* a state manager: every consumer re-renders when the value changes.
- **Redux Toolkit** — many components reading and writing the same state, with a need for
  devtools, time-travel debugging and a predictable update order.
