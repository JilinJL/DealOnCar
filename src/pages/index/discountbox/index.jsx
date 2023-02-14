import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { Image, View, Text } from '@tarojs/components'
import Login from '../login'


import './index.less'


export default class DiscountBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            credits: 0,
            discount: 0
        }
    }

    showLogin=()=>{
        this.setState({ isLogin: true })
    }

    render() {
        return (
            <View className='discountbox'>
                <View className="mainbox">

                    {this.state.isLogin ? <View>用户头像<View>用户名</View></View> 
                    : <Login></Login>}
                    <View className='rightView'>            
                    <View>优惠券: {this.state.discount}</View>
                    <View>积分: {this.state.credits}</View>
                    </View>

                </View>
            </View>
        )
    }
}
