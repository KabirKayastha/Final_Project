$(document).ready(function() {

	leftBtn = $("#left-newsSlider");
	rightBtn = $("#right-newsSlider");
	slide = $(".contentContainer");
		
	x=0;

	$("#right-newsSlider").click(function() {
		x = (x<=240)?(x+80):0;

		$(".contentContainer").css('left', -x+'%');
		
	});

	$("#left-newsSlider").click(function() {
		x = (x>=80)?(x-80):320;

		$(".contentContainer").css('left', -x+'%');

	});

});