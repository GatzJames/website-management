var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    paths = require('../config').paths;
// Html Task => Moves index.html from src to dist
gulp.task('html', function(){
    return gulp.src(paths.src.html)
               .pipe(gulp.dest(paths.dist.base))
               .pipe(browserSync.reload({stream: true}));
});
