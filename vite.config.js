import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // Bundle dependencies into the prerender build: React 16 and friends are
  // CommonJS-only, which Node's ESM loader cannot import by name.
  ssr: {
    noExternal: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
