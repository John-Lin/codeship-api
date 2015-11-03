'use strict';
let gulp = require('gulp');
let mocha = require('gulp-mocha');

gulp.task('spec', () => {
  return gulp.src('test/*_spec.js', {read: false})
    .pipe(mocha());
});
