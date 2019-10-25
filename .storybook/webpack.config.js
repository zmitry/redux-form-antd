// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/docs/react-storybook/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const merge = require('webpack-merge');
const path = require('path');
const lessPath = path.resolve(__dirname,'custom.less');
const maxAssetSize = 1024 * 1024;

module.exports =  async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'less-loader',
        options: {
          modifyVars: {
            'hack': `true; @import "${lessPath}";`,
          },
          javascriptEnabled: true
        }
      }
    ],
    include: path.resolve(__dirname, '../'),
  });
  return merge(config, {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30 * 1024,
        maxSize: maxAssetSize,
      },
    },
    performance: {
      maxAssetSize: maxAssetSize
    }
  });
};
