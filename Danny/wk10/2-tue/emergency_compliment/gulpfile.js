var gulp = require('gulp')
var cssify = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('test', function() {
  console.log("Test");
})

gulp.task('sass', function() {
  gulp.src('./*.scss')
  .pipe(cssify())
  .pipe( autoprefixer() )
  .pipe(gulp.dest('css'))
})

gulp.task('watch', function(){
  gulp.watch("./*.scss", ['sass'])

})
