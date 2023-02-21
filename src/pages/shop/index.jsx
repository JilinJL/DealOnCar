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
      goodsInCart: [],
    })
  }

  saveCart=(arr)=>{
    this.setState({goodsInCart: arr})
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  onPullDownRefresh() {
    
    this.forceUpdate()
  }

  render() {
    return (
      <View className='index'>

        <AtNoticebar marquee>
          当前设备ID: 20230221 测试版本不代表最终效果
        </AtNoticebar>
        
        <GoodsList saveGoodsInCart={this.saveCart} />

        <ShopCart goodsInCart={this.state.goodsInCart} className='shop-cart' />

      </View>
    )
  }
}
