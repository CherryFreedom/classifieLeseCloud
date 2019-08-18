import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtTag, AtList, AtListItem } from 'taro-ui'

import { GarbageClassify, GarbageInfoArray } from '../../types'
import { getGarbage } from '../../utils/request'
import { transGarbageClassify } from '../../utils'

import './index.scss'


interface InitialState {
  word: string
  newList: GarbageInfoArray
}

const initialState: InitialState = { word: '苹果', newList: [] }

export default function LeseHeader () {
  const [word, setWord] = useState(initialState.word)
  const [newList, setNewList] = useState(initialState.newList)

  useEffect(() => {

  })

  const handleGetGarbage = () => {
    if (!word) return
    getGarbage({ word }).then(newList => setNewList(newList))
  }

  const handleJumpToHotPage = () => {
    Taro.navigateTo({ url: '/pages/hot/index' })
  }

  const handleJumpToDetailPage = garbage => {
    Taro.navigateTo({ url: '/pages/detail/index?garbage=' + JSON.stringify(garbage) })
  }

  const renderNewList = () => {
    return (
      <View className="scroll-list">
        <AtList>
          {newList.map((garbage: GarbageClassify) => (
            <AtListItem
              key={garbage.name}
              title={garbage.name}
              extraText={transGarbageClassify(garbage.type)}
              arrow="right"
              data-item={garbage}
              onClick={() => handleJumpToDetailPage(garbage)}
            />
          ))}
        </AtList>
      </View>
    )
  }

  const renderHotIcon = () => {
    return (
      <View className="hot__icon">
        <AtTag size="small" type="primary" circle onClick={handleJumpToHotPage}>
          Hot
        </AtTag>
      </View>
    )
  }

  return (
    <View className="header">
      {/* 搜索 + 联想 */}
      <AtSearchBar value={word} showActionButton placeholder="请输入垃圾名称" onChange={setWord} onActionClick={handleGetGarbage} />
      {
        renderNewList()
      }
      {
        renderHotIcon()
      }
    </View>
  )
}
