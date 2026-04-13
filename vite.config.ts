// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/vue-start/plugin/vite'
import viteVue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        port: 3001,
    },
    resolve: {
        tsconfigPaths: true,
    },
    plugins: [
        tanstackStart(),
        // vue's vite plugin must come after start's vite plugin
        viteVue(),
    ],
})