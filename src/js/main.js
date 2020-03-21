$(document).ready(function(){
	

	var widthMap = $(window).outerWidth() - $('.footer-left').get(0).getBoundingClientRect().right - 30;
	$('.map').width(widthMap);

	$('.btn-stage').hover(function(){
		$('.stage-tooltip').hide();
		$('.btn-stage').removeClass('active');
		$('.howbuy-stage').removeClass('active');

		$(this).parent().find('.stage-tooltip').show();

		$(this).parent().addClass('active');
		$(this).addClass('active');

	}, function(){
		// $(this).removeClass('active');
	});

	$('.stage-tooltip .close').on('click', function(e){
		e.preventDefault();
		$(this).parent().hide();
	});
	if($(window).outerWidth() > 768){
		$('.stage-tooltip').each(function(index){
			if($(this).height() > 400){
				$(this).css({'width' : '540', 'max-width' : 'unset', 'right': '-97%', 'padding-top' : '30px'});
			}
		});
	}

	$('.down').on('click', function(e){
		e.preventDefault();
		$('body, html').animate({scrollTop: $('#brands').offset().top}, 500);
	});

});