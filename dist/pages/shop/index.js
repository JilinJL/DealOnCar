"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/shop/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/shop/index.jsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/shop/index.jsx ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Shop; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shop_goodslist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop/goodslist */ "./src/pages/shop/goodslist/index.jsx");
/* harmony import */ var _headerbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerbox */ "./src/pages/shop/headerbox/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);












var Shop = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Shop, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Shop);
  function Shop(props) {
    var _this;
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Shop);
    _this = _super.call(this, props);
    _this.state = {
      goodsType: 0 // 默认分类是0  展示所有物品
    };

    return _this;
  }
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Shop, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "index",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_headerbox__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shop_goodslist__WEBPACK_IMPORTED_MODULE_2__["default"], {
          goodsType: this.state.goodsType
        })]
      });
    }
  }]);
  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/shop/goodslist/index.jsx":
/*!********************************************!*\
  !*** ./src/pages/shop/goodslist/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GoodsList; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





// 引入 Swiper, SwiperItem 组件






var GoodsList = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(GoodsList, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(GoodsList);
  function GoodsList(props) {
    var _this;
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, GoodsList);
    _this = _super.call(this, props);
    _this.state = {
      goods: []
    }; //存储商品
    return _this;
  }

  //处理请求的数据
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(GoodsList, [{
    key: "handleRequest",
    value: function handleRequest(dataArr) {
      console.log(dataArr);
    }

    //分类数据

    // gotoDetails(id){
    //     Taro.navigateTo({
    //         url: 'details'
    //     })
    // }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //获取商品列表
      this.goodsRequest = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
        method: 'get',
        url: 'http://localhost:3000/goodsData',
        // data:
        // {
        //     "currentPage": 1,
        //     "pageSize": 5,
        //     "vehicleId": 1,
        //     "queryString": "绿箭"
        // },

        success: function success(res) {
          _this2.setState({
            goods: (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(res.data)
          });
          console.log(res.data);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log(this.state.goods[0].name);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.goodsRequest.abort();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "goodsList",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtList, {
          hasBorder: true,
          children: this.state.goods.map(function (good, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtListItem
            /* onClick={this.gotoDetails(good.id)}*/, {
              extraText: '￥' + good.price,
              title: good.name,
              thumb: good.imgUrl
            });
          })
        })
      });
    }
  }]);
  return GoodsList;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./src/pages/shop/headerbox/index.jsx":
/*!********************************************!*\
  !*** ./src/pages/shop/headerbox/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderBox; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);









var HeaderBox = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderBox, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderBox);
  function HeaderBox(props) {
    var _this;
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HeaderBox);
    _this = _super.call(this, props);
    _this.state = {
      machineId: 202302131120
    };
    return _this;
  }
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(HeaderBox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "headerbox",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "mainbox",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
            children: "\u6B22\u8FCE\u5149\u4E34~"
          })
        })
      });
    }
  }]);
  return HeaderBox;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./src/pages/shop/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/shop/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/shop/index.jsx");


var config = {"navigationBarTitleText":"购物"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/shop/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/shop/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map