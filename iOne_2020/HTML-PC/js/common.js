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
    }
    //onCLick
    function onCLick() {
        $('.search-btn').click(function () {
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
                $('.search-wrap').fadeIn();
                $('.search-wrap input').focus();
            } else {
                $(this).removeClass('is-clicked');
                $('.search-wrap').fadeOut();
            }
        });
        $(".all-menu-tablet").click(function () {
            $(this).toggleClass("close-menu-tablet");
        });
        $(".all-menu").click(function () {
            $(".main-nav").toggleClass("show-all-menu");
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
    }
    //scrollBar
    function slideSwiper() {
        var slide_style_slide = new Swiper('.box_style_slide .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 15,
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
            // breakpoints: {
            //   1190: {
            //     slidesPerView: 3,
            //   },
            //   768: {
            //     slidesPerView: 2,
            //   }
            // }
        });

        /**SLIDE SECTION PHOTO**/
        var swiper_slide_photo = new Swiper('#js_slider_photo', {
            slidesPerView: 'auto',
            spaceBetween: 0,
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

    }
    var header = document.getElementById("wrap-main-nav");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("pin");
        } else {
            header.classList.remove("pin");
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
        $('.magnific_popup .magnific_thumb').magnificPopup({
            type: 'image',
            midClick: true,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: false,
            }
        });

    }


    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        slideSwiper();
        magnificPopup();
    });
    window.onscroll = function () {
        myFunction()
    };
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);