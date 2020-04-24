

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

  /*OPEN & CLOSE MAIN MENU*/

	function closeMenu() {
    $('.js-headerHamburger').click(function () {
      $('body').addClass('show_main_menu');
    });

    $('.close_main_menu, .mask-content').click(function () {
      $('body').removeClass('show_main_menu');
    });
	}

  /*END OPEN & CLOSE MAIN MENU*/

	//backToTop
	function backToTop() {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
        $('#to_top').fadeIn();
      } else {
        $('#to_top').fadeOut();
      }
    });
  
    $('#to_top').click(function () {
      $('html, body').animate({
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
		$('.open-popup-link').magnificPopup({
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
    
    $('.pc-giamkhao .open-popup').magnificPopup({
      type: 'inline',
      midClick: true,
      mainClass: 'mfp-with-zoom',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      removalDelay: 300
    });

	}
	//fixSticky
	function fixStickyIE() {
		var stickyElements = $('.sticky');
		if (stickyElements.length > 0) {
			Stickyfill.add(stickyElements);
		}
  }
  //onClick
	function onClick() {
    $('.ban_giamkhao')
    .find('.open-popup')
    .click(function () {
      if (
        $(this)
        .next()
        .css('display') == 'none'
      ) {
        $('.content_mobile').slideUp();
        $(this)
          .next()
          .stop(true, true)
          .slideDown();
        $('.ban_giamkhao .item').removeClass('active');
        $(this)
          .parent()
          .addClass('active');
      } else {
        $(this)
          .parent()
          .find('.content_mobile')
          .slideUp();
        $('.ban_giamkhao .item').removeClass('active');
      }
    });
    $('.help_span >a').click(function () {
      if (
        $(this)
        .next()
        .css('display') == 'none'
      ) {
        $('.content_help').slideUp();
        $(this)
          .next()
          .stop(true, true)
          .slideDown();
        $('.help_span').removeClass('active');
        $(this)
          .parent()
          .addClass('active');
      } else {
        $(this)
          .parent()
          .find('.content_help')
          .slideUp();
        $('.help_span').removeClass('active');
      }
    });

    $('.in_content .item').click(function () {
      $('.in_content .item').removeClass('active');
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
      $varName = $(this).html();
      $Outcontent = $('.out_conten');
      $('.out_content').html($varName);
    });
  
    $('.tab_week  a').click(function (event) {
      $('.tab_week  a').removeClass('active');
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
      event.preventDefault();
      var tab = $(this).attr('href');
      $('.tab-container > div')
        .not(tab)
        .css('display', 'none');
      $(tab).fadeIn();
    });

    $('.fillter .item').click(function () {
      $(this).addClass('active');
      $(this)
        .siblings()
        .removeClass('active');
    });
    $('.fillter .vong_loai a').click(function () {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this)
          .next('.select')
          .slideDown();
      } else {
        $(this).removeClass('active');
        $(this)
          .next('.select')
          .slideUp();
      }
    });
  
    $('.fillter .close').click(function () {
      $('.fillter .vong_loai a').removeClass('active');
      $('.fillter .vong_loai .select').slideUp();
    });
    $('#lightgallery').hide();
    $('.image-gallery__view-more').hide();
    $('.image-gallery__loading').show();
    if ($(window).width() < 768) {
      $('.section_header .btn-register').insertAfter('.lbl_logo');
    }

  }
  
  //menuPin
  // function menuPin() {
  //   $("<div id='box_menu_before'></div>").insertBefore('.section_header');
  //   $(window).scroll(function () {
  //     var top_start = $('#box_menu_before').position().top + 20;
  //     if ($(window).scrollTop() >= top_start) {
  //       $('.section_header').addClass('sticky');
  //     } else if ($(window).scrollTop() <= top_start) {
  //       $('.section_header').removeClass('sticky');
  //     }
  //   });
  // }

  function slideSwiper() {
    //Slide Follow
    var slider_gallery = new Swiper('.bg_gallery .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: false,
      // autoplay: {
      // 	delay: 7000,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    //Slide banner
    var slider_banner = new Swiper('.section_banner.swiper-container', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 7000
      }
    });
  }

	$(function () {
		closeMenu();
		backToTop();
		scrollBar();
		magnificPopup();
    fixStickyIE();
    onClick();
    // menuPin();
	});

	$(window).on('load resize', function () {
		resizeSite()
	});
})(jQuery);

$(document).ready(function () {
  /*ACTION MENU THE LE*/
  (function () {
    // 'use strict';
    var section = document.querySelectorAll('.item_tl');
    var sections = {};
    var i = 0;
    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document
            .querySelector('.nav_cate .active')
            .setAttribute('class', ' ');
          document
            .querySelector('a[href*=' + i + ']')
            .setAttribute('class', 'active');
        }
      }
    };
  })();
  $(document).ready(function () {
    $('.menu_left_tl a[href*=#]').bind('click', function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr('href'); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body')
        .stop()
        .animate({
            scrollTop: $(target).offset().top - 120
          },
          600
        );

      return false;
    });
  });
});

$(window).load(function () {
  $('#lightgallery').fadeIn(300);
  $('.image-gallery__view-more').fadeIn(300);
  $('.image-gallery__loading').fadeOut(300);
  $('.image-gallery').masonry({
    itemSelector: '.image-gallery__item',
    gutter: $(window).width() >= 768 ? 30 : 20
  });
  $('#lightgallery').lightGallery({
    thumbnail: true,
    thumbMargin: 10,
    thumbContHeight: 120,
    subHtmlSelectorRelative: true,
    selector: '.image-gallery__item a'
  });
  $('.bg_gallery .thumb_img').on('click', function (e) {
    e.preventDefault();
    var imgID = $(this).data('img');
    console.log(imgID);
    $(`.image-gallery a[data-img='${imgID}']`).trigger('click');
  });
});