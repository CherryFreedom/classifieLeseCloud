import Taro, { Component } from "@tarojs/taro"
import { View, Text } from "@tarojs/components"
import { AtSearchBar } from 'taro-ui'

import { getGarbage } from '../../utils/request'
import './index.scss'


export default class Header extends Component {
  state = {
    word: '',
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

  render () {
    const listItems = this.state.newList.map((item: any, i: number) => {
      return <Text key={i}>{item.name} {item.type}</Text>
    })

    return (
      <View className='header'>
        <AtSearchBar
          showActionButton
          placeholder='请输入垃圾名称'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.handleGetGarbage.bind(this)}
        />
        {
          listItems
        }
      </View>
    )
  }
}
