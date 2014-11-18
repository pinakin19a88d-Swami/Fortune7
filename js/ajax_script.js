$(document).ready(function(){

	$("a").click(function() {

		var idName = $(this).parent().attr('id');
		if(idName == "home"){
			$(".subNavWrap ul").css("display","none");
			$("#home").child().addClass("active");	
		}
		if((idName == "abus1") || 
			(idName == "abus2") || 
			(idName == "abus3") || 
			(idName == "abus4") || 
			(idName == "aboutUs") || 
			(idName == "aboutUsFt")){
			
				$("a").removeClass("active");
				$(".aboutUsAjax > a").addClass("active");
				$(".subNavWrap ul").css("display","none");
				$(".aboutUsAjax").css("display","block");
		}

		if((idName == "serv1") || 
			(idName == "serv2") || 
			(idName == "serv3") || 
			(idName == "serv4") || 
			(idName == "services") || 
			(idName == "servicesFt")){
			$("a").removeClass("active");
			$("#services > a").addClass("active");
			$(".subNavWrap ul").css("display","none");
			$(".servicesAjax").css("display","block");
		}

		if((idName == "industry") || (idName == "industryFt")){
			$("#industry").addClass("active");
			$(".subNavWrap ul").css("display","none");
			$(".industryAjax").css("display","block");
		}

		if(idName == "contactUs"){
			$(".subNavWrap ul").css("display","none");
			$("#contactUs").addClass("active");	
		}

		if(idName == "currentJob"){
			$("#currentJob").addClass("active");
			$(".subNavWrap ul").css("display","none");
			$(".currentJobAjax").css("display","block");
		}

		var current = $(this).attr("name");
		// alert(current);
		$(".pageContent").html("");
		$(".pageContent").load(current);

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

	});

});