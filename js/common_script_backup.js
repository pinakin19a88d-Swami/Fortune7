$(document).ready(function(){

	$("#aboutUs").hover(function(){

		$(".aboutUsNav").css("display","block");
		
		window.setTimeout(function() {  
     		$(".aboutUsNav").css("opacity","0.8");
			$(".aboutUsNav").css("margin","10px 0");
		    },
		    10
		);
		
	}, function(){

		$(".aboutUsNav").css("opacity","0");
		$(".aboutUsNav").css("margin","-10px 0");
		
		window.setTimeout(function() {  
     		$(".aboutUsNav").css("display","none");
		    },
		    2000
		);

	});

	$("#services").hover(function(){

		$(".servicesNav").css("display","block");
		
		window.setTimeout(function() {  
     		$(".servicesNav").css("opacity","0.8");
			$(".servicesNav").css("margin","10px 0");
		    },
		    10
		);
		
	}, function(){

		$(".servicesNav").css("opacity","0");
		$(".servicesNav").css("margin","-10px 0");
		
		window.setTimeout(function() {  
     		$(".servicesNav").css("display","none");
		    },
		    2000
		);

	});

	$("#industry").hover(function(){

		$(".industryNav").css("display","block");
		
		window.setTimeout(function() {  
     		$(".industryNav").css("opacity","0.8");
			$(".industryNav").css("margin","10px 0");
		    },
		    10
		);
		
	}, function(){

		$(".industryNav").css("opacity","0");
		$(".industryNav").css("margin","-10px 0");
		
		window.setTimeout(function() {  
     		$(".industryNav").css("display","none");
		    },
		    2000
		);

	});

});