webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"../../../../node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wallet/connectors */ \"./src/components/wallet/connectors.js\");\n/* harmony import */ var _assets_token_list_rinkeby_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/token-list-rinkeby.json */ \"./src/assets/token-list-rinkeby.json\");\nvar _assets_token_list_rinkeby_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/token-list-rinkeby.json */ \"./src/assets/token-list-rinkeby.json\", 1);\n/* harmony import */ var _action_useBalance_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../action/useBalance.js */ \"./src/action/useBalance.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/alessioalfieri/Desktop/Sandar React Files 3/sandar-next-files/sandar-next/src/components/Layout/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // import \"../Fontawesome\";\n// import \"../../assets/scss/bootstrap.scss\"\n// import \"../../../node_modules/slick-carousel/slick/slick.css\";\n// import \"../../../node_modules/react-modal-video/scss/modal-video.scss\";\n// import \"../../../node_modules/swiper/swiper.scss\";\n// import \"../../assets/scss/main.scss\"\n// import \"../../assets/scss/react-scss.scss\"\n// import \"../../assets/fonts/fontawesome-5/css/all.min.css\"\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var web3 = new web3__WEBPACK_IMPORTED_MODULE_6___default.a();\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__[\"useWeb3React\"])(),\n      activate = _useWeb3React.activate,\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_assets_token_list_rinkeby_json__WEBPACK_IMPORTED_MODULE_4__[0]),\n      selectedToken = _useState[0],\n      setSelectedToken = _useState[1];\n\n  var _useBalance = Object(_action_useBalance_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(selectedToken.address, selectedToken.decimals),\n      _useBalance2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useBalance, 1),\n      balance = _useBalance2[0];\n\n  function checkConnection() {\n    if (typeof account == 'undefined') console.log('dio porco');else if (account.length == 0) console.log('not connected');else console.log('connected');\n  }\n\n  return __jsx(\"div\", {\n    className: \"layout\",\n    onLoad: checkConnection,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(Layout, \"w3zT7/v7JL6CEcm58iKstQ0P5a0=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_2__[\"useWeb3React\"], _action_useBalance_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzPzY2ZGIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ3ZWIzIiwiV2ViMyIsInVzZVdlYjNSZWFjdCIsImFjdGl2YXRlIiwiYWNjb3VudCIsImNoYWluSWQiLCJ1c2VTdGF0ZSIsIlRva2VuTGlzdFJpbmtlYnkiLCJzZWxlY3RlZFRva2VuIiwic2V0U2VsZWN0ZWRUb2tlbiIsInVzZUJhbGFuY2UiLCJhZGRyZXNzIiwiZGVjaW1hbHMiLCJiYWxhbmNlIiwiY2hlY2tDb25uZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBRTNDLE1BQUlDLElBQUksR0FBRyxJQUFJQywyQ0FBSixFQUFYOztBQUYyQyxzQkFJTkMscUVBQVksRUFKTjtBQUFBLE1BSXJDQyxRQUpxQyxpQkFJckNBLFFBSnFDO0FBQUEsTUFJM0JDLE9BSjJCLGlCQUkzQkEsT0FKMkI7QUFBQSxNQUlsQkMsT0FKa0IsaUJBSWxCQSxPQUprQjs7QUFBQSxrQkFNSEMsc0RBQVEsQ0FBQ0MsNERBQWdCLENBQUMsQ0FBRCxDQUFqQixDQU5MO0FBQUEsTUFNdENDLGFBTnNDO0FBQUEsTUFNdkJDLGdCQU51Qjs7QUFBQSxvQkFRM0JDLHFFQUFVLENBQ3hCRixhQUFhLENBQUNHLE9BRFUsRUFFeEJILGFBQWEsQ0FBQ0ksUUFGVSxDQVJpQjtBQUFBO0FBQUEsTUFRdENDLE9BUnNDOztBQWEzQyxXQUFTQyxlQUFULEdBQTBCO0FBRXhCLFFBQUcsT0FBT1YsT0FBUCxJQUFrQixXQUFyQixFQUNFVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBREYsS0FFSyxJQUFJWixPQUFPLENBQUNhLE1BQVIsSUFBa0IsQ0FBdEIsRUFDSEYsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQURHLEtBR0hELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFFTDs7QUFFQyxTQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsVUFBTSxFQUFFRixlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUdmLFFBRkgsQ0FERjtBQU9EOztHQS9CdUJELE07VUFJZUksNkQsRUFJckJRLDZEOzs7S0FSTVosTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFwiLi4vRm9udGF3ZXNvbWVcIjtcclxuLy8gaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3Njc3MvYm9vdHN0cmFwLnNjc3NcIlxyXG4vLyBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9zY3NzL21vZGFsLXZpZGVvLnNjc3NcIjtcclxuLy8gaW1wb3J0IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXIuc2Nzc1wiO1xyXG4vLyBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy9tYWluLnNjc3NcIlxyXG4vLyBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy9yZWFjdC1zY3NzLnNjc3NcIlxyXG5cclxuLy8gaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvY3NzL2FsbC5taW4uY3NzXCJcclxuXHJcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy93YWxsZXQvY29ubmVjdG9ycydcclxuaW1wb3J0IFRva2VuTGlzdFJpbmtlYnkgZnJvbSAnLi4vLi4vYXNzZXRzL3Rva2VuLWxpc3Qtcmlua2VieS5qc29uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlQmFsYW5jZSBmcm9tICcuLi8uLi9hY3Rpb24vdXNlQmFsYW5jZS5qcydcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICB2YXIgd2ViMyA9IG5ldyBXZWIzKCk7ICBcclxuIFxyXG5jb25zdCB7IGFjdGl2YXRlLCBhY2NvdW50LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuY29uc3QgW3NlbGVjdGVkVG9rZW4sIHNldFNlbGVjdGVkVG9rZW5dID0gdXNlU3RhdGUoVG9rZW5MaXN0Umlua2VieVswXSlcclxuXHJcbmNvbnN0IFtiYWxhbmNlXSA9IHVzZUJhbGFuY2UoXHJcbiAgICBzZWxlY3RlZFRva2VuLmFkZHJlc3MsXHJcbiAgICBzZWxlY3RlZFRva2VuLmRlY2ltYWxzXHJcbilcclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tDb25uZWN0aW9uKCl7XHJcbiAgXHJcbiAgICBpZih0eXBlb2YgYWNjb3VudCA9PSAndW5kZWZpbmVkJylcclxuICAgICAgY29uc29sZS5sb2coJ2RpbyBwb3JjbycpXHJcbiAgICBlbHNlIGlmIChhY2NvdW50Lmxlbmd0aCA9PSAwKVxyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGNvbm5lY3RlZCcpIFxyXG4gICAgZWxzZSBcclxuICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpICAgXHJcblxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiIG9uTG9hZD17Y2hlY2tDb25uZWN0aW9ufSA+XHJcbiAgICAgIHsvKiA8TmF2IC8+ICovfVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHsvKiA8Rm9vdGVyIC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/index.js\n");

/***/ })

})