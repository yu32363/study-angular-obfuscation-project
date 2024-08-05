const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pump = require('pump');

gulp.task('uglify', function (cb) {
    pump([
        gulp.src('dist/**/*.js'),
        concat('app.min.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb);
});
