var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var svgmin = require('gulp-svgmin');
var autoprefixer = require('gulp-autoprefixer');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var notify = require('gulp-notify');
var wait = require('gulp-wait');
var svgSprite = require('gulp-svg-sprite');
var template = require('gulp-template-html');
var index = require('gulp-index');
var fs = require('fs');

const AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  '> 1%',
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4',
  'bb >= 10'
];

// Basic Gulp task syntax
gulp.task('hello', function () {
  console.log('Hello Zell!');
})

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function () {
  browserSync({
    port: 3000,
    directory: true,
    server: {
      baseDir: '.'
    }
  })
})

gulp.task('sass', function () {
  return gulp.src('css/scss/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(wait(500))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// SVG Combine
gulp.task('svg-combine', function () {
  return gulp.src('images/symbols/elements/*.svg')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(svgmin({
      plugins: [{
          removeDoctype: false
        },
        {
          removeAttrs: {
            attrs: 'fill'
          }
        }, {
          removeComments: false
        }, {
          cleanupNumericValues: {
            floatPrecision: 2
          }
        }, {
          convertColors: {
            names2hex: false,
            rgb2hex: false
          }
        }
      ]
    }))
    .pipe(svgSprite({
      mode: {
        symbol: { // symbol mode to build the SVG
          render: {
            css: false, // CSS output option for icon sizing
            scss: false // SCSS output option for icon sizing
          },
          dest: './images/icons', // destination folder
          dimensions: "-icon",
          prefix: 'svg-', // BEM-style prefix if styles rendered
          sprite: 'icon.svg', //generated sprite name
          example: true // Build a sample page, please!
        }
      },
    }))
    .pipe(gulp.dest('.'))
});

// SVG font
gulp.task('svg-iconfont', function () {
  return gulp.src('images/symbols/elements/*.svg')
    .pipe(iconfont({
      fontName: 'iconfont',
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      appendCodepoints: true,
      appendUnicode: false,
      normalize: true,
      fontHeight: 1000,
      centerHorizontally: true
    }))
    .on('glyphs', function (glyphs, options) {
      gulp.src('images/symbols/iconfont-src/iconfont.css')
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName,
          fontDate: new Date().getTime()
        }))
        .pipe(gulp.dest('css/fonts/iconfont'));

      gulp.src('images/symbols/iconfont-src/index.html')
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName
        }))
        .pipe(gulp.dest('css/fonts/iconfont'));
    })
    .pipe(gulp.dest('css/fonts/iconfont'));
});
gulp.task('svg', ['svg-combine', 'svg-iconfont'], function (done) {
  browserSync.reload();
  done();
});

// Watchers
gulp.task('watch', function () {
  gulp.watch('css/scss/*.scss', ['sass']);
  gulp.watch('images/symbols/elements/**/*.svg', ['svg']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
  gulp.watch('images/**/*', browserSync.reload);
  gulp.watch('src/**/*.html', ['build-template']);
})

// Build template
gulp.task("build-template", function () {
  return gulp.src("./src/pages/*.html")
    .pipe(template("./src/template/main.html"))
    .pipe(gulp.dest("."));
});

// Buil list pages for Demo
gulp.task('buildIndex', function () {
  return gulp
    .src('./*.html')
    .pipe(
      index({
        'prepend-to-output': () =>
          fs.readFileSync('./src/index-partials/index-front-matter.html'),
        'append-to-output': () =>
          fs.readFileSync('./src/index-partials/index-end-matter.html'),
        title: 'Pages List',
        pathDepth: 2,
        'item-template': (
          filepath,
          filename
        ) => `<li class="index__item"><a class="index__item-link" target="_blank" href="${filename}">Page - ${filename.replace(
          '..',
          ''
        )}</a></li>
                    `
      })
    )
    .pipe(gulp.dest('./'));
});

// Build Sequences
// ---------------

gulp.task('default', function (callback) {
  runSequence(['sass', 'build-template', 'buildIndex', 'browserSync'], 'watch',
    callback
  )
})