import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from 'rollup-plugin-terser'

export default {
  input: "src/index.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    sourceMaps(),
    terser()
  ],
  output: [
    {
      format: "cjs",
      file: "lib/bundle.cjs.js",
      sourcemap: true
    },
    {
      format: "es",
      file: "lib/bundle.esm.js",
      sourcemap: true
    }
  ]
};
