const gulp = require('gulp');
const htmlPartial = require('gulp-html-partial');

gulp.task('html', function () {
    gulp.src(['src/*.html'])
        .pipe(htmlPartial({
            basePath: 'src/partials/'
        }))
        .pipe(gulp.dest('build'));
});
