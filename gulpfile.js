const gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('sass', async function () {
  gulp.src('dev/scss/main.scss', { allowEmpty: true })
    .pipe(sass())
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('pug', async function () {
  gulp.src('dev/views/**/*.pug', { allowEmpty: true })
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

gulp.task('js', async function () {
  gulp.src('dev/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});


gulp.task('default', async function () {
  gulp.watch('dev/views/**/*.pug', gulp.series('pug'));
  gulp.watch('dev/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('dev/js/*.js', gulp.series('js'));
});
