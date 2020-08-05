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

    //resizeSite
    function resizeSite() {
        var heightVideo = $('#player_playing').height() - 64;
        $('.detail_right .scrollbar-inner').height(heightVideo);
    }

    //fixSticky
    function fixStickyIE() {
        var stickyElements = $('.sticky');
        if (stickyElements.length > 0) {
            Stickyfill.add(stickyElements);
        }
        $("<div id='box_menu_before'></div>").insertBefore(".section_top");
        $(window).scroll(function () {
            var top_start = $("#box_menu_before").position().top + 0;
            if ($(window).scrollTop() >= top_start) {
                $('.section_top').addClass('fixed');
            } else if ($(window).scrollTop() <= top_start) {

                $('.section_top').removeClass('fixed');
            }
        });

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

    $(function () {
        backToTop();
        fixStickyIE();
        onCLick();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);