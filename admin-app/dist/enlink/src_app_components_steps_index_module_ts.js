"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_steps_index_module_ts"],{

/***/ 62739:
/*!***********************************************!*\
  !*** ./src/app/components/steps/clickable.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsClickableComponent": () => (/* binding */ NzDemoStepsClickableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);



class NzDemoStepsClickableComponent {
    constructor() {
        this.index = 0;
        this.disable = false;
    }
    onIndexChange(index) {
        this.index = index;
    }
}
NzDemoStepsClickableComponent.ɵfac = function NzDemoStepsClickableComponent_Factory(t) { return new (t || NzDemoStepsClickableComponent)(); };
NzDemoStepsClickableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsClickableComponent, selectors: [["nz-demo-steps-clickable"]], decls: 9, vars: 3, consts: [[3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Finished", "nzDescription", "This is a description.", 3, "nzDisabled"], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."], ["nzDirection", "vertical", 3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Finished", "nzDescription", "This is a description."]], template: function NzDemoStepsClickableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsClickableComponent_Template_nz_steps_nzIndexChange_0_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-steps", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsClickableComponent_Template_nz_steps_nzIndexChange_5_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 5)(7, "nz-step", 2)(8, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__.NzDividerComponent], encapsulation: 2 });


/***/ }),

/***/ 57038:
/*!*************************************************************!*\
  !*** ./src/app/components/steps/customized-progress-dot.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsCustomizedProgressDotComponent": () => (/* binding */ NzDemoStepsCustomizedProgressDotComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popover */ 45068);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoStepsCustomizedProgressDotComponent_ng_template_5_ng_template_1_Template(rf, ctx) { }
function NzDemoStepsCustomizedProgressDotComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoStepsCustomizedProgressDotComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dot_r2 = ctx.$implicit;
    const status_r3 = ctx.status;
    const index_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("nzContent", "steps ", index_r4, " status: ", status_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", dot_r2);
} }
class NzDemoStepsCustomizedProgressDotComponent {
}
NzDemoStepsCustomizedProgressDotComponent.ɵfac = function NzDemoStepsCustomizedProgressDotComponent_Factory(t) { return new (t || NzDemoStepsCustomizedProgressDotComponent)(); };
NzDemoStepsCustomizedProgressDotComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsCustomizedProgressDotComponent, selectors: [["nz-demo-steps-customized-progress-dot"]], decls: 7, vars: 2, consts: [[3, "nzCurrent", "nzProgressDot"], ["nzTitle", "Finished", "nzDescription", "You can hover on the dot."], ["nzTitle", "In Progress", "nzDescription", "You can hover on the dot."], ["nzTitle", "Waiting", "nzDescription", "You can hover on the dot."], ["progressTemplate", ""], ["nz-popover", "", 2, "margin-left", "-100%", 3, "nzContent"], [3, "ngTemplateOutlet"]], template: function NzDemoStepsCustomizedProgressDotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3)(4, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoStepsCustomizedProgressDotComponent_ng_template_5_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1)("nzProgressDot", _r0);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__.NzPopoverDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], encapsulation: 2 });


/***/ }),

/***/ 86759:
/*!**************************************************!*\
  !*** ./src/app/components/steps/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsEnComponent": () => (/* binding */ NzDemoStepsEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple */ 13410);
/* harmony import */ var _small_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./small-size */ 88304);
/* harmony import */ var _start_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-index */ 42592);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ 34924);
/* harmony import */ var _step_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step-next */ 83648);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertical */ 15492);
/* harmony import */ var _vertical_small__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vertical-small */ 47271);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error */ 34129);
/* harmony import */ var _progress_dot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-dot */ 5897);
/* harmony import */ var _customized_progress_dot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customized-progress-dot */ 57038);
/* harmony import */ var _clickable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clickable */ 62739);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav */ 69822);





















class NzDemoStepsEnComponent {
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
NzDemoStepsEnComponent.ɵfac = function NzDemoStepsEnComponent_Factory(t) { return new (t || NzDemoStepsEnComponent)(); };
NzDemoStepsEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: NzDemoStepsEnComponent, selectors: [["nz-demo-steps"]], viewQuery: function NzDemoStepsEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 508, vars: 40, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-steps-demo-simple", "nzTitle", "Basic"], ["nzHref", "#components-steps-demo-small-size", "nzTitle", "Mini version"], ["nzHref", "#components-steps-demo-start-index", "nzTitle", "Starting Index"], ["nzHref", "#components-steps-demo-icon", "nzTitle", "With icon"], ["nzHref", "#components-steps-demo-step-next", "nzTitle", "Switch Step"], ["nzHref", "#components-steps-demo-vertical", "nzTitle", "Vertical"], ["nzHref", "#components-steps-demo-vertical-small", "nzTitle", "Vertical mini version"], ["nzHref", "#components-steps-demo-error", "nzTitle", "Error status"], ["nzHref", "#components-steps-demo-progress-dot", "nzTitle", "Dot Style"], ["nzHref", "#components-steps-demo-customized-progress-dot", "nzTitle", "Customized Dot Style"], ["nzHref", "#components-steps-demo-clickable", "nzTitle", "Clickable"], ["nzHref", "#components-steps-demo-nav", "nzTitle", "Navigation Steps"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-steps-simple", "nzGenerateCommand", "ng g ng-zorro-antd:steps-simple <name>", "nzComponentName", "NzDemoStepsSimpleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Mini version", "nzSelector", "nz-demo-steps-small-size", "nzGenerateCommand", "ng g ng-zorro-antd:steps-small-size <name>", "nzComponentName", "NzDemoStepsSmallSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Starting Index", "nzSelector", "nz-demo-steps-start-index", "nzGenerateCommand", "ng g ng-zorro-antd:steps-start-index <name>", "nzComponentName", "NzDemoStepsStartIndexComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "With icon", "nzSelector", "nz-demo-steps-icon", "nzGenerateCommand", "ng g ng-zorro-antd:steps-icon <name>", "nzComponentName", "NzDemoStepsIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Switch Step", "nzSelector", "nz-demo-steps-step-next", "nzGenerateCommand", "ng g ng-zorro-antd:steps-step-next <name>", "nzComponentName", "NzDemoStepsStepNextComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Vertical", "nzSelector", "nz-demo-steps-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical <name>", "nzComponentName", "NzDemoStepsVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Vertical mini version", "nzSelector", "nz-demo-steps-vertical-small", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical-small <name>", "nzComponentName", "NzDemoStepsVerticalSmallComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Error status", "nzSelector", "nz-demo-steps-error", "nzGenerateCommand", "ng g ng-zorro-antd:steps-error <name>", "nzComponentName", "NzDemoStepsErrorComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dot Style", "nzSelector", "nz-demo-steps-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-progress-dot <name>", "nzComponentName", "NzDemoStepsProgressDotComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customized Dot Style", "nzSelector", "nz-demo-steps-customized-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-customized-progress-dot <name>", "nzComponentName", "NzDemoStepsCustomizedProgressDotComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Clickable", "nzSelector", "nz-demo-steps-clickable", "nzGenerateCommand", "ng g ng-zorro-antd:steps-clickable <name>", "nzComponentName", "NzDemoStepsClickableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Navigation Steps", "nzSelector", "nz-demo-steps-nav", "nzGenerateCommand", "ng g ng-zorro-antd:steps-nav <name>", "nzComponentName", "NzDemoStepsNavComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-steps"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-steps'", 1, "anchor"], ["id", "nz-step"], ["onclick", "window.location.hash = 'nz-step'", 1, "anchor"]], template: function NzDemoStepsEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzClick", function NzDemoStepsEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "section", 15)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "span", 16)(20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "p")(25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, " is a navigation bar that guides users through the steps of a task.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "h2", 20)(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "pre", 22)(36, "code")(37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, " NzStepsModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "'ng-zorro-antd/steps'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "h2")(54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NzDemoStepsEnComponent_Template_i_click_56_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div", 27)(58, "div", 28)(59, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](60, "nz-demo-steps-simple", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, "The most basic step bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](65, "nz-demo-steps-small-size", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "By setting like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70, "<nz-steps nzSize=\"small\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, ", you can get a mini version.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](73, "nz-demo-steps-start-index", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "By setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78, "nzStartIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79, " to change starting index of a step component. Be sure to add an offset to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](81, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, " as well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](84, "nz-demo-steps-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, "You can use your own custom icons by setting the property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](90, " for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93, ". Old API is still compatible but we strongly suggest the new API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](95, "nz-demo-steps-step-next", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](98, "Cooperate with the content and buttons, to represent the progress of a process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](100, "nz-demo-steps-vertical", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](103, "A simple step bar in the vertical direction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](105, "nz-demo-steps-vertical-small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](106, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](108, "A simple mini version step bar in the vertical direction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](110, "nz-demo-steps-error", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](113, "By using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](115, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](119, ", you can specify the state for current step.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](121, "nz-demo-steps-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](124, "Steps with progress dot style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](126, "nz-demo-steps-customized-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](129, "You can customize the display for Steps with progress dot style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](131, "nz-demo-steps-clickable", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](134, "subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](136, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, " makes Steps clickable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](139, "nz-demo-steps-nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](142, "Navigation steps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](143, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](144, "h2", 44)(145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](146, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](147, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "pre", 46)(150, "code")(151, "span", 47)(152, "span", 47)(153, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](154, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](155, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](156, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](158, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](159, "span", 47)(160, "span", 47)(161, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](162, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](163, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](164, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "span", 49)(168, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](169, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](170, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](171, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](172, "first step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](174, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](175, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](176, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "span", 47)(178, "span", 47)(179, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](181, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](182, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](183, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](184, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "span", 47)(186, "span", 47)(187, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](189, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](192, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "span", 49)(194, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](195, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](196, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](197, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](198, "second step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](199, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](200, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](201, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](202, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](203, "span", 47)(204, "span", 47)(205, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](206, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](207, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](210, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](211, "span", 47)(212, "span", 47)(213, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](214, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](215, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](216, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](217, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](218, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](219, "span", 49)(220, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](221, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](222, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](223, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](224, "third step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](225, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](226, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](227, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](228, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](229, "span", 47)(230, "span", 47)(231, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](232, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](233, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](235, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](236, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "span", 47)(238, "span", 47)(239, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](240, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](241, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](242, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](243, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](244, "h3", 50)(245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](246, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](247, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](248, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](249, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](250, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](252, "The whole of the step bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](253, "table")(254, "thead")(255, "tr")(256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](257, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](258, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](259, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](260, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](261, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](262, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](263, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](264, "tbody")(265, "tr")(266, "td")(267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](268, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](270, "type of steps, can be set to one of the following values: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](272, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](275, "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](276, "td")(277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](278, "'default' | 'navigation'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](279, "td")(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](281, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](282, "tr")(283, "td")(284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](285, "[nzCurrent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](287, "To set the current step, counting from 0. You can overwrite this state by using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](289, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](290, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](292, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](293, "td")(294, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](295, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](296, "td")(297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](298, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](299, "tr")(300, "td")(301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](302, "[nzDirection]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](304, "To specify the direction of the step bar, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](306, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](307, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](309, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](310, " are currently supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](311, "td")(312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](313, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](314, "td")(315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](317, "tr")(318, "td")(319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](320, "[nzLabelPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](322, "Support vertical title and description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](323, "td")(324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](325, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](328, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](329, "tr")(330, "td")(331, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](332, "[nzProgressDot]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](334, "Steps with progress dot style, customize the progress dot by setting it with TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](335, "td")(336, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](337, "boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](340, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](341, "tr")(342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](344, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](346, "To specify the size of the step bar, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](348, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](349, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](351, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](352, " are currently supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](353, "td")(354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](355, "'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](356, "td")(357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](358, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](359, "tr")(360, "td")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](362, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](364, "To specify the status of current step, can be set to one of the following values: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](366, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](368, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](369, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](370, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](372, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](373, "td")(374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](375, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](376, "td")(377, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](378, "'process'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](379, "tr")(380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](382, "[nzStartIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](384, "To specify the starting number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](387, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](388, "td")(389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](390, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](391, "tr")(392, "td")(393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](394, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](396, "Trigger event when step click");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](397, "td")(398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](399, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](401, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](402, "h3", 53)(403, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](404, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](405, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](406, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](407, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](408, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](409, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](410, "A single step in the step bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](411, "table")(412, "thead")(413, "tr")(414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](415, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](416, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](417, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](418, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](419, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](420, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](421, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](422, "tbody")(423, "tr")(424, "td")(425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](426, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](428, "description of the step, optional property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](429, "td")(430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](431, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](433, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](434, "tr")(435, "td")(436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](437, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](439, "icon of the step, optional property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](440, "td")(441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](442, "string | string[] | Set<string> | { [klass: string]: any; }");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](443, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](445, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](447, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](448, "tr")(449, "td")(450, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](451, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](453, "to specify the status. It will be automatically set by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](455, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](456, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](458, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](459, " if not configured. Optional values are: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](461, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](463, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](465, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](467, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](468, "td")(469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](470, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](471, "td")(472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](473, "'wait'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](474, "tr")(475, "td")(476, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](477, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](479, "title of the step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](480, "td")(481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](482, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](484, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](485, "tr")(486, "td")(487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](488, "[nzSubtitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](490, "subTitle of the step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](491, "td")(492, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](493, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](495, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](496, "tr")(497, "td")(498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](499, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](501, "disable click");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](502, "td")(503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](504, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](505, "td")(506, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](507, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-simple")("nzLink", "components-steps-demo-simple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-small-size")("nzLink", "components-steps-demo-small-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/small-size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-start-index")("nzLink", "components-steps-demo-start-index")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/start-index.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-icon")("nzLink", "components-steps-demo-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-step-next")("nzLink", "components-steps-demo-step-next")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/step-next.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-vertical")("nzLink", "components-steps-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-vertical-small")("nzLink", "components-steps-demo-vertical-small")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical-small.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-error")("nzLink", "components-steps-demo-error")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/error.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-progress-dot")("nzLink", "components-steps-demo-progress-dot")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-customized-progress-dot")("nzLink", "components-steps-demo-customized-progress-dot")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/customized-progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-clickable")("nzLink", "components-steps-demo-clickable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/clickable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-nav")("nzLink", "components-steps-demo-nav")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/nav.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _simple__WEBPACK_IMPORTED_MODULE_1__.NzDemoStepsSimpleComponent, _small_size__WEBPACK_IMPORTED_MODULE_2__.NzDemoStepsSmallSizeComponent, _start_index__WEBPACK_IMPORTED_MODULE_3__.NzDemoStepsStartIndexComponent, _icon__WEBPACK_IMPORTED_MODULE_4__.NzDemoStepsIconComponent, _step_next__WEBPACK_IMPORTED_MODULE_5__.NzDemoStepsStepNextComponent, _vertical__WEBPACK_IMPORTED_MODULE_6__.NzDemoStepsVerticalComponent, _vertical_small__WEBPACK_IMPORTED_MODULE_7__.NzDemoStepsVerticalSmallComponent, _error__WEBPACK_IMPORTED_MODULE_8__.NzDemoStepsErrorComponent, _progress_dot__WEBPACK_IMPORTED_MODULE_9__.NzDemoStepsProgressDotComponent, _customized_progress_dot__WEBPACK_IMPORTED_MODULE_10__.NzDemoStepsCustomizedProgressDotComponent, _clickable__WEBPACK_IMPORTED_MODULE_11__.NzDemoStepsClickableComponent, _nav__WEBPACK_IMPORTED_MODULE_12__.NzDemoStepsNavComponent], encapsulation: 2 });


/***/ }),

/***/ 34129:
/*!*******************************************!*\
  !*** ./src/app/components/steps/error.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsErrorComponent": () => (/* binding */ NzDemoStepsErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);


class NzDemoStepsErrorComponent {
}
NzDemoStepsErrorComponent.ɵfac = function NzDemoStepsErrorComponent_Factory(t) { return new (t || NzDemoStepsErrorComponent)(); };
NzDemoStepsErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsErrorComponent, selectors: [["nz-demo-steps-error"]], decls: 4, vars: 1, consts: [["nzStatus", "error", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent], encapsulation: 2 });


/***/ }),

/***/ 34924:
/*!******************************************!*\
  !*** ./src/app/components/steps/icon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsIconComponent": () => (/* binding */ NzDemoStepsIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




function NzDemoStepsIconComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} }
class NzDemoStepsIconComponent {
}
NzDemoStepsIconComponent.ɵfac = function NzDemoStepsIconComponent_Factory(t) { return new (t || NzDemoStepsIconComponent)(); };
NzDemoStepsIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsIconComponent, selectors: [["nz-demo-steps-icon"]], decls: 7, vars: 1, consts: [["nzTitle", "Login", "nzStatus", "finish", "nzIcon", "user"], ["nzTitle", "Verification", "nzStatus", "finish", "nzIcon", "solution"], ["nzTitle", "Pay", "nzStatus", "process", "nzIcon", "loading"], ["nzTitle", "Done", "nzStatus", "wait", 3, "nzIcon"], ["iconTemplate", ""], ["nz-icon", "", "nzType", "smile"]], template: function NzDemoStepsIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 0)(2, "nz-step", 1)(3, "nz-step", 2)(4, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoStepsIconComponent_ng_template_5_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", _r0);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 69074:
/*!**************************************************!*\
  !*** ./src/app/components/steps/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsModule": () => (/* binding */ NzDemoStepsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 67905);
/* harmony import */ var _clickable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickable */ 62739);
/* harmony import */ var _customized_progress_dot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customized-progress-dot */ 57038);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ 34129);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ 34924);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav */ 69822);
/* harmony import */ var _progress_dot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress-dot */ 5897);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple */ 13410);
/* harmony import */ var _small_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./small-size */ 88304);
/* harmony import */ var _start_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-index */ 42592);
/* harmony import */ var _step_next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step-next */ 83648);
/* harmony import */ var _vertical_small__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vertical-small */ 47271);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vertical */ 15492);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./zh.component */ 50042);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./en.component */ 86759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/popover */ 45068);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
























class NzDemoStepsModule {
}
NzDemoStepsModule.ɵfac = function NzDemoStepsModule_Factory(t) { return new (t || NzDemoStepsModule)(); };
NzDemoStepsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: NzDemoStepsModule });
NzDemoStepsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoStepsEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoStepsZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](NzDemoStepsModule, { declarations: [_clickable__WEBPACK_IMPORTED_MODULE_2__.NzDemoStepsClickableComponent,
        _customized_progress_dot__WEBPACK_IMPORTED_MODULE_3__.NzDemoStepsCustomizedProgressDotComponent,
        _error__WEBPACK_IMPORTED_MODULE_4__.NzDemoStepsErrorComponent,
        _icon__WEBPACK_IMPORTED_MODULE_5__.NzDemoStepsIconComponent,
        _nav__WEBPACK_IMPORTED_MODULE_6__.NzDemoStepsNavComponent,
        _progress_dot__WEBPACK_IMPORTED_MODULE_7__.NzDemoStepsProgressDotComponent,
        _simple__WEBPACK_IMPORTED_MODULE_8__.NzDemoStepsSimpleComponent,
        _small_size__WEBPACK_IMPORTED_MODULE_9__.NzDemoStepsSmallSizeComponent,
        _start_index__WEBPACK_IMPORTED_MODULE_10__.NzDemoStepsStartIndexComponent,
        _step_next__WEBPACK_IMPORTED_MODULE_11__.NzDemoStepsStepNextComponent,
        _vertical_small__WEBPACK_IMPORTED_MODULE_12__.NzDemoStepsVerticalSmallComponent,
        _vertical__WEBPACK_IMPORTED_MODULE_13__.NzDemoStepsVerticalComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoStepsZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoStepsEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_18__.NzStepsModule, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__.NzPopoverModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__.NzDividerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 67905:
/*!********************************************!*\
  !*** ./src/app/components/steps/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/popover */ 45068);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);





const moduleList = [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_0__.NzStepsModule, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_1__.NzPopoverModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__.NzDividerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule];


/***/ }),

/***/ 69822:
/*!*****************************************!*\
  !*** ./src/app/components/steps/nav.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsNavComponent": () => (/* binding */ NzDemoStepsNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);


class NzDemoStepsNavComponent {
    constructor() {
        this.index = 0;
    }
    onIndexChange(event) {
        this.index = event;
    }
}
NzDemoStepsNavComponent.ɵfac = function NzDemoStepsNavComponent_Factory(t) { return new (t || NzDemoStepsNavComponent)(); };
NzDemoStepsNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsNavComponent, selectors: [["nz-demo-steps-nav"]], decls: 14, vars: 3, consts: [["nzType", "navigation", "nzSize", "small", 3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Step 1", "nzSubtitle", "00:00:05", "nzStatus", "finish", "nzDescription", "This is a description."], ["nzTitle", "Step 2", "nzSubtitle", "00:01:02", "nzStatus", "process", "nzDescription", "This is a description."], ["nzTitle", "Step 3", "nzSubtitle", "waiting for long long time", "nzStatus", "wait", "nzDescription", "This is a description."], ["nzType", "navigation", 3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Step 1", "nzStatus", "finish"], ["nzTitle", "Step 2", "nzStatus", "process"], ["nzTitle", "Step 3", "nzStatus", "wait"], ["nzTitle", "Step 4", "nzStatus", "wait"], ["nzTitle", "finish 1", "nzStatus", "finish"], ["nzTitle", "finish 2", "nzStatus", "finish"], ["nzTitle", "current process", "nzStatus", "process"], ["nzTitle", "wait", "nzStatus", "wait", "nzDisabled", ""]], template: function NzDemoStepsNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsNavComponent_Template_nz_steps_nzIndexChange_0_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-steps", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsNavComponent_Template_nz_steps_nzIndexChange_4_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-step", 5)(6, "nz-step", 6)(7, "nz-step", 7)(8, "nz-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsNavComponent_Template_nz_steps_nzIndexChange_9_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-step", 9)(11, "nz-step", 10)(12, "nz-step", 11)(13, "nz-step", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent], styles: ["nz-steps[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 60px;\n        box-shadow: rgb(232, 232, 232) 0px -1px 0px 0 inset;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLG1EQUFtRDtNQUNyRCIsImZpbGUiOiJuYXYudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXN0ZXBzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigyMzIsIDIzMiwgMjMyKSAwcHggLTFweCAwcHggMCBpbnNldDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 5897:
/*!**************************************************!*\
  !*** ./src/app/components/steps/progress-dot.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsProgressDotComponent": () => (/* binding */ NzDemoStepsProgressDotComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);



class NzDemoStepsProgressDotComponent {
}
NzDemoStepsProgressDotComponent.ɵfac = function NzDemoStepsProgressDotComponent_Factory(t) { return new (t || NzDemoStepsProgressDotComponent)(); };
NzDemoStepsProgressDotComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsProgressDotComponent, selectors: [["nz-demo-steps-progress-dot"]], decls: 11, vars: 2, consts: [["nzProgressDot", "", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."], ["nzProgressDot", "", "nzDirection", "vertical", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description. This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description. This is a description."]], template: function NzDemoStepsProgressDotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-steps", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 5)(7, "nz-step", 5)(8, "nz-step", 6)(9, "nz-step", 3)(10, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__.NzDividerComponent], encapsulation: 2 });


/***/ }),

/***/ 13410:
/*!********************************************!*\
  !*** ./src/app/components/steps/simple.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsSimpleComponent": () => (/* binding */ NzDemoStepsSimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);


class NzDemoStepsSimpleComponent {
}
NzDemoStepsSimpleComponent.ɵfac = function NzDemoStepsSimpleComponent_Factory(t) { return new (t || NzDemoStepsSimpleComponent)(); };
NzDemoStepsSimpleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsSimpleComponent, selectors: [["nz-demo-steps-simple"]], decls: 4, vars: 1, consts: [[3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzSubtitle", "Left 00:00:08", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent], encapsulation: 2 });


/***/ }),

/***/ 88304:
/*!************************************************!*\
  !*** ./src/app/components/steps/small-size.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsSmallSizeComponent": () => (/* binding */ NzDemoStepsSmallSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);


class NzDemoStepsSmallSizeComponent {
    constructor() {
        this.current = 1;
    }
}
NzDemoStepsSmallSizeComponent.ɵfac = function NzDemoStepsSmallSizeComponent_Factory(t) { return new (t || NzDemoStepsSmallSizeComponent)(); };
NzDemoStepsSmallSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsSmallSizeComponent, selectors: [["nz-demo-steps-small-size"]], decls: 4, vars: 1, consts: [["nzSize", "small", 3, "nzCurrent"], ["nzTitle", "Finished"], ["nzTitle", "In Progress"], ["nzTitle", "Waiting"]], template: function NzDemoStepsSmallSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent], encapsulation: 2 });


/***/ }),

/***/ 42592:
/*!*************************************************!*\
  !*** ./src/app/components/steps/start-index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsStartIndexComponent": () => (/* binding */ NzDemoStepsStartIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);


class NzDemoStepsStartIndexComponent {
    constructor() {
        this.current = 3;
    }
}
NzDemoStepsStartIndexComponent.ɵfac = function NzDemoStepsStartIndexComponent_Factory(t) { return new (t || NzDemoStepsStartIndexComponent)(); };
NzDemoStepsStartIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsStartIndexComponent, selectors: [["nz-demo-steps-start-index"]], decls: 4, vars: 2, consts: [["nzSize", "small", 3, "nzCurrent", "nzStartIndex"], ["nzTitle", "Finished"], ["nzTitle", "In Progress"], ["nzTitle", "Waiting"]], template: function NzDemoStepsStartIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current)("nzStartIndex", 3);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent], encapsulation: 2 });


/***/ }),

/***/ 83648:
/*!***********************************************!*\
  !*** ./src/app/components/steps/step-next.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsStepNextComponent": () => (/* binding */ NzDemoStepsStepNextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






function NzDemoStepsStepNextComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsStepNextComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.pre(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function NzDemoStepsStepNextComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsStepNextComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function NzDemoStepsStepNextComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsStepNextComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class NzDemoStepsStepNextComponent {
    constructor() {
        this.current = 0;
        this.index = 'First-content';
    }
    pre() {
        this.current -= 1;
        this.changeContent();
    }
    next() {
        this.current += 1;
        this.changeContent();
    }
    done() {
        console.log('done');
    }
    changeContent() {
        switch (this.current) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            case 2: {
                this.index = 'third-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    }
}
NzDemoStepsStepNextComponent.ɵfac = function NzDemoStepsStepNextComponent_Factory(t) { return new (t || NzDemoStepsStepNextComponent)(); };
NzDemoStepsStepNextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsStepNextComponent, selectors: [["nz-demo-steps-step-next"]], decls: 10, vars: 5, consts: [[3, "nzCurrent"], ["nzTitle", "Finished"], ["nzTitle", "In Progress"], ["nzTitle", "Waiting"], [1, "steps-content"], [1, "steps-action"], ["nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function NzDemoStepsStepNextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoStepsStepNextComponent_button_7_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzDemoStepsStepNextComponent_button_8_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoStepsStepNextComponent_button_9_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 2);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: [".steps-content[_ngcontent-%COMP%] {\n        margin-top: 16px;\n        border: 1px dashed #e9e9e9;\n        border-radius: 6px;\n        background-color: #fafafa;\n        min-height: 200px;\n        text-align: center;\n        padding-top: 80px;\n      }\n\n      .steps-action[_ngcontent-%COMP%] {\n        margin-top: 24px;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtbmV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkIiLCJmaWxlIjoic3RlcC1uZXh0LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuc3RlcHMtY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgfVxuXG4gICAgICAuc3RlcHMtYWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 47271:
/*!****************************************************!*\
  !*** ./src/app/components/steps/vertical-small.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsVerticalSmallComponent": () => (/* binding */ NzDemoStepsVerticalSmallComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);


class NzDemoStepsVerticalSmallComponent {
}
NzDemoStepsVerticalSmallComponent.ɵfac = function NzDemoStepsVerticalSmallComponent_Factory(t) { return new (t || NzDemoStepsVerticalSmallComponent)(); };
NzDemoStepsVerticalSmallComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsVerticalSmallComponent, selectors: [["nz-demo-steps-vertical-small"]], decls: 4, vars: 1, consts: [["nzDirection", "vertical", "nzSize", "small", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsVerticalSmallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent], encapsulation: 2 });


/***/ }),

/***/ 15492:
/*!**********************************************!*\
  !*** ./src/app/components/steps/vertical.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsVerticalComponent": () => (/* binding */ NzDemoStepsVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ 76802);


class NzDemoStepsVerticalComponent {
}
NzDemoStepsVerticalComponent.ɵfac = function NzDemoStepsVerticalComponent_Factory(t) { return new (t || NzDemoStepsVerticalComponent)(); };
NzDemoStepsVerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsVerticalComponent, selectors: [["nz-demo-steps-vertical"]], decls: 4, vars: 1, consts: [["nzDirection", "vertical", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1)(2, "nz-step", 2)(3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__.NzStepComponent], encapsulation: 2 });


/***/ }),

/***/ 50042:
/*!**************************************************!*\
  !*** ./src/app/components/steps/zh.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoStepsZhComponent": () => (/* binding */ NzDemoStepsZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple */ 13410);
/* harmony import */ var _small_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./small-size */ 88304);
/* harmony import */ var _start_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-index */ 42592);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ 34924);
/* harmony import */ var _step_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step-next */ 83648);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertical */ 15492);
/* harmony import */ var _vertical_small__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vertical-small */ 47271);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error */ 34129);
/* harmony import */ var _progress_dot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-dot */ 5897);
/* harmony import */ var _customized_progress_dot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customized-progress-dot */ 57038);
/* harmony import */ var _clickable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clickable */ 62739);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav */ 69822);





















class NzDemoStepsZhComponent {
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
NzDemoStepsZhComponent.ɵfac = function NzDemoStepsZhComponent_Factory(t) { return new (t || NzDemoStepsZhComponent)(); };
NzDemoStepsZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: NzDemoStepsZhComponent, selectors: [["nz-demo-steps"]], viewQuery: function NzDemoStepsZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 512, vars: 40, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-steps-demo-simple", "nzTitle", "\u57FA\u672C\u7528\u6CD5"], ["nzHref", "#components-steps-demo-small-size", "nzTitle", "\u8FF7\u4F60\u7248"], ["nzHref", "#components-steps-demo-start-index", "nzTitle", "\u8D77\u59CB\u5E8F\u53F7"], ["nzHref", "#components-steps-demo-icon", "nzTitle", "\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-step-next", "nzTitle", "\u6B65\u9AA4\u5207\u6362"], ["nzHref", "#components-steps-demo-vertical", "nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-vertical-small", "nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-error", "nzTitle", "\u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF"], ["nzHref", "#components-steps-demo-progress-dot", "nzTitle", "\u70B9\u72B6\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-customized-progress-dot", "nzTitle", "\u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-clickable", "nzTitle", "\u53EF\u70B9\u51FB"], ["nzHref", "#components-steps-demo-nav", "nzTitle", "\u5BFC\u822A\u6B65\u9AA4"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u672C\u7528\u6CD5", "nzSelector", "nz-demo-steps-simple", "nzGenerateCommand", "ng g ng-zorro-antd:steps-simple <name>", "nzComponentName", "NzDemoStepsSimpleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u8FF7\u4F60\u7248", "nzSelector", "nz-demo-steps-small-size", "nzGenerateCommand", "ng g ng-zorro-antd:steps-small-size <name>", "nzComponentName", "NzDemoStepsSmallSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8D77\u59CB\u5E8F\u53F7", "nzSelector", "nz-demo-steps-start-index", "nzGenerateCommand", "ng g ng-zorro-antd:steps-start-index <name>", "nzComponentName", "NzDemoStepsStartIndexComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-icon", "nzGenerateCommand", "ng g ng-zorro-antd:steps-icon <name>", "nzComponentName", "NzDemoStepsIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6B65\u9AA4\u5207\u6362", "nzSelector", "nz-demo-steps-step-next", "nzGenerateCommand", "ng g ng-zorro-antd:steps-step-next <name>", "nzComponentName", "NzDemoStepsStepNextComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical <name>", "nzComponentName", "NzDemoStepsVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-vertical-small", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical-small <name>", "nzComponentName", "NzDemoStepsVerticalSmallComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF", "nzSelector", "nz-demo-steps-error", "nzGenerateCommand", "ng g ng-zorro-antd:steps-error <name>", "nzComponentName", "NzDemoStepsErrorComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u70B9\u72B6\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-progress-dot <name>", "nzComponentName", "NzDemoStepsProgressDotComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-customized-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-customized-progress-dot <name>", "nzComponentName", "NzDemoStepsCustomizedProgressDotComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u53EF\u70B9\u51FB", "nzSelector", "nz-demo-steps-clickable", "nzGenerateCommand", "ng g ng-zorro-antd:steps-clickable <name>", "nzComponentName", "NzDemoStepsClickableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5BFC\u822A\u6B65\u9AA4", "nzSelector", "nz-demo-steps-nav", "nzGenerateCommand", "ng g ng-zorro-antd:steps-nav <name>", "nzComponentName", "NzDemoStepsNavComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-steps"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-steps'", 1, "anchor"], ["id", "nz-step"], ["onclick", "window.location.hash = 'nz-step'", 1, "anchor"]], template: function NzDemoStepsZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzClick", function NzDemoStepsZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "section", 15)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "\u6B65\u9AA4\u6761");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "h2", 20)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "\u5F53\u4EFB\u52A1\u590D\u6742\u6216\u8005\u5B58\u5728\u5148\u540E\u5173\u7CFB\u65F6\uFF0C\u5C06\u5176\u5206\u89E3\u6210\u4E00\u7CFB\u5217\u6B65\u9AA4\uFF0C\u4ECE\u800C\u7B80\u5316\u4EFB\u52A1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "pre", 22)(35, "code")(36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, " NzStepsModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "'ng-zorro-antd/steps'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "h2")(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NzDemoStepsZhComponent_Template_i_click_55_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "div", 27)(57, "div", 28)(58, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](59, "nz-demo-steps-simple", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62, "\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](64, "nz-demo-steps-small-size", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67, "\u8FF7\u4F60\u7248\u7684\u6B65\u9AA4\u6761\uFF0C\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "<nz-steps nzSize=\"small\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70, " \u542F\u7528.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](72, "nz-demo-steps-start-index", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "nzStartIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78, " \u6765\u8BBE\u7F6E\u6B65\u9AA4\u6761\u7684\u8D77\u59CB\u5E8F\u53F7. \u8BF7\u6CE8\u610F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](81, " \u4E5F\u5E94\u8BE5\u6709\u5BF9\u5E94\u7684\u504F\u79FB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](83, "nz-demo-steps-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86, "\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](88, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, " \u5C5E\u6027\uFF0C\u53EF\u4EE5\u542F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](94, "nz-demo-steps-step-next", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97, "\u901A\u5E38\u914D\u5408\u5185\u5BB9\u53CA\u6309\u94AE\u4F7F\u7528\uFF0C\u8868\u793A\u4E00\u4E2A\u6D41\u7A0B\u7684\u5904\u7406\u8FDB\u5EA6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](99, "nz-demo-steps-vertical", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102, "\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](104, "nz-demo-steps-vertical-small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](107, "\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](109, "nz-demo-steps-error", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](115, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](117, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, " \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](120, "nz-demo-steps-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](123, "\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](124, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](125, "nz-demo-steps-customized-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](128, "\u4E3A\u70B9\u72B6\u6B65\u9AA4\u6761\u589E\u52A0\u81EA\u5B9A\u4E49\u5C55\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](130, "nz-demo-steps-clickable", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](133, "\u8BA2\u9605 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](135, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](136, " \u540E\uFF0CSteps \u53D8\u4E3A\u53EF\u70B9\u51FB\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](138, "nz-demo-steps-nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](141, "\u5BFC\u822A\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](142, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](143, "h2", 44)(144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](145, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](147, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](148, "pre", 46)(149, "code")(150, "span", 47)(151, "span", 47)(152, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](153, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](154, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](155, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](156, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "span", 47)(159, "span", 47)(160, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](162, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](164, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](165, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](166, "span", 49)(167, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](168, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](170, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](171, "\u7B2C\u4E00\u6B65");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](172, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](173, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](174, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](175, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](176, "span", 47)(177, "span", 47)(178, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](179, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](182, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](183, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](184, "span", 47)(185, "span", 47)(186, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](187, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](189, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](190, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](191, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](192, "span", 49)(193, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](194, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](195, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](196, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](197, "\u7B2C\u4E8C\u6B65");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](198, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](199, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](200, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](201, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](202, "span", 47)(203, "span", 47)(204, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](205, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](206, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](207, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](208, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](209, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](210, "span", 47)(211, "span", 47)(212, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](213, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](214, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](215, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](216, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](217, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](218, "span", 49)(219, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](220, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](221, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](222, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](223, "\u7B2C\u4E09\u6B65");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](224, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](227, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](228, "span", 47)(229, "span", 47)(230, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](231, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](232, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](233, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](234, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](235, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](236, "span", 47)(237, "span", 47)(238, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](239, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](240, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](241, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "h3", 50)(244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](245, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](246, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](247, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](248, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](249, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](251, "\u6574\u4F53\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](252, "table")(253, "thead")(254, "tr")(255, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](256, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](258, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](259, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](260, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](261, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "tbody")(264, "tr")(265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](267, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](269, "\u6B65\u9AA4\u6761\u7C7B\u578B\uFF0C\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](271, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](272, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](274, "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](275, " \u4E24\u79CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](276, "td")(277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](278, "'default' | 'navigation'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](279, "td")(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](281, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](282, "tr")(283, "td")(284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](285, "[nzCurrent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](287, "\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570\u3002\u5728\u5B50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](289, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](290, " \u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](292, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](293, " \u5C5E\u6027\u8986\u76D6\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](294, "td")(295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](296, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](297, "td")(298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](299, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](300, "tr")(301, "td")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](303, "[nzDirection]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](305, "\u6307\u5B9A\u6B65\u9AA4\u6761\u65B9\u5411\u3002\u76EE\u524D\u652F\u6301\u6C34\u5E73\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](307, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](308, "\uFF09\u548C\u7AD6\u76F4\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](310, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](311, "\uFF09\u4E24\u79CD\u65B9\u5411");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](312, "td")(313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](314, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](315, "td")(316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](317, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](318, "tr")(319, "td")(320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](321, "[nzLabelPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](323, "\u6307\u5B9A\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u6C34\u5E73\u653E\u56FE\u6807\u53F3\u4FA7\uFF0C\u53EF\u9009 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](325, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](326, " \u653E\u56FE\u6807\u4E0B\u65B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](327, "td")(328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](329, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](330, "td")(331, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](332, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](333, "tr")(334, "td")(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](336, "[nzProgressDot]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](338, "\u70B9\u72B6\u6B65\u9AA4\u6761\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](339, "td")(340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](341, "boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](344, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](345, "tr")(346, "td")(347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](348, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](350, "\u6307\u5B9A\u5927\u5C0F\uFF0C\u76EE\u524D\u652F\u6301\u666E\u901A\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](351, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](352, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](353, "\uFF09\u548C\u8FF7\u4F60\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](355, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](356, "\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](357, "td")(358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](359, "'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](360, "td")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](362, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](363, "tr")(364, "td")(365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](366, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](368, "\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u53EF\u9009 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](369, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](370, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](372, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](374, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](376, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](377, "td")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](379, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](382, "'process'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](383, "tr")(384, "td")(385, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](386, "[nzStartIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](388, "\u6307\u5B9A\u8D77\u59CB\u4F4D\u7F6E\u7684\u5E8F\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](391, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](392, "td")(393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](394, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](395, "tr")(396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](398, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](400, "\u70B9\u51FB\u5355\u4E2A\u6B65\u9AA4\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](403, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](405, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](406, "h3", 53)(407, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](408, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](409, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](410, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](411, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](412, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](413, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](414, "\u6B65\u9AA4\u6761\u5185\u7684\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](415, "table")(416, "thead")(417, "tr")(418, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](419, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](420, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](421, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](422, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](423, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](424, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](425, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](426, "tbody")(427, "tr")(428, "td")(429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](430, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](432, "\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0\uFF0C\u53EF\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](433, "td")(434, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](435, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](437, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](438, "tr")(439, "td")(440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](441, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](443, "\u6B65\u9AA4\u56FE\u6807\u7684\u7C7B\u578B\uFF0C\u53EF\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](444, "td")(445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](446, "string | string[] | Set<string> | { [klass: string]: any; }");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](447, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](449, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](451, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](452, "tr")(453, "td")(454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](455, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](457, "\u6307\u5B9A\u72B6\u6001\u3002\u5F53\u4E0D\u914D\u7F6E\u8BE5\u5C5E\u6027\u65F6\uFF0C\u4F1A\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](458, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](459, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](460, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](462, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](463, " \u6765\u81EA\u52A8\u6307\u5B9A\u72B6\u6001\u3002\u53EF\u9009\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](465, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](467, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](468, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](469, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](471, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](472, "td")(473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](474, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](475, "td")(476, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](477, "'wait'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](478, "tr")(479, "td")(480, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](481, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](483, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](484, "td")(485, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](486, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](488, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](489, "tr")(490, "td")(491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](492, "[nzSubtitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](494, "\u5B50\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](495, "td")(496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](497, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](499, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](500, "tr")(501, "td")(502, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](503, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](505, "\u7981\u7528\u70B9\u51FB");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](506, "td")(507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](508, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](509, "td")(510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](511, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-simple")("nzLink", "components-steps-demo-simple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-small-size")("nzLink", "components-steps-demo-small-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/small-size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-start-index")("nzLink", "components-steps-demo-start-index")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/start-index.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-icon")("nzLink", "components-steps-demo-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-step-next")("nzLink", "components-steps-demo-step-next")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/step-next.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-vertical")("nzLink", "components-steps-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-vertical-small")("nzLink", "components-steps-demo-vertical-small")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical-small.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-error")("nzLink", "components-steps-demo-error")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/error.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-progress-dot")("nzLink", "components-steps-demo-progress-dot")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-customized-progress-dot")("nzLink", "components-steps-demo-customized-progress-dot")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/customized-progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-clickable")("nzLink", "components-steps-demo-clickable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/clickable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-steps-demo-nav")("nzLink", "components-steps-demo-nav")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/nav.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _simple__WEBPACK_IMPORTED_MODULE_1__.NzDemoStepsSimpleComponent, _small_size__WEBPACK_IMPORTED_MODULE_2__.NzDemoStepsSmallSizeComponent, _start_index__WEBPACK_IMPORTED_MODULE_3__.NzDemoStepsStartIndexComponent, _icon__WEBPACK_IMPORTED_MODULE_4__.NzDemoStepsIconComponent, _step_next__WEBPACK_IMPORTED_MODULE_5__.NzDemoStepsStepNextComponent, _vertical__WEBPACK_IMPORTED_MODULE_6__.NzDemoStepsVerticalComponent, _vertical_small__WEBPACK_IMPORTED_MODULE_7__.NzDemoStepsVerticalSmallComponent, _error__WEBPACK_IMPORTED_MODULE_8__.NzDemoStepsErrorComponent, _progress_dot__WEBPACK_IMPORTED_MODULE_9__.NzDemoStepsProgressDotComponent, _customized_progress_dot__WEBPACK_IMPORTED_MODULE_10__.NzDemoStepsCustomizedProgressDotComponent, _clickable__WEBPACK_IMPORTED_MODULE_11__.NzDemoStepsClickableComponent, _nav__WEBPACK_IMPORTED_MODULE_12__.NzDemoStepsNavComponent], encapsulation: 2 });


/***/ }),

/***/ 76802:
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-steps.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzStepComponent": () => (/* binding */ NzStepComponent),
/* harmony export */   "NzStepsComponent": () => (/* binding */ NzStepsComponent),
/* harmony export */   "NzStepsModule": () => (/* binding */ NzStepsModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 87511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 41687);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 99052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 88153);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */







const _c0 = ["processDotTemplate"];
function NzStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function NzStepComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-progress", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx_r6.nzPercentage)("nzWidth", 40)("nzFormat", ctx_r6.nullProcessFormat)("nzStrokeWidth", 4);
} }
function NzStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.index + 1, " ");
} }
function NzStepComponent_ng_template_3_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", !ctx_r11.oldAPIIcon && icon_r12)("ngClass", ctx_r11.oldAPIIcon && icon_r12);
} }
function NzStepComponent_ng_template_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_3_span_4_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r10.nzIcon);
} }
function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzStepComponent_ng_template_3_div_0_Template, 2, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzStepComponent_ng_template_3_span_2_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_3_span_3_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzStepComponent_ng_template_3_span_4_Template, 2, 1, "span", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzStatus === "finish" && !ctx_r1.nzIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzStatus === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.nzStatus === "process" || ctx_r1.nzStatus === "wait") && !ctx_r1.nzIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzIcon);
} }
function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 20);
} }
function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customProcessTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c1, _r13, ctx_r2.nzStatus, ctx_r2.index));
} }
function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzTitle);
} }
function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.nzSubtitle);
} }
function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzSubtitle);
} }
function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzDescription);
} }
const _c2 = ["*"];
class NzStepComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.nzPercentage = null;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.nullProcessFormat = () => null;
        this._currentIndex = 0;
    }
    get nzStatus() {
        return this._status;
    }
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    get nzIcon() {
        return this._icon;
    }
    set nzIcon(value) {
        if (!(value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)) {
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
        }
        this._icon = value;
    }
    get showProgress() {
        return (this.nzPercentage !== null &&
            !this.nzIcon &&
            this.nzStatus === 'process' &&
            this.nzPercentage >= 0 &&
            this.nzPercentage <= 100);
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    onClick() {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    }
    enable() {
        this.nzDisabled = false;
        this.cdr.markForCheck();
    }
    disable() {
        this.nzDisabled = true;
        this.cdr.markForCheck();
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.click$.complete();
    }
}
NzStepComponent.ɵfac = function NzStepComponent_Factory(t) { return new (t || NzStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
NzStepComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzStepComponent, selectors: [["nz-step"]], viewQuery: function NzStepComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.processDotTemplate = _t.first);
    } }, hostAttrs: [1, "ant-steps-item"], hostVars: 16, hostBindings: function NzStepComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    } }, inputs: { nzDisabled: "nzDisabled", nzPercentage: "nzPercentage", nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzDescription: "nzDescription" }, exportAs: ["nzStep"], decls: 11, vars: 8, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-progress-icon", 4, "ngIf"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-progress-icon"], ["nzType", "circle", 3, "nzPercent", "nzWidth", "nzFormat", "nzStrokeWidth"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], ["nz-icon", "", 3, "nzType", "ngClass"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function NzStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzStepComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_3_Template, 5, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzStepComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.last !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showProcessDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProcessDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzSubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzDescription);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__.NzProgressComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzStringTemplateOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzStepComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['processDotTemplate', { static: false },] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDescription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzPercentage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()
], NzStepComponent.prototype, "nzDisabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                selector: 'nz-step',
                exportAs: 'nzStep',
                preserveWhitespaces: false,
                template: `
    <div
      class="ant-steps-item-container"
      [attr.role]="clickable && !nzDisabled ? 'button' : null"
      [tabindex]="clickable && !nzDisabled ? 0 : null"
      (click)="onClick()"
    >
      <div class="ant-steps-item-tail" *ngIf="last !== true"></div>
      <div class="ant-steps-item-icon">
        <ng-template [ngIf]="!showProcessDot">
          <div *ngIf="showProgress" class="ant-steps-progress-icon">
            <nz-progress
              [nzPercent]="nzPercentage"
              nzType="circle"
              [nzWidth]="40"
              [nzFormat]="nullProcessFormat"
              [nzStrokeWidth]="4"
            ></nz-progress>
          </div>
          <span class="ant-steps-icon" *ngIf="nzStatus === 'finish' && !nzIcon"><i nz-icon nzType="check"></i></span>
          <span class="ant-steps-icon" *ngIf="nzStatus === 'error'"><i nz-icon nzType="close"></i></span>
          <span class="ant-steps-icon" *ngIf="(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon">
            {{ index + 1 }}
          </span>
          <span class="ant-steps-icon" *ngIf="nzIcon">
            <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
              <i nz-icon [nzType]="!oldAPIIcon && icon" [ngClass]="oldAPIIcon && icon"></i>
            </ng-container>
          </span>
        </ng-template>
        <ng-template [ngIf]="showProcessDot">
          <span class="ant-steps-icon">
            <ng-template #processDotTemplate>
              <span class="ant-steps-icon-dot"></span>
            </ng-template>
            <ng-template
              [ngTemplateOutlet]="customProcessTemplate || processDotTemplate"
              [ngTemplateOutletContext]="{
                $implicit: processDotTemplate,
                status: nzStatus,
                index: index
              }"
            ></ng-template>
          </span>
        </ng-template>
      </div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          <div *ngIf="nzSubtitle" class="ant-steps-item-subtitle">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </div>
        </div>
        <div class="ant-steps-item-description">
          <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
        </div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-steps-item',
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'nzDisabled',
                    '[class.ant-steps-item-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzPercentage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], processDotTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['processDotTemplate', { static: false }]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzDescription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStepsComponent {
    constructor(elementRef, renderer, cdr, directionality) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzType = 'default';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.nzIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.showProcessDot = false;
        this.classMap = {};
        this.dir = 'ltr';
        this.setClassMap();
    }
    set nzProgressDot(value) {
        if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.toBoolean)(value);
        }
        this.updateChildrenSteps();
    }
    ngOnChanges(changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.setClassMap();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.setClassMap();
        this.updateChildrenSteps();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    }
    ngAfterContentInit() {
        if (this.steps) {
            this.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(() => {
                this.updateHostProgressClass();
                this.updateChildrenSteps();
            });
        }
    }
    updateHostProgressClass() {
        if (this.steps && !this.showProcessDot) {
            const hasPercent = !!this.steps.toArray().find(step => step.nzPercentage !== null);
            const className = 'ant-steps-with-progress';
            const hasClass = this.elementRef.nativeElement.classList.contains(className);
            if (hasPercent && !hasClass) {
                this.renderer.addClass(this.elementRef.nativeElement, className);
            }
            else if (!hasPercent && hasClass) {
                this.renderer.removeClass(this.elementRef.nativeElement, className);
            }
        }
    }
    updateChildrenSteps() {
        if (this.steps) {
            const length = this.steps.length;
            this.steps.toArray().forEach((step, index) => {
                Promise.resolve().then(() => {
                    step.outStatus = this.nzStatus;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.clickable = this.nzIndexChange.observers.length > 0;
                    step.direction = this.nzDirection;
                    step.index = index + this.nzStartIndex;
                    step.currentIndex = this.nzCurrent;
                    step.last = length === index + 1;
                    step.markForCheck();
                });
            });
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...this.steps.map(step => step.click$)).subscribe(index => this.nzIndexChange.emit(index));
        }
    }
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.nzDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.nzDirection === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.nzSize === 'small',
            ['ant-steps-navigation']: this.nzType === 'navigation',
            ['ant-steps-rtl']: this.dir === 'rtl'
        };
    }
}
NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) { return new (t || NzStepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, 8)); };
NzStepsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzStepsComponent, selectors: [["nz-steps"]], contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzStepComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.steps = _t);
    } }, inputs: { nzCurrent: "nzCurrent", nzDirection: "nzDirection", nzLabelPlacement: "nzLabelPlacement", nzType: "nzType", nzSize: "nzSize", nzStartIndex: "nzStartIndex", nzStatus: "nzStatus", nzProgressDot: "nzProgressDot" }, outputs: { nzIndexChange: "nzIndexChange" }, exportAs: ["nzSteps"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function NzStepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], encapsulation: 2, changeDetection: 0 });
NzStepsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzStepsComponent.propDecorators = {
    steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NzStepComponent,] }],
    nzCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzLabelPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzStartIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzProgressDot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-steps',
                exportAs: 'nzSteps',
                template: `
    <div class="ant-steps" [ngClass]="classMap">
      <ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzLabelPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzStartIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzProgressDot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NzStepComponent]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStepsModule {
}
NzStepsModule.ɵfac = function NzStepsModule_Factory(t) { return new (t || NzStepsModule)(); };
NzStepsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzStepsModule });
NzStepsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__.NzProgressModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__.NzProgressModule],
                exports: [NzStepsComponent, NzStepComponent],
                declarations: [NzStepsComponent, NzStepComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzStepsModule, { declarations: function () { return [NzStepsComponent, NzStepComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__.NzProgressModule]; }, exports: function () { return [NzStepsComponent, NzStepComponent]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_components_steps_index_module_ts.js.map