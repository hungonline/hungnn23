var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Zell!');
})

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    port: 3001,
    server: {
        baseDir: '.',
        directory: true
    },
    startPath: 'home.html'
  })
})

gulp.task('sass', function() {
  return gulp.src(['css/scss/style.scss', 'css/scss/detail.scss', 'css/scss/dichvu.scss', 'css/scss/video.scss'])
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.toString());
        this.emit('end'); }
      })
    )
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('css/scss/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
})


// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})
