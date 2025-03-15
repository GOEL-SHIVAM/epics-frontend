import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // usePolling was necessary to fix the WSL issue of no HMR
  server: {
    watch: {
      usePolling: true
    }
  }
})
