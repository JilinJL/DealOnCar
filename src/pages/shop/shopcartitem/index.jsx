import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React, { useEffect, useState } from 'react'
import './index.less'

export default function ShopCartItem(props) {


  const [isShow, setIsShow] = useState(true)
  //购物车内物品
  const [item, setItem] = useState({
    id: props.good.id,
    imgSrc: props.good.imgSrc,
    name: props.good.name,
    price: props.good.price,
    quantity: props.good.quantity
  })

  //绑定数量处理方法
  const handleQuantity = props.handleQuantity

  return (
    <>
      {
        isShow ?
          (<View className="shop-cart-item">
            <Image className="shop-cart-item-img" src={item.imgSrc} />
            <Text className="shop-cart-item-name">{item.name}</Text>
            <Text className="shop-cart-item-price">￥{item.price}</Text>


            <View className="shop-cart-item-control">
              <AtButton
                className="shop-cart-item-btn sub"
                circle
                size='small'
                type='secondary'
                onClick={() => { handleQuantity(item.id, -1) }}
              >-</AtButton>
              <View>{props.good.quantity}</View>
              <AtButton
                className="shop-cart-item-btn add"
                circle
                size='small'
                type='secondary'
                onClick={() => { handleQuantity(item.id, 1) }}
              >+</AtButton>
            </View>
          </View>)
          :
          null
      }

    </>

  )
}
