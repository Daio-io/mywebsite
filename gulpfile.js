var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('unit-tests', function () {
    return gulp.src('qa/tests-api.js')
        .pipe(mocha({
            ui: 'tdd'
        }));
});

gulp.task('browserify', function () {
    // Single entry point to browserify
    gulp.src('./app/app.js')
        .pipe(browserify({
        }))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('default', ['unit-tests'], function () {});