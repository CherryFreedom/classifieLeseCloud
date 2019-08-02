import Taro, { useState, getUserInfo } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import Login from '../../components/login/index.weapp'

export default function Index() {
  const [userInfo, setUserInfo] = useState({})

  Taro.getSetting({
    success(res) {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        Taro.getUserInfo({
          success(res) {
            setUserInfo(res)
            console.log(res.userInfo)
          },
        })
      }
    },
    fail(res) {
      console.log(res)
    },
  })

  return (
    <View>
      <Text>我的</Text>
      <Login />
      <View>
        1
        <Text>{userInfo}</Text>
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '我的',
}
