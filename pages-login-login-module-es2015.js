(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"content\">\r\n\t\t\t<div class=\"login-logo\">\r\n\t\t\t\t<img src=\"assets/img/appicon.png\" alt=\"Ionic logo\">\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<form class=\"form\">\r\n\r\n\t\t\t\t<mat-form-field class=\"full-width\"  appearance=\"outline\">\r\n\t\t\t\t\t<input autocomplete=\"on\" matInput placeholder=\"Email\" [formControl]=\"usernameFormControl\" [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t<mat-hint>Please enter your username</mat-hint>\r\n\t\t\t\t\t<mat-error *ngIf=\"usernameFormControl.hasError('minlength') && !usernameFormControl.hasError('required')\">\r\n\t\t\t\t\t\tPlease enter at least 4 characters\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"usernameFormControl.hasError('required')\">\r\n\t\t\t\t\t\tUsername is <strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t<mat-form-field class=\"full-width\"  appearance=\"outline\">\r\n\t\t\t\t\t<input autocomplete=\"on\" matInput placeholder=\"Password\" [formControl]=\"passwordFormControl\" [errorStateMatcher]=\"matcher\" [type]=\"hide ? 'password' : 'text'\">\r\n\t\t\t\t\t<button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n\t\t\t\t\t<mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<mat-hint>Please enter your password</mat-hint>\r\n\t\t\t\t\t<mat-error *ngIf=\"passwordFormControl.hasError('password') && !passwordFormControl.hasError('required')\">\r\n\t\t\t\t\t\tPassword is <strong>invalid</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n\t\t\t\t\t\tPassword is <strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t</form>\r\n\t\t\t<ion-button (click)=\"login()\">Login</ion-button>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/classes/my-error-state-matcher.ts":
/*!***************************************************!*\
  !*** ./src/app/classes/my-error-state-matcher.ts ***!
  \***************************************************/
/*! exports provided: MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");




const routes = [
    {
        path: '',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _modules_material_modules_material_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/material-modules/material-modules.module */ "./src/app/modules/material-modules/material-modules.module.ts");








let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"],
            _modules_material_modules_material_modules_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModulesModule"]
        ],
        declarations: [
            _login__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  background: url('background.jpg');\n  background-size: cover;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .container .content {\n  width: 100%;\n  max-width: 500px;\n  padding: 50px;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  background: white;\n  border-radius: 20px;\n}\nion-content .container .content .login-logo {\n  padding: 20px 0;\n  text-align: center;\n}\nion-content .container .content .login-logo img {\n  width: 100%;\n  height: 100%;\n  max-width: 300px;\n}\nion-content .container .content .form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\nion-content .container .content .form .full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxyY3FsN1xcRG9jdW1lbnRzXFxQcm9ncmFtaW5nXFxFeGFtcGxlc1xcQmluZ28vc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4uc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUY7QURDRTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSDtBREFHO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHTDtBREFHO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHdCQUFBO0FDRUo7QURESTtFQUNDLFdBQUE7QUNHTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHQuY29udGFpbmVye1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnJyk7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0LmNvbnRlbnR7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdFx0XHRwYWRkaW5nOiA1MHB4O1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdC5sb2dpbi1sb2dvIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHB4IDA7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGltZ3tcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvcm17XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcblx0XHRcdFx0LmZ1bGwtd2lkdGh7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciAuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIC5jb250ZW50IC5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIC5jb250ZW50IC5sb2dpbi1sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIC5jb250ZW50IC5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciAuY29udGVudCAuZm9ybSAuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _classes_my_error_state_matcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/my-error-state-matcher */ "./src/app/classes/my-error-state-matcher.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions */ "./src/app/functions/index.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _providers_routes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/routes.service */ "./src/app/providers/routes.service.ts");









let LoginPage = class LoginPage extends _functions__WEBPACK_IMPORTED_MODULE_6__["Tools"] {
    constructor(auth, router, menu, routes) {
        super();
        this.auth = auth;
        this.router = router;
        this.menu = menu;
        this.routes = routes;
        this.hide = true;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.matcher = new _classes_my_error_state_matcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    ionViewWillLeave() {
        this.menu.enable(true);
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.usernameFormControl.valid && this.passwordFormControl.valid) {
                try {
                    const message = yield this.auth.signIn(this.usernameFormControl.value, this.passwordFormControl.value);
                    this.toast.present(message);
                    this.router.navigate([this.routes.dashboard.url]);
                }
                catch (error) {
                    this.toast.present(error);
                }
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _providers_routes_service__WEBPACK_IMPORTED_MODULE_8__["RoutesService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.scss */ "./src/app/pages/login/login.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _providers_routes_service__WEBPACK_IMPORTED_MODULE_8__["RoutesService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map