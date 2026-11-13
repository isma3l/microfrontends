import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    base: isDev ? "/" : "/marketing/",
    plugins: [
      react(),
      federation({
        name: "marketing",
        filename: "remoteEntry.js",
        exposes: {
          "./bootstrap": "./src/bootstrap.tsx",
        },
        dev: {
          remoteHmr: true,
        },
        shared: {
          react: {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
        },
      }),
    ],
    server: {
      port: 5001,
      strictPort: true,
      cors: true,
    },
    preview: {
      port: 5001,
      strictPort: true,
      cors: true,
    },
    build: {
      target: "esnext",
    },
  };
});
