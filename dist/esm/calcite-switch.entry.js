import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-b03bc579.js';
import { S as SPACE, E as ENTER } from './keys-9b54de34.js';

const CalciteSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * True if the control should be switched on
         */
        this.switched = false;
        /**
         * Name of the form control (useful for specifying input/label relationship)
         */
        this.name = "";
        /**
         * Value of the form control
         */
        this.value = "";
        /**
         * Color of the switch. Use red to denote destructive settings/actions.
         */
        this.color = "blue";
        this.syncThisToProxyInput = () => {
            this.switched = this.inputProxy.checked;
            this.name = this.inputProxy.name;
            this.value = this.inputProxy.value;
        };
        this.syncProxyInputToThis = () => {
            this.inputProxy.checked = this.switched;
            this.inputProxy.name = this.name;
            this.inputProxy.value = this.value;
        };
        this.calciteSwitchChange = createEvent(this, "calciteSwitchChange", 7);
    }
    onClick(e) {
        // If this is contained by a label only toggle if the target is our input
        // proxy to prevent duplicate toggles when <calcite-switch> is contained by
        // a <label> and the switch is clicked causing a click from BOTH the switch
        // and input.
        // If this is NOT contained by a label only switch if the target
        // is the switch.
        if ((this.el.closest("label") && e.target === this.inputProxy) ||
            (!this.el.closest("label") && e.target === this.el)) {
            this.switched = !this.switched;
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            this.switched = !this.switched;
        }
    }
    switchWatcher() {
        this.calciteSwitchChange.emit();
        if (this.switched) {
            this.inputProxy.setAttribute("checked", "");
        }
        else {
            this.inputProxy.removeAttribute("checked");
        }
    }
    connectedCallback() {
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        return (h(Host, { role: "checkbox", "aria-checked": this.switched, tabindex: "0" }, h("div", { class: "track" }, h("div", { class: "handle" })), h("slot", null)));
    }
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        this.observer = new MutationObserver(this.syncThisToProxyInput);
        this.observer.observe(this.inputProxy, { attributes: true });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "switched": ["switchWatcher"]
    }; }
    static get style() { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}::slotted(input){display:none}:host{display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent}.track{position:relative;display:inline-block;vertical-align:top;width:36px;height:20px;background-color:#f8f8f8;border-radius:30px;border:1px solid #eaeaea}.handle,.track{-webkit-transition:all .25s ease;transition:all .25s ease}.handle{position:absolute;display:block;width:18px;height:18px;top:-1px;left:-1px;right:auto;background-color:#fff;border-radius:30px;border:2px solid #757575;-webkit-box-shadow:0 1px 1px 0 rgba(43,43,43,.2);box-shadow:0 1px 1px 0 rgba(43,43,43,.2)}:host([switched]) .handle{right:-1px;left:auto;border-color:#004874;-webkit-box-shadow:0 2px 1px 0 rgba(43,43,43,.2);box-shadow:0 2px 1px 0 rgba(43,43,43,.2)}:host([switched]) .track{border-color:#00619b;background-color:#007ac2}:host([switched][color=red]) .handle{border-color:#7c1d13}:host([switched][color=red]) .track{border-color:#7c1d13;background-color:#a82b1e}:host(:focus),:host([switched]:focus){outline:none}:host(:focus) .track,:host([switched]:focus) .track{-webkit-box-shadow:0 0 4px 2px hsla(0,0%,87.5%,.9);box-shadow:0 0 4px 2px hsla(0,0%,87.5%,.9)}:host(:hover) .track{border-color:#eaeaea;background-color:#f3f3f3}:host(:hover) .handle{border-color:#007ac2;-webkit-box-shadow:0 1px 2px 0 rgba(43,43,43,.2);box-shadow:0 1px 2px 0 rgba(43,43,43,.2)}:host([color=red]:hover) .handle{border-color:#d83020}:host([switched]:hover) .handle{border-color:#004874}:host([switched]:hover) .track{border-color:#00619b;background-color:#007ac2}:host([switched][color=red]:hover) .handle{border-color:#7c1d13}:host([switched][color=red]:hover) .track{border-color:#7c1d13;background-color:#a82b1e}"; }
};

export { CalciteSwitch as calcite_switch };