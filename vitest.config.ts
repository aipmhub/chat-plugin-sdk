import * as path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: {
      '@': path.join(__dirname, './src'),
      '@aipmorg/chat-plugin-sdk': path.join(__dirname, './src'),
      '@aipmorg/chat-plugin-sdk/client': path.join(__dirname, './src/client'),
      '@aipmorg/chat-plugin-sdk/openapi': path.join(__dirname, './src/openapi'),
    },
    coverage: {
      include: ['src'],
      reporter: ['text', 'text-summary', 'json', 'lcov'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/test-setup.ts',
  },
});
