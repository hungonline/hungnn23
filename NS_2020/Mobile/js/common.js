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
        $('.search-btn').click(function (e) {
            e.preventDefault();
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
                $('.search-wrap').slideDown(300);
                $('.search-wrap input').focus();
            } else {
                $(this).removeClass('is-clicked');
                $('.search-wrap').slideUp(200);
            }
        });

        // Menu left
        const humbergerButtons = document.querySelectorAll('.humberger-btn');
        const overlay = document.querySelector('.overlay');
        const body = document.querySelector('body');
        const headerTop = document.querySelector('.header-top');
        const leftNav = document.querySelector('.left-nav');
        for (const el of humbergerButtons) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                const offset = headerTop.getBoundingClientRect().top + window.pageYOffset;
                if (!this.classList.contains('active')) {
                    headerTop.classList.add('top');
                    if (!this.closest('.show_sticky') && !this.closest('.sticky--active')) {
                        window.scrollTo({
                            top: offset
                        });
                    }

                    this.classList.add("active");
                    humbergerButtons.forEach(e => {
                        if (!e.classList.contains('active')) {
                            e.classList.add('active');
                        }
                    });
                    leftNav.classList.add('active', 'fadeInDown');
                    body.classList.add('fixed');
                    overlay.classList.add('active');

                } else {
                    headerTop.classList.remove('top')
                    humbergerButtons.forEach(e => {
                        e.classList.remove('active');
                    });
                    leftNav.classList.remove('active', 'fadeInDown');
                    body.classList.remove('fixed');
                    this.classList.remove("active");
                    overlay.classList.remove('active');
                }
            });
        }

        overlay.addEventListener('click', (e) => {
            e.preventDefault();
            headerTop.classList.remove('top');
            humbergerButtons.forEach((e) => {
                e.classList.remove('active');
            });
            leftNav.classList.remove('active');
            body.classList.remove('fixed');
            overlay.classList.remove('active');
        })

        // End: Menu left =======================

        $('.block_search .input_form').click(function () {
            $('.block_search').addClass('focus');
        });
        $('.block_search .btn_reset').click(function () {
            $('.block_search').removeClass('focus');
        });

        $('.smartbanner-close').click(function () {
            $('.smartbanner').addClass('up');
        });
        $('.ns_app_pin .close').click(function () {
            $('.ns_app_pin').addClass('up');
        });

    }


    function stickyDetector() {
        const stickyElements = document.querySelectorAll('.sticky');

        for (const el of stickyElements) {
            el.insertAdjacentHTML('beforebegin', "<div class='sticky-anchor clearfix'></div>");
        }

        var observer = new IntersectionObserver(function (entries) {
            const stickyEl = document.querySelector(".sticky");
            if (entries[0].intersectionRatio === 0) {
                stickyEl.classList.add("sticky--active");
            } else if (entries[0].intersectionRatio === 1) {
                stickyEl.classList.remove("sticky--active");
            }
        }, {
            threshold: [0, 1]
        });
        observer.observe(document.querySelector(".sticky-anchor"));

    }

    function headerSticky() {
        const sPoint = document.querySelector('.header-top').getBoundingClientRect().top + window.pageYOffset || 460;
        const stickyHeader = document.getElementById('header_sticky');
        if (stickyHeader !== null) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > sPoint + 50) {
                    stickyHeader.classList.add('show_sticky');
                } else {
                    stickyHeader.classList.remove('show_sticky');
                }
            });
        }
    }

    //Slide
    function swiper() {
        var swiperTieuDiem = new Swiper('#box_tieudiem', {
            spaceBetween: 15,
            loop: true,
            // autoplay: {
            //     delay: 6000,
            //     disableOnInteraction: false,
            // },
        });
        var swiperQuoTe = new Swiper('#box_quote', {
            spaceBetween: 12,
            centeredSlides: true,
            loop: true,
        });

        var swiperSlide = new Swiper('.box_slide_home .swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }


    $(function () {
        backToTop();
        onCLick();
        stickyDetector();
        headerSticky();
        swiper();
    });

    window.onscroll = function () {
        // myFunction()
    };
})(jQuery);