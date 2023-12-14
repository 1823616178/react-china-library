import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from "node:url";

const base = "/"
// https://vitejs.dev/config/
export default ({commamd, mode}) => {
    const root = process.cwd()
    const env = loadEnv(mode, root)
    const port = env.VITE_APP_PORT || 65101
    return {
        root,
        base,
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            }
        },
        server: {
            host: "127.0.0.1",
            port,
            strictPort: false,
            open: true,
            proxy: {
                "/napi": {
                    target: env.VITE_APP_DEV_BASE_URL_NAPI,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/napi/, ""),
                },
                "/api2": {
                    target: env.VITE_APP_DEV_BASE_URL_NAPI_V2,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api2/, ""),
                },
                "/img": {
                    target: "http://192.168.1.166:31331/",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/img/, ""),
                },
            },
        },
        plugins: [
            react()
        ],
    }
}
