(function ($) {
	"use strict";
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	}

	//OPEN & CLOSE MAIN MENU*/
	function closeMenu() {
		$('.all-menu-tablet').click(function () {
			$('body').addClass('show_main_menu');
		});

		$('.close_main_menu, .mask-content').click(function () {
			$('body').removeClass('show_main_menu');
		});
		$(".mobile-search").click(function () {
			$(".search .search-input").focus();
			if (!$(this).hasClass("active")) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
		$('.block_search .input_form').click(function () {
			$('.block_search').addClass('focus');
		});
		$('.block_search .btn_reset').click(function () {
			$('.block_search').removeClass('focus');
		});
	}

	//backToTop
	function backToTop() {
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
	}
	//resizeSite
	function resizeSite() {
		var checkPoint = 1200,
			windowWidth = $(window).innerWidth();
		// mobile
		if (checkPoint > windowWidth) {

		} else {

		}
	}
	//scrollBar
	function scrollBar() {
		var scrollContainer = $(".scrollbar-inner");
		if (scrollContainer.length > 0) {
			scrollContainer.scrollbar();
		}
	}
	//magnificPopup
	function magnificPopup() {
		$('.open-popup').magnificPopup({
			type: 'inline',
			midClick: true,
			mainClass: 'mfp-with-zoom',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			removalDelay: 300,
		});
	}
	//fixSticky
	function fixStickyIE() {
		var stickyElements = $('.sticky');
		if (stickyElements.length > 0) {
			Stickyfill.add(stickyElements);
		}
	}

	function stickyMenu() {
		$(window).scroll(function () {
			var top_start = $(".section_1").position().top + 200;
			if ($(window).scrollTop() >= top_start) {
				$('body').addClass('show-search');
			} else if ($(window).scrollTop() <= top_start) {

				$('body').removeClass('show-search');
			}
		});
	}



	$(function () {
		closeMenu();
		backToTop();
		scrollBar();
		magnificPopup();
		fixStickyIE();
		stickyMenu();
	});

	$(window).on('load resize', function () {
		resizeSite()
	});

})(jQuery);