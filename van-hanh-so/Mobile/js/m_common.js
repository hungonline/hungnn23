$(document).ready(function () {

	// Sticky Top menu
	$("<div id='box_menu_before'></div>").insertBefore(".section_top");
	$(window).scroll(function () {
		var top_start = $("#box_menu_before").position().top + 0;
		if ($(window).scrollTop() >= top_start) {
			$('.section_top').addClass('box_menu--sticky');
			$('#article_detail,#top_story').addClass('margin');
		} else if ($(window).scrollTop() <= top_start) {
			$('.section_top').removeClass('box_menu--sticky');
			$('#article_detail,#top_story').removeClass('margin');
		}
	});
	// Submenu 

	/*OPEN & CLOSE MAIN MENU*/
	$(function () {
		$('.btn_control_menu2').click(function () {
			$('body').addClass('show-menu2');
		});

		$('.close_main_menu, .mask-content').click(function () {
			$('body').removeClass('show-menu2');
		});
	})
	/*END OPEN & CLOSE MAIN MENU*/

	/**BUTTON BACK TO TOP**/
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 200) {
			$('#to_top').fadeIn();
		} else {
			$('#to_top').fadeOut();
		}

	});

	$("#to_top").click(function () {
		$("html, body").animate({
			scrollTop: 0
		});
		return false;
	});

	/**END BUTTON BACK TO TOP**/

	/**MENU STICKY**/
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 350) {
			$('#header_sticky').addClass('show_sticky');

		} else {
			$('#header_sticky').removeClass('show_sticky');
			$('.icon_font_adj').removeClass('active');
			$('.button_font_adj').removeClass('active');
			$('.show_font_adj').removeClass('show');
		}
	});
	/**END MENU STICKY**/

	$('.block_search .input_form').click(function () {
		$('.block_search').addClass('focus');
	});
	$('.block_search .btn_reset').click(function () {
		$('.block_search').removeClass('focus');
	});


	$(".box_menu .main_menu_seagame li.has-child").hover(function (e) {
		e.preventDefault();
		var idEl = $(this).attr("id");
		$(this).toggleClass("open");
		$("#" + idEl + "__content").fadeToggle(100);
	});
});