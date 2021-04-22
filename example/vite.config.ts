import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteGitRevision from 'vite-plugin-git-revision'

// https://vitejs.dev/config/
export default defineConfig({
  define:{
  },
  plugins: [
    vue(),
    ViteGitRevision({})
  ]
})
