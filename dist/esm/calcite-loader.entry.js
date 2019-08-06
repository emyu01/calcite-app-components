import { r as registerInstance, h, H as Host, g as getElement } from './chunk-f176fce8.js';

class CalciteLoader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Loader is visible when active
         */
        this.isActive = false;
        /**
         * Text which should appear under the loading indicator
         */
        this.text = "Loading...";
    }
    render() {
        return (h(Host, { "is-active": !!this.isActive }, h("div", { class: "loader-bars" }), h("div", { class: "loader-text" }, this.text)));
    }
    get el() { return getElement(this); }
    static get style() { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host .loader-bars,:host .loader-bars:after,:host .loader-bars:before{background:#007ac2;-webkit-animation:load .8s ease-in-out infinite;animation:load .8s ease-in-out infinite;width:.85rem;height:2rem}:host .loader-bars:after,:host .loader-bars:before{position:absolute;top:0;content:\"\"}:host{position:relative;display:none;padding-bottom:4.5rem;padding-top:4.5rem}:host([is-active]){display:block}:host .loader-bars{text-indent:-9999em;margin:auto;position:absolute;right:calc(50% - .425rem);font-size:11px;-webkit-animation-delay:.16s;animation-delay:.16s}:host .loader-bars:before{left:-1.25rem}:host .loader-bars:after{left:1.25rem;-webkit-animation-delay:.32s;animation-delay:.32s}:host .loader-text{padding-top:4rem;text-align:center}\@-webkit-keyframes load{0%,80%,to{opacity:.75;-webkit-box-shadow:0 0 #007ac2;box-shadow:0 0 #007ac2;height:2rem}40%{opacity:1;-webkit-box-shadow:0 -.5rem #007ac2;box-shadow:0 -.5rem #007ac2;height:2.5rem}}\@keyframes load{0%,80%,to{opacity:.75;-webkit-box-shadow:0 0 #007ac2;box-shadow:0 0 #007ac2;height:2rem}40%{opacity:1;-webkit-box-shadow:0 -.5rem #007ac2;box-shadow:0 -.5rem #007ac2;height:2.5rem}}"; }
}

export { CalciteLoader as calcite_loader };