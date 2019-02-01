$(document).ready(function(){
	
	//sidemenu job toggling
	allAdmin = $("#AllAdmin");
	reception = $("#Reception");
	administration = $("#Administration");
	management = $("#Management");

	allAdmin.click(function() {
		$('.Reception').show('slow/400/fast');
		$('.Administration').show('slow/400/fast');
		$('.Management').show('slow/400/fast');
	});

	reception.click(function() {
		$('.Reception').show('slow/400/fast');
		$('.Administration').hide('slow/400/fast');
		$('.Management').hide('slow/400/fast');
	});

	administration.click(function() {
		$('.Administration').show('slow/400/fast');
		$('.Reception').hide('slow/400/fast');
		$('.Management').hide('slow/400/fast');
	});

	management.click(function() {
		$('.Administration').hide('slow/400/fast');
		$('.Reception').hide('slow/400/fast');
		$('.Management').show('slow/400/fast');
	});
});