function JFeed(e){e&&this.parse(e)}function JFeedItem(){}function JAtom(e){this._parse(e)}function JRss(e){this._parse(e)}!function(e,t,n){"use strict";var i=function(i,o){!!t.getComputedStyle||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var r,a,s,l,c,u,d=function(e,t,n,i){if("addEventListener"in e)try{e.addEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},p=function(e,t,n,i){if("removeEventListener"in e)try{e.removeEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},f=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},m=function(e,t){for(var n in t)e.setAttribute(n,t[n])},h=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},g=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},v=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])},y=e.createElement("style"),C=e.documentElement,w=function(t,n){var i;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in n)this.options[i]=n[i];if(h(C,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=f(this.wrapper),a=this.options,r=this.wrapper,this._init(this)};return w.prototype={destroy:function(){this._removeStyles(),g(r,"closed"),g(r,"opened"),g(r,a.navClass),g(r,a.navClass+"-"+this.index),g(C,a.navActiveClass),r.removeAttribute("style"),r.removeAttribute("aria-hidden"),p(t,"resize",this,!1),p(t,"focus",this,!1),p(e.body,"touchmove",this,!1),p(s,"touchstart",this,!1),p(s,"touchend",this,!1),p(s,"mouseup",this,!1),p(s,"keyup",this,!1),p(s,"click",this,!1),a.customToggle?s.removeAttribute("aria-hidden"):s.parentNode.removeChild(s)},toggle:function(){!0===l&&(u?this.close():this.open())},open:function(){u||(g(r,"closed"),h(r,"opened"),h(C,a.navActiveClass),h(s,"active"),r.style.position=a.openPos,m(r,{"aria-hidden":"false"}),u=!0,a.open())},close:function(){u&&(h(r,"closed"),g(r,"opened"),g(C,a.navActiveClass),g(s,"active"),m(r,{"aria-hidden":"true"}),a.animate?(l=!1,setTimeout(function(){r.style.position="absolute",l=!0},a.transition+10)):r.style.position="absolute",u=!1,a.close())},resize:function(){"none"!==t.getComputedStyle(s,null).getPropertyValue("display")?(c=!0,m(s,{"aria-hidden":"false"}),r.className.match(/(^|\s)closed(\s|$)/)&&(m(r,{"aria-hidden":"true"}),r.style.position="absolute"),this._createStyles(),this._calcHeight()):(c=!1,m(s,{"aria-hidden":"true"}),m(r,{"aria-hidden":"false"}),r.style.position=a.openPos,this._removeStyles())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"focus":case"resize":this.resize(n)}},_init:function(){this.index=n++,h(r,a.navClass),h(r,a.navClass+"-"+this.index),h(r,"closed"),l=!0,u=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var i=this;setTimeout(function(){i.resize()},20),d(t,"resize",this,!1),d(t,"focus",this,!1),d(e.body,"touchmove",this,!1),d(s,"touchstart",this,!1),d(s,"touchend",this,!1),d(s,"mouseup",this,!1),d(s,"keyup",this,!1),d(s,"click",this,!1),a.init()},_createStyles:function(){y.parentNode||(y.type="text/css",e.getElementsByTagName("head")[0].appendChild(y))},_removeStyles:function(){y.parentNode&&y.parentNode.removeChild(y)},_createToggle:function(){if(a.customToggle){var t=a.customToggle.replace("#","");if(e.getElementById(t))s=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");s=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=a.label,m(n,{href:"#",class:"nav-toggle"}),"after"===a.insert?r.parentNode.insertBefore(n,r.nextSibling):r.parentNode.insertBefore(n,r),s=n}},_closeOnNavClick:function(){if(a.closeOnNavClick){var e=r.getElementsByTagName("a"),t=this;v(e,function(n,i){d(e[n],"click",function(){c&&t.toggle()},!1)})}},_preventDefault:function(e){if(e.preventDefault)return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1;e.returnValue=!1},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,p(s,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),c&&!this.touchHasMoved){if("touchend"===e.type)return void this.toggle();var n=e||t.event;3!==n.which&&2!==n.button&&this.toggle()}},_onKeyUp:function(e){13===(e||t.event).keyCode&&this.toggle()},_transitions:function(){if(a.animate){var e=r.style,t="max-height "+a.transition+"ms";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<r.inner.length;t++)e+=r.inner[t].offsetHeight;var n="."+a.jsClass+" ."+a.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+a.jsClass+" ."+a.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";y.styleSheet?y.styleSheet.cssText=n:y.innerHTML=n,n=""}},new w(i,o)};"undefined"!=typeof module&&module.exports?module.exports=i:t.responsiveNav=i}(document,window,0),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,a,s=function(){},l=!!window.jQuery,c=e(window),u=function(e,n){t.ev.on("mfp"+e+".mfp",n)},d=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},p=function(n,i){t.ev.triggerHandler("mfp"+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},f=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},m=function(){e.magnificPopup.instance||((t=new s).init(),e.magnificPopup.instance=t)},h=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};s.prototype={constructor:s,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=h(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(!1===n.isObj){t.items=n.items.toArray(),t.index=0;var a,s=n.items;for(o=0;o<s.length;o++)if((a=s[o]).parsed&&(a=a.el[0]),a===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;{if(!t.isOpen){t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=d("bg").on("click.mfp",function(){t.close()}),t.wrap=d("wrap").attr("tabindex",-1).on("click.mfp",function(e){t._checkIfClose(e.target)&&t.close()}),t.container=d("container",t.wrap)),t.contentContainer=d("content"),t.st.preloader&&(t.preloader=d("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var m=l[o];m=m.charAt(0).toUpperCase()+m.slice(1),t["init"+m].call(t)}p("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(u("MarkupParse",function(e,t,n,i){n.close_replaceWith=f(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(f())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:c.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup.mfp",function(e){27===e.keyCode&&t.close()}),c.on("resize.mfp",function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var h=t.wH=c.height(),g={};if(t.fixedContentPos&&t._hasScrollBar(h)){var v=t._getScrollbarSize();v&&(g.marginRight=v)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):g.overflow="hidden");var y=t.st.mainClass;return t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),p("BuildControls"),e("html").css(g),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP("mfp-ready"),t._setFocus()):t.bgOverlay.addClass("mfp-ready"),i.on("focusin.mfp",t._onFocusIn)},16),t.isOpen=!0,t.updateSize(h),p("Open"),n}t.updateItemHTML()}},close:function(){t.isOpen&&(p("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){p("Close");var n="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,p("AfterClose")},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||c.height();t.fixedContentPos||t.wrap.css("height",t.wH),p("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(p("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=!!t.st[i]&&t.st[i].markup;p("FirstMarkupParse",r),t.currTemplate[i]=!r||e(r)}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,p("Change",n),o=n.type,t.container.prepend(t.contentContainer),p("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[n]?t.content.find(".mfp-close").length||t.content.append(f()):t.content=e:t.content="",p("BeforeAppend"),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,p("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var r=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(r)if(e.isFunction(r)){if(!r.call(t))return!0}else if(c.width()<r)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};p("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass("mfp-prevent-close")){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||c.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),p("MarkupParse",[t,n,i]),e.each(n,function(n,i){if(void 0===i||!1===i)return!0;if((o=n.split("_")).length>1){var r=t.find(".mfp-"+o[0]);if(r.length>0){var a=o[1];"replaceWith"===a?r[0]!==i[0]&&r.replaceWith(i):"img"===a?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(".mfp-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:s.prototype,modules:[],open:function(t,n){return m(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){m();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=l?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),l?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var g,v,y,C=function(){y&&(v.after(y.addClass(g)).detach(),y=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),u("Close.inline",function(){C()})},getInline:function(n,i){if(C(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(v||(g=o.hiddenClass,v=d(g),g="mfp-"+g),y=r.after(v).detach().removeClass(g)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var w,b=function(){w&&e(document.body).removeClass(w)},x=function(){b(),t.req&&t.req.abort()};e.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push("ajax"),w=t.st.ajax.cursor,u("Close.ajax",x),u("BeforeChange.ajax",x)},getAjax:function(n){w&&e(document.body).addClass(w),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};p("ParseAjax",a),t.appendContent(e(a.data),"ajax"),n.finished=!0,b(),t._setFocus(),setTimeout(function(){t.wrap.addClass("mfp-ready")},16),t.updateStatus("ready"),p("AjaxContentAdded")},error:function(){b(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var k,I=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),u("Open"+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),u("Close"+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),c.off("resize.mfp")}),u("Resize"+i,t.resizeImage),t.isLowIE&&u("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,k&&clearInterval(k),e.isCheckingImgSize=!1,p("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){k&&clearInterval(k),k=setInterval(function(){i.naturalWidth>0?t._onImageHasSize(e):(n>200&&clearInterval(k),3===++n?o(10):40===n?o(50):100===n&&o(500))},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,p("ImageLoadComplete")):++o<200?setTimeout(r,100):a())},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),(c=n.img[0]).naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:I(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(k&&clearInterval(k),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var E,T=function(){return void 0===E&&(E=void 0!==document.createElement("p").style.MozTransform),E};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},l=function(){t.content.css("visibility","visible")};u("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void l();(r=s(e)).css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){l(),setTimeout(function(){r.remove(),e=r=null,p("ZoomAnimationEnded")},16)},a)},16)}}),u("BeforeClose"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(!(e=t._getItemToZoom()))return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),u("Close"+i,function(){t._allowZoom()&&(l(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i,o=(i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(l?i.innerHeight():i[0].offsetHeight)-a-r};return T()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var _=function(e){if(t.currTemplate.iframe){var n=t.currTemplate.iframe.find("iframe");n.length&&(e||(n[0].src="//about:blank"),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),u("BeforeChange",function(e,t,n){t!==n&&("iframe"===t?_():"iframe"===n&&_(!0))}),u("Close.iframe",function(){_()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var j=function(e){var n=t.items.length;return e>n-1?e-n:e<0?n+e:e},S=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";if(t.direction=!0,!n||!n.enabled)return!1;r+=" mfp-gallery",u("Open"+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),u("UpdateStatus"+o,function(e,n){n.text&&(n.text=S(n.text,t.currItem.index,t.items.length))}),u("MarkupParse"+o,function(e,i,o,r){var a=t.items.length;o.counter=a>1?S(n.tCounter,r.index,a):""}),u("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),u("Change"+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),u("Close"+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=j(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=j(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=j(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),p("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,p("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});e.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;(n=isNaN(n)?n():n)>1&&(u("ImageHasSize.retina",function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),u("ElementParse.retina",function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),m()}),jQuery.getFeed=function(e){if((e=jQuery.extend({url:null,data:null,cache:!0,success:null,failure:null,error:null,global:!0},e)).url)return jQuery.isFunction(e.failure)&&"null"===jQuery.type(e.error)?e.error=function(t,n,i){e.failure(n,i)}:jQuery.type(e.failure)===jQuery.type(e.error)==="null"&&(e.error=function(e,t,n){window.console&&console.log("getFeed failed to load feed",e,t,n)}),$.ajax({type:"GET",url:e.url,data:e.data,cache:e.cache,dataType:"xml",success:function(t){var n=new JFeed(t);jQuery.isFunction(e.success)&&e.success(n)},error:e.error,global:e.global})},JFeed.prototype={type:"",version:"",title:"",link:"",description:"",parse:function(e){if(1==jQuery("channel",e).length){this.type="rss";t=new JRss(e)}else if(1==jQuery("feed",e).length){this.type="atom";var t=new JAtom(e)}t&&jQuery.extend(this,t)}},JFeedItem.prototype={title:"",link:"",description:"",updated:"",id:""},JAtom.prototype={_parse:function(e){var t=jQuery("feed",e).eq(0);this.version="1.0",this.title=jQuery(t).find("title:first").text(),this.link=jQuery(t).find("link:first").attr("href"),this.description=jQuery(t).find("subtitle:first").text(),this.language=jQuery(t).attr("xml:lang"),this.updated=jQuery(t).find("updated:first").text(),this.items=new Array;var n=this;jQuery("entry",e).each(function(){var e=new JFeedItem;e.title=jQuery(this).find("title").eq(0).text(),e.link=jQuery(this).find("link").eq(0).attr("href"),e.description=jQuery(this).find("content").eq(0).text(),""==e.description&&(e.description=jQuery(this).find("encoded").text()),e.updated=jQuery(this).find("updated").eq(0).text(),e.id=jQuery(this).find("id").eq(0).text(),n.items.push(e)})}},JRss.prototype={_parse:function(e){0==jQuery("rss",e).length?this.version="1.0":this.version=jQuery("rss",e).eq(0).attr("version");var t=jQuery("channel",e).eq(0);this.title=jQuery(t).find("title:first").text(),this.link=jQuery(t).find("link:first").text(),this.description=jQuery(t).find("description:first").text(),this.language=jQuery(t).find("language:first").text(),this.updated=jQuery(t).find("lastBuildDate:first").text(),this.items=new Array;var n=this;jQuery("item",e).each(function(){var e=new JFeedItem;e.title=jQuery(this).find("title").eq(0).text(),e.link=jQuery(this).find("link").eq(0).text(),e.description=jQuery(this).find("description").eq(0).text(),""==e.description&&(e.description=jQuery(this).find("encoded").text()),e.updated=jQuery(this).find("pubDate").eq(0).text(),e.id=jQuery(this).find("guid").eq(0).text(),n.items.push(e)})}},$(function(){responsiveNav(".nav-collapse",{customToggle:"#open-nav",closeOnNavClick:!0});$("#to-top, #markdown-toc a").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){var t=e.offset().top;return $("html,body").animate({scrollTop:t},300),!1}}}),$(".image-gallery").magnificPopup({delegate:"a",gallery:{enabled:!0,tCounter:'<span class="mfp-counter">%curr%/%total%</span>'},type:"image"}),$('#content a[href$=".jpg"], #content a[href$=".png"]').magnificPopup({gallery:{enabled:!0,tCounter:'<span class="mfp-counter">%curr%/%total%</span>'},type:"image"}),$('*[data-rss*="http"]').each(function(){$.getFeed({url:$(this).attr("data-rss"),feedparent:$(this),success:function(e){this.feedparent.find("ol").empty();for(var t=0;t<4;t++)if(e.items[t]){var n=$.trim(e.items[t].description).substring(0,250).split(" ").slice(0,-1).join(" ")+"...";this.feedparent.find("ol").append('<li><h3><a href="'+e.items[t].link+'">'+e.items[t].title+"</a></h3><p>"+n+"</p></li>")}}})})});
//# sourceMappingURL=master.js.map