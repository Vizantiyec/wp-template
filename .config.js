//CSS PREFIX
var _ = 'my_';

var config = {
	//LOCAL DOMAIN
	domain : 'wp-test',

	//NEW CLASSES
	new_classes : [
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
		['site_more-btn', _+'more-btn'],
	]
}

module.exports = config;
