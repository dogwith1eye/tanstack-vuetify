// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/vue-start/plugin/vite'
import viteVue from '@vitejs/plugin-vue'
import fonts from 'unplugin-fonts/vite'

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
        fonts({
            fontsource: {
                families: [
                    {
                        name: 'Inter',
                        weights: [100, 300, 400, 500, 700, 900],
                        styles: ['normal', 'italic'],
                    },
                ],
            },
        }),
    ],
})