
$( document ).ready(function() {
		
		$(".headerSearch").clone().prependTo("#navbarSearce")
		$(".headerPhone").clone().prependTo("#navbarPhone")
									

		var navOffset = $("nav").offset().top;
		
		$(window).scroll(function(){
			var scrollPosition = $(window).scrollTop();
			$element = $('.navbar');

			if(scrollPosition >=navOffset){
				$element.addClass("navbar-fixed-top");
			}else{
				

				$element.removeClass("navbar-fixed-top");
				
			}
		});	  
		/*
	   var $document = $(document),
			$element = $('.navbar');
			navbarDefault = 'navbar-fixed-top';
			navbarTransparent = 'navbar-fixed-top';
			fadeInDown = 'fadeInDown';

		$document.scroll(function(){
			if($document.scrollTop()>=100){
				$element.addClass(navbarDefault);
				$element.removeClass(navbarTransparent);		
				$element.addClass(fadeInDown);
			}else{
				$element.addClass(navbarTransparent);
				$element.removeClass(navbarDefault);
				$element.removeClass(fadeInDown);
			}
		});*/

});
