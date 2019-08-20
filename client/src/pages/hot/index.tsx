import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { GarbageClassifyHotArray } from '../../types'
import { getHotGarbage } from '../../utils/request'
import { transGarbageClassify } from '../../utils'

import './index.scss'

const hotList: GarbageClassifyHotArray = []
const initialState = { hotList }

export default function Hot () {
  const [hotList, setHotList] = useState(initialState.hotList)

  useEffect(() => {
    getHotGarbage().then(hotList => setHotList(hotList))
  }, [])

  return (
    <View className='hot layout'>
      {
        hotList.map(hot => (
          <View key={hot.name}>
            <Text>{hot.name}</Text>
            <Text>{transGarbageClassify(hot.type)}</Text>
            <Text>{hot.index}</Text>
          </View>
        ))
      }
    </View>
  )
}

Hot.config = {
  navigationBarTitleText: '热门搜索'
}