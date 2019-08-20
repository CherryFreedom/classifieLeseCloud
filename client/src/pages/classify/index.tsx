import Taro, { useState, useEffect, useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { GarbageClassify } from '../../types'
import { transGarbageClassify } from '../../utils'
import { garbageClassifyArray } from '../../utils/config'

import './index.scss'

export const initialState: GarbageClassify = {
  name: '',
  type: -1,
  explain: '',
  contain: '',
  tip: ''
}

export default function Classify () {
  const [introduce, setIntroduce] = useState(initialState)
  const { params } = useRouter()

  useEffect(() => {
    setIntroduce(garbageClassifyArray[params.type])
  }, [])

  return (
    <View className='classify layout'>
      <View>{introduce.name}</View>
      <View>{transGarbageClassify(introduce.type)}</View>
      <View>{introduce.explain}</View>
      <View>{introduce.contain}</View>
      <View>{introduce.tip}</View>
    </View>
  )
}

Classify.config = {
  navigationBarTitleText: '分类介绍'
}