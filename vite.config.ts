import { fileURLToPath, URL } from "url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import { join } from "path";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      vue(),
      process.env.NODE_ENV !== "test"
        ? electron({
            main: {
              entry: "electron/main.ts",
              vite: {
                build: {
                  sourcemap: false,
                  outDir: "dist/electron",
                },
              },
            },
            preload: {
              input: {
                // You can configure multiple preload here
                index: join(__dirname, "electron/preload.ts"),
              },
              vite: {
                build: {
                  // For debug
                  sourcemap: "inline",
                  outDir: "dist/electron/preload",
                },
              },
            },
            // Enables use of Node.js API in the Renderer-process
            renderer: {},
          })
        : undefined,
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: pkg.env.VITE_DEV_SERVER_HOST,
      port: pkg.env.VITE_DEV_SERVER_PORT,
    },
  });
};
