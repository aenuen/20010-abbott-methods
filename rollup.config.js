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
      file: "cjs.js",
      sourcemap: true
    },
    {
      format: "es",
      file: "esm.js",
      sourcemap: true
    }
  ]
};
