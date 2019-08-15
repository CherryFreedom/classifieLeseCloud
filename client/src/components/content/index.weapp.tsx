import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { garbageClassifyArray } from '../../utils/config'
import { GarbageClassify } from '../../types/index'
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
          garbageClassifyArray.map((garbage: GarbageClassify) => {
            return (
              <View className="garbage__nav" key={garbage.type} onClick={this.handleNavigate.bind(this, garbage.type)}>{garbage.name}</View>
            )
          })
        }
      </View>
    )
  }
}