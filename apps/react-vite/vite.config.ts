/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/react-vite',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  resolve: {
    alias: {
      '@vite-sb-paths/rlib-vite': path.resolve('libs', 'rlib-vite', 'src'),
      '@vite-sb-paths/jslib-vite': path.resolve('libs', 'jslib-vite', 'src'),
      '@vite-sb-paths/react-nobundler': path.resolve(
        'libs',
        'react-nobundler',
        'src'
      ),
    },
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
