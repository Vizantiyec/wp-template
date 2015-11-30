//ZOPIM CHAT
//-------------------------------------------------
window.$zopim || (function(d, s) {
	var z = $zopim = function(c) {
		z._.push(c)
	}, $ = z.s = d.createElement(s),
		e = d.getElementsByTagName(s)[0];
	z.set = function(o) {
		z.set._.push(o)
	};
	z._ = [];
	z.set._ = [];
	$.async = !0;
	$.setAttribute('charset', 'utf-8');
	$.src = '//v2.zopim.com/?xwzASiZfXmIZvbjoYBIdDdw55lTdDa09';
	z.t = +new Date;
	$.type = 'text/javascript';
	e.parentNode.insertBefore($, e)
})(document, 'script');

//SLICKNAV MENU
//-------------------------------------------------
$('#nav').slicknav();

//TOP SLIDER
//-------------------------------------------------
$('#bxslider').bxSlider({
	//pager: false,
	auto: true,
	mode: 'fade',
	pause: 10000
});

//SCROLL TOP BUTTON
//-------------------------------------------------
(function($){
	function findWindowHeight(){
		return windowHeight = $(window).height();
	};
	
	function addScrollButton(){
		if ($(window).scrollTop() > windowHeight && !$('#scrollButton').size()) {
			var scrollButton = '<div id="scrollButton" class="scroll-button"/>';
			$('body').append(scrollButton);
		}else if($(window).scrollTop() < windowHeight && $('#scrollButton').size()){
			$('#scrollButton').remove();
		}
	};
	
	function scrollPage(){
		$('body, html').animate({scrollTop : 0}, 800);
	};
	
	var windowHeight = findWindowHeight();
	$(window).scroll(addScrollButton);
	$(window).resize(findWindowHeight);
	$('body').on('click', '#scrollButton', scrollPage);
})(jQuery);

/*//FIXED HEADER
//-------------------------------------------------
(function($){
var fixedItem = $('#header'),
	fixedClass = 'fixed',
	bodyClass = 'body-margin',
	noFixed_topScroll = fixedItem.height();

if(fixedItem.size()){
	var minMarginTop = fixedItem.offset().top + noFixed_topScroll;

	var scrollTopValue = function(){return $(window).scrollTop()};

	var toggleFixedItem = function(){
		if ($('#nav').is(':hidden')) {
			fixedItem.removeClass(fixedClass).css({top:-minMarginTop});
			$('body').css({marginTop:0});
			return;
		}
		if ( scrollTopValue() > minMarginTop){
			fixedItem.addClass(fixedClass).css({top:0});;
			$('body').css({marginTop:minMarginTop})
		} else {
			fixedItem.removeClass(fixedClass).css({top:-minMarginTop});
			$('body').css({marginTop:0});
		}
	}

	$(window).scroll(toggleFixedItem);
	$(window).resize(toggleFixedItem);
}
})(jQuery);*/