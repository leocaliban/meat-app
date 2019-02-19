(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-pedido-module"],{

/***/ "./src/app/pedido/custos/custos.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pedido/custos/custos.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table\">\n    <tbody>\n      <tr>\n        <th style=\"width:50%\">Itens:</th>\n        <td class=\"text-right\">{{valorDosItens | currency: 'BRL' :'symbol'}}</td>\n      </tr>\n      <tr>\n        <th>Frete:</th>\n        <td class=\"text-right\">{{frete | currency: 'BRL' :'symbol'}}</td>\n      </tr>\n      <tr>\n        <th>Total:</th>\n        <td class=\"text-right\">{{total() | currency: 'BRL' :'symbol'}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/pedido/custos/custos.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pedido/custos/custos.component.ts ***!
  \***************************************************/
/*! exports provided: CustosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustosComponent", function() { return CustosComponent; });
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

var CustosComponent = /** @class */ (function () {
    function CustosComponent() {
    }
    CustosComponent.prototype.ngOnInit = function () {
    };
    CustosComponent.prototype.total = function () {
        return this.frete + this.valorDosItens;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustosComponent.prototype, "frete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustosComponent.prototype, "valorDosItens", void 0);
    CustosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-custos',
            template: __webpack_require__(/*! ./custos.component.html */ "./src/app/pedido/custos/custos.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CustosComponent);
    return CustosComponent;
}());



/***/ }),

/***/ "./src/app/pedido/itens-de-pedido/itens-de-pedido.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pedido/itens-de-pedido/itens-de-pedido.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" *ngIf=\"itens.length === 0;else tabelaItens\">\n  <p>Não há itens no carrinho. Que tal começar por <a [routerLink]=\"['/restaurantes']\">aqui</a></p>\n</div>\n\n<ng-template #tabelaItens>\n  <div class=\"col-xs-12 table-responsive\">\n\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">Quantidade</th>\n          <th>Item</th>\n          <th>Descrição</th>\n          <th class=\"text-right\">Subtotal</th>\n          <th class=\"text-right\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of itens\">\n          <td class=\"text-center\">\n            <a (click)=\"emitDiminuirQuantidade(item)\" class=\"btn btn-sm\"><i class=\"fa fa-minus\"></i></a>\n            {{item.quantity}}\n            <a (click)=\"emitAumentarQuantidade(item)\" class=\"btn btn-sm\"><i class=\"fa fa-plus\"></i></a>\n          </td>\n          <td>{{item.itemMenu.name}}</td>\n\n          <td>{{item.itemMenu.description}}</td>\n          <td class=\"text-right\">{{item.value() | currency: 'BRL' : 'symbol'}}</td>\n          <td class=\"text-right\">\n            <a (click)=\"emitRemover(item)\" class=\"btn btn-sm danger\"><i class=\"fa fa-remove\"></i></a>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pedido/itens-de-pedido/itens-de-pedido.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pedido/itens-de-pedido/itens-de-pedido.component.ts ***!
  \*********************************************************************/
/*! exports provided: ItensDePedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItensDePedidoComponent", function() { return ItensDePedidoComponent; });
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

var ItensDePedidoComponent = /** @class */ (function () {
    function ItensDePedidoComponent() {
        this.aumentarQuantidade = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.diminuirQuantidade = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItensDePedidoComponent.prototype.ngOnInit = function () {
    };
    ItensDePedidoComponent.prototype.emitAumentarQuantidade = function (item) {
        this.aumentarQuantidade.emit(item);
    };
    ItensDePedidoComponent.prototype.emitDiminuirQuantidade = function (item) {
        this.diminuirQuantidade.emit(item);
    };
    ItensDePedidoComponent.prototype.emitRemover = function (item) {
        this.remover.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItensDePedidoComponent.prototype, "itens", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItensDePedidoComponent.prototype, "aumentarQuantidade", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItensDePedidoComponent.prototype, "diminuirQuantidade", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItensDePedidoComponent.prototype, "remover", void 0);
    ItensDePedidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-itens-de-pedido',
            template: __webpack_require__(/*! ./itens-de-pedido.component.html */ "./src/app/pedido/itens-de-pedido/itens-de-pedido.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ItensDePedidoComponent);
    return ItensDePedidoComponent;
}());



/***/ }),

/***/ "./src/app/pedido/pedido.component.html":
/*!**********************************************!*\
  !*** ./src/app/pedido/pedido.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n</section>\n\n<section class=\"content\">\n  <section class=\"invoice\">\n\n    <form novalidate [formGroup]=\"formularioDePedido\">\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <h2 class=\"page-header\">\n            <i class=\"fa fa-shopping-cart\"></i> Finalize o seu pedido\n          </h2>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-9\">\n          <p class=\"lead\">Dados do cliente:</p>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-3\">\n          <span class=\"help-block pull-right has-error-block\" *ngIf=\"formularioDePedido.hasError('emailDiferente')\">\n            <i class=\"fa fa-remove\"> E-mails não conferem</i>\n          </span>\n        </div>\n\n        <div class=\"col-sm-6 col-xs-12\">\n          <mt-input-container errorMessage=\"Campo Obrigatório, pelo menos 5 caracteres.\" label=\"Nome\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"nome\" placeholder=\"Nome\" autocomplete=\"off\" />\n          </mt-input-container>\n        </div>\n\n        <div class=\"col-sm-3 col-xs-6\">\n          <mt-input-container errorMessage=\"E-mail inválido.\" label=\"Email\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" autocomplete=\"off\" />\n          </mt-input-container>\n        </div>\n\n        <div class=\"col-sm-3 col-xs-6\">\n          <mt-input-container errorMessage=\"E-mail inválido.\" label=\"Confirmação do email\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"emailConfirmacao\"\n              placeholder=\"Confirmação do email\" autocomplete=\"off\" />\n          </mt-input-container>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <p class=\"lead\">Endereço de Entrega:</p>\n        </div>\n\n        <div class=\"col-sm-6 col-xs-12\">\n          <mt-input-container errorMessage=\"Campo Obrigatório, pelo menos 5 caracteres.\" label=\"Endereço\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"endereco\" placeholder=\"Endereço\"\n              autocomplete=\"off\" />\n          </mt-input-container>\n        </div>\n\n        <div class=\"col-sm-3 col-xs-6\">\n          <mt-input-container errorMessage=\"Obrigatório e somente números.\" label=\"Número\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"numero\" placeholder=\"Número\" autocomplete=\"off\"\n              pattern=\"^[0-9]*$\">\n          </mt-input-container>\n        </div>\n\n        <div class=\"col-sm-3 col-xs-6\">\n          <mt-input-container>\n            <input type=\"text\" class=\"form-control\" formControlName=\"enderecoOpcional\" placeholder=\"Complemento\">\n          </mt-input-container>\n        </div>\n\n        <!-- /.col -->\n      </div>\n      <!-- /.row -->\n\n      <!-- Table row -->\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <p class=\"lead\">Itens do Pedido:</p>\n        </div>\n\n\n        <mt-itens-de-pedido [itens]=\"itensDoCarrinho()\" (aumentarQuantidade)=\"aumentarQuantidade($event)\"\n          (diminuirQuantidade)=\"diminuirQuantidade($event)\" (remover)=\"remover($event)\"></mt-itens-de-pedido>\n\n\n        <!-- /.col -->\n      </div>\n      <!-- /.row -->\n\n      <div class=\"row\">\n        <!-- accepted payments column -->\n        <div class=\"col-sm-6 col-xs-12\">\n          <p class=\"lead\">Formas de Pagamento:</p>\n\n          <div class=\"form-group\">\n\n            <mt-radio [options]=\"opcoesDePagamento\" formControlName=\"opcaoDePagamento\">\n\n            </mt-radio>\n          </div>\n\n        </div>\n        <!-- /.col -->\n        <div class=\"col-sm-6 col-xs-12\">\n          <p class=\"lead\">Frete e Total:</p>\n\n          <mt-custos [frete]=\"frete\" [valorDosItens]=\"valorDosItens()\"></mt-custos>\n        </div>\n        <!-- /.col -->\n      </div>\n\n    </form>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <button [disabled]=\"!formularioDePedido.valid || itensDoCarrinho().length === 0\"\n          class=\"btn btn-success pull-right\" (click)=\"finalizarPedido(formularioDePedido.value)\">\n          <i class=\"fa fa-credit-card\"></i> Concluir\n          Pedido\n        </button>\n      </div>\n    </div>\n\n  </section>\n</section>\n"

/***/ }),

/***/ "./src/app/pedido/pedido.component.ts":
/*!********************************************!*\
  !*** ./src/app/pedido/pedido.component.ts ***!
  \********************************************/
/*! exports provided: PedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoComponent", function() { return PedidoComponent; });
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido.service */ "./src/app/pedido/pedido.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pedido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido.model */ "./src/app/pedido/pedido.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PedidoComponent = /** @class */ (function () {
    function PedidoComponent(pedidoService, router, formBuilder) {
        this.pedidoService = pedidoService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.emailPadrao = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numeroPadrao = /^[0-9]*$/;
        this.frete = 8;
        this.opcoesDePagamento = [
            {
                label: 'Dinheiro',
                value: 'MON'
            },
            {
                label: 'Cartão de Débito',
                value: 'DEB'
            },
            {
                label: 'Cartão Refeição',
                value: 'REF'
            }
        ];
    }
    PedidoComponent_1 = PedidoComponent;
    PedidoComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmacao = group.get('emailConfirmacao');
        if (!email || !emailConfirmacao) {
            return undefined;
        }
        if (email.value !== emailConfirmacao.value) {
            return { emailDiferente: true };
        }
        return undefined;
    };
    PedidoComponent.prototype.ngOnInit = function () {
        this.formularioDePedido = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]
            }),
            email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPadrao)]),
            emailConfirmacao: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPadrao)]),
            endereco: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            numero: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.numeroPadrao)]),
            enderecoOpcional: this.formBuilder.control(''),
            opcaoDePagamento: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        }, {
            validators: [PedidoComponent_1.equalsTo],
            updateOn: 'blur'
        });
    };
    PedidoComponent.prototype.valorDosItens = function () {
        return this.pedidoService.valorDosItens();
    };
    PedidoComponent.prototype.itensDoCarrinho = function () {
        return this.pedidoService.itensDoCarrinho();
    };
    PedidoComponent.prototype.aumentarQuantidade = function (item) {
        this.pedidoService.aumentarQuantidade(item);
    };
    PedidoComponent.prototype.diminuirQuantidade = function (item) {
        this.pedidoService.diminuirQuantidade(item);
    };
    PedidoComponent.prototype.remover = function (item) {
        this.pedidoService.remover(item);
    };
    PedidoComponent.prototype.isPedidoCompleto = function () {
        return this.pedidoId !== undefined;
    };
    PedidoComponent.prototype.finalizarPedido = function (pedido) {
        var _this = this;
        pedido.itensDePedido = this.itensDoCarrinho().map(function (item) { return new _pedido_model__WEBPACK_IMPORTED_MODULE_2__["ItemDePedido"](item.quantity, item.itemMenu.id); });
        this.pedidoService.finalizarPedido(pedido)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (pedidoId) {
            _this.pedidoId = pedidoId;
        }))
            .subscribe(function (pedidoId) {
            _this.router.navigate(['/pedido-sumario']);
            _this.pedidoService.limpar();
        });
    };
    PedidoComponent = PedidoComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-pedido',
            template: __webpack_require__(/*! ./pedido.component.html */ "./src/app/pedido/pedido.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_pedido_service__WEBPACK_IMPORTED_MODULE_0__["PedidoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PedidoComponent);
    return PedidoComponent;
    var PedidoComponent_1;
}());



/***/ }),

/***/ "./src/app/pedido/pedido.model.ts":
/*!****************************************!*\
  !*** ./src/app/pedido/pedido.model.ts ***!
  \****************************************/
/*! exports provided: Pedido, ItemDePedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDePedido", function() { return ItemDePedido; });
var Pedido = /** @class */ (function () {
    function Pedido(address, number, optional, opcaoDePagamento, itensDePedido, id) {
        if (itensDePedido === void 0) { itensDePedido = []; }
        this.address = address;
        this.number = number;
        this.optional = optional;
        this.opcaoDePagamento = opcaoDePagamento;
        this.itensDePedido = itensDePedido;
        this.id = id;
    }
    return Pedido;
}());
var ItemDePedido = /** @class */ (function () {
    function ItemDePedido(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return ItemDePedido;
}());



/***/ }),

/***/ "./src/app/pedido/pedido.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pedido/pedido.module.ts ***!
  \*****************************************/
/*! exports provided: PedidoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoModule", function() { return PedidoModule; });
/* harmony import */ var app_pedido_sair_tela_pedido_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pedido/sair-tela-pedido.guard */ "./src/app/pedido/sair-tela-pedido.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedido.component */ "./src/app/pedido/pedido.component.ts");
/* harmony import */ var _itens_de_pedido_itens_de_pedido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itens-de-pedido/itens-de-pedido.component */ "./src/app/pedido/itens-de-pedido/itens-de-pedido.component.ts");
/* harmony import */ var _custos_custos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custos/custos.component */ "./src/app/pedido/custos/custos.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ROUTES = [
    {
        path: '',
        component: _pedido_component__WEBPACK_IMPORTED_MODULE_4__["PedidoComponent"],
        canDeactivate: [app_pedido_sair_tela_pedido_guard__WEBPACK_IMPORTED_MODULE_0__["SairTelaPedidoGuard"]]
    }
];
var PedidoModule = /** @class */ (function () {
    function PedidoModule() {
    }
    PedidoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(ROUTES)
            ],
            declarations: [
                _pedido_component__WEBPACK_IMPORTED_MODULE_4__["PedidoComponent"],
                _itens_de_pedido_itens_de_pedido_component__WEBPACK_IMPORTED_MODULE_5__["ItensDePedidoComponent"],
                _custos_custos_component__WEBPACK_IMPORTED_MODULE_6__["CustosComponent"]
            ]
        })
    ], PedidoModule);
    return PedidoModule;
}());



/***/ })

}]);
//# sourceMappingURL=pedido-pedido-module.js.map