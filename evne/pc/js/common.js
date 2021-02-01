// JavaScript Document

$(function(){
	  	
		
	  	$('.hamber').click(function(){
			if($('body').hasClass('panel_left_colspan')){
				$('body').removeClass('panel_left_colspan');
				$('#page').removeClass('hidden_colspan').height('auto');
			}
			else{
				$('body').addClass('panel_left_colspan');
				$('#page').addClass('hidden_colspan').height($('#panel_menu_left').height()-150);
			}
			
			
		});
		$('.btn_close_colspan').click(function(){
			$('body').removeClass('panel_left_colspan');
			$('#page').removeClass('hidden_colspan').height('auto');	
		});
		$('.mark_menu').click(function(){
			$('body').removeClass('panel_left_colspan');
			$('#page').removeClass('hidden_colspan').height('auto');	
		});
	
})
