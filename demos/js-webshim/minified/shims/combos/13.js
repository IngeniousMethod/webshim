jQuery.webshims.register("dom-extend",function(d,g,x,t,m){var o=g.modules,s=/\s*,\s*/,l={},p={},h={},f={},k={},j=d.fn.val,v=function(b,a,c,e,i){return i?j.call(d(b)):j.call(d(b),c)};d.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?j.call(this):d.prop(a,"value",b,"val",!0);if(d.isArray(b))return j.apply(this,arguments);var c=d.isFunction(b);return this.each(function(e){a=this;1===a.nodeType&&(c?(e=b.call(a,e,d.prop(a,"value",m,"val",
!0)),null==e&&(e=""),d.prop(a,"value",e,"val")):d.prop(a,"value",b,"val"))})};var n="_webshimsLib"+Math.round(1E3*Math.random()),y=function(b,a,c){b=b.jquery?b[0]:b;if(!b)return c||{};var e=d.data(b,n);c!==m&&(e||(e=d.data(b,n,{})),a&&(e[a]=c));return a?e&&e[a]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){d.fn[b.name]=function(){return this.map(function(){var a=y(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){l[b]=d[b];d[b]=function(a,c,e,i,q){var A="val"==i,g=!A?l[b]:v;if(!a||!p[c]||1!==a.nodeType||!A&&i&&"attr"==b&&d.attrFn[c])return g(a,c,e,i,q);var B=(a.nodeName||"").toLowerCase(),u=h[B],w="attr"==b&&(!1===e||null===e)?"removeAttr":b,f,j,n;u||(u=h["*"]);u&&(u=u[c]);u&&(f=u[w]);if(f){if("value"==c)j=f.isVal,f.isVal=A;if("removeAttr"===w)return f.value.call(a);if(e===m)return f.get?f.get.call(a):f.value;f.set&&
("attr"==b&&!0===e&&(e=c),n=f.set.call(a,e));if("value"==c)f.isVal=j}else n=g(a,c,e,i,q);if((e!==m||"removeAttr"===w)&&k[B]&&k[B][c]){var o;o="removeAttr"==w?!1:"prop"==w?!!e:!0;k[B][c].forEach(function(c){if(!c.only||(c.only="prop"==b)||"attr"==c.only&&"prop"!=b)c.call(a,e,o,A?"val":w,b)})}return n};f[b]=function(a,c,e){h[a]||(h[a]={});h[a][c]||(h[a][c]={});var i=h[a][c][b],q=function(a,d,i){return d&&d[a]?d[a]:i&&i[a]?i[a]:"prop"==b&&"value"==c?function(a){return e.isVal?v(this,c,a,!1,0===arguments.length):
l[b](this,c,a)}:"prop"==b&&"value"==a&&e.value.apply?function(a){var e=l[b](this,c);e&&e.apply&&(e=e.apply(this,arguments));return e}:function(a){return l[b](this,c,a)}};h[a][c][b]=e;if(e.value===m){if(!e.set)e.set=e.writeable?q("set",e,i):g.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:d.noop;if(!e.get)e.get=q("get",e,i)}["value","get","set"].forEach(function(a){e[a]&&(e["_sup"+a]=q(a,i))})}});var C=!d.browser.msie||8<parseInt(d.browser.version,10),D=function(){var b=g.getPrototypeOf(t.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,e,d){var q=t.createElement(c),f=g.getPrototypeOf(q);if(C&&f&&b!==f&&(!q[e]||!a.call(q,e))){var h=q[e];d._supvalue=function(){return h&&h.apply?h.apply(this,arguments):h};f[e]=d.value}else d._supvalue=function(){var a=y(this,"propValue");return a&&a[e]&&a[e].apply?a[e].apply(this,arguments):a&&a[e]},r.extendValue(c,e,d.value);d.value._supvalue=d._supvalue}}(),r=function(){var b={};g.addReady(function(a,c){var e={},f=function(b){e[b]||(e[b]=d(a.getElementsByTagName(b)),
c[0]&&d.nodeName(c[0],b)&&(e[b]=e[b].add(c)))};d.each(b,function(a,b){f(a);!b||!b.forEach?g.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){e[a].each(b)})});e=null});var a,c=d([]),e=function(c,e){b[c]?b[c].push(e):b[c]=[e];d.isDOMReady&&(a||d(t.getElementsByTagName(c))).each(e)};return{createTmpCache:function(b){d.isDOMReady&&(a=a||d(t.getElementsByTagName(b)));return a||c},flushTmpCache:function(){a=null},content:function(a,b){e(a,function(){var a=d.attr(this,b);null!=a&&d.attr(this,
b,a)})},createElement:function(a,b){e(a,b)},extendValue:function(a,b,c){e(a,function(){d(this).each(function(){y(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),z=function(b,a){if(b.defaultValue===m)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}};if(!b.attr)b.attr={}};d.extend(g,{getID:function(){var b=(new Date).getTime();return function(a){var a=d(a),c=a.attr("id");c||(b++,c="ID-"+b,a.attr("id",c));
return c}}(),extendUNDEFProp:function(b,a){d.each(a,function(a,e){a in b||(b[a]=e)})},createPropDefault:z,data:y,moveToFirstEvent:function(){var b=d._data?"_data":"data";return function(a,c,e){if((a=(d[b](a,"events")||{})[c])&&1<a.length)c=a.pop(),e||(e="bind"),"bind"==e&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(b,a,c){c=c||{};b.jquery&&(b=b[0]);a.jquery&&(a=a[0]);var e=d.data(b,n)||d.data(b,n,{}),i=d.data(a,n)||d.data(a,n,{}),f={};if(c.shadowFocusElement){if(c.shadowFocusElement){if(c.shadowFocusElement.jquery)c.shadowFocusElement=
c.shadowFocusElement[0];f=d.data(c.shadowFocusElement,n)||d.data(c.shadowFocusElement,n,f)}}else c.shadowFocusElement=a;e.hasShadow=a;f.nativeElement=i.nativeElement=b;f.shadowData=i.shadowData=e.shadowData={nativeElement:b,shadowElement:a,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){y(this,"shadowData",i.shadowData)});if(c.data)f.shadowData.data=i.shadowData.data=e.shadowData.data=c.data;c=null},propTypes:{standard:function(b){z(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,
""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){z(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}},src:function(){var b=t.createElement("a");b.style.display="none";return function(a,c){z(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(c),i;if(null==a)return"";b.setAttribute("href",a+"");if(!d.support.hrefNormalized){try{d(b).insertAfterTo(this),
i=b.getAttribute("href",4)}catch(f){i=b.getAttribute("href",4)}d(b).detach()}return i||b.href}}}}(),enumarated:function(b){z(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var a=(b.attr.get.call(this)||"").toLowerCase();if(!a||-1==b.limitedTo.indexOf(a))a=b.defaultValue;return a}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(s));a.forEach(function(a){g.defineNodeNamesProperty(b,a,{prop:{set:function(b){d.attr(this,a,b)},get:function(){return d.attr(this,
a)||""}}})})},defineNodeNameProperty:function(b,a,c){p[a]=!0;if(c.reflect)g.propTypes[c.propType||"standard"](c,a);["prop","attr","removeAttr"].forEach(function(e){var i=c[e];i&&(i="prop"===e?d.extend({writeable:!0},i):d.extend({},i,{writeable:!0}),f[e](b,a,i),"*"!=b&&g.cfg.extendNative&&"prop"==e&&i.value&&d.isFunction(i.value)&&D(b,a,i),c[e]=i)});c.initAttr&&r.content(b,a);return c},defineNodeNameProperties:function(b,a,c,e){for(var d in a)!e&&a[d].initAttr&&r.createTmpCache(b),c&&(a[d][c]?g.log("override: "+
b+"["+d+"] for "+c):(a[d][c]={},["value","set","get"].forEach(function(b){b in a[d]&&(a[d][c][b]=a[d][b],delete a[d][b])}))),a[d]=g.defineNodeNameProperty(b,d,a[d]);e||r.flushTmpCache();return a},createElement:function(b,a,c){var e;d.isFunction(a)&&(a={after:a});r.createTmpCache(b);a.before&&r.createElement(b,a.before);c&&(e=g.defineNodeNameProperties(b,c,!1,!0));a.after&&r.createElement(b,a.after);r.flushTmpCache();return e},onNodeNamesPropertyModify:function(b,a,c,e){"string"==typeof b&&(b=b.split(s));
d.isFunction(c)&&(c={set:c});b.forEach(function(b){k[b]||(k[b]={});"string"==typeof a&&(a=a.split(s));c.initAttr&&r.createTmpCache(b);a.forEach(function(a){k[b][a]||(k[b][a]=[],p[a]=!0);if(c.set){if(e)c.set.only=e;k[b][a].push(c.set)}c.initAttr&&r.content(b,a)});r.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,c){c||(c={});if(d.isFunction(c))c.set=c;g.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?
m:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===m)return c=(b.attributes[a]||{}).value,null==c?m:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var b=[],a={},c,e,f=/:\/\/|^\.*\//,h=function(a,b,c){return b&&c&&-1!==d.inArray(b,c.availabeLangs||[])?(a.loading=!0,c=c.langSrc,f.test(c)||(c=g.cfg.basePath+
c),g.loader.loadScript(c+b+".js",function(){a.langObj[b]?(a.loading=!1,j(a,!0)):d(function(){a.langObj[b]&&j(a,!0);a.loading=!1})}),!0):!1},k=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},j=function(a,b){if(a.activeLang!=c&&a.activeLang!==e){var d=o[a.module].options;if(a.langObj[c]||e&&a.langObj[e])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[e],c),k(a.module);else if(!b&&!h(a,c,d)&&!h(a,e,d)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),k(a.module)}};
return function(f){if("string"==typeof f&&f!==c)c=f,e=c.split("-")[0],c==e&&(e=!1),d.each(b,function(a,b){j(b)});else if("object"==typeof f)if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang="";b.push(f);j(f)}return c}}()});d.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){g[b]=function(b,d,f,h){"string"==typeof b&&(b=b.split(s));
var k={};b.forEach(function(b){k[b]=g[a](b,d,f,h)});return k}});g.isReady("webshimLocalization",!0)});
(function(d,g){var x=d.webshims.browserVersion;if(!(d.browser.mozilla&&5<x)&&(!d.browser.msie||12>x&&7<x)){var t={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(d,g){d.getAttribute("role")||d.setAttribute("role",g)};d.webshims.addReady(function(o,s){d.each(t,function(f,h){for(var g=d(f,o).add(s.filter(f)),v=0,n=g.length;v<n;v++)m(g[v],h)});if(o===g){var l=g.getElementsByTagName("header")[0],p=g.getElementsByTagName("footer"),h=p.length;
l&&!d(l).closest("section, article")[0]&&m(l,"banner");h&&(l=p[h-1],d(l).closest("section, article")[0]||m(l,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("details",function(d,g,x,t,m,o){var s=function(h){var f=d(h).parent("details");if(f[0]&&f.children(":first").get(0)===h)return f},l=function(h,f){var h=d(h),f=d(f),g=d.data(f[0],"summaryElement");d.data(h[0],"detailsElement",f);if(!g||h[0]!==g[0])g&&(g.hasClass("fallback-summary")?g.remove():g.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),d.data(f[0],
"summaryElement",h),f.prop("open",f.prop("open"))};g.createElement("summary",function(){var h=s(this);if(h&&!d.data(this,"detailsElement")){var f,k,j=d.attr(this,"tabIndex")||"0";l(this,h);d(this).bind("focus.summaryPolyfill",function(){d(this).addClass("summary-has-focus")}).bind("blur.summaryPolyfill",function(){d(this).removeClass("summary-has-focus")}).bind("mouseenter.summaryPolyfill",function(){d(this).addClass("summary-has-hover")}).bind("mouseleave.summaryPolyfill",function(){d(this).removeClass("summary-has-hover")}).bind("click.summaryPolyfill",
function(h){var g=s(this);if(g){if(!k&&h.originalEvent)return k=!0,h.stopImmediatePropagation(),h.preventDefault(),d(this).trigger("click"),k=!1;clearTimeout(f);f=setTimeout(function(){h.isDefaultPrevented()||g.prop("open",!g.prop("open"))},0)}}).bind("keydown.summaryPolyfill",function(f){if((13==f.keyCode||32==f.keyCode)&&!f.isDefaultPrevented())k=!0,f.preventDefault(),d(this).trigger("click"),k=!1}).attr({tabindex:j,role:"button"}).prepend('<span class="details-open-indicator" />');g.moveToFirstEvent(this,
"click")}});var p;g.defineNodeNamesBooleanProperty("details","open",function(h){var f=d(d.data(this,"summaryElement"));if(f){var g=h?"removeClass":"addClass",j=d(this);if(!p&&o.animate){j.stop().css({width:"",height:""});var l={width:j.width(),height:j.height()}}f.attr("aria-expanded",""+h);j[g]("closed-details-summary").children().not(f[0])[g]("closed-details-child");!p&&o.animate&&(h={width:j.width(),height:j.height()},j.css(l).animate(h,{complete:function(){d(this).css({width:"",height:""})}}))}});
g.createElement("details",function(){p=!0;var g=d.data(this,"summaryElement");g||(g=d("> summary:first-child",this),g[0]?l(g,this):(d(this).prependPolyfill('<summary class="fallback-summary">'+o.text+"</summary>"),d.data(this,"summaryElement")));d.prop(this,"open",d.prop(this,"open"));p=!1})});
