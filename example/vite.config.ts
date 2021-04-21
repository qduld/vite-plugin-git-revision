import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteGitRevision from 'vite-plugin-git-revision'

// https://vitejs.dev/config/
export default defineConfig({
  define:{
    // VERSION:'1234'
  },
  plugins: [
    vue(),
    ViteGitRevision({})
  ]
})
