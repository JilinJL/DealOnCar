import { View, Input, Text, Picker, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { AtInput, AtForm, AtButton, AtTimeline, AtImagePicker } from 'taro-ui'
import './index.less'

export default class ApplyToJoin extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: '',
      telephone: null,
      born: null,
      carId: null,
      license: null,
      img: []
    })
  }

  //模态框
  componentDidMount() {
    Taro.showModal({
      title: '注意事项',
      content: '申请提交后会交给后台审核，涉及隐私信息将会严格保密。用户提交的所有信息仅用于资格验证。',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          Taro.navigateBack()
        }
      }
    })
  }
  // 生日变化
  onBornChange = e => {
    this.setState({
      born: e.detail.value
    })
  }

  //选择图片上传
  imgChoose=(img)=>{
    this.setState({
      img
    })
  }

  submit() {

  }

  render() {
    return (
      <View className='index'>

        <View className='user-apply'>
          <Text className='user-apply-title'>申请流程</Text>
          <AtTimeline
            className='user-apply-timeline'
            items={[
              { title: '提交申请', content: ['填写并提交申请'], icon: 'mail' },
              { title: '审核通过', content: ['后台通过申请,预定设备'], icon: 'check-circle' },
              { title: '支付押金', content: ['支付押金', '达指定地点安装设备'], icon: 'credit-card' },
              { title: '设备启用', content: ['使用过程如有疑问,可随时致电客服'], icon: 'phone' }
            ]}
          >
          </AtTimeline>
        </View>

        <View className='user-info-form'>


          <Input
            type='text'
            name='name'
            className='input'
            placeholder='真实姓名'
          ></Input>

          <Input
            name='telephone'
            className='input'
            placeholder='电话'
            type='phone'
          ></Input>

          <View className='born-picker'>
            <View>
              <Picker mode='date' onChange={this.onBornChange}>
                <View className='picker'>
                  生日：{this.state.born}
                </View>
              </Picker>
            </View>
          </View>

          <Text>👇请传入驾驶证照片👇</Text>
          <AtImagePicker
            mode='scaleToFill'
            files={this.state.img}
            onChange={this.imgChoose}
          />

          <AtButton
            className='user-info-submit'
            type='submit'
          >提交</AtButton>


        </View>
      </View>
    )
  }
}
