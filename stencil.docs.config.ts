import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "calcite-app",
  outputTargets: [
    {
      type: "www",
      dir: "docs",
      copy: [
        { src: "demos" },
        { src: "../node_modules/@esri/calcite-components/dist/calcite", dest: "vendor/@esri/calcite-components" }
      ],
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: "src/assets/styles/includes.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/assets/styles/includes.scss"]
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
