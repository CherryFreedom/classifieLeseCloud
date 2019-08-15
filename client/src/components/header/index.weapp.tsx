import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtTag, AtList, AtListItem } from 'taro-ui'

import { getGarbage } from '../../utils/request'
import { transGarbageClassify } from '../../utils'
import { GarbageInfoArray } from '../../types'

import './index.scss'

interface InitialState {
  word: string
  newList: GarbageInfoArray
}

const initialState: InitialState = { word: '榴莲', newList: [] }

type State = Readonly<typeof initialState>

export default class Header extends Component {
  readonly state: State = initialState

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange = word => {
    this.setState({ word })
  }

  handleGetGarbage = () => {
    const { word } = this.state
    if (!word) return
    getGarbage({ word }).then(newList => this.setState({ newList }))
  }

  handleJumpToHotPage = () => {
    Taro.navigateTo({ url: '/pages/hot/index' }).then(() => {
      console.log('/pages/hot/index')
    })
  }

  handleJumpToDetailPage = item => {
    Taro.navigateTo({ url: '/pages/detail/index?item=' + JSON.stringify(item) })
  }

  handleListItemClick = item => {
    this.setState({ result: item })
  }

  render() {
    const { word, newList } = this.state

    return (
      <View className="header">
        {/* 搜索 + 联想 */}
        <AtSearchBar value={word} showActionButton placeholder="请输入垃圾名称" onChange={this.onChange} onActionClick={this.handleGetGarbage} />
        {word && (
          <View className="scroll-list">
            <AtList>
              {newList.map((item: any, index) => (
                <AtListItem
                  key={index}
                  title={item.name}
                  extraText={transGarbageClassify(item.type)}
                  arrow="right"
                  data-item={item}
                  onClick={() => this.handleJumpToDetailPage(item)}
                />
              ))}
            </AtList>
          </View>
        )}

        <View className="hot__icon">
          <AtTag size="small" type="primary" circle onClick={this.handleJumpToHotPage}>
            Hot
          </AtTag>
        </View>
      </View>
    )
  }
}
