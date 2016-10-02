'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./_sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/stylesheets'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./_sass/**/*.scss', ['sass']);
});
