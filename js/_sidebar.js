//side bar toggling process
$(document).ready(function(){
	$('.toggleIcon').click(function(){
		$('.hiddenSidebar').toggleClass('sidebar');
		$('.body').toggleClass('bodyAfter');
		$('.navBar').toggleClass('navBar-After');
		$('.toggleIcon').toggleClass('toggledIcon');
		$('.searchBtn').toggleClass('searchBtn-After');
		$('.hiddenSidebar-content').toggleClass('shownSidebar-content');
	});

	
});

