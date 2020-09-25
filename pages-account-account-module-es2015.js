(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"user-detail\">\r\n\r\n\t<div class=\"user-header\">\r\n\t\t<img [src]=\"photoURL\">\r\n\t\t<h2>{{account.profile?.lastNames}}</h2>\r\n\t</div>\r\n\r\n\t<div class=\"ion-padding user-detail\">\r\n\t\t<p>{{'@' + account.profile?.username}} Say hello on social media!</p>\r\n\r\n\t\t<hr>\r\n\r\n\t\t<ion-chip color=\"twitter\" button>\r\n\t\t\t<ion-icon name=\"logo-twitter\"></ion-icon>\r\n\t\t\t<ion-label>Twitter</ion-label>\r\n\t\t</ion-chip>\r\n\r\n\t\t<ion-chip color=\"dark\" button>\r\n\t\t\t<ion-icon name=\"logo-github\"></ion-icon>\r\n\t\t\t<ion-label>GitHub</ion-label>\r\n\t\t</ion-chip>\r\n\r\n\t\t<ion-chip color=\"instagram\" button>\r\n\t\t\t<ion-icon name=\"logo-instagram\"></ion-icon>\r\n\t\t\t<ion-label>Instagram</ion-label>\r\n\t\t</ion-chip>\r\n\t</div>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item detail=\"false\">\r\n\t\t\t<ion-label>\r\n\t\t\t\t<p>Rol ID: {{account.profile?.rolId}}</p>\r\n\t\t\t\t<p>Status: {{account.profile?.status}}</p>\r\n\t\t\t\t<p>User ID: {{account.profile?.userId}}</p>\r\n\t\t\t</ion-label>\r\n\t\t</ion-item>\r\n\t\t<ion-item (click)=\"logout()\">Logout</ion-item>\r\n\t</ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/account/account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");




const routes = [
    {
        path: '',
        component: _account__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/pages/account/account-routing.module.ts");






let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [
            _account__WEBPACK_IMPORTED_MODULE_4__["AccountPage"],
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/pages/account/account.scss":
/*!********************************************!*\
  !*** ./src/app/pages/account/account.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n}\n\n.user-header {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: 50px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 300px;\n}\n\n.user-header img {\n  width: 150px;\n  border-radius: 50%;\n}\n\n.user-header h2 {\n  position: absolute;\n  bottom: 10px;\n}\n\n.user-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.user-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9DOlxcVXNlcnNcXHJjcWw3XFxEb2N1bWVudHNcXFByb2dyYW1pbmdcXEV4YW1wbGVzXFxCaW5nby9zcmNcXGFwcFxccGFnZXNcXGFjY291bnRcXGFjY291bnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0FDREQ7O0FER0E7RUFDQyxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0FDQUQ7O0FEQ0M7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSDs7QURDQztFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NIOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLDhDQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cclxuXHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi51c2VyLWhlYWRlciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZy10b3A6IDUwcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGhlaWdodDogMzAwcHg7XHJcblx0aW1nIHtcclxuXHRcdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG5cdGgyIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbi51c2VyLWRldGFpbCBwIHtcclxuXHRtYXJnaW4tbGVmdDogNnB4O1xyXG5cdG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4udXNlci1kZXRhaWwgaHIge1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcblx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnVzZXItaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMzAwcHg7XG59XG4udXNlci1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXNlci1oZWFkZXIgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLnVzZXItZGV0YWlsIHAge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnVzZXItZGV0YWlsIGhyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account/account.ts":
/*!******************************************!*\
  !*** ./src/app/pages/account/account.ts ***!
  \******************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/account.service */ "./src/app/providers/account.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/auth.service */ "./src/app/providers/auth.service.ts");






let AccountPage = class AccountPage {
    constructor(router, auth, alertCtrl, account) {
        this.router = router;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.account = account;
        this.photoURL = 'https://www.gravatar.com/avatar?d=mm&s=140';
    }
    ngAfterViewInit() {
        this.account.getUserData();
    }
    logout() {
        this.auth.logout().then((message) => {
            this.router.navigateByUrl('/login');
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.scss */ "./src/app/pages/account/account.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _providers_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
], AccountPage);



/***/ }),

/***/ "./src/app/providers/account.service.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/providers/app.service.ts");




let AccountService = class AccountService {
    constructor(app, http) {
        this.app = app;
        this.http = http;
        this.getUserData();
    }
    getUserData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield this.http.get(this.app.API_PROFILE).toPromise();
                this.profile = response.data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
AccountService.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AccountService);



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es2015.js.map