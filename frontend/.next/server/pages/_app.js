/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"signOut\": () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_apiClient__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\n([_services_apiClient__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"@nextauth.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    } catch  {\n        console.log(\"erro ao deslogar\");\n    }\n}\nfunction AuthProvider({ children  }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //tentar pegar algo no cookie\n        const { \"@nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { id , name , email  } = response.data;\n                setUser({\n                    id,\n                    name,\n                    email\n                });\n            }).catch(()=>{\n                //Se deu erro, deslogamos o user.\n                signOut();\n            });\n        }\n    }, []);\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/session\", {\n                email,\n                password\n            });\n            // console.log(response.data)\n            const { id , name , token  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\" //Quais caminhos terão acesso ao cookie\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passar para próximas requisições o nosso token\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Logado com sucesso!\");\n            //Redirecionar o user para /dashboard\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao acessar!\");\n            console.log(\"ERRO AO ACESSAR \", err);\n        }\n    }\n    async function signUp({ name , email , password  }) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Conta criada com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao cadastrar\");\n            console.log(\"erro ao cadastrar \", err);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFO0FBRTNCO0FBRXFCO0FBQy9CO0FBRUs7QUErQi9CLE1BQU1TLDRCQUFjVCxvREFBYUEsQ0FBQyxDQUFDLEdBQXFCO0FBRXhELFNBQVNVLFVBQVU7SUFDeEIsSUFBSTtRQUNGTixzREFBYUEsQ0FBQ08sV0FBVztRQUN6QkosdURBQVcsQ0FBQztJQUNkLEVBQUUsT0FBTTtRQUNOTSxRQUFRQyxHQUFHLENBQUM7SUFDZDtBQUNGLENBQUM7QUFFTSxTQUFTQyxhQUFhLEVBQUVDLFNBQVEsRUFBcUIsRUFBRTtJQUM1RCxNQUFLLENBQUNDLE1BQU1DLFFBQVEsR0FBR2pCLCtDQUFRQTtJQUMvQixNQUFNa0Isa0JBQWtCLENBQUMsQ0FBQ0Y7SUFFMUJmLGdEQUFTQSxDQUFDLElBQU07UUFFZCw2QkFBNkI7UUFDN0IsTUFBTSxFQUFFLG1CQUFtQmtCLE1BQUssRUFBQyxHQUFHZCxxREFBWUE7UUFFaEQsSUFBR2MsT0FBTztZQUNSakIsd0RBQU8sQ0FBQyxPQUFPbUIsSUFBSSxDQUFDQyxDQUFBQSxXQUFZO2dCQUM5QixNQUFNLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsU0FBU0ksSUFBSTtnQkFFekNULFFBQVE7b0JBQ05NO29CQUNBQztvQkFDQUM7Z0JBQ0Y7WUFFRixHQUNDRSxLQUFLLENBQUMsSUFBTTtnQkFDWCxpQ0FBaUM7Z0JBQ2pDbEI7WUFDRjtRQUNGLENBQUM7SUFFSCxHQUFHLEVBQUU7SUFFTCxlQUFlbUIsT0FBUSxFQUFFSCxNQUFLLEVBQUVJLFNBQVEsRUFBZSxFQUFFO1FBQ3ZELElBQUk7WUFDRixNQUFNUCxXQUFXLE1BQU9wQix5REFBUSxDQUFDLFlBQVk7Z0JBQzNDdUI7Z0JBQ0FJO1lBQ0Y7WUFDQSw2QkFBNkI7WUFFN0IsTUFBTSxFQUFFTixHQUFFLEVBQUVDLEtBQUksRUFBRUwsTUFBSyxFQUFFLEdBQUdHLFNBQVNJLElBQUk7WUFFekN0QixrREFBU0EsQ0FBQ00sV0FBVyxtQkFBbUJTLE9BQU87Z0JBQzdDWSxRQUFRLEtBQUssS0FBSyxLQUFLO2dCQUN2QkMsTUFBTSxJQUFJLHVDQUF1QztZQUNuRDtZQUVBZixRQUFRO2dCQUNOTTtnQkFDQUM7Z0JBQ0FDO1lBQ0Y7WUFFQSxnREFBZ0Q7WUFDaER2QixtRkFBcUMsR0FBRyxDQUFDLE9BQU8sRUFBRWlCLE1BQU0sQ0FBQztZQUV6RFoseURBQWEsQ0FBQztZQUVkLHFDQUFxQztZQUNyQ0QsdURBQVcsQ0FBQztRQUVkLEVBQUUsT0FBTThCLEtBQUs7WUFDVDdCLHVEQUFXLENBQUU7WUFDYkssUUFBUUMsR0FBRyxDQUFDLG9CQUFvQnVCO1FBQ3BDO0lBQ0Y7SUFFQSxlQUFlRSxPQUFPLEVBQUVkLEtBQUksRUFBRUMsTUFBSyxFQUFFSSxTQUFRLEVBQWUsRUFBRTtRQUM1RCxJQUFJO1lBRUYsTUFBTVAsV0FBVyxNQUFNcEIseURBQVEsQ0FBQyxVQUFVO2dCQUN4Q3NCO2dCQUNBQztnQkFDQUk7WUFDRjtZQUVBdEIseURBQWEsQ0FBRTtZQUVmRCx1REFBVyxDQUFDO1FBRWQsRUFBQyxPQUFNOEIsS0FBSztZQUNWN0IsdURBQVcsQ0FBQztZQUNaSyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCdUI7UUFDcEM7SUFFRjtJQUVBLHFCQUNFLDhEQUFDNUIsWUFBWStCLFFBQVE7UUFBQ0MsT0FBTztZQUFFeEI7WUFBTUU7WUFBaUJVO1lBQVFuQjtZQUFTNkI7UUFBTztrQkFDMUV2Qjs7Ozs7O0FBR1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaUNsaWVudCdcclxuXHJcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHNldENvb2tpZSwgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5cclxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XHJcbiAgdXNlcjogVXNlclByb3BzO1xyXG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICBzaWduSW46IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+UHJvbWlzZTx2b2lkPlxyXG4gIHNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgc2lnblVwOiAoY3JlZGVudGlhbHM6IFNpZ25JblByb3BzKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG4gdHlwZSBVc2VyUHJvcHMgPSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICB9XHJcblxyXG4gIHR5cGUgU2lnbkluUHJvcHMgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICB9XHJcblxyXG4gIHR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIH1cclxuXHJcbiAgdHlwZSBTaWduVXBQcm9wcyA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnQG5leHRhdXRoLnRva2VuJylcclxuICAgIFJvdXRlci5wdXNoKCcvJylcclxuICB9IGNhdGNoIHtcclxuICAgIGNvbnNvbGUubG9nKCdlcnJvIGFvIGRlc2xvZ2FyJylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0W3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclByb3BzPigpXHJcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAvL3RlbnRhciBwZWdhciBhbGdvIG5vIGNvb2tpZVxyXG4gICAgY29uc3QgeyAnQG5leHRhdXRoLnRva2VuJzogdG9rZW59ID0gcGFyc2VDb29raWVzKCk7XHJcblxyXG4gICAgaWYodG9rZW4pIHtcclxuICAgICAgYXBpLmdldCgnL21lJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAvL1NlIGRldSBlcnJvLCBkZXNsb2dhbW9zIG8gdXNlci5cclxuICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHsgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25JblByb3BzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICBhcGkucG9zdCgnL3Nlc3Npb24nLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ0BuZXh0YXV0aC50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcclxuICAgICAgICBwYXRoOiBcIi9cIiAvL1F1YWlzIGNhbWluaG9zIHRlcsOjbyBhY2Vzc28gYW8gY29va2llXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvL1Bhc3NhciBwYXJhIHByw7N4aW1hcyByZXF1aXNpw6fDtWVzIG8gbm9zc28gdG9rZW5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gXHJcblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKCdMb2dhZG8gY29tIHN1Y2Vzc28hJylcclxuXHJcbiAgICAgIC8vUmVkaXJlY2lvbmFyIG8gdXNlciBwYXJhIC9kYXNoYm9hcmRcclxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxyXG5cclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IgKFwiRXJybyBhbyBhY2Vzc2FyIVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJSTyBBTyBBQ0VTU0FSIFwiLCBlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduVXAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogU2lnblVwUHJvcHMpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvdXNlcnMnLCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdG9hc3Quc3VjY2VzcyAoXCJDb250YSBjcmlhZGEgY29tIHN1Y2Vzc28hXCIpXHJcblxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcblxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm8gYW8gY2FkYXN0cmFyXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJybyBhbyBjYWRhc3RyYXIgXCIsIGVycilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgc2lnbkluLCBzaWduT3V0LCBzaWduVXAgfX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiZGVzdHJveUNvb2tpZSIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsIlJvdXRlciIsInRvYXN0IiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImRhdGEiLCJjYXRjaCIsInNpZ25JbiIsInBhc3N3b3JkIiwicG9zdCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJzdWNjZXNzIiwiZXJyIiwiZXJyb3IiLCJzaWduVXAiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                autoClose: 3000\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\ReactJS_NodeJS\\\\projeto_pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUVhO0FBQ0Q7QUFFTztBQUVyRCxTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDL0MscUJBQ0UsOERBQUNILCtEQUFZQTs7MEJBQ1gsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNKLDBEQUFjQTtnQkFBQ0ssV0FBVzs7Ozs7Ozs7Ozs7O0FBR2pDO0FBRUEsaUVBQWVILEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2NzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXG5cbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvQXV0aENvbnRleHQnXG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxUb2FzdENvbnRhaW5lciBhdXRvQ2xvc2U9ezMwMDB9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupAPIClient\": () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenError */ \"./src/services/errors/AuthTokenError.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: \"http://localhost:3333\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@nextauth.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            //qualquer erro 401 (não autorizado) devemos deslogar o usuário\n            if (true) {\n                // Chamar a função para deslogar o usuário\n                (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNIO0FBQ21CO0FBRVA7QUFFM0MsU0FBU0ksZUFBZUMsTUFBTUMsU0FBUyxFQUFFO0lBQzlDLElBQUlDLFVBQVVOLHFEQUFZQSxDQUFDSTtJQUUzQixNQUFNRyxNQUFNUixvREFBWSxDQUFFO1FBQ3hCVSxTQUFTO1FBQ1RDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkQ7SUFDRjtJQUVBQyxJQUFJSyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRCxDQUFBQSxXQUFZO1FBQ3hDLE9BQU9BO0lBQ1QsR0FBRyxDQUFDRSxRQUFzQjtRQUN4QixJQUFHQSxNQUFNRixRQUFRLENBQUNHLE1BQU0sS0FBSyxLQUFLO1lBQ2hDLCtEQUErRDtZQUMvRCxJQUFJLElBQTJCWCxFQUFFO2dCQUMvQiwwQ0FBMEM7Z0JBQzFDSCw4REFBT0E7WUFDVCxPQUFPLEVBRU47UUFDSCxDQUFDO1FBRUQsT0FBT2UsUUFBUUMsTUFBTSxDQUFDSDtJQUV4QjtJQUVBLE9BQU9SO0FBRVQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7IEF1dGhUb2tlbkVycm9yIH0gZnJvbSAnLi9lcnJvcnMvQXV0aFRva2VuRXJyb3InO1xyXG5cclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JzsgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBBUElDbGllbnQoY3R4ID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlICh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXNbJ0BuZXh0YXV0aC50b2tlbiddfWBcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBhcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShyZXNwb25zZSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIC8vcXVhbHF1ZXIgZXJybyA0MDEgKG7Do28gYXV0b3JpemFkbykgZGV2ZW1vcyBkZXNsb2dhciBvIHVzdcOhcmlvXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBDaGFtYXIgYSBmdW7Dp8OjbyBwYXJhIGRlc2xvZ2FyIG8gdXN1w6FyaW9cclxuICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0IChuZXcgQXV0aFRva2VuRXJyb3IoKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcblxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBhcGk7XHJcblxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwicGFyc2VDb29raWVzIiwiQXV0aFRva2VuRXJyb3IiLCJzaWduT3V0Iiwic2V0dXBBUElDbGllbnQiLCJjdHgiLCJ1bmRlZmluZWQiLCJjb29raWVzIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzPzdkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBBUElDbGllbnQgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBzZXR1cEFQSUNsaWVudCgpOyJdLCJuYW1lcyI6WyJzZXR1cEFQSUNsaWVudCIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/apiClient.ts\n");

/***/ }),

/***/ "./src/services/errors/AuthTokenError.ts":
/*!***********************************************!*\
  !*** ./src/services/errors/AuthTokenError.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthTokenError\": () => (/* binding */ AuthTokenError)\n/* harmony export */ });\nclass AuthTokenError extends Error {\n    constructor(){\n        super(\"Error with authentication token.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSx1QkFBdUJDO0lBQ2xDQyxhQUFjO1FBQ1osS0FBSyxDQUFFO0lBQ1Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzPzIzZWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIgKCdFcnJvciB3aXRoIGF1dGhlbnRpY2F0aW9uIHRva2VuLicpXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkF1dGhUb2tlbkVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/errors/AuthTokenError.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();