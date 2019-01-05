$(document).ready(function() {
	$('#job').hover(function(){
		$('#jobSubmenu').slideToggle('slow/400/fast');
	});

	$('#faq').hover(function(){
		$('#faqSubmenu').slideToggle('slow/400/fast');
	});

	$("#faqIItoggler1").click(function(){
		$('#faqII1').slideToggle('slow/400/fast');
		$('#faqII2, #faqII3').slideUp('slow/400/fast', function(){
			$('.iconDown2').removeClass('iconUp2');
			$('.iconDown3').removeClass('iconUp3');
		});
		$('.iconDown1').toggleClass('iconUp1');
	});

	$("#faqIItoggler2").click(function(){
		$('#faqII2').slideToggle('slow/400/fast');
		$('#faqII1, #faqII3').slideUp('slow/400/fast', function(){
			$('.iconDown1').removeClass('iconUp1');
			$('.iconDown3').removeClass('iconUp3');
		});
		$('.iconDown2').toggleClass('iconUp2');
	});

	$("#faqIItoggler3").click(function(){
		$('#faqII3').slideToggle('slow/400/fast');
		$('#faqII1, #faqII2').slideUp('slow/400/fast', function(){
			$('.iconDown1').removeClass('iconUp1');
			$('.iconDown2').removeClass('iconUp2');
		});
		$('.iconDown3').toggleClass('iconUp3');
	});

});

