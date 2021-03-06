"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_checkbox_index_module_ts"],{

/***/ 11271:
/*!**********************************************!*\
  !*** ./src/app/components/checkbox/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxBasicComponent": () => (/* binding */ NzDemoCheckboxBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoCheckboxBasicComponent {
    constructor() {
        this.checked = true;
    }
}
NzDemoCheckboxBasicComponent.ɵfac = function NzDemoCheckboxBasicComponent_Factory(t) { return new (t || NzDemoCheckboxBasicComponent)(); };
NzDemoCheckboxBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCheckboxBasicComponent, selectors: [["nz-demo-checkbox-basic"]], decls: 2, vars: 1, consts: [["nz-checkbox", "", 3, "ngModel", "ngModelChange"]], template: function NzDemoCheckboxBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCheckboxBasicComponent_Template_label_ngModelChange_0_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
    } }, directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 59002:
/*!**************************************************!*\
  !*** ./src/app/components/checkbox/check-all.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxCheckAllComponent": () => (/* binding */ NzDemoCheckboxCheckAllComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoCheckboxCheckAllComponent {
    constructor() {
        this.allChecked = false;
        this.indeterminate = true;
        this.checkOptionsOne = [
            { label: 'Apple', value: 'Apple', checked: true },
            { label: 'Pear', value: 'Pear', checked: false },
            { label: 'Orange', value: 'Orange', checked: false }
        ];
    }
    updateAllChecked() {
        this.indeterminate = false;
        if (this.allChecked) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return Object.assign(Object.assign({}, item), { checked: true });
            });
        }
        else {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return Object.assign(Object.assign({}, item), { checked: false });
            });
        }
    }
    updateSingleChecked() {
        if (this.checkOptionsOne.every(item => !item.checked)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.checkOptionsOne.every(item => item.checked)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    }
}
NzDemoCheckboxCheckAllComponent.ɵfac = function NzDemoCheckboxCheckAllComponent_Factory(t) { return new (t || NzDemoCheckboxCheckAllComponent)(); };
NzDemoCheckboxCheckAllComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCheckboxCheckAllComponent, selectors: [["nz-demo-checkbox-check-all"]], decls: 5, vars: 3, consts: [[2, "border-bottom", "1px solid rgb(233, 233, 233)"], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange"], [3, "ngModel", "ngModelChange"]], template: function NzDemoCheckboxCheckAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCheckboxCheckAllComponent_Template_label_ngModelChange_1_listener($event) { return ctx.allChecked = $event; })("ngModelChange", function NzDemoCheckboxCheckAllComponent_Template_label_ngModelChange_1_listener() { return ctx.updateAllChecked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Check all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-checkbox-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCheckboxCheckAllComponent_Template_nz_checkbox_group_ngModelChange_4_listener($event) { return ctx.checkOptionsOne = $event; })("ngModelChange", function NzDemoCheckboxCheckAllComponent_Template_nz_checkbox_group_ngModelChange_4_listener() { return ctx.updateSingleChecked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.allChecked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkOptionsOne);
    } }, directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxGroupComponent], encapsulation: 2 });


/***/ }),

/***/ 3823:
/*!***************************************************!*\
  !*** ./src/app/components/checkbox/controller.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxControllerComponent": () => (/* binding */ NzDemoCheckboxControllerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoCheckboxControllerComponent {
    constructor() {
        this.isCheckedButton = true;
        this.isDisabledButton = false;
    }
    checkButton() {
        this.isCheckedButton = !this.isCheckedButton;
    }
    disableButton() {
        this.isDisabledButton = !this.isDisabledButton;
    }
}
NzDemoCheckboxControllerComponent.ɵfac = function NzDemoCheckboxControllerComponent_Factory(t) { return new (t || NzDemoCheckboxControllerComponent)(); };
NzDemoCheckboxControllerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCheckboxControllerComponent, selectors: [["nz-demo-checkbox-controller"]], decls: 8, vars: 10, consts: [[2, "margin-bottom", "20px"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-button", "", 3, "nzType", "nzSize", "click"]], template: function NzDemoCheckboxControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCheckboxControllerComponent_Template_label_ngModelChange_1_listener($event) { return ctx.isCheckedButton = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCheckboxControllerComponent_Template_button_click_4_listener() { return ctx.checkButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCheckboxControllerComponent_Template_button_click_6_listener() { return ctx.disableButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isCheckedButton)("nzDisabled", ctx.isDisabledButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.isCheckedButton ? "Checked" : "Unchecked", " - ", ctx.isDisabledButton ? "Disabled" : "Enabled", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("nzSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.isCheckedButton ? "Checked" : "Unchecked", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("nzSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isDisabledButton ? "Enabled" : "Disabled", " ");
    } }, directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsaUJBQWlCO01BQ25CIiwiZmlsZSI6ImNvbnRyb2xsZXIudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 10549:
/*!*************************************************!*\
  !*** ./src/app/components/checkbox/disabled.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxDisabledComponent": () => (/* binding */ NzDemoCheckboxDisabledComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoCheckboxDisabledComponent {
}
NzDemoCheckboxDisabledComponent.ɵfac = function NzDemoCheckboxDisabledComponent_Factory(t) { return new (t || NzDemoCheckboxDisabledComponent)(); };
NzDemoCheckboxDisabledComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCheckboxDisabledComponent, selectors: [["nz-demo-checkbox-disabled"]], decls: 3, vars: 2, consts: [["nz-checkbox", "", "nzDisabled", "", 3, "ngModel"]], template: function NzDemoCheckboxDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 0)(1, "br")(2, "label", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true);
    } }, directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 9402:
/*!*****************************************************!*\
  !*** ./src/app/components/checkbox/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxEnComponent": () => (/* binding */ NzDemoCheckboxEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 11271);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ 3823);
/* harmony import */ var _check_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-all */ 59002);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled */ 10549);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group */ 93146);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ 32843);














class NzDemoCheckboxEnComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoCheckboxEnComponent.ɵfac = function NzDemoCheckboxEnComponent_Factory(t) { return new (t || NzDemoCheckboxEnComponent)(); };
NzDemoCheckboxEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoCheckboxEnComponent, selectors: [["nz-demo-checkbox"]], viewQuery: function NzDemoCheckboxEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 305, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-checkbox-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-checkbox-demo-disabled", "nzTitle", "Disabled"], ["nzHref", "#components-checkbox-demo-controller", "nzTitle", "Controlled Checkbox"], ["nzHref", "#components-checkbox-demo-group", "nzTitle", "Checkbox Group"], ["nzHref", "#components-checkbox-demo-check-all", "nzTitle", "Check all"], ["nzHref", "#components-checkbox-demo-layout", "nzTitle", "Use with Grid"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-checkbox-basic", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-basic <name>", "nzComponentName", "NzDemoCheckboxBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Controlled Checkbox", "nzSelector", "nz-demo-checkbox-controller", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-controller <name>", "nzComponentName", "NzDemoCheckboxControllerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Check all", "nzSelector", "nz-demo-checkbox-check-all", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-check-all <name>", "nzComponentName", "NzDemoCheckboxCheckAllComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Disabled", "nzSelector", "nz-demo-checkbox-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-disabled <name>", "nzComponentName", "NzDemoCheckboxDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Checkbox Group", "nzSelector", "nz-demo-checkbox-group", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-group <name>", "nzComponentName", "NzDemoCheckboxGroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Use with Grid", "nzSelector", "nz-demo-checkbox-layout", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-layout <name>", "nzComponentName", "NzDemoCheckboxLayoutComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-checkbox]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-checkbox]'", 1, "anchor"], ["id", "nz-checkbox-group"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-checkbox-group'", 1, "anchor"], ["id", "nz-checkbox-wrapper"], ["onclick", "window.location.hash = 'nz-checkbox-wrapper'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoCheckboxEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoCheckboxEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 10)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Checkbox.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h2", 14)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ul")(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Used for selecting multiple values from several options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "pre", 16)(31, "code")(32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " NzCheckboxModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "'ng-zorro-antd/checkbox'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "h2")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoCheckboxEnComponent_Template_i_click_51_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 21)(53, "div", 22)(54, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "nz-demo-checkbox-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Basic usage of checkbox.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "nz-demo-checkbox-controller", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Communicated with other components.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "nz-demo-checkbox-check-all", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "nzIndeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " property can help you to achieve a 'check all' effect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 22)(73, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "nz-demo-checkbox-disabled", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Disabled checkbox.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "nz-demo-checkbox-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "Generate a group of checkboxes from an array.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "nz-demo-checkbox-layout", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "We can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, " and Grid in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, ", to implement complex layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "h2", 32)(96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "h3", 34)(101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "[nz-checkbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "table")(108, "thead")(109, "tr")(110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "tbody")(119, "tr")(120, "td")(121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "get focus when component mounted");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "td")(126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "td")(129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "tr")(132, "td")(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](134, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "Disable checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "td")(138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "td")(141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "tr")(144, "td")(145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, "Specifies whether the checkbox is selected, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "td")(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "tr")(156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158, "[nzIndeterminate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160, "set the status of indeterminate\uFF0Conly affect the style");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "tr")(168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](170, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, "use for the callback of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](174, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "td")(176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](177, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](179, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "tr")(181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185, "The callback function that is triggered when the state changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](190, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "h3", 37)(192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, "nz-checkbox-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](195, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "table")(199, "thead")(200, "tr")(201, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](202, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](203, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](204, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](205, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](206, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](208, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](209, "tbody")(210, "tr")(211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](213, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](215, "Specifies options, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](218, "Array<{ label: string; value: string; checked?: boolean; }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "td")(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](221, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](222, "tr")(223, "td")(224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](225, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](227, "Disable all checkboxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](230, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](231, "td")(232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](233, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](234, "tr")(235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](239, "The callback function that is triggered when the state changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](240, "td")(241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](242, "EventEmitter<Array<{ label: string; value: string; checked?: boolean; }>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](244, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](245, "h3", 40)(246, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](247, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](248, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](249, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](250, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](251, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](252, "table")(253, "thead")(254, "tr")(255, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](256, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](257, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](258, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](259, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](260, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](261, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](262, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](263, "tbody")(264, "tr")(265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](267, "(nzOnChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](269, "The callback function that is triggered when the state changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](270, "td")(271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](272, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](274, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](275, "h2", 42)(276, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](277, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](278, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](279, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](280, "h3", 34)(281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](282, "[nz-checkbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](284, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](285, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](286, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](287, "table")(288, "thead")(289, "tr")(290, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](291, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](292, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](293, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](294, "tbody")(295, "tr")(296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](297, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](299, "get focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](300, "tr")(301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](302, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](304, "remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-basic")("nzLink", "components-checkbox-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-controller")("nzLink", "components-checkbox-demo-controller")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/controller.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-check-all")("nzLink", "components-checkbox-demo-check-all")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/check-all.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-disabled")("nzLink", "components-checkbox-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-group")("nzLink", "components-checkbox-demo-group")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/group.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-layout")("nzLink", "components-checkbox-demo-layout")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/layout.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCheckboxBasicComponent, _controller__WEBPACK_IMPORTED_MODULE_2__.NzDemoCheckboxControllerComponent, _check_all__WEBPACK_IMPORTED_MODULE_3__.NzDemoCheckboxCheckAllComponent, _disabled__WEBPACK_IMPORTED_MODULE_4__.NzDemoCheckboxDisabledComponent, _group__WEBPACK_IMPORTED_MODULE_5__.NzDemoCheckboxGroupComponent, _layout__WEBPACK_IMPORTED_MODULE_6__.NzDemoCheckboxLayoutComponent], encapsulation: 2 });


/***/ }),

/***/ 93146:
/*!**********************************************!*\
  !*** ./src/app/components/checkbox/group.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxGroupComponent": () => (/* binding */ NzDemoCheckboxGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoCheckboxGroupComponent {
    constructor() {
        this.checkOptionsOne = [
            { label: 'Apple', value: 'Apple', checked: true },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
        ];
        this.checkOptionsTwo = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear', checked: true },
            { label: 'Orange', value: 'Orange' }
        ];
        this.checkOptionsThree = [
            { label: 'Apple', value: 'Apple', disabled: true, checked: true },
            { label: 'Pear', value: 'Pear', disabled: true },
            { label: 'Orange', value: 'Orange' }
        ];
    }
    log(value) {
        console.log(value);
    }
}
NzDemoCheckboxGroupComponent.ɵfac = function NzDemoCheckboxGroupComponent_Factory(t) { return new (t || NzDemoCheckboxGroupComponent)(); };
NzDemoCheckboxGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCheckboxGroupComponent, selectors: [["nz-demo-checkbox-group"]], decls: 7, vars: 3, consts: [[3, "ngModel", "ngModelChange"]], template: function NzDemoCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-checkbox-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCheckboxGroupComponent_Template_nz_checkbox_group_ngModelChange_0_listener($event) { return ctx.checkOptionsOne = $event; })("ngModelChange", function NzDemoCheckboxGroupComponent_Template_nz_checkbox_group_ngModelChange_0_listener() { return ctx.log(ctx.checkOptionsOne); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-checkbox-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCheckboxGroupComponent_Template_nz_checkbox_group_ngModelChange_3_listener($event) { return ctx.checkOptionsTwo = $event; })("ngModelChange", function NzDemoCheckboxGroupComponent_Template_nz_checkbox_group_ngModelChange_3_listener() { return ctx.log(ctx.checkOptionsTwo); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-checkbox-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCheckboxGroupComponent_Template_nz_checkbox_group_ngModelChange_6_listener($event) { return ctx.checkOptionsThree = $event; })("ngModelChange", function NzDemoCheckboxGroupComponent_Template_nz_checkbox_group_ngModelChange_6_listener() { return ctx.log(ctx.checkOptionsThree); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkOptionsOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkOptionsTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkOptionsThree);
    } }, directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 29144:
/*!*****************************************************!*\
  !*** ./src/app/components/checkbox/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxModule": () => (/* binding */ NzDemoCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 74408);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 11271);
/* harmony import */ var _check_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-all */ 59002);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ 3823);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disabled */ 10549);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group */ 93146);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout */ 32843);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zh.component */ 30715);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./en.component */ 9402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);















class NzDemoCheckboxModule {
}
NzDemoCheckboxModule.ɵfac = function NzDemoCheckboxModule_Factory(t) { return new (t || NzDemoCheckboxModule)(); };
NzDemoCheckboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: NzDemoCheckboxModule });
NzDemoCheckboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoCheckboxEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoCheckboxZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](NzDemoCheckboxModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoCheckboxBasicComponent,
        _check_all__WEBPACK_IMPORTED_MODULE_3__.NzDemoCheckboxCheckAllComponent,
        _controller__WEBPACK_IMPORTED_MODULE_4__.NzDemoCheckboxControllerComponent,
        _disabled__WEBPACK_IMPORTED_MODULE_5__.NzDemoCheckboxDisabledComponent,
        _group__WEBPACK_IMPORTED_MODULE_6__.NzDemoCheckboxGroupComponent,
        _layout__WEBPACK_IMPORTED_MODULE_7__.NzDemoCheckboxLayoutComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoCheckboxZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoCheckboxEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__.NzCheckboxModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 32843:
/*!***********************************************!*\
  !*** ./src/app/components/checkbox/layout.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxLayoutComponent": () => (/* binding */ NzDemoCheckboxLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);




class NzDemoCheckboxLayoutComponent {
    log(value) {
        console.log(value);
    }
}
NzDemoCheckboxLayoutComponent.ɵfac = function NzDemoCheckboxLayoutComponent_Factory(t) { return new (t || NzDemoCheckboxLayoutComponent)(); };
NzDemoCheckboxLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCheckboxLayoutComponent, selectors: [["nz-demo-checkbox-layout"]], decls: 17, vars: 1, consts: [[2, "width", "100%", 3, "nzOnChange"], ["nz-row", ""], ["nz-col", "", "nzSpan", "8"], ["nz-checkbox", "", "nzValue", "A", 3, "ngModel"], ["nz-checkbox", "", "nzValue", "B"], ["nz-checkbox", "", "nzValue", "C"], ["nz-checkbox", "", "nzValue", "D"], ["nz-checkbox", "", "nzValue", "E"]], template: function NzDemoCheckboxLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-checkbox-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnChange", function NzDemoCheckboxLayoutComponent_Template_nz_checkbox_wrapper_nzOnChange_0_listener($event) { return ctx.log($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true);
    } }, directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxWrapperComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_1__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 74408:
/*!***********************************************!*\
  !*** ./src/app/components/checkbox/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);


const moduleList = [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_0__.NzCheckboxModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule];


/***/ }),

/***/ 30715:
/*!*****************************************************!*\
  !*** ./src/app/components/checkbox/zh.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCheckboxZhComponent": () => (/* binding */ NzDemoCheckboxZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 11271);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ 3823);
/* harmony import */ var _check_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-all */ 59002);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled */ 10549);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group */ 93146);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ 32843);














class NzDemoCheckboxZhComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoCheckboxZhComponent.ɵfac = function NzDemoCheckboxZhComponent_Factory(t) { return new (t || NzDemoCheckboxZhComponent)(); };
NzDemoCheckboxZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoCheckboxZhComponent, selectors: [["nz-demo-checkbox"]], viewQuery: function NzDemoCheckboxZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 320, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-checkbox-demo-basic", "nzTitle", "\u57FA\u672C\u7528\u6CD5"], ["nzHref", "#components-checkbox-demo-disabled", "nzTitle", "\u4E0D\u53EF\u7528"], ["nzHref", "#components-checkbox-demo-controller", "nzTitle", "\u53D7\u63A7\u7684 Checkbox"], ["nzHref", "#components-checkbox-demo-group", "nzTitle", "Checkbox \u7EC4"], ["nzHref", "#components-checkbox-demo-check-all", "nzTitle", "\u5168\u9009"], ["nzHref", "#components-checkbox-demo-layout", "nzTitle", "\u5E03\u5C40"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C\u7528\u6CD5", "nzSelector", "nz-demo-checkbox-basic", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-basic <name>", "nzComponentName", "NzDemoCheckboxBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u53D7\u63A7\u7684 Checkbox", "nzSelector", "nz-demo-checkbox-controller", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-controller <name>", "nzComponentName", "NzDemoCheckboxControllerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5168\u9009", "nzSelector", "nz-demo-checkbox-check-all", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-check-all <name>", "nzComponentName", "NzDemoCheckboxCheckAllComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E0D\u53EF\u7528", "nzSelector", "nz-demo-checkbox-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-disabled <name>", "nzComponentName", "NzDemoCheckboxDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Checkbox \u7EC4", "nzSelector", "nz-demo-checkbox-group", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-group <name>", "nzComponentName", "NzDemoCheckboxGroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5E03\u5C40", "nzSelector", "nz-demo-checkbox-layout", "nzGenerateCommand", "ng g ng-zorro-antd:checkbox-layout <name>", "nzComponentName", "NzDemoCheckboxLayoutComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-checkbox]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-checkbox]'", 1, "anchor"], ["id", "nz-checkbox-group"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-checkbox-group'", 1, "anchor"], ["id", "nz-checkbox-wrapper"], ["onclick", "window.location.hash = 'nz-checkbox-wrapper'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"]], template: function NzDemoCheckboxZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoCheckboxZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u591A\u9009\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u591A\u9009\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h2", 14)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\u5728\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\u65F6\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\u5355\u72EC\u4F7F\u7528\u53EF\u4EE5\u8868\u793A\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " \u7C7B\u4F3C\u3002\u533A\u522B\u5728\u4E8E\u5207\u6362 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " \u4F1A\u76F4\u63A5\u89E6\u53D1\u72B6\u6001\u6539\u53D8\uFF0C\u800C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " \u4E00\u822C\u7528\u4E8E\u72B6\u6001\u6807\u8BB0\uFF0C\u9700\u8981\u548C\u63D0\u4EA4\u64CD\u4F5C\u914D\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "pre", 16)(41, "code")(42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " NzCheckboxModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "'ng-zorro-antd/checkbox'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "h2")(59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoCheckboxZhComponent_Template_i_click_61_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 21)(63, "div", 22)(64, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "nz-demo-checkbox-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "\u7B80\u5355\u7684 checkbox\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "nz-demo-checkbox-controller", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "\u8054\u52A8 checkbox\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "nz-demo-checkbox-check-all", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "\u5728\u5B9E\u73B0\u5168\u9009\u6548\u679C\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u7528\u5230 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "nzIndeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, " \u5C5E\u6027\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 22)(83, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "nz-demo-checkbox-disabled", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "checkbox \u4E0D\u53EF\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "nz-demo-checkbox-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "\u65B9\u4FBF\u7684\u4ECE\u6570\u7EC4\u751F\u6210 Checkbox \u7EC4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "nz-demo-checkbox-layout", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "p")(97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " \u5185\u5D4C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, " \u5E76\u4E0E Grid \u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7075\u6D3B\u7684\u5E03\u5C40\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "h2", 32)(105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "h3", 34)(110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "[nz-checkbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "table")(117, "thead")(118, "tr")(119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "tbody")(128, "tr")(129, "td")(130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "td")(135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "td")(138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "tr")(141, "td")(142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "\u8BBE\u5B9A disable \u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "td")(147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "tr")(153, "td")(154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157, "\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "td")(159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "tr")(165, "td")(166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](167, "[nzIndeterminate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](169, "\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "td")(171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "tr")(177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](179, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](181, "\u4EC5\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](184, " \u7684\u9009\u4E2D\u56DE\u8C03\u914D\u5408\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "td")(186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](187, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](189, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "tr")(191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](195, "\u9009\u4E2D\u53D8\u5316\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](200, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "h3", 37)(202, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, "nz-checkbox-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](207, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](208, "table")(209, "thead")(210, "tr")(211, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](212, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](213, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](214, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](215, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](216, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](217, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](218, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "tbody")(220, "tr")(221, "td")(222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](223, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](225, "\u6307\u5B9A\u53EF\u9009\u9879\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](228, "Array<{ label: string; value: string; checked?: boolean; }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](231, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](232, "tr")(233, "td")(234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](235, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "\u8BBE\u5B9A\u5168\u90E8 checkbox disable \u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](240, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](243, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](244, "tr")(245, "td")(246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](247, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](249, "\u9009\u4E2D\u6570\u636E\u53D8\u5316\u65F6\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](252, "EventEmitter<Array<{ label: string; value: string; checked?: boolean; }>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](254, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](255, "h3", 40)(256, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](257, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](258, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](260, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](261, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](262, "table")(263, "thead")(264, "tr")(265, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](266, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](267, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](268, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](269, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](270, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](271, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](272, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](273, "tbody")(274, "tr")(275, "td")(276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](277, "(nzOnChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](279, "\u9009\u4E2D\u6570\u636E\u53D8\u5316\u65F6\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](280, "td")(281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](282, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](284, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](285, "h2", 42)(286, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](287, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](288, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](289, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](290, "h3", 34)(291, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](292, "[nz-checkbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](293, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](294, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](295, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](296, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](298, "\u901A\u8FC7ViewChild\u6216\u5176\u4ED6\u65B9\u5F0F\u83B7\u5F97 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](300, "nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](301, " \u5B9E\u4F8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](302, "table")(303, "thead")(304, "tr")(305, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](306, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](307, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](308, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](309, "tbody")(310, "tr")(311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](312, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](314, "\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](315, "tr")(316, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](317, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](319, "\u79FB\u9664\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-basic")("nzLink", "components-checkbox-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-controller")("nzLink", "components-checkbox-demo-controller")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/controller.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-check-all")("nzLink", "components-checkbox-demo-check-all")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/check-all.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-disabled")("nzLink", "components-checkbox-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-group")("nzLink", "components-checkbox-demo-group")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/group.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-checkbox-demo-layout")("nzLink", "components-checkbox-demo-layout")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/layout.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCheckboxBasicComponent, _controller__WEBPACK_IMPORTED_MODULE_2__.NzDemoCheckboxControllerComponent, _check_all__WEBPACK_IMPORTED_MODULE_3__.NzDemoCheckboxCheckAllComponent, _disabled__WEBPACK_IMPORTED_MODULE_4__.NzDemoCheckboxDisabledComponent, _group__WEBPACK_IMPORTED_MODULE_5__.NzDemoCheckboxGroupComponent, _layout__WEBPACK_IMPORTED_MODULE_6__.NzDemoCheckboxLayoutComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_checkbox_index_module_ts.js.map