import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { Image, View, Text } from '@tarojs/components'
import './index.less'

export default class HeaderBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            machineId: 202302131120
        }
    }

    //跳转购物页面
    goshopping(){
        Taro.switchTab({
            url: '../../pages/shop/index'
          })
    }

    render() {
        return (
            <View className='headerbox'>
                <View className='mainbox'>
                    <View className='machinebox'>
                        当前设备编号:{this.state.machineId}
                    </View>
                    <View class='goshopping' onClick={this.goshopping}>
                        开始选购
                    </View>
                </View>

            </View>
        )
    }
}
