import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://io.giggs.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
