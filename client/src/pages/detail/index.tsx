import Taro, { setNavigationBarTitle, useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { GarbageClassify } from '../../types'
import { transGarbageClassify } from '../../utils'

import './index.scss'

const initialState: GarbageClassify = {
  name: '',
  type: -1,
  explain: '',
  contain: '',
  tip: ''
}

export default function Detail () {
  const [garbage, setGarbage] = useState(initialState)

  setNavigationBarTitle({ title: '详情' })

  useEffect(() => {
    const { garbage } = this.$router.params
    setGarbage(JSON.parse(garbage))
  }, [])

  return (
    <View className='detail layout'>
      <View>
        <View>{garbage.name}</View>
        <View>{transGarbageClassify(garbage.type)}</View>
        <View>{garbage.explain}</View>
        <View>{garbage.contain}</View>
        <View>{garbage.tip}</View>
      </View>
    </View>
  )
}
