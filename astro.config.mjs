import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tomatoe.cc",
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
});
