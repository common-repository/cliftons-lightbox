// JavaScript Document

jQuery(function($){
		
	//FOCUS/BLUR
	$('.clp-name').on('focus', function(){
		var value = $(this).val();
		if(value === 'Your First Name...')
		{
			$(this).val('');	
		}
	});
	$('.clp-name').on('blur', function(){
		var value = $(this).val();
		if(value === '')
		{
			$(this).val('Your First Name...');	
		}
	});
	$('.clp-email').on('focus', function(){
		var value = $(this).val();
		if(value === 'Your Email Address...')
		{
			$(this).val('');	
		}
	});
	$('.clp-email').on('blur', function(){
		var value = $(this).val();
		if(value === '')
		{
			$(this).val('Your Email Address...');	
		}
	});
	
	$('.clp-close').on('click', function(){
		$.colorbox.close()
		return false;
	});
});