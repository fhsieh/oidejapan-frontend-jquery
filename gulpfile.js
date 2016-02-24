var gulp          = require('gulp'),
    replace       = require('gulp-replace'),
    rename        = require('gulp-rename'),
    autoprefixer  = require('gulp-autoprefixer');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('./scss/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourceComments: false,
      errLogToConsole: true,
      outputStyle: 'nested'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

/* gulp copy used to add compiled assets to rails asset pipeline
gulp.task('copy', function() {
  gulp.src('./css/global.css')
    .pipe(replace(/url\(\.\.\/img\/(.*)\)/g, 'url(<%= asset_path \'$1\' %>)'))
    .pipe(rename({ extname: '.css.erb' }))
    .pipe(gulp.dest('./../app/assets/stylesheets'));
  gulp.src('./js/*.js')
    .pipe(gulp.dest('./../app/assets/javascripts/components'));
});
*/

gulp.task('watch', function() {
  gulp.watch('./scss/**/*', ['sass'])
});

gulp.task('default', ['sass', 'watch']);

gulp.task('prod', ['sass', 'copy']);