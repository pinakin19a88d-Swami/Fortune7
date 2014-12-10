$(document).ready(function(){

	$(".mainNav .nav li").removeClass("active");
	$(".subNavList li").removeClass("active");
	$("#home").addClass("active");


	$("#aboutUs, #services, #industry").hover(function(){

		$(".mainNav .nav").css("z-index","500");

	}, function(){

		$(".mainNav .nav").css("z-index","200");

	});

	$("#servIco1 > a").hover(function(){

		$(".servicesIco a i.execSearch").css("background-position","-61px 0")

	},
	function(){

		$(".servicesIco a i.execSearch").css("background-position","0 0")

	});

	$("#servIco2 > a").hover(function(){

		$(".servicesIco a i.hrAdvice").css("background-position","-61px -69px")

	},
	function(){

		$(".servicesIco a i.hrAdvice").css("background-position","0 -69px")

	});

	$("#servIco3 > a").hover(function(){

		$(".servicesIco a i.training").css("background-position","-61px -138px")

	},
	function(){

		$(".servicesIco a i.training").css("background-position","0 -138px")

	});

});