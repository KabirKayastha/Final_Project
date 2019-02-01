$(document).ready(function() {

//prev-next scrolling
	panel_LeftBtn = $(".panel-left");
	panel_RightBtn = $(".panel-right");
	panel_slide = $(".elements ul");
		
	z=0;

	panel_RightBtn.click(function() {
		z = (z<=230)?(z+100):0;

		panel_slide.css('left', -z+'%');
		
	});

	panel_LeftBtn.click(function() {
		z = (z>=100)?(z-100):300;

		panel_slide.css('left', -z+'%');

	});


});


