var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('app-tests', function () {
    return gulp.src('./app/test/**/*.js')
        .pipe(mocha({
            ui: 'tdd'
        }));
});

// This task should only be used with npm test command
gulp.task('api-tests', function () {
    return gulp.src('qa/api/*.js')
        .pipe(mocha({
            ui: 'tdd'
        }));
});

gulp.task('build', function () {
    gulp.src('./app/app.js')
        .pipe(browserify({}))
        .on('error', catchError)
        .pipe(rename('build.js'))
        .pipe(ngAnnotate())
    .pipe(gulp.dest('./public/js'))
});

gulp.task('deploy', function () {
    gulp.src('./app/app.js')
        .pipe(browserify({}))
        .on('error', catchError)
        .pipe(rename('build.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.js', ['build']).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', Building...');
    });
});

gulp.task('default', ['build', 'unit-tests'], function () {});

function catchError(err) {

    console.log(err + ' error. Fix and rebuild');

    this.emit('end');

};