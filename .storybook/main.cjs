const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return {
      ...config,
      rollupOptions: {
        ...config.rollupOptions,
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src"),
        },
      },
    };
  },
};
