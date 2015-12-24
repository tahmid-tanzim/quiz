'use strict';
import gulp from 'gulp';
import gutil from 'gulp-util';
import connect from 'gulp-connect';

gulp.task('connect', () => {
    connect.server({
        root: './',
        livereload: false
    });
});

gulp.task('default', ['connect'], () => {
    gutil.log('Gulp Connect Server');
});

