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
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shop_goodslist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop/goodslist */ "./src/pages/shop/goodslist/index.jsx");
/* harmony import */ var _shopcart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopcart */ "./src/pages/shop/shopcart/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);















var Shop = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Shop, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Shop);
  function Shop(props) {
    var _this;
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Shop);
    _this = _super.call(this, props);
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "saveItemToCart", function (item) {
      _this.setState({
        itemToCart: item
      });
    });
    _this.state = {
      itemToCart: {}
    };
    return _this;
  }

  //下拉刷新
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Shop, [{
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.forceUpdate();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().stopPullDownRefresh();
    }

    // 拿到要加入购物车的item
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "index",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtNoticebar, {
          marquee: true,
          children: "\u5F53\u524D\u8BBE\u5907ID: 20230221 \u6D4B\u8BD5\u7248\u672C\u4E0D\u4EE3\u8868\u6700\u7EC8\u6548\u679C"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shop_goodslist__WEBPACK_IMPORTED_MODULE_3__["default"], {
          saveItemToCart: this.saveItemToCart,
          addToCart: this.addToCart
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shopcart__WEBPACK_IMPORTED_MODULE_4__["default"], {
          itemToCart: this.state.itemToCart,
          className: "shop-cart"
        })]
      });
    }
  }]);
  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/shop/gooditem/index.jsx":
/*!*******************************************!*\
  !*** ./src/pages/shop/gooditem/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GoodItem; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);







function GoodItem(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      id: 0,
      name: null,
      price: 0,
      imgSrc: ''
    }),
    _useState2 = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    obj = _useState2[0],
    setObj = _useState2[1];

  // 获取具体信息
  var getItemInfo = function getItemInfo() {
    setObj({
      id: props.id,
      name: props.name,
      price: props.price,
      imgSrc: props.imgSrc
    });
  };

  // 商品详情
  var gotoDetails = function gotoDetails(id) {
    console.log(obj);
  };

  //添加到购物车
  var addToCart = function addToCart(item) {
    //移交给父组件
    props.saveItemToCart(item);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getItemInfo();
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "good-item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
      onClick: function onClick() {
        return gotoDetails(obj.id);
      },
      mode: "scaleToFill",
      className: "good-img",
      alt: "\u52A0\u8F7D\u5931\u8D25..",
      src: obj.imgSrc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
      children: obj.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "price",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        children: ["\uFFE5 ", obj.price]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "good-surplus",
        children: ["\u5269\u4F59:", obj.surplus]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        onClick: function onClick() {
          return addToCart(obj);
        },
        className: "at-icon at-icon-shopping-cart",
        size: "20",
        color: "#666"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/shop/goodslist/index.jsx":
/*!********************************************!*\
  !*** ./src/pages/shop/goodslist/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GoodsList; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gooditem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gooditem */ "./src/pages/shop/gooditem/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







// 引入 Swiper, SwiperItem 组件








var GoodsList = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(GoodsList, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(GoodsList);
  function GoodsList(props) {
    var _this;
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, GoodsList);
    _this = _super.call(this, props);
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "goodsRequest", function () {
      // 本地测试请求
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
        method: 'get',
        url: 'http://localhost:3000/goodsData',
        success: function success(res) {
          _this.setState({
            goods: (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(res.data)
          });
          console.log(res.data);
        }
      });

      // Taro.request({
      //     method: 'POST',
      //     url: 'http://192.168.199.238:7676/api/passenger/product/list',
      //     data: {
      //         "currentPage" : 0,
      //         "pageSize" : 100,
      //         "queryString" : null,
      //         "vehicleId" : 1
      //     },
      //     success: (res) => {
      //         this.setState({ goods: [...res.data.result] })
      //     }
      // })
    });
    _this.state = {
      goods: [] //存储商品
    };
    return _this;
  }

  //下拉刷新
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(GoodsList, [{
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      console.log(123);
    }

    //处理请求的数据
  }, {
    key: "handleRequest",
    value: function handleRequest(dataArr) {
      console.log(dataArr);
    }

    //获取商品列表
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.goodsRequest();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.goodsRequest.abort();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "goods-list",
        children: [this.state.goods.map(function (good, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_gooditem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: good.id,
            imgSrc: good.image //物品图片
            ,
            name: good.storeName //物品名
            ,
            price: good.price,
            surplus: good.surplus

            // addToCart={() => this.addToShopCart(good.id,good.image,good.storeName, good.price, 1)}
            ,
            addToCart: _this2.props.addToCart,
            saveItemToCart: _this2.props.saveItemToCart
          }, good.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          style: {
            position: 'relative',
            left: '-3rem'
          },
          children: "\u6CA1\u6709\u66F4\u591A\u4E86..."
        })]
      });
    }
  }]);
  return GoodsList;
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

/***/ "./src/pages/shop/shopcart/index.jsx":
/*!*******************************************!*\
  !*** ./src/pages/shop/shopcart/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShopCart; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/throttle */ "./src/utils/throttle.js");
/* harmony import */ var _shopcartlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopcartlist */ "./src/pages/shop/shopcartlist/index.jsx");
/* harmony import */ var _images_icon_shop_cart_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/icon/shop-cart.png */ "./src/images/icon/shop-cart.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


















var ShopCart = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ShopCart, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(ShopCart);
  function ShopCart(props) {
    var _this;
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, ShopCart);
    _this = _super.call(this, props);
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "handleDot", function (goodsList) {
      var count = goodsList.reduce(function (total, item) {
        return total + item.quantity;
      }, 0);
      _this.setState({
        number: count
      });
    });
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "handleGoods", function (list) {
      // 先记录了每个id出现次数
      var itemCount = list.reduce(function (pre, cur) {
        pre[cur.id] = pre[cur.id] + 1 || 1;
        return pre;
      }, {});

      //for循环写法
      // for (let i = 0; i < list.length;i++){
      // let item = list[i].id 
      // newList[item] = (newList[item] + 1) || 1
      // }

      // 给数组去重
      var hash = {};
      var noRepeatList = list.reduce(function (item, next) {
        hash[next.id] ? '' : (hash[next.id] = true, item.push(next));
        return item;
      }, []);

      //重组数组
      noRepeatList.map(function (item) {
        item.quantity = itemCount[item.id];
        return item;
      });
      return noRepeatList;
    });
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "computeTotalPrice", function (goodsList) {
      var totalPrice = goodsList.reduce(function (total, item) {
        return total + item.quantity * item.price;
      }, 0);
      _this.setState({
        totalPrice: totalPrice
      });
      return totalPrice;
    });
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "showCart", function () {
      var flag = !_this.state.showCart;
      _this.setState({
        showCart: flag
      });
    });
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "throttleUpdate", (0,_utils_throttle__WEBPACK_IMPORTED_MODULE_11__.throttle)(_this.handleGoodsUpdate, 500));
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "toPay", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorage({
        key: 'shopCart',
        data: {
          total: _this.state.totalPrice
        }
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '../pay/index?totalPrice=123'
      });
    });
    _this.state = {
      number: 0,
      goods: [],
      noRepeatGoods: [],
      totalPrice: 0,
      showCart: false
    };
    return _this;
  }

  //更新数量 
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(ShopCart, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      //通过判断prevProps和当前props可以避免陷入update死循环
      if (prevProps.itemToCart !== this.props.itemToCart) {
        this.setState({
          goods: [].concat((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this.state.goods), [this.props.itemToCart])
        }, function () {
          _this2.setState({
            noRepeatGoods: _this2.handleGoods(_this2.state.goods)
          }, function () {
            _this2.computeTotalPrice(_this2.child.props.goodsList);
          });
          _this2.setState({
            number: _this2.state.goods.length
          });
        });
      }
    }

    // 处理小红点显示数
  }, {
    key: "handleGoodsUpdate",
    value: function handleGoodsUpdate(id, type) {}

    //去结算
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "shop-cart",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "shop-cart-icon",
            children: [this.state.number ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtBadge, {
              className: "badge",
              value: this.state.number
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              onClick: this.showCart,
              src: _images_icon_shop_cart_png__WEBPACK_IMPORTED_MODULE_4__
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "shop-cart-total",
            children: this.state.totalPrice
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "shop-cart-toPay",
            onClick: this.toPay,
            children: "\u53BB\u7ED3\u7B97"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtFloatLayout, {
          isOpened: this.state.showCart,
          scrollY: true,
          title: "\u8D2D\u7269\u8F66",
          onClose: this.showCart,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shopcartlist__WEBPACK_IMPORTED_MODULE_3__["default"], {
            handleDot: this.handleDot,
            ref: function ref(e) {
              return _this3.child = e;
            },
            computeTotalPrice: this.computeTotalPrice,
            goodsList: this.state.noRepeatGoods,
            total: this.state.totalPrice
          })
        })]
      });
    }
  }]);
  return ShopCart;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/shop/shopcartitem/index.jsx":
/*!***********************************************!*\
  !*** ./src/pages/shop/shopcartitem/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShopCartItem; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);








function ShopCartItem(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState2 = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  //购物车内物品
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      id: props.good.id,
      imgSrc: props.good.imgSrc,
      name: props.good.name,
      price: props.good.price,
      quantity: props.good.quantity
    }),
    _useState4 = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    item = _useState4[0],
    setItem = _useState4[1];

  //绑定数量处理方法
  var handleQuantity = props.handleQuantity;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: isShow ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "shop-cart-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
        className: "shop-cart-item-img",
        src: item.imgSrc
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "shop-cart-item-name",
        children: item.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "shop-cart-item-price",
        children: ["\uFFE5", item.price]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "shop-cart-item-control",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtButton, {
          className: "shop-cart-item-btn sub",
          circle: true,
          size: "small",
          type: "secondary",
          onClick: function onClick() {
            handleQuantity(item.id, -1);
          },
          children: "-"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          children: props.good.quantity
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtButton, {
          className: "shop-cart-item-btn add",
          circle: true,
          size: "small",
          type: "secondary",
          onClick: function onClick() {
            handleQuantity(item.id, 1);
          },
          children: "+"
        })]
      })]
    }) : null
  });
}

/***/ }),

/***/ "./src/pages/shop/shopcartlist/index.jsx":
/*!***********************************************!*\
  !*** ./src/pages/shop/shopcartlist/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShopCartList; }
/* harmony export */ });
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopcartitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopcartitem */ "./src/pages/shop/shopcartitem/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);













var ShopCartList = /*#__PURE__*/function (_Component) {
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ShopCartList, _Component);
  var _super = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ShopCartList);
  function ShopCartList(props) {
    var _this;
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ShopCartList);
    _this = _super.call(this, props);
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleQuantity", function (id, step) {
      var cloneItems = (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this.state.items);
      cloneItems.find(function (curr) {
        return curr.id === id;
      }).quantity += step;

      //判断是否删除
      _this.handleDelete(cloneItems);
      _this.setState({
        items: cloneItems
      }, function () {
        return _this.props.computeTotalPrice(_this.state.items);
      });

      //处理小红点
      _this.props.handleDot(_this.state.items);
    });
    (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleDelete", function (cloneItems) {
      cloneItems.map(function (item) {
        if (item.quantity <= 0) {
          //先找到其索引 然后从数组中移除
          var index = _this.state.items.findIndex(function (one) {
            return one.id === item.id;
          });
          cloneItems.splice(index, 1);
        }
      });
    });
    _this.state = {
      items: []
    };
    return _this;
  }

  //拿到传入物品 渲染去重后的购物车
  (0,C_Users_jilin_Desktop_DealOnCar_DealOnCar_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(ShopCartList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.goodsList !== this.props.goodsList) {
        this.setState({
          items: this.props.goodsList
        }, function () {});
      }
    }

    //处理某商品数量
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "shop-cart-list",
        children: [this.state.items.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_shopcartitem__WEBPACK_IMPORTED_MODULE_1__["default"], {
            good: item,
            handleQuantity: _this2.handleQuantity
          }, item.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          children: ["\u603B\u4EF7:", this.props.total, "\u5143"]
        })]
      });
    }
  }]);
  return ShopCartList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/utils/throttle.js":
/*!*******************************!*\
  !*** ./src/utils/throttle.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throttle": function() { return /* binding */ throttle; }
/* harmony export */ });
// 节流 第一次最后一次都触发
var throttle = function throttle(fn, delay) {
  var timer = null;
  var startTime = new Date();
  return function () {
    var nowTime = new Date();
    var remainingTime = delay - (nowTime - startTime); // 计算上次执行到现在，还剩多少时间执行下一次

    var that = this;
    var _args = arguments;
    clearTimeout(timer);
    if (remainingTime <= 0) {
      // 如果剩余时间已达  执行并重设开始时间
      fn.apply(that, _args);
      startTime = new Date();
    } else {
      // 已经是最后一次执行   剩余时间到达后执行最后一次
      timer = setTimeout(fn, remainingTime);
    }
  };
};


/***/ }),

/***/ "./src/images/icon/shop-cart.png":
/*!***************************************!*\
  !*** ./src/images/icon/shop-cart.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon/shop-cart.png";

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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