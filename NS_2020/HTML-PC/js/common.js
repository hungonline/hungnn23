$(document).ready(function () {

    /*SLIDE BOX STORE*/
    var owl_slide_store = $('.box_list_store .owl-carousel');
    owl_slide_store.owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 7000,
        margin: 28,
        items: 5,
        navElement: 'div',
        nav: true,
        dots: false,
        responsive: {
            700: {
                items: 4
            },
            1100: {
                items: 5
            },
        }
    })
    $(".box_list_store .owl-prev").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#tail-left"/></svg>');
    $(".box_list_store .owl-next").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#tail-right"/></svg>');

    /*END SLIDE BOX STORE*/

    /*SLIDE BOX STORE*/
    var box_slide_service = $('.box_slide_service .owl-carousel');
    box_slide_service.owlCarousel({
        // loop: true,
        autoplay: false,
        autoplayTimeout: 7000,
        margin: 20,
        items: 3,
        autoWidth: true,
        // stagePadding: 70,
        nav: true,
        dots: false,
        navElement: 'div',
        responsive: {
            700: {
                items: 2
            },
            1100: {
                items: 3
            },
        }
    })
    $(".box_slide_service .owl-prev").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#small-left"/></svg>');
    $(".box_slide_service .owl-next").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#small-right"/></svg>');



    /*END SLIDE BOX STORE*/

    /*SLIDE BOX TIÊU ĐIỂM*/
    var owl_slide_hot = $('.box_tieudiem .owl-carousel');
    owl_slide_hot.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        margin: 28,
        items: 3,
        nav: true,
        dots: false,
        navElement: 'div',
        responsive: {
            700: {
                items: 2
            },
            1100: {
                items: 3
            },
        }
    })
    $(".box_tieudiem .owl-prev").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#tail-left"/></svg>');
    $(".box_tieudiem .owl-next").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#tail-right"/></svg>');
    /*END SLIDE BOX TIÊU ĐIỂM*/

    /*SLIDE BOX THƯƠNG MẠI*/
    var owl_slide_tm = $('.box_thuongmai .owl-carousel');
    owl_slide_tm.owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 7000,
        items: 1,
        nav: true,
        navElement: 'div',
        dots: false
    })
    $(".box_thuongmai .owl-prev").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#tail-left"/></svg>');
    $(".box_thuongmai .owl-next").html('<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#tail-right"/></svg>');
    /*END SLIDE BOX THƯƠNG MẠI*/

    /*SLIDE BOX SERVICE */
    var owl_slide_service = $('.box_service .owl-carousel');
    owl_slide_service.owlCarousel({
        loop: false,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 7000,
        items: 8,
        nav: false,
        dots: false,
        navElement: 'div',
        responsive: {
            740: {
                items: 5
            },
            992: {
                items: 7
            },
            1100: {
                items: 8
            },
        }
    })
    /*END SLIDE BOX SERVICE */

    /**MENU STICKY**/
    $(window).scroll(function () {
        var top_start = $("#breadcrumb, section.featured").position().top - 10;
        if ($(window).scrollTop() >= top_start) {
            $('#header_sticky').addClass('show_sticky');
        } else if ($(window).scrollTop() <= top_start) {
            $('#header_sticky').removeClass('show_sticky');
        }
    });

    $(".search-btn").click(function () {
        if (!$(this).hasClass("is-clicked")) {
            $(this).addClass("is-clicked");
            $('.search-field').fadeIn();
        } else {
            $(this).removeClass("is-clicked");
            $('.search-field').fadeOut();
        }
    });

    /**END MENU STICKY**/
    /**BUTTON BACK TO TOP**/
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('#to_top').fadeIn();
        } else {
            $('#to_top').fadeOut();
        }
    });

    $("#to_top,.on_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        });
        return false;
    });
    /**END BUTTON BACK TO TOP**/
    if ($('.scrollbar-inner').length) {
        $('.scrollbar-inner').scrollbar();
    }



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



    $('.block_thumb_slide_show').on('click', function () {
        var data_img = $(this).attr('data-img');
        if (data_img) {
            $("#lightgallery a[data-img='" + data_img + "']")[0].click();
        }

    });


    // Tabs
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
        // $(this).html('Bộ lọc<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#small-triangle-up"/></svg>');
        var content_id = $("#show_timkiemdv");
        $(content_id).toggleClass("show");

        if (!content_id.hasClass('show')) {
            $('.timkiem_nangcao a').html('Bộ lọc<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#small-triangle-down"/></svg>');
        } else {
            $('.timkiem_nangcao a').html('Đóng<svg class="icon-ns not-grad"><use xlink:href="images/icons.svg#small-triangle-up"/></svg>');
        }


    });

    if ($('.popup-with-form').length > 0) {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    }

    // Sticky Social


    $(window).scroll(function () {
        // sticky left social
        if ($('.block_share_sticky').length) {
            if ($('.block_share_sticky')[0].getBoundingClientRect().top < 100) {
                $('.block_share.sticky_box').addClass('fixed');
                if ($('.topDetail-bottom .block_share').offset().top + $('.topDetail-bottom .block_share').outerHeight() < $(window).scrollTop() + $(window).height()) {
                    $('.block_share.sticky_box').removeClass('fixed');
                }
            } else {
                $('.block_share.sticky_box').removeClass('fixed');
            }
        }


        // sticky box comment
        // console.log($('.main_content_detail')[0].getBoundingClientRect().bottom);
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

    });

    $('.block_share.sticky_box .icon_commend').click(function () {
        var el_ID = $(this).attr('href');
        if (el_ID.length) {
            $('html, body').stop().animate({
                'scrollTop': $(el_ID).offset().top - 50
            }, 500, 'swing', function () {});
        }

    });
});


$(document).ready(function () {
    /*OPEN & CLOSE MAIN MENU*/
    $(function () {
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
    })
    /*END OPEN & CLOSE MAIN MENU*/
    $('.block_search .input_form').click(function () {
        $('.block_search').addClass('focus');
    });
    $('.block_search .btn_reset').click(function () {
        $('.block_search').removeClass('focus');
    });
});