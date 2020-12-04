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

    //onCLick
    function onCLick() {
        $(".hamburger-btn").click(function () {
            $(".hamburger-btn, .main-nav").addClass("active");
            $("body").addClass("open");

        });
        $(".hamburger-btn-close").click(function () {
            $(".hamburger-btn-close, .hamburger-btn, .main-nav").removeClass("active");
            $("body").removeClass("open");
        });
        //light box
        $(".lightbox-thongbao").click(function () {
            $(".wrapper-lightbox.thongbao").addClass("active");
        });
        $(".mask-overlay, .btn-close-lightbox").click(function () {
            $(".wrapper-lightbox.thongbao").removeClass("active");
        });

        $(".lightbox-binhchon").click(function () {
            $(".wrapper-lightbox.binhchon").addClass("active");
        });
        $(".mask-overlay, .btn-close-lightbox").click(function () {
            $(".wrapper-lightbox.binhchon").removeClass("active");
        });

        $(".lightbox-dangnhap").click(function () {
            $(".wrapper-lightbox.dangnhap").addClass("active");
        });
        $(".mask-overlay, .btn-close-lightbox").click(function () {
            $(".wrapper-lightbox.dangnhap").removeClass("active");
        });


        // show detail hội đồng chuyên môn
        $(".list-hoidong").find(".item").click(function () {
            $(".list-hoidong").find('.info-detail').hide();
            $(".list-hoidong").find(".item").removeClass("active");
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
                $('html, body').animate({
                    scrollTop: $('.item.active').offset().top - 82
                }, 500);
                $(this).next('.info-detail').show();
            } else {
                $(this).removeClass("active");
                $(this).next('.info-detail').hide();
            }
            var top = $(this).position().top;
            $(this).prevAll().add($(this).nextAll()).filter(".item")
                .filter(function () {
                    return $(this).position().top == top
                });
        });
        $(".info-detail .close").click(function () {
            $(".list-hoidong").find(".item").removeClass("active");
            $(this).parent().hide();
        });

    }

    //swiper
    function swiper() {

        // Slide video
        var swiperVideo = new Swiper('.list-video .swiper-container', {
            slidesPerView: 2,
            spaceBetween: 16,
            navigation: {
                nextEl: '.swiper-video-next',
                prevEl: '.swiper-video-prev',
            },
        });

        // Slide hình ảnh
        var swiperhinhanh = new Swiper('#slide-hinhanh', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-hinhanh-next',
                prevEl: '.swiper-hinhanh-prev',
            },
            pagination: {
                el: '.swiper-pagination-hinhanh',
                clickable: true,
            },
        });

        /**SLIDE PHOTO DETAIL**/
        var swiper_slide_photo = new Swiper('#js_slider_photo_detail', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next-photo',
                prevEl: '.swiper-button-prev-photo',
            },
        });
    }

    $(function () {
        backToTop();
        onCLick();
        swiper();
    });

})(jQuery);