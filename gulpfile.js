var config= require ('./.config');

//NPM-MODULES
//--------------------------------------------------
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var replace = require('gulp-batch-replace');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

//TASK: gulp
//--------------------------------------------------
gulp.task('default', ['browser-sync']);

//TASK: gulp watch
//--------------------------------------------------
gulp.task('watch', function() {
	gulp.watch('style.less', ['less']);
});

//TASK: gulp replace
//--------------------------------------------------
gulp.task('replace', function() {
	gulp.src(['**/*.php', 'style.{less,css}', 'style.css.map'])
	.pipe(replace(config.new_classes))
	.pipe(gulp.dest("./"));
})

//TASK: gulp img
//--------------------------------------------------
gulp.task('img', function() {
	gulp.src(['{img,css}/**/*.{png,jpg,jpeg,gif,svg}', 'screenshot.png'])
	.pipe(plumber())
	.pipe(imagemin({progressive: true}))
	.pipe(gulp.dest("./"));
});

//TASK: gulp less
//--------------------------------------------------
gulp.task('less', function () {
	gulp.src('style.less')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer({browsers: ['last 50 versions']}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./'))
});

//TASK: gulp browser-sync
//--------------------------------------------------
//http://www.browsersync.io/docs/options/
gulp.task('browser-sync', function() {
	//watch files
	var files = [
		'**/*.css',
		'js/**/*.js',
		'**/*.php',
		'{img,css,fonts}**/*.svg',
		'{img,css}/**/*.{png,jpg,jpeg,gif,ico}',
		'fonts/**/*.{eot,ttf,woff,woff2}',
	];

	//initialize browsersync
	browserSync.init(files, {
		proxy: config.domain,
		//port: 8080, //default: 3000
		//tunnel: true, //tunnel the browsersync server through a random Public URL
		//tunnel: "olgax", //attempt to use the custom URL: "http://olgax.localtunnel.me"
		injectChanges: true, //inject CSS changes
		notify: false
	});
});
