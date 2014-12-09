$(document).ready(function(){

	$("#carousel .carouselNav li").click(function(){

		// alert($(this).hasClass("slide-1"));
		if($(this).hasClass("slide-1")){
			var id = 1;
		}
		else if($(this).hasClass("slide-2")){
			var id = 2;
		}
		else if($(this).hasClass("slide-3")){
			var id = 3;
		}
		else if($(this).hasClass("slide-4")){
			var id = 4;
		}
		else if($(this).hasClass("slide-5")){
			var id = 5;
		}
		else if($(this).hasClass("slide-6")){
			var id = 6;
		}

		$("#carousel").css("display","none");
		$("#slider").css("display","block");

		// alert(id);
		$('#slider').nivoSlider({
				    effect: 'fade',            // Specify sets like: 'fold,fade,sliceDown'
				    slices: 15,                     // For slice animations
				    boxCols: 8,                     // For box animations
				    boxRows: 4,                     // For box animations
				    animSpeed: 250,                 // Slide transition speed
				    pauseTime: 3000,                // How long each slide will show
				    startSlide: id-1,                  // Set starting Slide (0 index)
				    directionNav: true,             // Specify sets like: 'fold,fade,sliceDown'
				    controlNav: false,               // 1,2,3... navigation
				    pauseOnHover: false,             // Stop animation while hovering
				    manualAdvance: false,           // Force manual transitions
				    lastSlide: function(){

				    	// $("#carousel").css("display","block");
				    	// $("#slider").css("display","none");
				    	$(".sliderWrap .container").load("ajax/carousel.html");

				    },        // Triggers when last slide is shown
				});

	});
	
	window.setTimeout(function() {  
 		
 			$("#carousel").css("display","none");
		$("#slider").css("display","block");

		// alert(id);
		$('#slider').nivoSlider({
				    effect: 'fade',            // Specify sets like: 'fold,fade,sliceDown'
				    slices: 15,                     // For slice animations
				    boxCols: 8,                     // For box animations
				    boxRows: 4,                     // For box animations
				    animSpeed: 250,                 // Slide transition speed
				    pauseTime: 3000,                // How long each slide will show
				    startSlide: 0,                  // Set starting Slide (0 index)
				    directionNav: true,             // Specify sets like: 'fold,fade,sliceDown'
				    controlNav: false,               // 1,2,3... navigation
				    pauseOnHover: false,             // Stop animation while hovering
				    manualAdvance: false,           // Force manual transitions
				    lastSlide: function(){

				    	// $("#carousel").css("display","block");
				    	// $("#slider").css("display","none");
				    	$(".sliderWrap .container").load("ajax/carousel.html");

				    },        // Triggers when last slide is shown
				});
	    
	    },
	    10000
	);

	window.setTimeout(function() {  
 		
 			$(".sliderWrap").css("background-color","#cccccc");
	    
	    },
	    1500
	);
	

});