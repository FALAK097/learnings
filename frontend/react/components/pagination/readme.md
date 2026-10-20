# Pagination + Search

Paginated list with a live search box, backed by a public brewery API.

## Key concepts

- Page state driving the request
- Debounced/filtered search term in the query string
- Rendering a page-number strip

## Run it

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint     # eslint
```

> Each project is self-contained: run the commands **inside the project folder**.

## Files

- `src/app.jsx`
- `src/beer.jsx`
- `src/components`
- `src/index.css`
- `src/main.jsx`
