//CSS PREFIX
var _ = 'site_';

var config = {
	//LOCAL DOMAIN
	domain : 'wp-test',

	//NEW CLASSES
	new_classes : [
		//HEADER
		['site_header', _+'header'],
		['site_logo', _+'logo'],
		['site_h-phone', _+'h-phone'],
		['site_sign-in-btn', _+'sign-in-btn'],
		['site_nav', _+'nav'],
		['site_mobile-nav', _+'mobile-nav'],

		//FOOTER
		['site_footer', _+'footer'],
		['site_f-menu', _+'f-menu'],
		['site_f-phone', _+'f-phone'],
		['site_copyright', _+'copyright'],
		['site_payments', _+'payments'],
		['site_terms', _+'terms'],

		//TOP-BLOCK (slider)
		['site_top-slider', _+'top-slider'],

		//FEATURES
		['site_features', _+'features'],

		//TESTIMONIALS
		['site_testimonials', _+'testimonials'],

		//SIDEBAR
		['site_sidebar', _+'sidebar'],
		['site_widget', _+'widget'],

		//MAIN
		['site_tpl-index', _+'tpl-index'], //index.php
		['site_tpl-front-page', _+'tpl-front-page'], //front-page.php
		['site_tpl-blog', _+'tpl-blog'], //home.php
		['site_tpl-page', _+'tpl-page'], //page.php
		['site_tpl-post', _+'tpl-post'], //single.php
		['site_tpl-404', _+'tpl-404'], //404.php
		['site_tpl-full-width-page', _+'tpl-full-width-page'], //full-width-page.php
		['site_tpl-order-page', _+'tpl-order-page'], //order-page.php

		['site_main', _+'main'],
		['site_article', _+'article'],
		['site_blog-pagination', _+'blog-pagination'],

		['site_big-btn', _+'big-btn'],
		['site_more-btn', _+'more-btn']
	]
};

module.exports = config;
