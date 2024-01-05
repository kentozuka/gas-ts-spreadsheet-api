function seed() {
}
function doPost() {
}
function doGet() {
}/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/index.ts":
/*!******************************!*\
  !*** ./src/classes/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORY: () => (/* binding */ CATEGORY),
/* harmony export */   EXPENDITURE: () => (/* binding */ EXPENDITURE),
/* harmony export */   INCOME: () => (/* binding */ INCOME),
/* harmony export */   LOAN: () => (/* binding */ LOAN),
/* harmony export */   PAYER: () => (/* binding */ PAYER),
/* harmony export */   PAYMENT: () => (/* binding */ PAYMENT),
/* harmony export */   SUBSCRIPTION: () => (/* binding */ SUBSCRIPTION)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _sheets_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheets/subscription */ "./src/classes/sheets/subscription.ts");
/* harmony import */ var _sheets_expenditure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sheets/expenditure */ "./src/classes/sheets/expenditure.ts");
/* harmony import */ var _sheets_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sheets/category */ "./src/classes/sheets/category.ts");
/* harmony import */ var _sheets_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sheets/payment */ "./src/classes/sheets/payment.ts");
/* harmony import */ var _sheets_income__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sheets/income */ "./src/classes/sheets/income.ts");
/* harmony import */ var _sheets_payer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sheets/payer */ "./src/classes/sheets/payer.ts");
/* harmony import */ var _sheets_loan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sheets/loan */ "./src/classes/sheets/loan.ts");








var SUBSCRIPTION = new _sheets_subscription__WEBPACK_IMPORTED_MODULE_1__["default"](_constant__WEBPACK_IMPORTED_MODULE_0__.SHEET_ID);
var EXPENDITURE = new _sheets_expenditure__WEBPACK_IMPORTED_MODULE_2__["default"](_constant__WEBPACK_IMPORTED_MODULE_0__.SHEET_ID);
var CATEGORY = new _sheets_category__WEBPACK_IMPORTED_MODULE_3__["default"](_constant__WEBPACK_IMPORTED_MODULE_0__.SHEET_ID);
var PAYMENT = new _sheets_payment__WEBPACK_IMPORTED_MODULE_4__["default"](_constant__WEBPACK_IMPORTED_MODULE_0__.SHEET_ID);
var INCOME = new _sheets_income__WEBPACK_IMPORTED_MODULE_5__["default"](_constant__WEBPACK_IMPORTED_MODULE_0__.SHEET_ID);
var PAYER = new _sheets_payer__WEBPACK_IMPORTED_MODULE_6__["default"](_constant__WEBPACK_IMPORTED_MODULE_0__.SHEET_ID);
var LOAN = new _sheets_loan__WEBPACK_IMPORTED_MODULE_7__["default"](_constant__WEBPACK_IMPORTED_MODULE_0__.SHEET_ID);


/***/ }),

/***/ "./src/classes/sheets/category.ts":
/*!****************************************!*\
  !*** ./src/classes/sheets/category.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/classes/sheets/template.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var sheetInfo = {
    name: 'category',
    label: ['name'],
    styling: {
        tabColor: '#356dea',
        backgroundColor: '#356dea',
        fontColor: '#ffffff'
    }
};
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(id) {
        return _super.call(this, id, sheetInfo) || this;
    }
    return Category;
}(_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ }),

/***/ "./src/classes/sheets/expenditure.ts":
/*!*******************************************!*\
  !*** ./src/classes/sheets/expenditure.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/classes/sheets/template.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var sheetInfo = {
    name: 'expenditure',
    label: [
        'year',
        'month',
        'date',
        'day',
        'hour',
        'payment_id',
        'name',
        'price',
        'category_id'
    ],
    styling: {
        tabColor: '#cd0000',
        backgroundColor: '#cd0000',
        fontColor: '#fff'
    }
};
var Expenditure = /** @class */ (function (_super) {
    __extends(Expenditure, _super);
    function Expenditure(id) {
        return _super.call(this, id, sheetInfo) || this;
    }
    return Expenditure;
}(_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Expenditure);


/***/ }),

/***/ "./src/classes/sheets/income.ts":
/*!**************************************!*\
  !*** ./src/classes/sheets/income.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/classes/sheets/template.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var sheetInfo = {
    name: 'income',
    label: ['year', 'month', 'date', 'day', 'name', 'price', 'payer_id'],
    styling: {
        tabColor: '#289c04',
        backgroundColor: '#289c04',
        fontColor: '#fff'
    }
};
var Income = /** @class */ (function (_super) {
    __extends(Income, _super);
    function Income(id) {
        return _super.call(this, id, sheetInfo) || this;
    }
    return Income;
}(_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Income);


/***/ }),

/***/ "./src/classes/sheets/loan.ts":
/*!************************************!*\
  !*** ./src/classes/sheets/loan.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/classes/sheets/template.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var sheetInfo = {
    name: 'loan',
    label: ['name', 'interval', 'amount', 'note'],
    styling: {
        tabColor: '#a319ff',
        backgroundColor: '#a319ff',
        fontColor: '#fff'
    }
};
var Loan = /** @class */ (function (_super) {
    __extends(Loan, _super);
    function Loan(id) {
        return _super.call(this, id, sheetInfo) || this;
    }
    return Loan;
}(_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loan);


/***/ }),

/***/ "./src/classes/sheets/payer.ts":
/*!*************************************!*\
  !*** ./src/classes/sheets/payer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/classes/sheets/template.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var sheetInfo = {
    name: 'payer',
    label: ['name'],
    styling: {
        tabColor: '',
        backgroundColor: '',
        fontColor: ''
    }
};
var Payer = /** @class */ (function (_super) {
    __extends(Payer, _super);
    function Payer(id) {
        return _super.call(this, id, sheetInfo) || this;
    }
    return Payer;
}(_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payer);


/***/ }),

/***/ "./src/classes/sheets/payment.ts":
/*!***************************************!*\
  !*** ./src/classes/sheets/payment.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/classes/sheets/template.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var sheetInfo = {
    name: 'payment',
    label: ['name'],
    styling: {
        tabColor: '',
        backgroundColor: '',
        fontColor: ''
    }
};
var Payer = /** @class */ (function (_super) {
    __extends(Payer, _super);
    function Payer(id) {
        return _super.call(this, id, sheetInfo) || this;
    }
    return Payer;
}(_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payer);


/***/ }),

/***/ "./src/classes/sheets/subscription.ts":
/*!********************************************!*\
  !*** ./src/classes/sheets/subscription.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/classes/sheets/template.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var sheetInfo = {
    name: 'subscription',
    label: ['name', 'interval', 'amount', 'note'],
    styling: {
        tabColor: '#fbbc04',
        backgroundColor: '#fbbc04',
        fontColor: '#fff'
    }
};
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription(id) {
        return _super.call(this, id, sheetInfo) || this;
    }
    return Subscription;
}(_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscription);


/***/ }),

/***/ "./src/classes/sheets/template.ts":
/*!****************************************!*\
  !*** ./src/classes/sheets/template.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ID = 'id';
var CREATED_AT = 'created_at';
var UPDATED_AT = 'updated_at';
var Sheet = /** @class */ (function () {
    function Sheet(spreadsheetId, data) {
        this.sheetInfo = data;
        this._spread = SpreadsheetApp.openById(spreadsheetId);
        this._sheet = this.accessSheet();
    }
    Object.defineProperty(Sheet.prototype, "header", {
        get: function () {
            var len = this.sheetInfo.label.length + 3; // CommonFields
            var range = this._sheet.getRange(1, 1, 1, len);
            return range;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "labels", {
        get: function () {
            var headers = __spreadArray(__spreadArray([ID], this.sheetInfo.label, true), [UPDATED_AT, CREATED_AT], false);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "lastRow", {
        get: function () {
            return this._sheet.getLastRow();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "lastColumn", {
        get: function () {
            return this.labels.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "isClean", {
        get: function () {
            return this.lastRow === 1; // only label
        },
        enumerable: false,
        configurable: true
    });
    Sheet.prototype.applyStyling = function () {
        var styling = this.sheetInfo.styling;
        this._sheet.setFrozenRows(1);
        if (!styling)
            return;
        if (styling.tabColor)
            this._sheet.setTabColor(styling.tabColor);
        if (styling.fontColor)
            this.header.setFontColor(styling.fontColor);
        if (styling.backgroundColor)
            this.header.setBackground(styling.backgroundColor);
    };
    Sheet.prototype.applyLabeling = function () {
        this.header.setValues([this.labels]);
        this._sheet.deleteRows(11, 989);
        this._sheet.deleteColumns(this.lastColumn + 1, 26 - this.lastColumn);
    };
    Sheet.prototype.createSheet = function () {
        var name = this.sheetInfo.name;
        this._sheet = this._spread.insertSheet(name);
        this.applyStyling();
        this.applyLabeling();
        console.log("Created Sheet: ".concat(this.sheetInfo.name));
    };
    Sheet.prototype.accessSheet = function () {
        this._sheet = this._spread.getSheetByName(this.sheetInfo.name);
        if (this._sheet === null)
            this.createSheet();
        return this._sheet;
    };
    Sheet.prototype.arr2obj = function (arr) {
        return this.labels.reduce(function (obj, label, index) {
            obj[label] = arr[index];
            return obj;
        }, {});
    };
    Sheet.prototype.validate = function (data) {
        var requiredFields = this.sheetInfo.label;
        for (var _i = 0, requiredFields_1 = requiredFields; _i < requiredFields_1.length; _i++) {
            var field = requiredFields_1[_i];
            if (!(field in data))
                return false;
        }
        return true;
    };
    Sheet.prototype.format = function (data) {
        var _this = this;
        return data.map(function (cell, ix) { return __spreadArray(__spreadArray([
            _this.lastRow + ix
        ], Object.values(cell), true), [
            new Date(), // updated_at
            new Date() // created_at
        ], false); });
    };
    Sheet.prototype.initialize = function () {
        this.accessSheet();
    };
    Sheet.prototype.dump = function () {
        var _this = this;
        var range = this._sheet.getDataRange();
        var values = range.getValues();
        values.shift(); // Removes the label row
        var mapped = values.map(function (x) { return _this.arr2obj(x); });
        return mapped;
    };
    Sheet.prototype.append = function (data) {
        var _this = this;
        var validatedData = data.filter(function (x) { return _this.validate(x); });
        var values = this.format(validatedData);
        var range = this._sheet.getRange(this.lastRow + 1, 1, values.length, this.labels.length);
        range.setValues(values);
    };
    Sheet.prototype.update = function (id, label, value) {
        var labelIndex = this.labels.indexOf(label);
        // label doesn't exist
        if (labelIndex == -1)
            return null;
        var idRnage = this._sheet.getRange(1, 1, this.lastRow, 1);
        var ids = idRnage.getValues().flat();
        var idIndex = ids.indexOf(id);
        // id doesn't exist
        if (idIndex === -1)
            return null;
        this._sheet.getRange(idIndex + 1, labelIndex + 1).setValue(value);
        this._sheet.getRange(idIndex + 1, this.lastColumn - 1).setValue(new Date());
    };
    return Sheet;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sheet);


/***/ }),

/***/ "./src/constant.ts":
/*!*************************!*\
  !*** ./src/constant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORY_SEED: () => (/* binding */ CATEGORY_SEED),
/* harmony export */   PAYER_SEED: () => (/* binding */ PAYER_SEED),
/* harmony export */   PAYMENT_SEED: () => (/* binding */ PAYMENT_SEED),
/* harmony export */   SHEET_ID: () => (/* binding */ SHEET_ID)
/* harmony export */ });
/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =    CONSTANTS    = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */
var SHEET_ID = '18xE9SIrzZEZ-Ld-QqlGRLTxpNu5LLf84z3QgAqXtdH4';
/* = = = = = = =    SEEDS    = = = = = = = */
var CATEGORY_SEED = [
    { name: '食材費' },
    { name: '間食費' },
    { name: '外食費' },
    { name: '日用品費' },
    { name: '被服費' },
    { name: '医療費' },
    { name: '教養娯楽費' },
    { name: '通信費' },
    { name: '水道光熱費' },
    { name: '住居費' },
    { name: '美容費' },
    { name: '交際費' },
    { name: '移動費' },
    { name: '特別費' },
    { name: '雑費' }
];
var PAYMENT_SEED = [
    { name: '現金' },
    { name: 'QRコード決済' },
    { name: 'クレジットカード' },
    { name: '交通系' },
    { name: 'デビットカード' },
    { name: '銀行振り込み' }
];
var PAYER_SEED = [
    { name: 'イントロダクション' },
    { name: 'SIDE HUSTLE' },
    { name: 'もらい金' }
];


/***/ }),

/***/ "./src/lib/doGet.ts":
/*!**************************!*\
  !*** ./src/lib/doGet.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ doGet)
/* harmony export */ });
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/index */ "./src/classes/index.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response */ "./src/lib/response.ts");


function doGet(e) {
    return (0,_response__WEBPACK_IMPORTED_MODULE_1__.JsonResponse)({
        subscriotion: _classes_index__WEBPACK_IMPORTED_MODULE_0__.SUBSCRIPTION.dump(),
        expenditure: _classes_index__WEBPACK_IMPORTED_MODULE_0__.EXPENDITURE.dump(),
        category: _classes_index__WEBPACK_IMPORTED_MODULE_0__.CATEGORY.dump(),
        payment: _classes_index__WEBPACK_IMPORTED_MODULE_0__.PAYMENT.dump(),
        income: _classes_index__WEBPACK_IMPORTED_MODULE_0__.INCOME.dump(),
        payer: _classes_index__WEBPACK_IMPORTED_MODULE_0__.PAYER.dump(),
        loan: _classes_index__WEBPACK_IMPORTED_MODULE_0__.LOAN.dump()
    });
}


/***/ }),

/***/ "./src/lib/doPost.ts":
/*!***************************!*\
  !*** ./src/lib/doPost.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ doPost)
/* harmony export */ });
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/index */ "./src/classes/index.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response */ "./src/lib/response.ts");


var isIncomeDataType = function (data) {
    return data;
};
var isExpenditureDataType = function (data) {
    return data;
};
function doPost(e) {
    var json = JSON.parse(e.postData.contents);
    if (!json.type)
        return (0,_response__WEBPACK_IMPORTED_MODULE_1__.ErrorResponse)('Missing type');
    var type = json.type;
    if (!['income', 'expenditure'].includes(type))
        return (0,_response__WEBPACK_IMPORTED_MODULE_1__.ErrorResponse)('incorrect type');
    var data = json.data;
    if (type === 'income' && isIncomeDataType(data))
        _classes_index__WEBPACK_IMPORTED_MODULE_0__.INCOME.append([data]);
    if (type === 'expenditure' && isExpenditureDataType(data))
        _classes_index__WEBPACK_IMPORTED_MODULE_0__.EXPENDITURE.append([data]);
}


/***/ }),

/***/ "./src/lib/response.ts":
/*!*****************************!*\
  !*** ./src/lib/response.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorResponse: () => (/* binding */ ErrorResponse),
/* harmony export */   JsonResponse: () => (/* binding */ JsonResponse)
/* harmony export */ });
var Respond = function (status, message) {
    return ContentService.createTextOutput()
        .setContent(JSON.stringify({ status: status, message: message }))
        .setMimeType(ContentService.MimeType.JSON);
};
var ErrorResponse = function (message) {
    return Respond(400, message);
};
var JsonResponse = function (json) {
    return ContentService.createTextOutput()
        .setContent(JSON.stringify(json))
        .setMimeType(ContentService.MimeType.JSON);
};


/***/ }),

/***/ "./src/lib/seed.ts":
/*!*************************!*\
  !*** ./src/lib/seed.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/index */ "./src/classes/index.ts");


function initialize() {
    _classes_index__WEBPACK_IMPORTED_MODULE_1__.SUBSCRIPTION.initialize();
    _classes_index__WEBPACK_IMPORTED_MODULE_1__.EXPENDITURE.initialize();
    _classes_index__WEBPACK_IMPORTED_MODULE_1__.INCOME.initialize();
    _classes_index__WEBPACK_IMPORTED_MODULE_1__.LOAN.initialize();
    if (_classes_index__WEBPACK_IMPORTED_MODULE_1__.CATEGORY.isClean)
        _classes_index__WEBPACK_IMPORTED_MODULE_1__.CATEGORY.append(_constant__WEBPACK_IMPORTED_MODULE_0__.CATEGORY_SEED);
    if (_classes_index__WEBPACK_IMPORTED_MODULE_1__.PAYMENT.isClean)
        _classes_index__WEBPACK_IMPORTED_MODULE_1__.PAYMENT.append(_constant__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_SEED);
    if (_classes_index__WEBPACK_IMPORTED_MODULE_1__.PAYER.isClean)
        _classes_index__WEBPACK_IMPORTED_MODULE_1__.PAYER.append(_constant__WEBPACK_IMPORTED_MODULE_0__.PAYER_SEED);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_seed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/seed */ "./src/lib/seed.ts");
/* harmony import */ var _lib_doPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/doPost */ "./src/lib/doPost.ts");
/* harmony import */ var _lib_doGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/doGet */ "./src/lib/doGet.ts");



__webpack_require__.g.seed = _lib_seed__WEBPACK_IMPORTED_MODULE_0__.initialize;
__webpack_require__.g.doPost = _lib_doPost__WEBPACK_IMPORTED_MODULE_1__["default"];
__webpack_require__.g.doGet = _lib_doGet__WEBPACK_IMPORTED_MODULE_2__["default"];

})();

/******/ })()
;