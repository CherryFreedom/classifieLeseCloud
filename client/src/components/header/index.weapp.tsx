import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'

export default class Header extends Component {
  state = {
    value: ''
  }
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='header'>
        <AtInput
            name='value'
            type='text'
            placeholder='请输入垃圾名称'
            value={this.state.value}
            onChange={value => { this.setState({ value }) }}
          />
      </View>
    )
  }
}
