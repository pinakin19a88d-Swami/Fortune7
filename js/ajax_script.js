$(document).ready(function(){

	$("a, li").click(function() {

		$(".mainNav .nav li").removeClass("active");
		$(".subNavList li").removeClass("active");
		
		$(this).parent().addClass("active");

		var idName = $(this).attr('id');
		if(idName == "home"){
			$(".subNavWrap ul").css("display","none");
			$("#home").addClass("active");	
		}
		if((idName == "aboutUs") || (idName == "aboutUsFt")){
			$("#aboutUs").addClass("active");
			$(".subNavWrap ul").css("display","none");
			$(".aboutUsAjax").css("display","block");
		}
		if((idName == "services") || (idName == "servicesFt")){
			$("#services").addClass("active");
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
		if(current == "ajax/aboutUs-company.html"){
			$("#aboutUs1").addClass("active");
		}
		if(current == "ajax/aboutUs-vision-mission.html"){
			$("#aboutUs2").addClass("active");
		}
		if(current == "ajax/aboutUs-team.html"){
			$("#aboutUs3").addClass("active");
		}
		if(current == "ajax/aboutUs-promoters.html"){
			$("#aboutUs4").addClass("active");
		}

		// For Services Menu
		if(current == "ajax/services-executive-search.html"){
			$(".servicesAjax li:nth-child(1)").addClass("active");
		}
		if(current == "ajax/services-hr-advisory.html"){
			$(".servicesAjax li:nth-child(2)").addClass("active");
		}
		if(current == "ajax/services-training.html"){
			$(".servicesAjax li:nth-child(3)").addClass("active");
		}

	});

});