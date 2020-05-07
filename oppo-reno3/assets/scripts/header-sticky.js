// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('#topbar').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 0);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#topbar').removeClass('nav-down').addClass('nav-up');
        $('.sticky_inner').removeClass('down');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#topbar').removeClass('nav-up').addClass('nav-down');
            $('.sticky_inner').addClass('down');
        }


    }

    lastScrollTop = st;
}

var fixmeTop = $('.section_main').offset().top + 50;
$(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.section_top').addClass('fixed');
    } else {
        $('.section_top').removeClass('fixed');
    }
    if ($(window).scrollTop() <= 230) {
        $('.sticky_inner').removeClass('down');
    }
});