/////////// S L I D E R ////////////
$('.autoplay-Lexx').slick({
	infinite: true,
	arrows: true,
	centerMode: true,
  // centerPadding: '100px',
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
});

///// A N I M A T I O N - S C R O L L /////
$("body").on('click', '[href*="#"]', function(e) {
	var fixed_offset = 0; // Видимая часть предидушего блока ( 0 заменить на к-во пикселей )
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
});

// make the header smaller
var scrElem = $('header .navbar')
$(function(){
  scrElem.data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0){
    if(scrElem.data('size') == 'big'){
      scrElem.data('size','small');
      scrElem.addClass('header-small')
    }
	} else {
	  if(scrElem.data('size') == 'small'){
      scrElem.removeClass('header-small')
	    scrElem.data('size','big');
	  }
  }
});

$("*:not(body,nav)").on('click', function(){
	$(".navbar-collapse").removeClass('show');
	// console.log("alsdkjf");
});
// .navbar .navbar-toggler