var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');


// This task should only be used with npm test command
gulp.task('unit-tests', function () {
    return gulp.src('qa/tests-*.js')
        .pipe(mocha({
            ui: 'tdd'
        }));
});

gulp.task('build', function () {
    // Single entry point to browserify
    gulp.src('./app/app.js')
        .pipe(browserify({
        }))
        .pipe(rename('build.js'))
        .pipe(ngAnnotate())
   //     .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('default', [], function () {});