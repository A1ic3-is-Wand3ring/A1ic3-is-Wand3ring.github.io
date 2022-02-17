$(document).ready(function(){

    // $(".slide1_ani").animateCss('FadeInLeft');
    $('body').scrollspy({target: ".navbar"})
    $("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

});