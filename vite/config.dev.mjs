import { defineConfig } from "vite";

export default defineConfig({
  base: "https://github.com/Miriam7331/Phaser",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ["phaser"],
        },
      },
    },
  },
  server: {
    port: 8080,
  },
});
