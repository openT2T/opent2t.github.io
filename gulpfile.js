const beep = require('beepbeep');
const connectLr = require('connect-livereload');
const del = require('del');
const express = require('express');
const gulp = require('gulp');
const open = require('open');
const plugins = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

const port = 9000;

// global error handler
var errorHandler = function (error) {
    beep(2, 170);
    plugins.util.log(error);
    throw error;
};


// start watchers
gulp.task('watch', function () {
    plugins.livereload.listen();
    
    // reload the web server when things change in the current directory
    gulp.watch('./**', { readDelay: 500 })
        .on('change', plugins.livereload.changed)
        .on('error', errorHandler);
});

// run express for development
gulp.task('express', function () {
    var app = express();

    // set up live reload
    app.use(connectLr())
        .use(express.static('./'));

    app.listen(port);

    open('http://localhost:' + port + '/');
});

// default sequence
gulp.task('default', function (done) {
    runSequence(
        'express',
        'watch',
        done);
});
