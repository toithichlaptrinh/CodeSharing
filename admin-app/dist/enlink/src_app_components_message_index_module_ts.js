"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_message_index_module_ts"],{

/***/ 84385:
/*!*********************************************!*\
  !*** ./src/app/components/message/close.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageCloseComponent": () => (/* binding */ NzDemoMessageCloseComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 11133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoMessageCloseComponent {
    constructor(message) {
        this.message = message;
    }
    startShowMessages() {
        this.message
            .loading('Action in progress', { nzDuration: 2500 })
            .onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.concatMap)(() => this.message.success('Loading finished', { nzDuration: 2500 }).onClose), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.concatMap)(() => this.message.info('Loading finished is finished', { nzDuration: 2500 }).onClose))
            .subscribe(() => {
            console.log('All completed!');
        });
    }
}
NzDemoMessageCloseComponent.??fac = function NzDemoMessageCloseComponent_Factory(t) { return new (t || NzDemoMessageCloseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService)); };
NzDemoMessageCloseComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NzDemoMessageCloseComponent, selectors: [["nz-demo-message-close"]], decls: 2, vars: 1, consts: [["nz-button", "", 3, "nzType", "click"]], template: function NzDemoMessageCloseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NzDemoMessageCloseComponent_Template_button_click_0_listener() { return ctx.startShowMessages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Display a sequence of messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzType", "default");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["??NzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 35008:
/*!************************************************!*\
  !*** ./src/app/components/message/duration.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageDurationComponent": () => (/* binding */ NzDemoMessageDurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoMessageDurationComponent {
    constructor(message) {
        this.message = message;
    }
    createBasicMessage() {
        this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
            nzDuration: 10000
        });
    }
}
NzDemoMessageDurationComponent.??fac = function NzDemoMessageDurationComponent_Factory(t) { return new (t || NzDemoMessageDurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoMessageDurationComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMessageDurationComponent, selectors: [["nz-demo-message-duration"]], decls: 2, vars: 1, consts: [["nz-button", "", 3, "nzType", "click"]], template: function NzDemoMessageDurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoMessageDurationComponent_Template_button_click_0_listener() { return ctx.createBasicMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Customized display duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzType", "default");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 88826:
/*!****************************************************!*\
  !*** ./src/app/components/message/en.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageEnComponent": () => (/* binding */ NzDemoMessageEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ 76373);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duration */ 35008);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close */ 84385);
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other */ 78566);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ 74687);














class NzDemoMessageEnComponent {
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
NzDemoMessageEnComponent.??fac = function NzDemoMessageEnComponent_Factory(t) { return new (t || NzDemoMessageEnComponent)(); };
NzDemoMessageEnComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: NzDemoMessageEnComponent, selectors: [["nz-demo-message"]], viewQuery: function NzDemoMessageEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 327, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-message-demo-info", "nzTitle", "Normal prompt"], ["nzHref", "#components-message-demo-other", "nzTitle", "Other types of message"], ["nzHref", "#components-message-demo-duration", "nzTitle", "Customize duration"], ["nzHref", "#components-message-demo-loading", "nzTitle", "Message of loading"], ["nzHref", "#components-message-demo-close", "nzTitle", "Customize duration"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Normal prompt", "nzSelector", "nz-demo-message-info", "nzGenerateCommand", "ng g ng-zorro-antd:message-info <name>", "nzComponentName", "NzDemoMessageInfoComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Customize duration", "nzSelector", "nz-demo-message-duration", "nzGenerateCommand", "ng g ng-zorro-antd:message-duration <name>", "nzComponentName", "NzDemoMessageDurationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customize duration", "nzSelector", "nz-demo-message-close", "nzGenerateCommand", "ng g ng-zorro-antd:message-close <name>", "nzComponentName", "NzDemoMessageCloseComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Other types of message", "nzSelector", "nz-demo-message-other", "nzGenerateCommand", "ng g ng-zorro-antd:message-other <name>", "nzComponentName", "NzDemoMessageOtherComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Message of loading", "nzSelector", "nz-demo-message-loading", "nzGenerateCommand", "ng g ng-zorro-antd:message-loading <name>", "nzComponentName", "NzDemoMessageLoadingComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nzmessageservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzmessageservice'", 1, "anchor"], ["id", "global-configuration"], ["onclick", "window.location.hash = 'global-configuration'", 1, "anchor"], ["id", "nzmessageref"], ["onclick", "window.location.hash = 'nzmessageref'", 1, "anchor"], [1, "token", "class-name"], [1, "token", "operator"], ["spellcheck", "true", 1, "token", "comment"]], template: function NzDemoMessageEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("nzClick", function NzDemoMessageEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](12, "span", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](18, "Display global messages as feedback in response to user operations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "h2", 13)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](21, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](23, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "ul")(25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](26, "To provide feedback such as success, warning, error etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](28, "A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "pre", 15)(30, "code")(31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](32, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](33, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](35, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](36, " NzMessageModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](38, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](41, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](43, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](44, "'ng-zorro-antd/message'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](46, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](47, "h2")(48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](49, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](50, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function NzDemoMessageEnComponent_Template_i_click_50_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](51, "div", 20)(52, "div", 21)(53, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](54, "nz-demo-message-info", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](57, "Normal messages as feedbacks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](58, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](59, "nz-demo-message-duration", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](62, "Customize message display duration from default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](64, "3s");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](65, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](67, "10s");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](68, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](69, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](70, "nz-demo-message-close", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](73, "You can subscribe to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](75, "onClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](76, " event to make some operations. This case would open three messages in sequence.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](77, "div", 21)(78, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](79, "nz-demo-message-other", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](80, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](82, "Messages of success, error and warning types.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](83, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](84, "nz-demo-message-loading", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](85, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](87, "Display a global loading indicator, which is dismissed by itself asynchronously.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](88, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](89, "h2", 30)(90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](91, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](92, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](93, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](94, "h3", 32)(95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](96, "NzMessageService");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](97, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](98, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](99, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](100, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](102, "This components provides some service methods, with usage and arguments as following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](103, "ul")(104, "li")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](106, "NzMessageService.success(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](107, "li")(108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](109, "NzMessageService.error(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](110, "li")(111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](112, "NzMessageService.info(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](113, "li")(114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](115, "NzMessageService.warning(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](116, "li")(117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](118, "NzMessageService.loading(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](119, "table")(120, "thead")(121, "tr")(122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](123, "Argument");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](125, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](127, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](129, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](130, "tbody")(131, "tr")(132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](133, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](135, "The content of message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](136, "td")(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](138, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](140, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](141, "tr")(142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](143, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](145, "Support setting the parameters for the current message box, see the table below");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](146, "td")(147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](148, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](150, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](152, "The parameters that are set by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](154, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](155, " support are as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](156, "table")(157, "thead")(158, "tr")(159, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](160, "Argument");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](162, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](163, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](164, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](165, "tbody")(166, "tr")(167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](168, "nzDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](170, "Duration (milliseconds), does not disappear when set to 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](173, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](174, "tr")(175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](176, "nzPauseOnHover");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](178, "Do not remove automatically when mouse is over while setting to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](180, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](183, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](184, "tr")(185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](186, "nzAnimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](188, "Whether to turn on animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](191, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](193, "Methods for destruction are also provided:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](194, "ul")(195, "li")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](197, "message.remove(id)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](198, " // Remove the message with the specified id. When the id is empty, remove all messages (the message id is returned by the above method)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](199, "h3", 35)(200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](201, "Global Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](202, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](203, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](205, "You can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](207, "NzConfigService");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](208, " to configure this component globally. Please check the Global Configuration chapter for more information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](209, "table")(210, "thead")(211, "tr")(212, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](213, "Argument");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](214, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](215, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](216, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](217, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](218, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](219, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](220, "tbody")(221, "tr")(222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](223, "nzDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](225, "Duration (milliseconds), does not disappear when set to 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](228, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](231, "3000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](232, "tr")(233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](234, "nzMaxStack");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](236, "The maximum number of messages that can be displayed at the same time");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](237, "td")(238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](239, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](240, "td")(241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](242, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](243, "tr")(244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](245, "nzPauseOnHover");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](247, "Do not remove automatically when mouse is over while setting to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](249, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](252, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](253, "td")(254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](255, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](256, "tr")(257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](258, "nzAnimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](260, "Whether to turn on animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](261, "td")(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](263, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](264, "td")(265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](266, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](267, "tr")(268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](269, "nzTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](271, "Distance from top");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](274, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](275, "td")(276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](277, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](278, "h3", 37)(279, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](280, "NzMessageRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](281, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](282, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](284, "It's the object that returned when you call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](286, "NzMessageService.success");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](287, " and others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](288, "pre", 15)(289, "code")(290, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](291, "export");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](292, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](293, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](294, "interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](295, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](296, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](297, "NzMessageRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](298, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](299, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](300, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](301, "\n  messageId");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](302, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](303, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](304, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](305, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](306, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](307, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](308, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](309, "\n  onClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](310, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](311, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](312, " Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](313, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](314, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](315, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](316, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](317, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](318, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](319, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](320, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](321, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](322, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](323, "// It would emit an event when the message is closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](324, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](325, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](326, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-info")("nzLink", "components-message-demo-info")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-duration")("nzLink", "components-message-demo-duration")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-close")("nzLink", "components-message-demo-close")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-other")("nzLink", "components-message-demo-other")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-loading")("nzLink", "components-message-demo-loading")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _info__WEBPACK_IMPORTED_MODULE_1__.NzDemoMessageInfoComponent, _duration__WEBPACK_IMPORTED_MODULE_2__.NzDemoMessageDurationComponent, _close__WEBPACK_IMPORTED_MODULE_3__.NzDemoMessageCloseComponent, _other__WEBPACK_IMPORTED_MODULE_4__.NzDemoMessageOtherComponent, _loading__WEBPACK_IMPORTED_MODULE_5__.NzDemoMessageLoadingComponent], encapsulation: 2 });


/***/ }),

/***/ 3359:
/*!****************************************************!*\
  !*** ./src/app/components/message/index.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageModule": () => (/* binding */ NzDemoMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 37633);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./close */ 84385);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duration */ 35008);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info */ 76373);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ 74687);
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other */ 78566);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zh.component */ 12124);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./en.component */ 88826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);















class NzDemoMessageModule {
}
NzDemoMessageModule.??fac = function NzDemoMessageModule_Factory(t) { return new (t || NzDemoMessageModule)(); };
NzDemoMessageModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: NzDemoMessageModule });
NzDemoMessageModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoMessageEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoMessageZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](NzDemoMessageModule, { declarations: [_close__WEBPACK_IMPORTED_MODULE_2__.NzDemoMessageCloseComponent,
        _duration__WEBPACK_IMPORTED_MODULE_3__.NzDemoMessageDurationComponent,
        _info__WEBPACK_IMPORTED_MODULE_4__.NzDemoMessageInfoComponent,
        _loading__WEBPACK_IMPORTED_MODULE_5__.NzDemoMessageLoadingComponent,
        _other__WEBPACK_IMPORTED_MODULE_6__.NzDemoMessageOtherComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoMessageZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoMessageEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__.NzMessageModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 76373:
/*!********************************************!*\
  !*** ./src/app/components/message/info.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageInfoComponent": () => (/* binding */ NzDemoMessageInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoMessageInfoComponent {
    constructor(message) {
        this.message = message;
    }
    createBasicMessage() {
        this.message.info('This is a normal message');
    }
}
NzDemoMessageInfoComponent.??fac = function NzDemoMessageInfoComponent_Factory(t) { return new (t || NzDemoMessageInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoMessageInfoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMessageInfoComponent, selectors: [["nz-demo-message-info"]], decls: 2, vars: 1, consts: [["nz-button", "", 3, "nzType", "click"]], template: function NzDemoMessageInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoMessageInfoComponent_Template_button_click_0_listener() { return ctx.createBasicMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Display normal message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzType", "primary");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 74687:
/*!***********************************************!*\
  !*** ./src/app/components/message/loading.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageLoadingComponent": () => (/* binding */ NzDemoMessageLoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoMessageLoadingComponent {
    constructor(message) {
        this.message = message;
    }
    createBasicMessage() {
        const id = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
        setTimeout(() => {
            this.message.remove(id);
        }, 2500);
    }
}
NzDemoMessageLoadingComponent.??fac = function NzDemoMessageLoadingComponent_Factory(t) { return new (t || NzDemoMessageLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoMessageLoadingComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMessageLoadingComponent, selectors: [["nz-demo-message-loading"]], decls: 2, vars: 1, consts: [["nz-button", "", 3, "nzType", "click"]], template: function NzDemoMessageLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoMessageLoadingComponent_Template_button_click_0_listener() { return ctx.createBasicMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Display a loading indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzType", "default");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 37633:
/*!**********************************************!*\
  !*** ./src/app/components/message/module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);



const moduleList = [ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_0__.NzMessageModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];


/***/ }),

/***/ 78566:
/*!*********************************************!*\
  !*** ./src/app/components/message/other.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageOtherComponent": () => (/* binding */ NzDemoMessageOtherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoMessageOtherComponent {
    constructor(message) {
        this.message = message;
    }
    createMessage(type) {
        this.message.create(type, `This is a message of ${type}`);
    }
}
NzDemoMessageOtherComponent.??fac = function NzDemoMessageOtherComponent_Factory(t) { return new (t || NzDemoMessageOtherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoMessageOtherComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMessageOtherComponent, selectors: [["nz-demo-message-other"]], decls: 6, vars: 0, consts: [["nz-button", "", 3, "click"]], template: function NzDemoMessageOtherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoMessageOtherComponent_Template_button_click_0_listener() { return ctx.createMessage("success"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoMessageOtherComponent_Template_button_click_2_listener() { return ctx.createMessage("error"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoMessageOtherComponent_Template_button_click_4_listener() { return ctx.createMessage("warning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"]], styles: ["[nz-button][_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGlCQUFpQjtNQUNuQiIsImZpbGUiOiJvdGhlci50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWJ1dHRvbl0ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 12124:
/*!****************************************************!*\
  !*** ./src/app/components/message/zh.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMessageZhComponent": () => (/* binding */ NzDemoMessageZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ 76373);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duration */ 35008);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close */ 84385);
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other */ 78566);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ 74687);














class NzDemoMessageZhComponent {
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
NzDemoMessageZhComponent.??fac = function NzDemoMessageZhComponent_Factory(t) { return new (t || NzDemoMessageZhComponent)(); };
NzDemoMessageZhComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: NzDemoMessageZhComponent, selectors: [["nz-demo-message"]], viewQuery: function NzDemoMessageZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 323, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-message-demo-info", "nzTitle", "\u666E\u901A\u63D0\u793A"], ["nzHref", "#components-message-demo-other", "nzTitle", "\u5176\u4ED6\u63D0\u793A\u7C7B\u578B"], ["nzHref", "#components-message-demo-duration", "nzTitle", "\u4FEE\u6539\u5EF6\u65F6"], ["nzHref", "#components-message-demo-loading", "nzTitle", "\u52A0\u8F7D\u4E2D"], ["nzHref", "#components-message-demo-close", "nzTitle", "\u7ED3\u675F\u4E8B\u4EF6"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u666E\u901A\u63D0\u793A", "nzSelector", "nz-demo-message-info", "nzGenerateCommand", "ng g ng-zorro-antd:message-info <name>", "nzComponentName", "NzDemoMessageInfoComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u4FEE\u6539\u5EF6\u65F6", "nzSelector", "nz-demo-message-duration", "nzGenerateCommand", "ng g ng-zorro-antd:message-duration <name>", "nzComponentName", "NzDemoMessageDurationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7ED3\u675F\u4E8B\u4EF6", "nzSelector", "nz-demo-message-close", "nzGenerateCommand", "ng g ng-zorro-antd:message-close <name>", "nzComponentName", "NzDemoMessageCloseComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5176\u4ED6\u63D0\u793A\u7C7B\u578B", "nzSelector", "nz-demo-message-other", "nzGenerateCommand", "ng g ng-zorro-antd:message-other <name>", "nzComponentName", "NzDemoMessageOtherComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A0\u8F7D\u4E2D", "nzSelector", "nz-demo-message-loading", "nzGenerateCommand", "ng g ng-zorro-antd:message-loading <name>", "nzComponentName", "NzDemoMessageLoadingComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nzmessageservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzmessageservice'", 1, "anchor"], ["id", "\u5168\u5C40\u914D\u7F6E"], ["onclick", "window.location.hash = '\u5168\u5C40\u914D\u7F6E'", 1, "anchor"], ["id", "nzmessageref"], ["onclick", "window.location.hash = 'nzmessageref'", 1, "anchor"], [1, "token", "class-name"], [1, "token", "operator"], ["spellcheck", "true", 1, "token", "comment"]], template: function NzDemoMessageZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("nzClick", function NzDemoMessageZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](13, "\u5168\u5C40\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, "\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "h2", 13)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](25, "ul")(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](27, "\u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](29, "\u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "pre", 15)(31, "code")(32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](33, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](34, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](36, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](37, " NzMessageModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](39, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](42, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](44, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](45, "'ng-zorro-antd/message'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](47, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](48, "h2")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](50, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](51, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function NzDemoMessageZhComponent_Template_i_click_51_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](52, "div", 20)(53, "div", 21)(54, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](55, "nz-demo-message-info", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](58, "\u4FE1\u606F\u63D0\u9192\u53CD\u9988\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](59, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](60, "nz-demo-message-duration", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](63, "\u81EA\u5B9A\u4E49\u65F6\u957F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](65, "10s");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](66, "\uFF0C\u9ED8\u8BA4\u65F6\u957F\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](68, "3s");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](69, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](70, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](71, "nz-demo-message-close", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](74, "\u53EF\u901A\u8FC7\u8BA2\u9605 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](76, "onClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](77, " \u4E8B\u4EF6\u5728 message \u5173\u95ED\u65F6\u505A\u51FA\u67D0\u4E9B\u64CD\u4F5C\u3002\u4EE5\u4E0A\u7528\u4F8B\u5C06\u4F9D\u6B21\u6253\u5F00\u4E09\u4E2A message\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](78, "div", 21)(79, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](80, "nz-demo-message-other", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](83, "\u5305\u62EC\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](84, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](85, "nz-demo-message-loading", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](88, "\u8FDB\u884C\u5168\u5C40 loading\uFF0C\u5F02\u6B65\u81EA\u884C\u79FB\u9664\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](89, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](90, "h2", 30)(91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](92, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](93, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](94, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](95, "h3", 32)(96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](97, "NzMessageService");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](98, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](99, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](100, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](101, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](103, "\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u670D\u52A1\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](104, "ul")(105, "li")(106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](107, "NzMessageService.success(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](108, "li")(109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](110, "NzMessageService.error(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](111, "li")(112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](113, "NzMessageService.info(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](114, "li")(115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](116, "NzMessageService.warning(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](117, "li")(118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](119, "NzMessageService.loading(content, [options])");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](120, "table")(121, "thead")(122, "tr")(123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](124, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](126, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](128, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](130, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](131, "tbody")(132, "tr")(133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](134, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](136, "\u63D0\u793A\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](137, "td")(138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](139, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](141, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](142, "tr")(143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](144, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](146, "\u652F\u6301\u8BBE\u7F6E\u9488\u5BF9\u5F53\u524D\u63D0\u793A\u6846\u7684\u53C2\u6570\uFF0C\u89C1\u4E0B\u65B9\u8868\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](147, "td")(148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](149, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](151, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](152, "p")(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](154, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](155, " \u652F\u6301\u8BBE\u7F6E\u7684\u53C2\u6570\u5982\u4E0B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](156, "table")(157, "thead")(158, "tr")(159, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](160, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](162, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](163, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](164, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](165, "tbody")(166, "tr")(167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](168, "nzDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](170, "\u6301\u7EED\u65F6\u95F4(\u6BEB\u79D2)\uFF0C\u5F53\u8BBE\u7F6E\u4E3A0\u65F6\u4E0D\u6D88\u5931");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](173, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](174, "tr")(175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](176, "nzPauseOnHover");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](178, "\u9F20\u6807\u79FB\u4E0A\u65F6\u7981\u6B62\u81EA\u52A8\u79FB\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](179, "td")(180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](181, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](182, "tr")(183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](184, "nzAnimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](186, "\u5F00\u5173\u52A8\u753B\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](187, "td")(188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](189, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](191, "\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](192, "ul")(193, "li")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](195, "NzMessageService.remove(id)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](196, " // \u79FB\u9664\u7279\u5B9Aid\u7684\u6D88\u606F\uFF0C\u5F53id\u4E3A\u7A7A\u65F6\uFF0C\u79FB\u9664\u6240\u6709\u6D88\u606F\uFF08\u8BE5\u6D88\u606Fid\u901A\u8FC7\u4E0A\u8FF0\u65B9\u6CD5\u8FD4\u56DE\u503C\u4E2D\u5F97\u5230\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](197, "h3", 35)(198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](199, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](200, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](201, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](203, "\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](205, "NzConfigService");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](206, " \u8FDB\u884C\u5168\u5C40\u914D\u7F6E\uFF0C\u8BE6\u60C5\u8BF7\u89C1\u6587\u6863\u4E2D\u201C\u5168\u5C40\u914D\u7F6E\u9879\u201D\u7AE0\u8282\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](207, "table")(208, "thead")(209, "tr")(210, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](211, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](212, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](213, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](214, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](215, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](216, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](217, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](218, "tbody")(219, "tr")(220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](221, "nzDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](223, "\u6301\u7EED\u65F6\u95F4(\u6BEB\u79D2)\uFF0C\u5F53\u8BBE\u7F6E\u4E3A 0 \u65F6\u4E0D\u6D88\u5931");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](224, "td")(225, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](226, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](229, "3000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](230, "tr")(231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](232, "nzMaxStack");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](234, "\u540C\u4E00\u65F6\u95F4\u53EF\u5C55\u793A\u7684\u6700\u5927\u63D0\u793A\u6570\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](237, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](240, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](241, "tr")(242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](243, "nzPauseOnHover");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](245, "\u9F20\u6807\u79FB\u4E0A\u65F6\u7981\u6B62\u81EA\u52A8\u79FB\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](246, "td")(247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](248, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](249, "td")(250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](251, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](252, "tr")(253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](254, "nzAnimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](256, "\u5F00\u5173\u52A8\u753B\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](257, "td")(258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](259, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](262, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](263, "tr")(264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](265, "nzTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](267, "\u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](268, "td")(269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](270, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](271, "td")(272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](273, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](274, "h3", 37)(275, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](276, "NzMessageRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](277, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](278, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](279, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](280, "\u5F53\u4F60\u8C03\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](282, "NzMessageService.success");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](283, " \u6216\u5176\u4ED6\u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](284, "pre", 15)(285, "code")(286, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](287, "export");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](288, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](289, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](290, "interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](291, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](292, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](293, "NzMessageRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](294, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](295, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](296, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](297, "\n  messageId");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](298, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](299, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](300, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](301, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](302, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](303, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](304, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](305, "\n  onClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](306, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](307, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](308, " Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](309, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](310, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](311, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](312, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](313, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](314, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](315, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](316, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](317, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](318, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](319, "// \u5F53 message \u5173\u95ED\u65F6\u5B83\u4F1A\u6D3E\u53D1\u4E00\u4E2A\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](320, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](321, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](322, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-info")("nzLink", "components-message-demo-info")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-duration")("nzLink", "components-message-demo-duration")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-close")("nzLink", "components-message-demo-close")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-other")("nzLink", "components-message-demo-other")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("nzId", "components-message-demo-loading")("nzLink", "components-message-demo-loading")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _info__WEBPACK_IMPORTED_MODULE_1__.NzDemoMessageInfoComponent, _duration__WEBPACK_IMPORTED_MODULE_2__.NzDemoMessageDurationComponent, _close__WEBPACK_IMPORTED_MODULE_3__.NzDemoMessageCloseComponent, _other__WEBPACK_IMPORTED_MODULE_4__.NzDemoMessageOtherComponent, _loading__WEBPACK_IMPORTED_MODULE_5__.NzDemoMessageLoadingComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_message_index_module_ts.js.map