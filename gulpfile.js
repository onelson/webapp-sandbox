var babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    reload = browserSync.reload;

gulp.task('scripts', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('vendor', function () {
  return gulp.src(
    'node_modules/react/dist/react.js')
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('html', function() {
  return gulp.src(
    'app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  return gulp.src('app/styles/main.less')
    .pipe(less({}))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('js', ['scripts', 'vendor']);
gulp.task('dist', ['js', 'html', 'styles']);

gulp.task('serve', ['dist'], function() {
    browserSync({
        server: './dist'
    });
    gulp.watch('app/styles/**/*.less', ['styles']);
    gulp.watch('app/*.html').on('change', reload);
    gulp.watch('app/js/**/*.js', ['scripts']).on('change', reload);
});

gulp.task('default', ['serve'], function () {});
