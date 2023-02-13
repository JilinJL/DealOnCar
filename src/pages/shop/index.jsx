import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import GoodsList from '../shop/goodslist'

import './index.less'

export default class Shop extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
      {/*TODO:  BoxHeader*/}
      
      {/*TODO:  ShopCart*/}

        <GoodsList></GoodsList>

      </View>
    )
  }
}
