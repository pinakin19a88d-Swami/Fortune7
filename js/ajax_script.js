$(document).ready(function(){

	$("a").click(function() {

		$(".mainNav .nav li").removeClass("active");
		$(".subNavList li").removeClass("active");
		
		$(this).parent().addClass("active");
		// $("#aboutUs").parent().removeClass("active");
		var idName = $(this).attr('id');
		if(idName == "home"){
			$("#home").addClass("active");	
		}
		if(idName == "aboutUs"){
			$("#aboutUs").addClass("active");	
		}
		if(idName == "services"){
			$("#services").addClass("active");	
		}
		if(idName == "industry"){
			$("#industry").addClass("active");	
		}
		if(idName == "contactUs"){
			$("#contactUs").addClass("active");	
		}
		
		$(".aboutUsAjax").css("display","block");

		var current = $(this).attr("name");
		$(".pageContent").html("");
		$(".pageContent").load(current);

		if(current == "ajax/aboutUs-company.html"){
			$(".subNavList li:nth-child(1)").addClass("active");
		}
		if(current == "ajax/aboutUs-vision-mission.html"){
			$(".subNavList li:nth-child(2)").addClass("active");
		}
		if(current == "ajax/aboutUs-team.html"){
			$(".subNavList li:nth-child(3)").addClass("active");
		}
		if(current == "ajax/aboutUs-promoters.html"){
			$(".subNavList li:nth-child(4)").addClass("active");
		}

	});

});