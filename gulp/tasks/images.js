var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    paths = require('../config').paths;
// Html Task => Moves index.html from src to dist
gulp.task('img', function(){
    return gulp.src(paths.src.img)
               .pipe(gulp.dest(paths.dist.img))
               .pipe(browserSync.reload({stream: true}));
});
