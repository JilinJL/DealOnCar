import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import ShopCartItem from '../shop/shopcartitem'

import './index.less'
export default class Pay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],
            totalPrice: 0
        }
    }
    
    componentDidMount(){
        Taro.getStorage({
            key: 'cart',
            success: (res)=>{
                this.setState({totalPrice: res.data.totalPrice})
                this.setState({goodsList: res.data.goodsList})
            }
        })
    }

    //拿到购物车数据


  render() {
    return (
      <View className="index">
      {
        this.state.goodsList.map((item)=>{
          return (
            <ShopCartItem
            className='shopcart'
            key={item.id}
            good={item}
            type='true'
            ></ShopCartItem>
          )
        })
      }
      <View className='payBtn bottom'>支付{this.state.totalPrice}元</View>
      </View>

    )
  }
}
