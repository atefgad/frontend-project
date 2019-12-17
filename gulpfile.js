var gulp        =   require('gulp'),
browserSync     =   require('browser-sync').create(),
sass            =   require('gulp-sass'),
pug             =   require('gulp-pug'),
autoprefixer    =   require('gulp-autoprefixer'),
imagemin        =   require('gulp-imagemin'),
cache           =   require('gulp-cache'),
concat          =   require('gulp-concat'),
sourcemaps      =   require('gulp-sourcemaps'),
minify          =   require('gulp-minify');


// Compile pug files into html
gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./dist'))
});

// Compile sass files into CSS
gulp.task('sass' , function() {
    return gulp.src(['src/scss/**/*.scss','src/scss/**/*.css'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Compile js files into js
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});


// Compile images files into html
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images/'));
});
// Serve and watch sass/pug files for changes
gulp.task('watch', ['sass', 'pug','images','js'], function() {
    browserSync.init({
        server: './dist'
    });

    gulp.watch('src/scss/**/*.scss', ['sass']);

    gulp.watch('src/images/**/*', ['images']);

    gulp.watch('src/js/**/*.js', ['js']);

    gulp.watch('src/**/*.pug', ['pug']);

    gulp.watch('src/**/*.pug').on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'js','images'])
