var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function() {
    return gulp.src('./src/scss/*.scss', gulp.series('scss'));
});



gulp.task('dev', gulp.series('scss', 'watch'));