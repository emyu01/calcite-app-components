import { CalciteTheme } from "../interfaces";
export declare class CalciteShell {
    /**
     * Element styling
     */
    theme: CalciteTheme;
    el: HTMLCalciteShellElement;
    renderHeader(): any;
    renderContent(): any;
    renderFooter(): any;
    renderMain(): any;
    render(): any;
}