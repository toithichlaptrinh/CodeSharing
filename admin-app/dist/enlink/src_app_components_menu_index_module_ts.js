"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_menu_index_module_ts"],{

/***/ 1072:
/*!*************************************************!*\
  !*** ./src/app/components/menu/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuEnComponent": () => (/* binding */ NzDemoMenuEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal */ 77222);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline */ 61757);
/* harmony import */ var _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-collapsed */ 82781);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sider-current */ 50860);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vertical */ 26253);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ 42041);
/* harmony import */ var _switch_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch-mode */ 16321);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router */ 32295);
/* harmony import */ var _recursive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recursive */ 69339);


















class NzDemoMenuEnComponent {
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
NzDemoMenuEnComponent.??fac = function NzDemoMenuEnComponent_Factory(t) { return new (t || NzDemoMenuEnComponent)(); };
NzDemoMenuEnComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineComponent"]({ type: NzDemoMenuEnComponent, selectors: [["nz-demo-menu"]], viewQuery: function NzDemoMenuEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1026, vars: 31, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-menu-demo-horizontal", "nzTitle", "Top Navigation"], ["nzHref", "#components-menu-demo-inline", "nzTitle", "Inline menu"], ["nzHref", "#components-menu-demo-inline-collapsed", "nzTitle", "Collapsed inline menu"], ["nzHref", "#components-menu-demo-sider-current", "nzTitle", "Open current submenu only"], ["nzHref", "#components-menu-demo-vertical", "nzTitle", "Vertical menu"], ["nzHref", "#components-menu-demo-theme", "nzTitle", "Menu Themes"], ["nzHref", "#components-menu-demo-switch-mode", "nzTitle", "Switch the menu type"], ["nzHref", "#components-menu-demo-router", "nzTitle", "Router"], ["nzHref", "#components-menu-demo-recursive", "nzTitle", "Recursive"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], ["href", "/components/layout/en"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Top Navigation", "nzSelector", "nz-demo-menu-horizontal", "nzGenerateCommand", "ng g ng-zorro-antd:menu-horizontal <name>", "nzComponentName", "NzDemoMenuHorizontalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Inline menu", "nzSelector", "nz-demo-menu-inline", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline <name>", "nzComponentName", "NzDemoMenuInlineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Collapsed inline menu", "nzSelector", "nz-demo-menu-inline-collapsed", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline-collapsed <name>", "nzComponentName", "NzDemoMenuInlineCollapsedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/layout/#components-layout-demo-side"], ["nzTitle", "Open current submenu only", "nzSelector", "nz-demo-menu-sider-current", "nzGenerateCommand", "ng g ng-zorro-antd:menu-sider-current <name>", "nzComponentName", "NzDemoMenuSiderCurrentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Vertical menu", "nzSelector", "nz-demo-menu-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:menu-vertical <name>", "nzComponentName", "NzDemoMenuVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Menu Themes", "nzSelector", "nz-demo-menu-theme", "nzGenerateCommand", "ng g ng-zorro-antd:menu-theme <name>", "nzComponentName", "NzDemoMenuThemeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Switch the menu type", "nzSelector", "nz-demo-menu-switch-mode", "nzGenerateCommand", "ng g ng-zorro-antd:menu-switch-mode <name>", "nzComponentName", "NzDemoMenuSwitchModeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Router", "nzSelector", "nz-demo-menu-router", "nzGenerateCommand", "ng g ng-zorro-antd:menu-router <name>", "nzComponentName", "NzDemoMenuRouterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/api/router/RouterLink"], ["nzTitle", "Recursive", "nzSelector", "nz-demo-menu-recursive", "nzGenerateCommand", "ng g ng-zorro-antd:menu-recursive <name>", "nzComponentName", "NzDemoMenuRecursiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://github.com/angular/angular/issues/14842"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "[nz-menu]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-menu]'", 1, "anchor"], ["id", "[nz-menu-item]"], ["onclick", "window.location.hash = '[nz-menu-item]'", 1, "anchor"], ["href", "https://www.angular.cn/api/router/RouterLink"], ["href", "https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions"], ["id", "[nz-submenu]"], ["onclick", "window.location.hash = '[nz-submenu]'", 1, "anchor"], ["id", "[nz-menu-group]"], ["onclick", "window.location.hash = '[nz-menu-group]'", 1, "anchor"], ["id", "[nz-menu-divider]"], ["onclick", "window.location.hash = '[nz-menu-divider]'", 1, "anchor"]], template: function NzDemoMenuEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("nzClick", function NzDemoMenuEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](15, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](16, "span", 13)(17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](22, "Menu list of Navigation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](23, "h2", 17)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](25, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](29, "Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](31, "More layouts with navigation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](33, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](34, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](35, "pre", 20)(36, "code")(37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](38, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](41, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](42, " NzMenuModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](43, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](44, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](47, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](50, "'ng-zorro-antd/menu'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](51, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](52, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](53, "h2")(54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](55, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("click", function NzDemoMenuEnComponent_Template_i_click_56_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](57, "div", 25)(58, "div", 26)(59, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](60, "nz-demo-menu-horizontal", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](63, "Horizontal top navigation menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](64, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](65, "nz-demo-menu-inline", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](68, "Vertical menu with inline submenus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](69, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](70, "nz-demo-menu-inline-collapsed", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](73, "Inline menu could be collapsed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](75, "Here is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](76, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](77, "a complete demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](78, " with sider layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](79, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](80, "nz-demo-menu-sider-current", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](83, "Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](84, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](85, "nz-demo-menu-vertical", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](88, "Submenus open as pop-ups.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](89, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](90, "nz-demo-menu-theme", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](91, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](93, "There are two built-in themes: 'light' and 'dark'. The default value is 'light'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](94, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](95, "nz-demo-menu-switch-mode", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](98, "Show the dynamic switching mode (between 'inline' and 'vertical').");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](99, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](100, "nz-demo-menu-router", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](103, "Automatically activate menu items based on routing, should work with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](104, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](105, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](106, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](107, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](108, "nz-demo-menu-recursive", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](111, "Recursive generation menu, you need to set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](113, "nzPaddingLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](114, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](115, "manually");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](116, ", only works when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](118, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](119, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](121, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](122, " mode and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](124, "nzInlineCollapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](125, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](127, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](128, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](129, "blockquote")(130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](131, "Track Issue\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](132, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](133, "https://github.com/angular/angular/issues/14842");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](134, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](135, "h2", 42)(136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](137, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](138, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](139, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](140, "pre", 44)(141, "code")(142, "span", 45)(143, "span", 45)(144, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](145, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](146, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](147, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](148, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](149, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](150, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](151, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](152, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](153, "span", 45)(154, "span", 45)(155, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](156, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](158, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](159, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](160, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](161, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](162, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](163, "Menu 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](164, "span", 45)(165, "span", 45)(166, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](167, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](169, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](170, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](171, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](172, "span", 45)(173, "span", 45)(174, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](175, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](177, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](178, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](179, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](180, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](181, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](182, "Menu 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](183, "span", 45)(184, "span", 45)(185, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](186, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](188, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](189, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](190, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](191, "span", 45)(192, "span", 45)(193, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](194, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](196, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](197, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](198, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](199, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](200, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](201, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](202, "span", 47)(203, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](204, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](205, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](206, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](207, "SubMenu Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](208, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](209, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](210, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](211, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](212, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](213, "span", 45)(214, "span", 45)(215, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](216, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](217, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](218, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](219, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](220, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](221, "span", 45)(222, "span", 45)(223, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](224, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](226, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](227, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](228, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](229, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](230, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](231, "SubMenu Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](232, "span", 45)(233, "span", 45)(234, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](235, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](237, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](238, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](239, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](240, "span", 45)(241, "span", 45)(242, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](243, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](245, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](246, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](247, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](248, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](249, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](250, "SubMenu Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](251, "span", 45)(252, "span", 45)(253, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](254, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](256, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](257, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](258, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](259, "span", 45)(260, "span", 45)(261, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](262, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](264, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](265, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](266, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](267, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](268, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](269, "SubMenu Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](270, "span", 45)(271, "span", 45)(272, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](273, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](274, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](275, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](276, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](277, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](278, "span", 45)(279, "span", 45)(280, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](281, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](282, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](283, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](284, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](285, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](286, "span", 45)(287, "span", 45)(288, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](289, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](290, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](291, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](292, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](293, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](294, "span", 45)(295, "span", 45)(296, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](297, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](298, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](299, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](300, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](301, "h3", 48)(302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](303, "[nz-menu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](304, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](305, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](306, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](307, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](308, "table")(309, "thead")(310, "tr")(311, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](312, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](313, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](314, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](315, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](316, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](317, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](318, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](319, "tbody")(320, "tr")(321, "td")(322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](323, "[nzInlineCollapsed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](325, "specifies the collapsed status when menu is inline mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](328, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](330, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](331, "tr")(332, "td")(333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](334, "[nzInlineIndent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](336, "indent px of inline menu item on each level");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](339, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](340, "td")(341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](342, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](343, "tr")(344, "td")(345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](346, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](348, "type of the menu; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](350, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](351, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](353, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](354, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](356, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](357, " modes are supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](360, "'vertical' | 'horizontal' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](363, "'vertical'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](364, "tr")(365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](367, "[nzSelectable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](369, "allow selecting menu items");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](372, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](373, "td")(374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](375, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](376, "tr")(377, "td")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](379, "[nzTheme]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](381, "color theme of the menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](382, "td")(383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](384, "'light' | 'dark'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](387, "'light'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](388, "tr")(389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](391, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](393, "the Output when click nz-menu-item inside nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](394, "td")(395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](396, "EventEmitter<NzMenuItemDirective>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](398, "h3", 51)(399, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](400, "[nz-menu-item]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](401, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](402, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](403, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](404, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](405, "table")(406, "thead")(407, "tr")(408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](409, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](411, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](413, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](415, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](416, "tbody")(417, "tr")(418, "td")(419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](420, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](422, "whether menu item is disabled or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](423, "td")(424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](425, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](426, "td")(427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](428, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](429, "tr")(430, "td")(431, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](432, "[nzSelected]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](434, "whether menu item is selected or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](435, "td")(436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](437, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](438, "td")(439, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](440, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](441, "tr")(442, "td")(443, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](444, "[nzMatchRouter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](446, "whether auto set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](448, "nzSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](449, " according to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](450, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](451, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](452, "td")(453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](454, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](455, "td")(456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](457, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](458, "tr")(459, "td")(460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](461, "[nzMatchRouterExact]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](463, "only match when the url matches the link exactly, same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](464, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](465, "routerLinkActiveOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](466, "td")(467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](468, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](469, "td")(470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](471, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](472, "h3", 55)(473, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](474, "[nz-submenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](475, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](476, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](477, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](478, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](479, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](480, "You can set the title of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](482, "[nz-submenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](483, " in the following ways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](484, "pre", 44)(485, "code")(486, "span", 45)(487, "span", 45)(488, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](489, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](490, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](491, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](492, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](493, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](494, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](495, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](496, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](497, "span", 47)(498, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](499, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](500, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](501, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](502, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](503, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](504, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](505, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](506, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](507, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](508, "span", 47)(509, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](510, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](511, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](512, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](513, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](514, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](515, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](516, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](517, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](518, "span", 45)(519, "span", 45)(520, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](521, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](522, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](523, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](524, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](525, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](526, "span", 45)(527, "span", 45)(528, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](529, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](530, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](531, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](532, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](533, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](534, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](535, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](536, "span", 45)(537, "span", 45)(538, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](539, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](540, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](541, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](542, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](543, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](544, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](545, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](546, "span", 45)(547, "span", 45)(548, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](549, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](550, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](551, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](552, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](553, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](554, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](555, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](556, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](557, "span", 47)(558, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](559, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](560, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](561, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](562, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](563, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](564, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](565, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](566, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](567, "span", 45)(568, "span", 45)(569, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](570, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](571, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](572, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](573, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](574, "span", 45)(575, "span", 45)(576, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](577, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](578, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](579, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](580, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](581, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](582, "span", 45)(583, "span", 45)(584, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](585, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](586, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](587, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](588, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](589, "span", 45)(590, "span", 45)(591, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](592, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](593, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](594, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](595, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](596, "span", 45)(597, "span", 45)(598, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](599, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](600, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](601, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](602, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](603, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](604, "span", 45)(605, "span", 45)(606, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](607, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](608, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](609, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](610, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](611, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](612, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](613, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](614, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](615, "span", 47)(616, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](617, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](618, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](619, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](620, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](621, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](622, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](623, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](624, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](625, "span", 45)(626, "span", 45)(627, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](628, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](629, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](630, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](631, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](632, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](633, "span", 45)(634, "span", 45)(635, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](636, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](637, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](638, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](639, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](640, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](641, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](642, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](643, "span", 45)(644, "span", 45)(645, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](646, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](647, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](648, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](649, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](650, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](651, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](652, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](653, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](654, "span", 47)(655, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](656, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](657, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](658, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](659, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](660, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](661, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](662, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](663, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](664, "span", 45)(665, "span", 45)(666, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](667, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](668, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](669, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](670, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](671, "span", 45)(672, "span", 45)(673, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](674, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](675, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](676, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](677, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](678, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](679, "span", 45)(680, "span", 45)(681, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](682, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](683, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](684, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](685, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](686, "span", 45)(687, "span", 45)(688, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](689, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](690, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](691, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](692, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](693, "table")(694, "thead")(695, "tr")(696, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](697, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](698, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](699, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](700, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](701, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](702, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](703, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](704, "tbody")(705, "tr")(706, "td")(707, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](708, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](709, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](710, "whether sub menu is open or not, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](711, "td")(712, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](713, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](714, "td")(715, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](716, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](717, "tr")(718, "td")(719, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](720, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](722, "whether sub menu is disabled or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](723, "td")(724, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](725, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](726, "td")(727, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](728, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](729, "tr")(730, "td")(731, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](732, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](733, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](734, "set submenu title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](735, "td")(736, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](737, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](738, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](739, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](740, "tr")(741, "td")(742, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](743, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](744, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](745, "icon type in title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](746, "td")(747, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](748, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](749, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](750, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](751, "tr")(752, "td")(753, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](754, "[nzMenuClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](755, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](756, "Custom the submenu container's class name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](757, "td")(758, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](759, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](761, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](762, "tr")(763, "td")(764, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](765, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](766, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](767, "nzOpen callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](768, "td")(769, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](770, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](771, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](772, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](773, "h3", 57)(774, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](775, "[nz-menu-group]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](776, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](777, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](778, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](779, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](780, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](781, "You can set the title of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](782, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](783, "[nz-menu-group]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](784, " in the following ways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](785, "pre", 44)(786, "code")(787, "span", 45)(788, "span", 45)(789, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](790, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](791, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](792, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](793, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](794, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](795, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](796, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](797, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](798, "span", 47)(799, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](800, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](801, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](802, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](803, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](804, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](805, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](806, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](807, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](808, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](809, "span", 47)(810, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](811, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](812, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](813, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](814, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](815, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](816, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](817, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](818, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](819, "span", 45)(820, "span", 45)(821, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](822, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](823, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](824, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](825, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](826, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](827, "span", 45)(828, "span", 45)(829, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](830, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](831, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](832, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](833, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](834, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](835, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](836, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](837, "span", 45)(838, "span", 45)(839, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](840, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](841, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](842, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](843, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](844, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](845, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](846, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](847, "span", 45)(848, "span", 45)(849, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](850, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](851, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](852, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](853, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](854, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](855, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](856, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](857, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](858, "span", 47)(859, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](860, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](861, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](862, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](863, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](864, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](865, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](866, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](867, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](868, "span", 45)(869, "span", 45)(870, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](871, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](872, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](873, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](874, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](875, "span", 45)(876, "span", 45)(877, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](878, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](879, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](880, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](881, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](882, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](883, "span", 45)(884, "span", 45)(885, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](886, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](887, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](888, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](889, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](890, "span", 45)(891, "span", 45)(892, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](893, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](894, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](895, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](896, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](897, "span", 45)(898, "span", 45)(899, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](900, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](901, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](902, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](903, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](904, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](905, "span", 45)(906, "span", 45)(907, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](908, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](909, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](910, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](911, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](912, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](913, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](914, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](915, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](916, "span", 47)(917, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](918, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](919, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](920, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](921, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](922, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](923, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](924, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](925, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](926, "span", 45)(927, "span", 45)(928, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](929, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](930, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](931, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](932, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](933, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](934, "span", 45)(935, "span", 45)(936, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](937, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](938, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](939, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](940, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](941, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](942, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](943, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](944, "span", 45)(945, "span", 45)(946, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](947, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](948, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](949, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](950, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](951, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](952, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](953, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](954, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](955, "span", 47)(956, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](957, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](958, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](959, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](960, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](961, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](962, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](963, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](964, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](965, "span", 45)(966, "span", 45)(967, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](968, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](969, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](970, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](971, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](972, "span", 45)(973, "span", 45)(974, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](975, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](976, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](977, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](978, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](979, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](980, "span", 45)(981, "span", 45)(982, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](983, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](984, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](985, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](986, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](987, "span", 45)(988, "span", 45)(989, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](990, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](991, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](992, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](993, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](994, "table")(995, "thead")(996, "tr")(997, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](998, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](999, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1000, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1001, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1002, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1003, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1004, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1005, "tbody")(1006, "tr")(1007, "td")(1008, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1009, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1010, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1011, "set menu group title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1012, "td")(1013, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1014, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1015, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1016, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1017, "h3", 59)(1018, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1019, "[nz-menu-divider]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1020, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1021, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1022, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1023, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1024, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1025, "Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-horizontal")("nzLink", "components-menu-demo-horizontal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/horizontal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-inline")("nzLink", "components-menu-demo-inline")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-inline-collapsed")("nzLink", "components-menu-demo-inline-collapsed")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline-collapsed.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-sider-current")("nzLink", "components-menu-demo-sider-current")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/sider-current.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-vertical")("nzLink", "components-menu-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-theme")("nzLink", "components-menu-demo-theme")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/theme.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-switch-mode")("nzLink", "components-menu-demo-switch-mode")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/switch-mode.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-router")("nzLink", "components-menu-demo-router")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/router.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-recursive")("nzLink", "components-menu-demo-recursive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/recursive.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["??NzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal__WEBPACK_IMPORTED_MODULE_1__.NzDemoMenuHorizontalComponent, _inline__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuInlineComponent, _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuInlineCollapsedComponent, _sider_current__WEBPACK_IMPORTED_MODULE_4__.NzDemoMenuSiderCurrentComponent, _vertical__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuVerticalComponent, _theme__WEBPACK_IMPORTED_MODULE_6__.NzDemoMenuThemeComponent, _switch_mode__WEBPACK_IMPORTED_MODULE_7__.NzDemoMenuSwitchModeComponent, _router__WEBPACK_IMPORTED_MODULE_8__.NzDemoMenuRouterComponent, _recursive__WEBPACK_IMPORTED_MODULE_9__.NzDemoMenuRecursiveComponent], encapsulation: 2 });


/***/ }),

/***/ 77222:
/*!***********************************************!*\
  !*** ./src/app/components/menu/horizontal.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuHorizontalComponent": () => (/* binding */ NzDemoMenuHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




class NzDemoMenuHorizontalComponent {
}
NzDemoMenuHorizontalComponent.??fac = function NzDemoMenuHorizontalComponent_Factory(t) { return new (t || NzDemoMenuHorizontalComponent)(); };
NzDemoMenuHorizontalComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuHorizontalComponent, selectors: [["nz-demo-menu-horizontal"]], decls: 36, vars: 0, consts: [["nz-menu", "", "nzMode", "horizontal"], ["nz-menu-item", "", "nzSelected", ""], ["nz-icon", "", "nzType", "mail"], ["nz-menu-item", "", "nzDisabled", ""], ["nz-icon", "", "nzType", "appstore"], ["nz-submenu", "", "nzTitle", "Navigation Three - Submenu", "nzIcon", "setting"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Sub Menu"], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "Disabled Sub Menu"], ["href", "https://ng.ant.design", "target", "_blank", "rel", "noopener noreferrer"]], template: function NzDemoMenuHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0)(1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Navigation One ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Navigation Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 5)(8, "ul")(9, "li", 6)(10, "ul")(11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8)(16, "ul")(17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 9)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 10)(28, "ul")(29, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 7)(34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Navigation Four - Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent], encapsulation: 2 });


/***/ }),

/***/ 98045:
/*!*************************************************!*\
  !*** ./src/app/components/menu/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuModule": () => (/* binding */ NzDemoMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 58369);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ 77222);
/* harmony import */ var _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-collapsed */ 82781);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ 61757);
/* harmony import */ var _recursive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recursive */ 69339);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ 32295);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sider-current */ 50860);
/* harmony import */ var _switch_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch-mode */ 16321);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ 42041);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vertical */ 26253);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zh.component */ 54953);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./en.component */ 1072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);






















class NzDemoMenuModule {
}
NzDemoMenuModule.??fac = function NzDemoMenuModule_Factory(t) { return new (t || NzDemoMenuModule)(); };
NzDemoMenuModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({ type: NzDemoMenuModule });
NzDemoMenuModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoMenuEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoMenuZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](NzDemoMenuModule, { declarations: [_horizontal__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuHorizontalComponent,
        _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuInlineCollapsedComponent,
        _inline__WEBPACK_IMPORTED_MODULE_4__.NzDemoMenuInlineComponent,
        _recursive__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuRecursiveComponent,
        _router__WEBPACK_IMPORTED_MODULE_6__.NzDemoMenuRouterComponent,
        _sider_current__WEBPACK_IMPORTED_MODULE_7__.NzDemoMenuSiderCurrentComponent,
        _switch_mode__WEBPACK_IMPORTED_MODULE_8__.NzDemoMenuSwitchModeComponent,
        _theme__WEBPACK_IMPORTED_MODULE_9__.NzDemoMenuThemeComponent,
        _vertical__WEBPACK_IMPORTED_MODULE_10__.NzDemoMenuVerticalComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoMenuZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoMenuEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__.NzMenuModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzToolTipModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__.NzSwitchModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 82781:
/*!*****************************************************!*\
  !*** ./src/app/components/menu/inline-collapsed.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuInlineCollapsedComponent": () => (/* binding */ NzDemoMenuInlineCollapsedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);







class NzDemoMenuInlineCollapsedComponent {
    constructor() {
        this.isCollapsed = false;
    }
    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
    }
}
NzDemoMenuInlineCollapsedComponent.??fac = function NzDemoMenuInlineCollapsedComponent_Factory(t) { return new (t || NzDemoMenuInlineCollapsedComponent)(); };
NzDemoMenuInlineCollapsedComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuInlineCollapsedComponent, selectors: [["nz-demo-menu-inline-collapsed"]], decls: 28, vars: 3, consts: [[1, "wrapper"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", 3, "nzType"], ["nz-menu", "", "nzMode", "inline", "nzTheme", "dark", 3, "nzInlineCollapsed"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzSelected", "", 3, "nzTooltipTitle"], ["nz-icon", "", "nzType", "mail"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-menu-item", ""], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuInlineCollapsedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoMenuInlineCollapsedComponent_Template_button_click_1_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3)(4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Navigation One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 6)(9, "ul")(10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 8)(15, "ul")(16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 9)(21, "ul")(22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzTooltipTitle", ctx.isCollapsed ? "Navigation One" : "");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__.NzMenuItemDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzTooltipDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__.NzSubMenuComponent], styles: [".wrapper[_ngcontent-%COMP%] {\n        width: 240px;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-bottom: 12px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlubGluZS1jb2xsYXBzZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtNQUNkOztNQUVBO1FBQ0UsbUJBQW1CO01BQ3JCIiwiZmlsZSI6ImlubGluZS1jb2xsYXBzZWQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 61757:
/*!*******************************************!*\
  !*** ./src/app/components/menu/inline.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuInlineComponent": () => (/* binding */ NzDemoMenuInlineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);



class NzDemoMenuInlineComponent {
}
NzDemoMenuInlineComponent.??fac = function NzDemoMenuInlineComponent_Factory(t) { return new (t || NzDemoMenuInlineComponent)(); };
NzDemoMenuInlineComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuInlineComponent, selectors: [["nz-demo-menu-inline"]], decls: 41, vars: 0, consts: [["nz-menu", "", "nzMode", "inline"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail", "nzOpen", ""], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", "", "nzSelected", ""], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuInlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0)(1, "li", 1)(2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 5)(10, "ul")(11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 6)(16, "ul")(17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 7)(22, "ul")(23, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 7)(28, "ul")(29, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 8)(34, "ul")(35, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Option 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Option 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["??NzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective], styles: ["[nz-menu][_ngcontent-%COMP%] {\n        width: 240px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlubGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO01BQ2QiLCJmaWxlIjoiaW5saW5lLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotbWVudV0ge1xuICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 58369:
/*!*******************************************!*\
  !*** ./src/app/components/menu/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);






const moduleList = [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_0__.NzMenuModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__.NzToolTipModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule];


/***/ }),

/***/ 69339:
/*!**********************************************!*\
  !*** ./src/app/components/menu/recursive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuRecursiveComponent": () => (/* binding */ NzDemoMenuRecursiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);





function NzDemoMenuRecursiveComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 8);
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzType", menu_r5.icon);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_i_1_Template, 1, 1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzPaddingLeft", menu_r5.level * 24)("nzDisabled", menu_r5.disabled)("nzSelected", menu_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menu_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menu_r5.title);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzPaddingLeft", menu_r5.level * 24)("nzOpen", menu_r5.open)("nzTitle", menu_r5.title)("nzIcon", menu_r5.icon)("nzDisabled", menu_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c0, menu_r5.children));
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_Template, 4, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_Template, 3, 9, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !menu_r5.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menu_r5.children);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const menus_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", menus_r3);
} }
class NzDemoMenuRecursiveComponent {
    constructor() {
        this.mode = false;
        this.dark = false;
        this.menus = [
            {
                level: 1,
                title: 'Mail Group',
                icon: 'mail',
                open: true,
                selected: false,
                disabled: false,
                children: [
                    {
                        level: 2,
                        title: 'Group 1',
                        icon: 'bars',
                        open: false,
                        selected: false,
                        disabled: false,
                        children: [
                            {
                                level: 3,
                                title: 'Option 1',
                                selected: false,
                                disabled: false
                            },
                            {
                                level: 3,
                                title: 'Option 2',
                                selected: false,
                                disabled: true
                            }
                        ]
                    },
                    {
                        level: 2,
                        title: 'Group 2',
                        icon: 'bars',
                        selected: true,
                        disabled: false
                    },
                    {
                        level: 2,
                        title: 'Group 3',
                        icon: 'bars',
                        selected: false,
                        disabled: false
                    }
                ]
            },
            {
                level: 1,
                title: 'Team Group',
                icon: 'team',
                open: false,
                selected: false,
                disabled: false,
                children: [
                    {
                        level: 2,
                        title: 'User 1',
                        icon: 'user',
                        selected: false,
                        disabled: false
                    },
                    {
                        level: 2,
                        title: 'User 2',
                        icon: 'user',
                        selected: false,
                        disabled: false
                    }
                ]
            }
        ];
    }
}
NzDemoMenuRecursiveComponent.??fac = function NzDemoMenuRecursiveComponent_Factory(t) { return new (t || NzDemoMenuRecursiveComponent)(); };
NzDemoMenuRecursiveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuRecursiveComponent, selectors: [["nz-demo-menu-recursive"]], decls: 4, vars: 4, consts: [["nz-menu", "", "nzMode", "inline", 2, "width", "240px"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTpl", ""], [4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzDisabled", "nzSelected", 4, "ngIf"], ["nz-submenu", "", 3, "nzPaddingLeft", "nzOpen", "nzTitle", "nzIcon", "nzDisabled", 4, "ngIf"], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzDisabled", "nzSelected"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-submenu", "", 3, "nzPaddingLeft", "nzOpen", "nzTitle", "nzIcon", "nzDisabled"]], template: function NzDemoMenuRecursiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoMenuRecursiveComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NzDemoMenuRecursiveComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx.menus));
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent], encapsulation: 2 });


/***/ }),

/***/ 32295:
/*!*******************************************!*\
  !*** ./src/app/components/menu/router.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuRouterComponent": () => (/* binding */ NzDemoMenuRouterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quicklink */ 45676);





const _c0 = function () { return ["/", "components", "menu", "en"]; };
const _c1 = function () { return ["/", "components", "menu", "zh"]; };
class NzDemoMenuRouterComponent {
}
NzDemoMenuRouterComponent.??fac = function NzDemoMenuRouterComponent_Factory(t) { return new (t || NzDemoMenuRouterComponent)(); };
NzDemoMenuRouterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuRouterComponent, selectors: [["nz-demo-menu-router"]], decls: 7, vars: 4, consts: [["nz-menu", "", "nzMode", "horizontal"], ["nz-menu-item", "", "nzMatchRouter", ""], [3, "routerLink"]], template: function NzDemoMenuRouterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "English Menu Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 1)(5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Chinese Menu Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c1));
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["??NzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__["????LinkDirective"]], encapsulation: 2 });


/***/ }),

/***/ 50860:
/*!**************************************************!*\
  !*** ./src/app/components/menu/sider-current.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuSiderCurrentComponent": () => (/* binding */ NzDemoMenuSiderCurrentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);



class NzDemoMenuSiderCurrentComponent {
    constructor() {
        this.openMap = {
            sub1: true,
            sub2: false,
            sub3: false
        };
    }
    openHandler(value) {
        for (const key in this.openMap) {
            if (key !== value) {
                this.openMap[key] = false;
            }
        }
    }
}
NzDemoMenuSiderCurrentComponent.??fac = function NzDemoMenuSiderCurrentComponent_Factory(t) { return new (t || NzDemoMenuSiderCurrentComponent)(); };
NzDemoMenuSiderCurrentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuSiderCurrentComponent, selectors: [["nz-demo-menu-sider-current"]], decls: 35, vars: 3, consts: [["nz-menu", "", "nzMode", "inline", 2, "width", "240px"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail", 3, "nzOpen", "nzOpenChange"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore", 3, "nzOpen", "nzOpenChange"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting", 3, "nzOpen", "nzOpenChange"]], template: function NzDemoMenuSiderCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0)(1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_1_listener($event) { return ctx.openMap.sub1 = $event; })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_1_listener() { return ctx.openHandler("sub1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 4)(10, "ul")(11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_15_listener($event) { return ctx.openMap.sub2 = $event; })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_15_listener() { return ctx.openHandler("sub2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul")(17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 6)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_27_listener($event) { return ctx.openMap.sub3 = $event; })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_27_listener() { return ctx.openHandler("sub3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "ul")(29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzOpen", ctx.openMap.sub1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzOpen", ctx.openMap.sub2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzOpen", ctx.openMap.sub3);
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["??NzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective], encapsulation: 2 });


/***/ }),

/***/ 16321:
/*!************************************************!*\
  !*** ./src/app/components/menu/switch-mode.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuSwitchModeComponent": () => (/* binding */ NzDemoMenuSwitchModeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoMenuSwitchModeComponent {
    constructor() {
        this.mode = false;
        this.dark = false;
    }
}
NzDemoMenuSwitchModeComponent.??fac = function NzDemoMenuSwitchModeComponent_Factory(t) { return new (t || NzDemoMenuSwitchModeComponent)(); };
NzDemoMenuSwitchModeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuSwitchModeComponent, selectors: [["nz-demo-menu-switch-mode"]], decls: 42, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["nzType", "vertical"], ["nz-menu", "", 3, "nzMode", "nzTheme"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuSwitchModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NzDemoMenuSwitchModeComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Change Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "nz-divider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NzDemoMenuSwitchModeComponent_Template_nz_switch_ngModelChange_3_listener($event) { return ctx.dark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Change Theme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 2)(8, "li", 3)(9, "ul")(10, "li", 4)(11, "ul")(12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 6)(17, "ul")(18, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 7)(23, "ul")(24, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 8)(29, "ul")(30, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li", 9)(35, "ul")(36, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzMode", ctx.mode ? "vertical" : "inline")("nzTheme", ctx.dark ? "dark" : "light");
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__.NzDividerComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["??NzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective], styles: ["[nz-menu][_ngcontent-%COMP%] {\n        width: 240px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC1tb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZCIsImZpbGUiOiJzd2l0Y2gtbW9kZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LW1lbnVdIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 42041:
/*!******************************************!*\
  !*** ./src/app/components/menu/theme.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuThemeComponent": () => (/* binding */ NzDemoMenuThemeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoMenuThemeComponent {
    constructor() {
        this.theme = true;
    }
}
NzDemoMenuThemeComponent.??fac = function NzDemoMenuThemeComponent_Factory(t) { return new (t || NzDemoMenuThemeComponent)(); };
NzDemoMenuThemeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuThemeComponent, selectors: [["nz-demo-menu-theme"]], decls: 42, vars: 2, consts: [[3, "ngModel", "ngModelChange"], ["checked", ""], ["unchecked", ""], ["nz-menu", "", "nzMode", "inline", 2, "width", "240px", 3, "nzTheme"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Navigation One", "nzIcon", "mail"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", "", "nzSelected", ""], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NzDemoMenuThemeComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.theme = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 3)(8, "li", 4)(9, "ul")(10, "li", 5)(11, "ul")(12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 8)(17, "ul")(18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 9)(23, "ul")(24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 10)(29, "ul")(30, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li", 11)(35, "ul")(36, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzTheme", ctx.theme ? "dark" : "light");
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuItemDirective], encapsulation: 2 });


/***/ }),

/***/ 26253:
/*!*********************************************!*\
  !*** ./src/app/components/menu/vertical.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuVerticalComponent": () => (/* binding */ NzDemoMenuVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);



class NzDemoMenuVerticalComponent {
    change(value) {
        console.log(value);
    }
}
NzDemoMenuVerticalComponent.??fac = function NzDemoMenuVerticalComponent_Factory(t) { return new (t || NzDemoMenuVerticalComponent)(); };
NzDemoMenuVerticalComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoMenuVerticalComponent, selectors: [["nz-demo-menu-vertical"]], decls: 35, vars: 1, consts: [["nz-menu", "", 3, "nzMode"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore", 3, "nzOpenChange"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0)(1, "li", 1)(2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 4)(10, "ul")(11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzOpenChange", function NzDemoMenuVerticalComponent_Template_li_nzOpenChange_15_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul")(17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 6)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 7)(28, "ul")(29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzMode", "vertical");
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["??NzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective], styles: ["[nz-menu][_ngcontent-%COMP%] {\n        width: 240px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZCIsImZpbGUiOiJ2ZXJ0aWNhbC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LW1lbnVdIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 54953:
/*!*************************************************!*\
  !*** ./src/app/components/menu/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuZhComponent": () => (/* binding */ NzDemoMenuZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal */ 77222);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline */ 61757);
/* harmony import */ var _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-collapsed */ 82781);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sider-current */ 50860);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vertical */ 26253);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ 42041);
/* harmony import */ var _switch_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch-mode */ 16321);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router */ 32295);
/* harmony import */ var _recursive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recursive */ 69339);


















class NzDemoMenuZhComponent {
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
NzDemoMenuZhComponent.??fac = function NzDemoMenuZhComponent_Factory(t) { return new (t || NzDemoMenuZhComponent)(); };
NzDemoMenuZhComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineComponent"]({ type: NzDemoMenuZhComponent, selectors: [["nz-demo-menu"]], viewQuery: function NzDemoMenuZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1022, vars: 31, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-menu-demo-horizontal", "nzTitle", "\u9876\u90E8\u5BFC\u822A"], ["nzHref", "#components-menu-demo-inline", "nzTitle", "\u5185\u5D4C\u83DC\u5355"], ["nzHref", "#components-menu-demo-inline-collapsed", "nzTitle", "\u7F29\u8D77\u5185\u5D4C\u83DC\u5355"], ["nzHref", "#components-menu-demo-sider-current", "nzTitle", "\u53EA\u5C55\u5F00\u5F53\u524D\u7236\u7EA7\u83DC\u5355"], ["nzHref", "#components-menu-demo-vertical", "nzTitle", "\u5782\u76F4\u83DC\u5355"], ["nzHref", "#components-menu-demo-theme", "nzTitle", "\u4E3B\u9898"], ["nzHref", "#components-menu-demo-switch-mode", "nzTitle", "\u5207\u6362\u83DC\u5355\u7C7B\u578B"], ["nzHref", "#components-menu-demo-router", "nzTitle", "\u914D\u5408\u8DEF\u7531\u4F7F\u7528"], ["nzHref", "#components-menu-demo-recursive", "nzTitle", "\u9012\u5F52\u751F\u6210\u83DC\u5355"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], ["href", "/components/layout/zh"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u9876\u90E8\u5BFC\u822A", "nzSelector", "nz-demo-menu-horizontal", "nzGenerateCommand", "ng g ng-zorro-antd:menu-horizontal <name>", "nzComponentName", "NzDemoMenuHorizontalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5185\u5D4C\u83DC\u5355", "nzSelector", "nz-demo-menu-inline", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline <name>", "nzComponentName", "NzDemoMenuInlineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7F29\u8D77\u5185\u5D4C\u83DC\u5355", "nzSelector", "nz-demo-menu-inline-collapsed", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline-collapsed <name>", "nzComponentName", "NzDemoMenuInlineCollapsedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/layout/#components-layout-demo-side"], ["nzTitle", "\u53EA\u5C55\u5F00\u5F53\u524D\u7236\u7EA7\u83DC\u5355", "nzSelector", "nz-demo-menu-sider-current", "nzGenerateCommand", "ng g ng-zorro-antd:menu-sider-current <name>", "nzComponentName", "NzDemoMenuSiderCurrentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5782\u76F4\u83DC\u5355", "nzSelector", "nz-demo-menu-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:menu-vertical <name>", "nzComponentName", "NzDemoMenuVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E3B\u9898", "nzSelector", "nz-demo-menu-theme", "nzGenerateCommand", "ng g ng-zorro-antd:menu-theme <name>", "nzComponentName", "NzDemoMenuThemeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5207\u6362\u83DC\u5355\u7C7B\u578B", "nzSelector", "nz-demo-menu-switch-mode", "nzGenerateCommand", "ng g ng-zorro-antd:menu-switch-mode <name>", "nzComponentName", "NzDemoMenuSwitchModeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u914D\u5408\u8DEF\u7531\u4F7F\u7528", "nzSelector", "nz-demo-menu-router", "nzGenerateCommand", "ng g ng-zorro-antd:menu-router <name>", "nzComponentName", "NzDemoMenuRouterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://www.angular.cn/api/router/RouterLink"], ["nzTitle", "\u9012\u5F52\u751F\u6210\u83DC\u5355", "nzSelector", "nz-demo-menu-recursive", "nzGenerateCommand", "ng g ng-zorro-antd:menu-recursive <name>", "nzComponentName", "NzDemoMenuRecursiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://github.com/angular/angular/issues/14842"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "[nz-menu]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-menu]'", 1, "anchor"], ["id", "[nz-menu-item]"], ["onclick", "window.location.hash = '[nz-menu-item]'", 1, "anchor"], ["href", "https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions"], ["id", "[nz-submenu]"], ["onclick", "window.location.hash = '[nz-submenu]'", 1, "anchor"], ["id", "[nz-menu-group]"], ["onclick", "window.location.hash = '[nz-menu-group]'", 1, "anchor"], ["id", "[nz-menu-divider]"], ["onclick", "window.location.hash = '[nz-menu-divider]'", 1, "anchor"]], template: function NzDemoMenuZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("nzClick", function NzDemoMenuZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](15, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](17, "\u5BFC\u822A\u83DC\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](21, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](23, "\u4E3A\u9875\u9762\u548C\u529F\u80FD\u63D0\u4F9B\u5BFC\u822A\u7684\u83DC\u5355\u5217\u8868\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](24, "h2", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](26, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](28, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](30, "\u5BFC\u822A\u83DC\u5355\u662F\u4E00\u4E2A\u7F51\u7AD9\u7684\u7075\u9B42\uFF0C\u7528\u6237\u4F9D\u8D56\u5BFC\u822A\u5728\u5404\u4E2A\u9875\u9762\u4E2D\u8FDB\u884C\u8DF3\u8F6C\u3002\u4E00\u822C\u5206\u4E3A\u9876\u90E8\u5BFC\u822A\u548C\u4FA7\u8FB9\u5BFC\u822A\uFF0C\u9876\u90E8\u5BFC\u822A\u63D0\u4F9B\u5168\u5C40\u6027\u7684\u7C7B\u76EE\u548C\u529F\u80FD\uFF0C\u4FA7\u8FB9\u5BFC\u822A\u63D0\u4F9B\u591A\u7EA7\u7ED3\u6784\u6765\u6536\u7EB3\u548C\u6392\u5217\u7F51\u7AD9\u67B6\u6784\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](32, "\u66F4\u591A\u5E03\u5C40\u548C\u5BFC\u822A\u7684\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](34, "\u901A\u7528\u5E03\u5C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](35, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](36, "pre", 20)(37, "code")(38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](39, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](42, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](43, " NzMenuModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](45, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](47, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](48, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](49, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](51, "'ng-zorro-antd/menu'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](53, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](54, "h2")(55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](56, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](57, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("click", function NzDemoMenuZhComponent_Template_i_click_57_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](58, "div", 25)(59, "div", 26)(60, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](61, "nz-demo-menu-horizontal", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](64, "\u6C34\u5E73\u7684\u9876\u90E8\u5BFC\u822A\u83DC\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](65, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](66, "nz-demo-menu-inline", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](69, "\u5782\u76F4\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u5185\u5D4C\u5728\u83DC\u5355\u533A\u57DF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](70, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](71, "nz-demo-menu-inline-collapsed", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](74, "\u5185\u5D4C\u83DC\u5355\u53EF\u4EE5\u88AB\u7F29\u8D77/\u5C55\u5F00\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](76, "\u4F60\u53EF\u4EE5\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](77, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](78, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](79, " \u91CC\u67E5\u770B\u4FA7\u8FB9\u5E03\u5C40\u7ED3\u5408\u7684\u5B8C\u6574\u793A\u4F8B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](80, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](81, "nz-demo-menu-sider-current", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](84, "\u70B9\u51FB\u83DC\u5355\uFF0C\u6536\u8D77\u5176\u4ED6\u5C55\u5F00\u7684\u6240\u6709\u83DC\u5355\uFF0C\u4FDD\u6301\u83DC\u5355\u805A\u7126\u7B80\u6D01\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](85, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](86, "nz-demo-menu-vertical", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](89, "\u5B50\u83DC\u5355\u662F\u5F39\u51FA\u7684\u5F62\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](90, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](91, "nz-demo-menu-theme", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](92, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](94, "\u5185\u5EFA\u4E86\u4E24\u5957\u4E3B\u9898 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](96, "light|dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](97, "\uFF0C\u9ED8\u8BA4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](99, "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](100, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](101, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](102, "nz-demo-menu-switch-mode", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](103, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](105, "\u5C55\u793A\u52A8\u6001\u5207\u6362\u6A21\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](106, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](107, "nz-demo-menu-router", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](108, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](110, "\u81EA\u52A8\u6839\u636E\u8DEF\u7531\u6FC0\u6D3B\u83DC\u5355\u9879\uFF0C\u9700\u8981\u7ED3\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](111, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](112, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](113, " \u4E00\u8D77\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](114, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](115, "nz-demo-menu-recursive", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](118, "\u9012\u5F52\u751F\u6210\u83DC\u5355\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](120, "nzPaddingLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](121, "\uFF0C\u4EC5\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](123, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](124, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](125, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](126, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](127, " \u7684\u6A21\u5F0F\uFF0C\u4E14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](129, "nzInlineCollapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](130, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](132, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](133, " \u7684\u60C5\u51B5\u4E0B\u6709\u6548\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](134, "blockquote")(135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](136, "\u8FFD\u8E2A Issue\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](137, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](138, "https://github.com/angular/angular/issues/14842");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](139, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](140, "h2", 42)(141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](142, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](143, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](144, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](145, "pre", 44)(146, "code")(147, "span", 45)(148, "span", 45)(149, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](150, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](151, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](152, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](153, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](154, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](155, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](156, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](157, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](158, "span", 45)(159, "span", 45)(160, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](161, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](164, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](165, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](166, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](167, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](168, "Menu 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](169, "span", 45)(170, "span", 45)(171, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](172, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](174, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](175, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](176, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](177, "span", 45)(178, "span", 45)(179, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](180, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](182, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](183, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](184, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](185, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](186, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](187, "Menu 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](188, "span", 45)(189, "span", 45)(190, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](191, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](193, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](194, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](195, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](196, "span", 45)(197, "span", 45)(198, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](199, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](201, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](202, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](203, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](204, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](205, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](206, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](207, "span", 47)(208, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](209, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](210, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](211, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](212, "SubMenu Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](213, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](214, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](215, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](216, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](217, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](218, "span", 45)(219, "span", 45)(220, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](221, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](222, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](223, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](224, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](225, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](226, "span", 45)(227, "span", 45)(228, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](229, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](231, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](232, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](233, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](234, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](235, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](236, "SubMenu Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](237, "span", 45)(238, "span", 45)(239, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](240, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](241, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](242, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](243, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](244, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](245, "span", 45)(246, "span", 45)(247, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](248, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](250, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](251, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](252, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](253, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](254, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](255, "SubMenu Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](256, "span", 45)(257, "span", 45)(258, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](259, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](261, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](262, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](263, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](264, "span", 45)(265, "span", 45)(266, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](267, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](268, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](269, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](270, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](271, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](272, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](273, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](274, "SubMenu Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](275, "span", 45)(276, "span", 45)(277, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](278, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](279, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](280, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](281, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](282, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](283, "span", 45)(284, "span", 45)(285, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](286, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](287, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](288, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](289, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](290, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](291, "span", 45)(292, "span", 45)(293, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](294, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](295, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](296, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](297, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](298, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](299, "span", 45)(300, "span", 45)(301, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](302, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](303, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](304, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](305, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](306, "h3", 48)(307, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](308, "[nz-menu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](309, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](310, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](311, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](312, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](313, "table")(314, "thead")(315, "tr")(316, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](317, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](318, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](319, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](320, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](321, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](322, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](323, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](324, "tbody")(325, "tr")(326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](328, "[nzInlineCollapsed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](330, "inline \u65F6\u83DC\u5355\u662F\u5426\u6536\u8D77\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](333, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](335, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](336, "tr")(337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](339, "[nzInlineIndent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](341, "inline \u6A21\u5F0F\u7684\u83DC\u5355\u7F29\u8FDB\u5BBD\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](344, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](345, "td")(346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](347, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](348, "tr")(349, "td")(350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](351, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](353, "\u83DC\u5355\u7C7B\u578B\uFF0C\u73B0\u5728\u652F\u6301\u5782\u76F4\u3001\u6C34\u5E73\u3001\u548C\u5185\u5D4C\u6A21\u5F0F\u4E09\u79CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](354, "td")(355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](356, "'vertical' | 'horizontal' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](357, "td")(358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](359, "'vertical'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](360, "tr")(361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](363, "[nzSelectable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](365, "\u662F\u5426\u5141\u8BB8\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](368, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](371, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](372, "tr")(373, "td")(374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](375, "[nzTheme]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](377, "\u4E3B\u9898\u989C\u8272");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](378, "td")(379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](380, "'light' | 'dark'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](381, "td")(382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](383, "'light'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](384, "tr")(385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](387, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](389, "\u70B9\u51FB nz-menu-item \u8F93\u51FA\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](390, "td")(391, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](392, "EventEmitter<NzMenuItemDirective>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](394, "h3", 51)(395, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](396, "[nz-menu-item]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](397, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](398, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](399, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](400, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](401, "table")(402, "thead")(403, "tr")(404, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](405, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](406, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](407, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](409, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](411, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](412, "tbody")(413, "tr")(414, "td")(415, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](416, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](418, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](419, "td")(420, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](421, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](422, "td")(423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](424, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](425, "tr")(426, "td")(427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](428, "[nzSelected]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](430, "\u662F\u5426\u88AB\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](431, "td")(432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](433, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](434, "td")(435, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](436, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](437, "tr")(438, "td")(439, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](440, "[nzMatchRouter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](442, "\u662F\u5426\u6839\u636E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](443, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](444, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](445, " \u81EA\u52A8\u8BBE\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](446, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](447, "nzSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](450, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](451, "td")(452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](453, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](454, "tr")(455, "td")(456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](457, "[nzMatchRouterExact]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](459, "\u662F\u5426\u8DEF\u7531\u5B8C\u6574\u7CBE\u786E\u5339\u914D, \u8BE6\u89C1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](460, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](461, "routerLinkActiveOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](462, "td")(463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](464, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](465, "td")(466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](467, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](468, "h3", 54)(469, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](470, "[nz-submenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](471, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](472, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](473, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](474, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](475, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](476, "\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u6765\u5B9A\u4E49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](477, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](478, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](479, " \u7684\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](480, "pre", 44)(481, "code")(482, "span", 45)(483, "span", 45)(484, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](485, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](486, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](487, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](488, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](489, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](490, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](491, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](492, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](493, "span", 47)(494, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](495, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](496, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](497, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](498, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](499, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](500, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](501, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](502, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](503, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](504, "span", 47)(505, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](506, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](507, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](508, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](509, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](510, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](511, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](512, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](513, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](514, "span", 45)(515, "span", 45)(516, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](517, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](518, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](519, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](520, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](521, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](522, "span", 45)(523, "span", 45)(524, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](525, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](526, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](527, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](528, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](529, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](530, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](531, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](532, "span", 45)(533, "span", 45)(534, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](535, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](536, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](537, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](538, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](539, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](540, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](541, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](542, "span", 45)(543, "span", 45)(544, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](545, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](546, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](547, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](548, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](549, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](550, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](551, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](552, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](553, "span", 47)(554, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](555, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](556, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](557, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](558, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](559, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](560, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](561, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](562, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](563, "span", 45)(564, "span", 45)(565, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](566, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](567, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](568, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](569, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](570, "span", 45)(571, "span", 45)(572, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](573, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](574, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](575, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](576, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](577, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](578, "span", 45)(579, "span", 45)(580, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](581, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](582, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](583, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](584, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](585, "span", 45)(586, "span", 45)(587, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](588, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](589, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](590, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](591, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](592, "span", 45)(593, "span", 45)(594, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](595, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](596, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](597, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](598, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](599, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](600, "span", 45)(601, "span", 45)(602, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](603, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](604, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](605, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](606, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](607, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](608, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](609, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](610, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](611, "span", 47)(612, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](613, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](614, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](615, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](616, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](617, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](618, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](619, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](620, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](621, "span", 45)(622, "span", 45)(623, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](624, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](625, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](626, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](627, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](628, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](629, "span", 45)(630, "span", 45)(631, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](632, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](633, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](634, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](635, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](636, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](637, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](638, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](639, "span", 45)(640, "span", 45)(641, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](642, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](643, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](644, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](645, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](646, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](647, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](648, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](649, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](650, "span", 47)(651, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](652, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](653, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](654, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](655, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](656, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](657, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](658, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](659, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](660, "span", 45)(661, "span", 45)(662, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](663, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](664, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](665, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](666, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](667, "span", 45)(668, "span", 45)(669, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](670, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](671, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](672, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](673, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](674, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](675, "span", 45)(676, "span", 45)(677, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](678, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](679, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](680, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](681, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](682, "span", 45)(683, "span", 45)(684, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](685, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](686, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](687, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](688, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](689, "table")(690, "thead")(691, "tr")(692, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](693, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](694, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](695, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](696, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](697, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](698, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](699, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](700, "tbody")(701, "tr")(702, "td")(703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](704, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](706, "\u662F\u5426\u5C55\u5F00\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](707, "td")(708, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](709, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](710, "td")(711, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](712, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](713, "tr")(714, "td")(715, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](716, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](717, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](718, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](719, "td")(720, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](721, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](722, "td")(723, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](724, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](725, "tr")(726, "td")(727, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](728, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](730, "\u6807\u9898\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](731, "td")(732, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](733, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](735, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](736, "tr")(737, "td")(738, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](739, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](740, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](741, "\u6807\u9898\u4E2D icon \u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](742, "td")(743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](744, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](745, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](746, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](747, "tr")(748, "td")(749, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](750, "[nzMenuClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](751, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](752, "\u81EA\u5B9A\u4E49\u5B50\u83DC\u5355\u5BB9\u5668\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](753, "td")(754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](755, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](756, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](757, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](758, "tr")(759, "td")(760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](761, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](763, "\u5C55\u5F00\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](764, "td")(765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](766, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](768, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](769, "h3", 56)(770, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](771, "[nz-menu-group]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](772, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](773, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](774, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](775, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](776, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](777, "\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u6765\u5B9A\u4E49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](778, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](779, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](780, " \u7684\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](781, "pre", 44)(782, "code")(783, "span", 45)(784, "span", 45)(785, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](786, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](787, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](788, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](789, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](790, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](791, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](792, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](793, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](794, "span", 47)(795, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](796, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](797, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](798, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](799, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](800, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](801, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](802, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](803, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](804, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](805, "span", 47)(806, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](807, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](808, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](809, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](810, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](811, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](812, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](813, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](814, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](815, "span", 45)(816, "span", 45)(817, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](818, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](819, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](820, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](821, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](822, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](823, "span", 45)(824, "span", 45)(825, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](826, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](827, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](828, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](829, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](830, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](831, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](832, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](833, "span", 45)(834, "span", 45)(835, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](836, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](837, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](838, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](839, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](840, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](841, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](842, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](843, "span", 45)(844, "span", 45)(845, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](846, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](847, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](848, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](849, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](850, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](851, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](852, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](853, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](854, "span", 47)(855, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](856, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](857, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](858, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](859, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](860, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](861, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](862, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](863, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](864, "span", 45)(865, "span", 45)(866, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](867, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](868, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](869, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](870, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](871, "span", 45)(872, "span", 45)(873, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](874, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](875, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](876, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](877, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](878, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](879, "span", 45)(880, "span", 45)(881, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](882, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](883, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](884, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](885, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](886, "span", 45)(887, "span", 45)(888, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](889, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](890, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](891, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](892, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](893, "span", 45)(894, "span", 45)(895, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](896, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](897, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](898, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](899, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](900, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](901, "span", 45)(902, "span", 45)(903, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](904, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](905, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](906, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](907, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](908, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](909, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](910, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](911, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](912, "span", 47)(913, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](914, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](915, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](916, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](917, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](918, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](919, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](920, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](921, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](922, "span", 45)(923, "span", 45)(924, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](925, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](926, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](927, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](928, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](929, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](930, "span", 45)(931, "span", 45)(932, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](933, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](934, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](935, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](936, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](937, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](938, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](939, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](940, "span", 45)(941, "span", 45)(942, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](943, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](944, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](945, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](946, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](947, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](948, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](949, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](950, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](951, "span", 47)(952, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](953, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](954, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](955, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](956, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](957, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](958, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](959, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](960, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](961, "span", 45)(962, "span", 45)(963, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](964, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](965, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](966, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](967, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](968, "span", 45)(969, "span", 45)(970, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](971, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](972, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](973, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](974, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](975, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](976, "span", 45)(977, "span", 45)(978, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](979, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](980, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](981, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](982, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](983, "span", 45)(984, "span", 45)(985, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](986, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](987, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](988, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](989, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](990, "table")(991, "thead")(992, "tr")(993, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](994, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](995, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](996, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](997, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](998, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](999, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1000, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1001, "tbody")(1002, "tr")(1003, "td")(1004, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1005, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1006, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1007, "\u6807\u9898\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1008, "td")(1009, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1010, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1011, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1012, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1013, "h3", 58)(1014, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1015, "[nz-menu-divider]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1016, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1017, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1018, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1019, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1020, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](1021, "\u83DC\u5355\u9879\u5206\u5272\u7EBF\uFF0C\u53EA\u7528\u5728\u5F39\u51FA\u83DC\u5355\u5185\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-horizontal")("nzLink", "components-menu-demo-horizontal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/horizontal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-inline")("nzLink", "components-menu-demo-inline")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-inline-collapsed")("nzLink", "components-menu-demo-inline-collapsed")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline-collapsed.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-sider-current")("nzLink", "components-menu-demo-sider-current")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/sider-current.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-vertical")("nzLink", "components-menu-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-theme")("nzLink", "components-menu-demo-theme")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/theme.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-switch-mode")("nzLink", "components-menu-demo-switch-mode")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/switch-mode.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-router")("nzLink", "components-menu-demo-router")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/router.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("nzId", "components-menu-demo-recursive")("nzLink", "components-menu-demo-recursive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/recursive.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["??NzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal__WEBPACK_IMPORTED_MODULE_1__.NzDemoMenuHorizontalComponent, _inline__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuInlineComponent, _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuInlineCollapsedComponent, _sider_current__WEBPACK_IMPORTED_MODULE_4__.NzDemoMenuSiderCurrentComponent, _vertical__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuVerticalComponent, _theme__WEBPACK_IMPORTED_MODULE_6__.NzDemoMenuThemeComponent, _switch_mode__WEBPACK_IMPORTED_MODULE_7__.NzDemoMenuSwitchModeComponent, _router__WEBPACK_IMPORTED_MODULE_8__.NzDemoMenuRouterComponent, _recursive__WEBPACK_IMPORTED_MODULE_9__.NzDemoMenuRecursiveComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_menu_index_module_ts.js.map