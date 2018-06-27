var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var processors = [autoprefixer, cssnext, precss];
gulp.task('default', () => {
    gulp.src('css/*.css')
        .pipe(postcss([processors]))
        .pipe(gulp.dest('.nuxt/dist/'));
});