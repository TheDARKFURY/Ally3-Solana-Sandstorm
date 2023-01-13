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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Landing.tsx":
/*!********************************!*\
  !*** ./components/Landing.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Landing\": () => (/* binding */ Landing)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/hooks */ \"./store/hooks.ts\");\n/* harmony import */ var _features_collabInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/collabInfo */ \"./features/collabInfo.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n\n\n\nconst Landing = ()=>{\n    const walletAddress = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.collabInfo.AdminWallet);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const { publicKey , connected , connect  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_features_collabInfo__WEBPACK_IMPORTED_MODULE_5__.addAdminWallet)(publicKey?.toString()));\n        if (connected) {\n            next_router__WEBPACK_IMPORTED_MODULE_6___default().push(\"/reward\");\n        }\n    }, [\n        publicKey,\n        connected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bgLanding md:grid md:grid-cols-2 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \" flex flex-col justify-center items-center space-y-20 min-h-screen \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase super font-Lexend \",\n                            children: \"Ally3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center text-center space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-transparent bg-clip-text text-xl xl:text-2xl 2xl:text-3xl tracking-tighter font-medium capitalize superdes font-Lexend\",\n                                    children: '\"Tokens and NFTs can be bought,'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \" text-xl 2xl:text-3xl xl:text-xl font-medium capitalize font-Lexend flex flex-row gap-x-3 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-transparent bg-clip-text superdes tracking-tighter \",\n                                            children: 'Contribution Power needs to be earned\"'\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        \"\\uD83C\\uDFC6\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center relative \",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletMultiButton, {}, void 0, false, {\n                                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n            lineNumber: 29,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0Q7QUFJaEI7QUFDQTtBQUV4Q0ksbUJBQU8sQ0FBQyw2R0FBNEMsQ0FBQztBQUNVO0FBQ1I7QUFDdkI7QUFDekIsTUFBTUssT0FBTyxHQUFHLElBQU07SUFDNUIsTUFBTUMsYUFBYSxHQUFHSiw0REFBYyxDQUNuQyxDQUFDSyxLQUFLLEdBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxXQUFXLENBQ3ZDO0lBRUQsTUFBTUMsUUFBUSxHQUFHVCw0REFBYyxFQUFFO0lBQ2pDLE1BQU0sRUFBRVUsU0FBUyxHQUFFQyxTQUFTLEdBQUVDLE9BQU8sR0FBRSxHQUFHakIsdUVBQVMsRUFBRTtJQUVyREcsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2ZXLFFBQVEsQ0FBQ1Asb0VBQWMsQ0FBQ1EsU0FBUyxFQUFFRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUlGLFNBQVMsRUFBRTtZQUNkUix1REFBVyxDQUFDLFNBQVMsQ0FBQztTQUN0QjtLQUNELEVBQUU7UUFBQ08sU0FBUztRQUFFQyxTQUFTO0tBQUMsQ0FBQztJQUUxQixxQkFDQztrQkFDQyw0RUFBQ0ksS0FBRztZQUFDQyxTQUFTLEVBQUMsbUNBQW1DOzs4QkFDakQsOERBQUNELEtBQUc7Ozs7NkJBQU87OEJBQ1gsOERBQUNFLE1BQUk7b0JBQUNELFNBQVMsRUFBQyxxRUFBdUU7O3NDQUN0Riw4REFBQ0UsSUFBRTs0QkFBQ0YsU0FBUyxFQUFDLCtFQUErRTtzQ0FBQyxPQUU5Rjs7Ozs7cUNBQUs7c0NBQ0wsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxpRUFBaUU7OzhDQUMvRSw4REFBQ0csR0FBQztvQ0FBQ0gsU0FBUyxFQUFDLDZIQUE2SDs4Q0FDeEksaUNBQWlDOzs7Ozs2Q0FDL0I7OENBQ0osOERBQUNHLEdBQUM7b0NBQUNILFNBQVMsRUFBQyw0RkFBNkY7O3NEQUN6Ryw4REFBQ0ksTUFBSTs0Q0FBQ0osU0FBUyxFQUFDLDBEQUEwRDtzREFDeEUsd0NBQXdDOzs7OztxREFDbkM7d0NBQUEsY0FFUjs7Ozs7OzZDQUFJOzs7Ozs7cUNBQ0M7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQywrQkFBK0I7O2dDQUM1QyxHQUFHOzhDQUNKLDhEQUFDcEIsOEVBQWlCOzs7OzZDQUFHOzs7Ozs7cUNBQ2hCOzs7Ozs7NkJBQ0E7Ozs7OztxQkFDRjtxQkFDSixDQUNIO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9jb21wb25lbnRzL0xhbmRpbmcudHN4P2FjOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCdcclxuaW1wb3J0IHtcclxuXHRXYWxsZXRNdWx0aUJ1dHRvbixcclxuXHRXYWxsZXRDb25uZWN0QnV0dG9uLFxyXG59IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbnJlcXVpcmUoJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzcycpXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL3N0b3JlL2hvb2tzJ1xyXG5pbXBvcnQgeyBhZGRBZG1pbldhbGxldCB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbGxhYkluZm8nXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmV4cG9ydCBjb25zdCBMYW5kaW5nID0gKCkgPT4ge1xyXG5cdGNvbnN0IHdhbGxldEFkZHJlc3MgPSB1c2VBcHBTZWxlY3RvcihcclxuXHRcdChzdGF0ZSkgPT4gc3RhdGUuY29sbGFiSW5mby5BZG1pbldhbGxldFxyXG5cdClcclxuXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcblx0Y29uc3QgeyBwdWJsaWNLZXksIGNvbm5lY3RlZCwgY29ubmVjdCB9ID0gdXNlV2FsbGV0KClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGFkZEFkbWluV2FsbGV0KHB1YmxpY0tleT8udG9TdHJpbmcoKSkpXHJcblx0XHRpZiAoY29ubmVjdGVkKSB7XHJcblx0XHRcdFJvdXRlci5wdXNoKCcvcmV3YXJkJylcclxuXHRcdH1cclxuXHR9LCBbcHVibGljS2V5LCBjb25uZWN0ZWRdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnTGFuZGluZyBtZDpncmlkIG1kOmdyaWQtY29scy0yICc+XHJcblx0XHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0XHQ8bWFpbiBjbGFzc05hbWU9JyAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS0yMCBtaW4taC1zY3JlZW4gICc+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSd0ZXh0LTR4bCB4bDp0ZXh0LTV4bCAyeGw6dGV4dC02eGwgZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIHN1cGVyIGZvbnQtTGV4ZW5kICc+XHJcblx0XHRcdFx0XHRcdEFsbHkzXHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHNwYWNlLXktMic+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgdGV4dC14bCB4bDp0ZXh0LTJ4bCAyeGw6dGV4dC0zeGwgdHJhY2tpbmctdGlnaHRlciBmb250LW1lZGl1bSBjYXBpdGFsaXplIHN1cGVyZGVzIGZvbnQtTGV4ZW5kJz5cclxuXHRcdFx0XHRcdFx0XHR7J1wiVG9rZW5zIGFuZCBORlRzIGNhbiBiZSBib3VnaHQsJ31cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIDJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LXhsIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgIGZvbnQtTGV4ZW5kIGZsZXggZmxleC1yb3cgZ2FwLXgtMyAnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgc3VwZXJkZXMgdHJhY2tpbmctdGlnaHRlciAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0eydDb250cmlidXRpb24gUG93ZXIgbmVlZHMgdG8gYmUgZWFybmVkXCInfVxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHTwn4+GXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgJz5cclxuXHRcdFx0XHRcdFx0eycgJ31cclxuXHRcdFx0XHRcdFx0PFdhbGxldE11bHRpQnV0dG9uIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L21haW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwicmVxdWlyZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJhZGRBZG1pbldhbGxldCIsIlJvdXRlciIsIkxhbmRpbmciLCJ3YWxsZXRBZGRyZXNzIiwic3RhdGUiLCJjb2xsYWJJbmZvIiwiQWRtaW5XYWxsZXQiLCJkaXNwYXRjaCIsInB1YmxpY0tleSIsImNvbm5lY3RlZCIsImNvbm5lY3QiLCJ0b1N0cmluZyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Landing.tsx\n");

/***/ }),

/***/ "./features/collabInfo.ts":
/*!********************************!*\
  !*** ./features/collabInfo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CollabInfo\": () => (/* binding */ CollabInfo),\n/* harmony export */   \"addAdminWallet\": () => (/* binding */ addAdminWallet),\n/* harmony export */   \"addCollabName\": () => (/* binding */ addCollabName),\n/* harmony export */   \"addContributionPower\": () => (/* binding */ addContributionPower),\n/* harmony export */   \"addDescription\": () => (/* binding */ addDescription),\n/* harmony export */   \"addLeadName\": () => (/* binding */ addLeadName),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    collabName: \"\",\n    LeadName: \"\",\n    Description: \"\",\n    AdminWallet: \"\",\n    ContributionPower: 0\n};\nconst CollabInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"collab\",\n    initialState,\n    reducers: {\n        addCollabName: (state, action)=>{\n            state.collabName = action.payload;\n        },\n        addLeadName: (state, action)=>{\n            state.LeadName = action.payload;\n        },\n        addDescription: (state, action)=>{\n            state.Description = action.payload;\n        },\n        addAdminWallet: (state, action)=>{\n            state.AdminWallet = action.payload;\n        },\n        addContributionPower: (state, action)=>{\n            state.ContributionPower = action.payload;\n        }\n    }\n});\nconst { addAdminWallet , addCollabName , addDescription , addLeadName , addContributionPower  } = CollabInfo.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollabInfo.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb2xsYWJJbmZvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQVU5QyxNQUFNQyxZQUFZLEdBQVc7SUFDNUJDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLGlCQUFpQixFQUFFLENBQUM7Q0FDcEI7QUFFTSxNQUFNQyxVQUFVLEdBQUdQLDZEQUFXLENBQUM7SUFDckNRLElBQUksRUFBRSxRQUFRO0lBQ2RQLFlBQVk7SUFDWlEsUUFBUSxFQUFFO1FBQ1RDLGFBQWEsRUFBRSxDQUFDQyxLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUM5Q0QsS0FBSyxDQUFDVCxVQUFVLEdBQUdVLE1BQU0sQ0FBQ0MsT0FBTztTQUNqQztRQUNEQyxXQUFXLEVBQUUsQ0FBQ0gsS0FBYSxFQUFFQyxNQUFXLEdBQUs7WUFDNUNELEtBQUssQ0FBQ1IsUUFBUSxHQUFHUyxNQUFNLENBQUNDLE9BQU87U0FDL0I7UUFDREUsY0FBYyxFQUFFLENBQUNKLEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQy9DRCxLQUFLLENBQUNQLFdBQVcsR0FBR1EsTUFBTSxDQUFDQyxPQUFPO1NBQ2xDO1FBQ0RHLGNBQWMsRUFBRSxDQUFDTCxLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUMvQ0QsS0FBSyxDQUFDTixXQUFXLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTztTQUNsQztRQUNESSxvQkFBb0IsRUFBRSxDQUFDTixLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUNyREQsS0FBSyxDQUFDTCxpQkFBaUIsR0FBR00sTUFBTSxDQUFDQyxPQUFPO1NBQ3hDO0tBQ0Q7Q0FDRCxDQUFDO0FBRUssTUFBTSxFQUFFRyxjQUFjLEdBQUVOLGFBQWEsR0FBRUssY0FBYyxHQUFFRCxXQUFXLEdBQUVHLG9CQUFvQixHQUFFLEdBQ2hHVixVQUFVLENBQUNXLE9BQU87QUFFbkIsaUVBQWVYLFVBQVUsQ0FBQ1ksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYm5mdC8uL2ZlYXR1cmVzL2NvbGxhYkluZm8udHM/Zjg4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5pbnRlcmZhY2UgY29sbGFiIHtcclxuXHRjb2xsYWJOYW1lOiBzdHJpbmdcclxuXHRMZWFkTmFtZTogc3RyaW5nXHJcblx0RGVzY3JpcHRpb246IHN0cmluZ1xyXG5cdEFkbWluV2FsbGV0OiBzdHJpbmdcclxuXHRDb250cmlidXRpb25Qb3dlcjogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogY29sbGFiID0ge1xyXG5cdGNvbGxhYk5hbWU6ICcnLFxyXG5cdExlYWROYW1lOiAnJyxcclxuXHREZXNjcmlwdGlvbjogJycsXHJcblx0QWRtaW5XYWxsZXQ6ICcnLFxyXG5cdENvbnRyaWJ1dGlvblBvd2VyOiAwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29sbGFiSW5mbyA9IGNyZWF0ZVNsaWNlKHtcclxuXHRuYW1lOiAnY29sbGFiJyxcclxuXHRpbml0aWFsU3RhdGUsXHJcblx0cmVkdWNlcnM6IHtcclxuXHRcdGFkZENvbGxhYk5hbWU6IChzdGF0ZTogY29sbGFiLCBhY3Rpb246IGFueSkgPT4ge1xyXG5cdFx0XHRzdGF0ZS5jb2xsYWJOYW1lID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGRMZWFkTmFtZTogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkxlYWROYW1lID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGREZXNjcmlwdGlvbjogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkRlc2NyaXB0aW9uID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGRBZG1pbldhbGxldDogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkFkbWluV2FsbGV0ID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGRDb250cmlidXRpb25Qb3dlcjogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkNvbnRyaWJ1dGlvblBvd2VyID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0fSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZEFkbWluV2FsbGV0LCBhZGRDb2xsYWJOYW1lLCBhZGREZXNjcmlwdGlvbiwgYWRkTGVhZE5hbWUsIGFkZENvbnRyaWJ1dGlvblBvd2VyIH0gPVxyXG5cdENvbGxhYkluZm8uYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFiSW5mby5yZWR1Y2VyXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNvbGxhYk5hbWUiLCJMZWFkTmFtZSIsIkRlc2NyaXB0aW9uIiwiQWRtaW5XYWxsZXQiLCJDb250cmlidXRpb25Qb3dlciIsIkNvbGxhYkluZm8iLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRDb2xsYWJOYW1lIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWRkTGVhZE5hbWUiLCJhZGREZXNjcmlwdGlvbiIsImFkZEFkbWluV2FsbGV0IiwiYWRkQ29udHJpYnV0aW9uUG93ZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/collabInfo.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Landing */ \"./components/Landing.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Landing__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Landing__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Landing__WEBPACK_IMPORTED_MODULE_1__.Landing, {}, void 0, false, {\n            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\index.tsx\",\n            lineNumber: 8,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRStDO0FBRS9DLE1BQU1DLElBQUksR0FBYSxJQUFNO0lBQzVCLHFCQUNDO2tCQUNDLDRFQUFDRCx3REFBTzs7OztxQkFBRztxQkFDVCxDQUNIO0NBQ0Q7QUFFRCxpRUFBZUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYm5mdC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5cclxuaW1wb3J0IHsgTGFuZGluZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZGluZydcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TGFuZGluZyAvPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJMYW5kaW5nIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./store/hooks.ts":
/*!************************!*\
  !*** ./store/hooks.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRFO0FBR3JFLE1BQU1FLGNBQWMsR0FBRyxJQUFNRix3REFBVyxFQUFlO0FBQ3ZELE1BQU1HLGNBQWMsR0FBb0NGLG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGFibmZ0Ly4vc3RvcmUvaG9va3MudHM/ZDBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcclxuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3JcclxuIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/hooks.ts\n");

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();