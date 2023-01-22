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

/***/ "./features/collabInfo.ts":
/*!********************************!*\
  !*** ./features/collabInfo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CollabInfo\": () => (/* binding */ CollabInfo),\n/* harmony export */   \"addAdminWallet\": () => (/* binding */ addAdminWallet),\n/* harmony export */   \"addCollabName\": () => (/* binding */ addCollabName),\n/* harmony export */   \"addContributionPower\": () => (/* binding */ addContributionPower),\n/* harmony export */   \"addDescription\": () => (/* binding */ addDescription),\n/* harmony export */   \"addGitHub\": () => (/* binding */ addGitHub),\n/* harmony export */   \"addLeadName\": () => (/* binding */ addLeadName),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    collabName: \"\",\n    LeadName: \"\",\n    Description: \"\",\n    GitHub: \"\",\n    AdminWallet: \"\",\n    ContributionPower: 0\n};\nconst CollabInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"collab\",\n    initialState,\n    reducers: {\n        addCollabName: (state, action)=>{\n            state.collabName = action.payload;\n        },\n        addLeadName: (state, action)=>{\n            state.LeadName = action.payload;\n        },\n        addDescription: (state, action)=>{\n            state.Description = action.payload;\n        },\n        addGitHub: (state, action)=>{\n            state.GitHub = action.payload;\n        },\n        addAdminWallet: (state, action)=>{\n            state.AdminWallet = action.payload;\n        },\n        addContributionPower: (state, action)=>{\n            state.ContributionPower = action.payload;\n        }\n    }\n});\nconst { addAdminWallet , addCollabName , addDescription , addGitHub , addLeadName , addContributionPower  } = CollabInfo.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollabInfo.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb2xsYWJJbmZvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFXOUMsTUFBTUMsWUFBWSxHQUFXO0lBQzVCQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxpQkFBaUIsRUFBRSxDQUFDO0NBQ3BCO0FBRU0sTUFBTUMsVUFBVSxHQUFHUiw2REFBVyxDQUFDO0lBQ3JDUyxJQUFJLEVBQUUsUUFBUTtJQUNkUixZQUFZO0lBQ1pTLFFBQVEsRUFBRTtRQUNUQyxhQUFhLEVBQUUsQ0FBQ0MsS0FBYSxFQUFFQyxNQUFXLEdBQUs7WUFDOUNELEtBQUssQ0FBQ1YsVUFBVSxHQUFHVyxNQUFNLENBQUNDLE9BQU87U0FDakM7UUFDREMsV0FBVyxFQUFFLENBQUNILEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQzVDRCxLQUFLLENBQUNULFFBQVEsR0FBR1UsTUFBTSxDQUFDQyxPQUFPO1NBQy9CO1FBQ0RFLGNBQWMsRUFBRSxDQUFDSixLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUMvQ0QsS0FBSyxDQUFDUixXQUFXLEdBQUdTLE1BQU0sQ0FBQ0MsT0FBTztTQUNsQztRQUNERyxTQUFTLEVBQUUsQ0FBQ0wsS0FBYSxFQUFFQyxNQUFXLEdBQUs7WUFDMUNELEtBQUssQ0FBQ1AsTUFBTSxHQUFHUSxNQUFNLENBQUNDLE9BQU87U0FDN0I7UUFDREksY0FBYyxFQUFFLENBQUNOLEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQy9DRCxLQUFLLENBQUNOLFdBQVcsR0FBR08sTUFBTSxDQUFDQyxPQUFPO1NBQ2xDO1FBQ0RLLG9CQUFvQixFQUFFLENBQUNQLEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQ3JERCxLQUFLLENBQUNMLGlCQUFpQixHQUFHTSxNQUFNLENBQUNDLE9BQU87U0FDeEM7S0FDRDtDQUNELENBQUM7QUFFSyxNQUFNLEVBQUVJLGNBQWMsR0FBRVAsYUFBYSxHQUFFSyxjQUFjLEdBQUVDLFNBQVMsR0FBRUYsV0FBVyxHQUFFSSxvQkFBb0IsR0FBRSxHQUMzR1gsVUFBVSxDQUFDWSxPQUFPO0FBRW5CLGlFQUFlWixVQUFVLENBQUNhLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9mZWF0dXJlcy9jb2xsYWJJbmZvLnRzP2Y4ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbnRlcmZhY2UgY29sbGFiIHtcblx0Y29sbGFiTmFtZTogc3RyaW5nXG5cdExlYWROYW1lOiBzdHJpbmdcblx0RGVzY3JpcHRpb246IHN0cmluZ1xuXHRHaXRIdWI6IHN0cmluZ1xuXHRBZG1pbldhbGxldDogc3RyaW5nXG5cdENvbnRyaWJ1dGlvblBvd2VyOiBudW1iZXJcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBjb2xsYWIgPSB7XG5cdGNvbGxhYk5hbWU6ICcnLFxuXHRMZWFkTmFtZTogJycsXG5cdERlc2NyaXB0aW9uOiAnJyxcblx0R2l0SHViOiAnJyxcblx0QWRtaW5XYWxsZXQ6ICcnLFxuXHRDb250cmlidXRpb25Qb3dlcjogMCxcbn1cblxuZXhwb3J0IGNvbnN0IENvbGxhYkluZm8gPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdjb2xsYWInLFxuXHRpbml0aWFsU3RhdGUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0YWRkQ29sbGFiTmFtZTogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XG5cdFx0XHRzdGF0ZS5jb2xsYWJOYW1lID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHRcdGFkZExlYWROYW1lOiAoc3RhdGU6IGNvbGxhYiwgYWN0aW9uOiBhbnkpID0+IHtcblx0XHRcdHN0YXRlLkxlYWROYW1lID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHRcdGFkZERlc2NyaXB0aW9uOiAoc3RhdGU6IGNvbGxhYiwgYWN0aW9uOiBhbnkpID0+IHtcblx0XHRcdHN0YXRlLkRlc2NyaXB0aW9uID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHRcdGFkZEdpdEh1YjogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XG5cdFx0XHRzdGF0ZS5HaXRIdWIgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdFx0YWRkQWRtaW5XYWxsZXQ6IChzdGF0ZTogY29sbGFiLCBhY3Rpb246IGFueSkgPT4ge1xuXHRcdFx0c3RhdGUuQWRtaW5XYWxsZXQgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdFx0YWRkQ29udHJpYnV0aW9uUG93ZXI6IChzdGF0ZTogY29sbGFiLCBhY3Rpb246IGFueSkgPT4ge1xuXHRcdFx0c3RhdGUuQ29udHJpYnV0aW9uUG93ZXIgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyBhZGRBZG1pbldhbGxldCwgYWRkQ29sbGFiTmFtZSwgYWRkRGVzY3JpcHRpb24sIGFkZEdpdEh1YiAsYWRkTGVhZE5hbWUsIGFkZENvbnRyaWJ1dGlvblBvd2VyIH0gPVxuXHRDb2xsYWJJbmZvLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFiSW5mby5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjb2xsYWJOYW1lIiwiTGVhZE5hbWUiLCJEZXNjcmlwdGlvbiIsIkdpdEh1YiIsIkFkbWluV2FsbGV0IiwiQ29udHJpYnV0aW9uUG93ZXIiLCJDb2xsYWJJbmZvIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkQ29sbGFiTmFtZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFkZExlYWROYW1lIiwiYWRkRGVzY3JpcHRpb24iLCJhZGRHaXRIdWIiLCJhZGRBZG1pbldhbGxldCIsImFkZENvbnRyaWJ1dGlvblBvd2VyIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/collabInfo.ts\n");

/***/ }),

/***/ "./features/member.ts":
/*!****************************!*\
  !*** ./features/member.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormMemberSlice\": () => (/* binding */ FormMemberSlice),\n/* harmony export */   \"addNewMember\": () => (/* binding */ addNewMember),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeMember\": () => (/* binding */ removeMember),\n/* harmony export */   \"updateFull\": () => (/* binding */ updateFull)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    memberCount: 0,\n    MemberArray: []\n};\nconst FormMemberSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"FormSlice\",\n    initialState,\n    reducers: {\n        addNewMember: (state, action)=>{\n            state.MemberArray = [\n                ...state.MemberArray,\n                action.payload\n            ];\n            state.memberCount = state.memberCount + 1;\n        },\n        removeMember: (state, action)=>{\n            state.MemberArray = state.MemberArray.filter((arr)=>{\n                return arr.memberAddress != action.payload;\n            });\n            state.memberCount -= 1;\n        },\n        updateFull: (state, action)=>{\n            state.MemberArray = action.payload;\n        }\n    }\n});\nconst { removeMember , addNewMember , updateFull  } = FormMemberSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormMemberSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9tZW1iZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQWdCOUMsTUFBTUMsWUFBWSxHQUFhO0lBQzlCQyxXQUFXLEVBQUUsQ0FBQztJQUNkQyxXQUFXLEVBQUUsRUFBRTtDQUNmO0FBRU0sTUFBTUMsZUFBZSxHQUFHSiw2REFBVyxDQUFDO0lBQzFDSyxJQUFJLEVBQUUsV0FBVztJQUNqQkosWUFBWTtJQUNaSyxRQUFRLEVBQUU7UUFDVEMsWUFBWSxFQUFFLENBQUNDLEtBQWUsRUFBRUMsTUFBVyxHQUFLO1lBQy9DRCxLQUFLLENBQUNMLFdBQVcsR0FBRzttQkFBSUssS0FBSyxDQUFDTCxXQUFXO2dCQUFFTSxNQUFNLENBQUNDLE9BQU87YUFBQztZQUMxREYsS0FBSyxDQUFDTixXQUFXLEdBQUdNLEtBQUssQ0FBQ04sV0FBVyxHQUFHLENBQUM7U0FDekM7UUFDRFMsWUFBWSxFQUFFLENBQUNILEtBQWUsRUFBRUMsTUFBVyxHQUFLO1lBQy9DRCxLQUFLLENBQUNMLFdBQVcsR0FBR0ssS0FBSyxDQUFDTCxXQUFXLENBQUNTLE1BQU0sQ0FBQyxDQUFDQyxHQUFZLEdBQUs7Z0JBQzlELE9BQU9BLEdBQUcsQ0FBQ0MsYUFBYSxJQUFJTCxNQUFNLENBQUNDLE9BQU87YUFDMUMsQ0FBQztZQUNGRixLQUFLLENBQUNOLFdBQVcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0RhLFVBQVUsRUFBRSxDQUFDUCxLQUFlLEVBQUVDLE1BQVcsR0FBSztZQUM3Q0QsS0FBSyxDQUFDTCxXQUFXLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTztTQUNsQztLQUNEO0NBQ0QsQ0FBQztBQUVLLE1BQU0sRUFBRUMsWUFBWSxHQUFFSixZQUFZLEdBQUVRLFVBQVUsR0FBRSxHQUN0RFgsZUFBZSxDQUFDWSxPQUFPO0FBRXhCLGlFQUFlWixlQUFlLENBQUNhLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9mZWF0dXJlcy9tZW1iZXIudHM/NTNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5pbnRlcmZhY2UgbWVtYmVycyB7XHJcblx0bmFtZTogc3RyaW5nXHJcblx0bWVtYmVyQWRkcmVzczogc3RyaW5nXHJcblx0cm9sZTogc3RyaW5nXHJcblx0eHA6IG51bWJlclxyXG5cdG5mdDogc3RyaW5nXHJcblx0aXBmc0hhc2g6IHN0cmluZ1xyXG5cdG1pbnRlZDogYm9vbGVhblxyXG59XHJcbmludGVyZmFjZSBGb3JtSW5mbyB7XHJcblx0TWVtYmVyQXJyYXk6IEFycmF5PG1lbWJlcnM+XHJcblx0bWVtYmVyQ291bnQ6IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEZvcm1JbmZvID0ge1xyXG5cdG1lbWJlckNvdW50OiAwLFxyXG5cdE1lbWJlckFycmF5OiBbXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1NZW1iZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuXHRuYW1lOiAnRm9ybVNsaWNlJyxcclxuXHRpbml0aWFsU3RhdGUsXHJcblx0cmVkdWNlcnM6IHtcclxuXHRcdGFkZE5ld01lbWJlcjogKHN0YXRlOiBGb3JtSW5mbywgYWN0aW9uOiBhbnkpID0+IHtcclxuXHRcdFx0c3RhdGUuTWVtYmVyQXJyYXkgPSBbLi4uc3RhdGUuTWVtYmVyQXJyYXksIGFjdGlvbi5wYXlsb2FkXVxyXG5cdFx0XHRzdGF0ZS5tZW1iZXJDb3VudCA9IHN0YXRlLm1lbWJlckNvdW50ICsgMVxyXG5cdFx0fSxcclxuXHRcdHJlbW92ZU1lbWJlcjogKHN0YXRlOiBGb3JtSW5mbywgYWN0aW9uOiBhbnkpID0+IHtcclxuXHRcdFx0c3RhdGUuTWVtYmVyQXJyYXkgPSBzdGF0ZS5NZW1iZXJBcnJheS5maWx0ZXIoKGFycjogbWVtYmVycykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBhcnIubWVtYmVyQWRkcmVzcyAhPSBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRzdGF0ZS5tZW1iZXJDb3VudCAtPSAxXHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlRnVsbDogKHN0YXRlOiBGb3JtSW5mbywgYWN0aW9uOiBhbnkpID0+IHtcclxuXHRcdFx0c3RhdGUuTWVtYmVyQXJyYXkgPSBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgcmVtb3ZlTWVtYmVyLCBhZGROZXdNZW1iZXIsIHVwZGF0ZUZ1bGwgfSA9XHJcblx0Rm9ybU1lbWJlclNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1NZW1iZXJTbGljZS5yZWR1Y2VyXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIm1lbWJlckNvdW50IiwiTWVtYmVyQXJyYXkiLCJGb3JtTWVtYmVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGROZXdNZW1iZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZW1vdmVNZW1iZXIiLCJmaWx0ZXIiLCJhcnIiLCJtZW1iZXJBZGRyZXNzIiwidXBkYXRlRnVsbCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/member.ts\n");

/***/ }),

/***/ "./features/previewInfo.ts":
/*!*********************************!*\
  !*** ./features/previewInfo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PreviewInfo\": () => (/* binding */ PreviewInfo),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"updatePreviewUrl\": () => (/* binding */ updatePreviewUrl)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    previewUrl: \"\"\n};\nconst PreviewInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"preview\",\n    initialState,\n    reducers: {\n        updatePreviewUrl: (state, action)=>{\n            state.previewUrl = action.payload;\n        }\n    }\n});\nconst { updatePreviewUrl  } = PreviewInfo.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewInfo.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9wcmV2aWV3SW5mby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxZQUFZLEdBQVk7SUFDN0JDLFVBQVUsRUFBRSxFQUFFO0NBQ2Q7QUFFTSxNQUFNQyxXQUFXLEdBQUdILDZEQUFXLENBQUM7SUFDdENJLElBQUksRUFBRSxTQUFTO0lBQ2ZILFlBQVk7SUFDWkksUUFBUSxFQUFFO1FBQ1RDLGdCQUFnQixFQUFFLENBQUNDLEtBQWMsRUFBRUMsTUFBVyxHQUFLO1lBQ2xERCxLQUFLLENBQUNMLFVBQVUsR0FBR00sTUFBTSxDQUFDQyxPQUFPO1NBQ2pDO0tBQ0Q7Q0FDRCxDQUFDO0FBRUssTUFBTSxFQUFFSCxnQkFBZ0IsR0FBRSxHQUFHSCxXQUFXLENBQUNPLE9BQU87QUFFdkQsaUVBQWVQLFdBQVcsQ0FBQ1EsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYm5mdC8uL2ZlYXR1cmVzL3ByZXZpZXdJbmZvLnRzP2IyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbnRlcmZhY2UgcHJldmlldyB7XG5cdHByZXZpZXdVcmw6IHN0cmluZ1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IHByZXZpZXcgPSB7XG5cdHByZXZpZXdVcmw6ICcnLFxufVxuXG5leHBvcnQgY29uc3QgUHJldmlld0luZm8gPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdwcmV2aWV3Jyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge1xuXHRcdHVwZGF0ZVByZXZpZXdVcmw6IChzdGF0ZTogcHJldmlldywgYWN0aW9uOiBhbnkpID0+IHtcblx0XHRcdHN0YXRlLnByZXZpZXdVcmwgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyB1cGRhdGVQcmV2aWV3VXJsIH0gPSBQcmV2aWV3SW5mby5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdJbmZvLnJlZHVjZXJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInByZXZpZXdVcmwiLCJQcmV2aWV3SW5mbyIsIm5hbWUiLCJyZWR1Y2VycyIsInVwZGF0ZVByZXZpZXdVcmwiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/previewInfo.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__]);\n([_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__.WalletAdapterNetwork.Devnet;\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.clusterApiUrl)(network), [\n        network\n    ]);\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.LedgerWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.GlowWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolletExtensionWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolletWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.TorusWalletAdapter(), \n        ], [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.ConnectionProvider, {\n            endpoint: endpoint,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.WalletProvider, {\n                wallets: wallets,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__.WalletModalProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n            lineNumber: 44,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFUTtBQUNBO0FBQ0k7QUFVSDtBQUtGO0FBQ1U7QUFDbUI7QUFDRztBQUVyRSxTQUFTZ0IsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDbEQsTUFBTUMsT0FBTyxHQUFHTCxvRkFBMkI7SUFFM0MsTUFBTU8sUUFBUSxHQUFHbkIsOENBQU8sQ0FBQyxJQUFNVyw4REFBYSxDQUFDTSxPQUFPLENBQUMsRUFBRTtRQUFDQSxPQUFPO0tBQUMsQ0FBQztJQUNqRSxNQUFNRyxPQUFPLEdBQUdwQiw4Q0FBTyxDQUN0QixJQUFNO1lBQ0wsSUFBSUUsK0VBQW1CLEVBQUU7WUFDekIsSUFBSUMsZ0ZBQW9CLEVBQUU7WUFDMUIsSUFBSUYsNkVBQWlCLEVBQUU7WUFDdkIsSUFBSUcsOEVBQWtCLEVBQUU7WUFDeEIsSUFBSUUsd0ZBQTRCLEVBQUU7WUFDbEMsSUFBSUMsK0VBQW1CLEVBQUU7WUFDekIsSUFBSUYsaUZBQXFCLENBQUM7Z0JBQUVZLE9BQU87YUFBRSxDQUFDO1lBQ3RDLElBQUlULDhFQUFrQixFQUFFO1NBQ3hCLEVBQ0Q7UUFBQ1MsT0FBTztLQUFDLENBQ1Q7SUFDRCxxQkFDQyw4REFBQ2xCLGlEQUFRO1FBQUNELEtBQUssRUFBRUEsK0NBQUs7a0JBQ3JCLDRFQUFDVyw0RUFBa0I7WUFBQ1UsUUFBUSxFQUFFQSxRQUFRO3NCQUNyQyw0RUFBQ1Qsd0VBQWM7Z0JBQUNVLE9BQU8sRUFBRUEsT0FBTzswQkFDL0IsNEVBQUNQLGdGQUFtQjs4QkFDbkIsNEVBQUNFLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7O3dCQUNQOzs7OztvQkFDTjs7Ozs7Z0JBQ0c7Ozs7O1lBQ1gsQ0FDWDtDQUNEO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG5cdEdsb3dXYWxsZXRBZGFwdGVyLFxuXHRMZWRnZXJXYWxsZXRBZGFwdGVyLFxuXHRQaGFudG9tV2FsbGV0QWRhcHRlcixcblx0U2xvcGVXYWxsZXRBZGFwdGVyLFxuXHRTb2xmbGFyZVdhbGxldEFkYXB0ZXIsXG5cdFNvbGxldEV4dGVuc2lvbldhbGxldEFkYXB0ZXIsXG5cdFNvbGxldFdhbGxldEFkYXB0ZXIsXG5cdFRvcnVzV2FsbGV0QWRhcHRlcixcbn0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzJ1xuaW1wb3J0IHtcblx0Q29ubmVjdGlvblByb3ZpZGVyLFxuXHR1c2VXYWxsZXQsXG5cdFdhbGxldFByb3ZpZGVyLFxufSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0J1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJ1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxQcm92aWRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuXHRjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuRGV2bmV0XG5cblx0Y29uc3QgZW5kcG9pbnQgPSB1c2VNZW1vKCgpID0+IGNsdXN0ZXJBcGlVcmwobmV0d29yayksIFtuZXR3b3JrXSlcblx0Y29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gW1xuXHRcdFx0bmV3IExlZGdlcldhbGxldEFkYXB0ZXIoKSxcblx0XHRcdG5ldyBQaGFudG9tV2FsbGV0QWRhcHRlcigpLFxuXHRcdFx0bmV3IEdsb3dXYWxsZXRBZGFwdGVyKCksXG5cdFx0XHRuZXcgU2xvcGVXYWxsZXRBZGFwdGVyKCksXG5cdFx0XHRuZXcgU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlcigpLFxuXHRcdFx0bmV3IFNvbGxldFdhbGxldEFkYXB0ZXIoKSxcblx0XHRcdG5ldyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxuXHRcdFx0bmV3IFRvcnVzV2FsbGV0QWRhcHRlcigpLFxuXHRcdF0sXG5cdFx0W25ldHdvcmtdXG5cdClcblx0cmV0dXJuIChcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdDxDb25uZWN0aW9uUHJvdmlkZXIgZW5kcG9pbnQ9e2VuZHBvaW50fT5cblx0XHRcdFx0PFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9PlxuXHRcdFx0XHRcdDxXYWxsZXRNb2RhbFByb3ZpZGVyPlxuXHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHRcdDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cblx0XHRcdFx0PC9XYWxsZXRQcm92aWRlcj5cblx0XHRcdDwvQ29ubmVjdGlvblByb3ZpZGVyPlxuXHRcdDwvUHJvdmlkZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJzdG9yZSIsIlByb3ZpZGVyIiwidXNlTWVtbyIsIkdsb3dXYWxsZXRBZGFwdGVyIiwiTGVkZ2VyV2FsbGV0QWRhcHRlciIsIlBoYW50b21XYWxsZXRBZGFwdGVyIiwiU2xvcGVXYWxsZXRBZGFwdGVyIiwiU29sZmxhcmVXYWxsZXRBZGFwdGVyIiwiU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlciIsIlNvbGxldFdhbGxldEFkYXB0ZXIiLCJUb3J1c1dhbGxldEFkYXB0ZXIiLCJDb25uZWN0aW9uUHJvdmlkZXIiLCJXYWxsZXRQcm92aWRlciIsImNsdXN0ZXJBcGlVcmwiLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsIldhbGxldE1vZGFsUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5ldHdvcmsiLCJEZXZuZXQiLCJlbmRwb2ludCIsIndhbGxldHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/member */ \"./features/member.ts\");\n/* harmony import */ var _features_collabInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/collabInfo */ \"./features/collabInfo.ts\");\n/* harmony import */ var _features_previewInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/previewInfo */ \"./features/previewInfo.ts\");\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        FormReducers: _features_member__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        collabInfo: _features_collabInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        previewInfo: _features_previewInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQUNFO0FBQ0U7QUFDMUMsTUFBTUksS0FBSyxHQUFHSixnRUFBYyxDQUFDO0lBQ25DSyxPQUFPLEVBQUU7UUFDUkosWUFBWSxFQUFFQSx3REFBWTtRQUMxQkssVUFBVSxFQUFFSiw0REFBVTtRQUN0QkssV0FBVyxFQUFFSiw2REFBVztLQUN4QjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9zdG9yZS9zdG9yZS50cz8xMmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBGb3JtUmVkdWNlcnMgZnJvbSAnLi4vZmVhdHVyZXMvbWVtYmVyJ1xuaW1wb3J0IENvbGxhYkluZm8gZnJvbSAnLi4vZmVhdHVyZXMvY29sbGFiSW5mbydcbmltcG9ydCBQcmV2aWV3SW5mbyBmcm9tICcuLi9mZWF0dXJlcy9wcmV2aWV3SW5mbydcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcblx0cmVkdWNlcjoge1xuXHRcdEZvcm1SZWR1Y2VyczogRm9ybVJlZHVjZXJzLFxuXHRcdGNvbGxhYkluZm86IENvbGxhYkluZm8sXG5cdFx0cHJldmlld0luZm86IFByZXZpZXdJbmZvLFxuXHR9LFxufSlcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiRm9ybVJlZHVjZXJzIiwiQ29sbGFiSW5mbyIsIlByZXZpZXdJbmZvIiwic3RvcmUiLCJyZWR1Y2VyIiwiY29sbGFiSW5mbyIsInByZXZpZXdJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
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

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

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

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

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

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();