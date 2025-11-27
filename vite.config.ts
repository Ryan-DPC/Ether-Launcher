import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://backend-ether.onrender.com',
        changeOrigin: true,
        secure: false
      },
      '/socket.io': {
        target: 'https://server-yi14.onrender.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
