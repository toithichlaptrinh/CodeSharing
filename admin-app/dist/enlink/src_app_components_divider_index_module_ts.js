"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_divider_index_module_ts"],{

/***/ 30220:
/*!****************************************************!*\
  !*** ./src/app/components/divider/en.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDividerEnComponent": () => (/* binding */ NzDemoDividerEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal */ 54743);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical */ 53903);
/* harmony import */ var _orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orientation */ 85617);










class NzDemoDividerEnComponent {
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
NzDemoDividerEnComponent.??fac = function NzDemoDividerEnComponent_Factory(t) { return new (t || NzDemoDividerEnComponent)(); };
NzDemoDividerEnComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: NzDemoDividerEnComponent, selectors: [["nz-demo-divider"]], viewQuery: function NzDemoDividerEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 145, vars: 16, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-divider-demo-horizontal", "nzTitle", "Horizontal"], ["nzHref", "#components-divider-demo-orientation", "nzTitle", "Orientation of title"], ["nzHref", "#components-divider-demo-vertical", "nzTitle", "Vertical"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Horizontal", "nzSelector", "nz-demo-divider-horizontal", "nzGenerateCommand", "ng g ng-zorro-antd:divider-horizontal <name>", "nzComponentName", "NzDemoDividerHorizontalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Vertical", "nzSelector", "nz-demo-divider-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:divider-vertical <name>", "nzComponentName", "NzDemoDividerVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Orientation of title", "nzSelector", "nz-demo-divider-orientation", "nzGenerateCommand", "ng g ng-zorro-antd:divider-orientation <name>", "nzComponentName", "NzDemoDividerOrientationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-divider"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-divider'", 1, "anchor"]], template: function NzDemoDividerEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("nzClick", function NzDemoDividerEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "section", 6)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9, "Divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](10, "span", 7)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "A divider line separates different content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "h2", 11)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "ul")(23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "Divide sections of article.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](26, "Divide inline text and links such as the operation column of table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "pre", 13)(28, "code")(29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](31, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](33, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](34, " NzDividerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](36, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](39, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](42, "'ng-zorro-antd/divider'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](44, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "h2")(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](47, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NzDemoDividerEnComponent_Template_i_click_48_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "div", 18)(50, "div", 19)(51, "nz-code-box", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](52, "nz-demo-divider-horizontal", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](55, "Divider default type is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](57, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](58, ". Support inner text inside Divider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](60, "nz-demo-divider-vertical", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](63, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](65, "nzType=\"vertical\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](66, " make it vertical.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](67, "div", 19)(68, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](69, "nz-demo-divider-orientation", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](72, "Set orientation of divider to left or right.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](74, "h2", 26)(75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](76, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](78, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](79, "h3", 28)(80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](81, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](82, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](83, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](85, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](86, "table")(87, "thead")(88, "tr")(89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](90, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](92, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](94, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](96, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](97, "tbody")(98, "tr")(99, "td")(100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](101, "[nzDashed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](103, "whether line is dasded");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](104, "td")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](106, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](107, "td")(108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](109, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](110, "tr")(111, "td")(112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](113, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](115, "direction type of divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](116, "td")(117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](118, "'horizontal' | 'vertical'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](119, "td")(120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](121, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](122, "tr")(123, "td")(124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](125, "[nzText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](127, "inner text of divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](128, "td")(129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](130, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](132, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](133, "tr")(134, "td")(135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](136, "[nzOrientation]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](138, "inner text orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](139, "td")(140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](141, "'center' | 'left' | 'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](144, "'center'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzId", "components-divider-demo-horizontal")("nzLink", "components-divider-demo-horizontal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/demo/horizontal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzId", "components-divider-demo-vertical")("nzLink", "components-divider-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzId", "components-divider-demo-orientation")("nzLink", "components-divider-demo-orientation")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/demo/orientation.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal__WEBPACK_IMPORTED_MODULE_1__.NzDemoDividerHorizontalComponent, _vertical__WEBPACK_IMPORTED_MODULE_2__.NzDemoDividerVerticalComponent, _orientation__WEBPACK_IMPORTED_MODULE_3__.NzDemoDividerOrientationComponent], encapsulation: 2 });


/***/ }),

/***/ 54743:
/*!**************************************************!*\
  !*** ./src/app/components/divider/horizontal.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDividerHorizontalComponent": () => (/* binding */ NzDemoDividerHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);


function NzDemoDividerHorizontalComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Add");
} }
class NzDemoDividerHorizontalComponent {
}
NzDemoDividerHorizontalComponent.??fac = function NzDemoDividerHorizontalComponent_Factory(t) { return new (t || NzDemoDividerHorizontalComponent)(); };
NzDemoDividerHorizontalComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoDividerHorizontalComponent, selectors: [["nz-demo-divider-horizontal"]], decls: 14, vars: 1, consts: [["nzText", "With Text"], ["nzDashed", "", 3, "nzText"], ["text", ""], ["nz-icon", "", "nzType", "plus"]], template: function NzDemoDividerHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-divider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, NzDemoDividerHorizontalComponent_ng_template_10_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzText", _r0);
    } }, directives: [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__.NzDividerComponent], encapsulation: 2 });


/***/ }),

/***/ 32217:
/*!****************************************************!*\
  !*** ./src/app/components/divider/index.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDividerModule": () => (/* binding */ NzDemoDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 35107);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ 54743);
/* harmony import */ var _orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orientation */ 85617);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical */ 53903);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zh.component */ 93505);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ 30220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);











class NzDemoDividerModule {
}
NzDemoDividerModule.??fac = function NzDemoDividerModule_Factory(t) { return new (t || NzDemoDividerModule)(); };
NzDemoDividerModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: NzDemoDividerModule });
NzDemoDividerModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoDividerEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoDividerZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](NzDemoDividerModule, { declarations: [_horizontal__WEBPACK_IMPORTED_MODULE_2__.NzDemoDividerHorizontalComponent,
        _orientation__WEBPACK_IMPORTED_MODULE_3__.NzDemoDividerOrientationComponent,
        _vertical__WEBPACK_IMPORTED_MODULE_4__.NzDemoDividerVerticalComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoDividerZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoDividerEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__.NzDividerModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 35107:
/*!**********************************************!*\
  !*** ./src/app/components/divider/module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);

const moduleList = [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_0__.NzDividerModule];


/***/ }),

/***/ 85617:
/*!***************************************************!*\
  !*** ./src/app/components/divider/orientation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDividerOrientationComponent": () => (/* binding */ NzDemoDividerOrientationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);


class NzDemoDividerOrientationComponent {
}
NzDemoDividerOrientationComponent.??fac = function NzDemoDividerOrientationComponent_Factory(t) { return new (t || NzDemoDividerOrientationComponent)(); };
NzDemoDividerOrientationComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoDividerOrientationComponent, selectors: [["nz-demo-divider-orientation"]], decls: 7, vars: 0, consts: [["nzText", "Left Text", "nzOrientation", "left"], ["nzText", "Right Text", "nzOrientation", "right"]], template: function NzDemoDividerOrientationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "nz-divider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    } }, directives: [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__.NzDividerComponent], encapsulation: 2 });


/***/ }),

/***/ 53903:
/*!************************************************!*\
  !*** ./src/app/components/divider/vertical.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDividerVerticalComponent": () => (/* binding */ NzDemoDividerVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);


class NzDemoDividerVerticalComponent {
}
NzDemoDividerVerticalComponent.??fac = function NzDemoDividerVerticalComponent_Factory(t) { return new (t || NzDemoDividerVerticalComponent)(); };
NzDemoDividerVerticalComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoDividerVerticalComponent, selectors: [["nz-demo-divider-vertical"]], decls: 8, vars: 0, consts: [["nzType", "vertical"], ["href", "#"]], template: function NzDemoDividerVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    } }, directives: [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__.NzDividerComponent], encapsulation: 2 });


/***/ }),

/***/ 93505:
/*!****************************************************!*\
  !*** ./src/app/components/divider/zh.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDividerZhComponent": () => (/* binding */ NzDemoDividerZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal */ 54743);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical */ 53903);
/* harmony import */ var _orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orientation */ 85617);










class NzDemoDividerZhComponent {
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
NzDemoDividerZhComponent.??fac = function NzDemoDividerZhComponent_Factory(t) { return new (t || NzDemoDividerZhComponent)(); };
NzDemoDividerZhComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: NzDemoDividerZhComponent, selectors: [["nz-demo-divider"]], viewQuery: function NzDemoDividerZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 143, vars: 16, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-divider-demo-horizontal", "nzTitle", "\u6C34\u5E73\u5206\u5272\u7EBF"], ["nzHref", "#components-divider-demo-orientation", "nzTitle", "\u6807\u9898\u4F4D\u7F6E"], ["nzHref", "#components-divider-demo-vertical", "nzTitle", "\u5782\u76F4\u5206\u5272\u7EBF"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u6C34\u5E73\u5206\u5272\u7EBF", "nzSelector", "nz-demo-divider-horizontal", "nzGenerateCommand", "ng g ng-zorro-antd:divider-horizontal <name>", "nzComponentName", "NzDemoDividerHorizontalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5782\u76F4\u5206\u5272\u7EBF", "nzSelector", "nz-demo-divider-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:divider-vertical <name>", "nzComponentName", "NzDemoDividerVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6807\u9898\u4F4D\u7F6E", "nzSelector", "nz-demo-divider-orientation", "nzGenerateCommand", "ng g ng-zorro-antd:divider-orientation <name>", "nzComponentName", "NzDemoDividerOrientationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-divider"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-divider'", 1, "anchor"]], template: function NzDemoDividerZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("nzClick", function NzDemoDividerZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "section", 6)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9, "Divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "\u5206\u5272\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, "\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "h2", 11)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "ul")(24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25, "\u5BF9\u4E0D\u540C\u7AE0\u8282\u7684\u6587\u672C\u6BB5\u843D\u8FDB\u884C\u5206\u5272\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27, "\u5BF9\u884C\u5185\u6587\u5B57/\u94FE\u63A5\u8FDB\u884C\u5206\u5272\uFF0C\u4F8B\u5982\u8868\u683C\u7684\u64CD\u4F5C\u5217\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "pre", 13)(29, "code")(30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](31, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](34, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35, " NzDividerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](43, "'ng-zorro-antd/divider'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](45, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "h2")(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](48, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NzDemoDividerZhComponent_Template_i_click_49_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "div", 18)(51, "div", 19)(52, "nz-code-box", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](53, "nz-demo-divider-horizontal", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](56, "\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u5206\u5272\u7EBF\uFF0C\u53EF\u5728\u4E2D\u95F4\u52A0\u5165\u6587\u5B57\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](57, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](58, "nz-demo-divider-vertical", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](61, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](63, "nzType=\"vertical\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](64, " \u8BBE\u7F6E\u4E3A\u884C\u5185\u7684\u5782\u76F4\u5206\u5272\u7EBF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](65, "div", 19)(66, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](67, "nz-demo-divider-orientation", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](70, "\u4FEE\u6539\u5206\u5272\u7EBF\u6807\u9898\u7684\u4F4D\u7F6E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](71, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](72, "h2", 26)(73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](74, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](75, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](76, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "h3", 28)(78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](79, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](80, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](81, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](82, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](83, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "table")(85, "thead")(86, "tr")(87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](88, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](90, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](92, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](94, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](95, "tbody")(96, "tr")(97, "td")(98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](99, "[nzDashed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](101, "\u662F\u5426\u865A\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](102, "td")(103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](104, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](105, "td")(106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](107, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](108, "tr")(109, "td")(110, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](111, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](113, "\u6C34\u5E73\u8FD8\u662F\u5782\u76F4\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](114, "td")(115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](116, "'horizontal' | 'vertical'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](117, "td")(118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](119, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](120, "tr")(121, "td")(122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](123, "[nzText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](125, "\u4E2D\u95F4\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](126, "td")(127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](128, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](130, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](131, "tr")(132, "td")(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](134, "[nzOrientation]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](136, "\u4E2D\u95F4\u6587\u5B57\u65B9\u5411");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](137, "td")(138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](139, "'center' | 'left' | 'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](140, "td")(141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](142, "'center'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzId", "components-divider-demo-horizontal")("nzLink", "components-divider-demo-horizontal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/demo/horizontal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzId", "components-divider-demo-vertical")("nzLink", "components-divider-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("nzId", "components-divider-demo-orientation")("nzLink", "components-divider-demo-orientation")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/divider/demo/orientation.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal__WEBPACK_IMPORTED_MODULE_1__.NzDemoDividerHorizontalComponent, _vertical__WEBPACK_IMPORTED_MODULE_2__.NzDemoDividerVerticalComponent, _orientation__WEBPACK_IMPORTED_MODULE_3__.NzDemoDividerOrientationComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_divider_index_module_ts.js.map