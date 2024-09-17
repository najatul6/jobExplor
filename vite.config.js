import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.apijobs.dev',  // The target API server
        changeOrigin: true,  // This will modify the `Origin` header sent to the target
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove '/api' from the path before forwarding
        secure: true,  // Set to `false` if the target server uses self-signed certificates
      }
    }
  }
})
