import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import GoodsList from '../shop/goodslist'
import ShopCart from './shopcart'

import './index.less'

export default class Shop extends Component {
  constructor(props){
    super(props)

  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
      
        <GoodsList />

        <ShopCart className='shop-cart' />

      </View>
    )
  }
}
