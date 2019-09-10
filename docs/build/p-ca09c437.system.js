var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{f(n.next(e))}catch(e){i(e)}}function o(e){try{f(n["throw"](e))}catch(e){i(e)}}function f(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,o)}f((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return f([e,t])}}function f(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="calcite-app";var a=0;var i=false;var s;var o;var f;var l=false;var $=false;var u=false;var c=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var g=function(){return!!d.documentElement.attachShadow}();var m=function(){var e=false;try{d.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(e){}return e}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",function(e,t){return y.set(t.$lazyInstance$=e,t)});var R=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return y.set(e,t)}};var S=function(e,t){return t in e};var x=function(e){return console.error(e)};var _=new Map;var N=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=_.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{_.set(i,e)}return e[a]},x)};var E=new Map;var L=function(){return v.__stencil_cssshim}();var T=[];var k=[];var j=[];var C=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){I(A)}else{h.raf(A)}}}};var O=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){x(e)}}e.length=0};var P=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){x(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var A=function(){a++;O(T);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;P(k,e);P(j,e);if(k.length>0){j.push.apply(j,k);k.length=0}if(i=T.length+k.length+j.length>0){h.raf(A)}else{a=0}};var I=function(e){return Promise.resolve().then(e)};var z=C(k,true);var U={};var B="http://www.w3.org/2000/svg";var M=function(e){return e!=null};var q=function(e){return e.toLowerCase()};var H=function(e){e=typeof e;return e==="object"||e==="function"};var V=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var W=e("a",function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-dac3e2f0.system.js")}return Promise.resolve()});var D=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,a,i,s;return __generator(this,function(o){switch(o.label){case 0:e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find(function(e){return r.test(e.src)||e.getAttribute("data-namespace")===n});i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign({},i,{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));F(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-bcae8885.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign({},i,{resourcesUrl:s.href})]}})})});var F=function(e){var t=V(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(n){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise(function(e){s.onload=function(){e(v[t].m);s.remove()}});r.set(a,i);d.head.appendChild(s)}return i}}};var G=function(e,t){if(e!=null&&!H(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var Q="hydrated";var J="http://www.w3.org/1999/xlink";var K=new WeakMap;var X=function(e,t,r){var n=E.get(e);if(p&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}E.set(e,n)};var Y=function(e,t,r,n){var a=ee(t.$tagName$);var i=E.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=K.get(e);var o=void 0;if(!s){K.set(e,s=new Set)}if(!s.has(a)){{if(L){o=L.createHostStyle(n,a,i,!!(t.$flags$&10));var f=o["s-sc"];if(f){a=f;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var Z=function(e,t,r){var n=Y(g&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var ee=function(e,t){return"sc-"+e};var te=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var f;var l=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!H(a)){a=String(a)}if(i&&s){l[l.length-1].$text$+=a}else{l.push(i?{$flags$:0,$text$:a}:a)}s=i}}};$(r);if(t){{o=t.key||undefined}{f=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,l,ae)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:t};{c.$key$=o}{c.$name$=f}return c});var re=e("H",{});var ne=function(e){return e&&e.$tag$===re};var ae={forEach:function(e,t){return e.map(ie).forEach(t)},map:function(e,t){return e.map(ie).map(t).map(se)}};var ie=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var se=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var oe=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var s=e.classList;fe(r).forEach(function(e){return s.remove(e)});fe(n).forEach(function(e){return s.add(e)})}else if(t==="style"){{for(var o in r){if(!n||n[o]==null){if(o.includes("-")){e.style.removeProperty(o)}else{e.style[o]=""}}}}for(var o in n){if(!r||n[o]!==r[o]){if(o.includes("-")){e.style.setProperty(o,n[o])}else{e.style[o]=n[o]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!S(e,t)){if(S(e,q(t))){t=q(t.substring(2))}else{t=q(t[2])+t.substring(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var f=S(e,t);var l=H(n);if((f||l&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(e[t]!==$){e[t]=$}}else{e[t]=n}}catch(e){}}var u=a&&t!==(t=t.replace(/^xlink\:?/,""))?true:false;if(n==null||n===false){if(u){e.removeAttributeNS(J,q(t))}else{e.removeAttribute(t)}}else if((!f||i&4||a)&&!l){n=n===true?"":n.toString();if(u){e.setAttributeNS(J,q(t),n)}else{e.setAttribute(t,n)}}}};var fe=function(e){return!e?[]:e.split(/\s+/).filter(function(e){return e})};var le=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||U;var s=t.$attrs$||U;{for(n in i){if(!(n in s)){oe(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){oe(a,n,i[n],s[n],r,t.$flags$)}};var $e=function(e,t,r,n){var a=t.$children$[r];var i=0;var $;var v;var h;if(!l){u=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(M(a.$text$)){a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=d.createTextNode("")}else{$=a.$elm$=c||a.$tag$==="svg"?d.createElementNS(B,a.$tag$):d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{c=a.$tag$==="svg"?true:a.$tag$==="foreignObject"?false:c}{le(null,a,c)}if(M(s)&&$["s-si"]!==s){$.classList.add($["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=$e(e,a,i,$);if(v){$.appendChild(v)}}}{if(a.$tag$==="svg"){c=false}else if(a.$elm$.tagName==="foreignObject"){c=true}}}{a.$elm$["s-hn"]=f;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=o;a.$elm$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){ue(e.$elm$,false)}}}return a.$elm$};var ue=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==f&&a["s-ol"]){me(a).insertBefore(a,ge(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(t){ue(a,t)}}h.$flags$&=~1};var ce=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&q(s.tagName)===f){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=$e(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,ge(t))}}}};var ve=function(e,t,r,n){for(;t<=r;++t){if(M(e[t])){n=e[t].$elm$;Re(e[t],true);{$=true;if(n["s-ol"]){n["s-ol"].remove()}else{ue(n,true)}}n.remove()}}};var de=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var f=t.length-1;var l=t[0];var $=t[f];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=f&&i<=u){if(l==null){l=t[++a]}else if($==null){$=t[--f]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(he(l,c)){pe(l,c);l=t[++a];c=n[++i]}else if(he($,v)){pe($,v);$=t[--f];v=n[--u]}else if(he(l,v)){if(l.$tag$==="slot"||v.$tag$==="slot"){ue(l.$elm$.parentNode,false)}pe(l,v);e.insertBefore(l.$elm$,$.$elm$.nextSibling);l=t[++a];v=n[--u]}else if(he($,c)){if(l.$tag$==="slot"||v.$tag$==="slot"){ue($.$elm$.parentNode,false)}pe($,c);e.insertBefore($.$elm$,l.$elm$);$=t[--f];c=n[++i]}else{s=-1;{for(o=a;o<=f;++o){if(t[o]&&M(t[o].$key$)&&t[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=$e(t&&t[i],r,s,e)}else{pe(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=$e(t&&t[i],r,i,e);c=n[++i]}if(d){{me(l.$elm$).insertBefore(d,ge(l.$elm$))}}}}if(a>f){ce(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){ve(t,a,f)}};var he=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var ge=function(e){return e&&e["s-ol"]||e};var me=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var pe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;{c=r&&M(r.parentNode)&&r.ownerSVGElement!==undefined;c=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:c}if(!M(t.$text$)){{if(t.$tag$==="slot");else{le(e,t,c)}}if(M(n)&&M(a)){de(r,n,t,a)}else if(M(a)){if(M(e.$text$)){r.textContent=""}ce(r,null,t,a,0,a.length-1)}else if(M(n)){ve(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}if(c&&t.$tag$==="svg"){c=false}};var ye=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ye(t)}}};var be=[];var we=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var f;var l;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){f=o.parentNode.childNodes;l=s["s-sn"];for(a=f.length-1;a>=0;a--){o=f[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&l===""||i===1&&o.getAttribute("slot")===null&&l===""||i===1&&o.getAttribute("slot")===l){if(!be.some(function(e){return e.$nodeToRelocate$===o})){$=true;o["s-sn"]=l;be.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){we(s)}}};var Re=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){Re(e,t)})}};var Se=function(e,t,r,n){f=q(e.tagName);var a=t.$vnode$||{$flags$:0};var i=ne(n)?n:te(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach(function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]})}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];l=g&&(r.$flags$&1)!==0;u=$=false}pe(a,i);{if(u){we(i.$elm$);for(var c=0;c<be.length;c++){var v=be[c];if(!v.$nodeToRelocate$["s-ol"]){var m=d.createTextNode("");m["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=m,v.$nodeToRelocate$)}}h.$flags$|=1;for(var c=0;c<be.length;c++){var v=be[c];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var m=v.$nodeToRelocate$["s-ol"];while(m=m.previousSibling){var b=m["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if($){ye(i.$elm$)}be.length=0}};var xe=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i=function(){return _e(e,t,r,a,n)};var s;if(n){{t.$flags$|=256}if(t.$queuedListeners$){t.$queuedListeners$.forEach(function(e){var t=e[0],r=e[1];return Te(a,t,r)});t.$queuedListeners$=null}{s=Te(a,"componentWillLoad")}}return ke(s,function(){return z(i)})};var _e=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){Z(e,r,t.$modeName$)}{{t.$flags$|=4;try{Se(e,t,r,n.render())}catch(e){x(e)}t.$flags$&=~4}}if(L){L.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}Ne(e,t)};var Ne=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(Q)}{Te(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){Le()}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var Ee=function(e,t){{var r=b(e);if(r.$flags$&2){xe(e,r,t,false)}}};var Le=function(){{d.documentElement.classList.add(Q)}{h.$flags$|=2}};var Te=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){x(e)}}return undefined};var ke=function(e,t){return e&&e.then?e.then(t):t()};var je=function(e,t){return b(e).$instanceValues$.get(t)};var Ce=function(e,t,r,n){var a=b(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=G(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&o&128){var f=n.$watchers$[t];if(f){f.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,s,t)}catch(e){x(e)}})}}if((o&(4|2|16))===2){xe(i,a,n,false)}}}};var Oe=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return je(this,n)},set:function(e){Ce(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=b(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a})}}return e};var Pe=function(e,t,r){t.$queuedListeners$=t.$queuedListeners$||[];var n=r.map(function(r){var n=r[0],a=r[1],i=r[2];var s=e;var o=Ae(t,i);var f=Ie(n);h.ael(s,a,o,f);return function(){return h.rel(s,a,o,f)}});return function(){return n.forEach(function(e){return e()})}};var Ae=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{e.$queuedListeners$.push([t,r])}}}};var Ie=function(e){return m?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var ze=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,function(){var r,i,o,f;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=N(a);if(!s.then)return[3,2];return[4,s];case 1:s=l.sent();l.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Oe(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){x(e)}{n.$flags$&=~8}{n.$flags$|=128}Ue(n.$lazyInstance$);r=ee(a.$tagName$);if(!(!E.has(r)&&s.style))return[3,5];i=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-8b2adfa7.system.js").then(function(e){return e.scopeCss(i,r,false)})];case 3:i=l.sent();l.label=4;case 4:X(r,i,!!(a.$flags$&1));l.label=5;case 5:o=n.$ancestorComponent$;f=function(){return xe(e,n,a,true)};if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}})})};var Ue=function(e){{Te(e,"connectedCallback")}};var Be=function(e,t){if((h.$flags$&1)===0){var r=b(e);if(t.$listeners$){r.$rmListeners$=Pe(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Me(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&a["s-lr"]===false){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{I(function(){return ze(e,r,t)})}}Ue(r.$lazyInstance$)}};var Me=function(e,t){t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var qe=function(e){if((h.$flags$&1)===0){var t=b(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(L){L.removeHost(e)}{Te(r,"componentDidUnload")}}};var He=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=d.head;var i=v.customElements;var s=a.querySelector("meta[charset]");var o=d.createElement("style");var f;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!g&&a.$flags$&1){a.$flags$|=8}var s=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}R(t);if(a.$flags$&1){if(g){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}h.jmp(function(){return Be(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;h.jmp(function(){return qe(e)})};t.prototype["s-init"]=function(){var e=b(this);if(e.$lazyInstance$){Ne(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){Ee(this,a)};t.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!i.get(s)){r.push(s);i.define(s,Oe(o,a,1))}})});o.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");a.insertBefore(o,s?s.nextSibling:a.firstChild);h.jmp(function(){return f=setTimeout(Le,30)})});var Ve=e("c",function(e,t,r){var n=We(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}});var We=e("g",function(e){return b(e).$hostElement$})}}});