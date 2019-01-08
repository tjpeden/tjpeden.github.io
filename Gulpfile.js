'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('autoprefixer');

gulp.task('default', function() {
  return gulp
  .src('sass/main.scss')
  .pipe(sass({
    includePaths: [
      './node_modules/',
    ],
    outputStyle: 'expanded',
  }).on('error', sass.logError))
  .pipe(postcss([ autoprefixer() ]))
  .pipe(cleanCSS({
    inline: ['local'],
    sourceMap: true,
  }))
  .pipe(gulp.dest('assets/stylesheets/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('sass/**/*.scss', ['default']);
});
