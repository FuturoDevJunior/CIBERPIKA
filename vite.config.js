import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
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
  publicDir: 'public'
}) 