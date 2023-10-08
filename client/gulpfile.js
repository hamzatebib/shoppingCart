const gulp = require ('gulp');
const gulp_sass = require ('gulp-sass');
const sass = gulp_sass(require ('sass'));



gulp.task('sass', async function(){
    gulp.src('src/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
})
