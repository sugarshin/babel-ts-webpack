const path = require('path');

module.exports = {
  cache: true,
  entry: {
    common: './src/js/common.ts',
    top: './src/js/top/index.tsx',
    other: './src/js/other/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dest/assets/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts'
      }
      // {
      //   test: /\.js(x?)$/,
      //   exclude: /node_modules/,
      //   loader: 'babel',
      //   query: { presets: ['react', 'es2015'] }
      // }
    ]
  }
};
