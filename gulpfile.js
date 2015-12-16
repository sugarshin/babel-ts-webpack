const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

gulp.task('server', cb => {
  browserSync({
    ui: false,
    notify: false,
    ghostMode: false,
    startPath: '/index.html',
    server: {
      baseDir: 'dest',
      directory: true
    }
  });
  cb();
});

const devWebpack = webpack(Object.assign({}, webpackConfig, {
  devtool: 'hidden-source-map',
  debug: true
}));
gulp.task('webpack:dev', cb => {
  devWebpack.run((err, stats) => {
    if (err) { throw new gutil.PluginError('webpack:dev', err); }
    gutil.log('[webpack:dev]', stats.toString({ colors: true }));
    cb();
  });
});

gulp.task('predefault', cb => {
  runSequence('webpack:dev', 'server', cb);
});

gulp.task('default', ['predefault'], function() {
  gulp.watch(['src/js/**/*.{js,jsx,ts,tsx}'], ['webpack:dev']);
  gulp.watch(['dest/assets/js/*.js'], [browserSync.reload]);
});

gulp.task('webpack:build', cb => {
  const finalWebpackConfig = Object.assign({}, webpackConfig, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        // output: {
        //   comments: require('uglify-save-license')
        // },
        compress: { warnings: false }
      })
    ]
  });

  webpack(finalWebpackConfig, (err, stats) => {
    if (err) { throw new gutil.PluginError('webpack:build', err); }
    gutil.log('[webpack:build]', stats.toString({ colors: true }));
    cb();
  });
});
