import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: '({})',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,ts,css,html,ico,png,svg}'],
      },
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Ybook',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: './src/assets/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './src/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
