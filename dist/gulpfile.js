var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function (){
    browserSync.init({
        server: "./dist"
    });
    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('style.css').on('change', browserSync.reload);
    gulp.watch('script.js').on('change', browserSync.reload);
});
gulp.task('bower', function(){
    return gulp.src(mainBowerFiles({
            paths: {
                bowerDirectory: 'bower_components'
            }
        }))
        .pipe(gulp.dest('dist'))
});
gulp.task('js', function () {
    gulp.src('*.js')
        .pipe(gulp.dest('dist'))
});
gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(gulp.dest('dist'))
});
gulp.task('css', function () {
    gulp.src('*.css')
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['serve', 'html', 'js', 'css']);