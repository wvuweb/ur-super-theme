'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass');
var critical      = require('critical');
var concat        = require('gulp-concat');

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  gulp.src(['./scss/*.scss','!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('critical', function (cb) {
  critical.generate({
    base: './',
    src: 'critical.html',
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: 'views/custom-patterns/_critical.html',
    minify: true,
    extract: false,
    ignore: ['font-face']
  });
});

gulp.task('default',['sass'], function(){
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src(['./javascripts/vendor/responsive-nav.js', './javascripts/responsive-nav--custom.js', './javascripts/vendor/fontfaceobserver-1.5.1.js', './javascripts/fontfaceobserver__custom.js', './javascripts/vendor/wvu-nav-dropdowns.js', './javascripts/vendor/calendar-build.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascripts/'));
});
