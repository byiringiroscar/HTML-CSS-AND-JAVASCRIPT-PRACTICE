var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', async function(){
    gulp.src('style.css').pipe(autoprefixer()).pipe(gulp.dest('build'))
    // return gulp.src('package.json')
});

gulp.task('watch', async function(){
    gulp.watch('style.css', gulp.series('styles'));
})