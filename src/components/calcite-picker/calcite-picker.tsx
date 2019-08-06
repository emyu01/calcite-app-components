import Sortable from "sortablejs";
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";
import { pencil16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../_support/CalciteIcon";
import { CSS } from "./resources";

@Component({
  tag: "calcite-picker",
  styleUrl: "./calcite-picker.scss",
  shadow: true
})
export class CalcitePicker {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";

  @Prop({ reflect: true }) multiple = false;

  @Prop({ reflect: true }) dragEnabled = false; /* ignored unless mode is configuration */

  @Prop({ reflect: true }) editEnabled = false; /* ignored unless mode is configuration */

  @Prop({ reflect: false }) data = [];

  @State() selectedValues = new Set();

  @Watch("selectedValues")
  selectedValuesChangeHandler() {
    this.pickerSelectionChange.emit(this.selectedValues);
  }

  @State() editing = false;

  @Watch("editing")
  editingChangeHandler() {
    this.slottedRows.forEach((item) => {
      item.toggleAttribute("editing", this.editing);
    });
  }

  deletedRows = new Set();
  slottedRows: any;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  sortable = null;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    const rows = this.el.querySelectorAll("calcite-picker-row");
    rows.forEach((row) => {
      row.setAttribute("icon", this.getIconType());
    });
  }

  componentDidLoad() {
    const slot = this.el.shadowRoot.querySelector("slot");
    this.slottedRows = slot.assignedElements();
    if (this.dragEnabled && this.mode === "configuration") {
      this.setupDragAndDrop();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() pickerSelectionChange: EventEmitter;

  @Event() pickerRowsDeleted: EventEmitter;

  @Listen("rowToggled")
  rowToggledHandler(event) {
    const { row, value, selected } = event.detail;
    if (selected) {
      this.selectedValues.add(value);
    } else {
      this.selectedValues.delete(value);
    }
    if (!this.multiple && selected) {
      const rows = Array.from(this.el.shadowRoot.querySelectorAll("calcite-picker-row"));
      rows.forEach((item) => {
        if (item !== row) {
          this.deselectRow(item);
        }
      });
    }
    this.pickerSelectionChange.emit(this.selectedValues);
  }

  @Listen("rowDeleted")
  rowDeletedHandler(event) {
    const { row } = event.detail;
    row.toggleAttribute("hidden", true);
    this.deletedRows.add(row);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setupDragAndDrop(): void {
    const sortGroups = [this.el, ...Array.from(this.el.querySelectorAll("calcite-picker-group"))];
    sortGroups.forEach((sortGroup) => {
      Sortable.create(sortGroup, {
        group: "whateva",
        handle: ".handle",
        draggable: "calcite-picker-row"
      });
    });
  }

  deselectRow(item) {
    item.toggleAttribute("selected", false);
    this.selectedValues.delete(item.value);
  }

  startEdit() {
    this.editing = true;
  }

  cancelDelete() {
    this.deletedRows.forEach((row: HTMLCalcitePickerRowElement) => {
      row.toggleAttribute("hidden", false);
    });
    this.deletedRows = new Set();
    this.editing = false;
  }

  confirmDelete() {
    let selectedChanged = false;
    this.deletedRows.forEach((row: HTMLCalcitePickerRowElement) => {
      if (this.selectedValues.has(row.value)) {
        this.selectedValues.delete(row.value);
        selectedChanged = true;
      }
      row.remove();
    });
    if (selectedChanged) {
      this.pickerSelectionChange.emit(this.selectedValues);
    }
    this.deletedRows = new Set();
    this.editing = false;
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedRows() {
    return this.selectedValues;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  getIconType() {
    let type = null;
    if (this.mode === "configuration" && this.dragEnabled) {
      type = "grip";
    } else if (this.mode === "selection" && this.multiple) {
      type = "square";
    } else if (this.mode === "selection" && !this.multiple) {
      type = "circle";
    }
    return type;
  }

  renderSecondaryAction(action) {
    return action ? (
      <calcite-action slot="secondaryAction" onClick={action.onclick || void 0}>
        <CalciteIcon size={action.icon.size} path={action.icon.path} />
      </calcite-action>
    ) : null;
  }

  renderEditButton() {
    return this.editEnabled ? (
      !this.editing ? (
        <section>
          <calcite-action onClick={() => this.startEdit()}>
            <CalciteIcon size="16" path={pencil16} />
          </calcite-action>
        </section>
      ) : (
        <section>
          <button onClick={() => this.cancelDelete()}>Cancel</button>
          <button onClick={() => this.confirmDelete()}>OK</button>
        </section>
      )
    ) : null;
  }

  render() {
    return (
      <Host>
        <section class={CSS.container}>
          <header>
            <h2>{this.textHeading}</h2>
            {/* <filter /> */}
          </header>
          {this.renderEditButton()}
          {this.data.map((item, index) => {
            const { heading, description, value, selected } = item;
            return (
              <calcite-picker-row
                key={index}
                textHeading={heading}
                textDescription={description}
                value={value}
                selected={selected}
                icon={this.getIconType()}
                editing={this.editing}
              >
                {this.renderSecondaryAction(item.secondaryAction)}
              </calcite-picker-row>
            );
          })}
          <slot />
        </section>
      </Host>
    );
  }
}