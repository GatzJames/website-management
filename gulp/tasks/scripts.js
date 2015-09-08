var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    errorNotify = require('../utils/errorNotify'),
    webpack = require('webpack-stream'),
    webpackConfig = require('../config').webpack,
    notify =require('gulp-notify'),
    paths = require('../config').paths;

/* Scripts Task => Compile ES6 and jsx, minify the file and move it to dist */
gulp.task('scripts', function(){
    return (
        gulp.src(paths.src.jsmain)
            .pipe(plumber({errorHandler: errorNotify}))
            .pipe(webpack(webpackConfig))
            .pipe(uglify())
            .pipe(gulp.dest(paths.dist.js))
            .pipe(browserSync.reload({stream: true}))
    );
});
