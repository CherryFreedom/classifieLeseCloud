import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"

import { GarbageClassify } from '../../types/index'

import './index.scss'

export default function LeseContent (props) {
  const { garbageClassifyArray = [] } = props
  const handleNavigate = (type: number) => {
    Taro.navigateTo({ url: `/pages/classify/index?type=${type}` })
  }

  return (
    <View className='content'>
      {
        garbageClassifyArray.map((garbage: GarbageClassify) => {
          return (
            <View
              className="garbage__nav"
              key={garbage.type}
              onClick={() => handleNavigate(garbage.type)}>
              {garbage.name}
            </View>
          )
        })
      }
    </View>
  )
}
