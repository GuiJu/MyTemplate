var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('compileLess', function () {

    gulp.src('css/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        //.pipe(cssmin())
        .pipe(gulp.dest('assets/customCSS'));

});

gulp.task('compressJs', function () {
    gulp.src('app/**/*.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
        }))
        .pipe(uglify({
            mangle: false    // 禁止修改变量名称
        }))
        .pipe(gulp.dest('./dist/'));
});

/* 当所有less文件发生改变时，调用lessWatch任务 */
gulp.task('lessWatch', function () {
    gulp.watch('css/**/*.less', ['compileLess']);
});

gulp.task('build', ['compileLess', 'compressJs']);

gulp.task('default', ['lessWatch']);