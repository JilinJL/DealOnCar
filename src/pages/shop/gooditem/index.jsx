import { View,Image,Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import React, { useEffect, useState } from 'react'
import './index.less'

export default function GoodItem(props) {

  const [obj,setObj] = useState({id: 0,name: null,price: 0,imgSrc: ''})


  // 获取具体信息
  const getItemInfo=()=>{
    setObj({
      id: props.id,
      name: props.name,
      price: props.price,
      imgSrc: props.imgSrc
    })
  }
  
  useEffect(()=>{
    getItemInfo();
  })
  return (
    <View className="good-item">
        <Image mode='scaleToFill' className="good-img" alt='加载失败..' src={obj.imgSrc}></Image>
        <Text>{obj.name}</Text>
        <View className="price">
        <Text>￥ {obj.price}</Text>
        <Text className="good-surplus">剩余:{obj.surplus}</Text>
        <View className='at-icon at-icon-shopping-cart' size="20" color='#666'></View>
        </View>
    </View>
  )
}
