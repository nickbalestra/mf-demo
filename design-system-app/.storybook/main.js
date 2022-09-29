const customConfig = require("../webpack.config");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      plugins: [...config.plugins, ...customConfig.plugins],
      optimization: {
        ...config.optimization,
        ...customConfig.optimization,
      },
      output: {
        ...config.output,
        ...customConfig.output,
      },
    };
  },
};
