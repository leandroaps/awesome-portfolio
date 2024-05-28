/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        css: true,
        setupFiles: './src/config/vitest.config.ts'
    },
    server: {
        port: 3002
    },
    proxy: {
        '/api': {
            target: 'http://localhost:3002',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, '')
        }
    }
});
