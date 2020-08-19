// Core Javascript Initialization
var App = function() {
    'use strict';
    // Handle Sidebar Menu
    var handleSidebarMenu = function() {   
        $(document).ready(function($) {         
            var $sidebar_trigger = $('.navbar-toggle'),
                $sidebar_icon = $('.toggle-icon'),
                $sidebar_content_overlay = $('.mask-content');
            
            $sidebar_trigger.on('click', function(event) {
                $sidebar_icon.toggleClass('is-clicked');
                $('.menu-box').toggleClass('is-open');
                $sidebar_content_overlay.toggleClass('mask-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
            });
            
            // close lateral menu clicking outside the menu itself
            $sidebar_content_overlay.on('click', function(event){
                if( !$(event.target).is('.navbar-toggle') ) {
                    $sidebar_icon.removeClass('is-clicked');
                    $sidebar_content_overlay.removeClass('mask-is-open');
                    $('.menu-box').removeClass('is-open');
                }
            });
        });
    }
    // Handle Box Sticky
    var handleBoxSticky = function() {
        // On loading, check to see if more than 46px, then add the class
        if ($('#topbar').offset().top > 46) {
            $('#comments-box').addClass('box-top');
            $('#menu-box').addClass('box-top');
        }

        // On scrolling, check to see if more than 46px, then add the class
        $(window).on('scroll', function() {
            if ($('#topbar').offset().top > 46 && $('#topbar').hasClass('nav-up') ) {
                $('#comments-box').addClass('box-top');
                $('#menu-box').addClass('box-top');
            } else {
                $('#comments-box').removeClass('box-top');
                $('#menu-box').removeClass('box-top');
            }
        });
    }

    return {
        init: function() {
            handleSidebarMenu(); // initial setup for sidebar menu
            handleBoxSticky(); // initial setup for box fixed
            
        }
    }
}();

$(document).ready(function() {
	
    $('.footer').on('click','h3',function(){
        var _this = $(this),
            currentChapter = $('#nytmm').attr('class'),
            currentPage = parseInt(currentChapter.split('-')[currentChapter.split('-').length -1]);
        if(_this.hasClass('next')) currentPage++; else currentPage--;
        $('#nytmm').removeAttr('class').addClass('nytmm-chapter-' + currentPage);

        $('body,html').animate({
            scrollTop: 0
        }, 0);            
    });     
    $('.nytmm-menu').on('click','a',function(){        
        var currentPage = parseInt($(this).data('section'));
        $('#nytmm').removeAttr('class').addClass('nytmm-chapter-' + currentPage);

        $('body,html').animate({
            scrollTop: 0
        }, 400);               
    });      

    $('.block-right').on('click','.comment',function(){        
        var currentPage = $('.section_comment').attr('data-label');
        $('body,html').animate({
            scrollTop: 0
        }, 0);  
        $('#nytmm').removeAttr('class').addClass('nytmm-chapter-' + currentPage);       
    });

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
           $('.footer').addClass('fixed');
       }
       else{
           $('.footer').removeClass('fixed');
       }
    });
	App.init();
});




