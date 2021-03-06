"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_form_index_module_ts"],{

/***/ 24166:
/*!****************************************************!*\
  !*** ./src/app/components/form/advanced-search.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormAdvancedSearchComponent": () => (/* binding */ NzDemoFormAdvancedSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);











function NzDemoFormAdvancedSearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10)(1, "nz-form-item", 11)(2, "nz-form-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 8)("hidden", !control_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzFor", "field" + control_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Field ", control_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControlName", "field" + control_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("id", "field" + control_r1.index);
} }
class NzDemoFormAdvancedSearchComponent {
    constructor(fb) {
        this.fb = fb;
        this.controlArray = [];
        this.isCollapse = true;
    }
    toggleCollapse() {
        this.isCollapse = !this.isCollapse;
        this.controlArray.forEach((c, index) => {
            c.show = this.isCollapse ? index < 6 : true;
        });
    }
    resetForm() {
        this.validateForm.reset();
    }
    ngOnInit() {
        this.validateForm = this.fb.group({});
        for (let i = 0; i < 10; i++) {
            this.controlArray.push({ index: i, show: i < 6 });
            this.validateForm.addControl(`field${i}`, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
        }
    }
}
NzDemoFormAdvancedSearchComponent.??fac = function NzDemoFormAdvancedSearchComponent_Factory(t) { return new (t || NzDemoFormAdvancedSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormAdvancedSearchComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormAdvancedSearchComponent, selectors: [["nz-demo-form-advanced-search"]], decls: 14, vars: 6, consts: [["nz-form", "", 1, "ant-advanced-search-form", 3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "hidden", 4, "ngFor", "ngForOf"], ["nz-row", ""], ["nz-col", "", 1, "search-area", 3, "nzSpan"], ["nz-button", "", 3, "nzType"], ["nz-button", "", 3, "click"], [1, "collapse", 3, "click"], ["nz-icon", "", 3, "nzType"], [1, "search-result-list"], ["nz-col", "", 3, "nzSpan", "hidden"], ["nzFlex", ""], [3, "nzFor"], ["nz-input", "", "placeholder", "placeholder", 3, "formControlName"]], template: function NzDemoFormAdvancedSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NzDemoFormAdvancedSearchComponent_div_2_Template, 6, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "div", 4)(5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoFormAdvancedSearchComponent_Template_button_click_7_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoFormAdvancedSearchComponent_Template_a_click_9_listener() { return ctx.toggleCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Collapse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Search Result List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzGutter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.controlArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzType", ctx.isCollapse ? "down" : "up");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective], styles: [".ant-advanced-search-form[_ngcontent-%COMP%] {\n        padding: 24px;\n        background: #fbfbfb;\n        border: 1px solid #d9d9d9;\n        border-radius: 6px;\n      }\n\n      .search-result-list[_ngcontent-%COMP%] {\n        margin-top: 16px;\n        border: 1px dashed #e9e9e9;\n        border-radius: 6px;\n        background-color: #fafafa;\n        min-height: 200px;\n        text-align: center;\n        padding-top: 80px;\n      }\n\n      [nz-form-label][_ngcontent-%COMP%] {\n        overflow: visible;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-left: 8px;\n      }\n\n      .collapse[_ngcontent-%COMP%] {\n        margin-left: 8px;\n        font-size: 12px;\n      }\n\n      .search-area[_ngcontent-%COMP%] {\n        text-align: right;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2VkLXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGlCQUFpQjtNQUNuQiIsImZpbGUiOiJhZHZhbmNlZC1zZWFyY2gudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5hbnQtYWR2YW5jZWQtc2VhcmNoLWZvcm0ge1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtcmVzdWx0LWxpc3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgIH1cblxuICAgICAgW256LWZvcm0tbGFiZWxdIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb2xsYXBzZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1hcmVhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 97240:
/*!**********************************************!*\
  !*** ./src/app/components/form/auto-tips.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyValidators": () => (/* binding */ MyValidators),
/* harmony export */   "NzDemoFormAutoTipsComponent": () => (/* binding */ NzDemoFormAutoTipsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);











function NzDemoFormAutoTipsComponent_ng_template_26_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please confirm your password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormAutoTipsComponent_ng_template_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormAutoTipsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NzDemoFormAutoTipsComponent_ng_template_26_ng_container_0_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormAutoTipsComponent_ng_template_26_ng_container_1_Template, 2, 0, "ng-container", 14);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r2.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r2.hasError("confirm"));
} }
class NzDemoFormAutoTipsComponent {
    constructor(fb) {
        this.fb = fb;
        // current locale is key of the nzAutoTips
        this.autoTips = {
            'zh-cn': {
                required: '?????????',
                email: '?????????????????????'
            },
            en: {
                required: 'Input is required',
                email: 'The input is not valid email'
            }
        };
        this.userNameAsyncValidator = (control) => new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            setTimeout(() => {
                if (control.value === 'JasonWood') {
                    observer.next({
                        duplicated: { 'zh-cn': `??????????????????`, en: `The username is redundant!` }
                    });
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            }, 1000);
        });
        this.confirmValidator = (control) => {
            if (!control.value) {
                return { error: true, required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        // use `MyValidators`
        const { required, maxLength, minLength, email, mobile } = MyValidators;
        this.validateForm = this.fb.group({
            userName: ['', [required, maxLength(12), minLength(6)], [this.userNameAsyncValidator]],
            mobile: ['', [required, mobile]],
            email: ['', [required, email]],
            password: ['', [required]],
            confirm: ['', [this.confirmValidator]]
        });
    }
    submitForm(value) {
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }
    validateConfirmPassword() {
        setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
    }
}
NzDemoFormAutoTipsComponent.??fac = function NzDemoFormAutoTipsComponent_Factory(t) { return new (t || NzDemoFormAutoTipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
NzDemoFormAutoTipsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormAutoTipsComponent, selectors: [["nz-demo-form-auto-tips"]], decls: 32, vars: 17, consts: [["nz-form", "", 3, "nzAutoTips", "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSpan"], ["nzValidatingTip", "Validating...", 3, "nzSpan"], ["nz-input", "", "formControlName", "userName", "placeholder", "async validate try to write JasonWood"], [3, "nzSpan"], ["nz-input", "", "formControlName", "mobile", "placeholder", "mobile"], ["nz-input", "", "formControlName", "email", "placeholder", "email", "type", "email"], ["nzErrorTip", "Please input your password!", 3, "nzSpan", "nzDisableAutoTips"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "ngModelChange"], [3, "nzSpan", "nzDisableAutoTips", "nzErrorTip"], ["nz-input", "", "type", "password", "formControlName", "confirm", "placeholder", "confirm your password"], ["passwordErrorTpl", ""], [3, "nzOffset", "nzSpan"], ["nz-button", "", "nzType", "primary"], [4, "ngIf"]], template: function NzDemoFormAutoTipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NzDemoFormAutoTipsComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(ctx.validateForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-form-item")(7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-item")(12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "nz-form-item")(17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "nz-form-control", 7)(20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NzDemoFormAutoTipsComponent_Template_input_ngModelChange_20_listener() { return ctx.validateConfirmPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "nz-form-item")(22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, NzDemoFormAutoTipsComponent_ng_template_26_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "nz-form-item")(29, "nz-form-control", 12)(30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzAutoTips", ctx.autoTips)("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12)("nzDisableAutoTips", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12)("nzDisableAutoTips", true)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzOffset", 7)("nzSpan", 12);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["??NzTransitionPatchDirective"]], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG8tdGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoiYXV0by10aXBzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotZm9ybV0ge1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });
class MyValidators extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators {
    static minLength(minLength) {
        return (control) => {
            if (_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(minLength)(control) === null) {
                return null;
            }
            return { minlength: { 'zh-cn': `??????????????? ${minLength}`, en: `MinLength is ${minLength}` } };
        };
    }
    static maxLength(maxLength) {
        return (control) => {
            if (_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(maxLength)(control) === null) {
                return null;
            }
            return { maxlength: { 'zh-cn': `??????????????? ${maxLength}`, en: `MaxLength is ${maxLength}` } };
        };
    }
    static mobile(control) {
        const value = control.value;
        if (isEmptyInputValue(value)) {
            return null;
        }
        return isMobile(value) ? null : { mobile: { 'zh-cn': `???????????????????????????`, en: `Mobile phone number is not valid` } };
    }
}
function isEmptyInputValue(value) {
    return value == null || value.length === 0;
}
function isMobile(value) {
    return typeof value === 'string' && /(^1\d{10}$)/.test(value);
}


/***/ }),

/***/ 60156:
/*!************************************************!*\
  !*** ./src/app/components/form/coordinated.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormCoordinatedComponent": () => (/* binding */ NzDemoFormCoordinatedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);










class NzDemoFormCoordinatedComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    genderChange(value) {
        this.validateForm.get('note').setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            note: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
        });
    }
}
NzDemoFormCoordinatedComponent.??fac = function NzDemoFormCoordinatedComponent_Factory(t) { return new (t || NzDemoFormCoordinatedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormCoordinatedComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NzDemoFormCoordinatedComponent, selectors: [["nz-demo-form-coordinated"]], decls: 17, vars: 7, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "note", 3, "nzSpan"], ["nzErrorTip", "Please input your username!", 3, "nzSpan"], ["id", "note", "type", "text", "nz-input", "", "formControlName", "note"], ["nzFor", "gender", "nzRequired", "", 3, "nzSpan"], ["nzErrorTip", "Please select your gender!", 3, "nzSpan"], ["id", "gender", "formControlName", "gender", "nzPlaceHolder", "Select a option and change input text above", 3, "ngModelChange"], ["nzValue", "male", "nzLabel", "male"], ["nzValue", "female", "nzLabel", "female"], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormCoordinatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function NzDemoFormCoordinatedComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "nz-form-item")(7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "nz-form-control", 5)(10, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function NzDemoFormCoordinatedComponent_Template_nz_select_ngModelChange_10_listener($event) { return ctx.genderChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "nz-option", 7)(12, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "nz-form-item")(14, "nz-form-control", 9)(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 12)("nzOffset", 5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["??NzTransitionPatchDirective"]], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb3JkaW5hdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQiIsImZpbGUiOiJjb29yZGluYXRlZC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 17695:
/*!******************************************************!*\
  !*** ./src/app/components/form/dynamic-form-item.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormDynamicFormItemComponent": () => (/* binding */ NzDemoFormDynamicFormItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);











function NzDemoFormDynamicFormItemComponent_nz_form_item_1_nz_form_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Passengers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzXs", 24)("nzSm", 4)("nzFor", control_r1.controlInstance);
} }
function NzDemoFormDynamicFormItemComponent_nz_form_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormDynamicFormItemComponent_nz_form_item_1_nz_form_label_1_Template, 2, 3, "nz-form-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nz-form-control", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoFormDynamicFormItemComponent_nz_form_item_1_Template_i_click_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const control_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.removeField(control_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzXs", 24)("nzSm", 20)("nzOffset", i_r2 == 0 ? 0 : 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControlName", control_r1.controlInstance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("id", control_r1.id);
} }
const _c0 = function () { return { span: 24, offset: 0 }; };
const _c1 = function () { return { span: 20, offset: 4 }; };
class NzDemoFormDynamicFormItemComponent {
    constructor(fb) {
        this.fb = fb;
        this.listOfControl = [];
    }
    addField(e) {
        if (e) {
            e.preventDefault();
        }
        const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
        const control = {
            id,
            controlInstance: `passenger${id}`
        };
        const index = this.listOfControl.push(control);
        console.log(this.listOfControl[this.listOfControl.length - 1]);
        this.validateForm.addControl(this.listOfControl[index - 1].controlInstance, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required));
    }
    removeField(i, e) {
        e.preventDefault();
        if (this.listOfControl.length > 1) {
            const index = this.listOfControl.indexOf(i);
            this.listOfControl.splice(index, 1);
            console.log(this.listOfControl);
            this.validateForm.removeControl(i.controlInstance);
        }
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        console.log(this.validateForm.value);
    }
    ngOnInit() {
        this.validateForm = this.fb.group({});
        this.addField();
    }
}
NzDemoFormDynamicFormItemComponent.??fac = function NzDemoFormDynamicFormItemComponent_Factory(t) { return new (t || NzDemoFormDynamicFormItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormDynamicFormItemComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormDynamicFormItemComponent, selectors: [["nz-demo-form-dynamic-form-item"]], decls: 11, vars: 10, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], [3, "nzXs", "nzSm"], ["nz-button", "", "nzType", "dashed", 1, "add-button", 3, "click"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "primary"], [3, "nzXs", "nzSm", "nzFor", 4, "ngIf"], ["nzErrorTip", "Please input passenger's name or delete this field.", 3, "nzXs", "nzSm", "nzOffset"], ["nz-input", "", "placeholder", "placeholder", 1, "passenger-input", 3, "formControlName"], ["nz-icon", "", "nzType", "minus-circle-o", 1, "dynamic-delete-button", 3, "click"], [3, "nzXs", "nzSm", "nzFor"]], template: function NzDemoFormDynamicFormItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NzDemoFormDynamicFormItemComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormDynamicFormItemComponent_nz_form_item_1_Template, 5, 6, "nz-form-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nz-form-item")(3, "nz-form-control", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoFormDynamicFormItemComponent_Template_button_click_4_listener($event) { return ctx.addField($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Add field ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nz-form-item")(8, "nz-form-control", 2)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listOfControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective], styles: [".dynamic-delete-button[_ngcontent-%COMP%] {\n        cursor: pointer;\n        position: relative;\n        top: 4px;\n        font-size: 24px;\n        color: #999;\n        transition: all 0.3s;\n      }\n\n      .dynamic-delete-button[_ngcontent-%COMP%]:hover {\n        color: #777;\n      }\n\n      .passenger-input[_ngcontent-%COMP%] {\n        width: 60%;\n        margin-right: 8px;\n      }\n\n      [nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      .add-button[_ngcontent-%COMP%] {\n        width: 60%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtZm9ybS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGVBQWU7UUFDZixXQUFXO1FBQ1gsb0JBQW9CO01BQ3RCOztNQUVBO1FBQ0UsV0FBVztNQUNiOztNQUVBO1FBQ0UsVUFBVTtRQUNWLGlCQUFpQjtNQUNuQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLFVBQVU7TUFDWiIsImZpbGUiOiJkeW5hbWljLWZvcm0taXRlbS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmR5bmFtaWMtZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5keW5hbWljLWRlbGV0ZS1idXR0b246aG92ZXIge1xuICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgIH1cblxuICAgICAgLnBhc3Nlbmdlci1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICBbbnotZm9ybV0ge1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuXG4gICAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 44624:
/*!*************************************************!*\
  !*** ./src/app/components/form/dynamic-rule.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormDynamicRuleComponent": () => (/* binding */ NzDemoFormDynamicRuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);










class NzDemoFormDynamicRuleComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    requiredChange(required) {
        if (!required) {
            this.validateForm.get('nickname').clearValidators();
            this.validateForm.get('nickname').markAsPristine();
        }
        else {
            this.validateForm.get('nickname').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
            this.validateForm.get('nickname').markAsDirty();
        }
        this.validateForm.get('nickname').updateValueAndValidity();
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            nickname: [null],
            required: [false]
        });
    }
}
NzDemoFormDynamicRuleComponent.??fac = function NzDemoFormDynamicRuleComponent_Factory(t) { return new (t || NzDemoFormDynamicRuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormDynamicRuleComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NzDemoFormDynamicRuleComponent, selectors: [["nz-demo-form-dynamic-rule"]], decls: 19, vars: 10, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "name", 3, "nzSpan"], ["nzErrorTip", "Please input your name", 3, "nzSpan"], ["type", "text", "nz-input", "", "formControlName", "name", "placeholder", "Please input your name"], ["nzFor", "nickname", 3, "nzSpan", "nzRequired"], ["nzErrorTip", "Please input your nickname", 3, "nzSpan"], ["type", "text", "nz-input", "", "formControlName", "nickname", "placeholder", "Please input your nickname"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "required", 3, "ngModelChange"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormDynamicRuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function NzDemoFormDynamicRuleComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "nz-form-item")(7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "nz-form-item")(12, "nz-form-control", 7)(13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function NzDemoFormDynamicRuleComponent_Template_label_ngModelChange_13_listener($event) { return ctx.requiredChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Nickname is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "nz-form-item")(16, "nz-form-control", 7)(17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
    } if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 4)("nzRequired", (tmp_4_0 = ctx.validateForm.get("required")) == null ? null : tmp_4_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 8)("nzOffset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 8)("nzOffset", 4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__.NzCheckboxComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["??NzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 83973:
/*!*************************************************!*\
  !*** ./src/app/components/form/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormEnComponent": () => (/* binding */ NzDemoFormEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-login */ 84312);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-login */ 81695);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ 63623);
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-search */ 24166);
/* harmony import */ var _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-item */ 17695);
/* harmony import */ var _time_related_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-related-controls */ 21904);
/* harmony import */ var _validate_reactive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate-reactive */ 73315);
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validate-template */ 96543);
/* harmony import */ var _auto_tips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auto-tips */ 97240);
/* harmony import */ var _validate_static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validate-static */ 34166);
/* harmony import */ var _coordinated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coordinated */ 60156);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout */ 33185);
/* harmony import */ var _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dynamic-rule */ 44624);






















class NzDemoFormEnComponent {
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
NzDemoFormEnComponent.??fac = function NzDemoFormEnComponent_Factory(t) { return new (t || NzDemoFormEnComponent)(); };
NzDemoFormEnComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineComponent"]({ type: NzDemoFormEnComponent, selectors: [["nz-demo-form"]], viewQuery: function NzDemoFormEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 919, vars: 43, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-form-demo-horizontal-login", "nzTitle", "Inline Login Form"], ["nzHref", "#components-form-demo-normal-login", "nzTitle", "Login Form"], ["nzHref", "#components-form-demo-register", "nzTitle", "Registration"], ["nzHref", "#components-form-demo-advanced-search", "nzTitle", "Advanced search"], ["nzHref", "#components-form-demo-dynamic-form-item", "nzTitle", "Dynamic Form Item"], ["nzHref", "#components-form-demo-time-related-controls", "nzTitle", "Time-related Controls"], ["nzHref", "#components-form-demo-validate-reactive", "nzTitle", "Reactive Forms Validation"], ["nzHref", "#components-form-demo-validate-template", "nzTitle", "Template-driven Forms Validation"], ["nzHref", "#components-form-demo-auto-tips", "nzTitle", "Auto tips"], ["nzHref", "#components-form-demo-validate-static", "nzTitle", "Manual Set Validation Status"], ["nzHref", "#components-form-demo-coordinated", "nzTitle", "Coordinated Controls"], ["nzHref", "#components-form-demo-layout", "nzTitle", "Form Layout"], ["nzHref", "#components-form-demo-dynamic-rule", "nzTitle", "Dynamic Rules"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["href", "https://angular.io/guide/forms#forms"], ["href", "https://angular.io/guide/reactive-forms#reactive-forms"], ["href", "https://angular.io/guide/forms#template-driven-forms"], ["id", "form"], ["onclick", "window.location.hash = 'form'", 1, "anchor"], ["id", "nz-form-item"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-form-item'", 1, "anchor"], ["id", "nz-form-label"], ["onclick", "window.location.hash = 'nz-form-label'", 1, "anchor"], ["id", "nz-form-control"], ["onclick", "window.location.hash = 'nz-form-control'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "punctuation"], [1, "token", "attr-name"], [1, "token", "attr-value"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Inline Login Form", "nzSelector", "nz-demo-form-horizontal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-horizontal-login <name>", "nzComponentName", "NzDemoFormHorizontalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Login Form", "nzSelector", "nz-demo-form-normal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-normal-login <name>", "nzComponentName", "NzDemoFormNormalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Registration", "nzSelector", "nz-demo-form-register", "nzGenerateCommand", "ng g ng-zorro-antd:form-register <name>", "nzComponentName", "NzDemoFormRegisterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Advanced search", "nzSelector", "nz-demo-form-advanced-search", "nzGenerateCommand", "ng g ng-zorro-antd:form-advanced-search <name>", "nzComponentName", "NzDemoFormAdvancedSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dynamic Form Item", "nzSelector", "nz-demo-form-dynamic-form-item", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-form-item <name>", "nzComponentName", "NzDemoFormDynamicFormItemComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Time-related Controls", "nzSelector", "nz-demo-form-time-related-controls", "nzGenerateCommand", "ng g ng-zorro-antd:form-time-related-controls <name>", "nzComponentName", "NzDemoFormTimeRelatedControlsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://date-fns.org/"], ["nzTitle", "Reactive Forms Validation", "nzSelector", "nz-demo-form-validate-reactive", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-reactive <name>", "nzComponentName", "NzDemoFormValidateReactiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/guide/template-syntax"], ["nzTitle", "Template-driven Forms Validation", "nzSelector", "nz-demo-form-validate-template", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-template <name>", "nzComponentName", "NzDemoFormValidateTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Auto tips", "nzSelector", "nz-demo-form-auto-tips", "nzGenerateCommand", "ng g ng-zorro-antd:form-auto-tips <name>", "nzComponentName", "NzDemoFormAutoTipsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Manual Set Validation Status", "nzSelector", "nz-demo-form-validate-static", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-static <name>", "nzComponentName", "NzDemoFormValidateStaticComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Coordinated Controls", "nzSelector", "nz-demo-form-coordinated", "nzGenerateCommand", "ng g ng-zorro-antd:form-coordinated <name>", "nzComponentName", "NzDemoFormCoordinatedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Form Layout", "nzSelector", "nz-demo-form-layout", "nzGenerateCommand", "ng g ng-zorro-antd:form-layout <name>", "nzComponentName", "NzDemoFormLayoutComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dynamic Rules", "nzSelector", "nz-demo-form-dynamic-rule", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-rule <name>", "nzComponentName", "NzDemoFormDynamicRuleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-form]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-form]'", 1, "anchor"], ["href", "/components/grid/zh"], ["href", "https://github.com/angular/angular/issues/10887"], ["id", "nz-form-split"], ["onclick", "window.location.hash = 'nz-form-split'", 1, "anchor"], ["id", "nz-form-text"], ["onclick", "window.location.hash = 'nz-form-text'", 1, "anchor"]], template: function NzDemoFormEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????listener"]("nzClick", function NzDemoFormEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14)(16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](17, "section", 16)(18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](19, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](20, "span", 17)(21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](24, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](26, "Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](28, "Form is totally based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](30, "Angular Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](31, ", you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](33, "reactive forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](34, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](36, "template-driven-forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](37, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](38, "blockquote")(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](40, "Please make sure you have read the official form document before using the component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](41, "h2", 24)(42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](43, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](45, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](47, "You can align the controls of a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](49, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](50, " using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](52, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](53, " prop\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](54, "ul")(55, "li")(56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](57, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](58, "\uFF1Ato horizontally align the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](61, "s and controls of the fields. (Default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](62, "li")(63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](64, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](65, "\uFF1Ato vertically align the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](68, "s and controls of the fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](69, "li")(70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](71, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](72, "\uFF1Ato render form fields in one line.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](73, "h3", 26)(74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](75, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](76, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](77, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](78, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](79, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](81, "Used to separate the item in forms, contains label(optional) and control field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](82, "h3", 29)(83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](84, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](85, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](86, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](87, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](88, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](90, "The label of the form item, optional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](91, "h3", 31)(92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](93, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](94, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](95, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](96, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](97, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](99, "A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](100, "pre", 33)(101, "code")(102, "span", 34)(103, "span", 34)(104, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](105, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](106, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](107, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](108, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](109, "nz-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](110, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](111, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](112, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](113, "span", 34)(114, "span", 34)(115, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](116, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](117, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](118, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](119, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](120, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](121, "span", 34)(122, "span", 34)(123, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](124, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](125, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](126, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](127, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](128, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](129, "span", 37)(130, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](131, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](132, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](133, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](134, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](135, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](136, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](137, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](138, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](139, "nzFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](140, "span", 37)(141, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](142, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](143, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](145, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](146, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](147, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](148, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](149, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](150, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](151, "span", 34)(152, "span", 34)(153, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](154, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](155, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](156, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](157, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](158, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](159, "span", 34)(160, "span", 34)(161, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](162, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](163, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](164, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](165, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](166, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](167, "span", 37)(168, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](169, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](170, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](171, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](172, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](173, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](174, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](175, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](176, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](177, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](178, "span", 34)(179, "span", 34)(180, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](181, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](182, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](183, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](184, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](185, "nz-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](186, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](187, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](188, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](189, "span", 37)(190, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](191, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](192, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](193, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](194, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](195, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](196, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](197, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](198, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](199, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](200, "span", 37)(201, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](202, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](203, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](204, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](205, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](206, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](207, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](208, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](209, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](210, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](211, "span", 37)(212, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](213, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](214, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](215, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](216, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](217, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](218, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](219, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](220, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](221, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](222, "span", 34)(223, "span", 34)(224, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](225, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](226, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](227, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](228, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](229, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](230, "span", 34)(231, "span", 34)(232, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](233, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](234, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](235, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](236, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](237, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](238, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](239, "span", 34)(240, "span", 34)(241, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](242, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](243, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](244, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](245, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](246, "pre", 38)(247, "code")(248, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](249, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](250, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](251, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](252, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](253, " NzFormModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](254, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](255, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](256, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](257, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](258, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](259, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](260, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](261, "'ng-zorro-antd/form'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](262, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](263, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](264, "h2")(265, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](266, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](267, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????listener"]("click", function NzDemoFormEnComponent_Template_i_click_267_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](268, "div", 42)(269, "div", 43)(270, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](271, "nz-demo-form-horizontal-login", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](272, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](273, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](274, "Inline login form is often used in navigation bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](275, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](276, "nz-demo-form-normal-login", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](277, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](279, "Normal login form which can contain more elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](280, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](281, "nz-demo-form-register", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](282, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](284, "Fill in this form to create a new account for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](285, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](286, "nz-demo-form-advanced-search", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](287, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](288, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](289, "Three columns layout is often used for advanced searching of data table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](291, "Because the width of label is not fixed, you may need to adjust it by customizing its style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](292, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](293, "nz-demo-form-dynamic-form-item", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](294, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](295, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](296, "Add or remove form items dynamically.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](297, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](298, "nz-demo-form-time-related-controls", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](299, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](301, "All the types of input and output in time-related components are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](303, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](304, ". You can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](305, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](306, "date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](307, " to handle it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](308, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](309, "nz-demo-form-validate-reactive", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](310, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](312, "We provide properties like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](314, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](316, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](317, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](319, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](320, " to customize your own validate status and message, when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](321, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](322, "reactive forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](323, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](324, "ol")(325, "li")(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](327, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](328, ": validate status of form components, the default status comes from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](330, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](331, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](333, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](334, ", you can set other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](336, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](337, " to it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](338, "li")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](340, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](341, ": display feed icon of input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](342, "li")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](344, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](346, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](348, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](350, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](351, "\uFF1Adisplay validate message\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](352, "blockquote")(353, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](354, "When there are multiple tips in the same state, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](356, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](358, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](360, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](362, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](363, " supports the passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](364, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](365, "TemplateRef<{ $implicit: FormControl }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](366, " type, which can be used to switch tips after exporting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](368, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](369, " via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](370, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](371, "template syntax");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](372, ". When the FormControl.status is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](374, "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](375, ", and the errors contains ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](377, "{warning:true}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](378, " , the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](380, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](381, " display with warning status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](382, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](383, "nz-demo-form-validate-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](384, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](385, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](386, "When using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](387, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](388, "template-driven forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](389, ", the form could change its status via the template setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](390, "ol")(391, "li")(392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](393, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](394, ": display feed icon of input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](395, "li")(396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](397, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](399, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](401, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](403, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](404, "\uFF1Adisplay validate message\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](405, "blockquote")(406, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](407, "When there are multiple tips in the same state, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](409, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](410, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](411, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](412, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](413, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](415, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](416, " supports the passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](418, "TemplateRef<{ $implicit: NgModel }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](419, " type, which can be used to switch tips after exporting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](420, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](421, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](422, " via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](423, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](424, "template syntax");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](425, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](426, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](427, "nz-demo-form-auto-tips", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](428, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](429, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](430, "Make tips to be easy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](431, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](432, "Need to customize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](434, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](435, " and provide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](437, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](438, " in advance, the priority is as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](439, "ul")(440, "li")(441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](442, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](443, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](445, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](446, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](447, "Via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](449, "@Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](450, " set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](451, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](452, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](453, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](454, "Via global config set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](456, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](457, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](458, "In addition, you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](459, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](460, "nzDisableAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](461, " to disable it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](462, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](463, "nz-demo-form-validate-static", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](464, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](465, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](466, "You can set the form status directly via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](468, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](469, " on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](471, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](472, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](473, "ol")(474, "li")(475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](476, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](477, ": validate status of form components which could be 'success', 'warning', 'error', 'validating'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](478, "li")(479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](480, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](481, ": display feed icon of input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](482, "li")(483, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](484, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](485, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](486, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](488, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](490, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](491, "\uFF1Adisplay validate message\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](492, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](493, "nz-demo-form-coordinated", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](494, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](495, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](496, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](498, "setValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](499, " to set other control's value programmaticly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](500, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](501, "nz-demo-form-layout", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](502, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](503, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](504, "There are three layout for form: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](505, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](506, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](507, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](509, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](510, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](512, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](513, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](514, "nz-code-box", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](515, "nz-demo-form-dynamic-rule", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](516, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](517, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](518, "Perform different check rules according to different situations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](519, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](520, "h2", 62)(521, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](522, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](523, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](524, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](525, "h3", 64)(526, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](527, "[nz-form]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](528, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](529, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](530, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](531, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](532, "table")(533, "thead")(534, "tr")(535, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](536, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](537, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](538, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](539, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](540, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](541, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](542, "Default Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](543, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](544, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](545, "tbody")(546, "tr")(547, "td")(548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](549, "[nzLayout]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](551, "Form layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](552, "td")(553, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](554, "'horizontal' | 'vertical' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](555, "td")(556, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](557, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](559, "tr")(560, "td")(561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](562, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](564, "change default props ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](565, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](566, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](567, " value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](568, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](569, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](570, "td")(571, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](572, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](573, "td")(574, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](575, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](577, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](578, "tr")(579, "td")(580, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](581, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](583, "Set default props ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](584, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](585, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](586, " value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](587, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](588, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](589, ", please refer to the example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](590, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](591, "Auto tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](592, "td")(593, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](594, "Record<string, Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](595, "td")(596, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](597, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](598, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](599, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](600, "tr")(601, "td")(602, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](603, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](605, "Set default props ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](606, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](607, "[nzDisableAutoTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](608, " value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](609, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](610, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](611, "td")(612, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](613, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](614, "td")(615, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](616, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](618, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](619, "h3", 26)(620, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](621, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](622, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](623, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](624, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](625, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](626, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](627, "Used to separate the item in forms, contains label(optional) and control field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](628, "blockquote")(629, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](630, "All api in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](631, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](632, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](633, " can be used in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](634, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](635, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](636, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](637, "h3", 29)(638, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](639, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](640, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](641, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](642, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](643, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](644, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](645, "The label of the form item, optional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](646, "blockquote")(647, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](648, "All api in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](649, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](650, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](651, " can be used in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](652, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](653, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](654, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](655, "table")(656, "thead")(657, "tr")(658, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](659, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](660, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](661, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](662, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](663, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](664, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](665, "Default Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](666, "tbody")(667, "tr")(668, "td")(669, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](670, "[nzRequired]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](671, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](672, "add required style to current item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](673, "td")(674, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](675, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](676, "td")(677, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](678, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](679, "tr")(680, "td")(681, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](682, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](683, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](684, "whether to not display ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](685, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](686, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](687, " after label text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](688, "td")(689, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](690, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](691, "td")(692, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](693, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](694, "tr")(695, "td")(696, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](697, "[nzFor]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](699, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](700, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](701, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](702, " property of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](704, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](705, "td")(706, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](707, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](709, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](710, "h3", 31)(711, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](712, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](713, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](714, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](715, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](716, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](717, "blockquote")(718, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](719, "Note\uFF1ADue to the lack of partial Observable in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](720, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](721, "Angular Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](722, ", you have to notify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](723, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](724, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](725, " to update its status with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](726, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](727, "updateValueAndValidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](728, " when you update form status using methods like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](730, "markAsDirty");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](731, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](732, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](733, "A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](734, "blockquote")(735, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](736, "All api in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](737, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](738, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](739, " can be used in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](741, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](742, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](743, "table")(744, "thead")(745, "tr")(746, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](747, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](748, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](749, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](750, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](751, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](752, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](753, "Default Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](754, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](755, "tbody")(756, "tr")(757, "td")(758, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](759, "[nzValidateStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](761, "Will generate status based on the input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](762, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](763, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](764, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](766, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](767, " or string, the default value is the first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](768, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](769, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](770, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](771, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](772, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](773, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](774, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](775, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](776, "td")(777, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](778, "'success' | 'warning' | 'error' | 'validating' | FormControl | NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](780, "first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](781, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](782, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](783, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](784, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](785, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](786, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](787, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](788, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](789, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](790, "tr")(791, "td")(792, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](793, "[nzHasFeedback]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](794, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](795, "Used with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](796, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](797, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](798, ", this option specifies the validation status icon. Recommended to be used only with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](799, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](800, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](801, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](802, "td")(803, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](804, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](805, "td")(806, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](807, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](809, "tr")(810, "td")(811, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](812, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](814, "The extra prompt message");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](815, "td")(816, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](817, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](818, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](819, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](820, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](821, "tr")(822, "td")(823, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](824, "[nzSuccessTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](825, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](826, "Tip display when validate success");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](827, "td")(828, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](829, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](831, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](832, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](833, "tr")(834, "td")(835, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](836, "[nzWarningTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](837, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](838, "Tip display when validate warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](839, "td")(840, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](841, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](842, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](843, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](844, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](845, "tr")(846, "td")(847, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](848, "[nzErrorTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](849, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](850, "Tip display when validate error");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](851, "td")(852, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](853, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](854, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](855, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](856, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](857, "tr")(858, "td")(859, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](860, "[nzValidatingTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](861, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](862, "Tip display when validating");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](863, "td")(864, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](865, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](866, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](867, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](868, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](869, "tr")(870, "td")(871, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](872, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](874, "The object of the tips, please refer to the example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](875, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](876, "Auto tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](877, "td")(878, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](879, "Record<string, string | Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](880, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](881, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](883, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](884, "tr")(885, "td")(886, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](887, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](888, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](889, "Disable Auto Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](890, "td")(891, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](892, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](894, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](895, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](896, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](897, "h3", 69)(898, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](899, "nz-form-split");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](900, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](901, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](902, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](903, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](904, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](905, "The split icon of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](906, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](907, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](908, "h3", 71)(909, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](910, "nz-form-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](911, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](912, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](913, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](914, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](915, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](916, "Text in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](917, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](918, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](266);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-horizontal-login")("nzLink", "components-form-demo-horizontal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/horizontal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-normal-login")("nzLink", "components-form-demo-normal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/normal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-register")("nzLink", "components-form-demo-register")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/register.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-advanced-search")("nzLink", "components-form-demo-advanced-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/advanced-search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-dynamic-form-item")("nzLink", "components-form-demo-dynamic-form-item")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-form-item.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-time-related-controls")("nzLink", "components-form-demo-time-related-controls")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/time-related-controls.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-validate-reactive")("nzLink", "components-form-demo-validate-reactive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-reactive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-validate-template")("nzLink", "components-form-demo-validate-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-auto-tips")("nzLink", "components-form-demo-auto-tips")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/auto-tips.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-validate-static")("nzLink", "components-form-demo-validate-static")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-static.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-coordinated")("nzLink", "components-form-demo-coordinated")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/coordinated.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-layout")("nzLink", "components-form-demo-layout")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/layout.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-dynamic-rule")("nzLink", "components-form-demo-dynamic-rule")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-rule.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal_login__WEBPACK_IMPORTED_MODULE_1__.NzDemoFormHorizontalLoginComponent, _normal_login__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormNormalLoginComponent, _register__WEBPACK_IMPORTED_MODULE_3__.NzDemoFormRegisterComponent, _advanced_search__WEBPACK_IMPORTED_MODULE_4__.NzDemoFormAdvancedSearchComponent, _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__.NzDemoFormDynamicFormItemComponent, _time_related_controls__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormTimeRelatedControlsComponent, _validate_reactive__WEBPACK_IMPORTED_MODULE_7__.NzDemoFormValidateReactiveComponent, _validate_template__WEBPACK_IMPORTED_MODULE_8__.NzDemoFormValidateTemplateComponent, _auto_tips__WEBPACK_IMPORTED_MODULE_9__.NzDemoFormAutoTipsComponent, _validate_static__WEBPACK_IMPORTED_MODULE_10__.NzDemoFormValidateStaticComponent, _coordinated__WEBPACK_IMPORTED_MODULE_11__.NzDemoFormCoordinatedComponent, _layout__WEBPACK_IMPORTED_MODULE_12__.NzDemoFormLayoutComponent, _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__.NzDemoFormDynamicRuleComponent], encapsulation: 2 });


/***/ }),

/***/ 84312:
/*!*****************************************************!*\
  !*** ./src/app/components/form/horizontal-login.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormHorizontalLoginComponent": () => (/* binding */ NzDemoFormHorizontalLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);









class NzDemoFormHorizontalLoginComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            remember: [true]
        });
    }
}
NzDemoFormHorizontalLoginComponent.??fac = function NzDemoFormHorizontalLoginComponent_Factory(t) { return new (t || NzDemoFormHorizontalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormHorizontalLoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NzDemoFormHorizontalLoginComponent, selectors: [["nz-demo-form-horizontal-login"]], decls: 13, vars: 3, consts: [["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user"], ["formControlName", "userName", "nz-input", "", "placeholder", "Username"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["formControlName", "password", "nz-input", "", "type", "password", "placeholder", "Password"], ["nz-button", "", "nzType", "primary", 3, "disabled"]], template: function NzDemoFormHorizontalLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function NzDemoFormHorizontalLoginComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nz-form-item")(2, "nz-form-control", 1)(3, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "nz-form-item")(6, "nz-form-control", 4)(7, "nz-input-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "nz-form-item")(10, "nz-form-control")(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzLayout", "inline")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.validateForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective], encapsulation: 2 });


/***/ }),

/***/ 58014:
/*!*************************************************!*\
  !*** ./src/app/components/form/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormModule": () => (/* binding */ NzDemoFormModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 9547);
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-search */ 24166);
/* harmony import */ var _auto_tips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto-tips */ 97240);
/* harmony import */ var _coordinated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinated */ 60156);
/* harmony import */ var _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-item */ 17695);
/* harmony import */ var _dynamic_rule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-rule */ 44624);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./horizontal-login */ 84312);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout */ 33185);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./normal-login */ 81695);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register */ 63623);
/* harmony import */ var _time_related_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time-related-controls */ 21904);
/* harmony import */ var _validate_reactive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validate-reactive */ 73315);
/* harmony import */ var _validate_static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validate-static */ 34166);
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validate-template */ 96543);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zh.component */ 28865);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./en.component */ 83973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);






























class NzDemoFormModule {
}
NzDemoFormModule.??fac = function NzDemoFormModule_Factory(t) { return new (t || NzDemoFormModule)(); };
NzDemoFormModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineNgModule"]({ type: NzDemoFormModule });
NzDemoFormModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_16__.NzDemoFormEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoFormZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["????setNgModuleScope"](NzDemoFormModule, { declarations: [_advanced_search__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormAdvancedSearchComponent,
        _auto_tips__WEBPACK_IMPORTED_MODULE_3__.NzDemoFormAutoTipsComponent,
        _coordinated__WEBPACK_IMPORTED_MODULE_4__.NzDemoFormCoordinatedComponent,
        _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__.NzDemoFormDynamicFormItemComponent,
        _dynamic_rule__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormDynamicRuleComponent,
        _horizontal_login__WEBPACK_IMPORTED_MODULE_7__.NzDemoFormHorizontalLoginComponent,
        _layout__WEBPACK_IMPORTED_MODULE_8__.NzDemoFormLayoutComponent,
        _normal_login__WEBPACK_IMPORTED_MODULE_9__.NzDemoFormNormalLoginComponent,
        _register__WEBPACK_IMPORTED_MODULE_10__.NzDemoFormRegisterComponent,
        _time_related_controls__WEBPACK_IMPORTED_MODULE_11__.NzDemoFormTimeRelatedControlsComponent,
        _validate_reactive__WEBPACK_IMPORTED_MODULE_12__.NzDemoFormValidateReactiveComponent,
        _validate_static__WEBPACK_IMPORTED_MODULE_13__.NzDemoFormValidateStaticComponent,
        _validate_template__WEBPACK_IMPORTED_MODULE_14__.NzDemoFormValidateTemplateComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoFormZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_16__.NzDemoFormEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__.NzSelectModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_24__.NzRadioModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__.NzDatePickerModule, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_26__.NzTimePickerModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__.NzCheckboxModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ }),

/***/ 33185:
/*!*******************************************!*\
  !*** ./src/app/components/form/layout.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormLayoutComponent": () => (/* binding */ NzDemoFormLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);










class NzDemoFormLayoutComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    get isHorizontal() {
        var _a;
        return ((_a = this.validateForm.controls.formLayout) === null || _a === void 0 ? void 0 : _a.value) === 'horizontal';
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            formLayout: ['horizontal'],
            fieldA: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            filedB: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
        });
    }
}
NzDemoFormLayoutComponent.??fac = function NzDemoFormLayoutComponent_Factory(t) { return new (t || NzDemoFormLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormLayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NzDemoFormLayoutComponent, selectors: [["nz-demo-form-layout"]], decls: 26, vars: 13, consts: [["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [3, "nzSpan"], ["formControlName", "formLayout"], ["nz-radio-button", "", 3, "nzValue"], ["nzErrorTip", "Please input your username!", 3, "nzSpan"], ["nz-input", "", "formControlName", "fieldA", "placeholder", "input placeholder"], ["nzErrorTip", "Please input your Password!", 3, "nzSpan"], ["nz-input", "", "formControlName", "filedB", "placeholder", "input placeholder"], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function NzDemoFormLayoutComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Form Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "nz-form-control", 1)(5, "nz-radio-group", 2)(6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "nz-form-item")(13, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Field A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "nz-form-item")(18, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Field B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "nz-form-item")(23, "nz-form-control", 8)(24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzLayout", (tmp_0_0 = ctx.validateForm.get("formLayout")) == null ? null : tmp_0_0.value)("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzValue", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzValue", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzValue", "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", ctx.isHorizontal ? 14 : null)("nzOffset", ctx.isHorizontal ? 4 : null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioButtonDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["??NzTransitionPatchDirective"]], styles: ["[nz-form][_ngcontent-%COMP%]:not(.ant-form-inline):not(.ant-form-vertical) {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoibGF5b3V0LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotZm9ybV06bm90KC5hbnQtZm9ybS1pbmxpbmUpOm5vdCguYW50LWZvcm0tdmVydGljYWwpIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 9547:
/*!*******************************************!*\
  !*** ./src/app/components/form/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);










const moduleList = [
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_0__.NzFormModule,
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule,
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__.NzDatePickerModule,
    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_7__.NzTimePickerModule,
    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__.NzInputNumberModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule
];


/***/ }),

/***/ 81695:
/*!*************************************************!*\
  !*** ./src/app/components/form/normal-login.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormNormalLoginComponent": () => (/* binding */ NzDemoFormNormalLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);










class NzDemoFormNormalLoginComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            remember: [true]
        });
    }
}
NzDemoFormNormalLoginComponent.??fac = function NzDemoFormNormalLoginComponent_Factory(t) { return new (t || NzDemoFormNormalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormNormalLoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NzDemoFormNormalLoginComponent, selectors: [["nz-demo-form-normal-login"]], decls: 22, vars: 4, consts: [["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user"], ["type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "Username"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password"], ["nz-row", "", 1, "login-form-margin"], ["nz-col", "", 3, "nzSpan"], ["nz-checkbox", "", "formControlName", "remember"], [1, "login-form-forgot"], ["nz-button", "", 1, "login-form-button", "login-form-margin", 3, "nzType"]], template: function NzDemoFormNormalLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function NzDemoFormNormalLoginComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nz-form-item")(2, "nz-form-control", 1)(3, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "nz-form-item")(6, "nz-form-control", 4)(7, "nz-input-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7)(10, "div", 8)(11, "label", 9)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 8)(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Forgot password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, " Or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, " register now! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzType", "primary");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__.NzCheckboxComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective], styles: [".login-form[_ngcontent-%COMP%] {\n        max-width: 300px;\n      }\n\n      .login-form-margin[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n\n      .login-form-forgot[_ngcontent-%COMP%] {\n        float: right;\n      }\n\n      .login-form-button[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbC1sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxZQUFZO01BQ2Q7O01BRUE7UUFDRSxXQUFXO01BQ2IiLCJmaWxlIjoibm9ybWFsLWxvZ2luLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAubG9naW4tZm9ybSB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1mb3JtLW1hcmdpbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cblxuICAgICAgLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 63623:
/*!*********************************************!*\
  !*** ./src/app/components/form/register.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormRegisterComponent": () => (/* binding */ NzDemoFormRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);














function NzDemoFormRegisterComponent_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please confirm your password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormRegisterComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Two passwords that you enter is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormRegisterComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NzDemoFormRegisterComponent_ng_template_16_ng_container_0_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormRegisterComponent_ng_template_16_ng_container_1_Template, 2, 0, "ng-container", 33);
} if (rf & 2) {
    const control_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r4.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r4.hasError("confirm"));
} }
function NzDemoFormRegisterComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "nz-option", 35)(2, "nz-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class NzDemoFormRegisterComponent {
    constructor(fb) {
        this.fb = fb;
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    updateConfirmValidator() {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }
    getCaptcha(e) {
        e.preventDefault();
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, this.confirmationValidator]],
            nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            website: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            agree: [false]
        });
    }
}
NzDemoFormRegisterComponent.??fac = function NzDemoFormRegisterComponent_Factory(t) { return new (t || NzDemoFormRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormRegisterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormRegisterComponent, selectors: [["nz-demo-form-register"]], decls: 59, vars: 39, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "email", 3, "nzSm", "nzXs"], ["nzErrorTip", "The input is not valid E-mail!", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "password", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your password!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "password", "id", "password", "formControlName", "password", 3, "ngModelChange"], ["nzFor", "checkPassword", "nzRequired", "", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["nz-input", "", "type", "password", "formControlName", "checkPassword", "id", "checkPassword"], ["errorTpl", ""], ["nzFor", "nickname", "nzRequired", "", 3, "nzSm", "nzXs"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "What do you want other to call you", "nzType", "question-circle", "nzTheme", "outline"], ["nzErrorTip", "Please input your nickname!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "nickname", "formControlName", "nickname"], ["nzFor", "phoneNumber", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your phone number!", 3, "nzSm", "nzXs", "nzValidateStatus"], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "'phoneNumber'", "nz-input", ""], ["nzFor", "website", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input website!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "website", "formControlName", "website", "placeholder", "website"], ["nzFor", "captcha", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input the captcha you got!", "nzExtra", "We must make sure that your are a human.", 3, "nzSm", "nzXs"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nz-input", "", "formControlName", "captcha", "id", "captcha"], ["nz-button", "", 3, "click"], ["nz-row", "", 1, "register-area"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "agree"], ["nz-button", "", "nzType", "primary"], [4, "ngIf"], ["formControlName", "phoneNumberPrefix", 1, "phone-select"], ["nzLabel", "+86", "nzValue", "+86"], ["nzLabel", "+87", "nzValue", "+87"]], template: function NzDemoFormRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NzDemoFormRegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-form-item")(7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-form-control", 5)(10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NzDemoFormRegisterComponent_Template_input_ngModelChange_10_listener() { return ctx.updateConfirmValidator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-item")(12, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, NzDemoFormRegisterComponent_ng_template_16_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "nz-form-item")(19, "nz-form-label", 11)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Nickname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "nz-form-item")(26, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "nz-form-control", 16)(29, "nz-input-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NzDemoFormRegisterComponent_ng_template_30_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "nz-form-item")(34, "nz-form-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "nz-form-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "nz-form-item")(39, "nz-form-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Captcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "nz-form-control", 24)(42, "div", 25)(43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 26)(46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoFormRegisterComponent_Template_button_click_46_listener($event) { return ctx.getCaptcha($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Get captcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "nz-form-item", 29)(49, "nz-form-control", 30)(50, "label", 31)(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "I have read the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "nz-form-item", 29)(56, "nz-form-control", 30)(57, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 14)("nzXs", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 14)("nzXs", 24)("nzValidateStatus", ctx.validateForm.controls["phoneNumber"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzAddOnBefore", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 14)("nzOffset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 14)("nzOffset", 6);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__.NzCheckboxComponent], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      .phone-select[_ngcontent-%COMP%] {\n        width: 70px;\n      }\n\n      .register-are[_ngcontent-%COMP%] {\n        margin-bottom: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLFdBQVc7TUFDYjs7TUFFQTtRQUNFLGtCQUFrQjtNQUNwQiIsImZpbGUiOiJyZWdpc3Rlci50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgLnBob25lLXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgfVxuXG4gICAgICAucmVnaXN0ZXItYXJlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 21904:
/*!**********************************************************!*\
  !*** ./src/app/components/form/time-related-controls.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormTimeRelatedControlsComponent": () => (/* binding */ NzDemoFormTimeRelatedControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);









const _c0 = function () { return { span: 24, offset: 0 }; };
const _c1 = function () { return { span: 16, offset: 8 }; };
class NzDemoFormTimeRelatedControlsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        console.log(this.validateForm.value);
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            datePicker: [null],
            datePickerTime: [null],
            monthPicker: [null],
            rangePicker: [[]],
            rangePickerTime: [[]],
            timePicker: [null]
        });
    }
}
NzDemoFormTimeRelatedControlsComponent.??fac = function NzDemoFormTimeRelatedControlsComponent_Factory(t) { return new (t || NzDemoFormTimeRelatedControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormTimeRelatedControlsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormTimeRelatedControlsComponent, selectors: [["nz-demo-form-time-related-controls"]], decls: 35, vars: 29, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["formControlName", "datePicker"], ["nzShowTime", "", "formControlName", "datePickerTime"], ["formControlName", "monthPicker"], ["formControlName", "rangePicker"], ["nzShowTime", "", "formControlName", "rangePickerTime"], ["formControlName", "timePicker"], [3, "nzXs", "nzSm"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormTimeRelatedControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NzDemoFormTimeRelatedControlsComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nz-date-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-form-item")(7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "DatePicker[ShowTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "nz-date-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-item")(12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "MonthPicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "nz-month-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "nz-form-item")(17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "RangePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "nz-range-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "nz-form-item")(22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "RangePicker[showTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "nz-range-picker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "nz-form-item")(27, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "TimePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "nz-time-picker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "nz-form-item")(32, "nz-form-control", 9)(33, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](27, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](28, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzMonthPickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzRangePickerComponent, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_5__.NzTimePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["??NzTransitionPatchDirective"]], styles: ["form[_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtcmVsYXRlZC1jb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoidGltZS1yZWxhdGVkLWNvbnRyb2xzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBmb3JtIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 73315:
/*!******************************************************!*\
  !*** ./src/app/components/form/validate-reactive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormValidateReactiveComponent": () => (/* binding */ NzDemoFormValidateReactiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);











function NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please input your username! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " The username is redundant! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_0_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_1_Template, 2, 0, "ng-container", 17);
} if (rf & 2) {
    const control_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r6.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r6.hasError("duplicated"));
} }
function NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " The input is not valid E-mail! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please input your E-mail! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_0_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_1_Template, 2, 0, "ng-container", 17);
} if (rf & 2) {
    const control_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r9.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r9.hasError("required"));
} }
function NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please confirm your password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_0_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_1_Template, 2, 0, "ng-container", 17);
} if (rf & 2) {
    const control_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r12.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r12.hasError("confirm"));
} }
class NzDemoFormValidateReactiveComponent {
    constructor(fb) {
        this.fb = fb;
        this.userNameAsyncValidator = (control) => new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            setTimeout(() => {
                if (control.value === 'JasonWood') {
                    // you have to return `{error: true}` to mark it as an error event
                    observer.next({ error: true, duplicated: true });
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            }, 1000);
        });
        this.confirmValidator = (control) => {
            if (!control.value) {
                return { error: true, required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.validateForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required], [this.userNameAsyncValidator]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            confirm: ['', [this.confirmValidator]],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    submitForm(value) {
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }
    resetForm(e) {
        e.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    validateConfirmPassword() {
        setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
    }
}
NzDemoFormValidateReactiveComponent.??fac = function NzDemoFormValidateReactiveComponent_Factory(t) { return new (t || NzDemoFormValidateReactiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
NzDemoFormValidateReactiveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormValidateReactiveComponent, selectors: [["nz-demo-form-validate-reactive"]], decls: 38, vars: 17, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSpan"], ["nzHasFeedback", "", "nzValidatingTip", "Validating...", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "userName", "placeholder", "async validate try to write JasonWood"], ["userErrorTpl", ""], ["nzHasFeedback", "", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "email", "placeholder", "email", "type", "email"], ["emailErrorTpl", ""], ["nzHasFeedback", "", "nzErrorTip", "Please input your password!", 3, "nzSpan"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "ngModelChange"], ["nz-input", "", "type", "password", "formControlName", "confirm", "placeholder", "confirm your password"], ["passwordErrorTpl", ""], ["nzErrorTip", "Please write something here!", 3, "nzSpan"], ["formControlName", "comment", "nz-input", "", "rows", "2", "placeholder", "write any thing"], [3, "nzOffset", "nzSpan"], ["nz-button", "", "nzType", "primary", 3, "disabled"], ["nz-button", "", 3, "click"], [4, "ngIf"]], template: function NzDemoFormValidateReactiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NzDemoFormValidateReactiveComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(ctx.validateForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, NzDemoFormValidateReactiveComponent_ng_template_6_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "nz-form-item")(9, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, NzDemoFormValidateReactiveComponent_ng_template_13_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "nz-form-item")(16, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "nz-form-control", 8)(19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NzDemoFormValidateReactiveComponent_Template_input_ngModelChange_19_listener() { return ctx.validateConfirmPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "nz-form-item")(21, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, NzDemoFormValidateReactiveComponent_ng_template_25_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "nz-form-item")(28, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "nz-form-item")(33, "nz-form-control", 14)(34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NzDemoFormValidateReactiveComponent_Template_button_click_36_listener($event) { return ctx.resetForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12)("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12)("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzOffset", 7)("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.validateForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["??NzTransitionPatchDirective"]], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-left: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLXJlYWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQiIsImZpbGUiOiJ2YWxpZGF0ZS1yZWFjdGl2ZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 34166:
/*!****************************************************!*\
  !*** ./src/app/components/form/validate-static.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormValidateStaticComponent": () => (/* binding */ NzDemoFormValidateStaticComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);









class NzDemoFormValidateStaticComponent {
}
NzDemoFormValidateStaticComponent.??fac = function NzDemoFormValidateStaticComponent_Factory(t) { return new (t || NzDemoFormValidateStaticComponent)(); };
NzDemoFormValidateStaticComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormValidateStaticComponent, selectors: [["nz-demo-form-validate-static"]], decls: 60, vars: 30, consts: [["nz-form", ""], [3, "nzSpan"], ["nzValidateStatus", "error", "nzErrorTip", "Should be combination of numbers & alphabets", 3, "nzSpan"], ["nz-input", "", "name", "errorValid", 3, "ngModel"], ["nzValidateStatus", "warning", 3, "nzSpan"], ["nz-input", "", "name", "warningValid", 3, "ngModel"], ["nzValidateStatus", "validating", "nzHasFeedback", "", "nzValidatingTip", "I'm validating the content", 3, "nzSpan"], ["nz-input", "", "name", "validating", 3, "ngModel"], ["nzValidateStatus", "success", "nzHasFeedback", "", 3, "nzSpan"], ["nz-input", "", "name", "successValid", 3, "ngModel"], ["nzValidateStatus", "warning", "nzHasFeedback", "", "nzWarningTip", "Should be combination of numbers & alphabets", 3, "nzSpan"], ["nz-input", "", "name", "warningHighValid", 3, "ngModel"], ["nzValidateStatus", "error", "nzHasFeedback", "", "nzErrorTip", "Should be combination of numbers & alphabets", 3, "nzSpan"], ["nz-input", "", "name", "invalidValid", 3, "ngModel"], ["name", "date-picker-success"], ["nzValidateStatus", "warning", "nzHasFeedback", "", 3, "nzSpan"], ["name", "time-picker-warning"], ["nzValidateStatus", "error", "nzHasFeedback", "", 3, "nzSpan"], ["name", "select-error", 3, "ngModel"], ["nzValue", "Option 1", "nzLabel", "Option 1"], ["nzValue", "Option 2", "nzLabel", "Option 2"], ["nzValidateStatus", "validating", "nzHasFeedback", "", 3, "nzSpan"], ["name", "select-validate", 3, "ngModel"], ["name", "inputnumber-success", 2, "width", "100%"]], template: function NzDemoFormValidateStaticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0)(1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Fail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-form-item")(7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-item")(12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Validating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "nz-form-item")(17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "nz-form-item")(22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "nz-form-item")(27, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Fail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "nz-form-item")(32, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "nz-date-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "nz-form-item")(37, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "nz-time-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "nz-form-item")(42, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "nz-form-control", 17)(45, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "nz-option", 19)(47, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "nz-form-item")(49, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Validating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "nz-form-control", 21)(52, "nz-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "nz-option", 19)(54, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "nz-form-item")(56, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "nz-input-number", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "unavailable choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "The content is being validated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "The content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "unavailable choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__.NzDatePickerComponent, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_6__.NzTimePickerComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__.NzInputNumberComponent], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      nz-date-picker[_ngcontent-%COMP%]     .ant-calendar-picker {\n        width: 100%;\n      }\n\n      nz-date-picker[_ngcontent-%COMP%], nz-time-picker[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLXN0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxXQUFXO01BQ2I7O01BRUE7O1FBRUUsV0FBVztNQUNiIiwiZmlsZSI6InZhbGlkYXRlLXN0YXRpYy50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgbnotZGF0ZS1waWNrZXIgOjpuZy1kZWVwIC5hbnQtY2FsZW5kYXItcGlja2VyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIG56LWRhdGUtcGlja2VyLFxuICAgICAgbnotdGltZS1waWNrZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 96543:
/*!******************************************************!*\
  !*** ./src/app/components/form/validate-template.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormValidateTemplateComponent": () => (/* binding */ NzDemoFormValidateTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);






function NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "MaxLength is 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "MinLength is 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function NzDemoFormValidateTemplateComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_0_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_1_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_2_Template, 2, 0, "ng-container", 15);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r2.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r2.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r2.hasError("required"));
} }
class NzDemoFormValidateTemplateComponent {
}
NzDemoFormValidateTemplateComponent.??fac = function NzDemoFormValidateTemplateComponent_Factory(t) { return new (t || NzDemoFormValidateTemplateComponent)(); };
NzDemoFormValidateTemplateComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NzDemoFormValidateTemplateComponent, selectors: [["nz-demo-form-validate-template"]], decls: 33, vars: 19, consts: [["nz-form", ""], [3, "nzSpan"], ["nzHasFeedback", "", "nzErrorTip", "Input is required", 3, "nzSpan"], ["nz-input", "", "name", "required", "required", "", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "MaxLength is 6", 3, "nzSpan"], ["nz-input", "", "name", "maxlength", "maxlength", "6", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "MinLength is 6", 3, "nzSpan"], ["nz-input", "", "name", "minlength", "minlength", "6", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "Email is not valid", 3, "nzSpan"], ["nz-input", "", "name", "email", "email", "", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "Pattern not match", 3, "nzSpan"], ["nz-input", "", "name", "pattern", "pattern", ".{3,}", 3, "ngModel"], ["nzHasFeedback", "", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "name", "mix", "minlength", "6", "maxlength", "12", "required", "", 3, "ngModel"], ["combineTpl", ""], [4, "ngIf"]], template: function NzDemoFormValidateTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0)(1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-form-item")(7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "MaxLength");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-item")(12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "MinLength");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "nz-form-item")(17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "nz-form-item")(22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "nz-form-item")(27, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Mix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, NzDemoFormValidateTemplateComponent_ng_template_31_Template, 3, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "Required Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "MaxLength is 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "MinLength is 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "Input Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "Match pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpan", 12)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", "MaxLength is 12 and MinLength is 6");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQiIsImZpbGUiOiJ2YWxpZGF0ZS10ZW1wbGF0ZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 28865:
/*!*************************************************!*\
  !*** ./src/app/components/form/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormZhComponent": () => (/* binding */ NzDemoFormZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-login */ 84312);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-login */ 81695);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ 63623);
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-search */ 24166);
/* harmony import */ var _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-item */ 17695);
/* harmony import */ var _time_related_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-related-controls */ 21904);
/* harmony import */ var _validate_reactive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate-reactive */ 73315);
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validate-template */ 96543);
/* harmony import */ var _auto_tips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auto-tips */ 97240);
/* harmony import */ var _validate_static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validate-static */ 34166);
/* harmony import */ var _coordinated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coordinated */ 60156);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout */ 33185);
/* harmony import */ var _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dynamic-rule */ 44624);






















class NzDemoFormZhComponent {
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
NzDemoFormZhComponent.??fac = function NzDemoFormZhComponent_Factory(t) { return new (t || NzDemoFormZhComponent)(); };
NzDemoFormZhComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineComponent"]({ type: NzDemoFormZhComponent, selectors: [["nz-demo-form"]], viewQuery: function NzDemoFormZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????viewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????loadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 883, vars: 43, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-form-demo-horizontal-login", "nzTitle", "\u5185\u8054\u767B\u5F55\u680F"], ["nzHref", "#components-form-demo-normal-login", "nzTitle", "\u767B\u5F55\u6846"], ["nzHref", "#components-form-demo-register", "nzTitle", "\u6CE8\u518C\u65B0\u7528\u6237"], ["nzHref", "#components-form-demo-advanced-search", "nzTitle", "\u9AD8\u7EA7\u641C\u7D22"], ["nzHref", "#components-form-demo-dynamic-form-item", "nzTitle", "\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"], ["nzHref", "#components-form-demo-time-related-controls", "nzTitle", "\u65F6\u95F4\u7C7B\u63A7\u4EF6"], ["nzHref", "#components-form-demo-validate-reactive", "nzTitle", "\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1"], ["nzHref", "#components-form-demo-validate-template", "nzTitle", "\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1"], ["nzHref", "#components-form-demo-auto-tips", "nzTitle", "\u81EA\u52A8\u63D0\u793A"], ["nzHref", "#components-form-demo-validate-static", "nzTitle", "\u624B\u52A8\u6307\u5B9A\u8868\u5355\u72B6\u6001"], ["nzHref", "#components-form-demo-coordinated", "nzTitle", "\u8868\u5355\u8054\u52A8"], ["nzHref", "#components-form-demo-layout", "nzTitle", "\u8868\u5355\u5E03\u5C40"], ["nzHref", "#components-form-demo-dynamic-rule", "nzTitle", "\u52A8\u6001\u6821\u9A8C\u89C4\u5219"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["href", "https://angular.io/guide/forms#forms"], ["href", "https://angular.io/guide/reactive-forms#reactive-forms"], ["href", "https://angular.io/guide/forms#template-driven-forms"], ["id", "\u8868\u5355"], ["onclick", "window.location.hash = '\u8868\u5355'", 1, "anchor"], ["id", "\u8868\u5355\u9879-nz-form-item"], ["onclick", "window.location.hash = '\u8868\u5355\u9879-nz-form-item'", 1, "anchor"], ["id", "\u8868\u5355\u6807\u7B7E-nz-form-label"], ["onclick", "window.location.hash = '\u8868\u5355\u6807\u7B7E-nz-form-label'", 1, "anchor"], ["id", "\u8868\u5355\u57DF-nz-form-control"], ["onclick", "window.location.hash = '\u8868\u5355\u57DF-nz-form-control'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "punctuation"], [1, "token", "attr-name"], [1, "token", "attr-value"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u5185\u8054\u767B\u5F55\u680F", "nzSelector", "nz-demo-form-horizontal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-horizontal-login <name>", "nzComponentName", "NzDemoFormHorizontalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u767B\u5F55\u6846", "nzSelector", "nz-demo-form-normal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-normal-login <name>", "nzComponentName", "NzDemoFormNormalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6CE8\u518C\u65B0\u7528\u6237", "nzSelector", "nz-demo-form-register", "nzGenerateCommand", "ng g ng-zorro-antd:form-register <name>", "nzComponentName", "NzDemoFormRegisterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9AD8\u7EA7\u641C\u7D22", "nzSelector", "nz-demo-form-advanced-search", "nzGenerateCommand", "ng g ng-zorro-antd:form-advanced-search <name>", "nzComponentName", "NzDemoFormAdvancedSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879", "nzSelector", "nz-demo-form-dynamic-form-item", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-form-item <name>", "nzComponentName", "NzDemoFormDynamicFormItemComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u65F6\u95F4\u7C7B\u63A7\u4EF6", "nzSelector", "nz-demo-form-time-related-controls", "nzGenerateCommand", "ng g ng-zorro-antd:form-time-related-controls <name>", "nzComponentName", "NzDemoFormTimeRelatedControlsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://date-fns.org/"], ["nzTitle", "\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1", "nzSelector", "nz-demo-form-validate-reactive", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-reactive <name>", "nzComponentName", "NzDemoFormValidateReactiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "(https://www.angular.cn/guide/template-syntax)"], ["nzTitle", "\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1", "nzSelector", "nz-demo-form-validate-template", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-template <name>", "nzComponentName", "NzDemoFormValidateTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u52A8\u63D0\u793A", "nzSelector", "nz-demo-form-auto-tips", "nzGenerateCommand", "ng g ng-zorro-antd:form-auto-tips <name>", "nzComponentName", "NzDemoFormAutoTipsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u624B\u52A8\u6307\u5B9A\u8868\u5355\u72B6\u6001", "nzSelector", "nz-demo-form-validate-static", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-static <name>", "nzComponentName", "NzDemoFormValidateStaticComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8868\u5355\u8054\u52A8", "nzSelector", "nz-demo-form-coordinated", "nzGenerateCommand", "ng g ng-zorro-antd:form-coordinated <name>", "nzComponentName", "NzDemoFormCoordinatedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8868\u5355\u5E03\u5C40", "nzSelector", "nz-demo-form-layout", "nzGenerateCommand", "ng g ng-zorro-antd:form-layout <name>", "nzComponentName", "NzDemoFormLayoutComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A8\u6001\u6821\u9A8C\u89C4\u5219", "nzSelector", "nz-demo-form-dynamic-rule", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-rule <name>", "nzComponentName", "NzDemoFormDynamicRuleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-form]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-form]'", 1, "anchor"], ["id", "nz-form-item"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-form-item'", 1, "anchor"], ["href", "/components/grid/zh"], ["id", "nz-form-label"], ["onclick", "window.location.hash = 'nz-form-label'", 1, "anchor"], ["id", "nz-form-control"], ["onclick", "window.location.hash = 'nz-form-control'", 1, "anchor"], ["href", "https://github.com/angular/angular/issues/10887"], ["id", "nz-form-split"], ["onclick", "window.location.hash = 'nz-form-split'", 1, "anchor"], ["id", "nz-form-text"], ["onclick", "window.location.hash = 'nz-form-text'", 1, "anchor"]], template: function NzDemoFormZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????listener"]("nzClick", function NzDemoFormZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14)(16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](17, "section", 16)(18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](19, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](21, "\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](24, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](25, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](27, "\u5177\u6709\u6570\u636E\u6536\u96C6\u3001\u6821\u9A8C\u548C\u63D0\u4EA4\u529F\u80FD\u7684\u8868\u5355\uFF0C\u5305\u542B\u590D\u9009\u6846\u3001\u5355\u9009\u6846\u3001\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u7B49\u5143\u7D20\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](29, "\u8BE5\u7EC4\u4EF6\u9700\u8981\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](31, "Angular\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](32, " \u7ED3\u5408\u4F7F\u7528\uFF0C\u5F00\u53D1\u8005\u6839\u636E\u9700\u8981\u53EF\u4EE5\u81EA\u7531\u9009\u62E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](34, "\u54CD\u5E94\u5F0F\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](35, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](37, "\u6A21\u677F\u9A71\u52A8\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](38, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](39, "blockquote")(40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](41, "\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u524D\u8BF7\u786E\u4FDD\u60A8\u5DF2\u7ECF\u9605\u8BFB\u5E76\u638C\u63E1\u4E86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](43, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](44, " \u7684\u4F7F\u7528\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](45, "h2", 24)(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](47, "\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](49, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](51, "\u6211\u4EEC\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E09\u79CD\u6392\u5217\u65B9\u5F0F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](52, "ul")(53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](54, "\u6C34\u5E73\u6392\u5217\uFF1A\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u6C34\u5E73\u6392\u5217\uFF1B\uFF08\u9ED8\u8BA4\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](56, "\u5782\u76F4\u6392\u5217\uFF1A\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u4E0A\u4E0B\u5782\u76F4\u6392\u5217\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](58, "\u884C\u5185\u6392\u5217\uFF1A\u8868\u5355\u9879\u6C34\u5E73\u884C\u5185\u6392\u5217\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](59, "h3", 26)(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](61, "\u8868\u5355\u9879 nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](62, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](63, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](65, "\u8868\u5355\u9879\u7528\u4E8E\u533A\u5206\u8868\u5355\u4E2D\u4E0D\u540C\u7684\u533A\u57DF\uFF0C\u5305\u542B\u8868\u5355\u57DF\u548C\u8868\u5355\u6807\u7B7E(\u53EF\u9009)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](66, "h3", 28)(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](68, "\u8868\u5355\u6807\u7B7E nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](69, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](70, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](72, "\u7528\u4E8E\u6807\u793A\u5F53\u524D\u8868\u5355\u9879\u7684\u5185\u5BB9\uFF0C\u53EF\u9009\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](73, "h3", 30)(74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](75, "\u8868\u5355\u57DF nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](76, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](77, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](79, "\u8868\u5355\u4E00\u5B9A\u4F1A\u5305\u542B\u8868\u5355\u57DF\uFF0C\u8868\u5355\u57DF\u53EF\u4EE5\u662F\u8F93\u5165\u63A7\u4EF6\uFF0C\u6807\u51C6\u8868\u5355\u57DF\uFF0C\u6807\u7B7E\uFF0C\u4E0B\u62C9\u83DC\u5355\uFF0C\u6587\u672C\u57DF\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](80, "pre", 32)(81, "code")(82, "span", 33)(83, "span", 33)(84, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](85, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](86, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](87, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](88, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](89, "nz-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](90, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](91, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](92, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](93, "span", 33)(94, "span", 33)(95, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](96, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](97, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](98, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](99, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](100, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](101, "span", 33)(102, "span", 33)(103, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](104, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](105, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](106, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](107, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](108, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](109, "span", 36)(110, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](111, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](112, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](113, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](114, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](115, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](116, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](117, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](118, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](119, "nzFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](120, "span", 36)(121, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](122, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](123, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](124, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](125, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](126, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](127, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](128, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](129, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](130, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](131, "span", 33)(132, "span", 33)(133, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](134, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](135, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](136, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](137, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](138, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](139, "span", 33)(140, "span", 33)(141, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](142, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](143, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](144, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](145, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](146, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](147, "span", 36)(148, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](149, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](150, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](151, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](152, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](153, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](154, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](155, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](156, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](157, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](158, "span", 33)(159, "span", 33)(160, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](161, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](162, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](164, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](165, "nz-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](166, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](167, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](168, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](169, "span", 36)(170, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](171, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](172, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](173, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](174, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](175, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](176, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](177, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](178, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](179, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](180, "span", 36)(181, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](182, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](183, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](184, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](185, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](186, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](187, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](188, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](189, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](190, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](191, "span", 36)(192, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](193, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](194, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](195, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](196, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](197, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](198, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](199, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](200, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](201, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](202, "span", 33)(203, "span", 33)(204, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](205, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](206, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](207, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](208, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](209, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](210, "span", 33)(211, "span", 33)(212, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](213, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](214, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](215, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](216, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](217, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](218, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](219, "span", 33)(220, "span", 33)(221, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](222, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](223, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](224, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](225, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](226, "pre", 37)(227, "code")(228, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](229, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](230, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](231, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](232, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](233, " NzFormModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](234, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](235, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](236, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](237, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](238, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](239, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](240, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](241, "'ng-zorro-antd/form'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](242, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](243, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](244, "h2")(245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](246, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](247, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????listener"]("click", function NzDemoFormZhComponent_Template_i_click_247_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](248, "div", 41)(249, "div", 42)(250, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](251, "nz-demo-form-horizontal-login", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](252, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](253, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](254, "\u5185\u8054\u767B\u5F55\u680F\uFF0C\u5E38\u7528\u5728\u9876\u90E8\u5BFC\u822A\u680F\u4E2D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](255, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](256, "nz-demo-form-normal-login", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](257, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](259, "\u666E\u901A\u7684\u767B\u5F55\u6846\uFF0C\u53EF\u4EE5\u5BB9\u7EB3\u66F4\u591A\u7684\u5143\u7D20\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](260, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](261, "nz-demo-form-register", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](262, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](264, "\u7528\u6237\u586B\u5199\u5FC5\u987B\u7684\u4FE1\u606F\u4EE5\u6CE8\u518C\u65B0\u7528\u6237\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](265, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](266, "nz-demo-form-advanced-search", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](267, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](268, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](269, "\u4E09\u5217\u6805\u683C\u5F0F\u7684\u8868\u5355\u6392\u5217\u65B9\u5F0F\uFF0C\u5E38\u7528\u4E8E\u6570\u636E\u8868\u683C\u7684\u9AD8\u7EA7\u641C\u7D22\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](271, "\u6709\u90E8\u5206\u5B9A\u5236\u7684\u6837\u5F0F\u4EE3\u7801\uFF0C\u7531\u4E8E\u8F93\u5165\u6807\u7B7E\u957F\u5EA6\u4E0D\u786E\u5B9A\uFF0C\u9700\u8981\u6839\u636E\u5177\u4F53\u60C5\u51B5\u81EA\u884C\u8C03\u6574\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](272, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](273, "nz-demo-form-dynamic-form-item", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](274, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](275, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](276, "\u52A8\u6001\u589E\u52A0\u3001\u51CF\u5C11\u8868\u5355\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](277, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](278, "nz-demo-form-time-related-controls", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](279, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](280, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](281, "\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u8F93\u5165\u548C\u8F93\u51FA\u7C7B\u578B\u5747\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](282, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](283, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](284, " \u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](285, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](286, "date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](287, " \u5DE5\u5177\u5E93\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u5904\u7406\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](288, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](289, "nz-demo-form-validate-reactive", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](290, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](292, "\u6211\u4EEC\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](294, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](295, " \u4E0A \u63D0\u4F9B\u4E86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](297, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](299, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](300, " \u7B49\u5C5E\u6027\uFF0C\u5F53\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](301, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](302, "\u54CD\u5E94\u5F0F\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](303, "\u65F6\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u6821\u9A8C\u7684\u65F6\u673A\u548C\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](304, "ol")(305, "li")(306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](307, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](308, ": \u6821\u9A8C\u72B6\u6001\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u4ECE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](310, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](311, " \u4E2D\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](313, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](314, " \u83B7\u5F97\u6821\u9A8C\u72B6\u6001\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u6307\u5B9A\u4E3A\u7279\u5B9A\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](316, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](317, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](318, "li")(319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](320, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](321, "\uFF1A\u7528\u4E8E\u7ED9\u8F93\u5165\u6846\u6DFB\u52A0\u53CD\u9988\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](322, "li")(323, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](324, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](326, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](328, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](330, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](331, "\uFF1A\u8BBE\u7F6E\u4E0D\u540C\u72B6\u6001\u6821\u9A8C\u6587\u6848\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](332, "blockquote")(333, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](334, "\u5F53\u540C\u4E00\u79CD\u72B6\u6001\u4E0B\u5B58\u5728\u591A\u79CD\u63D0\u793A\u60C5\u51B5\u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](336, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](338, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](340, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](342, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](343, " \u5747\u652F\u6301\u4F20\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](345, "TemplateRef<{ $implicit: FormControl }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](346, " \u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](347, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](348, "\u6A21\u677F\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](349, "\u5BFC\u51FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](351, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](352, " \u540E\u7528\u4E8E\u5207\u6362\u4E0D\u540C\u7684\u63D0\u793A\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](353, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](354, "\u5F53 FormControl.status \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](356, "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](357, " \u5E76\u4E14\u9519\u8BEF\u5305\u542B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](359, "{warning\uFF1Atrue}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](360, " \u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](362, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](363, " \u663E\u793A\u8B66\u544A\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](364, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](365, "nz-demo-form-validate-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](366, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](367, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](368, "\u5F53\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](369, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](370, "\u6A21\u677F\u9A71\u52A8\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](371, "\u65F6\uFF0C\u6A21\u677F\u53EF\u4EE5\u6839\u636E\u6A21\u677F\u8BBE\u5B9A\u81EA\u52A8\u8FDB\u884C\u6821\u9A8C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](372, "ol")(373, "li")(374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](375, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](376, "\uFF1A\u7528\u4E8E\u7ED9\u8F93\u5165\u6846\u6DFB\u52A0\u53CD\u9988\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](377, "li")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](379, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](381, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](383, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](385, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](386, "\uFF1A\u8BBE\u7F6E\u4E0D\u540C\u72B6\u6001\u6821\u9A8C\u6587\u6848\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](387, "blockquote")(388, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](389, "\u5F53\u540C\u4E00\u79CD\u72B6\u6001\u4E0B\u5B58\u5728\u591A\u79CD\u63D0\u793A\u60C5\u51B5\u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](391, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](393, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](395, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](397, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](398, " \u5747\u652F\u6301\u4F20\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](399, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](400, "TemplateRef<{ $implicit: NgModel }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](401, " \u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](402, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](403, "\u6A21\u677F\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](404, "\u5BFC\u51FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](406, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](407, " \u540E\u7528\u4E8E\u5207\u6362\u4E0D\u540C\u7684\u63D0\u793A\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](408, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](409, "nz-demo-form-auto-tips", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](410, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](411, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](412, "\u8BA9\u63D0\u793A\u53D8\u5F97\u66F4\u7B80\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](413, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](414, "\u9700\u8981\u9884\u5148\u81EA\u5B9A\u4E49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](415, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](416, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](417, " \u548C\u63D0\u4F9B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](419, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](420, "\uFF0C\u5B83\u4EEC\u4F18\u5148\u7EA7\u5982\u4E0B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](421, "ul")(422, "li")(423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](424, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](425, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](427, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](428, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](429, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](431, "@Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](432, " \u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](434, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](435, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](436, "\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](438, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](439, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](440, "\u53E6\u5916\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](442, "nzDisableAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](443, " \u53BB\u7981\u7528\u5B83\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](444, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](445, "nz-demo-form-validate-static", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](446, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](447, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](448, "\u7528\u6237\u53EF\u4EE5\u5728\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](450, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](451, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](453, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](454, " \u5C5E\u6027\u76F4\u63A5\u8BBE\u5B9A\u8868\u5355\u7684\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](455, "ol")(456, "li")(457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](458, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](459, ": \u6821\u9A8C\u72B6\u6001\uFF0C\u53EF\u9009 'success', 'warning', 'error', 'validating'\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](460, "li")(461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](462, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](463, "\uFF1A\u7528\u4E8E\u7ED9\u8F93\u5165\u6846\u6DFB\u52A0\u53CD\u9988\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](464, "li")(465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](466, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](468, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](470, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](471, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](472, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](473, "\uFF1A\u8BBE\u7F6E\u4E0D\u540C\u72B6\u6001\u6821\u9A8C\u6587\u6848\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](474, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](475, "nz-demo-form-coordinated", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](476, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](477, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](478, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](480, "setValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](481, " \u6765\u52A8\u6001\u8BBE\u7F6E\u5176\u4ED6\u63A7\u4EF6\u7684\u503C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](482, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](483, "nz-demo-form-layout", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](484, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](485, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](486, "\u8868\u5355\u6709\u4E09\u79CD\u5E03\u5C40\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](487, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](488, "nz-demo-form-dynamic-rule", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](489, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](490, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](491, "\u6839\u636E\u4E0D\u540C\u60C5\u51B5\u6267\u884C\u4E0D\u540C\u7684\u6821\u9A8C\u89C4\u5219\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](492, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????disableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](493, "h2", 61)(494, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](495, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](496, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](497, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](498, "h3", 63)(499, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](500, "[nz-form]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](501, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](502, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](503, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](504, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](505, "table")(506, "thead")(507, "tr")(508, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](509, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](510, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](511, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](512, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](513, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](514, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](515, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](516, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](517, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](518, "tbody")(519, "tr")(520, "td")(521, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](522, "[nzLayout]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](523, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](524, "\u8868\u5355\u5E03\u5C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](525, "td")(526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](527, "'horizontal' | 'vertical' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](528, "td")(529, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](530, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](532, "tr")(533, "td")(534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](535, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](536, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](537, "\u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](539, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](540, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](541, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](542, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](543, " \u7684\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](544, "td")(545, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](546, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](547, "td")(548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](549, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](551, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](552, "tr")(553, "td")(554, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](555, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](557, "\u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](558, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](559, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](560, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](562, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](563, " \u7684\u9ED8\u8BA4\u503C, \u5177\u4F53\u7528\u6CD5\u8BF7\u53C2\u8003\u793A\u4F8B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](564, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](565, "\u81EA\u52A8\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](566, "td")(567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](568, "Record<string, Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](569, "td")(570, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](571, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](573, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](574, "tr")(575, "td")(576, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](577, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](578, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](579, "\u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](580, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](581, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](582, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](583, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](584, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](585, " \u7684\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](586, "td")(587, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](588, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](589, "td")(590, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](591, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](592, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](593, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](594, "h3", 66)(595, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](596, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](597, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](598, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](599, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](600, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](601, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](602, "\u8868\u5355\u9879\u7528\u4E8E\u533A\u5206\u8868\u5355\u4E2D\u4E0D\u540C\u7684\u533A\u57DF\uFF0C\u5305\u542B\u8868\u5355\u57DF\u548C\u8868\u5355\u6807\u7B7E(\u53EF\u9009)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](603, "blockquote")(604, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](605, "\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](606, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](607, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](608, " \u7684\u53C2\u6570\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](609, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](610, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](611, " \u4E0A\u5747\u53EF\u76F4\u63A5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](612, "h3", 70)(613, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](614, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](615, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](616, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](617, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](618, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](619, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](620, "\u7528\u4E8E\u6807\u793A\u5F53\u524D\u8868\u5355\u9879\u7684\u5185\u5BB9\uFF0C\u53EF\u9009\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](621, "blockquote")(622, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](623, "\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](624, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](625, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](626, " \u7684\u53C2\u6570\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](627, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](628, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](629, " \u4E0A\u5747\u53EF\u76F4\u63A5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](630, "table")(631, "thead")(632, "tr")(633, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](634, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](635, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](636, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](637, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](638, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](639, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](640, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](641, "tbody")(642, "tr")(643, "td")(644, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](645, "[nzRequired]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](647, "\u5F53\u524D\u9879\u662F\u5426\u4E3A\u5FC5\u586B\uFF0C\u4EC5\u5F71\u54CD\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](648, "td")(649, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](650, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](651, "td")(652, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](653, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](654, "tr")(655, "td")(656, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](657, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](658, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](659, "\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](660, "td")(661, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](662, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](663, "td")(664, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](665, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](666, "tr")(667, "td")(668, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](669, "[nzFor]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](670, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](671, "label \u6807\u7B7E\u7684 for \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](672, "td")(673, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](674, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](675, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](676, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](677, "h3", 72)(678, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](679, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](680, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](681, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](682, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](683, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](684, "blockquote")(685, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](686, "\u6CE8\u610F\uFF1A\u7531\u4E8E Angular Form \u76EE\u524D\u63D0\u4F9B\u7684");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](687, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](688, "\u72B6\u6001\u53D8\u66F4\u8BA2\u9605");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](689, "\u4E0D\u5B8C\u6574\u3002\u624B\u52A8\u66F4\u6539\u8868\u5355\u72B6\u6001\u65F6\uFF0C\u4F8B\u5982 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](690, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](691, "markAsDirty");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](692, " \u540E\uFF0C\u9700\u8981\u6267\u884C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](693, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](694, "updateValueAndValidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](695, " \u901A\u77E5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](696, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](697, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](698, " \u8FDB\u884C\u72B6\u6001\u53D8\u66F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](699, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](700, "\u8868\u5355\u4E00\u5B9A\u4F1A\u5305\u542B\u8868\u5355\u57DF\uFF0C\u8868\u5355\u57DF\u53EF\u4EE5\u662F\u8F93\u5165\u63A7\u4EF6\uFF0C\u6807\u51C6\u8868\u5355\u57DF\uFF0C\u6807\u7B7E\uFF0C\u4E0B\u62C9\u83DC\u5355\uFF0C\u6587\u672C\u57DF\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](701, "blockquote")(702, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](703, "\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](704, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](705, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](706, " \u7684\u53C2\u6570\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](707, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](708, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](709, " \u4E0A\u5747\u53EF\u76F4\u63A5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](710, "table")(711, "thead")(712, "tr")(713, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](714, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](715, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](716, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](717, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](718, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](719, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](720, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](721, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](722, "tbody")(723, "tr")(724, "td")(725, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](726, "[nzValidateStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](727, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](728, "\u4F1A\u6839\u636E\u4F20\u5165\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](730, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](731, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](732, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](733, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](734, " \u81EA\u52A8\u751F\u6210\u6821\u9A8C\u72B6\u6001\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u72B6\u6001\uFF0C\u4E0D\u4F20\u5165\u65F6\u9ED8\u8BA4\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](736, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](737, " \u4E2D\u5305\u88F9\u7684\u7B2C\u4E00\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](738, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](739, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](740, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](741, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](742, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](743, "td")(744, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](745, "'success' | 'warning' | 'error' | 'validating' | FormControl | NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](746, "td")(747, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](748, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](749, " \u4E2D\u5305\u88F9\u7684\u7B2C\u4E00\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](750, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](751, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](752, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](753, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](754, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](755, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](756, "tr")(757, "td")(758, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](759, "[nzHasFeedback]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](761, "\u914D\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](762, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](763, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](764, " \u5C5E\u6027\u4F7F\u7528\uFF0C\u5C55\u793A\u6821\u9A8C\u72B6\u6001\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](765, "td")(766, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](767, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](768, "td")(769, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](770, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](771, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](772, "tr")(773, "td")(774, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](775, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](776, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](777, "\u7528\u4E8E\u663E\u793A\u8868\u5355\u989D\u5916\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](778, "td")(779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](780, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](781, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](782, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](783, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](784, "tr")(785, "td")(786, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](787, "[nzSuccessTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](788, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](789, "\u6821\u9A8C\u72B6\u6001 success \u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](790, "td")(791, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](792, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](793, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](794, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](795, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](796, "tr")(797, "td")(798, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](799, "[nzWarningTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](800, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](801, "\u6821\u9A8C\u72B6\u6001 warning \u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](802, "td")(803, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](804, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](806, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](807, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](808, "tr")(809, "td")(810, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](811, "[nzErrorTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](812, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](813, "\u6821\u9A8C\u72B6\u6001 error \u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](814, "td")(815, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](816, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](817, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](818, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](820, "tr")(821, "td")(822, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](823, "[nzValidatingTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](824, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](825, "\u6B63\u5728\u6821\u9A8C\u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](826, "td")(827, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](828, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](829, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](830, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????element"](831, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](832, "tr")(833, "td")(834, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](835, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](836, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](837, "\u914D\u7F6E\u63D0\u793A\u7684\u5BF9\u8C61, \u5177\u4F53\u7528\u6CD5\u8BF7\u53C2\u8003\u793A\u4F8B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](838, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](839, "\u81EA\u52A8\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](840, "td")(841, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](842, "Record<string, Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](843, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](844, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](845, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](846, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](847, "tr")(848, "td")(849, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](850, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](851, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](852, "\u7981\u7528\u81EA\u52A8\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](853, "td")(854, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](855, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](856, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](857, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](858, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](859, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](860, "h3", 75)(861, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](862, "nz-form-split");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](863, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](864, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](865, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](866, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](867, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](868, "\u7528\u4E8E\u663E\u793A\u5206\u9694\u7B26 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](870, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](871, "h3", 77)(872, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](873, "nz-form-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](874, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](875, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](876, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](877, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](878, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](879, "\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementStart"](880, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](881, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????text"](882, " \u4E2D\u76F4\u63A5\u663E\u793A\u6587\u672C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????enableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](246);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-horizontal-login")("nzLink", "components-form-demo-horizontal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/horizontal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-normal-login")("nzLink", "components-form-demo-normal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/normal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-register")("nzLink", "components-form-demo-register")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/register.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-advanced-search")("nzLink", "components-form-demo-advanced-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/advanced-search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-dynamic-form-item")("nzLink", "components-form-demo-dynamic-form-item")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-form-item.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-time-related-controls")("nzLink", "components-form-demo-time-related-controls")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/time-related-controls.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-validate-reactive")("nzLink", "components-form-demo-validate-reactive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-reactive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-validate-template")("nzLink", "components-form-demo-validate-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-auto-tips")("nzLink", "components-form-demo-auto-tips")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/auto-tips.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-validate-static")("nzLink", "components-form-demo-validate-static")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-static.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-coordinated")("nzLink", "components-form-demo-coordinated")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/coordinated.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-layout")("nzLink", "components-form-demo-layout")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/layout.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["????property"]("nzId", "components-form-demo-dynamic-rule")("nzLink", "components-form-demo-dynamic-rule")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-rule.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal_login__WEBPACK_IMPORTED_MODULE_1__.NzDemoFormHorizontalLoginComponent, _normal_login__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormNormalLoginComponent, _register__WEBPACK_IMPORTED_MODULE_3__.NzDemoFormRegisterComponent, _advanced_search__WEBPACK_IMPORTED_MODULE_4__.NzDemoFormAdvancedSearchComponent, _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__.NzDemoFormDynamicFormItemComponent, _time_related_controls__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormTimeRelatedControlsComponent, _validate_reactive__WEBPACK_IMPORTED_MODULE_7__.NzDemoFormValidateReactiveComponent, _validate_template__WEBPACK_IMPORTED_MODULE_8__.NzDemoFormValidateTemplateComponent, _auto_tips__WEBPACK_IMPORTED_MODULE_9__.NzDemoFormAutoTipsComponent, _validate_static__WEBPACK_IMPORTED_MODULE_10__.NzDemoFormValidateStaticComponent, _coordinated__WEBPACK_IMPORTED_MODULE_11__.NzDemoFormCoordinatedComponent, _layout__WEBPACK_IMPORTED_MODULE_12__.NzDemoFormLayoutComponent, _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__.NzDemoFormDynamicRuleComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_form_index_module_ts.js.map