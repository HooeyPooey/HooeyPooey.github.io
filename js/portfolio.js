//alert("hha");

$(".hover-effect").mouseenter(function(event){
	$("img").css("filter", "brightness(60%)");
	$(".carousel-caption").css("opacity", "1");
	event.stopPropagation();
});

$(".hover-effect").mouseleave(function(event){
	$("img").css("filter", "brightness(100%)");
	$(".carousel-caption").css("opacity", "0");
	event.stopPropagation();
});