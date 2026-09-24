import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// IMPORTANT: set base for GitHub Pages deployment
export default defineConfig({
  base: "/",   // replace with your repo name
  plugins: [react(), tailwindcss()],
})
