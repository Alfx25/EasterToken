webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/software/Testimonial/index.js":
/*!****************************************************!*\
  !*** ./src/sections/software/Testimonial/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-charts */ \"../../../../node_modules/react-google-charts/dist/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alessioalfieri/Desktop/Sandar React Files 3/sandar-next-files/sandar-next/src/sections/software/Testimonial/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar data = [[\"Task\", \"Hours per Day\"], [\"Liquidity Pool\", 10], [\"Marketing Wallet\", 7], [\"Charity Wallet\", 2], [\"Dev Wallet\", 1]];\nvar data2 = [[\"Task\", \"Hours per Day\"], [\"Liquidity Pool\", 8], [\"Marketing Wallet\", 5], [\"Charity Wallet\", 1], [\"Dev Wallet\", 1]];\nvar options = {\n  title: 'Buy taxes (15%)',\n  pieHole: 0.5,\n  legend: {\n    position: 'right',\n    alignment: 'center'\n  },\n  pieSliceText: 'none',\n  colors: ['#003f5c', '#58508d', '#bc5090', '#ffa600'],\n  backgroundColor: {\n    fill: 'transparent'\n  },\n  vAxis: {\n    minValue: 1,\n    maxValue: 15,\n    format: \"#.#'%'\"\n  }\n};\nvar options2 = {\n  title: 'Buy/Sell Taxes',\n  pieHole: 0.5,\n  legend: {\n    position: 'right',\n    alignment: 'center'\n  },\n  pieSliceText: 'none',\n  colors: ['#003f5c', '#58508d', '#bc5090', '#ffa600'],\n  backgroundColor: {\n    fill: 'transparent'\n  }\n};\n\nvar TestimonialSection = function TestimonialSection() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"section__heading text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 1\n    }\n  }, __jsx(\"h2\", {\n    id: \"Tokenomics\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 6\n    }\n  }, \"Tokenomics\")), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"col-6 col-sm-12 col-xs-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 3\n    }\n  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], {\n    chartType: \"PieChart\",\n    data: data2,\n    options: options,\n    height: \"100%\",\n    width: \"800px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    className: \"col-6 col-sm-12 col-xs-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 3\n    }\n  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], {\n    chartType: \"PieChart\",\n    data: data,\n    options: options2,\n    height: \"550px\",\n    width: \"800px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }))));\n};\n\n_c = TestimonialSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestimonialSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestimonialSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NvZnR3YXJlL1Rlc3RpbW9uaWFsL2luZGV4LmpzP2ZlZTIiXSwibmFtZXMiOlsiZGF0YSIsImRhdGEyIiwib3B0aW9ucyIsInRpdGxlIiwicGllSG9sZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYWxpZ25tZW50IiwicGllU2xpY2VUZXh0IiwiY29sb3JzIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsInZBeGlzIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImZvcm1hdCIsIm9wdGlvbnMyIiwiVGVzdGltb25pYWxTZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFJQSxJQUFJLEdBQUcsQ0FDVCxDQUFDLE1BQUQsRUFBUyxlQUFULENBRFMsRUFFVCxDQUFDLGdCQUFELEVBQW1CLEVBQW5CLENBRlMsRUFHVCxDQUFDLGtCQUFELEVBQXFCLENBQXJCLENBSFMsRUFJVCxDQUFDLGdCQUFELEVBQW1CLENBQW5CLENBSlMsRUFLVCxDQUFDLFlBQUQsRUFBZSxDQUFmLENBTFMsQ0FBWDtBQVFBLElBQUlDLEtBQUssR0FBRSxDQUNULENBQUMsTUFBRCxFQUFTLGVBQVQsQ0FEUyxFQUVULENBQUMsZ0JBQUQsRUFBbUIsQ0FBbkIsQ0FGUyxFQUdULENBQUMsa0JBQUQsRUFBcUIsQ0FBckIsQ0FIUyxFQUlULENBQUMsZ0JBQUQsRUFBbUIsQ0FBbkIsQ0FKUyxFQUtULENBQUMsWUFBRCxFQUFlLENBQWYsQ0FMUyxDQUFYO0FBUUEsSUFBSUMsT0FBTyxHQUFHO0FBQ1pDLE9BQUssRUFBRSxpQkFESztBQUVaQyxTQUFPLEVBQUUsR0FGRztBQUdaQyxRQUFNLEVBQUU7QUFDTkMsWUFBUSxFQUFFLE9BREo7QUFFTkMsYUFBUyxFQUFFO0FBRkwsR0FISTtBQU9aQyxjQUFZLEVBQUUsTUFQRjtBQVFaQyxRQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFtQyxTQUFuQyxDQVJJO0FBU1pDLGlCQUFlLEVBQUU7QUFDZkMsUUFBSSxFQUFFO0FBRFMsR0FUTDtBQVlaQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLENBREw7QUFFTEMsWUFBUSxFQUFFLEVBRkw7QUFHTEMsVUFBTSxFQUFFO0FBSEg7QUFaSyxDQUFkO0FBb0JBLElBQUlDLFFBQVEsR0FBRztBQUNiYixPQUFLLEVBQUUsZ0JBRE07QUFFYkMsU0FBTyxFQUFFLEdBRkk7QUFHYkMsUUFBTSxFQUFFO0FBQ05DLFlBQVEsRUFBRSxPQURKO0FBRU5DLGFBQVMsRUFBRTtBQUZMLEdBSEs7QUFPYkMsY0FBWSxFQUFFLE1BUEQ7QUFRYkMsUUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBbUMsU0FBbkMsQ0FSSztBQVNiQyxpQkFBZSxFQUFFO0FBQ2ZDLFFBQUksRUFBQztBQURVO0FBVEosQ0FBZjs7QUFlQSxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsU0FDRSxtRUFDSjtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0s7QUFBSSxNQUFFLEVBQUMsWUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURMLENBREksRUFJRjtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNBLGFBQVMsRUFBQyxVQURWO0FBRUEsUUFBSSxFQUFFaEIsS0FGTjtBQUdBLFdBQU8sRUFBRUMsT0FIVDtBQUlBLFVBQU0sRUFBRSxNQUpSO0FBS0EsU0FBSyxFQUFDLE9BTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREEsRUFVQTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNBLGFBQVMsRUFBQyxVQURWO0FBRUEsUUFBSSxFQUFFRixJQUZOO0FBR0EsV0FBTyxFQUFFZ0IsUUFIVDtBQUlBLFVBQU0sRUFBQyxPQUpQO0FBS0EsU0FBSyxFQUFDLE9BTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkEsQ0FKRSxDQURGO0FBMkJELENBNUJEOztLQUFNQyxrQjtBQThCU0EsaUZBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvc29mdHdhcmUvVGVzdGltb25pYWwvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAncmVhY3QtZ29vZ2xlLWNoYXJ0cyc7XG5cblxudmFyIGRhdGEgPSBbXG4gIFtcIlRhc2tcIiwgXCJIb3VycyBwZXIgRGF5XCJdLFxuICBbXCJMaXF1aWRpdHkgUG9vbFwiLCAxMF0sXG4gIFtcIk1hcmtldGluZyBXYWxsZXRcIiwgN10sXG4gIFtcIkNoYXJpdHkgV2FsbGV0XCIsIDJdLFxuICBbXCJEZXYgV2FsbGV0XCIsIDFdLFxuXTtcblxudmFyIGRhdGEyID1bXG4gIFtcIlRhc2tcIiwgXCJIb3VycyBwZXIgRGF5XCJdLFxuICBbXCJMaXF1aWRpdHkgUG9vbFwiLCA4XSxcbiAgW1wiTWFya2V0aW5nIFdhbGxldFwiLCA1XSxcbiAgW1wiQ2hhcml0eSBXYWxsZXRcIiwgMV0sXG4gIFtcIkRldiBXYWxsZXRcIiwgMV0sXG5dXG5cbnZhciBvcHRpb25zID0ge1xuICB0aXRsZTogJ0J1eSB0YXhlcyAoMTUlKScsXG4gIHBpZUhvbGU6IDAuNSxcbiAgbGVnZW5kOiB7XG4gICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgYWxpZ25tZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgcGllU2xpY2VUZXh0OiAnbm9uZScsXG4gIGNvbG9yczogWycjMDAzZjVjJywgJyM1ODUwOGQnLCAnI2JjNTA5MCcsICAnI2ZmYTYwMCddLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICB9LFxuICB2QXhpczoge1xuICAgIG1pblZhbHVlOiAxLFxuICAgIG1heFZhbHVlOiAxNSxcbiAgICBmb3JtYXQ6IFwiIy4jJyUnXCJcbn0gXG5cbn1cblxudmFyIG9wdGlvbnMyID0ge1xuICB0aXRsZTogJ0J1eS9TZWxsIFRheGVzJyxcbiAgcGllSG9sZTogMC41LFxuICBsZWdlbmQ6IHtcbiAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICBhbGlnbm1lbnQ6ICdjZW50ZXInLFxuICB9LFxuICBwaWVTbGljZVRleHQ6ICdub25lJyxcbiAgY29sb3JzOiBbJyMwMDNmNWMnLCAnIzU4NTA4ZCcsICcjYmM1MDkwJywgICcjZmZhNjAwJ10sXG4gIGJhY2tncm91bmRDb2xvcjoge1xuICAgIGZpbGw6J3RyYW5zcGFyZW50J1xuICB9XG5cbn1cblxuY29uc3QgVGVzdGltb25pYWxTZWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4oIFxuICAgIDw+XG48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2hlYWRpbmcgdGV4dC1jZW50ZXJcIiA+XG4gICAgIDxoMiBpZD1cIlRva2Vub21pY3NcIj5Ub2tlbm9taWNzPC9oMiA+XG48L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtc20tMTIgY29sLXhzLTFcIj5cbiAgICA8Q2hhcnRcbiAgICBjaGFydFR5cGU9XCJQaWVDaGFydFwiXG4gICAgZGF0YT17ZGF0YTJ9XG4gICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICBoZWlnaHQ9ICcxMDAlJ1xuICAgIHdpZHRoPVwiODAwcHhcIlxuICAgIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1zbS0xMiBjb2wteHMtMVwiPlxuICAgIDxDaGFydFxuICAgIGNoYXJ0VHlwZT1cIlBpZUNoYXJ0XCJcbiAgICBkYXRhPXtkYXRhfVxuICAgIG9wdGlvbnM9e29wdGlvbnMyfVxuICAgIGhlaWdodD0nNTUwcHgnXG4gICAgd2lkdGg9JzgwMHB4Jy8+XG4gIDwvZGl2PlxuPC9kaXY+XG48Lz5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsU2VjdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/software/Testimonial/index.js\n");

/***/ })

})