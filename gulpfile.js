var gulp = require('gulp');
var cleanCSS = require("gulp-clean-css");
var uncss = require('gulp-uncss');
var sass = require('gulp-sass');

gulp.task('css', () =>
    gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uncss({
        html: ['index.html']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
);

gulp.task('default', ['css']);