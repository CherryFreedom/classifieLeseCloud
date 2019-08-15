import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Details extends Component {

  config: Config = {
    navigationBarTitleText: '详情'
  }

  componentWillMount () {
    const item = this.$router.params.item
    this.setState({
      item
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console
    return (
      <View className='detail layout'>
        Detail
        <View>
          {item}
        </View>
      </View>
    )
  }
}
