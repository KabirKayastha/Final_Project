$(document).ready(function(){
	
//sidemenu job toggling

	//Admin
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



	//Engineer
	allEngineer = $("#AllEngineer");
	Architect = $("#Architect");
	Building = $("#Building");
	HydroPower = $("#HydroPower");
	Road = $("#Road");


	allEngineer.click(function() {
		$('.Architect').show('slow/400/fast');
		$('.Building').show('slow/400/fast');
		$('.HydroPower').show('slow/400/fast');
		$('.Road').show('slow/400/fast');
	});

	Architect.click(function() {
		$('.Architect').show('slow/400/fast');
		$('.Building').hide('slow/400/fast');
		$('.HydroPower').hide('slow/400/fast');
		$('.Road').hide('slow/400/fast');
	});

	Building.click(function() {
		$('.Building').show('slow/400/fast');
		$('.Architect').hide('slow/400/fast');
		$('.HydroPower').hide('slow/400/fast');
		$('.Road').hide('slow/400/fast');
	});

	HydroPower.click(function() {
		$('.HydroPower').show('slow/400/fast');
		$('.Building').hide('slow/400/fast');
		$('.Architect').hide('slow/400/fast');
		$('.Road').hide('slow/400/fast');
	});

	Road.click(function() {
		$('.Road').show('slow/400/fast');
		$('.Building').hide('slow/400/fast');
		$('.Architect').hide('slow/400/fast');
		$('.HydroPower').hide('slow/400/fast');
	});

});