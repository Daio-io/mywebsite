var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var del = require('del');
var bump = require('gulp-bump');
var minifyCss = require('gulp-minify-css');
var gutil = require('gulp-util');
var gulpList = require('gulp-list');

// ** TEST TASKS ** //

gulp.task('app-tests', function () {
    return gulp.src('./app/test/**/*.js')
        .pipe(mocha({
            ui: 'tdd'
        }));
});

gulp.task('api-tests', function () {
    return gulp.src('qa/api/*.js')
        .pipe(mocha({
            ui: 'tdd'
        }));
});

// ** BUILD TASKS ** //

gulp.task('bump', function () {
    return gulp.src(['./package.json'])
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
    del([
        'public/js/build.js',
        'public/css/daio.min.css'
    ]);
});

gulp.task('build', ['clean'], function () {
    return gulp.src('./app/app.js')
        .pipe(browserify({}))
        .on('error', catchError)
        .pipe(rename('build.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('deploy', ['clean', 'minify-css', 'bump'], function () {
    return gulp.src('./app/app.js')
        .pipe(browserify({}))
        .on('error', catchError)
        .pipe(rename('build.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('minify-css', function () {
    del([
        'public/css/daio.min.css'
    ]);
    return gulp.src('./sources/*.css')
        .pipe(minifyCss())
        .pipe(rename('daio.min.css'))
        .pipe(gulp.dest('./public/css/'))
});

// ** WATCH TASKS ** //

gulp.task('watch', function () {
    gulp.watch('./app/**/*.js', ['build']).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', Building...');
    });
});

// ** HELP TASKS ** //

gulp.task('default', ['help'], function () {});
gulp.task('help', function () {
    gulp.src('./buildTasks.json')
        .pipe(gulpList());

});


// ** Helpers ** //

function catchError(err) {

    console.log(err + ' error. Fix and rebuild');

    this.emit('end');

};
