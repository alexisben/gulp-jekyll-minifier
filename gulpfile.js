const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');

function html () {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('_site'));
};

function css () {
  return gulp.src('_site/**/*.css')
    .pipe(prefix())
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('_site'));
};

// exports.default = function() {
//     return gulp.src('_site/**/*.html')
//         .pipe(htmlmin({ 
//             collapseWhitespace: true
//         }))
//         .pipe(gulp.dest('_site'))
//         .pipe(gulp.src('_site/**/*.css'))
//         .pipe(prefix({
//             browsers: ['last 2 versions']
//         }))
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(gulp.dest('_site'))
// }

exports.default = gulp.parallel(css, html);
