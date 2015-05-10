var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    minifyCss = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        proxy: "localhost:8000/app/"
    });
});

gulp.task('build-js', function() {
    return gulp.src('./app/src/js/main.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./app/dist/js'))
        .pipe(reload({stream: true}));
});

gulp.task('build-css', function () {
    return gulp.src('./app/src/css/scss/main.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./app/dist/css'))
        .pipe(reload({stream: true}));
});


gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('./app/src/js/main.js', ['build-js']);
    gulp.watch('./app/src/css/scss/main.scss', ['build-css']);
});
