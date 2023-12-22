/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/index.ts":
/*!******************************!*\
  !*** ./src/classes/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sheet)
/* harmony export */ });
const UUID_LABEL = 'UUID';
const STYLE = {
    weight: 'bold',
    background: '#58a55d',
    color: '#ffffff'
};
/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =  SHEET CLASSSES = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */
class Sheet {
    sheetName;
    sp;
    sheet;
    label;
    constructor(sheetName, label) {
        this.sheetName = sheetName;
        this.sp = SpreadsheetApp.openById(SPREAD_ID);
        this.sheet = this.sp.getSheetByName(sheetName);
        this.label = label;
    }
    get existingTable() {
        return this.sheet !== null;
    }
    get labels() {
        return [UUID_LABEL, ...this.label];
    }
    get labelsLength() {
        return this.labels.length;
    }
    get uuid() {
        return Utilities.getUuid();
    }
    formatTable() {
        this.sheet.setFrozenRows(1);
        const lc = this.sheet.getLastColumn();
        const top = this.sheet.getRange(1, 1, 1, lc);
        top.setFontWeight(STYLE.weight);
        top.setBackground(STYLE.background);
        top.setFontColor(STYLE.color);
        const deleteColNumStart = this.labelsLength + 1; // avoid the last colmun itself
        const deleteColNum = 26 - this.labelsLength; // a-z cols and one more
        this.sheet.deleteRows(10, 990);
        this.sheet.deleteColumns(deleteColNumStart, deleteColNum);
    }
    createTable() {
        if (this.existingTable)
            return;
        const newSheet = this.sp.insertSheet(this.sheetName);
        this.sheet = newSheet;
        this.sheet.appendRow(this.labels);
        this.formatTable();
    }
    clearTable() {
        const lr = this.sheet.getLastRow();
        const lc = this.sheet.getLastColumn();
        const rg = this.sheet.getRange(2, 1, lr, lc);
        rg.clear();
    }
    uuidRowNum(uuid) {
        const lr = this.sheet.getLastRow();
        const rg = this.sheet.getRange(1, 1, lr);
        const vals = rg.getValues();
        const ids = vals.flat();
        if (!ids.includes(uuid))
            return 0; // real num start from 1
        const ix = ids.indexOf(uuid);
        const numIx = ix + 1; // index to real number
        return numIx;
    }
    obj2arr(obj) {
        const entries = Object.entries(obj);
        const keys = entries.map(([key, _]) => key);
        const vals = entries.map(([_, val]) => val);
        const hol = [];
        this.labels.forEach((lb) => {
            const index = keys.indexOf(lb);
            const v = index === -1 ? '' : vals[index];
            hol.push(v);
        });
        return hol;
    }
    arr2obj(arr) {
        return this.labels.reduce((pr, cu, ix) => ({ ...pr, [cu]: arr[ix] }), {});
    }
    create(data) {
        const uuid = Utilities.getUuid();
        const uuided = {
            ...data,
            [UUID_LABEL]: uuid
        };
        const arr = this.obj2arr(uuided);
        this.sheet.appendRow(arr);
        return uuid;
    }
    createMany(data) { }
    where(col, data) {
        if (!this.labels.includes(col))
            return null;
        const colIndex = this.labels.indexOf(col) + 1;
        const lr = this.sheet.getLastRow();
        const rg = this.sheet.getRange(1, colIndex, lr, 1);
        const vals = rg.getValues().flat().map(String);
        if (!vals.includes(`${data}`))
            return null; // real num start from 1
        const row = vals.indexOf(`${data}`) + 1; // index + 1 => number
        const range = this.sheet.getRange(row, 1, 1, this.labelsLength);
        const value = range.getValues().flat();
        return this.arr2obj(value);
    }
    find(uuid) {
        return this.where(UUID_LABEL, uuid);
    }
    all() {
        const range = this.sheet.getDataRange();
        const values = range.getValues();
        values.shift(); // removes label
        const mapped = values.map((x) => this.arr2obj(x));
        return mapped;
    }
    findMany(data) { }
    update(uuid, data) {
        const numIx = this.uuidRowNum(uuid);
        if (numIx === 0)
            return null; // no entry found
        const len = this.labelsLength;
        const range = this.sheet.getRange(numIx, 1, 1, len);
        const val = this.obj2arr(data);
        range.setValues([val]);
    }
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
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/index */ "./src/classes/index.ts");

new _classes_index__WEBPACK_IMPORTED_MODULE_0__["default"]('name', ['test']);

})();

/******/ })()
;