import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import { AtInput, AtForm } from 'taro-ui'
import { getGarbage } from '../../utils/request'

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

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "lese",
        data: {}
      })
      .then(res => {
        this.setState({
          context: res.result
        })
      })
  }

  addTodo = () => {
    const db = Taro.cloud.database()
    console.log(db)
    db.collection('lese').add({
      data: {
        description: "learn cloud database",
        due: new Date("2018-09-01"),
        tags: [
          "cloud",
          "database"
        ],
        location: new db.Geo.Point(113, 23),
        done: false
      }
    })
  }

  handleGetGarbage = (value) => {
    console.log(value)
    getGarbage(value)
      .then(({ code, newslist: newList = [] }) => {
        console.log('handleGetGarbage', code, newList)
        if (code === 200) {
          this.setState({
            newList
          })
        }
      })
  }

  render () {
    const listItems = this.state.newList.map((item: any) => {
      return <Text className='li'>{item.name} {item.type}</Text>
    })

    return (
      <View className='index'>
        <Button onClick={this.getLogin}>获取登录云函数</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
        <Button onClick={this.addTodo}>插入数据库</Button>
        <AtForm>
          <AtInput
            name='value1'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={value => { this.setState({ value }) }}
          />
          <Button onClick={this.handleGetGarbage.bind(this, this.state.value)}>查询</Button>
          {
            listItems
          }
        </AtForm>
      </View>
    )
  }
}
