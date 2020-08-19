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

  //scrollBar
  function scrollBar() {
    var scrollContainer = $(".scrollbar-inner");
    if (scrollContainer.length > 0) {
      scrollContainer.scrollbar();
    }
  }
  //resizeSite
  function resizeSite() {
    var heightVideo = $('#player_playing').height() - 64;
    $('.detail_right .scrollbar-inner').height(heightVideo);

    $('.left-nav__content').css({
      'max-height': ($(window).height() - 48 - 48 - 16) + 'px'
    })
  }
  //onCLick
  function onCLick() {
    $('.search-btn').click(function (e) {
      e.preventDefault();
      if (!$(this).hasClass('is-clicked')) {
        $(this).addClass('is-clicked');
        $('.search-wrap').slideDown(300);
        $('.search-wrap input').focus();
      } else {
        $(this).removeClass('is-clicked');
        $('.search-wrap').slideUp(200);
      }
    });

    $('.dark_night').click(function () {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('body').addClass('dark_mode');
      } else {
        $(this).removeClass('active');
        $('body').removeClass('dark_mode');
      }
    });

    $(".btn_guicauhoi").click(function (e) {
      e.preventDefault();
      $("#header_sticky").removeClass("show_sticky");
      $("body").addClass("show");
    });
    $(".close_slide_left").click(function (e) {
      e.preventDefault();
      $("body").removeClass("show")
    });

    // Menu left
    const humbergerButtons = document.querySelectorAll('.humberger-btn');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    const headerTop = document.querySelector('.header-top');
    const leftNav = document.querySelector('.left-nav');
    for (const el of humbergerButtons) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = headerTop.getBoundingClientRect().top + window.pageYOffset;
        if (!this.classList.contains('active')) {
          headerTop.classList.add('top');
          if (!this.closest('.show_sticky') && !this.closest('.sticky--active')) {
            window.scrollTo ({
              top: offset
            });
          }
          
          this.classList.add("active");
          humbergerButtons.forEach(e => {
            if (!e.classList.contains('active')) {
              e.classList.add('active');
            }
          });
          leftNav.classList.add('active', 'fadeInDown');
          body.classList.add('fixed');
          overlay.classList.add('active');
  
        } else {
          headerTop.classList.remove('top')
          humbergerButtons.forEach(e => {
              e.classList.remove('active');
          });
          leftNav.classList.remove('active', 'fadeInDown');
          body.classList.remove('fixed');
          this.classList.remove("active");
          overlay.classList.remove('active');
        }
      });
    }

    overlay.addEventListener('click', (e) => {
      e.preventDefault();
      headerTop.classList.remove('top');
      humbergerButtons.forEach((e) => {
        e.classList.remove('active');
      });
      leftNav.classList.remove('active');
      body.classList.remove('fixed');
      overlay.classList.remove('active');
    })
    
     // End: Menu left =======================
  }

  function viewMore() {
    $('.js-view-more').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.js-anchor').addClass('active')
    });
  }

  function showHiddenBox() {
    $('.js-show').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.js-anchor').find('.js-hidden').fadeIn(300);
    });

    $('.btn-close').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.js-anchor').find('.js-hidden').fadeOut(300);
    });

    $(document).mouseup(function (e) {
      var hiddenBox = $('.js-hidden');
      if (!hiddenBox.is(e.target) && !hiddenBox.find('*').is(e.target)) {
        hiddenBox.fadeOut(300);
      }
    });
  }
  //scrollBar
  function slideSwiper() {
    var slide_style_slide = new Swiper('.box_style_slide .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      // autoplay: {
      //   delay: 5000,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    });

    /**SLIDE SECTION PHOTO**/
    var swiper_slide_photo = new Swiper('#js_slider_photo', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next-photo',
        prevEl: '.swiper-button-prev-photo',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    /**SLIDE SECTION QUIZ**/
    var swiper_slide_quiz = new Swiper('.quiz-new-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }

  function stickyDetector() {
    const stickyElements = document.querySelectorAll('.sticky');

    for (const el of stickyElements) {
      el.insertAdjacentHTML('beforebegin', "<div class='sticky-anchor clearfix'></div>");
    }

    var observer = new IntersectionObserver(function (entries) {
      const stickyEl = document.querySelector(".sticky");
      if (entries[0].intersectionRatio === 0) {
        stickyEl.classList.add("sticky--active");
      } else if (entries[0].intersectionRatio === 1) {
        stickyEl.classList.remove("sticky--active");
      }
    }, {
      threshold: [0, 1]
    });
    observer.observe(document.querySelector(".sticky-anchor"));

  }

  function headerSticky() {
    const sPoint = document.querySelector('.header-top').getBoundingClientRect().top + window.pageYOffset || 460;
    const stickyHeader = document.getElementById('header_sticky');
    if (stickyHeader !== null) {
      window.addEventListener('scroll', () => {
        if(window.scrollY > sPoint + 50) {
          stickyHeader.classList.add('show_sticky');
        } else {
          stickyHeader.classList.remove('show_sticky');
        }
      });
    }
  }

  $(document).on('ready', function () {
    backToTop();
    scrollBar();
    onCLick();
    slideSwiper();
    viewMore();
    showHiddenBox();
    stickyDetector();
    headerSticky();
  });
  $(window).on('load resize', function () {
    resizeSite();
  });
})(jQuery);