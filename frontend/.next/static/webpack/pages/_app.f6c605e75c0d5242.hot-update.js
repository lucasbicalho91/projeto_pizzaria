"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"@nextauth.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    } catch (e) {\n        console.log(\"erro ao deslogar\");\n    }\n}\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //tentar pegar algo no cookie\n        const { \"@nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { id , name , email  } = response.data;\n                setUser({\n                    id,\n                    name,\n                    email\n                });\n            });\n        }\n    }, []);\n    async function signIn(param) {\n        let { email , password  } = param;\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/session\", {\n                email,\n                password\n            });\n            // console.log(response.data)\n            const { id , name , token  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\" //Quais caminhos terão acesso ao cookie\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passar para próximas requisições o nosso token\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Logado com sucesso!\");\n            //Redirecionar o user para /dashboard\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao acessar!\");\n            console.log(\"ERRO AO ACESSAR \", err);\n        }\n    }\n    async function signUp(param) {\n        let { name , email , password  } = param;\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Conta criada com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao cadastrar\");\n            console.log(\"erro ao cadastrar \", err);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUUzQjtBQUVxQjtBQUMvQjtBQUVLO0FBK0IvQixNQUFNUyw0QkFBY1Qsb0RBQWFBLENBQUMsQ0FBQyxHQUFxQjtBQUV4RCxTQUFTVSxVQUFVO0lBQ3hCLElBQUk7UUFDRk4sc0RBQWFBLENBQUNPLFdBQVc7UUFDekJKLHVEQUFXLENBQUM7SUFDZCxFQUFFLFVBQU07UUFDTk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7QUFDRixDQUFDO0FBRU0sU0FBU0MsYUFBYSxLQUErQixFQUFFO1FBQWpDLEVBQUVDLFNBQVEsRUFBcUIsR0FBL0I7O0lBQzNCLE1BQUssQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHakIsK0NBQVFBO0lBQy9CLE1BQU1rQixrQkFBa0IsQ0FBQyxDQUFDRjtJQUUxQmYsZ0RBQVNBLENBQUMsSUFBTTtRQUVkLDZCQUE2QjtRQUM3QixNQUFNLEVBQUUsbUJBQW1Ca0IsTUFBSyxFQUFDLEdBQUdkLHFEQUFZQTtRQUVoRCxJQUFHYyxPQUFPO1lBQ1JqQix3REFBTyxDQUFDLE9BQU9tQixJQUFJLENBQUNDLENBQUFBLFdBQVk7Z0JBQzlCLE1BQU0sRUFBRUMsR0FBRSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHSCxTQUFTSSxJQUFJO2dCQUV6Q1QsUUFBUTtvQkFDTk07b0JBQ0FDO29CQUNBQztnQkFDRjtZQUNGO1FBQ0YsQ0FBQztJQUVILEdBQUcsRUFBRTtJQUVMLGVBQWVFLE9BQVEsS0FBZ0MsRUFBRTtZQUFsQyxFQUFFRixNQUFLLEVBQUVHLFNBQVEsRUFBZSxHQUFoQztRQUNyQixJQUFJO1lBQ0YsTUFBTU4sV0FBVyxNQUFPcEIseURBQVEsQ0FBQyxZQUFZO2dCQUMzQ3VCO2dCQUNBRztZQUNGO1lBQ0EsNkJBQTZCO1lBRTdCLE1BQU0sRUFBRUwsR0FBRSxFQUFFQyxLQUFJLEVBQUVMLE1BQUssRUFBRSxHQUFHRyxTQUFTSSxJQUFJO1lBRXpDdEIsa0RBQVNBLENBQUNNLFdBQVcsbUJBQW1CUyxPQUFPO2dCQUM3Q1csUUFBUSxLQUFLLEtBQUssS0FBSztnQkFDdkJDLE1BQU0sSUFBSSx1Q0FBdUM7WUFDbkQ7WUFFQWQsUUFBUTtnQkFDTk07Z0JBQ0FDO2dCQUNBQztZQUNGO1lBRUEsZ0RBQWdEO1lBQ2hEdkIsbUZBQXFDLEdBQUcsVUFBZ0IsT0FBTmlCO1lBRWxEWix5REFBYSxDQUFDO1lBRWQscUNBQXFDO1lBQ3JDRCx1REFBVyxDQUFDO1FBRWQsRUFBRSxPQUFNNkIsS0FBSztZQUNUNUIsdURBQVcsQ0FBRTtZQUNiSyxRQUFRQyxHQUFHLENBQUMsb0JBQW9Cc0I7UUFDcEM7SUFDRjtJQUVBLGVBQWVFLE9BQU8sS0FBc0MsRUFBRTtZQUF4QyxFQUFFYixLQUFJLEVBQUVDLE1BQUssRUFBRUcsU0FBUSxFQUFlLEdBQXRDO1FBQ3BCLElBQUk7WUFFRixNQUFNTixXQUFXLE1BQU1wQix5REFBUSxDQUFDLFVBQVU7Z0JBQ3hDc0I7Z0JBQ0FDO2dCQUNBRztZQUNGO1lBRUFyQix5REFBYSxDQUFFO1lBRWZELHVEQUFXLENBQUM7UUFFZCxFQUFDLE9BQU02QixLQUFLO1lBQ1Y1Qix1REFBVyxDQUFDO1lBQ1pLLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JzQjtRQUNwQztJQUVGO0lBRUEscUJBQ0UsOERBQUMzQixZQUFZOEIsUUFBUTtRQUFDQyxPQUFPO1lBQUV2QjtZQUFNRTtZQUFpQlM7WUFBUWxCO1lBQVM0QjtRQUFPO2tCQUMxRXRCOzs7Ozs7QUFHUixDQUFDO0dBbkZlRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4PzFmYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpQ2xpZW50J1xyXG5cclxuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSwgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcclxuICB1c2VyOiBVc2VyUHJvcHM7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIHNpZ25JbjogKGNyZWRlbnRpYWxzOiBTaWduSW5Qcm9wcykgPT5Qcm9taXNlPHZvaWQ+XHJcbiAgc2lnbk91dDogKCkgPT4gdm9pZDtcclxuICBzaWduVXA6IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbiB0eXBlIFVzZXJQcm9wcyA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgdHlwZSBTaWduSW5Qcm9wcyA9IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgdHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgfVxyXG5cclxuICB0eXBlIFNpZ25VcFByb3BzID0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICB0cnkge1xyXG4gICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICdAbmV4dGF1dGgudG9rZW4nKVxyXG4gICAgUm91dGVyLnB1c2goJy8nKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm8gYW8gZGVzbG9nYXInKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3RbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyUHJvcHM+KClcclxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7IFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIC8vdGVudGFyIHBlZ2FyIGFsZ28gbm8gY29va2llXHJcbiAgICBjb25zdCB7ICdAbmV4dGF1dGgudG9rZW4nOiB0b2tlbn0gPSBwYXJzZUNvb2tpZXMoKTtcclxuXHJcbiAgICBpZih0b2tlbikge1xyXG4gICAgICBhcGkuZ2V0KCcvbWUnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHsgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25JblByb3BzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICBhcGkucG9zdCgnL3Nlc3Npb24nLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ0BuZXh0YXV0aC50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcclxuICAgICAgICBwYXRoOiBcIi9cIiAvL1F1YWlzIGNhbWluaG9zIHRlcsOjbyBhY2Vzc28gYW8gY29va2llXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvL1Bhc3NhciBwYXJhIHByw7N4aW1hcyByZXF1aXNpw6fDtWVzIG8gbm9zc28gdG9rZW5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gXHJcblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKCdMb2dhZG8gY29tIHN1Y2Vzc28hJylcclxuXHJcbiAgICAgIC8vUmVkaXJlY2lvbmFyIG8gdXNlciBwYXJhIC9kYXNoYm9hcmRcclxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxyXG5cclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IgKFwiRXJybyBhbyBhY2Vzc2FyIVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJSTyBBTyBBQ0VTU0FSIFwiLCBlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduVXAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogU2lnblVwUHJvcHMpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvdXNlcnMnLCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdG9hc3Quc3VjY2VzcyAoXCJDb250YSBjcmlhZGEgY29tIHN1Y2Vzc28hXCIpXHJcblxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcblxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm8gYW8gY2FkYXN0cmFyXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJybyBhbyBjYWRhc3RyYXIgXCIsIGVycilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgc2lnbkluLCBzaWduT3V0LCBzaWduVXAgfX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiZGVzdHJveUNvb2tpZSIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsIlJvdXRlciIsInRvYXN0IiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImRhdGEiLCJzaWduSW4iLCJwYXNzd29yZCIsInBvc3QiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwic3VjY2VzcyIsImVyciIsImVycm9yIiwic2lnblVwIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});