"use strict";!function(e,t,a){var n=e();e.fn.dropdownHover=function(a){return"ontouchstart"in document?this:(n=n.add(this.parent()),this.each(function(){function i(e){r.parents(".navbar").find(".navbar-toggle").is(":visible")||(t.clearTimeout(o),t.clearTimeout(s),s=t.setTimeout(function(){n.find(":focus").blur(),!0===u.instantlyCloseOthers&&n.removeClass("open"),t.clearTimeout(s),r.attr("aria-expanded","true"),c.addClass("open"),r.trigger(h)},u.hoverDelay))}var o,s,r=e(this),c=r.parent(),l={delay:500,hoverDelay:0,instantlyCloseOthers:!0},d={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},h="show.bs.dropdown",u=e.extend(!0,{},l,a,d);c.hover(function(e){if(!c.hasClass("open")&&!r.is(e.target))return!0;i(e)},function(){t.clearTimeout(s),o=t.setTimeout(function(){r.attr("aria-expanded","false"),c.removeClass("open"),r.trigger("hide.bs.dropdown")},u.delay)}),r.hover(function(e){if(!c.hasClass("open")&&!c.is(e.target))return!0;i(e)}),c.find(".dropdown-submenu").each(function(){var a,n=e(this);n.hover(function(){t.clearTimeout(a),n.children(".dropdown-menu").show(),n.siblings().children(".dropdown-menu").hide()},function(){var e=n.children(".dropdown-menu");a=t.setTimeout(function(){e.hide()},u.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);class StickyHeader{constructor(){if(0!==$("#tbay-header").length||0!==$("#tbay-customize-header").length){$("#tbay-header").length>0&&(this.$tbayHeader=$("#tbay-header"),this.$tbayHeaderMain=$("#tbay-header .header-main")),$("#tbay-customize-header").length>0&&(this.$tbayHeader=$("#tbay-customize-header"),this.$tbayHeaderMain=$("#tbay-customize-header .header-main")),this.$tbayHeader.hasClass("main-sticky-header")&&this.$tbayHeaderMain.length>0&&this._initStickyHeader(),$(".search-min-wrapper .btn-search-min").click(this._onClickSeachMin),$(".tbay-search-form .overlay-box").click(this._onClickOverLayBox),this._intSearchOffcanvas;let e=$(".element-sticky-header");e.length>0&&this._initELementStickyheader(e)}}_initStickyHeader(){var e=this,t=$(window).width(),a=e.$tbayHeader.outerHeight(),n=e.$tbayHeaderMain.outerHeight(),i=$("#wpadminbar").length>0?$("#wpadminbar").outerHeight():0,o=e.$tbayHeaderMain.offset().top;if(t>=1024)if(0==o||o==i){if(e.$tbayHeader.hasClass("sticky-header"))return;e._stickyHeaderOnDesktop(n,o,i),e.$tbayHeaderMain.addClass("sticky-1"),$(window).scroll(function(){$(this).scrollTop()>a?e.$tbayHeaderMain.addClass("sticky-box"):e.$tbayHeaderMain.removeClass("sticky-box")})}else $(window).scroll(function(){if(e.$tbayHeader.hasClass("main-sticky-header"))if($(this).scrollTop()>o-i){if(e.$tbayHeader.hasClass("sticky-header"))return;e._stickyHeaderOnDesktop(n,o,i)}else e.$tbayHeaderMain.css("top",0).css("position","relative").removeClass("sticky-header").parent().css("padding-top",0),e.$tbayHeaderMain.prev().css("margin-bottom",0)})}_stickyHeaderOnDesktop(e,t,a){this.$tbayHeaderMain.addClass("sticky-header").css("top",a).css("position","fixed"),0==t||t==a?this.$tbayHeaderMain.parent().css("padding-top",e):this.$tbayHeaderMain.prev().css("margin-bottom",e)}_onClickSeachMin(){$(".tbay-search-form.tbay-search-min form").toggleClass("show"),$(this).toggleClass("active")}_onClickOverLayBox(){$(".search-min-wrapper .btn-search-min").removeClass("active"),$(".tbay-search-form.tbay-search-min form").removeClass("show")}_intSearchOffcanvas(){$('[data-toggle="offcanvas-main-search"]').on("click",function(){$("#wrapper-container").toggleClass("show"),$("#tbay-offcanvas-main").toggleClass("show")});var e=$("#tbay-offcanvas-main, .search");$(window).on("click.Bst",function(t){0!=e.has(t.target).length||e.is(t.target)||($("#wrapper-container").removeClass("show"),$("#tbay-offcanvas-main").removeClass("show"))})}_initELementStickyheader(e){var t=e.first();let a=this;if(0!==t.parents(".tbay_header-template").length){var n=$("#wpadminbar").length>0?$("#wpadminbar").outerHeight():0,i=t.offset().top-n;a._initELementStickyheaderContent(i,e,t,n),$(window).scroll(function(){a._initELementStickyheaderContent(i,e,t,n)})}}_initELementStickyheaderContent(e,t,a,n){if($(window).scrollTop()>=e){var i=0;t.each(function(){if(!($(this).parents(".element-sticky-header").length>0)&&(i+=$(this).outerHeight(),$(this).addClass("sticky"),$(this).prevAll(".element-sticky-header").length>0)){let e=0;$(this).prevAll(".element-sticky-header").each(function(){e+=$(this).outerHeight()}),$(this).css("top",e+n)}}),a.css("top",n),0===e?a.parent().css("padding-top",i):a.prev().css("margin-bottom",i)}else a.css("top",""),0===e?t.last().next().css("padding-top",""):a.prev().css("margin-bottom",""),t.each(function(){$(this).removeClass("sticky"),$(this).prev(".element-sticky-header").length>0&&$(this).css("top","")})}}const TREE_VIEW_OPTION_MEGA_MENU={animated:300,collapsed:!0,unique:!0,persist:"location"},TREE_VIEW_OPTION_MOBILE_MENU={animated:300,collapsed:!0,unique:!0,hover:!1},DEVICE={ANDROID:/Android/i,BLACK_BERRY:/BlackBerry/i,IOS:/iPhone|iPad|iPod/i,OPERA:/Opera Mini/i,WINDOW:/IEMobile/i,ANY:/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i};!function(e){e.extend(e.fn,{swapClass:function(e,t){var a=this.filter("."+e);return this.filter("."+t).removeClass(t).addClass(e),a.removeClass(e).addClass(t),this},replaceClass:function(e,t){return this.filter("."+e).removeClass(e).addClass(t).end()},hoverClass:function(t){return t=t||"hover",this.hover(function(){e(this).addClass(t)},function(){e(this).removeClass(t)})},heightToggle:function(e,t){e?this.animate({height:"toggle"},e,t):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"](),t&&t.apply(this,arguments)})},heightHide:function(e,t){e?this.animate({height:"hide"},e,t):(this.hide(),t&&this.each(t))},prepareBranches:function(e){return e.prerendered||(this.filter(":last-child:not(ul)").addClass(t.last),this.filter((e.collapsed?"":"."+t.closed)+":not(."+t.open+")").find(">ul").hide()),this.filter(":has(>ul),:has(>.dropdown-menu)")},applyClasses:function(a,n){this.filter(":has(>ul):not(:has(>a))").find(">span").click(function(t){n.apply(e(this).next())}).add(e("a",this)).hoverClass(),a.prerendered||(this.filter(":has(>ul:hidden),:has(>.dropdown-menu:hidden)").addClass(t.expandable).replaceClass(t.last,t.lastExpandable),this.not(":has(>ul:hidden),:has(>.dropdown-menu:hidden)").addClass(t.collapsable).replaceClass(t.last,t.lastCollapsable),this.prepend('<div class="'+t.hitarea+'"/>').find("div."+t.hitarea).each(function(){var t="";e.each(e(this).parent().attr("class").split(" "),function(){t+=this+"-hitarea "}),e(this).addClass(t)})),this.find("div."+t.hitarea).click(n)},treeview:function(a){function n(){e(this).parent().find(">.hitarea").swapClass(t.collapsableHitarea,t.expandableHitarea).swapClass(t.lastCollapsableHitarea,t.lastExpandableHitarea).end().swapClass(t.collapsable,t.expandable).swapClass(t.lastCollapsable,t.lastExpandable).find(">ul,>.dropdown-menu").heightToggle(a.animated,a.toggle),a.unique&&e(this).parent().siblings().find(">.hitarea").replaceClass(t.collapsableHitarea,t.expandableHitarea).replaceClass(t.lastCollapsableHitarea,t.lastExpandableHitarea).end().replaceClass(t.collapsable,t.expandable).replaceClass(t.lastCollapsable,t.lastExpandable).find(">ul,>.dropdown-menu").heightHide(a.animated,a.toggle)}function i(){var t=[];s.each(function(a,n){t[a]=e(n).is(":has(>ul:visible)")?1:0}),e.cookie(a.cookieId,t.join(""))}if((a=e.extend({cookieId:"treeview"},a)).add)return this.trigger("add",[a.add]);if(a.toggle){var o=a.toggle;a.toggle=function(){return o.apply(e(this).parent()[0],arguments)}}this.addClass("treeview");var s=this.find("li").prepareBranches(a);switch(a.persist){case"cookie":var r=a.toggle;a.toggle=function(){i(),r&&r.apply(this,arguments)},function(){var t=e.cookie(a.cookieId);if(t){var n=t.split("");s.each(function(t,a){e(a).find(">ul")[parseInt(n[t])?"show":"hide"]()})}}();break;case"location":var c=this.find("a").filter(function(){return this.href.toLowerCase()==location.href.toLowerCase()});c.length&&c.addClass("selected").parents("ul, li").add(c.next()).show()}return s.applyClasses(a,n),a.control&&(!function(a,i){function o(i){return function(){return n.apply(e("div."+t.hitarea,a).filter(function(){return!i||e(this).parent("."+i).length})),!1}}e("a:eq(0)",i).click(o(t.collapsable)),e("a:eq(1)",i).click(o(t.expandable)),e("a:eq(2)",i).click(o())}(this,a.control),e(a.control).show()),this.bind("add",function(i,o){e(o).prev().removeClass(t.last).removeClass(t.lastCollapsable).removeClass(t.lastExpandable).find(">.hitarea").removeClass(t.lastCollapsableHitarea).removeClass(t.lastExpandableHitarea),e(o).find("li").andSelf().prepareBranches(a).applyClasses(a,n)})}});var t=e.fn.treeview.classes={open:"open",closed:"closed",expandable:"expandable",expandableHitarea:"expandable-hitarea",lastExpandableHitarea:"lastExpandable-hitarea",collapsable:"collapsable",collapsableHitarea:"collapsable-hitarea",lastCollapsableHitarea:"lastCollapsable-hitarea",lastCollapsable:"lastCollapsable",lastExpandable:"lastExpandable",last:"last",hitarea:"hitarea"};e.fn.Treeview=e.fn.treeview}(jQuery);let tbaysetCookie=(e,t,a)=>{var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var i="expires="+n.toUTCString();document.cookie=e+"="+t+"; "+i+";path=/"},tbaygetCookie=e=>{var t=e+"=";var a=decodeURIComponent(document.cookie);var n=a.split(";");for(var i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""},isDevice=e=>{navigator.userAgent.match(e)};class Mobile{constructor(){this._topBarDevice(),this._fixVCAnimation(),this._mobileMenu(),this._SidebarShopMobile(),this._SearchFocusActive(),this._SearchOnClickSearchHeader(),this._PopupLoginMobile(),this._Select_change_form(),$(window).scroll(()=>{this._topBarDevice();this._fixVCAnimation()})}_topBarDevice(){var e=$(window).scrollTop(),t=$(".topbar-device-mobile").height(),a=$(window).scrollTop();$(".topbar-device-mobile").toggleClass("active",e<=t),$("#tbay-mobile-menu").toggleClass("offsetop",0==a)}_fixVCAnimation(){if($(".wpb_animate_when_almost_visible").length>0&&!$(".wpb_animate_when_almost_visible").hasClass("wpb_start_animation")){let t=$(window).height(),a=$(".wpb_animate_when_almost_visible:not(.wpb_start_animation)");var e=a.offset().top-$(window).scrollTop();isDevice(DEVICE.ANY)?a.removeClass("wpb_animate_when_almost_visible"):e<t-50&&a.addClass("wpb_start_animation animated")}}_mobileMenu(){$('[data-toggle="offcanvas"], .btn-offcanvas').click(function(){$("#wrapper-container").toggleClass("active"),$("#tbay-mobile-menu").toggleClass("active")}),$("#main-mobile-menu .caret").click(function(){$("#main-mobile-menu .dropdown").removeClass("open"),$(event.target).parent().addClass("open")})}_SidebarShopMobile(){let e=$(".button-filter-mobile"),t=$(".filter-mobile .close");e.on("click",function(e){$(".filter-mobile").addClass("active"),$("body").addClass("filter-mobile-active")}),t.on("click",function(e){$(".filter-mobile").removeClass("active"),$("body").removeClass("filter-mobile-active")});let a=$(window),n=$(".filter-mobile .content, .button-filter-mobile, .filter-mobile .close");a.on("click.Bst,click touchstart tap",e=>{if(!$(".filter-mobile").hasClass("active"))return;0!=n.has(e.target).length||n.is(e.target)||($(".filter-mobile").removeClass("active"),$("body").removeClass("filter-mobile-active"))})}_SearchFocusActive(){let e=$(".tbay-search-mobile .tbay-search"),t=$(".tbay-search-mobile .button-search-cancel");e.focusin(function(){$(e.parents("#tbay-mobile-menu-navbar")).addClass("search-mobile-focus"),e.parent().find(".button-search-cancel").addClass("cancel-active")}),t.on("click",function(){$(t.parents("#tbay-mobile-menu-navbar")).removeClass("search-mobile-focus"),t.removeClass("cancel-active")})}_SearchOnClickSearchHeader(){let e=$(".search-device .search-icon"),t=$(".search-device .button-search-cancel");e.on("click",function(){$(e.parent()).addClass("active-search-mobile")}),t.on("click",function(){$(t.parents(".search-device")).removeClass("active-search-mobile"),t.removeClass("cancel-active")})}_PopupLoginMobile(){let e=$(".mmenu-account .popup-login a, .footer-device-mobile > .device-account > a.popup-login");e.on("click",function(){let t=$("#tbay-mobile-menu-navbar").data("mmenu");$("#custom-login-wrapper").modal("show"),$(e.parents("#tbay-mobile-menu-navbar")).removeClass("mm-menu_opened"),t.close()})}_Select_change_form(){$(".topbar-device-mobile > form select").on("change",function(){this.form.submit()})}}class AccountMenu{constructor(){this._slideToggleAccountMenu(".tbay-login"),this._slideToggleAccountMenu(".topbar-mobile"),this._urnaClickNotMyAccountMenu()}_urnaClickNotMyAccountMenu(){var e=$(window),t=$(".tbay-login .dropdown .account-menu,.topbar-mobile .dropdown .account-menu,.tbay-login .dropdown .account-button,.topbar-mobile .dropdown .account-button");e.on("click.Bst",function(e){0!=t.has(e.target).length||t.is(e.target)||($(".tbay-login .dropdown .account-menu").slideUp(500),$(".topbar-mobile .dropdown .account-menu").slideUp(500))})}_slideToggleAccountMenu(e){$(e).find(".dropdown .account-button").click(function(){$(e).find(".dropdown .account-menu").slideToggle(500)})}}class BackToTop{constructor(){this._init()}_init(){$(window).scroll(function(){window.$=window.jQuery;var e=$(this).scrollTop()>400;$(".tbay-to-top").length>0&&$(".tbay-to-top").toggleClass("active",e),$(".tbay-category-fixed").length>0&&$(".tbay-category-fixed").toggleClass("active",e)}),($("#back-to-top-mobile").length>0||$("#back-to-top").length>0)&&$("#back-to-top-mobile, #back-to-top").click(this._onClickBackToTop)}_onClickBackToTop(){$("html, body").animate({scrollTop:"0px"},800)}}class CanvasMenu{constructor(){this._init(),this._remove_click_Outside(),this._initCanvasMenuSidebar(),this._initCanvasMenu()}_init(){$("#tbay-offcanvas-main .btn-toggle-canvas").on("click",function(){$("#wrapper-container").removeClass("active")}),$("#main-menu-offcanvas .caret").click(function(){return $("#main-menu-offcanvas .dropdown").removeClass("open"),$(this).parent().addClass("open"),!1}),$('[data-toggle="offcanvas-main"]').on("click",function(){$("#wrapper-container").toggleClass("active"),$("#tbay-offcanvas-main").toggleClass("active")})}_remove_click_Outside(){$(window).on("click.Bst,click touchstart tap",function(e){let t=$("#tbay-offcanvas-main, .btn-toggle-canvas");if(0==t.has(e.target).length&&!t.is(e.target))return void $("#wrapper-container").removeClass("active")})}_initCanvasMenuSidebar(){$(document).on("click",".canvas-menu-sidebar .btn-canvas-menu",function(){$("body").toggleClass("canvas-menu-active")}),$(document).on("click",".close-canvas-menu, .bg-close-canvas-menu",function(){$("body").removeClass("canvas-menu-active")})}_initCanvasMenu(){let e=$(".element-menu-canvas");0!==e.length&&(e.each(function(){jQuery(this).find(".canvas-menu-btn-wrapper > a").on("click",function(e){$(this).parent().parent().addClass("open"),e.stopPropagation()})}),jQuery(document).on("click",".canvas-overlay-wrapper",function(e){$(this).parent().removeClass("open"),e.stopPropagation()}))}}class FuncCommon{constructor(){this._progressAnimation(),this._createWrapStart(),$(".mod-heading .widget-title > span").wrapStart(),this._urnaActiveAdminBar(),this._urnaResizeMegamenu(),this._urnaTooltip(),this._initHeaderCoverBG(),this._initCanvasSearch(),this._initTreeviewMenu(),this._categoryMenu(),this._initContentMinHeight(),this._changeDefaultTimeago(),$(window).scroll(()=>{this._urnaActiveAdminBar()}),$(window).on("resize",()=>{this._urnaResizeMegamenu()}),this._addAccordionLoginandCoupon(),this._initFix_vc_full_width_row()}_urnaActiveAdminBar(){jQuery("#wpadminbar").length>0&&jQuery("body").addClass("active-admin-bar")}_urnaTooltip(){void 0!==$.fn.tooltip&&$('[data-toggle="tooltip"]').tooltip()}_createWrapStart(){$.fn.wrapStart=function(){return this.each(function(){var e=$(this).contents().filter(function(){return 3==this.nodeType}).first(),t=e.text().trim(),a=t.split(" ",1).join(" ");e.length&&(e[0].nodeValue=t.slice(a.length),e.before("<b>"+a+"</b>"))})}}_progressAnimation(){$("[data-progress-animation]").each(function(){var e=$(this);e.appear(function(){var t=e.attr("data-appear-animation-delay")?e.attr("data-appear-animation-delay"):1;t>1&&e.css("animation-delay",t+"ms"),setTimeout(function(){e.animate({width:e.attr("data-progress-animation")},800)},t)},{accX:0,accY:-50})})}_urnaResizeMegamenu(){var e=jQuery("body").innerWidth();0!==jQuery(".tbay_custom_menu").length&&(jQuery(".tbay_custom_menu").length>0&&jQuery(".tbay_custom_menu").hasClass("tbay-vertical-menu")&&(e>767?this._resizeMegaMenuOnDesktop():this._initTreeViewForMegaMenuOnMobile()),jQuery(".tbay-megamenu").length>0&&jQuery(".tbay-megamenu,.tbay-offcanvas-main").hasClass("verticle-menu")&&e>767&&this._resizeMegaMenuVertical())}_resizeMegaMenuVertical(){var e=parseInt($("#main-container.container").innerWidth()),t=e-parseInt($(".verticle-menu").innerWidth());$(".verticle-menu").find(".aligned-fullwidth").children(".dropdown-menu").css({"max-width":t,width:e-30})}_resizeMegaMenuOnDesktop(){let e=$("#main-container.container").innerWidth()-$(".tbay-vertical-menu").innerWidth(),t=$("#main-container.container").innerWidth()-30;$(".tbay-vertical-menu").find(".aligned-fullwidth").children(".dropdown-menu").css({"max-width":e,width:t})}_initTreeViewForMegaMenuOnMobile(){$(".tbay-vertical-menu > .widget_nav_menu >.nav > ul").treeview(TREE_VIEW_OPTION_MEGA_MENU)}_addAccordionLoginandCoupon(){$(".showlogin, .showcoupon").click(function(e){$(e.currentTarget).toggleClass("active")})}_initHeaderCoverBG(){if(0!==$("#tbay-header").length||0!==$("#tbay-customize-header").length){let e=$(".tbay-horizontal .navbar-nav.megamenu > li, #primary-menu.navbar-nav > li, #tbay-header .recent-view .urna-recent-viewed-products, #tbay-customize-header .recent-view .urna-recent-viewed-products"),t=$(".tbay-search-form .tbay-search"),a=$(".category-inside .category-inside-title"),n=$(".cart-popup");e.mouseenter(function(){0!=$(this).children(".dropdown-menu, ul, .content-view").length&&($("#tbay-header").addClass("nav-cover-active-1"),$("#tbay-customize-header").addClass("nav-cover-active-1"))}).mouseleave(function(){$("#tbay-header").removeClass("nav-cover-active-1"),$("#tbay-customize-header").removeClass("nav-cover-active-1")}),t.focusin(function(){t.parents(".sidebar-canvas-search").length>0||($("#tbay-header").addClass("nav-cover-active-2"),$("#tbay-customize-header").addClass("nav-cover-active-2"))}).focusout(function(){$("#tbay-header").removeClass("nav-cover-active-2"),$("#tbay-customize-header").removeClass("nav-cover-active-2")}),n.on("shown.bs.dropdown",function(e){$(e.target).closest("#tbay-header").addClass("nav-cover-active-3"),$(e.target).closest("#tbay-customize-header").addClass("nav-cover-active-3")}).on("hidden.bs.dropdown",function(e){$(e.target).closest("#tbay-header").removeClass("nav-cover-active-3"),$(e.target).closest("#tbay-customize-header").removeClass("nav-cover-active-3")}),a.parents("#tbay-header")&&($(document.body).on("urna_category_inside_open",()=>{$("#tbay-header").addClass("nav-cover-active-4")}),$(document.body).on("urna_category_inside_close",()=>{$("#tbay-header").removeClass("nav-cover-active-4")})),a.parents("#tbay-customize-header")&&($(document.body).on("urna_category_inside_open",()=>{$("#tbay-customize-header").addClass("nav-cover-active-4")}),$(document.body).on("urna_category_inside_close",()=>{$("#tbay-customize-header").removeClass("nav-cover-active-4")}))}}_initCanvasSearch(){let e=$("#tbay-search-form-canvas .sidebar-canvas-search .sidebar-content .tbay-search");e.focusin(function(){e.parent().addClass("search_cv_active")}).focusout(function(){e.parent().removeClass("search_cv_active")})}_initTreeviewMenu(){$("#category-menu").addClass("treeview"),jQuery(".treeview-menu .menu, #category-menu").treeview(TREE_VIEW_OPTION_MEGA_MENU),jQuery("#main-mobile-menu, #main-mobile-menu-xlg").treeview(TREE_VIEW_OPTION_MOBILE_MENU)}_categoryMenu(){$(".category-inside .category-inside-title").click(function(){$(event.target).parents(".category-inside").toggleClass("open"),$(event.target).parents(".category-inside").hasClass("open")?$(document.body).trigger("urna_category_inside_open"):$(document.body).trigger("urna_category_inside_close")}),$(window).on("click.Bst,click touchstart tap",function(e){if("open"!==urna_settings.category_open){let t=$(".category-inside .category-inside-title, .category-inside-content");0===$("#tbay-header").length&&0===$("#tbay-customize-header").length||($(".category-inside").hasClass("open")||$("#tbay-header").hasClass("nav-cover-active-4")&&$("#tbay-customize-header").hasClass("nav-cover-active-4"))&&(0!=t.has(e.target).length||t.is(e.target)||($(".category-inside").removeClass("open"),$("#tbay-header").removeClass("nav-cover-active-4"),$("#tbay-customize-header").removeClass("nav-cover-active-4")))}})}_initContentMinHeight(){if(0!==$("#tbay-header").length||0!==$("#tbay-customize-header").length){let t=jQuery("body").innerWidth(),a=jQuery(window).height(),n=jQuery("#tbay-main-content").outerHeight();if(jQuery("#tbay-header").length>0)e=jQuery("#tbay-header").outerHeight();if(jQuery("#tbay-customize-header").length>0)var e=jQuery("#tbay-customize-header").outerHeight();n<a&&t>1200&&jQuery("#tbay-main-content").css("min-height",a-e)}}_changeDefaultTimeago(){void 0!==jQuery.timeago&&jQuery.extend(jQuery.timeago.settings.strings,{suffixAgo:urna_settings.timeago.suffixAgo,suffixFromNow:urna_settings.timeago.suffixFromNow,inPast:urna_settings.timeago.inPast,seconds:urna_settings.timeago.seconds,minute:urna_settings.timeago.minute,minutes:urna_settings.timeago.minutes,hour:urna_settings.timeago.hour,hours:urna_settings.timeago.hours,day:urna_settings.timeago.day,days:urna_settings.timeago.days,month:urna_settings.timeago.month,months:urna_settings.timeago.months,year:urna_settings.timeago.year,years:urna_settings.timeago.years})}_initFix_vc_full_width_row(){function e(e){var t=$('[data-vc-full-width="true"]');jQuery.each(t,function(){if("rtl"==$("html").attr("dir")){if(parseInt($("body").css("padding-right"))>0){let e=parseInt($("body").css("width"))-parseInt($("body").css("padding-right")),t=(e-parseInt($("#main-container").css("width")))/2,a=t;$(this).data("vc-stretch-content")&&(t=""),$(this).css("width",e).css("right",-a).css("left","").css("padding-left",t).css("padding-right",t)}}else if(parseInt($("body").css("padding-left"))>0){let e=parseInt($("body").css("width"))-parseInt($("body").css("padding-left")),t=(e-parseInt($("#main-container").css("width")))/2,a=t;$(this).data("vc-stretch-content")&&(t=""),$(this).css("width",e).css("left",-a).css("padding-left",t).css("padding-right",t)}})}jQuery(document).on("vc-full-width-row-single",e)}}class NewsLetter{constructor(){this._init()}_init(){let e=$("#popupNewsletterModal");0!==e.length&&(e.on("hidden.bs.modal",function(){tbaysetCookie("hiddenmodal",1,.1)}),setTimeout(function(){""==tbaygetCookie("hiddenmodal")&&e.modal("show")},3e3))}}class Banner{constructor(){this._bannerWidget(),this._bannerAddon()}_bannerWidget(){let e=$("#banner-remove");0!==e.length&&e.on("click",function(e){$(e.target).parents(".widget_urna_banner_image").slideUp("slow"),tbaysetCookie("banner_remove",1,.1)})}_bannerAddon(){let e=$(".banner-remove");0===e.length?$(".elementor-widget-tbay-banner-close").each(function(){$(this).closest("section").addClass("section-banner-close")}):e.on("click",function(e){let t=$(this).data("id");void 0!==t&&($(this).parents(".elementor-widget-tbay-banner-close").slideUp("slow"),Cookies.set("banner_remove_"+t,"hidden",{expires:.1,path:"/"}),e.preventDefault())})}}class Search{constructor(){this._init()}_init(){this._urnaSearchMobile(),this._searchToTop(),this._searchCanvasForm(),this._searchCanvasFormV3(),$(".button-show-search").click(()=>$(".tbay-search-form").addClass("active")),$(".button-hidden-search").click(()=>$(".tbay-search-form").removeClass("active"))}_urnaSearchMobile(){$(".topbar-mobile .search-popup, .search-device-mobile").each(function(){$(this).find(".show-search").click(e=>{$(this).find(".tbay-search-form").slideToggle(500);$(this).find(".tbay-search-form .input-group .tbay-search").focus();$(e.currentTarget).toggleClass("active")})}),$(window).on("click.Bst,click touchstart tap",function(e){var t=$(".footer-device-mobile > div i, .topbar-device-mobile .search-device-mobile i ,.search-device-mobile .tbay-search-form form");$(".search-device-mobile .show-search").hasClass("active")&&(0!=t.has(e.target).length||t.is(e.target)||($(".search-device-mobile .tbay-search-form").slideUp(500),$(".search-device-mobile .show-search").removeClass("active"),$("body").removeClass("mobile-search-active")))}),$(".topbar-mobile .dropdown-menu").click(function(e){e.stopPropagation()})}_searchToTop(){$(".search-totop-wrapper .btn-search-totop").click(function(){$(".search-totop-content").toggleClass("active"),$(this).toggleClass("active")});var e=$(".search-totop-wrapper .btn-search-totop, .search-totop-content");$(window).on("click.Bst",function(t){0!=e.has(t.target).length||e.is(t.target)||($(".search-totop-wrapper .btn-search-totop").removeClass("active"),$(".search-totop-content").removeClass("active"))})}_searchCanvasForm(){let e=$("#tbay-search-form-canvas");e.find("button.search-open").click(function(){$(event.target).parents("#tbay-search-form-canvas").toggleClass("open"),$("body").toggleClass("active-search-canvas")});let t=$(window),a=$("#tbay-search-form-canvas .search-open, #tbay-search-form-canvas .sidebar-content");t.on("click.Bst",function(t){e.hasClass("open")&&(0!=a.has(t.target).length||a.is(t.target)||(e.removeClass("open"),$("body").removeClass("active-search-canvas")))}),e.find("button.btn-search-close").click(function(){e.hasClass("open")&&(e.removeClass("open"),$("body").removeClass("active-search-canvas"))})}_searchCanvasFormV3(){let e=$("#tbay-search-form-canvas-v3");e.find("button.search-open").click(function(){$(event.target).parents("#tbay-search-form-canvas-v3").toggleClass("open"),$("body").toggleClass("active-search-canvas")});let t=$(window),a=$("#tbay-search-form-canvas-v3 .search-open, #tbay-search-form-canvas-v3 .sidebar-content");t.on("click.Bst",function(t){e.hasClass("open")&&(0!=a.has(t.target).length||a.is(t.target)||(e.removeClass("open"),$("body").removeClass("active-search-canvas")))}),e.find("button.btn-search-close").click(function(){e.hasClass("open")&&(e.removeClass("open"),$("body").removeClass("active-search-canvas"))})}}class TreeView{constructor(){this._tbayTreeViewMenu()}_tbayTreeViewMenu(){void 0!==$.fn.treeview&&void 0!==$(".tbay-treeview")&&0!==$(".tbay-treeview").length&&$(".tbay-treeview").each(function(){$(".tbay-treeview").find(".hitarea").length>0||$(this).find("> ul").treeview({animated:400,collapsed:!0,unique:!0,persist:"location"})})}}class Section{constructor(){this._tbayMegaMenu(),this._tbayRecentlyView()}_tbayMegaMenu(){let e=$(".elementor-widget-tbay-nav-menu > .elementor-widget-container > .tbay-addon-nav-menu");0!==e.length&&e.each(function(){void 0!==$(this).attr("data-wrapper")&&"horizontal"===$(this).data("wrapper").layout&&($(this).closest(".elementor-top-column").hasClass("tbay-column-static")||$(this).closest(".elementor-top-column").addClass("tbay-column-static"),$(this).closest("section").hasClass("tbay-section-static")||$(this).closest("section").addClass("tbay-section-static"))})}_tbayRecentlyView(){let e=$(".tbay-addon-header-recently-viewed");0!==e.length&&e.each(function(){$(this).closest(".elementor-top-column").hasClass("tbay-column-static")||$(this).closest(".elementor-top-column").addClass("tbay-column-static"),$(this).closest(".elementor-top-column").hasClass("tbay-column-recentlyviewed")||$(this).closest(".elementor-top-column").addClass("tbay-column-recentlyviewed"),$(this).closest("section").hasClass("tbay-section-recentlyviewed")||$(this).closest("section").addClass("tbay-section-recentlyviewed"),$(this).closest("section").hasClass("tbay-section-static")||$(this).closest("section").addClass("tbay-section-static")})}}class Preload{constructor(){this._init()}_init(){if($.fn.jpreLoader){var e=$(".js-preloader");e.jpreLoader({},function(){e.addClass("preloader-done"),$("body").trigger("preloader-done"),$(window).trigger("resize")})}$(".tbay-page-loader").delay(100).fadeOut(400,function(){$("body").removeClass("tbay-body-loading"),$(this).remove()}),$(document.body).hasClass("tbay-body-loader")&&setTimeout(function(){$(document.body).removeClass("tbay-body-loader"),$(".tbay-page-loader").fadeOut(250)},300)}}!function(e){e.fn.unveil=function(t,a){function n(){var t=c.filter(function(){var t=e(this),a=o.scrollTop()-30,n=a+o.height(),i=t.offset().top;return i+t.height()>=a-s&&i<=n+s});i=t.trigger("unveil"),c=c.not(i)}var i,o=e(window),s=t||0,r=window.devicePixelRatio>1?"data-src-retina":"data-src",c=this;return this.one("unveil",function(){var e=this.getAttribute(r);(e=e||this.getAttribute("data-src"))&&(this.setAttribute("src",e),"function"==typeof a&&a.call(this))}),o.on("scroll.unveil resize.unveil lookup.unveil",n),n(),this}}(window.jQuery||window.Zepto);class layzyLoadImage{constructor(){urna_settings.lazyload&&($(window).off("scroll.unveil resize.unveil lookup.unveil"),this._intImageLoad(".tbay-image-loaded:not(.image-loaded) .unveil-image",".tbay-image-loaded"),this._initImageProduct())}_initImageProduct(){var e=$(".product-image:not(.image-loaded) .unveil-image, .tbay-gallery-varible:not(.image-loaded) .unveil-image");e.length&&e.unveil(1,function(){$(this).load(function(){$(this).parents(".product-image, .tbay-gallery-varible").first().addClass("image-loaded"),$(this).removeAttr("data-src"),$(this).removeAttr("data-srcset"),$(this).removeAttr("data-sizes"),$(this).css("opacity","1")})})}_intImageLoad(e,t){var a=$(e);a.length&&a.unveil(1,function(){$(this).load(function(){$(this).parents(t).first().addClass("image-loaded"),$(this).removeAttr("data-src"),$(this).removeAttr("data-srcset"),$(this).removeAttr("data-sizes"),$(this).css("opacity","1")})})}}class Tabs{constructor(){$("ul.nav-tabs li a").on("show.bs.tab",e=>{$(document.body).trigger("urna_lazyload_image")}),$(".wc-tabs li a").on("click",e=>{$(document.body).trigger("urna_lazyload_image")})}}!function(e,t){var a=function(e,t,a){var n;return function(){function i(){a||e.apply(o,s),n=null}var o=this,s=arguments;n?clearTimeout(n):a&&e.apply(o,s),n=setTimeout(i,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",a(e)):this.trigger(t)}}(jQuery,"smartresize"),window.$=window.jQuery,$(document).ready(()=>{setTimeout(function(){new layzyLoadImage},200);new StickyHeader,new Tabs,new StickyHeader,new AccountMenu,new BackToTop,new CanvasMenu,new FuncCommon,new NewsLetter,new Banner,new Preload,new Search,new TreeView,new Section;(urna_settings.mobile||$(window).width()<1025)&&new Mobile}),$(window).smartresize(function(){if(jQuery(window).width()<1025)try{new Mobile}catch(e){}}),$(document.body).on("urna_lazyload_image",()=>{setTimeout(function(){new layzyLoadImage},200)});var CustomTreeViewMenu=function(e,t){(new TreeView)._tbayTreeViewMenu()};jQuery(window).on("elementor/frontend/init",function(){jQuery.isArray(urna_settings.elements_ready.treeview)&&$.each(urna_settings.elements_ready.treeview,function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/tbay-"+t+".default",CustomTreeViewMenu)})});