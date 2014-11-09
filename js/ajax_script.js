$(document).ready(function(){

	$(".aboutUsAjax li a, .aboutUsNav li a, #aboutUs").click(function() {

		// $(".subMenu li a").removeClass("active");
		// $(".services span").removeClass("active");
		// $(this).addClass("active");

		$(".aboutUsAjax").css("display","block");

		var current = $(this).attr("name");
		$(".pageContent").html("");
		// $(".pageContent").load("ajax/cssLoader.html");
		$(".pageContent").load(current);

	});

});