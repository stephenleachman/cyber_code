const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Move Animate.css to src/css
gulp.task('animate', function(){
  return gulp.src('node_modules/animate.css/animate.min.css')
    .pipe(gulp.dest("src/css"));
});

// Move waypoints to src/js
gulp.task('waypoints', function(){
  return gulp.src('node_modules/waypoints/lib/noframework.waypoints.min.js')
    .pipe(gulp.dest("src/js"));
});

// Move Slick Carousel JS File to src/js
gulp.task('slick.js', function(){
  return gulp.src('node_modules/slick-carousel/slick/slick.min.js')
    .pipe(gulp.dest("src/js"));
});

// Move Slick Carousel CSS File to src/css
gulp.task('slick.css', function(){
  return gulp.src('node_modules/slick-carousel/slick/slick.css')
    .pipe(gulp.dest("src/css"));
});

// Move Slick Carousel Theme CSS File to src/css
gulp.task('slick-theme.css', function(){
  return gulp.src('node_modules/slick-carousel/slick/slick-theme.css')
    .pipe(gulp.dest("src/css"));
});



gulp.task('default', ['js', 'serve', 'animate', 'waypoints', 'slick.js', 'slick.css', 'slick-theme.css']);
