import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')


// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      assetFileNames: ({name}) => {
        return 'assets/[name]-[hash][extname]';
      },
      input: {
        index: resolve(root,  'index.html'),
        mac: resolve(root,  'Mac' ,'index.html'),
        windows: resolve(root,  'Windows' ,'index.html'),
        
      }
    }
  }
})
