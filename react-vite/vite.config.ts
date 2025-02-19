import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isDev = env.VITE_APP_ENV == "development";

  return {
    plugins: [
      qiankun("react-vite", {
        useDevMode: isDev,
      }),
      !isDev && react(),
    ],
    server: {
      port: 5171,
    },
  };
});
