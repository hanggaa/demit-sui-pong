import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // === UBAH BARIS INI SESUAI NAMA REPO BARU ===
  base: '/demit-sui-pong/', 
  
  plugins: [
    react(),
  ],
});