import React from 'react'
import Taro from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'



export default function Login() {
  const login = () => {
    Taro.login({
      success: function(res){
        if(res.code){
          Taro.request({
            url:'http://localhost:7677/api/sso/login/userLogin',    // 后端调用小程序api的地址
            data:{
              js_code: res.code
            },
            success: function(res){
                // 首次登陆需要授权
                console.log(res.data)
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
