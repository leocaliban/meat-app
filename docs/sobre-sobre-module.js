(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sobre-sobre-module"],{

/***/ "./src/app/sobre/sobre.component.html":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>Sobre</h1>\n</section>\n\n<section class=\"content\">\n  <p class=\"lead\">\n    Meat | Aplicação que demonstra as features do Angular\n  </p>\n  <p class=\"lead\">\n    MIT license\n  </p>\n  <p class=\"lead\">Copyright 2017 COD3R (<a href=\"http://www.cod3r.com.br\">http://www.cod3r.com.br</a>)</p>\n  <p class=\"lead\">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and\n    associated documentation files (the \"Software\"), to deal in the Software without restriction, including without\n    limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the\n    Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>\n  <p class=\"lead\">The above copyright notice and this permission notice shall be included in all copies or substantial\n    portions of the Software. </p>\n  <p class=\"lead\">\n    THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE\n    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS\n    OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>\n  <p class=\"lead\">\n    Imagens usadas na aplicação por <a href=\"http://www.freepik.com\" target=\"_blank\">freepik.com</a>\n  </p>\n\n</section>\n"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/sobre/sobre.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.module.ts":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.module.ts ***!
  \***************************************/
/*! exports provided: SobreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreModule", function() { return SobreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sobre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ROUTES = [
    {
        path: '',
        component: _sobre_component__WEBPACK_IMPORTED_MODULE_2__["SobreComponent"]
    }
];
var SobreModule = /** @class */ (function () {
    function SobreModule() {
    }
    SobreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)
            ],
            declarations: [_sobre_component__WEBPACK_IMPORTED_MODULE_2__["SobreComponent"]],
        })
    ], SobreModule);
    return SobreModule;
}());



/***/ })

}]);
//# sourceMappingURL=sobre-sobre-module.js.map