import { Component, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalciteLayout } from "../interfaces";

/**
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 * @slot action-pad - A slot for adding a `calcite-action-pad` to the panel. The action pad will be positioned relative to the shell panel when displayed.
 */
@Component({
  tag: "calcite-shell-panel",
  styleUrl: "calcite-shell-panel.scss",
  shadow: true
})
export class CalciteShellPanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Hide the content panel.
   */
  @Prop({ reflect: true }) collapsed = false;

  @Watch("collapsed")
  watchHandler() {
    this.calciteShellPanelToggle.emit();
  }

  /**
   * Arrangement of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout = "leading";

  /**
   * When true, content is waiting to be loaded. Show a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when collapse has been toggled.
   */
  @Event() calciteShellPanelToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { collapsed, layout } = this;

    const contentNode = (
      <div class={CSS.content} hidden={collapsed}>
        <slot />
      </div>
    );

    const actionBarNode = <slot name="action-bar" />;

    const mainNodes = [actionBarNode, contentNode];

    if (layout === "trailing") {
      mainNodes.reverse();
    }

    return <Host>{mainNodes}</Host>;
  }
}
