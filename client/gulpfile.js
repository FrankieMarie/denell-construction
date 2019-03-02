const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', (done) => {
  gulp.src('src/css/main.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/dest'))
    done();
});
