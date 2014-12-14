$(document).ready(function(){

	$("a").click(function() {

		// Code for loading Ajax Content
		var current = $(this).attr("name");
		// alert(current);
		$(".pageContent > .otherContent").html("");
		$(".pageContent > .otherContent").load(current);

		// Code for enabling/disabling yellow strip menu
		var idName = $(this).parent().attr('id');
		if((idName == "home") ||
			(idName == "companyLogo") || 
			(idName == "homeFt")){
			$(".nav > li").removeClass("active");
			$("#home").addClass("active");
			$(".subNavWrap ul").css("display","none");
		}

		if( (idName == "abus1") || 
			(idName == "abus2") || 
			(idName == "abus3") || 
			(idName == "abus4") || 
			(idName == "aboutUs") || 
			(idName == "aboutUsFt") ){
			
				$(".nav > li").removeClass("active");
				$("#aboutUs").addClass("active");
				$(".subNavWrap ul").css("display","none");
				$(".aboutUsAjax").css("display","block");
		
		}

		if( (idName == "serv1") || 
			(idName == "serv2") || 
			(idName == "serv3") || 
			(idName == "serv4") || 
			(idName == "servIco1") || 
			(idName == "servIco2") || 
			(idName == "servIco3") || 
			(idName == "services") || 
			(idName == "servicesFt") ){
			
				$(".nav > li").removeClass("active");
				$("#services").addClass("active");
				$(".subNavWrap ul").css("display","none");
				$(".servicesAjax").css("display","block");
		}

		
		if( (idName == "indu1") || 
			(idName == "indu2") || 
			(idName == "industry") || 
			(idName == "industryFt") ){
			
				$("li").removeClass("active");
				$("#industry").addClass("active");
				$(".subNavWrap ul").css("display","none");
				$(".industryAjax").css("display","block");
		}

		if((idName == "contactUs") || (idName == "contactUsFt")){
			$(".nav > li").removeClass("active");
			$("#contactUs").addClass("active");
			$(".subNavWrap ul").css("display","none");
		}

		if(idName == "currentJob"){
			$(".nav > li").removeClass("active");
			$("#currentJob").addClass("active");
			$(".subNavWrap ul").css("display","none");
			$(".currentJobAjax").css("display","block");
		}

		if((idName == "careers") || idName == "testimonials"){
			$(".nav > li").removeClass("active");
			$("#currentJob").addClass("active");
			$(".subNavWrap ul").css("display","none");
		}

		var idName = $(this).parent().attr('id');
		// alert(idName);
		if(idName == "aboutUs"){
			$("#aboutUs1").addClass("active");
		}
		if(idName == "services"){
			$("#services1").addClass("active");
		}
		if(idName == "industry"){
			$("#industry1").addClass("active");
		}
		if(idName == "currentJob"){
			$("#currentJob1").addClass("active");
		}

		if( (idName == "aboutUs1") ||
			(idName == "aboutUs2") ||
			(idName == "aboutUs3") ||
			(idName == "aboutUs4") ||
			(idName == "services1") ||
			(idName == "services2") ||
			(idName == "services3") ||
			(idName == "industry1") ||
			(idName == "industry2") ||
			(idName == "industry3") ||
			(idName == "industry4") ||
			(idName == "currentJob1") ||
			(idName == "currentJob2") ||
			(idName == "currentJob3") ||
			(idName == "currentJob4") ){
			$(".subNavList > li").removeClass("active");
			idName = "#"+idName;
			// alert(idName);
			$(idName).addClass("active");
		}

		if( (idName == "servIco1") ||
			(idName == "servIco2") ||
			(idName == "servIco3") ){

			idName = "#" + idName + " > a > span";
			$("#servIco1 > a > span, #servIco2 > a > span, #servIco3 > a > span").removeClass("servicesActive");
			$(idName).addClass("servicesActive");

		}
		
		// $(".nav > li").removeClass("active");
		// $(this).parent().addClass("active");
	});

	// Code for Services Icons - Activation, Deactivation & Hover Effect
	function deactivateServicesIcons(iconId){

		if(iconId == "all")
		{
			$(".servicesIco a i.execSearch").css("background-position","0 0");
			$(".servicesIco a i.hrAdvice").css("background-position","0 -69px");
			$(".servicesIco a i.training").css("background-position","0 -138px");
		}
		else if(iconId == "1")
		{
			$(".servicesIco a i.execSearch").css("background-position","0 0");
		}
		else if(iconId == "2")
		{
			$(".servicesIco a i.hrAdvice").css("background-position","0 -69px");
		}
		else if(iconId == "3")
		{
			$(".servicesIco a i.training").css("background-position","0 -138px");
		}

	}

	function activateServicesIcon(iconNumber) {

	 	if(iconNumber == "1")
	 	{
	 		deactivateServicesIcons("all");
	 		$(".servicesIco a i.execSearch").css("background-position","-61px 0");
	 	}

	 	else if(iconNumber == "2")
	 	{
	 		deactivateServicesIcons("all");
	 		$(".servicesIco a i.hrAdvice").css("background-position","-61px -69px");
	 	}

	 	else if(iconNumber == "3")
	 	{
	 		deactivateServicesIcons("all");
	 		$(".servicesIco a i.training").css("background-position","-61px -138px");
	 	}

	 }

	$("#servIco1").click(function(){activateServicesIcon("1");});
	$("#servIco2").click(function(){activateServicesIcon("2");});
	$("#servIco3").click(function(){activateServicesIcon("3");});

	$("#servIco1 > a").hover(function(){

		$(".servicesIco a i.execSearch").css("background-position","-61px 0");

	}, function(){

		if( !($("#servIco1 > a > span").hasClass("servicesActive")) )
		{
			deactivateServicesIcons("1");
		}

	});

	$("#servIco2 > a").hover(function(){

		$(".servicesIco a i.hrAdvice").css("background-position","-61px -69px");

	}, function(){

		if( !($("#servIco2 > a > span").hasClass("servicesActive")) )
		{
			deactivateServicesIcons("2");
		}

	});

	$("#servIco3 > a").hover(function(){

		$(".servicesIco a i.training").css("background-position","-61px -138px");

	}, function(){

		if( !($("#servIco3 > a > span").hasClass("servicesActive")) )
		{
			deactivateServicesIcons("3");
		}

	});

});