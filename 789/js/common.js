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
		$(".menu-btn").click(function () {
			$(this).toggleClass("active");
			$(".top-menu").toggleClass("active");
			$(".overlay-bg").toggle();
		});
		$(".overlay-bg").click(function () {
			$(this).hide();
			$(".top-menu, .menu-btn").removeClass("active");
		});

		$('.sub_menu').click(function () {
			if ($(this).next('.cap_2').css('display') == 'none') {
				$(this).html('-');
			} else {
				$(this).html('+');
			};
			$(this).next('.cap_2').slideToggle("slow", function () {});
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
	//fixSticky
	function fixStickyIE() {
		var stickyElements = $('.sticky');
		if (stickyElements.length > 0) {
			Stickyfill.add(stickyElements);
		}
	}

	function stickyMenu() {
		$("<div id='box_menu_before' class='section'></div>").insertBefore("#topbar");
		$(window).scroll(function () {
			var top_start = $("#box_menu_before").position().top + 550;
			if ($(window).scrollTop() >= top_start) {
				$('#topbar').addClass('sticky');
			} else if ($(window).scrollTop() <= top_start) {

				$('#topbar').removeClass('sticky');
			}
		});
	}

	//Slide 
	function sliderBanner() {
		var swiper = new Swiper('.slide-ykien .swiper-container', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			slidesPerView: 3,
			spaceBetween: 60,
			loop: true,
			breakpoints: {
				767: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
			}
		});

		var swiperlinhvuc = new Swiper('.slide-covan .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 50,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				375: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				992: {
					spaceBetween: 30
				},
			},
		});
		
	}



	$(function () {
		closeMenu();
		backToTop();
		scrollBar();
		fixStickyIE();
		stickyMenu();
		sliderBanner();
		AOS.init({
			duration: 1200,
		})
	});

	$(window).on('load resize', function () {
		resizeSite()
	});
})(jQuery);

// ticky Menu
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('#topbar.sticky').outerHeight() + 0;

$(window).scroll(function (event) {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 0);

function hasScrolled() {
	var st = $(this).scrollTop();
	if (Math.abs(lastScrollTop - st) <= delta) return;
	if (st > lastScrollTop && st > navbarHeight) {
		$('#topbar.sticky').removeClass('nav-down').addClass('nav-up');
	} else {
		if (st + $(window).height() < $(document).height()) {
			$('#topbar.sticky').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}