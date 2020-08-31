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
        $(".search-btn").click(function () {
            if (!$(this).hasClass("is-clicked")) {
                $(this).addClass("is-clicked");
                $('.search-field').fadeIn();
            } else {
                $(this).removeClass("is-clicked");
                $('.search-field').fadeOut();
            }
        });

        $('.tab-nav .nav-item').click(function () {
            var index = $('.tab-nav .nav-item').index(this);
            $('.tab-nav .nav-item').removeClass('active');
            $('.tab-content .tab-item').removeClass('active');
            $(this).addClass('active');
            $('.tab-content .tab-item').eq(index).addClass('active');
        });

        if ($('.box_gallery a').length > 0) {
            $('.box_gallery a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }

        $('.timkiem_nangcao a').click(function () {
            var content_id = $("#show_timkiemdv");
            $(content_id).toggleClass("show");

            if (!content_id.hasClass('show')) {
                $('.timkiem_nangcao a').html('Bộ lọc<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#small-triangle-down"/></svg>');
            } else {
                $('.timkiem_nangcao a').html('Đóng<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#small-triangle-up"/></svg>');
            }


        });

        /*OPEN & CLOSE MAIN MENU*/
        $('.btn_control_menu').click(function () {
            $('body').addClass('show_main_menu');
            $('#auto_footer_menu').css('display', 'block');
            $('#mn_private').css('display', 'none');
        });

        $('.close_main_menu, .mask-content').click(function () {
            $('body').removeClass('show_main_menu');
        });
        $('.hamber_icon_video').click(function () {
            $('body').addClass('show_main_menu');
            $('#auto_footer_menu').css('display', 'none');
            $('#mn_private').css('display', 'block');
        });
        $('.block_search .input_form').click(function () {
            $('.block_search').addClass('focus');
        });
        $('.block_search .btn_reset').click(function () {
            $('.block_search').removeClass('focus');
        });
        /*END OPEN & CLOSE MAIN MENU*/

        $('.block_share.sticky_box .icon_commend').click(function () {
            var el_ID = $(this).attr('href');
            if (el_ID.length) {
                $('html, body').stop().animate({
                    'scrollTop': $(el_ID).offset().top - 50
                }, 500, 'swing', function () {});
            }
        });
    }

    //Slide
    function slideSwiper() {

        var swiperTieudiem = new Swiper('#slide-tieudiem', {
            slidesPerView: 3,
            spaceBetween: 28,
            navigation: {
                nextEl: '.swiper-tieudiem-next',
                prevEl: '.swiper-tieudiem-prev',
            },
        });
        var swiperTieudung = new Swiper('#slide-tieudung', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-tieudung-next',
                prevEl: '.swiper-tieudung-prev',
            },
        });
        var swiperTieudung = new Swiper('#slide-wedding', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-wedding-next',
                prevEl: '.swiper-wedding-prev',
            },
        });
        var swiperGift = new Swiper('#slide-gift', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-gift-next',
                prevEl: '.swiper-gift-prev',
            },
        });
        var swiperFsell = new Swiper('#slide-fsell', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-fsell-next',
                prevEl: '.swiper-fsell-prev',
            },
        });
        var swipershopvne = new Swiper('#slide-shopvne', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-shopvne-next',
                prevEl: '.swiper-shopvne-prev',
            },
        });
        var swiperstore = new Swiper('#slide-store', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-store-next',
                prevEl: '.swiper-store-prev',
            },
        });
        var swipermolting = new Swiper('#slide-molting', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-molting-next',
                prevEl: '.swiper-molting-prev',
            },
        });
        var swipermolting = new Swiper('#slide-store2', {
            slidesPerView: 5,
            spaceBetween: 28,
            navigation: {
                nextEl: '.swiper-store2-next',
                prevEl: '.swiper-store2-prev',
            },
            breakpoints: {
                700: {
                    slidesPerView: 4,
                },
                1100: {
                    slidesPerView: 5,
                },
            }
        });
        var swiperproduct = new Swiper('#slide-product .swiper-container', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-product-next',
                prevEl: '.swiper-product-prev',
            },
        });

        var swiper_wedding_service = new Swiper('.box_service .swiper-container', {
            slidesPerView: 8,
            breakpoints: {
                740: {
                    slidesPerView: 5
                },
                992: {
                    slidesPerView: 7
                },
                1100: {
                    slidesPerView: 8
                },
            }
        });
        var swiper_wedding = new Swiper('.box_slide_service .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-service-next',
                prevEl: '.swiper-service-prev',
            },
            breakpoints: {
                740: {
                    slidesPerView: 2
                },
                1100: {
                    slidesPerView: 3
                },
            }
        });

    }
    //magnificPopup
    function magnificPopup() {
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
            mainClass: 'mfp-with-zoom',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            removalDelay: 300,
        });
    }


    //Lightgallery
    function lightgallery() {
        var box_lightGallery = document.getElementById('lightgallery');
        if (typeof (box_lightGallery) != 'undefined' && box_lightGallery != null) {


            lightGallery(box_lightGallery, {
                selector: '.item',
                thumbMargin: 20,
                thumbContHeight: 120,
                subHtmlSelectorRelative: true,
                thumbnail: true
            });

            box_lightGallery.addEventListener('onAfterOpen', function (e) {
                $(".lg-sub-html").insertBefore('.lg-inner');
                $(".lg-sub-html").wrap("<div class='lg-sub-html_wrapper'></div>");
                $(".lg-sub-html").perfectScrollbar();
            }, false);

        }
    }

    // Sticky Social
    function myFunction() {
        /**MENU STICKY**/
        var top_start = $("#breadcrumb, section.featured").position().top - 10;
        if ($(window).scrollTop() >= top_start) {
            $('#header_sticky').addClass('show_sticky');
        } else if ($(window).scrollTop() <= top_start) {
            $('#header_sticky').removeClass('show_sticky');
        }


        // sticky box comment
        if ($('.box_300 #box_comment_vne').length) {
            console.log($('.box_300')[0].getBoundingClientRect().top);
            if ($('.box_300')[0].getBoundingClientRect().top < -250) {
                $('.box_300 #box_comment_vne').addClass('fixed');
                var el_Height = $('.box_300 #box_comment_vne').outerHeight(true);
                $('.box_300 #box_tag').css({
                    'position': 'fixed',
                    'width': '300px',
                    'top': el_Height + 50,
                    'right': 'calc((100% - 1100px)/2)'
                });
                if ($('.main_content_detail').offset().top + $('.main_content_detail').outerHeight() < $(window).scrollTop() + $(window).height()) {
                    $('.box_300 #box_comment_vne').removeClass('fixed');
                }
            } else {
                $('.box_300 #box_comment_vne').removeClass('fixed');

            }
        }
    }

    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        slideSwiper();
        lightgallery();
        magnificPopup();
    });

    window.onscroll = function () {
        myFunction()
    };
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);