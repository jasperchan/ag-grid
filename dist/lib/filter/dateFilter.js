/**
 * ag-grid - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v7.1.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var component_1 = require("../widgets/component");
var componentAnnotations_1 = require("../widgets/componentAnnotations");
var context_1 = require("../context/context");
var ButtonPanel = (function (_super) {
    __extends(ButtonPanel, _super);
    function ButtonPanel() {
        _super.call(this);
        this.setTemplate("<div>Click Me!!!</div>");
    }
    ButtonPanel.prototype.onClick = function () {
        console.log('button panel was clicked');
    };
    ButtonPanel.prototype.sayHello = function () {
        console.log('hello');
    };
    __decorate([
        context_1.Autowired('context'), 
        __metadata('design:type', context_1.Context)
    ], ButtonPanel.prototype, "context", void 0);
    __decorate([
        componentAnnotations_1.Listener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ButtonPanel.prototype, "onClick", null);
    return ButtonPanel;
}(component_1.Component));
exports.ButtonPanel = ButtonPanel;
var DateFilter = (function (_super) {
    __extends(DateFilter, _super);
    function DateFilter() {
        _super.call(this, "<div><input type=\"date\" placeholder=\"enter date\"/><button-panel/></div>");
    }
    DateFilter.prototype.init = function (params) {
        this.addDestroyableEventListener(this.eDateInput, 'change', this.onDateChanged.bind(this));
        this.instantiate(this.context);
    };
    DateFilter.prototype.onDateChanged = function (event) {
        this.buttonPanel.sayHello();
    };
    DateFilter.prototype.isFilterActive = function () {
        return false;
    };
    DateFilter.prototype.doesFilterPass = function (params) {
        return false;
    };
    DateFilter.prototype.getModel = function () {
    };
    DateFilter.prototype.setModel = function (model) {
    };
    __decorate([
        componentAnnotations_1.QuerySelector('input'), 
        __metadata('design:type', HTMLInputElement)
    ], DateFilter.prototype, "eDateInput", void 0);
    __decorate([
        context_1.Autowired('context'), 
        __metadata('design:type', context_1.Context)
    ], DateFilter.prototype, "context", void 0);
    __decorate([
        componentAnnotations_1.QuerySelector('button-panel'), 
        __metadata('design:type', ButtonPanel)
    ], DateFilter.prototype, "buttonPanel", void 0);
    return DateFilter;
}(component_1.Component));
exports.DateFilter = DateFilter;
