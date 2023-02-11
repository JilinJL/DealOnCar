import Taro from '@tarojs/taro'
import React,{Component} from 'react'
import {Image, View, Text } from '@tarojs/components'
import { AtButton,AtTabBar } from 'taro-ui'

import { Swiper, SwiperItem } from '@tarojs/components'

import IndexSwiper from './indexswiper';
import GoodsList from './goodslist'
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
          <IndexSwiper></IndexSwiper>
          <View style={"background-color: #B2EBF2;height: 50rem"}>
          <GoodsList></GoodsList>
    


          </View>
      </View>
    )
  }
}
