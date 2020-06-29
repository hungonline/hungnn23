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
		$('.js-headerHamburger').click(function () {
			$('body').addClass('show_main_menu');
		});

		$('.close_main_menu, .mask-content').click(function () {
			$('body').removeClass('show_main_menu');
		});
		$(".list_menu .list_item_panel").find("li").click(function () {
			$('body').removeClass('show_main_menu');
			$(".list_menu .list_item_panel").find("li").removeClass("active")
			if (!$(this).hasClass("active")) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
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
		$("<div id='box_menu_before'></div>").insertBefore(".section_header .col_right");
		$(window).scroll(function () {
			var top_start = $("#box_menu_before").position().top + 120;
			if ($(window).scrollTop() >= top_start) {
				$('.section_header').addClass('sticky');
			} else if ($(window).scrollTop() <= top_start) {

				$('.section_header').removeClass('sticky');
			}
		});

	}

	//Tab_lotrinh
	function tabLotrinh() {
		$(".section_lotrinh .tab .item").click(function (event) {
			$(".section_lotrinh .tab .item").removeClass("active")
			if (!$(this).hasClass("active")) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
			event.preventDefault();
			var tab = $(this).attr("href");
			$(".tab-content .lotrinh").not(tab).css("display", "none");
			$(tab).fadeIn();
		});


		$(document).on("click", ".ava", function () {
			var el_ID = $(this).attr("data-id");
			$('.slide_binhchon .swiper-container .ava').removeClass('active');
			$('.tab-content-slide .info-product').removeClass('active');
			$(this).addClass('active');
			$('#' + el_ID + '-content').addClass("active");
		});
		$(document).on("click", ".swiper-bc-next, .swiper-bc-prev", function () {
			var el_ID = $('.slide_binhchon .swiper-slide.swiper-slide-active').find(".ava").attr("data-id");
			$('.slide_binhchon .swiper-container .ava').removeClass('active');
			$('.tab-content-slide .info-product').removeClass('active');
			$(this).addClass('active');
			$('#' + el_ID + '-content').addClass("active");
		});
		$(".slide_binhchon__mobile").find(".items").click(function () {
			$(".slide_binhchon__mobile").find(".items").removeClass("active");
			if (!$(this).hasClass("active")) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
		$(".slide_binhchon__mobile").find(".close").click(function () {
			$(".slide_binhchon__mobile items").removeClass("active");
		});

		$(".dropdown").find(".dropbtn").click(function () {
			$(".dropdown").find('.dropdown-content').slideUp();
			if ($(this).next().css('display') == 'none') {
				$('.dropdown-content').slideUp();
				$(this).next().stop(true, true).slideDown();
				$('.dropdown').removeClass('active');
				$(this).parent().addClass('active');
				$(".form_suggest .input_search").focus();
			} else {
				$(this).parent().find('.dropdown-content').slideUp();
				$('.dropdown').removeClass('active');
			}
		});
		$(".dropdown-content").find("li").click(function () {
			var html = $(this).html();
			$(".dropbtn").html(html);
		});
		$(document).click(function () {
			$(".onclick-togle, .dropdown .dropbtn,.down-up .onclick").removeClass('active');
			$(".dropdown").find('.dropdown-content').slideUp();
			$(".form-down").slideUp();
		});
		$(".onclick-togle, .dropdown .dropbtn,.down-up .onclick, .dropdown-content .form-default, .dropdown-content .input_search").click(function (event) {
			event.stopPropagation();
		});


	}

	function swiper() {
		var swiperbinhchon = new Swiper('.slide_binhchon .swiper-container', {
			slidesPerView: 7,
			spaceBetween: 0,
			centeredSlides: true,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			loop: true,
			// loopedSlides: 7,
			navigation: {
				nextEl: '.swiper-bc-next',
				prevEl: '.swiper-bc-prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 5,
				},
			}
		});
	}

	function lightGallery2() {
		var box_lightGallery = document.getElementsByClassName('lightgallery90');
		for (var i = 0; i < box_lightGallery.length; i++) {
			if (typeof (box_lightGallery[i]) != 'undefined' && box_lightGallery[i] != null) {
				lightGallery(box_lightGallery[i], {
					selector: '.item',
					thumbMargin: 20,
					thumbContHeight: 120,
					subHtmlSelectorRelative: true,
					thumbnail: true
				});


				box_lightGallery[i].addEventListener('onAfterOpen', function (e) {
					$(".lg-sub-html").insertBefore('.lg-inner');
					$(".lg-sub-html").wrap("<div class='lg-sub-html_wrapper'></div>");
					// $(".lg-sub-html").perfectScrollbar();
				}, false);
			}
		}
		$('.item_slide_show .thumb_img').on('click', function () {
			var data_img = $(this).attr('data-img');
			if (data_img) {
				$(".lightgallery90 a[data-img='" + data_img + "']")[0].click();
			}
		});
	}

	$(function () {
		closeMenu();
		backToTop();
		scrollBar();
		magnificPopup();
		fixStickyIE();
		// actionMenu();
		tabLotrinh();
		swiper();
		lightGallery2();
	});

	$(window).on('load resize', function () {
		resizeSite()
	});

})(jQuery);