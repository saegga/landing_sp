$(document).ready(function(){
	
	$('.btn-stage').hover(function(){
		$('.stage-tooltip').hide();
		$('.btn-stage').removeClass('active');
		$(this).parent().find('.stage-tooltip').show();
		$(this).addClass('active');
	}, function(){
		// $(this).removeClass('active');
	});

	$('.stage-tooltip .close').on('click', function(e){
		e.preventDefault();
		$(this).parent().hide();
	});

	$('.stage-tooltip').each(function(index){
		if($(this).height() > 400){
			$(this).css({'width' : '540', 'max-width' : 'unset', 'right': '-97%', 'padding-top' : '30px'});
		}
	});

});