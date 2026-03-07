import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // src papkasini @ deb chaqirish mumkin bo'ladi
      '@': path.resolve(__dirname, './src'),
    },
  },
})