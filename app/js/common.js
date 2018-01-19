
	// $('.multiple-items').slick({
	//   infinite: true,
	//   slidesToShow: 3,
	//   slidesToScroll: 1
	// });
	

	$('.autoplay-Lexx').slick({
		infinite: true,
		arrows: true,
		// prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
		// nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
		centerMode: true,
	  // centerPadding: '100px',
	  variableWidth: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  // autoplay: true,
	  autoplaySpeed: 2000,
	});

/////this is fragment code create animation scroll/////
	$("body").on('click', '[href*="#"]', function(e) {
	var fixed_offset = 0; // Видимая часть предидушего блока ( 0 заменить на к-во пикселей )
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
	});
/////this is fragment code create animation scroll/////

	//////// Hide Header on on scroll down ///////
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header-menu').outerHeight();
	$(window).scroll(function(event){
    didScroll = true;
	});
	setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
	}, 250);
	function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header-menu').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('header-menu').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
	}
	//////// Hide Header on on scroll down ///////