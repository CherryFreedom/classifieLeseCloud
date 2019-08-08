import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'

export default class Content extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='content'>
        <View>可回收物</View>
        <View>有害垃圾</View>
        <View>湿垃圾</View>
        <View>干垃圾</View>
      </View>
    )
  }
}
