$(document).ready(function(){

	$("#aboutUs, a").click(function() {

		$(".mainNav .nav li").removeClass("active");
		$(".aboutUsAjax li").removeClass("active");
		
		$(this).parent().addClass("active");
		// $("#aboutUs").parent().removeClass("active");
		$("#aboutUs").addClass("active");

		$(".aboutUsAjax").css("display","block");

		var current = $(this).attr("name");
		// alert(current);
		$(".pageContent").html("");
		$(".pageContent").load(current);

	});

});