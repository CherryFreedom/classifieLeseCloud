import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Textarea } from '@tarojs/components'
import { AtInput, AtForm, AtSearchBar, AtList, AtListItem, AtCard } from 'taro-ui'
import { getGarbage } from '../../utils/request'

import './index.scss'

export default class Login extends Component {
  state = {
    context: {},
    value: '榴莲',
    newList: [],
    result: {},
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange(value) {
    this.setState({
      value: value,
    })
  }

  handleListItemClick(item) {
    this.setState({ result: item })
  }

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: 'lese',
        data: {},
      })
      .then(res => {
        this.setState({
          context: res.result,
        })
      })
  }

  addTodo = () => {
    const db = Taro.cloud.database()
    console.log(db)
    db.collection('lese').add({
      data: {
        description: 'learn cloud database',
        due: new Date('2018-09-01'),
        tags: ['cloud', 'database'],
        location: new db.Geo.Point(113, 23),
        done: false,
      },
    })
  }

  handleGetGarbage = value => {
    console.log(value)
    getGarbage(value).then(({ code, newslist: newList = [] }) => {
      console.log('handleGetGarbage', code, newList)
      if (code === 200) {
        this.setState({
          newList,
        })
      }
    })
  }

  render() {
    // const listItems = this.state.newList.map((item: any) => {
    //   return (
    //     <Text className="li">
    //       {item.name} {item.type}
    //     </Text>
    //   )
    // })
    const { result, value, newList } = this.state

    return (
      <View className="index">
        {/* 搜索 + 联想 */}
        <AtSearchBar
          showActionButton
          value={value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.handleGetGarbage.bind(this, value)}
        />
        <AtList>
          {newList.map((item: any, index) => (
            <AtListItem
              key={index}
              title={item.name}
              extraText={item.explain}
              arrow="right"
              onClick={this.handleListItemClick.bind(this, item)}
            />
          ))}
        </AtList>

        <AtCard
          className="result"
          note="查询结果"
          title={result.name}
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        >
          {result.explain}
        </AtCard>

        {/* <Button onClick={this.addTodo}>插入数据库</Button>
        <AtForm>
          <AtInput
            name="value1"
            title="文本"
            type="text"
            placeholder="单行文本"
            value={this.state.value}
            onChange={value => {
              this.setState({ value })
            }}
          />
          <Button onClick={this.handleGetGarbage.bind(this, this.state.value)}>查询</Button>
          {listItems}
        </AtForm> */}
      </View>
    )
  }
}
