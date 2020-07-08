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
    // function scrollBar() {
    //     var scrollContainer = $(".scrollbar-inner");
    //     if (scrollContainer.length > 0) {
    //         scrollContainer.scrollbar();
    //     }
    // }
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
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        var quiz_slide = new Swiper('.slide-quiz .swiper-container', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-quiz-next',
                prevEl: '.swiper-quiz-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });


        /**SLIDE SECTION PHOTO**/
        var swiper_slide_photo_v2 = new Swiper('#js_slider_photo', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next-photo',
                prevEl: '.swiper-button-prev-photo',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // type: 'fraction',
            },
        });

        /**SLIDE SECTION SỰ KIỆN**/
        var swiper_slide_sukien = new Swiper('#js_slider_sukien', {
            slidesPerView: 2,
            spaceBetween: 28,
            navigation: {
                nextEl: '.swiper-button-next-sukien',
                prevEl: '.swiper-button-prev-sukien',
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                }
            }
        });
        /**SLIDE SECTION KIDLAB**/
        var swiper_slide_kidlab = new Swiper('#js_slider_kidlab', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next-kidlab',
                prevEl: '.swiper-button-prev-kidlab',
            },
        });
        /**SLIDE SECTION FSELL**/
        var swiper_slide_fsell = new Swiper('#js_slider_fsell', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next-fsell',
                prevEl: '.swiper-button-prev-fsell',
            },
        });
        /**SLIDE SECTION EWIKI**/
        var swiper_slide_ewiki = new Swiper('#js_slider_ewiki', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next-ewiki',
                prevEl: '.swiper-button-prev-ewiki',
            },
        });

        /**SLIDE BOX TIN EVNE**/
        var swiper_slide_evne = new Swiper('.news-evne .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.news-evne .swiper-pagination',
                clickable: true,
            },
        });

        /**SLIDE BOX TIN NGOI SAO**/
        var swiper_slide_ngoisao = new Swiper('.news-ngoisao .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.news-ngoisao .swiper-pagination',
                clickable: true,
            },
        });

        /**SLIDE BOX TIN IONE**/
        var swiper_slide_ione = new Swiper('.news-ione .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.news-ione .swiper-pagination',
                clickable: true,
            },
        });

        /**SLIDE BOX SHOP VNE**/
        var swiper_slide_taitro = new Swiper('#js_slider_taitro', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next-taitro',
                prevEl: '.swiper-button-prev-taitro',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,

                },
                768: {
                    slidesPerView: 3,

                },
            }
        });
        /**SLIDE BOX SHOP VNE**/
        var swiper_slide_shop = new Swiper('#js_slider_shop', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next-fshop',
                prevEl: '.swiper-button-prev-fshop',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,

                },
                768: {
                    slidesPerView: 3,

                },
            }
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

    function onAccordion() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            if (acc[i].classList.contains('active')) {
                acc[i].nextElementSibling.style.maxHeight = acc[i].nextElementSibling.scrollHeight + 'px';
            }
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }


    $(function () {
        backToTop();
        // scrollBar();
        onCLick();
        slideSwiper();
        magnificPopup();
        onAccordion();
        cssVars({});
    });
    window.onscroll = function () {
        myFunction()
    };
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);