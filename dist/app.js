"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_taro-ui_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-5P64A5DQ_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-JBC2HC5Z_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-25EVJL72_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-LNJCN3VW_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_taro_js.js");

require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/dist/style/index.scss */ "./node_modules/taro-ui/dist/style/index.scss");







var App = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(App, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(App);
  function App() {
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, App);
    return _super.apply(this, arguments);
  }
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      // this.props.children 是将要会渲染的页面
      return this.props.children;
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.js */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/index/index","pages/shop/index","pages/user/index"],"window":{"backgroundTextStyle":"light","backgroundColor":"#000","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"./images/icon/home_.png","selectedIconPath":"./images/icon/home.png"},{"pagePath":"pages/shop/index","text":"购物","iconPath":"./images/icon/shop.png","selectedIconPath":"./images/icon/shop-fill.png"},{"pagePath":"pages/user/index","text":"我的","iconPath":"./images/icon/user_1.png","selectedIconPath":"./images/icon/user.png"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_js__WEBPACK_IMPORTED_MODULE_4__["default"], react__WEBPACK_IMPORTED_MODULE_5__, (react_dom__WEBPACK_IMPORTED_MODULE_6___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./node_modules/taro-ui/dist/style/index.scss":
/*!****************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/index.scss ***!
  \****************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map