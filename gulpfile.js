var babel = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    buffer = require('vinyl-buffer'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    reload = browserSync.reload,
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    watchify = require('watchify');


function compile(watch) {
  var bundler = watchify(
    browserify('./app/js/app.js', {
      debug: true,
      paths: ['./app/js/'],
      external: './app/js/**/*.js'
    }).transform(babel)
  );

  function rebundle() {
    return bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  return rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('bundle', compile);


gulp.task('html', function() {
  return gulp.src(
    'app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  return gulp.src('app/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('js', ['bundle']);
gulp.task('dist', ['html', 'styles', 'js']);

gulp.task('serve', ['dist'], function() {
    browserSync({
        server: './dist'
    });
    gulp.watch('app/styles/**/*.less', ['styles']);
    gulp.watch('app/*.html').on('change', reload);
    watch();
});

gulp.task('default', ['serve'], function () {});
