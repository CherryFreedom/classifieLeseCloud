import Taro, { Component } from "@tarojs/taro"
import { View, Text } from "@tarojs/components"
import { AtSearchBar, AtTag } from 'taro-ui'

import { getGarbage } from '../../utils/request'
import './index.scss'


export default class Header extends Component {
  state = {
    word: '榴莲',
    newList: []
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange (word) {
    this.setState({ word })
  }

  handleGetGarbage = () => {
    const { word } = this.state
    getGarbage({ word })
      .then(newList => this.setState({ newList }))
  }

  handleJumpToHotPage = () => {
    Taro.navigateTo({ url: '/pages/hot/index' }).then(() => {
      console.log('/pages/hot/index')
    })
  }

  handleJumpToDetailPage = () => {
    Taro.navigateTo({ url: '/pages/detail/index' }).then(() => {
      console.log('/pages/detail/index')
    })
  }

  render () {
    const listItems = this.state.newList.map((item: any, i: number) => {
      return <View onClick={this.handleJumpToDetailPage} key={i}>{item.name} {item.type}</View>
    })

    return (
      <View className='header'>
        <AtSearchBar
          showActionButton
          placeholder='请输入垃圾名称'
          value={this.state.word}
          onChange={this.onChange.bind(this)}
          onActionClick={this.handleGetGarbage.bind(this)}
        />

        <View className="hot__icon">
          <AtTag size="small" type='primary' circle onClick={this.handleJumpToHotPage}>Hot</AtTag>
        </View>
        
        {
          listItems
        }
      </View>
    )
  }
}
