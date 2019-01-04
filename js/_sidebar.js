//side bar toggling process
$(document).ready(function(){
	$('.toggleIcon').click(function(){
		$('.hiddenSidebar').toggleClass('sidebar');
		$('.body').toggleClass('bodyAfter');
		$('.toggleIcon').toggleClass('toggledIcon');
	});
});