import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react()],
  output: "static",
  build: {
    assets: "_astro",
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 900,
      sourcemap: false,
    },
  },
});
