(function(e){window.jQuery&&(e(jQuery),e=jQuery.noop),typeof define=="function"&&define.amd&&define.amd.jQuery&&define("polyfiller",["jquery"],e)})(function(e){"use strict";var t="dom-support",n=e(document.scripts||"script"),r=e.event.special,i=e([]),s=window.Modernizr,o=window.asyncWebshims,u=s.addTest,a=parseFloat(e.browser.version,10),f=window.Object,l=window.html5||{},c=function(t,n){var r=!0;e.each(t.split(" "),function(e,t){t in s||(h.error("webshims needs Modernizr."+t+" to implement feature."),r=!1)}),r&&n&&n()};s.advancedObjectProperties=s.objectAccessor=s.ES5="create"in f&&"seal"in f;var h={version:"1.9.4pre",cfg:{useImportantStyles:!0,waitReady:!0,extendNative:!0,loadStyles:!0,disableShivMethods:!0,basePath:function(){var t=n.filter('[src*="polyfiller.js"]'),r;return t=t[0]||t.end()[t.end().length-1],r=(e.support.hrefNormalized?t.src:t.getAttribute("src",4)).split("?")[0],r=r.slice(0,r.lastIndexOf("/")+1)+"shims/",r}()},bugs:{},browserVersion:a,modules:{},features:{},featureList:[],setOptions:function(t,n){typeof t=="string"&&n!==undefined?m[t]=e.isPlainObject(n)?e.extend(!0,m[t]||{},n):n:typeof t=="object"&&e.extend(!0,m,t)},addPolyfill:function(t,n){n=n||{};var r=n.f||t;g[r]||(g[r]=[],g[r].delayReady=0,h.featureList.push(r),m[r]={}),g[r].push(t),n.options=e.extend(m[r],n.options),T(t,n),n.methodNames&&e.each(n.methodNames,function(e,t){h.addMethodName(t)})},polyfill:function(){var t=function(n){var r=[],i=n,s;m.disableShivMethods&&(l.shivMethods=!1);var o=function(){e("html").removeClass("loading-polyfills long-loading-polyfills"),e(window).unbind(".lP"),clearTimeout(s)};e(window).on("load.lP error.lP",o),r.push("loading-polyfills"),s=setTimeout(function(){e("html").addClass("long-loading-polyfills")},600),m.waitReady&&e.isReady&&h.warn("Call webshims.polyfill before DOM-Ready or set waitReady to false."),b(n,o),m.useImportantStyles&&r.push("polyfill-important"),r[0]&&e("html").addClass(r.join(" ")),m.loadStyles&&S.loadCSS("styles/shim.css"),t=e.noop},n;return function(r){var i=[];r=r||h.featureList,typeof r=="string"&&(r=r.split(" ")),n||(n=e.inArray("forms",r)!==-1,!n&&e.inArray("forms-ext",r)!==-1&&(r.push("forms"),n=!0)),m.waitReady&&(e.readyWait++,b(r,function(){e.ready(!0)})),e.each(r,function(e,t){if(!g[t]){h.error("could not find webshims-feature (aborted): "+t),y(t,!0);return}t!==g[t][0]&&b(g[t],function(){y(t,!0)}),i=i.concat(g[t])}),t(r),x(i)}}(),reTest:function(){var t,n,i=function(i,s){var o=E[s],u=s+"Ready",a;o&&!o.loaded&&(o.test&&e.isFunction(o.test)?!o.test([]):!o.test)&&(r[u]&&delete r[u],a=g[o.f],a&&!n&&(a.delayReady++,b(s,function(){a.delayReady--,y(o.f,a.callReady)})),t.push(s))};return function(r,s){n=s,typeof r=="string"&&(r=r.split(" ")),t=[],e.each(r,i),x(t)}}(),isReady:function(t,n){if(g[t]&&g[t].delayReady>0)return n&&(g[t].callReady=!0),!1;t+="Ready";if(n){if(r[t]&&r[t].add)return!0;r[t]=e.extend(r[t]||{},{add:function(e){e.handler.call(this,t)}}),e.event.trigger(t)}return!!r[t]&&!!r[t].add||!1},ready:function(t,n){var r=arguments[2],i=t;typeof t=="string"&&(t=t.split(" ")),r||(t=e.map(e.grep(t,function(e){return!y(e)}),function(e){return e+"Ready"}));if(!t.length){n(e,h,window,document);return}var s=t.shift(),o=function(){b(t,n,!0)};e(document).one(s,o)},capturingEvents:function(t,n){if(!document.addEventListener)return;typeof t=="string"&&(t=[t]),e.each(t,function(t,i){var s=function(t){return t=e.event.fix(t),n&&h.capturingEventPrevented&&h.capturingEventPrevented(t),e.event.handle.call(this,t)};r[i]=r[i]||{};if(r[i].setup||r[i].teardown)return;e.extend(r[i],{setup:function(){this.addEventListener(i,s,!0)},teardown:function(){this.removeEventListener(i,s,!0)}})})},register:function(t,n){var r=E[t];if(!r){h.error("can't find module: "+t);return}if(r.noAutoCallback){var i=function(){n(e,h,window,document,undefined,r.options),y(t,!0)};r.d?b(r.d,i):i()}},c:{},loader:{addModule:function(t,n){E[t]=n,n.name=n.name||t,n.c||(n.c=[]),e.each(n.c,function(e,n){h.c[n]||(h.c[n]=[]),h.c[n].push(t)})},loadList:function(){var t=[],n=function(n,r){typeof r=="string"&&(r=[r]),e.merge(t,r),S.loadScript(n,!1,r)},r=function(n,r){if(y(n)||e.inArray(n,t)!=-1)return!0;var i=E[n],s=m[i.f||n]||{},o;return i?(o=i.test&&e.isFunction(i.test)?i.test(r):i.test,o?(y(n,!0),!0):!1):!0},i=function(t,n){if(t.d&&t.d.length){var i=function(t,i){!r(i,n)&&e.inArray(i,n)==-1&&n.push(i)};e.each(t.d,function(t,n){E[n]?i(t,n):g[n]&&(e.each(g[n],i),b(g[n],function(){y(n,!0)}))}),t.noAutoCallback||(t.noAutoCallback=!0)}};return function(s,o){var u,a=[],f,l,c,p=function(r,i){c=i,e.each(h.c[i],function(n,r){if(e.inArray(r,a)==-1||e.inArray(r,t)!=-1)return c=!1,!1});if(c)return n("combos/"+c,h.c[c]),!1};for(f=0;f<s.length;f++){u=E[s[f]];if(!u||r(u.name,s)){u||h.warn("could not find: "+s[f]);continue}u.css&&S.loadCSS(u.css),u.loadInit&&u.loadInit(),u.loaded=!0,i(u,s),a.push(u.name)}for(f=0,l=a.length;f<l;f++)c=!1,u=a[f],e.inArray(u,t)==-1&&(h.debug!="noCombo"&&e.each(E[u].c,p),c||n(E[u].src||u,u))}}(),makePath:function(e){return e.indexOf("//")!=-1||e.indexOf("/")===0?e:(e.indexOf(".")==-1&&(e+=".js"),m.addCacheBuster&&(e+=m.addCacheBuster),m.basePath+e)},loadCSS:function(){var t,n=[];return function(r){r=this.makePath(r);if(e.inArray(r,n)!=-1)return;t=t||e("link, style")[0]||e("script")[0],n.push(r),e('<link rel="stylesheet" />').insertBefore(t).attr({href:r})}}(),loadScript:function(){var t=[],n;return function(n,r,i){n=S.makePath(n);if(e.inArray(n,t)!=-1)return;var s=function(){s=null,r&&r(),i&&(typeof i=="string"&&(i=i.split(" ")),e.each(i,function(e,t){if(!E[t])return;E[t].afterLoad&&E[t].afterLoad(),y(E[t].noAutoCallback?t+"FileLoaded":t,!0)}))};t.push(n),window.require?require([n],s):window.sssl?sssl(n,s):window.yepnope?yepnope.injectJs(n,s):window.steal&&steal(n).then(s)}}()}};e.webshims=h;var p=location.protocol=="https:"?"https://":"http://",d=p+"ajax.googleapis.com/ajax/libs/",v=d+"jqueryui/1.8.24/",m=h.cfg,g=h.features,y=h.isReady,b=h.ready,w=h.addPolyfill,E=h.modules,S=h.loader,x=S.loadList,T=S.addModule,N=h.bugs,C=[],k={warn:1,error:1};h.addMethodName=function(t){t=t.split(":");var n=t[1];t.length==1?(n=t[0],t=t[0]):t=t[0],e.fn[t]=function(){return this.callProp(n,arguments)}},e.fn.callProp=function(t,n){var r;return n||(n=[]),this.each(function(){var i=e.prop(this,t);if(i&&i.apply){r=i.apply(this,n);if(r!==undefined)return!1}else h.warn(t+" is not a method of "+this)}),r!==undefined?r:this},h.activeLang=function(){var e=navigator.browserLanguage||navigator.language||"";return b("webshimLocalization",function(){h.activeLang(e)}),function(t){if(t)if(typeof t=="string")e=t;else if(typeof t=="object"){var n=arguments,r=this;b("webshimLocalization",function(){h.activeLang.apply(r,n)})}return e}}(),e.each(["log","error","warn","info"],function(e,t){h[t]=function(e){if((k[t]&&h.debug!==!1||h.debug)&&window.console&&console.log)return console[console[t]?t:"log"](e)}}),function(){e.isDOMReady=e.isReady;if(!e.isDOMReady){var t=e.ready;e.ready=function(n){return n!==!0&&!e.isDOMReady&&(document.body?(e.isDOMReady=!0,y("DOM",!0),e.ready=t):setTimeout(function(){e.ready(n)},13)),t.apply(this,arguments)},e.ready.promise=t.promise}else y("DOM",!0);e(function(){e.isDOMReady=!0,y("DOM",!0),setTimeout(function(){y("WINDOWLOAD",!0)},9999)}),e(window).load(function(){e.isDOMReady=!0,y("DOM",!0),y("WINDOWLOAD",!0)})}(),function(){var t=[];e.extend(h,{addReady:function(e){var n=function(t,n){h.ready("DOM",function(){e(t,n)})};t.push(n),n(document,i)},triggerDomUpdate:function(n){if(!n||!n.nodeType){n&&n.jquery&&n.each(function(){h.triggerDomUpdate(this)});return}var r=n.nodeType;if(r!=1&&r!=9)return;var s=n!==document?e(n):i;e.each(t,function(e,t){t(n,s)})}}),e.fn.htmlPolyfill=function(t){var n=e.fn.html.call(this,t);return n===this&&e.isDOMReady&&this.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)}),n},e.each(["after","before","append","prepend","replaceWith"],function(t,n){e.fn[n+"Polyfill"]=function(t){return t=e(t),e.fn[n].call(this,t),e.isDOMReady&&t.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)}),this}}),e.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(t,n){e.fn[n.replace(/[A-Z]/,function(e){return"Polyfill"+e})]=function(){return e.fn[n].apply(this,arguments),e.isDOMReady&&h.triggerDomUpdate(this),this}}),e.fn.updatePolyfill=function(){return e.isDOMReady&&h.triggerDomUpdate(this),this},e.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(t,n){e.fn[n]=function(){return this}})}(),function(){var t="defineProperty",n=f.prototype.hasOwnProperty,r=["configurable","enumerable","writable"],i=function(e){for(var t=0;t<3;t++)e[r[t]]===undefined&&(r[t]!=="writable"||e.value!==undefined)&&(e[r[t]]=!0)},s=function(e){if(e)for(var t in e)n.call(e,t)&&i(e[t])};f.create&&(h.objectCreate=function(t,n,r){s(n);var i=f.create(t,n);return r&&(i.options=e.extend(!0,{},i.options||{},r),r=i.options),i._create&&e.isFunction(i._create)&&i._create(r),i}),f[t]&&(h[t]=function(e,n,r){return i(r),f[t](e,n,r)}),f.defineProperties&&(h.defineProperties=function(e,t){return s(t),f.defineProperties(e,t)}),h.getOwnPropertyDescriptor=f.getOwnPropertyDescriptor,h.getPrototypeOf=f.getPrototypeOf}(),T("jquery-ui",{src:v+"jquery-ui.min.js",test:function(){return!!e.widget&&!!e.Widget}}),T("input-widgets",{src:"",test:function(){return!this.src||!e.widget||!!e.fn.datepicker&&!!e.fn.slider}}),T("swfobject",{src:d+"swfobject/2.2/swfobject.js",test:function(){return"swfobject"in window}}),w("es5",{test:!!s.ES5&&!!Function.prototype.bind,c:[27,10,1,22]}),w("dom-extend",{f:t,noAutoCallback:!0,d:["es5"],c:[27,10,9,12,17,26,16,25,8,1,24,19,11,13]}),c("localstorage"),w("json-storage",{test:s.localstorage&&"sessionStorage"in window&&"JSON"in window,loadInit:function(){x(["swfobject"])},noAutoCallback:!0,c:[14]}),c("geolocation"),w("geolocation",{test:s.geolocation,options:{destroyWrite:!0},d:["json-storage"],c:[14,15]}),c("canvas",function(){var n;w("canvas",{src:"excanvas",test:s.canvas,options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var t=this.options.type,r;t&&t.indexOf("flash")!==-1&&(!window.swfobject||swfobject.hasFlashPlayerVersion("9.0.0"))&&(window.FlashCanvasOptions=window.FlashCanvasOptions||{},n=FlashCanvasOptions,t=="flash"?(e.extend(n,{swfPath:m.basePath+"FlashCanvas/"}),this.src="FlashCanvas/flashcanvas",r=n.swfPath+"flashcanvas.swf"):(e.extend(n,{swfPath:m.basePath+"FlashCanvasPro/"}),this.src="FlashCanvasPro/flashcanvas",r=n.swfPath+"flash10canvas.swf"))},afterLoad:function(){h.addReady(function(t,n){t==document&&window.G_vmlCanvasManager&&G_vmlCanvasManager.init_&&G_vmlCanvasManager.init_(document),e("canvas",t).add(n.filter("canvas")).each(function(){var e=this.getContext;!e&&window.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this)}),t==document&&y("canvas",!0)})},methodNames:["getContext"],d:[t]})}),c("input inputtypes",function(){var n=s.input,r=s.inputtypes,i="formvalidation",o=e('<select required="" name="a"><option disabled="" /></select>')[0],a=!1,f,l;u(i,function(){return!!n.required&&!!n.pattern}),u("fieldsetdisabled",function(){var t=e("<fieldset />")[0];return"elements"in t&&"disabled"in t}),s[i]&&(N.bustedValidity=a=s.formattribute===!1||!s.fieldsetdisabled||!("value"in document.createElement("output"))||!(e('<input type="date" value="1488-12-11" />')[0].validity||{valid:!0}).valid||!("required"in o)||(o.validity||{}).valid),f=s[i]&&!a?"form-native-extend":"form-extend",u("styleableinputrange",function(){if(!r.range)return!1;var e=document.createElement("input");return e.setAttribute("type","range"),e.style.WebkitAppearance!==undefined}),h.validationMessages=h.validityMessages=[],h.inputTypes={},w("form-core",{f:"forms",d:["es5"],test:function(e){return l.lightweightDatalist&&!this.datalistLoaded&&(this.datalistLoaded=!0,E["form-datalist"].f="forms",h.reTest(["form-datalist"])),!1},options:{placeholderType:"value",langSrc:"i18n/errormessages-",lightweightDatalist:!0,availabeLangs:["ar","ch-ZN","el","es","fr","he","hi","hu","it","ja","nl","pt-PT","ru","sv"]},methodNames:["setCustomValidity","checkValidity"],c:[3,2,59,17,26,16,5,4,24,19]}),l=m.forms,w("form-native-extend",{f:"forms",test:function(t){return!s[i]||a||(E["form-number-date-api"].test()||e.inArray("form-number-date-api",t||[])==-1)&&!l.overrideMessages},d:["form-core",t,"form-message"],c:[18,7,59,5]}),w("form-shim-extend",{f:"forms",test:function(){return s[i]&&!a},d:["form-core",t],c:[3,2,23,21]}),w("form-message",{f:"forms",test:function(e){return!(l.customMessages||!s[i]||N.validationMessage||a||!E[f].test(e))},d:[t],c:[3,2,23,21,59,17,5,4]}),w("form-number-date-api",{f:"forms-ext",uiTest:function(){return r.range&&r.date&&r.time&&r.number},test:function(e){return this.uiTest()},d:["forms",t],c:[18,7,6]}),w("form-number-date-ui",{f:"forms-ext",test:function(){return E["form-number-date-api"].test()&&!this.options.replaceUI},d:["forms",t,"form-number-date-api"],loadInit:function(){x(["jquery-ui"]),E["input-widgets"].src&&x(["input-widgets"])},options:{stepArrows:{number:1,time:1},calculateWidth:!0,slider:{},datepicker:{},langSrc:v+"i18n/jquery.ui.datepicker-",lazyDate:!0},c:[18,7,6]}),w("form-datalist",{f:"forms-ext",test:function(){return n.list&&!l.customDatalist},d:["form-core",t],c:[3,59,18,24,19,11]})}),"details"in s||u("details",function(){return"open"in document.createElement("details")}),w("details",{test:s.details,d:[t],options:{text:"Details"},c:[12,13,15]}),c("audio video texttrackapi ds",function(){h.mediaelement={};var n=function(){if(!s.audio||!s.video)return!1;if(h.mediaelement.loadSwf)return!1;var e=this.options,t=e.hasToPlay;return!!window.swfobject&&!window.swfobject.hasFlashPlayerVersion("9.0.115")||!(e.preferFlash||t!="any"&&!s.video[t]&&!s.audio[t])},r=["swfobject",t];w("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{hasToPlay:"any",preferFlash:!1,player:"jwplayer",vars:{},params:{},attrs:{},changeSWF:e.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:r,c:[27,10,9,12,17,26,16,25,8,22,23,24,20]}),w("mediaelement-swf",{f:"mediaelement",d:r,test:function(){return this.options.player!="jwplayer"?!0:n.apply(this,arguments)},c:[27,10,9,22,20]}),w("mediaelement-jaris",{f:"mediaelement",d:r,test:function(){return this.options.player=="jwplayer"?!0:n.apply(this,arguments)}}),N.track=s.track&&(!s.texttrackapi||typeof (document.createElement("track").track||{}).mode!="string"),w("track",{options:{positionDisplay:!0,override:N.track},test:function(){return s.track&&!this.options.override&&!N.track},d:["mediaelement",t],methodNames:["addTextTrack"],c:[27,26,25]}),T("track-ui",{d:["track"]})}),w("feature-dummy",{test:!0,loaded:!0,c:C}),n.filter("[data-polyfill-cfg]").each(function(){try{h.setOptions(e(this).data("polyfillCfg"))}catch(t){h.warn("error parsing polyfill cfg: "+t)}}).end().filter("[data-polyfill]").each(function(){h.polyfill(e.trim(e(this).data("polyfill")||""))}),o&&(o.cfg&&h.setOptions(o.cfg),o.lang&&h.activeLang(o.lang),"polyfill"in o&&h.polyfill(o.polyfill))});