import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Force all imports of react and react-dom to resolve to the root node_modules
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  optimizeDeps: {
    // Explicitly force Vite to pre-bundle motion-react and lucide-react 
    // using the exact React instance defined in your alias above
    include: ['motion/react', 'lucide-react'],
  },
})
