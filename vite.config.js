import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; 

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  theme: {
    extend: {
      colors: {
        primary: '#33b7c1',
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});