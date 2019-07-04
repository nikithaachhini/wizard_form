var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
 
gulp.task('minify-css', function(){
    return gulp.src('./src/css/styles.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function(){
    return gulp.src('./src/js/**/*.js')
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('./dist/js'))
});

// Clean output directory
gulp.task('clean', () => del(['dist']));
// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'minify-css',
    'minify-js'
  );
});

 
gulp.task('default', ['minify-css', 'minify-js', 'clean']);