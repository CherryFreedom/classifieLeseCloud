import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Classify extends Component {

  config: Config = {
    navigationBarTitleText: '分类介绍'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='classify layout'>
        classify
      </View>
    )
  }
}
