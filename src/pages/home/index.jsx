import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import './index.scss'

class Home extends Component {
  // constructor(props) {
  //   super()
  //   // console.log(props)
  // }
  componentWillMount () { 
  }

  componentDidMount () { 
    const {dispatch} = this.props
    dispatch({
      type: 'home/save',
      payload: {
        title: '修改后'
      }
    })
    dispatch({
      type: 'home/fetchData',
      payload: {}
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    console.log('home',this.props)
    return (
      <View className='index'>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

export default connect(({home}) => ({
  ...home
}))(Home)
