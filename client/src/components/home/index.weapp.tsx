import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import { AtInput, AtForm } from 'taro-ui'
import { getGarbage } from '../../utils/request'
import { GarbageInfo, addGarbageToCloudDatabase } from '../../utils/cloud'

export default class Login extends Component {
  state = {
    context: {},
    value: '榴莲',
    newList: []
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleInsertData = () => {
    // addGarbageToCloudDatabase
    this.state.newList.forEach(async (item: GarbageInfo) => {
      await addGarbageToCloudDatabase(item)
    })
  }

  handleGetGarbage = (value: string) => {
    getGarbage(value)
      .then(newList => this.setState({ newList }))
  }

  render () {
    const listItems = this.state.newList.map((item: any, i: number) => {
      return <Text key={i}>{item.name} {item.type}</Text>
    })

    return (
      <View className='index'>
        <AtForm>
          <AtInput
            name='value'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={value => { this.setState({ value }) }}
          />
          <Button onClick={this.handleGetGarbage.bind(this, this.state.value)}>查询</Button>
          <Button onClick={this.handleInsertData}>插入数据库</Button>
          {
            listItems
          }
        </AtForm>
      </View>
    )
  }
}
