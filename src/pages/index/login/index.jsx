import {React,useState} from 'react'
import Taro from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'



export default function Login(props) {

  const [userData,setUserData] = useState({
    userInfo: {},
    hasUserInfo: false
  })

  const login = () => {

    wx.getUserProfile({
      desc: '用于小程序登陆',
      success: (res) => {
        setUserData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      error: (err) => {
        console.log(err);
      }
    })

    Taro.login({
      success: function(res){
        wx.showLoading({
          title: '稍等..',
        })
        if(res.code){
          Taro.request({
            url:'http://localhost:3000/goodsData',    // 后端调用小程序api的地址 http://localhost:7677/api/sso/login/userLogin
            data:{
              js_code: res.code
            },
            success: function(res){
              wx.hideLoading()
              props.setIsLogin(true)
              // 将用户数据存入storage

            },
            fail: function(err){
              Taro.showToast({
                title: '加载失败',
                icon: 'error',
                duration: 2000
              })  
            }  
          
          })

        }
      }
    })
  }
  return(
    <>
      <View>请<Text onClick={login} style={{ color: "#FF2CBC" }}>[登录]</Text></View>
    </>
  )

}
