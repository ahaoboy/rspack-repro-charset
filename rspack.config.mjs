import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { rspack } from "@rspack/core";

const config = {
  target: 'es3',
  output: {
    chunkFormat: "commonjs"
  },
  entry: {
    main: "./src/index.js",
  },
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        minimizerOptions: {
          format: {
            asciiOnly: true,
          },
        },
      })
    ]
  },
};

export default config;
