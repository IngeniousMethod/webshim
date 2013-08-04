(function(e){window.jQuery&&(e(jQuery),e=jQuery.noop),"function"==typeof define&&define.amd&&define.amd.jQuery&&define("polyfiller",["jquery"],e)})(function(e){"use strict";var t="dom-support",n=e(document.scripts||"script"),r=e.event.special,o=e([]),a=window.Modernizr,i=window.asyncWebshims,s=a.addTest,c=window.Object,l=window.html5||{};a.advancedObjectProperties=a.objectAccessor=a.ES5=!!("create"in c&&"seal"in c),!a.ES5||"toJSON"in Date.prototype||(a.ES5=!1);var u={version:"1.11.0pre",cfg:{useImportantStyles:!0,waitReady:!0,extendNative:1,loadStyles:!0,disableShivMethods:!0,wspopover:{appendTo:"body",hideOnBlur:!0},basePath:function(){var t,r=n.filter('[src*="polyfiller.js"]');return r=r[0]||r.end()[r.end().length-1],t=(e.support.hrefNormalized?r.src:r.getAttribute("src",4)).split("?")[0],t=t.slice(0,t.lastIndexOf("/")+1)+"shims/"}()},bugs:{},modules:{},features:{},featureList:[],setOptions:function(t,n){"string"==typeof t&&void 0!==n?d[t]=e.isPlainObject(n)?e.extend(!0,d[t]||{},n):n:"object"==typeof t&&e.extend(!0,d,t)},addPolyfill:function(t,n){n=n||{};var r=n.f||t;f[r]||(f[r]=[],u.featureList.push(r),d[r]={}),!f[r].failedM&&n.nM&&e.each(n.nM.split(" "),function(e,t){return t in a?void 0:(f[r].failedM=t,!1)}),f[r].failedM&&(n.test=function(){return u.error("webshims needs Modernizr."+f[r].failedM+" to implement feature: "+r),!0}),f[r].push(t),n.options=e.extend(d[r],n.options),w(t,n),n.methodNames&&e.each(n.methodNames,function(e,t){u.addMethodName(t)})},polyfill:function(){var e={};return function(t){t||(t=u.featureList,u.info("loading all features without specifing might be bad for performance")),"string"==typeof t&&(t=t.split(" "));for(var n=0;t.length>n;n++)e[t[n]]&&u.error(t[n]+" already loaded, you might want to use updatePolyfill instead? see: bit.ly/12BtXX3"),e[t[n]]=!0;return u._polyfill(t)}}(),_polyfill:function(){var t,n=function(t){var r,o=[];d.disableShivMethods&&(l.shivMethods=!1);var a=function(){e("html").removeClass("loading-polyfills long-loading-polyfills"),e(window).unbind(".lP"),clearTimeout(r)};o.push("loading-polyfills"),r=setTimeout(function(){e("html").addClass("long-loading-polyfills"),r=setTimeout(a,300)},300),e(window).on("load.lP error.lP",a),d.waitReady&&e.isReady&&u.warn("Call webshims.polyfill before DOM-Ready or set waitReady to false."),m(t,a),d.useImportantStyles&&o.push("polyfill-important"),o[0]&&e("html").addClass(o.join(" ")),d.loadStyles&&v.loadCSS("styles/shim.css"),n=e.noop};return function(r){var o=[];t||(t=-1!==e.inArray("forms",r),t||-1===e.inArray("forms-ext",r)||(r.push("forms"),t=!0)),d.waitReady&&(e.readyWait++,m(r,function(){e.ready(!0)})),e.each(r,function(e,t){return f[t]?(t!==f[t][0]&&m(f[t],function(){p(t,!0)}),o=o.concat(f[t]),void 0):(u.error("could not find webshims-feature (aborted): "+t),p(t,!0),void 0)}),n(r),g(o)}}(),reTest:function(){var t,n=function(n,o){var a,i=y[o],s=o+"Ready";!i||i.loaded||(i.test&&e.isFunction(i.test)?i.test([]):i.test)||(r[s]&&delete r[s],a=f[i.f],t.push(o))};return function(r){"string"==typeof r&&(r=r.split(" ")),t=[],e.each(r,n),g(t)}}(),isReady:function(t,n){if(t+="Ready",n){if(r[t]&&r[t].add)return!0;r[t]=e.extend(r[t]||{},{add:function(e){e.handler.call(this,t)}}),e(document).triggerHandler(t)}return!(!r[t]||!r[t].add)||!1},ready:function(t,n){var r=arguments[2];if("string"==typeof t&&(t=t.split(" ")),r||(t=e.map(e.grep(t,function(e){return!p(e)}),function(e){return e+"Ready"})),!t.length)return n(e,u,window,document),void 0;var o=t.shift(),a=function(){m(t,n,!0)};e(document).one(o,a)},capturingEvents:function(t,n){document.addEventListener&&("string"==typeof t&&(t=[t]),e.each(t,function(t,o){var a=function(t){return t=e.event.fix(t),n&&u.capturingEventPrevented&&u.capturingEventPrevented(t),e.event.dispatch.call(this,t)};r[o]=r[o]||{},r[o].setup||r[o].teardown||e.extend(r[o],{setup:function(){this.addEventListener(o,a,!0)},teardown:function(){this.removeEventListener(o,a,!0)}})}))},register:function(t,n){var r=y[t];if(!r)return u.error("can't find module: "+t),void 0;if(r.noAutoCallback){var o=function(){n(e,u,window,document,void 0,r.options),p(t,!0)};r.d&&r.d.length?m(r.d,o):o()}},c:{},loader:{addModule:function(t,n){y[t]=n,n.name=n.name||t,n.c||(n.c=[]),e.each(n.c,function(e,n){u.c[n]||(u.c[n]=[]),u.c[n].push(t)})},loadList:function(){var t=[],n=function(n,r){"string"==typeof r&&(r=[r]),e.merge(t,r),v.loadScript(n,!1,r)},r=function(n,r){if(p(n)||-1!=e.inArray(n,t))return!0;var o=y[n];d[o.f||n]||{};var a;return o?(a=o.test&&e.isFunction(o.test)?o.test(r):o.test,a?(p(n,!0),!0):!1):!0},o=function(t,n){if(t.d&&t.d.length){var o=function(t,o){r(o,n)||-1!=e.inArray(o,n)||n.push(o)};e.each(t.d,function(t,n){y[n]?o(t,n):f[n]&&(e.each(f[n],o),m(f[n],function(){p(n,!0)}))}),t.noAutoCallback||(t.noAutoCallback=!0)}};return function(a){var i,s,c,l,d=[],f=function(r,o){return l=o,e.each(u.c[o],function(n,r){return-1==e.inArray(r,d)||-1!=e.inArray(r,t)?(l=!1,!1):void 0}),l?(n("combos/"+l,u.c[l]),!1):void 0};for(s=0;a.length>s;s++)i=y[a[s]],i&&!r(i.name,a)?(i.css&&v.loadCSS(i.css),i.loadInit&&i.loadInit(),i.loaded=!0,o(i,a),d.push(i.name)):i||u.warn("could not find: "+a[s]);for(s=0,c=d.length;c>s;s++)l=!1,i=d[s],-1==e.inArray(i,t)&&("noCombo"!=u.debug&&e.each(y[i].c,f),l||n(y[i].src||i,i))}}(),makePath:function(e){return-1!=e.indexOf("//")||0===e.indexOf("/")?e:(-1==e.indexOf(".")&&(e+=".js"),d.addCacheBuster&&(e+=d.addCacheBuster),d.basePath+e)},loadCSS:function(){var t,n=[];return function(r){r=this.makePath(r),-1==e.inArray(r,n)&&(t=t||e("link, style")[0]||e("script")[0],n.push(r),e('<link rel="stylesheet" />').insertBefore(t).attr({href:r}))}}(),loadScript:function(){var t=[];return function(n,r,o){if(n=v.makePath(n),-1==e.inArray(n,t)){var a=function(){a=null,r&&r(),o&&("string"==typeof o&&(o=o.split(" ")),e.each(o,function(e,t){y[t]&&(y[t].afterLoad&&y[t].afterLoad(),p(y[t].noAutoCallback?t+"FileLoaded":t,!0))}))};t.push(n),window.require&&window.define&&window.define.amd?require([n],a):window.sssl?sssl(n,a):window.yepnope?yepnope.injectJs(n,a):window.steal&&steal(n).then(a)}}}()}};e.webshims=u;var d=u.cfg,f=u.features,p=u.isReady,m=u.ready,h=u.addPolyfill,y=u.modules,v=u.loader,g=v.loadList,w=v.addModule,b=u.bugs,x=[],P={warn:1,error:1};u.addMethodName=function(t){t=t.split(":");var n=t[1];1==t.length?(n=t[0],t=t[0]):t=t[0],e.fn[t]=function(){return this.callProp(n,arguments)}},e.fn.callProp=function(t,n){var r;return n||(n=[]),this.each(function(){var o=e.prop(this,t);if(o&&o.apply){if(r=o.apply(this,n),void 0!==r)return!1}else u.warn(t+" is not a method of "+this)}),void 0!==r?r:this},u.activeLang=function(){var e=navigator.browserLanguage||navigator.language||"";return m("webshimLocalization",function(){u.activeLang(e)}),function(t){if(t)if("string"==typeof t)e=t;else if("object"==typeof t){var n=arguments,r=this;m("webshimLocalization",function(){u.activeLang.apply(r,n)})}return e}}(),u.errorLog=[],e.each(["log","error","warn","info"],function(e,t){u[t]=function(e){(P[t]&&u.debug!==!1||u.debug)&&(u.errorLog.push(e),window.console&&console.log&&console[console[t]?t:"log"](e))}}),function(){e.isDOMReady=e.isReady;var t=function(){e.isDOMReady=!0,p("DOM",!0),setTimeout(function(){p("WINDOWLOAD",!0)},9999)};if(e.isDOMReady)t();else{var n=e.ready;e.ready=function(r){return r!==!0&&document.body&&(t(),e.ready=n),n.apply(this,arguments)},e.ready.promise=n.promise}e(t),e(window).load(function(){t(),setTimeout(function(){p("WINDOWLOAD",!0)},9)})}(),function(){var t=[],n=function(){1==this.nodeType&&u.triggerDomUpdate(this)};e.extend(u,{addReady:function(e){var n=function(t,n){u.ready("DOM",function(){e(t,n)})};t.push(n),n(document,o)},triggerDomUpdate:function(n){if(!n||!n.nodeType)return n&&n.jquery&&n.each(function(){u.triggerDomUpdate(this)}),void 0;var r=n.nodeType;if(1==r||9==r){var a=n!==document?e(n):o;e.each(t,function(e,t){t(n,a)})}}}),e.fn.htmlPolyfill=function(t){var r=e.fn.html.call(this,t);return r===this&&e.isDOMReady&&this.each(n),r},e.fn.jProp=function(){return e(e.fn.prop.apply(this,arguments)||[])},e.each(["after","before","append","prepend","replaceWith"],function(t,r){e.fn[r+"Polyfill"]=function(t){return t=e(t),e.fn[r].call(this,t),e.isDOMReady&&t.each(n),this}}),e.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(t,n){e.fn[n.replace(/[A-Z]/,function(e){return"Polyfill"+e})]=function(){return e.fn[n].apply(this,arguments),e.isDOMReady&&u.triggerDomUpdate(this),this}}),e.fn.updatePolyfill=function(){return e.isDOMReady&&u.triggerDomUpdate(this),this},e.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(t,n){e.fn[n]=function(){return this.pushStack(this)}})}(),function(){var t="defineProperty",n=c.prototype.hasOwnProperty,r=["configurable","enumerable","writable"],o=function(e){for(var t=0;3>t;t++)void 0!==e[r[t]]||"writable"===r[t]&&void 0===e.value||(e[r[t]]=!0)},a=function(e){if(e)for(var t in e)n.call(e,t)&&o(e[t])};c.create&&(u.objectCreate=function(t,n,r){a(n);var o=c.create(t,n);return r&&(o.options=e.extend(!0,{},o.options||{},r),r=o.options),o._create&&e.isFunction(o._create)&&o._create(r),o}),c[t]&&(u[t]=function(e,n,r){return o(r),c[t](e,n,r)}),c.defineProperties&&(u.defineProperties=function(e,t){return a(t),c.defineProperties(e,t)}),u.getOwnPropertyDescriptor=c.getOwnPropertyDescriptor,u.getPrototypeOf=c.getPrototypeOf}(),w("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,19,25,23,27]}),y.swfmini.test(),h("es5",{test:!(!a.ES5||!Function.prototype.bind),c:[14,18,19,25,20]}),h("dom-extend",{f:t,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,14,25,19,20,26,28,31]}),h("json-storage",{test:a.localstorage&&"sessionStorage"in window&&"JSON"in window,d:["swfmini"],noAutoCallback:!0,c:[14],nM:"localstorage"}),h("geolocation",{test:a.geolocation,options:{destroyWrite:!0},d:["json-storage"],c:[21],nM:"geolocation"}),function(){var n;h("canvas",{src:"excanvas",test:a.canvas,options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var t,r=this.options.type;!r||-1===r.indexOf("flash")||y.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(window.FlashCanvasOptions=window.FlashCanvasOptions||{},n=FlashCanvasOptions,"flash"==r?(e.extend(n,{swfPath:d.basePath+"FlashCanvas/"}),this.src="FlashCanvas/flashcanvas",t=n.swfPath+"flashcanvas.swf"):(e.extend(n,{swfPath:d.basePath+"FlashCanvasPro/"}),this.src="FlashCanvasPro/flashcanvas",t=n.swfPath+"flash10canvas.swf"))},afterLoad:function(){u.addReady(function(t,n){t==document&&window.G_vmlCanvasManager&&G_vmlCanvasManager.init_&&G_vmlCanvasManager.init_(document),e("canvas",t).add(n.filter("canvas")).each(function(){var e=this.getContext;!e&&window.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this)}),t==document&&p("canvas",!0)})},methodNames:["getContext"],d:[t],nM:"canvas"})}(),function(){var n,r,o,i="form-shim-extend",c=a.input,l=a.inputtypes,f="formvalidation",p="form-number-date-api",m=e('<select required="" name="a"><option disabled="" /></select>')[0],v=!1,g=!1,x=function(){return x.run||(s(f,function(){return!(!c.required||!c.pattern)}),s("fieldsetdisabled",function(){var t=e("<fieldset />")[0];return"elements"in t&&"disabled"in t}),l&&s("styleableinputrange",function(){return l.range&&!window.opera}),a[f]&&(g=!(!window.opera&&a.formattribute!==!1&&a.fieldsetdisabled&&"value"in document.createElement("progress")&&"value"in document.createElement("output")&&(e('<input type="date" value="1488-12-11" />')[0].validity||{valid:!0}).valid&&"required"in m&&!(m.validity||{}).valid),b.bustedValidity=v=g||!c.list),n=a[f]&&!v?"form-native-extend":i),x.run=!0,!1};c&&l&&x(),document.createElement("datalist"),u.formcfg=[],u.validationMessages=u.validityMessages=[],u.inputTypes={},h("form-core",{f:"forms",d:["es5"],test:x,options:{placeholderType:"value",langSrc:"i18n/formcfg-",messagePopover:{},datalistPopover:{constrainWidth:!0},iVal:{handleBubble:!0,sel:".ws-instantvalidation",recheckDelay:400},availabeLangs:["ar","ch-ZN","el","es","fr","he","hi","hu","it","ja","lt","nl","pl","pt-PT","ru","sv"]},methodNames:["setCustomValidity","checkValidity"],c:[16,7,2,8,1,15,30,3,31],nM:"input"}),r=d.forms,h("form-native-extend",{f:"forms",test:function(t){return!a[f]||v||-1==e.inArray(p,t||[])||y[p].test()},d:["form-core",t,"form-message"],c:[6,5]}),h(i,{f:"forms",test:function(){return a[f]&&!v},d:["form-core",t],c:[16,15]}),h("form-message",{f:"forms",test:function(e){return!(r.customMessages||!a[f]||v||!y[n].test(e))},d:[t],c:[16,7,15,30,3,8,4]}),o={noAutoCallback:!0,options:r,c:[24]},w("form-validation",e.extend({d:["form-message","form-core"]},o)),w("form-validators",e.extend({},o)),h(p,{f:"forms-ext",options:{types:"month date time range number"},test:function(){var t=!0,n=this.options;return n._types||(n._types=n.types.split(" ")),x(),e.each(n._types,function(e,n){return n in l&&!l[n]?(t=!1,!1):void 0}),t},methodNames:["stepUp","stepDown"],d:["forms",t],c:[6,5,18,17],nM:"input inputtypes"}),w("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!e.fn.rangeUI},d:["es5"],c:[6,5,9,10,18,17,11]}),h("form-number-date-ui",{f:"forms-ext",test:function(){var e=this.options;return x(),g&&!e.replaceUI&&/Android/i.test(navigator.userAgent)&&(e.replaceUI=!0),!e.replaceUI&&y[p].test()},d:["forms",t,p,"range-ui"],options:{widgets:{calculateWidth:!0,monthNames:"monthNamesShort",monthNamesHead:"monthNames"}},c:[6,5,9,10,18,17,11]}),h("form-datalist",{f:"forms",test:function(){return x(),c.list&&!r.fD},d:["form-core",t],c:[16,7,6,2,9,15,30,31]})}(),h("filereader",{test:"FileReader"in window,d:["swfmini",t],c:[25,26,27]}),"details"in a||s("details",function(){return"open"in document.createElement("details")}),h("details",{test:a.details,d:[t],options:{text:"Details"},c:[21,22]}),function(){u.mediaelement={},h("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{preferFlash:!1,player:"jaris",vars:{},params:{},attrs:{},changeSWF:e.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,19,25,20,23],nM:"audio video texttrackapi"}),h("mediaelement-jaris",{f:"mediaelement",d:["swfmini",t],test:function(){if(!a.audio||!a.video||u.mediaelement.loadSwf)return!1;var e=this.options;return e.preferFlash&&!y.swfmini.test()&&(e.preferFlash=!1),!(e.preferFlash&&window.swfmini.hasFlashPlayerVersion("9.0.115"))},c:[21,19,25,20,28]}),b.track=a.track&&(!a.texttrackapi||"string"!=typeof(document.createElement("track").track||{}).mode),h("track",{options:{positionDisplay:!0,override:b.track},test:function(){return a.track&&!this.options.override&&!b.track},d:["mediaelement",t],methodNames:["addTextTrack"],c:[21,12,13,22,29],nM:"texttrackapi"}),w("track-ui",{d:["track",t],c:[29]})}(),h("feature-dummy",{test:!0,loaded:!0,c:x}),u.$=e,u.M=a,window.webshims=u,n.filter("[data-polyfill-cfg]").each(function(){try{u.setOptions(e(this).data("polyfillCfg"))}catch(t){u.warn("error parsing polyfill cfg: "+t)}}).end().filter("[data-polyfill]").each(function(){u.polyfill(e.trim(e(this).data("polyfill")||""))}),i&&(i.cfg&&u.setOptions(i.cfg),i.lang&&u.activeLang(i.lang),"polyfill"in i&&u.polyfill(i.polyfill))});