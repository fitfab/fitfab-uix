import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

import pkg from "./package.json";
const currentWorkingPath = process.cwd();

/**
 * This file is based on the recommendation from vitejs.dev
 * @see https://vitejs.dev/guide/build.html#library-mode
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.join(currentWorkingPath, "src/index.ts"),
      name: pkg.name,
      fileName: (format) => `${pkg.name}.${format}.js`,
    },
    rollupOptions: {
      /**
       * Externalize deps that shouldn't be bundled
       * into your library
       */
      external: ["react", "react-dom"],
      output: {
        /**
         * Provide global variables to use in the UMD build
         */
        globals: {
          react: "React",
        },
      },
    },
  },
});
