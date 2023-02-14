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


    render() {
        return (
            <View className='headerbox'>
                <View className='mainbox'>
                    <Text>欢迎光临~</Text>
                </View>

            </View>
        )
    }
}
