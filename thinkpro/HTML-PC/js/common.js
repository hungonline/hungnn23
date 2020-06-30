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
		$('.btn_control_menu').click(function () {
			$('body').addClass('show_main_menu');
		});
		$('.header .onclick').click(function () {
			$('body').addClass('open-header');
			$('.block_search ').hide();
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
		$('#comment-left').click(function () {
			$('body').addClass('open-chat');
		});
		$('.close-chat').click(function () {
			$('body').removeClass('open-chat');
		});
		$('.sort-mobile .fillter').click(function () {
			$('.sort-mobile .fillter').addClass('open-fillter');
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
				$('body').addClass('open-fillter');
			} else {
				$(this).removeClass('active');
				$('body').removeClass('open-fillter');
			}
		});
		$('.sort-mobile .apply').click(function () {
			$('.sort-mobile .fillter').removeClass('active');
			$('body').removeClass('open-fillter');
		});

		$('.close_main_menu, .overlay-bg, .close-menu, .header .close').click(function () {
			$('body').removeClass('show_main_menu');
			$('body').removeClass('open-fillter');
			$('body').removeClass('open-header');
			$('.header .onclick').removeClass('active');
		});
		$('#auto_search_button').click(function () {
			$('.close-search,.block_search').show();
		});
		$('.close-search').click(function () {
			$('.close-search,.block_search').hide();
		});
		$('.main--menu__nav').find('.sub-icon').click(function () {
			if ($(this).next('ul').css('display') == 'none') {
				$(this).addClass('up');
				$(this).removeClass('down');
			} else {
				$(this).addClass('down');
				$(this).removeClass('up');
			};
			$(this).next('ul').slideToggle("show", function () {});
		});
		$('.down-up').find('.sub-icon').click(function () {
			if ($(this).next('.level2').css('display') == 'none') {
				$(this).addClass('up');
				$(this).removeClass('down');
			} else {
				$(this).addClass('down');
				$(this).removeClass('up');
			};
			$(this).next('.level2').slideToggle("show", function () {});
		});

	}

	//backToTop
	function backToTop() {
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 200) {
				$('#to_top').css('display', 'block');
			} else {
				$('#to_top').css('display', 'none');
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
		var checkPoint = 991,
			windowWidth = $(window).innerWidth();
		// mobile
		if (checkPoint >= windowWidth) {
			$(window).scroll(function () {
				if ($(window).scrollTop() >= 400) {
					$('.sticky_detail').fadeIn();
				} else {
					$('.sticky_detail').fadeOut();
				}
			});
		} else {
			$('.sticky_detail').fadeIn();
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


	//Slide
	function sliderBanner() {
		var galleryThumbs2 = new Swiper('.fs-aslide__left .gallery-thumbs', {
			slidesPerView: 4,
			freeMode: true,
			loopedSlides: 5,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				480: {
					slidesPerView: 2,
					loopedSlides: 3,
				},
				1024: {
					slidesPerView: 3,
					loopedSlides: 4,
				},
			}
		});
		var galleryTop2 = new Swiper('.fs-aslide__left .gallery-top', {
			loopedSlides: 5,
			autoplay: {
				delay: 5000,
			},
			thumbs: {
				swiper: galleryThumbs2,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},
		});

		var swiperProductReview = new Swiper('.slide-review .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 8,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				480: {
					loop: true,
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 2,
				},
			}
		});
		var swiperProductReview2 = new Swiper('.slide-other .swiper-container', {
			slidesPerView: 2,
			spaceBetween: 8,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				480: {
					loop: true,
					slidesPerView: 1,
				}
			}
		});

		var swiperProduct = new Swiper('.product-slide .swiper-container', {
			slidesPerView: 5,
			// autoplay: {
			// 	delay: 6000,
			// },
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 3,
				},
				1025: {
					slidesPerView: 4,
				},
			}
		});

		var swiperLogo = new Swiper('.thuong-hieu .swiper-container', {
			slidesPerView: 8,
			spaceBetween: 8,
			navigation: {
				nextEl: '.swiper-th-next',
				prevEl: '.swiper-th-prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
			}
		});

		var galleryThumbs2 = new Swiper('.slideshow2 .slideshow2__thumbs .swiper-container', {
			spaceBetween: 8,
			slidesPerView: 5,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			speed: 500,
			navigation: {
				nextEl: '.swiper-thumbs-next',
				prevEl: '.swiper-thumbs-prev',
			}
		});
		var galleryTop2 = new Swiper('.slideshow2 .slideshow2__gallery .swiper-container', {
			speed: 700,
			thumbs: {
				swiper: galleryThumbs2,
			},
			navigation: {
				nextEl: '.swiper-gallery-next',
				prevEl: '.swiper-gallery-prev',
			},
		});


	}

	function onClickTongle() {
		$(".onclick-togle").click(function () {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
		$(".content-chat__tl .reply .icons").click(function () {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
		$(document).click(function () {
			$(".onclick-togle").removeClass('active');
			$('.action-wrap').removeClass('active');
			$(".dropdown").find('.dropdown-content').slideUp();
		});
		$(".onclick-togle, .dropdown .dropbtn").click(function (event) {
			event.stopPropagation();
		});

		$(".dropdown").find(".dropbtn").click(function () {
			$(".dropdown").find('.dropdown-content').slideUp();
			if ($(this).next().css('display') == 'none') {
				$('.dropdown-content').slideUp();
				$(this).next().stop(true, true).slideDown();
				$('.dropdown').removeClass('active');
				$(this).parent().addClass('active');
			} else {
				$(this).parent().find('.dropdown-content').slideUp();
				$('.dropdown').removeClass('active');
			}
		});
		$(".dropdown-content").find("li").click(function () {
			var html = $(this).html();
			$(".dropbtn").html(html);
		});

		$(".product-review .swiper-slide").mouseover(function () {
			$(".product-review .swiper-container").css({
				"padding-bottom": "300px",
				"margin-bottom": "-300px",
				"z-index": "8"
			});
		});
		$(".product-review .swiper-slide").mouseout(function () {
			$(".product-review .swiper-container").css({
				"padding-bottom": "0",
				"margin-bottom": "0"
			});
		});
		$(".product-slide .swiper-slide").mouseover(function () {
			$(".product-slide .swiper-container").css({
				"padding-bottom": "300px",
				"margin-bottom": "-300px",
				"z-index": "9"
			});
		});
		$(".product-slide .swiper-slide").mouseout(function () {
			$(".product-slide .swiper-container").css({
				"padding-bottom": "0",
				"margin-bottom": "0"
			});
		});

	}

	function clickActive() {
		$(".click--hover").click(function () {
			$(".click--hover").removeClass('active');
			$(this).addClass('active');
		});

		$('.view-full a').click(function (e) {
			e.preventDefault();
			if ($('.content-danhgia').hasClass('has-toggle')) {
				$('.content-danhgia').removeClass('has-toggle');
				$('.view-full').addClass('view-less');
				$(this).html('Thu gọn');
			} else {
				$('.content-danhgia').addClass('has-toggle');
				$('.view-full').removeClass('view-less');
				$(this).html('Xem đầy đủ');
			}
		});
		$(".view-full a").on('click', function (event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {
					window.location.hash = hash;
				});
			}
		});

	}

	function lightGallery() {
		$('#lightgallery').lightGallery();
	}


	function tabContainer() {
		$(".tab-default a").click(function (event) {
			$(".tab-default a").removeClass('active')
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
			event.preventDefault();
			var tab = $(this).attr("href");
			$(".tab-container > div").not(tab).css("display", "none");
			$(tab).fadeIn();
		});
	}

	function resizing_select() {
		$('#resizing_select').change(function () {
			$("#width_tmp_option").html($('#resizing_select option:selected').text());
			$(this).width($("#width_tmp_select").width());
		});
	}

	$(function () {
		closeMenu();
		backToTop();
		scrollBar();
		magnificPopup();
		fixStickyIE();
		sliderBanner();
		onClickTongle();
		clickActive();
		lightGallery();
		tabContainer();
		resizing_select();
	});

	$(window).on('load resize', function () {
		resizeSite()
	});
})(jQuery);