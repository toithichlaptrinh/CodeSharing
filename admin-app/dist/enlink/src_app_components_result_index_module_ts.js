"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_result_index_module_ts"],{

/***/ 5908:
/*!*********************************************!*\
  !*** ./src/app/components/result/custom.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultCustomComponent": () => (/* binding */ NzDemoResultCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoResultCustomComponent {
}
NzDemoResultCustomComponent.ɵfac = function NzDemoResultCustomComponent_Factory(t) { return new (t || NzDemoResultCustomComponent)(); };
NzDemoResultCustomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultCustomComponent, selectors: [["nz-demo-result-custom"]], decls: 4, vars: 2, consts: [[3, "nzIcon", "nzTitle"], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function NzDemoResultCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", "smile-twotone")("nzTitle", "Great, we have done all the operators!");
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 42311:
/*!***************************************************!*\
  !*** ./src/app/components/result/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultEnComponent": () => (/* binding */ NzDemoResultEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success */ 97155);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ 33700);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warning */ 56062);
/* harmony import */ var _fot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fot */ 81845);
/* harmony import */ var _fof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fof */ 32028);
/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foo */ 95678);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error */ 99783);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom */ 5908);

















class NzDemoResultEnComponent {
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
NzDemoResultEnComponent.ɵfac = function NzDemoResultEnComponent_Factory(t) { return new (t || NzDemoResultEnComponent)(); };
NzDemoResultEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: NzDemoResultEnComponent, selectors: [["nz-demo-result"]], viewQuery: function NzDemoResultEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 232, vars: 28, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-result-demo-success", "nzTitle", "Success"], ["nzHref", "#components-result-demo-info", "nzTitle", "Info"], ["nzHref", "#components-result-demo-warning", "nzTitle", "Warning"], ["nzHref", "#components-result-demo-fot", "nzTitle", "403"], ["nzHref", "#components-result-demo-fof", "nzTitle", "404"], ["nzHref", "#components-result-demo-foo", "nzTitle", "500"], ["nzHref", "#components-result-demo-error", "nzTitle", "Error"], ["nzHref", "#components-result-demo-custom", "nzTitle", "Custom Icon"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Success", "nzSelector", "nz-demo-result-success", "nzGenerateCommand", "ng g ng-zorro-antd:result-success <name>", "nzComponentName", "NzDemoResultSuccessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Info", "nzSelector", "nz-demo-result-info", "nzGenerateCommand", "ng g ng-zorro-antd:result-info <name>", "nzComponentName", "NzDemoResultInfoComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Warning", "nzSelector", "nz-demo-result-warning", "nzGenerateCommand", "ng g ng-zorro-antd:result-warning <name>", "nzComponentName", "NzDemoResultWarningComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "403", "nzSelector", "nz-demo-result-fot", "nzGenerateCommand", "ng g ng-zorro-antd:result-fot <name>", "nzComponentName", "NzDemoResultFotComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "404", "nzSelector", "nz-demo-result-fof", "nzGenerateCommand", "ng g ng-zorro-antd:result-fof <name>", "nzComponentName", "NzDemoResultFofComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "500", "nzSelector", "nz-demo-result-foo", "nzGenerateCommand", "ng g ng-zorro-antd:result-foo <name>", "nzComponentName", "NzDemoResultFooComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Error", "nzSelector", "nz-demo-result-error", "nzGenerateCommand", "ng g ng-zorro-antd:result-error <name>", "nzComponentName", "NzDemoResultErrorComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Icon", "nzSelector", "nz-demo-result-custom", "nzGenerateCommand", "ng g ng-zorro-antd:result-custom <name>", "nzComponentName", "NzDemoResultCustomComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-result"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-result'", 1, "anchor"], ["id", "counter-parts"], ["onclick", "window.location.hash = 'counter-parts'", 1, "anchor"]], template: function NzDemoResultEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzClick", function NzDemoResultEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "section", 11)(13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "span", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Used to feed back the results of a series of operational tasks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "h2", 16)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Use when important operations need to inform the user to process the results and the feedback is more complicated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "pre", 18)(30, "code")(31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, " NzResultModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "'ng-zorro-antd/result'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "h2")(48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NzDemoResultEnComponent_Template_i_click_50_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 23)(52, "div", 24)(53, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "nz-demo-result-success", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Show successful results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "nz-demo-result-info", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Show processing results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "nz-demo-result-warning", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Show warning.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "nz-demo-result-fot", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "You are not authorized to access this page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "nz-demo-result-fof", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "The page you visited does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](79, "nz-demo-result-foo", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "There is an error on server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](84, "nz-demo-result-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "Complex error feedback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](89, "nz-demo-result-custom", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "Custom icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "h2", 36)(95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "h3", 38)(100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "nz-result");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "table")(107, "thead")(108, "tr")(109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "tbody")(118, "tr")(119, "td")(120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "td")(125, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](131, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "tr")(133, "td")(134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](135, "nzSubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "subTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "tr")(147, "td")(148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](149, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](151, "result status, decides icons and colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "td")(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154, "'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155, " | 'info'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](158, "'info'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "tr")(160, "td")(161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](162, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](164, "custom icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "td")(166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](167, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](168, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](170, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](172, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "tr")(174, "td")(175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](176, "nzExtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](178, "operating area");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "td")(180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](182, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](184, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](186, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "h3", 41)(188, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](189, "Counter Parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](191, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "You can use these directives as children of nz-result.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "table")(195, "thead")(196, "tr")(197, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](198, "Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](200, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "tbody")(202, "tr")(203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](205, "i[nz-result-icon], div[nz-result-icon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](207, "custom icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](208, "tr")(209, "td")(210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](211, "div[nz-result-title]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](213, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "tr")(215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](217, "div[nz-result-subtitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](219, "subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "tr")(221, "td")(222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](223, "div[nz-result-content]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](225, "contents, for detailed explanations");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](226, "tr")(227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](229, "div[nz-result-extra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](231, "extra content, usually an operating area");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-success")("nzLink", "components-result-demo-success")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/success.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-info")("nzLink", "components-result-demo-info")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/info.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-warning")("nzLink", "components-result-demo-warning")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/warning.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-fot")("nzLink", "components-result-demo-fot")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/fot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-fof")("nzLink", "components-result-demo-fof")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/fof.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-foo")("nzLink", "components-result-demo-foo")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/foo.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-error")("nzLink", "components-result-demo-error")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/error.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-custom")("nzLink", "components-result-demo-custom")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/custom.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _success__WEBPACK_IMPORTED_MODULE_1__.NzDemoResultSuccessComponent, _info__WEBPACK_IMPORTED_MODULE_2__.NzDemoResultInfoComponent, _warning__WEBPACK_IMPORTED_MODULE_3__.NzDemoResultWarningComponent, _fot__WEBPACK_IMPORTED_MODULE_4__.NzDemoResultFotComponent, _fof__WEBPACK_IMPORTED_MODULE_5__.NzDemoResultFofComponent, _foo__WEBPACK_IMPORTED_MODULE_6__.NzDemoResultFooComponent, _error__WEBPACK_IMPORTED_MODULE_7__.NzDemoResultErrorComponent, _custom__WEBPACK_IMPORTED_MODULE_8__.NzDemoResultCustomComponent], encapsulation: 2 });


/***/ }),

/***/ 99783:
/*!********************************************!*\
  !*** ./src/app/components/result/error.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultErrorComponent": () => (/* binding */ NzDemoResultErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/typography */ 21477);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);







class NzDemoResultErrorComponent {
}
NzDemoResultErrorComponent.ɵfac = function NzDemoResultErrorComponent_Factory(t) { return new (t || NzDemoResultErrorComponent)(); };
NzDemoResultErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultErrorComponent, selectors: [["nz-demo-result-error"]], decls: 20, vars: 0, consts: [["nzTitle", "Submission Failed", "nzStatus", "error", "nzSubTitle", "Please check and modify the following information before resubmitting."], ["nz-result-content", ""], [1, "desc"], ["nz-title", ""], ["nz-paragraph", ""], ["nz-icon", "", "nzType", "close-circle"], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"], ["nz-button", ""]], template: function NzDemoResultErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The content you submitted has the following error:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your account has been frozen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Thaw immediately >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your account is not yet eligible to apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apply immediately >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Go Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Buy Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultContentDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__.NzTypographyComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective], encapsulation: 2 });


/***/ }),

/***/ 32028:
/*!******************************************!*\
  !*** ./src/app/components/result/fof.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultFofComponent": () => (/* binding */ NzDemoResultFofComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoResultFofComponent {
}
NzDemoResultFofComponent.ɵfac = function NzDemoResultFofComponent_Factory(t) { return new (t || NzDemoResultFofComponent)(); };
NzDemoResultFofComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultFofComponent, selectors: [["nz-demo-result-fof"]], decls: 4, vars: 0, consts: [["nzStatus", "404", "nzTitle", "404", "nzSubTitle", "Sorry, the page you visited does not exist."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function NzDemoResultFofComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 95678:
/*!******************************************!*\
  !*** ./src/app/components/result/foo.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultFooComponent": () => (/* binding */ NzDemoResultFooComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoResultFooComponent {
}
NzDemoResultFooComponent.ɵfac = function NzDemoResultFooComponent_Factory(t) { return new (t || NzDemoResultFooComponent)(); };
NzDemoResultFooComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultFooComponent, selectors: [["nz-demo-result-foo"]], decls: 4, vars: 0, consts: [["nzStatus", "500", "nzTitle", "500", "nzSubTitle", "Sorry, there is an error on server."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function NzDemoResultFooComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 81845:
/*!******************************************!*\
  !*** ./src/app/components/result/fot.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultFotComponent": () => (/* binding */ NzDemoResultFotComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoResultFotComponent {
}
NzDemoResultFotComponent.ɵfac = function NzDemoResultFotComponent_Factory(t) { return new (t || NzDemoResultFotComponent)(); };
NzDemoResultFotComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultFotComponent, selectors: [["nz-demo-result-fot"]], decls: 4, vars: 0, consts: [["nzStatus", "403", "nzTitle", "403", "nzSubTitle", "Sorry, you are not authorized to access this page."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function NzDemoResultFotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 64379:
/*!***************************************************!*\
  !*** ./src/app/components/result/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultModule": () => (/* binding */ NzDemoResultModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 5469);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom */ 5908);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ 99783);
/* harmony import */ var _fof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fof */ 32028);
/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foo */ 95678);
/* harmony import */ var _fot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fot */ 81845);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info */ 33700);
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./success */ 97155);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warning */ 56062);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zh.component */ 25572);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./en.component */ 42311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/typography */ 21477);



















class NzDemoResultModule {
}
NzDemoResultModule.ɵfac = function NzDemoResultModule_Factory(t) { return new (t || NzDemoResultModule)(); };
NzDemoResultModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: NzDemoResultModule });
NzDemoResultModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoResultEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoResultZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](NzDemoResultModule, { declarations: [_custom__WEBPACK_IMPORTED_MODULE_2__.NzDemoResultCustomComponent,
        _error__WEBPACK_IMPORTED_MODULE_3__.NzDemoResultErrorComponent,
        _fof__WEBPACK_IMPORTED_MODULE_4__.NzDemoResultFofComponent,
        _foo__WEBPACK_IMPORTED_MODULE_5__.NzDemoResultFooComponent,
        _fot__WEBPACK_IMPORTED_MODULE_6__.NzDemoResultFotComponent,
        _info__WEBPACK_IMPORTED_MODULE_7__.NzDemoResultInfoComponent,
        _success__WEBPACK_IMPORTED_MODULE_8__.NzDemoResultSuccessComponent,
        _warning__WEBPACK_IMPORTED_MODULE_9__.NzDemoResultWarningComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoResultZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoResultEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_16__.NzResultModule, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__.NzTypographyModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 33700:
/*!*******************************************!*\
  !*** ./src/app/components/result/info.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultInfoComponent": () => (/* binding */ NzDemoResultInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoResultInfoComponent {
}
NzDemoResultInfoComponent.ɵfac = function NzDemoResultInfoComponent_Factory(t) { return new (t || NzDemoResultInfoComponent)(); };
NzDemoResultInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultInfoComponent, selectors: [["nz-demo-result-info"]], decls: 4, vars: 0, consts: [["nzStatus", "info", "nzTitle", "Your operation has been executed"], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function NzDemoResultInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 5469:
/*!*********************************************!*\
  !*** ./src/app/components/result/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/typography */ 21477);




const moduleList = [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_0__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_2__.NzResultModule, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_3__.NzTypographyModule];


/***/ }),

/***/ 97155:
/*!**********************************************!*\
  !*** ./src/app/components/result/success.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultSuccessComponent": () => (/* binding */ NzDemoResultSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoResultSuccessComponent {
}
NzDemoResultSuccessComponent.ɵfac = function NzDemoResultSuccessComponent_Factory(t) { return new (t || NzDemoResultSuccessComponent)(); };
NzDemoResultSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultSuccessComponent, selectors: [["nz-demo-result-success"]], decls: 6, vars: 0, consts: [["nzStatus", "success", "nzTitle", "Successfully Purchased Cloud Server ECS!", "nzSubTitle", "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"], ["nz-button", ""]], template: function NzDemoResultSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buy Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 56062:
/*!**********************************************!*\
  !*** ./src/app/components/result/warning.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultWarningComponent": () => (/* binding */ NzDemoResultWarningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/result */ 92029);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoResultWarningComponent {
}
NzDemoResultWarningComponent.ɵfac = function NzDemoResultWarningComponent_Factory(t) { return new (t || NzDemoResultWarningComponent)(); };
NzDemoResultWarningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoResultWarningComponent, selectors: [["nz-demo-result-warning"]], decls: 4, vars: 0, consts: [["nzStatus", "warning", "nzTitle", "There are some problems with your operation"], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function NzDemoResultWarningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_1__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 25572:
/*!***************************************************!*\
  !*** ./src/app/components/result/zh.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoResultZhComponent": () => (/* binding */ NzDemoResultZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success */ 97155);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ 33700);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warning */ 56062);
/* harmony import */ var _fot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fot */ 81845);
/* harmony import */ var _fof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fof */ 32028);
/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foo */ 95678);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error */ 99783);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom */ 5908);

















class NzDemoResultZhComponent {
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
NzDemoResultZhComponent.ɵfac = function NzDemoResultZhComponent_Factory(t) { return new (t || NzDemoResultZhComponent)(); };
NzDemoResultZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: NzDemoResultZhComponent, selectors: [["nz-demo-result"]], viewQuery: function NzDemoResultZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 233, vars: 28, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-result-demo-success", "nzTitle", "Success"], ["nzHref", "#components-result-demo-info", "nzTitle", "Info"], ["nzHref", "#components-result-demo-warning", "nzTitle", "Warning"], ["nzHref", "#components-result-demo-fot", "nzTitle", "403"], ["nzHref", "#components-result-demo-fof", "nzTitle", "404"], ["nzHref", "#components-result-demo-foo", "nzTitle", "500"], ["nzHref", "#components-result-demo-error", "nzTitle", "Error"], ["nzHref", "#components-result-demo-custom", "nzTitle", "\u81EA\u5B9A\u4E49 icon"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Success", "nzSelector", "nz-demo-result-success", "nzGenerateCommand", "ng g ng-zorro-antd:result-success <name>", "nzComponentName", "NzDemoResultSuccessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Info", "nzSelector", "nz-demo-result-info", "nzGenerateCommand", "ng g ng-zorro-antd:result-info <name>", "nzComponentName", "NzDemoResultInfoComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Warning", "nzSelector", "nz-demo-result-warning", "nzGenerateCommand", "ng g ng-zorro-antd:result-warning <name>", "nzComponentName", "NzDemoResultWarningComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "403", "nzSelector", "nz-demo-result-fot", "nzGenerateCommand", "ng g ng-zorro-antd:result-fot <name>", "nzComponentName", "NzDemoResultFotComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "404", "nzSelector", "nz-demo-result-fof", "nzGenerateCommand", "ng g ng-zorro-antd:result-fof <name>", "nzComponentName", "NzDemoResultFofComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "500", "nzSelector", "nz-demo-result-foo", "nzGenerateCommand", "ng g ng-zorro-antd:result-foo <name>", "nzComponentName", "NzDemoResultFooComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Error", "nzSelector", "nz-demo-result-error", "nzGenerateCommand", "ng g ng-zorro-antd:result-error <name>", "nzComponentName", "NzDemoResultErrorComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49 icon", "nzSelector", "nz-demo-result-custom", "nzGenerateCommand", "ng g ng-zorro-antd:result-custom <name>", "nzComponentName", "NzDemoResultCustomComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-result"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-result'", 1, "anchor"], ["id", "\u5B50\u5143\u7D20"], ["onclick", "window.location.hash = '\u5B50\u5143\u7D20'", 1, "anchor"]], template: function NzDemoResultZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzClick", function NzDemoResultZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "section", 11)(13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "h2", 16)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\u5F53\u6709\u91CD\u8981\u64CD\u4F5C\u9700\u544A\u77E5\u7528\u6237\u5904\u7406\u7ED3\u679C\uFF0C\u4E14\u53CD\u9988\u5185\u5BB9\u8F83\u4E3A\u590D\u6742\u65F6\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "pre", 18)(31, "code")(32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " NzResultModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "'ng-zorro-antd/result'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "h2")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NzDemoResultZhComponent_Template_i_click_51_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 23)(53, "div", 24)(54, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "nz-demo-result-success", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "\u6210\u529F\u7684\u7ED3\u679C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "nz-demo-result-info", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "\u5C55\u793A\u5904\u7406\u7ED3\u679C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "nz-demo-result-warning", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "\u8B66\u544A\u7C7B\u578B\u7684\u7ED3\u679C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](70, "nz-demo-result-fot", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "\u4F60\u6CA1\u6709\u6B64\u9875\u9762\u7684\u8BBF\u95EE\u6743\u9650\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](75, "nz-demo-result-fof", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "\u6B64\u9875\u9762\u672A\u627E\u5230\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](80, "nz-demo-result-foo", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "\u670D\u52A1\u5668\u53D1\u751F\u4E86\u9519\u8BEF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](85, "nz-demo-result-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "\u590D\u6742\u7684\u9519\u8BEF\u53CD\u9988\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "nz-demo-result-custom", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "\u81EA\u5B9A\u4E49 icon\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "h2", 36)(96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "h3", 38)(101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102, "nz-result");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "table")(108, "thead")(109, "tr")(110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](115, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "tbody")(119, "tr")(120, "td")(121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](122, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "td")(126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "tr")(134, "td")(135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136, "nzSubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "\u526F\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "td")(140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](142, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](144, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "tr")(148, "td")(149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](152, "\u7ED3\u679C\u7684\u72B6\u6001\uFF0C\u51B3\u5B9A\u56FE\u6807\u548C\u989C\u8272");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "td")(154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155, "'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](156, " | 'info'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "td")(158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159, "'info'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](163, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165, "\u81EA\u5B9A\u4E49 icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "td")(167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](168, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](173, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "tr")(175, "td")(176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177, "nzExtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](179, "\u64CD\u4F5C\u533A\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "td")(181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](182, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](183, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](185, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](187, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "h3", 41)(189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](190, "\u5B50\u5143\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](192, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](194, "\u4F60\u53EF\u4EE5\u5728 nz-result \u4E2D\u52A0\u5165\u5982\u4E0B\u6307\u4EE4\uFF0C\u5B83\u4EEC\u7684\u4F18\u5148\u7EA7\u4F4E\u4E8E\u4E0A\u9762\u7684\u53C2\u6570\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "table")(196, "thead")(197, "tr")(198, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](199, "\u5143\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](201, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "tbody")(203, "tr")(204, "td")(205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, "i[nz-result-icon], div[nz-result-icon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](208, "\u5728\u9876\u90E8\u5C55\u793A\u7684\u5927\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](209, "tr")(210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](212, "div[nz-result-title]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "tr")(216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](218, "div[nz-result-subtitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](220, "\u526F\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "tr")(222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](224, "div[nz-result-content]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](226, "\u5185\u5BB9\uFF0C\u53EF\u4EE5\u5C55\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "tr")(228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](230, "div[nz-result-extra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, "\u64CD\u4F5C\u533A\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-success")("nzLink", "components-result-demo-success")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/success.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-info")("nzLink", "components-result-demo-info")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/info.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-warning")("nzLink", "components-result-demo-warning")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/warning.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-fot")("nzLink", "components-result-demo-fot")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/fot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-fof")("nzLink", "components-result-demo-fof")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/fof.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-foo")("nzLink", "components-result-demo-foo")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/foo.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-error")("nzLink", "components-result-demo-error")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/error.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-result-demo-custom")("nzLink", "components-result-demo-custom")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/result/demo/custom.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _success__WEBPACK_IMPORTED_MODULE_1__.NzDemoResultSuccessComponent, _info__WEBPACK_IMPORTED_MODULE_2__.NzDemoResultInfoComponent, _warning__WEBPACK_IMPORTED_MODULE_3__.NzDemoResultWarningComponent, _fot__WEBPACK_IMPORTED_MODULE_4__.NzDemoResultFotComponent, _fof__WEBPACK_IMPORTED_MODULE_5__.NzDemoResultFofComponent, _foo__WEBPACK_IMPORTED_MODULE_6__.NzDemoResultFooComponent, _error__WEBPACK_IMPORTED_MODULE_7__.NzDemoResultErrorComponent, _custom__WEBPACK_IMPORTED_MODULE_8__.NzDemoResultCustomComponent], encapsulation: 2 });


/***/ }),

/***/ 92029:
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-result.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzResultComponent": () => (/* binding */ NzResultComponent),
/* harmony export */   "NzResultContentDirective": () => (/* binding */ NzResultContentDirective),
/* harmony export */   "NzResultExtraDirective": () => (/* binding */ NzResultExtraDirective),
/* harmony export */   "NzResultIconDirective": () => (/* binding */ NzResultIconDirective),
/* harmony export */   "NzResultModule": () => (/* binding */ NzResultModule),
/* harmony export */   "NzResultSubtitleDirective": () => (/* binding */ NzResultSubtitleDirective),
/* harmony export */   "NzResultTitleDirective": () => (/* binding */ NzResultTitleDirective),
/* harmony export */   "ɵNzResultNotFoundComponent": () => (/* binding */ NzResultNotFoundComponent),
/* harmony export */   "ɵNzResultServerErrorComponent": () => (/* binding */ NzResultServerErrorComponent),
/* harmony export */   "ɵNzResultUnauthorizedComponent": () => (/* binding */ NzResultUnauthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 87511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 88153);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 85921);








/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






function NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r12);
} }
function NzResultComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r9.icon);
} }
function NzResultComponent_ng_container_1_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "!icon"]);
} }
function NzResultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzResultComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzResultComponent_ng_container_1_ng_content_2_Template, 1, 0, "ng-content", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.icon);
} }
function NzResultComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.nzTitle, " ");
} }
function NzResultComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzResultComponent_ng_container_2_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
function NzResultComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngIf", "!nzTitle"]);
} }
function NzResultComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.nzSubTitle, " ");
} }
function NzResultComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzResultComponent_ng_container_4_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzSubTitle);
} }
function NzResultComponent_ng_content_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3, ["*ngIf", "!nzSubTitle"]);
} }
function NzResultComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.nzExtra, " ");
} }
function NzResultComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzResultComponent_div_7_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.nzExtra);
} }
function NzResultComponent_ng_content_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 4, ["*ngIf", "!nzExtra"]);
} }
function NzResultComponent_ng_template_9_nz_result_not_found_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-result-not-found");
} }
function NzResultComponent_ng_template_9_nz_result_server_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-result-server-error");
} }
function NzResultComponent_ng_template_9_nz_result_unauthorized_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-result-unauthorized");
} }
function NzResultComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzResultComponent_ng_template_9_nz_result_not_found_1_Template, 1, 0, "nz-result-not-found", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzResultComponent_ng_template_9_nz_result_server_error_2_Template, 1, 0, "nz-result-server-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzResultComponent_ng_template_9_nz_result_unauthorized_3_Template, 1, 0, "nz-result-unauthorized", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r8.nzStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "404");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "500");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "403");
} }
const _c0 = [[["nz-result-content"], ["", "nz-result-content", ""]], [["", "nz-result-icon", ""]], [["div", "nz-result-title", ""]], [["div", "nz-result-subtitle", ""]], [["div", "nz-result-extra", ""]]];
const _c1 = ["nz-result-content, [nz-result-content]", "[nz-result-icon]", "div[nz-result-title]", "div[nz-result-subtitle]", "div[nz-result-extra]"];
class NzResultNotFoundComponent {
}
NzResultNotFoundComponent.ɵfac = function NzResultNotFoundComponent_Factory(t) { return new (t || NzResultNotFoundComponent)(); };
NzResultNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzResultNotFoundComponent, selectors: [["nz-result-not-found"]], exportAs: ["nzResultNotFound"], decls: 62, vars: 0, consts: [["width", "252", "height", "294"], ["d", "M0 .387h251.772v251.772H0z"], ["fill", "none", "fillRule", "evenodd"], ["transform", "translate(0 .012)"], ["fill", "#fff"], ["d", "M0 127.32v-2.095C0 56.279 55.892.387 124.838.387h2.096c68.946 0 124.838 55.892 124.838 124.838v2.096c0 68.946-55.892 124.838-124.838 124.838h-2.096C55.892 252.16 0 196.267 0 127.321", "fill", "#E4EBF7", "mask", "url(#b)"], ["d", "M39.755 130.84a8.276 8.276 0 1 1-16.468-1.66 8.276 8.276 0 0 1 16.468 1.66", "fill", "#FFF"], ["d", "M36.975 134.297l10.482 5.943M48.373 146.508l-12.648 10.788", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M39.875 159.352a5.667 5.667 0 1 1-11.277-1.136 5.667 5.667 0 0 1 11.277 1.136M57.588 143.247a5.708 5.708 0 1 1-11.358-1.145 5.708 5.708 0 0 1 11.358 1.145M99.018 26.875l29.82-.014a4.587 4.587 0 1 0-.003-9.175l-29.82.013a4.587 4.587 0 1 0 .003 9.176M110.424 45.211l29.82-.013a4.588 4.588 0 0 0-.004-9.175l-29.82.013a4.587 4.587 0 1 0 .004 9.175", "fill", "#FFF"], ["d", "M112.798 26.861v-.002l15.784-.006a4.588 4.588 0 1 0 .003 9.175l-15.783.007v-.002a4.586 4.586 0 0 0-.004-9.172M184.523 135.668c-.553 5.485-5.447 9.483-10.931 8.93-5.485-.553-9.483-5.448-8.93-10.932.552-5.485 5.447-9.483 10.932-8.93 5.485.553 9.483 5.447 8.93 10.932", "fill", "#FFF"], ["d", "M179.26 141.75l12.64 7.167M193.006 156.477l-15.255 13.011", "par", "", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M184.668 170.057a6.835 6.835 0 1 1-13.6-1.372 6.835 6.835 0 0 1 13.6 1.372M203.34 153.325a6.885 6.885 0 1 1-13.7-1.382 6.885 6.885 0 0 1 13.7 1.382", "fill", "#FFF"], ["d", "M151.931 192.324a2.222 2.222 0 1 1-4.444 0 2.222 2.222 0 0 1 4.444 0zM225.27 116.056a2.222 2.222 0 1 1-4.445 0 2.222 2.222 0 0 1 4.444 0zM216.38 151.08a2.223 2.223 0 1 1-4.446-.001 2.223 2.223 0 0 1 4.446 0zM176.917 107.636a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM195.291 92.165a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM202.058 180.711a2.223 2.223 0 1 1-4.446 0 2.223 2.223 0 0 1 4.446 0z", "stroke", "#FFF", "strokeWidth", "2"], ["stroke", "#FFF", "strokeWidth", "2", "d", "M214.404 153.302l-1.912 20.184-10.928 5.99M173.661 174.792l-6.356 9.814h-11.36l-4.508 6.484M174.941 125.168v-15.804M220.824 117.25l-12.84 7.901-15.31-7.902V94.39"], ["d", "M166.588 65.936h-3.951a4.756 4.756 0 0 1-4.743-4.742 4.756 4.756 0 0 1 4.743-4.743h3.951a4.756 4.756 0 0 1 4.743 4.743 4.756 4.756 0 0 1-4.743 4.742", "fill", "#FFF"], ["d", "M174.823 30.03c0-16.281 13.198-29.48 29.48-29.48 16.28 0 29.48 13.199 29.48 29.48 0 16.28-13.2 29.48-29.48 29.48-16.282 0-29.48-13.2-29.48-29.48", "fill", "#1890FF"], ["d", "M205.952 38.387c.5.5.785 1.142.785 1.928s-.286 1.465-.785 1.964c-.572.5-1.214.75-2 .75-.785 0-1.429-.285-1.929-.785-.572-.5-.82-1.143-.82-1.929s.248-1.428.82-1.928c.5-.5 1.144-.75 1.93-.75.785 0 1.462.25 1.999.75m4.285-19.463c1.428 1.249 2.143 2.963 2.143 5.142 0 1.712-.427 3.13-1.219 4.25-.067.096-.137.18-.218.265-.416.429-1.41 1.346-2.956 2.699a5.07 5.07 0 0 0-1.428 1.75 5.207 5.207 0 0 0-.536 2.357v.5h-4.107v-.5c0-1.357.215-2.536.714-3.5.464-.964 1.857-2.464 4.178-4.536l.43-.5c.643-.785.964-1.643.964-2.535 0-1.18-.358-2.108-1-2.785-.678-.68-1.643-1.001-2.858-1.001-1.536 0-2.642.464-3.357 1.43-.37.5-.621 1.135-.76 1.904a1.999 1.999 0 0 1-1.971 1.63h-.004c-1.277 0-2.257-1.183-1.98-2.43.337-1.518 1.02-2.78 2.073-3.784 1.536-1.5 3.607-2.25 6.25-2.25 2.32 0 4.214.607 5.642 1.894", "fill", "#FFF"], ["d", "M52.04 76.131s21.81 5.36 27.307 15.945c5.575 10.74-6.352 9.26-15.73 4.935-10.86-5.008-24.7-11.822-11.577-20.88", "fill", "#FFB594"], ["d", "M90.483 67.504l-.449 2.893c-.753.49-4.748-2.663-4.748-2.663l-1.645.748-1.346-5.684s6.815-4.589 8.917-5.018c2.452-.501 9.884.94 10.7 2.278 0 0 1.32.486-2.227.69-3.548.203-5.043.447-6.79 3.132-1.747 2.686-2.412 3.624-2.412 3.624", "fill", "#FFC6A0"], ["d", "M128.055 111.367c-2.627-7.724-6.15-13.18-8.917-15.478-3.5-2.906-9.34-2.225-11.366-4.187-1.27-1.231-3.215-1.197-3.215-1.197s-14.98-3.158-16.828-3.479c-2.37-.41-2.124-.714-6.054-1.405-1.57-1.907-2.917-1.122-2.917-1.122l-7.11-1.383c-.853-1.472-2.423-1.023-2.423-1.023l-2.468-.897c-1.645 9.976-7.74 13.796-7.74 13.796 1.795 1.122 15.703 8.3 15.703 8.3l5.107 37.11s-3.321 5.694 1.346 9.109c0 0 19.883-3.743 34.921-.329 0 0 3.047-2.546.972-8.806.523-3.01 1.394-8.263 1.736-11.622.385.772 2.019 1.918 3.14 3.477 0 0 9.407-7.365 11.052-14.012-.832-.723-1.598-1.585-2.267-2.453-.567-.736-.358-2.056-.765-2.717-.669-1.084-1.804-1.378-1.907-1.682", "fill", "#FFF"], ["d", "M101.09 289.998s4.295 2.041 7.354 1.021c2.821-.94 4.53.668 7.08 1.178 2.55.51 6.874 1.1 11.686-1.26-.103-5.51-6.889-3.98-11.96-6.713-2.563-1.38-3.784-4.722-3.598-8.799h-9.402s-1.392 10.52-1.16 14.573", "fill", "#CBD1D1"], ["d", "M101.067 289.826s2.428 1.271 6.759.653c3.058-.437 3.712.481 7.423 1.031 3.712.55 10.724-.069 11.823-.894.413 1.1-.343 2.063-.343 2.063s-1.512.603-4.812.824c-2.03.136-5.8.291-7.607-.503-1.787-1.375-5.247-1.903-5.728-.241-3.918.95-7.355-.286-7.355-.286l-.16-2.647z", "fill", "#2B0849"], ["d", "M108.341 276.044h3.094s-.103 6.702 4.536 8.558c-4.64.618-8.558-2.303-7.63-8.558", "fill", "#A4AABA"], ["d", "M57.542 272.401s-2.107 7.416-4.485 12.306c-1.798 3.695-4.225 7.492 5.465 7.492 6.648 0 8.953-.48 7.423-6.599-1.53-6.12.266-13.199.266-13.199h-8.669z", "fill", "#CBD1D1"], ["d", "M51.476 289.793s2.097 1.169 6.633 1.169c6.083 0 8.249-1.65 8.249-1.65s.602 1.114-.619 2.165c-.993.855-3.597 1.591-7.39 1.546-4.145-.048-5.832-.566-6.736-1.168-.825-.55-.687-1.58-.137-2.062", "fill", "#2B0849"], ["d", "M58.419 274.304s.033 1.519-.314 2.93c-.349 1.42-1.078 3.104-1.13 4.139-.058 1.151 4.537 1.58 5.155.034.62-1.547 1.294-6.427 1.913-7.252.619-.825-4.903-2.119-5.624.15", "fill", "#A4AABA"], ["d", "M99.66 278.514l13.378.092s1.298-54.52 1.853-64.403c.554-9.882 3.776-43.364 1.002-63.128l-12.547-.644-22.849.78s-.434 3.966-1.195 9.976c-.063.496-.682.843-.749 1.365-.075.585.423 1.354.32 1.966-2.364 14.08-6.377 33.104-8.744 46.677-.116.666-1.234 1.009-1.458 2.691-.04.302.211 1.525.112 1.795-6.873 18.744-10.949 47.842-14.277 61.885l14.607-.014s2.197-8.57 4.03-16.97c2.811-12.886 23.111-85.01 23.111-85.01l3.016-.521 1.043 46.35s-.224 1.234.337 2.02c.56.785-.56 1.123-.392 2.244l.392 1.794s-.449 7.178-.898 11.89c-.448 4.71-.092 39.165-.092 39.165", "fill", "#7BB2F9"], ["d", "M76.085 221.626c1.153.094 4.038-2.019 6.955-4.935M106.36 225.142s2.774-1.11 6.103-3.883", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M107.275 222.1s2.773-1.11 6.102-3.884", "stroke", "#648BD8", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M74.74 224.767s2.622-.591 6.505-3.365M86.03 151.634c-.27 3.106.3 8.525-4.336 9.123M103.625 149.88s.11 14.012-1.293 15.065c-2.219 1.664-2.99 1.944-2.99 1.944M99.79 150.438s.035 12.88-1.196 24.377M93.673 175.911s7.212-1.664 9.431-1.664M74.31 205.861a212.013 212.013 0 0 1-.979 4.56s-1.458 1.832-1.009 3.776c.449 1.944-.947 2.045-4.985 15.355-1.696 5.59-4.49 18.591-6.348 27.597l-.231 1.12M75.689 197.807a320.934 320.934 0 0 1-.882 4.754M82.591 152.233L81.395 162.7s-1.097.15-.5 2.244c.113 1.346-2.674 15.775-5.18 30.43M56.12 274.418h13.31", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M116.241 148.22s-17.047-3.104-35.893.2c.158 2.514-.003 4.15-.003 4.15s14.687-2.818 35.67-.312c.252-2.355.226-4.038.226-4.038", "fill", "#192064"], ["d", "M106.322 151.165l.003-4.911a.81.81 0 0 0-.778-.815c-2.44-.091-5.066-.108-7.836-.014a.818.818 0 0 0-.789.815l-.003 4.906a.81.81 0 0 0 .831.813c2.385-.06 4.973-.064 7.73.017a.815.815 0 0 0 .842-.81", "fill", "#FFF"], ["d", "M105.207 150.233l.002-3.076a.642.642 0 0 0-.619-.646 94.321 94.321 0 0 0-5.866-.01.65.65 0 0 0-.63.647v3.072a.64.64 0 0 0 .654.644 121.12 121.12 0 0 1 5.794.011c.362.01.665-.28.665-.642", "fill", "#192064"], ["d", "M100.263 275.415h12.338M101.436 270.53c.006 3.387.042 5.79.111 6.506M101.451 264.548a915.75 915.75 0 0 0-.015 4.337M100.986 174.965l.898 44.642s.673 1.57-.225 2.692c-.897 1.122 2.468.673.898 2.243-1.57 1.57.897 1.122 0 3.365-.596 1.489-.994 21.1-1.096 35.146", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M46.876 83.427s-.516 6.045 7.223 5.552c11.2-.712 9.218-9.345 31.54-21.655-.786-2.708-2.447-4.744-2.447-4.744s-11.068 3.11-22.584 8.046c-6.766 2.9-13.395 6.352-13.732 12.801M104.46 91.057l.941-5.372-8.884-11.43-5.037 5.372-1.74 7.834a.321.321 0 0 0 .108.32c.965.8 6.5 5.013 14.347 3.544a.332.332 0 0 0 .264-.268", "fill", "#FFC6A0"], ["d", "M93.942 79.387s-4.533-2.853-2.432-6.855c1.623-3.09 4.513 1.133 4.513 1.133s.52-3.642 3.121-3.642c.52-1.04 1.561-4.162 1.561-4.162s11.445 2.601 13.526 3.121c0 5.203-2.304 19.424-7.84 19.861-8.892.703-12.449-9.456-12.449-9.456", "fill", "#FFC6A0"], ["d", "M113.874 73.446c2.601-2.081 3.47-9.722 3.47-9.722s-2.479-.49-6.64-2.05c-4.683-2.081-12.798-4.747-17.48.976-9.668 3.223-2.05 19.823-2.05 19.823l2.713-3.021s-3.935-3.287-2.08-6.243c2.17-3.462 3.92 1.073 3.92 1.073s.637-2.387 3.581-3.342c.355-.71 1.036-2.674 1.432-3.85a1.073 1.073 0 0 1 1.263-.704c2.4.558 8.677 2.019 11.356 2.662.522.125.871.615.82 1.15l-.305 3.248z", "fill", "#520038"], ["d", "M104.977 76.064c-.103.61-.582 1.038-1.07.956-.489-.083-.801-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.644.698 1.254M112.132 77.694c-.103.61-.582 1.038-1.07.956-.488-.083-.8-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.643.698 1.254", "fill", "#552950"], ["stroke", "#DB836E", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round", "d", "M110.13 74.84l-.896 1.61-.298 4.357h-2.228"], ["d", "M110.846 74.481s1.79-.716 2.506.537", "stroke", "#5C2552", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M92.386 74.282s.477-1.114 1.113-.716c.637.398 1.274 1.433.558 1.99-.717.556.159 1.67.159 1.67", "stroke", "#DB836E", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M103.287 72.93s1.83 1.113 4.137.954", "stroke", "#5C2552", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M103.685 81.762s2.227 1.193 4.376 1.193M104.64 84.308s.954.398 1.511.318M94.693 81.205s2.308 7.4 10.424 7.639", "stroke", "#DB836E", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M81.45 89.384s.45 5.647-4.935 12.787M69 82.654s-.726 9.282-8.204 14.206", "stroke", "#E4EBF7", "strokeWidth", "1.101", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M129.405 122.865s-5.272 7.403-9.422 10.768", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M119.306 107.329s.452 4.366-2.127 32.062", "stroke", "#E4EBF7", "strokeWidth", "1.101", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M150.028 151.232h-49.837a1.01 1.01 0 0 1-1.01-1.01v-31.688c0-.557.452-1.01 1.01-1.01h49.837c.558 0 1.01.453 1.01 1.01v31.688a1.01 1.01 0 0 1-1.01 1.01", "fill", "#F2D7AD"], ["d", "M150.29 151.232h-19.863v-33.707h20.784v32.786a.92.92 0 0 1-.92.92", "fill", "#F4D19D"], ["d", "M123.554 127.896H92.917a.518.518 0 0 1-.425-.816l6.38-9.113c.193-.277.51-.442.85-.442h31.092l-7.26 10.371z", "fill", "#F2D7AD"], ["fill", "#CC9B6E", "d", "M123.689 128.447H99.25v-.519h24.169l7.183-10.26.424.298z"], ["d", "M158.298 127.896h-18.669a2.073 2.073 0 0 1-1.659-.83l-7.156-9.541h19.965c.49 0 .95.23 1.244.622l6.69 8.92a.519.519 0 0 1-.415.83", "fill", "#F4D19D"], ["fill", "#CC9B6E", "d", "M157.847 128.479h-19.384l-7.857-10.475.415-.31 7.7 10.266h19.126zM130.554 150.685l-.032-8.177.519-.002.032 8.177z"], ["fill", "#CC9B6E", "d", "M130.511 139.783l-.08-21.414.519-.002.08 21.414zM111.876 140.932l-.498-.143 1.479-5.167.498.143zM108.437 141.06l-2.679-2.935 2.665-3.434.41.318-2.397 3.089 2.384 2.612zM116.607 141.06l-.383-.35 2.383-2.612-2.397-3.089.41-.318 2.665 3.434z"], ["d", "M154.316 131.892l-3.114-1.96.038 3.514-1.043.092c-1.682.115-3.634.23-4.789.23-1.902 0-2.693 2.258 2.23 2.648l-2.645-.596s-2.168 1.317.504 2.3c0 0-1.58 1.217.561 2.58-.584 3.504 5.247 4.058 7.122 3.59 1.876-.47 4.233-2.359 4.487-5.16.28-3.085-.89-5.432-3.35-7.238", "fill", "#FFC6A0"], ["d", "M153.686 133.577s-6.522.47-8.36.372c-1.836-.098-1.904 2.19 2.359 2.264 3.739.15 5.451-.044 5.451-.044", "stroke", "#DB836E", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M145.16 135.877c-1.85 1.346.561 2.355.561 2.355s3.478.898 6.73.617", "stroke", "#DB836E", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M151.89 141.71s-6.28.111-6.73-2.132c-.223-1.346.45-1.402.45-1.402M146.114 140.868s-1.103 3.16 5.44 3.533M151.202 129.932v3.477M52.838 89.286c3.533-.337 8.423-1.248 13.582-7.754", "stroke", "#DB836E", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M168.567 248.318a6.647 6.647 0 0 1-6.647-6.647v-66.466a6.647 6.647 0 1 1 13.294 0v66.466a6.647 6.647 0 0 1-6.647 6.647", "fill", "#5BA02E"], ["d", "M176.543 247.653a6.647 6.647 0 0 1-6.646-6.647v-33.232a6.647 6.647 0 1 1 13.293 0v33.232a6.647 6.647 0 0 1-6.647 6.647", "fill", "#92C110"], ["d", "M186.443 293.613H158.92a3.187 3.187 0 0 1-3.187-3.187v-46.134a3.187 3.187 0 0 1 3.187-3.187h27.524a3.187 3.187 0 0 1 3.187 3.187v46.134a3.187 3.187 0 0 1-3.187 3.187", "fill", "#F2D7AD"], ["d", "M88.979 89.48s7.776 5.384 16.6 2.842", "stroke", "#E4EBF7", "strokeWidth", "1.101", "strokeLinecap", "round", "strokeLinejoin", "round"]], template: function NzResultNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 2)(4, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mask", 4)(6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6)(8, "path", 7)(9, "path", 8)(10, "path", 9)(11, "path", 10)(12, "path", 11)(13, "path", 12)(14, "path", 13)(15, "path", 14)(16, "path", 15)(17, "path", 16)(18, "path", 17)(19, "path", 18)(20, "path", 19)(21, "path", 20)(22, "path", 21)(23, "path", 22)(24, "path", 23)(25, "path", 24)(26, "path", 25)(27, "path", 26)(28, "path", 27)(29, "path", 28)(30, "path", 29)(31, "path", 30)(32, "path", 31)(33, "path", 32)(34, "path", 33)(35, "path", 34)(36, "path", 35)(37, "path", 36)(38, "path", 37)(39, "path", 38)(40, "path", 39)(41, "path", 40)(42, "path", 41)(43, "path", 42)(44, "path", 43)(45, "path", 44)(46, "path", 45)(47, "path", 46)(48, "path", 47)(49, "path", 48)(50, "path", 49)(51, "path", 50)(52, "path", 51)(53, "path", 52)(54, "path", 53)(55, "path", 54)(56, "path", 55)(57, "path", 56)(58, "path", 57)(59, "path", 58)(60, "path", 59)(61, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                selector: 'nz-result-not-found',
                exportAs: 'nzResultNotFound',
                template: `
    <svg width="252" height="294">
      <defs>
        <path d="M0 .387h251.772v251.772H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 .012)">
          <mask fill="#fff" />
          <path
            d="M0 127.32v-2.095C0 56.279 55.892.387 124.838.387h2.096c68.946 0 124.838 55.892 124.838 124.838v2.096c0 68.946-55.892 124.838-124.838 124.838h-2.096C55.892 252.16 0 196.267 0 127.321"
            fill="#E4EBF7"
            mask="url(#b)"
          />
        </g>
        <path d="M39.755 130.84a8.276 8.276 0 1 1-16.468-1.66 8.276 8.276 0 0 1 16.468 1.66" fill="#FFF" />
        <path d="M36.975 134.297l10.482 5.943M48.373 146.508l-12.648 10.788" stroke="#FFF" strokeWidth="2" />
        <path
          d="M39.875 159.352a5.667 5.667 0 1 1-11.277-1.136 5.667 5.667 0 0 1 11.277 1.136M57.588 143.247a5.708 5.708 0 1 1-11.358-1.145 5.708 5.708 0 0 1 11.358 1.145M99.018 26.875l29.82-.014a4.587 4.587 0 1 0-.003-9.175l-29.82.013a4.587 4.587 0 1 0 .003 9.176M110.424 45.211l29.82-.013a4.588 4.588 0 0 0-.004-9.175l-29.82.013a4.587 4.587 0 1 0 .004 9.175"
          fill="#FFF"
        />
        <path
          d="M112.798 26.861v-.002l15.784-.006a4.588 4.588 0 1 0 .003 9.175l-15.783.007v-.002a4.586 4.586 0 0 0-.004-9.172M184.523 135.668c-.553 5.485-5.447 9.483-10.931 8.93-5.485-.553-9.483-5.448-8.93-10.932.552-5.485 5.447-9.483 10.932-8.93 5.485.553 9.483 5.447 8.93 10.932"
          fill="#FFF"
        />
        <path d="M179.26 141.75l12.64 7.167M193.006 156.477l-15.255 13.011" par stroke="#FFF" strokeWidth="2" />
        <path
          d="M184.668 170.057a6.835 6.835 0 1 1-13.6-1.372 6.835 6.835 0 0 1 13.6 1.372M203.34 153.325a6.885 6.885 0 1 1-13.7-1.382 6.885 6.885 0 0 1 13.7 1.382"
          fill="#FFF"
        />
        <path
          d="M151.931 192.324a2.222 2.222 0 1 1-4.444 0 2.222 2.222 0 0 1 4.444 0zM225.27 116.056a2.222 2.222 0 1 1-4.445 0 2.222 2.222 0 0 1 4.444 0zM216.38 151.08a2.223 2.223 0 1 1-4.446-.001 2.223 2.223 0 0 1 4.446 0zM176.917 107.636a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM195.291 92.165a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM202.058 180.711a2.223 2.223 0 1 1-4.446 0 2.223 2.223 0 0 1 4.446 0z"
          stroke="#FFF"
          strokeWidth="2"
        />
        <path
          stroke="#FFF"
          strokeWidth="2"
          d="M214.404 153.302l-1.912 20.184-10.928 5.99M173.661 174.792l-6.356 9.814h-11.36l-4.508 6.484M174.941 125.168v-15.804M220.824 117.25l-12.84 7.901-15.31-7.902V94.39"
        />
        <path
          d="M166.588 65.936h-3.951a4.756 4.756 0 0 1-4.743-4.742 4.756 4.756 0 0 1 4.743-4.743h3.951a4.756 4.756 0 0 1 4.743 4.743 4.756 4.756 0 0 1-4.743 4.742"
          fill="#FFF"
        />
        <path
          d="M174.823 30.03c0-16.281 13.198-29.48 29.48-29.48 16.28 0 29.48 13.199 29.48 29.48 0 16.28-13.2 29.48-29.48 29.48-16.282 0-29.48-13.2-29.48-29.48"
          fill="#1890FF"
        />
        <path
          d="M205.952 38.387c.5.5.785 1.142.785 1.928s-.286 1.465-.785 1.964c-.572.5-1.214.75-2 .75-.785 0-1.429-.285-1.929-.785-.572-.5-.82-1.143-.82-1.929s.248-1.428.82-1.928c.5-.5 1.144-.75 1.93-.75.785 0 1.462.25 1.999.75m4.285-19.463c1.428 1.249 2.143 2.963 2.143 5.142 0 1.712-.427 3.13-1.219 4.25-.067.096-.137.18-.218.265-.416.429-1.41 1.346-2.956 2.699a5.07 5.07 0 0 0-1.428 1.75 5.207 5.207 0 0 0-.536 2.357v.5h-4.107v-.5c0-1.357.215-2.536.714-3.5.464-.964 1.857-2.464 4.178-4.536l.43-.5c.643-.785.964-1.643.964-2.535 0-1.18-.358-2.108-1-2.785-.678-.68-1.643-1.001-2.858-1.001-1.536 0-2.642.464-3.357 1.43-.37.5-.621 1.135-.76 1.904a1.999 1.999 0 0 1-1.971 1.63h-.004c-1.277 0-2.257-1.183-1.98-2.43.337-1.518 1.02-2.78 2.073-3.784 1.536-1.5 3.607-2.25 6.25-2.25 2.32 0 4.214.607 5.642 1.894"
          fill="#FFF"
        />
        <path
          d="M52.04 76.131s21.81 5.36 27.307 15.945c5.575 10.74-6.352 9.26-15.73 4.935-10.86-5.008-24.7-11.822-11.577-20.88"
          fill="#FFB594"
        />
        <path
          d="M90.483 67.504l-.449 2.893c-.753.49-4.748-2.663-4.748-2.663l-1.645.748-1.346-5.684s6.815-4.589 8.917-5.018c2.452-.501 9.884.94 10.7 2.278 0 0 1.32.486-2.227.69-3.548.203-5.043.447-6.79 3.132-1.747 2.686-2.412 3.624-2.412 3.624"
          fill="#FFC6A0"
        />
        <path
          d="M128.055 111.367c-2.627-7.724-6.15-13.18-8.917-15.478-3.5-2.906-9.34-2.225-11.366-4.187-1.27-1.231-3.215-1.197-3.215-1.197s-14.98-3.158-16.828-3.479c-2.37-.41-2.124-.714-6.054-1.405-1.57-1.907-2.917-1.122-2.917-1.122l-7.11-1.383c-.853-1.472-2.423-1.023-2.423-1.023l-2.468-.897c-1.645 9.976-7.74 13.796-7.74 13.796 1.795 1.122 15.703 8.3 15.703 8.3l5.107 37.11s-3.321 5.694 1.346 9.109c0 0 19.883-3.743 34.921-.329 0 0 3.047-2.546.972-8.806.523-3.01 1.394-8.263 1.736-11.622.385.772 2.019 1.918 3.14 3.477 0 0 9.407-7.365 11.052-14.012-.832-.723-1.598-1.585-2.267-2.453-.567-.736-.358-2.056-.765-2.717-.669-1.084-1.804-1.378-1.907-1.682"
          fill="#FFF"
        />
        <path
          d="M101.09 289.998s4.295 2.041 7.354 1.021c2.821-.94 4.53.668 7.08 1.178 2.55.51 6.874 1.1 11.686-1.26-.103-5.51-6.889-3.98-11.96-6.713-2.563-1.38-3.784-4.722-3.598-8.799h-9.402s-1.392 10.52-1.16 14.573"
          fill="#CBD1D1"
        />
        <path
          d="M101.067 289.826s2.428 1.271 6.759.653c3.058-.437 3.712.481 7.423 1.031 3.712.55 10.724-.069 11.823-.894.413 1.1-.343 2.063-.343 2.063s-1.512.603-4.812.824c-2.03.136-5.8.291-7.607-.503-1.787-1.375-5.247-1.903-5.728-.241-3.918.95-7.355-.286-7.355-.286l-.16-2.647z"
          fill="#2B0849"
        />
        <path d="M108.341 276.044h3.094s-.103 6.702 4.536 8.558c-4.64.618-8.558-2.303-7.63-8.558" fill="#A4AABA" />
        <path
          d="M57.542 272.401s-2.107 7.416-4.485 12.306c-1.798 3.695-4.225 7.492 5.465 7.492 6.648 0 8.953-.48 7.423-6.599-1.53-6.12.266-13.199.266-13.199h-8.669z"
          fill="#CBD1D1"
        />
        <path
          d="M51.476 289.793s2.097 1.169 6.633 1.169c6.083 0 8.249-1.65 8.249-1.65s.602 1.114-.619 2.165c-.993.855-3.597 1.591-7.39 1.546-4.145-.048-5.832-.566-6.736-1.168-.825-.55-.687-1.58-.137-2.062"
          fill="#2B0849"
        />
        <path
          d="M58.419 274.304s.033 1.519-.314 2.93c-.349 1.42-1.078 3.104-1.13 4.139-.058 1.151 4.537 1.58 5.155.034.62-1.547 1.294-6.427 1.913-7.252.619-.825-4.903-2.119-5.624.15"
          fill="#A4AABA"
        />
        <path
          d="M99.66 278.514l13.378.092s1.298-54.52 1.853-64.403c.554-9.882 3.776-43.364 1.002-63.128l-12.547-.644-22.849.78s-.434 3.966-1.195 9.976c-.063.496-.682.843-.749 1.365-.075.585.423 1.354.32 1.966-2.364 14.08-6.377 33.104-8.744 46.677-.116.666-1.234 1.009-1.458 2.691-.04.302.211 1.525.112 1.795-6.873 18.744-10.949 47.842-14.277 61.885l14.607-.014s2.197-8.57 4.03-16.97c2.811-12.886 23.111-85.01 23.111-85.01l3.016-.521 1.043 46.35s-.224 1.234.337 2.02c.56.785-.56 1.123-.392 2.244l.392 1.794s-.449 7.178-.898 11.89c-.448 4.71-.092 39.165-.092 39.165"
          fill="#7BB2F9"
        />
        <path
          d="M76.085 221.626c1.153.094 4.038-2.019 6.955-4.935M106.36 225.142s2.774-1.11 6.103-3.883"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M107.275 222.1s2.773-1.11 6.102-3.884" stroke="#648BD8" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M74.74 224.767s2.622-.591 6.505-3.365M86.03 151.634c-.27 3.106.3 8.525-4.336 9.123M103.625 149.88s.11 14.012-1.293 15.065c-2.219 1.664-2.99 1.944-2.99 1.944M99.79 150.438s.035 12.88-1.196 24.377M93.673 175.911s7.212-1.664 9.431-1.664M74.31 205.861a212.013 212.013 0 0 1-.979 4.56s-1.458 1.832-1.009 3.776c.449 1.944-.947 2.045-4.985 15.355-1.696 5.59-4.49 18.591-6.348 27.597l-.231 1.12M75.689 197.807a320.934 320.934 0 0 1-.882 4.754M82.591 152.233L81.395 162.7s-1.097.15-.5 2.244c.113 1.346-2.674 15.775-5.18 30.43M56.12 274.418h13.31"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M116.241 148.22s-17.047-3.104-35.893.2c.158 2.514-.003 4.15-.003 4.15s14.687-2.818 35.67-.312c.252-2.355.226-4.038.226-4.038"
          fill="#192064"
        />
        <path
          d="M106.322 151.165l.003-4.911a.81.81 0 0 0-.778-.815c-2.44-.091-5.066-.108-7.836-.014a.818.818 0 0 0-.789.815l-.003 4.906a.81.81 0 0 0 .831.813c2.385-.06 4.973-.064 7.73.017a.815.815 0 0 0 .842-.81"
          fill="#FFF"
        />
        <path
          d="M105.207 150.233l.002-3.076a.642.642 0 0 0-.619-.646 94.321 94.321 0 0 0-5.866-.01.65.65 0 0 0-.63.647v3.072a.64.64 0 0 0 .654.644 121.12 121.12 0 0 1 5.794.011c.362.01.665-.28.665-.642"
          fill="#192064"
        />
        <path
          d="M100.263 275.415h12.338M101.436 270.53c.006 3.387.042 5.79.111 6.506M101.451 264.548a915.75 915.75 0 0 0-.015 4.337M100.986 174.965l.898 44.642s.673 1.57-.225 2.692c-.897 1.122 2.468.673.898 2.243-1.57 1.57.897 1.122 0 3.365-.596 1.489-.994 21.1-1.096 35.146"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.876 83.427s-.516 6.045 7.223 5.552c11.2-.712 9.218-9.345 31.54-21.655-.786-2.708-2.447-4.744-2.447-4.744s-11.068 3.11-22.584 8.046c-6.766 2.9-13.395 6.352-13.732 12.801M104.46 91.057l.941-5.372-8.884-11.43-5.037 5.372-1.74 7.834a.321.321 0 0 0 .108.32c.965.8 6.5 5.013 14.347 3.544a.332.332 0 0 0 .264-.268"
          fill="#FFC6A0"
        />
        <path
          d="M93.942 79.387s-4.533-2.853-2.432-6.855c1.623-3.09 4.513 1.133 4.513 1.133s.52-3.642 3.121-3.642c.52-1.04 1.561-4.162 1.561-4.162s11.445 2.601 13.526 3.121c0 5.203-2.304 19.424-7.84 19.861-8.892.703-12.449-9.456-12.449-9.456"
          fill="#FFC6A0"
        />
        <path
          d="M113.874 73.446c2.601-2.081 3.47-9.722 3.47-9.722s-2.479-.49-6.64-2.05c-4.683-2.081-12.798-4.747-17.48.976-9.668 3.223-2.05 19.823-2.05 19.823l2.713-3.021s-3.935-3.287-2.08-6.243c2.17-3.462 3.92 1.073 3.92 1.073s.637-2.387 3.581-3.342c.355-.71 1.036-2.674 1.432-3.85a1.073 1.073 0 0 1 1.263-.704c2.4.558 8.677 2.019 11.356 2.662.522.125.871.615.82 1.15l-.305 3.248z"
          fill="#520038"
        />
        <path
          d="M104.977 76.064c-.103.61-.582 1.038-1.07.956-.489-.083-.801-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.644.698 1.254M112.132 77.694c-.103.61-.582 1.038-1.07.956-.488-.083-.8-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.643.698 1.254"
          fill="#552950"
        />
        <path
          stroke="#DB836E"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M110.13 74.84l-.896 1.61-.298 4.357h-2.228"
        />
        <path
          d="M110.846 74.481s1.79-.716 2.506.537"
          stroke="#5C2552"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M92.386 74.282s.477-1.114 1.113-.716c.637.398 1.274 1.433.558 1.99-.717.556.159 1.67.159 1.67"
          stroke="#DB836E"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M103.287 72.93s1.83 1.113 4.137.954"
          stroke="#5C2552"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M103.685 81.762s2.227 1.193 4.376 1.193M104.64 84.308s.954.398 1.511.318M94.693 81.205s2.308 7.4 10.424 7.639"
          stroke="#DB836E"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M81.45 89.384s.45 5.647-4.935 12.787M69 82.654s-.726 9.282-8.204 14.206"
          stroke="#E4EBF7"
          strokeWidth="1.101"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M129.405 122.865s-5.272 7.403-9.422 10.768"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M119.306 107.329s.452 4.366-2.127 32.062"
          stroke="#E4EBF7"
          strokeWidth="1.101"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M150.028 151.232h-49.837a1.01 1.01 0 0 1-1.01-1.01v-31.688c0-.557.452-1.01 1.01-1.01h49.837c.558 0 1.01.453 1.01 1.01v31.688a1.01 1.01 0 0 1-1.01 1.01"
          fill="#F2D7AD"
        />
        <path d="M150.29 151.232h-19.863v-33.707h20.784v32.786a.92.92 0 0 1-.92.92" fill="#F4D19D" />
        <path
          d="M123.554 127.896H92.917a.518.518 0 0 1-.425-.816l6.38-9.113c.193-.277.51-.442.85-.442h31.092l-7.26 10.371z"
          fill="#F2D7AD"
        />
        <path fill="#CC9B6E" d="M123.689 128.447H99.25v-.519h24.169l7.183-10.26.424.298z" />
        <path
          d="M158.298 127.896h-18.669a2.073 2.073 0 0 1-1.659-.83l-7.156-9.541h19.965c.49 0 .95.23 1.244.622l6.69 8.92a.519.519 0 0 1-.415.83"
          fill="#F4D19D"
        />
        <path
          fill="#CC9B6E"
          d="M157.847 128.479h-19.384l-7.857-10.475.415-.31 7.7 10.266h19.126zM130.554 150.685l-.032-8.177.519-.002.032 8.177z"
        />
        <path
          fill="#CC9B6E"
          d="M130.511 139.783l-.08-21.414.519-.002.08 21.414zM111.876 140.932l-.498-.143 1.479-5.167.498.143zM108.437 141.06l-2.679-2.935 2.665-3.434.41.318-2.397 3.089 2.384 2.612zM116.607 141.06l-.383-.35 2.383-2.612-2.397-3.089.41-.318 2.665 3.434z"
        />
        <path
          d="M154.316 131.892l-3.114-1.96.038 3.514-1.043.092c-1.682.115-3.634.23-4.789.23-1.902 0-2.693 2.258 2.23 2.648l-2.645-.596s-2.168 1.317.504 2.3c0 0-1.58 1.217.561 2.58-.584 3.504 5.247 4.058 7.122 3.59 1.876-.47 4.233-2.359 4.487-5.16.28-3.085-.89-5.432-3.35-7.238"
          fill="#FFC6A0"
        />
        <path
          d="M153.686 133.577s-6.522.47-8.36.372c-1.836-.098-1.904 2.19 2.359 2.264 3.739.15 5.451-.044 5.451-.044"
          stroke="#DB836E"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M145.16 135.877c-1.85 1.346.561 2.355.561 2.355s3.478.898 6.73.617"
          stroke="#DB836E"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M151.89 141.71s-6.28.111-6.73-2.132c-.223-1.346.45-1.402.45-1.402M146.114 140.868s-1.103 3.16 5.44 3.533M151.202 129.932v3.477M52.838 89.286c3.533-.337 8.423-1.248 13.582-7.754"
          stroke="#DB836E"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M168.567 248.318a6.647 6.647 0 0 1-6.647-6.647v-66.466a6.647 6.647 0 1 1 13.294 0v66.466a6.647 6.647 0 0 1-6.647 6.647"
          fill="#5BA02E"
        />
        <path
          d="M176.543 247.653a6.647 6.647 0 0 1-6.646-6.647v-33.232a6.647 6.647 0 1 1 13.293 0v33.232a6.647 6.647 0 0 1-6.647 6.647"
          fill="#92C110"
        />
        <path
          d="M186.443 293.613H158.92a3.187 3.187 0 0 1-3.187-3.187v-46.134a3.187 3.187 0 0 1 3.187-3.187h27.524a3.187 3.187 0 0 1 3.187 3.187v46.134a3.187 3.187 0 0 1-3.187 3.187"
          fill="#F2D7AD"
        />
        <path
          d="M88.979 89.48s7.776 5.384 16.6 2.842"
          stroke="#E4EBF7"
          strokeWidth="1.101"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResultServerErrorComponent {
}
NzResultServerErrorComponent.ɵfac = function NzResultServerErrorComponent_Factory(t) { return new (t || NzResultServerErrorComponent)(); };
NzResultServerErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzResultServerErrorComponent, selectors: [["nz-result-server-error"]], exportAs: ["nzResultServerError"], decls: 69, vars: 0, consts: [["width", "254", "height", "294"], ["d", "M0 .335h253.49v253.49H0z"], ["d", "M0 293.665h253.49V.401H0z"], ["fill", "none", "fillRule", "evenodd"], ["transform", "translate(0 .067)"], ["fill", "#fff"], ["d", "M0 128.134v-2.11C0 56.608 56.273.334 125.69.334h2.11c69.416 0 125.69 56.274 125.69 125.69v2.11c0 69.417-56.274 125.69-125.69 125.69h-2.11C56.273 253.824 0 197.551 0 128.134", "fill", "#E4EBF7", "mask", "url(#b)"], ["d", "M39.989 132.108a8.332 8.332 0 1 1-16.581-1.671 8.332 8.332 0 0 1 16.58 1.671", "fill", "#FFF"], ["d", "M37.19 135.59l10.553 5.983M48.665 147.884l-12.734 10.861", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M40.11 160.816a5.706 5.706 0 1 1-11.354-1.145 5.706 5.706 0 0 1 11.354 1.145M57.943 144.6a5.747 5.747 0 1 1-11.436-1.152 5.747 5.747 0 0 1 11.436 1.153M99.656 27.434l30.024-.013a4.619 4.619 0 1 0-.004-9.238l-30.024.013a4.62 4.62 0 0 0 .004 9.238M111.14 45.896l30.023-.013a4.62 4.62 0 1 0-.004-9.238l-30.024.013a4.619 4.619 0 1 0 .004 9.238", "fill", "#FFF"], ["d", "M113.53 27.421v-.002l15.89-.007a4.619 4.619 0 1 0 .005 9.238l-15.892.007v-.002a4.618 4.618 0 0 0-.004-9.234M150.167 70.091h-3.979a4.789 4.789 0 0 1-4.774-4.775 4.788 4.788 0 0 1 4.774-4.774h3.979a4.789 4.789 0 0 1 4.775 4.774 4.789 4.789 0 0 1-4.775 4.775", "fill", "#FFF"], ["d", "M171.687 30.234c0-16.392 13.289-29.68 29.681-29.68 16.392 0 29.68 13.288 29.68 29.68 0 16.393-13.288 29.681-29.68 29.681s-29.68-13.288-29.68-29.68", "fill", "#FF603B"], ["d", "M203.557 19.435l-.676 15.035a1.514 1.514 0 0 1-3.026 0l-.675-15.035a2.19 2.19 0 1 1 4.377 0m-.264 19.378c.513.477.77 1.1.77 1.87s-.257 1.393-.77 1.907c-.55.476-1.21.733-1.943.733a2.545 2.545 0 0 1-1.87-.77c-.55-.514-.806-1.136-.806-1.87 0-.77.256-1.393.806-1.87.513-.513 1.137-.733 1.87-.733.77 0 1.43.22 1.943.733", "fill", "#FFF"], ["d", "M119.3 133.275c4.426-.598 3.612-1.204 4.079-4.778.675-5.18-3.108-16.935-8.262-25.118-1.088-10.72-12.598-11.24-12.598-11.24s4.312 4.895 4.196 16.199c1.398 5.243.804 14.45.804 14.45s5.255 11.369 11.78 10.487", "fill", "#FFB594"], ["d", "M100.944 91.61s1.463-.583 3.211.582c8.08 1.398 10.368 6.706 11.3 11.368 1.864 1.282 1.864 2.33 1.864 3.496.365.777 1.515 3.03 1.515 3.03s-7.225 1.748-10.954 6.758c-1.399-6.41-6.936-25.235-6.936-25.235", "fill", "#FFF"], ["d", "M94.008 90.5l1.019-5.815-9.23-11.874-5.233 5.581-2.593 9.863s8.39 5.128 16.037 2.246", "fill", "#FFB594"], ["d", "M82.931 78.216s-4.557-2.868-2.445-6.892c1.632-3.107 4.537 1.139 4.537 1.139s.524-3.662 3.139-3.662c.523-1.046 1.569-4.184 1.569-4.184s11.507 2.615 13.6 3.138c-.001 5.23-2.317 19.529-7.884 19.969-8.94.706-12.516-9.508-12.516-9.508", "fill", "#FFC6A0"], ["d", "M102.971 72.243c2.616-2.093 3.489-9.775 3.489-9.775s-2.492-.492-6.676-2.062c-4.708-2.092-12.867-4.771-17.575.982-9.54 4.41-2.062 19.93-2.062 19.93l2.729-3.037s-3.956-3.304-2.092-6.277c2.183-3.48 3.943 1.08 3.943 1.08s.64-2.4 3.6-3.36c.356-.714 1.04-2.69 1.44-3.872a1.08 1.08 0 0 1 1.27-.707c2.41.56 8.723 2.03 11.417 2.676.524.126.876.619.825 1.156l-.308 3.266z", "fill", "#520038"], ["d", "M101.22 76.514c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.961.491.083.805.647.702 1.26M94.26 75.074c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.96.491.082.805.646.702 1.26", "fill", "#552950"], ["stroke", "#DB836E", "strokeWidth", "1.063", "strokeLinecap", "round", "strokeLinejoin", "round", "d", "M99.206 73.644l-.9 1.62-.3 4.38h-2.24"], ["d", "M99.926 73.284s1.8-.72 2.52.54", "stroke", "#5C2552", "strokeWidth", "1.117", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M81.367 73.084s.48-1.12 1.12-.72c.64.4 1.28 1.44.56 2s.16 1.68.16 1.68", "stroke", "#DB836E", "strokeWidth", "1.117", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M92.326 71.724s1.84 1.12 4.16.96", "stroke", "#5C2552", "strokeWidth", "1.117", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M92.726 80.604s2.24 1.2 4.4 1.2M93.686 83.164s.96.4 1.52.32M83.687 80.044s1.786 6.547 9.262 7.954", "stroke", "#DB836E", "strokeWidth", "1.063", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M95.548 91.663s-1.068 2.821-8.298 2.105c-7.23-.717-10.29-5.044-10.29-5.044", "stroke", "#E4EBF7", "strokeWidth", "1.136", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M78.126 87.478s6.526 4.972 16.47 2.486c0 0 9.577 1.02 11.536 5.322 5.36 11.77.543 36.835 0 39.962 3.496 4.055-.466 8.483-.466 8.483-15.624-3.548-35.81-.6-35.81-.6-4.849-3.546-1.223-9.044-1.223-9.044L62.38 110.32c-2.485-15.227.833-19.803 3.549-20.743 3.03-1.049 8.04-1.282 8.04-1.282.496-.058 1.08-.076 1.37-.233 2.36-1.282 2.787-.583 2.787-.583", "fill", "#FFF"], ["d", "M65.828 89.81s-6.875.465-7.59 8.156c-.466 8.857 3.03 10.954 3.03 10.954s6.075 22.102 16.796 22.957c8.39-2.176 4.758-6.702 4.661-11.42-.233-11.304-7.108-16.897-7.108-16.897s-4.212-13.75-9.789-13.75", "fill", "#FFC6A0"], ["d", "M71.716 124.225s.855 11.264 9.828 6.486c4.765-2.536 7.581-13.828 9.789-22.568 1.456-5.768 2.58-12.197 2.58-12.197l-4.973-1.709s-2.408 5.516-7.769 12.275c-4.335 5.467-9.144 11.11-9.455 17.713", "fill", "#FFC6A0"], ["d", "M108.463 105.191s1.747 2.724-2.331 30.535c2.376 2.216 1.053 6.012-.233 7.51", "stroke", "#E4EBF7", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M123.262 131.527s-.427 2.732-11.77 1.981c-15.187-1.006-25.326-3.25-25.326-3.25l.933-5.8s.723.215 9.71-.068c11.887-.373 18.714-6.07 24.964-1.022 4.039 3.263 1.489 8.16 1.489 8.16", "fill", "#FFC6A0"], ["d", "M70.24 90.974s-5.593-4.739-11.054 2.68c-3.318 7.223.517 15.284 2.664 19.578-.31 3.729 2.33 4.311 2.33 4.311s.108.895 1.516 2.68c4.078-7.03 6.72-9.166 13.711-12.546-.328-.656-1.877-3.265-1.825-3.767.175-1.69-1.282-2.623-1.282-2.623s-.286-.156-1.165-2.738c-.788-2.313-2.036-5.177-4.895-7.575", "fill", "#FFF"], ["d", "M90.232 288.027s4.855 2.308 8.313 1.155c3.188-1.063 5.12.755 8.002 1.331 2.881.577 7.769 1.243 13.207-1.424-.117-6.228-7.786-4.499-13.518-7.588-2.895-1.56-4.276-5.336-4.066-9.944H91.544s-1.573 11.89-1.312 16.47", "fill", "#CBD1D1"], ["d", "M90.207 287.833s2.745 1.437 7.639.738c3.456-.494 3.223.66 7.418 1.282 4.195.621 13.092-.194 14.334-1.126.466 1.242-.388 2.33-.388 2.33s-1.709.682-5.438.932c-2.295.154-8.098.276-10.14-.621-2.02-1.554-4.894-1.515-6.06-.234-4.427 1.075-7.184-.31-7.184-.31l-.181-2.991z", "fill", "#2B0849"], ["d", "M98.429 272.257h3.496s-.117 7.574 5.127 9.671c-5.244.7-9.672-2.602-8.623-9.671", "fill", "#A4AABA"], ["d", "M44.425 272.046s-2.208 7.774-4.702 12.899c-1.884 3.874-4.428 7.854 5.729 7.854 6.97 0 9.385-.503 7.782-6.917-1.604-6.415.279-13.836.279-13.836h-9.088z", "fill", "#CBD1D1"], ["d", "M38.066 290.277s2.198 1.225 6.954 1.225c6.376 0 8.646-1.73 8.646-1.73s.63 1.168-.649 2.27c-1.04.897-3.77 1.668-7.745 1.621-4.347-.05-6.115-.593-7.062-1.224-.864-.577-.72-1.657-.144-2.162", "fill", "#2B0849"], ["d", "M45.344 274.041s.035 1.592-.329 3.07c-.365 1.49-1.13 3.255-1.184 4.34-.061 1.206 4.755 1.657 5.403.036.65-1.622 1.357-6.737 2.006-7.602.648-.865-5.14-2.222-5.896.156", "fill", "#A4AABA"], ["d", "M89.476 277.57l13.899.095s1.349-56.643 1.925-66.909c.576-10.267 3.923-45.052 1.042-65.585l-13.037-.669-23.737.81s-.452 4.12-1.243 10.365c-.065.515-.708.874-.777 1.417-.078.608.439 1.407.332 2.044-2.455 14.627-5.797 32.736-8.256 46.837-.121.693-1.282 1.048-1.515 2.796-.042.314.22 1.584.116 1.865-7.14 19.473-12.202 52.601-15.66 67.19l15.176-.015s2.282-10.145 4.185-18.871c2.922-13.389 24.012-88.32 24.012-88.32l3.133-.954-.158 48.568s-.233 1.282.35 2.098c.583.815-.581 1.167-.408 2.331l.408 1.864s-.466 7.458-.932 12.352c-.467 4.895 1.145 40.69 1.145 40.69", "fill", "#7BB2F9"], ["d", "M64.57 218.881c1.197.099 4.195-2.097 7.225-5.127M96.024 222.534s2.881-1.152 6.34-4.034", "stroke", "#648BD8", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M96.973 219.373s2.882-1.153 6.34-4.034", "stroke", "#648BD8", "strokeWidth", "1.032", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M63.172 222.144s2.724-.614 6.759-3.496M74.903 146.166c-.281 3.226.31 8.856-4.506 9.478M93.182 144.344s.115 14.557-1.344 15.65c-2.305 1.73-3.107 2.02-3.107 2.02M89.197 144.923s.269 13.144-1.01 25.088M83.525 170.71s6.81-1.051 9.116-1.051M46.026 270.045l-.892 4.538M46.937 263.289l-.815 4.157M62.725 202.503c-.33 1.618-.102 1.904-.449 3.438 0 0-2.756 1.903-2.29 3.923.466 2.02-.31 3.424-4.505 17.252-1.762 5.807-4.233 18.922-6.165 28.278-.03.144-.521 2.646-1.14 5.8M64.158 194.136c-.295 1.658-.6 3.31-.917 4.938M71.33 146.787l-1.244 10.877s-1.14.155-.519 2.33c.117 1.399-2.778 16.39-5.382 31.615M44.242 273.727H58.07", "stroke", "#648BD8", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M106.18 142.117c-3.028-.489-18.825-2.744-36.219.2a.625.625 0 0 0-.518.644c.063 1.307.044 2.343.015 2.995a.617.617 0 0 0 .716.636c3.303-.534 17.037-2.412 35.664-.266.347.04.66-.214.692-.56.124-1.347.16-2.425.17-3.029a.616.616 0 0 0-.52-.62", "fill", "#192064"], ["d", "M96.398 145.264l.003-5.102a.843.843 0 0 0-.809-.847 114.104 114.104 0 0 0-8.141-.014.85.85 0 0 0-.82.847l-.003 5.097c0 .476.388.857.864.845 2.478-.064 5.166-.067 8.03.017a.848.848 0 0 0 .876-.843", "fill", "#FFF"], ["d", "M95.239 144.296l.002-3.195a.667.667 0 0 0-.643-.672c-1.9-.061-3.941-.073-6.094-.01a.675.675 0 0 0-.654.672l-.002 3.192c0 .376.305.677.68.669 1.859-.042 3.874-.043 6.02.012.376.01.69-.291.691-.668", "fill", "#192064"], ["d", "M90.102 273.522h12.819M91.216 269.761c.006 3.519-.072 5.55 0 6.292M90.923 263.474c-.009 1.599-.016 2.558-.016 4.505M90.44 170.404l.932 46.38s.7 1.631-.233 2.796c-.932 1.166 2.564.7.932 2.33-1.63 1.633.933 1.166 0 3.497-.618 1.546-1.031 21.921-1.138 36.513", "stroke", "#648BD8", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M73.736 98.665l2.214 4.312s2.098.816 1.865 2.68l.816 2.214M64.297 116.611c.233-.932 2.176-7.147 12.585-10.488M77.598 90.042s7.691 6.137 16.547 2.72", "stroke", "#E4EBF7", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M91.974 86.954s5.476-.816 7.574-4.545c1.297-.345.72 2.212-.33 3.671-.7.971-1.01 1.554-1.01 1.554s.194.31.155.816c-.053.697-.175.653-.272 1.048-.081.335.108.657 0 1.049-.046.17-.198.5-.382.878-.12.249-.072.687-.2.948-.231.469-1.562 1.87-2.622 2.855-3.826 3.554-5.018 1.644-6.001-.408-.894-1.865-.661-5.127-.874-6.875-.35-2.914-2.622-3.03-1.923-4.429.343-.685 2.87.69 3.263 1.748.757 2.04 2.952 1.807 2.622 1.69", "fill", "#FFC6A0"], ["d", "M99.8 82.429c-.465.077-.35.272-.97 1.243-.622.971-4.817 2.932-6.39 3.224-2.589.48-2.278-1.56-4.254-2.855-1.69-1.107-3.562-.638-1.398 1.398.99.932.932 1.107 1.398 3.205.335 1.506-.64 3.67.7 5.593", "stroke", "#DB836E", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M79.543 108.673c-2.1 2.926-4.266 6.175-5.557 8.762", "stroke", "#E59788", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M87.72 124.768s-2.098-1.942-5.127-2.719c-3.03-.777-3.574-.155-5.516.078-1.942.233-3.885-.932-3.652.7.233 1.63 5.05 1.01 5.206 2.097.155 1.087-6.37 2.796-8.313 2.175-.777.777.466 1.864 2.02 2.175.233 1.554 2.253 1.554 2.253 1.554s.699 1.01 2.641 1.088c2.486 1.32 8.934-.7 10.954-1.554 2.02-.855-.466-5.594-.466-5.594", "fill", "#FFC6A0"], ["d", "M73.425 122.826s.66 1.127 3.167 1.418c2.315.27 2.563.583 2.563.583s-2.545 2.894-9.07 2.272M72.416 129.274s3.826.097 4.933-.718M74.98 130.75s1.961.136 3.36-.505M77.232 131.916s1.748.019 2.914-.505M73.328 122.321s-.595-1.032 1.262-.427c1.671.544 2.833.055 5.128.155 1.389.061 3.067-.297 3.982.15 1.606.784 3.632 2.181 3.632 2.181s10.526 1.204 19.033-1.127M78.864 108.104s-8.39 2.758-13.168 12.12", "stroke", "#E59788", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M109.278 112.533s3.38-3.613 7.575-4.662", "stroke", "#E4EBF7", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M107.375 123.006s9.697-2.745 11.445-.88", "stroke", "#E59788", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M194.605 83.656l3.971-3.886M187.166 90.933l3.736-3.655M191.752 84.207l-4.462-4.56M198.453 91.057l-4.133-4.225M129.256 163.074l3.718-3.718M122.291 170.039l3.498-3.498M126.561 163.626l-4.27-4.27M132.975 170.039l-3.955-3.955", "stroke", "#BFCDDD", "strokeWidth", "2", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M190.156 211.779h-1.604a4.023 4.023 0 0 1-4.011-4.011V175.68a4.023 4.023 0 0 1 4.01-4.01h1.605a4.023 4.023 0 0 1 4.011 4.01v32.088a4.023 4.023 0 0 1-4.01 4.01", "fill", "#A3B4C6"], ["d", "M237.824 212.977a4.813 4.813 0 0 1-4.813 4.813h-86.636a4.813 4.813 0 0 1 0-9.626h86.636a4.813 4.813 0 0 1 4.813 4.813", "fill", "#A3B4C6"], ["fill", "#A3B4C6", "mask", "url(#d)", "d", "M154.098 190.096h70.513v-84.617h-70.513z"], ["d", "M224.928 190.096H153.78a3.219 3.219 0 0 1-3.208-3.209V167.92a3.219 3.219 0 0 1 3.208-3.21h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.219 3.219 0 0 1-3.21 3.209M224.928 130.832H153.78a3.218 3.218 0 0 1-3.208-3.208v-18.968a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.218 3.218 0 0 1-3.21 3.208", "fill", "#BFCDDD", "mask", "url(#d)"], ["d", "M159.563 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 120.546h-22.461a.802.802 0 0 1-.802-.802v-3.208c0-.443.359-.803.802-.803h22.46c.444 0 .803.36.803.803v3.208c0 .443-.36.802-.802.802", "fill", "#FFF", "mask", "url(#d)"], ["d", "M224.928 160.464H153.78a3.218 3.218 0 0 1-3.208-3.209v-18.967a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.209v18.967a3.218 3.218 0 0 1-3.21 3.209", "fill", "#BFCDDD", "mask", "url(#d)"], ["d", "M173.455 130.832h49.301M164.984 130.832h6.089M155.952 130.832h6.75M173.837 160.613h49.3M165.365 160.613h6.089M155.57 160.613h6.751", "stroke", "#7C90A5", "strokeWidth", "1.124", "strokeLinecap", "round", "strokeLinejoin", "round", "mask", "url(#d)"], ["d", "M159.563 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M166.98 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M174.397 151.038a2.407 2.407 0 1 1 .001-4.814 2.407 2.407 0 0 1 0 4.814M222.539 151.038h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802M159.563 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 179.987h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802", "fill", "#FFF", "mask", "url(#d)"], ["d", "M203.04 221.108h-27.372a2.413 2.413 0 0 1-2.406-2.407v-11.448a2.414 2.414 0 0 1 2.406-2.407h27.372a2.414 2.414 0 0 1 2.407 2.407V218.7a2.413 2.413 0 0 1-2.407 2.407", "fill", "#BFCDDD", "mask", "url(#d)"], ["d", "M177.259 207.217v11.52M201.05 207.217v11.52", "stroke", "#A3B4C6", "strokeWidth", "1.124", "strokeLinecap", "round", "strokeLinejoin", "round", "mask", "url(#d)"], ["d", "M162.873 267.894a9.422 9.422 0 0 1-9.422-9.422v-14.82a9.423 9.423 0 0 1 18.845 0v14.82a9.423 9.423 0 0 1-9.423 9.422", "fill", "#5BA02E", "mask", "url(#d)"], ["d", "M171.22 267.83a9.422 9.422 0 0 1-9.422-9.423v-3.438a9.423 9.423 0 0 1 18.845 0v3.438a9.423 9.423 0 0 1-9.422 9.423", "fill", "#92C110", "mask", "url(#d)"], ["d", "M181.31 293.666h-27.712a3.209 3.209 0 0 1-3.209-3.21V269.79a3.209 3.209 0 0 1 3.209-3.21h27.711a3.209 3.209 0 0 1 3.209 3.21v20.668a3.209 3.209 0 0 1-3.209 3.209", "fill", "#F2D7AD", "mask", "url(#d)"]], template: function NzResultServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1)(3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 3)(5, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mask", 5)(7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7)(9, "path", 8)(10, "path", 9)(11, "path", 10)(12, "path", 11)(13, "path", 12)(14, "path", 13)(15, "path", 14)(16, "path", 15)(17, "path", 16)(18, "path", 17)(19, "path", 18)(20, "path", 19)(21, "path", 20)(22, "path", 21)(23, "path", 22)(24, "path", 23)(25, "path", 24)(26, "path", 25)(27, "path", 26)(28, "path", 27)(29, "path", 28)(30, "path", 29)(31, "path", 30)(32, "path", 31)(33, "path", 32)(34, "path", 33)(35, "path", 34)(36, "path", 35)(37, "path", 36)(38, "path", 37)(39, "path", 38)(40, "path", 39)(41, "path", 40)(42, "path", 41)(43, "path", 42)(44, "path", 43)(45, "path", 44)(46, "path", 45)(47, "path", 46)(48, "path", 47)(49, "path", 48)(50, "path", 49)(51, "path", 50)(52, "path", 51)(53, "path", 52)(54, "path", 53)(55, "path", 54)(56, "path", 55)(57, "mask", 5)(58, "path", 56)(59, "path", 57)(60, "path", 58)(61, "path", 59)(62, "path", 60)(63, "path", 61)(64, "path", 62)(65, "path", 63)(66, "path", 64)(67, "path", 65)(68, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                selector: 'nz-result-server-error',
                exportAs: 'nzResultServerError',
                template: `
    <svg width="254" height="294">
      <defs>
        <path d="M0 .335h253.49v253.49H0z" />
        <path d="M0 293.665h253.49V.401H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 .067)">
          <mask fill="#fff" />
          <path
            d="M0 128.134v-2.11C0 56.608 56.273.334 125.69.334h2.11c69.416 0 125.69 56.274 125.69 125.69v2.11c0 69.417-56.274 125.69-125.69 125.69h-2.11C56.273 253.824 0 197.551 0 128.134"
            fill="#E4EBF7"
            mask="url(#b)"
          />
        </g>
        <path d="M39.989 132.108a8.332 8.332 0 1 1-16.581-1.671 8.332 8.332 0 0 1 16.58 1.671" fill="#FFF" />
        <path d="M37.19 135.59l10.553 5.983M48.665 147.884l-12.734 10.861" stroke="#FFF" strokeWidth="2" />
        <path
          d="M40.11 160.816a5.706 5.706 0 1 1-11.354-1.145 5.706 5.706 0 0 1 11.354 1.145M57.943 144.6a5.747 5.747 0 1 1-11.436-1.152 5.747 5.747 0 0 1 11.436 1.153M99.656 27.434l30.024-.013a4.619 4.619 0 1 0-.004-9.238l-30.024.013a4.62 4.62 0 0 0 .004 9.238M111.14 45.896l30.023-.013a4.62 4.62 0 1 0-.004-9.238l-30.024.013a4.619 4.619 0 1 0 .004 9.238"
          fill="#FFF"
        />
        <path
          d="M113.53 27.421v-.002l15.89-.007a4.619 4.619 0 1 0 .005 9.238l-15.892.007v-.002a4.618 4.618 0 0 0-.004-9.234M150.167 70.091h-3.979a4.789 4.789 0 0 1-4.774-4.775 4.788 4.788 0 0 1 4.774-4.774h3.979a4.789 4.789 0 0 1 4.775 4.774 4.789 4.789 0 0 1-4.775 4.775"
          fill="#FFF"
        />
        <path
          d="M171.687 30.234c0-16.392 13.289-29.68 29.681-29.68 16.392 0 29.68 13.288 29.68 29.68 0 16.393-13.288 29.681-29.68 29.681s-29.68-13.288-29.68-29.68"
          fill="#FF603B"
        />
        <path
          d="M203.557 19.435l-.676 15.035a1.514 1.514 0 0 1-3.026 0l-.675-15.035a2.19 2.19 0 1 1 4.377 0m-.264 19.378c.513.477.77 1.1.77 1.87s-.257 1.393-.77 1.907c-.55.476-1.21.733-1.943.733a2.545 2.545 0 0 1-1.87-.77c-.55-.514-.806-1.136-.806-1.87 0-.77.256-1.393.806-1.87.513-.513 1.137-.733 1.87-.733.77 0 1.43.22 1.943.733"
          fill="#FFF"
        />
        <path
          d="M119.3 133.275c4.426-.598 3.612-1.204 4.079-4.778.675-5.18-3.108-16.935-8.262-25.118-1.088-10.72-12.598-11.24-12.598-11.24s4.312 4.895 4.196 16.199c1.398 5.243.804 14.45.804 14.45s5.255 11.369 11.78 10.487"
          fill="#FFB594"
        />
        <path
          d="M100.944 91.61s1.463-.583 3.211.582c8.08 1.398 10.368 6.706 11.3 11.368 1.864 1.282 1.864 2.33 1.864 3.496.365.777 1.515 3.03 1.515 3.03s-7.225 1.748-10.954 6.758c-1.399-6.41-6.936-25.235-6.936-25.235"
          fill="#FFF"
        />
        <path d="M94.008 90.5l1.019-5.815-9.23-11.874-5.233 5.581-2.593 9.863s8.39 5.128 16.037 2.246" fill="#FFB594" />
        <path
          d="M82.931 78.216s-4.557-2.868-2.445-6.892c1.632-3.107 4.537 1.139 4.537 1.139s.524-3.662 3.139-3.662c.523-1.046 1.569-4.184 1.569-4.184s11.507 2.615 13.6 3.138c-.001 5.23-2.317 19.529-7.884 19.969-8.94.706-12.516-9.508-12.516-9.508"
          fill="#FFC6A0"
        />
        <path
          d="M102.971 72.243c2.616-2.093 3.489-9.775 3.489-9.775s-2.492-.492-6.676-2.062c-4.708-2.092-12.867-4.771-17.575.982-9.54 4.41-2.062 19.93-2.062 19.93l2.729-3.037s-3.956-3.304-2.092-6.277c2.183-3.48 3.943 1.08 3.943 1.08s.64-2.4 3.6-3.36c.356-.714 1.04-2.69 1.44-3.872a1.08 1.08 0 0 1 1.27-.707c2.41.56 8.723 2.03 11.417 2.676.524.126.876.619.825 1.156l-.308 3.266z"
          fill="#520038"
        />
        <path
          d="M101.22 76.514c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.961.491.083.805.647.702 1.26M94.26 75.074c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.96.491.082.805.646.702 1.26"
          fill="#552950"
        />
        <path
          stroke="#DB836E"
          strokeWidth="1.063"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M99.206 73.644l-.9 1.62-.3 4.38h-2.24"
        />
        <path
          d="M99.926 73.284s1.8-.72 2.52.54"
          stroke="#5C2552"
          strokeWidth="1.117"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M81.367 73.084s.48-1.12 1.12-.72c.64.4 1.28 1.44.56 2s.16 1.68.16 1.68"
          stroke="#DB836E"
          strokeWidth="1.117"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M92.326 71.724s1.84 1.12 4.16.96"
          stroke="#5C2552"
          strokeWidth="1.117"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M92.726 80.604s2.24 1.2 4.4 1.2M93.686 83.164s.96.4 1.52.32M83.687 80.044s1.786 6.547 9.262 7.954"
          stroke="#DB836E"
          strokeWidth="1.063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M95.548 91.663s-1.068 2.821-8.298 2.105c-7.23-.717-10.29-5.044-10.29-5.044"
          stroke="#E4EBF7"
          strokeWidth="1.136"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78.126 87.478s6.526 4.972 16.47 2.486c0 0 9.577 1.02 11.536 5.322 5.36 11.77.543 36.835 0 39.962 3.496 4.055-.466 8.483-.466 8.483-15.624-3.548-35.81-.6-35.81-.6-4.849-3.546-1.223-9.044-1.223-9.044L62.38 110.32c-2.485-15.227.833-19.803 3.549-20.743 3.03-1.049 8.04-1.282 8.04-1.282.496-.058 1.08-.076 1.37-.233 2.36-1.282 2.787-.583 2.787-.583"
          fill="#FFF"
        />
        <path
          d="M65.828 89.81s-6.875.465-7.59 8.156c-.466 8.857 3.03 10.954 3.03 10.954s6.075 22.102 16.796 22.957c8.39-2.176 4.758-6.702 4.661-11.42-.233-11.304-7.108-16.897-7.108-16.897s-4.212-13.75-9.789-13.75"
          fill="#FFC6A0"
        />
        <path
          d="M71.716 124.225s.855 11.264 9.828 6.486c4.765-2.536 7.581-13.828 9.789-22.568 1.456-5.768 2.58-12.197 2.58-12.197l-4.973-1.709s-2.408 5.516-7.769 12.275c-4.335 5.467-9.144 11.11-9.455 17.713"
          fill="#FFC6A0"
        />
        <path
          d="M108.463 105.191s1.747 2.724-2.331 30.535c2.376 2.216 1.053 6.012-.233 7.51"
          stroke="#E4EBF7"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M123.262 131.527s-.427 2.732-11.77 1.981c-15.187-1.006-25.326-3.25-25.326-3.25l.933-5.8s.723.215 9.71-.068c11.887-.373 18.714-6.07 24.964-1.022 4.039 3.263 1.489 8.16 1.489 8.16"
          fill="#FFC6A0"
        />
        <path
          d="M70.24 90.974s-5.593-4.739-11.054 2.68c-3.318 7.223.517 15.284 2.664 19.578-.31 3.729 2.33 4.311 2.33 4.311s.108.895 1.516 2.68c4.078-7.03 6.72-9.166 13.711-12.546-.328-.656-1.877-3.265-1.825-3.767.175-1.69-1.282-2.623-1.282-2.623s-.286-.156-1.165-2.738c-.788-2.313-2.036-5.177-4.895-7.575"
          fill="#FFF"
        />
        <path
          d="M90.232 288.027s4.855 2.308 8.313 1.155c3.188-1.063 5.12.755 8.002 1.331 2.881.577 7.769 1.243 13.207-1.424-.117-6.228-7.786-4.499-13.518-7.588-2.895-1.56-4.276-5.336-4.066-9.944H91.544s-1.573 11.89-1.312 16.47"
          fill="#CBD1D1"
        />
        <path
          d="M90.207 287.833s2.745 1.437 7.639.738c3.456-.494 3.223.66 7.418 1.282 4.195.621 13.092-.194 14.334-1.126.466 1.242-.388 2.33-.388 2.33s-1.709.682-5.438.932c-2.295.154-8.098.276-10.14-.621-2.02-1.554-4.894-1.515-6.06-.234-4.427 1.075-7.184-.31-7.184-.31l-.181-2.991z"
          fill="#2B0849"
        />
        <path d="M98.429 272.257h3.496s-.117 7.574 5.127 9.671c-5.244.7-9.672-2.602-8.623-9.671" fill="#A4AABA" />
        <path
          d="M44.425 272.046s-2.208 7.774-4.702 12.899c-1.884 3.874-4.428 7.854 5.729 7.854 6.97 0 9.385-.503 7.782-6.917-1.604-6.415.279-13.836.279-13.836h-9.088z"
          fill="#CBD1D1"
        />
        <path
          d="M38.066 290.277s2.198 1.225 6.954 1.225c6.376 0 8.646-1.73 8.646-1.73s.63 1.168-.649 2.27c-1.04.897-3.77 1.668-7.745 1.621-4.347-.05-6.115-.593-7.062-1.224-.864-.577-.72-1.657-.144-2.162"
          fill="#2B0849"
        />
        <path
          d="M45.344 274.041s.035 1.592-.329 3.07c-.365 1.49-1.13 3.255-1.184 4.34-.061 1.206 4.755 1.657 5.403.036.65-1.622 1.357-6.737 2.006-7.602.648-.865-5.14-2.222-5.896.156"
          fill="#A4AABA"
        />
        <path
          d="M89.476 277.57l13.899.095s1.349-56.643 1.925-66.909c.576-10.267 3.923-45.052 1.042-65.585l-13.037-.669-23.737.81s-.452 4.12-1.243 10.365c-.065.515-.708.874-.777 1.417-.078.608.439 1.407.332 2.044-2.455 14.627-5.797 32.736-8.256 46.837-.121.693-1.282 1.048-1.515 2.796-.042.314.22 1.584.116 1.865-7.14 19.473-12.202 52.601-15.66 67.19l15.176-.015s2.282-10.145 4.185-18.871c2.922-13.389 24.012-88.32 24.012-88.32l3.133-.954-.158 48.568s-.233 1.282.35 2.098c.583.815-.581 1.167-.408 2.331l.408 1.864s-.466 7.458-.932 12.352c-.467 4.895 1.145 40.69 1.145 40.69"
          fill="#7BB2F9"
        />
        <path
          d="M64.57 218.881c1.197.099 4.195-2.097 7.225-5.127M96.024 222.534s2.881-1.152 6.34-4.034"
          stroke="#648BD8"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M96.973 219.373s2.882-1.153 6.34-4.034"
          stroke="#648BD8"
          strokeWidth="1.032"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M63.172 222.144s2.724-.614 6.759-3.496M74.903 146.166c-.281 3.226.31 8.856-4.506 9.478M93.182 144.344s.115 14.557-1.344 15.65c-2.305 1.73-3.107 2.02-3.107 2.02M89.197 144.923s.269 13.144-1.01 25.088M83.525 170.71s6.81-1.051 9.116-1.051M46.026 270.045l-.892 4.538M46.937 263.289l-.815 4.157M62.725 202.503c-.33 1.618-.102 1.904-.449 3.438 0 0-2.756 1.903-2.29 3.923.466 2.02-.31 3.424-4.505 17.252-1.762 5.807-4.233 18.922-6.165 28.278-.03.144-.521 2.646-1.14 5.8M64.158 194.136c-.295 1.658-.6 3.31-.917 4.938M71.33 146.787l-1.244 10.877s-1.14.155-.519 2.33c.117 1.399-2.778 16.39-5.382 31.615M44.242 273.727H58.07"
          stroke="#648BD8"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M106.18 142.117c-3.028-.489-18.825-2.744-36.219.2a.625.625 0 0 0-.518.644c.063 1.307.044 2.343.015 2.995a.617.617 0 0 0 .716.636c3.303-.534 17.037-2.412 35.664-.266.347.04.66-.214.692-.56.124-1.347.16-2.425.17-3.029a.616.616 0 0 0-.52-.62"
          fill="#192064"
        />
        <path
          d="M96.398 145.264l.003-5.102a.843.843 0 0 0-.809-.847 114.104 114.104 0 0 0-8.141-.014.85.85 0 0 0-.82.847l-.003 5.097c0 .476.388.857.864.845 2.478-.064 5.166-.067 8.03.017a.848.848 0 0 0 .876-.843"
          fill="#FFF"
        />
        <path
          d="M95.239 144.296l.002-3.195a.667.667 0 0 0-.643-.672c-1.9-.061-3.941-.073-6.094-.01a.675.675 0 0 0-.654.672l-.002 3.192c0 .376.305.677.68.669 1.859-.042 3.874-.043 6.02.012.376.01.69-.291.691-.668"
          fill="#192064"
        />
        <path
          d="M90.102 273.522h12.819M91.216 269.761c.006 3.519-.072 5.55 0 6.292M90.923 263.474c-.009 1.599-.016 2.558-.016 4.505M90.44 170.404l.932 46.38s.7 1.631-.233 2.796c-.932 1.166 2.564.7.932 2.33-1.63 1.633.933 1.166 0 3.497-.618 1.546-1.031 21.921-1.138 36.513"
          stroke="#648BD8"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M73.736 98.665l2.214 4.312s2.098.816 1.865 2.68l.816 2.214M64.297 116.611c.233-.932 2.176-7.147 12.585-10.488M77.598 90.042s7.691 6.137 16.547 2.72"
          stroke="#E4EBF7"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M91.974 86.954s5.476-.816 7.574-4.545c1.297-.345.72 2.212-.33 3.671-.7.971-1.01 1.554-1.01 1.554s.194.31.155.816c-.053.697-.175.653-.272 1.048-.081.335.108.657 0 1.049-.046.17-.198.5-.382.878-.12.249-.072.687-.2.948-.231.469-1.562 1.87-2.622 2.855-3.826 3.554-5.018 1.644-6.001-.408-.894-1.865-.661-5.127-.874-6.875-.35-2.914-2.622-3.03-1.923-4.429.343-.685 2.87.69 3.263 1.748.757 2.04 2.952 1.807 2.622 1.69"
          fill="#FFC6A0"
        />
        <path
          d="M99.8 82.429c-.465.077-.35.272-.97 1.243-.622.971-4.817 2.932-6.39 3.224-2.589.48-2.278-1.56-4.254-2.855-1.69-1.107-3.562-.638-1.398 1.398.99.932.932 1.107 1.398 3.205.335 1.506-.64 3.67.7 5.593"
          stroke="#DB836E"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M79.543 108.673c-2.1 2.926-4.266 6.175-5.557 8.762"
          stroke="#E59788"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.72 124.768s-2.098-1.942-5.127-2.719c-3.03-.777-3.574-.155-5.516.078-1.942.233-3.885-.932-3.652.7.233 1.63 5.05 1.01 5.206 2.097.155 1.087-6.37 2.796-8.313 2.175-.777.777.466 1.864 2.02 2.175.233 1.554 2.253 1.554 2.253 1.554s.699 1.01 2.641 1.088c2.486 1.32 8.934-.7 10.954-1.554 2.02-.855-.466-5.594-.466-5.594"
          fill="#FFC6A0"
        />
        <path
          d="M73.425 122.826s.66 1.127 3.167 1.418c2.315.27 2.563.583 2.563.583s-2.545 2.894-9.07 2.272M72.416 129.274s3.826.097 4.933-.718M74.98 130.75s1.961.136 3.36-.505M77.232 131.916s1.748.019 2.914-.505M73.328 122.321s-.595-1.032 1.262-.427c1.671.544 2.833.055 5.128.155 1.389.061 3.067-.297 3.982.15 1.606.784 3.632 2.181 3.632 2.181s10.526 1.204 19.033-1.127M78.864 108.104s-8.39 2.758-13.168 12.12"
          stroke="#E59788"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M109.278 112.533s3.38-3.613 7.575-4.662"
          stroke="#E4EBF7"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M107.375 123.006s9.697-2.745 11.445-.88"
          stroke="#E59788"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M194.605 83.656l3.971-3.886M187.166 90.933l3.736-3.655M191.752 84.207l-4.462-4.56M198.453 91.057l-4.133-4.225M129.256 163.074l3.718-3.718M122.291 170.039l3.498-3.498M126.561 163.626l-4.27-4.27M132.975 170.039l-3.955-3.955"
          stroke="#BFCDDD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M190.156 211.779h-1.604a4.023 4.023 0 0 1-4.011-4.011V175.68a4.023 4.023 0 0 1 4.01-4.01h1.605a4.023 4.023 0 0 1 4.011 4.01v32.088a4.023 4.023 0 0 1-4.01 4.01"
          fill="#A3B4C6"
        />
        <path
          d="M237.824 212.977a4.813 4.813 0 0 1-4.813 4.813h-86.636a4.813 4.813 0 0 1 0-9.626h86.636a4.813 4.813 0 0 1 4.813 4.813"
          fill="#A3B4C6"
        />
        <mask fill="#fff" />
        <path fill="#A3B4C6" mask="url(#d)" d="M154.098 190.096h70.513v-84.617h-70.513z" />
        <path
          d="M224.928 190.096H153.78a3.219 3.219 0 0 1-3.208-3.209V167.92a3.219 3.219 0 0 1 3.208-3.21h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.219 3.219 0 0 1-3.21 3.209M224.928 130.832H153.78a3.218 3.218 0 0 1-3.208-3.208v-18.968a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.218 3.218 0 0 1-3.21 3.208"
          fill="#BFCDDD"
          mask="url(#d)"
        />
        <path
          d="M159.563 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 120.546h-22.461a.802.802 0 0 1-.802-.802v-3.208c0-.443.359-.803.802-.803h22.46c.444 0 .803.36.803.803v3.208c0 .443-.36.802-.802.802"
          fill="#FFF"
          mask="url(#d)"
        />
        <path
          d="M224.928 160.464H153.78a3.218 3.218 0 0 1-3.208-3.209v-18.967a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.209v18.967a3.218 3.218 0 0 1-3.21 3.209"
          fill="#BFCDDD"
          mask="url(#d)"
        />
        <path
          d="M173.455 130.832h49.301M164.984 130.832h6.089M155.952 130.832h6.75M173.837 160.613h49.3M165.365 160.613h6.089M155.57 160.613h6.751"
          stroke="#7C90A5"
          strokeWidth="1.124"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask="url(#d)"
        />
        <path
          d="M159.563 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M166.98 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M174.397 151.038a2.407 2.407 0 1 1 .001-4.814 2.407 2.407 0 0 1 0 4.814M222.539 151.038h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802M159.563 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 179.987h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802"
          fill="#FFF"
          mask="url(#d)"
        />
        <path
          d="M203.04 221.108h-27.372a2.413 2.413 0 0 1-2.406-2.407v-11.448a2.414 2.414 0 0 1 2.406-2.407h27.372a2.414 2.414 0 0 1 2.407 2.407V218.7a2.413 2.413 0 0 1-2.407 2.407"
          fill="#BFCDDD"
          mask="url(#d)"
        />
        <path
          d="M177.259 207.217v11.52M201.05 207.217v11.52"
          stroke="#A3B4C6"
          strokeWidth="1.124"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask="url(#d)"
        />
        <path
          d="M162.873 267.894a9.422 9.422 0 0 1-9.422-9.422v-14.82a9.423 9.423 0 0 1 18.845 0v14.82a9.423 9.423 0 0 1-9.423 9.422"
          fill="#5BA02E"
          mask="url(#d)"
        />
        <path
          d="M171.22 267.83a9.422 9.422 0 0 1-9.422-9.423v-3.438a9.423 9.423 0 0 1 18.845 0v3.438a9.423 9.423 0 0 1-9.422 9.423"
          fill="#92C110"
          mask="url(#d)"
        />
        <path
          d="M181.31 293.666h-27.712a3.209 3.209 0 0 1-3.209-3.21V269.79a3.209 3.209 0 0 1 3.209-3.21h27.711a3.209 3.209 0 0 1 3.209 3.21v20.668a3.209 3.209 0 0 1-3.209 3.209"
          fill="#F2D7AD"
          mask="url(#d)"
        />
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResultUnauthorizedComponent {
}
NzResultUnauthorizedComponent.ɵfac = function NzResultUnauthorizedComponent_Factory(t) { return new (t || NzResultUnauthorizedComponent)(); };
NzResultUnauthorizedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzResultUnauthorizedComponent, selectors: [["nz-result-unauthorized"]], exportAs: ["nzResultUnauthorized"], decls: 56, vars: 0, consts: [["width", "251", "height", "294"], ["fill", "none", "fillRule", "evenodd"], ["d", "M0 129.023v-2.084C0 58.364 55.591 2.774 124.165 2.774h2.085c68.574 0 124.165 55.59 124.165 124.165v2.084c0 68.575-55.59 124.166-124.165 124.166h-2.085C55.591 253.189 0 197.598 0 129.023", "fill", "#E4EBF7"], ["d", "M41.417 132.92a8.231 8.231 0 1 1-16.38-1.65 8.231 8.231 0 0 1 16.38 1.65", "fill", "#FFF"], ["d", "M38.652 136.36l10.425 5.91M49.989 148.505l-12.58 10.73", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M41.536 161.28a5.636 5.636 0 1 1-11.216-1.13 5.636 5.636 0 0 1 11.216 1.13M59.154 145.261a5.677 5.677 0 1 1-11.297-1.138 5.677 5.677 0 0 1 11.297 1.138M100.36 29.516l29.66-.013a4.562 4.562 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 0 0 .005 9.126M111.705 47.754l29.659-.013a4.563 4.563 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 1 0 .005 9.126", "fill", "#FFF"], ["d", "M114.066 29.503V29.5l15.698-.007a4.563 4.563 0 1 0 .004 9.126l-15.698.007v-.002a4.562 4.562 0 0 0-.004-9.122M185.405 137.723c-.55 5.455-5.418 9.432-10.873 8.882-5.456-.55-9.432-5.418-8.882-10.873.55-5.455 5.418-9.432 10.873-8.882 5.455.55 9.432 5.418 8.882 10.873", "fill", "#FFF"], ["d", "M180.17 143.772l12.572 7.129M193.841 158.42L178.67 171.36", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M185.55 171.926a6.798 6.798 0 1 1-13.528-1.363 6.798 6.798 0 0 1 13.527 1.363M204.12 155.285a6.848 6.848 0 1 1-13.627-1.375 6.848 6.848 0 0 1 13.626 1.375", "fill", "#FFF"], ["d", "M152.988 194.074a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0zM225.931 118.217a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM217.09 153.051a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.42 0zM177.84 109.842a2.21 2.21 0 1 1-4.422 0 2.21 2.21 0 0 1 4.421 0zM196.114 94.454a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM202.844 182.523a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0z", "stroke", "#FFF", "strokeWidth", "2"], ["stroke", "#FFF", "strokeWidth", "2", "d", "M215.125 155.262l-1.902 20.075-10.87 5.958M174.601 176.636l-6.322 9.761H156.98l-4.484 6.449M175.874 127.28V111.56M221.51 119.404l-12.77 7.859-15.228-7.86V96.668"], ["d", "M180.68 29.32C180.68 13.128 193.806 0 210 0c16.193 0 29.32 13.127 29.32 29.32 0 16.194-13.127 29.322-29.32 29.322-16.193 0-29.32-13.128-29.32-29.321", "fill", "#A26EF4"], ["d", "M221.45 41.706l-21.563-.125a1.744 1.744 0 0 1-1.734-1.754l.071-12.23a1.744 1.744 0 0 1 1.754-1.734l21.562.125c.964.006 1.74.791 1.735 1.755l-.071 12.229a1.744 1.744 0 0 1-1.754 1.734", "fill", "#FFF"], ["d", "M215.106 29.192c-.015 2.577-2.049 4.654-4.543 4.64-2.494-.014-4.504-2.115-4.489-4.693l.04-6.925c.016-2.577 2.05-4.654 4.543-4.64 2.494.015 4.504 2.116 4.49 4.693l-.04 6.925zm-4.53-14.074a6.877 6.877 0 0 0-6.916 6.837l-.043 7.368a6.877 6.877 0 0 0 13.754.08l.042-7.368a6.878 6.878 0 0 0-6.837-6.917zM167.566 68.367h-3.93a4.73 4.73 0 0 1-4.717-4.717 4.73 4.73 0 0 1 4.717-4.717h3.93a4.73 4.73 0 0 1 4.717 4.717 4.73 4.73 0 0 1-4.717 4.717", "fill", "#FFF"], ["d", "M168.214 248.838a6.611 6.611 0 0 1-6.61-6.611v-66.108a6.611 6.611 0 0 1 13.221 0v66.108a6.611 6.611 0 0 1-6.61 6.61", "fill", "#5BA02E"], ["d", "M176.147 248.176a6.611 6.611 0 0 1-6.61-6.61v-33.054a6.611 6.611 0 1 1 13.221 0v33.053a6.611 6.611 0 0 1-6.61 6.611", "fill", "#92C110"], ["d", "M185.994 293.89h-27.376a3.17 3.17 0 0 1-3.17-3.17v-45.887a3.17 3.17 0 0 1 3.17-3.17h27.376a3.17 3.17 0 0 1 3.17 3.17v45.886a3.17 3.17 0 0 1-3.17 3.17", "fill", "#F2D7AD"], ["d", "M81.972 147.673s6.377-.927 17.566-1.28c11.729-.371 17.57 1.086 17.57 1.086s3.697-3.855.968-8.424c1.278-12.077 5.982-32.827.335-48.273-1.116-1.339-3.743-1.512-7.536-.62-1.337.315-7.147-.149-7.983-.1l-15.311-.347s-3.487-.17-8.035-.508c-1.512-.113-4.227-1.683-5.458-.338-.406.443-2.425 5.669-1.97 16.077l8.635 35.642s-3.141 3.61 1.219 7.085", "fill", "#FFF"], ["d", "M75.768 73.325l-.9-6.397 11.982-6.52s7.302-.118 8.038 1.205c.737 1.324-5.616.993-5.616.993s-1.836 1.388-2.615 2.5c-1.654 2.363-.986 6.471-8.318 5.986-1.708.284-2.57 2.233-2.57 2.233", "fill", "#FFC6A0"], ["d", "M52.44 77.672s14.217 9.406 24.973 14.444c1.061.497-2.094 16.183-11.892 11.811-7.436-3.318-20.162-8.44-21.482-14.496-.71-3.258 2.543-7.643 8.401-11.76M141.862 80.113s-6.693 2.999-13.844 6.876c-3.894 2.11-10.137 4.704-12.33 7.988-6.224 9.314 3.536 11.22 12.947 7.503 6.71-2.651 28.999-12.127 13.227-22.367", "fill", "#FFB594"], ["d", "M76.166 66.36l3.06 3.881s-2.783 2.67-6.31 5.747c-7.103 6.195-12.803 14.296-15.995 16.44-3.966 2.662-9.754 3.314-12.177-.118-3.553-5.032.464-14.628 31.422-25.95", "fill", "#FFC6A0"], ["d", "M64.674 85.116s-2.34 8.413-8.912 14.447c.652.548 18.586 10.51 22.144 10.056 5.238-.669 6.417-18.968 1.145-20.531-.702-.208-5.901-1.286-8.853-2.167-.87-.26-1.611-1.71-3.545-.936l-1.98-.869zM128.362 85.826s5.318 1.956 7.325 13.734c-.546.274-17.55 12.35-21.829 7.805-6.534-6.94-.766-17.393 4.275-18.61 4.646-1.121 5.03-1.37 10.23-2.929", "fill", "#FFF"], ["d", "M78.18 94.656s.911 7.41-4.914 13.078", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M87.397 94.68s3.124 2.572 10.263 2.572c7.14 0 9.074-3.437 9.074-3.437", "stroke", "#E4EBF7", "strokeWidth", ".932", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M117.184 68.639l-6.781-6.177s-5.355-4.314-9.223-.893c-3.867 3.422 4.463 2.083 5.653 4.165 1.19 2.082.848 1.143-2.083.446-5.603-1.331-2.082.893 2.975 5.355 2.091 1.845 6.992.955 6.992.955l2.467-3.851z", "fill", "#FFC6A0"], ["d", "M105.282 91.315l-.297-10.937-15.918-.027-.53 10.45c-.026.403.17.788.515.999 2.049 1.251 9.387 5.093 15.799.424.287-.21.443-.554.431-.91", "fill", "#FFB594"], ["d", "M107.573 74.24c.817-1.147.982-9.118 1.015-11.928a1.046 1.046 0 0 0-.965-1.055l-4.62-.365c-7.71-1.044-17.071.624-18.253 6.346-5.482 5.813-.421 13.244-.421 13.244s1.963 3.566 4.305 6.791c.756 1.041.398-3.731 3.04-5.929 5.524-4.594 15.899-7.103 15.899-7.103", "fill", "#5C2552"], ["d", "M88.426 83.206s2.685 6.202 11.602 6.522c7.82.28 8.973-7.008 7.434-17.505l-.909-5.483c-6.118-2.897-15.478.54-15.478.54s-.576 2.044-.19 5.504c-2.276 2.066-1.824 5.618-1.824 5.618s-.905-1.922-1.98-2.321c-.86-.32-1.897.089-2.322 1.98-1.04 4.632 3.667 5.145 3.667 5.145", "fill", "#FFC6A0"], ["stroke", "#DB836E", "strokeWidth", "1.145", "strokeLinecap", "round", "strokeLinejoin", "round", "d", "M100.843 77.099l1.701-.928-1.015-4.324.674-1.406"], ["d", "M105.546 74.092c-.022.713-.452 1.279-.96 1.263-.51-.016-.904-.607-.882-1.32.021-.713.452-1.278.96-1.263.51.016.904.607.882 1.32M97.592 74.349c-.022.713-.452 1.278-.961 1.263-.509-.016-.904-.607-.882-1.32.022-.713.452-1.279.961-1.263.51.016.904.606.882 1.32", "fill", "#552950"], ["d", "M91.132 86.786s5.269 4.957 12.679 2.327", "stroke", "#DB836E", "strokeWidth", "1.145", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M99.776 81.903s-3.592.232-1.44-2.79c1.59-1.496 4.897-.46 4.897-.46s1.156 3.906-3.457 3.25", "fill", "#DB836E"], ["d", "M102.88 70.6s2.483.84 3.402.715M93.883 71.975s2.492-1.144 4.778-1.073", "stroke", "#5C2552", "strokeWidth", "1.526", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M86.32 77.374s.961.879 1.458 2.106c-.377.48-1.033 1.152-.236 1.809M99.337 83.719s1.911.151 2.509-.254", "stroke", "#DB836E", "strokeWidth", "1.145", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M87.782 115.821l15.73-3.012M100.165 115.821l10.04-2.008", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M66.508 86.763s-1.598 8.83-6.697 14.078", "stroke", "#E4EBF7", "strokeWidth", "1.114", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M128.31 87.934s3.013 4.121 4.06 11.785", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M64.09 84.816s-6.03 9.912-13.607 9.903", "stroke", "#DB836E", "strokeWidth", ".795", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M112.366 65.909l-.142 5.32s5.993 4.472 11.945 9.202c4.482 3.562 8.888 7.455 10.985 8.662 4.804 2.766 8.9 3.355 11.076 1.808 4.071-2.894 4.373-9.878-8.136-15.263-4.271-1.838-16.144-6.36-25.728-9.73", "fill", "#FFC6A0"], ["d", "M130.532 85.488s4.588 5.757 11.619 6.214", "stroke", "#DB836E", "strokeWidth", ".75", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M121.708 105.73s-.393 8.564-1.34 13.612", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M115.784 161.512s-3.57-1.488-2.678-7.14", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M101.52 290.246s4.326 2.057 7.408 1.03c2.842-.948 4.564.673 7.132 1.186 2.57.514 6.925 1.108 11.772-1.269-.104-5.551-6.939-4.01-12.048-6.763-2.582-1.39-3.812-4.757-3.625-8.863h-9.471s-1.402 10.596-1.169 14.68", "fill", "#CBD1D1"], ["d", "M101.496 290.073s2.447 1.281 6.809.658c3.081-.44 3.74.485 7.479 1.039 3.739.554 10.802-.07 11.91-.9.415 1.108-.347 2.077-.347 2.077s-1.523.608-4.847.831c-2.045.137-5.843.293-7.663-.507-1.8-1.385-5.286-1.917-5.77-.243-3.947.958-7.41-.288-7.41-.288l-.16-2.667z", "fill", "#2B0849"], ["d", "M108.824 276.19h3.116s-.103 6.751 4.57 8.62c-4.673.624-8.62-2.32-7.686-8.62", "fill", "#A4AABA"], ["d", "M57.65 272.52s-2.122 7.47-4.518 12.396c-1.811 3.724-4.255 7.548 5.505 7.548 6.698 0 9.02-.483 7.479-6.648-1.541-6.164.268-13.296.268-13.296H57.65z", "fill", "#CBD1D1"], ["d", "M51.54 290.04s2.111 1.178 6.682 1.178c6.128 0 8.31-1.662 8.31-1.662s.605 1.122-.624 2.18c-1 .862-3.624 1.603-7.444 1.559-4.177-.049-5.876-.57-6.786-1.177-.831-.554-.692-1.593-.138-2.078", "fill", "#2B0849"], ["d", "M58.533 274.438s.034 1.529-.315 2.95c-.352 1.431-1.087 3.127-1.139 4.17-.058 1.16 4.57 1.592 5.194.035.623-1.559 1.303-6.475 1.927-7.306.622-.831-4.94-2.135-5.667.15", "fill", "#A4AABA"], ["d", "M100.885 277.015l13.306.092s1.291-54.228 1.843-64.056c.552-9.828 3.756-43.13.997-62.788l-12.48-.64-22.725.776s-.433 3.944-1.19 9.921c-.062.493-.677.838-.744 1.358-.075.582.42 1.347.318 1.956-2.35 14.003-6.343 32.926-8.697 46.425-.116.663-1.227 1.004-1.45 2.677-.04.3.21 1.516.112 1.785-6.836 18.643-10.89 47.584-14.2 61.551l14.528-.014s2.185-8.524 4.008-16.878c2.796-12.817 22.987-84.553 22.987-84.553l3-.517 1.037 46.1s-.223 1.228.334 2.008c.558.782-.556 1.117-.39 2.233l.39 1.784s-.446 7.14-.892 11.826c-.446 4.685-.092 38.954-.092 38.954", "fill", "#7BB2F9"], ["d", "M77.438 220.434c1.146.094 4.016-2.008 6.916-4.91M107.55 223.931s2.758-1.103 6.069-3.862", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M108.459 220.905s2.759-1.104 6.07-3.863", "stroke", "#648BD8", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M76.099 223.557s2.608-.587 6.47-3.346M87.33 150.82c-.27 3.088.297 8.478-4.315 9.073M104.829 149.075s.11 13.936-1.286 14.983c-2.207 1.655-2.975 1.934-2.975 1.934M101.014 149.63s.035 12.81-1.19 24.245M94.93 174.965s7.174-1.655 9.38-1.655M75.671 204.754c-.316 1.55-.64 3.067-.973 4.535 0 0-1.45 1.822-1.003 3.756.446 1.934-.943 2.034-4.96 15.273-1.686 5.559-4.464 18.49-6.313 27.447-.078.38-4.018 18.06-4.093 18.423M77.043 196.743a313.269 313.269 0 0 1-.877 4.729M83.908 151.414l-1.19 10.413s-1.091.148-.496 2.23c.111 1.34-2.66 15.692-5.153 30.267M57.58 272.94h13.238", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M117.377 147.423s-16.955-3.087-35.7.199c.157 2.501-.002 4.128-.002 4.128s14.607-2.802 35.476-.31c.251-2.342.226-4.017.226-4.017", "fill", "#192064"], ["d", "M107.511 150.353l.004-4.885a.807.807 0 0 0-.774-.81c-2.428-.092-5.04-.108-7.795-.014a.814.814 0 0 0-.784.81l-.003 4.88c0 .456.371.82.827.808a140.76 140.76 0 0 1 7.688.017.81.81 0 0 0 .837-.806", "fill", "#FFF"], ["d", "M106.402 149.426l.002-3.06a.64.64 0 0 0-.616-.643 94.135 94.135 0 0 0-5.834-.009.647.647 0 0 0-.626.643l-.001 3.056c0 .36.291.648.651.64 1.78-.04 3.708-.041 5.762.012.36.009.662-.279.662-.64", "fill", "#192064"], ["d", "M101.485 273.933h12.272M102.652 269.075c.006 3.368.04 5.759.11 6.47M102.667 263.125c-.009 1.53-.015 2.98-.016 4.313M102.204 174.024l.893 44.402s.669 1.561-.224 2.677c-.892 1.116 2.455.67.893 2.231-1.562 1.562.893 1.116 0 3.347-.592 1.48-.988 20.987-1.09 34.956", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"]], template: function NzResultUnauthorizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15)(16, "path", 16)(17, "path", 17)(18, "path", 18)(19, "path", 19)(20, "path", 20)(21, "path", 21)(22, "path", 22)(23, "path", 23)(24, "path", 24)(25, "path", 25)(26, "path", 26)(27, "path", 27)(28, "path", 28)(29, "path", 29)(30, "path", 30)(31, "path", 31)(32, "path", 32)(33, "path", 33)(34, "path", 34)(35, "path", 35)(36, "path", 36)(37, "path", 37)(38, "path", 38)(39, "path", 39)(40, "path", 40)(41, "path", 41)(42, "path", 42)(43, "path", 43)(44, "path", 44)(45, "path", 45)(46, "path", 46)(47, "path", 47)(48, "path", 48)(49, "path", 49)(50, "path", 50)(51, "path", 51)(52, "path", 52)(53, "path", 53)(54, "path", 54)(55, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultUnauthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                selector: 'nz-result-unauthorized',
                exportAs: 'nzResultUnauthorized',
                template: `
    <svg width="251" height="294">
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 129.023v-2.084C0 58.364 55.591 2.774 124.165 2.774h2.085c68.574 0 124.165 55.59 124.165 124.165v2.084c0 68.575-55.59 124.166-124.165 124.166h-2.085C55.591 253.189 0 197.598 0 129.023"
          fill="#E4EBF7"
        />
        <path d="M41.417 132.92a8.231 8.231 0 1 1-16.38-1.65 8.231 8.231 0 0 1 16.38 1.65" fill="#FFF" />
        <path d="M38.652 136.36l10.425 5.91M49.989 148.505l-12.58 10.73" stroke="#FFF" strokeWidth="2" />
        <path
          d="M41.536 161.28a5.636 5.636 0 1 1-11.216-1.13 5.636 5.636 0 0 1 11.216 1.13M59.154 145.261a5.677 5.677 0 1 1-11.297-1.138 5.677 5.677 0 0 1 11.297 1.138M100.36 29.516l29.66-.013a4.562 4.562 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 0 0 .005 9.126M111.705 47.754l29.659-.013a4.563 4.563 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 1 0 .005 9.126"
          fill="#FFF"
        />
        <path
          d="M114.066 29.503V29.5l15.698-.007a4.563 4.563 0 1 0 .004 9.126l-15.698.007v-.002a4.562 4.562 0 0 0-.004-9.122M185.405 137.723c-.55 5.455-5.418 9.432-10.873 8.882-5.456-.55-9.432-5.418-8.882-10.873.55-5.455 5.418-9.432 10.873-8.882 5.455.55 9.432 5.418 8.882 10.873"
          fill="#FFF"
        />
        <path d="M180.17 143.772l12.572 7.129M193.841 158.42L178.67 171.36" stroke="#FFF" strokeWidth="2" />
        <path
          d="M185.55 171.926a6.798 6.798 0 1 1-13.528-1.363 6.798 6.798 0 0 1 13.527 1.363M204.12 155.285a6.848 6.848 0 1 1-13.627-1.375 6.848 6.848 0 0 1 13.626 1.375"
          fill="#FFF"
        />
        <path
          d="M152.988 194.074a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0zM225.931 118.217a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM217.09 153.051a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.42 0zM177.84 109.842a2.21 2.21 0 1 1-4.422 0 2.21 2.21 0 0 1 4.421 0zM196.114 94.454a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM202.844 182.523a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0z"
          stroke="#FFF"
          strokeWidth="2"
        />
        <path
          stroke="#FFF"
          strokeWidth="2"
          d="M215.125 155.262l-1.902 20.075-10.87 5.958M174.601 176.636l-6.322 9.761H156.98l-4.484 6.449M175.874 127.28V111.56M221.51 119.404l-12.77 7.859-15.228-7.86V96.668"
        />
        <path
          d="M180.68 29.32C180.68 13.128 193.806 0 210 0c16.193 0 29.32 13.127 29.32 29.32 0 16.194-13.127 29.322-29.32 29.322-16.193 0-29.32-13.128-29.32-29.321"
          fill="#A26EF4"
        />
        <path
          d="M221.45 41.706l-21.563-.125a1.744 1.744 0 0 1-1.734-1.754l.071-12.23a1.744 1.744 0 0 1 1.754-1.734l21.562.125c.964.006 1.74.791 1.735 1.755l-.071 12.229a1.744 1.744 0 0 1-1.754 1.734"
          fill="#FFF"
        />
        <path
          d="M215.106 29.192c-.015 2.577-2.049 4.654-4.543 4.64-2.494-.014-4.504-2.115-4.489-4.693l.04-6.925c.016-2.577 2.05-4.654 4.543-4.64 2.494.015 4.504 2.116 4.49 4.693l-.04 6.925zm-4.53-14.074a6.877 6.877 0 0 0-6.916 6.837l-.043 7.368a6.877 6.877 0 0 0 13.754.08l.042-7.368a6.878 6.878 0 0 0-6.837-6.917zM167.566 68.367h-3.93a4.73 4.73 0 0 1-4.717-4.717 4.73 4.73 0 0 1 4.717-4.717h3.93a4.73 4.73 0 0 1 4.717 4.717 4.73 4.73 0 0 1-4.717 4.717"
          fill="#FFF"
        />
        <path
          d="M168.214 248.838a6.611 6.611 0 0 1-6.61-6.611v-66.108a6.611 6.611 0 0 1 13.221 0v66.108a6.611 6.611 0 0 1-6.61 6.61"
          fill="#5BA02E"
        />
        <path
          d="M176.147 248.176a6.611 6.611 0 0 1-6.61-6.61v-33.054a6.611 6.611 0 1 1 13.221 0v33.053a6.611 6.611 0 0 1-6.61 6.611"
          fill="#92C110"
        />
        <path
          d="M185.994 293.89h-27.376a3.17 3.17 0 0 1-3.17-3.17v-45.887a3.17 3.17 0 0 1 3.17-3.17h27.376a3.17 3.17 0 0 1 3.17 3.17v45.886a3.17 3.17 0 0 1-3.17 3.17"
          fill="#F2D7AD"
        />
        <path
          d="M81.972 147.673s6.377-.927 17.566-1.28c11.729-.371 17.57 1.086 17.57 1.086s3.697-3.855.968-8.424c1.278-12.077 5.982-32.827.335-48.273-1.116-1.339-3.743-1.512-7.536-.62-1.337.315-7.147-.149-7.983-.1l-15.311-.347s-3.487-.17-8.035-.508c-1.512-.113-4.227-1.683-5.458-.338-.406.443-2.425 5.669-1.97 16.077l8.635 35.642s-3.141 3.61 1.219 7.085"
          fill="#FFF"
        />
        <path
          d="M75.768 73.325l-.9-6.397 11.982-6.52s7.302-.118 8.038 1.205c.737 1.324-5.616.993-5.616.993s-1.836 1.388-2.615 2.5c-1.654 2.363-.986 6.471-8.318 5.986-1.708.284-2.57 2.233-2.57 2.233"
          fill="#FFC6A0"
        />
        <path
          d="M52.44 77.672s14.217 9.406 24.973 14.444c1.061.497-2.094 16.183-11.892 11.811-7.436-3.318-20.162-8.44-21.482-14.496-.71-3.258 2.543-7.643 8.401-11.76M141.862 80.113s-6.693 2.999-13.844 6.876c-3.894 2.11-10.137 4.704-12.33 7.988-6.224 9.314 3.536 11.22 12.947 7.503 6.71-2.651 28.999-12.127 13.227-22.367"
          fill="#FFB594"
        />
        <path
          d="M76.166 66.36l3.06 3.881s-2.783 2.67-6.31 5.747c-7.103 6.195-12.803 14.296-15.995 16.44-3.966 2.662-9.754 3.314-12.177-.118-3.553-5.032.464-14.628 31.422-25.95"
          fill="#FFC6A0"
        />
        <path
          d="M64.674 85.116s-2.34 8.413-8.912 14.447c.652.548 18.586 10.51 22.144 10.056 5.238-.669 6.417-18.968 1.145-20.531-.702-.208-5.901-1.286-8.853-2.167-.87-.26-1.611-1.71-3.545-.936l-1.98-.869zM128.362 85.826s5.318 1.956 7.325 13.734c-.546.274-17.55 12.35-21.829 7.805-6.534-6.94-.766-17.393 4.275-18.61 4.646-1.121 5.03-1.37 10.23-2.929"
          fill="#FFF"
        />
        <path
          d="M78.18 94.656s.911 7.41-4.914 13.078"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.397 94.68s3.124 2.572 10.263 2.572c7.14 0 9.074-3.437 9.074-3.437"
          stroke="#E4EBF7"
          strokeWidth=".932"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M117.184 68.639l-6.781-6.177s-5.355-4.314-9.223-.893c-3.867 3.422 4.463 2.083 5.653 4.165 1.19 2.082.848 1.143-2.083.446-5.603-1.331-2.082.893 2.975 5.355 2.091 1.845 6.992.955 6.992.955l2.467-3.851z"
          fill="#FFC6A0"
        />
        <path
          d="M105.282 91.315l-.297-10.937-15.918-.027-.53 10.45c-.026.403.17.788.515.999 2.049 1.251 9.387 5.093 15.799.424.287-.21.443-.554.431-.91"
          fill="#FFB594"
        />
        <path
          d="M107.573 74.24c.817-1.147.982-9.118 1.015-11.928a1.046 1.046 0 0 0-.965-1.055l-4.62-.365c-7.71-1.044-17.071.624-18.253 6.346-5.482 5.813-.421 13.244-.421 13.244s1.963 3.566 4.305 6.791c.756 1.041.398-3.731 3.04-5.929 5.524-4.594 15.899-7.103 15.899-7.103"
          fill="#5C2552"
        />
        <path
          d="M88.426 83.206s2.685 6.202 11.602 6.522c7.82.28 8.973-7.008 7.434-17.505l-.909-5.483c-6.118-2.897-15.478.54-15.478.54s-.576 2.044-.19 5.504c-2.276 2.066-1.824 5.618-1.824 5.618s-.905-1.922-1.98-2.321c-.86-.32-1.897.089-2.322 1.98-1.04 4.632 3.667 5.145 3.667 5.145"
          fill="#FFC6A0"
        />
        <path
          stroke="#DB836E"
          strokeWidth="1.145"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M100.843 77.099l1.701-.928-1.015-4.324.674-1.406"
        />
        <path
          d="M105.546 74.092c-.022.713-.452 1.279-.96 1.263-.51-.016-.904-.607-.882-1.32.021-.713.452-1.278.96-1.263.51.016.904.607.882 1.32M97.592 74.349c-.022.713-.452 1.278-.961 1.263-.509-.016-.904-.607-.882-1.32.022-.713.452-1.279.961-1.263.51.016.904.606.882 1.32"
          fill="#552950"
        />
        <path
          d="M91.132 86.786s5.269 4.957 12.679 2.327"
          stroke="#DB836E"
          strokeWidth="1.145"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M99.776 81.903s-3.592.232-1.44-2.79c1.59-1.496 4.897-.46 4.897-.46s1.156 3.906-3.457 3.25"
          fill="#DB836E"
        />
        <path
          d="M102.88 70.6s2.483.84 3.402.715M93.883 71.975s2.492-1.144 4.778-1.073"
          stroke="#5C2552"
          strokeWidth="1.526"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86.32 77.374s.961.879 1.458 2.106c-.377.48-1.033 1.152-.236 1.809M99.337 83.719s1.911.151 2.509-.254"
          stroke="#DB836E"
          strokeWidth="1.145"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.782 115.821l15.73-3.012M100.165 115.821l10.04-2.008"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M66.508 86.763s-1.598 8.83-6.697 14.078"
          stroke="#E4EBF7"
          strokeWidth="1.114"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M128.31 87.934s3.013 4.121 4.06 11.785"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.09 84.816s-6.03 9.912-13.607 9.903"
          stroke="#DB836E"
          strokeWidth=".795"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M112.366 65.909l-.142 5.32s5.993 4.472 11.945 9.202c4.482 3.562 8.888 7.455 10.985 8.662 4.804 2.766 8.9 3.355 11.076 1.808 4.071-2.894 4.373-9.878-8.136-15.263-4.271-1.838-16.144-6.36-25.728-9.73"
          fill="#FFC6A0"
        />
        <path
          d="M130.532 85.488s4.588 5.757 11.619 6.214"
          stroke="#DB836E"
          strokeWidth=".75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M121.708 105.73s-.393 8.564-1.34 13.612"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M115.784 161.512s-3.57-1.488-2.678-7.14"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M101.52 290.246s4.326 2.057 7.408 1.03c2.842-.948 4.564.673 7.132 1.186 2.57.514 6.925 1.108 11.772-1.269-.104-5.551-6.939-4.01-12.048-6.763-2.582-1.39-3.812-4.757-3.625-8.863h-9.471s-1.402 10.596-1.169 14.68"
          fill="#CBD1D1"
        />
        <path
          d="M101.496 290.073s2.447 1.281 6.809.658c3.081-.44 3.74.485 7.479 1.039 3.739.554 10.802-.07 11.91-.9.415 1.108-.347 2.077-.347 2.077s-1.523.608-4.847.831c-2.045.137-5.843.293-7.663-.507-1.8-1.385-5.286-1.917-5.77-.243-3.947.958-7.41-.288-7.41-.288l-.16-2.667z"
          fill="#2B0849"
        />
        <path d="M108.824 276.19h3.116s-.103 6.751 4.57 8.62c-4.673.624-8.62-2.32-7.686-8.62" fill="#A4AABA" />
        <path
          d="M57.65 272.52s-2.122 7.47-4.518 12.396c-1.811 3.724-4.255 7.548 5.505 7.548 6.698 0 9.02-.483 7.479-6.648-1.541-6.164.268-13.296.268-13.296H57.65z"
          fill="#CBD1D1"
        />
        <path
          d="M51.54 290.04s2.111 1.178 6.682 1.178c6.128 0 8.31-1.662 8.31-1.662s.605 1.122-.624 2.18c-1 .862-3.624 1.603-7.444 1.559-4.177-.049-5.876-.57-6.786-1.177-.831-.554-.692-1.593-.138-2.078"
          fill="#2B0849"
        />
        <path
          d="M58.533 274.438s.034 1.529-.315 2.95c-.352 1.431-1.087 3.127-1.139 4.17-.058 1.16 4.57 1.592 5.194.035.623-1.559 1.303-6.475 1.927-7.306.622-.831-4.94-2.135-5.667.15"
          fill="#A4AABA"
        />
        <path
          d="M100.885 277.015l13.306.092s1.291-54.228 1.843-64.056c.552-9.828 3.756-43.13.997-62.788l-12.48-.64-22.725.776s-.433 3.944-1.19 9.921c-.062.493-.677.838-.744 1.358-.075.582.42 1.347.318 1.956-2.35 14.003-6.343 32.926-8.697 46.425-.116.663-1.227 1.004-1.45 2.677-.04.3.21 1.516.112 1.785-6.836 18.643-10.89 47.584-14.2 61.551l14.528-.014s2.185-8.524 4.008-16.878c2.796-12.817 22.987-84.553 22.987-84.553l3-.517 1.037 46.1s-.223 1.228.334 2.008c.558.782-.556 1.117-.39 2.233l.39 1.784s-.446 7.14-.892 11.826c-.446 4.685-.092 38.954-.092 38.954"
          fill="#7BB2F9"
        />
        <path
          d="M77.438 220.434c1.146.094 4.016-2.008 6.916-4.91M107.55 223.931s2.758-1.103 6.069-3.862"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M108.459 220.905s2.759-1.104 6.07-3.863"
          stroke="#648BD8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.099 223.557s2.608-.587 6.47-3.346M87.33 150.82c-.27 3.088.297 8.478-4.315 9.073M104.829 149.075s.11 13.936-1.286 14.983c-2.207 1.655-2.975 1.934-2.975 1.934M101.014 149.63s.035 12.81-1.19 24.245M94.93 174.965s7.174-1.655 9.38-1.655M75.671 204.754c-.316 1.55-.64 3.067-.973 4.535 0 0-1.45 1.822-1.003 3.756.446 1.934-.943 2.034-4.96 15.273-1.686 5.559-4.464 18.49-6.313 27.447-.078.38-4.018 18.06-4.093 18.423M77.043 196.743a313.269 313.269 0 0 1-.877 4.729M83.908 151.414l-1.19 10.413s-1.091.148-.496 2.23c.111 1.34-2.66 15.692-5.153 30.267M57.58 272.94h13.238"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M117.377 147.423s-16.955-3.087-35.7.199c.157 2.501-.002 4.128-.002 4.128s14.607-2.802 35.476-.31c.251-2.342.226-4.017.226-4.017"
          fill="#192064"
        />
        <path
          d="M107.511 150.353l.004-4.885a.807.807 0 0 0-.774-.81c-2.428-.092-5.04-.108-7.795-.014a.814.814 0 0 0-.784.81l-.003 4.88c0 .456.371.82.827.808a140.76 140.76 0 0 1 7.688.017.81.81 0 0 0 .837-.806"
          fill="#FFF"
        />
        <path
          d="M106.402 149.426l.002-3.06a.64.64 0 0 0-.616-.643 94.135 94.135 0 0 0-5.834-.009.647.647 0 0 0-.626.643l-.001 3.056c0 .36.291.648.651.64 1.78-.04 3.708-.041 5.762.012.36.009.662-.279.662-.64"
          fill="#192064"
        />
        <path
          d="M101.485 273.933h12.272M102.652 269.075c.006 3.368.04 5.759.11 6.47M102.667 263.125c-.009 1.53-.015 2.98-.016 4.313M102.204 174.024l.893 44.402s.669 1.561-.224 2.677c-.892 1.116 2.455.67.893 2.231-1.562 1.562.893 1.116 0 3.347-.592 1.48-.988 20.987-1.09 34.956"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResultTitleDirective {
}
NzResultTitleDirective.ɵfac = function NzResultTitleDirective_Factory(t) { return new (t || NzResultTitleDirective)(); };
NzResultTitleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzResultTitleDirective, selectors: [["div", "nz-result-title", ""]], hostAttrs: [1, "ant-result-title"], exportAs: ["nzResultTitle"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultTitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'div[nz-result-title]',
                exportAs: 'nzResultTitle',
                host: {
                    class: 'ant-result-title'
                }
            }]
    }], null, null); })();
class NzResultSubtitleDirective {
}
NzResultSubtitleDirective.ɵfac = function NzResultSubtitleDirective_Factory(t) { return new (t || NzResultSubtitleDirective)(); };
NzResultSubtitleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzResultSubtitleDirective, selectors: [["div", "nz-result-subtitle", ""]], hostAttrs: [1, "ant-result-subtitle"], exportAs: ["nzResultSubtitle"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultSubtitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'div[nz-result-subtitle]',
                exportAs: 'nzResultSubtitle',
                host: {
                    class: 'ant-result-subtitle'
                }
            }]
    }], null, null); })();
class NzResultIconDirective {
}
NzResultIconDirective.ɵfac = function NzResultIconDirective_Factory(t) { return new (t || NzResultIconDirective)(); };
NzResultIconDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzResultIconDirective, selectors: [["i", "nz-result-icon", ""], ["div", "nz-result-icon", ""]], exportAs: ["nzResultIcon"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultIconDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'i[nz-result-icon], div[nz-result-icon]',
                exportAs: 'nzResultIcon'
            }]
    }], null, null); })();
class NzResultContentDirective {
}
NzResultContentDirective.ɵfac = function NzResultContentDirective_Factory(t) { return new (t || NzResultContentDirective)(); };
NzResultContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzResultContentDirective, selectors: [["div", "nz-result-content", ""]], hostAttrs: [1, "ant-result-content"], exportAs: ["nzResultContent"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'div[nz-result-content]',
                exportAs: 'nzResultContent',
                host: {
                    class: 'ant-result-content'
                }
            }]
    }], null, null); })();
class NzResultExtraDirective {
}
NzResultExtraDirective.ɵfac = function NzResultExtraDirective_Factory(t) { return new (t || NzResultExtraDirective)(); };
NzResultExtraDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzResultExtraDirective, selectors: [["div", "nz-result-extra", ""]], hostAttrs: [1, "ant-result-extra"], exportAs: ["nzResultExtra"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultExtraDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'div[nz-result-extra]',
                exportAs: 'nzResultExtra',
                host: {
                    class: 'ant-result-extra'
                }
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
const ExceptionStatus = ['404', '500', '403'];
class NzResultComponent {
    constructor(elementRef, cdr, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzStatus = 'info';
        this.isException = false;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-result');
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges() {
        this.setStatusIcon();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusIcon() {
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[icon] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[this.nzStatus];
    }
}
NzResultComponent.ɵfac = function NzResultComponent_Factory(t) { return new (t || NzResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality, 8)); };
NzResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzResultComponent, selectors: [["nz-result"]], hostVars: 10, hostBindings: function NzResultComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-result-success", ctx.nzStatus === "success")("ant-result-error", ctx.nzStatus === "error")("ant-result-info", ctx.nzStatus === "info")("ant-result-warning", ctx.nzStatus === "warning")("ant-result-rtl", ctx.dir === "rtl");
    } }, inputs: { nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubTitle: "nzSubTitle", nzExtra: "nzExtra" }, exportAs: ["nzResult"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 11, vars: 8, consts: [[1, "ant-result-icon"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "ant-result-extra", 4, "ngIf"], ["exceptionTpl", ""], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"], ["class", "ant-result-title", 4, "nzStringTemplateOutlet"], [1, "ant-result-title"], ["class", "ant-result-subtitle", 4, "nzStringTemplateOutlet"], [1, "ant-result-subtitle"], [1, "ant-result-extra"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function NzResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzResultComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzResultComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzResultComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzResultComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzResultComponent_ng_content_5_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzResultComponent_div_7_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzResultComponent_ng_content_8_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzResultComponent_ng_template_9_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isException)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzSubTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzSubTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzExtra);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent], encapsulation: 2, changeDetection: 0 });
NzResultComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzResultComponent.propDecorators = {
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzSubTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: `
    <div class="ant-result-icon">
      <ng-container *ngIf="!isException; else exceptionTpl">
        <ng-container *ngIf="icon">
          <ng-container *nzStringTemplateOutlet="icon; let icon">
            <i nz-icon [nzType]="icon" nzTheme="fill"></i>
          </ng-container>
        </ng-container>
        <ng-content *ngIf="!icon" select="[nz-result-icon]"></ng-content>
      </ng-container>
    </div>
    <ng-container *ngIf="nzTitle">
      <div class="ant-result-title" *nzStringTemplateOutlet="nzTitle">
        {{ nzTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzTitle" select="div[nz-result-title]"></ng-content>
    <ng-container *ngIf="nzSubTitle">
      <div class="ant-result-subtitle" *nzStringTemplateOutlet="nzSubTitle">
        {{ nzSubTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzSubTitle" select="div[nz-result-subtitle]"></ng-content>
    <ng-content select="nz-result-content, [nz-result-content]"></ng-content>
    <div class="ant-result-extra" *ngIf="nzExtra">
      <ng-container *nzStringTemplateOutlet="nzExtra">
        {{ nzExtra }}
      </ng-container>
    </div>
    <ng-content *ngIf="!nzExtra" select="div[nz-result-extra]"></ng-content>

    <ng-template #exceptionTpl>
      <ng-container [ngSwitch]="nzStatus">
        <nz-result-not-found *ngSwitchCase="'404'"></nz-result-not-found>
        <nz-result-server-error *ngSwitchCase="'500'"></nz-result-server-error>
        <nz-result-unauthorized *ngSwitchCase="'403'"></nz-result-unauthorized>
      </ng-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-result-success]': `nzStatus === 'success'`,
                    '[class.ant-result-error]': `nzStatus === 'error'`,
                    '[class.ant-result-info]': `nzStatus === 'info'`,
                    '[class.ant-result-warning]': `nzStatus === 'warning'`,
                    '[class.ant-result-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzSubTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
const cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
class NzResultModule {
}
NzResultModule.ɵfac = function NzResultModule_Factory(t) { return new (t || NzResultModule)(); };
NzResultModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzResultModule });
NzResultModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule],
                declarations: [NzResultComponent, ...cellDirectives, ...partial],
                exports: [NzResultComponent, ...cellDirectives]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzResultModule, { declarations: function () { return [NzResultComponent, NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective, NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]; }, exports: function () { return [NzResultComponent, NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_components_result_index_module_ts.js.map