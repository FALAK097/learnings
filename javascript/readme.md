# JavaScript Fundamentals

Plain JavaScript — no framework, no build step. These are small, focused snippets you can read
in a couple of minutes and run directly in the browser console or with `node <file>`.

| Topic | What it covers |
| --- | --- |
| [basics](./basics/) | Regex, event loop, IIFE, callbacks, closures, currying |
| [array-manipulation](./array-manipulation/) | Flattening nested arrays, removing duplicates |
| [closures](./closures/) | Lexical scope capture and the loop-variable trap |
| [currying](./currying/) | `f(a, b, c)` → `f(a)(b)(c)` and when not to use it |
| [shallow-deep-clone](./shallow-deep-clone/) | Shallow copy vs. deep clone, and the mutation bugs they cause |
| [promises](./promises/) | Promise states plus `all` / `any` / `allSettled` / `race` |
| [memoization](./memoization/) | Caching results — Fibonacci from O(2ⁿ) to O(n) |
| [debounce-throttle](./debounce-throttle/) | Rate limiting, with hand-written polyfills |
| [debounce-search](./debounce-search/) | Debouncing a search input |
| [event-delegation](./event-delegation/) | One listener on a parent, many dynamic children |
| [polyfills/array-methods](./polyfills/array-methods/) | `map` / `filter` / `reduce` from scratch |

## Running them

Most topics are a single `.js` file:

```bash
node javascript/basics/index.js
```

The topics with an `index.html` (`debounce-throttle`, `debounce-search`, `event-delegation`,
`polyfills/array-methods`) are demos — open the file in a browser, or serve the folder:

```bash
npx serve javascript
```

## Notes

Concept write-ups live in [`docs/notes`](../docs/notes/):

- [Closures](../docs/notes/closures.md)
- [Currying](../docs/notes/currying.md)
- [Shallow copy vs. deep clone](../docs/notes/shallow-deep-clone.md)
- [useLocalStorage](../docs/notes/use-local-storage.md)
