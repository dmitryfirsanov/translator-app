import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://translate.api.cloud.yandex.net/translate/v2'
    }
  }
};

export default defineConfig(config);

