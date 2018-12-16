
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"> </button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"> </button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)
})):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null!==options.pinchThreshold?pinchDistance>=options.pinchThreshold:!0}function validateSwipeTime(){var result;return result=options.maxTimeThreshold?!(duration>=options.maxTimeThreshold):!0}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&DOUBLE_TAP_THRESHOLD>distance}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){return maximumsMap[direction]?maximumsMap[direction].distance:void 0}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return 1>pinchZoom?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return 0>angle&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return 45>=angle&&angle>=0?LEFT:360>=angle&&angle>=315?LEFT:angle>=135&&225>=angle?RIGHT:angle>45&&135>angle?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});
/*! roundSlider v1.3 | (c) 2015-2016, Soundar | MIT license | http://roundsliderui.com/licence.html */
;(function($,window,undefined){"use strict";function $proxy(n,t){return typeof $.proxy=="function"?$.proxy(n,t):function(i){n.call(t,i)}}function $data(n,t,i){return typeof $.data=="function"?$.data(n,t,i):i?void 0:$(n).hasClass("rs-control")}function $isPlainObject(n){if(typeof $.isPlainObject=="function")return $.isPlainObject(n);var t=JSON.stringify(n);return typeof n=="object"&&n.length===undefined&&t.length>2&&t.substr(0,1)==="{"&&t.substr(t.length-1)==="}"}function isNumber(n){return n=parseFloat(n),typeof n=="number"&&!isNaN(n)}function createElement(n){var t=n.split(".");return $(document.createElement(t[0])).addClass(t[1]||"")}function getdistance(n,t){return Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y))}function setTransform(n,t){return n.css("-webkit-transform","rotate("+t+"deg)"),n.css("-moz-transform","rotate("+t+"deg)"),n.css("-ms-transform","rotate("+t+"deg)"),n.css("-o-transform","rotate("+t+"deg)"),n.css("transform","rotate("+t+"deg)"),n}function RoundSlider(n,t){n.id&&(window[n.id]=this),this.control=$(n),this.options=$.extend({},this.defaults,t),this._raise("beforeCreate")!==!1?(this._init(),this._raise("create")):this._removeData()}function CreateRoundSlider(n,t){for(var i,r,u=0;u<this.length;u++)if(i=this[u],r=$data(i,pluginName),r){if($isPlainObject(n))typeof r.option=="function"?r.option(n):i.id&&window[i.id]&&typeof window[i.id].option=="function"&&window[i.id].option(n);else if(typeof n=="string"&&typeof r[n]=="function"){if((n==="option"||n.indexOf("get")===0)&&t[2]===undefined)return r[n](t[1]);r[n](t[1],t[2])}}else $data(i,pluginName,new RoundSlider(i,n));return this}var pluginName="roundSlider";$.fn[pluginName]=function(n){return CreateRoundSlider.call(this,n,arguments)},RoundSlider.prototype={pluginName:pluginName,version:"1.3",options:{},defaults:{min:0,max:100,step:1,value:null,radius:85,width:18,handleSize:"+0",startAngle:0,endAngle:"+360",animation:!0,showTooltip:!0,editableTooltip:!0,readOnly:!1,disabled:!1,keyboardAction:!0,mouseScrollAction:!1,lineCap:"square",sliderType:"default",circleShape:"full",handleShape:"round",beforeCreate:null,create:null,start:null,drag:null,change:null,stop:null,tooltipFormat:null},_props:function(){return{numberType:["min","max","step","radius","width","startAngle"],booleanType:["animation","showTooltip","editableTooltip","readOnly","disabled","keyboardAction","mouseScrollAction"],stringType:["sliderType","circleShape","handleShape","lineCap"]}},control:null,_init:function(){var t,n;this._isBrowserSupport=this._isBrowserSupported(),this._isKO=!1,this._isAngular=!1,this.control.is("input")&&(this._isInputType=!0,this._hiddenField=this.control,this.control=createElement("div"),this.control.insertAfter(this._hiddenField),this.options.value=this._hiddenField.val()||this.options.value,t=this,this._checkKO()&&setTimeout(function(){t._checkKO()},1),this._checkAngular()),this._bindOnDrag=!1,n=this._dataElement().attr("data-updateon"),typeof n=="string"?n=="drag"&&(this._bindOnDrag=!0):this._isAngular&&(this._bindOnDrag=!0),this._onInit()},_onInit:function(){this._initialize(),this._update(),this._render()},_initialize:function(){this._isBrowserSupport&&(this._isReadOnly=!1,this._checkDataType(),this._refreshCircleShape())},_render:function(){if(this.container=createElement("div.rs-container"),this.innerContainer=createElement("div.rs-inner-container"),this.block=createElement("div.rs-block rs-outer rs-border"),this.container.append(this.innerContainer.append(this.block)),this.control.addClass("rs-control").empty().append(this.container),this._setRadius(),this._isBrowserSupport)this._createLayers(),this._setProperties(),this._setValue(),this._updateTooltipPos(),this._bindControlEvents("_bind"),this._checkIE();else{var n=createElement("div.rs-msg");n.html(typeof this._throwError=="function"?this._throwError():this._throwError),this.control.empty().addClass("rs-error").append(n),this._isInputType&&this.control.append(this._dataElement())}},_update:function(){this._validateSliderType(),this._updateStartEnd(),this._validateStartEnd(),this._handle1=this._handle2=this._handleDefaults(),this._analyzeModelValue(),this._validateModelValue()},_createLayers:function(){var i=this.options.width,t=this._start,n;n=createElement("div.rs-path rs-transition"),this._rangeSlider||this._showRange?(this.block1=n.clone().addClass("rs-range-color").rsRotate(t),this.block2=n.clone().addClass("rs-range-color").css("opacity","0").rsRotate(t),this.block3=n.clone().addClass("rs-path-color").rsRotate(t),this.block4=n.addClass("rs-path-color").css({opacity:"1","z-index":"1"}).rsRotate(t-180),this.block.append(this.block1,this.block2,this.block3,this.block4).addClass("rs-split")):this.block.append(n.addClass("rs-path-color")),this.lastBlock=createElement("span.rs-block").css({padding:i}),this.innerBlock=createElement("div.rs-inner rs-bg-color rs-border"),this.lastBlock.append(this.innerBlock),this.block.append(this.lastBlock),this._appendHandle(),this._appendOverlay(),this._appendHiddenField()},_setProperties:function(){this._updatePre(),this._setHandleShape(),this._addAnimation(),this._appendTooltip(),this.options.showTooltip||this._removeTooltip(),this.options.disabled?this.disable():this.options.readOnly&&this._readOnly(!0),this.options.mouseScrollAction&&this._bindScrollEvents("_bind")},_updatePre:function(){this._prechange=this._predrag=this.options.value},_setValue:function(){if(this._rangeSlider)this._setHandleValue(1),this._setHandleValue(2);else{this._showRange&&this._setHandleValue(1);var n=this.options.sliderType=="default"?this._active||1:parseFloat(this.bar.children().attr("index"));this._setHandleValue(n)}},_appendTooltip:function(){this.container.children(".rs-tooltip").length===0&&(this.tooltip=createElement("span.rs-tooltip rs-tooltip-text"),this.container.append(this.tooltip),this._tooltipEditable(),this._updateTooltip())},_removeTooltip:function(){this.container.children(".rs-tooltip").length!=0&&this.tooltip&&this.tooltip.remove()},_tooltipEditable:function(){if(this.tooltip&&this.options.showTooltip){var n;this.options.editableTooltip?(this.tooltip.addClass("edit"),n="_bind"):(this.tooltip.removeClass("edit"),n="_unbind"),this[n](this.tooltip,"click",this._editTooltip)}},_editTooltip:function(){if(this.tooltip.hasClass("edit")&&!this._isReadOnly){var n=parseFloat(this.tooltip.css("border-left-width"))*2;this.input=createElement("input.rs-input rs-tooltip-text").css({height:this.tooltip.outerHeight()-n,width:this.tooltip.outerWidth()-n}),this.tooltip.html(this.input).removeClass("edit").addClass("hover"),this.input.focus().val(this._getTooltipValue(!0)),this._bind(this.input,"blur",this._focusOut),this._bind(this.input,"change",this._focusOut)}},_focusOut:function(n){n.type=="change"?(this.options.value=this.input.val().replace("-",","),this._analyzeModelValue(),this._validateModelValue(),this._setValue(),this.input.val(this._getTooltipValue(!0))):(this.tooltip.addClass("edit").removeClass("hover"),this._updateTooltip()),this._raiseEvent("change")},_setHandleShape:function(){var n=this.options.handleShape;this._handles().removeClass("rs-handle-dot rs-handle-square"),n=="dot"?this._handles().addClass("rs-handle-dot"):n=="square"?this._handles().addClass("rs-handle-square"):this.options.handleShape=this.defaults.handleShape},_setHandleValue:function(n){this._active=n;var t=this["_handle"+n];this.options.sliderType!="min-range"&&(this.bar=this._activeHandleBar()),this._changeSliderValue(t.value,t.angle)},_setAnimation:function(){this.options.animation?this._addAnimation():this._removeAnimation()},_addAnimation:function(){this.options.animation&&this.control.addClass("rs-animation")},_removeAnimation:function(){this.control.removeClass("rs-animation")},_setRadius:function(){var t=this.options.radius,i=t*2,n=this.options.circleShape,r=i,u=i,f,e;if(this.container.removeClass().addClass("rs-container"),n.indexOf("half")===0){switch(n){case"half-top":case"half-bottom":r=t,u=i;break;case"half-left":case"half-right":r=i,u=t}this.container.addClass(n.replace("half-","")+" half")}else n.indexOf("quarter")===0?(r=u=t,f=n.split("-"),this.container.addClass(f[0]+" "+f[1]+" "+f[2])):this.container.addClass("full "+n);e={height:r,width:u},this.control.css(e),this.container.css(e)},_border:function(n){return n?parseFloat(this._startLine.children().css("border-bottom-width")):parseFloat(this.block.css("border-top-width"))*2},_appendHandle:function(){(this._rangeSlider||!this._showRange)&&this._createHandle(1),(this._rangeSlider||this._showRange)&&this._createHandle(2),this._startLine=this._addSeperator(this._start,"rs-start"),this._endLine=this._addSeperator(this._start+this._end,"rs-end"),this._refreshSeperator()},_addSeperator:function(n,t){var r=createElement("span.rs-seperator rs-border"),u=this.options.width,f=this._border(),i=createElement("span.rs-bar rs-transition "+t).append(r).rsRotate(n);return this.container.append(i),i},_refreshSeperator:function(){var i=this._startLine.add(this._endLine),r=i.children().removeAttr("style"),n=this.options,u=n.width,f=this._border(),t=u+f;n.lineCap=="round"&&n.circleShape!="full"?(i.addClass("rs-rounded"),r.css({width:t,height:t/2+1}),this._startLine.children().css("margin-top",-1).addClass(n.sliderType=="min-range"?"rs-range-color":"rs-path-color"),this._endLine.children().css("margin-top",t/-2).addClass("rs-path-color")):(i.removeClass("rs-rounded"),r.css({width:t,"margin-top":this._border(!0)/-2}).removeClass("rs-range-color rs-path-color"))},_updateSeperator:function(){this._startLine.rsRotate(this._start),this._endLine.rsRotate(this._start+this._end)},_createHandle:function(n){var t=createElement("div.rs-handle rs-move"),u=this.options,f,r;(f=u.handleShape)!="round"&&t.addClass("rs-handle-"+f),t.attr({index:n,tabIndex:"0"});var i=this._dataElement()[0].id,i=i?i+"_":"",e=i+"handle"+(u.sliderType=="range"?"_"+(n==1?"start":"end"):"");return t.attr({role:"slider","aria-label":e}),r=createElement("div.rs-bar rs-transition").css("z-index","7").append(t).rsRotate(this._start),r.addClass(u.sliderType=="range"&&n==2?"rs-second":"rs-first"),this.container.append(r),this._refreshHandle(),this.bar=r,this._active=n,n!=1&&n!=2&&(this["_handle"+n]=this._handleDefaults()),this._bind(t,"focus",this._handleFocus),this._bind(t,"blur",this._handleBlur),t},_refreshHandle:function(){var hSize=this.options.handleSize,h,w,isSquare=!0,s,diff;if(typeof hSize=="string"&&isNumber(hSize))if(hSize.charAt(0)==="+"||hSize.charAt(0)==="-")try{hSize=eval(this.options.width+hSize.charAt(0)+Math.abs(parseFloat(hSize)))}catch(e){console.warn(e)}else hSize.indexOf(",")&&(s=hSize.split(","),isNumber(s[0])&&isNumber(s[1])&&(w=parseFloat(s[0]),h=parseFloat(s[1]),isSquare=!1));isSquare&&(h=w=isNumber(hSize)?parseFloat(hSize):this.options.width),diff=(this.options.width+this._border()-w)/2,this._handles().css({height:h,width:w,margin:-h/2+"px 0 0 "+diff+"px"})},_handleDefaults:function(){return{angle:this._valueToAngle(this.options.min),value:this.options.min}},_handles:function(){return this.container.children("div.rs-bar").find(".rs-handle")},_activeHandleBar:function(n){return n=n!=undefined?n:this._active,$(this.container.children("div.rs-bar")[n-1])},_handleArgs:function(n){n=n!=undefined?n:this._active;var t=this["_handle"+n];return{element:this._activeHandleBar(n).children(),index:n,isActive:n==this._active,value:t?t.value:null,angle:t?t.angle:null}},_dataElement:function(){return this._isInputType?this._hiddenField:this.control},_raiseEvent:function(n){var t=this["_pre"+n];if(t!==this.options.value)return this["_pre"+n]=this.options.value,this._updateTooltip(),(n=="change"||this._bindOnDrag&&n=="drag")&&this._updateHidden(),this._raise(n,{value:this.options.value,preValue:t,handle:this._handleArgs()})},_elementDown:function(n){var i,r,u,t,f;if(!this._isReadOnly)if(i=$(n.target),i.hasClass("rs-handle"))this._handleDown(n);else{var e=this._getXY(n),o=this._getCenterPoint(),s=getdistance(e,o),h=this.block.outerWidth()/2,c=h-(this.options.width+this._border());s>=c&&s<=h&&(n.preventDefault(),r=this.control.find(".rs-handle.rs-focus"),this.control.attr("tabindex","0").focus().removeAttr("tabindex"),i.hasClass("rs-seperator")?(t=i.parent().hasClass("rs-start")?this.options.min:this.options.max,u=this._valueToAngle(t)):(f=this._getAngleValue(e,o),u=f.angle,t=f.value),this._rangeSlider&&(r=this.control.find(".rs-handle.rs-focus"),this._active=r.length==1?parseFloat(r.attr("index")):this._handle2.value-t<t-this._handle1.value?2:1,this.bar=this._activeHandleBar()),this._changeSliderValue(t,u),this._raiseEvent("change"))}},_handleDown:function(n){n.preventDefault();var t=$(n.target);t.focus(),this._removeAnimation(),this._bindMouseEvents("_bind"),this.bar=t.parent(),this._active=parseFloat(t.attr("index")),this._handles().removeClass("rs-move"),this._raise("start",{value:this.options.value,handle:this._handleArgs()})},_handleMove:function(n){n.preventDefault();var u=this._getXY(n),f=this._getCenterPoint(),t=this._getAngleValue(u,f,!0),i,r;i=t.angle,r=t.value,this._changeSliderValue(r,i),this._raiseEvent("drag")},_handleUp:function(){this._handles().addClass("rs-move"),this._bindMouseEvents("_unbind"),this._addAnimation(),this._raiseEvent("change"),this._raise("stop",{value:this.options.value,handle:this._handleArgs()})},_handleFocus:function(n){if(!this._isReadOnly){var t=$(n.target);this._handles().removeClass("rs-focus"),t.addClass("rs-focus"),this.bar=t.parent(),this._active=parseFloat(t.attr("index")),this.options.keyboardAction&&(this._bindKeyboardEvents("_unbind"),this._bindKeyboardEvents("_bind")),this.control.find("div.rs-bar").css("z-index","7"),this.bar.css("z-index","8")}},_handleBlur:function(){this._handles().removeClass("rs-focus"),this.options.keyboardAction&&this._bindKeyboardEvents("_unbind")},_handleKeyDown:function(n){var t,r,i,u;this._isReadOnly||(t=n.keyCode,t==27&&this._handles().blur(),t>=35&&t<=40)&&(t>=37&&t<=40&&this._removeAnimation(),r=this["_handle"+this._active],n.preventDefault(),t==38||t==37?i=this._round(this._limitValue(r.value+this.options.step)):t==39||t==40?i=this._round(this._limitValue(r.value-this._getMinusStep(r.value))):t==36?i=this._getKeyValue("Home"):t==35&&(i=this._getKeyValue("End")),u=this._valueToAngle(i),this._changeSliderValue(i,u),this._raiseEvent("change"))},_handleKeyUp:function(){this._addAnimation()},_getMinusStep:function(n){if(n==this.options.max){var t=(this.options.max-this.options.min)%this.options.step;return t==0?this.options.step:t}return this.options.step},_getKeyValue:function(n){return this._rangeSlider?n=="Home"?this._active==1?this.options.min:this._handle1.value:this._active==1?this._handle2.value:this.options.max:n=="Home"?this.options.min:this.options.max},_elementScroll:function(n){if(!this._isReadOnly){n.preventDefault();var i=n.originalEvent||n,r,t,f,u;(u=i.wheelDelta?i.wheelDelta/60:i.detail?-i.detail/2:0,u!=0)&&(this._updateActiveHandle(n),r=this["_handle"+this._active],t=r.value+(u>0?this.options.step:-this._getMinusStep(r.value)),t=this._limitValue(t),f=this._valueToAngle(t),this._removeAnimation(),this._changeSliderValue(t,f),this._raiseEvent("change"),this._addAnimation())}},_updateActiveHandle:function(n){var t=$(n.target);t.hasClass("rs-handle")&&t.parent().parent()[0]==this.control[0]&&(this.bar=t.parent(),this._active=parseFloat(t.attr("index"))),this.bar.find(".rs-handle").hasClass("rs-focus")||this.bar.find(".rs-handle").focus()},_bindControlEvents:function(n){this[n](this.control,"mousedown",this._elementDown),this[n](this.control,"touchstart",this._elementDown)},_bindScrollEvents:function(n){this[n](this.control,"mousewheel",this._elementScroll),this[n](this.control,"DOMMouseScroll",this._elementScroll)},_bindMouseEvents:function(n){this[n]($(document),"mousemove",this._handleMove),this[n]($(document),"mouseup",this._handleUp),this[n]($(document),"mouseleave",this._handleUp),this[n]($(document),"touchmove",this._handleMove),this[n]($(document),"touchend",this._handleUp),this[n]($(document),"touchcancel",this._handleUp)},_bindKeyboardEvents:function(n){this[n]($(document),"keydown",this._handleKeyDown),this[n]($(document),"keyup",this._handleKeyUp)},_changeSliderValue:function(n,t){var u=this._oriAngle(t),i=this._limitAngle(t);if(this._rangeSlider||this._showRange){if(this._active==1&&u<=this._oriAngle(this._handle2.angle)||this._active==2&&u>=this._oriAngle(this._handle1.angle)||this._invertRange){this["_handle"+this._active]={angle:t,value:n},this.options.value=this._rangeSlider?this._handle1.value+","+this._handle2.value:n,this.bar.rsRotate(i),this._updateARIA(n);var r=this._oriAngle(this._handle2.angle)-this._oriAngle(this._handle1.angle),f="1",e="0";r<=180&&!(r<0&&r>-180)&&(f="0",e="1"),this.block2.css("opacity",f),this.block3.css("opacity",e),(this._active==1?this.block4:this.block2).rsRotate(i-180),(this._active==1?this.block1:this.block3).rsRotate(i)}}else this["_handle"+this._active]={angle:t,value:n},this.options.value=n,this.bar.rsRotate(i),this._updateARIA(n)},_updateARIA:function(n){var i=this.options.min,r=this.options.max,t;this.bar.children().attr({"aria-valuenow":n}),this.options.sliderType=="range"?(t=this._handles(),t.eq(0).attr({"aria-valuemin":i}),t.eq(1).attr({"aria-valuemax":r}),this._active==1?t.eq(1).attr({"aria-valuemin":n}):t.eq(0).attr({"aria-valuemax":n})):this.bar.children().attr({"aria-valuemin":i,"aria-valuemax":r})},_checkKO:function(){var f=this._dataElement().data("bind"),t,i,r,n,u;if(typeof f=="string"&&typeof ko=="object"){if(t=ko.dataFor(this._dataElement()[0]),typeof t=="undefined")return!0;for(i=f.split(","),n=0;n<i.length;n++)if(u=i[n].split(":"),$.trim(u[0])=="value"){r=$.trim(u[1]);break}r&&(this._isKO=!0,ko.computed(function(){this.option("value",t[r]())},this))}},_checkAngular:function(){if(typeof angular=="object"&&typeof angular.element=="function"&&(this._ngName=this._dataElement().attr("ng-model"),typeof this._ngName=="string")){this._isAngular=!0;var n=this;this._scope().$watch(this._ngName,function(t){n.option("value",t)})}},_scope:function(){return angular.element(this._dataElement()).scope()},_getXY:function(n){return n.type.indexOf("mouse")==-1&&(n=(n.originalEvent||n).changedTouches[0]),{x:n.pageX,y:n.pageY}},_getCenterPoint:function(){var n=this.block.offset();return{x:n.left+this.block.outerWidth()/2,y:n.top+this.block.outerHeight()/2}},_getAngleValue:function(n,t,i){var u=Math.atan2(n.y-t.y,t.x-n.x),r=-u/(Math.PI/180);return r<this._start&&(r+=360),r=this._checkAngle(r,i),this._processStepByAngle(r)},_checkAngle:function(n,t){var f=this._oriAngle(n),i=this["_handle"+this._active].angle,r=this._oriAngle(i),u;if(f>this._end){if(!t)return i;n=this._start+(r<=this._end-r?0:this._end)}else if(t&&(u=this._handleDragDistance,isNumber(u)&&Math.abs(f-r)>u))return i;return n},_processStepByAngle:function(n){var t=this._angleToValue(n);return this._processStepByValue(t)},_processStepByValue:function(n){var r=this.options.step,e,t,u,f,i,o;return e=(n-this.options.min)%r,t=n-e,u=this._limitValue(t+r),f=this._limitValue(t-r),i=n>=t?n-t<u-n?t:u:t-n>n-f?t:f,i=this._round(i),o=this._valueToAngle(i),{value:i,angle:o}},_round:function(n){var t=this.options.step.toString().split(".");return t[1]?parseFloat(n.toFixed(t[1].length)):Math.round(n)},_oriAngle:function(n){var t=n-this._start;return t<0&&(t+=360),t},_limitAngle:function(n){return n>360+this._start&&(n-=360),n<this._start&&(n+=360),n},_limitValue:function(n){return n<this.options.min&&(n=this.options.min),n>this.options.max&&(n=this.options.max),n},_angleToValue:function(n){var t=this.options;return this._oriAngle(n)/this._end*(t.max-t.min)+t.min},_valueToAngle:function(n){var t=this.options;return(n-t.min)/(t.max-t.min)*this._end+this._start},_appendHiddenField:function(){this._hiddenField=this._hiddenField||createElement("input"),this._hiddenField.attr({type:"hidden",name:this._dataElement()[0].id||""}),this.control.append(this._hiddenField),this._updateHidden()},_updateHidden:function(){var n=this.options.value;this._hiddenField.val(n),(this._isKO||this._isAngular)&&this._hiddenField.trigger("change"),this._isAngular&&(this._scope()[this._ngName]=n)},_updateTooltip:function(){this.tooltip&&!this.tooltip.hasClass("hover")&&this.tooltip.html(this._getTooltipValue()),this._updateTooltipPos()},_updateTooltipPos:function(){this.tooltip&&this.tooltip.css(this._getTooltipPos())},_getTooltipPos:function(){var n=this.options.circleShape,t;if(n=="full"||n=="pie"||n.indexOf("custom")===0)return{"margin-top":-this.tooltip.outerHeight()/2,"margin-left":-this.tooltip.outerWidth()/2};if(n.indexOf("half")!=-1){switch(n){case"half-top":case"half-bottom":t={"margin-left":-this.tooltip.outerWidth()/2};break;case"half-left":case"half-right":t={"margin-top":-this.tooltip.outerHeight()/2}}return t}return{}},_getTooltipValue:function(n){if(this._rangeSlider){var t=this.options.value.split(",");return n?t[0]+" - "+t[1]:this._tooltipValue(t[0],1)+" - "+this._tooltipValue(t[1],2)}return n?this.options.value:this._tooltipValue(this.options.value)},_tooltipValue:function(n,t){var i=this._raise("tooltipFormat",{value:n,handle:this._handleArgs(t)});return i!=null&&typeof i!="boolean"?i:n},_validateStartAngle:function(){var n=this.options.startAngle;return n=(isNumber(n)?parseFloat(n):0)%360,n<0&&(n+=360),this.options.startAngle=n,n},_validateEndAngle:function(){var end=this.options.endAngle;if(typeof end=="string"&&isNumber(end)&&(end.charAt(0)==="+"||end.charAt(0)==="-"))try{end=eval(this.options.startAngle+end.charAt(0)+Math.abs(parseFloat(end)))}catch(e){console.warn(e)}return end=(isNumber(end)?parseFloat(end):360)%360,end<=this.options.startAngle&&(end+=360),end},_refreshCircleShape:function(){var n=this.options.circleShape,i=["half-top","half-bottom","half-left","half-right","quarter-top-left","quarter-top-right","quarter-bottom-right","quarter-bottom-left","pie","custom-half","custom-quarter"],t;i.indexOf(n)==-1&&(t=["h1","h2","h3","h4","q1","q2","q3","q4","3/4","ch","cq"].indexOf(n),n=t!=-1?i[t]:n=="half"?"half-top":n=="quarter"?"quarter-top-left":"full"),this.options.circleShape=n},_appendOverlay:function(){var n=this.options.circleShape;n=="pie"?this._checkOverlay(".rs-overlay",270):(n=="custom-half"||n=="custom-quarter")&&(this._checkOverlay(".rs-overlay1",180),n=="custom-quarter"&&this._checkOverlay(".rs-overlay2",this._end))},_checkOverlay:function(n,t){var i=this.container.children(n);i.length==0&&(i=createElement("div"+n+" rs-transition rs-bg-color"),this.container.append(i)),i.rsRotate(this._start+t)},_checkDataType:function(){var i=this.options,r,n,t,u=this._props();for(r in u.numberType)n=u.numberType[r],t=i[n],i[n]=isNumber(t)?parseFloat(t):this.defaults[n];for(r in u.booleanType)n=u.booleanType[r],t=i[n],i[n]=t=="false"?!1:!!t;for(r in u.stringType)n=u.stringType[r],t=i[n],i[n]=(""+t).toLowerCase()},_validateSliderType:function(){var n=this.options.sliderType.toLowerCase();this._rangeSlider=this._showRange=!1,n=="range"?this._rangeSlider=this._showRange=!0:n.indexOf("min")!=-1?(this._showRange=!0,n="min-range"):n="default",this.options.sliderType=n},_updateStartEnd:function(){var n=this.options.circleShape;n!="full"&&(n.indexOf("quarter")!=-1?this.options.endAngle="+90":n.indexOf("half")!=-1?this.options.endAngle="+180":n=="pie"&&(this.options.endAngle="+270"),n=="quarter-top-left"||n=="half-top"?this.options.startAngle=0:n=="quarter-top-right"||n=="half-right"?this.options.startAngle=90:n=="quarter-bottom-right"||n=="half-bottom"?this.options.startAngle=180:(n=="quarter-bottom-left"||n=="half-left")&&(this.options.startAngle=270))},_validateStartEnd:function(){this._start=this._validateStartAngle(),this._end=this._validateEndAngle();var n=this._start<this._end?0:360;this._end+=n-this._start},_analyzeModelValue:function(){var n=this.options.value,t=this.options.min,f=this.options.max,u,r,i;n instanceof Array&&(n=n.toString()),i=typeof n=="string"?n.split(","):[n],this._rangeSlider?r=typeof n=="string"?i.length>=2?(isNumber(i[0])?i[0]:t)+","+(isNumber(i[1])?i[1]:f):isNumber(i[0])?t+","+i[0]:t+","+t:isNumber(n)?t+","+n:t+","+t:typeof n=="string"?(u=i.pop(),r=isNumber(u)?parseFloat(u):t):r=isNumber(n)?parseFloat(n):t,this.options.value=r},_validateModelValue:function(){var r=this.options.value,i;if(this._rangeSlider){var u=r.split(","),n=parseFloat(u[0]),t=parseFloat(u[1]);n=this._limitValue(n),t=this._limitValue(t),this._invertRange||n>t&&(t=n),this._handle1=this._processStepByValue(n),this._handle2=this._processStepByValue(t),this.options.value=this._handle1.value+","+this._handle2.value}else i=this._showRange?2:this._active||1,this["_handle"+i]=this._processStepByValue(this._limitValue(r)),this._showRange&&(this._handle1=this._handleDefaults()),this.options.value=this["_handle"+i].value},_isBrowserSupported:function(){for(var t=["borderRadius","WebkitBorderRadius","MozBorderRadius","OBorderRadius","msBorderRadius","KhtmlBorderRadius"],n=0;n<t.length;n++)if(document.body.style[t[n]]!==undefined)return!0},_throwError:function(){return"This browser doesn't support the border-radious property."},_checkIE:function(){var n=window.navigator.userAgent;(n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0)&&this.control.css({"-ms-touch-action":"none","touch-action":"none"})},_raise:function(n,t){var u=this.options,i=u[n],r=!0;return t=t||{value:u.value},t.options=u,i&&(t.type=n,typeof i=="string"&&(i=window[i]),$.isFunction(i)&&(r=i.call(this,t),r=r===!1?!1:r)),this.control.trigger($.Event?$.Event(n,t):n),r},_bind:function(n,t,i){$(n).bind(t,$proxy(i,this))},_unbind:function(n,t,i){$.proxy?$(n).unbind(t,$.proxy(i,this)):$(n).unbind(t)},_getInstance:function(){return $data(this._dataElement()[0],pluginName)},_removeData:function(){var n=this._dataElement()[0];$.removeData&&$.removeData(n,pluginName),n.id&&delete window[n.id]},_destroyControl:function(){this._isInputType&&this._dataElement().insertAfter(this.control).attr("type","text"),this.control.empty().removeClass("rs-control").height("").width(""),this._removeAnimation(),this._bindControlEvents("_unbind")},_updateWidth:function(){this.lastBlock.css("padding",this.options.width),this._refreshHandle()},_readOnly:function(n){this._isReadOnly=n,this.container.removeClass("rs-readonly"),n&&this.container.addClass("rs-readonly")},_get:function(n){return this.options[n]},_set:function(n,t){var i=this._props();if($.inArray(n,i.numberType)!=-1){if(!isNumber(t))return;t=parseFloat(t)}else $.inArray(n,i.booleanType)!=-1?t=t=="false"?!1:!!t:$.inArray(n,i.stringType)!=-1&&(t=t.toLowerCase());if(this.options[n]!=t){this.options[n]=t;switch(n){case"startAngle":case"endAngle":this._validateStartEnd(),this._updateSeperator(),this._appendOverlay();case"min":case"max":case"step":case"value":this._analyzeModelValue(),this._validateModelValue(),this._setValue(),this._updatePre(),this._updateHidden(),this._updateTooltip();break;case"radius":this._setRadius(),this._updateTooltipPos();break;case"width":this._removeAnimation(),this._updateWidth(),this._updateTooltipPos(),this._addAnimation(),this._refreshSeperator();break;case"handleSize":this._refreshHandle();break;case"handleShape":this._setHandleShape();break;case"animation":this._setAnimation();break;case"showTooltip":this.options.showTooltip?this._appendTooltip():this._removeTooltip();break;case"editableTooltip":this._tooltipEditable(),this._updateTooltipPos();break;case"disabled":this.options.disabled?this.disable():this.enable();break;case"readOnly":this.options.readOnly?this._readOnly(!0):!this.options.disabled&&this._readOnly(!1);break;case"mouseScrollAction":this._bindScrollEvents(this.options.mouseScrollAction?"_bind":"_unbind");break;case"lineCap":this._refreshSeperator();break;case"circleShape":this._refreshCircleShape(),this.options.circleShape=="full"&&(this.options.startAngle=0,this.options.endAngle="+360");case"sliderType":this._destroyControl(),this._onInit()}return this}},option:function(n,t){if(this._getInstance()&&this._isBrowserSupport){if($isPlainObject(n)){(n.min!==undefined||n.max!==undefined)&&(n.min!==undefined&&(this.options.min=n.min,delete n.min),n.max!==undefined&&(this.options.max=n.max,delete n.max),n.value==undefined&&this._set("value",this.options.value));for(var i in n)this._set(i,n[i])}else if(n&&typeof n=="string"){if(t===undefined)return this._get(n);this._set(n,t)}return this}},getValue:function(n){if(this.options.sliderType=="range"&&isNumber(n)){var t=parseFloat(n);if(t==1||t==2)return this["_handle"+t].value}return this._get("value")},setValue:function(n,t){if(isNumber(n)){if(isNumber(t))if(this.options.sliderType=="range"){var i=parseFloat(t),r=parseFloat(n);i==1?n=r+","+this._handle2.value:i==2&&(n=this._handle1.value+","+r)}else this.options.sliderType=="default"&&(this._active=t);this._set("value",n)}},disable:function(){this.options.disabled=!0,this.container.addClass("rs-disabled"),this._readOnly(!0)},enable:function(){this.options.disabled=!1,this.container.removeClass("rs-disabled"),this.options.readOnly||this._readOnly(!1)},destroy:function(){this._getInstance()&&(this._destroyControl(),this._removeData(),this._isInputType&&this.control.remove())}},$.fn.rsRotate=function(n){return setTransform(this,n)},typeof $.fn.outerHeight=="undefined"&&($.fn.outerHeight=function(){return this[0].offsetHeight},$.fn.outerWidth=function(){return this[0].offsetWidth}),typeof $.fn.hasClass=="undefined"&&($.fn.hasClass=function(n){return this[0].className.split(" ").indexOf(n)!==-1}),typeof $.fn.offset=="undefined"&&($.fn.offset=function(){return{left:this[0].offsetLeft,top:this[0].offsetTop}}),$.fn[pluginName].prototype=RoundSlider.prototype})(jQuery,window);
$(document).ready(function() {
$('body').show();
$('.version').text(NProgress.version);
NProgress.start();
setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);

 //$(".send-form__input-phone").inputmask("+9 (999) 999-99-99");

function scrollToElement(element){
	var delta = 1; //погрешность
	var correction = $(".header").outerHeight() - delta;
	if ($(element).length != 0) {
		$('html, body').animate({ scrollTop: $(element).offset().top - correction }, 500);
	}
}
$('.scroll').click( function(){
	var scroll_el = $(this).attr('href');
	scrollToElement(scroll_el);
	return false;
});

$(window).load(function (){
   $('section').addClass('loaded');
	footerToBottom();
	topMenuExtraResize();
});

min_calc = 0;
calcRfix = 235;

setdispHeight();
footerToBottom();
topMenuExtraResize();
$(window).resize( setdispHeight );

window.addEventListener("orientationchange", function() { //для запуска скриптов при изменении ориентации
	footerToBottom();
	topMenuExtraResize();
}, false);

function footerToBottom(){ //заполнение пустоты между футером и нижней части браузера
	window_height =  $(window).height();
	var change_footer_margin = false;
	if($('.change-footer').data('change-footer')) change_footer_margin = true;
	var screen_height = $('.change-footer').outerHeight() + $('#footer').height();
	var safari_fix = 0;
	if(window_height > screen_height && change_footer_margin) {
		if($('.change-footer').data('safari-fix')) safari_fix = $('.change-footer').data('safari-fix');
		$('#footer').css("margin-top", window_height - screen_height - safari_fix);
	}
	else {
		$('#footer').css("margin-top", 0);
	}
}

function topMenuExtraResize(){ /*для особого случая, когда есть несоответствие шрифтов на определённых устройствах*/
	if(screen.width > 375) {
		$('.menu-item__enter, .menu-item__cabinet, .menu-item__exit').css("font-size", "15px");
		$('.menu-items a').css("font-size", "15px");
	}
	else {
		$('.menu-item__enter, .menu-item__cabinet, .menu-item__exit').css("font-size", "1.2em");
		$('.menu-items a').css("font-size", "1.2em");
	}
}

function setdispHeight() {
	if($('#screen-main').data('slider-fix')) {
		window_height =  $(window).outerHeight() + $('#screen-main').data('slider-fix'); //изменение размера если в браузере есть боттом бар
	}
	else {
		window_height = $(window).outerHeight();
	}

	window_width = $(window).width();
	$('.fullHeight, .main-slider__item').height(window_height);

	if ($('#page-404').length){
		page404_height();
	}
	 $('.fullHeight, .main-slider__item').height(window_height);
}

function page404_height(){
	height_404 = ($(window).height()) - ($('#footer').outerHeight());
	$('#page-404').outerHeight(height_404);
}

function scroll_menu(){
	if ( $(window).scrollTop() > 0) {
		$('#header, #tab-box').addClass('scrolled');
	}
	else {

		if ($('.t-popup').hasClass('active')){
		}
		else{
			$('#header, #tab-box').removeClass('scrolled')
		}
	}


	
}

scroll_menu();

$(window).scroll(function(){
	 scroll_menu();
});
	

/*======================= MENU =========================*/

$('#m-menu__button').click(function(){
	$(this).toggleClass('active');
	$('.menu-box').toggleClass('active');
});
/*======================= //MENU =========================*/
	$('.accordion__text').slideUp(0);

	$('.accordion.open .accordion__text').slideDown(0);

	$('.accordion').click(function() {


		if ($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).find('.accordion__text').slideUp(300);
		}
		else{
			$(this).addClass('open');
			$(this).find('.accordion__text').slideDown(300);
		}
	});
	
/*============================ SLIDERDS ================================*/
function ms__dots(){
	ms__childs = $('.main-slider__item').length;
	var i = 1;
		while (i <= ms__childs) {
		  $(".main-slider__dots").append("<div class='main-slider__dots_item main-slider__dots_item_"+i+"'></li>");
		  i++;
	}
	$('.main-slider__dots_item_1').addClass('active');
	$('.main-slider__dots_item').click(function(){
		ms__index = $(this).index();
	   	ms__next();
	});
}

function ms__next(){
	
	$('.main-slider__item.active').addClass('hide');
	ms__index++;
	if (ms__index > ms__childs){
		ms__index = 1;
	}
	else if (ms__index <1){
		ms__index = ms__childs;
	}

	setTimeout(function(){
		$('.main-slider__item').removeClass('active');
		$('.main-slider__dots_item').removeClass('active');
		$('.main-slider__item:nth-child('+ms__index+')').addClass('active');
		$('.main-slider__dots_item:nth-child('+ms__index+')').addClass('active');
		$('.main-slider__item').removeClass('hide');
	},500);
	
}

ms__dots();

$('.main-slider__header').click(function() {
		ms__index = $('.main-slider__item.active').index();
	ms__index++;
   	ms__next();

   	ms__hover=1;
   	setTimeout(function(){
   		ms__hover=0;
   	},6000);
});
$(".main-slider").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
   	ms__index = $('.main-slider__item.active').index();
	ms__index++;
   	ms__next();

   	ms__hover=1;
   	setTimeout(function(){
   		ms__hover=0;
   	},6000);


	},
	
	swipeRight:function(event, direction, distance, duration, fingerCount) {
	ms__index = $('.main-slider__item.active').index();
	ms__index--;
   	ms__next();

   	ms__hover=1;
   	setTimeout(function(){
   		ms__hover=0;
   	},6000);

	},
	swipeUp:function(event, direction, distance, duration, fingerCount) {
		var scroll_el_fix = $('#screen-plan');
		scrollToElement(scroll_el_fix);
	}


});

ms__hover=0;

function ms__auto(){
	setTimeout(function ms__timer() {
		if (ms__hover == 0){
			ms__index = $('.main-slider__item.active').index();
			ms__index++;
			ms__next();
		  }
		  setTimeout(ms__timer, 6000);
		}, 6000);

}
ms__auto();

$('.main-slider__content').hover(function(){
	ms__hover=1;
});

$('.main-slider__content').mouseleave(function() {
	setTimeout(function(){
   		$('.main-slider__content').removeClass('hover');
   	},200);
	setTimeout(function(){
   		ms__hover=0;
   	},7000);
});


$('.main-slider').mouseleave(function() {
   		ms__hover=1;
});

$('.main-slider__header').hover(function(){
	$(this).addClass('hover');
});
$('.main-slider__header').mouseleave(function() {
	setTimeout(function(){
   		$('.main-slider__header').removeClass('hover');
   	},200);
});

	//$('.part-box').slick({
		// 			  autoplay: true,
		// 			  infinite: false,
		// 			  arrows:false,
		// 			  dots: true,
		// 			  speed: 500,
		// 			  slidesToShow: 3,
		// 			  slidesToScroll: 1,
		// 			  accessibility: false,
		// 			   responsive: [
		// 				{
		// 				  breakpoint: 1005,
		// 				  settings: {
		// 					slidesToShow: 1,
		// 					slidesToScroll: 1
		// 				  }
		// 				}
		// 			  ]
		// 			 });

if($('div').is('.part-box')) {

  //
				 
$('.result-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	 animate_case();
});	



 $('.steps-slider').slick({
				  autoplay: false,
				  infinite: false,
				  arrows:true,
				  dots: false,
				  speed: 300,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  accessibility: false,	  
				   responsive: [
					{
					  breakpoint: 1102,
					  settings: {
					  	arrows:false,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
				  ]
				 });

 $('.steps-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.step-item').removeClass('active');
  $('.step-item-'+nextSlide+'').addClass('active');

  nextSlide++;

  $('.step-item').each(function(){
  	if ($(this).index('.step-item') < nextSlide){
  		$(this).addClass('on');
  	}
  	else{
  		$(this).removeClass('on');
  	}
  });
  
  
});

			 
var slider = $( '.steps-slider' );

slider[0].slick.slickGoTo(0);
}

$('.step-item').click(function(){
	if ( $(this).hasClass('active')){
		
	}
	else{
	$('.step-item').removeClass('active');
	ti_slider_index= $(this).data('sliderindex');
	slider[0].slick.slickGoTo(ti_slider_index);
	$(this).addClass('active');
	}
});

/*============================ SLIDERDS ================================*/



/*=========================== CLOCK ===============================*/
function s_time(){
//  f_time = new Date();
//
//  f_day = f_time.getDate();
//  f_month = f_time.getMonth();
//  f_year = f_time.getFullYear();
// var f_month=new Array(12);
// f_month[0]="Января";
// f_month[1]="Февраля";
// f_month[2]="Марта";
// f_month[3]="Апреля";
// f_month[4]="Мая";
// f_month[5]="Июня";
// f_month[6]="Июля";
// f_month[7]="Августа";
// f_month[8]="Сентября";
// f_month[9]="Октября";
// f_month[10]="Ноября";
// f_month[11]="Декабря";
//
//
//  f_hour = f_time.getHours();
//  f_minute = (f_time.getMinutes() < 10 ? '0' : '' ) + f_time.getMinutes();
//
//  $(".s-date").text(f_day+' '+f_month[f_time.getMonth()]+' '+ f_year);
//  $(".s-time").text(f_hour + ":" + f_minute);
}

 timedUpdate();

function timedUpdate() {
     s_time();
      setTimeout(timedUpdate, 60000);
}

/*=========================== //CLOCK ===============================*/

/*========================= CALC ===========================*/
creatyCalc(200);
function creatyCalc(radius){
	$("#c-calc").roundSlider({
        min: 0,
        max: 10,
        step: 1,
        value: 26,
        radius: radius,
        width: 10,
        handleSize: "+16",

        startAngle: 0,
        endAngle: "+360",
        animation: true,
        showTooltip: true,
        editableTooltip: true,
        readOnly: false,
        disabled: false,
        keyboardAction: true,
        mouseScrollAction: false,
        sliderType: "min-range",
        circleShape: "full",
        handleShape: "round",
        lineCap: "square",

        // events
        beforeCreate: calc__change,
        create: null,
        start: calc__change,
        drag: calc__change,
        change: calc__change,
        stop: calc__change,
        tooltipFormat: null
    });
}



function calc__change(e){
	

	if( e.value <= 250){
		calc_val = Math.round(e.value/2.5)*100;
	}
	else if( e.value > 250 & e.value <=500){
		calc_val = (Math.round((e.value-250)/17.5)*10000)+10000;
	}
	else if(e.value > 500){
		calc_val = (Math.round((e.value-500)/10.65)*50000)+150000;
	}

	$('#sum-invest').val(gnum(calc_val));
		
	calc__calc(calc_val);
	
}

function calc__calc(e){

	$('.calc__p_item').removeClass('active');

	if (calc_val <= 15000){
	 	$('.cp-20').addClass('active');
	 	day_prof = calc_val/100*2;
	 }
	else if (calc_val > 15000 & calc_val < 150001){
	 	$('.cp-25').addClass('active');
	 	day_prof = Math.round(calc_val/100*2.5);
	 }
	else if (calc_val >= 150001 & calc_val<=2500000){
	 	$('.cp-30').addClass('active');
	 	day_prof = calc_val/100*3;
	 }
	 else{
	 	$('#sum-invest').val(gnum(2500000));
	 	day_prof = calc_val/100*3;
	 }

	 day_prof = Math.round(day_prof);

	 $('#day-prof').val(gnum(day_prof));
	 $('#year-prof').val(gnum(day_prof*360));

}

$('#sum-invest').change(function() {
	//$("#c-calc").roundSlider("setValue", $(this).val());
	calc_val = $(this).val();
	calc_val = calc_val.trimAll();
	calc__calc(calc_val);
});

 /*=========== change-slider ===============*/
function change_slider(calc_val){
	if (calc_val < 15001){
		calc_val = (calc_val/100)*2.5;
		$("#c-calc").roundSlider("setValue", calc_val);
	}
	else if (calc_val >= 15001 & calc_val< 150001){
		calc_val = ((calc_val/10000)*17.5)+230;
		$("#c-calc").roundSlider("setValue", calc_val);
	}
	else if (calc_val >= 150001 & calc_val< 2500001){
		calc_val = ((calc_val/50000)*10.65)+476;
		$("#c-calc").roundSlider("setValue", calc_val);
	}
}
/*=========== //change-slider ===============*/



/*=========== p-item ===============*/
$('.cp-20').click(function(){
	calc_val = 100;
	calc__calc(calc_val);
	$('#sum-invest').val(gnum(100));
	change_slider(calc_val);
});
$('.cp-25').click(function(){
	calc_val = 15001;
	calc__calc(calc_val);
	$('#sum-invest').val(gnum(15001));
	change_slider(calc_val);
});
$('.cp-30').click(function(){
	calc_val = 150001;
	calc__calc(calc_val);
	$('#sum-invest').val(gnum(150001));
	change_slider(calc_val);
});
/*=========== //p-item ===============*/

/*=========== typograf ===============*/
function gnum(n) {
	n += "";
	n = new Array(4 - n.length % 3).join("U") + n;
	return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}

String.prototype.trimAll=function()
{
  var r=/\s+/g;
  return this.replace(r,'');
}

if($('sum-invest').is("#sum-invest")) {
	input_price();

	function input_price() {
		var prev_value = "";
		var input = document.getElementById("sum-invest");
		input.onkeyup = input.onchange = input.onpaste = function () {
			this.value = this.value.replace(/[^\d\s]/g, "");
			if (prev_value == this.value)// отслеживаем изменение значения
				return;
			prev_value = this.value;
			this.value = this.value.replace(/[^\d]/g, "").split("").reverse().join("").replace(/\d{3}(?!$|(?:\s$))/g, "$& ").split("").reverse().join("");

			calc_val = this.value;
			calc_val = calc_val.trimAll();
			calc__calc(calc_val);
			change_slider(calc_val);
		};

	}
}

/*=========== //typograf ===============*/

/*========================= //CAKC ===========================*/

/*================== DISABLE SCROLL =====================*/
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}




/*============================ POPUPS =======================================*/
$('.check-box').click(function(){
	$(this).toggleClass('checked');
});

$('.t-form__enter .check-box').click(function(){
	if($(this).hasClass('checked')) {
		$(".t-form__enter .remember").prop('checked', true);
	}
	else {
		$(".t-form__enter .remember").prop('checked', false);
	}
});

$('.t-form__reg #agree').click(function(){
	if($(this).hasClass('checked')) {
		$(".t-form__reg .agree").prop('checked', true);
	}
	else {
		$(".t-form__reg .agree").prop('checked', false);
	}
});

$('.t-form__reg #get-news').click(function(){
	if($(this).hasClass('checked')) {
		$(".t-form__reg .get-news").prop('checked', true);
	}
	else {
		$(".t-form__reg .get-news").prop('checked', false);
	}
});

$('#helpdesc #create-user').click(function(){
	if($(this).hasClass('checked')) {
		$(this).removeClass('checked');
		$("#helpdesc .create-user").prop('checked', true);
	}
	else {
		$(this).addClass('checked');
		$("#helpdesc .create-user").prop('checked', false);
	}
});
/*============================ //POPUPS =======================================*/
$('.t-popup__close_button').click(function() {
	t_popup_close();
});
$('.menu-item__enter').click(function() {
	$('.t-login__enter').click();
	$('.t-popup__content').addClass('enter-resize');
	t_popup_open();
	return false;
});


	$('.t-popup__close_button').click(function() {
		t_popup_close();
	});
	$('.menu-item__enter').click(function() {

		t_popup_open();
		return false;
	});



	$("#t-popup__area").click(function(){
		t_popup_close();
	});
	$('.menu-item__toggle').click(function(){
		$('.menu-items').toggleClass('hidden');
		$(this).addClass('hidden');
	});
	$('#header').mouseleave(function() {
		if ($('#header').hasClass('popup') || $('#header').hasClass('pa') ){
			$('.menu-item__toggle').removeClass('hidden');
			$('.menu-items').addClass('hidden');
		}
	});

	$('.menu-item__minimize').click(function(){
		t_popup_close();
	});

	function t_popup_open(){
		$('#header').addClass('scrolled popup');
		$('.menu-item__enter, .menu-items').addClass('hidden');
		$('.menu-item__minimize, .menu-item__toggle').removeClass('hidden');

		$('#reg-popup').addClass('active');
		$(this).addClass('active');
		$("#t-popup__area").fadeIn(500);
		if ($(window).width() <= 10){
			$('body').css({'overflow-y': 'hidden'});
		}
		// disableScroll();
		$('body').css({'overflow-y': 'hidden'});
	}
	function t_popup_close(){

		$('.menu-item__minimize, .menu-item__toggle').addClass('hidden');
		$('.menu-item__enter, .menu-items').removeClass('hidden');
		$('.menu-item__enter').text('Вход');
		$('.t-popup').removeClass('active');
		$('.menu-item__enter').removeClass('active');
		$('#header').removeClass('popup');
		setTimeout(function(){
			$("#t-popup__area").fadeOut(500);
			//	enableScroll();
			$('body').css({'overflow-y': 'auto'});
		},500);
		$('body').css({'overflow-y': 'auto'});
		scroll_menu();

	}

	$('#create-user,.check-item').click(function(){
		$(this).toggleClass('checked');
	});

	$('.radio-item').click(function(){
		$(this).parents('.radio-group').find('.radio-item').removeClass('checked');
		$(this).addClass('checked');
	});


	$('.info-popup__close, .info-popup__close-area').click(function() {
		$(this).parents('.info-popup').removeClass('active');
	});

/*================= t-tabs ================*/
$('.t-login__enter').click(function(){
	$('.t-popup__menu_item').removeClass('active');
	$(this).addClass('active');
	$('.t-popup__tab.active').fadeOut(0);
	$('.t-tab__enter').fadeIn(0).addClass('active');
	$('.t-popup__content').addClass('enter-resize');
	$('.t-popoup__tabs').removeClass('reg-resize');
});
$('.t-login__reg, .reg').click(function(){
	$('.t-popup__menu_item').removeClass('active');
	$('.t-login__reg').addClass('active');
	$('.t-popup__tab.active').fadeOut(0);
	$('.t-tab__reg').fadeIn(0).addClass('active');
	$('.t-popup__content').addClass('enter-resize');
	$('.t-popoup__tabs').addClass('reg-resize');
});
$('.t-forgot').click(function(){
	$('.t-popup__menu_item').removeClass('active');
	$(this).addClass('active');
	$('.t-popup__tab.active').fadeOut(0);
	$('.t-popup__content').addClass('enter-resize');
	$('.t-tab__forgot').fadeIn(0).addClass('active');
	$('.t-popoup__tabs').removeClass('reg-resize');
});
/*================= //t-tabs ================*/
$('.i-check').click(function() {
	$(this).toggleClass('active');
});

if(!getCookie('news-check')) {
	$('.i-check').addClass('active');
	$(this).find('.i-check__text').text('Отключить уведомления');
	document.cookie = "news-check=active";
}
else if(getCookie('news-check') == 'active') {
	$(this).find('.i-check__text').text('Отключить уведомления');
	$('.i-check').addClass('active');
}
else {
	$(this).find('.i-check__text').text('Включить уведомления');
	$('.i-check').removeClass('active');
}

$('.news-check').click(function() {
	if ($(this).hasClass('active')){
		$(this).find('.i-check__text').text('Отключить уведомления');
		document.cookie = "news-check=active";
	}
	else{
		$(this).find('.i-check__text').text('Включить уведомления');
		document.cookie = "news-check=false";
	}
	
});

$('.registration-call').click(function(){
	$('.t-popup__content').addClass('enter-resize');
	$('.t-popoup__tabs').addClass('reg-resize');
	t_popup_open();
});

input_box();
function input_box(){
$('.input-box input').focus(function(){
	$(this).parents('.input-box').addClass('focus');
});

$('.input-box').click(function(){ $(this).find('input').focus(); });

$('.input-box input').focusout(function(){
	if($(this).val() == false ){
		$(this).parents('.input-box').removeClass('focus');
	}
});
}

$('.p-look').click(function(){
	if ($(this).hasClass('active')){
		$(this).removeClass('active');
		$(this).parents('.input-box').find('.t-input').attr('type','password');
	}
	else{
		$(this).addClass('active');
		$(this).parents('.input-box').find('.t-input').attr('type','text');
	}
	

});

function validEmailAddress(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
	
	$('.no-valid').click(function(){
		$(this).removeClass('no-valid');
		alert();
	});

	// $(".form").submit(function() {
	// 	error = 0;
	// 	$('.required').each(function(){
	// 		if( $(this).val().length == 0){
	// 			error = 1;
	// 			$(this).addClass('no-valid');
	//
	// 		}
	// 	});
    //
	// 	if (error == 1) {
	// 		return false;
	// 	}
	// 	else if ( $(this).find('.t-form__name').val().length == 0) {
	//
	// 			$(this).find('.t-form__name').addClass('no-valid');
	// 			return false;
	//
	// 	}
	// 	else if( $(this).find('.required').val().length == 0) {
	//
	// 			$(this).find('.required').addClass('no-valid');
	// 			return false;
	// 		 }
	// 	else if ($(this).find('[name="DATA[PHONE_WORK]"]').val().replace(/[^0-9]/g, '').length < 10) {
	//
	// 		$(this).find('[name="DATA[PHONE_WORK]"]').addClass('no-valid');
	// 		return false;
	//
	// 	} else {
	// 		var form = this;
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "application1.php",
	// 			data: $(this).serialize()
	// 		}).done(function() {
	// 			  $('.send-name, .send-phone, .send-mail,  text, textarea').val('').text('');
	// 						$('.send-phone').removeClass('no-valid');
	//
	//
	// 						setTimeout(function(){
	// 							window.open('thank-you.html');
	// 						}, 500);
	//
	// 		});
    //
	// 	}
    //
	// 	return false;
	//
	// });

	$('input').bind('keyup', function () {
		$(this).removeClass('no-valid');
	});



	$('.form').find('[name="DATA[PHONE_WORK]"]').bind('keyup', function () {
		if (this.value.replace(/[^0-9]/g, '').length < 11) {
			$(this).css({
				color: 'red'
			});
		} else {
			$(this).css({
				color: 'green'
			});
		}
	});

	$('.form').find('.t-form__mail').bind('keyup', function () {
		if (!validEmailAddress(this.value)) {
			$(this).css({
				color: 'red'
			});
		} else {
			$(this).css({
				color: 'green'
			});
		}
	});
	setTimeout(showHeaderError, 600);
	function showHeaderError() {
		if($("#reg-popup").data("error") == 1 || $(".t-form__forgot").data("forgot-error") == "1") {
			if($("#reg-popup").data("error-type") == "login") {
				$('.t-login__enter').click();
				$('.t-form__enter .t-form__name').addClass('focus');
				$('.t-form__enter .t-form__name').closest('.input-box').addClass('focus');
				$('.t-form__reg .t-form__mail').addClass('focus');
				$('.t-form__reg .t-form__mail').closest('.input-box').addClass('focus');
				$('.t-form__forgot .t-form__mail').addClass('focus');
				$('.t-form__forgot .t-form__mail').closest('.input-box').addClass('focus');
				t_popup_open()
			}
			else if($("#reg-popup").data("error-type") == "reg" && $("#reg-popup").data("auth") != 1) {
				$('.t-login__reg, .reg').click();
				$('.t-form__enter .t-form__name').addClass('focus');
				$('.t-form__enter .t-form__name').closest('.input-box').addClass('focus');
				$('.t-form__reg .t-form__name').addClass('focus');
				$('.t-form__reg .t-form__name').closest('.input-box').addClass('focus');
				$('.t-form__reg .t-form__mail').addClass('focus');
				$('.t-form__reg .t-form__mail').closest('.input-box').addClass('focus');
				$('.t-form__forgot .t-form__mail').addClass('focus');
				$('.t-form__forgot .t-form__mail').closest('.input-box').addClass('focus');
				t_popup_open()
			}
			else if($(".t-form__forgot").data("forgot-error") == "1") {
				$('.t-forgot').click();
				$('#forgot-errors').removeClass('hidden');
				t_popup_open()
			}
		}
	}
	$('#forgot-button, #reg-button, #login-button').click(function() {
		$(this).prev('.button').click();
	});

	if($('#reg-popup').data('ref')) {
		$('.t-login__reg, .reg').click();
		$('#ref-input').val($.trim($('#reg-popup').data('ref')));
	}
	
	$('input').on('input', function() {
		$(this).parent().addClass('focus');
	});
	// $('.t-form__name').bind("keypress", function(e){
	// 	// enter key code is 13
	// 	if(e.which === 13){
	// 		console.log("user pressed done");
	// 	}
	// })

	setInterval(flash__enter_money, 6000);

	function flash__enter_money(){
		var notice = getCookie('news-check');
		if(notice != 'false') {
			var id = $(".stat-o__item:first-of-type .stat-o__item_count").data("id");
			$.ajax({
				type: 'GET',
				url: '/operation/get/main-page',
				data: {id: id + 1},
				success: function (data) {
					if(data.length != 0) {
						$(".enter-money__header").html(data.directionName);
						$(".enter-money__name").html(data.name);
						$(".enter-money__count").html(data.amount + " &#8381;");
						var color = 'red';
						if (data.directionSymbol == '+') {
							color = 'green';
						}

						var text = '<div class="stat-o__item">' +
							'<div class="stat-o__item_count ' + color + '" data-id="' + data.id + '">' + data.directionSymbol + data.amount + ' ₽ </div>' +
							' <div class="stat-o__item_name"> ' + data.name + '</div></div>';

						$(".stat-o__item:first-of-type").before(text);
						if ($(".stat-o__item").length > 16) {
							$(".stat-o__item:last-of-type").remove();
						}
						$('#enter-money__popup').fadeToggle(300);
						setTimeout(function() { $('#enter-money__popup').fadeToggle(300); }, 5000);
						getInvestMoney();
						getMoneyPay();
					}
				},
			});
		}
	}

	function getMoneyPay(){
		$.ajax({
			type: 'GET',
			url: '/operation/get/money-pay',
			data: {},
			success: function (data) {
				$('.bottom-stat .bs__item:nth-of-type(4) .bs__item_count').html(data + ' ₽');
			},
		});
	}

	function getInvestMoney(){
		$.ajax({
			type: 'GET',
			url: '/operation/get/invest-money',
			data: {},
			success: function (data) {
				$('.bottom-stat .bs__item:nth-of-type(3) .bs__item_count').html(data + ' ₽');
			},
		});
	}


	$('#enter-money__popup .enter-money__close').click(function() {
		flash__enter_money();
	});

	function randomInteger(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	}

	function getCookie(name) {
		var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	showAlreadySendMoney();
	function showAlreadySendMoney(){
		$.ajax({
			type: 'GET',
			url: '/money/show/send/popup',
			data: {},
			success: function (data) {
				if(data.message != "no") {
					$("#popup-already-send-money .info-popup__text").html(data.amount);
					$("#popup-already-send-money").addClass("active");
				}
			},
		});
	}
});

 
 
 
 
 
 
 
$(document).ready(function() {
	/*help form*/
	$('#generate-code-form').submit(function(e) {
		var $form = $(this);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				if(data == "success") {
					var success = "Код подтверждения успешно отправлен, время доставки письма до 10 минут";
					$("#helpdesc-code-success").html(success);
					$("#helpdesc-code-errors").html("");
				}
				else {
					var errors = "";
					for (var key in data) {
						errors += data[key] + "<br>";
					}
					$("#helpdesc-code-errors").html(errors);
					$("#helpdesc-code-success").html("");
				}

			},
		});
		return false;
	});

	$('.show-help').click(function(){
		$("#helpdesc").addClass("active");
	});

	$('#helpdesc__message').submit(function(e) {
		var $form = $(this);
		var name = $('#generate-code-form .name').val();
		var code = $('#generate-code-form #help-code').val();
		var email = $('#generate-code-form .t-form__mail').val();
		var createUser = $('#helpdesc__message #create-user-checkbox').val();
		var text = $('#helpdesc__message textarea').val();

		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: { nameSupport: name, code: code, email: email, createUser: createUser, text: text},
			success: function(data) {
				if(data == "success") {
					var success = "Сообщение в Службу поддержки отправлено";
					// $("#helpdesc-message-success").html(success);
					$("#popup-support-ok").addClass("active");
					$("#helpdesc-message-errors").html("");
					$("#helpdesc .info-popup__close").click();
				}
				else {
					var errors = "";
					for (var key in data) {
						errors += data[key] + "<br>";
					}
					$("#helpdesc-message-errors").html(errors);
					$("#helpdesc-message-success").html("");
				}
			},
		});
		return false;
	});

	$('#helpdesc__message__auth').submit(function(e) {
		var $form = $(this);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				if(data == "success") {
					var success = "Сообщение в Службу поддержки отправлено";
					$("#popup-support-ok").addClass("active");
					// $("#helpdesc-message-success-auth").html(success);
					$("#helpdesc-message-errors-auth").html("");
					$("#helpdesc .info-popup__close").click();
				}
				else {
					var errors = "";
					for (var key in data) {
						errors += data[key] + "<br>";
					}
					$("#helpdesc-message-errors-auth").html(errors);
					$("#helpdesc-message-success-auth").html("");
				}
			},
		});
		return false;
	});

	$('.show-help, .helpdesc-button').click(function(){
		$("#helpdesc").addClass("active");
	});

	$('#send-support-auth, #send-support').click(function() {
		$(this).prev('.button').click();
	});
});

 
 
 
 
 
 
 
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'linear',
    positionUsing: '',
    speed: 350,
    trickle: true,
    trickleSpeed: 250,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, {
            transition: 'all ' + speed + 'ms linear',
            opacity: 0
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else if(n > 1) {
      return;
    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.25) {
          // Start out between 3 - 6% increments
          amount = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (n >= 0.25 && n < 0.65) {
          // increment between 0 - 3%
          amount = (Math.random() * 3) / 100;
        } else if (n >= 0.65 && n < 0.9) {
          // increment between 0 - 2%
          amount = (Math.random() * 2) / 100;
        } else if (n >= 0.9 && n < 0.99) {
          // finally, increment it .5 %
          amount = 0.005;
        } else {
          // after 99%, don't increment:
          amount = 0;
        }
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc();
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');

    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;

    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];

    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop,
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element.
   * The list is wrapped with a single space on each end to facilitate finding
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});

$(document).ready(function() {


/*================ MAP =================*/
function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.143093, lng: 48.550791},
          scrollwheel: false,
          zoom: 3
        });

        var image = 'http://global-invest.ltd/img/google-maps-gris-hi.png';
       
        bounds  = new google.maps.LatLngBounds();
        var coming_soon = [
          ['Brazil', -12.132368, -56.261611, 6],
		  ['Canada', 59.248827, -112.195816, 5],
		  ['Kazakhstan', 45.861056, 67.248038, 4],
		  ['China', 33.613092, 103.803758, 3],
		  ['India', 18.912200, 79.161811, 2],
		  ['Egypt', 23.886571, 29.620518, 1]
		];

		for (var i = 0; i < coming_soon.length; i++) {
		    var cs = coming_soon[i];
		    var marker = new google.maps.Marker({
		      position: {lat: cs[1], lng: cs[2]},
		      map: map,
		      icon: image,
		      title: cs[0],
		      zIndex: cs[3]
		    });
		    loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
			bounds.extend(loc);
		}
        var places = [
          ['New York Beach', 40.587165, -73.955437, 6],
		  ['Moscow office', 55.748983, 37.535245, 5],
		  ['München office', 48.143093, 11.550791, 4],
		  ['London office', 51.482759, -0.112043, 3],
		  ['Tokyo office', 35.684036, 139.765656, 2],
		  ['Sydney Beach', -33.739310, 150.947030, 1]
		];

		for (var i = 0; i < places.length; i++) {
		    var place = places[i];
		    var marker = new google.maps.Marker({
		      position: {lat: place[1], lng: place[2]},
		      map: map,
		      // shape: shape,
		      title: place[0],
		      zIndex: place[3]
		    });
		    loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
			bounds.extend(loc);
		}
		
		// map.fitBounds(bounds);      
		// map.panToBounds(bounds);     

        // var image = 'images/ac.png';
		// var beachMarker = new google.maps.Marker({
		// 	disableAutoPan: true,
		//     position: {lat: 48.143093, lng: 11.550791},
		//     map: map,
		//     animation: google.maps.Animation.DROP
		//     // icon: image
		//   });

      }

if ($('#map').length > 0){
	initMap();
}



 });
 
 
 
 
 
 
 
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
//# sourceMappingURL=main.js.map
