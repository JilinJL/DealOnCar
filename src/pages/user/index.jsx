import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtButton,AtList,AtListItem } from 'taro-ui'
import './index.less'

export default class User extends Component {

gotoHistory() {
  Taro.navigateTo({
    url: '../orderlist/index'
  })
}

gotoApply(){
  Taro.navigateTo({
    url: '../applytojoin/index'
  })
}
  
  render() {
    return (
      <View className='index'>
        <View className='user-info'>
        <AtAvatar className='user-info-avatar' alt='用户头像'></AtAvatar>
        <Text>昵称</Text>
        </View>

        <AtList className='main-list'>
        <AtListItem onClick={this.gotoHistory} title='历史订单' arrow='right' />
        <AtListItem title='我的卡券' arrow='right' />
        <AtListItem title='联系客服' arrow='right' />
        <AtListItem onClick={this.gotoApply} title='申请加入' arrow='right' />
        </AtList>
      </View>
    )
  }
}
