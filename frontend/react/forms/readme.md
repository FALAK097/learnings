# React Forms

Form handling exercises — from hand-rolled validation to schema-driven validation with
`react-hook-form`.

```bash
cd frontend/react/forms/<project>
npm install
npm run dev
```

| Project | What it demonstrates |
| --- | --- |
| [dynamic-form-field](./dynamic-form-field/) | Adding and removing inputs at runtime, immutably |
| [form-validation](./form-validation/) | Per-field validation, error messages, dirty state |
| [react-hook-form](./react-hook-form/) | The same form three ways: plain RHF, with Yup, and with Zod |

`react-hook-form` contains three interchangeable implementations side by side:

- `src/components/react-hook-form.tsx` — the bare hook
- `src/components/yup-react-hook-form.tsx` — validated with **Yup**
- `src/components/zod-react-hook-form.tsx` — validated with **Zod**
- `src/components/mui-react-hook-form.tsx` — wired up with **MUI** inputs
