export default defineAppConfig({
  pages: [
    'pages/shop/index',
    'pages/index/index',
    'pages/user/index',
    'pages/pay/index',
    'pages/orderlist/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#ddd',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '随车买',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true
  },
  tabBar:{
    "color": "#666",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "./images/icon/home_.png",
      "selectedIconPath": "./images/icon/home.png"
    },{
      "pagePath": "pages/shop/index",
      "text": "购物",
      "iconPath": "./images/icon/shop.png",
      "selectedIconPath": "./images/icon/shop-fill.png"
    },{
      "pagePath": "pages/user/index",
      "text": "我的",
      "iconPath": "./images/icon/user_1.png",
      "selectedIconPath": "./images/icon/user.png"
    }]
  }
})
