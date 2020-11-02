(function () {
    'use strict';
    console.clear();
    var doc = NYTG_DOC;
    balanceText('#interactive-heading');
    var blocks = jquery('.g-asset');
    var curVid;
    var size;
    var isMobile$1;

    function init$1() {
        size = innerWidth > 1200 ? 1600 : innerWidth > 900 ? 1254 : innerWidth > 640 ? 900 : innerWidth > 460 ? 640 : 360;
        isMobile$1 = innerWidth < 460;

        if (isMobile$1) {
            jquery(".g-freebird").addClass("g-freebird-mobile");
            jquery(".g-img img").attr("src", "https://static01.nyt.com/newsgraphics/2019/09/11/hurricane-dorian-abaco/3f8765a5dcebd265a939e6cd3ff9ca5621ccaa89/before-mobile.jpg");
        } else {
            jquery(".g-img img").attr("src", "https://static01.nyt.com/newsgraphics/2019/09/11/hurricane-dorian-abaco/3f8765a5dcebd265a939e6cd3ff9ca5621ccaa89/before.jpg");
            jquery(".g-block-cont video").each(function () {
                jquery(this).attr("poster", jquery(this).attr("poster").replace("-mobile-360w", "-640w"));
            });
            jquery(".g-freebird").removeClass("g-freebird-mobile");
        }
        run("start");
    }

    init$1();
    jquery(window).on("scroll", run);

    function activate(block, top, start) {
        jquery(block).css("z-index", 1);
        jquery(block).addClass('g-active');
        var vid = jquery(block).find(".g-block-cont").attr("data-vid");
        var videoEl = jquery(".g-" + vid);
        if (vid && vid != curVid) {
            jquery(".g-prev-active").removeClass("g-prev-active g-vid-active");
            if ((vid != "before" && !videoEl.attr("src")) || start == "start") {
                if (isMobile$1) {
                    videoEl.attr("src", "https://int.nyt.com/data/videotape/finished/2019/09/sandbanks/" + vid + "-mobile-" + size + "w.mp4").css("width", "100%");
                } else {
                    videoEl.attr("src", "https://int.nyt.com/data/videotape/finished/2019/09/sandbanks/" + vid + "-" + size + "w.mp4");
                }
            }

            videoEl.addClass("g-vid-active");
            jquery(".g-" + curVid).addClass("g-prev-active");
            curVid = vid;
        } else if (videoEl && videoEl.get(0) && videoEl.get(0).pause && vid == curVid && top != "top") {
            videoEl.get(0).pause();
            videoEl.get(0).currentTime = 0;
            videoEl.get(0).play();
        }
    }

    var lastY = 0;
    var credHeightSet = false;

    function run(start) {
        var y = getViewportPosition().top;

        if (y < innerHeight) {
            activate(jquery(".g-asset-0").get(0), "top");
        } else {
            lodash.forEach(blocks, function (block) {
                var t = jquery(block).offset().top;
                var h = jquery(block).height(); // || 1;
                if (y >= (t) && y < (t + h + innerHeight)) { //} + ( (innerHeight/2) - ( innerHeight * h ) ) ) {
                    if (!jquery(block).hasClass('g-active')) {
                        if (jquery(block).attr("class").indexOf("g-asset-6") > -1) {
                            jquery(".g-asset-5 .g-block-inner-inner").css("opacity", 0);
                        } else if (jquery(".g-asset-5 .g-block-inner-inner").css("opacity") == 0) {
                            jquery(".g-asset-5 .g-block-inner-inner").css("opacity", 1);
                        }

                        activate(block, null, "start");
                    }
                } else {
                    if (y < lastY) {
                        jquery(block).css("z-index", 2);
                    }
                    jquery(block).removeClass('g-active');
                }
            });
        }

        if (start == "start") {
            jquery(".g-img").css("width", jquery(".g-asset-0 video").width()).css("height", jquery(".g-asset-0 video").height());
            jquery(".g-img .g-credit").css("height", jquery(".g-img img").height());
            jquery(".video_fallback img").css("width", jquery(".g-asset-0 video").width()).css("height", jquery(".g-asset-0 video").height());
        }

        if (!credHeightSet) {
            if ((jquery(".g-img .g-credit").height() != jquery(".g-img img").height())) {
                jquery(".g-img .g-credit").css("height", jquery(".g-img img").height());
                credHeightSet = true;
            }
        }

        lastY = y;
    }

    const scrollPct = function (id, pct) {
        // if (id == "scrolling_video_2") {
        // 	if (pct > 0.55 && pct < 0.78) {
        // 		$("#scrolling_video_2 .g-img").addClass("g-img-show");
        // 	} else if ($("#scrolling_video_2 .g-img").hasClass("g-img-show")) {
        // 		$("#scrolling_video_2 .g-img").removeClass("g-img-show");
        // 	}
        // }
        // callback code goes here
    };

    // videoScroll.debug (true);
    // videoScroll.forceFallback (true);
    videoScroll.init(doc, null, scrollPct);

    var curMobile = isMobile$1;
    var ow = innerWidth;
    jquery(window).on("resize", lodash.throttle(function () {

        if (innerWidth != ow) {
            init$1();

            jquery(".g-block-cont video").each(function () {
                if (jquery(this).attr("src")) {
                    var vid = jquery(this).attr("data-src");
                    if (isMobile$1) {
                        jquery(this).attr("src", "https://int.nyt.com/data/videotape/finished/2019/09/sandbanks/" + vid + "-mobile-" + size + "w.mp4").css("width", "100%");
                    } else {
                        jquery(this).attr("src", "https://int.nyt.com/data/videotape/finished/2019/09/sandbanks/" + vid + "-" + size + "w.mp4");
                    }
                }

                if (curMobile && !isMobile$1) {
                    jquery(this).attr("poster", jquery(this).attr("poster").replace("-mobile-360w", "-640w"));
                    jquery(".g-img img").attr("src", "https://static01.nyt.com/newsgraphics/2019/09/11/hurricane-dorian-abaco/3f8765a5dcebd265a939e6cd3ff9ca5621ccaa89/before.jpg");
                    curMobile = isMobile$1;
                } else if (!curMobile && isMobile$1) {
                    jquery(this).attr("poster", jquery(this).attr("poster").replace("-640w", "-mobile-360w"));
                    jquery(".g-img img").attr("src", "https://static01.nyt.com/newsgraphics/2019/09/11/hurricane-dorian-abaco/3f8765a5dcebd265a939e6cd3ff9ca5621ccaa89/before-mobile.jpg");
                    curMobile = isMobile$1;
                }
            });
            ow = innerWidth;
        }

    }, 3000));

}());