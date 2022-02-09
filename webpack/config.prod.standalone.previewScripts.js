const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  entry: {
    previewScripts: [
      '@babel/polyfill',
      path.resolve(__dirname, '../client/utils/previewEntry.js')
    ]
  },
  output: {
    path: path.resolve('dist'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules'],
    symlinks: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        sourceMap: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
};
