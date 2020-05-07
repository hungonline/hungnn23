// Core Javascript Initialization
var App = (function() {
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
        $sidebar_content_overlay
          .toggleClass('mask-is-open')
          .one(
            'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'
          );
      });

      // close lateral menu clicking outside the menu itself
      $sidebar_content_overlay.on('click', function(event) {
        if (!$(event.target).is('.navbar-toggle')) {
          $sidebar_icon.removeClass('is-clicked');
          $sidebar_content_overlay.removeClass('mask-is-open');
          $('.menu-box').removeClass('is-open');
        }
      });
    });
  };

  // Handle Comments Box
  var handleCommentsBox = function() {
    $(document).ready(function($) {
      var $sidebar_trigger = $('.button-comments'),
        $bottom_trigger = $('.button-comments-bottom'),
        $sidebar_content_overlay = $('.mask-content');

      $sidebar_trigger.on('click', function(event) {
        $sidebar_trigger.toggleClass('is-clicked');
        $('.comments-box').toggleClass('is-open');
        $sidebar_content_overlay
          .toggleClass('mask-is-open')
          .one(
            'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'
          );
      });

      $bottom_trigger.on('click', function(event) {
        $('.comments-box').toggleClass('is-open');
        $sidebar_content_overlay
          .toggleClass('mask-is-open')
          .one(
            'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'
          );
      });

      // close lateral menu clicking outside the menu itself
      $sidebar_content_overlay.on('click', function(event) {
        if (!$(event.target).is('.button-comments')) {
          $sidebar_trigger.removeClass('is-clicked');
          $sidebar_content_overlay.removeClass('mask-is-open');
          $('.comments-box').removeClass('is-open');
        }
      });
    });
  };

  // Handle Box Sticky
  var handleBoxSticky = function() {
    // On loading, check to see if more than 46px, then add the class
    if ($('#topbar').offset().top > 46) {
      $('#comments-box').addClass('box-top');
      $('#menu-box').addClass('box-top');
    }

    // On scrolling, check to see if more than 46px, then add the class
    $(window).on('scroll', function() {
      if ($('#topbar').offset().top > 46 && $('#topbar').hasClass('nav-up')) {
        $('#comments-box').addClass('box-top');
        $('#menu-box').addClass('box-top');
      } else {
        $('#comments-box').removeClass('box-top');
        $('#menu-box').removeClass('box-top');
      }
    });
  };

  return {
    init: function() {
      handleSidebarMenu(); // initial setup for sidebar menu
      handleCommentsBox(); // initial setup for comments box
      handleBoxSticky(); // initial setup for box fixed
    }
  };
})();

$(document).ready(function() {
  App.init();

  // $('.page_detail .block_lichbongda .list-matchs-inner').scrollbar({
  //         "scrollx": "simple",
  //         "scrolly": "simple"
  //     });

  /**BUTTON BACK TO TOP**/
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
      $('#to_top').fadeIn();
    } else {
      $('#to_top').fadeOut();
    }
  });

  $('#to_top').click(function() {
    $('html, body').animate({ scrollTop: 0 });
    return false;
  });

  $('.list-bang li').click(function() {
    var el_ID = $(this).attr('id');
    $('.list-bang li').removeClass('active');
    $('.box_bangdiem table').removeClass('active');
    $(this).addClass('active');
    $('#' + el_ID + '-content').addClass('active');
  });

  $('.quiz_box--ver1 .content_box_category .ans_block .ans_item').click(
    function(e) {
      e.preventDefault();
      var data_result = $(this).attr('data-result');
      console.log(data_result);
      $(this)
        .parent()
        .addClass('active');
      if (data_result == 1) {
        $(this).addClass('checked_ama');
      } else {
        $(this).addClass('error_ama');
      }
    }
  );

  $('.list-matchs .owl-carousel').owlCarousel({
    loop: false,
    nav: true,
    margin: 25,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    dots: false,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.list_news--slider .owl-carousel').owlCarousel({
    loop: false,
    nav: false,
    margin: 25,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    dots: true,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $('.block_topstory_hinhanh .owl-carousel').owlCarousel({
    loop: false,
    nav: true,
    items: 1,
    margin: 25,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    dots: false,
    autoplay: false,
    responsiveClass: true
  });

  $('.scrollbar-inner').scrollbar();
  var eHeight = $('.block_topstory_hinhanh .art_item_top').height();
  $('.block_topstory_hinhanh .top_news_right .scroll-wrapper').css(
    'max-height',
    eHeight
  );
});
