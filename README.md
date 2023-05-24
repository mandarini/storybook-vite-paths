# Storybook + Vite + local import paths

## For vite

### Expected behaviour

- I would like to be able to import a React library (no bundler) into a Vite app, and Storybook to be able to resolve the import paths and build correctly.
- I would like to be able to import a js library into a Vite app, and Storybook to be able to resolve the import paths and build correctly.

### Actual behaviour

- I can import a React library into a Vite app, but Storybook cannot resolve the import paths and build correctly. Vite, however, can resolve the import paths and build correctly.
- I can import a js library into a Vite app, but Storybook cannot resolve the import paths and build correctly. Vite, however, can resolve the import paths and build correctly.

### How to test

```
npx nx build-storybook react-vite
```

## For webpack

### Expected behaviour

- I would like to be able to import a webpack library into a webpack app, and Storybook to be able to resolve the import paths and build correctly.

### Actual behaviour

- I can import a webpack library into a webpack app, and Storybook can resolve the import paths. However, it throws a build error.

### How to test

```
npx nx build-storybook react-webpack
```
