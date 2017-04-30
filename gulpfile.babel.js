import gulp from 'gulp';
import babel from 'gulp-babel';
import notify from 'gulp-notify';
import gutil from 'gulp-util';

/**
 * Compile all files from the project root's src directory and send them to
 * /dist.
 */
function compile() {
  gulp
    .src('src/**/*.js')
    .pipe(babel({ presets: ['es2015', 'react'] }))
    .on('error', (error) => {
      notify('Gulp: Error in compilation.');
      gutil.log(error);
    })
    .pipe(gulp.dest('dist'));
}

gulp.task('compile', compile);
gulp.task('watch', () => gulp.watch('src/**/*.js', ['compile']));
gulp.task('default', ['compile', 'watch']);
