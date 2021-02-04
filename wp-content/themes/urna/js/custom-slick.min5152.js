"use strict";class Carousel{CarouselSlick(){var s=this;$(".owl-carousel[data-carousel=owl]:visible").each(function(){let e=$(this);e.hasClass("slick-initialized")||e.slick(s._getSlickConfigOption(this)),e.hasClass("instagram-feed")&&e.hasClass("slick-initialized")&&(e.slick("unslick"),e.slick(s._getSlickConfigOption(this)))})}_getSlickConfigOption(s){var e=$(s).data("items"),i=$(s).data("rows")?parseInt($(s).data("rows")):1,t=$(s).data("desktopslick")?$(s).data("desktopslick"):e,l=$(s).data("desktopsmallslick")?$(s).data("desktopsmallslick"):e,a=$(s).data("tabletslick")?$(s).data("tabletslick"):e,o=$(s).data("landscapeslick")?$(s).data("landscapeslick"):2,r=$(s).data("mobileslick")?$(s).data("mobileslick"):2;let n=e<$(s).find(".item").length&&$(s).data("pagination"),c=e<$(s).find(".item").length&&$(s).data("nav"),d=e<$(s).find(".item").length&&$(s).data("loop"),u=e<$(s).find(".item").length&&$(s).data("auto");var k={};if(k.dots=n,k.arrows=c,k.infinite=d,k.speed=1e3,k.autoplay=u,k.autoplaySpeed=$(s).data("autospeed")?$(s).data("autospeed"):2e3,k.cssEase="ease",k.slidesToShow=e,k.slidesToScroll=e,k.mobileFirst=!0,k.vertical=!1,k.prevArrow='<button type="button" class="slick-prev"><i class="icon-arrow-left icons"></i></button>',k.nextArrow='<button type="button" class="slick-next"><i class="icon-arrow-right icons"></i></button>',k.rtl="rtl"==$("html").attr("dir"),i>1){k.slidesToShow=1,k.slidesToScroll=1,k.rows=i,k.slidesPerRow=e;var h={slidesPerRow:e},y={slidesPerRow:t},f={slidesPerRow:l},p={slidesPerRow:a},w=$(s).data("unslick")?"unslick":{slidesPerRow:o},b=$(s).data("unslick")?"unslick":{slidesPerRow:r}}else var h={slidesToShow:e,slidesToScroll:e},y={slidesToShow:t,slidesToScroll:t},f={slidesToShow:l,slidesToScroll:l},p={slidesToShow:a,slidesToScroll:a},w=$(s).data("unslick")?"unslick":{slidesToShow:o,slidesToScroll:o},b=$(s).data("unslick")?"unslick":{slidesToShow:r,slidesToScroll:r};var g=$(s).data("nav")?{arrows:!1,dots:!0}:"";return w=$(s).data("unslick")?w:$.extend(!0,w,g),b=$(s).data("unslick")?b:$.extend(!0,b,g),k.responsive=[{breakpoint:1600,settings:h},{breakpoint:1199,settings:y},{breakpoint:991,settings:f},{breakpoint:767,settings:p},{breakpoint:479,settings:w},{breakpoint:0,settings:b}],k}getSlickTabs(){var s=this;$("ul.nav-tabs li a").on("shown.bs.tab",e=>{let i=$($(e.target).attr("href")).find(".owl-carousel[data-carousel=owl]:visible");let t=$($(e.relatedTarget).attr("href")).find(".owl-carousel[data-carousel=owl]");t.hasClass("slick-initialized")&&t.slick("unslick");i.hasClass("slick-initialized")||i.slick(s._getSlickConfigOption(i))})}}class Slider{tbaySlickSlider(){$(".style-horizontal, .style-vertical, .style-full").find(".flex-control-thumbs").each(function(){if(0!=$(this).children().length){var s={};s.vertical=$(this).parents(".style-horizontal, .style-full").length<1,s.slidesToShow=$(this).parent(".woocommerce-product-gallery").data("columns"),s.infinite=!1,s.focusOnSelect=!0,s.settings="unslick",s.prevArrow='<span class="owl-prev"></span>',s.nextArrow='<span class="owl-next"></span>',s.rtl=$("body").hasClass("rtl"),s.responsive=[{breakpoint:1025,settings:{vertical:!1,slidesToShow:4}}],$(this).slick(s)}})}}class Layout{tbaySlickLayoutSlide(){if($(".tbay-slider-for").length>0){var s={},e={};s.rtl=e.rtl=$("body").hasClass("rtl"),s.slidesToShow=1;var i=1;$(".tbay-slider-for").data("number")>0&&(s.slidesToShow=$(".tbay-slider-for").data("number"),i=$(".tbay-slider-for").data("number")-1),s.arrows=!0,s.infinite=!0,s.slidesToScroll=1,s.prevArrow='<span class="slick-prev"><i class="icon-arrow-left icons"></i></span>',s.nextArrow='<span class="slick-next"><i class="icon-arrow-right icons"></i></span>',s.responsive=[{breakpoint:1025,settings:{vertical:!1,slidesToShow:i}},{breakpoint:480,settings:{vertical:!1,slidesToShow:1}}],$(".tbay-slider-for").slick(s),$(".single-product .tbay-slider-for .slick-slide").length&&$(".single-product .tbay-slider-for .slick-track").addClass("woocommerce-product-gallery__image single-product-main-image")}}}class Slider_gallery{tbay_slider_gallery(){var s={};s.slidesToShow=1,s.slidesToScroll=1,s.prevArrow='<button type="button" class="slick-prev"><i class="linear-icon-chevron-left"></i></button>',s.nextArrow='<button type="button" class="slick-next"><i class="linear-icon-chevron-right"></i></button>',this.tbay_slider_gallery_hover(s),$(document.body).on("urna_lazyload_image",()=>{this.tbay_slider_gallery_hover(s)}),$(document.body).on("urna_gallery_resize",()=>{$(".tbay-product-slider-gallery").each(function(s,e){$(this).hasClass("slick-initialized")&&($(this).slick("unslick"),$(this).removeAttr("style"))})})}tbay_slider_gallery_hover(s){$(".has-slider-gallery").find(".product-image").hover(function(e){let i=$(e.currentTarget);i.next(".tbay-product-slider-gallery").hasClass("slick-initialized")||(i.next(".tbay-product-slider-gallery").css("height",i.parent().outerHeight()),i.next(".tbay-product-slider-gallery").slick(s))})}}!function(s,e){var i=function(s,e,i){var t;return function(){function l(){i||s.apply(a,o),t=null}var a=this,o=arguments;t?clearTimeout(t):i&&s.apply(a,o),t=setTimeout(l,e||100)}};jQuery.fn[e]=function(s){return s?this.bind("resize",i(s)):this.trigger(e)}}(jQuery,"smartresizefunc"),jQuery(document).ready(function(){var s=new Carousel,e=new Slider,i=new Layout,t=new Slider_gallery;s.CarouselSlick(),s.getSlickTabs(),e.tbaySlickSlider(),i.tbaySlickLayoutSlide(),t.tbay_slider_gallery(),$(window).smartresizefunc(function(){if($(window).width()>=767)try{s.CarouselSlick(),e.tbaySlickSlider(),t.tbay_slider_gallery()}catch(s){}})}),jQuery(window).on("load",function(){jQuery(document.body).on("urna_instagramfeed_slick",()=>{var s=new Carousel;s.CarouselSlick()})});var CustomSlickHandler=function(s,e){(new Carousel).CarouselSlick()};jQuery(window).on("elementor/frontend/init",function(){jQuery.isArray(urna_settings.elements_ready.slick)&&$.each(urna_settings.elements_ready.slick,function(s,e){elementorFrontend.hooks.addAction("frontend/element_ready/tbay-"+e+".default",CustomSlickHandler)})});