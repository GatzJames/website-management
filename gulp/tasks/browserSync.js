var browserSync = require('browser-sync'),
    gulp = require('gulp'),
    config = require('../config').browserSync;

/* BrowserSync Task => Run a local server and  */
gulp.task('browserSync', function(){
    browserSync(config);
});
