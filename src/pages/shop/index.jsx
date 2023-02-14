import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import GoodsList from '../shop/goodslist'
import HeaderBox from './headerbox'
import './index.less'

export default class Shop extends Component {
  constructor(props){
    super(props)
    this.state = {
      goodsType: 0   // 默认分类是0  展示所有物品
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
      
      <HeaderBox></HeaderBox>
      
      {/*TODO:  ShopCart*/}


        <GoodsList goodsType={this.state.goodsType}></GoodsList>

      </View>
    )
  }
}
