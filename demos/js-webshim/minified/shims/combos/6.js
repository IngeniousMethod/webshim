jQuery.webshims.register("form-number-date-api",function(a,b){var n,k,w;if(!b.getStep)b.getStep=function(m,b){var c=a.attr(m,"step");if("any"===c)return c;b=b||p(m);if(!d[b]||!d[b].step)return c;c=n.asNumber(c);return(!isNaN(c)&&0<c?c:d[b].step)*d[b].stepScaleFactor};if(!b.addMinMaxNumberToCache)b.addMinMaxNumberToCache=function(a,b,c){a+"AsNumber"in c||(c[a+"AsNumber"]=d[c.type].asNumber(b.attr(a)),isNaN(c[a+"AsNumber"])&&a+"Default"in d[c.type]&&(c[a+"AsNumber"]=d[c.type][a+"Default"]))};var h=
parseInt("NaN",10),d=b.inputTypes,r=function(a){return"number"==typeof a||a&&a==1*a},s=function(m){return a('<input type="'+m+'" />').prop("type")===m},p=function(a){return(a.getAttribute("type")||"").toLowerCase()},x=b.addMinMaxNumberToCache,t=function(a,b){for(var a=""+a,b=b-a.length,c=0;c<b;c++)a="0"+a;return a},i=b.bugs.valueAsNumberSet||b.bugs.bustedValidity;b.addValidityRule("stepMismatch",function(a,g,c,f){if(""===g)return!1;if(!("type"in c))c.type=p(a[0]);if("date"==c.type)return!1;f=(f||
{}).stepMismatch;if(d[c.type]&&d[c.type].step){if(!("step"in c))c.step=b.getStep(a[0],c.type);if("any"==c.step)return!1;if(!("valueAsNumber"in c))c.valueAsNumber=d[c.type].asNumber(g);if(isNaN(c.valueAsNumber))return!1;x("min",a,c);a=c.minAsNumber;isNaN(a)&&(a=d[c.type].stepBase||0);f=Math.abs((c.valueAsNumber-a)%c.step);f=!(1.0E-7>=f||1.0E-7>=Math.abs(f-c.step))}return f});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){b.addValidityRule(a.name,
function(b,c,f,e){e=(e||{})[a.name]||!1;if(""===c)return e;if(!("type"in f))f.type=p(b[0]);if(d[f.type]&&d[f.type].asNumber){if(!("valueAsNumber"in f))f.valueAsNumber=d[f.type].asNumber(c);if(isNaN(f.valueAsNumber))return!1;x(a.attr,b,f);if(isNaN(f[a.attr+"AsNumber"]))return e;e=f[a.attr+"AsNumber"]*a.factor<f.valueAsNumber*a.factor-1.0E-7}return e})});b.reflectProperties(["input"],["max","min","step"]);var u=b.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var b=p(this),b=d[b]&&
d[b].asNumber?d[b].asNumber(a.prop(this,"value")):u.prop._supget&&u.prop._supget.apply(this,arguments);null==b&&(b=h);return b},set:function(m){var g=p(this);d[g]&&d[g].numberToString?isNaN(m)?a.prop(this,"value",""):(g=d[g].numberToString(m),!1!==g?a.prop(this,"value",g):b.warn("INVALID_STATE_ERR: DOM Exception 11")):u.prop._supset&&u.prop._supset.apply(this,arguments)}}}),v=b.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var b=p(this);return d[b]&&d[b].asDate&&!d[b].noAsDate?
d[b].asDate(a.prop(this,"value")):v.prop._supget&&v.prop._supget.call(this)||null},set:function(m){var g=p(this);if(d[g]&&d[g].dateToString&&!d[g].noAsDate){if(null===m)return a.prop(this,"value",""),"";g=d[g].dateToString(m);if(!1!==g)return a.prop(this,"value",g),g;b.warn("INVALID_STATE_ERR: DOM Exception 11")}else return v.prop._supset&&v.prop._supset.apply(this,arguments)||null}}});n={mismatch:function(a){return!r(a)},step:1,stepScaleFactor:1,asNumber:function(a){return r(a)?1*a:h},numberToString:function(a){return r(a)?
a:!1}};k={minDefault:0,maxDefault:100};w={mismatch:function(b){if(!b||!b.split||!/\d$/.test(b))return!0;var d=b.split(/\u002D/);if(3!==d.length)return!0;var c=!1;a.each(d,function(a,e){if(!(r(e)||e&&e=="0"+1*e))return c=!0,!1});if(c)return c;if(4!==d[0].length||2!=d[1].length||12<d[1]||2!=d[2].length||33<d[2])c=!0;return b!==this.dateToString(this.asDate(b,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var c=
h;if(b||!this.mismatch(a))a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-1,a[2]);return c},numberToString:function(a){return r(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+t(a.getUTCMonth()+1,2)+"-"+t(a.getUTCDate(),2):!1}};if(i||!s("range")||!s("time"))k=a.extend({},n,k);(i||!s("number"))&&b.addInputType("number",n);(i||!s("range"))&&b.addInputType("range",k);(i||!s("date"))&&b.addInputType("date",w)});
jQuery.webshims.register("form-number-date-ui",function(a,b,n,k,w,h){var d=b.triggerInlineForm,r=Modernizr.inputtypes,s=function(){var a={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},f=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(e,b){var d,j,h;j="width";f&&(j=a[e.css(f)]||j);d=e[j]();j="width"==j;if(d){var q=parseInt(b.css("marginLeft"),10)||0,y=b.outerWidth();(h=parseInt(e.css("marginRight"),10)||0)&&e.css("marginRight",0);q<=-1*y?(b.css("marginRight",
Math.floor(Math.abs(y+q)+h)),e.css("paddingRight",(parseInt(e.css("paddingRight"),10)||0)+Math.abs(q)),j&&e.css("width",Math.floor(d+q))):(b.css("marginRight",h),e.css("width",Math.floor(d-q-y)))}}}(),p={},x=a([]),t,i=function(c,f){a("input",c).add(f.filter("input")).each(function(){var c=a.prop(this,"type");if(i[c]&&!b.data(this,"shadowData"))i[c](a(this))})},u=function(c,f){if(h.lazyDate){var e=a.data(c[0],"setDateLazyTimer");e&&clearTimeout(e);a.data(c[0],"setDateLazyTimer",setTimeout(function(){c.datepicker("setDate",
f);a.removeData(c[0],"setDateLazyTimer");c=null},0))}else c.datepicker("setDate",f)};if(h.lazyDate===w)try{h.lazyDate=a.browser.msie&&9>b.browserVersion||500>a(n).width()&&500>a(n).height()}catch(v){}var m={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!h.copyAttrs)h.copyAttrs={};b.extendUNDEFProp(h.copyAttrs,m);i.common=function(c,f,e){Modernizr.formvalidation&&c.bind("firstinvalid",function(a){(b.fromSubmit||!t)&&c.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",
function(e){!a.isInvalidUIPrevented()&&!e.isDefaultPrevented()&&(b.validityAlert.showFor(a.target),a.preventDefault(),e.preventDefault());c.unbind("invalid.replacedwidgetbubble")})});var d,o,j=a("input, span.ui-slider-handle",f),i=c[0].attributes;for(d in h.copyAttrs)if((o=i[d])&&o.specified)m[d]&&j[0]?j.attr(d,o.nodeValue):f[0].setAttribute(d,o.nodeValue);o=c.attr("id");d=h.calculateWidth?{css:{marginRight:c.css("marginRight"),marginLeft:c.css("marginLeft")},outerWidth:c.outerWidth()}:{};d.label=
o?a('label[for="'+o+'"]',c[0].form):x;o=b.getID(d.label);f.addClass(c[0].className);b.addShadowDom(c,f,{data:e||{},shadowFocusElement:a("input.input-datetime-local-date, span.ui-slider-handle",f)[0],shadowChilds:j});c.after(f).hide();c[0].form&&a(c[0].form).bind("reset",function(a){a.originalEvent&&!a.isDefaultPrevented()&&setTimeout(function(){c.prop("value",c.prop("value"))},0)});1==f.length&&!a("*",f)[0]&&(f.attr("aria-labelledby",o),d.label.bind("click",function(){f.focus();return!1}));return d};
Modernizr.formvalidation&&["input","form"].forEach(function(a){var f=b.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){t=!0;var a=f.prop._supvalue.apply(this,arguments);t=!1;return a}}})});if(!r.date||h.replaceUI){var g=function(c,f,e,d){var o,j,i=function(){q.dpDiv.unbind("mousedown.webshimsmousedownhandler");j=o=!1},q=f.bind("focusin",function(){i();q.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){o=!0})}).bind("focusout blur",
function(a){o&&(j=!0,a.stopImmediatePropagation())}).datepicker(a.extend({onClose:function(){j&&f.not(":focus")?(i(),f.trigger("focusout"),f.triggerHandler("blur")):i()}},p,h.datepicker,c.data("datepicker"))).bind("change",e).data("datepicker");q.dpDiv.addClass("input-date-datepicker-control");d&&b.triggerDomUpdate(d[0]);"disabled,min,max,value,step,data-placeholder".split(",").forEach(function(a){var e=c.prop(a);""!==e&&("disabled"!=a||!e)&&c.prop(a,e)});return q};i.date=function(c){if(a.fn.datepicker){var f=
a('<input class="input-date" type="text" />'),e=this.common(c,f,i.date.attrs),b=g(c,f,function(e){i.date.blockAttr=!0;var b;if(h.lazyDate){var z=a.data(f[0],"setDateLazyTimer");z&&(clearTimeout(z),a.removeData(f[0],"setDateLazyTimer"))}try{b=(b=a.datepicker.parseDate(f.datepicker("option","dateFormat"),f.prop("value")))?a.datepicker.formatDate("yy-mm-dd",b):f.prop("value")}catch(q){b=f.prop("value")}c.prop("value",b);i.date.blockAttr=!1;e.stopImmediatePropagation();d(c[0],"input");d(c[0],"change")});
e.css&&(f.css(e.css),e.outerWidth&&f.outerWidth(e.outerWidth),b.trigger[0]&&s(f,b.trigger))}};i.date.attrs={disabled:function(c,b,e){a.prop(b,"disabled",!!e)},min:function(c,b,e){try{e=a.datepicker.parseDate("yy-mm-dd",e)}catch(d){e=!1}e&&a(b).datepicker("option","minDate",e)},max:function(c,b,e){try{e=a.datepicker.parseDate("yy-mm-dd",e)}catch(d){e=!1}e&&a(b).datepicker("option","maxDate",e)},"data-placeholder":function(c,b,e){c=(e||"").split("-");3==c.length&&(e=a(b).datepicker("option","dateFormat").replace("yy",
c[0]).replace("mm",c[1]).replace("dd",c[2]));a.prop(b,"placeholder",e)},value:function(c,b,e){if(!i.date.blockAttr){try{var d=a.datepicker.parseDate("yy-mm-dd",e)}catch(h){d=!1}d?u(a(b),d):a.prop(b,"value",e)}}}}if(!r.range||h.replaceUI)i.range=function(c){if(a.fn.slider){var b=a('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),e=this.common(c,b,i.range.attrs);a("span",b).attr("aria-labelledby",e.label.attr("id"));e.label.bind("click",function(){a("span",
b).focus();return!1});e.css&&(b.css(e.css),e.outerWidth&&b.outerWidth(e.outerWidth));b.slider(a.extend(!0,{},h.slider,c.data("slider"))).bind("slide",function(a,b){if(a.originalEvent)i.range.blockAttr=!0,c.prop("value",b.value),i.range.blockAttr=!1,d(c[0],"input"),d(c[0],"change")});["disabled","min","max","step","value"].forEach(function(b){var e=c.attr(b),f;"value"==b&&!e&&(f=c.getShadowElement())&&(e=(a(f).slider("option","max")-a(f).slider("option","min"))/2);null!=e&&c.attr(b,e)})}},i.range.attrs=
{disabled:function(b,f,e){e=!!e;a(f).slider("option","disabled",e);a("span",f).attr({"aria-disabled":e+"",tabindex:e?"-1":"0"})},min:function(b,f,e){e=e?1*e||0:0;a(f).slider("option","min",e);a("span",f).attr({"aria-valuemin":e})},max:function(b,f,e){e=e||0===e?1*e||100:100;a(f).slider("option","max",e);a("span",f).attr({"aria-valuemax":e})},value:function(b,f,e){e=a(b).prop("valueAsNumber");isNaN(e)||(i.range.blockAttr||a(f).slider("option","value",e),a("span",f).attr({"aria-valuenow":e,"aria-valuetext":e}))},
step:function(b,f,e){e=e&&a.trim(e)?1*e||1:1;a(f).slider("option","step",e)}};if(!b.bugs.valueAsNumberSet&&(h.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range))n=function(){b.data(this,"hasShadow")&&a.prop(this,"value",a.prop(this,"value"))},b.onNodeNamesPropertyModify("input","valueAsNumber",n),b.onNodeNamesPropertyModify("input","valueAsDate",n);a.each("disabled,min,max,value,step,data-placeholder".split(","),function(a,f){b.onNodeNamesPropertyModify("input",f,function(a){var c=
b.data(this,"shadowData");if(c&&c.data&&c.data[f]&&c.nativeElement===this)c.data[f](this,c.shadowElement,a)})});if(!h.availabeLangs)h.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");n=function(){a.datepicker&&(b.activeLang({langObj:a.datepicker.regional,module:"form-number-date-ui",callback:function(b){b=a.extend({},
p,b,h.datepicker);b.dateFormat&&h.datepicker.dateFormat!=b.dateFormat&&a("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option","dateFormat",b.dateFormat).getNativeElement().filter("[data-placeholder]").attr("data-placeholder",function(a,b){return b});a.datepicker.setDefaults(b)}}),a(k).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};a(k).bind("jquery-uiReady.langchange input-widgetsReady.langchange",n);n();(function(){var c=function(){var b=
{};return function(c){return c in b?b[c]:b[c]=a('<input type="'+c+'" />')[0].type===c}}();if(!c("number")){var f=b.cfg["forms-ext"],e=b.inputTypes,h=function(c,f,d){d=d||{};if(!("type"in d))d.type=a.prop(c,"type");if(!("step"in d))d.step=b.getStep(c,d.type);if(!("valueAsNumber"in d))d.valueAsNumber=e[d.type].asNumber(a.prop(c,"value"));var h="any"==d.step?e[d.type].step*e[d.type].stepScaleFactor:d.step;b.addMinMaxNumberToCache("min",a(c),d);b.addMinMaxNumberToCache("max",a(c),d);if(isNaN(d.valueAsNumber))d.valueAsNumber=
e[d.type].stepBase||0;if("any"!==d.step&&(c=Math.round(1E7*((d.valueAsNumber-(d.minAsnumber||0))%d.step))/1E7)&&Math.abs(c)!=d.step)d.valueAsNumber-=c;c=d.valueAsNumber+h*f;return c=!isNaN(d.minAsNumber)&&c<d.minAsNumber?d.valueAsNumber*f<d.minAsNumber?d.minAsNumber:isNaN(d.maxAsNumber)?d.valueAsNumber:d.maxAsNumber:!isNaN(d.maxAsNumber)&&c>d.maxAsNumber?d.valueAsNumber*f>d.maxAsNumber?d.maxAsNumber:isNaN(d.minAsNumber)?d.valueAsNumber:d.minAsNumber:Math.round(1E7*c)/1E7};b.modules["form-number-date-ui"].getNextStep=
h;var i=function(b,c,f){if(!b.disabled&&!b.readOnly&&!a(f).hasClass("step-controls")&&(a.prop(b,"value",e[c].numberToString(h(b,a(f).hasClass("step-up")?1:-1,{type:c}))),a(b).unbind("blur.stepeventshim"),d(b,"input"),k.activeElement)){if(k.activeElement!==b)try{b.focus()}catch(i){}setTimeout(function(){if(k.activeElement!==b)try{b.focus()}catch(c){}a(b).one("blur.stepeventshim",function(){d(b,"change")})},0)}};if(f.stepArrows){var g={set:function(){var a=b.data(this,"step-controls");if(a)a[this.disabled||
this.readonly?"addClass":"removeClass"]("disabled-step-control")}};b.onNodeNamesPropertyModify("input","disabled",g);b.onNodeNamesPropertyModify("input","readonly",a.extend({},g))}var m={38:1,40:-1};b.addReady(function(g,j){f.stepArrows&&a("input",g).add(j.filter("input")).each(function(){var g=a.prop(this,"type");if(e[g]&&e[g].asNumber&&f.stepArrows&&!(!0!==f.stepArrows&&!f.stepArrows[g]||c(g)||a(l).hasClass("has-step-controls"))){var l=this,j=a('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(l).bind("selectstart dragstart",
function(){return!1}).bind("mousedown mousepress",function(a){i(l,g,a.target);return!1}).bind("mousepressstart mousepressend",function(b){a(b.target)["mousepressstart"==b.type?"addClass":"removeClass"]("mousepress-ui")}),n=function(b,c){if(!l.disabled&&!l.readOnly)return a.prop(l,"value",e[g].numberToString(h(l,c,{type:g}))),d(l,"input"),!1},k=a(l).addClass("has-step-controls").attr({readonly:l.readOnly,disabled:l.disabled,autocomplete:"off",role:"spinbutton"}).bind(a.browser.msie?"keydown":"keypress",
function(b){if(!l.disabled&&!l.readOnly&&m[b.keyCode])return a.prop(l,"value",e[g].numberToString(h(l,m[b.keyCode],{type:g}))),d(l,"input"),!1});a.fn.mwheelIntent?k.add(j).bind("mwheelIntent",n):k.bind("focus",function(){k.add(j).unbind(".mwhellwebshims").bind("mousewheel.mwhellwebshims",n)}).bind("blur",function(){a(l).add(j).unbind(".mwhellwebshims")});b.data(l,"step-controls",j);f.calculateWidth&&(s(k,j),j.css("marginTop",(k.outerHeight()-j.outerHeight())/2))}})})}})();b.addReady(function(c,d){a(k).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(a.datepicker||a.fn.slider){if(a.datepicker&&!p.dateFormat)p.dateFormat=a.datepicker._defaults.dateFormat;i(c,d)}a.datepicker&&a.fn.slider?a(k).unbind(".initinputui"):b.modules["input-widgets"].src||b.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
