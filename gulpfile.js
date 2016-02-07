//CONFIG
//--------------------------------------------------
var domain = 'wp-test';

//add new prefix for classes (optional)
var _ = '';

//add new classes
var new_classes = [
	//HEADER
	['site_header', _+'header'],
	['site_logo', _+'logo'],
	['site_header-phone', _+'header-phone'],
	['site_nav', _+'nav'],
	['site_nav-title', _+'nav-title'],

	//FOOTER
	['site_footer', _+'footer'],
	['site_footer-bottom', _+'footer-bottom'],
	['site_copyright', _+'copyright'],
	['site_payments', _+'payments'],
	['site_footer-phone', _+'footer-phone'],

	//TOP-BLOCK (slider)
	['site_top-slider', _+'top-slider'],
	['site_slider-bg', _+'slider-bg'],
	['site_slider-content', _+'slider-content'],
	['site_slider-text', _+'slider-content'],

	//SIDEBAR
	['site_sidebar', _+'sidebar'],
	['site_widget', _+'widget'],
	['site_widget-title', _+'widget-title'],
	['site_widget-pic', _+'widget-pic'],
	['site_widget-testimonials', _+'widget-testimonials'],

	//MAIN
	['site_tpl-index', _+'tpl-index'], //index.php
	['site_tpl-front-page', _+'tpl-front-page'], //front-page.php
	['site_tpl-blog', _+'tpl-blog'], //home.php
	['site_tpl-page', _+'tpl-page'], //page.php
	['site_tpl-post', _+'tpl-post'], //single.php
	['site_tpl-404', _+'tpl-404'], //404.php
	['site_tpl-full-width-page', _+'tpl-full-width-page'], //full-width-page.php

	['site_main', _+'main'],
	['site_article', _+'article'],
	['site_article-title', _+'article-title'],
	['site_article-text', _+'article-text'],
	['site_after-article-block', _+'after-article-block'],
	['site_steps-block', _+'steps-block'],
	['site_guarantees-block', _+'guarantees-block'],
	['site_blog-pagination', _+'blog-pagination'],

	['site_btn-wrap', _+'btn-wrap'],
	['site_big-btn', _+'big-btn'],
	['site_more-btn-wrap', _+'more-btn-wrap'],
	['site_more-link', _+'more-link'],
]

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
	gulp.src(['**/*.php', '**/style.css'])
	.pipe(replace(new_classes))
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
		'**/*.js',
		'**/*.php',
		'**/*.svg',
		'**/*.{png,jpg,jpeg,gif,ico}',
		'**/*.{eot,ttf,woff,woff2}',
	];

	//initialize browsersync
	browserSync.init(files, {
		proxy: domain,
		//port: 8080, //default: 3000
		//tunnel: true, //tunnel the browsersync server through a random Public URL
		//tunnel: "olgax", //attempt to use the custom URL: "http://olgax.localtunnel.me"
		injectChanges: true, //inject CSS changes
		notify: false
	});
});
