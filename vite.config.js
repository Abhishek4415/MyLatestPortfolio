import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// IMPORTANT: set base for GitHub Pages deployment
export default defineConfig({
  base: "/MyLatestPortfolio/",   // replace with your repo name
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
})
