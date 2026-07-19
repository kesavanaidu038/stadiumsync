import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/https://github.com/kesavanaidu038/stadiumsync/',
  server: {
    port: 5173,
    open: true,
  },
})
