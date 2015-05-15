var gulp = require('gulp');
var sass = require('gulp-sass');
// gulp-plumber prevent pipe breaking caused by errors from gulp plugins.
var plumber = require('gulp-plumber');

// compliles sass stylesheets
gulp.task('sass', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'));
});

// watch the file changes, and recompile automatically.
gulp.task('watch', function() {
  gulp.watch('public/stylesheets/*.scss', ['sass']);
});

// gulp tasks. It will run when you execute gulp command in the terminal.
gulp.task('default', ['sass', 'watch']);
