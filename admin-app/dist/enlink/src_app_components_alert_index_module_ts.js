"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_alert_index_module_ts"],{

/***/ 57153:
/*!********************************************!*\
  !*** ./src/app/components/alert/banner.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertBannerComponent": () => (/* binding */ NzDemoAlertBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);


class NzDemoAlertBannerComponent {
}
NzDemoAlertBannerComponent.ɵfac = function NzDemoAlertBannerComponent_Factory(t) { return new (t || NzDemoAlertBannerComponent)(); };
NzDemoAlertBannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAlertBannerComponent, selectors: [["nz-demo-alert-banner"]], decls: 4, vars: 1, consts: [["nzBanner", "", "nzMessage", "Warning text"], ["nzBanner", "", "nzMessage", "Very long warning text warning text text text text text text text", "nzCloseable", ""], ["nzBanner", "", "nzMessage", "Warning text without icon", 3, "nzShowIcon"], ["nzBanner", "", "nzType", "error", "nzMessage", "Error text"]], template: function NzDemoAlertBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0)(1, "nz-alert", 1)(2, "nz-alert", 2)(3, "nz-alert", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShowIcon", false);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent], styles: ["nz-alert[_ngcontent-%COMP%] {\n        margin-bottom: 12px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxtQkFBbUI7TUFDckIiLCJmaWxlIjoiYmFubmVyLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1hbGVydCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 94600:
/*!*******************************************!*\
  !*** ./src/app/components/alert/basic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertBasicComponent": () => (/* binding */ NzDemoAlertBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);


class NzDemoAlertBasicComponent {
}
NzDemoAlertBasicComponent.ɵfac = function NzDemoAlertBasicComponent_Factory(t) { return new (t || NzDemoAlertBasicComponent)(); };
NzDemoAlertBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAlertBasicComponent, selectors: [["nz-demo-alert-basic"]], decls: 1, vars: 0, consts: [["nzType", "success", "nzMessage", "Success Text"]], template: function NzDemoAlertBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent], encapsulation: 2 });


/***/ }),

/***/ 38073:
/*!**********************************************!*\
  !*** ./src/app/components/alert/closable.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertClosableComponent": () => (/* binding */ NzDemoAlertClosableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);


class NzDemoAlertClosableComponent {
    afterClose() {
        console.log('close');
    }
}
NzDemoAlertClosableComponent.ɵfac = function NzDemoAlertClosableComponent_Factory(t) { return new (t || NzDemoAlertClosableComponent)(); };
NzDemoAlertClosableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAlertClosableComponent, selectors: [["nz-demo-alert-closable"]], decls: 2, vars: 0, consts: [["nzType", "warning", "nzCloseable", "", "nzMessage", "Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text", 3, "nzOnClose"], ["nzType", "error", "nzCloseable", "", "nzMessage", "Error Text", "nzDescription", "Error Description Error Description Error Description Error Description Error Description Error Description", 3, "nzOnClose"]], template: function NzDemoAlertClosableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoAlertClosableComponent_Template_nz_alert_nzOnClose_0_listener() { return ctx.afterClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoAlertClosableComponent_Template_nz_alert_nzOnClose_1_listener() { return ctx.afterClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent], styles: ["nz-alert[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLG1CQUFtQjtNQUNyQiIsImZpbGUiOiJjbG9zYWJsZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotYWxlcnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 45335:
/*!************************************************!*\
  !*** ./src/app/components/alert/close-text.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertCloseTextComponent": () => (/* binding */ NzDemoAlertCloseTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);


class NzDemoAlertCloseTextComponent {
}
NzDemoAlertCloseTextComponent.ɵfac = function NzDemoAlertCloseTextComponent_Factory(t) { return new (t || NzDemoAlertCloseTextComponent)(); };
NzDemoAlertCloseTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAlertCloseTextComponent, selectors: [["nz-demo-alert-close-text"]], decls: 1, vars: 0, consts: [["nzType", "info", "nzMessage", "Info Text", "nzCloseText", "Close Now"]], template: function NzDemoAlertCloseTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent], encapsulation: 2 });


/***/ }),

/***/ 43941:
/*!*************************************************!*\
  !*** ./src/app/components/alert/description.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertDescriptionComponent": () => (/* binding */ NzDemoAlertDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);


class NzDemoAlertDescriptionComponent {
}
NzDemoAlertDescriptionComponent.ɵfac = function NzDemoAlertDescriptionComponent_Factory(t) { return new (t || NzDemoAlertDescriptionComponent)(); };
NzDemoAlertDescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAlertDescriptionComponent, selectors: [["nz-demo-alert-description"]], decls: 4, vars: 0, consts: [["nzType", "success", "nzMessage", "Success Text", "nzDescription", "Success Description Success Description Success Description"], ["nzType", "info", "nzMessage", "Info Text", "nzDescription", "Info Description Info Description Info Description Info Description"], ["nzType", "warning", "nzMessage", "Warning Text", "nzDescription", "Warning Description Warning Description Warning Description Warning Description"], ["nzType", "error", "nzMessage", "Error Text", "nzDescription", "Error Description Error Description Error Description Error Description"]], template: function NzDemoAlertDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0)(1, "nz-alert", 1)(2, "nz-alert", 2)(3, "nz-alert", 3);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent], styles: ["nz-alert[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLG1CQUFtQjtNQUNyQiIsImZpbGUiOiJkZXNjcmlwdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotYWxlcnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 51332:
/*!**************************************************!*\
  !*** ./src/app/components/alert/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertEnComponent": () => (/* binding */ NzDemoAlertEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 94600);
/* harmony import */ var _closable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closable */ 38073);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ 69185);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner */ 57153);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ 94111);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./description */ 43941);
/* harmony import */ var _close_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./close-text */ 45335);














class NzDemoAlertEnComponent {
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
NzDemoAlertEnComponent.ɵfac = function NzDemoAlertEnComponent_Factory(t) { return new (t || NzDemoAlertEnComponent)(); };
NzDemoAlertEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoAlertEnComponent, selectors: [["nz-demo-alert"]], viewQuery: function NzDemoAlertEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 258, vars: 28, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-alert-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-alert-demo-style", "nzTitle", "More types"], ["nzHref", "#components-alert-demo-closable", "nzTitle", "Closable"], ["nzHref", "#components-alert-demo-description", "nzTitle", "Description"], ["nzHref", "#components-alert-demo-icon", "nzTitle", "Icon"], ["nzHref", "#components-alert-demo-close-text", "nzTitle", "Customized Close Text"], ["nzHref", "#components-alert-demo-banner", "nzTitle", "Banner"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-alert-basic", "nzGenerateCommand", "ng g ng-zorro-antd:alert-basic <name>", "nzComponentName", "NzDemoAlertBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Closable", "nzSelector", "nz-demo-alert-closable", "nzGenerateCommand", "ng g ng-zorro-antd:alert-closable <name>", "nzComponentName", "NzDemoAlertClosableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Icon", "nzSelector", "nz-demo-alert-icon", "nzGenerateCommand", "ng g ng-zorro-antd:alert-icon <name>", "nzComponentName", "NzDemoAlertIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Banner", "nzSelector", "nz-demo-alert-banner", "nzGenerateCommand", "ng g ng-zorro-antd:alert-banner <name>", "nzComponentName", "NzDemoAlertBannerComponent", "nzIframeSource", "/iframe/#/alert-banner", "nzIframeHeight", "220", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "More types", "nzSelector", "nz-demo-alert-style", "nzGenerateCommand", "ng g ng-zorro-antd:alert-style <name>", "nzComponentName", "NzDemoAlertStyleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Description", "nzSelector", "nz-demo-alert-description", "nzGenerateCommand", "ng g ng-zorro-antd:alert-description <name>", "nzComponentName", "NzDemoAlertDescriptionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customized Close Text", "nzSelector", "nz-demo-alert-close-text", "nzGenerateCommand", "ng g ng-zorro-antd:alert-close-text <name>", "nzComponentName", "NzDemoAlertCloseTextComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-alert"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-alert'", 1, "anchor"]], template: function NzDemoAlertEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoAlertEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "span", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Alert component for feedback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "h2", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "When you need to show alert messages to users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "When you need a persistent static container which is closable by user actions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "pre", 17)(32, "code")(33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " NzAlertModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "'ng-zorro-antd/alert'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "h2")(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoAlertEnComponent_Template_i_click_52_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 22)(54, "div", 23)(55, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "nz-demo-alert-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "The simplest usage for short messages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "nz-demo-alert-closable", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "To show close button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "nz-demo-alert-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Decent icon make information more clear and more friendly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "nz-demo-alert-banner", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Display Alert as a banner at top of page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 23)(76, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "nz-demo-alert-style", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "There are 4 types of Alert: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](94, "nz-demo-alert-description", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "Additional description for alert message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](99, "nz-demo-alert-close-text", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "Replace the default icon with customized content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "h2", 34)(105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "h3", 36)(110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, "nz-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "table")(117, "thead")(118, "tr")(119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "tbody")(130, "tr")(131, "td")(132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "[nzBanner]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, "Whether to show as banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "td")(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "td")(140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](141, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "tr")(144, "td")(145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, "[nzCloseable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "Whether Alert can be closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "tr")(157, "td")(158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "[nzCloseText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "Close text to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "td")(163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](164, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "tr")(169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "Additional content of Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "td")(175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](176, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "tr")(181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "[nzMessage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, "Content of Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "tr")(193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, "[nzShowIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](197, "Whether to show icon, in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](199, "nzBanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, " mode default is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](205, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](206, "td")(207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](208, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "tr")(212, "td")(213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](214, "[nzIconType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](216, "Icon type, effective when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](218, "nzShowIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "tr")(229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "Type of Alert styles, in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](235, "nzBanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, " mode default is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](238, "'warning'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](239, "td")(240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](241, "'success' | 'info' | 'warning' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "td")(243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](244, "'info'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "tr")(247, "td")(248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](249, "(nzOnClose)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](251, "Callback when Alert is closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](254, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](256, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-basic")("nzLink", "components-alert-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-closable")("nzLink", "components-alert-demo-closable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/closable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-icon")("nzLink", "components-alert-demo-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-banner")("nzLink", "components-alert-demo-banner")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/banner.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-style")("nzLink", "components-alert-demo-style")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/style.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-description")("nzLink", "components-alert-demo-description")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/description.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-close-text")("nzLink", "components-alert-demo-close-text")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/close-text.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoAlertBasicComponent, _closable__WEBPACK_IMPORTED_MODULE_2__.NzDemoAlertClosableComponent, _icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoAlertIconComponent, _banner__WEBPACK_IMPORTED_MODULE_4__.NzDemoAlertBannerComponent, _style__WEBPACK_IMPORTED_MODULE_5__.NzDemoAlertStyleComponent, _description__WEBPACK_IMPORTED_MODULE_6__.NzDemoAlertDescriptionComponent, _close_text__WEBPACK_IMPORTED_MODULE_7__.NzDemoAlertCloseTextComponent], encapsulation: 2 });


/***/ }),

/***/ 69185:
/*!******************************************!*\
  !*** ./src/app/components/alert/icon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertIconComponent": () => (/* binding */ NzDemoAlertIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);


class NzDemoAlertIconComponent {
}
NzDemoAlertIconComponent.ɵfac = function NzDemoAlertIconComponent_Factory(t) { return new (t || NzDemoAlertIconComponent)(); };
NzDemoAlertIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAlertIconComponent, selectors: [["nz-demo-alert-icon"]], decls: 8, vars: 0, consts: [["nzType", "success", "nzMessage", "Success Tips", "nzShowIcon", ""], ["nzType", "info", "nzMessage", "Informational Notes", "nzShowIcon", ""], ["nzType", "warning", "nzMessage", "Warning", "nzShowIcon", ""], ["nzType", "error", "nzMessage", "Error", "nzShowIcon", ""], ["nzType", "success", "nzMessage", "Success Tips", "nzDescription", "Detailed description and advices about successful copywriting.", "nzShowIcon", ""], ["nzType", "info", "nzMessage", "Informational Notes", "nzDescription", "Additional description and informations about copywriting.", "nzShowIcon", ""], ["nzType", "warning", "nzMessage", "Warning", "nzDescription", "This is a warning notice about copywriting.", "nzShowIcon", ""], ["nzType", "error", "nzMessage", "Error", "nzDescription", "This is an error message about copywriting.", "nzShowIcon", ""]], template: function NzDemoAlertIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0)(1, "nz-alert", 1)(2, "nz-alert", 2)(3, "nz-alert", 3)(4, "nz-alert", 4)(5, "nz-alert", 5)(6, "nz-alert", 6)(7, "nz-alert", 7);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent], styles: ["nz-alert[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsbUJBQW1CO01BQ3JCIiwiZmlsZSI6Imljb24udHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LWFsZXJ0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 83199:
/*!**************************************************!*\
  !*** ./src/app/components/alert/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertModule": () => (/* binding */ NzDemoAlertModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 87633);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner */ 57153);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 94600);
/* harmony import */ var _closable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./closable */ 38073);
/* harmony import */ var _close_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./close-text */ 45335);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./description */ 43941);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ 69185);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ 94111);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zh.component */ 27216);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./en.component */ 51332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);















class NzDemoAlertModule {
}
NzDemoAlertModule.ɵfac = function NzDemoAlertModule_Factory(t) { return new (t || NzDemoAlertModule)(); };
NzDemoAlertModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: NzDemoAlertModule });
NzDemoAlertModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoAlertEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoAlertZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](NzDemoAlertModule, { declarations: [_banner__WEBPACK_IMPORTED_MODULE_2__.NzDemoAlertBannerComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoAlertBasicComponent,
        _closable__WEBPACK_IMPORTED_MODULE_4__.NzDemoAlertClosableComponent,
        _close_text__WEBPACK_IMPORTED_MODULE_5__.NzDemoAlertCloseTextComponent,
        _description__WEBPACK_IMPORTED_MODULE_6__.NzDemoAlertDescriptionComponent,
        _icon__WEBPACK_IMPORTED_MODULE_7__.NzDemoAlertIconComponent,
        _style__WEBPACK_IMPORTED_MODULE_8__.NzDemoAlertStyleComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoAlertZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoAlertEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__.NzAlertModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 87633:
/*!********************************************!*\
  !*** ./src/app/components/alert/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);

const moduleList = [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_0__.NzAlertModule];


/***/ }),

/***/ 94111:
/*!*******************************************!*\
  !*** ./src/app/components/alert/style.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertStyleComponent": () => (/* binding */ NzDemoAlertStyleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);


class NzDemoAlertStyleComponent {
}
NzDemoAlertStyleComponent.ɵfac = function NzDemoAlertStyleComponent_Factory(t) { return new (t || NzDemoAlertStyleComponent)(); };
NzDemoAlertStyleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAlertStyleComponent, selectors: [["nz-demo-alert-style"]], decls: 4, vars: 0, consts: [["nzType", "success", "nzMessage", "Success Text"], ["nzType", "info", "nzMessage", "Info Text"], ["nzType", "warning", "nzMessage", "Warning Text"], ["nzType", "error", "nzMessage", "Error Text"]], template: function NzDemoAlertStyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0)(1, "nz-alert", 1)(2, "nz-alert", 2)(3, "nz-alert", 3);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent], styles: ["nz-alert[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLG1CQUFtQjtNQUNyQiIsImZpbGUiOiJzdHlsZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotYWxlcnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 27216:
/*!**************************************************!*\
  !*** ./src/app/components/alert/zh.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAlertZhComponent": () => (/* binding */ NzDemoAlertZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 94600);
/* harmony import */ var _closable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closable */ 38073);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ 69185);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner */ 57153);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ 94111);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./description */ 43941);
/* harmony import */ var _close_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./close-text */ 45335);














class NzDemoAlertZhComponent {
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
NzDemoAlertZhComponent.ɵfac = function NzDemoAlertZhComponent_Factory(t) { return new (t || NzDemoAlertZhComponent)(); };
NzDemoAlertZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoAlertZhComponent, selectors: [["nz-demo-alert"]], viewQuery: function NzDemoAlertZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 266, vars: 28, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-alert-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-alert-demo-style", "nzTitle", "\u56DB\u79CD\u6837\u5F0F"], ["nzHref", "#components-alert-demo-closable", "nzTitle", "\u53EF\u5173\u95ED\u7684\u8B66\u544A\u63D0\u793A"], ["nzHref", "#components-alert-demo-description", "nzTitle", "\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD"], ["nzHref", "#components-alert-demo-icon", "nzTitle", "\u56FE\u6807"], ["nzHref", "#components-alert-demo-close-text", "nzTitle", "\u81EA\u5B9A\u4E49\u5173\u95ED"], ["nzHref", "#components-alert-demo-banner", "nzTitle", "\u9876\u90E8\u516C\u544A"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-alert-basic", "nzGenerateCommand", "ng g ng-zorro-antd:alert-basic <name>", "nzComponentName", "NzDemoAlertBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u53EF\u5173\u95ED\u7684\u8B66\u544A\u63D0\u793A", "nzSelector", "nz-demo-alert-closable", "nzGenerateCommand", "ng g ng-zorro-antd:alert-closable <name>", "nzComponentName", "NzDemoAlertClosableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u56FE\u6807", "nzSelector", "nz-demo-alert-icon", "nzGenerateCommand", "ng g ng-zorro-antd:alert-icon <name>", "nzComponentName", "NzDemoAlertIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9876\u90E8\u516C\u544A", "nzSelector", "nz-demo-alert-banner", "nzGenerateCommand", "ng g ng-zorro-antd:alert-banner <name>", "nzComponentName", "NzDemoAlertBannerComponent", "nzIframeSource", "/iframe/#/alert-banner", "nzIframeHeight", "220", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u56DB\u79CD\u6837\u5F0F", "nzSelector", "nz-demo-alert-style", "nzGenerateCommand", "ng g ng-zorro-antd:alert-style <name>", "nzComponentName", "NzDemoAlertStyleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD", "nzSelector", "nz-demo-alert-description", "nzGenerateCommand", "ng g ng-zorro-antd:alert-description <name>", "nzComponentName", "NzDemoAlertDescriptionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u5173\u95ED", "nzSelector", "nz-demo-alert-close-text", "nzGenerateCommand", "ng g ng-zorro-antd:alert-close-text <name>", "nzComponentName", "NzDemoAlertCloseTextComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-alert"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-alert'", 1, "anchor"]], template: function NzDemoAlertZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoAlertZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\u8B66\u544A\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h2", 15)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ul")(28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\u5F53\u67D0\u4E2A\u9875\u9762\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "\u975E\u6D6E\u5C42\u7684\u9759\u6001\u5C55\u73B0\u5F62\u5F0F\uFF0C\u59CB\u7EC8\u5C55\u73B0\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931\uFF0C\u7528\u6237\u53EF\u4EE5\u70B9\u51FB\u5173\u95ED\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "pre", 17)(33, "code")(34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " NzAlertModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "'ng-zorro-antd/alert'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "h2")(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoAlertZhComponent_Template_i_click_53_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 22)(55, "div", 23)(56, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "nz-demo-alert-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u9002\u7528\u4E8E\u7B80\u77ED\u7684\u8B66\u544A\u63D0\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "nz-demo-alert-closable", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u70B9\u51FB\u53EF\u5173\u95ED\u8B66\u544A\u63D0\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "nz-demo-alert-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "\u53EF\u53E3\u7684\u56FE\u6807\u8BA9\u4FE1\u606F\u7C7B\u578B\u66F4\u52A0\u9192\u76EE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "nz-demo-alert-banner", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "\u9875\u9762\u9876\u90E8\u901A\u544A\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u6709\u56FE\u6807\u4E14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "'warning'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 23)(83, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "nz-demo-alert-style", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "\u5171\u6709\u56DB\u79CD\u6837\u5F0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](101, "nz-demo-alert-description", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD\u7684\u8B66\u544A\u63D0\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](106, "nz-demo-alert-close-text", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5173\u95ED\uFF0C\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\u4F1A\u66FF\u6362\u539F\u5148\u7684\u5173\u95ED\u6309\u94AE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "h2", 34)(112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "h3", 36)(117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "nz-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "table")(124, "thead")(125, "tr")(126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "tbody")(137, "tr")(138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "[nzBanner]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "\u662F\u5426\u7528\u4F5C\u9876\u90E8\u516C\u544A");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "td")(144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "td")(147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "tr")(151, "td")(152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153, "[nzCloseable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "\u9ED8\u8BA4\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](162, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "tr")(164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "[nzCloseText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168, "\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "tr")(176, "td")(177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](180, "\u8B66\u544A\u63D0\u793A\u7684\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "tr")(188, "td")(189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190, "[nzMessage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](192, "\u8B66\u544A\u63D0\u793A\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](197, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "tr")(200, "td")(201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, "[nzShowIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, "\u662F\u5426\u663E\u793A\u8F85\u52A9\u56FE\u6807\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206, "nzBanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](207, " \u6A21\u5F0F\u4E0B\u9ED8\u8BA4\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "td")(214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](215, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](217, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "tr")(219, "td")(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, "[nzIconType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](223, "\u81EA\u5B9A\u4E49\u56FE\u6807\u7C7B\u578B\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](225, "nzShowIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](228, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](229, " \u65F6\u6709\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "td")(231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](232, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](236, "tr")(237, "td")(238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](239, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](241, "\u6307\u5B9A\u8B66\u544A\u63D0\u793A\u7684\u6837\u5F0F\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243, "nzBanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](244, " \u6A21\u5F0F\u4E0B\u9ED8\u8BA4\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](246, "'warning'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "td")(248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](249, "'success' | 'info' | 'warning' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](252, "'info'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "tr")(255, "td")(256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](257, "(nzOnClose)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](259, "\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](262, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](264, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-basic")("nzLink", "components-alert-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-closable")("nzLink", "components-alert-demo-closable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/closable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-icon")("nzLink", "components-alert-demo-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-banner")("nzLink", "components-alert-demo-banner")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/banner.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-style")("nzLink", "components-alert-demo-style")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/style.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-description")("nzLink", "components-alert-demo-description")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/description.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-alert-demo-close-text")("nzLink", "components-alert-demo-close-text")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/alert/demo/close-text.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoAlertBasicComponent, _closable__WEBPACK_IMPORTED_MODULE_2__.NzDemoAlertClosableComponent, _icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoAlertIconComponent, _banner__WEBPACK_IMPORTED_MODULE_4__.NzDemoAlertBannerComponent, _style__WEBPACK_IMPORTED_MODULE_5__.NzDemoAlertStyleComponent, _description__WEBPACK_IMPORTED_MODULE_6__.NzDemoAlertDescriptionComponent, _close_text__WEBPACK_IMPORTED_MODULE_7__.NzDemoAlertCloseTextComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_alert_index_module_ts.js.map