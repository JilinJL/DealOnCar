import Taro from '@tarojs/taro'
import React,{Component} from 'react'
import {Image, View, Text } from '@tarojs/components'
import { AtButton,AtTabBar } from 'taro-ui'

import { Swiper, SwiperItem } from '@tarojs/components'

import IndexSwiper from './indexswiper';
import DiscountBox from './discountbox';
import HeaderBox from './headerbox';

import './index.less'


export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>

          {/* 顶部轮播图 */}
          <IndexSwiper></IndexSwiper>
          {/* 登录信息+优惠券卡片 */}
          <DiscountBox></DiscountBox>
          {/* 设备编号以及购物入口 */}
          <HeaderBox className='headerbox'></HeaderBox>

          
      </View>
    )
  }
}
