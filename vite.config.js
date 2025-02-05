import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kmer-otaku-festival/',
  server: {
    port: 3000
  }
});
