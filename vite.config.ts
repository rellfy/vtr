import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: UserConfig) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode!, process.cwd())
  };
  return defineConfig({
    root: ".",
    build: {
      outDir: "dist",
    },
    plugins: [
      react()
    ],
    define: {
      global: "globalThis",
      "process.env": process.env
    }
  });
};