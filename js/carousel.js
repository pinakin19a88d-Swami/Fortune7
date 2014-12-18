$(document).ready(function(){

	$(".subNavWrap ul").css("display","none");
	$(".homeAjax").css("display","block");
	
	$("a").click(function(){

		if( $(this).parent().attr("id") == "companyLogo" ){

			$(".sliderWrap .container").load("ajax/carousel.html");
			$(".subNavWrap ul").css("display","none");
			$(".homeAjax").css("display","block");

		}

	});

	$("li > a").click(function(){

		// alert($(this).parent().attr("id"));
		if( ($(this).parent().attr("id") != "home") || ($(this).parent().attr("id") != "homeFt") ) {
			$("#carousel").css("display","none");
			$("#slider").css("display","block");

			// alert(id);
			$('#slider').nivoSlider({
					    
					    effect: 'fade',            		// Specify sets like: 'fold,fade,sliceDown'
					    slices: 15,                     // For slice animations
					    boxCols: 8,                     // For box animations
					    boxRows: 4,                     // For box animations
					    animSpeed: 500,                 // Slide transition speed
					    pauseTime: 3000,                // How long each slide will show
					    startSlide: 0,               	// Set starting Slide (0 index)
					    directionNav: true,             // Specify sets like: 'fold,fade,sliceDown'
					    controlNav: false,              // 1,2,3... navigation
					    pauseOnHover: false,            // Stop animation while hovering
					    manualAdvance: false            // Force manual transitions

			});
		}
		if( ($(this).parent().attr("id") == "home") || ($(this).parent().attr("id") == "homeFt") ) {

			// alert("True");
			$(".sliderWrap .container").load("ajax/carousel.html");
			$(".subNavWrap ul").css("display","none");
			$(".homeAjax").css("display","block");

		}

	});

	$("#carousel .carouselNav li").hover(function(){

			$("#carousel > h1").removeClass("fadeInLeft de16ms");
			$("#carousel > h1").addClass("fadeOutLeft");

		},
		function(){

			$("#carousel > h1").css("display","block");

			$("#carousel > h1").removeClass("fadeOutLeft");
			$("#carousel > h1").addClass("fadeInLeft");

		});
		window.setTimeout(function() {  
	 		
	 			$(".sliderWrap").css("background-color","#cccccc");
		    
		    },
		    1500
		);

});