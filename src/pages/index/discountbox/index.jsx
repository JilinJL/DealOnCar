import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { Image, View, Text } from '@tarojs/components'


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

    render() {
        return (
            <View className='discountbox'>
                <View className="mainbox">

                    {this.state.isLogin ? <View>用户头像</View> 
                    : <View>请<Text style={{color: "#FF2CBC"}}>[登录]</Text></View>}
                    <View className='rightView'>            
                    <View>优惠券: {this.state.discount}</View>
                    <View>积分: {this.state.credits}</View>
                    </View>

                </View>
            </View>
        )
    }
}
