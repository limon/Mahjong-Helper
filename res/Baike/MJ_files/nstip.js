/*! 2015 Baidu Inc. All Rights Reserved */
!function(e,t){function n(e){var t=C.statistics;if(t&&t[e]&&t[e].url){var n=window.bds||{},i="";if(n&&n.comm&&n.comm.qid)i=n.comm.qid;var r={qid:i,url:window.document.location.href,timestamp:+new Date};x=t[e].url,d.object.extend(r,t[e].query||{}),T(r)}}function i(e,t){var n={},i="";if(e){var o=[];for(var s in e)if("billing"!==s&&"url"!==s&&"text"!==s)o.push("'"+s+"':'"+e[s]+"'");else;n={billing:e.billing&&' class="EC_PP"',url:e.url,text:e.text||t,options:o.join(",")},i=r("a",n)}return i}function r(e,t){return t=t||{},d.format(w[e],t)}function o(e,t){var n="";if(t){var o=i(t.a,g);n=r(e,{text:t.text,a:o,img:t.img})}return n}function s(e){var t,n=o("medical",e.medical);if(e.identity)if(e.identity.img)t=o("identityImg",e.identity);else t=o("identity",e.identity);var i,s=o("credit",e.identity);if(e.personal&&e.personal.img)i=o("personalImg",e.personal);else i=o("personal",e.personal);var a=o("airline",e.airline),l=o("dfa",e.dfa),c=r("list",{medical:n,credit:s,airline:a,dfa:l,personal:i}),u=""+c;return u}function a(e,t){var n=e.getAttribute(t);return n&&d.json.parse(n)}function l(e){for(var t=d.q("c-icon-v1").concat(d.q("c-icon-v2")).concat(d.q("c-icon-v3")).concat(d.q("c-icon-high-v")).concat(d.q("c-icon-person")),n="data-renzheng",i=0,r=t.length;r>i;i++){var o=t[i];if(!d.hasClass(o,"vtip-inited")){var s=new m.se.tip({target:o});s.onShow=d.fn.bind(c,s,n),d.addClass(o,"vtip-inited")}else;}}function c(e,t){n("identity");var i=this;if(!i.alreadyRender){i.op.offset=C.offset.identity;var r=i.getTarget(),o=parseInt(d.dom.getStyle(r,"width"),10);if(isNaN(o))o=0;if(o>22)i.op.arrow.offset=o/2;if(r.getAttribute("data-tip-limite")){var l=d.dom.getAncestorByClass(r,"ec_wd_ctner"),c=d.dom.getAncestorByClass(r,C.rightContainerDomClass),u=c||d.dom.g(C.rightContainerDomId)||l,m=parseInt(d.dom.getPosition(u).left,10),p=d.dom.getComputedStyle(u,"width");if(p)p=parseInt(p,10);else p=270;var h=parseInt(d.dom.getPosition(r).left,10),g=Math.abs(m+p-b-h);i.op.offset={x:g,y:25},i.op.arrow={has:1,offset:o>22?g+o/3:g}}var v=a(r,e);if("i"===r.tagName.toLowerCase()){var y=r.parentNode;if("a"===y.tagName.toLowerCase()){var w=y.getAttribute("href");if(v.identity)if(v.identity.a)if(v.identity.a.url&&w)v.identity.a.url=w;if(v.personal)if(v.personal.a)if(v.personal.a.url&&w)v.personal.a.url=w}}var x=s(v);if(i.setTitle(v.title),i.setContent(x),v.identity)f(d.dom.q("EC-credit",i.getDom())[0],v.identity.a.url,v.identity.process_level,v.identity.process);i.alreadyRender=!0}}function u(e){d.ready(function(){if(!d.dom.g("c-tips-container")){var t=d.dom.create("div",{id:"c-tips-container",className:"c-tips-container"});document.body.appendChild(t)}d.object.extend(C,e||{}),l(C)})}function f(e,t,n,i){var n=n>=0?n:-1;e.innerHTML+='<div class="opui-honourCard"><div class="opui-honourCard-title c-gap-bottom-small">\u5df2\u83b7\u5f97<a style="text-decoration:underline" class="c-gap-left-small" target="_blank">\u767e\u5ea6\u4fe1\u8a89&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u7b49\u7ea7\u8bc4\u5b9a<i class="c-icon c-icon-v-noborder"></i></a></div><div class="opui-honourCard-info c-gap-bottom-small"><ol><li><i class="c-icon c-icon-v1-noborder-disable c-gap-right-small"></i>\u57fa\u7840\u4fe1\u8a89\u79ef\u7d2f\uff0c\u53ef\u6d4f\u89c8\u8bbf\u95ee</li><li><i class="c-icon c-icon-v2-noborder-disable c-gap-right-small"></i>\u826f\u597d\u4fe1\u8a89\u79ef\u7d2f\uff0c\u53ef\u63a5\u6d3d\u5546\u8c08</li><li><i class="c-icon c-icon-v3-noborder-disable c-gap-right-small"></i>\u4f18\u8d28\u4fe1\u8a89\u79ef\u7d2f\uff0c\u53ef\u6301\u7eed\u4fe1\u8d56</li></ol></div></div>';var r=d.dom.query(".opui-honourCard-title a",e)[0];if(t)r.setAttribute("href",t);if(1>=n){d.addClass(d.dom.query(".opui-honourCard-info li",e)[0],"opui-honourCard-selected");var o=d.dom.q("c-icon-v1-noborder-disable",e)[0];if(o)d.addClass(o,"c-icon-v1-noborder"),d.removeClass(o,"c-icon-v1-noborder-disable")}else if(2>=n){d.addClass(d.dom.query(".opui-honourCard-info li",e)[1],"opui-honourCard-selected");var s=d.dom.q("c-icon-v2-noborder-disable",e)[0];if(s)d.addClass(s,"c-icon-v2-noborder"),d.removeClass(s,"c-icon-v2-noborder-disable")}else{d.addClass(d.dom.query(".opui-honourCard-info li",e)[2],"opui-honourCard-selected");var a=d.dom.q("c-icon-v3-noborder-disable",e)[0];if(a)d.addClass(a,"c-icon-v3-noborder"),d.removeClass(a,"c-icon-v3-noborder-disable")}}var d={};d.browser=function(){var exports={};return exports.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent),exports.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:t,exports.isStrict="CSS1Compat"==document.compatMode,exports.isWebkit=/webkit/i.test(navigator.userAgent),exports.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp.$6||RegExp.$2):t,exports}(),d.string=function(){var exports={},e=/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g;return exports.trim=function(t){if(!t)return"";else return String(t).replace(e,"")},exports.toCamelCase=function(e){if(e.indexOf("-")<0&&e.indexOf("_")<0)return e;else return e.replace(/[-_][^-_]/g,function(e){return e.charAt(1).toUpperCase()})},exports.format=function(e,t){e=String(e);var n=Array.prototype.slice.call(arguments,1),i=Object.prototype.toString;if(n.length)return n=1==n.length?null!==t&&/\[object Array\]|\[object Object\]/.test(i.call(t))?t:n:n,e.replace(/#\{(.+?)\}/g,function(e,t){var r=n[t];if("[object Function]"==i.call(r))r=r(t);return"undefined"==typeof r?"":r});else return e},exports.escapeReg=function(e){return String(e).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])","g"),"\\$1")},exports}(),d.dom=function(){var exports={};exports.g=function(e){if(!e)return null;else return"string"==typeof e?document.getElementById(e):e},exports.contains=function(e,t){var n=exports.g;return e=n(e),t=n(t),e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))},exports.hasClass=function(e,t){if(e=exports.g(e),!e||!e.className)return!1;var n=d.string.trim(t).split(/\s+/),i=n.length;for(t=e.className.split(/\s+/).join(" ");i--;)if(!new RegExp("(^| )"+n[i]+"( |$)").test(t))return!1;return!0},exports.addClass=function(e,t){e=exports.g(e);for(var n=t.split(/\s+/),i=e.className,r=" "+i+" ",o=0,s=n.length;s>o;o++)if(r.indexOf(" "+n[o]+" ")<0)i+=(i?" ":"")+n[o];return e.className=i,e},exports.removeClass=function(e,t){e=exports.g(e);for(var n,i,r=e.className.split(/\s+/),o=t.split(/\s+/),s=o.length,a=0;s>a;++a)for(i=0,n=r.length;n>i;++i)if(r[i]==o[a]){r.splice(i,1);break}return e.className=r.join(" "),e},exports.getAncestorByClass=function(e,t){for(e=exports.g(e),t=new RegExp("(^|\\s)"+d.string.trim(t)+"(\\s|$)");(e=e.parentNode)&&1===e.nodeType;)if(t.test(e.className))return e;return null},exports.q=function(e,t,n){var i,r,o,s,a=[],l=d.string.trim;if(!(e=l(e)))return a;if("undefined"==typeof t)t=document;else if(t=exports.g(t),!t)return a;if(n&&(n=l(n).toUpperCase()),t.getElementsByClassName)for(o=t.getElementsByClassName(e),i=o.length,r=0;i>r;r++)if(s=o[r],!n||s.tagName==n)a[a.length]=s;else;else for(e=new RegExp("(^|\\s)"+d.string.escapeReg(e)+"(\\s|$)"),o=n?t.getElementsByTagName(n):t.all||t.getElementsByTagName("*"),i=o.length,r=0;i>r;r++)s=o[r],e.test(s.className)&&(a[a.length]=s);return a},exports.getDocument=function(e){return e=exports.g(e),9==e.nodeType?e:e.ownerDocument||e.document},exports._styleFixer=exports._styleFixer||{},exports._styleFilter=exports._styleFilter||[],exports._styleFilter.filter=function(e,t,n){for(var i,r=0,o=exports._styleFilter;i=o[r];r++)if(i=i[n])t=i(e,t);return t},exports._styleFilter[exports._styleFilter.length]={set:function(e,t){if(t.constructor==Number&&!/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(e))t+="px";return t}},exports.getStyle=function(e,t){e=exports.g(e),t=d.string.toCamelCase(t);var n=e.style[t]||exports.getComputedStyle(e,t);if(!n||"auto"==n){var i=exports._styleFixer[t];if(i)n=i.get?i.get(e,t,n):exports.getStyle(e,i)}if(i=exports._styleFilter)n=i.filter(t,n,"get");return n},exports.setStyle=function(e,t,n){var i;if(e=exports.g(e),t=d.string.toCamelCase(t),i=exports._styleFilter)n=i.filter(t,n,"set");return i=exports._styleFixer[t],i&&i.set?i.set(e,n,t):e.style[i||t]=n,e},exports.setStyles=function(e,t){e=exports.g(e);for(var n in t)exports.setStyle(e,n,t[n]);return e};var e=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i,n=/^(top|right|bottom|left)$/,i=/^margin/;if(window.getComputedStyle)exports.getComputedStyle=function(n,r,o){if(!o)if(n.ownerDocument.defaultView.opener)o=n.ownerDocument.defaultView.getComputedStyle(n,null);else o=window.getComputedStyle(n,null);var s=o?o.getPropertyValue(r)||o[r]:t;if(o){var a=n.style;if(""===s&&!util.contains(n.ownerDocument,n))s=a[r];if(e.test(s)&&i.test(r)){var l=a.width,c=a.minWidth,u=a.maxWidth;a.minWidth=a.maxWidth=a.width=s,s=o.width,a.width=l,a.minWidth=c,a.maxWidth=u}}return s===t?s:s+""};else if(document.documentElement.currentStyle)exports.getComputedStyle=function(i,r,o){o=o||i.currentStyle;var s=o?o[r]:t,a=i.style;if(null==s&&a&&a[r])s=a[r];if(e.test(s)&&!n.test(r)){var l=a.left,c=i.runtimeStyle,u=c&&c.left;if(u)c.left=i.currentStyle.left;if(a.left="fontSize"===r?"1em":s,s=a.pixelLeft+"px",a.left=l,u)c.left=u}if("auto"===s.toLowerCase()||"width"===r.toLowerCase())s=i.getBoundingClientRect().right-i.getBoundingClientRect().left;return s===t?s:s+""||"auto"};exports.getPosition=function(e){e=exports.g(e);var t,n,i=exports.getDocument(e),r=exports.getStyle,o=(d.browser.isGecko>0&&i.getBoxObjectFor&&"absolute"==r(e,"position")&&(""===e.style.top||""===e.style.left),{left:0,top:0}),s=d.browser.ie&&!d.browser.isStrict?i.body:i.documentElement;if(e==s)return o;if(e.getBoundingClientRect){n=e.getBoundingClientRect(),o.left=Math.floor(n.left)+Math.max(i.documentElement.scrollLeft,i.body.scrollLeft),o.top=Math.floor(n.top)+Math.max(i.documentElement.scrollTop,i.body.scrollTop),o.left-=i.documentElement.clientLeft,o.top-=i.documentElement.clientTop;var a=i.body,l=parseInt(r(a,"borderLeftWidth")),c=parseInt(r(a,"borderTopWidth"));if(d.browser.ie&&!d.browser.isStrict)o.left-=isNaN(l)?2:l,o.top-=isNaN(c)?2:c}else{t=e;do{if(o.left+=t.offsetLeft,o.top+=t.offsetTop,d.browser.isWebkit>0&&"fixed"==r(t,"position")){o.left+=i.body.scrollLeft,o.top+=i.body.scrollTop;break}t=t.offsetParent}while(t&&t!=e);if(d.browser.opera>0||d.browser.isWebkit>0&&"absolute"==r(e,"position"))o.top-=i.body.offsetTop;for(t=e.offsetParent;t&&t!=i.body;){if(o.left-=t.scrollLeft,!d.browser.opera||"TR"!=t.tagName)o.top-=t.scrollTop;t=t.offsetParent}}return o},exports._NAME_ATTRS=function(){var e={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",usemap:"useMap",frameborder:"frameBorder"};if(d.browser.ie<8)e["for"]="htmlFor",e["class"]="className";else e.htmlFor="for",e.className="class";return e}(),exports.setAttr=function(e,t,n){if(e=exports.g(e),"style"==t)e.style.cssText=n;else t=exports._NAME_ATTRS[t]||t,e.setAttribute(t,n);return e},exports.setAttrs=function(e,t){e=exports.g(e);for(var n in t)d.dom.setAttr(e,n,t[n]);return e},exports.create=function(e,t){var n=document.createElement(e),i=t||{};return exports.setAttrs(n,i)};var r=exports.ready=function(){function e(){if(!e.isReady){e.isReady=!0;for(var t=0,n=o.length;n>t;t++)o[t]()}}function t(){try{document.documentElement.doScroll("left")}catch(n){return void setTimeout(t,1)}e()}function n(){if(!r)if(r=!0,"complete"===document.readyState)e.isReady=!0;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",e,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",i),window.attachEvent("onload",e);var n=!1;try{n=null==window.frameElement}catch(o){}if(document.documentElement.doScroll&&n)t()}}var i,r=!1,o=[];if(document.addEventListener)i=function(){document.removeEventListener("DOMContentLoaded",i,!1),e()};else if(document.attachEvent)i=function(){if("complete"===document.readyState)document.detachEvent("onreadystatechange",i),e()};return n(),function(t){e.isReady?t():o.push(t)}}();return r.isReady=!1,exports}(),d.fn=function(){var exports={};return exports.bind=function(e,t){var n=arguments.length>2?[].slice.call(arguments,2):null;return function(){var i=n?n.concat([].slice.call(arguments)):arguments;return e.apply(t,i)}},exports}(),d.event=function(){var exports={};return exports._listeners=exports._listeners||[],exports._eventFilter=exports._eventFilter||{},exports._eventFilter._crossElementBoundary=function(e,t){var n=t.relatedTarget,i=t.currentTarget;if(n!==!1&&i!=n&&(!n||"xul"!=n.prefix&&!d.dom.contains(i,n)))return e.call(i,t);else return void 0},exports._eventFilter.mouseenter=window.attachEvent?null:function(e,t,n){return{type:"mouseover",listener:d.fn.bind(exports._eventFilter._crossElementBoundary,this,n)}},exports._eventFilter.mouseleave=window.attachEvent?null:function(e,t,n){return{type:"mouseout",listener:d.fn.bind(exports._eventFilter._crossElementBoundary,this,n)}},exports.on=function(e,t,n){t=t.replace(/^on/i,""),e=d.dom.g(e);var i,r=function(t){n.call(e,t)},o=exports._listeners,s=exports._eventFilter,a=t;if(t=t.toLowerCase(),s&&s[t])i=s[t](e,t,r),a=i.type,r=i.listener;if(e.addEventListener)e.addEventListener(a,r,!1);else if(e.attachEvent)e.attachEvent("on"+a,r);return o[o.length]=[e,t,n,r,a],e},exports}(),d.lang=function(){var exports={};return exports.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},exports}(),d.object=function(){var exports={};return exports.each=function(e,t){var n,i,r;if("function"==typeof t)for(i in e)if(e.hasOwnProperty(i))if(r=e[i],n=t.call(e,r,i),n===!1)break;return e},exports.extend=function(e,t){for(var n=1,i=arguments.length;i>n;n++)if(t=arguments[n]){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}else;return e},exports}(),d.json=function(){var exports={};return exports.parse=function(e){return new Function("return ("+e+")")()},exports}(),d.url=function(){var exports={};return exports.escapeSymbol=function(e){return String(e).replace(/[#%&+=\/\\\ \\u3000\f\r\n\t]/g,function(e){return"%"+(256+e.charCodeAt()).toString(16).substring(1).toUpperCase()})},exports.jsonToQuery=function(e,t){var n,i=[],r=t||function(e){return exports.escapeSymbol(e)};return d.object.each(e,function(e,t){if(d.lang.isArray(e))for(n=e.length;n--;)i.push(t+"="+r(e[n],t));else i.push(t+"="+r(e,t))}),i.join("&")},exports}(),d.g=d.dom.g,d.on=d.event.on,d.q=d.dom.q,d.hasClass=d.dom.hasClass,d.addClass=d.dom.addClass,d.removeClass=d.dom.removeClass,d.format=d.string.format,d.ready=d.dom.ready,function(){function e(e,t,n,i,o,s){for(var a=0,l=i.length;l>a;a++){var c=i[a];if(c){var u=!1;for(c=c[e];c;){if(c[r]===n){u=i[c.sizset];break}if(1===c.nodeType&&!s)c[r]=n,c.sizset=a;if(c.nodeName.toLowerCase()===t){u=c;break}c=c[e]}i[a]=u}}}function n(e,t,n,i,o,s){for(var a=0,l=i.length;l>a;a++){var c=i[a];if(c){var u=!1;for(c=c[e];c;){if(c[r]===n){u=i[c.sizset];break}if(1===c.nodeType){if(!s)c[r]=n,c.sizset=a;if("string"!=typeof t){if(c===t){u=!0;break}}else if(m.filter(t,[c]).length>0){u=c;break}}c=c[e]}i[a]=u}}}var i=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,r="sizcache"+(Math.random()+"").replace(".",""),o=0,s=Object.prototype.toString,a=!1,l=!0,c=/\\/g,u=/\r\n/g,f=/\W/;[0,0].sort(function(){return l=!1,0});var m=function(e,t,n,r){n=n||[],t=t||document;var o=t;if(1!==t.nodeType&&9!==t.nodeType)return[];if(!e||"string"!=typeof e)return n;var a,l,c,u,f,d,p,v,y=!0,w=m.isXML(t),C=[],x=e;do if(i.exec(""),a=i.exec(x))if(x=a[3],C.push(a[1]),a[2]){u=a[3];break}while(a);if(C.length>1&&g.exec(e))if(2===C.length&&h.relative[C[0]])l=T(C[0]+C[1],t,r);else for(l=h.relative[C[0]]?[t]:m(C.shift(),t);C.length;){if(e=C.shift(),h.relative[e])e+=C.shift();l=T(e,l,r)}else{if(!r&&C.length>1&&9===t.nodeType&&!w&&h.match.ID.test(C[0])&&!h.match.ID.test(C[C.length-1]))f=m.find(C.shift(),t,w),t=f.expr?m.filter(f.expr,f.set)[0]:f.set[0];if(t){if(f=r?{expr:C.pop(),set:b(r)}:m.find(C.pop(),1===C.length&&("~"===C[0]||"+"===C[0])&&t.parentNode?t.parentNode:t,w),l=f.expr?m.filter(f.expr,f.set):f.set,C.length>0)c=b(l);else y=!1;for(;C.length;){if(d=C.pop(),p=d,!h.relative[d])d="";else p=C.pop();if(null==p)p=t;h.relative[d](c,p,w)}}else c=C=[]}if(!c)c=l;if(!c)m.error(d||e);if("[object Array]"===s.call(c)){if(!y)n.push.apply(n,c);else if(t&&1===t.nodeType){for(v=0;null!=c[v];v++)if(c[v]&&(c[v]===!0||1===c[v].nodeType&&m.contains(t,c[v])))n.push(l[v])}else for(v=0;null!=c[v];v++)if(c[v]&&1===c[v].nodeType)n.push(l[v])}else b(c,n);if(u)m(u,o,n,r),m.uniqueSort(n);return n};m.uniqueSort=function(e){if(C)if(a=l,e.sort(C),a)for(var t=1;t<e.length;t++)if(e[t]===e[t-1])e.splice(t--,1);return e},m.matches=function(e,t){return m(e,null,null,t)},m.matchesSelector=function(e,t){return m(t,null,null,[e]).length>0},m.find=function(e,t,n){var i,r,o,s,a,l;if(!e)return[];for(r=0,o=h.order.length;o>r;r++)if(a=h.order[r],s=h.leftMatch[a].exec(e))if(l=s[1],s.splice(1,1),"\\"!==l.substr(l.length-1))if(s[1]=(s[1]||"").replace(c,""),i=h.find[a](s,t,n),null!=i){e=e.replace(h.match[a],"");break}if(!i)i="undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName("*"):[];return{set:i,expr:e}},m.filter=function(e,n,i,r){for(var o,s,a,l,c,u,f,d,p,g=e,v=[],y=n,b=n&&n[0]&&m.isXML(n[0]);e&&n.length;){for(a in h.filter)if(null!=(o=h.leftMatch[a].exec(e))&&o[2]){if(u=h.filter[a],f=o[1],s=!1,o.splice(1,1),"\\"===f.substr(f.length-1))continue;if(y===v)v=[];if(h.preFilter[a])if(o=h.preFilter[a](o,y,i,v,r,b),!o)s=l=!0;else if(o===!0)continue;if(o)for(d=0;null!=(c=y[d]);d++)if(c)if(l=u(c,o,d,y),p=r^l,i&&null!=l)if(p)s=!0;else y[d]=!1;else if(p)v.push(c),s=!0;if(l!==t){if(!i)y=v;if(e=e.replace(h.match[a],""),!s)return[];break}}if(e===g)if(null==s)m.error(e);else break;g=e}return y},m.error=function(e){throw"Syntax error, unrecognized expression: "+e};var p=m.getText=function(e){var t,n,i=e.nodeType,r="";if(i){if(1===i)if("string"==typeof e.textContent)return e.textContent;else if("string"==typeof e.innerText)return e.innerText.replace(u,"");else for(e=e.firstChild;e;e=e.nextSibling)r+=p(e);else if(3===i||4===i)return e.nodeValue}else for(t=0;n=e[t];t++)if(8!==n.nodeType)r+=p(n);return r},h=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n="string"==typeof t,i=n&&!f.test(t),r=n&&!i;if(i)t=t.toLowerCase();for(var o,s=0,a=e.length;a>s;s++)if(o=e[s]){for(;(o=o.previousSibling)&&1!==o.nodeType;);e[s]=r||o&&o.nodeName.toLowerCase()===t?o||!1:o===t}if(r)m.filter(t,e,!0)},">":function(e,t){var n,i="string"==typeof t,r=0,o=e.length;if(i&&!f.test(t)){for(t=t.toLowerCase();o>r;r++)if(n=e[r]){var s=n.parentNode;e[r]=s.nodeName.toLowerCase()===t?s:!1}}else{for(;o>r;r++)if(n=e[r])e[r]=i?n.parentNode:n.parentNode===t;if(i)m.filter(t,e,!0)}},"":function(t,i,r){var s,a=o++,l=n;if("string"==typeof i&&!f.test(i))i=i.toLowerCase(),s=i,l=e;l("parentNode",i,a,t,s,r)},"~":function(t,i,r){var s,a=o++,l=n;if("string"==typeof i&&!f.test(i))i=i.toLowerCase(),s=i,l=e;l("previousSibling",i,a,t,s,r)}},find:{ID:function(e,t,n){if("undefined"!=typeof t.getElementById&&!n){var i=t.getElementById(e[1]);return i&&i.parentNode?[i]:[]}},NAME:function(e,t){if("undefined"!=typeof t.getElementsByName){for(var n=[],i=t.getElementsByName(e[1]),r=0,o=i.length;o>r;r++)if(i[r].getAttribute("name")===e[1])n.push(i[r]);return 0===n.length?null:n}},TAG:function(e,t){if("undefined"!=typeof t.getElementsByTagName)return t.getElementsByTagName(e[1]);else return void 0}},preFilter:{CLASS:function(e,t,n,i,r,o){if(e=" "+e[1].replace(c,"")+" ",o)return e;for(var s,a=0;null!=(s=t[a]);a++)if(s)if(r^(s.className&&(" "+s.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)){if(!n)i.push(s)}else if(n)t[a]=!1;return!1},ID:function(e){return e[1].replace(c,"")},TAG:function(e,t){return e[1].replace(c,"").toLowerCase()},CHILD:function(e){if("nth"===e[1]){if(!e[2])m.error(e[0]);e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===e[2]&&"2n"||"odd"===e[2]&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else if(e[2])m.error(e[0]);return e[0]=o++,e},ATTR:function(e,t,n,i,r,o){var s=e[1]=e[1].replace(c,"");if(!o&&h.attrMap[s])e[1]=h.attrMap[s];if(e[4]=(e[4]||e[5]||"").replace(c,""),"~="===e[2])e[4]=" "+e[4]+" ";return e},PSEUDO:function(e,t,n,r,o){if("not"===e[1])if((i.exec(e[3])||"").length>1||/^\w/.test(e[3]))e[3]=m(e[3],null,null,t);else{var s=m.filter(e[3],t,n,!0^o);if(!n)r.push.apply(r,s);return!1}else if(h.match.POS.test(e[0])||h.match.CHILD.test(e[0]))return!0;return e},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&"hidden"!==e.type},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){if(e.parentNode)e.parentNode.selectedIndex;return e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!m(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;return"input"===e.nodeName.toLowerCase()&&"text"===n&&(t===n||null===t)},radio:function(e){return"input"===e.nodeName.toLowerCase()&&"radio"===e.type},checkbox:function(e){return"input"===e.nodeName.toLowerCase()&&"checkbox"===e.type},file:function(e){return"input"===e.nodeName.toLowerCase()&&"file"===e.type},password:function(e){return"input"===e.nodeName.toLowerCase()&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&"submit"===e.type},image:function(e){return"input"===e.nodeName.toLowerCase()&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return 0===t},last:function(e,t,n,i){return t===i.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,i){var r=t[1],o=h.filters[r];if(o)return o(e,n,t,i);else if("contains"===r)return(e.textContent||e.innerText||p([e])||"").indexOf(t[3])>=0;else if("not"===r){for(var s=t[3],a=0,l=s.length;l>a;a++)if(s[a]===e)return!1;return!0}else m.error(r)},CHILD:function(e,t){var n,i,o,s,a,l,c=t[1],u=e;switch(c){case"only":case"first":for(;u=u.previousSibling;)if(1===u.nodeType)return!1;if("first"===c)return!0;u=e;case"last":for(;u=u.nextSibling;)if(1===u.nodeType)return!1;return!0;case"nth":if(n=t[2],i=t[3],1===n&&0===i)return!0;if(o=t[0],s=e.parentNode,s&&(s[r]!==o||!e.nodeIndex)){for(a=0,u=s.firstChild;u;u=u.nextSibling)if(1===u.nodeType)u.nodeIndex=++a;s[r]=o}if(l=e.nodeIndex-i,0===n)return 0===l;else return l%n===0&&l/n>=0}},ID:function(e,t){return 1===e.nodeType&&e.getAttribute("id")===t},TAG:function(e,t){return"*"===t&&1===e.nodeType||!!e.nodeName&&e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],i=m.attr?m.attr(e,n):h.attrHandle[n]?h.attrHandle[n](e):null!=e[n]?e[n]:e.getAttribute(n),r=i+"",o=t[2],s=t[4];return null==i?"!="===o:!o&&m.attr?null!=i:"="===o?r===s:"*="===o?r.indexOf(s)>=0:"~="===o?(" "+r+" ").indexOf(s)>=0:!s?r&&i!==!1:"!="===o?r!==s:"^="===o?0===r.indexOf(s):"$="===o?r.substr(r.length-s.length)===s:"|="===o?r===s||r.substr(0,s.length+1)===s+"-":!1},POS:function(e,t,n,i){var r=t[2],o=h.setFilters[r];if(o)return o(e,n,t,i);else return void 0}}},g=h.match.POS,v=function(e,t){return"\\"+(t-0+1)};for(var y in h.match)h.match[y]=new RegExp(h.match[y].source+/(?![^\[]*\])(?![^\(]*\))/.source),h.leftMatch[y]=new RegExp(/(^(?:.|\r|\n)*?)/.source+h.match[y].source.replace(/\\(\d+)/g,v));var b=function(e,t){if(e=Array.prototype.slice.call(e,0),t)return t.push.apply(t,e),t;else return e};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(w){b=function(e,t){var n=0,i=t||[];if("[object Array]"===s.call(e))Array.prototype.push.apply(i,e);else if("number"==typeof e.length)for(var r=e.length;r>n;n++)i.push(e[n]);else for(;e[n];n++)i.push(e[n]);return i}}var C,x;if(document.documentElement.compareDocumentPosition)C=function(e,t){if(e===t)return a=!0,0;if(!e.compareDocumentPosition||!t.compareDocumentPosition)return e.compareDocumentPosition?-1:1;else return 4&e.compareDocumentPosition(t)?-1:1};else C=function(e,t){if(e===t)return a=!0,0;else if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,i,r=[],o=[],s=e.parentNode,l=t.parentNode,c=s;if(s===l)return x(e,t);else if(!s)return-1;else if(!l)return 1;for(;c;)r.unshift(c),c=c.parentNode;for(c=l;c;)o.unshift(c),c=c.parentNode;n=r.length,i=o.length;for(var u=0;n>u&&i>u;u++)if(r[u]!==o[u])return x(r[u],o[u]);return u===n?x(e,o[u],-1):x(r[u],t,1)},x=function(e,t,n){if(e===t)return n;for(var i=e.nextSibling;i;){if(i===t)return-1;i=i.nextSibling}return 1};if(function(){var e=document.createElement("div"),n="script"+(new Date).getTime(),i=document.documentElement;if(e.innerHTML="<a name='"+n+"'/>",i.insertBefore(e,i.firstChild),document.getElementById(n))h.find.ID=function(e,n,i){if("undefined"!=typeof n.getElementById&&!i){var r=n.getElementById(e[1]);return r?r.id===e[1]||"undefined"!=typeof r.getAttributeNode&&r.getAttributeNode("id").nodeValue===e[1]?[r]:t:[]}},h.filter.ID=function(e,t){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return 1===e.nodeType&&n&&n.nodeValue===t};i.removeChild(e),i=e=null}(),function(){var e=document.createElement("div");if(e.appendChild(document.createComment("")),e.getElementsByTagName("*").length>0)h.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if("*"===e[1]){for(var i=[],r=0;n[r];r++)if(1===n[r].nodeType)i.push(n[r]);n=i}return n};if(e.innerHTML="<a href='#'></a>",e.firstChild&&"undefined"!=typeof e.firstChild.getAttribute&&"#"!==e.firstChild.getAttribute("href"))h.attrHandle.href=function(e){return e.getAttribute("href",2)};e=null}(),document.querySelectorAll)!function(){var e=m,t=document.createElement("div"),n="__sizzle__";if(t.innerHTML="<p class='TEST'></p>",!t.querySelectorAll||0!==t.querySelectorAll(".TEST").length){m=function(t,i,r,o){if(i=i||document,!o&&!m.isXML(i)){var s=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(s&&(1===i.nodeType||9===i.nodeType))if(s[1])return b(i.getElementsByTagName(t),r);else if(s[2]&&h.find.CLASS&&i.getElementsByClassName)return b(i.getElementsByClassName(s[2]),r);if(9===i.nodeType){if("body"===t&&i.body)return b([i.body],r);else if(s&&s[3]){var a=i.getElementById(s[3]);if(a&&a.parentNode){if(a.id===s[3])return b([a],r)}else return b([],r)}try{return b(i.querySelectorAll(t),r)}catch(l){}}else if(1===i.nodeType&&"object"!==i.nodeName.toLowerCase()){var c=i,u=i.getAttribute("id"),f=u||n,d=i.parentNode,p=/^\s*[+~]/.test(t);if(!u)i.setAttribute("id",f);else f=f.replace(/'/g,"\\$&");if(p&&d)i=i.parentNode;try{if(!p||d)return b(i.querySelectorAll("[id='"+f+"'] "+t),r)}catch(g){}finally{if(!u)c.removeAttribute("id")}}}return e(t,i,r,o)};for(var i in e)m[i]=e[i];t=null}}();if(function(){var e=document.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){var n=!t.call(document.createElement("div"),"div"),i=!1;try{t.call(document.documentElement,"[test!='']:sizzle")}catch(r){i=!0}m.matchesSelector=function(e,r){if(r=r.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!m.isXML(e))try{if(i||!h.match.PSEUDO.test(r)&&!/!=/.test(r)){var o=t.call(e,r);if(o||!n||e.document&&11!==e.document.nodeType)return o}}catch(s){}return m(r,null,null,[e]).length>0}}}(),function(){var e=document.createElement("div");if(e.innerHTML="<div class='test e'></div><div class='test'></div>",e.getElementsByClassName&&0!==e.getElementsByClassName("e").length)if(e.lastChild.className="e",1!==e.getElementsByClassName("e").length)h.order.splice(1,0,"CLASS"),h.find.CLASS=function(e,t,n){if("undefined"!=typeof t.getElementsByClassName&&!n)return t.getElementsByClassName(e[1]);else return void 0},e=null}(),document.documentElement.contains)m.contains=function(e,t){return e!==t&&(e.contains?e.contains(t):!0)};else if(document.documentElement.compareDocumentPosition)m.contains=function(e,t){return!!(16&e.compareDocumentPosition(t))};else m.contains=function(){return!1};m.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?"HTML"!==t.nodeName:!1};var T=function(e,t,n){for(var i,r=[],o="",s=t.nodeType?[t]:t;i=h.match.PSEUDO.exec(e);)o+=i[0],e=e.replace(h.match.PSEUDO,"");e=h.relative[e]?e+"*":e;for(var a=0,l=s.length;l>a;a++)m(e,s[a],r,n);return m.filter(o,r)};d.dom.query=m}();var m=m||{};m.se=m.se||{},m.se.tip=m.se.tip||{},m.comm=m.comm||{},m.comm.tipZIndex=300,m.comm.tips=[],m.se.tip=function(e){this.init=function(){if(this.op={target:e.target||{},mode:e.mode||"over",title:e.title||null,content:e.content||null,uncontrolled:e.uncontrolled?!0:!1,arrow:{has:1,offset:10},close:e.close||0,align:e.align||"left",offset:{x:10,y:20}},e.arrow)this.op.arrow.has=0==e.arrow.has?0:1,this.op.arrow.offset=e.arrow.offset||10;if(e.offset)this.op.offset.x=e.offset.x?e.offset.x:10,this.op.offset.y=e.offset.y?e.offset.y:20;this.ext=e.ext||{},this.dom=d.dom.create("div",{"class":"c-tip-con"}),this.visible=!1,this.rendered=!1,this.bindEvent()},this.render=function(){switch(this.op.align){case"left":if(this.op.arrow.has){var e=d.dom.create("div",{"class":"c-tip-arrow"});d.dom.setStyles(e,{left:this.op.arrow.offset}),e.innerHTML+="<em></em><ins></ins>",this.dom.appendChild(e),this.arrow=e}}if(this.op.close)this.enableCloseIcon();if(this.op.title)this.setTitle(this.op.title);if(this.op.content)this.setContent(this.op.content);d.g("c-tips-container").appendChild(this.dom)},this.bindEvent=function(){if(this.delay={overIcon:null,outIcon:null,overDom:null,outDom:null},"over"==this.op.mode){var e=this;d.event.on(e.op.target,"mouseenter",function(t){window.clearTimeout(e.delay.outIcon),window.clearTimeout(e.delay.outDom),e.delay.overIcon=setTimeout(function(){e.show()},200)}),d.event.on(e.dom,"mouseenter",function(t){window.clearTimeout(e.delay.outIcon),window.clearTimeout(e.delay.outDom),e.delay.overDom=setTimeout(function(){e.show()},200)}),d.event.on(e.op.target,"mouseleave",function(t){window.clearTimeout(e.delay.overIcon),window.clearTimeout(e.delay.overDom),e.delay.outIcon=setTimeout(function(){e.hide()},200)}),d.event.on(e.dom,"mouseleave",function(t){window.clearTimeout(e.delay.overIcon),window.clearTimeout(e.delay.overDom),e.delay.outIcon=setTimeout(function(){e.hide()},200)})}else if("none"==this.op.mode){var e=this;e.show()}},this.enableCloseIcon=function(){var e=this,t=d.dom.create("div",{"class":"c-tip-close"});t.innerHTML+='<i class="c-icon c-icon-close"></i>',this.dom.appendChild(t),d.event.on(t,"click",function(t){e.hide()}),this.close=t},this.setTitle=function(e){if(e.nodeType){var t=d.dom.create("h3",{"class":"c-tip-title"});t.appendChild(e),this.dom.appendChild(t)}else{var t=d.dom.create("h3",{"class":"c-tip-title"});t.innerHTML+=e,this.dom.appendChild(t)}this.title=t},this.setContent=function(e){var t=d.dom.create("div");t.innerHTML+=e,this.dom.appendChild(t),
this.content=t},this.enable=function(){},this.disable=function(){},this.destroy=function(){},this.show=function(){if(!this.visible){if(this.onShow(),!this.rendered)m.comm.tips.push(this),this.render(),this.rendered=!0;switch(this.op.align){case"left":var e=d.dom.getPosition(this.op.target);d.dom.setStyles(this.dom,{top:e.top+this.op.offset.y+"px",left:e.left-this.op.offset.x+"px"})}d.dom.setStyle(this.dom,"z-index",m.comm.tipZIndex),m.comm.tipZIndex++,d.dom.setStyle(this.dom,"display","block"),this.visible=!0}},this.hide=function(){if(this.visible)d.dom.setStyle(this.dom,"display","none"),this.onHide(),this.visible=!1},this.onShow=e.onShow||function(){},this.onHide=e.onHide||function(){},this.getTarget=function(){return this.op.target},this.getDom=function(){return this.dom},this.init()};var p="\u5df2\u7ecf\u901a\u8fc7",h="\u767e\u5ea6\u4fe1\u8a89\u661f\u7ea7",g="\u767e\u5ea6\u4fe1\u8a89\u8ba4\u8bc1",v="\u5177\u6709",y="\u4fe1\u8a89\u6210\u957f\u503c: ",b=374,w={a:'<span#{billing}><a target="_blank"  href="#{url}">#{text}</a></span>',list:'<div class="c-tip-cer"><ul>#{credit}#{medical}#{dfa}#{airline}#{identity}#{personal}</ul></div>',medical:"<li><span>#{text}</span></li>",identity:'<li class="c-tip-item-i"><i class="c-icon c-icon-v-noborder c-gap-icon-right-small c-tip-item-icon"></i>'+p+"#{text}#{a}</li>",identityImg:'<li class="c-tip-item-i"><img class="c-customicon c-gap-icon-right-small c-tip-item-icon" src="#{img}">'+p+"#{text}#{a}</li>",credit:'<li class="EC-credit"></li>',personal:'<li class="c-tip-item-i"><i class="c-icon c-icon-person-noborder c-gap-icon-right-small c-tip-item-icon"></i>'+p+"#{text}#{a}</li>",personalImg:'<li class="c-tip-item-i"><img height=16 width=16 class="c-customicon c-gap-icon-right-small c-tip-item-icon" src="#{img}">'+p+"#{text}#{a}</li>",airline:"<li>"+v+"#{a}\u7684#{text}</li>",dfa:"<li>#{text}</li>",starlevel:'<li class="c-tip-item-i">'+h+'<i class="c-icon c-icon-star-gray"><i style="width: #{credit}%;" class="c-icon c-icon-star"></i></i></li>',process:'<li class="c-tip-item-i">'+y+'<i class="EC_process"></i></li>'},C={rightContainerDomId:"ec_im_container",rightContainerDomClass:"ec_im_container",offset:{identity:{x:10,y:25}}},x="",T=function(){var e=[],t=function(e){return encodeURIComponent(e)};return function(n){var i=e.push(new Image)-1;e[i].onload=e[i].onerror=function(){e[i]=e[i].onload=e[i].onerror=null,delete e[i]};var r=x+"?"+d.url.jsonToQuery(n,t);e[i].src=r}}();e.__nsTip__={init:u}}(this);