/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Node {\n  constructor(value, next = null) {\n    this.value = value;\n    this.next = next;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n    this.size = 0;\n  }\n\n  append(value) {\n    const n = new Node(value);\n    this.size++;\n\n    if (!this.head) {\n      this.head = n;\n    } else {\n      let current = this.head;\n\n      while(current.next) {\n        current = current.next;\n      }\n\n      current.next = n;\n    }\n  }\n\n  prepend(value) {\n    const n = new Node(value, this.head);\n    this.head = n;\n    this.size++;\n  }\n\n  numberOfNodes() {\n    return this.size;\n  }\n\n  firstNode() {\n    return this.head;\n  }\n\n  lastNode() {\n    let current = this.head;\n\n    while(current.next) {\n      current = current.next;\n    }\n\n    return current;\n  }\n\n  at(index) {\n    if (index > this.size) {\n      return 'Please enter the number that corresponds to the size of the linked list.';\n    }\n\n    let current = this.head;\n\n    for (let i = 0; i < index; i++) {\n      current = current.next;\n    }\n\n    return current;\n  }\n\n  pop() {\n    let current = this.head;\n    let previous;\n\n    while(current.next) {\n      previous = current;\n      current = current.next;\n    }\n\n    previous.next = null;\n  }\n\n  contains(value) {\n    let current = this.head;\n    if (current.value === value) {\n      return true;\n    }\n\n    while(current.next) {\n      current = current.next;\n      if (current.value === value) {\n        return true;\n      }\n    }\n\n    return false;\n  }\n\n  find(value) {\n    let count = 0;\n    let current = this.head;\n    if (current.value === value) {\n      return count;\n    }\n\n    while(current.next) {\n      current = current.next;\n      count++;\n      if (current.value === value) {\n        return count;\n      }\n    }\n\n    return null;\n  }\n\n  toString() {\n    let string = '';\n\n    let current = this.head;\n    string += `( ${current.value} ) -> `;\n\n    while(current.next) {\n      current = current.next;\n      string += `( ${current.value} ) -> `;\n    }\n\n    string += 'null';\n    console.log(string);\n  }\n\n  insertAt(value, index) {\n    if (index === 0) {\n      this.prepend(value);\n    } else if (index === this.size) {\n      this.append(value);\n    } else if (index > 0 && index < this.size) {\n      const n = new Node(value);\n      let current = this.head;\n      let previous;\n      let count = 0;\n\n      while(count < index) {\n        previous = current;\n        count++;\n        current = current.next;\n      }\n\n      n.next = current;\n      previous.next = n;\n\n      this.size++;\n    } else {\n      return \"Out of range.\";\n    }\n  }\n\n  removeAt(index) {\n    if (index > 0 && index > this.size) {\n      return 'Out of range.';\n    }\n\n    let current = this.head;\n    let previous;\n    let count = 0;\n\n    if (index === 0) {\n      this.head = current.next;\n    } else {\n      while(count < index) {\n        count++;\n        previous = current;\n        current = current.next;\n      }\n\n      previous.next = current.next;\n    }\n\n    this.size--;\n  }\n}\n\n\n//# sourceURL=webpack://linkedlist-theodinproject/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;