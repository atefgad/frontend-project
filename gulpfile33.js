const { gulp, src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
// const less = require('gulp-less');
// const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');



function html() {
    return src('src/pug/*.pug')
        .pipe(pug())
        .pipe(dest('assets'))
}

function css() {
    return src([
            'node_modules/bootstrap/scss/bootstrap.scss',
            'src/scss/*.scss'
        ])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest('assets/css'))
        .pipe(browserSync.stream());
}

function js() {
    return src('src/js/*.js', { sourcemaps: true })
        .pipe(concat('app.min.js'))
        .pipe(dest('assets/js', { sourcemaps: true }))
        .pipe(browserSync.stream());
}
// Static Server + watching scss/html files
function serve() {
    browserSync.init({
        server: './src'
    });

    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ], ['sass']);

    gulp.watch('src/*.pug').on('change', browserSync.reload);
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.serve = serve;
exports.default = parallel(html, css, js, serve);
