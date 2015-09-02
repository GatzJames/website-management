var gulp = require('gulp'),
    minify = require('csswring'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    autoprefixer = require('autoprefixer-core'),
    errorNotify = require('../utils/errorNotify'),
    browserSync = require('browser-sync'),
    paths = require('../config').paths;

/* Styles Task => Compile Sass, Run through processors and move it to dist */
gulp.task('styles', function(){
    var processors = [
        csswring, // Minify with sourcemaps
        autoprefixer // Css autoprefixer
    ];
    return (
        gulp.src(paths.src.scssmain)
            .pipe(plumber({errorHandler: errorNotify}))
            .pipe(sass())
            .pipe(postcss(processors))
            .pipe(gulp.dest(paths.dist.css))
            .pipe(browserSync.reload({stream: true}))
    );
});
