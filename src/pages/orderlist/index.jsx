import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View} from '@tarojs/components'
import OrderItem from './orderitem'

export default class OrderList extends Component {

    constructor(props) {
        super(props)
        this.state=({
            userOrder: []
        })
    }

    componentDidMount(){

    //用户id
    Taro.getStorage({
        key: '',
        success: (response) => {
            console.log(123);
        },
        fail: (res)=>{
            Taro.showToast({
                title: '读取失败!',
                icon: 'error'
            })
        }
    })
    
    //获取用户订单信息
        Taro.request({
            url: '后端的getOrderById接口',
            data: {
            },
            success: (res)=>{
                this.setState({userOrder: [...res.data.result]})
            }
        })

    }

  render() {
    return (
      <View className='order-list'>
        <OrderItem></OrderItem>
      </View>
    )
  }
}
