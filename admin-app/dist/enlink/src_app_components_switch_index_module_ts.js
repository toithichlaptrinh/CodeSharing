"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_switch_index_module_ts"],{

/***/ 17529:
/*!********************************************!*\
  !*** ./src/app/components/switch/basic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchBasicComponent": () => (/* binding */ NzDemoSwitchBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSwitchBasicComponent {
    constructor() {
        this.switchValue = false;
    }
}
NzDemoSwitchBasicComponent.ɵfac = function NzDemoSwitchBasicComponent_Factory(t) { return new (t || NzDemoSwitchBasicComponent)(); };
NzDemoSwitchBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSwitchBasicComponent, selectors: [["nz-demo-switch-basic"]], decls: 1, vars: 1, consts: [[3, "ngModel", "ngModelChange"]], template: function NzDemoSwitchBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSwitchBasicComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.switchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.switchValue);
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 68035:
/*!**********************************************!*\
  !*** ./src/app/components/switch/control.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchControlComponent": () => (/* binding */ NzDemoSwitchControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSwitchControlComponent {
    constructor() {
        this.switchValue = false;
        this.loading = false;
    }
    clickSwitch() {
        if (!this.loading) {
            this.loading = true;
            setTimeout(() => {
                this.switchValue = !this.switchValue;
                this.loading = false;
            }, 3000);
        }
    }
}
NzDemoSwitchControlComponent.ɵfac = function NzDemoSwitchControlComponent_Factory(t) { return new (t || NzDemoSwitchControlComponent)(); };
NzDemoSwitchControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSwitchControlComponent, selectors: [["nz-demo-switch-control"]], decls: 1, vars: 3, consts: [[3, "ngModel", "nzControl", "nzLoading", "ngModelChange", "click"]], template: function NzDemoSwitchControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSwitchControlComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.switchValue = $event; })("click", function NzDemoSwitchControlComponent_Template_nz_switch_click_0_listener() { return ctx.clickSwitch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.switchValue)("nzControl", true)("nzLoading", ctx.loading);
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 65201:
/*!***********************************************!*\
  !*** ./src/app/components/switch/disabled.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchDisabledComponent": () => (/* binding */ NzDemoSwitchDisabledComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoSwitchDisabledComponent {
    constructor() {
        this.switchValue = false;
        this.isDisabled = true;
    }
}
NzDemoSwitchDisabledComponent.ɵfac = function NzDemoSwitchDisabledComponent_Factory(t) { return new (t || NzDemoSwitchDisabledComponent)(); };
NzDemoSwitchDisabledComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSwitchDisabledComponent, selectors: [["nz-demo-switch-disabled"]], decls: 5, vars: 3, consts: [[3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-button", "", 3, "nzType", "click"]], template: function NzDemoSwitchDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSwitchDisabledComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.switchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSwitchDisabledComponent_Template_button_click_3_listener() { return ctx.isDisabled = !ctx.isDisabled; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toggle disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.switchValue)("nzDisabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 74451:
/*!***************************************************!*\
  !*** ./src/app/components/switch/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchEnComponent": () => (/* binding */ NzDemoSwitchEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 17529);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ 23902);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ 99779);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled */ 65201);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./size */ 94096);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control */ 68035);















class NzDemoSwitchEnComponent {
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
NzDemoSwitchEnComponent.ɵfac = function NzDemoSwitchEnComponent_Factory(t) { return new (t || NzDemoSwitchEnComponent)(); };
NzDemoSwitchEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoSwitchEnComponent, selectors: [["nz-demo-switch"]], viewQuery: function NzDemoSwitchEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 267, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-switch-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-switch-demo-disabled", "nzTitle", "Disabled"], ["nzHref", "#components-switch-demo-text", "nzTitle", "Text & icon"], ["nzHref", "#components-switch-demo-size", "nzTitle", "Two sizes"], ["nzHref", "#components-switch-demo-loading", "nzTitle", "Loading"], ["nzHref", "#components-switch-demo-control", "nzTitle", "Control"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-switch-basic", "nzGenerateCommand", "ng g ng-zorro-antd:switch-basic <name>", "nzComponentName", "NzDemoSwitchBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Text & icon", "nzSelector", "nz-demo-switch-text", "nzGenerateCommand", "ng g ng-zorro-antd:switch-text <name>", "nzComponentName", "NzDemoSwitchTextComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Loading", "nzSelector", "nz-demo-switch-loading", "nzGenerateCommand", "ng g ng-zorro-antd:switch-loading <name>", "nzComponentName", "NzDemoSwitchLoadingComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Disabled", "nzSelector", "nz-demo-switch-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:switch-disabled <name>", "nzComponentName", "NzDemoSwitchDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Two sizes", "nzSelector", "nz-demo-switch-size", "nzGenerateCommand", "ng g ng-zorro-antd:switch-size <name>", "nzComponentName", "NzDemoSwitchSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Control", "nzSelector", "nz-demo-switch-control", "nzGenerateCommand", "ng g ng-zorro-antd:switch-control <name>", "nzComponentName", "NzDemoSwitchControlComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-switch"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-switch'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoSwitchEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoSwitchEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 10)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Switching Selector.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h2", 14)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ul")(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "If you need to represent the switching between two states or on-off state.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "The difference between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " is that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " will trigger a state change directly when you toggle it, while ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " is generally used for state marking, which should work in conjunction with submit operation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "pre", 16)(43, "code")(44, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, " NzSwitchModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "'ng-zorro-antd/switch'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "h2")(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoSwitchEnComponent_Template_i_click_63_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 21)(65, "div", 22)(66, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "nz-demo-switch-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "The most basic usage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "nz-demo-switch-text", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "With text and icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "nz-demo-switch-loading", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Mark a pending state of switch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 22)(82, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "nz-demo-switch-disabled", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Disabled state of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "nz-demo-switch-size", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "p")(94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "nzSize=\"small\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, " represents a small sized switch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "nz-demo-switch-control", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "The status of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, " is completely up to the user and no longer automatically changes the data based on the click event.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "h2", 32)(107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "h3", 34)(112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "nz-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "table")(119, "thead")(120, "tr")(121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "tbody")(132, "tr")(133, "td")(134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "determine whether the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, "nz-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, " is checked, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "td")(142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "td")(145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "tr")(149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "[nzCheckedChildren]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153, "content to be shown when the state is checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "[nzUnCheckedChildren]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "content to be shown when the state is unchecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "td")(167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](168, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](170, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "tr")(173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](177, "Disable switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "td")(179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "tr")(186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](190, "the size of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](192, "nz-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, ", options: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](195, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "td")(199, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](200, "'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "tr")(207, "td")(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](209, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](211, "loading state of switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](212, "td")(213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](214, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](217, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "tr")(220, "td")(221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](222, "[nzControl]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](224, "determine whether fully control state by user");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](227, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](230, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](232, "tr")(233, "td")(234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](235, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "a callback function, can be executed when the checked state is changing");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](240, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](242, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](244, "h4", 37)(245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](246, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](247, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](248, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](249, "table")(250, "thead")(251, "tr")(252, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](253, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](254, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](255, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](256, "tbody")(257, "tr")(258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](261, "get focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](262, "tr")(263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](264, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](266, "remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-basic")("nzLink", "components-switch-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-text")("nzLink", "components-switch-demo-text")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-loading")("nzLink", "components-switch-demo-loading")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-disabled")("nzLink", "components-switch-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-size")("nzLink", "components-switch-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-control")("nzLink", "components-switch-demo-control")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSwitchBasicComponent, _text__WEBPACK_IMPORTED_MODULE_2__.NzDemoSwitchTextComponent, _loading__WEBPACK_IMPORTED_MODULE_3__.NzDemoSwitchLoadingComponent, _disabled__WEBPACK_IMPORTED_MODULE_4__.NzDemoSwitchDisabledComponent, _size__WEBPACK_IMPORTED_MODULE_5__.NzDemoSwitchSizeComponent, _control__WEBPACK_IMPORTED_MODULE_6__.NzDemoSwitchControlComponent], encapsulation: 2 });


/***/ }),

/***/ 51008:
/*!***************************************************!*\
  !*** ./src/app/components/switch/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchModule": () => (/* binding */ NzDemoSwitchModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 77717);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 17529);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control */ 68035);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled */ 65201);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ 99779);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./size */ 94096);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text */ 23902);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zh.component */ 11796);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./en.component */ 74451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
















class NzDemoSwitchModule {
}
NzDemoSwitchModule.ɵfac = function NzDemoSwitchModule_Factory(t) { return new (t || NzDemoSwitchModule)(); };
NzDemoSwitchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: NzDemoSwitchModule });
NzDemoSwitchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoSwitchEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoSwitchZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](NzDemoSwitchModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoSwitchBasicComponent,
        _control__WEBPACK_IMPORTED_MODULE_3__.NzDemoSwitchControlComponent,
        _disabled__WEBPACK_IMPORTED_MODULE_4__.NzDemoSwitchDisabledComponent,
        _loading__WEBPACK_IMPORTED_MODULE_5__.NzDemoSwitchLoadingComponent,
        _size__WEBPACK_IMPORTED_MODULE_6__.NzDemoSwitchSizeComponent,
        _text__WEBPACK_IMPORTED_MODULE_7__.NzDemoSwitchTextComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoSwitchZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoSwitchEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__.NzSwitchModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 99779:
/*!**********************************************!*\
  !*** ./src/app/components/switch/loading.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchLoadingComponent": () => (/* binding */ NzDemoSwitchLoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSwitchLoadingComponent {
}
NzDemoSwitchLoadingComponent.ɵfac = function NzDemoSwitchLoadingComponent_Factory(t) { return new (t || NzDemoSwitchLoadingComponent)(); };
NzDemoSwitchLoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSwitchLoadingComponent, selectors: [["nz-demo-switch-loading"]], decls: 4, vars: 2, consts: [["nzLoading", "", 3, "ngModel"], ["nzSize", "small", "nzLoading", "", 3, "ngModel"]], template: function NzDemoSwitchLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-switch", 0)(1, "br")(2, "br")(3, "nz-switch", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", false);
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 77717:
/*!*********************************************!*\
  !*** ./src/app/components/switch/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);



const moduleList = [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_0__.NzSwitchModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];


/***/ }),

/***/ 94096:
/*!*******************************************!*\
  !*** ./src/app/components/switch/size.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchSizeComponent": () => (/* binding */ NzDemoSwitchSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSwitchSizeComponent {
}
NzDemoSwitchSizeComponent.ɵfac = function NzDemoSwitchSizeComponent_Factory(t) { return new (t || NzDemoSwitchSizeComponent)(); };
NzDemoSwitchSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSwitchSizeComponent, selectors: [["nz-demo-switch-size"]], decls: 4, vars: 2, consts: [[3, "ngModel"], ["nzSize", "small", 3, "ngModel"]], template: function NzDemoSwitchSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-switch", 0)(1, "br")(2, "br")(3, "nz-switch", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true);
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 23902:
/*!*******************************************!*\
  !*** ./src/app/components/switch/text.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchTextComponent": () => (/* binding */ NzDemoSwitchTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);





function NzDemoSwitchTextComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} }
function NzDemoSwitchTextComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
class NzDemoSwitchTextComponent {
}
NzDemoSwitchTextComponent.ɵfac = function NzDemoSwitchTextComponent_Factory(t) { return new (t || NzDemoSwitchTextComponent)(); };
NzDemoSwitchTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSwitchTextComponent, selectors: [["nz-demo-switch-text"]], decls: 11, vars: 5, consts: [["nzCheckedChildren", "\u5F00", "nzUnCheckedChildren", "\u5173", 3, "ngModel"], ["nzCheckedChildren", "1", "nzUnCheckedChildren", "0", 3, "ngModel"], [3, "ngModel", "nzCheckedChildren", "nzUnCheckedChildren"], ["checkedTemplate", ""], ["unCheckedTemplate", ""], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"]], template: function NzDemoSwitchTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-switch", 0)(1, "br")(2, "br")(3, "nz-switch", 1)(4, "br")(5, "br")(6, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoSwitchTextComponent_ng_template_7_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoSwitchTextComponent_ng_template_9_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true)("nzCheckedChildren", _r0)("nzUnCheckedChildren", _r2);
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 11796:
/*!***************************************************!*\
  !*** ./src/app/components/switch/zh.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSwitchZhComponent": () => (/* binding */ NzDemoSwitchZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 17529);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ 23902);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ 99779);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled */ 65201);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./size */ 94096);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control */ 68035);















class NzDemoSwitchZhComponent {
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
NzDemoSwitchZhComponent.ɵfac = function NzDemoSwitchZhComponent_Factory(t) { return new (t || NzDemoSwitchZhComponent)(); };
NzDemoSwitchZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoSwitchZhComponent, selectors: [["nz-demo-switch"]], viewQuery: function NzDemoSwitchZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 256, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-switch-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-switch-demo-disabled", "nzTitle", "\u4E0D\u53EF\u7528"], ["nzHref", "#components-switch-demo-text", "nzTitle", "\u6587\u5B57\u548C\u56FE\u6807"], ["nzHref", "#components-switch-demo-size", "nzTitle", "\u4E24\u79CD\u5927\u5C0F"], ["nzHref", "#components-switch-demo-loading", "nzTitle", "\u52A0\u8F7D\u4E2D"], ["nzHref", "#components-switch-demo-control", "nzTitle", "\u5B8C\u6574\u63A7\u5236"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-switch-basic", "nzGenerateCommand", "ng g ng-zorro-antd:switch-basic <name>", "nzComponentName", "NzDemoSwitchBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u6587\u5B57\u548C\u56FE\u6807", "nzSelector", "nz-demo-switch-text", "nzGenerateCommand", "ng g ng-zorro-antd:switch-text <name>", "nzComponentName", "NzDemoSwitchTextComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A0\u8F7D\u4E2D", "nzSelector", "nz-demo-switch-loading", "nzGenerateCommand", "ng g ng-zorro-antd:switch-loading <name>", "nzComponentName", "NzDemoSwitchLoadingComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E0D\u53EF\u7528", "nzSelector", "nz-demo-switch-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:switch-disabled <name>", "nzComponentName", "NzDemoSwitchDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E24\u79CD\u5927\u5C0F", "nzSelector", "nz-demo-switch-size", "nzGenerateCommand", "ng g ng-zorro-antd:switch-size <name>", "nzComponentName", "NzDemoSwitchSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5B8C\u6574\u63A7\u5236", "nzSelector", "nz-demo-switch-control", "nzGenerateCommand", "ng g ng-zorro-antd:switch-control <name>", "nzComponentName", "NzDemoSwitchControlComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-switch"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-switch'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"]], template: function NzDemoSwitchZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoSwitchZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u5F00\u5173");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u5F00\u5173\u9009\u62E9\u5668\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h2", 14)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\u7684\u533A\u522B\u662F\uFF0C\u5207\u6362 ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " NzSwitchModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "'ng-zorro-antd/switch'");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoSwitchZhComponent_Template_i_click_61_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 21)(63, "div", 22)(64, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "nz-demo-switch-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "nz-demo-switch-text", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "\u5E26\u6709\u6587\u5B57\u548C\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "nz-demo-switch-loading", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "\u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 22)(80, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "nz-demo-switch-disabled", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Switch \u5931\u6548\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "nz-demo-switch-size", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "p")(89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "nzSize=\"small\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, " \u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "nz-demo-switch-control", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "p")(96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, " \u7684\u72B6\u6001\u5B8C\u5168\u7531\u7528\u6237\u63A5\u7BA1\uFF0C\u4E0D\u518D\u81EA\u52A8\u6839\u636E\u70B9\u51FB\u4E8B\u4EF6\u6539\u53D8\u6570\u636E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "h2", 32)(101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "h3", 34)(106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "nz-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "table")(113, "thead")(114, "tr")(115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "tbody")(126, "tr")(127, "td")(128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "td")(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](134, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "tr")(140, "td")(141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "[nzCheckedChildren]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144, "\u9009\u4E2D\u65F6\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "td")(146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "tr")(152, "td")(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, "[nzUnCheckedChildren]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, "\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "td")(158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](163, "tr")(164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](168, "disable \u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](171, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "td")(173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](174, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "tr")(177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](179, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](181, "\u5F00\u5173\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188, "'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](191, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "tr")(195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](199, "\u52A0\u8F7D\u4E2D\u7684\u5F00\u5173");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "td")(201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](202, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](207, "tr")(208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](210, "[nzControl]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](212, "\u662F\u5426\u5B8C\u5168\u7531\u7528\u6237\u63A7\u5236\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](213, "td")(214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](215, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](218, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](220, "tr")(221, "td")(222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](223, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](225, "\u5F53\u524D\u662F\u5426\u9009\u4E2D\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](228, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](231, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](233, "h4", 37)(234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](235, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](236, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "table")(239, "thead")(240, "tr")(241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](242, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](243, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](244, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](245, "tbody")(246, "tr")(247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](248, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](250, "\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](251, "tr")(252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](253, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](255, "\u79FB\u9664\u7126\u70B9");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-basic")("nzLink", "components-switch-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-text")("nzLink", "components-switch-demo-text")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-loading")("nzLink", "components-switch-demo-loading")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-disabled")("nzLink", "components-switch-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-size")("nzLink", "components-switch-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-switch-demo-control")("nzLink", "components-switch-demo-control")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSwitchBasicComponent, _text__WEBPACK_IMPORTED_MODULE_2__.NzDemoSwitchTextComponent, _loading__WEBPACK_IMPORTED_MODULE_3__.NzDemoSwitchLoadingComponent, _disabled__WEBPACK_IMPORTED_MODULE_4__.NzDemoSwitchDisabledComponent, _size__WEBPACK_IMPORTED_MODULE_5__.NzDemoSwitchSizeComponent, _control__WEBPACK_IMPORTED_MODULE_6__.NzDemoSwitchControlComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_switch_index_module_ts.js.map