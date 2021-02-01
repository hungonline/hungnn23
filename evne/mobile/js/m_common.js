$(document).ready(function (){

/*

var owl_slide_news = $('.list_slide_news.owl-carousel');
	owl_slide_news.owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 7000,
			margin: 10,
			items: 2,
			pagination : false,
			responsive: {
					0: {
							items: 2
					},
					600: {
							items: 3
					},
			}
	})

	$('.next_slider').click(function() {
	owl_slide_news.trigger('next.owl.carousel');
	})

	$('.prev_slider').click(function() {

			owl_slide_news.trigger('prev.owl.carousel');
	});

    */
	/*SLIDE BOX TỶ GIÁ HOME*/
var owl_slide_tygia = $('#box_tygia .owl-carousel');
	owl_slide_tygia.owlCarousel({
			loop: true,
			autoplay: false,
			autoplayTimeout: 7000,
			margin: 10,
			items: 2,
            stagePadding: 30,
			pagination : false,
            responsive: {
							0: {
									items: 2
							},
							480: {
									items: 2
							},
							600: {
									items: 3
							},
					}
	})

	/*$('#box_tygia .btn_next').click(function() {
	owl_slide_tygia.trigger('next.owl.carousel');
	})

	$('#box_tygia .btn_prev').click(function() {

			owl_slide_tygia.trigger('prev.owl.carousel');
	});*/

	/*END SLIDE BOX TỶ GIÁ HOME*/
   
    	/*SLIDE BOX LAI SUAT HOME*/
    var owl_slide_laisuat = $('#box_laisuat .owl-carousel');
	owl_slide_laisuat.owlCarousel({
			loop: true,
			autoplay: false,
			autoplayTimeout: 7000,
			margin: 10,
			items: 2,
            stagePadding: 30,
			pagination : false,
            responsive: {
							0: {
									items: 2
							},
							480: {
									items: 2
							},
							600: {
									items: 3
							},
					}
	})
    /*END SLIDE BOX LAI SUAT HOME*/
    
    /*SLIDE BOX VIDEO HOME*/
        var owl_slide_videos = $('.slide_box_video .owl-carousel');
                owl_slide_videos.owlCarousel({
                        loop: true,
                        autoplay: false,
                        autoplayTimeout: 7000,
                        margin: 20,
                        items: 1,
                        pagination : false,
                        stagePadding: 80,
                        responsive: {
                                0: {
                                        items: 1,
                                        stagePadding: 60
                                },
                                360: {
                                        items: 1,
                                        stagePadding: 80
                                },
                                414: {
                                        items: 1,
                                    stagePadding: 90
                                },
                                600: {
                                        items: 2
                                },
                        }
                })

	/*END SLIDE BOX VIDEO HOME*/
    
    	/*SLIDE BOX INFOGRAPHIC HOME*/
        var owl_slide_infographics = $('.slide_box_infographics .owl-carousel');
                owl_slide_infographics.owlCarousel({
                        loop: true,
                        autoplay: false,
                        autoplayTimeout: 7000,
                        margin: 20,
                        items: 1,
                        pagination : false,
                        stagePadding: 80,
                        responsive: {
                                 0: {
                                        items: 1,
                                        stagePadding: 60
                                },
                                360: {
                                        items: 1,
                                        stagePadding: 80
                                },
                                414: {
                                        items: 1,
                                    stagePadding: 90
                                },
                                600: {
                                        items: 2
                                },
                        }
                })

	/*END SLIDE BOX INFOGRAPHIC HOME*/

    
	/*OPEN & CLOSE MAIN MENU*/
	$(function(){
		$('.btn_control_menu').click(function(){
		$('body').addClass('show_main_menu');
		});

			$('.close_main_menu, .mask-content').click(function(){
			$('body').removeClass('show_main_menu');
		});
	})
	/*END OPEN & CLOSE MAIN MENU*/

	/**BUTTON BACK TO TOP**/
	$(window).scroll(function() {
	  if($(window).scrollTop() >= 200)
	  {
	    $('#to_top').fadeIn();
	  }
	  else
	  {
	    $('#to_top').fadeOut();
	  }
	});

	$("#to_top").click(function() {
	  $("html, body").animate({ scrollTop: 0 });
	  return false;
	});
	/**END BUTTON BACK TO TOP**/

	/**MENU STICKY**/
	$(window).scroll(function() {
	  if($(window).scrollTop() >= 350)
	  {
	    $('#header_sticky').addClass('show_sticky');
          
	  }
	  else
	  {
	    $('#header_sticky').removeClass('show_sticky');
        $('.icon_font_adj').removeClass('active');  
        $('.button_font_adj').removeClass('active');  
        $('.show_font_adj').removeClass('show');  
	  }
	});
	/**END MENU STICKY**/

	/*BEFORE AFTER IMAGE*/
	(function ($) {
	$('.before_after_ver1').beforeafter();
			} (jQuery));
    
    /*$(function(){
        $('.cocoen').cocoen();
    });*/
	/*FLIP IMAGE*/
	$(".flip_wrap").flip();

	/*SLIDER ON FCK DETAIL*/
	/*var owl_slide_fck = $('.list_slide');
		owl_slide_fck.owlCarousel({
				loop: true,
				autoplay: false,
                autoWidth:true,
				autoplayTimeout: 7000,
				margin: 10,
				items: 4,
				nav: false,
				navText: [],
				pagination : false,
                //stagePadding: 65,
				
		})*/
        
      
        
        

		/*SLIDER ON DETAIL PVTT*/
		var owl_slide_pvtt = $('.list_slide_pvtt .owl-carousel');
			owl_slide_pvtt.owlCarousel({
					loop: true,
					autoplay: true,
					autoplayTimeout: 7000,
					margin: 20,
					items: 1,
					pagination : false,
                    stagePadding: 80,
					responsive: {
							0: {
                                    items: 1,
                                    stagePadding: 60
                            },
                            360: {
                                    items: 1,
                                    stagePadding: 80
                            },
                            414: {
                                    items: 1,
                                stagePadding: 90
                            },
							600: {
									items: 2
							},
					}
			})
			/*$('.list_slide_pvtt .next_slider').click(function() {
			owl_slide_pvtt.trigger('next.owl.carousel');
			})

			$('.list_slide_pvtt .prev_slider').click(function() {

					owl_slide_pvtt.trigger('prev.owl.carousel');
			});*/
    
            /**SEARCH ON HEADER**/
            /* $('.search_icon').click(function(){
                $('.search-fullscreen-overlay').addClass('search-fullscreen-overlay-show');
            });
            $('.search-fullscreen-close').click(function(){
                $('.search-fullscreen-overlay').removeClass('search-fullscreen-overlay-show');
            });*/
             $('.block_search .input_form').click(function(){
                $('.block_search').addClass('focus');
            });
             $('.block_search .btn_reset').click(function(){
                $('.block_search').removeClass('focus');
            });
});