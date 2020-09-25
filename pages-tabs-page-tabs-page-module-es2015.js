(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/figure-item/figure-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/figure-item/figure-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"classes()\" (click)=\"toggle()\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/figure/figure.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/figure/figure.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n\t<ion-card-title>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label>{{data?.name}}</ion-label>\r\n\t\t\t<ion-buttons slot=\"end\">\r\n\t\t\t\t<ion-button *ngIf=\"editing\" (click)=\"updateFigure()\" color=\"success\">\r\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t\t<ion-button *ngIf=\"!editing\" (click)=\"editFigure()\" color=\"primary\">\r\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"pencil\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t\t<ion-button (click)=\"deleteFigure()\" color=\"danger\">\r\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</ion-buttons>\r\n\t\t</ion-item>\r\n\t</ion-card-title>\r\n\t<ion-card-content>\r\n\t\t<div class=\"guard\" *ngIf=\"!editing\"></div>\r\n\t\t<div class=\"column\" *ngFor=\"let column of columns(); let i = index\">\r\n\t\t\t<app-figure-item (change)=\"changeItem($event, ((i * 5) + j))\" *ngFor=\"let item of column; let j = index\" [state]=\"item\"></app-figure-item>\r\n\t\t</div>\r\n\t</ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-bar/top-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-bar/top-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-buttons slot=\"end\">\r\n\t\t\t<ion-chip (click)=\"goToAccount()\" color=\"medium\">\r\n\t\t\t\t<ion-avatar class=\"hello bg-primary margin-right-4\">\r\n\t\t\t\t\t<img *ngIf=\"this.photoURL()\" [src]=\"this.photoURL()\">\r\n\t\t\t\t\t<p *ngIf=\"!this.photoURL()\" class=\"uppercase\">\r\n\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t(displayName())\r\n\t\t\t\t\t\t\t? displayName()[0]\r\n\t\t\t\t\t\t\t: email[0] \r\n\t\t\t\t\t\t}}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-avatar>\r\n\t\t\t\t<ion-label color=\"primary\" id=\"label-name\">\r\n\t\t\t\t\t{{\r\n\t\t\t\t\t\t(displayName()) \r\n\t\t\t\t\t\t? (displayName().split(' ')[0] | titlecase) \r\n\t\t\t\t\t\t: email().split('@')[0] \r\n\t\t\t\t\t}}\r\n\t\t\t\t</ion-label>\r\n\t\t\t</ion-chip>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<div class=\"container\">\r\n\t\t<ion-card routerLink=\"../../users\">\r\n\t\t\t<ion-card-header>\r\n\t\t\t\t<ion-item detail=\"false\" lines=\"none\">\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h1 class=\"color-secondary\">{{'users' | uppercase}}</h1>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-card-header>\r\n\t\t\t<ion-card-content>\r\n\t\t\t\t<ion-icon name=\"people\" class=\"color-secondary\"></ion-icon>\r\n\t\t\t\t<ion-label class=\"color-secondary\">{{usersService.users.length | number}}</ion-label>\r\n\t\t\t</ion-card-content>\r\n\t\t</ion-card>\r\n\t\t<ion-card routerLink=\"../../figures\">\r\n\t\t\t<ion-card-header>\r\n\t\t\t\t<ion-item detail=\"false\" lines=\"none\">\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h1 class=\"color-primary\">{{'figures' | uppercase}}</h1>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-card-header>\r\n\t\t\t<ion-card-content>\r\n\t\t\t\t<ion-icon name=\"grid\" class=\"color-primary\"></ion-icon>\r\n\t\t\t\t<ion-label class=\"color-primary\">{{figuresService.figures.length | number}}</ion-label>\r\n\t\t\t</ion-card-content>\r\n\t\t</ion-card>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/figure-detail/figure-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/figure-detail/figure-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-item>\r\n            <ion-label>Create a new Figure</ion-label>\r\n            <ion-buttons slot=\"end\">\r\n                <ion-button slot=\"icon-only\" (click)=\"closeModal()\">\r\n                    <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n            </ion-buttons>\r\n        </ion-item>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div class=\"container\">\r\n        <ion-card>\r\n            <ion-card-title>\r\n                <ion-item>\r\n                    <ion-input [(ngModel)]=\"name\" placeholder=\"Figure name\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>Group</ion-label>\r\n                    <ion-select placeholder=\"Select Group\" [(ngModel)]=\"group\">\r\n                        <ion-select-option *ngFor=\"let option of figuresService.groups\" [value]=\"option.id\">{{option.name}}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n            </ion-card-title>\r\n            <ion-card-content>\r\n                <div class=\"column\" *ngFor=\"let column of columns(); let i = index\">\r\n                    <app-figure-item (change)=\"changeItem($event, ((i * 5) + j))\" *ngFor=\"let item of column; let j = index\" [state]=\"item\"></app-figure-item>\r\n                </div>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\r\n\t\t<ion-fab-button (click)=\"createFigure()\">\r\n\t\t  <ion-icon name=\"save\"></ion-icon>\r\n\t\t</ion-fab-button>\r\n\t</ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/figures/figures.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/figures/figures.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<ion-toolbar>\r\n\t\t<ion-segment #tab value=\"figures\">\r\n\t\t\t<ion-segment-button value=\"figures\">\r\n\t\t\t\t<ion-label>Figures</ion-label>\r\n\t\t\t\t<ion-icon name=\"grid\"></ion-icon>\r\n\t\t\t</ion-segment-button>\r\n\t\t\t<ion-segment-button value=\"groups\" selected>\r\n\t\t\t\t<ion-label>Groups</ion-label>\r\n\t\t\t\t<ion-icon name=\"albums\"></ion-icon>\r\n\t\t  \t</ion-segment-button>\r\n\t\t</ion-segment>\r\n\t</ion-toolbar>\r\n\t<div class=\"figures\" *ngIf=\"tab.value === 'figures'\">\r\n\t\t<cdk-virtual-scroll-viewport [itemSize]=\"300\" class=\"example-viewport\">\r\n\t\t\t<app-figure *cdkVirtualFor=\"let figure of figures\" [data]=\"figure\"></app-figure>\r\n\t\t</cdk-virtual-scroll-viewport>\r\n\t</div>\r\n\t<div class=\"groups\" *ngIf=\"tab.value === 'groups'\">\r\n\t\t<ion-list>\r\n\t\t\t<ion-item-sliding class=\"cursor-pointer\" #item *ngFor=\"let group of figuresService.groups\"> \r\n\t\t\t\t<ion-item (click)=\"item.open('end')\">\r\n\t\t\t\t\t<ion-icon color=\"secondary\" slot=\"start\" name=\"options\"></ion-icon>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<strong color=\"secondary\">{{group.name}}</strong>\r\n\t\t\t\t\t\t<p>ID: {{group.id}}</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<ion-icon color=\"secondary\" slot=\"end\" name=\"chevron-back\" style=\"margin: 0;\"></ion-icon>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item-options>\r\n\t\t\t\t\t<ion-item-option color=\"danger\">\r\n\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"trash\" style=\"margin: 5px;\"></ion-icon>\r\n\t\t\t\t\t\tDelete\r\n\t\t\t\t\t</ion-item-option>\r\n\t\t\t\t\t<ion-item-option color=\"warning\"  style=\"padding-right: 10px;\">\r\n\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"pencil\" style=\"margin: 5px;\"></ion-icon>\r\n\t\t\t\t\t\tEdit   \r\n\t\t\t\t\t</ion-item-option>\r\n\t\t\t\t</ion-item-options>\r\n\t\t\t</ion-item-sliding>  \t\t\r\n\t\t</ion-list>\r\n\t</div>\r\n\t<ion-fab *ngIf=\"tab.value === 'figures'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"right: 20px; bottom: 20px;\">\r\n\t\t<ion-fab-button (click)=\"openModal()\">\r\n\t\t  <ion-icon name=\"add\"></ion-icon>\r\n\t\t</ion-fab-button>\r\n\t</ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-bar></app-top-bar>\r\n\r\n<ion-tabs>\r\n\t<ion-tab-bar slot=\"bottom\">\r\n\t\t<ng-container *ngFor=\"let page of pages\">\r\n\t\t\t<ion-tab-button [tab]=\"page.name\">\r\n\t\t\t\t<ion-icon [name]=\"page.icon\"></ion-icon>\r\n\t\t\t\t<ion-label>{{page.title}}</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\t\t</ng-container>\r\n\t</ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<ion-grid fixed>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" size-md=\"6\" *ngFor=\"let user of usersService.users; let i = index\">\r\n\t\t\t\t<ion-card class=\"user-card\" [routerLink]=\"'./user/' + i\">\r\n\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t<ion-item detail=\"false\" lines=\"none\" class=\"user-item\">\r\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"user.picture.thumbnail\" [alt]=\"user.name.first + ' profile picture'\">\r\n\t\t\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t<h2>{{user.name.first + ' ' + user.name.last}}</h2>\r\n\t\t\t\t\t\t\t\t<p>{{'@' + user.login.username}}</p>\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</ion-card-header>\r\n\r\n\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t<ion-list lines=\"none\">\r\n\t\t\t\t\t\t\t<ion-item detail=\"false\">\r\n\t\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t\t<p>Phone: {{user.phone}}</p>\r\n\t\t\t\t\t\t\t\t\t<p>Gender: {{user.gender}}</p>\r\n\t\t\t\t\t\t\t\t\t<p>E-mail: {{user.email}}</p>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t<ion-item detail=\"false\">\r\n\t\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t\t<h3>{{user.location.country + ', ' + user.location.city}}</h3>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/figure-item/figure-item.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/figure-item/figure-item.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n  border-radius: 5px;\n}\ndiv:not(.bg-danger) {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWd1cmUtaXRlbS9DOlxcVXNlcnNcXHJjcWw3XFxEb2N1bWVudHNcXFByb2dyYW1pbmdcXEV4YW1wbGVzXFxCaW5nby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmlndXJlLWl0ZW1cXGZpZ3VyZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpZ3VyZS1pdGVtL2ZpZ3VyZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maWd1cmUtaXRlbS9maWd1cmUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAmOm5vdCguYmctZGFuZ2VyKXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn0iLCJkaXYge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuZGl2Om5vdCguYmctZGFuZ2VyKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/figure-item/figure-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/figure-item/figure-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: FigureItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigureItemComponent", function() { return FigureItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FigureItemComponent = class FigureItemComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    classes() {
        switch (this.state) {
            case true:
                return 'bg-primary';
            case false:
                return 'bg-medium';
            default:
                return 'bg-danger';
        }
    }
    toggle() {
        if (this.state !== null) {
            this.change.emit(!this.state);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FigureItemComponent.prototype, "state", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FigureItemComponent.prototype, "change", void 0);
FigureItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-figure-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./figure-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/figure-item/figure-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./figure-item.component.scss */ "./src/app/components/figure-item/figure-item.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FigureItemComponent);



/***/ }),

/***/ "./src/app/components/figure/figure.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/figure/figure.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  max-width: 330px;\n  margin: 20px auto;\n}\nion-card ion-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column wrap;\n  position: relative;\n}\nion-card ion-card-content .guard {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\nion-card ion-card-content .column {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWd1cmUvQzpcXFVzZXJzXFxyY3FsN1xcRG9jdW1lbnRzXFxQcm9ncmFtaW5nXFxFeGFtcGxlc1xcQmluZ28vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpZ3VyZVxcZmlndXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpZ3VyZS9maWd1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0daO0FERFE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlndXJlL2ZpZ3VyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5ndWFyZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNhcmQge1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5ndWFyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/figure/figure.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/figure/figure.component.ts ***!
  \*******************************************************/
/*! exports provided: FigureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigureComponent", function() { return FigureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions */ "./src/app/functions/index.ts");
/* harmony import */ var _providers_figures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/figures.service */ "./src/app/providers/figures.service.ts");




let FigureComponent = class FigureComponent extends _functions__WEBPACK_IMPORTED_MODULE_2__["Tools"] {
    constructor(figuresService) {
        super();
        this.figuresService = figuresService;
        this.positions = [];
        this.editing = false;
    }
    ngOnInit() {
        this.positions = this.data.positionsWinner;
    }
    editFigure() {
        this.editing = true;
    }
    deleteFigure() {
        this.confirm.present('Are you sure you want to delete this figure?', this.data.name).subscribe((res) => {
            if (res) {
                this.figuresService.deleteFigure(this.data.id)
                    .then((message) => {
                    this.toast.present(message);
                });
            }
        });
    }
    updateFigure() {
        this.confirm.present('Are you sure you want to update this figure?', this.data.name).subscribe((res) => {
            if (res) {
                const data = {
                    figureName: this.data.name,
                    idFigureGroup: this.data.groupFigureId.id,
                    positions: this.positions
                };
                this.figuresService.updateFigure(this.data.id, data).then((message) => {
                    this.toast.present(message);
                });
                this.editing = false;
            }
        });
    }
    changeItem(state, position) {
        this.positions[position] = state;
    }
    columns() {
        const columns = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const index = (i * 5) + j;
                columns[i].push(this.positions[index]);
            }
        }
        return columns;
    }
};
FigureComponent.ctorParameters = () => [
    { type: _providers_figures_service__WEBPACK_IMPORTED_MODULE_3__["FiguresService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FigureComponent.prototype, "data", void 0);
FigureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-figure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./figure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/figure/figure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./figure.component.scss */ "./src/app/components/figure/figure.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_figures_service__WEBPACK_IMPORTED_MODULE_3__["FiguresService"]])
], FigureComponent);



/***/ }),

/***/ "./src/app/components/top-bar/top-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3AtYmFyL0M6XFxVc2Vyc1xccmNxbDdcXERvY3VtZW50c1xcUHJvZ3JhbWluZ1xcRXhhbXBsZXNcXEJpbmdvL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b3AtYmFyXFx0b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFye1xyXG5cdGRpc3BsYXk6IGZsZXg7IFxyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuXHRjb2xvcjogd2hpdGVcclxufSIsImlvbi1hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/top-bar/top-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TopBarComponent = class TopBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goToAccount() {
        this.router.navigateByUrl('/account');
    }
    photoURL() {
        return 'https://www.gravatar.com/avatar?d=mm&s=140';
    }
    displayName() {
        return 'Roberto  Quintero';
    }
    email() {
        return 'rcql7275@gmail.com';
    }
};
TopBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-bar/top-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-bar.component.scss */ "./src/app/components/top-bar/top-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TopBarComponent);



/***/ }),

/***/ "./src/app/modules/components/components.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/components/components.module.ts ***!
  \*********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _material_modules_material_modules_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-modules/material-modules.module */ "./src/app/modules/material-modules/material-modules.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/top-bar/top-bar.component */ "./src/app/components/top-bar/top-bar.component.ts");
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ "./src/app/components/figure/figure.component.ts");
/* harmony import */ var _components_figure_item_figure_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/figure-item/figure-item.component */ "./src/app/components/figure-item/figure-item.component.ts");








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_modules_material_modules_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModulesModule"],
        ],
        declarations: [
            _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopBarComponent"],
            _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__["FigureComponent"],
            _components_figure_item_figure_item_component__WEBPACK_IMPORTED_MODULE_7__["FigureItemComponent"],
        ],
        exports: [
            _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopBarComponent"],
            _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__["FigureComponent"],
            _components_figure_item_figure_item_component__WEBPACK_IMPORTED_MODULE_7__["FigureItemComponent"],
        ],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container ion-card {\n  width: 30%;\n  height: 300px;\n  min-width: 250px;\n  max-width: 500px;\n  margin: 20px;\n  position: relative;\n}\n.container ion-card ion-card-header {\n  width: 100%;\n  height: 30%;\n  box-sizing: border-box;\n}\n.container ion-card ion-card-content {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  top: 0;\n}\n.container ion-card ion-card-content * {\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xccmNxbDdcXERvY3VtZW50c1xcUHJvZ3JhbWluZ1xcRXhhbXBsZXNcXEJpbmdvL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRDtBREFDO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7QURERTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNHSDtBRERFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSx3QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDR0g7QURGRztFQUNDLGVBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGlvbi1jYXJke1xyXG5cdFx0d2lkdGg6IDMwJTtcclxuXHRcdGhlaWdodDogMzAwcHg7XHJcblx0XHRtaW4td2lkdGg6IDI1MHB4O1xyXG5cdFx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHRcdG1hcmdpbjogMjBweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGlvbi1jYXJkLWhlYWRlcntcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMzAlO1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0fVxyXG5cdFx0aW9uLWNhcmQtY29udGVudHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdCp7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzNnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciBpb24tY2FyZCB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udGFpbmVyIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5jb250YWluZXIgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAqIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/users.service */ "./src/app/providers/users.service.ts");
/* harmony import */ var _providers_figures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/figures.service */ "./src/app/providers/figures.service.ts");




let DashboardPage = class DashboardPage {
    constructor(usersService, figuresService) {
        this.usersService = usersService;
        this.figuresService = figuresService;
    }
    ngOnInit() {
    }
};
DashboardPage.ctorParameters = () => [
    { type: _providers_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _providers_figures_service__WEBPACK_IMPORTED_MODULE_3__["FiguresService"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
        _providers_figures_service__WEBPACK_IMPORTED_MODULE_3__["FiguresService"]])
], DashboardPage);



/***/ }),

/***/ "./src/app/pages/figure-detail/figure-detail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/figure-detail/figure-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FigureDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigureDetailPageRoutingModule", function() { return FigureDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _figure_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./figure-detail.page */ "./src/app/pages/figure-detail/figure-detail.page.ts");




const routes = [
    {
        path: '',
        component: _figure_detail_page__WEBPACK_IMPORTED_MODULE_3__["FigureDetailPage"]
    }
];
let FigureDetailPageRoutingModule = class FigureDetailPageRoutingModule {
};
FigureDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FigureDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/figure-detail/figure-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/figure-detail/figure-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: FigureDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigureDetailPageModule", function() { return FigureDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _figure_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./figure-detail-routing.module */ "./src/app/pages/figure-detail/figure-detail-routing.module.ts");
/* harmony import */ var _figure_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./figure-detail.page */ "./src/app/pages/figure-detail/figure-detail.page.ts");
/* harmony import */ var _modules_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/components/components.module */ "./src/app/modules/components/components.module.ts");








let FigureDetailPageModule = class FigureDetailPageModule {
};
FigureDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _figure_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["FigureDetailPageRoutingModule"],
            _modules_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_figure_detail_page__WEBPACK_IMPORTED_MODULE_6__["FigureDetailPage"]]
    })
], FigureDetailPageModule);



/***/ }),

/***/ "./src/app/pages/figure-detail/figure-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/figure-detail/figure-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container ion-card ion-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column wrap;\n  position: relative;\n}\n.container ion-card ion-card-content .guard {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.container ion-card ion-card-content .column {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlndXJlLWRldGFpbC9DOlxcVXNlcnNcXHJjcWw3XFxEb2N1bWVudHNcXFByb2dyYW1pbmdcXEV4YW1wbGVzXFxCaW5nby9zcmNcXGFwcFxccGFnZXNcXGZpZ3VyZS1kZXRhaWxcXGZpZ3VyZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWd1cmUtZGV0YWlsL2ZpZ3VyZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQ1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNFaEI7QURBWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpZ3VyZS1kZXRhaWwvZmlndXJlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAuZ3VhcmR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbHVtbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmd1YXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY29udGFpbmVyIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/figure-detail/figure-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/figure-detail/figure-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: FigureDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigureDetailPage", function() { return FigureDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions */ "./src/app/functions/index.ts");
/* harmony import */ var _providers_figures_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/figures.service */ "./src/app/providers/figures.service.ts");





let FigureDetailPage = class FigureDetailPage extends _functions__WEBPACK_IMPORTED_MODULE_3__["Tools"] {
    constructor(modalController, figuresService) {
        super();
        this.modalController = modalController;
        this.figuresService = figuresService;
        this.options = [];
        this.name = '';
    }
    ngOnInit() {
        this.loadOptions();
    }
    createFigure() {
        if (this.name === '') {
            return this.toast.present('Debe llenar el formulario');
        }
        if (this.group === undefined) {
            return this.toast.present('Debe seleccionar un grupo');
        }
        this.confirm.present('Ready to create a new Figure?').subscribe((res) => {
            if (res) {
                const data = {
                    idFigureGroup: this.group,
                    figureName: this.name,
                    positions: this.getOptions(),
                };
                this.figuresService.createFigure(data);
            }
        });
    }
    closeModal() {
        this.modalController.dismiss();
    }
    getOptions() {
        const response = [];
        for (const option of this.options) {
            response.push((option === true) ? 1 : 0);
        }
        return response;
    }
    loadOptions() {
        for (let i = 0; i < 25; i++) {
            this.options.push(false);
        }
        this.options[12] = null;
    }
    changeItem(state, position) {
        this.options[position] = state;
    }
    columns() {
        const columns = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const index = (i * 5) + j;
                columns[i].push(this.options[index]);
            }
        }
        return columns;
    }
};
FigureDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers_figures_service__WEBPACK_IMPORTED_MODULE_4__["FiguresService"] }
];
FigureDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-figure-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./figure-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/figure-detail/figure-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./figure-detail.page.scss */ "./src/app/pages/figure-detail/figure-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_figures_service__WEBPACK_IMPORTED_MODULE_4__["FiguresService"]])
], FigureDetailPage);



/***/ }),

/***/ "./src/app/pages/figures/figures-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/figures/figures-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FiguresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguresPageRoutingModule", function() { return FiguresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _figures_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./figures.page */ "./src/app/pages/figures/figures.page.ts");




const routes = [
    {
        path: '',
        component: _figures_page__WEBPACK_IMPORTED_MODULE_3__["FiguresPage"],
    }
];
let FiguresPageRoutingModule = class FiguresPageRoutingModule {
};
FiguresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FiguresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/figures/figures.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/figures/figures.module.ts ***!
  \*************************************************/
/*! exports provided: FiguresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguresPageModule", function() { return FiguresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _figures_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./figures-routing.module */ "./src/app/pages/figures/figures-routing.module.ts");
/* harmony import */ var _figures_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./figures.page */ "./src/app/pages/figures/figures.page.ts");
/* harmony import */ var _modules_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/components/components.module */ "./src/app/modules/components/components.module.ts");
/* harmony import */ var _figure_detail_figure_detail_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../figure-detail/figure-detail.module */ "./src/app/pages/figure-detail/figure-detail.module.ts");
/* harmony import */ var _modules_material_modules_material_modules_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/material-modules/material-modules.module */ "./src/app/modules/material-modules/material-modules.module.ts");










let FiguresPageModule = class FiguresPageModule {
};
FiguresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _figures_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiguresPageRoutingModule"],
            _figure_detail_figure_detail_module__WEBPACK_IMPORTED_MODULE_8__["FigureDetailPageModule"],
            _modules_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _modules_material_modules_material_modules_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModulesModule"]
        ],
        declarations: [
            _figures_page__WEBPACK_IMPORTED_MODULE_6__["FiguresPage"]
        ],
    })
], FiguresPageModule);



/***/ }),

/***/ "./src/app/pages/figures/figures.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/figures/figures.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 100px;\n}\nion-content .figures .example-viewport {\n  width: 100%;\n  max-width: 764px;\n  height: 60vh;\n  margin: auto;\n}\nion-content .figures .example-item-detail {\n  height: 18px;\n}\nion-content .figures .example-alternate {\n  background: rgba(127, 127, 127, 0.3);\n}\nion-content .groups {\n  width: 80%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlndXJlcy9DOlxcVXNlcnNcXHJjcWw3XFxEb2N1bWVudHNcXFByb2dyYW1pbmdcXEV4YW1wbGVzXFxCaW5nby9zcmNcXGFwcFxccGFnZXNcXGZpZ3VyZXNcXGZpZ3VyZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWd1cmVzL2ZpZ3VyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjtBRENRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtBQ0NaO0FEQ1E7RUFDSSxvQ0FBQTtBQ0NaO0FERUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlndXJlcy9maWd1cmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAuZmlndXJlc3tcclxuICAgICAgICAuZXhhbXBsZS12aWV3cG9ydCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc2NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4YW1wbGUtaXRlbS1kZXRhaWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5leGFtcGxlLWFsdGVybmF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ3JvdXBze1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMTAwcHg7XG59XG5pb24tY29udGVudCAuZmlndXJlcyAuZXhhbXBsZS12aWV3cG9ydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc2NHB4O1xuICBoZWlnaHQ6IDYwdmg7XG4gIG1hcmdpbjogYXV0bztcbn1cbmlvbi1jb250ZW50IC5maWd1cmVzIC5leGFtcGxlLWl0ZW0tZGV0YWlsIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLmZpZ3VyZXMgLmV4YW1wbGUtYWx0ZXJuYXRlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjcsIDEyNywgMTI3LCAwLjMpO1xufVxuaW9uLWNvbnRlbnQgLmdyb3VwcyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/figures/figures.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/figures/figures.page.ts ***!
  \***********************************************/
/*! exports provided: FiguresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguresPage", function() { return FiguresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_figures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/figures.service */ "./src/app/providers/figures.service.ts");
/* harmony import */ var _figure_detail_figure_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../figure-detail/figure-detail.page */ "./src/app/pages/figure-detail/figure-detail.page.ts");





let FiguresPage = class FiguresPage {
    constructor(figuresService, modalController) {
        this.figuresService = figuresService;
        this.modalController = modalController;
        this.figures = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.loadFigures();
    }
    loadFigures() {
        this.figuresService.getFigures().then((figures) => {
            this.figures = figures;
        });
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _figure_detail_figure_detail_page__WEBPACK_IMPORTED_MODULE_4__["FigureDetailPage"],
            });
            return yield modal.present();
        });
    }
};
FiguresPage.ctorParameters = () => [
    { type: _providers_figures_service__WEBPACK_IMPORTED_MODULE_3__["FiguresService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
FiguresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-figures',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./figures.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/figures/figures.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./figures.page.scss */ "./src/app/pages/figures/figures.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_figures_service__WEBPACK_IMPORTED_MODULE_3__["FiguresService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], FiguresPage);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule)
                    },
                ]
            },
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../users/users.module */ "./src/app/pages/users/users.module.ts")).then(m => m.UsersPageModule)
                    },
                    {
                        path: 'user/:id',
                        loadChildren: () => __webpack_require__.e(/*! import() | user-detail-user-detail-module */ "common").then(__webpack_require__.bind(null, /*! ../user-detail/user-detail.module */ "./src/app/pages/user-detail/user-detail.module.ts")).then(m => m.UserDetailPageModule)
                    }
                ]
            },
            {
                path: 'figures',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../figures/figures.module */ "./src/app/pages/figures/figures.module.ts")).then(m => m.FiguresPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users/users.module */ "./src/app/pages/users/users.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _figures_figures_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../figures/figures.module */ "./src/app/pages/figures/figures.module.ts");
/* harmony import */ var _modules_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/components/components.module */ "./src/app/modules/components/components.module.ts");










let TabsModule = class TabsModule {
};
TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardPageModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_6__["UsersPageModule"],
            _figures_figures_module__WEBPACK_IMPORTED_MODULE_8__["FiguresPageModule"],
            _modules_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]
        ],
        declarations: [
            _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        ]
    })
], TabsModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/routes.service */ "./src/app/providers/routes.service.ts");



let TabsPage = class TabsPage {
    constructor(routes) {
        this.routes = routes;
        this.pages = [];
        this.pages = this.routes.primaries;
    }
};
TabsPage.ctorParameters = () => [
    { type: _providers_routes_service__WEBPACK_IMPORTED_MODULE_2__["RoutesService"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs-page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_routes_service__WEBPACK_IMPORTED_MODULE_2__["RoutesService"]])
], TabsPage);



/***/ }),

/***/ "./src/app/pages/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/users/users.page.ts");




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/pages/users/users-routing.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/users/users.page.ts");







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/pages/users/users.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 100px;\n}\n\n.user-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nion-col:not(:last-of-type) .user-card {\n  margin-bottom: 0;\n}\n\n.user-card .user-item h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.user-card .user-item p {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.user-card ion-card-header {\n  padding: 0;\n}\n\n.user-card ion-card-content {\n  padding: 0;\n}\n\nion-label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvQzpcXFVzZXJzXFxyY3FsN1xcRG9jdW1lbnRzXFxQcm9ncmFtaW5nXFxFeGFtcGxlc1xcQmluZ28vc3JjXFxhcHBcXHBhZ2VzXFx1c2Vyc1xcdXNlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGOztBRENBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRUQ7O0FEQUE7RUFDQyxnQkFBQTtBQ0dEOztBRERBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNJRDs7QURGQTtFQUNDLGVBQUE7RUFDQSxzQkFBQTtBQ0tEOztBREhBO0VBQ0MsVUFBQTtBQ01EOztBREpBO0VBQ0MsVUFBQTtBQ09EOztBRExBO0VBQ0UsU0FBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblx0XHQtLXBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4udXNlci1jYXJkIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnVzZXItY2FyZCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4udXNlci1jYXJkIC51c2VyLWl0ZW0gaDIge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbn1cclxuLnVzZXItY2FyZCAudXNlci1pdGVtIHAge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcbi51c2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbi51c2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5pb24tbGFiZWx7XHJcblx0XHRtYXJnaW46IDA7XHJcbn1cclxuXHQiLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4udXNlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnVzZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi51c2VyLWNhcmQgLnVzZXItaXRlbSBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnVzZXItY2FyZCAudXNlci1pdGVtIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi51c2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnVzZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/users/users.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/users/users.page.ts ***!
  \*******************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/users.service */ "./src/app/providers/users.service.ts");



let UsersPage = class UsersPage {
    constructor(usersService) {
        this.usersService = usersService;
    }
    ngOnInit() {
    }
};
UsersPage.ctorParameters = () => [
    { type: _providers_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.page.scss */ "./src/app/pages/users/users.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
], UsersPage);



/***/ }),

/***/ "./src/app/providers/figures.service.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/figures.service.ts ***!
  \**********************************************/
/*! exports provided: FiguresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguresService", function() { return FiguresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/providers/app.service.ts");





let FiguresService = class FiguresService {
    constructor(app, http) {
        this.app = app;
        this.http = http;
        this.figures = [];
        this.groups = [];
        setTimeout(() => {
            this.getFigures();
            this.getGroupsFigures();
        }, 2000);
    }
    getGroupsFigures() {
        this.http.get(this.app.API_GROUP_FIGURES).toPromise().then((res) => {
            this.groups = res.data;
        }).catch((error) => {
            console.log('error---', error);
        });
    }
    getFigures() {
        return new Promise((resolve, reject) => {
            const response = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            if (this.figures.length > 0) {
                resolve(this.figures);
            }
            else {
                this.getFiguresFromHttp().then((res) => {
                    this.figures = res.data;
                    resolve(this.figures);
                }).catch((error) => {
                    reject(error);
                });
            }
        });
    }
    getFiguresFromHttp() {
        return this.http.get(this.app.API_FIGURES).toPromise();
    }
    createFigure(data) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.http.post(this.app.API_FIGURES, data).toPromise();
                resolve('The figure has been created!');
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    updateFigure(id, data) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.http.put(`${this.app.API_FIGURES}/${id}`, data).toPromise();
                resolve('The figure has been updated');
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    deleteFigure(id) {
        return new Promise((resolve) => {
            for (const [i, figure] of this.figures.entries()) {
                if (figure.id === id) {
                    resolve('The figure has been deleted');
                    this.figures.splice(i, 1);
                }
            }
        });
    }
};
FiguresService.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FiguresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], FiguresService);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es2015.js.map