const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false, // "single",
    splitChunks: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "design_system_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./stories/Button.jsx",
        "./Header": "./stories/Header.jsx",
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
