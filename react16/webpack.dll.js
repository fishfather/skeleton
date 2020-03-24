const webpack = require('webpack');
const path = require('path');

const vendors = [
  'react',
  'react-dom',
];

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist/dll'),
    filename: '[name]_[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist/dll','manifest.json'),
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
  ],
};