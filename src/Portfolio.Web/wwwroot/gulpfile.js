'use strict';

var gulp = require('gulp'),
    Config = require('./config/gulpFile.config.js'),
    del = require('del');

var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');

var config = new Config();

gulp.task('clean', function (done) {
    del('./dist', done);
});


/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
    var typeScriptGenFiles = [
                                config.tsGenPath + '/**/*.js',    // path to all JS files auto gen'd by editor
                                config.tsGenPath + '/**/*.js.map'
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});

gulp.task('build', function() {
  return gulp.src('src/main.ts')
    .pipe(gulpWebpack({}, webpack))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['clean', 'clean-ts']);