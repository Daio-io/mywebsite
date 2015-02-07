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

gulp.task('build', ['clean', 'minify-css'], function () {
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

gulp.task('default', [], displayTasks);
gulp.task('help', displayTasks);


// ** Helpers ** //

function catchError(err) {

    console.log(err + ' error. Fix and rebuild');

    this.emit('end');

};

// ** Task Options ** //
var task_options = {

    "app-tests:": "Runs the unit tests against the front end Angular Javascript",
    "api-tests:": "Runs all tests against the API. WARN: Should only be run by npm test command",
    "build:": "Builds the Javascript into the public js folder",
    "deploy:": "Minfiess Css, builds minified Javascript and bumps the project version number",
    "bump:": "Bump the project version",
    "clean:": "Removes all currently build Javascript and Css",
    "minify-css:": "Builds and Minfies all Css into the public Css folder",
    "watch:": "Watches for changes to front end Javascript and builds on change",
    "help:": "Displays this list of tasks"

};

function displayTasks(callback) {
    var output = '';
    var spacing = 0;
    Object.keys(task_options).forEach(function(item) {
        if (spacing < item.length) {
            spacing = item.length + 8;
        }
    });
    Object.keys(task_options).forEach(function(item) {
        output += ' ' + gutil.colors.blue(item) +
            new Array(spacing - item.length + 1).join(" ") +
            task_options[item] + '\n';
    });
    console.log('\nAvailable Tasks:\n');
    console.log(output);
    callback();
}
