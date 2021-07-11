var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

(function( $ ){

	jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('#mu-header').addClass('mu-fixed-nav');

	    } else {
	        $('#mu-header').removeClass('mu-fixed-nav');
	    }
	});

		$('.mu-featured-slide').slick({
		  arrows: false,
		  dots: true,
		  infinite: true,
		  speed: 500,
		  autoplay: true,
		  cssEase: 'linear'
		});

		var lastId,
		topMenu = $(".mu-menu"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});


		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
		  jQuery('html, body').stop().animate({
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});


		jQuery(window).scroll(function(){

		   var fromTop = $(this).scrollTop()+topMenuHeight;

		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";

		   if (lastId !== id) {
		       lastId = id;
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }
		})


})( jQuery );
