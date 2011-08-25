(function(e){if(!Modernizr.genericDOM){var g=e.webshims,q=document,h,i,p=/<([\w:]+)/,n={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1},j=/^(?:[^<]*(<[\w\W]+>)[^>]*$)/;g.fixHTML5=function(e){if(typeof e!="string"||n[(p.exec(e)||["",""])[1].toLowerCase()])return e;if(!i){h=q.body;if(!h)return e;i=q.createElement("div");i.style.display="none"}var g=i.cloneNode(!1);h.appendChild(g);g.innerHTML=e;h.removeChild(g);return g.childNodes};if(g.fn&&g.fn.init){var o=g.fn.init;g.fn.init=function(e){e&&
j.exec(e)&&(arguments[0]=g.fixHTML5(e));return o.apply(this,arguments)};g.fn.init.prototype=o.prototype}}})(jQuery);
jQuery.webshims.register("dom-extend",function(e,g,q,h,i){var p=g.modules,n=/\s*,\s*/,j={},o={},k={},A={},r={},v=e.fn.val,B=function(b,a,c,d,f){return f?v.call(e(b)):v.call(e(b),c)};e.fn.val=function(b){var a=this[0];arguments.length&&b==null&&(b="");if(!arguments.length)return!a||a.nodeType!==1?v.call(this):e.prop(a,"value",b,"val",!0);if(e.isArray(b))return v.apply(this,arguments);var c=e.isFunction(b);return this.each(function(d){a=this;a.nodeType===1&&(c?(d=b.call(a,d,e.prop(a,"value",i,"val",
!0)),d==null&&(d=""),e.prop(a,"value",d,"val")):e.prop(a,"value",b,"val"))})};var u=function(b,a,c){b=b.jquery?b[0]:b;if(!b)return c||{};var d=e.data(b,"_webshimsLib");c!==i&&(d||(d=e.data(b,"_webshimsLib",{})),a&&(d[a]=c));return a?d&&d[a]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){e.fn[b.name]=function(){return this.map(function(){var a=u(this,"shadowData");return a&&
a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){j[b]=e[b];e[b]=function(a,c,d,f,l){var w=f=="val",g=!w?j[b]:B;if(!a||!o[c]||a.nodeType!==1||!w&&f&&b=="attr"&&e.attrFn[c])return g(a,c,d,f,l);var y=(a.nodeName||"").toLowerCase(),s=k[y],t=b=="attr"&&(d===!1||d===null)?"removeAttr":b,h,m,n;s||(s=k["*"]);s&&(s=s[c]);s&&(h=s[t]);if(h){if(c=="value")m=h.isVal,h.isVal=w;if(t==="removeAttr")return h.value.call(a);else if(d===i)return h.get?h.get.call(a):h.value;else h.set&&(b=="attr"&&
d===!0&&(d=c),n=h.set.call(a,d));if(c=="value")h.isVal=m}else n=g(a,c,d,f,l);if((d!==i||t==="removeAttr")&&r[y]&&r[y][c]){var p;p=t=="removeAttr"?!1:t=="prop"?!!d:!0;r[y][c].forEach(function(c){if(!c.only||(c.only=b=="prop")||c.only=="attr"&&b!="prop")c.call(a,d,p,w?"val":t,b)})}return n};A[b]=function(a,c,d){k[a]||(k[a]={});k[a][c]||(k[a][c]={});var f=k[a][c][b],l=function(a,l,f){return l&&l[a]?l[a]:f&&f[a]?f[a]:b=="prop"&&c=="value"?function(a){return d.isVal?B(this,c,a,!1,arguments.length===0):
j[b](this,c,a)}:b=="prop"&&a=="value"&&d.value.apply?function(a){var d=j[b](this,c);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return j[b](this,c,a)}};k[a][c][b]=d;if(d.value===i){if(!d.set)d.set=d.writeable?l("set",d,f):g.cfg.useStrict&&c=="prop"?function(){throw c+" is readonly on "+a;}:e.noop;if(!d.get)d.get=l("get",d,f)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=l(a,f))})}});var C=!e.browser.msie||parseInt(e.browser.version,10)>8,D=function(){var b=g.getPrototypeOf(h.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,d,f){var l=h.createElement(c),e=g.getPrototypeOf(l);if(C&&e&&b!==e&&(!l[d]||!a.call(l,d))){var x=l[d];f._supvalue=function(){return x&&x.apply?x.apply(this,arguments):x};e[d]=f.value}else f._supvalue=function(){var a=u(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},m.extendValue(c,d,f.value);f.value._supvalue=f._supvalue}}(),m=function(){var b={};g.addReady(function(a,c){var d={},h=function(b){d[b]||(d[b]=e(a.getElementsByTagName(b)),
c[0]&&e.nodeName(c[0],b)&&(d[b]=d[b].add(c)))};e.each(b,function(a,c){h(a);!c||!c.forEach?g.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){d[a].each(c)})});d=null});var a,c=e([]),d=function(c,d){b[c]?b[c].push(d):b[c]=[d];e.isDOMReady&&(a||e(h.getElementsByTagName(c))).each(d)};return{createTmpCache:function(b){e.isDOMReady&&(a=a||e(h.getElementsByTagName(b)));return a||c},flushTmpCache:function(){a=null},content:function(a,c){d(a,function(){e(this).filter("["+c+"]").attr(c,
function(a,c){return c})})},createElement:function(a,c){d(a,c)},extendValue:function(a,c,b){d(a,function(){e(this).each(function(){u(this,"propValue",{})[c]=this[c];this[c]=b})})}}}(),z=function(b,a){if(b.defaultValue===i)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}}};e.extend(g,{getID:function(){var b=(new Date).getTime();return function(a){var a=e(a),c=a.attr("id");c||(b++,c="ID-"+b,a.attr("id",c));
return c}}(),extendUNDEFProp:function(b,a){e.each(a,function(a,d){a in b||(b[a]=d)})},createPropDefault:z,data:u,addShadowDom:function(b,a,c){c=c||{};b.jquery&&(b=b[0]);a.jquery&&(a=a[0]);if(!c.shadowFocusElement)c.shadowFocusElement=a;var d=e.data(b,"_webshimsLib")||e.data(b,"_webshimsLib",{}),f=e.data(a,"_webshimsLib")||e.data(a,"_webshimsLib",{});d.hasShadow=a;f.nativeElement=b;f.shadowData=d.shadowData={nativeElement:b,shadowElement:a,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){u(this,
"shadowData",f.shadowData)});if(c.data)d.shadowData.data=c.data,f.shadowData.data=c.data;c=null},propTypes:{standard:function(b){z(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){z(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return b.attr.get.call(this)!=null}}}},reflectProperties:function(b,a){typeof a=="string"&&(a=a.split(n));
a.forEach(function(a){g.defineNodeNamesProperty(b,a,{prop:{set:function(b){e.attr(this,a,b)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,c){o[a]=!0;if(c.reflect)g.propTypes[c.propType||"standard"](c);["prop","attr","removeAttr"].forEach(function(d){var f=c[d];f&&(f=d==="prop"?e.extend({writeable:!0},f):e.extend({},f,{writeable:!0}),A[d](b,a,f),b!="*"&&g.cfg.extendNative&&d=="prop"&&f.value&&e.isFunction(f.value)&&D(b,a,f),c[d]=f)});c.initAttr&&m.content(b,a);
return c},defineNodeNameProperties:function(b,a,c,d){for(var e in a)!d&&a[e].initAttr&&m.createTmpCache(b),c&&(a[e][c]?g.log("override: "+b+"["+e+"] for "+c):(a[e][c]={},["value","set","get"].forEach(function(b){b in a[e]&&(a[e][c][b]=a[e][b],delete a[e][b])}))),a[e]=g.defineNodeNameProperty(b,e,a[e]);d||m.flushTmpCache();return a},createElement:function(b,a,c){var d;e.isFunction(a)&&(a={after:a});m.createTmpCache(b);a.before&&m.createElement(b,a.before);c&&(d=g.defineNodeNameProperties(b,c,!1,!0));
a.after&&m.createElement(b,a.after);m.flushTmpCache();return d},onNodeNamesPropertyModify:function(b,a,c,d){typeof b=="string"&&(b=b.split(n));e.isFunction(c)&&(c={set:c});b.forEach(function(b){r[b]||(r[b]={});typeof a=="string"&&(a=a.split(n));c.initAttr&&m.createTmpCache(b);a.forEach(function(a){r[b][a]||(r[b][a]=[],o[a]=!0);if(c.set){if(d)c.set.only=d;r[b][a].push(c.set)}c.initAttr&&m.content(b,a)});m.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,c){c||(c={});if(e.isFunction(c))c.set=
c;g.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return this.getAttribute(a)==null?i:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===i)return c=(b.attributes[a]||{}).value,c==null?i:c;typeof c=="boolean"?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var b=
[],a,c,d=function(a,b,c){return b&&c&&e.inArray(b,c.availabeLangs||[])!==-1?(a.loading=!0,g.loader.loadScript(c.langSrc+b+".js",function(){a.langObj[b]?(a.loading=!1,f(a,!0)):e(function(){a.langObj[b]&&f(a,!0);a.loading=!1})}),!0):!1},f=function(b,e){if(b.activeLang!=a&&b.activeLang!==c){var f=p[b.module].options;if(b.langObj[a]||c&&b.langObj[c])b.activeLang=a,b.callback(b.langObj[a]||b.langObj[c],a);else if(!e&&!d(b,a,f)&&!d(b,c,f)&&b.langObj[""]&&b.activeLang!=="")b.activeLang="",b.callback(b.langObj[""],
a)}};return function(d){if(typeof d=="string"&&d!==a)a=d,c=a.split("-")[0],a==c&&(c=!1),e.each(b,function(a,b){f(b)});else if(typeof d=="object"){if(!d.activeLang)d.activeLang="";b.push(d);f(d)}return a}}()});e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){g[b]=function(b,d,e,h){typeof b=="string"&&(b=b.split(n));var i={};b.forEach(function(b){i[b]=g[a](b,d,e,h)});return i}});g.isReady("webshimLocalization",
!0)});
(function(e,g){var q=parseFloat(e.browser.version,10);if(e.browser.msie&&q<10&&q>7||e.browser.mozilla&&q<2||e.browser.webkit&&q<535){var h={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},i=function(e,g){e.getAttribute("role")||e.setAttribute("role",g)};e.webshims.addReady(function(p,n){e.each(h,function(g,h){for(var j=e(g,p).add(n.filter(g)),k=0,o=j.length;k<o;k++)i(j[k],h)});if(p===g){var j=g.getElementsByTagName("header")[0],o=g.getElementsByTagName("footer"),k=
o.length;j&&!e(j).closest("section, article")[0]&&i(j,"banner");k&&(j=o[k-1],e(j).closest("section, article")[0]||i(j,"contentinfo"))}})}})(jQuery,document);
