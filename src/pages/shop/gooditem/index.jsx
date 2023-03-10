import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import React, { useEffect, useState } from 'react'
import './index.less'

export default function GoodItem(props) {

  const [obj, setObj] = useState({ id: 0, name: null, price: 0, imgSrc: '' })


  // 获取具体信息
  const getItemInfo = () => {
    setObj({
      id: props.id,
      name: props.name,
      price: props.price,
      imgSrc: props.imgSrc
    })
  }

  // 商品详情
  const gotoDetails=(id)=>{
    console.log(obj);

  }

  //添加到购物车
  const addToCart = (item)=>{
    //移交给父组件
    props.saveItemToCart(item)
    
  }

  useEffect(() => {
    getItemInfo();
  })

  return (
    <View className="good-item">
      <Image onClick={()=>gotoDetails(obj.id)} mode='scaleToFill' className="good-img" alt='加载失败..' src={obj.imgSrc}></Image>
      <Text>{obj.name}</Text>
      <View className="price">
        <Text>￥ {obj.price}</Text>
        <Text className="good-surplus">剩余:{obj.surplus}</Text>
        <View onClick={()=>addToCart(obj)} className='at-icon at-icon-shopping-cart' size="20" color='#666'></View>
      </View>
    </View>
  )
}
