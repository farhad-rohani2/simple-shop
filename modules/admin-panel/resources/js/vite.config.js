import {defineConfig, loadEnv} from "vite";
import laravel from "laravel-vite-plugin";
import vue from '@vitejs/plugin-vue';
import inject from "@rollup/plugin-inject";


import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const envDir = "../../../../";

    Object.assign(process.env, loadEnv(mode, envDir));
    return {
        build: {
            emptyOutDir: true,
            rollupOptions: {
                output: {},
            }
        },

        plugins: [
            inject({
                $ : 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery',
            }),
            vue(),
            laravel({
                hotFile: "../../../../public/builds/admin-panel-hot",
                publicDirectory: "../../../../public",
                buildDirectory: "/builds/admin-panel",
                input: [
                    "tailwind.css",
                    "./src/main.js",
                    // "./assets/scss/_blueberry.scss"
                ],
                refresh: [
                    '../../../../modules/admin-panel/**',
                ],
            })
        ],

        experimental: {
            renderBuiltUrl(filename, {hostId, hostType, type}) {
                if (hostType === "css") {
                    return path.basename(filename);
                }
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '/src'),
                './assets': path.resolve(__dirname, '../../public/assets'),
                'assets': path.resolve(__dirname, '../../public/assets'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: `@import "@/assets/scss/global.scss";`,
                },
            },
        },
    };
});
