import { View,Image,Text } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtBadge } from 'taro-ui'
import img from '../../../images/icon/shop-cart.png'
import './index.less'

export default class ShopCart extends Component {
    constructor(props) {
        super(props)
        this.state=({
            number: 0,
            goods: [{id: 1,num: 2},{id:2,num: 2}],
            showBadge: false
        })
    }

    //更新数量
    setGoodsNumber=()=>{

        this.setState({number: this.state.goods.length})
        console.log(this.state.goods.length)

        if(this.state.goods.length!=0){
            this.state.showBadge = true
        }else{
            this.state.showBadge = false
        }
    }

    componentDidMount(){
        this.setGoodsNumber()
    }

    //去结算
    toPay=() =>{
        Taro.setStorage({
            key: 'shopCart',
            data: {
                total: this.state.number
            }
        })
        Taro.navigateTo({
            url: '../pay/index?totalPrice=123'
        })
    }
  render() {
    return (
      <View className="shop-cart">
            <View className="shop-cart-icon">
                {this.state.showBadge?<AtBadge className="badge" value={this.state.number}>
                </AtBadge>:null} 
                <Image onClick={this.setGoodsNumber} src={img}></Image>
                   
            </View>
            <View className="shop-cart-total">20</View>
            <View className="shop-cart-toPay" onClick={this.toPay}>去结算</View>
      </View>
    )
  }
}
