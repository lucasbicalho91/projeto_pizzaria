"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category",{

/***/ "./src/pages/category/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/category/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Category; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/category/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Category() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function handleRegister(event) {\n        event.preventDefault();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Nova categoria - Sujeito Pizzaria\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Cadastrar categorias\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),\n                                onSubmit: handleRegister,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Digite o nome da categoria\",\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                        value: name,\n                                        onChange: (e)=>setName(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonAdd),\n                                        type: \"submit\",\n                                        children: \"Cadastrar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\category\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"/PAWDgWx7+Y6BmsFMUKcdrcX5eM=\");\n_c = Category;\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2F0ZWdvcnkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNmO0FBQ2dCO0FBQ0g7QUFFMUIsU0FBU0ksV0FBVzs7SUFDakMsTUFBSyxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTlCLGVBQWVPLGVBQWVDLEtBQWdCLEVBQUU7UUFDOUNBLE1BQU1DLGNBQWM7SUFDdEI7SUFFRixxQkFDRTs7MEJBQ0EsOERBQUNSLGtEQUFJQTswQkFDSCw0RUFBQ1M7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQzs7a0NBQ0MsOERBQUNULHNEQUFNQTs7Ozs7a0NBRVAsOERBQUNVO3dCQUFLQyxXQUFXVixzRUFBZ0I7OzBDQUMvQiw4REFBQ1k7MENBQUc7Ozs7OzswQ0FFSiw4REFBQ0M7Z0NBQUtILFdBQVdWLGlFQUFXO2dDQUFFYyxVQUFVVjs7a0RBQ3RDLDhEQUFDVzt3Q0FDREMsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWlAsV0FBV1Ysa0VBQVk7d0NBQ3ZCa0IsT0FBT2hCO3dDQUNQaUIsVUFBVyxDQUFDQyxJQUFNakIsUUFBUWlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tEQUd4Qyw4REFBQ0k7d0NBQU9aLFdBQVdWLHNFQUFnQjt3Q0FBRWdCLE1BQUs7a0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzdELENBQUM7R0F0Q3VCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2F0ZWdvcnkvaW5kZXgudHN4P2VmN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIEZvcm1FdmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSgpIHtcclxuICBjb25zdFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlZ2lzdGVyKGV2ZW50OiBGb3JtRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Tm92YSBjYXRlZ29yaWEgLSBTdWplaXRvIFBpenphcmlhPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgxPkNhZGFzdHJhciBjYXRlZ29yaWFzPC9oMT5cclxuXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVJlZ2lzdGVyfT5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZGEgY2F0ZWdvcmlhXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQWRkfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIENhZGFzdHJhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWQiLCJIZWFkZXIiLCJzdHlsZXMiLCJDYXRlZ29yeSIsIm5hbWUiLCJzZXROYW1lIiwiaGFuZGxlUmVnaXN0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwiYnV0dG9uQWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/category/index.tsx\n"));

/***/ })

});