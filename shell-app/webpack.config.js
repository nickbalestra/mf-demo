const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const deps = require("./package.json").dependencies;
const port = 3003;

module.exports = {
  entry: "./main.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    publicPath: "auto",
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    port,
  },
  resolve: {
    extensions: [
      ".jsx",
      ".js",
      ".json",
      ".css",
      ".scss",
      ".jpg",
      "jpeg",
      "png",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        loader: "url-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      filename: "remoteEntry.js",
      remotes: {
        "@optimism/design-system":
          "design_system_app@http://localhost:6006/remoteEntry.js",
        "@optimism/gateway": "gateway_app@http://localhost:4004/remoteEntry.js",
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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
