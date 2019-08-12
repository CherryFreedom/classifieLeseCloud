import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'

interface GarbageClassifyItem {
  type: number
  name: string
}

export default class Content extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleNavigate = (page: number) => {
    Taro.navigateTo({ url: '/pages/classify/index' }).then(() => {
      console.log(page)
    })
  }

  render () {
    const garbageClassify = [
      {
        type: 1,
        name: '可回收物'
      },
      {
        type: 2,
        name: '有害垃圾'
      },
      {
        type: 3,
        name: '湿垃圾'
      },
      {
        type: 4,
        name: '干垃圾'
      }
    ]
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
