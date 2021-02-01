// Create a clone of the menu, right next to original.
$(document).ready(function () {
    if ($("section").hasClass("section_nav")) {
        $('.section_nav').addClass('original').clone().insertAfter('.section_nav').addClass('nav_cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '999').removeClass('original').hide();
        scrollIntervalID = setInterval(stickIt, 0);
    }
});

function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop - 0)) {
        // scrolled past the original position; now only show the bc_cloned, sticky element.
        // Cloned element should always have same left position and width as original element.
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        //leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.nav_cloned').css('left',  + 'auto').css('top', 0).css('width', widthOrgElement).css('transition', + 'all .4s').css('opacity', 1).show();
        $('.original').css('visibility', 'hidden');
    } else {
        // not scrolled past the menu; only show the original menu.
        $('.nav_cloned').hide();
        $('.original').css('visibility', 'visible');
    }
}


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('.nav_cloned').outerHeight();

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
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav_cloned').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.nav_cloned').removeClass('nav-up').addClass('nav-down');
        }
        
        
    }
    
    lastScrollTop = st;
}


