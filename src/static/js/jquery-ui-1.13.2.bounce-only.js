/*! jQuery UI - v1.13.2 - 2022-07-20
* http://jqueryui.com
* Includes: jquery-patch.js, effect.js, effects/effect-bounce.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(m){"use strict";m.ui=m.ui||{};var e,n;m.ui.version="1.13.2";m.expr.pseudos||(m.expr.pseudos=m.expr[":"]),m.uniqueSort||(m.uniqueSort=m.unique),m.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},m.escapeSelector=function(t){return(t+"").replace(e,n)}),m.fn.even&&m.fn.odd||m.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}});var a=m,r={},o=r.toString,f=/^([\-+])=\s*(\d+\.?\d*)/,t=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),t[4]?(parseInt(t[4],16)/255).toFixed(2):1]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),t[4]?(parseInt(t[4]+t[4],16)/255).toFixed(2):1]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],u=a.Color=function(t,e,n,r){return new a.Color.fn.parse(t,e,n,r)},l={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},s=u.support={},i=a("<p>")[0],p=a.each;function h(t){return null==t?t+"":"object"==typeof t?r[o.call(t)]||"object":typeof t}function g(t,e,n){var r=d[e.type]||{};return null==t?n||!e.def?null:e.def:(t=r.floor?~~t:parseFloat(t),isNaN(t)?e.def:r.mod?(t+r.mod)%r.mod:Math.min(r.max,Math.max(0,t)))}function c(r){var o=u(),i=o._rgba=[];return r=r.toLowerCase(),p(t,function(t,e){var n=e.re.exec(r),n=n&&e.parse(n),e=e.space||"rgba";if(n)return n=o[e](n),o[l[e].cache]=n[l[e].cache],i=o._rgba=n._rgba,!1}),i.length?("0,0,0,0"===i.join()&&a.extend(i,B.transparent),o):B[r]}function b(t,e,n){return 6*(n=(n+1)%1)<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}i.style.cssText="background-color:rgba(1,1,1,.5)",s.rgba=-1<i.style.backgroundColor.indexOf("rgba"),p(l,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){r["[object "+e+"]"]=e.toLowerCase()}),(u.fn=a.extend(u.prototype,{parse:function(o,t,e,n){if(void 0===o)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=a(o).css(t),t=void 0);var i=this,r=h(o),s=this._rgba=[];return void 0!==t&&(o=[o,t,e,n],r="array"),"string"===r?this.parse(c(o)||B._default):"array"===r?(p(l.rgba.props,function(t,e){s[e.idx]=g(o[e.idx],e)}),this):"object"===r?(p(l,o instanceof u?function(t,e){o[e.cache]&&(i[e.cache]=o[e.cache].slice())}:function(t,n){var r=n.cache;p(n.props,function(t,e){if(!i[r]&&n.to){if("alpha"===t||null==o[t])return;i[r]=n.to(i._rgba)}i[r][e.idx]=g(o[t],e,!0)}),i[r]&&a.inArray(null,i[r].slice(0,3))<0&&(null==i[r][3]&&(i[r][3]=1),n.from&&(i._rgba=n.from(i[r])))}),this):void 0},is:function(t){var o=u(t),i=!0,s=this;return p(l,function(t,e){var n,r=o[e.cache];return r&&(n=s[e.cache]||e.to&&e.to(s._rgba)||[],p(e.props,function(t,e){if(null!=r[e.idx])return i=r[e.idx]===n[e.idx]})),i}),i},_space:function(){var n=[],r=this;return p(l,function(t,e){r[e.cache]&&n.push(t)}),n.pop()},transition:function(t,s){var e=(f=u(t))._space(),n=l[e],t=0===this.alpha()?u("transparent"):this,a=t[n.cache]||n.to(t._rgba),c=a.slice(),f=f[n.cache];return p(n.props,function(t,e){var n=e.idx,r=a[n],o=f[n],i=d[e.type]||{};null!==o&&(null===r?c[n]=o:(i.mod&&(o-r>i.mod/2?r+=i.mod:r-o>i.mod/2&&(r-=i.mod)),c[n]=g((o-r)*s+r,e)))}),this[e](c)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),n=e.pop(),r=u(t)._rgba;return u(a.map(e,function(t,e){return(1-n)*r[e]+n*t}))},toRgbaString:function(){var t="rgba(",e=a.map(this._rgba,function(t,e){return null!=t?t:2<e?1:0});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=a.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),t=e&&e<3?Math.round(100*t)+"%":t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),n=e.pop();return t&&e.push(~~(255*n)),"#"+a.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}})).parse.prototype=u.fn,l.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/255,n=t[1]/255,r=t[2]/255,o=t[3],i=Math.max(e,n,r),s=Math.min(e,n,r),a=i-s,c=i+s,t=.5*c,n=s===i?0:e===i?60*(n-r)/a+360:n===i?60*(r-e)/a+120:60*(e-n)/a+240,c=0==a?0:t<=.5?a/c:a/(2-c);return[Math.round(n)%360,c,t,null==o?1:o]},l.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],r=t[2],t=t[3],n=r<=.5?r*(1+n):r+n-r*n,r=2*r-n;return[Math.round(255*b(r,n,e+1/3)),Math.round(255*b(r,n,e)),Math.round(255*b(r,n,e-1/3)),t]},p(l,function(c,t){var e=t.props,i=t.cache,s=t.to,a=t.from;u.fn[c]=function(t){if(s&&!this[i]&&(this[i]=s(this._rgba)),void 0===t)return this[i].slice();var n=h(t),r="array"===n||"object"===n?t:arguments,o=this[i].slice();return p(e,function(t,e){t=r["object"===n?t:e.idx];null==t&&(t=o[e.idx]),o[e.idx]=g(t,e)}),a?((t=u(a(o)))[i]=o,t):u(o)},p(e,function(s,a){u.fn[s]||(u.fn[s]=function(t){var e,n=h(t),r="alpha"===s?this._hsla?"hsla":"rgba":c,o=this[r](),i=o[a.idx];return"undefined"===n?i:("function"===n&&(n=h(t=t.call(this,i))),null==t&&a.empty?this:("string"===n&&(e=f.exec(t))&&(t=i+parseFloat(e[2])*("+"===e[1]?1:-1)),o[a.idx]=t,this[r](o)))})})}),(u.hook=function(t){t=t.split(" ");p(t,function(t,i){a.cssHooks[i]={set:function(t,e){var n,r,o="";if("transparent"!==e&&("string"!==h(e)||(n=c(e)))){if(e=u(n||e),!s.rgba&&1!==e._rgba[3]){for(r="backgroundColor"===i?t.parentNode:t;(""===o||"transparent"===o)&&r&&r.style;)try{o=a.css(r,"backgroundColor"),r=r.parentNode}catch(t){}e=e.blend(o&&"transparent"!==o?o:"_default")}e=e.toRgbaString()}try{t.style[i]=e}catch(t){}}},a.fx.step[i]=function(t){t.colorInit||(t.start=u(t.elem,i),t.end=u(t.end),t.colorInit=!0),a.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})})("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),a.cssHooks.borderColor={expand:function(n){var r={};return p(["Top","Right","Bottom","Left"],function(t,e){r["border"+e+"Color"]=n}),r}};var y,v,x,C,w,S,k,_,M,j,B=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},I="ui-effects-",H="ui-effects-style",q="ui-effects-animated";function T(t){var e,n,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)"string"==typeof r[e=r[n]]&&(o[e.replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]=r[e]);else for(e in r)"string"==typeof r[e]&&(o[e]=r[e]);return o}function W(t,e,n,r){return t={effect:t=m.isPlainObject(t)?(e=t).effect:t},"function"==typeof(e=null==e?{}:e)&&(r=e,n=null,e={}),"number"!=typeof e&&!m.fx.speeds[e]||(r=n,n=e,e={}),"function"==typeof n&&(r=n,n=null),e&&m.extend(t,e),n=n||e.duration,t.duration=m.fx.off?0:"number"==typeof n?n:n in m.fx.speeds?m.fx.speeds[n]:m.fx.speeds._default,t.complete=r||e.complete,t}function F(t){return!t||"number"==typeof t||m.fx.speeds[t]||("string"==typeof t&&!m.effects.effect[t]||("function"==typeof t||"object"==typeof t&&!t.effect))}function R(t,e){var n=e.outerWidth(),e=e.outerHeight(),t=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,n,e,0];return{top:parseFloat(t[1])||0,right:"auto"===t[2]?n:parseFloat(t[2]),bottom:"auto"===t[3]?e:parseFloat(t[3]),left:parseFloat(t[4])||0}}m.effects={effect:{}},C=["add","remove","toggle"],w={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},m.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){m.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(a.style(t.elem,e,t.end),t.setAttr=!0)}}),m.fn.addBack||(m.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),m.effects.animateClass=function(o,t,e,n){var i=m.speed(t,e,n);return this.queue(function(){var n=m(this),t=n.attr("class")||"",e=(e=i.children?n.find("*").addBack():n).map(function(){return{el:m(this),start:T(this)}}),r=function(){m.each(C,function(t,e){o[e]&&n[e+"Class"](o[e])})};r(),e=e.map(function(){return this.end=T(this.el[0]),this.diff=function(t,e){var n,r,o={};for(n in e)r=e[n],t[n]!==r&&(w[n]||!m.fx.step[n]&&isNaN(parseFloat(r))||(o[n]=r));return o}(this.start,this.end),this}),n.attr("class",t),e=e.map(function(){var t=this,e=m.Deferred(),n=m.extend({},i,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,n),e.promise()}),m.when.apply(m,e.get()).done(function(){r(),m.each(arguments,function(){var e=this.el;m.each(this.diff,function(t){e.css(t,"")})}),i.complete.call(n[0])})})},m.fn.extend({addClass:(x=m.fn.addClass,function(t,e,n,r){return e?m.effects.animateClass.call(this,{add:t},e,n,r):x.apply(this,arguments)}),removeClass:(v=m.fn.removeClass,function(t,e,n,r){return 1<arguments.length?m.effects.animateClass.call(this,{remove:t},e,n,r):v.apply(this,arguments)}),toggleClass:(y=m.fn.toggleClass,function(t,e,n,r,o){return"boolean"==typeof e||void 0===e?n?m.effects.animateClass.call(this,e?{add:t}:{remove:t},n,r,o):y.apply(this,arguments):m.effects.animateClass.call(this,{toggle:t},e,n,r)}),switchClass:function(t,e,n,r,o){return m.effects.animateClass.call(this,{add:e,remove:t},n,r,o)}}),m.expr&&m.expr.pseudos&&m.expr.pseudos.animated&&(m.expr.pseudos.animated=(S=m.expr.pseudos.animated,function(t){return!!m(t).data(q)||S(t)})),!1!==m.uiBackCompat&&m.extend(m.effects,{save:function(t,e){for(var n=0,r=e.length;n<r;n++)null!==e[n]&&t.data(I+e[n],t[0].style[e[n]])},restore:function(t,e){for(var n,r=0,o=e.length;r<o;r++)null!==e[r]&&(n=t.data(I+e[r]),t.css(e[r],n))},setMode:function(t,e){return e="toggle"===e?t.is(":hidden")?"show":"hide":e},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var r={width:n.outerWidth(!0),height:n.outerHeight(!0),float:n.css("float")},t=m("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:n.width(),height:n.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return n.wrap(t),n[0]!==o&&!m.contains(n[0],o)||m(o).trigger("focus"),t=n.parent(),"static"===n.css("position")?(t.css({position:"relative"}),n.css({position:"relative"})):(m.extend(r,{position:n.css("position"),zIndex:n.css("z-index")}),m.each(["top","left","bottom","right"],function(t,e){r[e]=n.css(e),isNaN(parseInt(r[e],10))&&(r[e]="auto")}),n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),n.css(e),t.css(r).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!m.contains(t[0],e)||m(e).trigger("focus")),t}}),m.extend(m.effects,{version:"1.13.2",define:function(t,e,n){return n||(n=e,e="effect"),m.effects.effect[t]=n,m.effects.effect[t].mode=e,n},scaledDimensions:function(t,e,n){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var r="horizontal"!==n?(e||100)/100:1,e="vertical"!==n?(e||100)/100:1;return{height:t.height()*e,width:t.width()*r,outerHeight:t.outerHeight()*e,outerWidth:t.outerWidth()*r}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,n){var r=t.queue();1<e&&r.splice.apply(r,[1,0].concat(r.splice(e,n))),t.dequeue()},saveStyle:function(t){t.data(H,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(H)||"",t.removeData(H)},mode:function(t,e){t=t.is(":hidden");return"toggle"===e&&(e=t?"show":"hide"),e=(t?"hide"===e:"show"===e)?"none":e},getBaseline:function(t,e){var n,r;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=t[1]/e.width}return{x:r,y:n}},createPlaceholder:function(t){var e,n=t.css("position"),r=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",e=m("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(I+"placeholder",e)),t.css({position:n,left:r.left,top:r.top}),e},removePlaceholder:function(t){var e=I+"placeholder",n=t.data(e);n&&(n.remove(),t.removeData(e))},cleanUp:function(t){m.effects.restoreStyle(t),m.effects.removePlaceholder(t)},setTransition:function(r,t,o,i){return i=i||{},m.each(t,function(t,e){var n=r.cssUnit(e);0<n[0]&&(i[e]=n[0]*o+n[1])}),i}}),m.fn.extend({effect:function(){function t(t){var e=m(this),n=m.effects.mode(e,a)||i;e.data(q,!0),c.push(n),i&&("show"===n||n===i&&"hide"===n)&&e.show(),i&&"none"===n||m.effects.saveStyle(e),"function"==typeof t&&t()}var r=W.apply(this,arguments),o=m.effects.effect[r.effect],i=o.mode,e=r.queue,n=e||"fx",s=r.complete,a=r.mode,c=[];return m.fx.off||!o?a?this[a](r.duration,s):this.each(function(){s&&s.call(this)}):!1===e?this.each(t).each(f):this.queue(n,t).queue(n,f);function f(t){var e=m(this);function n(){"function"==typeof s&&s.call(e[0]),"function"==typeof t&&t()}r.mode=c.shift(),!1===m.uiBackCompat||i?"none"===r.mode?(e[a](),n()):o.call(e[0],r,function(){e.removeData(q),m.effects.cleanUp(e),"hide"===r.mode&&e.hide(),n()}):(e.is(":hidden")?"hide"===a:"show"===a)?(e[a](),n()):o.call(e[0],r,n)}},show:(M=m.fn.show,function(t){if(F(t))return M.apply(this,arguments);t=W.apply(this,arguments);return t.mode="show",this.effect.call(this,t)}),hide:(_=m.fn.hide,function(t){if(F(t))return _.apply(this,arguments);t=W.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)}),toggle:(k=m.fn.toggle,function(t){if(F(t)||"boolean"==typeof t)return k.apply(this,arguments);t=W.apply(this,arguments);return t.mode="toggle",this.effect.call(this,t)}),cssUnit:function(t){var n=this.css(t),r=[];return m.each(["em","px","%","pt"],function(t,e){0<n.indexOf(e)&&(r=[parseFloat(n),e])}),r},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):R(this.css("clip"),this)},transfer:function(t,e){var n=m(this),r=m(t.to),o="fixed"===r.css("position"),i=m("body"),s=o?i.scrollTop():0,a=o?i.scrollLeft():0,i=r.offset(),i={top:i.top-s,left:i.left-a,height:r.innerHeight(),width:r.innerWidth()},r=n.offset(),c=m("<div class='ui-effects-transfer'></div>");c.appendTo("body").addClass(t.className).css({top:r.top-s,left:r.left-a,height:n.innerHeight(),width:n.innerWidth(),position:o?"fixed":"absolute"}).animate(i,t.duration,t.easing,function(){c.remove(),"function"==typeof e&&e()})}}),m.fx.step.clip=function(t){t.clipInit||(t.start=m(t.elem).cssClip(),"string"==typeof t.end&&(t.end=R(t.end,t.elem)),t.clipInit=!0),m(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},j={},m.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){j[t]=function(t){return Math.pow(t,e+2)}}),m.extend(j,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),m.each(j,function(t,e){m.easing["easeIn"+t]=e,m.easing["easeOut"+t]=function(t){return 1-e(1-t)},m.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}});m.effects,m.effects.define("bounce",function(t,e){var n,r,o=m(this),i=t.mode,s="hide"===i,a="show"===i,c=t.direction||"up",f=t.distance,u=t.times||5,i=2*u+(a||s?1:0),l=t.duration/i,d=t.easing,p="up"===c||"down"===c?"top":"left",h="up"===c||"left"===c,g=0,t=o.queue().length;for(m.effects.createPlaceholder(o),c=o.css(p),f=f||o["top"==p?"outerHeight":"outerWidth"]()/3,a&&((r={opacity:1})[p]=c,o.css("opacity",0).css(p,h?2*-f:2*f).animate(r,l,d)),s&&(f/=Math.pow(2,u-1)),(r={})[p]=c;g<u;g++)(n={})[p]=(h?"-=":"+=")+f,o.animate(n,l,d).animate(r,l,d),f=s?2*f:f/2;s&&((n={opacity:0})[p]=(h?"-=":"+=")+f,o.animate(n,l,d)),o.queue(e),m.effects.unshift(o,t,1+i)})});