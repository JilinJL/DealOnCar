import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtButton,AtList,AtListItem } from 'taro-ui'
import './index.less'

export default class User extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  render() {
    return (
      <View className='index'>
        <View className='user-info'>
        <AtAvatar>头像</AtAvatar>
        <Text>昵称</Text>
        </View>

        <AtList className='main-list'>
        <AtListItem title='历史订单' arrow='right' />
        <AtListItem title='我的卡券' arrow='right' />
        <AtListItem title='联系客服' arrow='right' />
        <AtListItem title='申请成为司机' arrow='right' />
        </AtList>
      </View>
    )
  }
}
