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


        $(window).scroll(function () {
            if ($(window).scrollTop() >= 42) {
                $('#lp1_box1').addClass('pin');
            } else {
                $('#lp1_box1').removeClass('pin');
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
        var heightVideo = $('#player_playing').height() - 64;
        $('.detail_right .scrollbar-inner').height(heightVideo);
    }
    //onCLick
    function onCLick() {
        $(".all-menu").click(function () {
            $(this).toggleClass("close-menu-tablet");
            $(".main-nav").slideToggle("slow", function () {});
        });

        $('.main-nav a[href*=#]').bind('click', function () {
            $('.main-nav a').removeClass('active');
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
            $(".main-nav").slideToggle("slow", function () {});
            $(".all-menu").removeClass("close-menu-tablet");
            var target = $(this).attr('href');
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 30
            }, 600);
            return false;
        });


    }


    $(function () {
        backToTop();
        onCLick();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);