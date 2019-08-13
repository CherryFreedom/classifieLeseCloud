import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { garbageClassify, GarbageClassifyItem } from '../../utils/config'
import './index.scss'

export default class Content extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleNavigate = (page: number) => {
    Taro.navigateTo({ url: '/pages/classify/index' })
  }

  render () {

    return (
      <View className='content'>
        {
          garbageClassify.map((garbage: GarbageClassifyItem) => {
            return (
              <View className="garbage__nav" key={garbage.type} onClick={this.handleNavigate.bind(this, garbage.type)}>{garbage.name}</View>
            )
          })
        }
      </View>
    )
  }
}
