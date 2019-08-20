import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import LeseHeader from '../../components/header/index.weapp'
import LeseContent from '../../components/content/index.weapp'
import { garbageClassifyArray } from '../../utils/config'

import './index.scss'

export default function Index () {
  return (
    <View className='index layout'>
      <LeseHeader />
      <LeseContent garbageClassifyArray={garbageClassifyArray} />
      <View>垃圾分类，是指按一定规定或标准将垃圾分类储存、分类投放和分类搬运，从而转变成公共资源的一系列活动的总称。分类的目的是提高垃圾的资源价值和经济价值，力争物尽其用。</View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
