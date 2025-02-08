import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import auto from 'autoprefixer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), auto()],
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
})
