$(document).ready(function() {

	panel_LeftBtn = $("#panel-left-Btn");
	panel_RightBtn = $("#panel-right-Btn");
	panel_slide = $(".elements ol");
		
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