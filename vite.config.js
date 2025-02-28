import { defineConfig } from 'vite';
import path from 'path';

// Vite config to set alias for `@`
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Maps `@` to the `src` directory
    }
  },
});
