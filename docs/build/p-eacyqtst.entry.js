import{r as t,h as e,H as r,g as a}from"./p-5133e63e.js";class l{constructor(e){t(this,e),this.expanded=!1}watchHandler(t){this.el.querySelectorAll("calcite-action").forEach(e=>t?e.toggleAttribute("text-enabled"):e.removeAttribute("text-enabled"))}render(){return e(r,null,e("slot",null))}get el(){return a(this)}static get watchers(){return{expanded:["watchHandler"]}}static get style(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host{background-color:#4c4c4c;height:100%;display:-ms-flexbox;display:flex;color:#fff;-ms-flex-direction:column;flex-direction:column;max-width:15vw}:host ::slotted(calcite-action-group){border-bottom:1px solid hsla(0,0%,100%,.25)}:host ::slotted(calcite-action-group:last-child){border-bottom:none}"}}export{l as calcite_action_bar};