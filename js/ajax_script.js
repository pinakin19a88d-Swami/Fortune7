$(document).ready(function(){

	$(".subMenu li a").click(function() {

		$(".subMenu li a").removeClass("active");
		$(".services span").removeClass("active");
		$(this).addClass("active");

		var current = $(this).attr("name");
		$(".pageContent").html("");
		$(".pageContent").load("ajax/cssLoader.html");
		$(".pageContent").load(current);

		window.setTimeout(function() {  
         		$( "#closeBtn" ).addClass("close");
			    }, 100);

		if(!$("#aboutNav > .subMenu li a").hasClass("active"))
  		{
    		$("#aboutNav > .subMenu").css("height","0");
    		$("#aboutNav > .subMenu").css("opacity","0");
    	}

	    if(!$("#portfolioNav > .subMenu li a").hasClass("active"))
  		{
    		$("#portfolioNav > .subMenu").css("height","0");
    		$("#portfolioNav > .subMenu").css("opacity","0");
    	}

    	$("#backBtn").css("display","none");

	});

});