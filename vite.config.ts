import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'spa-fallback',
          configureServer(server) {
            return () => {
              server.middlewares.use((req, res, next) => {
                const url = req.url || '/';
                if (url.startsWith('/assets') || url.match(/\.\w+$/)) {
                  return next();
                }
                if (url !== '/index.html') {
                  req.url = '/index.html';
                }
                next();
              });
            };
          },
        },
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: { alias: { '@': path.resolve(__dirname, '.') } }
    };
});
