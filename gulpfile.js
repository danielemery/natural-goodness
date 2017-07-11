const gulp = require('gulp'),
      pug = require('gulp-pug'),
      concat = require('gulp-concat');

gulp.task('default', ['pug', 'css', 'js']);

gulp.task('pug', function() {
  return gulp.src('src/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function() {
    return gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'src/css/cover.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function(){
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/tether/dist/js/tether.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/js'));
});