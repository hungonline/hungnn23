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

        // Hạng mục đoạt giải 2019
        $(".section-doatgiai .listmn-doatgiai li").click(function () {
            var _self = $(this);
            if (!$(this).hasClass("active")) {
                $(".section-doatgiai .listmn-doatgiai li").removeClass("active");
                $(this).addClass("active");
                $(".section-doatgiai .list-singer .item").removeClass("active");
                $(".section-doatgiai .list-singer .item").each(function (index, el) {
                    if (_self.data("id") == index) {
                        $(el).addClass("active");
                    }
                });
            }
        });

        // Hội đồng chuyên môn
        var contentHdcm = '';
        $('.section-hoidong .item').click(function (event) {
            if (!$(this).hasClass("active")) {
                $('.section-hoidong .item').removeClass("active");
                $(this).addClass("active");
                contentHdcm = $(this).find(".description").html();
                if ($(this).hasClass("row_1")) {
                    $("#info_detail_1").find(".descripion").html(contentHdcm);
                    $("#info_detail_2").slideUp();
                    $("#info_detail_3").slideUp();
                    $("#info_detail_1").slideDown();
                } else if ($(this).hasClass("row_2")) {
                    $("#info_detail_2").find(".descripion").html(contentHdcm);
                    $("#info_detail_1").slideUp();
                    $("#info_detail_3").slideUp();
                    $("#info_detail_2").slideDown();
                } else {
                    $("#info_detail_3").find(".descripion").html(contentHdcm);
                    $("#info_detail_1").slideUp();
                    $("#info_detail_2").slideUp();
                    $("#info_detail_3").slideDown();
                }
            } else {
                $('.section-hoidong .item').removeClass("active");
            }
        });

        $('.section-hoidong .close').click(function (event) {
            $(this).parent(".info-detail").slideUp();
        });


    }

    //swiper
    function swiper() {
        //Slide âm nhạc
        var menuamnhac = ['Nam ca sĩ', 'Nữ ca sĩ']
        var swiperamnhac = new Swiper('#swiper-amnhac', {
            navigation: {
                nextEl: '.swiper-amnhac-next',
                prevEl: '.swiper-amnhac-prev',
            },
            pagination: {
                el: '.swiper-pagination-amnhac',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menuamnhac[index]) + '</span>';
                },
            },
        });
        //Slide phim ảnh
        var menuphimanh = ['Nam diễn viên', 'Nữ diễn viên']
        var swiperphimanh = new Swiper('#swiper-phimanh', {
            navigation: {
                nextEl: '.swiper-phimanh-next',
                prevEl: '.swiper-phimanh-prev',
            },
            pagination: {
                el: '.swiper-pagination-phimanh',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menuphimanh[index]) + '</span>';
                },
            },
        });

        //Slide doat giải 2019
        var menudoatgiai = ['Mỹ nhân', 'Thời trang', 'Phim ảnh', 'Âm nhạc', 'Phong cách']
        var swiperdoatgiai = new Swiper('#swiper-doatgiai', {
            navigation: {
                nextEl: '.swiper-doatgiai-next',
                prevEl: '.swiper-doatgiai-prev',
            },
            pagination: {
                el: '.swiper-pagination-doatgiai',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menudoatgiai[index]) + '</span>';
                },
            },
        });


        // Slide video
        var swiperVideo = new Swiper('.list-video .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-video-next',
                prevEl: '.swiper-video-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                },
            }
        });

        // Slide hình ảnh
        var swiperhinhanh = new Swiper('#slide-hinhanh', {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-hinhanh-next',
                prevEl: '.swiper-hinhanh-prev',
            },
            pagination: {
                el: '.swiper-pagination-hinhanh',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
            }
        });


        //Slide âm nhạc nam folder
        var swiperamnhacnamfolder = new Swiper('#swiper-amnhac-nam-folder', {
            navigation: {
                nextEl: '.swiper-amnhac-nam-folder-next',
                prevEl: '.swiper-amnhac-nam-folder-prev',
            },
            pagination: false,
        });

        //Slide âm nhạc nũ folder
        var swiperamnhacnufolder = new Swiper('#swiper-amnhac-nu-folder', {
            navigation: {
                nextEl: '.swiper-amnhac-nu-folder-next',
                prevEl: '.swiper-amnhac-nu-folder-prev',
            },
            pagination: false,
        });

        //Slide phim anh nam folder
        var swiperphimanhnamfolder = new Swiper('#swiper-phimanh-nam-folder', {
            navigation: {
                nextEl: '.swiper-phimanh-nam-folder-next',
                prevEl: '.swiper-phimanh-nam-folder-prev',
            },
            pagination: false,
        });

        //Slide phim anh nũ folder
        var swiperphimanhnufolder = new Swiper('#swiper-phimanh-nu-folder', {
            navigation: {
                nextEl: '.swiper-phimanh-nu-folder-next',
                prevEl: '.swiper-phimanh-nu-folder-prev',
            },
            pagination: false,
        });

        //Slide my nhan folder
        var swipermynhanfolder = new Swiper('#swiper-mynhan-folder', {
            navigation: {
                nextEl: '.swiper-mynhan-folder-next',
                prevEl: '.swiper-mynhan-folder-prev',
            },
            pagination: false,
        });

        //Slide truyen cam hung folder
        var swipercamhungfolder = new Swiper('#swiper-camhung-folder', {
            navigation: {
                nextEl: '.swiper-camhung-folder-next',
                prevEl: '.swiper-camhung-folder-prev',
            },
            pagination: false,
        });

        //Slide cong hien folder
        var swiperconghienfolder = new Swiper('#swiper-conghien-folder', {
            /*navigation: {
                nextEl: '.swiper-camhung-folder-next',
                prevEl: '.swiper-camhung-folder-prev',
            },*/
            navigation: false,
            pagination: false,
        });


        /**SLIDE PHOTO DETAIL**/
        var swiper_slide_photo = new Swiper('#js_slider_photo_detail', {
            slidesPerView: 'auto',
            spaceBetween: 85,
            loop: true,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next-photo',
                prevEl: '.swiper-button-prev-photo',
            },
            breakpoints: {
                1366: {
                    
                    spaceBetween: 60,
                },
                1024: {
                    spaceBetween: 40,
                },
                768: {
                    spaceBetween: 30,
                },
            }
        });
    }

    function gallery() {
        /*lightGallery*/
        var box_lightGallery = document.getElementById('lightgallery');
        if (typeof (box_lightGallery) != 'undefined' && box_lightGallery != null) {
            lightGallery(box_lightGallery, {
                selector: '.item',
                thumbMargin: 20,
                thumbContHeight: 120,
                subHtmlSelectorRelative: true,
                thumbnail: true,
                download: false,
                googlePlus: false,
                pinterest: false,
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
    }

    function myFunction() {
        /*Pin menu inpage*/
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 30) {
                $('.section-menu-inpage').addClass('sticky');
            } else {
                $('.section-menu-inpage').removeClass('sticky');
            }
        });
    }

    $(function () {
        onCLick();
        swiper();
        gallery();

    });
    window.onscroll = function () {
        myFunction()
    };
})(jQuery);