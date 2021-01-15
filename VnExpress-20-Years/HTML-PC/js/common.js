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
    //onCLick
    function onCLick() {
        $('#vibeji-ham').on('click', function () {
            $(this).toggleClass('open');
            $('.topnav-mobile').toggleClass('open');
            $('.overlay').toggleClass('active');
        });
        $('.overlay').on('click', function () {
            $(this).toggleClass('active');
            $('.topnav-mobile, #vibeji-ham').removeClass('open');
        });
        $(".tab-default a").click(function (event) {
            $(".tab-default a").removeClass("active");
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-content >div").not(tab).css("display", "none");
            $(tab).fadeIn();
            $('.grid').masonry({
                itemSelector: '.grid-item'
            });
        });

    }
    //scrollBar
    function slideSwiper() {
        var swiperframe1 = new Swiper('.box-img .swiper-container', {
            speed: 1000,
            autoplay: {
                delay: 7000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-frame1-next',
                prevEl: '.swiper-frame1-prev',
            },
            breakpoints: {
                576: {
                    pagination: {
                        type: 'bullets',
                    },
                }
            }
        });
        var swiperframe3 = new Swiper('.section-frame3 .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 55,
            speed: 1000,
            autoplay: {
                delay: 2000,
            },
            navigation: {
                nextEl: '.swiper-frame3-next',
                prevEl: '.swiper-frame3-prev',
            },
            breakpoints: {
                414: {
                    slidesPerView: 1,
                },
                900: {
                    slidesPerView: 2,
                }
            }
        });
        var swiperframe5 = new Swiper('.slide-img .swiper-container', {
            navigation: {
                nextEl: '.swiper-frame5-next',
                prevEl: '.swiper-frame5-prev',
            },
        });
        var swiperslidemobile = new Swiper('.box-slide-mobile .swiper-container', {
            slidesPerView: 2,
            spaceBetween: 40,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                414: {
                    slidesPerView: 1,
                }
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
    $(function () {
        backToTop();
        magnificPopup();
        onCLick();
        slideSwiper();
        // cssVars({});
    });
    window.onscroll = function () {
        myFunction()
    };
})(jQuery);