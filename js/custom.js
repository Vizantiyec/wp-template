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
(function($){
    $('#nav').slicknav({prependTo: '#mobile_nav'});

    //create additional menu near slicknav menu
    $('#mobile_nav').find('.mobile-nav-show').prependTo('#mobile_nav').wrapAll('<ul class="mobile-nav-visible" />');

    //close slicknav menu after click outside an element
    $(document).on('click', function(event) {
        if(!$(event.target).closest('.slicknav_menu').length && !$(event.target).is('.slicknav_menu')) {
            if($('.slicknav_open').size()) {
                $('#nav').slicknav('close');
            }
        }
    })
})(jQuery);

//TOP SLIDER
//-------------------------------------------------
(function($){
    var topSlider = $('#top_slider');
    
    topSlider.bxSlider({
        //pager: false,
        mode: 'fade',
        //adaptiveHeight: true,
        pause: 10000
    });
    
    function toggleAutoSlide(){
        if (!topSlider.size()) return;
        if ($(window).width() > 768)
            topSlider.startAuto();
        else topSlider.stopAuto();
    }

    toggleAutoSlide();
    $(window).resize(toggleAutoSlide);
})(jQuery);

//TESTIMONIALS SLIDER
//-------------------------------------------------
(function($){
    var testimSlider = $('#testimonials');
    
    testimSlider.bxSlider({
        controls: false,
        slideWidth:360,
        slideMargin: 30,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1
        //infiniteLoop: false
    });
    
//    function toggleAutoSlide(){
//        if ($(window).width() < 768)
//            slider.reloadSlider();
//    }
//
//    toggleAutoSlide();
//    $(window).resize(toggleAutoSlide);    
})(jQuery);

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

//FIXED HEADER
//-------------------------------------------------
(function($){
    var fixedItem = $('#header'),
        fixedClass = 'fixed',
        minMarginTop;

    if(fixedItem.size()){

        var scrollTopValue = function(){return $(window).scrollTop()};

        var toggleFixedItem = function(){
            if ($(window).width() < 468) {
                fixedItem.removeClass(fixedClass).css({top:-minMarginTop});
                $('body').css({marginTop:0});
                return;
            };

            minMarginTop = fixedItem.height();
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
})(jQuery);
