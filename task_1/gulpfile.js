const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync');
// PostCSS with plugins
const postCss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
//Pug
const pug = require('gulp-pug')
//Data
const data = require('./data')

gulp.task('pug', () => {
	return gulp.src('./src/**/*.pug')
		.pipe(pug({
			locals: data.locals,
			pretty: true
		}))
		.pipe(gulp.dest('./build'))
		.pipe(browsersync.stream())
});


gulp.task('css', () => {
    return gulp.src('./src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postCss([
            autoprefixer()
        ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
        .pipe(browsersync.stream())
});

gulp.task('sync', () => {
    browsersync.init({
        proxy: 'test',
        open: false,
        // browser: ['chrome', 'firefox'],
        notify: false
    })
});

gulp.task('build', ['pug', 'css']);

gulp.task('watch', () => {
    gulp.watch(['./src/**/*.scss'], ['css']);
	gulp.watch(['./src/**/*.pug'], ['pug']);
    gulp.watch(['./build/**/*.css',
				'./build/**/*.pug',
                ]).on('change', browsersync.reload);
});

gulp.task('default', ['build', 'sync', 'watch']);
