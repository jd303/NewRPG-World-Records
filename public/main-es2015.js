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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-main/page-main.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-main/page-main.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let data of sDataHandler.data | keyvalue\">\n\t{{data.key}}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-spelleffects/page-spelleffects.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-spelleffects/page-spelleffects.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui\">\n\t<h1>Choose sources to display</h1>\n\t<div class=\"option\"><input type=\"checkbox\" id=\"source-innate\" (change)=\"updateSources('source-innate');\" [(ngModel)]=\"showing.innate\"><label for=\"source-innate\">Innate</label></div>\n\t<div class=\"option\"><input type=\"checkbox\" id=\"source-flow\" (change)=\"updateSources('source-flow');\" [(ngModel)]=\"showing.flow\"><label for=\"source-flow\">The Flow</label></div>\n\t<div class=\"option\"><input type=\"checkbox\" id=\"source-tapped\" (change)=\"updateSources('source-tapped');\" [(ngModel)]=\"showing.tapped\"><label for=\"source-tapped\">Tapped</label></div>\n\t<div class=\"option\"><input type=\"checkbox\" id=\"source-life\" (change)=\"updateSources('source-life');\" [(ngModel)]=\"showing.life\"><label for=\"source-life\">Life</label></div>\n\t<div class=\"option\"><input type=\"checkbox\" id=\"source-yearns\" (change)=\"updateSources('source-yearns');\" [(ngModel)]=\"showing.yearns\"><label for=\"source-yearns\">That which yearns to grow</label></div>\n\t<div class=\"option\"><input type=\"checkbox\" id=\"source-granted\" (change)=\"updateSources('source-granted');\" [(ngModel)]=\"showing.granted\"><label for=\"source-granted\">Granted</label></div>\n</div>\n\n<h1>MAGIC: Effects</h1>\n\n<div class=\"spell_effect\" *ngFor=\"let se of spell_effects; let i = index\" [id]=\"'se'+i\">\n\t<header>\n\t\t<div class=\"toggle\"><input type=\"checkbox\" (click)=\"toggleDisplayClass('se'+i)\"></div>\n\t\t<div class=\"box-purchased\"></div>\n\t\t<div class=\"name\">{{se.name}}</div>\n\t\t<div class=\"desc\">{{se.desc}}</div>\n\t\t<div class=\"save\" *ngIf=\"se.save\">SV {{se.save}}</div>\n\t\t<div class=\"time\"><img src=\"assets/images/ico.time.svg\">{{se.time}}</div>\n\t</header>\n\t<div class=\"row-effects\">\n\t\t<div class=\"shapes\">\n\t\t\t<div class=\"shape\" *ngFor=\"let shape of se.shapes | keyvalue\">{{shape.key}} {{shape.value !== null && shape.value || \"-\"}}</div>\n\t\t</div>\n\t\t<div class=\"effects\">\n\t\t\t<div class=\"effect\" *ngFor=\"let effect of se.effects\"><span class=\"dc\">DC {{effect.dc}}</span> <span>{{effect.effect}}</span></div>\n\t\t</div>\n\t</div>\n</div>");

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_main_page_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-main/page-main.component */ "./src/app/page-main/page-main.component.ts");
/* harmony import */ var _page_spelleffects_page_spelleffects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-spelleffects/page-spelleffects.component */ "./src/app/page-spelleffects/page-spelleffects.component.ts");

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  PAGE IMPORTS


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE ROUTES
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _page_main_page_main_component__WEBPACK_IMPORTED_MODULE_3__["PageMainComponent"] },
    { path: 'spelleffects', component: _page_spelleffects_page_spelleffects_component__WEBPACK_IMPORTED_MODULE_4__["PageSpellEffectsComponent"] },
];
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE MODULE
let AppRoutingModule = 
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
    //////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////  EXPORT CLASS
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'world-records';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_main_page_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-main/page-main.component */ "./src/app/page-main/page-main.component.ts");
/* harmony import */ var _page_spelleffects_page_spelleffects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-spelleffects/page-spelleffects.component */ "./src/app/page-spelleffects/page-spelleffects.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _page_main_page_main_component__WEBPACK_IMPORTED_MODULE_7__["PageMainComponent"],
            _page_spelleffects_page_spelleffects_component__WEBPACK_IMPORTED_MODULE_8__["PageSpellEffectsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/page-main/page-main.component.scss":
/*!****************************************************!*\
  !*** ./src/app/page-main/page-main.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbWFpbi9wYWdlLW1haW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/page-main/page-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page-main/page-main.component.ts ***!
  \**************************************************/
/*! exports provided: PageMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMainComponent", function() { return PageMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_transport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-transport.service */ "./src/app/services/data-transport.service.ts");
/* harmony import */ var _services_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-handler.service */ "./src/app/services/data-handler.service.ts");

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS



//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE COMPONENT
let PageMainComponent = 
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
class PageMainComponent {
    ////////////////////////////////////
    constructor(sDataTransport, sDataHandler) {
        this.sDataTransport = sDataTransport;
        this.sDataHandler = sDataHandler;
    }
    ngOnInit() {
        this.sDataHandler.dataSub$.subscribe(this.dataUpdate);
        this.sDataTransport.get();
        this.sDataTransport.save();
    }
    ////////////////////////////////////
    dataUpdate(data) {
        console.log("Data updated", data);
    }
};
PageMainComponent.ctorParameters = () => [
    { type: _services_data_transport_service__WEBPACK_IMPORTED_MODULE_2__["DataTransportService"] },
    { type: _services_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["DataHandlerService"] }
];
PageMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-main/page-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-main.component.scss */ "./src/app/page-main/page-main.component.scss")).default]
    })
    //////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////  EXPORT CLASS
], PageMainComponent);



/***/ }),

/***/ "./src/app/page-spelleffects/page-spelleffects.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/page-spelleffects/page-spelleffects.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ui {\n  margin-bottom: 15px;\n}\n.ui .option {\n  display: inline-block;\n  padding: 5px;\n  margin: 5px 5px 5px 0;\n  border-radius: 6px;\n  background: #f4f4f4;\n}\nh1 {\n  font-size: 1.35rem;\n  font-weight: bold;\n  font-style: italic;\n  margin-bottom: 2px;\n}\n.spell_effect {\n  margin-bottom: 10px;\n  color: #333;\n}\n.spell_effect.hidden {\n  opacity: 0.5;\n}\n.spell_effect header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 3px;\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.06);\n}\n.spell_effect header .box-purchased {\n  display: block;\n  flex: none;\n  width: 12px;\n  height: 12px;\n  margin-right: 6px;\n  border: 2px solid black;\n  background: white;\n}\n.spell_effect header .name {\n  flex: none;\n  color: #000;\n  font-size: 0.85rem;\n  font-weight: bold;\n  margin-right: 10px;\n}\n.spell_effect header .desc {\n  flex: 1;\n  font-size: 0.65rem;\n}\n.spell_effect header .save, .spell_effect header .time {\n  flex: none;\n  width: 50px;\n  font-size: 0.8rem;\n  overflow: hidden;\n}\n.spell_effect header .save {\n  height: 100%;\n  line-height: 100%;\n  padding: 3px;\n  text-align: center;\n  border-radius: 4px;\n  background: #fff;\n}\n.spell_effect header .time {\n  width: 80px;\n  white-space: nowrap;\n  line-height: 1rem;\n}\n.spell_effect header .time img {\n  height: 18px;\n  vertical-align: middle;\n}\n.spell_effect .row-effects {\n  display: flex;\n  line-height: 0.7rem;\n  align-items: center;\n  margin-top: 3px;\n}\n.spell_effect .row-effects .shapes {\n  display: flex;\n  padding-right: 4px;\n  border-right: 2px solid black;\n}\n.spell_effect .row-effects .shapes .shape {\n  display: inline-block;\n  box-sizing: border-box;\n  height: 17px;\n  font-size: 0.7rem;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 3px;\n  margin-right: 3px;\n  border-radius: 4px;\n  white-space: nowrap;\n  background: #333;\n}\n.spell_effect .row-effects .effects {\n  display: flex;\n  margin-left: 4px;\n}\n.spell_effect .row-effects .effects .effect {\n  display: inline-block;\n  font-size: 0.65rem;\n  padding: 3px;\n  margin-right: 3px;\n  overflow: hidden;\n}\n.spell_effect .row-effects .effects .effect .dc {\n  float: left;\n  box-sizing: border-box;\n  height: 17px;\n  font-size: 0.7rem;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 2px;\n  margin-right: 4px;\n  border-radius: 4px;\n  background: #333;\n}\n@media print {\n  .ui {\n    display: none;\n  }\n\n  .spell_effect.hidden {\n    display: none;\n  }\n\n  .spell_effect input {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hYyBCYWNrdXAvRG9jdW1lbnRzL01veHkgQnVzdGlvbiAtIENyZWF0aXZlL0dhbWUgRGV2ZWxvcG1lbnQvTmV3UlBHVG9vbHMvYW5ndWxhci9zcmMvYXBwL3BhZ2Utc3BlbGxlZmZlY3RzL3BhZ2Utc3BlbGxlZmZlY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlLXNwZWxsZWZmZWN0cy9wYWdlLXNwZWxsZWZmZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0FDQ0Q7QURDQztFQUNDLHFCQUFBO0VBQ0EsWUFBQTtFQUFhLHFCQUFBO0VBRWIsa0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FER0E7RUFBSyxrQkFBQTtFQUFtQixpQkFBQTtFQUFrQixrQkFBQTtFQUFtQixrQkFBQTtBQ0k3RDtBREZBO0VBRUMsbUJBQUE7RUFDQSxXQUFBO0FDSUQ7QURGQztFQUFXLFlBQUE7QUNLWjtBREhDO0VBQ0MsYUFBQTtFQUFjLG1CQUFBO0VBQ2QsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLCtCQUFBO0FDS0Y7QURIRTtFQUNDLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUFZLFlBQUE7RUFDWixpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsaUJBQUE7QUNLSDtBREZFO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixpQkFBQTtFQUMvQixrQkFBQTtBQ01IO0FESEU7RUFDQyxPQUFBO0VBQ0Esa0JBQUE7QUNLSDtBREZFO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSUg7QURERTtFQUNDLFlBQUE7RUFBYSxpQkFBQTtFQUNiLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNJSDtBRERFO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNHSDtBREZHO0VBQU0sWUFBQTtFQUFhLHNCQUFBO0FDTXRCO0FERkM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNJRjtBREZFO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNJSDtBREZHO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUFrQixXQUFBO0VBQVkseUJBQUE7RUFDOUIsWUFBQTtFQUFhLGlCQUFBO0VBQ2Isa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDT0o7QURKRTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtBQ01IO0FESkc7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUFhLGlCQUFBO0VBQ2IsZ0JBQUE7QUNPSjtBRExJO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQWlCLFdBQUE7RUFBWSx5QkFBQTtFQUM3QixZQUFBO0VBQWEsaUJBQUE7RUFDYixrQkFBQTtFQUNBLGdCQUFBO0FDVUw7QURIQTtFQUNDO0lBQU0sYUFBQTtFQ09MOztFRE5EO0lBQXVCLGFBQUE7RUNVdEI7O0VEVEQ7SUFBc0IsYUFBQTtFQ2FyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1zcGVsbGVmZmVjdHMvcGFnZS1zcGVsbGVmZmVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkge1xyXG5cdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHJcblx0Lm9wdGlvbiB7XHJcblx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdHBhZGRpbmc6NXB4OyBtYXJnaW46NXB4IDVweCA1cHggMDtcclxuXHJcblx0XHRib3JkZXItcmFkaXVzOjZweDtcclxuXHRcdGJhY2tncm91bmQ6I2Y0ZjRmNDtcclxuXHR9XHJcbn1cclxuXHJcbmgxIHsgZm9udC1zaXplOjEuMzVyZW07IGZvbnQtd2VpZ2h0OmJvbGQ7IGZvbnQtc3R5bGU6aXRhbGljOyBtYXJnaW4tYm90dG9tOjJweDsgfVxyXG5cclxuLnNwZWxsX2VmZmVjdCB7XHJcblxyXG5cdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRjb2xvcjojMzMzO1xyXG5cclxuXHQmLmhpZGRlbiB7IG9wYWNpdHk6MC41OyB9XHJcblx0XHJcblx0aGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcblx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcblx0XHRwYWRkaW5nOjNweDtcclxuXHJcblx0XHRib3JkZXItcmFkaXVzOjZweDtcclxuXHRcdGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHJcblx0XHQuYm94LXB1cmNoYXNlZCB7XHJcblx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdGZsZXg6bm9uZTtcclxuXHRcdFx0d2lkdGg6MTJweDsgaGVpZ2h0OjEycHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDo2cHg7XHJcblxyXG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOndoaXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5uYW1lIHtcclxuXHRcdFx0ZmxleDpub25lO1xyXG5cdFx0XHRjb2xvcjojMDAwOyBmb250LXNpemU6MC44NXJlbTsgZm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmRlc2Mge1xyXG5cdFx0XHRmbGV4OjE7XHJcblx0XHRcdGZvbnQtc2l6ZTowLjY1cmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5zYXZlLCAudGltZSB7XHJcblx0XHRcdGZsZXg6bm9uZTtcclxuXHRcdFx0d2lkdGg6NTBweDtcclxuXHRcdFx0Zm9udC1zaXplOjAuOHJlbTtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5zYXZlIHtcclxuXHRcdFx0aGVpZ2h0OjEwMCU7IGxpbmUtaGVpZ2h0OjEwMCU7XHJcblx0XHRcdHBhZGRpbmc6M3B4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czo0cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdH1cclxuXHJcblx0XHQudGltZSB7XHJcblx0XHRcdHdpZHRoOjgwcHg7XHJcblx0XHRcdHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6MXJlbTtcclxuXHRcdFx0aW1nIHsgaGVpZ2h0OjE4cHg7IHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgfVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnJvdy1lZmZlY3RzIHtcclxuXHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdGxpbmUtaGVpZ2h0OjAuN3JlbTtcclxuXHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6M3B4O1xyXG5cclxuXHRcdC5zaGFwZXMge1xyXG5cdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6NHB4O1xyXG5cdFx0XHRib3JkZXItcmlnaHQ6MnB4IHNvbGlkIGJsYWNrO1xyXG5cclxuXHRcdFx0LnNoYXBlIHtcclxuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdFx0XHRib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcblx0XHRcdFx0aGVpZ2h0OjE3cHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOjAuN3JlbTsgY29sb3I6I2ZmZjsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG5cdFx0XHRcdHBhZGRpbmc6M3B4OyBtYXJnaW4tcmlnaHQ6M3B4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6NHB4O1xyXG5cdFx0XHRcdHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiMzMzM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5lZmZlY3RzIHtcclxuXHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDo0cHg7XHJcblxyXG5cdFx0XHQuZWZmZWN0IHtcclxuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdFx0XHRmb250LXNpemU6MC42NXJlbTsgXHJcblx0XHRcdFx0cGFkZGluZzozcHg7IG1hcmdpbi1yaWdodDozcHg7XHJcblx0XHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cclxuXHRcdFx0XHQuZGMge1xyXG5cdFx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuXHRcdFx0XHRcdGhlaWdodDoxN3B4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOi43cmVtOyBjb2xvcjojZmZmOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjJweDsgbWFyZ2luLXJpZ2h0OjRweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6NHB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojMzMzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuXHQudWkgeyBkaXNwbGF5Om5vbmU7IH1cclxuXHQuc3BlbGxfZWZmZWN0LmhpZGRlbiB7IGRpc3BsYXk6bm9uZTsgfVxyXG5cdC5zcGVsbF9lZmZlY3QgaW5wdXQgeyBkaXNwbGF5Om5vbmU7IH1cclxufSIsIi51aSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4udWkgLm9wdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweCA1cHggNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnNwZWxsX2VmZmVjdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnNwZWxsX2VmZmVjdC5oaWRkZW4ge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc3BlbGxfZWZmZWN0IGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4uc3BlbGxfZWZmZWN0IGhlYWRlciAuYm94LXB1cmNoYXNlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnNwZWxsX2VmZmVjdCBoZWFkZXIgLm5hbWUge1xuICBmbGV4OiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNwZWxsX2VmZmVjdCBoZWFkZXIgLmRlc2Mge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDAuNjVyZW07XG59XG4uc3BlbGxfZWZmZWN0IGhlYWRlciAuc2F2ZSwgLnNwZWxsX2VmZmVjdCBoZWFkZXIgLnRpbWUge1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogNTBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3BlbGxfZWZmZWN0IGhlYWRlciAuc2F2ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc3BlbGxfZWZmZWN0IGhlYWRlciAudGltZSB7XG4gIHdpZHRoOiA4MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbn1cbi5zcGVsbF9lZmZlY3QgaGVhZGVyIC50aW1lIGltZyB7XG4gIGhlaWdodDogMThweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zcGVsbF9lZmZlY3QgLnJvdy1lZmZlY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IDAuN3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLnNwZWxsX2VmZmVjdCAucm93LWVmZmVjdHMgLnNoYXBlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG59XG4uc3BlbGxfZWZmZWN0IC5yb3ctZWZmZWN0cyAuc2hhcGVzIC5zaGFwZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cbi5zcGVsbF9lZmZlY3QgLnJvdy1lZmZlY3RzIC5lZmZlY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5zcGVsbF9lZmZlY3QgLnJvdy1lZmZlY3RzIC5lZmZlY3RzIC5lZmZlY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zcGVsbF9lZmZlY3QgLnJvdy1lZmZlY3RzIC5lZmZlY3RzIC5lZmZlY3QgLmRjIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTdweDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC51aSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zcGVsbF9lZmZlY3QuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNwZWxsX2VmZmVjdCBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/page-spelleffects/page-spelleffects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/page-spelleffects/page-spelleffects.component.ts ***!
  \******************************************************************/
/*! exports provided: PageSpellEffectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSpellEffectsComponent", function() { return PageSpellEffectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_json_spell_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/spell_effects */ "./src/assets/json/spell_effects.ts");

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE COMPONENT
let PageSpellEffectsComponent = 
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
class PageSpellEffectsComponent {
    ////////////////////////////////////
    constructor() {
        this.showing = {
            innate: true,
            flow: true,
            tapped: true,
            life: true,
            yearns: true,
            granted: true
        };
        this.all_spell_effects = _assets_json_spell_effects__WEBPACK_IMPORTED_MODULE_2__["spell_effects"];
        this.spell_effects = this.all_spell_effects.filter(this.filter.bind(this));
    }
    ////////////////////////////////////
    updateSources(event) {
        this.spell_effects = this.all_spell_effects.filter(this.filter.bind(this));
    }
    ////////////////////////////////////
    filter(spell_effect) {
        let hasSource = false;
        Object.keys(this.showing).forEach(key => {
            if (this.showing[key]) {
                if (!hasSource && spell_effect.sources[key])
                    hasSource = true;
            }
        });
        return hasSource;
    }
    ////////////////////////////////////
    toggleDisplayClass(id) {
        document.getElementById(id).classList.toggle("hidden");
    }
};
PageSpellEffectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-spelleffects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-spelleffects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-spelleffects/page-spelleffects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-spelleffects.component.scss */ "./src/app/page-spelleffects/page-spelleffects.component.scss")).default]
    })
    //////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////  EXPORT CLASS
], PageSpellEffectsComponent);



/***/ }),

/***/ "./src/app/services/data-handler.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-handler.service.ts ***!
  \**************************************************/
/*! exports provided: DataHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHandlerService", function() { return DataHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE INJECTABLE
let DataHandlerService = 
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
class DataHandlerService {
    ////////////////////////////////////
    constructor() {
        // Core
        this.data = {};
        // Onservables
        this.dataSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ////////////////////////////////////
    registerData(key, data) {
        this.data[key] = data;
        this.dataSub$.next(this.data);
    }
};
DataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    //////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////  EXPORT CLASS
], DataHandlerService);



/***/ }),

/***/ "./src/app/services/data-transport.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/data-transport.service.ts ***!
  \****************************************************/
/*! exports provided: DataTransportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransportService", function() { return DataTransportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-handler.service */ "./src/app/services/data-handler.service.ts");

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS



//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE INJECTABLE
let DataTransportService = 
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
class DataTransportService {
    ////////////////////////////////////
    constructor(http, sDataHandler) {
        this.http = http;
        this.sDataHandler = sDataHandler;
    }
    ////////////////////////////////////
    get() {
        let tags = __webpack_require__(/*! ../../assets/json/tags.json */ "./src/assets/json/tags.json");
        let npcs = __webpack_require__(/*! ../../assets/json/tags.json */ "./src/assets/json/tags.json");
        this.sDataHandler.registerData("tags", tags);
        this.sDataHandler.registerData("npcs", npcs);
        this.http.get("/assets/json/_get.php")
            .subscribe((res) => {
            console.log("RES", res);
        });
    }
    ////////////////////////////////////
    save() {
        this.http.post("/assets/json/_save.php", { key: "tags", data: [] })
            .subscribe(res => {
            console.log("SAved", res);
        });
    }
};
DataTransportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _data_handler_service__WEBPACK_IMPORTED_MODULE_3__["DataHandlerService"] }
];
DataTransportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    //////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////  EXPORT CLASS
], DataTransportService);



/***/ }),

/***/ "./src/assets/json/spell_effects.ts":
/*!******************************************!*\
  !*** ./src/assets/json/spell_effects.ts ***!
  \******************************************/
/*! exports provided: spell_effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spell_effects", function() { return spell_effects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const spell_effects = [
    {
        name: "Create Energy: Fire",
        desc: "Create fire in the shape you’ve chosen, dealing damage and catching flammable items alight.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Create Energy: Acid",
        desc: "Create acid in the shape you’ve chosen, dealing damage and corroding surfaces and items.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Create Energy: Necrotic",
        desc: "Create necrotic energy in the shape you’ve chosen, dealing damage and decaying life and perferting sanctity.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: false, granted: true }
    },
    {
        name: "Create Energy: Lightning",
        desc: "Create lighting in the shape you’ve chosen, dealing damage and/or spreading to other targets in water or connected by conductive material.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Create Energy: Cold",
        desc: "Create lighting in the shape you’ve chosen, dealing damage and/or spreading to other targets in water or connected by conductive material.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: false, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Create Energy: Sound",
        desc: "Create sound in the shape you’ve chosen, dealing damage and potentially deafening creatures.",
        save: "CON",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Create Energy: Radiant",
        desc: "Create sound in the shape you’ve chosen, dealing damage and potentially deafening creatures.",
        save: "CON",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Create Energy: Laceration",
        desc: "Create kinetic lacerations in the shape you’ve chosen, dealing damage and/or shredding materials.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Create Energy: Arcane",
        desc: "Create arcane energy in the shape you’ve chosen, dealing damage and/or creating entropic effects.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Create Energy: Wind",
        desc: "Create wind in the shape you’ve chosen, dealing damage and/or pushing subjects around.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Create Energy: Poison",
        desc: "Create poison in the shape you’ve chosen, dealing damage and/or diseasing and sickening targets.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: 2, pln: null },
        effects: [
            { dc: 0, effect: "1 Damage or minor effect" },
            { dc: 1, effect: "2 Damage or minor effect" },
            { dc: 2, effect: "4 Damage and minor effect" },
            { dc: 3, effect: "6 Damage and moderate effect" },
            { dc: 4, effect: "8 Damage and major effect" },
            { dc: 5, effect: "10 Damage and major effect" }
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Imbue Item: Fire",
        desc: "Embed fire into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Imbue Item: Acid",
        desc: "Embed acid into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Imbue Item: Necrotic",
        desc: "Embed necrotic into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: false, granted: true }
    },
    {
        name: "Imbue Item: Lightning",
        desc: "Embed lightning into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Imbue Item: Cold",
        desc: "Embed cold into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: false, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Imbue Item: Sound",
        desc: "Embed sound into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: "CON",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Imbue Item: Radiant",
        desc: "Embed radiant into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: "CON",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Imbue Item: Laceration",
        desc: "Embed lacerations into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Imbue Item: Arcane",
        desc: "Embed arcane into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Imbue Item: Wind",
        desc: "Embed wind into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Imbue Item: Poison",
        desc: "Embed poison into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "1 damage + minor effect" },
            { dc: 3, effect: "2 damage + minor effect" },
            { dc: 4, effect: "3 damage + moderate effect" },
            { dc: 5, effect: "4 damage + moderate effect" }
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Suppress Energy: Fire",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Suppress Energy: Acid",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Suppress Energy: Necrotic",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: false, granted: true }
    },
    {
        name: "Suppress Energy: Lightning",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Suppress Energy: Cold",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: false, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Suppress Energy: Sound",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: "CON",
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Suppress Energy: Radiant",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: "CON",
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Suppress Energy: Laceration",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Suppress Energy: Arcane",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Suppress Energy: Wind",
        desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 2, wll: 2, bem: 1, pln: null },
        effects: [
            { dc: 0, effect: "Reduce effects" },
            { dc: 1, effect: "Reduce damage by 1" },
            { dc: 2, effect: "Reduce damage by 2" },
            { dc: 3, effect: "Reduce damage by 3" },
            { dc: 4, effect: "Reduce damage by 4" },
            { dc: 5, effect: "Reduce damage by 5" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Destroy Matter",
        desc: "Destroy matter and life, disintegrating it’s fundamental makeup.  Applying this effect to life-based matter may be a slow effect, requiring concentration and withering it away over time.",
        save: "CON",
        time: "Moments",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: null, vol: null, wll: null, bem: 2, pln: null },
        effects: [
            { dc: 2, effect: "You destroy non-life matter" }, { dc: 5, effect: "You destroy living matter" },
        ],
        sources: { innate: false, flow: true, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Death",
        desc: "Using terrible magics, you can disconnect the life force from a host body, immediately killing it.  More powerful creatures may be able to resist this effect, but will be terribly weakened regardless.",
        save: "WIS",
        time: "Instant",
        shapes: { cst: null, tch: 2, svt: 3, cne: 5, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 5, effect: "Target(s) die" },
        ],
        sources: { innate: false, flow: true, tapped: false, life: true, yearns: false, granted: true }
    },
    {
        name: "Heal Stamina",
        desc: "Restore stamina to a target.  Targets can have their Stamina  healed a number of times per day equal to 3 + CON (minimum 1).  Any Stamina above the user’s maximum Stamina is applied as temporary Stamina points.",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 2, bem: 2, pln: null },
        effects: [
            { dc: 1, effect: "Restore 2 Stamina" },
            { dc: 2, effect: "Restore 4 Stamina" },
            { dc: 3, effect: "Restore 6 Stamina" },
            { dc: 4, effect: "Restore 8 Stamina" },
            { dc: 5, effect: "Restore 10 Stamina" },
        ],
        sources: { innate: true, flow: false, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Heal Wounds",
        desc: "Restore Wounds to a target.  Targets can have their wounds healed equal to their CON (minimum 1)",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: 0, svt: null, cne: null, aur: 3, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 3, effect: "Restore 1 Wound" },
            { dc: 4, effect: "Restore 2 Wounds" },
            { dc: 5, effect: "Restore 3 Wounds" },
        ],
        sources: { innate: true, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Restoration",
        desc: "Remove or suppress a reduction in a statistic, speed, or skill.",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: 0, svt: null, cne: null, aur: 3, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "No malady has no effect this turn." },
            { dc: 2, effect: "The malady goes dormant for the spell duration." },
            { dc: 4, effect: "Remove the malady." },
        ],
        sources: { innate: true, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Purification",
        desc: "Remove a mental effect, curse, poison or disease.",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: 0, svt: null, cne: null, aur: 3, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "No malady has no effect this turn." },
            { dc: 2, effect: "The malady goes dormant for the spell duration." },
            { dc: 4, effect: "Remove the malady." },
        ],
        sources: { innate: true, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Preservation",
        desc: "Slow down the decay of life, delay plant life decay, or place a dying creature in suspended loss of life.  Also prevents the creation of undeath.",
        save: null,
        time: "2 Hours",
        shapes: { cst: 0, tch: 0, svt: null, cne: null, aur: 1, vol: 1, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Halve the decay or bleeding." },
            { dc: 3, effect: "Suspend the decay or bleeding out." },
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Transmute Flesh",
        desc: "You temporarily change the properties and structural makeup of flesh.",
        save: "CON",
        time: "10DC Mins",
        shapes: { cst: 0, tch: 0, svt: 0, cne: null, aur: 3, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Visual effect only" },
            { dc: 1, effect: "Spider climb" },
            { dc: 1, effect: "Limb weapons / shield" },
            { dc: 2, effect: "Gaseous Form / etherealness" },
            { dc: 2, effect: "Flesh to stone, Stone to Flesh" },
            { dc: 3, effect: "Travel through stone wood, solid matter" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Polymorph",
        desc: "You change the entire form of your target to that of another living creature.  Intellect is unaffected but physical stats are those of the new form.  Unwilling targets gain standard resistances.",
        save: "CON",
        time: "1 Hour",
        shapes: { cst: 0, tch: 1, svt: 2, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 3, effect: "Change to a creature up to challenge 2" },
            { dc: 4, effect: "Change to a creature up to challenge 4" },
            { dc: 5, effect: "Change to a creature up to challenge 6" },
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: true, granted: false }
    },
    {
        name: "Animate Dead",
        desc: "You animate a nearby corpse to serve you and follow your mental commands.  A corpse, fresh or ancient, must be nearby to be animated.",
        save: null,
        time: "20DC Mins",
        shapes: { cst: null, tch: null, svt: null, cne: 0, aur: 0, vol: 0, wll: null, bem: null, pln: null },
        effects: [
            { dc: 3, effect: "Undead up to Challenge Rating 4" },
            { dc: 4, effect: "Undead up to Challenge Rating 5" },
            { dc: 5, effect: "Undead up to Challenge Rating 6" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: false, granted: true }
    },
    {
        name: "Animate Object",
        desc: "You animate an object to serve your commands.  The object cannot fly, but can balance on any surface it wishes, and can propel itself like a jump up to 2 meters.  It can use itself to attack by bashing or taking advantage of it’s sharp edges. If the object is broken or damaged greatly, the spell ends.  It can perform tasks that do not require dexterity or intelligence for you.",
        save: null,
        time: "10DC Mins",
        shapes: { cst: null, tch: 0, svt: 0, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Object up to 1 foot" },
            { dc: 2, effect: "Object up to 2 foot, 1 Damage" },
            { dc: 3, effect: "Object up to 3 foot, 2 Damage" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: false, granted: false }
    },
    {
        name: "Revulsion: Undead",
        desc: "You create a zone where the strength of Undeath and the Undead is diminished.",
        save: "CHA",
        time: "1DC Minute",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 2, vol: 1, wll: 1, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
            { dc: 4, effect: "The effect or entity is completely blocked." },
        ],
        sources: { innate: false, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Revulsion: Alignment",
        desc: "You create a zone where the strength of a chosen alignment (evil, good, neutral) is diminished.",
        save: "CHA",
        time: "1DC Minute",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 2, vol: 1, wll: 1, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
            { dc: 4, effect: "The effect or entity is completely blocked." },
        ],
        sources: { innate: false, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Revulsion: Creature Type",
        desc: "You create a zone where the strength of a chosen Creature Type (animals, fey, elementals, demons) is diminished.",
        save: "CHA",
        time: "1DC Minute",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 2, vol: 1, wll: 1, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
            { dc: 4, effect: "The effect or entity is completely blocked." },
        ],
        sources: { innate: false, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Revulsion: Magic",
        desc: "You create a zone where the strength of Magic is diminished.",
        save: "CHA",
        time: "1DC Minute",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 2, vol: 1, wll: 1, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
            { dc: 4, effect: "The effect or entity is completely blocked." },
        ],
        sources: { innate: false, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Revulsion: Divination",
        desc: "You create a zone where the strength of Divination is diminished.",
        save: "CHA",
        time: "1DC Minute",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 2, vol: 1, wll: 1, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
            { dc: 4, effect: "The effect or entity is completely blocked." },
        ],
        sources: { innate: false, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Revulsion: Teleportation",
        desc: "You create a zone where the strength of teleportation, time manipulation and speed effects is diminished.",
        save: "CHA",
        time: "1DC Minute",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 2, vol: 1, wll: 1, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
            { dc: 4, effect: "The effect or entity is completely blocked." },
        ],
        sources: { innate: false, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Scry",
        desc: "You gaze on a target remotely, seeing and hearing their activity. The difficulty changes depending on your familiarity with the target.	When casting this on an item you can see, the duration raises to 8 hours, and you can see and hear from that item as if you were there.",
        save: null,
        time: "10 Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: 2 },
        effects: [
            { dc: 1, effect: "Cast on item only (lasts 30 mins)" },
            { dc: 2, effect: "You’ve met this entity." },
            { dc: 3, effect: "You know a great deal about this entity, but haven’t met." },
            { dc: 4, effect: "You’ve neither met nor know much about this entity" },
        ],
        sources: { innate: false, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Illusion",
        desc: "You create illusory sights and sounds that don’t exist, or alter the perception of a target.",
        save: "INT",
        time: "3DC Mins",
        shapes: { cst: 0, tch: 1, svt: 1, cne: null, aur: 2, vol: 3, wll: 2, bem: 2, pln: 4 },
        effects: [
            { dc: 0, effect: "Create a sound or sight that you’ve experienced before" },
            { dc: 1, effect: "Create sights and sounds that you’ve experienced before" },
            { dc: 2, effect: "You create mirror images of yourself" },
            { dc: 3, effect: "Creatures or objects become invisible, or take on visual or audio properties (altered voice, altered appearance)." },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: false, granted: false }
    },
    {
        name: "Teleport Self",
        desc: "You move yourself from one place to somewhere you can either see or have visited before.",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: null, svt: null, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Travel up to 50 meters" },
            { dc: 3, effect: "Travel up to 1 kilometer" },
            { dc: 4, effect: "Travel to a space marked by Teleport Destination" },
            { dc: 5, effect: "Travel up to 500km" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: false, granted: false }
    },
    {
        name: "Teleport Destination",
        desc: "You mark a location you currently occupy as a teleport destination.  You may only have 1 destination marked.",
        save: null,
        time: "1 Year",
        shapes: { cst: 0, tch: null, svt: null, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Place a Teleport Destination" },
        ],
        sources: { innate: true, flow: true, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Teleportal",
        desc: "You create a portal that can move willing creatures from one place to somewhere you can either see or have visited before.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: 1, pln: null },
        effects: [
            { dc: 2, effect: "Travel up to 50 meters" },
            { dc: 3, effect: "Travel up to 1 kilometer" },
            { dc: 4, effect: "Travel to a space marked by Teleport Destination" },
            { dc: 5, effect: "Travel up to 500km" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: false, yearns: false, granted: true }
    },
    {
        name: "Baleful Teleportation",
        desc: "You forcefully teleport one or more creatures from their current location to elsewhere.",
        save: "WIS",
        time: "Instant",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Travel up to 5 meters" },
            { dc: 3, effect: "Travel up to 50 metres" },
            { dc: 4, effect: "Travel up to 250 metres" },
            { dc: 5, effect: "Travel up to 1 kilometre" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: false, yearns: false, granted: false }
    },
    {
        name: "Planar Portal",
        desc: "You create a portal that can move willing creatures from one place to another plane of existence.",
        save: null,
        time: "Varies",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: 1, pln: null },
        effects: [
            { dc: 4, effect: "You travel to a random place on a plane that you’ve visited before." },
            { dc: 5, effect: "You travel to a random place on a plane that you know a lot about." },
        ],
        sources: { innate: false, flow: false, tapped: false, life: false, yearns: true, granted: true }
    },
    {
        name: "Lock / Seal",
        desc: "You seal tight a container or door so that mundane methods cannot open it.  You can also create a passcode which, when spoken, allows the door to open.",
        save: null,
        time: "24 Hours",
        shapes: { cst: null, tch: 0, svt: null, cne: null, aur: null, vol: null, wll: null, bem: 1, pln: null },
        effects: [
            { dc: 1, effect: "Create a lock." },
            { dc: 2, effect: "Create a lock with a passcode." },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: false, granted: false }
    },
    {
        name: "Unlock / Unseal",
        desc: "You unseal a container that has been sealed with a mundane lock or magical seal.",
        save: null,
        time: "Instant",
        shapes: { cst: null, tch: 0, svt: null, cne: null, aur: null, vol: null, wll: null, bem: 1, pln: null },
        effects: [
            { dc: 1, effect: "Unseal simple mundane locks" },
            { dc: 2, effect: "Unseal moderate mundane locks" },
            { dc: 3, effect: "Unseal superior mundane locks" },
            { dc: 0, effect: "Beat the spell’s DC to unseal magical locks" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: false, granted: false }
    },
    {
        name: "Conjure Mundane Item",
        desc: "You call forth a mundane item such as a weapon, rope, food or a torch to your hands.  The DM will decide the DC of the spell based on the item.",
        save: null,
        time: "1 Hour",
        shapes: { cst: 0, tch: 0, svt: null, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Conjure an item" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: true, granted: false }
    },
    {
        name: "Conjure Magical Servant",
        desc: "You call forth a sentient magical servant in a shape you choose to perform simple to moderate tasks for you.  Higher DCs grant additional abilities which stack with previous DCs.",
        save: null,
        time: "30 Mins",
        shapes: { cst: null, tch: null, svt: 0, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Small, agile." },
            { dc: 0, effect: "Medium, 1 Damage. Spider climb." },
            { dc: 0, effect: "Medium, 2 Damage." },
            { dc: 0, effect: "Large, 3 Damage. Flying." },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: false, granted: false }
    },
    {
        name: "Conjure Animals / Swarms",
        desc: "You call forth animals or a swarms.  They can be directed to go places, and can be given basic commands such as defend, attack.",
        save: null,
        time: "Varies",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: null, vol: 0, wll: 0, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "5 Small animals or Small Swarm" },
            { dc: 2, effect: "2 Medium animals or medium swarm" },
            { dc: 3, effect: "1 Large animal or swarm" },
            { dc: 4, effect: "4 Medium or 2 large animals" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Conjure Magical Beings",
        desc: "You call forth Fey, Elementals, Abberations or Monstrosities to fight for you.  If you lose concentration they may turn on you.  You can summon multiple creatures up to a set Challenge Rating based on the DC.",
        save: null,
        time: "10 Mins",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 0, vol: 0, wll: 0, bem: null, pln: null },
        effects: [
            { dc: 3, effect: "Summon up to CR 4 creatures." },
            { dc: 4, effect: "Summon up to CR 5 creatures." },
            { dc: 5, effect: "Summon up to CR 6 creatures." },
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Conjure Fog / Mist",
        desc: "You conjure a rolling fog that streams out from your shaped magics.  As long as you maintain the spell, the fog gets bigger.  Visibility is limited to 5 metres in the fog.",
        save: null,
        time: "20 Mins",
        shapes: { cst: null, tch: null, svt: null, cne: 0, aur: null, vol: 0, wll: 0, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Conjure Fog" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Conjure Mass",
        desc: "You call forth creeping vines and webs to constrict movement or oils and debris to disrupt footage.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: null, svt: null, cne: 0, aur: null, vol: 0, wll: 0, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Conjure Oils and Debris" },
            { dc: 2, effect: "Conjure Vines or Webs" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Conjure Large Inanimate",
        desc: "You conjure large, inanimate, mundane and non-damaging items such as furniture, sculptures or even a dwelling.  The total mass and volume cannot exceed 20’ square.",
        save: null,
        time: "12 Hours",
        shapes: { cst: null, tch: 0, svt: null, cne: null, aur: null, vol: 0, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Conjure items and objects" },
            { dc: 3, effect: "Conjure a dwelling" },
            { dc: 4, effect: "Conjure both" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: false, granted: false }
    },
    {
        name: "Banish",
        desc: "You banish a creature or item that has been conjured, or return to it’s starting location a creature that has teleported in the last 5 minutes.",
        save: "CHA",
        time: "Instant",
        shapes: { cst: null, tch: 0, svt: null, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Banish a creature or item" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Divine: Purpose",
        desc: "Through magical means you can divine the present and future of a situation.  Use the Discern Realities Move as if passing the Total DC.  Your DM will answer your questions with responses not achievable using mundane means.",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: null, svt: null, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 5, effect: "Divine Purpose" },
        ],
        sources: { innate: true, flow: false, tapped: false, life: false, yearns: true, granted: true }
    },
    {
        name: "Divine: Item Location",
        desc: "Through magical means, you can divine the location of an item, if it is still within 50 km of you.",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: null, svt: null, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "You’ve touched this item before." },
            { dc: 3, effect: "You’ve only seen this item before" },
            { dc: 4, effect: "You know of this item." },
        ],
        sources: { innate: true, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Divine: Intention",
        desc: "Through magical means you divine the alignment and 1-3 words describing a target you can see's intentions for the near future.",
        save: null,
        time: "Instant",
        shapes: { cst: 0, tch: null, svt: null, cne: null, aur: 0, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Divine Intention" },
        ],
        sources: { innate: true, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Divine: Illusion",
        desc: "Through magical means you, or you and other willing creatures see through magical illusions and invisibility.",
        save: null,
        time: "1 Minute",
        shapes: { cst: 0, tch: null, svt: null, cne: null, aur: 2, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Divine Illusions" },
        ],
        sources: { innate: true, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Divine: The Near Future",
        desc: "Through magical means, you, or you and other creatures can see the immediate future 1 second before it happens.  You gain +1 DR, require one more point to be disadvantaged and cannot be surprised.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: null, svt: null, cne: null, aur: 2, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Divine the near future" },
        ],
        sources: { innate: true, flow: false, tapped: false, life: false, yearns: true, granted: true }
    },
    {
        name: "Divine: The Truth",
        desc: "Through magical means you know when a creature speaks a lie, or the purpose and means to use an item.",
        save: null,
        time: "5 Mins",
        shapes: { cst: null, tch: 0, svt: 0, cne: 2, aur: 2, vol: 2, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Divine the spoken truth." },
            { dc: 3, effect: "Divine the purpose of an item." },
        ],
        sources: { innate: true, flow: false, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Detect Poisons and Diseases",
        desc: "You detect the existence of poisons, diseases and plagues in creatures, water sources or the area around you within sight.",
        save: null,
        time: "5 Mins",
        shapes: { cst: null, tch: null, svt: null, cne: 0, aur: 1, vol: 0, wll: 0, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Detect Poisons and Diseases" },
        ],
        sources: { innate: true, flow: false, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Detect Traps",
        desc: "You detect the existence of traps and machinery in the around you within sight.",
        save: null,
        time: "5 Mins",
        shapes: { cst: null, tch: null, svt: null, cne: 0, aur: 1, vol: 0, wll: 0, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Detect Traps and machinery" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: false, yearns: false, granted: false }
    },
    {
        name: "Weaken",
        desc: "You sap the strength of your target(s), lowering it’s combat damage and lifting capacity.",
        save: "STR",
        time: "2DC Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "-1 STR" },
            { dc: 2, effect: "-2 STR" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Clumsy",
        desc: "You sap the dexterity and nimbleness of your target(s), lowering their dexterity and Defensive Rating.",
        save: "DEX",
        time: "2DC Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "-1 DEX" },
            { dc: 2, effect: "-2 DEX" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Sickly",
        desc: "You sap the constitution and heartiness of your target(s), lowering their constitution and hit points.",
        save: "CON",
        time: "2DC Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "-1 CON" },
            { dc: 2, effect: "-2 CON" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Feeblemind",
        desc: "You sap the smarts and focus of your target(s), lowering their intelligence.",
        save: "INT",
        time: "2DC Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "-1 INT" },
            { dc: 2, effect: "-2 INT" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Witless",
        desc: "You sap the wits and intuition of your target(s), lowering their wisdom.",
        save: "WIS",
        time: "2DC Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "-1 WIS" },
            { dc: 2, effect: "-2 WIS" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Charmless",
        desc: "You sap the presence of your target(s), lowering their charisma.",
        save: "CHA",
        time: "2DC Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "-1 CHA" },
            { dc: 2, effect: "-2 CHA" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Blindness / Deafness",
        desc: "You disconnect your target’s senses from their cognition, making them temporarily blind or deaf.",
        save: "CON",
        time: "2DC Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Your target becomes blind." },
            { dc: 2, effect: "Your target becomes deaf" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Plague",
        desc: "You infuse a creature, water source or conducive entity with a disease that you know.  If cast at a creature, the speed at which the disease affects the target is based on the DC of the effect.",
        save: "CON",
        time: "Varies",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Your target is infected." },
            { dc: 3, effect: "A creature is affected and the disease is advanced" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Sleep",
        desc: "You trigger mental chemicals and signals and force your targets into a magical sleep.  The higher the DC, the better the sleep.",
        save: "CHA",
        time: "DC Hours",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Light sleep, basic noises wake." },
            { dc: 2, effect: "Deep sleep, only loud noises or jostling wakes." },
            { dc: 5, effect: "Attacking won’t wake subject." },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Slow",
        desc: "You create a slight time distortion, slowing targeted creatures.  As part of the slow effect, targets fall at a safe speed.",
        save: "STR",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "-1 DR, slowed" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Haste",
        desc: "You create a slight time distortion, hastening targeted creatures.  As part of the haste effect, targets fall faster, taking twice falling damage.",
        save: "STR",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "+1 DR, hastened" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Armour",
        desc: "You create a field of armour around you or your subjects’ bodies.  You gain a new DR, which superceded any armour you are wearing if lower than the spell’s DR.",
        save: null,
        time: "10 Mins",
        shapes: { cst: 0, tch: 1, svt: 1, cne: null, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 DR, +1 Defend" },
            { dc: 2, effect: "+1 DR, +2 Defend, +1 Defy Danger" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Magical Deflection",
        desc: "You create an enchantment around you or your subjects’ bodies, deflecting  and disrupting magics that target you.",
        save: null,
        time: "10 Mins",
        shapes: { cst: 0, tch: 1, svt: 1, cne: null, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "-1 Magic Damage, +1 Defy Danger" },
            { dc: 3, effect: "-2 Magic Damage, +2 Defy Danger" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Blur",
        desc: "You create a distortion of light around you, blurring your vision and hiding your whereabouts.  You gain +1 DR (and +2 against Ranged attacks) and attackers need one more point to gain advantage on you.  Your identity is also kept secret during the spell’s effect.",
        save: null,
        time: "10 Mins",
        shapes: { cst: 0, tch: 1, svt: 1, cne: null, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Blur" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: false, granted: false }
    },
    {
        name: "Enlarge",
        desc: "You twist the molecules of your target, growing in size and stature.  Each size category the target increases grants them +1 STR, CON and maximum Stamina (doesn’t count as stamina healing), but -1 DR.",
        save: "STR",
        time: "2 Mins",
        shapes: { cst: 0, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "+1 Size category" },
            { dc: 3, effect: "+2 Size category" },
        ],
        sources: { innate: true, flow: true, tapped: false, life: true, yearns: true, granted: false }
    },
    {
        name: "Reduce",
        desc: "You twist the molecules of your target, reducing their size and stature.  Each size category they lose decreases STR, CON and maximum Stamina by 1, but grants them an additional DR.",
        save: "STR",
        time: "2 Mins",
        shapes: { cst: 0, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "-1 Size category" },
            { dc: 3, effect: "-2 Size category" },
        ],
        sources: { innate: true, flow: true, tapped: false, life: true, yearns: true, granted: false }
    },
    {
        name: "Buff: Strength",
        desc: "You raise the ferocity of a creature, granting it strength and power.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 STR" },
            { dc: 2, effect: "+2 STR" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Dexterity",
        desc: "You raise the nimbleness of a creature, granting it dexterity and alacrity.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 DEX" },
            { dc: 2, effect: "+2 DEX" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Constitution",
        desc: "You raise the heartiness of a creature, granting it constitution and wellbeing.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 CON" },
            { dc: 2, effect: "+2 CON" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Intelligence",
        desc: "You raise the sharpness of a creature’s mind, granting it intelligence and wits.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 INT" },
            { dc: 2, effect: "+2 INT" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Wisdom",
        desc: "You raise the intuition of a creature, granting it wisdom and experience.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 WIS" },
            { dc: 2, effect: "+2 WIS" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Charisma",
        desc: "You raise the force of character of a creature, granting it charisma and presence.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 CHA" },
            { dc: 2, effect: "+2 CHA" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Combat skill",
        desc: "You raise the reaction time and focus of a creature, granting if combat skill and agility.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 COMB" },
            { dc: 2, effect: "+2 COMB" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Combat Damage",
        desc: "Your subject’s swings and hacks take on more force and vigour, dealing more damage to their targets.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 DAM" },
            { dc: 2, effect: "+2 DAM" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Buff: Skills",
        desc: "Your subject looks inside and finds recollects more about their skills than they could even imagine.  All untrained and trained skills are performed better.",
        save: null,
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "+1 SKILL" },
            { dc: 2, effect: "+2 SKILL" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Magical senses",
        desc: "You use magic to enhance the stimulations entering your target’s senses, granting them increased sight, hearing, touch, taste or smell.",
        save: null,
        time: "20 Mins",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Enhance one sense." },
            { dc: 2, effect: "Enhance up to 5 senses." },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Terrain modification",
        desc: "Your magics flow through the very lands around you, changing them to your whim. Casting this spell requires concentration and can take 1-10 minutes per DC of the spell, depending on the complexity of the change.  You can target roughly 30’ cube per DC of the spell.",
        save: null,
        time: "Varies",
        shapes: { cst: null, tch: null, svt: null, cne: 0, aur: 0, vol: 0, wll: 0, bem: 0, pln: null },
        effects: [
            { dc: 1, effect: "Minor shift / movement of terrain" },
            { dc: 2, effect: "Shape earth and plantlife" },
            { dc: 3, effect: "Shape stone" },
        ],
        sources: { innate: false, flow: true, tapped: false, life: false, yearns: true, granted: true }
    },
    {
        name: "Tremors",
        desc: "Your magic causes intense tremors in the surrounding area.  The DC of the spell raises the effect that you can cause.",
        save: "DEX",
        time: "30 Secs",
        shapes: { cst: null, tch: null, svt: null, cne: 0, aur: 0, vol: 0, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Slight tremors, rattling" },
            { dc: 3, effect: "An earthquake causing 3 damage and unsafe terrain" },
            { dc: 6, effect: "A mighty earthquake causing 8 damage and damaging structures" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Plant Growth",
        desc: "You infuse plants and greenlife around you with magics that immediately promote growth.  Plantlife within range grows noticeably while you concentrate.  Your magics can promote growth to roughly 3 months of normal growth.  Plants providing food or resources will sprout more readily.",
        save: null,
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: null, cne: 0, aur: 1, vol: 0, wll: null, bem: 0, pln: null },
        effects: [
            { dc: 1, effect: "3 Months growth takes 1 hour of concentration" },
            { dc: 2, effect: "3 Months growth takes 20 minutes of concentration" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: false, yearns: true, granted: false }
    },
    {
        name: "Fear / Revulsion",
        desc: "Your magics create illusory images in your subject(s), causing them to either fear or be revulsed by a creature or item that both you and they can see. Creatures forced to fight against a feared get -5 COMB and can only attack their feared target.",
        save: "WIS",
        time: "5 Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "The subject fears the subject and will not willingly approach." },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Fascination",
        desc: "Your magics create a feeling of fascination in a subject for a creature or item that both you and they can see.  The target is drawn to it or to watch it, or if in combat, suffers -1 DR against other attackers.  If enthralled, the DR doubles.",
        save: "WIS",
        time: "5 Mins",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Fascination in a creature or item." },
            { dc: 3, effect: "Enthrallment in a creature or item." },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: false, granted: true }
    },
    {
        name: "Calm",
        desc: "Your magics slow the heartbeat, adrenaline and thoughts of your subject(s), calming them down and removing all fear.  Targets in combat may not stop attacking, but will be more likely to converse rationally.  Targets in a rage are thrust out of their rage.",
        save: "WIS",
        time: "5 Mins",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Calm your target(s)" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Anger",
        desc: "Your magics raise the heartbeat, adrenaline and irrational thoughts of your subject(s), angering them.  Targets are more likely to engage in combat and make foolish decisions, and are immune to fear.",
        save: "WIS",
        time: "5 Mins",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 1, effect: "Enrage your target(s)" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Rationality",
        desc: "Your subject(s) emotions are immediately flushed from their minds.  They are unable to experience empathy, and any emotional effects and fear are removed.",
        save: "WIS",
        time: "2 Mins",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Subjects experience no emotions" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Charm",
        desc: "The subject(s) of your magic look upon you favourably, as your magic plays with their opinions of you.  You are treated as if you were good friends, even if you have never met.  People who are already antagonistic or mistrustful of you may only have their opinion slightly raised.",
        save: "CHA",
        time: "5 Mins",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Amicable: +1 on CHA rolls" },
            { dc: 1, effect: "Somewhat friendly: +2 on CHA rolls" },
            { dc: 2, effect: "Friends: +3 on CHA rolls" },
        ],
        sources: { innate: true, flow: true, tapped: false, life: true, yearns: true, granted: true }
    },
    {
        name: "Confusion",
        desc: "You befuddle your subject(s), causing them to misunderstand where they are, who their friends are, and what they were doing.  Creatures have a 50% change to take their action, and a 50% chance of taking a random action.",
        save: "INT",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: null, pln: null },
        effects: [
            { dc: 3, effect: "Confuse your subject(s)" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: true, granted: false }
    },
    {
        name: "Insanity",
        desc: "You create images of such nightmarishness that your subject(s) experience temporary insanity.  Subjects will randomly flee, attack wildly, run into danger, or fall to the ground gibbering.  Repeatedly casting this spell on a target may make the effects permanent...",
        save: "WIS",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: 3, bem: null, pln: null },
        effects: [
            { dc: 4, effect: "Cause insanity in a sentient creature" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: true, yearns: false, granted: true }
    },
    {
        name: "Fly",
        desc: "You wrap your subject(s) in magical winds, holding them aloft and able to fly.  The DC determines how fast you can fly.",
        save: null,
        time: "2DC Mins",
        shapes: { cst: 0, tch: 0, svt: 0, cne: null, aur: 3, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "0 Feet per second, weightless" },
            { dc: 1, effect: "1/2 foot per second" },
            { dc: 2, effect: "5 feet per second" },
            { dc: 3, effect: "25 feet per second" },
            { dc: 4, effect: "60 feet per second" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: false, yearns: true, granted: false }
    },
    {
        name: "Hold",
        desc: "You use your magics to create a warped gravity field, pinning your targets to the ground, unable to move but able to defend themselves from their position.  Effects that try to move them are likely to fail.  Flying creatures are immediately brought down, taking falling damage.",
        save: "STR",
        time: "1 Min",
        shapes: { cst: 0, tch: 0, svt: 1, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Hold willing creatures." },
            { dc: 2, effect: "Hold a small creature" },
            { dc: 3, effect: "Hold a medium creature" },
            { dc: 4, effect: "Hold a large creature" },
            { dc: 5, effect: "Hold a Huge creature" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: false, yearns: false, granted: false }
    },
    {
        name: "Command",
        desc: "You issue a verbal command up to 5 words to a subject, and your magics make it painful, distasteful, or unappealing not to comply.  The target will automatically resist if the command given is wholly against their nature, and may find creative ways to comply otherwise.",
        save: "CHA",
        time: "1 Min",
        shapes: { cst: null, tch: 0, svt: 1, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 3, effect: "Command the same race" },
            { dc: 4, effect: "Command any sentient race" },
            { dc: 6, effect: "Command any sentient race for 7 days" },
        ],
        sources: { innate: false, flow: true, tapped: false, life: false, yearns: false, granted: true }
    },
    {
        name: "Comprehension",
        desc: "You look upon a subject, and their intentions speak loudly to you.  The target(s) of the spell can understand written and spoken languages of sentient creatures, animals and even plantlife, and gain +3 SKILL when using Persuasion / Intimidation, Performance, or Animal Handling for your target.",
        save: null,
        time: "5 Mins",
        shapes: { cst: 0, tch: 0, svt: 0, cne: 2, aur: 3, vol: 3, wll: null, bem: null, pln: null },
        effects: [
            { dc: 2, effect: "Comprehend a single creature or artistic / written work." },
            { dc: 3, effect: "Comprehend all visible creatures or artistic / written works." },
        ],
        sources: { innate: true, flow: true, tapped: false, life: false, yearns: true, granted: true }
    },
    {
        name: "Messaging",
        desc: "You send thought off into the ether, which whispers themselves into the subconscious of your intended target. You must have met this person to target them with this spell.",
        save: null,
        time: "Varies",
        shapes: { cst: null, tch: 0, svt: 0, cne: null, aur: null, vol: null, wll: null, bem: null, pln: 2 },
        effects: [
            { dc: 1, effect: "You can send 20 words to a target" },
            { dc: 2, effect: "You can converse with target for 30 seconds" },
            { dc: 3, effect: "You can converse with target for 5 minutes" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Dream",
        desc: "You invade the dreams of your target, and can communicate with the most intense of visuals.  Optionally, you can also disrupt their rest, reducing their stamina and placing debuffs on each of their stats for the day.  You must have met the creature to target them with this effect.",
        save: "WIS",
        time: "4 Hours",
        shapes: { cst: null, tch: null, svt: 0, cne: null, aur: null, vol: 3, wll: null, bem: null, pln: 2 },
        effects: [
            { dc: 2, effect: "You invade the subjects’ dreams." },
            { dc: 3, effect: "You invade their dreams and disrupt their sleep" },
        ],
        sources: { innate: false, flow: false, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Commune with the Dead",
        desc: "You cast your minds to the place where the dead’s thoughts are buried.  You open a dialogue with a dead sentient entity whose remains you can see or touch.  The dead are not required to answer, or answer truthfully.",
        save: null,
        time: "5 mins",
        shapes: { cst: null, tch: 0, svt: 0, cne: 1, aur: 1, vol: 1, wll: null, bem: null, pln: 2 },
        effects: [
            { dc: 2, effect: "You may ask 2 questions" },
            { dc: 4, effect: "You may discuss with the dead for 5 minutes" },
        ],
        sources: { innate: false, flow: false, tapped: false, life: false, yearns: false, granted: true }
    },
    {
        name: "Minor wonder",
        desc: "You perform a little minor wonder, such as creating a little light, sound, issuing 1 kg of force at an object, making a small plant sprout, guessing someone’s age, or making an item less than 10 cm invisible or change colour.",
        save: null,
        time: "Varies",
        shapes: { cst: null, tch: 0, svt: 0, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "You create a little wonder" },
            { dc: 1, effect: "Your subjects can walk on water" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    },
    {
        name: "Possess body",
        desc: "You upheave the entire ego of a creature, swapping bodies.  You are barely disoriented, though your subject may be.  You retain your mental stats and skills, but gain their physical stats and vice versa.  Bodies do not swap Magical Sources, with the exception of Granted.",
        save: "CHA",
        time: "Varies",
        shapes: { cst: null, tch: 0, svt: 0, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 3, effect: "Lasts 30 seconds." },
            { dc: 4, effect: "Lasts 15 minutes" },
            { dc: 5, effect: "Lasts 1 day" },
            { dc: 7, effect: "Permanent" },
        ],
        sources: { innate: false, flow: true, tapped: false, life: true, yearns: true, granted: false }
    },
    {
        name: "Mend / Refresh",
        desc: "You coax an item or a handful of small items to remember when they weren’t damaged, worn, or spoiled.  You restore them to a better condition, such as fixing a cracked cup or purifying naturally spoiled water.",
        save: null,
        time: "Instant",
        shapes: { cst: null, tch: 0, svt: 0, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Minor mending" },
            { dc: 1, effect: "Mend and refresh as if new" },
        ],
        sources: { innate: false, flow: true, tapped: true, life: false, yearns: true, granted: true }
    },
    {
        name: "Time Stop",
        desc: "You create an area around you in which time itself dares not to flow.  Anything in the range of the spell excluding yourself is outside of time, but cannot be hurt directly.  Enterprising casters will find ways of setting up damage for their victims.",
        save: null,
        time: "20 Secs",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: 0, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 6, effect: "Stop time" },
        ],
        sources: { innate: false, flow: true, tapped: false, life: false, yearns: false, granted: true }
    },
    {
        name: "Endure elements",
        desc: "You create an effect to endure elements around you.  The DC you choose determines the abilities you receive using this spell effect, as you gain the effect of each DC up to the one you choose.",
        save: null,
        time: "20DC Mins",
        shapes: { cst: null, tch: null, svt: null, cne: null, aur: null, vol: null, wll: null, bem: null, pln: null },
        effects: [
            { dc: 0, effect: "Ignore temperatures 5 to 45 degrees" },
            { dc: 1, effect: "Water breathing" },
            { dc: 2, effect: "Elemental effects and damage reduced, such as not catching fire" },
            { dc: 3, effect: "Poison resistance" },
        ],
        sources: { innate: true, flow: true, tapped: true, life: true, yearns: true, granted: true }
    }
    /*{
        name: "Template",
        desc: "Template_desc",
        save: null,
        time: "Varies",
        shapes: { cst:null, tch:null, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
        effects: [
            { dc:0, effect:"effect" },
        ],
        sources: { innate:false, flow:false, tapped:false, life:false, yearns:false, granted:false }
    }*/
];


/***/ }),

/***/ "./src/assets/json/tags.json":
/*!***********************************!*\
  !*** ./src/assets/json/tags.json ***!
  \***********************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"Primary\"}]");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Volumes/Mac Backup/Documents/Moxy Bustion - Creative/Game Development/NewRPGTools/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map