$(document).ready(function(){

	$(".mainNav .nav li").removeClass("active");
	$(".subNavList li").removeClass("active");
	$("#home").addClass("active");


	$("#aboutUs, #services, #industry").hover(function(){

		$(".mainNav .nav").css("z-index","500");

	}, function(){

		$(".mainNav .nav").css("z-index","200");

	});

});