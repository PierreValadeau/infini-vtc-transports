import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/infini-vtc-transports/',
  server: {
    host: true, // Écoute sur toutes les interfaces (0.0.0.0) pour Docker
    port: 5173,
    watch: {
      usePolling: true, // Nécessaire pour le hot-reload dans Docker
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 0, // Don't inline images as base64
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
