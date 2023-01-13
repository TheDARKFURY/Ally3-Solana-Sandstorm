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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CollabInfo\": () => (/* binding */ CollabInfo),\n/* harmony export */   \"addAdminWallet\": () => (/* binding */ addAdminWallet),\n/* harmony export */   \"addCollabName\": () => (/* binding */ addCollabName),\n/* harmony export */   \"addContributionPower\": () => (/* binding */ addContributionPower),\n/* harmony export */   \"addDescription\": () => (/* binding */ addDescription),\n/* harmony export */   \"addLeadName\": () => (/* binding */ addLeadName),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    collabName: \"\",\n    LeadName: \"\",\n    Description: \"\",\n    AdminWallet: \"\",\n    ContributionPower: 0\n};\nconst CollabInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"collab\",\n    initialState,\n    reducers: {\n        addCollabName: (state, action)=>{\n            state.collabName = action.payload;\n        },\n        addLeadName: (state, action)=>{\n            state.LeadName = action.payload;\n        },\n        addDescription: (state, action)=>{\n            state.Description = action.payload;\n        },\n        addAdminWallet: (state, action)=>{\n            state.AdminWallet = action.payload;\n        },\n        addContributionPower: (state, action)=>{\n            state.ContributionPower = action.payload;\n        }\n    }\n});\nconst { addAdminWallet , addCollabName , addDescription , addLeadName , addContributionPower  } = CollabInfo.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollabInfo.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb2xsYWJJbmZvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQVU5QyxNQUFNQyxZQUFZLEdBQVc7SUFDNUJDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLGlCQUFpQixFQUFFLENBQUM7Q0FDcEI7QUFFTSxNQUFNQyxVQUFVLEdBQUdQLDZEQUFXLENBQUM7SUFDckNRLElBQUksRUFBRSxRQUFRO0lBQ2RQLFlBQVk7SUFDWlEsUUFBUSxFQUFFO1FBQ1RDLGFBQWEsRUFBRSxDQUFDQyxLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUM5Q0QsS0FBSyxDQUFDVCxVQUFVLEdBQUdVLE1BQU0sQ0FBQ0MsT0FBTztTQUNqQztRQUNEQyxXQUFXLEVBQUUsQ0FBQ0gsS0FBYSxFQUFFQyxNQUFXLEdBQUs7WUFDNUNELEtBQUssQ0FBQ1IsUUFBUSxHQUFHUyxNQUFNLENBQUNDLE9BQU87U0FDL0I7UUFDREUsY0FBYyxFQUFFLENBQUNKLEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQy9DRCxLQUFLLENBQUNQLFdBQVcsR0FBR1EsTUFBTSxDQUFDQyxPQUFPO1NBQ2xDO1FBQ0RHLGNBQWMsRUFBRSxDQUFDTCxLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUMvQ0QsS0FBSyxDQUFDTixXQUFXLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTztTQUNsQztRQUNESSxvQkFBb0IsRUFBRSxDQUFDTixLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUNyREQsS0FBSyxDQUFDTCxpQkFBaUIsR0FBR00sTUFBTSxDQUFDQyxPQUFPO1NBQ3hDO0tBQ0Q7Q0FDRCxDQUFDO0FBRUssTUFBTSxFQUFFRyxjQUFjLEdBQUVOLGFBQWEsR0FBRUssY0FBYyxHQUFFRCxXQUFXLEdBQUVHLG9CQUFvQixHQUFFLEdBQ2hHVixVQUFVLENBQUNXLE9BQU87QUFFbkIsaUVBQWVYLFVBQVUsQ0FBQ1ksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYm5mdC8uL2ZlYXR1cmVzL2NvbGxhYkluZm8udHM/Zjg4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5pbnRlcmZhY2UgY29sbGFiIHtcclxuXHRjb2xsYWJOYW1lOiBzdHJpbmdcclxuXHRMZWFkTmFtZTogc3RyaW5nXHJcblx0RGVzY3JpcHRpb246IHN0cmluZ1xyXG5cdEFkbWluV2FsbGV0OiBzdHJpbmdcclxuXHRDb250cmlidXRpb25Qb3dlcjogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogY29sbGFiID0ge1xyXG5cdGNvbGxhYk5hbWU6ICcnLFxyXG5cdExlYWROYW1lOiAnJyxcclxuXHREZXNjcmlwdGlvbjogJycsXHJcblx0QWRtaW5XYWxsZXQ6ICcnLFxyXG5cdENvbnRyaWJ1dGlvblBvd2VyOiAwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29sbGFiSW5mbyA9IGNyZWF0ZVNsaWNlKHtcclxuXHRuYW1lOiAnY29sbGFiJyxcclxuXHRpbml0aWFsU3RhdGUsXHJcblx0cmVkdWNlcnM6IHtcclxuXHRcdGFkZENvbGxhYk5hbWU6IChzdGF0ZTogY29sbGFiLCBhY3Rpb246IGFueSkgPT4ge1xyXG5cdFx0XHRzdGF0ZS5jb2xsYWJOYW1lID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGRMZWFkTmFtZTogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkxlYWROYW1lID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGREZXNjcmlwdGlvbjogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkRlc2NyaXB0aW9uID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGRBZG1pbldhbGxldDogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkFkbWluV2FsbGV0ID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0XHRhZGRDb250cmlidXRpb25Qb3dlcjogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLkNvbnRyaWJ1dGlvblBvd2VyID0gYWN0aW9uLnBheWxvYWRcclxuXHRcdH0sXHJcblx0fSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZEFkbWluV2FsbGV0LCBhZGRDb2xsYWJOYW1lLCBhZGREZXNjcmlwdGlvbiwgYWRkTGVhZE5hbWUsIGFkZENvbnRyaWJ1dGlvblBvd2VyIH0gPVxyXG5cdENvbGxhYkluZm8uYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFiSW5mby5yZWR1Y2VyXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNvbGxhYk5hbWUiLCJMZWFkTmFtZSIsIkRlc2NyaXB0aW9uIiwiQWRtaW5XYWxsZXQiLCJDb250cmlidXRpb25Qb3dlciIsIkNvbGxhYkluZm8iLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRDb2xsYWJOYW1lIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWRkTGVhZE5hbWUiLCJhZGREZXNjcmlwdGlvbiIsImFkZEFkbWluV2FsbGV0IiwiYWRkQ29udHJpYnV0aW9uUG93ZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/collabInfo.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PreviewInfo\": () => (/* binding */ PreviewInfo),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"updatePreviewUrl\": () => (/* binding */ updatePreviewUrl)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    previewUrl: \"\"\n};\nconst PreviewInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"preview\",\n    initialState,\n    reducers: {\n        updatePreviewUrl: (state, action)=>{\n            state.previewUrl = action.payload;\n        }\n    }\n});\nconst { updatePreviewUrl  } = PreviewInfo.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewInfo.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9wcmV2aWV3SW5mby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxZQUFZLEdBQVk7SUFDN0JDLFVBQVUsRUFBRSxFQUFFO0NBQ2Q7QUFFTSxNQUFNQyxXQUFXLEdBQUdILDZEQUFXLENBQUM7SUFDdENJLElBQUksRUFBRSxTQUFTO0lBQ2ZILFlBQVk7SUFDWkksUUFBUSxFQUFFO1FBQ1RDLGdCQUFnQixFQUFFLENBQUNDLEtBQWMsRUFBRUMsTUFBVyxHQUFLO1lBQ2xERCxLQUFLLENBQUNMLFVBQVUsR0FBR00sTUFBTSxDQUFDQyxPQUFPO1NBQ2pDO0tBQ0Q7Q0FDRCxDQUFDO0FBRUssTUFBTSxFQUFFSCxnQkFBZ0IsR0FBRSxHQUFHSCxXQUFXLENBQUNPLE9BQU87QUFFdkQsaUVBQWVQLFdBQVcsQ0FBQ1EsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYm5mdC8uL2ZlYXR1cmVzL3ByZXZpZXdJbmZvLnRzP2IyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuaW50ZXJmYWNlIHByZXZpZXcge1xyXG5cdHByZXZpZXdVcmw6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHByZXZpZXcgPSB7XHJcblx0cHJldmlld1VybDogJycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcmV2aWV3SW5mbyA9IGNyZWF0ZVNsaWNlKHtcclxuXHRuYW1lOiAncHJldmlldycsXHJcblx0aW5pdGlhbFN0YXRlLFxyXG5cdHJlZHVjZXJzOiB7XHJcblx0XHR1cGRhdGVQcmV2aWV3VXJsOiAoc3RhdGU6IHByZXZpZXcsIGFjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdHN0YXRlLnByZXZpZXdVcmwgPSBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXBkYXRlUHJldmlld1VybCB9ID0gUHJldmlld0luZm8uYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0luZm8ucmVkdWNlclxyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJwcmV2aWV3VXJsIiwiUHJldmlld0luZm8iLCJuYW1lIiwicmVkdWNlcnMiLCJ1cGRhdGVQcmV2aWV3VXJsIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/previewInfo.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__]);\n([_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__.WalletAdapterNetwork.Devnet;\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.clusterApiUrl)(network), [\n        network\n    ]);\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.LedgerWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.GlowWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolletExtensionWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolletWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.TorusWalletAdapter(), \n        ], [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.ConnectionProvider, {\n            endpoint: endpoint,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.WalletProvider, {\n                wallets: wallets,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__.WalletModalProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n            lineNumber: 44,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\_app.tsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFUTtBQUNBO0FBQ0k7QUFVSDtBQUtGO0FBQ1U7QUFDbUI7QUFDRztBQUVyRSxTQUFTZ0IsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDbEQsTUFBTUMsT0FBTyxHQUFHTCxvRkFBMkI7SUFFM0MsTUFBTU8sUUFBUSxHQUFHbkIsOENBQU8sQ0FBQyxJQUFNVyw4REFBYSxDQUFDTSxPQUFPLENBQUMsRUFBRTtRQUFDQSxPQUFPO0tBQUMsQ0FBQztJQUNqRSxNQUFNRyxPQUFPLEdBQUdwQiw4Q0FBTyxDQUN0QixJQUFNO1lBQ0wsSUFBSUUsK0VBQW1CLEVBQUU7WUFDekIsSUFBSUMsZ0ZBQW9CLEVBQUU7WUFDMUIsSUFBSUYsNkVBQWlCLEVBQUU7WUFDdkIsSUFBSUcsOEVBQWtCLEVBQUU7WUFDeEIsSUFBSUUsd0ZBQTRCLEVBQUU7WUFDbEMsSUFBSUMsK0VBQW1CLEVBQUU7WUFDekIsSUFBSUYsaUZBQXFCLENBQUM7Z0JBQUVZLE9BQU87YUFBRSxDQUFDO1lBQ3RDLElBQUlULDhFQUFrQixFQUFFO1NBQ3hCLEVBQ0Q7UUFBQ1MsT0FBTztLQUFDLENBQ1Q7SUFDRCxxQkFDQyw4REFBQ2xCLGlEQUFRO1FBQUNELEtBQUssRUFBRUEsK0NBQUs7a0JBQ3JCLDRFQUFDVyw0RUFBa0I7WUFBQ1UsUUFBUSxFQUFFQSxRQUFRO3NCQUNyQyw0RUFBQ1Qsd0VBQWM7Z0JBQUNVLE9BQU8sRUFBRUEsT0FBTzswQkFDL0IsNEVBQUNQLGdGQUFtQjs4QkFDbkIsNEVBQUNFLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7O3dCQUNQOzs7OztvQkFDTjs7Ozs7Z0JBQ0c7Ozs7O1lBQ1gsQ0FDWDtDQUNEO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG5cdEdsb3dXYWxsZXRBZGFwdGVyLFxyXG5cdExlZGdlcldhbGxldEFkYXB0ZXIsXHJcblx0UGhhbnRvbVdhbGxldEFkYXB0ZXIsXHJcblx0U2xvcGVXYWxsZXRBZGFwdGVyLFxyXG5cdFNvbGZsYXJlV2FsbGV0QWRhcHRlcixcclxuXHRTb2xsZXRFeHRlbnNpb25XYWxsZXRBZGFwdGVyLFxyXG5cdFNvbGxldFdhbGxldEFkYXB0ZXIsXHJcblx0VG9ydXNXYWxsZXRBZGFwdGVyLFxyXG59IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cydcclxuaW1wb3J0IHtcclxuXHRDb25uZWN0aW9uUHJvdmlkZXIsXHJcblx0dXNlV2FsbGV0LFxyXG5cdFdhbGxldFByb3ZpZGVyLFxyXG59IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnXHJcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnXHJcbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJ1xyXG5pbXBvcnQgeyBXYWxsZXRNb2RhbFByb3ZpZGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG5cdGNvbnN0IG5ldHdvcmsgPSBXYWxsZXRBZGFwdGVyTmV0d29yay5EZXZuZXRcclxuXHJcblx0Y29uc3QgZW5kcG9pbnQgPSB1c2VNZW1vKCgpID0+IGNsdXN0ZXJBcGlVcmwobmV0d29yayksIFtuZXR3b3JrXSlcclxuXHRjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IFtcclxuXHRcdFx0bmV3IExlZGdlcldhbGxldEFkYXB0ZXIoKSxcclxuXHRcdFx0bmV3IFBoYW50b21XYWxsZXRBZGFwdGVyKCksXHJcblx0XHRcdG5ldyBHbG93V2FsbGV0QWRhcHRlcigpLFxyXG5cdFx0XHRuZXcgU2xvcGVXYWxsZXRBZGFwdGVyKCksXHJcblx0XHRcdG5ldyBTb2xsZXRFeHRlbnNpb25XYWxsZXRBZGFwdGVyKCksXHJcblx0XHRcdG5ldyBTb2xsZXRXYWxsZXRBZGFwdGVyKCksXHJcblx0XHRcdG5ldyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxyXG5cdFx0XHRuZXcgVG9ydXNXYWxsZXRBZGFwdGVyKCksXHJcblx0XHRdLFxyXG5cdFx0W25ldHdvcmtdXHJcblx0KVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuXHRcdFx0PENvbm5lY3Rpb25Qcm92aWRlciBlbmRwb2ludD17ZW5kcG9pbnR9PlxyXG5cdFx0XHRcdDxXYWxsZXRQcm92aWRlciB3YWxsZXRzPXt3YWxsZXRzfT5cclxuXHRcdFx0XHRcdDxXYWxsZXRNb2RhbFByb3ZpZGVyPlxyXG5cdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdFx0XHQ8L1dhbGxldE1vZGFsUHJvdmlkZXI+XHJcblx0XHRcdFx0PC9XYWxsZXRQcm92aWRlcj5cclxuXHRcdFx0PC9Db25uZWN0aW9uUHJvdmlkZXI+XHJcblx0XHQ8L1Byb3ZpZGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbInN0b3JlIiwiUHJvdmlkZXIiLCJ1c2VNZW1vIiwiR2xvd1dhbGxldEFkYXB0ZXIiLCJMZWRnZXJXYWxsZXRBZGFwdGVyIiwiUGhhbnRvbVdhbGxldEFkYXB0ZXIiLCJTbG9wZVdhbGxldEFkYXB0ZXIiLCJTb2xmbGFyZVdhbGxldEFkYXB0ZXIiLCJTb2xsZXRFeHRlbnNpb25XYWxsZXRBZGFwdGVyIiwiU29sbGV0V2FsbGV0QWRhcHRlciIsIlRvcnVzV2FsbGV0QWRhcHRlciIsIkNvbm5lY3Rpb25Qcm92aWRlciIsIldhbGxldFByb3ZpZGVyIiwiY2x1c3RlckFwaVVybCIsIldhbGxldEFkYXB0ZXJOZXR3b3JrIiwiV2FsbGV0TW9kYWxQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibmV0d29yayIsIkRldm5ldCIsImVuZHBvaW50Iiwid2FsbGV0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/member */ \"./features/member.ts\");\n/* harmony import */ var _features_collabInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/collabInfo */ \"./features/collabInfo.ts\");\n/* harmony import */ var _features_previewInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/previewInfo */ \"./features/previewInfo.ts\");\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        FormReducers: _features_member__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        collabInfo: _features_collabInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        previewInfo: _features_previewInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQUNFO0FBQ0U7QUFDMUMsTUFBTUksS0FBSyxHQUFHSixnRUFBYyxDQUFDO0lBQ25DSyxPQUFPLEVBQUU7UUFDUkosWUFBWSxFQUFFQSx3REFBWTtRQUMxQkssVUFBVSxFQUFFSiw0REFBVTtRQUN0QkssV0FBVyxFQUFFSiw2REFBVztLQUN4QjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9zdG9yZS9zdG9yZS50cz8xMmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IEZvcm1SZWR1Y2VycyBmcm9tICcuLi9mZWF0dXJlcy9tZW1iZXInXHJcbmltcG9ydCBDb2xsYWJJbmZvIGZyb20gJy4uL2ZlYXR1cmVzL2NvbGxhYkluZm8nXHJcbmltcG9ydCBQcmV2aWV3SW5mbyBmcm9tICcuLi9mZWF0dXJlcy9wcmV2aWV3SW5mbydcclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG5cdHJlZHVjZXI6IHtcclxuXHRcdEZvcm1SZWR1Y2VyczogRm9ybVJlZHVjZXJzLFxyXG5cdFx0Y29sbGFiSW5mbzogQ29sbGFiSW5mbyxcclxuXHRcdHByZXZpZXdJbmZvOiBQcmV2aWV3SW5mbyxcclxuXHR9LFxyXG59KVxyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsIkZvcm1SZWR1Y2VycyIsIkNvbGxhYkluZm8iLCJQcmV2aWV3SW5mbyIsInN0b3JlIiwicmVkdWNlciIsImNvbGxhYkluZm8iLCJwcmV2aWV3SW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.ts\n");

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