# Storybook + Vite + local import paths

## For vite

### Expected behaviour

- I would like to import a local library into a **story** in a Vite app, and Storybook to be able to resolve the import paths and build correctly.

### Actual behaviour

- I can import a local library into a **story** in a Vite app, but Storybook cannot resolve the import paths and build correctly. See -->> [apps/react-vite/src/app/other.stories.tsx](apps/react-vite/src/app/other.stories.tsx)

Error:

```
[vite]: Rollup failed to resolve import "@vite-sb-paths/jslib-vite" from "/Users/katerina/Projects/nrwl/test_nx_workspaces/storybook-vite-paths/apps/react-vite/src/app/app.stories.tsx".
```

### How to test

```
npx nx build-storybook react-vite
```

### How to fix

In [`apps/react-vite/tsconfig.app.json`](apps/react-vite/tsconfig.app.json) remove the `.stories.*` paths from the `exclude` array:

![Remove the `.stories.*` paths](changes.png)

## For webpack

### Expected behaviour

- I would like to be able to import a webpack library into a webpack app, and Storybook to be able to resolve the import paths and build correctly.
- I would like to be able to import a webpack library into a **story** of a webpack app, and Storybook to be able to resolve the import paths and build correctly.

### Actual behaviour

- I can import a webpack library into a webpack app, and Storybook can resolve the import paths. However, it throws a build error.
- If I use react-vite, the error goes away and I can import the lib into a component, maybe, but I still cannot import the lib into a story.

Error:

```
ERR! => Failed to build the preview
ERR! Module build failed (from ./node_modules/babel-loader/lib/index.js):
ERR! SyntaxError: /Users/katerina/Projects/nrwl/test_nx_workspaces/vite-sb-paths/libs/jslib-rollup/src/lib/jslib-rollup.ts: Unexpected token, expected "{" (1:29)
ERR!
ERR! > 1 | export function jslibRollup(): string {
ERR!     |                              ^
ERR!   2 |   return 'jslib-rollup';
ERR!   3 | }
ERR!   4 |
```

### How to test

```
npx nx build-storybook react-webpack
```
