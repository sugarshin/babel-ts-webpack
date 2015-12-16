const path = require('path');

module.exports = {
  cache: true,
  entry: {
    // common: './src/js/common.ts',
    // top: './src/js/top/index.tsx',
    // other: './src/js/other/index.ts'
    common: './src/js/common.js',
    top: './src/js/top/index.jsx',
    other: './src/js/other/index.js'
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
      // {
      //   test: /\.ts(x?)$/,
      //   exclude: /node_modules/,
      //   loader: 'ts'
      // }
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: [['typecheck', {
            disable: {
              production: true,
              release: true
            }
          }], 'syntax-flow', 'transform-flow-strip-types']
        }
      }
    ]
  }
};
