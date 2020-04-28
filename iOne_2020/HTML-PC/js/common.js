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

    function viewMore() {
        $('.js-view-more').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.js-anchor').addClass('active')
        });
    }
    //scrollBar
    function slideSwiper() {
        var slide_style_slide = new Swiper('.box_style_slide .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
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


    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        slideSwiper();
        viewMore();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);