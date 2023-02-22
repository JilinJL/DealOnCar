import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtNoticebar } from 'taro-ui'
import GoodsList from '../shop/goodslist'
import ShopCart from './shopcart'

import './index.less'

export default class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      itemToCart: {}
    })
  }


  //下拉刷新
  onPullDownRefresh() {
    this.forceUpdate()
    Taro.stopPullDownRefresh()
  }

  // 拿到要加入购物车的item
  saveItemToCart=(item)=>{
    this.setState({itemToCart: item})
  }

  render() {
    return (
      <View className='index'>

        <AtNoticebar marquee>
          当前设备ID: 20230221 测试版本不代表最终效果
        </AtNoticebar>

        <GoodsList saveItemToCart={this.saveItemToCart} addToCart={this.addToCart} />

        <ShopCart itemToCart={this.state.itemToCart} className='shop-cart' />

      </View>
    )
  }
}
