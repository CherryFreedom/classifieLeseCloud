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

  handleNavigate = (page: number) => {
    Taro.navigateTo({ url: '/pages/detail/index' }).then(() => {
      console.log(page)
    })
  }

  render () {
    return (
      <View className='content'>
        <View onClick={this.handleNavigate.bind(this, 1)}>可回收物</View>
        <View onClick={this.handleNavigate.bind(this, 2)}>有害垃圾</View>
        <View onClick={this.handleNavigate.bind(this, 3)}>湿垃圾</View>
        <View onClick={this.handleNavigate.bind(this, 4)}>干垃圾</View>
      </View>
    )
  }
}
