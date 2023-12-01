import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname,'src')
      }
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (url) => url.replace(RegExp(`^${env.VITE_APP_BASE_API}`), '')
        }
      }
    }
  }
})
