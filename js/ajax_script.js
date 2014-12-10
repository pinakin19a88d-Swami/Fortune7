$(document).ready(function(){

	$("a").click(function() {

		// Code for loading Ajax Content
		var current = $(this).attr("name");
		// alert(current);
		$(".pageContent").html("");
		$(".pageContent").load(current);

		// Code for enabling/disabling yellow strip menu
		var idName = $(this).parent().attr('id');
		if((idName == "home") ||
			(idName == "companyLogo") || 
			(idName == "homeFt")){
			$(".nav > li").removeClass("active");
			$("#home").addClass("active");
			$(".subNavWrap ul").css("display","none");
		}

		if((idName == "abus1") || 
			(idName == "abus2") || 
			(idName == "abus3") || 
			(idName == "abus4") || 
			(idName == "aboutUs") || 
			(idName == "aboutUsFt")){
			
				$(".nav > li").removeClass("active");
				$("#aboutUs").addClass("active");
				$(".subNavWrap ul").css("display","none");
				$(".aboutUsAjax").css("display","block");

				var current = $(this).child().attr("name");
				// alert(current);
				$(".pageContent").html("");
				$(".pageContent").load(current);
		}

		if((idName == "serv1") || 
			(idName == "serv2") || 
			(idName == "serv3") || 
			(idName == "serv4") || 
			(idName == "servIco1") || 
			(idName == "servIco2") || 
			(idName == "servIco3") || 
			(idName == "services") || 
			(idName == "servicesFt")){
			
				$(".nav > li").removeClass("active");
				$("#services").addClass("active");
				$(".subNavWrap ul").css("display","none");
				$(".servicesAjax").css("display","block");
		}

		
		if((idName == "indu1") || 
			(idName == "indu2") || 
			(idName == "industry") || 
			(idName == "industryFt")){
			
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

		// For About Us Menu
		// if(current == "ajax/aboutUs-company.html"){
		// 	$("#aboutUs1").addClass("active");
		// }
		// if(current == "ajax/aboutUs-vision-mission.html"){
		// 	$("#aboutUs2").addClass("active");
		// }
		// if(current == "ajax/aboutUs-team.html"){
		// 	$("#aboutUs3").addClass("active");
		// }
		// if(current == "ajax/aboutUs-promoters.html"){
		// 	$("#aboutUs4").addClass("active");
		// }

		// // For Services Menu
		// if(current == "ajax/services-executive-search.html"){
		// 	$(".servicesAjax li:nth-child(1)").addClass("active");
		// }
		// if(current == "ajax/services-hr-advisory.html"){
		// 	$(".servicesAjax li:nth-child(2)").addClass("active");
		// }
		// if(current == "ajax/services-training.html"){
		// 	$(".servicesAjax li:nth-child(3)").addClass("active");
		// }

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
			(idName == "currentJob4")){
			$(".subNavList > li").removeClass("active");
			idName = "#"+idName;
			// alert(idName);
			$(idName).addClass("active");
		}
		
		// $(".nav > li").removeClass("active");
		// $(this).parent().addClass("active");
	});

});