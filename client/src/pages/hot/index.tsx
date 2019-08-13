import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { getHotGarbage } from '../../utils/request'

import './index.scss'

const initialState = { hotList: [] }

type State = Readonly<typeof initialState>

export default class Hot extends Component {

  readonly state: State = initialState

  config: Config = {
    navigationBarTitleText: '热门搜索'
  }

  componentWillMount () { }

  componentDidMount () {
    getHotGarbage().then(res => {
      this.setState({ hotList: res })
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='hot layout'>
        {
          this.state.hotList.map(hot => {
            return <View key={hot.name}>
              {hot.name}
            </View>
          })
        }
      </View>
    )
  }
}
