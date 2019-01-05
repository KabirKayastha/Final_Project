//side bar toggling process
$(document).ready(function(){
	$('.toggleIcon').click(function(){
		$('.hiddenSidebar').toggleClass('sidebar');
		$('.body').toggleClass('bodyAfter');
		$('.navBar').toggleClass('navBar-After');
		$('.toggleIcon').toggleClass('toggledIcon');
	});

	/*$('#job').hover(function(){
		$('#jobSubmenu').slideToggle('slow/400/fast');
	});*/
});