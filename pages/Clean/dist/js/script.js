$(document).ready(function() {
	try {
		$('#landing').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});
		$('').ripples({
			resolution: 950,
			dropRadius: 50, //px
			perturbance: 5,
			interactive: true
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}

	$('.js-ripples-disable').on('click', function() {
		$('body, main').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('body, main').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('body, main').ripples('pause');
	});

	//Automatic drops
	// setInterval(function() {
	// 	var $el = $('#landing');
	// 	var x = Math.random() * $el.outerWidth();
	// 	var y = Math.random() * $el.outerHeight();
	// 	var dropRadius = 20;
	// 	var strength = 0.04 + Math.random() * 0.04;

	// 	$el.ripples('drop', x, y, dropRadius, strength);
	// }, 400);

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.bottom = "0";
	} else {
		document.getElementById("navbar").style.bottom = "-50px";
		document.getElementById("navbar").style.backgroundColor = "#E3FEA9";
		// document.getElementById("linkColor").style.color = "#000";
		// document.getElementById("linkColor1").style.color = "#000";
		// document.getElementById("linkColor2").style.color = "#000";
		// document.getElementById("linkColor3").style.color = "#000";
		document.getElementById("navbar").style.opacity = "0.9";
		$(".nav-link").hover(function(){
			$(this).css("color", "#76fd00");
			}, function(){
			$(this).css("color", "black");
		  });
		  $(".navbar-brand").hover(function(){
			$(this).css("color", "#76fd00");
			}, function(){
			$(this).css("color", "black");
		  });
		
	}
	prevScrollpos = currentScrollPos;
	} 
    
        $.fn.parallax = function(options){
          var $$ = $(this);
          offset = $$.offset();
          var defaults = {
            'start': 0,
            'stop': offset.top + $$.height(),
            'coeff': 0.95
          };
          var opts = $.extend(defaults, options);
          return this.each(function(){
            $(window).bind('scroll', function() {
              windowTop = $(window).scrollTop();
              if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                newCoord = windowTop * opts.coeff;
                $$.css({
                    'background-position': '0 '+ newCoord + 'px'
                });
              }
            });
          });
        };
      
      
      // call the plugin
      $('.section').parallax({ 'coeff':-0.15 }); //original -0.65
      $('.section .inner').parallax({ 'coeff':1.15 });
});