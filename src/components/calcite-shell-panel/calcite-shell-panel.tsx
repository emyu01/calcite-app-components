import { Component, Host, Prop, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalciteLayout } from "../interfaces";

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

  /**
   * Arrangement of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout = "leading";

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { collapsed, layout } = this;

    const contentNode = !collapsed ? (
      <div class={CSS.content}>
        <slot />
      </div>
    ) : null;

    const actionBarNode = <slot name="action-bar" />;

    const mainNodes = [actionBarNode, contentNode];

    if (layout === "trailing") {
      mainNodes.reverse();
    }

    return (
      <Host>
        {mainNodes}
        <slot name="floating-panel" />
        <slot name="action-pad" />
      </Host>
    );
  }
}
