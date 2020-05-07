var effectSticky = function (elm, width, height, config) {

        
        var parentSelector =  'row_with_line';
        var offset_top =  10;
        var offset_bottom =  0;
        var parent = [];        
        parent = window.document.getElementsByClassName(parentSelector); // parent CLASS      

        if (!parent || parent.length < 1) {
            return;
        }
        parent = parent[0];

        var el_rect = elm.i.getBoundingClientRect();
        var height_sticky = parent.getBoundingClientRect().bottom - el_rect.top;
        var top_bottom = height_sticky - el_rect.height;
        var css_position = '';
        $(elm.d).css('width',$(elm.d).outerWidth()+"px");
        var setSticky = function () {
            var ele_top = elm.i.getBoundingClientRect().top, p_bottom = parent.getBoundingClientRect().bottom;
            if (ele_top < offset_top && p_bottom + offset_bottom > el_rect.height + offset_top) {
                if (css_position != 'fixed') {
                    elm.d.style.position = 'fixed';
                    elm.d.style.top = offset_top + "px";
                }
                css_position = 'fixed';
                
            } else {
                if (css_position != 'absolute') {
                    elm.d.style.position = 'absolute';
                    if (ele_top < offset_top) {
                        top_bottom = p_bottom - ele_top - el_rect.height;
                        elm.d.style.top = Math.round(top_bottom) + "px";
                    } else {
                        elm.d.style.top = "0px";
                    }
                }
                css_position = 'absolute';
            }
        };
        if (top_bottom > 1) {
            setSticky();
            $(window).scroll(function(){setSticky()});
        }

    };
    effectSticky({i:$('.box_sticky_left')[0],d:$('.sticky_inner')[0]});