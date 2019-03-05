var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var bourbon = require("node-bourbon");
var neat = require("node-neat");

gulp.task("scss", function(){
  return gulp.src("./scss/**/*.scss")

    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>") //<-
    }))

    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: neat.includePaths,
      sourceComments:true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./"));



});

gulp.task('watch',function () {
  gulp.watch("scss/**/*.scss", ["scss"]);
  gulp.watch(['./public/stylesheets/*.css'], function(event){
    console.log("css changed");
  });
});




gulp.task('default', ['scss', 'watch']);

