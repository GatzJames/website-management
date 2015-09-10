var gulp = require('gulp'),
    paths = require('../config').paths;

/* Watch Task => Watches for changes in scss and html and reruns the apropriate tasks
    Javascript will be watched by webpack for faster recompile times*/
gulp.task('watch', function(){
    gulp.watch(paths.src.scss, ['styles']);
    gulp.watch(paths.src.html, ['html']);
    gulp.watch(paths.src.img, ['img'])
});
