(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-content-wrapper\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" [hidden]=\"hiddenbar()\">\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Início</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Menu\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/usuarioList']\" routerLinkActive=\"router-link-active\">Usuários</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">Personagens</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Totem</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Suplementos</a>\r\n            \r\n\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"sair()\">Sair</a>\r\n        </li>\r\n        <li >\r\n          <a class=\"nav-link disabled welcome\">Bem vindo {{nomeUsuarioLogado()}}! </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/usuario/usuario-add/usuario-add.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/usuario/usuario-add/usuario-add.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Tela de usuario</h3>\r\n\r\n\r\n<form style=\"padding: 10px\" #validateForm=\"ngForm\">\r\n\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-1\">\r\n\t\t\t<label for=\"id\">ID</label>\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"usuario.id\" class=\"form-control\" id=\"id\" name=\"id\" readonly=\"true\"\r\n\t\t\t\tautocomplete=\"false\">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t<label for=\"nome\">Nome</label>\r\n\t\t\t<span style=\"color: red; font-size: 23px;\" *ngIf=\"nomeValidate.invalid\">*</span>\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"usuario.nome\" #nomeValidate=\"ngModel\" class=\"form-control\" id=\"nome\"\r\n\t\t\t\tname=\"nome\" required=\"true\" autocomplete=\"false\">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"login\">Login</label>\r\n\t\t\t<span style=\"color: red; font-size: 23px;\" *ngIf=\"loginValidate.invalid\">*</span>\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"usuario.login\" #loginValidate=\"ngModel\" class=\"form-control\" id=\"login\"\r\n\t\t\t\tname=\"login\" required=\"true\" autocomplete=\"false\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"senha\">Senha</label>\r\n\t\t\t<span style=\"color: red; font-size: 23px;\" *ngIf=\"senhaValidate.invalid\">*</span>\r\n\t\t\t<input type=\"password\" [(ngModel)]=\"usuario.senha\" #senhaValidate=\"ngModel\" class=\"form-control\" id=\"senha\"\r\n\t\t\t\tname=\"senha\" required=\"true\" autocomplete=\"false\">\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"card test-center\">\r\n\t\t<div class=\"card-header\">\r\n\t\t\tTelefone contato\r\n\t\t</div>\r\n\t\t<div class=\"card-body\" style=\"padding-left: 1px;\">\r\n\t\t\t<div class=\"form-row\">\r\n\t\t\t\t<div class=\"form-group col-md-3\">\r\n\t\t\t\t\t<input type=\"text\" mask=\"(00) 0 0000-0000\" class=\"form-control\" [(ngModel)]=\"telefone.numero\" id=\"numero\" name=\"numero\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group col-md-2\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"addfone()\">Adicionar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<table class=\"table\">\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let fone of usuario.telefones; let i = index\">\r\n\t\t\t\t<td>{{fone.id}}</td>\r\n\t\t\t\t<td>{{fone.numero | mask:'00 0 0000-0000' }}</td>\r\n\t\t\t\t<td><button class=\"btn btn-danger\" (click)=\"deletarTelefone(fone.id, i)\">Delete</button></td>\r\n\t\t\t</tr>\r\n\r\n\t\t</tbody>\r\n\t</table>\r\n\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/usuarioList']\"\r\n\t\t\t\trouterLinkActive=\"router-link-active\">Voltar</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" style=\"margin-left: 10px;\" (click)=\"novo()\">Novo</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"validateForm.invalid\" style=\"margin-left: 10px;\"\r\n\t\t\t\t(click)=\"salvarUser()\">Salvar</button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</form>\r\n\r\n\r\n<form>\r\n<h3 class=\"rodape2\" >© Copyright 2020 Lucas Afonso Bello</h3>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/usuario/usuario/usuario.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/usuario/usuario/usuario.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br />\r\n<br />\r\n\r\n<form class=\"form-inline\">\r\n\t<div class=\"form-group mx-sm-3 mb-2\">\r\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome\" id=\"nome\" name=\"nome\"\r\n\t\t\tplaceholder=\"Pesquisa por Nome\">\r\n\t</div>\r\n\t<button type=\"button\" (click)=\"findUsuario()\" class=\"btn btn-primary mb-2\">Buscar</button>\r\n\t<button type=\"button\" [routerLink]=\"['/usuarioAdd']\" routerLinkActive=\"router-link-active\" style=\"margin-left: 5px\"\r\n\t\tclass=\"btn btn-primary mb-2\">Novo</button>\r\n</form>\r\n\r\n<br />\r\n<br />\r\n\r\n<div style=\"max-height:390px; overflow-y:scroll;position:relative;\">\r\n\t<table class=\"table\">\r\n\r\n\t\t<thead class=\"thread-dark\">\r\n\t\t\t<th scope=\"col\">ID</th>\r\n\t\t\t<th scope=\"col\">Nome</th>\r\n\t\t\t<th scope=\"col\">Login</th>\r\n\t\t\t<th scope=\"col\">Editar</th>\r\n\t\t\t<th scope=\"col\">Remover</th>\r\n\t\t</thead>\r\n\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let user of usuarios\">\r\n\t\t\t\t<td>{{user.id}}</td>\r\n\t\t\t\t<td>{{user.nome}}</td>\r\n\t\t\t\t<td>{{user.login}}</td>\r\n\t\t\t\t<td><button [routerLink]=\"['/usuarioAdd' , user.id]\" routerLinkActive=\"router-link-active\"\r\n\t\t\t\t\t\tclass=\"btn btn-warning\">Editar</button> </td>\r\n\t\t\t\t<td><button (click)=\"deleteUsuario(user.id)\" class=\"btn btn-danger\">Remover</button> </td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\r\n\r\n\t</table>\r\n</div>\r\n\r\n<h3 class=\"rodape2\">© Copyright 2020 Lucas Afonso Bello</h3>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n<h3 class=\"rodape2\" >© Copyright 2020 Lucas Afonso Bello</h3>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n\r\n  <div class=\"sidenav\">\r\n\r\n    <img src=\"assets/images/login_img.jpg\" style=\"width: 100%\">\r\n    <h2 class=\"blood-font\">Sangue garou</h2>\r\n    <h3 class=\"rodape rambler-font\" style=\"color: #FFF;\">Uma crônica escrita por Lucas Bello</h3>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"main\">\r\n\r\n    <div class=\"login-main-text\">\r\n      <label class=\"login-main-text h4\" for=\"user\">Usuário:</label>\r\n      <input (keypress)=\"keyPress($event)\" type=\"email\"  class=\"form-control\" #email=\"ngModel\"  [(ngModel)]=\"usuario.login\" id=\"login\" name=\"login\"\r\n        required>\r\n      <div *ngIf=\"email.invalid\" class=\"alert alert-danger\">\r\n        Usuário deve ser informado\r\n      </div>\r\n\r\n      <label class=\"login-main-text h4\" for=\"senha\">Senha:</label>\r\n      <input (keypress)=\"keyPress($event)\"  type=\"password\" class=\"form-control\" #senha=\"ngModel\" [(ngModel)]=\"usuario.senha\" id=\"senha\" name=\"senha\"\r\n        required>\r\n      <div *ngIf=\"senha.invalid\" class=\"alert alert-danger\">\r\n        Senha deve ser informada\r\n      </div>\r\n      <button style=\"margin-top: 5%;\" type=\"button\" [disabled]=\"senha.invalid || email.invalid\" class=\"btn btn-black\" (click)=\"login()\">Acessar</button>\r\n\r\n    </div>\r\n    <div class=\"login-main-text\">\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n<h3 class=\"rodape2\" style=\"color: #000;\">© Copyright 2020 Lucas Afonso Bello</h3>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-constants.ts":
/*!**********************************!*\
  !*** ./src/app/app-constants.ts ***!
  \**********************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppConstants {
    //"https://rpgprojectbello.herokuapp.com"
    ////"http://localhost:8080/cursospringrestapi"
    static get baseServidor() { return "https://rpgprojectbello.herokuapp.com"; }
    static get baseLogin() { return this.baseServidor + "/login"; }
    static get baseUrl() { return this.baseServidor + "/usuario/"; }
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form{\r\n\r\n\tpadding: 15% 30% 10% 30%;\r\n}\r\n\r\n.welcome{\r\n\r\n\ttext-align: right;\r\n\tposition: absolute;\r\n\tright: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsd0JBQXdCO0FBQ3pCOztBQUVBOztDQUVDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsUUFBUTtBQUNUIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG5cclxuXHRwYWRkaW5nOiAxNSUgMzAlIDEwJSAzMCU7XHJcbn1cclxuXHJcbi53ZWxjb21le1xyXG5cclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/usuario.service */ "./src/app/service/usuario.service.ts");




let AppComponent = class AppComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.title = 'Sangue Garou';
    }
    ngOnInit() {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
    }
    sair() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
    hiddenbar() {
        if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
            return false;
        }
        else {
            return true;
        }
    }
    nomeUsuarioLogado() {
        if (localStorage.getItem("loginacesso") !== null) {
            this.usuarioService.findUsuarioByLogin(localStorage.getItem("loginacesso")).subscribe(data => {
                this.usuario = data;
            });
            return this.usuario.nome;
        }
        return "";
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appRouters, routes, optionsMask, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouters", function() { return appRouters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsMask", function() { return optionsMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _service_header_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/header-interceptor.service */ "./src/app/service/header-interceptor.service.ts");
/* harmony import */ var _component_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/usuario/usuario/usuario.component */ "./src/app/component/usuario/usuario/usuario.component.ts");
/* harmony import */ var _component_usuario_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/usuario/usuario-add/usuario-add.component */ "./src/app/component/usuario/usuario-add/usuario-add.component.ts");
/* harmony import */ var _service_guardian_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/guardian.guard */ "./src/app/service/guardian.guard.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");














const appRouters = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_service_guardian_guard__WEBPACK_IMPORTED_MODULE_12__["GuardianGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'usuarioList', component: _component_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_10__["UsuarioComponent"], canActivate: [_service_guardian_guard__WEBPACK_IMPORTED_MODULE_12__["GuardianGuard"]] },
    { path: 'usuarioAdd', component: _component_usuario_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioAddComponent"], canActivate: [_service_guardian_guard__WEBPACK_IMPORTED_MODULE_12__["GuardianGuard"]] },
    { path: 'usuarioAdd/:id', component: _component_usuario_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioAddComponent"], canActivate: [_service_guardian_guard__WEBPACK_IMPORTED_MODULE_12__["GuardianGuard"]] },
];
const routes = _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRouters);
const optionsMask = {};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _component_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_10__["UsuarioComponent"],
            _component_usuario_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioAddComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            routes,
            _service_header_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["HttpInterceptorModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot(optionsMask)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/usuario/usuario-add/usuario-add.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/usuario/usuario-add/usuario-add.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rodape2 ::ng-deep {\r\nvertical-align: bottom;\r\n  position: fixed;\r\n  bottom: 0;\r\n  padding-left: 40%;\r\n  padding-right: 40%;\r\n\tfont-size: 15px;\r\n\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzdWFyaW8vdXN1YXJpby1hZGQvdXN1YXJpby1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLHNCQUFzQjtFQUNwQixlQUFlO0VBQ2YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkIsZUFBZTs7O0FBR2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3VzdWFyaW8vdXN1YXJpby1hZGQvdXN1YXJpby1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb2RhcGUyIDo6bmctZGVlcCB7XHJcbnZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MCU7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cclxuICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/usuario/usuario-add/usuario-add.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/usuario/usuario-add/usuario-add.component.ts ***!
  \************************************************************************/
/*! exports provided: UsuarioAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioAddComponent", function() { return UsuarioAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var src_app_model_telefone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/telefone */ "./src/app/model/telefone.ts");






let UsuarioAddComponent = class UsuarioAddComponent {
    constructor(routeActive, userService) {
        this.routeActive = routeActive;
        this.userService = userService;
        this.usuario = new src_app_model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.telefone = new src_app_model_telefone__WEBPACK_IMPORTED_MODULE_5__["Telefone"]();
    }
    ngOnInit() {
        let id = this.routeActive.snapshot.paramMap.get('id');
        if (id != null) {
            console.log('Valor sendo editado:' + id);
            this.userService.getUsuario(id).subscribe(data => {
                this.usuario = data;
            });
        }
        else {
            console.log('Valor novo');
        }
    }
    salvarUser() {
        if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
            /*
            Atualiza usuário
            */
            this.userService.updateUsuario(this.usuario).subscribe(data => {
                console.info("Atualizou: " + data);
            });
            this.novo();
        }
        else {
            /*
            Novo Registro
            */
            this.userService.saveUsuario(this.usuario).subscribe(data => {
                console.info("Inseriu: " + data);
            });
            this.novo();
        }
    }
    deletarTelefone(id, i) {
        if (id !== null && confirm("Deseja remover?")) {
            if (id === null) {
                this.usuario.telefones.splice(i, 1);
                return;
            }
            this.userService.removeTelefone(id).subscribe(data => {
                this.usuario.telefones.splice(i, 1);
                console.info("Telefone removido = " + data);
            });
        }
    }
    addfone() {
        if (this.usuario.telefones === undefined) {
            this.usuario.telefones = new Array();
        }
        this.usuario.telefones.push(this.telefone);
        this.telefone = new src_app_model_telefone__WEBPACK_IMPORTED_MODULE_5__["Telefone"]();
    }
    novo() {
        this.usuario = new src_app_model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
};
UsuarioAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
];
UsuarioAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuario-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/usuario/usuario-add/usuario-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuario-add.component.css */ "./src/app/component/usuario/usuario-add/usuario-add.component.css")).default]
    })
], UsuarioAddComponent);



/***/ }),

/***/ "./src/app/component/usuario/usuario/usuario.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/usuario/usuario/usuario.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rodape2 ::ng-deep {\r\nvertical-align: bottom;\r\n  position: fixed;\r\n  bottom: 0;\r\n  padding-left: 40%;\r\n  padding-right: 40%;\r\n\tfont-size: 15px;\r\n\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzdWFyaW8vdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxzQkFBc0I7RUFDcEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CLGVBQWU7OztBQUdoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c3VhcmlvL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvZGFwZTIgOjpuZy1kZWVwIHtcclxudmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogNDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwJTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblxyXG4gIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/component/usuario/usuario/usuario.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/usuario/usuario/usuario.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");



let UsuarioComponent = class UsuarioComponent {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
        this.usuarioService.getUsuarioList().subscribe(data => {
            this.usuarios = data;
        });
    }
    deleteUsuario(id) {
        this.usuarioService.deleteUsuario(id).subscribe(data => {
            console.log("Retorno do método DELETE:" + data);
            //Recarrega lista
            this.ngOnInit();
        });
    }
    findUsuario() {
        this.usuarioService.findUsuarioByNome(this.nome).subscribe(data => {
            this.usuarios = data;
        });
    }
};
UsuarioComponent.ctorParameters = () => [
    { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/usuario/usuario/usuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuario.component.css */ "./src/app/component/usuario/usuario/usuario.component.css")).default]
    })
], UsuarioComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rodape2 ::ng-deep {\r\nvertical-align: bottom;\r\n  position: absolute;\r\n  bottom: 0;\r\n  padding-left: 40%;\r\n  padding-right: 40%;\r\n\tfont-size: 15px;\r\n\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxzQkFBc0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CLGVBQWU7OztBQUdoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvZGFwZTIgOjpuZy1kZWVwIHtcclxudmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogNDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwJTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblxyXG4gIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {}\r\n\r\nh2 {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}\r\n\r\n.rodape {\r\nvertical-align: bottom;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 10px;\r\n  \r\n}\r\n\r\n.rodape2 {\r\nvertical-align: bottom;\r\n  position: absolute;\r\n  bottom: 0;\r\n  padding-left: 50%;\r\n  padding-right: 20%;\r\n\tfont-size: 15px;\r\n\r\n  \r\n}\r\n\r\n.blood-font {\r\n  font-family: 'BloodThirst-GWZy';\r\n  color: red;\r\n  font-size: 70px;\r\n  align-content: center;\r\n  padding-top: 10%;\r\n}\r\n\r\n.rambler-font {\r\n  font-family: 'Rambler';\r\n  color: white;\r\n  align-content: center;\r\n  padding-top: 10%;\r\n  font-size: 25px;\r\n}\r\n\r\n.main-head {\r\n  height: 150px;\r\n  background: #FFF;\r\n\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  background-color: #000;\r\n  overflow-x: hidden;\r\n  padding-top: 28px;\r\n}\r\n\r\n.main {\r\n  padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 380px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n  .login-form {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .register-form {\r\n    margin-top: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 380px) {\r\n  .main {\r\n    margin-left: 35%;\r\n  }\r\n\r\n  .sidenav {\r\n    width: 30%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .login-form {\r\n    margin-top: 80%;\r\n  }\r\n\r\n  .register-form {\r\n    margin-top: 20%;\r\n  }\r\n}\r\n\r\n@font-face {\r\n  font-family: 'BloodThirst-GWZy';\r\n  src: url('/assets/fonts/BloodThirst-GWZy.ttf');\r\n}\r\n\r\n@font-face {\r\n\r\n    font-family: 'Rambler';\r\n  src: url('/assets/fonts/The Rambler.ttf');\r\n}\r\n\r\n.login-main-text {\r\n  margin-top: 5%;\r\n  margin-right: 5%;\r\n  color: #000;\r\n}\r\n\r\n.login-main-text h2 {\r\n  font-weight: 300;\r\n}\r\n\r\n.btn-black {\r\n  background-color: #000 !important;\r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNOztBQUVOO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBSUE7QUFDQSxzQkFBc0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXOztBQUViOztBQUVBO0FBQ0Esc0JBQXNCO0VBQ3BCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQixlQUFlOzs7QUFHaEI7O0FBR0E7RUFDRSwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDhDQUE4QztBQUNoRDs7QUFFQTs7SUFFSSxzQkFBc0I7RUFDeEIseUNBQXlDO0FBQzNDOztBQUdBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge31cclxuXHJcbmgyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5yb2RhcGUge1xyXG52ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5yb2RhcGUyIHtcclxudmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblxyXG4gIFxyXG59XHJcblxyXG5cclxuLmJsb29kLWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmxvb2RUaGlyc3QtR1daeSc7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5yYW1ibGVyLWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFtYmxlcic7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLm1haW4taGVhZCB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG5cclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMjhweDtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDM4MHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gIC5sb2dpbi1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICB9XHJcblxyXG4gIC5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmxvb2RUaGlyc3QtR1daeSc7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvQmxvb2RUaGlyc3QtR1daeS50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdSYW1ibGVyJztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9UaGUgUmFtYmxlci50dGYnKTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1tYWluLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLXRleHQgaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5idG4tYmxhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login-service.service */ "./src/app/service/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.usuario = { login: '', senha: '' };
    }
    login() {
        this.loginService.login(this.usuario);
    }
    ngOnInit() {
        if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
            this.router.navigate(['home']);
        }
    }
    keyPress(event) {
        const inputChar = String.fromCharCode(event.charCode);
        if (event.charCode == '13') {
            this.loginService.login(this.usuario);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/model/telefone.ts":
/*!***********************************!*\
  !*** ./src/app/model/telefone.ts ***!
  \***********************************/
/*! exports provided: Telefone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telefone", function() { return Telefone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Telefone {
}


/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/service/guardian.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/service/guardian.guard.ts ***!
  \*******************************************/
/*! exports provided: GuardianGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardianGuard", function() { return GuardianGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.service */ "./src/app/service/usuario.service.ts");



let GuardianGuard = class GuardianGuard {
    constructor(userService) {
        this.userService = userService;
    }
    canActivate(next, state) {
        return this.userService.userauthenticate();
    }
};
GuardianGuard.ctorParameters = () => [
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
GuardianGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GuardianGuard);



/***/ }),

/***/ "./src/app/service/header-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/header-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: HeaderInterceptorService, HttpInterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptorService", function() { return HeaderInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorModule", function() { return HttpInterceptorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





let HeaderInterceptorService = class HeaderInterceptorService {
    constructor() { }
    intercept(req, next) {
        if (localStorage.getItem('token') != null) {
            const token = 'Bearer ' + localStorage.getItem('token');
            const tokenRequest = req.clone({
                headers: req.headers.set('Authorization', token)
            });
            return next.handle(tokenRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processaError));
        }
        else {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && (event.status === 200 || event.status === 201)) {
                    console.info('Sucesso na opera��o');
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processaError));
        }
    }
    processaError(error) {
        let errorMessage = 'Erro desconhecido';
        if (error.error instanceof ErrorEvent) {
            console.error(error.error);
            errorMessage = 'Error: ' + error.error.error;
        }
        else {
            errorMessage = 'C�digo: ' + error.error.code + '\nMensagem' + error.error.error;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
HeaderInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HeaderInterceptorService);

let HttpInterceptorModule = class HttpInterceptorModule {
};
HttpInterceptorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: HeaderInterceptorService,
                multi: true,
            },],
    })
], HttpInterceptorModule);



/***/ }),

/***/ "./src/app/service/login-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/login-service.service.ts ***!
  \**************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-constants */ "./src/app/app-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





let LoginServiceService = class LoginServiceService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(usuario) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseLogin, JSON.stringify(usuario)).subscribe(data => {
            /*Corpo do retorno http*/
            // tslint:disable-next-line: no-console
            var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
            localStorage.setItem("token", token);
            //Grava login utilizado para acessar
            var usuarioLogado;
            usuarioLogado = usuario;
            localStorage.setItem("loginacesso", usuarioLogado.login.toString());
            console.info("Login aceito de " + usuarioLogado.login.toString());
            this.router.navigate(['home']);
        }, error => {
            console.error("Erro ao fazer login");
            alert('Acesso negado!');
        });
    }
};
LoginServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginServiceService);



/***/ }),

/***/ "./src/app/service/usuario.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/usuario.service.ts ***!
  \********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-constants */ "./src/app/app-constants.ts");




let UsuarioService = class UsuarioService {
    constructor(http) {
        this.http = http;
    }
    getUsuarioList() {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl);
    }
    deleteUsuario(id) {
        return this.http.delete(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + id, { responseType: 'text' });
    }
    getUsuario(id) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + id);
    }
    findUsuarioByNome(nome) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + "usuarioByNome/" + nome);
    }
    findUsuarioByLogin(login) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + "usuarioByLogin/" + login);
    }
    saveUsuario(usuario) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl, usuario);
    }
    updateUsuario(usuario) {
        return this.http.put(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl, usuario);
    }
    removeTelefone(id) {
        return this.http.delete(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + "removerTelefone/" + id, { responseType: 'text' });
    }
    userauthenticate() {
        if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
            return true;
        }
        else {
            return false;
        }
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lucas.afonso\Workspaces\Angular IDE\RPGCompendium\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map