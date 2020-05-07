// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;


$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 0);

function hasScrolled() {
    var st = $(this).scrollTop();
    var navbarHeight = $('.m_top_banner').outerHeight() + 46;
    var sectiontopHeight = $('.section_top').outerHeight() - 44;
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#topbar').removeClass('nav-down').addClass('nav-up');
        $('.sticky_inner').removeClass('down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#topbar').removeClass('nav-up').addClass('nav-down');
            $('.sticky_inner').addClass('down');
        }
        
        
    }

    if (st > lastScrollTop && st > navbarHeight + sectiontopHeight){
        // Scroll Down
        $('body:not(.m_home_page) .main_menu_seagame').removeClass('nav-down').addClass('nav-up');
        $('.sticky_inner').removeClass('down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('body:not(.m_home_page) .main_menu_seagame').removeClass('nav-up').addClass('nav-down');
            $('.sticky_inner').addClass('down');
        }
        
        
    }
    
    lastScrollTop = st;
}

$(window).scroll(function() {
        if($(window).scrollTop() <= 230)
          {    
            $('.sticky_inner').removeClass('down');
        }
});


