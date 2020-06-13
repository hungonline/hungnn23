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

    // function fullPage() {
    //     if($(window).width() > 1200){ 
    //         var myFullpage = new fullpage('#fullpage', {
    //             licenseKey: 'YOUR_KEY_HERE',
    //             sectionSelector: '.page',
    //             scrollOverflow: true,
    //             navigation: true
    //         }); 
    //     }  
    // }

    //backToTop
    function backToTop() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
                $('#wrap-main-nav').addClass('pin');
            } else {
                $('#to_top').fadeOut();
                $('#wrap-main-nav').removeClass('pin');
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
        var width = $(window).width();
        if (width >= 1200) {
            // var myFullpage = new fullpage('#fullpage', {
            //     sectionSelector: '.page',
            //     scrollOverflow: true,
            //     navigation: true,
            // });
        }
    }
    //onCLick
    function onCLick() {
        $('.pin_sukien .onclick').click(function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('.pin_sukien .close').click(function () {
            $('.pin_sukien .onclick').removeClass('active');
        });

        $(".all-menu-tablet").click(function () {
            $(this).toggleClass("close-menu-tablet");
        });
        $(".all-menu").click(function () {
            $(".overlay-bg").toggle();
            $(".main-nav").toggleClass("show-all-menu");
        });
        $(".overlay-bg").click(function () {
            $(this).hide();
            $(".all-menu").removeClass("close-menu-tablet");
            $(".main-nav").removeClass("show-all-menu");
        });
        $('.sub_menu').click(function () {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('.level2').slideToggle("slow", function () {});
        });

        $('.list_info').find('h3').click(function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $(this).next('.content').slideDown();
            } else {
                $(this).removeClass('active');
                $(this).next('.content').slideUp();
            }
        });
    }

    // function onHover() {
    //     $('.slide_giaithuong .swiper-slide').hover(function () {
    //         if ($(this).css('margin-top') == '60px') {
    //             $(this).css('margin-top', '0px');
    //             $(this).next('.swiper-slide').css('margin-top', '60px');
    //         }
    //         if ($(this).css('margin-top') == '0px') {
    //             $(this).css('margin-top', '60px');
    //             $(this).next('.swiper-slide').css('margin-top', '0px');
    //         }
    //     });
    // }
    //Slider
    function slideSwiper() {
        var section_banner = new Swiper('.section_banner .swiper-container', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
            },
        });
        var slide_duan = new Swiper('.slide_duan .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            // autoplay: {
            //     delay: 5000,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                }
            }
        });
        var slide_giaithuong = new Swiper('.slide_giaithuong .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                }
            }
        });
        var slide_article = new Swiper('.slide_article .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 32,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 15,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1199: {
                    spaceBetween: 20,
                }
            }
        });
        var slide_doitac = new Swiper('.slide_doitac .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 32,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

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

    function tabs() {
        $(".tab-default a").click(function (event) {
            $(".tab-default a").removeClass("active")
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-container .inf").not(tab).css("display", "none");
            $(tab).fadeIn();
        });

    }


    $(function () {
        // fullPage();
        backToTop();
        // scrollBar();
        onCLick();
        // onHover();
        slideSwiper();
        magnificPopup();
        tabs();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);

$(document).ready(function () {
    var lastId,
			topMenu = $("#top-menu"),
			topMenuHeight = topMenu.outerHeight()-200,
			// All list items
			menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
			  var item = $($(this).attr("href"));
			  if (item.length) { return item; }
			});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
			  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		  $('html, body').stop().animate({ 
			  scrollTop: offsetTop
		  }, 300);
		  e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
			 if ($(this).offset().top < fromTop)
			   return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
			   lastId = id;
			   // Set/remove active class
			   menuItems
				 .parent().removeClass("active")
				 .end().filter("[href='#"+id+"']").parent().addClass("active");
		   }                   
		});
});