// Type definitions for ag-grid v7.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { IFilter, IFilterParams, IDoesFilterPassParams } from "../interfaces/iFilter";
import { Component } from "../widgets/component";
export interface IDateFilterParams {
    comparator: (filterDate: Date, valueDate: any) => number;
}
export declare class ButtonPanel extends Component {
    private context;
    constructor();
    private onClick();
    sayHello(): void;
}
export declare class DateFilter extends Component implements IFilter {
    private eDateInput;
    private context;
    private buttonPanel;
    constructor();
    init(params: IFilterParams): void;
    private onDateChanged(event);
    isFilterActive(): boolean;
    doesFilterPass(params: IDoesFilterPassParams): boolean;
    getModel(): any;
    setModel(model: any): void;
}
