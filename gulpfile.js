const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
}

function html() {
  return gulp
    .src('src/pages/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({ stream: true }));
}

function css() {
  return gulp
    .src([
      'src/styles/variables.css', // 1. Переменные first
      'src/styles/globals.css', // 2. Глобальные стили
      'src/styles/style.css', // 3. Основные стили
      'src/styles/animations.css', // 4. Анимации
    ])
    .pipe(plumber())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({ stream: true }));
}

function js() {
  return gulp
    .src('src/scripts/*.js')
    .pipe(plumber())
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.reload({ stream: true }));
}

function fonts() {
  return gulp
    .src('src/fonts/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/fonts/'))
    .pipe(browserSync.reload({ stream: true }));
}

function images() {
  return gulp
    .src('src/images/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/images/'))
    .pipe(browserSync.reload({ stream: true }));
}

function svg() {
  return gulp
    .src('src/svg/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/svg/'))
    .pipe(browserSync.reload({ stream: true }));
}

function clean() {
  return del('dist');
}

function watchFiles() {
  gulp.watch(['src/pages/*.html'], html);
  gulp.watch(['src/styles/*.css'], css);
  gulp.watch(['src/scripts/*.js'], js);
  gulp.watch(['src/fonts/**/*'], fonts);
  gulp.watch(['src/images/**/*'], images);
  gulp.watch(['src/svg/**/*'], svg);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, fonts, images, svg));
const watchapp = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.watchapp = watchapp;
exports.default = watchapp;
