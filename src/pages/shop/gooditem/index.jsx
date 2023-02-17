import { View,Image,Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import React from 'react'
import './index.less'

export default function GoodItem(props) {
  return (
    <View className="good-item">
        <img className="good-img" alt='加载失败..' src='123'></img>
        <Text>{props.name}</Text>
        <View className="price">
        <Text>￥ {props.price}</Text>
        <View className='at-icon at-icon-shopping-cart' size="20" color='#666'></View>
        </View>
    </View>
  )
}
