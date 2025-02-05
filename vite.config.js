import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: './',
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/[tj]sx?$/]
    }
  },
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  }
}) 