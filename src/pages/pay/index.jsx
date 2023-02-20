import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { Component } from 'react'

export default class Pay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
    }
    
    componentDidMount(){
        Taro.getStorage({
            key: 'shopCart',
            success: (res)=>{
                this.setState({total: res.data.total})
            }
        })
    }
  render() {
    return (
      <View className='index'>需要支付{this.state.total}元</View>
    )
  }
}
