System.register(["./p-c60736eb.system.js"],function(t){"use strict";var e,i,n,c;return{setters:[function(t){e=t.r;i=t.c;n=t.h;c=t.H}],execute:function(){var a={button:"calcite-action__button",iconContainer:"calcite-action__icon-container",textContainer:"calcite-action__text-container"};var r=function(){function t(t){e(this,t);this.active=false;this.indicator=false;this.textEnabled=false;this.calciteActionClick=i(this,"calciteActionClick",7)}t.prototype.render=function(){var t=this,e=t.textEnabled,i=t.label,r=t.text;var o=n("div",{key:"icon-container","aria-hidden":"true",class:a.iconContainer},n("slot",null));var l=e?n("div",{key:"text-container",class:a.textContainer},r):null;var s=i||r;return n(c,null,n("button",{class:a.button,title:s,"aria-label":s,onClick:this._clickHandler.bind(this)},o,l))};t.prototype._clickHandler=function(){this.calciteActionClick.emit(this)};Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host .calcite-action__button{display:-ms-flexbox;display:flex;color:#fff;fill:#fff;background-color:#4c4c4c;padding:9px;margin:2px 0;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;border:none;width:auto;cursor:pointer;font:inherit;line-height:normal;-webkit-transition:color 125ms ease-in-out,background-color 125ms ease-in-out;transition:color 125ms ease-in-out,background-color 125ms ease-in-out}:host([active]) .calcite-action__button{color:#69dcff;fill:#69dcff}:host .calcite-action__icon-container{display:block;max-width:16px;max-height:16px;margin:0;-ms-flex-pack:center;justify-content:center}:host .calcite-action__text-container{-ms-flex:1;flex:1;display:block;line-height:16px;margin:0 6px;word-break:break-word}"},enumerable:true,configurable:true});return t}();t("calcite_action",r)}}});