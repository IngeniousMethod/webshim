(function(d){var r,v=function(){if(!r){r=true;var n=parseInt("NaN",10),e=d.webshims.inputTypes,l=function(a){return typeof a=="number"||a&&a==a*1},o=function(a){return d('<input type="'+a+'" />').attr("type")===a},j=function(a){return(a.getAttribute("type")||"").toLowerCase()},s=function(a,b){var c=d.attr(a,"step");if(c==="any")return c;b=b||j(a);if(!e[b]||!e[b].step)return c;c=e.number.asNumber(c);return(!isNaN(c)&&c>0?c:e[b].step)*e[b].stepScaleFactor},q=function(a,b,c){if(!(a+"AsNumber"in c)){c[a+
"AsNumber"]=e[c.type].asNumber(b.attr(a));if(isNaN(c[a+"AsNumber"])&&a+"Default"in e[c.type])c[a+"AsNumber"]=e[c.type][a+"Default"]}},m=function(a,b){a=""+a;b-=a.length;for(var c=0;c<b;c++)a="0"+a;return a};d.webshims.addValidityRule("stepMismatch",function(a,b,c){if(b==="")return false;if(!("type"in c))c.type=j(a[0]);if(c.type=="date")return false;var g=false;if(e[c.type]&&e[c.type].step){if(!("step"in c))c.step=s(a[0],c.type);if(c.step=="any")return false;if(!("valueAsNumber"in c))c.valueAsNumber=
e[c.type].asNumber(b);if(isNaN(c.valueAsNumber))return false;q("min",a,c);a=c.minAsNumber;if(isNaN(a))a=e[c.type].stepBase||0;g=Math.abs((c.valueAsNumber-a)%c.step);g=!(g<=1.0E-7||Math.abs(g-c.step)<=1.0E-7)}return g});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){d.webshims.addValidityRule(a.name,function(b,c,g){var h=false;if(c==="")return h;if(!("type"in g))g.type=j(b[0]);if(e[g.type]&&e[g.type].asNumber){if(!("valueAsNumber"in g))g.valueAsNumber=
e[g.type].asNumber(c);if(isNaN(g.valueAsNumber))return false;q(a.attr,b,g);if(isNaN(g[a.attr+"AsNumber"]))return h;h=g[a.attr+"AsNumber"]*a.factor<g.valueAsNumber*a.factor-1.0E-7}return h})});d.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(a){var b=j(a);return e[b]&&e[b].asNumber?e[b].asNumber(d.attr(a,"value")):n},setter:function(a,b,c){var g=j(a);if(e[g]&&e[g].numberToString)if(isNaN(b))d.attr(a,"value","");else{b=e[g].numberToString(b);if(b!==false)d.attr(a,"value",b);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else c()}});d.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(a){var b=j(a);return e[b]&&e[b].asDate&&!e[b].noAsDate?e[b].asDate(d.attr(a,"value")):null},setter:function(a,b,c){var g=j(a);if(e[g]&&e[g].dateToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(b===null)d.attr(a,"value","");else{b=e[g].dateToString(b);if(b!==false)d.attr(a,"value",b);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else c()}});o("number")||
d.webshims.addInputType("number",{mismatch:function(a){return!l(a)},step:1,stepScaleFactor:1,asNumber:function(a){return l(a)?a*1:n},numberToString:function(a){return l(a)?a:false}});!o("number")&&e.number&&d.webshims.addInputType("range",d.extend({},e.number,{minDefault:0,maxDefault:100}));!o("date")&&e.number&&d.webshims.addInputType("date",{mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return true;var b=a.split(/\u002D/);if(b.length!==3)return true;var c=false;d.each(b,function(g,h){if(!(l(h)||
h&&h=="0"+h*1)){c=true;return false}});if(c)return c;if(b[0].length!==4||b[1].length!=2||b[1]>12||b[2].length!=2||b[2]>33)c=true;return a!==this.dateToString(this.asDate(a,true))},step:1,stepScaleFactor:864E5,asDate:function(a,b){if(!b&&this.mismatch(a))return null;return new Date(this.asNumber(a,true))},asNumber:function(a,b){var c=n;if(b||!this.mismatch(a)){a=a.split(/\u002D/);c=Date.UTC(a[0],a[1]-1,a[2])}return c},numberToString:function(a){return l(a)?this.dateToString(new Date(a*1)):false},dateToString:function(a){return a&&
a.getFullYear?a.getUTCFullYear()+"-"+m(a.getUTCMonth()+1,2)+"-"+m(a.getUTCDate(),2):false}});!o("time")&&e.number&&e.date&&d.webshims.addInputType("time",d.extend({},e.date,{mismatch:function(a,b){if(!a||!a.split||!/\d$/.test(a))return true;a=a.split(/\u003A/);if(a.length<2||a.length>3)return true;var c=false,g;if(a[2]){a[2]=a[2].split(/\u002E/);g=parseInt(a[2][1],10);a[2]=a[2][0]}d.each(a,function(h,i){if(!(l(i)||i&&i=="0"+i*1)||i.length!==2){c=true;return false}});if(c)return true;if(a[0]>23||a[0]<
0||a[1]>59||a[1]<0)return true;if(a[2]&&(a[2]>59||a[2]<0))return true;if(g&&isNaN(g))return true;if(g)if(g<100)g*=100;else if(g<10)g*=10;return b===true?[a,g]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=n;a=this.mismatch(a,true);if(a!==true){b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0);if(a[1])b+=a[1]}return b},dateToString:function(a){if(a&&a.getUTCHours){var b=m(a.getUTCHours(),2)+":"+m(a.getUTCMinutes(),
2),c=a.getSeconds();if(c!="0")b+=":"+m(c,2);c=a.getUTCMilliseconds();if(c!="0")b+="."+m(c,3);return b}else return false}}));!o("datetime-local")&&e.number&&e.time&&d.webshims.addInputType("datetime-local",d.extend({},e.time,{mismatch:function(a,b){if(!a||!a.split||(a+"special").split(/\u0054/).length!==2)return true;a=a.split(/\u0054/);return e.date.mismatch(a[0])||e.time.mismatch(a[1],b)},noAsDate:true,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=
n,c=this.mismatch(a,true);if(c!==true){a=a.split(/\u0054/)[0].split(/\u002D/);b=Date.UTC(a[0],a[1]-1,a[2],c[0][0],c[0][1],c[0][2]||0);if(c[1])b+=c[1]}return b},dateToString:function(a,b){return e.date.dateToString(a)+"T"+e.time.dateToString(a,b)}}));(function(){var a=d.webshims.modules["number-date-type"].options,b=function(h,i,f){f=f||{};if(!("type"in f))f.type=j(h);if(!("step"in f))f.step=s(h,f.type);if(!("valueAsNumber"in f))f.valueAsNumber=e[f.type].asNumber(d.attr(h,"value"));var k=f.step=="any"?
e[f.type].step*e[f.type].stepScaleFactor:f.step;q("min",d(h),f);q("max",d(h),f);if(isNaN(f.valueAsNumber))f.valueAsNumber=e[f.type].stepBase||0;if(f.step!=="any")f.valueAsNumber=Math.round((f.valueAsNumber-(f.valueAsNumber-(f.minAsnumber||0))%f.step)*1E7)/1E7;h=f.valueAsNumber+k*i;if(!isNaN(f.minAsNumber)&&h<f.minAsNumber)h=f.valueAsNumber*i<f.minAsNumber?f.minAsNumber:isNaN(f.maxAsNumber)?Number.MAX_VALUE:f.maxAsNumber;else if(!isNaN(f.maxAsNumber)&&h>f.maxAsNumber)h=f.valueAsNumber*i>f.maxAsNumber?
f.maxAsNumber:isNaN(f.minAsNumber)?Number.MIN_VALUE:f.minAsNumber;return h};d.webshims.modules["number-date-type"].getNextStep=b;var c=function(h,i,f){if(!(h.disabled||h.readOnly||d(f).hasClass("step-controls"))){d.attr(h,"value",e[i].numberToString(b(h,d(f).hasClass("step-up")?1:-1,{type:i})));d(h).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==h)try{h.focus()}catch(k){}setTimeout(function(){if(document.activeElement!==h)try{h.focus()}catch(p){}d(h).one("blur.stepeventshim",
function(){d(h).trigger("change")})},0)}}};if(a.stepArrows){var g={elementNames:["input"],setter:function(h,i,f){f();if(i=d.data(h,"step-controls"))i[h.disabled||h.readonly?"addClass":"removeClass"]("disabled-step-control")}};d.webshims.attr("disabled",g);d.webshims.attr("readonly",g)}d.webshims.addReady(function(h){a.stepArrows&&d("input",h).each(function(){var i=j(this);if(!(!e[i]||!e[i].asNumber||!a.stepArrows||a.stepArrows!==true&&!a.stepArrows[i])){var f=this,k=d(this).css("direction")=="rtl"?
{action:"insertBefore",side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},p=d('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[k.action](this).bind("mousedown mousepress",function(w){c(f,i,w.target);return false});d(this).addClass("has-step-controls").data("step-controls",p).attr({readonly:this.readOnly,disabled:this.disabled});if(a.calculateWidth){var t=d(this).width()||parseInt(d(this).css("width"),10);if(t){var u=
(parseInt(d(this).css("margin"+k.side),10)||0)+(parseInt(p.css("margin"+k.side),10)||0);d(this).css("width",t-p.outerWidth(true));u&&p.css("margin"+k.side,u)}}}})})})();d.webshims.attr("type",{elementNames:["input"],getter:function(a){var b=j(a);return d.webshims.inputTypes[b]?b:a.type||a.getAttribute("type")},setter:true});d.webshims.createReadyEvent("number-date-type")}};d.support.validity===true?d.webshims.ready("validation-base",v,true):d.webshims.ready("validity",v,true)})(jQuery);
