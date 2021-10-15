module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-ant-design',
      // options: {
      //   lessOptions: {
      //     modifyVars: {
      //       'primary-color': '#1DA57A',
      //       'border-radius-base': '2px',
      //     },
      //   },
      // },
    },
  ],
  core: {
    builder: 'webpack5',
  },
}
