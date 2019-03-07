var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var bourbon = require("node-bourbon");
var neat = require("node-neat");

gulp.task("scss", function(){
  return gulp.src("./scss/style.scss")

    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>") //<-
    }))

    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: neat.includePaths,
      sourceComments:true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write("./dist"))
    .pipe(gulp.dest("./dist"));



});

gulp.task('watch',function () {
  gulp.watch("scss/style.scss", ["scss"]);
  gulp.watch(['./dist/*.css'], function(event){
    console.log("css changed");
  });
});




gulp.task('default', ['scss', 'watch']);

